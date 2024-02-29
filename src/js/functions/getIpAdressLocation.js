const getIpAdressLocation = async (userInput, API_key) => {
  try {
    let apiUrl;
    if (checkIpAdress(userInput)) {
      apiUrl = `https://geo.ipify.org/api/v1?apiKey=${API_key}&ipAddress=${userInput}`;
    } else {
      const url = new URL(userInput);
      const domain = url.hostname;
      apiUrl = `https://geo.ipify.org/api/v1?apiKey=${API_key}&domain=${domain}`;
    }
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching IP geolocation:", error);
    throw error;
  }
};

const checkIpAdress = (ipAddress) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(:[0-9a-fA-F]{1,4}){1,6}|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1\d|[1-9])?\d)(\.(25[0-5]|(2[0-4]|1\d|[1-9])?\d)){3})|::(ffff(:0{1,4}){0,1}:){0,1}(25[0-5]|(2[0-4]|1\d|[1-9])?\d)(\.(25[0-5]|(2[0-4]|1\d|[1-9])?\d)){3})$/;
  return ipv4Regex.test(ipAddress) || ipv6Regex.test(ipAddress);
};

export default getIpAdressLocation;
