
      // Detection of old browsers that do not support the canvas element
      // Falls back to a default page
      if (!document.createElement("canvas").getContext) {
        window.open("https://fnaf.co/", "_self");
      }