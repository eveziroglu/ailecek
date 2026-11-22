# Station

Yolculuk Haritası'ndaki bir durak: bir tema, kemer biçimli simge, durak adı ve yıldızlar.

- `ak-station`, haritanın `position: relative` kapsayıcısı içinde `left`/`top` ile yerleştirilir ve kendi merkezine hizalanır. Renk `--c` (temanın rengi).
- Parçalar: `ak-station__ico` (tema emojisi; kilitliyse 🔒), `ak-station__name`, `ak-station__stars` (★ dolu `kandil`, boş yıldızlar `<span class="off">★</span>`; açık ama oynanmamış durakta “Yeni!”).
- Durumlar: `is-current` (sıradaki durak; nabız atar, üstünde `bird-pin` içinde Hüdhüd), `is-locked` (gri), `ak-station--final` (gece zeminli Kandil Gecesi).
- `kandil` renkli duraklarda `ak-on-kandil` ekleyin. Duraklar arası yol, haritada `line` renginde kalın bir çizgi ve tamamlanan kısmı `kandil` ile çizilir.
