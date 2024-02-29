const changeHtmlDomAlert = () => {
  var alertBox = document.getElementById("alertBox");
  alertBox.style.display = "block";
  alertBox.innerHTML =
    "Input correct IPv4 or IPv6 address. Or a complete domain.";

  setTimeout(function () {
    alertBox.style.display = "none";
  }, 5000);
};

export default changeHtmlDomAlert;
