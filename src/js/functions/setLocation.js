const setLocation = (lat, lng) => {
  map.setView([lat, lng]);
  marker.setLatLng([lat, lng]);
};

export default setLocation;
