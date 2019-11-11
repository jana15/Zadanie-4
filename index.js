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
      extent: [17.7, 48.8, 18.5, 49.3],
      source: new ImageWMS({
        url: 'http://localhost:8080/geoserver/zabcikova/wms?service',
        params: {'LAYERS': 'zabcikova:cesty'},
        ratio: 1,
        serverType: 'geoserver'
      })
    })
  ];
  var map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
      projection: 'EPSG:4326',
      center: [17.886307, 48.743136],
      zoom: 13
    })
  });
  var parser = new WMSCapabilities();
  function visibility(){
  fetch('https://zbgisws.skgeodesy.sk/zbgis_administrativne_hranice_wms_featureinfo/service.svc/get?request=getcapabilities&service=wms').then(function(response) {
    return response.text();
  }).then(function(text) {
    var result = parser.read(text);
    document.getElementById('log').innerText = JSON.stringify(result, null, 2);
  })};