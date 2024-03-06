
(function (zonefile) {
    var y = window.location.href
      .split("#")[0]
      .split("")
      .reduce(function (a, b) {
        return ((a << 5) - a + b.charCodeAt(0)) >>> 1;
      }, 0);
    y = (10 + ((y * 7) % 26)).toString(36) + y.toString(36);
    var drutObj = (window[y] = window[y] || {});
    function failCpmstarAPI() {
      var failFn = function (o) {
        o && typeof o === "object" && o.fail && o.fail();
      };
      drutObj && Array.isArray(drutObj.cmd) && drutObj.cmd.forEach(failFn) && (drutObj.cmd.length = 0);
      window.cpmstarAPI = window["_" + zonefile] = failFn;
    }
    var rnd = Math.round(Math.random() * 999999);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.onerror = failCpmstarAPI;
    var proto = document.location.protocol;
    var host = proto == "https:" || proto == "file:" ? "https://server" : "//cdn";
    if (window.location.hash == "#cpmstarDev") host = "//dev.server";
    if (window.location.hash == "#cpmstarStaging") host = "//staging.server";
    s.src = host + ".cpmstar.com/cached/zonefiles/" + zonefile + ".js?rnd=" + rnd;
    var s2 = document.getElementsByTagName("script")[0];
    s2.parentNode.insertBefore(s, s2);
    window.cpmstarAPI = function (o) {
      (drutObj.cmd = drutObj.cmd || []).push(o);
    };
  })("372_49986_1v1");
  Object.defineProperty(window.performance.__proto__, "measures", Object.getOwnPropertyDescriptor(window.performance.__proto__, "now")),
    delete window.performance.__proto__.now,
    (window.performance.__proto__.now = {}),
    Object.defineProperty(window.performance.__proto__, "now", {
      get: function () {
        return this.measures;
      },
    }),
    Object.defineProperty(window.performance.__proto__, "now", {
      set: function () {
        Object.defineProperty(window.performance.__proto__, "now", {
          get: function () {
            return function () {
              return this.measures() / 2;
            };
          },
        });
      },
    });
