
(function (w, pid) {
    var r = function (c, m) {
        c = c.split("").reduce(function (a, b) {
          return ((a << 5) - a + b.charCodeAt(0)) >>> m;
        }, 0);
        return (10 + ((c * 7) % 26)).toString(36) + c.toString(36);
      },
      y = r(w.location.href.split("#")[0], 1),
      c = r(w.location.href.split("#")[0] + pid, 0);
    w.document.write('<div style="width:300px;height:600px" class="' + c + '"></div>');
  })(window, 85420);
