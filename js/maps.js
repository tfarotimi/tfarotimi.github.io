
L.mapbox.accessToken = 'pk.eyJ1IjoidG9wZTAxMCIsImEiOiI4UVdFeUJFIn0.1MMV-xRa9tFXDmSjOL-Y0g';
var map = L.mapbox.map('map','tope010.jfh5ao9n');

L.tileLayer('http://{s}.tiles.mapbox.com/v3/tope010.jfh5ao9n/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

map.legendControl.addLegend(document.getElementById('legend').innerHTML);

