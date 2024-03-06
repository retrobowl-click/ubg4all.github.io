
var gameLoaded = false;
window.addEventListener("beforeunload", function (e) {
  if (adsVisible || !gameLoaded || !lockedOccured) return null;
  var confirmationMessage = "Are you sure you want to leave? ";
  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});
window.alert = function (e) {
  console.log(e);
};
