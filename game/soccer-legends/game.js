
var useEvents = (typeof(Event) === 'function');

var myDispatchEvent = function (name){
    var event;
    if (useEvents){
        event =  new Event(name);
    }else{
        event = document.createEvent('Event');
        event.initEvent(name, true, true);
    }
    document.getElementById("content").dispatchEvent(event);
}

window["GD_OPTIONS"] = {
    "gameId": "ecd138ae69cf4e92b5f5cdd328b6b62e",
    "onEvent": function(event) {
        switch (event.name) {
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                myDispatchEvent('SDK_GAME_START');
                break;
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                myDispatchEvent('SDK_GAME_PAUSE');
                break;
            case "SDK_GDPR_TRACKING":
                // this event is triggered when your user doesn't want to be tracked
                console.log("SDK_GDPR_TRACKING");
                break;
            case "SDK_GDPR_TARGETING":
                // this event is triggered when your user doesn't want personalised targeting of ads and such
                console.log("SDK_GDPR_TARGETING");
                break;
            case "SDK_READY":
                // this event is triggered when your user doesn't want personalised targeting of ads and such
                console.log("SDK_READY");
                break;
        }
    },
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'patch/js/gd-sdk.js?html5.api.gamedistribution.com/main.min.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'gamedistribution-jssdk'));
