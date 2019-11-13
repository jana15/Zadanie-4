const Map = ol.Map;
const View = ol.View;
const ImageLayer = ol.layer.Image;
const TileLayer = ol.layer.Tile;
const ImageWMS = ol.source.ImageWMS;
const OSM = ol.source.OSM;
const WMSCapabilities = ol.format.WMSCapabilities;



// podkladova mapa
var layers = [
  new TileLayer({
    source: new OSM()
  }),
  //
  new ImageLayer({
    //extent suradnice rohu map listu
    extent: [17.845079678742593, 48.73220891762924, 17.935758655033737, 48.76464387263053],
    source: new ImageWMS({
      url: 'http://localhost:8080/geoserver/zabcikova/wms',
      params: { 'LAYERS': ['zabcikova:cesta','zabcikova:budovy','zabcikova:el_stlpy',	'zabcikova:vodne_toky_2','zabcikova:ihrisko','zabcikova:luka','zabcikova:el_vedenie']},
      ratio: 1,
      serverType: 'geoserver'
    })
})
]
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: [17.886307, 48.743136],
    zoom: 13
  })
});
function visibility() {
   fetch('http://localhost:8080/geoserver/zabcikova/wms?service=WMS&version=1.3.0&request=GetCapabilities',{mode: 'cors'}).then(function (response) {
    return response.text();
    console.log(text)
  }).then(function (data) {
    let parser = new DOMParser();
    XMLDocument = parser.parseFromString(data, 'text/xml');
    document.getElementById('log').textContent = data;
  })
}
