function CEndPanel(iScore, szText){
    var _oContainer;
    var _oPanelContainer;
    var _oFade;
    var _oButExit;
    var _oButRestart;
    var _oMsgTextGameOver;    
    
    var _pStartPanelPos;
    var _oButLedearBoard;
        
    this._init = function(){
        _iScore = iScore;
        
        _oContainer = new createjs.Container();        
        s_oStage.addChild(_oContainer);

        _oPanelContainer = new createjs.Container();        
        s_oStage.addChild(_oPanelContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        _oContainer.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box_big');
        var oPanel = createBitmap(oSprite);  
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        oPanel.x = CANVAS_WIDTH_HALF;
        oPanel.y = CANVAS_HEIGHT_HALF;
        _oPanelContainer.addChild(oPanel);

        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        createjs.Tween.get(_oPanelContainer)
            .to({y:0},1000, createjs.Ease.backOut)
            .call(function(){$("#canvas").trigger("show_interlevel_ad");});
        
        _oMsgTextGameOver = new createjs.Text(szText, FONT_SIZE_END_PANEL_TITLE+ PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oMsgTextGameOver.textAlign = "center";
        _oMsgTextGameOver.textBaseline = "alphabetic";
	_oMsgTextGameOver.x = CANVAS_WIDTH_HALF;
        _oMsgTextGameOver.y = CANVAS_HEIGHT_HALF - 100;
        _oMsgTextGameOver.lineWidth = 560;
	_oPanelContainer.addChild(_oMsgTextGameOver);
        
        _oButExit = new CGfxButton(CANVAS_WIDTH_HALF - 190, 830, s_oSpriteLibrary.getSprite('but_home'), _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);        
        
        _oButRestart = new CGfxButton(CANVAS_WIDTH_HALF + 190, 830, s_oSpriteLibrary.getSprite('but_restart'), _oPanelContainer);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        
        _oButLedearBoard = new CGfxButton(CANVAS_WIDTH_HALF, 830, s_oSpriteLibrary.getSprite('but_leaderboard'), _oPanelContainer);
        _oButLedearBoard.addEventListener(ON_MOUSE_UP, this._showLeaderboard, this);
        
        submitScore();
        
        s_oMain.createY8Logo("g_menulogo", CANVAS_WIDTH/2, CANVAS_HEIGHT-220)
        
        try {
            console.log('Showing Ads')
            nextAds()
            }
            catch (e) {
                console.log(e + ' Error Showing Ads')
                showMessage()
            }
    };
    
    this._showLeaderboard = function()
    {
        ID.GameAPI.Leaderboards.list({table:'Leaderboard'})
    }
    
    this.unload = function(){
        createjs.Tween.get(_oFade)
            .wait(MESSAGE_GAMEOVER_DELAY)
            .to({alpha:0},500);
    
        createjs.Tween.get(_oPanelContainer)
            .wait(MESSAGE_GAMEOVER_DELAY)
            .to({y:_pStartPanelPos.y},400, createjs.Ease.backIn)
            .call(function(){
                _oButExit.unload(); 
                _oButRestart.unload();
                _oButLedearBoard.unload();
                s_oStage.removeChild(_oContainer);
                s_oEndPanel = null;        
        }); 
    };
    
    this._onExit = function(){
         s_oMain.removeY8Logo()
        this.unload();
        s_oGame.onExit();
    };
    
    this._onRestart = function(){
        s_oMain.removeY8Logo()
        this.unload();
        s_oGame.restart();
    };
    
    s_oEndPanel = this;
    
    this._init();
}

var s_oEndPanel = null;