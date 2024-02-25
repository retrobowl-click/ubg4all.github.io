chrome.runtime.onInstalled.addListener(function(object) {
	if(object.reason == "install"){
	chrome.tabs.create({ url: "h"
	});
	}
});

if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('h');
} else {
}


chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "game.html"
 });
});