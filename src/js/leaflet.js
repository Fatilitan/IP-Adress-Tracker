// Setting up leaflet api
const map = L.map("map", { zoomControl: false }).setView([52.3676, 4.9041], 13);
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  {
    attribution:
      'Map data &copy; <a href="https://tiles.stadiamaps.com">Stadia Maps</a> | Map tiles by <a href="https://openmaptiles.org">OpenMapTiles</a>',
  }
).addTo(map);

var customIcon = L.icon({
  iconUrl: "../images/icon-location.svg",
  iconSize: [44, 56], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([52.3676, 4.9041], { icon: customIcon }).addTo(map);
