const translations = {
  en: {
    brandTitle: "Hobby Monitor",
    brandSubtitle: "Global buyer outreach pipeline",
    navDashboard: "Dashboard",
    navHistory: "History",
    navSources: "Sources",
    filtersTitle: "Filters",
    languageLabel: "Language",
    regionLabel: "Region",
    allRegions: "All regions",
    typeLabel: "Product type",
    allProducts: "All products",
    gunplaOption: "Gunpla / Gundam model kits",
    figureOption: "Anime figures",
    statusLabel: "Stock status",
    allStatus: "All status",
    critical: "Critical",
    low: "Low stock",
    healthy: "Healthy",
    searchLabel: "Search",
    searchPlaceholder: "Store, SKU, product",
    sortLabel: "Sort by",
    sortRisk: "Restock risk",
    sortLow: "Lowest stock first",
    sortHigh: "Highest stock first",
    sortRegion: "Region",
    eyebrow: "Live inventory dashboard",
    pageTitle: "Gunpla and anime figure stock tracker",
    refresh: "Refresh",
    liveOn: "Live On",
    liveOff: "Live Off",
    exportCsv: "Export CSV",
    heroTitle: "Monitor stock by region, store, and product category.",
    heroText: "Built for finding overseas shops that may buy Japan-sourced Gunpla, Gundam model kits, anime figures, and collectible goods.",
    tileGunplaSub: "Gundam kits",
    tileFigureSub: "Collectibles",
    tileFigureTitle: "Figures",
    metricSku: "Total monitored SKUs",
    metricUnits: "Total stock units",
    metricAlerts: "Low or critical SKUs",
    metricUpdate: "Last update",
    metricReorder: "Recommended reorder units",
    inventoryTitle: "Current Inventory",
    inventoryText: "Auto-refresh records every stock snapshot to local history.",
    thRegion: "Region",
    thStore: "Store / Source",
    thStoreShort: "Store",
    thProduct: "Product",
    thType: "Type",
    thStock: "Stock",
    thChange: "Change",
    thStatus: "Status",
    thReorder: "Reorder point",
    thUpdated: "Updated",
    thReliability: "Reliability",
    thTime: "Time",
    reorderTitle: "Restock Queue",
    reorderText: "Prioritized from lowest stock, product type, reliability, and reorder point.",
    historyTitle: "Stock History",
    historyText: "Latest stock snapshots saved in this browser.",
    sourcesTitle: "Monitoring Sources",
    sourcesText: "Use official APIs, permitted scraping, OpenClaw runs, or manual CSV uploads for accurate stock.",
    target: "target",
    noUrgentTitle: "No urgent restock items",
    noUrgentText: "All visible SKUs are above their reorder point.",
    stock: "Stock",
    order: "Order",
    trend: "Trend",
    urgent: "urgent",
    watch: "watch",
    leadTime: "Lead time",
    days: "days",
    reorderPoint: "Reorder point",
    targetStock: "target stock",
    sourceLabels: {
      api: ["Official store APIs", "Best accuracy", "Use this when a retailer provides a product feed, inventory endpoint, or partner API."],
      claw: ["OpenClaw scheduled runs", "Lead discovery", "Run monitored searches for store pages, marketplace listings, and public stock pages by region."],
      market: ["Marketplace pages", "High coverage", "Shopee and Lazada sellers can be tracked by listing count, available quantity, and seller region when allowed."],
      csv: ["Manual CSV upload", "Reliable backup", "Useful when stock is collected from sales teams, events, or store visits."],
      alert: ["Low-stock alerts", "Sales action", "Flag SKUs below 15 units and critical SKUs below 8 units for restock or outreach."],
      history: ["History snapshots", "Trend analysis", "Each refresh creates a stock record so fast-moving products and regions become visible."],
    },
  },
  ja: {
    brandTitle: "ホビーモニター",
    brandSubtitle: "フィリピン在庫ウォッチ",
    navDashboard: "ダッシュボード",
    navHistory: "履歴",
    navSources: "データ元",
    filtersTitle: "絞り込み",
    languageLabel: "言語",
    regionLabel: "地域",
    allRegions: "すべての地域",
    typeLabel: "商品タイプ",
    allProducts: "すべての商品",
    gunplaOption: "ガンプラ / ガンダム模型",
    figureOption: "アニメフィギュア",
    statusLabel: "在庫状況",
    allStatus: "すべての状態",
    critical: "至急",
    low: "在庫少",
    healthy: "十分",
    searchLabel: "検索",
    searchPlaceholder: "店舗、SKU、商品名",
    sortLabel: "並び替え",
    sortRisk: "補充リスク",
    sortLow: "在庫が少ない順",
    sortHigh: "在庫が多い順",
    sortRegion: "地域",
    eyebrow: "リアルタイム在庫ダッシュボード",
    pageTitle: "ガンプラとアニメフィギュアの在庫トラッカー",
    refresh: "更新",
    liveOn: "ライブ中",
    liveOff: "停止中",
    exportCsv: "CSV出力",
    heroTitle: "地域、店舗、商品カテゴリごとに在庫を確認。",
    heroText: "フィリピン市場でガンプラとコレクタブル需要を追う小売店、オンライン販売者、輸入チーム向けです。",
    tileGunplaSub: "ガンダム模型",
    tileFigureSub: "コレクション",
    tileFigureTitle: "フィギュア",
    metricSku: "監視中のSKU",
    metricUnits: "総在庫数",
    metricAlerts: "少数または至急SKU",
    metricUpdate: "最終更新",
    metricReorder: "推奨補充数",
    inventoryTitle: "現在の在庫",
    inventoryText: "在庫スナップショットはブラウザ内の履歴に自動保存されます。",
    thRegion: "地域",
    thStore: "店舗 / 情報元",
    thStoreShort: "店舗",
    thProduct: "商品",
    thType: "タイプ",
    thStock: "在庫",
    thChange: "変動",
    thStatus: "状態",
    thReorder: "補充ライン",
    thUpdated: "更新",
    thReliability: "信頼度",
    thTime: "時間",
    reorderTitle: "補充キュー",
    reorderText: "在庫数、商品タイプ、信頼度、補充ラインから優先度を計算します。",
    historyTitle: "在庫履歴",
    historyText: "最新の在庫スナップショットをこのブラウザに保存します。",
    sourcesTitle: "監視データ元",
    sourcesText: "公式API、許可された取得、OpenClaw実行、手動CSVで正確な在庫を管理します。",
    target: "目標",
    noUrgentTitle: "急ぎの補充はありません",
    noUrgentText: "表示中のSKUはすべて補充ラインを上回っています。",
    stock: "在庫",
    order: "発注",
    trend: "変動",
    urgent: "至急",
    watch: "注意",
    leadTime: "リードタイム",
    days: "日",
    reorderPoint: "補充ライン",
    targetStock: "目標在庫",
    sourceLabels: {
      api: ["公式ストアAPI", "精度が高い", "商品フィード、在庫エンドポイント、パートナーAPIがある小売店に最適です。"],
      claw: ["OpenClaw定期実行", "リード発見", "店舗ページ、マーケットプレイス、公開在庫ページを地域別に監視します。"],
      market: ["マーケットプレイス", "広いカバー率", "許可される範囲でShopeeやLazadaの出品数、数量、販売地域を追跡します。"],
      csv: ["手動CSVアップロード", "確実な予備手段", "営業チーム、イベント、店舗訪問で収集した在庫に便利です。"],
      alert: ["低在庫アラート", "営業アクション", "15個未満、8個以下のSKUを補充や営業連絡の対象として表示します。"],
      history: ["履歴スナップショット", "トレンド分析", "更新ごとに記録を作り、動きの速い商品と地域を可視化します。"],
    },
  },
  fil: {
    brandTitle: "Hobby Monitor",
    brandSubtitle: "Bantay-stock sa Pilipinas",
    navDashboard: "Dashboard",
    navHistory: "Kasaysayan",
    navSources: "Pinagmulan",
    filtersTitle: "Mga filter",
    languageLabel: "Wika",
    regionLabel: "Rehiyon",
    allRegions: "Lahat ng rehiyon",
    typeLabel: "Uri ng produkto",
    allProducts: "Lahat ng produkto",
    gunplaOption: "Gunpla / Gundam model kits",
    figureOption: "Anime figures",
    statusLabel: "Kalagayan ng stock",
    allStatus: "Lahat ng status",
    critical: "Kritikal",
    low: "Mababa ang stock",
    healthy: "Sapat",
    searchLabel: "Hanapin",
    searchPlaceholder: "Tindahan, SKU, produkto",
    sortLabel: "Ayusin ayon sa",
    sortRisk: "Panganib sa restock",
    sortLow: "Pinakamababang stock muna",
    sortHigh: "Pinakamataas na stock muna",
    sortRegion: "Rehiyon",
    eyebrow: "Live inventory dashboard",
    pageTitle: "Stock tracker para sa Gunpla at anime figures",
    refresh: "I-refresh",
    liveOn: "Live On",
    liveOff: "Live Off",
    exportCsv: "I-export CSV",
    heroTitle: "Subaybayan ang stock ayon sa rehiyon, tindahan, at kategorya.",
    heroText: "Ginawa para sa hobby retailers, online sellers, at import teams na sumusubaybay sa demand ng Gunpla at collectibles sa Pilipinas.",
    tileGunplaSub: "Gundam kits",
    tileFigureSub: "Collectibles",
    tileFigureTitle: "Figures",
    metricSku: "Kabuuang SKU na binabantayan",
    metricUnits: "Kabuuang stock units",
    metricAlerts: "Mababa o kritikal na SKU",
    metricUpdate: "Huling update",
    metricReorder: "Inirerekomendang reorder units",
    inventoryTitle: "Kasalukuyang imbentaryo",
    inventoryText: "Awtomatikong sine-save ang bawat stock snapshot sa local history.",
    thRegion: "Rehiyon",
    thStore: "Tindahan / Source",
    thStoreShort: "Tindahan",
    thProduct: "Produkto",
    thType: "Uri",
    thStock: "Stock",
    thChange: "Pagbabago",
    thStatus: "Status",
    thReorder: "Reorder point",
    thUpdated: "Na-update",
    thReliability: "Reliability",
    thTime: "Oras",
    reorderTitle: "Restock Queue",
    reorderText: "Inuuna batay sa mababang stock, uri ng produkto, reliability, at reorder point.",
    historyTitle: "Kasaysayan ng stock",
    historyText: "Mga pinakabagong stock snapshot na naka-save sa browser na ito.",
    sourcesTitle: "Monitoring Sources",
    sourcesText: "Gumamit ng official APIs, pinapayagang scraping, OpenClaw runs, o manual CSV uploads para sa mas accurate na stock.",
    target: "target",
    noUrgentTitle: "Walang urgent na restock",
    noUrgentText: "Lahat ng nakikitang SKU ay lampas sa reorder point.",
    stock: "Stock",
    order: "Order",
    trend: "Trend",
    urgent: "urgent",
    watch: "watch",
    leadTime: "Lead time",
    days: "araw",
    reorderPoint: "Reorder point",
    targetStock: "target stock",
    sourceLabels: {
      api: ["Official store APIs", "Pinaka-accurate", "Gamitin kapag may product feed, inventory endpoint, o partner API ang retailer."],
      claw: ["OpenClaw scheduled runs", "Lead discovery", "Magpatakbo ng monitored searches para sa store pages, marketplace listings, at public stock pages ayon sa rehiyon."],
      market: ["Marketplace pages", "Malawak ang coverage", "Maaaring subaybayan ang Shopee at Lazada sellers batay sa listings, available quantity, at seller region kung pinapayagan."],
      csv: ["Manual CSV upload", "Maaasahang backup", "Kapaki-pakinabang kapag galing sa sales team, events, o store visits ang stock data."],
      alert: ["Low-stock alerts", "Sales action", "I-flag ang SKU na mas mababa sa 15 units at critical SKU na 8 pababa para sa restock o outreach."],
      history: ["History snapshots", "Trend analysis", "Bawat refresh ay gumagawa ng stock record para makita ang mabilis gumalaw na produkto at rehiyon."],
    },
  },
};

const inventory = [
  { sku: "GUN-001", region: "Metro Manila", store: "Hobby Korner", product: "RX-78-2 Gundam Entry Grade", type: "Gunpla", stock: 42, previousStock: 39, reorderPoint: 18, targetStock: 60, leadDays: 7, reliability: "High", source: "Store / API target" },
  { sku: "GUN-002", region: "Metro Manila", store: "HobbyMNL", product: "HG Aerial Gundam", type: "Gunpla", stock: 18, previousStock: 23, reorderPoint: 20, targetStock: 55, leadDays: 6, reliability: "High", source: "Online shop" },
  { sku: "GUN-003", region: "Metro Manila", store: "Greenhills hobby sellers", product: "MG Freedom Gundam 2.0", type: "Gunpla", stock: 9, previousStock: 14, reorderPoint: 16, targetStock: 42, leadDays: 10, reliability: "Medium", source: "Marketplace check" },
  { sku: "GUN-004", region: "Nationwide Online", store: "Shopee Philippines sellers", product: "HG Barbatos Lupus Rex", type: "Gunpla", stock: 67, previousStock: 64, reorderPoint: 24, targetStock: 80, leadDays: 5, reliability: "Medium", source: "Marketplace listings" },
  { sku: "GUN-005", region: "Nationwide Online", store: "Lazada Philippines sellers", product: "RG Hi-Nu Gundam", type: "Gunpla", stock: 12, previousStock: 19, reorderPoint: 22, targetStock: 65, leadDays: 5, reliability: "Medium", source: "Marketplace listings" },
  { sku: "GUN-006", region: "Cebu / Visayas", store: "Local anime and hobby shops in Cebu", product: "HG Witch from Mercury kits", type: "Gunpla", stock: 7, previousStock: 8, reorderPoint: 14, targetStock: 36, leadDays: 12, reliability: "Needs verification", source: "OpenClaw lead list" },
  { sku: "FIG-001", region: "Metro Manila", store: "Great Toys Online", product: "Demon Slayer figure assortment", type: "Figure", stock: 35, previousStock: 32, reorderPoint: 18, targetStock: 48, leadDays: 8, reliability: "High", source: "Online shop" },
  { sku: "FIG-002", region: "Metro Manila", store: "Comic Odyssey", product: "One Piece collectible figures", type: "Figure", stock: 21, previousStock: 26, reorderPoint: 18, targetStock: 45, leadDays: 8, reliability: "Medium", source: "Retail source" },
  { sku: "FIG-003", region: "Metro Manila", store: "Filbar's", product: "Anime prize figure assortment", type: "Figure", stock: 14, previousStock: 16, reorderPoint: 15, targetStock: 40, leadDays: 9, reliability: "Medium", source: "Retail source" },
  { sku: "FIG-004", region: "Luzon", store: "Toy Kingdom", product: "Anime character figures", type: "Figure", stock: 53, previousStock: 51, reorderPoint: 24, targetStock: 70, leadDays: 10, reliability: "Medium", source: "Large retailer" },
  { sku: "FIG-005", region: "Luzon", store: "Toys R Us Philippines", product: "Collectible figure assortment", type: "Figure", stock: 26, previousStock: 22, reorderPoint: 20, targetStock: 56, leadDays: 10, reliability: "Medium", source: "Large retailer" },
  { sku: "FIG-006", region: "Event-Based", store: "Cosplay Mania vendors", product: "Convention figure inventory", type: "Figure", stock: 11, previousStock: 17, reorderPoint: 18, targetStock: 50, leadDays: 14, reliability: "Needs verification", source: "Event vendors" },
  { sku: "MIX-001", region: "Davao / Mindanao", store: "Local hobby and collectible shops in Davao", product: "Gunpla and figure mixed stock", type: "Gunpla", stock: 6, previousStock: 9, reorderPoint: 12, targetStock: 32, leadDays: 14, reliability: "Needs verification", source: "Regional lead list" },
  { sku: "MIX-002", region: "Event-Based", store: "Ozine Fest vendors", product: "Gunpla and anime goods", type: "Figure", stock: 19, previousStock: 18, reorderPoint: 16, targetStock: 44, leadDays: 14, reliability: "Needs verification", source: "Event vendors" },
];

const sourceKeys = ["api", "claw", "market", "csv", "alert", "history"];
let language = localStorage.getItem("hobby-monitor-language") || "en";
let live = true;
let timer = null;
let lastUpdate = new Date();

const els = {
  skuCount: document.querySelector("#skuCount"),
  unitCount: document.querySelector("#unitCount"),
  alertCount: document.querySelector("#alertCount"),
  reorderUnits: document.querySelector("#reorderUnits"),
  lastUpdate: document.querySelector("#lastUpdate"),
  inventoryBody: document.querySelector("#inventoryBody"),
  historyBody: document.querySelector("#historyBody"),
  sourceGrid: document.querySelector("#sourceGrid"),
  reorderGrid: document.querySelector("#reorderGrid"),
  languageSelect: document.querySelector("#languageSelect"),
  regionFilter: document.querySelector("#regionFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  refreshBtn: document.querySelector("#refreshBtn"),
  toggleLiveBtn: document.querySelector("#toggleLiveBtn"),
  exportBtn: document.querySelector("#exportBtn"),
};

function t(key) {
  return translations[language][key] || translations.en[key] || key;
}

function statusFor(stock) {
  if (stock <= 8) return "critical";
  if (stock <= 15) return "low";
  return "healthy";
}

function translatedStatus(status) {
  return t(status);
}

function translatedType(type) {
  return type === "Gunpla" ? t("gunplaOption") : t("figureOption");
}

function formatTime(date) {
  return new Intl.DateTimeFormat(language === "ja" ? "ja-JP" : language === "fil" ? "fil-PH" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function getHistory() {
  return JSON.parse(localStorage.getItem("hobby-stock-history") || "[]");
}

function setHistory(history) {
  localStorage.setItem("hobby-stock-history", JSON.stringify(history.slice(-500)));
}

function reorderAmount(item) {
  return Math.max(0, item.targetStock - item.stock);
}

function riskScore(item) {
  const statusWeight = { critical: 100, low: 60, healthy: 0 }[statusFor(item.stock)];
  const belowPoint = Math.max(0, item.reorderPoint - item.stock) * 2;
  const reliabilityPenalty = item.reliability === "Needs verification" ? 8 : item.reliability === "Medium" ? 4 : 0;
  return statusWeight + belowPoint + reliabilityPenalty;
}

function trendFor(item) {
  const delta = item.stock - item.previousStock;
  if (delta > 0) return { label: `+${delta}`, cls: "up" };
  if (delta < 0) return { label: String(delta), cls: "down" };
  return { label: "0", cls: "flat" };
}

function recordSnapshot() {
  const now = new Date();
  const records = inventory.map((item) => ({
    time: now.toISOString(),
    sku: item.sku,
    store: item.store,
    region: item.region,
    type: item.type,
    stock: item.stock,
    status: statusFor(item.stock),
  }));
  setHistory([...getHistory(), ...records]);
}

function simulateStockUpdate() {
  inventory.forEach((item) => {
    item.previousStock = item.stock;
    const movement = Math.floor(Math.random() * 7) - 3;
    const demandBias = item.type === "Gunpla" ? -1 : 0;
    item.stock = Math.max(0, item.stock + movement + demandBias);
  });
  lastUpdate = new Date();
  recordSnapshot();
  render();
}

function filteredInventory() {
  const region = els.regionFilter.value;
  const type = els.typeFilter.value;
  const status = els.statusFilter.value;
  const query = els.searchInput.value.trim().toLowerCase();
  const sort = els.sortSelect.value;
  const filtered = inventory.filter((item) => {
    const regionOk = region === "all" || item.region === region;
    const typeOk = type === "all" || item.type === type;
    const statusOk = status === "all" || statusFor(item.stock) === status;
    const haystack = `${item.sku} ${item.store} ${item.product} ${item.region} ${item.type}`.toLowerCase();
    const searchOk = !query || haystack.includes(query);
    return regionOk && typeOk && statusOk && searchOk;
  });
  return filtered.sort((a, b) => {
    if (sort === "stock-asc") return a.stock - b.stock;
    if (sort === "stock-desc") return b.stock - a.stock;
    if (sort === "region") return a.region.localeCompare(b.region) || a.store.localeCompare(b.store);
    return riskScore(b) - riskScore(a);
  });
}

function applyLanguage() {
  document.documentElement.lang = language === "ja" ? "ja" : language === "fil" ? "fil" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  els.languageSelect.value = language;
  setLive(live);
}

function renderMetrics(items) {
  els.skuCount.textContent = items.length;
  els.unitCount.textContent = items.reduce((sum, item) => sum + item.stock, 0);
  els.alertCount.textContent = items.filter((item) => statusFor(item.stock) !== "healthy").length;
  els.reorderUnits.textContent = items.reduce((sum, item) => sum + reorderAmount(item), 0);
  els.lastUpdate.textContent = formatTime(lastUpdate);
}

function renderInventory() {
  const items = filteredInventory();
  els.inventoryBody.innerHTML = items
    .map((item) => {
      const status = statusFor(item.stock);
      const pct = Math.min(100, Math.round((item.stock / 70) * 100));
      const trend = trendFor(item);
      return `
        <tr>
          <td>${item.region}</td>
          <td><strong>${item.store}</strong><br><span class="muted">${item.source}</span></td>
          <td>${item.product}<br><span class="muted">${item.sku}</span></td>
          <td>${translatedType(item.type)}</td>
          <td>
            <div class="stock-cell">
              <strong>${item.stock}</strong>
              <div class="stock-bar"><span style="width:${pct}%"></span></div>
            </div>
          </td>
          <td><span class="trend ${trend.cls}">${trend.label}</span></td>
          <td><span class="badge ${status}">${translatedStatus(status)}</span></td>
          <td>${item.reorderPoint}<br><span class="muted">${t("target")} ${item.targetStock}</span></td>
          <td>${formatTime(lastUpdate)}</td>
          <td>${item.reliability}</td>
        </tr>
      `;
    })
    .join("");
  renderMetrics(items);
  renderReorderQueue(items);
}

function renderHistory() {
  const history = getHistory().slice(-80).reverse();
  els.historyBody.innerHTML = history
    .map(
      (record) => `
        <tr>
          <td>${formatTime(new Date(record.time))}</td>
          <td>${record.sku}</td>
          <td>${record.store}</td>
          <td>${record.region}</td>
          <td>${translatedType(record.type)}</td>
          <td>${record.stock}</td>
          <td><span class="badge ${record.status}">${translatedStatus(record.status)}</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderSources() {
  els.sourceGrid.innerHTML = sourceKeys
    .map((key) => {
      const [name, fit, note] = translations[language].sourceLabels[key];
      return `
        <article class="source">
          <h4>${name}</h4>
          <p>${note}</p>
          <strong>${fit}</strong>
        </article>
      `;
    })
    .join("");
}

function renderReorderQueue(items) {
  const queue = items
    .filter((item) => item.stock <= item.reorderPoint)
    .sort((a, b) => riskScore(b) - riskScore(a))
    .slice(0, 6);
  if (!queue.length) {
    els.reorderGrid.innerHTML = `<article class="reorder-card"><h4>${t("noUrgentTitle")}</h4><p class="muted">${t("noUrgentText")}</p></article>`;
    return;
  }
  els.reorderGrid.innerHTML = queue
    .map((item) => {
      const status = statusFor(item.stock);
      const priority = status === "critical" ? "urgent" : "watch";
      const trend = trendFor(item);
      return `
        <article class="reorder-card ${priority}">
          <div class="reorder-top">
            <div>
              <h4>${item.product}</h4>
              <p class="muted">${item.store} / ${item.region}</p>
            </div>
            <span class="priority ${priority}">${t(priority)}</span>
          </div>
          <div class="reorder-meta">
            <div><span>${t("stock")}</span><strong>${item.stock}</strong></div>
            <div><span>${t("order")}</span><strong>${reorderAmount(item)}</strong></div>
            <div><span>${t("trend")}</span><strong class="${trend.cls}">${trend.label}</strong></div>
          </div>
          <p class="muted">${t("leadTime")} ${item.leadDays} ${t("days")}. ${t("reorderPoint")} ${item.reorderPoint}, ${t("targetStock")} ${item.targetStock}.</p>
        </article>
      `;
    })
    .join("");
}

function populateFilters() {
  const regions = [...new Set(inventory.map((item) => item.region))].sort();
  regions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    els.regionFilter.appendChild(option);
  });
}

function render() {
  applyLanguage();
  renderInventory();
  renderHistory();
  renderSources();
}

function exportCsv() {
  const history = getHistory();
  const header = ["time", "sku", "store", "region", "type", "stock", "status"];
  const rows = history.map((record) => header.map((key) => `"${String(record[key]).replaceAll('"', '""')}"`).join(","));
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hobby-stock-history.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function setLive(next) {
  live = next;
  els.toggleLiveBtn.textContent = live ? t("liveOn") : t("liveOff");
  if (timer) clearInterval(timer);
  if (live) timer = setInterval(simulateStockUpdate, 5000);
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.view}View`).classList.add("active");
  });
});

els.languageSelect.addEventListener("change", () => {
  language = els.languageSelect.value;
  localStorage.setItem("hobby-monitor-language", language);
  render();
});

[els.regionFilter, els.typeFilter, els.statusFilter, els.searchInput, els.sortSelect].forEach((select) => {
  select.addEventListener("change", renderInventory);
  select.addEventListener("input", renderInventory);
});

els.refreshBtn.addEventListener("click", simulateStockUpdate);
els.toggleLiveBtn.addEventListener("click", () => setLive(!live));
els.exportBtn.addEventListener("click", exportCsv);

populateFilters();
recordSnapshot();
render();
setLive(true);
