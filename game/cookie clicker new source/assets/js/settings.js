(function () {
    chrome.storage.local.get(null, function (data) {
       for (let key in data){

       }
    });
    $('#rates').on('click', function (e) {
        chrome.tabs.create({url: "https://chrome.google.com/webstore/detail/ompkdmkcpcoodbbiccjoghliigjlblkk"})
    });

    $('#pgmg').on('click', function (e) {
        chrome.tabs.create({url: "https://chrome.google.com/webstore/detail/ompkdmkcpcoodbbiccjoghliigjlblkk"})
    });

    $("#Open_in_new_tab").on('click', function () {
        chrome.storage.local.set({"Open_in_new_tab": false})
    })



})()