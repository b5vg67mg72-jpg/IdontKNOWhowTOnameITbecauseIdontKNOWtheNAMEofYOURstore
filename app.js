const copy = {
  brandTitle: "Japan Gacha Export",
  brandSubtitle: "Global shop outreach pipeline",
  navDashboard: "Buyer Pipeline",
  navHistory: "Contact Log",
  navSources: "Action Plan",
  filtersTitle: "Target Filters",
  regionLabel: "Market",
  allRegions: "All markets",
  typeLabel: "Buyer type",
  allProducts: "All buyers",
  retailOption: "Anime and hobby shops",
  arcadeOption: "Arcades and game centers",
  distributorOption: "Import distributors",
  statusLabel: "Lead status",
  allStatus: "All status",
  critical: "Contact first",
  low: "Qualified",
  healthy: "Research",
  searchLabel: "Search",
  searchPlaceholder: "Country, shop type, contact path, offer",
  sortLabel: "Sort by",
  sortRisk: "Best opportunity",
  sortLow: "Lowest score first",
  sortHigh: "Highest score first",
  sortRegion: "Market",
  eyebrow: "Japan-based global gacha sales plan",
  pageTitle: "Find shop owners, pitch Japanese gacha, and build overseas buyers",
  refresh: "Simulate Update",
  liveOn: "Pipeline On",
  liveOff: "Pipeline Off",
  exportCsv: "Export Leads CSV",
  heroTitle: "You are in Japan. Your advantage is access, speed, and authenticity.",
  heroText: "Use this page as a practical pipeline: choose overseas markets, contact shop owners, offer test lots, prove sell-through, and grow into repeat wholesale orders.",
  tileGunplaSub: "First message goal",
  tileMachineTitle: "Owner Reply",
  tileFigureSub: "Best starter offer",
  tileFigureTitle: "Test Lot",
  metricSku: "Target buyer segments",
  metricUnits: "Total opportunity score",
  metricAlerts: "Contact-first leads",
  metricUpdate: "Last update",
  metricReorder: "Suggested sample units",
  inventoryTitle: "Global Buyer Pipeline",
  inventoryText: "Prioritized markets and shop-owner contact paths for selling Japanese gacha overseas.",
  thRegion: "Market",
  thStore: "Buyer / Contact Path",
  thProduct: "Opportunity",
  thType: "Buyer Type",
  thStock: "Score",
  thChange: "Movement",
  thStatus: "Status",
  thReorder: "Starter Offer",
  thUpdated: "Next Step",
  thReliability: "Priority",
  thTime: "Time",
  thStoreShort: "Buyer",
  reorderTitle: "Owner Contact Queue",
  reorderText: "Start with buyers who already sell anime goods, blind boxes, capsule toys, arcade prizes, or Japanese character merchandise.",
  historyTitle: "Contact Log",
  historyText: "Simulated contact snapshots are saved in this browser so you can export and reuse the lead list.",
  sourcesTitle: "What To Do From Japan",
  sourcesText: "A practical export workflow for contacting overseas shop owners and turning gacha access in Japan into repeat buyers.",
  target: "sample",
  noUrgentTitle: "No contact-first leads visible",
  noUrgentText: "Change filters or search terms to find another buyer segment.",
  stock: "Score",
  order: "Sample",
  trend: "Trend",
  urgent: "email today",
  watch: "follow up",
  leadTime: "Follow up in",
  days: "days",
  reorderPoint: "minimum",
  targetStock: "ideal test lot",
};

const buyers = [
  {
    sku: "JP-GAC-US-001",
    region: "United States / Los Angeles",
    store: "Anime stores in Little Tokyo and local mall collectible shops",
    product: "Japanese capsule toy test lots for anime fans, tourists, and blind-box buyers",
    type: "Retail",
    score: 91,
    previousScore: 84,
    starterUnits: 120,
    idealUnits: 300,
    followDays: 3,
    priority: "Very High",
    source: "Contact owner by Instagram DM, store email, and phone. Ask for the buyer or owner, not general staff.",
  },
  {
    sku: "JP-GAC-PH-001",
    region: "Philippines / Manila",
    store: "Anime hobby shops, toy stores, mall kiosks, and arcade operators",
    product: "Affordable Japan-origin capsules for malls with strong anime and figure traffic",
    type: "Retail",
    score: 88,
    previousScore: 80,
    starterUnits: 100,
    idealUnits: 240,
    followDays: 2,
    priority: "Very High",
    source: "Use Facebook page messages first, then ask for Viber, WhatsApp, or purchasing email.",
  },
  {
    sku: "JP-GAC-SG-001",
    region: "Singapore",
    store: "Japanese lifestyle retailers and premium hobby stores",
    product: "Premium gachapon series with clean packaging, fast rotation, and small footprint",
    type: "Distributor",
    score: 84,
    previousScore: 79,
    starterUnits: 160,
    idealUnits: 400,
    followDays: 4,
    priority: "High",
    source: "Find purchasing managers on LinkedIn, then send a short email with product photos and landed-cost estimate.",
  },
  {
    sku: "JP-GAC-TH-001",
    region: "Thailand / Bangkok",
    store: "Anime stores around Siam, game centers, and pop-up toy sellers",
    product: "Character straps, miniature food, and cute animal capsule assortments",
    type: "Arcade",
    score: 79,
    previousScore: 75,
    starterUnits: 120,
    idealUnits: 300,
    followDays: 4,
    priority: "High",
    source: "Use Facebook, Line contact links, and mall tenant pages. Ask who handles imported toy purchasing.",
  },
  {
    sku: "JP-GAC-TW-001",
    region: "Taiwan / Taipei",
    store: "Ximending toy retailers and capsule machine operators",
    product: "Miniature goods and Japanese character lines for high-frequency collectors",
    type: "Arcade",
    score: 76,
    previousScore: 72,
    starterUnits: 150,
    idealUnits: 360,
    followDays: 5,
    priority: "High",
    source: "Contact through Instagram, store site forms, and purchasing email. Send photos with Japanese source proof.",
  },
  {
    sku: "JP-GAC-UK-001",
    region: "United Kingdom / London",
    store: "Anime, manga, and Asian pop-culture stores",
    product: "Japan-exclusive capsules positioned as limited drops for collectors",
    type: "Retail",
    score: 72,
    previousScore: 68,
    starterUnits: 96,
    idealUnits: 240,
    followDays: 5,
    priority: "Medium",
    source: "Use shop email plus Instagram. Mention small carton test order to reduce import risk.",
  },
  {
    sku: "JP-GAC-FR-001",
    region: "France / Paris",
    store: "Manga shops, Japan culture stores, and convention sellers",
    product: "Capsule assortments for Japan Expo-style demand and manga collectors",
    type: "Retail",
    score: 69,
    previousScore: 62,
    starterUnits: 96,
    idealUnits: 240,
    followDays: 5,
    priority: "Medium",
    source: "Find owner email on website legal/contact page. Follow up in English with clear photos and HS code notes.",
  },
  {
    sku: "JP-GAC-AU-001",
    region: "Australia / Sydney",
    store: "Anime retailers, claw-machine arcades, and Japanese goods stores",
    product: "Premium capsules and cute miniature sets for mall and convention buyers",
    type: "Arcade",
    score: 66,
    previousScore: 64,
    starterUnits: 120,
    idealUnits: 300,
    followDays: 6,
    priority: "Medium",
    source: "Use website forms and Instagram. Ask whether they import direct or through a distributor.",
  },
  {
    sku: "JP-GAC-DE-001",
    region: "Germany / Berlin",
    store: "Anime merchandise retailers and Asian specialty stores",
    product: "Lower-risk mixed capsule cartons for stores testing blind-box demand",
    type: "Distributor",
    score: 61,
    previousScore: 58,
    starterUnits: 96,
    idealUnits: 240,
    followDays: 7,
    priority: "Research",
    source: "Contact import distributors first. Ask about compliance labeling and preferred delivery terms.",
  },
  {
    sku: "JP-GAC-CA-001",
    region: "Canada / Toronto",
    store: "Asian mall collectible stores and anime gift shops",
    product: "Small Japan-origin capsule assortments for mall display testing",
    type: "Retail",
    score: 59,
    previousScore: 55,
    starterUnits: 80,
    idealUnits: 200,
    followDays: 7,
    priority: "Research",
    source: "Use Instagram and store email. Ask if they buy wholesale imports or consignment items.",
  },
];

const playbook = [
  {
    title: "1. Build a buyer list",
    fit: "Daily task",
    note: "Search each market for anime store, hobby shop, manga shop, arcade, claw machine, gachapon, blind box, Japanese goods, and convention vendor. Save owner name, Instagram, email, phone, country, and what they already sell.",
  },
  {
    title: "2. Contact the shop owner",
    fit: "Best channels",
    note: "Use Instagram DM first when the shop is active, then email. For the first message, ask for the owner or buyer: 'Hi, I am based in Japan and can supply authentic Japanese gacha capsule toy lots. Who handles imported toy purchasing for your shop?'",
  },
  {
    title: "3. Send a simple first offer",
    fit: "Low risk",
    note: "Offer a small test lot: 80-160 capsules, 3-5 mixed series, photos before shipment, wholesale price per capsule, estimated shipping, and expected delivery time. Do not start with a huge order.",
  },
  {
    title: "4. Prove Japan-side value",
    fit: "Your advantage",
    note: "Show that you can source in Japan, check product condition, group multiple series, take real photos, prepare invoices, and ship quickly. Overseas shops care about reliability more than fancy wording.",
  },
  {
    title: "5. Prepare export basics",
    fit: "Before payment",
    note: "Prepare invoice, packing list, product photos, carton weight, carton dimensions, country of origin, and HS code estimate. Confirm whether the buyer wants DHL, EMS, FedEx, sea freight, or their own forwarder.",
  },
  {
    title: "6. Follow up properly",
    fit: "Sales rhythm",
    note: "Follow up after 2-5 days with photos of current Japan stock. If they do not reply, send one more short message after a week. Track every reply, price objection, requested character series, and market demand.",
  },
];

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
  return copy[key] || key;
}

function statusFor(score) {
  if (score >= 82) return "critical";
  if (score >= 66) return "low";
  return "healthy";
}

function statusLabel(status) {
  return t(status);
}

function typeLabel(type) {
  if (type === "Retail") return t("retailOption");
  if (type === "Arcade") return t("arcadeOption");
  return t("distributorOption");
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function getHistory() {
  return JSON.parse(localStorage.getItem("japan-gacha-export-history") || "[]");
}

function setHistory(history) {
  localStorage.setItem("japan-gacha-export-history", JSON.stringify(history.slice(-500)));
}

function trendFor(item) {
  const delta = item.score - item.previousScore;
  if (delta > 0) return { label: `+${delta}`, cls: "up" };
  if (delta < 0) return { label: String(delta), cls: "down" };
  return { label: "0", cls: "flat" };
}

function recordSnapshot() {
  const now = new Date();
  const records = buyers.map((item) => ({
    time: now.toISOString(),
    sku: item.sku,
    store: item.store,
    region: item.region,
    type: item.type,
    stock: item.score,
    status: statusFor(item.score),
  }));
  setHistory([...getHistory(), ...records]);
}

function simulateUpdate() {
  buyers.forEach((item) => {
    item.previousScore = item.score;
    const movement = Math.floor(Math.random() * 7) - 2;
    const highIntent = item.priority === "Very High" ? 1 : 0;
    item.score = Math.max(35, Math.min(99, item.score + movement + highIntent));
  });
  lastUpdate = new Date();
  recordSnapshot();
  render();
}

function filteredBuyers() {
  const region = els.regionFilter.value;
  const type = els.typeFilter.value;
  const status = els.statusFilter.value;
  const query = els.searchInput.value.trim().toLowerCase();
  const sort = els.sortSelect.value;
  const filtered = buyers.filter((item) => {
    const regionOk = region === "all" || item.region === region;
    const typeOk = type === "all" || item.type === type;
    const statusOk = status === "all" || statusFor(item.score) === status;
    const haystack = `${item.sku} ${item.store} ${item.product} ${item.region} ${item.type} ${item.source}`.toLowerCase();
    const searchOk = !query || haystack.includes(query);
    return regionOk && typeOk && statusOk && searchOk;
  });
  return filtered.sort((a, b) => {
    if (sort === "stock-asc") return a.score - b.score;
    if (sort === "stock-desc") return b.score - a.score;
    if (sort === "region") return a.region.localeCompare(b.region) || a.store.localeCompare(b.store);
    return b.score - a.score;
  });
}

function applyCopy() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  setLive(live);
}

function renderMetrics(items) {
  els.skuCount.textContent = items.length;
  els.unitCount.textContent = items.reduce((sum, item) => sum + item.score, 0);
  els.alertCount.textContent = items.filter((item) => statusFor(item.score) === "critical").length;
  els.reorderUnits.textContent = items.reduce((sum, item) => sum + item.starterUnits, 0);
  els.lastUpdate.textContent = formatTime(lastUpdate);
}

function renderBuyers() {
  const items = filteredBuyers();
  els.inventoryBody.innerHTML = items
    .map((item) => {
      const status = statusFor(item.score);
      const trend = trendFor(item);
      return `
        <tr>
          <td>${item.region}</td>
          <td><strong>${item.store}</strong><br><span class="muted">${item.source}</span></td>
          <td>${item.product}<br><span class="muted">${item.sku}</span></td>
          <td>${typeLabel(item.type)}</td>
          <td>
            <div class="stock-cell">
              <strong>${item.score}</strong>
              <div class="stock-bar"><span style="width:${item.score}%"></span></div>
            </div>
          </td>
          <td><span class="trend ${trend.cls}">${trend.label}</span></td>
          <td><span class="badge ${status}">${statusLabel(status)}</span></td>
          <td>${item.starterUnits} capsules<br><span class="muted">${t("target")} ${item.idealUnits}</span></td>
          <td>${t("leadTime")} ${item.followDays} ${t("days")}</td>
          <td>${item.priority}</td>
        </tr>
      `;
    })
    .join("");
  renderMetrics(items);
  renderContactQueue(items);
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
          <td>${typeLabel(record.type)}</td>
          <td>${record.stock}</td>
          <td><span class="badge ${record.status}">${statusLabel(record.status)}</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderPlaybook() {
  els.sourceGrid.innerHTML = playbook
    .map(
      (step) => `
        <article class="source">
          <h4>${step.title}</h4>
          <p>${step.note}</p>
          <strong>${step.fit}</strong>
        </article>
      `,
    )
    .join("");
}

function renderContactQueue(items) {
  const queue = items
    .filter((item) => item.score >= 66)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
  if (!queue.length) {
    els.reorderGrid.innerHTML = `<article class="reorder-card"><h4>${t("noUrgentTitle")}</h4><p class="muted">${t("noUrgentText")}</p></article>`;
    return;
  }
  els.reorderGrid.innerHTML = queue
    .map((item) => {
      const status = statusFor(item.score);
      const priority = status === "critical" ? "urgent" : "watch";
      const trend = trendFor(item);
      return `
        <article class="reorder-card ${priority}">
          <div class="reorder-top">
            <div>
              <h4>${item.region}</h4>
              <p class="muted">${item.store}</p>
            </div>
            <span class="priority ${priority}">${t(priority)}</span>
          </div>
          <div class="reorder-meta">
            <div><span>${t("stock")}</span><strong>${item.score}</strong></div>
            <div><span>${t("order")}</span><strong>${item.starterUnits}</strong></div>
            <div><span>${t("trend")}</span><strong class="${trend.cls}">${trend.label}</strong></div>
          </div>
          <p class="muted">${item.source}</p>
        </article>
      `;
    })
    .join("");
}

function populateFilters() {
  const regions = [...new Set(buyers.map((item) => item.region))].sort();
  regions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    els.regionFilter.appendChild(option);
  });
}

function render() {
  applyCopy();
  renderBuyers();
  renderHistory();
  renderPlaybook();
}

function exportCsv() {
  const header = ["market", "buyer_contact_path", "opportunity", "buyer_type", "score", "starter_units", "ideal_units", "follow_up_days", "priority"];
  const rows = buyers.map((item) =>
    [
      item.region,
      item.store,
      item.product,
      item.type,
      item.score,
      item.starterUnits,
      item.idealUnits,
      item.followDays,
      item.priority,
    ]
      .map((value) => `"${String(value).replaceAll('"', '""')}"`)
      .join(","),
  );
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "japan-gacha-global-buyer-pipeline.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function setLive(next) {
  live = next;
  els.toggleLiveBtn.textContent = live ? t("liveOn") : t("liveOff");
  if (timer) clearInterval(timer);
  if (live) timer = setInterval(simulateUpdate, 7000);
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.view}View`).classList.add("active");
  });
});

[els.regionFilter, els.typeFilter, els.statusFilter, els.searchInput, els.sortSelect].forEach((select) => {
  select.addEventListener("change", renderBuyers);
  select.addEventListener("input", renderBuyers);
});

els.refreshBtn.addEventListener("click", simulateUpdate);
els.toggleLiveBtn.addEventListener("click", () => setLive(!live));
els.exportBtn.addEventListener("click", exportCsv);

populateFilters();
recordSnapshot();
render();
setLive(true);
