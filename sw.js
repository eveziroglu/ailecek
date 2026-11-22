/* Ailecek çevrimdışı çalışma.
   Uygulama dosyaları ilk açılışta önbelleğe alınır; görseller, ses paketleri ve yazı tipleri
   kullanıldıkça eklenir. Yeni sürüm yayınlanınca SURUM değişir ve eski önbellek silinir. */
const SURUM = "ailecek-2026-11-22b";
const KABUK = ["./", "index.html", "icerik.js", "icerik-kuslar.js", "kuslar.js", "manifest.webmanifest",
  "ikon/ikon-192.png", "ikon/ikon-512.png", "ikon/apple-touch-icon.png", "gorsel/gorsel.json", "ses/ses.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SURUM).then(c => Promise.all(KABUK.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !font) return;
  /* Sayfa ve oyun dosyaları: önce ağ (yeni sürüm hemen gelsin), ağ yoksa önbellek */
  const kod = url.origin === location.origin && (req.mode === "navigate" || /\.(html|js|json|webmanifest)$/.test(url.pathname) || url.pathname.endsWith("/"));
  if (kod) {
    e.respondWith(fetch(req).then(r => { if (r.status === 200) { const k = r.clone(); caches.open(SURUM).then(c => c.put(req, k)); } return r; })
      .catch(() => caches.match(req).then(m => m || (req.mode === "navigate" ? caches.match("index.html") : Response.error()))));
    return;
  }
  /* Görsel, ses ve yazı tipleri: önce önbellek, yoksa ağdan alıp sakla */
  e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => {
    if (r.status === 200 || r.type === "opaque") { const k = r.clone(); caches.open(SURUM).then(c => c.put(req, k)); }
    return r;
  })));
});
