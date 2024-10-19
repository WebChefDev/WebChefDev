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
    openWebsite(url);
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



function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();