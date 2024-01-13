"use strict";
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
(NORD.initGameDefinitions = function () {
  (NORD.definitionsManager.appSize = {
    widthMin: 640,
    widthMax: 640,
    heightMin: 480,
    heightMax: 480,
  }),
    (NORD.definitionsManager.stageColor = 58),
    (NORD.definitionsManager.appName = "Retro-Ping-Pong"),
    (NORD.definitionsManager.appVersion = "1.0"),
    (NORD.definitionsManager.colorYellow = 14604036),
    (NORD.definitionsManager.avaiableDomains = [
      "localhost",
      "z-var.ru",
      "coolmath-games.com",
      "coolmath-games.com",
      "edit.coolmath-games.com",
      "stage.coolmath-games.com",
      "edit-stage.coolmath-games.com",
      "kdata1",
      "kbhgames.com",
      "ubg4all.github.io",
      "dev.coolmath-games.com",
      "m.coolmath-games.com",
      "coolmathgames.com",
      "coolmathgames.com",
      "editmysite.com",
      "googleusercontent.com",
      "edit-stage.coolmathgames.com",
      "dev.coolmathgames.com",
      "m.coolmathgames.com",
    ]),
    (NORD.definitionsManager.assetsGroupBoot = new AssetsGroup("boot", [
      {
        name: "preloader_bar_border",
        url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/preloader/preloader_bar_border.png",
      },
      {
        name: "preloader_bar",
        url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/preloader/preloader_bar.png",
      },
    ]));
  var e = [".ogg", ".m4a"];
  NORD.definitionsManager.assetsGroupMain = new AssetsGroup("main", [
    {
      name: "texture_atlas",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/texture_atlas.json",
    },
    {
      name: "data",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/data.json",
    },
    {
      name: "PH_92",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/fonts/PH_92.fnt",
    },
    {
      name: "PH_46",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/fonts/PH_46.fnt",
    },
    {
      type: "AUDIO",
      name: "sound_click",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/sound_click",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "wall_hit_big_ball",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/wall_hit_big_ball",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "wall_hit_ball",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/wall_hit_ball",
      formats: e,
      volume: 0.6,
    },
    {
      type: "AUDIO",
      name: "ready",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/ready",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "player2_hit_big_ball",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/player2_hit_big_ball",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "player1_hit_big_ball",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/player1_hit_big_ball",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "player2_hit_ball",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/player2_hit_ball",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "player1_hit_ball",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/player1_hit_ball",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "player_win",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/player_win",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "player_goal",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/player_goal",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "play_button",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/play_button",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "kitty_hit_1",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/kitty_hit_1",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "kitty_hit_2",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/kitty_hit_2",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "go",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/go",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "computer_win",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/computer_win",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "computer_goal",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/computer_goal",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "ball_start",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/ball_start",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "ball_hit_bumper",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/ball_hit_bumper",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "blaster_shoot",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/blaster_shoot",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "shoot_hit",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/shoot_hit",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "gravity_well",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/gravity_well",
      formats: e,
    },
    {
      type: "AUDIO",
      name: "ball_fire_ring",
      url: "https://11010787-649293635184583965.preview.editmysite.com/uploads/b/147918137-657013279259128172/files/assets/audio/ball_fire_ring",
      formats: e,
    },
  ]);
}),
  (NORD.App = function () {
    EventEmitter.call(this),
      (NORD.App.instance = this),
      (this.name = "NoName"),
      (this.version = "1.0"),
      (this.platform = "none"),
      (this.dt = 0),
      (this.et = 0),
      (this.etTime = new Date().getTime()),
      (this.fps = 60),
      (this.windowFocus = !0),
      (this.forUpdate = []),
      (this.mouse = { x: 0, y: 0 }),
      (this.touches = []);
  }),
  (NORD.App.prototype = Object.create(EventEmitter.prototype)),
  (NORD.App.prototype.constructor = NORD.App),
  (NORD.App.prototype.init = function () {
    var e = this;
    NORD.initGameDefinitions(),
      (this.platform = Util.isMobile() ? "mobile" : "computer"),
      (this.name = NORD.definitionsManager.appName),
      (this.version = NORD.definitionsManager.appVersion),
      NORD.interaction.addListener("mousemove", function (t) {
        (NORD.app.mouseGlobal = Object.assign({}, t.data.global)),
          (NORD.app.mouse = NORD.GUIManager.stage.toLocal(t.data.global)),
          (NORD.app.touches[t.data.identifier] = Object.assign(
            {},
            NORD.app.mouseGlobal
          )),
          e.emit("pointer_move", { mouse: NORD.app.mouse });
      }),
      NORD.interaction.addListener("touchmove", function (t) {
        (NORD.app.mouseGlobal = Object.assign({}, t.data.global)),
          (NORD.app.mouse = NORD.GUIManager.stage.toLocal(t.data.global)),
          (NORD.app.touches[t.data.identifier] = Object.assign(
            {},
            NORD.app.mouseGlobal
          )),
          e.emit("pointer_move", { mouse: NORD.app.mouse });
      }),
      NORD.interaction.addListener("pointerdown", function (t) {
        (NORD.app.mouseGlobal = Object.assign({}, t.data.global)),
          (NORD.app.mouse = NORD.GUIManager.stage.toLocal(t.data.global)),
          (NORD.app.touches[t.data.identifier] = Object.assign(
            {},
            NORD.app.mouseGlobal
          )),
          e.emit("pointer_down", { mouse: NORD.app.mouse }),
          NORD.app.mouse.x > 0
            ? e.emit("tap_right")
            : NORD.app.mouse.x < 0 && e.emit("tap_left");
      }),
      NORD.interaction.addListener("pointerup", function (t) {
        (NORD.app.mouseGlobal = Object.assign({}, t.data.global)),
          (NORD.app.mouse = NORD.GUIManager.stage.toLocal(t.data.global)),
          (NORD.app.touches[t.data.identifier] = Object.assign(
            {},
            NORD.app.mouseGlobal
          )),
          e.emit("pointer_up", { mouse: NORD.app.mouse });
      }),
      NORD.GUIManager.on("app_resize", this.onAppResize, this),
      NORD.GUIManager.setAppSize(
        NORD.definitionsManager.appSize.widthMin,
        NORD.definitionsManager.appSize.widthMax,
        NORD.definitionsManager.appSize.heightMin,
        NORD.definitionsManager.appSize.heightMax
      ),
      console.log(
        "App[" +
          this.name +
          "], version: " +
          this.version +
          ", platform: " +
          this.platform
      );
  }),
  (NORD.App.prototype.boot = function () {
    if (
      NORD.definitionsManager.avaiableDomains.length &&
      !Util.isDomainAvaiable(NORD.definitionsManager.avaiableDomains)
    )
      return;
    var e = this;
    NORD.definitionsManager.assetsGroupBoot.once(
      "loading_complete",
      function () {
        e.emit("boot_loaded");
      }
    ),
      NORD.definitionsManager.assetsGroupBoot.load();
  }),
  (NORD.App.prototype.onAppResize = function () {}),
  (NORD.App.prototype.windowFocusChange = function (e) {
    if (this.windowFocus == e) return;
    (this.windowFocus = e), this.windowFocus;
  }),
  (NORD.App.prototype.update = function () {
    this.emit("update_before"), this.emit("update"), this.emit("update_after");
  }),
  (NORD.App.prototype.loop = function (e) {
    requestAnimationFrame(NORD.app.loop),
      (NORD.app.et = (e - NORD.app.etTime) * 0.001),
      (NORD.app.etTime = e),
      NORD.app.update(),
      NORD.renderer.render(NORD.GUIManager.rootContainer);
  }),
  (NORD.App.prototype.apiCallback = function (e, t) {
    if (e == "statistics") {
      var s,
        o,
        i,
        n = "";
      NORD.game.config.mode == "classic" ? (n += "1") : (n += "2"),
        NORD.game.config.players != "one"
          ? (n += "0")
          : NORD.game.config.dificulty == "easy"
          ? (n += "1")
          : NORD.game.config.dificulty == "medium"
          ? (n += "2")
          : NORD.game.config.dificulty == "hard" && (n += "3"),
        NORD.game.config.players != "one"
          ? (n += "0")
          : t == "player"
          ? (n += "1")
          : t == "computer"
          ? (n += "2")
          : t == "exit" && (n += "3"),
        (n += NORD.game.config.gamesCount),
        parent && parent.cmgGameEvent && parent.cmgDataEvent("data", n);
      return;
    }
    if (e == "statistics_point") {
      (o = "9"),
        (i =
          ((s = {}),
          _defineProperty(s, "KITTY", "1"),
          _defineProperty(s, "INVISIBLE_WALL", "4"),
          _defineProperty(s, "INVISIBLE_AREA", "3"),
          _defineProperty(s, "GRAVITY_WELL", "2"),
          _defineProperty(s, "DOUBLE_BALL", "5"),
          _defineProperty(s, "BIG_BALL_LITTLE_PADDLES", "6"),
          _defineProperty(s, "SMALL_GRAVITY_WELL", "2"),
          _defineProperty(s, "FIRE_ZONE", "8"),
          _defineProperty(s, "BUMPER", "9"),
          _defineProperty(s, "STUN_GUN", "7"),
          s)),
        NORD.game.config.dificulty == "easy"
          ? (o += "1")
          : NORD.game.config.dificulty == "medium"
          ? (o += "2")
          : NORD.game.config.dificulty == "hard" && (o += "3"),
        (o += i[t.roundMode]),
        t.win == "computer" ? (o += "2") : (o += "1"),
        parent && parent.cmgGameEvent && parent.cmgDataEvent("data", o);
      return;
    }
    parent &&
      parent.cmgGameEvent &&
      (t != null ? parent.cmgGameEvent(e, t) : parent.cmgGameEvent(e));
  }),
  (NORD.App.instance = null),
  (NORD.App.getInstance = function () {
    return NORD.App.instance;
  }),
  (NORD.Game = function () {
    EventEmitter.call(this);
    var e = this;
    (this.screenPreloader = null),
      (this.config = {
        players: "one",
        dificulty: "easy",
        mode: "action",
        gamesCount: 0,
        actionHintShows: 0,
        isActionPlayed: !1,
        isControlVSCompTutorial: !1,
      }),
      (this.isShootTutorial = !1),
      (this.isControlTutorial = !1),
      this.loadConfig(),
      NORD.app.once("boot_loaded", function () {
        (e.screenPreloader = new NORD.ScreenPreloader({
          name: "screen_preloader",
          parentPanel: NORD.GUIManager.stage,
          container: NORD.GUIManager.containerCenter,
        })),
          e.screenPreloader.load(function () {
            e.screenPreloader.tween({ name: "hide_anim" }, function () {
              e.init();
            });
          });
      });
  }),
  (NORD.Game.prototype = Object.create(EventEmitter.prototype)),
  (NORD.Game.prototype.constructor = NORD.Game),
  (NORD.Game.prototype.init = function () {
    this.config.actionHintShows++,
      this.saveConfig(),
      (this.field = new NORD.Field()),
      (this.screenMainMenu = new NORD.ScreenMainMenu({
        name: "screen_main_menu",
        parentPanel: NORD.GUIManager.stage,
        container: NORD.GUIManager.containerCenter,
      })),
      (this.screenGame = new NORD.ScreenGame({
        name: "screen_game",
        parentPanel: NORD.GUIManager.stage,
        container: NORD.GUIManager.containerCenter,
      })),
      (this.panelSettings = new NORD.PanelSettings({
        name: "panel_settings",
        parentPanel: NORD.GUIManager.stage,
        container: NORD.GUIManager.containerCenter,
      })),
      this.screenMainMenu.tween({ name: "show_anim_from_preloader" }),
      NORD.GUIManager.on("app_resize", this.onAppResize, this),
      NORD.GUIManager.autoresize(),
      NORD.app.on("update", this.update, this),
      NORD.app.on("update_after", this.updateAfter, this);
  }),
  (NORD.Game.prototype.setConfig = function (e) {
    (this.config = e), console.log("Set config:", e), this.saveConfig();
  }),
  (NORD.Game.prototype.saveConfig = function () {
    var e = this.config,
      t = JSON.stringify(e);
    localStorage.setItem("pong_save", t);
  }),
  (NORD.Game.prototype.loadConfig = function () {
    var t = localStorage.getItem("pong_save"),
      e = JSON.parse(t);
    if (!e) return;
    this.config = e;
  }),
  (NORD.Game.prototype.update = function () {}),
  (NORD.Game.prototype.updateAfter = function () {}),
  (NORD.Game.prototype.onAppResize = function () {
    window.scrollTo(0, 0);
  }),
  (NORD.Game.prototype.soundClickSimple = function () {
    return NORD.assetsManager.getAsset("sound_click");
  }),
  (NORD.Game.prototype.tweenClickSimple = function (e) {
    (e.scale = 0.95), (e.time = 0.07), NORD.GUI.Button.tweenClickSimple(e);
  }),
  (NORD.Game.prototype.tweenClickSimpleB = function (e) {
    (e.scale = 0.5 * 0.95),
      (e.time = 0.07),
      NORD.GUI.Button.tweenClickSimple(e);
  });
var createPaddle = function () {
    var c,
      t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 80,
      l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.3,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 20,
      n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      n = n * Util.TO_RADIANS,
      s = (0.5 + l) * t,
      i = Math.sqrt(s * s - (t / 2) * (t / 2)),
      a = 0,
      a = s - (s - i),
      d = Util.angle(0, 0, a, -t / 2),
      u = Util.angle(0, 0, a, t / 2),
      o = [];
    return (
      o.push({ x: -r + i, y: -t / 2 }),
      (c = createArc(s, d, u, 30)),
      o.push(Object.assign({}, c)),
      o.push({ x: -r + i, y: t / 2 }),
      o.forEach(function (e) {
        var t = e.x,
          s = e.y;
        (e.x = t * Math.cos(n) - s * Math.sin(n)),
          (e.y = t * Math.sin(n) + s * Math.cos(n));
      }),
      o
    );
  },
  drawVertices;
function createP(e, t, n, s) {
  console.log("CCC:", e, t, n, s), (n = 20);
  for (
    var l,
      o = [],
      i = { x: e.x - n, y: e.y + 10 * s },
      a = Util.angle(i.x, i.y, e.x, e.y),
      d = Util.sign(t - a),
      r = (t - a) / 10,
      c = 0;
    c < 10;
    c++
  ) {
    if (((a += r), c < 3)) continue;
    (l = Util.rotatePointDeg(e.x, e.y, i.x, i.y, a)),
      r > 0 ? o.unshift(l) : o.push(l);
  }
  return console.log("F:", d, r, r < 0, o), o;
}
function rotatePoint(e, t) {
  var n = e.x,
    s = e.y;
  return (
    (e.x = n * Math.cos(t) - s * Math.sin(t)),
    (e.y = n * Math.sin(t) + s * Math.cos(t)),
    e
  );
}
function createArc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 10,
    o = [],
    i = n - t;
  for (a(t); Math.abs(n - t) > (i / (s - 1)) * 0.999999; )
    (t += i / (s - 1)), a(t);
  return o;
  function a(t) {
    var n = { x: 0, y: 0 },
      s = e,
      i = 0;
    (n.x = s * Math.cos(t) - i * Math.sin(t)),
      (n.y = s * Math.sin(t) + i * Math.cos(t)),
      o.push(n);
  }
}
function createPaddleSide() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    t = e / 2,
    n = createArc(
      t,
      Util.angle(0, 0, t, -e / 2),
      Util.angle(0, 0, t, e / 2),
      10
    );
  return n;
}
drawVertices = function (t) {
  var s,
    o,
    n = new PIXI.Graphics();
  n.beginFill(0, 0.2),
    n.lineStyle(1, 16777215, 1),
    (s = t[0]),
    n.moveTo(s.x, s.y);
  for (o = 1; o < t.length; o++) n.lineTo(t[o].x, t[o].y);
  return n.lineTo(s.x, s.y), n;
};
