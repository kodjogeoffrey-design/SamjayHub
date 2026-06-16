// ─── SamjayHub Admin Panel ─────────────────────
(function() {
  let products = [];
  let siteConfig = {};
  let editingId = null;

  // ─── Load Data ──────────────────────────────
  async function init() {
    try {
      const [productsRes, configRes] = await Promise.all([
        fetch('data/products.json'),
        fetch('data/config.json')
      ]);
      products = await productsRes.json();
      siteConfig = await configRes.json();
      renderTable();
      updateStats();
      populateSocialForm();
    } catch (err) {
      showToast('Error loading data. Use Import tab to load files.', true);
    }
  }

  // ─── Tabs ───────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('tab-' + this.dataset.tab).classList.add('active');
    });
  });

  // ─── Stats ──────────────────────────────────
  function updateStats() {
    document.getElementById('statTotal').textContent = products.length;
    document.getElementById('statCosmetics').textContent = products.filter(p => p.category === 'cosmetics').length;
    document.getElementById('statFashion').textContent = products.filter(p => p.category === 'fashion').length;
    document.getElementById('statRabbits').textContent = products.filter(p => p.category === 'rabbits').length;
    document.getElementById('statHomecare').textContent = products.filter(p => p.category === 'homecare').length;
    document.getElementById('statOOS').textContent = products.filter(p => p.inStock === false).length;
  }

  // ─── Product Table ──────────────────────────
  function renderTable() {
    const tbody = document.getElementById('productTable');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const catFilter = document.getElementById('filterCategory').value;

    let filtered = products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search) || (p.desc && p.desc.toLowerCase().includes(search));
      const matchCat = catFilter === 'all' || p.category === catFilter;
      return matchSearch && matchCat;
    });

    tbody.innerHTML = filtered.map(p => `
      <tr>
        <td>${p.id}</td>
        <td><strong>${p.name}</strong></td>
        <td>${capitalize(p.category)}</td>
        <td>GHS ${p.price.toFixed(2)}</td>
        <td>${p.badge ? `<span class="badge-display badge-${p.badge.replace(/\s/g,'\\')}">${p.badge}</span>` : '-'}</td>
        <td class="${p.inStock === false ? 'stock-false' : 'stock-true'}">${p.inStock === false ? 'No' : 'Yes'}</td>
        <td>
          <div class="action-btns">
            <button onclick="editProduct(${p.id})" title="Edit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="del" onclick="deleteProduct(${p.id})" title="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // ─── Capitalize ─────────────────────────────
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // ─── Add / Edit Product ─────────────────────
  document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('pName').value.trim();
    const category = document.getElementById('pCategory').value;
    const price = parseFloat(document.getElementById('pPrice').value);
    const badge = document.getElementById('pBadge').value;
    const img = document.getElementById('pImg').value.trim();
    const inStock = document.getElementById('pInStock').value === 'true';
    const desc = document.getElementById('pDesc').value.trim();

    if (editingId !== null) {
      const idx = products.findIndex(p => p.id === editingId);
      if (idx !== -1) {
        products[idx] = { ...products[idx], name, category, price, badge, img, inStock, desc };
        showToast('Product updated!');
      }
      editingId = null;
      document.getElementById('editId').value = '';
      document.getElementById('saveBtn').textContent = 'Add Product';
      document.getElementById('cancelEdit').style.display = 'none';
    } else {
      const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
      products.push({ id: maxId + 1, name, category, price, badge, img, inStock, desc });
      showToast('Product added!');
    }

    renderTable();
    updateStats();
    this.reset();
  });

  // ─── Cancel Edit ────────────────────────────
  document.getElementById('cancelEdit').addEventListener('click', function() {
    editingId = null;
    document.getElementById('editId').value = '';
    document.getElementById('saveBtn').textContent = 'Add Product';
    this.style.display = 'none';
    document.getElementById('productForm').reset();
  });

  // ─── Edit Product (global) ──────────────────
  window.editProduct = function(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    editingId = id;
    document.getElementById('editId').value = id;
    document.getElementById('pName').value = p.name;
    document.getElementById('pCategory').value = p.category;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pBadge').value = p.badge || '';
    document.getElementById('pImg').value = p.img || '';
    document.getElementById('pInStock').value = p.inStock === false ? 'false' : 'true';
    document.getElementById('pDesc').value = p.desc || '';
    document.getElementById('saveBtn').textContent = 'Update Product';
    document.getElementById('cancelEdit').style.display = 'inline-flex';
    document.getElementById('productForm').scrollIntoView({ behavior: 'smooth' });
  };

  // ─── Delete Product (global) ────────────────
  window.deleteProduct = function(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    if (!confirm(`Delete "${p.name}"?`)) return;
    products = products.filter(x => x.id !== id);
    renderTable();
    updateStats();
    showToast('Product deleted.');
  };

  // ─── Search & Filter ────────────────────────
  document.getElementById('searchInput').addEventListener('input', renderTable);
  document.getElementById('filterCategory').addEventListener('change', renderTable);

  // ─── Download JSON ──────────────────────────
  function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  document.getElementById('downloadProducts').addEventListener('click', function() {
    downloadJSON(products, 'products.json');
    showToast('products.json downloaded! Upload to your hosting.');
  });

  document.getElementById('downloadConfig').addEventListener('click', function() {
    downloadJSON(siteConfig, 'config.json');
    showToast('config.json downloaded! Upload to your hosting.');
  });

  // ─── Social Media Form ──────────────────────
  function populateSocialForm() {
    if (!siteConfig.socialMedia) return;
    const sm = siteConfig.socialMedia;
    document.getElementById('sWhatsapp').value = siteConfig.whatsapp?.number || '';
    document.getElementById('sWhatsappDisplay').value = siteConfig.whatsapp?.displayNumber || '';
    document.getElementById('sTiktok').value = sm.tiktok?.handle || '';
    document.getElementById('sInstagram').value = sm.instagram?.handle || '';
    document.getElementById('sFacebook').value = sm.facebook?.handle || '';
    document.getElementById('sHours').value = siteConfig.businessHours || '';
    document.getElementById('sLocation').value = siteConfig.location || '';
  }

  document.getElementById('socialForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tiktokHandle = document.getElementById('sTiktok').value.trim();
    const instagramHandle = document.getElementById('sInstagram').value.trim();
    const facebookHandle = document.getElementById('sFacebook').value.trim();
    const whatsappNum = document.getElementById('sWhatsapp').value.trim();
    const whatsappDisplay = document.getElementById('sWhatsappDisplay').value.trim();

    siteConfig.whatsapp = {
      number: whatsappNum,
      displayNumber: whatsappDisplay
    };
    siteConfig.socialMedia = {
      tiktok: { handle: tiktokHandle, url: tiktokHandle ? `https://tiktok.com/${tiktokHandle}` : '' },
      instagram: { handle: instagramHandle, url: instagramHandle ? `https://instagram.com/${instagramHandle.replace('@','')}` : '' },
      facebook: { handle: facebookHandle, url: facebookHandle ? `https://facebook.com/${facebookHandle}` : '' },
      whatsapp: { url: whatsappNum ? `https://wa.me/${whatsappNum}` : '' }
    };
    siteConfig.businessHours = document.getElementById('sHours').value.trim();
    siteConfig.location = document.getElementById('sLocation').value.trim();

    showToast('Social media settings saved! Download config.json to upload.');
  });

  // ─── Import JSON ────────────────────────────
  const importArea = document.getElementById('importArea');
  const fileInput = document.getElementById('fileInput');
  const importStatus = document.getElementById('importStatus');

  importArea.addEventListener('click', () => fileInput.click());

  importArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('dragover');
  });
  importArea.addEventListener('dragleave', function() {
    this.classList.remove('dragover');
  });
  importArea.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', function() {
    handleFiles(this.files);
  });

  function handleFiles(files) {
    for (const file of files) {
      if (!file.name.endsWith('.json')) {
        importStatus.innerHTML = '<span style="color:#c62828;">Only .json files supported.</span>';
        continue;
      }
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const data = JSON.parse(e.target.result);
          if (Array.isArray(data)) {
            products = data;
            renderTable();
            updateStats();
            importStatus.innerHTML = `<span style="color:#2E7D32;">Loaded ${data.length} products from ${file.name}</span>`;
            showToast(`${data.length} products loaded!`);
          } else if (data.whatsapp || data.socialMedia || data.categories) {
            siteConfig = data;
            populateSocialForm();
            importStatus.innerHTML = `<span style="color:#2E7D32;">Config loaded from ${file.name}</span>`;
            showToast('Config loaded!');
          } else {
            importStatus.innerHTML = '<span style="color:#c62828;">Unrecognized JSON format.</span>';
          }
        } catch (err) {
          importStatus.innerHTML = `<span style="color:#c62828;">Invalid JSON: ${err.message}</span>`;
        }
      };
      reader.readAsText(file);
    }
  }

  // ─── Toast ──────────────────────────────────
  function showToast(msg, isError) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.background = isError ? '#c62828' : '#2E7D32';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // ─── Init ───────────────────────────────────
  init();
})();
