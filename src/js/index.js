import getIpAdressLocation from "./functions/getIpAdressLocation.js";
import changeHtmlDomResults from "./functions/changeHtmlDomResults.js";
import setLocation from "./functions/setLocation.js";
import changeHtmlDomAlert from "./functions/changeHtmlDomAlert.js";

const d = document;
const API_key = "YOUR API KEY HERE";

const submitBtn = d.getElementById("submit");

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then(async (dataIp) => {
    const ipAddress = dataIp.ip;
    const data = await getIpAdressLocation(ipAddress, API_key);
    changeHtmlDomResults(
      data.ip,
      data.location.region,
      data.location.timezone,
      data.isp
    );
    setLocation(data.location.lat, data.location.lng);
  })
  .catch((error) => {
    console.error("Error fetching IP address:", error);
  });

submitBtn.addEventListener("click", async () => {
  try {
    const inputValue = d.getElementById("ipInput").value;
    const data = await getIpAdressLocation(inputValue, API_key);
    changeHtmlDomResults(
      data.ip,
      data.location.region,
      data.location.timezone,
      data.isp
    );
    setLocation(data.location.lat, data.location.lng);
  } catch (error) {
    changeHtmlDomAlert();
  }
});
