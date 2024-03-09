function onins(details) 
{
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) 
    {
      var url = "https://chrome.google.com/webstore/detail/"+chrome.runtime.id+"/support"
      
      chrome.runtime.setUninstallURL(url); //fallback!

      opensp();
      //open guide when site ready!
    }
    else
    {
      //updated!
    }
};
function opensp() 
{
    chrome.tabs.create({ url: "https://redball.one/g2/RedBall/", selected: true });
};