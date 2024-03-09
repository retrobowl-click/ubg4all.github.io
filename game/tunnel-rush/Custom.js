// Initialize a Unity game instance using UnityLoader:
// - Specify the container as "gameContainer" and the configuration as "build.json".
// - Provide a progress callback function (UnityProgress) and a runtime initialization callback.
var gameInstance = UnityLoader.instantiate("gameContainer", "build.json", {
    onProgress: UnityProgress,
    Module: {
        onRuntimeInitialized: function() {
            UnityProgress(gameInstance, "complete");
        }
    }
});

// Check if the function getAdinDomain is defined:
if (typeof getAdinDomain !== 'undefined') {
    // If defined, dynamically create a script element and set its source to the getAdinDomain function.
    const bodyTag = document.getElementsByTagName('body')[0];
    let addAdinPreroll = document.createElement('script');
    addAdinPreroll.src = getAdinDomain;
    bodyTag.appendChild(addAdinPreroll);
}

// Add an event listener to the element with the ID "btn-full":
// - When the button is clicked, set the Unity game instance to fullscreen mode.
document.getElementById("btn-full").addEventListener("click", function(){
    gameInstance.SetFullscreen(1);
});
