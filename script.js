// JavaScript to handle the start menu popup functionality
document.getElementById("startButton").addEventListener("click", function () {
  var startMenu = document.getElementById("startMenu");
  if (startMenu.style.display === "block") {
    startMenu.style.display = "none";
  } else {
    startMenu.style.display = "block";
  }
});

function openSpecialWebsite(url) {
  if (isTouchDevice()) {
    window.open(url, "_blank");
  } else {
    openWebsite(url); // Fall back to iframe for non-touch devices
  }
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function openWebsite(url) {
  var iframe = document.getElementById("websiteFrame");
  iframe.src = url;
  iframe.style.display = "block";
  document.getElementById("closeButton").style.display = "block";
}

function openWebsite(url) {
  var iframe = document.getElementById("websiteFrame");
  iframe.src = url;
  iframe.style.display = "block";
  document.getElementById("closeButton").style.display = "block";
}

function closeWebsite() {
  var iframe = document.getElementById("websiteFrame");
  iframe.style.display = "none";
  document.getElementById("closeButton").style.display = "none";
}
