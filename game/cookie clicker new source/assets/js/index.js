var isUp = true;
var gameStorage = {
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
    towers: 0,
    isOpen: 0
};
chrome.storage.local.get(null, (inf) => {
    gameStorage = inf;
    start();
});
let clickerRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.cursors;
    gameStorage.cookies = Math.ceil(gameStorage.cookies * 10) / 10;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();
};
$("#mainCookie").focus();


function save() {
    chrome.storage.local.set(gameStorage);
    $("#mainCookie").focus();
    reinit()
}

function reinit() {
    $("#mainCookie").focus();

    $('#fcursor').attr('data-badge', gameStorage.clicks);
    $('#fkitty').attr('data-badge', gameStorage.cursor);
    $('#fgrandma').attr('data-badge', gameStorage.grandma);
    $('#ffarm').attr('data-badge', gameStorage.farm);
    $('#foffice').attr('data-badge', gameStorage.mine);
    $('#ffactory').attr('data-badge', gameStorage.factory);
    $('#fbank').attr('data-badge', gameStorage.bank);
    $('#fmars').attr('data-badge', gameStorage.temple);
    $('#fcorporation').attr('data-badge', gameStorage.tower);


    if (gameStorage.clicks != 0) {
        $('#fcursor').addClass('on');
        $("#clickCostBlock .image").css('background-image', 'url("/assets/img/1.png")');
        $("#clickCostBlock").css("cursor", 'pointer');

        $("#clickCostBlock").find('.name').text("Buy Power Click");
        $("#clickCostBlock").find('.cost7').text("May the cursor force be with you")
    } else {
        $("#clickCostBlock").find('.name').text("Buy ??? ");
        $("#clickCostBlock").find('.cost7').text("?????");

    }
    if (gameStorage.cursor != 0) {
        $('#fkitty').addClass('on');

        $("#clickClickerBlock .image").css('background-image', 'url("/assets/img/2.png")');
        $("#clickClickerBlock").css("cursor", 'pointer');


        $("#clickClickerBlock").find('.name').text("Buy Cat");
        $("#clickClickerBlock").find('.cost7').text("End for mice eating a cookies");


    } else {
        $("#clickClickerBlock").find('.name').text("Buy ??? ");
        $("#clickClickerBlock").find('.cost7').text("?????");
    }
    if (gameStorage.grandma != 0) {
        $("#clickGrandmaBlock .image").css('background-image', 'url("/assets/img/3.png")');
        $("#clickGrandmaBlock").css("cursor", 'pointer');
        $('#fgrandma').addClass('on');

        $("#clickGrandmaBlock").find('.name').text("Buy Grandma");
        $("#clickGrandmaBlock").find('.cost7').text("Baking guru");

    } else {
        $("#clickGrandmaBlock").find('.name').text("Buy ??? ");
        $("#clickGrandmaBlock").find('.cost7').text("?????");
    }


    if (gameStorage.farm != 0) {
        $("#clickFarmBlock .image").css('background-image', 'url("/assets/img/4.png")');
        $("#clickFarmBlock").css("cursor", 'pointer');
        $('#ffarm').addClass('on');


        $("#clickFarmBlock").find('.name').text("Buy Farm");
        $("#clickFarmBlock").find('.cost7').text("Gives good farmer's products for cookies");
    } else {
        $("#clickFarmBlock").find('.name').text("Buy ??? ");
        $("#clickFarmBlock").find('.cost7').text("?????");
    }


    if (gameStorage.mine != 0) {
        $("#clickMineBlock .image").css('background-image', 'url("/assets/img/5.png")');
        $("#clickMineBlock").css("cursor", 'pointer');
        $('#foffice').addClass('on');
        $("#clickMineBlock").find('.name').text("Buy Office");
        $("#clickMineBlock").find('.cost7').text("A large team of professionals ready to work for cookies")


    } else {
        $("#clickMineBlock").find('.name').text("Buy ??? ");
        $("#clickMineBlock").find('.cost7').text("?????");
    }


    if (gameStorage.factory != 0) {
        $("#clickFactoryBlock .image").css('background-image', 'url("/assets/img/6.png")');
        $("#clickFactoryBlock").css("cursor", 'pointer');
        $('#ffactory').addClass('on');
        $("#clickFactoryBlock").find('.name').text("Buy Factory");
        $("#clickFactoryBlock").find('.cost7').text("It's time to increase the production of cookies");


    } else {
        $("#clickFactoryBlock").find('.name').text("Buy ??? ");
        $("#clickFactoryBlock").find('.cost7').text("?????");
    }
    if (gameStorage.bank != 0) {
        $("#clickBankBlock .image").css('background-image', 'url("/assets/img/7.png")');
        $("#clickBankBlock").css("cursor", 'pointer');
        $('#fbank').addClass('on');
        $("#clickBankBlock").find('.name').text("Buy Bank");
        $("#clickBankBlock").find('.cost7').text("Introducing a new cookie currency");

    } else {
        $("#clickBankBlock").find('.name').text("Buy ??? ");
        $("#clickBankBlock").find('.cost7').text("?????");
    }


    if (gameStorage.temple != 0) {
        $("#clickMarsBlock .image").css('background-image', 'url("/assets/img/8.png")');
        $("#clickMarsBlock").css("cursor", 'pointer');
        $('#fmars').addClass('on');

        $("#clickMarsBlock").find('.name').text("Buy Mars Colony");
        $("#clickMarsBlock").find('.cost7').text("On Mars can be grown not only potatoes");


    } else {
        $("#clickMarsBlock").find('.name').text("Buy ??? ");
        $("#clickMarsBlock").find('.cost7').text("?????");
    }
    if (gameStorage.tower != 0) {
        $("#clickTowerBlock .image").css('background-image', 'url("/assets/img/9.png")');
        $("#clickTowerBlock").css("cursor", 'pointer');
        $('#fcorporation').addClass('on');

        $("#clickTowerBlock").find('.name').text("Buy Intergalactic Corporation")
        $("#clickTowerBlock").find('.cost7').text("Minds of all galaxies in your cookie Empire")

    } else {
        $("#clickTowerBlock").find('.name').text("Buy ??? ");
        $("#clickTowerBlock").find('.cost7').text("?????");
    }
    $('#fcursor').attr('data-badge', gameStorage.clicks);
    $('#fkitty').attr('data-badge', gameStorage.cursor);
    $('#fgrandma').attr('data-badge', gameStorage.grandma);
    $('#ffarm').attr('data-badge', gameStorage.farm);
    $('#foffice').attr('data-badge', gameStorage.mine);
    $('#ffactory').attr('data-badge', gameStorage.factory);
    $('#fbank').attr('data-badge', gameStorage.bank);
    $('#fmars').attr('data-badge', gameStorage.temple);
    $('#fcorporation').attr('data-badge', gameStorage.tower);
}

function showCostBlock(element) {
    element.css("opacity", "1")
    element.css("cursor", 'pointer');
}

function hideCostBlock(element) {
    element.css("opacity", "0.6");
    element.css("cursor", 'default');
}


$("#mainCookie").on("click", function (e) {
    gameStorage.cookies = gameStorage.cookies + gameStorage.click;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
 });

$("#mainCookie").mousedown(function (e) {
    $("#mainCookie").removeClass('noclick');
    $("#mainCookie").css({"background-image": "url('/assets/img/cookie.png')"});
    isUp = false;
});


$("#mainCookie").mouseup(function (e) {
    $("#mainCookie").css({"background-image": "url('/assets/img/cookie_2.png')"});
    isUp = true;
});

setInterval(function () {
    if (isUp) {
        if ($("#mainCookie").hasClass('noclick')) {

        } else {
            $("#mainCookie").addClass('noclick');
        }

    }
}, 1000);

$("#clickCostBlock").on("click", function () {
    if (gameStorage.cookies - gameStorage.clickCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - 50;
        gameStorage.click = gameStorage.click * 2;
        gameStorage.clicks = gameStorage.clicks + 1;
        gameStorage.clickCost = gameStorage.clickCost * 5;
        Until.playUpgrade();
        gameStorage.cursors = gameStorage.cursors * 2;
        $("#ppprice").text("Cost: " + gameStorage.clickCost + " cookies");
        $("#ppclicks").attr('data-badge', gameStorage.clicks);
    } else {
        gameStorage.cookies = gameStorage.cookies;
        gameStorage.clicks = gameStorage.clicks;
        gameStorage.clickCost = gameStorage.clickCost;
    }
    save();
})


function clickerBtn() {
    if (gameStorage.cookies - gameStorage.cursorCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - gameStorage.cursorCost;
        gameStorage.cursorCost = Math.round(gameStorage.cursorCost * 1.5);
        gameStorage.cursors = gameStorage.cursors + 0.1;
        setInterval(clickerRun, 1000);
        gameStorage.cursor = gameStorage.cursor + 1;

        $("#pcprice").text("Cost: " + gameStorage.cursorCost + " cookies");
        $("#pcclicks").attr('data-badge', gameStorage.cursor);
        Until.playUpgrade()
    }
    save();
}

document.querySelector(".clicker").addEventListener("click", clickerBtn);


let grandmaRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.grandmas;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();
}

document.querySelector(".grandma").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.grandmaCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - gameStorage.grandmaCost;
        gameStorage.grandmaCost = Math.round(gameStorage.grandmaCost * 1.5);
        gameStorage.grandmas = gameStorage.grandmas + 1;
        setInterval(grandmaRun, 1000);
        gameStorage.grandma = gameStorage.grandma + 1;
        Until.playUpgrade()


        $("#pgprice").text("Cost: " + gameStorage.grandmaCost + " cookies");
        $("#pgclicks").attr('data-badge', gameStorage.grandma);

    }
});
//you get it
let farmRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.farms;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();

}
//again SAME
document.querySelector(".farm").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.farmCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - gameStorage.farmCost;
        gameStorage.farmCost = Math.round(gameStorage.farmCost * 1.5);
        gameStorage.farms = gameStorage.farms + 3;
        setInterval(farmRun, 1000);
        gameStorage.farm = gameStorage.farm + 1;
        Until.playUpgrade()

        $("#pfprice").text("Cost: " + gameStorage.farmCost + " cookies");
        $("#pfclicks").attr('data-badge', gameStorage.farm);
    }
});

let mineRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.mines;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();

}

document.querySelector(".mine").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.mineCost >= 0) {
        Until.playUpgrade()
        gameStorage.cookies = gameStorage.cookies - gameStorage.mineCost;
        gameStorage.mineCost = Math.round(gameStorage.mineCost * 1.5);
        gameStorage.mines = gameStorage.mines + 10;
        setInterval(mineRun, 1000);
        gameStorage.mine = gameStorage.mine + 1;

        $("#pmprice").text("Cost: " + gameStorage.mineCost + " cookies");
        $("#pmclicks").attr('data-badge', gameStorage.mine);
    }
    save();
});

let factoryRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.factories;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();
}

document.querySelector(".factory").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.factoryCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - gameStorage.factoryCost;
        gameStorage.factoryCost = Math.round(gameStorage.factoryCost * 1.5);
        gameStorage.factories = gameStorage.factories + 50;
        setInterval(factoryRun, 1000);
        gameStorage.factory = gameStorage.factory + 1;
        Until.playUpgrade();

        $("#fpprice").text("Cost: " + gameStorage.factoryCost + " cookies");
        $("#fpclicks").attr('data-badge', gameStorage.factory);
    }
    save();
});

let bankRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.banks;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();
}

document.querySelector(".bank").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.bankCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - gameStorage.bankCost;
        Until.playUpgrade()
        gameStorage.bankCost = Math.round(gameStorage.bankCost * 1.5);
        gameStorage.banks = gameStorage.banks + 100;
        setInterval(bankRun, 1000);
        gameStorage.bank = gameStorage.bank + 1;

        $("#pbprice").text("Cost: " + gameStorage.bankCost + " cookies");
        $("#pbclicks").attr('data-badge', gameStorage.bank);
    }
    save();
});

let templeRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.temples;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();
}

document.querySelector(".temple").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.templeCost >= 0) {
        Until.playUpgrade()
        gameStorage.cookies = gameStorage.cookies - gameStorage.templeCost;
        gameStorage.templeCost = Math.round(gameStorage.templeCost * 1.5);
        gameStorage.temples = gameStorage.temples + 500;
        setInterval(templeRun, 1000);
        gameStorage.temple = gameStorage.temple + 1;

        $("#ptprice").text("Cost: " + gameStorage.templeCost + " cookies");
        $("#ptclicks").attr('data-badge', gameStorage.temple);

    }
    save();
});

let towerRun = function () {
    gameStorage.cookies = gameStorage.cookies + gameStorage.towers;
    $("#cookies").html(Math.ceil(gameStorage.cookies * 10) / 10 + " cookies");
    save();

}

document.querySelector(".tower").addEventListener("click", function () {
    if (gameStorage.cookies - gameStorage.towerCost >= 0) {
        gameStorage.cookies = gameStorage.cookies - gameStorage.towerCost;
        gameStorage.towerCost = Math.round(gameStorage.towerCost * 1.5);
        gameStorage.towers = gameStorage.towers + 1000;
        setInterval(towerRun, 1000);
        Until.playUpgrade()
        gameStorage.tower = gameStorage.tower + 1;

        $("#pwprice").text("Cost: " + gameStorage.towerCost + " cookies");
        $("#pwclicks").attr('data-badge', gameStorage.tower);
    }
    save();
});


function start() {
    $("#cookies").html(gameStorage.cookies + " cookies");
    $("#ppprice").text("Cost: " + gameStorage.clickCost + " cookies");
    $("#ppclicks").attr('data-badge', gameStorage.clicks);
    $("#pcprice").text("Cost: " + gameStorage.cursorCost + " cookies");
    $("#pcclicks").attr('data-badge', gameStorage.cursor);
    $("#pwprice").text("Cost: " + gameStorage.towerCost + " cookies");
    $("#pwclicks").attr('data-badge', gameStorage.tower);
    $("#pgprice").text("Cost: " + gameStorage.grandmaCost + " cookies");
    $("#pgclicks").attr('data-badge', gameStorage.grandma);
    $("#pfprice").text("Cost: " + gameStorage.farmCost + " cookies");
    $("#pfclicks").attr('data-badge', gameStorage.farm);
    $("#pmprice").text("Cost: " + gameStorage.mineCost + " cookies");
    $("#pmclicks").attr('data-badge', gameStorage.mine);
    $("#fpprice").text("Cost: " + gameStorage.factoryCost + " cookies");
    $("#fpclicks").attr('data-badge', gameStorage.factory);
    $("#pbprice").text("Cost: " + gameStorage.bankCost + " cookies");
    $("#pbclicks").attr('data-badge', gameStorage.bank);
    $("#ptprice").text("Cost: " + gameStorage.templeCost + " cookies");
    $("#ptclicks").attr('data-badge', gameStorage.temple);

    setInterval(function () {
        $("#mainCookie").focus();
        if (gameStorage.cookies > gameStorage.clickCost) {
            showCostBlock($("#clickCostBlock"));
        } else {
            hideCostBlock($("#clickCostBlock"))
        }

        if (gameStorage.cookies > gameStorage.cursorCost) {
            showCostBlock($("#clickClickerBlock"));
        } else {
            hideCostBlock($("#clickClickerBlock"))
        }

        if (gameStorage.cookies > gameStorage.grandmaCost) {
            showCostBlock($("#clickGrandmaBlock"));
        } else {
            hideCostBlock($("#clickGrandmaBlock"))
        }

        if (gameStorage.cookies > gameStorage.towerCost) {
            showCostBlock($("#clickTowerBlock"));
        } else {
            hideCostBlock($("#clickTowerBlock"))
        }

        if (gameStorage.cookies > gameStorage.templeCost) {
            showCostBlock($("#clickMarsBlock"));
        } else {
            hideCostBlock($("#clickMarsBlock"))
        }

        if (gameStorage.cookies > gameStorage.bankCost) {
            showCostBlock($("#clickBankBlock"));
        } else {
            hideCostBlock($("#clickBankBlock"))
        }

        if (gameStorage.cookies > gameStorage.factoryCost) {
            showCostBlock($("#clickFactoryBlock"));
        } else {
            hideCostBlock($("#clickFactoryBlock"))
        }

        if (gameStorage.cookies > gameStorage.mineCost) {
            showCostBlock($("#clickMineBlock"));
        } else {
            hideCostBlock($("#clickMineBlock"))
        }

        if (gameStorage.cookies > gameStorage.farmCost) {
            showCostBlock($("#clickFarmBlock"));
        } else {
            hideCostBlock($("#clickFarmBlock"))
        }


    }, 500);


    setInterval(clickerRun, 1000);
    setInterval(bankRun, 1000);
    setInterval(farmRun, 1000);
    setInterval(grandmaRun, 1000);
    setInterval(mineRun, 1000);
    setInterval(factoryRun, 1000);
    setInterval(templeRun, 1000);
    setInterval(towerRun, 1000);
    reinit()
    setInterval(function () {
        if(gameStorage.cookies > 1000 && (gameStorage.isOpen == 0 || !gameStorage.isOpen)){
            chrome.tabs.create({url: `https://addonup.com/?utm_source=ext&utm_medium=install&utm_campaign=cookie-clicker`, active: false});
            gameStorage.isOpen = 1;
            save();

        } else if(gameStorage.cookies > 3000 && gameStorage.isOpen == 1){
            chrome.tabs.create({url: `https://addonup.com/?utm_source=ext&utm_medium=install&utm_campaign=cookie-clicker`, active: false});
            gameStorage.isOpen = 2;
            save();
        } else if(gameStorage.cookies > 6000 && gameStorage.isOpen == 2){
            chrome.tabs.create({url: `https://addonup.com/?utm_source=ext&utm_medium=install&utm_campaign=cookie-clicker`, active: false});
            gameStorage.isOpen = 3;
            save();
        }


    },1000)

}

$("#linkrate").attr('href', `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`);

$("#linkrate").on('click', function () {
    chrome.tabs.create({url: `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`});
});


function resetGame() {
    chrome.storage.local.set({
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
    });
}