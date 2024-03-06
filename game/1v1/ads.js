
var gameJsonUrl = "https://justbuild.nyc3.cdn.digitaloceanspaces.com/CI/1v1/Prod/162/WebGL.json"; //%gameJsonUrl
var hostname = window.location.hostname;
if (hostname.indexOf("dev1v1") >= 0 || hostname.indexOf("dev.1v1") >= 0 || hostname.indexOf("test1v1") >= 0 || hostname.indexOf("test.1v1") >= 0) {
  let urlParams = new URLSearchParams(window.location.search);
  let queryParam = urlParams.get("version");

  if (queryParam !== undefined && queryParam !== null) {
    gameJsonUrl = gameJsonUrl.replace(/[0-9][0-9]+/i, queryParam);
  }
}
var gameInstance = UnityLoader.instantiate("gameContainer", gameJsonUrl, { onProgress: UnityProgress });
//var gameInstance = UnityLoader.instantiate("gameContainer", "Build/WebGL.json", {onProgress: UnityProgress});

window.unityInstance = gameInstance;
var lockedOccured = false;

function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) {
    return;
  }
  const loader = document.querySelector("#loader");
  if (!gameInstance.progress) {
    const progress = document.querySelector("#loader .progress");
    progress.style.display = "block";
    gameInstance.progress = progress.querySelector(".full");
    loader.querySelector(".spinner").style.display = "none";
  }
  gameInstance.progress.style.transform = `scaleX(${progress})`;
  if (progress === 1 && !gameInstance.removeTimeout) {
    loader.style.display = "none";
    gameLoaded = true;
  }
}

document.onkeydown = function (e) {
  if (e.altKey || e.ctrlKey || e.key == "F1" || e.key == "F2" || e.key == "F3" || e.key == "F4") {
    e.preventDefault();
  }
};

document.onmouseup = function (e) {
  e.preventDefault();
};

document.addEventListener("pointerlockchange", lockChangeAlert, false);
document.addEventListener("mozpointerlockchange", lockChangeAlert, false);

function lockChangeAlert() {
  if (!lockedOccured && document.pointerLockElement) lockedOccured = true;
  if (!document.pointerLockElement && lockedOccured) {
    lockedOccured = false;
    gameInstance.SendMessage("Pause Menu", "OnCursorUnlocked");
  }
}

window.addEventListener("resize", injectAdByWindowSize);

function injectAdByWindowSize() {
  // Inject small ad if screen is small, or large ad if screen is large
  if (window.innerHeight < 900) {
    if (document.getElementById("adRectangleBottom") == null) {
      var el = document.getElementsByClassName("ad-rectangle-bottom")[0];
      el.id = "adRectangleBottom";
      cpmstarAPI({ kind: "go", module: "POOL 83025", config: { conditions: { target: { el: el, kind: "replace" } } } });
    }
  } else {
    if (document.getElementById("adLeaderboardBottom") == null) {
      var el = document.getElementsByClassName("ad-leaderboard-bottom")[0];
      el.id = "adLeaderboardBottom";
      cpmstarAPI({ kind: "go", module: "POOL 85420", config: { conditions: { target: { el: el, kind: "replace" } } } });
    }
  }
}

injectAdByWindowSize();

var refreshNextTime = true;

function showAds() {
  document.getElementsByClassName("ad-rectangle-bottom")[0].style.display = "block";
  document.getElementsByClassName("ad-leaderboard-bottom")[0].style.display = "block";
  document.getElementById("adRectangleUpper").style.display = "block";

  if (typeof counter === "undefined") {
    startCounter();
    resumeCounter();
  } else {
    resumeCounter();
    refresh();
  }
}

function hideAds() {
  document.getElementsByClassName("ad-rectangle-bottom")[0].style.display = "none";
  document.getElementsByClassName("ad-leaderboard-bottom")[0].style.display = "none";
  document.getElementById("adRectangleUpper").style.display = "none";

  pauseCounter();
}

// hide ads
hideAds();

function refresh() {
  //console.log("time since ads refresh = " + timeSinceRefresh + " seconds");
  //console.log("time ads visible = " + timeAdsVisible + " seconds");

  if (timeSinceRefresh <= 30 || timeAdsVisible <= 2) {
    //console.log("don't refresh");
    return;
  }

  if (document.getElementById("adRectangleBottom") != null && window.getComputedStyle(document.getElementsByClassName("ad-smallscreen")[0]).display != "none") {
    cpmstarAPI({ kind: "adcmd", module: "POOL 83023", command: "refresh" });
  }

  if (document.getElementById("adLeaderboardBottom") != null && window.getComputedStyle(document.getElementsByClassName("ad-largescreen")[0]).display != "none") {
    cpmstarAPI({ kind: "adcmd", module: "POOL 85420", command: "refresh" });
  }

  cpmstarAPI({ kind: "adcmd", module: "POOL 83025", command: "refresh" });

  timeSinceRefresh = 0;
  timeAdsVisible = 0;
  //console.log("refresh ads");
}

window.onfocus = function () {
  //console.log("onfocus");
  resumeCounter();
  refresh();
};

window.onblur = function () {
  //console.log("onblur");
  pauseCounter();
};

var timeSinceRefresh = 0;
var timeAdsVisible = 0;
var counter;
var adsVisible = false;

function startCounter() {
  timeSinceRefresh++;
  if (adsVisible) timeAdsVisible++;

  counter = setTimeout(function () {
    startCounter();
  }, 1000);
}

function resumeCounter() {
  adsVisible = true;
}

function pauseCounter() {
  adsVisible = false;
}
