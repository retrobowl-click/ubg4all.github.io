
  // Function to open the rate link of the extension
  function openExtensionRateLink() {
    const extensionId = chrome.runtime.id;
    const extensionRateLink = `https://chrome.google.com/webstore/detail/${extensionId}/reviews`;
    window.open(extensionRateLink, '_blank');
  }
  
  document.getElementById('rateButton').addEventListener('click', openExtensionRateLink);
  