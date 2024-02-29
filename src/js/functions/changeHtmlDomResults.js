const changeHtmlDomResults = (ip, location, timezone, isp) => {
  const adressTitle = document.getElementById("resultAdress");
  const locationTitle = document.getElementById("resultLocation");
  const timezoneTitle = document.getElementById("resultTimezone");
  const utcTitle = document.getElementById("resultUTC");

  adressTitle.textContent = ip;
  locationTitle.textContent = location;
  timezoneTitle.textContent = timezone;
  utcTitle.textContent = isp;
};

export default changeHtmlDomResults;
