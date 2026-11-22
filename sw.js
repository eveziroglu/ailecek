/* Ailecek çevrimdışı çalışma.
   Uygulama dosyaları ilk açılışta önbelleğe alınır; görseller, ses paketleri ve yazı tipleri
   kullanıldıkça eklenir. Yeni sürüm yayınlanınca SURUM değişir ve eski önbellek silinir. */
const SURUM = "ailecek-20261122-1247";
const KABUK = ["./", "index.html", "icerik.js?v=20261122-1247", "icerik-kuslar.js?v=20261122-1247", "kuslar.js?v=20261122-1247", "manifest.webmanifest",
  "ikon/ikon-192.png", "ikon/ikon-512.png", "ikon/apple-touch-icon.png", "gorsel/gorsel.json", "ses/ses.json",
  "yazi/yazi.css?v=20261122-1247", "yazi/baloo2-latin-4a324d.woff2", "yazi/baloo2-latin-ext-0d1ee7.woff2", "yazi/figtree-latin-dab710.woff2", "yazi/figtree-latin-ext-c15953.woff2",
  "hakkinda.html", "gizlilik.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SURUM).then(c => Promise.all(KABUK.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  /* Sayfa ve oyun dosyaları: önce ağ (yeni sürüm hemen gelsin), ağ yoksa önbellek */
  const kod = url.origin === location.origin && (req.mode === "navigate" || /\.(html|js|json|webmanifest|css)$/.test(url.pathname) || url.pathname.endsWith("/"));
  if (kod) {
    e.respondWith(fetch(req, { cache: "no-cache" }).then(r => { if (r.status === 200) { const k = r.clone(); caches.open(SURUM).then(c => c.put(req, k)); } return r; })
      .catch(() => caches.match(req).then(m => m || (req.mode === "navigate" ? caches.match("index.html") : Response.error()))));
    return;
  }
  /* Görsel, ses ve yazı tipleri: önce önbellek, yoksa ağdan alıp sakla */
  e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => {
    if (r.status === 200 || r.type === "opaque") { const k = r.clone(); caches.open(SURUM).then(c => c.put(req, k)); }
    return r;
  })));
});
