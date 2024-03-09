/**
 * UnityProgress function updates the loading progress of a Unity game.
 *
 * @param {Object} gameInstance - The Unity game instance.
 * @param {number} progress - The loading progress ranging from 0 to 1.
 */
function UnityProgress(gameInstance, progress) {
  // Check if the game instance has the required Module property.
  if (!gameInstance.Module)
    return;

  // If the logo does not exist, create and append it to the container.
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.logo);
  }

  // If the progress element does not exist, create and append it to the container.
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;

    // Create an empty progress bar and a full progress bar within the main progress element.
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);

    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);

    gameInstance.container.appendChild(gameInstance.progress);
  }

  // Update the width of the full and empty progress bars based on the loading progress.
  gameInstance.progress.full.style.width = (100 * progress) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  // If the loading is complete (progress == 1), hide the logo and progress elements.
  if (progress == 1)
    gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
}
