const config = {
    date_install: (new Date()).getTime(),
    cookies: 0,
    clicks: 0,
    cursor: 0,
    grandma: 0,
    farm: 0,
    mine: 0,
    factory: 0,
    bank: 0,
    temple: 0,
    tower: 0,
    clickCost: 50,
    cursorCost: 15,
    grandmaCost: 100,
    farmCost: 1100,
    mineCost: 12000,
    factoryCost: 130000,
    bankCost: 1200000,
    templeCost: 20000000,
    towerCost: 330000000,
    click: 1,
    cursors: 0,
    grandmas: 0,
    farms: 0,
    mines: 0,
    factories: 0,
    banks: 0,
    temples: 0,
    towers: 0
};

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.tabs.create({url: `https://cookieclicker.ee`});
        var conf = {
            di: new Date().getTime(),
            cookies: 0,
            clicks: 0,
            cursor: 0,
            grandma: 0,
            farm: 0,
            mine: 0,
            factory: 0,
            bank: 0,
            temple: 0,
            tower: 0,
            clickCost: 50,
            cursorCost: 15,
            grandmaCost: 100,
            farmCost: 1100,
            mineCost: 12000,
            factoryCost: 130000,
            bankCost: 1200000,
            templeCost: 20000000,
            towerCost: 330000000,
            click: 1,
            cursors: 0,
            grandmas: 0,
            farms: 0,
            mines: 0,
            factories: 0,
            banks: 0,
            temples: 0,
            towers: 0
        };
        chrome.storage.local.set(conf);
    } else {
        chrome.tabs.create({url: `https://cookieclicker.ee`, active: true});
    }
});

chrome.runtime.setUninstallURL("https://cookieclicker.ee");