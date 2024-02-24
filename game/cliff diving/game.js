
$(document).ready(function () {
    var oMain = new CMain({
        dive_value: 1,             // HOW MANY POINTS A CORRECT DIVE IS VALUED
        dive_value_good: 3,        // HOW MANY POINTS A GOOD DIVE IS VALUED
        dive_value_perfect: 5,     // HOW MANY POINTS A PERFECT DIVE IS VALUED
        dive_offset_perfect: 20,   // THE OFFSET ANGLE (ON 180°) FOR A PERFECT DIVE
        dive_offset_good: 40,      // THE OFFSET ANGLE (ON 180°) FOR A GOOD DIVE
        dive_offset_poor: 60,      // THE OFFSET ANGLE (ON 180°) FOR A POOR (BUT VALID) DIVE
        flip_value: 5,             // HOW MANY POINTS A COMPLETE FLIP IS VALUED
        plane_wait_time: 20000,    // HOW MANY MILLISECONDS TO WAIT BEFORE A NEW PLANE WILL START
        plane_speed: 10000,        // HOW MANY MILLISECONDS THE PLANE WILL TAKE TO ARRIVE TO THE OTHER SIDE OF THE SCREEN
        fullscreen:true,           // SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation:true     // SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES                

    });
    $("#canvas").on("start_session", function (evt){
        if (getParamValue('ctl-arcade') === "true") {                        
            parent.__ctlArcadeStartSession();
        }
    });

    $("#canvas").on("end_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndSession();
        }
    });

    $("#canvas").on("start_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartLevel({level: iLevel});
        }
    });

    $("#canvas").on("restart_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeRestartLevel({level: iLevel});
        }
    });

    $("#canvas").on("end_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndLevel({level: iLevel});
        }
    });

    $("#canvas").on("save_score", function (evt, iScore, szMode) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeSaveScore({score: iScore, mode: szMode});
        }
    });

    $("#canvas").on("show_interlevel_ad", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShowInterlevelAD();
        }
    });

    $("#canvas").on("share_event", function (evt, iScore) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShareEvent({img: TEXT_SHARE_IMAGE,
                title: TEXT_SHARE_TITLE,
                msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1});
        }
    });

    if (isIOS()) {
        setTimeout(function () {
            sizeHandler();
        }, 200);
    } else {
        sizeHandler();
    }
    /*************************Idnet *************************/
        window.idAsyncInit = function() {
        // use an id.net event to wait until after init
        ID.Event.subscribe('id.init', function(){
            // use jquery to call methods on clicks
            console.log('from')
             ID.getLoginStatus(idCallback)
             ID.Protection.isBlacklisted(function(blacklisted){
                //blacklisted = true
               oMain.blackListState(blacklisted);
                console.log('[BLACKLIST] : ' + blacklisted);
            });
             ID.Protection.isSponsor(function(sponsor){
                //sponsor = true
                oMain.sponsorStatus(sponsor);
                console.log('[SPONSOR] : ' + sponsor);
            });
            
            //oMain.LoadData()
        });
        // using an optional callback to capture data on the client
        var userName;
        var idCallback = function(response){
            if (response) { // That means that the server processed the response
                console.log(response);
                console.log(response.status);
                 console.log('Working');
                if(response.status === 'ok')
                {
                   userName = response.authResponse.details.nickname;
                   oMain.getUserName(userName,true);
                }
                else
                {
                    console.log('Login')
                    //ID.register(idCallback);
                }
            }
        }
        // init the JS interface
        ID.init({
            appId : '5ba8f1f3bbddbd9048427973'
        });
    };

    // load the idnet js interface
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src =  document.location.protocol == "sdk.js";
        // fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'id-jssdk'));
    /**************************************************************/
});
