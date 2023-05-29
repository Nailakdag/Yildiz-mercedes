const date = new Date();
const year = date.getFullYear();
const yearText = document.querySelector(".year");
yearText.innerHTML = year;

document.querySelector("#map").addEventListener("click", function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Android ise
  if (/android/i.test(userAgent)) {
    window.open("https://goo.gl/maps/JqMx4m1ws6WnYCc6A");
  }
  // iOS (iPhone/iPad) ise
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open(
      "https://maps.apple.com/?address=Bostanc%C4%B1%20Sanayi%20Sitesi%20H%20Blok,%20Mimoza%20Sk.%2018,%2034752%20Ata%C5%9Fehir%20Istanbul,%20T%C3%BCrkiye&auid=9515047605766886631&ll=40.965394,29.108332&lsp=9902&q=Y%C4%B1ld%C4%B1z%20Mercedes"
    );
  }
});
