
    // RUNTIMESTART
    // This is where the HTML5 runtime is actually started
    window.addEventListener("load", windowLoaded, false);
    function windowLoaded()
    {
        // Calls the runtime
        // First parameter : name of the canvas element
        // Second parameter : path to the cch file. Images and sounds must lay beside this file
        new Runtime("MMFCanvas", "resources/FNAF2HTML5.cch");
    }
    // RUNTIMESTARTEND
