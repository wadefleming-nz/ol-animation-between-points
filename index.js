import './style.css';
import 'ol/ol.css'
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Tile as TileLayer, Vector as VectorLayer, } from 'ol/layer.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import Feature from 'ol/Feature.js';
import { LineString, Point } from 'ol/geom.js';
import { fromLonLat } from 'ol/proj.js';
import { Stroke, Style, Icon } from 'ol/style.js';

var london = fromLonLat([-0.12755, 51.507222]);
var moscow = fromLonLat([37.6178, 55.7517]);
var istanbul = fromLonLat([28.9744, 41.0128]);
var rome = fromLonLat([12.5, 41.9]);
var bern = fromLonLat([7.4458, 46.95]);

var map = new Map("map");
var raster = new TileLayer({
  source: new OSM()
});

var coordinates = [london, moscow, istanbul, rome, bern];

var view = new View({
  center: bern,
  zoom: 4
});

var map = new Map({
  layers: [raster],
  target: 'map',
  view: view,
  loadTilesWhileAnimating: true,
});

var i = 0;

function panToNextLocation() {
  console.log('i ' + i);
  view.animate({
    center: coordinates[i],
    duration: 500,
  });
  i = (i+1) % 5;
}

setInterval(panToNextLocation, 3000);

