
  /**
   * Initialize Unity game settings and handle mobile device considerations.
   */
  var container = document.querySelector("#unity-container");
  var canvas = document.querySelector("#unity-canvas");
  var loadingBar = document.querySelector("#unity-loading-bar");
  var progressBarFull = document.querySelector("#unity-progress-bar-full");
  var fullscreenButton = document.querySelector("#unity-fullscreen-button");
  var mobileWarning = document.querySelector("#unity-mobile-warning");

  // Check if the user agent indicates a mobile device (iPhone, iPad, iPod, or Android).
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Adjust the container class and show a mobile warning message.
    container.className = "unity-mobile";
    mobileWarning.style.display = "block";

    // Hide the mobile warning after 5 seconds.
    setTimeout(() => {
      mobileWarning.style.display = "none";
    }, 5000);
  } else {
    // For non-mobile devices, set a fixed canvas size.
    canvas.style.width = "960px";
    canvas.style.height = "600px";
  }

  // Display the loading bar.
  loadingBar.style.display = "block";

  // Instantiate the Unity game using UnityLoader.
  var gameInstance = UnityLoader.instantiate("unity-canvas", "build.json", {
    onProgress: UnityProgress,
  });

  /**
   * UnityProgress function updates the loading progress and handles post-loading actions.
   *
   * @param {Object} gameInstance - The Unity game instance.
   * @param {number} progress - The loading progress ranging from 0 to 1.
   */
  function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module) {
      return;
    }

    // Update the width of the progress bar based on loading progress.
    progressBarFull.style.width = 100 * progress + "%";

    // If the loading is complete, hide the loading bar after a delay.
    if (progress === 1 && !gameInstance.removeTimeout) {
      loadingBar.style.display = "none";

      // Set a timeout to remove the loading bar after 2 seconds.
      gameInstance.removeTimeout = setTimeout(function () {
        loadingBar.style.display = "none";
      }, 2000);

      // Assign a click event to the fullscreen button to toggle fullscreen mode.
      fullscreenButton.onclick = () => {
        gameInstance.SetFullscreen(1);
      };
    }
  }

