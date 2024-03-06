(function () {
  var n,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    p = ca(this),
    q = function (a, b) {
      if (b)
        a: {
          var c = p;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  q("Symbol", function (a) {
    if (a) return a;
    var b = function (f, h) {
      this.g = f;
      ba(this, "description", { configurable: !0, writable: !0, value: h });
    };
    b.prototype.toString = function () {
      return this.g;
    };
    var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  q("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = p[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return da(aa(this));
          },
        });
    }
    return a;
  });
  var da = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    ea = function (a) {
      return (a.raw = a);
    },
    t = function (a, b) {
      a.raw = b;
      return a;
    },
    v = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    fa = function (a) {
      if (!(a instanceof Array)) {
        a = v(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    w = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ha =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ia;
  if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
  else {
    var ja;
    a: {
      var ka = { a: !0 },
        la = {};
      try {
        la.__proto__ = ka;
        ja = la.a;
        break a;
      } catch (a) {}
      ja = !1;
    }
    ia = ja
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ma = ia,
    na = function (a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (ma) ma(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.I = b.prototype;
    },
    oa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  q("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(h) {
      return h instanceof e
        ? h
        : new e(function (g) {
            g(h);
          });
    }
    if (a) return a;
    b.prototype.h = function (h) {
      if (null == this.g) {
        this.g = [];
        var g = this;
        this.i(function () {
          g.l();
        });
      }
      this.g.push(h);
    };
    var d = p.setTimeout;
    b.prototype.i = function (h) {
      d(h, 0);
    };
    b.prototype.l = function () {
      for (; this.g && this.g.length; ) {
        var h = this.g;
        this.g = [];
        for (var g = 0; g < h.length; ++g) {
          var k = h[g];
          h[g] = null;
          try {
            k();
          } catch (l) {
            this.j(l);
          }
        }
      }
      this.g = null;
    };
    b.prototype.j = function (h) {
      this.i(function () {
        throw h;
      });
    };
    var e = function (h) {
      this.g = 0;
      this.i = void 0;
      this.h = [];
      this.s = !1;
      var g = this.j();
      try {
        h(g.resolve, g.reject);
      } catch (k) {
        g.reject(k);
      }
    };
    e.prototype.j = function () {
      function h(l) {
        return function (m) {
          k || ((k = !0), l.call(g, m));
        };
      }
      var g = this,
        k = !1;
      return { resolve: h(this.v), reject: h(this.l) };
    };
    e.prototype.v = function (h) {
      if (h === this)
        this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (h instanceof e) this.F(h);
      else {
        a: switch (typeof h) {
          case "object":
            var g = null != h;
            break a;
          case "function":
            g = !0;
            break a;
          default:
            g = !1;
        }
        g ? this.D(h) : this.m(h);
      }
    };
    e.prototype.D = function (h) {
      var g = void 0;
      try {
        g = h.then;
      } catch (k) {
        this.l(k);
        return;
      }
      "function" == typeof g ? this.H(g, h) : this.m(h);
    };
    e.prototype.l = function (h) {
      this.o(2, h);
    };
    e.prototype.m = function (h) {
      this.o(1, h);
    };
    e.prototype.o = function (h, g) {
      if (0 != this.g)
        throw Error(
          "Cannot settle(" +
            h +
            ", " +
            g +
            "): Promise already settled in state" +
            this.g
        );
      this.g = h;
      this.i = g;
      2 === this.g && this.C();
      this.B();
    };
    e.prototype.C = function () {
      var h = this;
      d(function () {
        if (h.u()) {
          var g = p.console;
          "undefined" !== typeof g && g.error(h.i);
        }
      }, 1);
    };
    e.prototype.u = function () {
      if (this.s) return !1;
      var h = p.CustomEvent,
        g = p.Event,
        k = p.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof h
        ? (h = new h("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof g
        ? (h = new g("unhandledrejection", { cancelable: !0 }))
        : ((h = p.document.createEvent("CustomEvent")),
          h.initCustomEvent("unhandledrejection", !1, !0, h));
      h.promise = this;
      h.reason = this.i;
      return k(h);
    };
    e.prototype.B = function () {
      if (null != this.h) {
        for (var h = 0; h < this.h.length; ++h) f.h(this.h[h]);
        this.h = null;
      }
    };
    var f = new b();
    e.prototype.F = function (h) {
      var g = this.j();
      h.X(g.resolve, g.reject);
    };
    e.prototype.H = function (h, g) {
      var k = this.j();
      try {
        h.call(g, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.then = function (h, g) {
      function k(u, C) {
        return "function" == typeof u
          ? function (Ra) {
              try {
                l(u(Ra));
              } catch (Sa) {
                m(Sa);
              }
            }
          : C;
      }
      var l,
        m,
        r = new e(function (u, C) {
          l = u;
          m = C;
        });
      this.X(k(h, l), k(g, m));
      return r;
    };
    e.prototype.catch = function (h) {
      return this.then(void 0, h);
    };
    e.prototype.X = function (h, g) {
      function k() {
        switch (l.g) {
          case 1:
            h(l.i);
            break;
          case 2:
            g(l.i);
            break;
          default:
            throw Error("Unexpected state: " + l.g);
        }
      }
      var l = this;
      null == this.h ? f.h(k) : this.h.push(k);
      this.s = !0;
    };
    e.resolve = c;
    e.reject = function (h) {
      return new e(function (g, k) {
        k(h);
      });
    };
    e.race = function (h) {
      return new e(function (g, k) {
        for (var l = v(h), m = l.next(); !m.done; m = l.next())
          c(m.value).X(g, k);
      });
    };
    e.all = function (h) {
      var g = v(h),
        k = g.next();
      return k.done
        ? c([])
        : new e(function (l, m) {
            function r(Ra) {
              return function (Sa) {
                u[Ra] = Sa;
                C--;
                0 == C && l(u);
              };
            }
            var u = [],
              C = 0;
            do
              u.push(void 0),
                C++,
                c(k.value).X(r(u.length - 1), m),
                (k = g.next());
            while (!k.done);
          });
    };
    return e;
  });
  q("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var l = typeof k;
      return ("object" === l && null !== k) || "function" === l;
    }
    function d(k) {
      if (!w(k, f)) {
        var l = new b();
        ba(k, f, { value: l });
      }
    }
    function e(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (m) {
          if (m instanceof b) return m;
          Object.isExtensible(m) && d(m);
          return l(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            m = new a([
              [k, 2],
              [l, 3],
            ]);
          if (2 != m.get(k) || 3 != m.get(l)) return !1;
          m.delete(k);
          m.set(l, 4);
          return !m.has(k) && 4 == m.get(l);
        } catch (r) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var h = 0,
      g = function (k) {
        this.g = (h += Math.random() + 1).toString();
        if (k) {
          k = v(k);
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      };
    g.prototype.set = function (k, l) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!w(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = l;
      return this;
    };
    g.prototype.get = function (k) {
      return c(k) && w(k, f) ? k[f][this.g] : void 0;
    };
    g.prototype.has = function (k) {
      return c(k) && w(k, f) && w(k[f], this.g);
    };
    g.prototype.delete = function (k) {
      return c(k) && w(k, f) && w(k[f], this.g) ? delete k[f][this.g] : !1;
    };
    return g;
  });
  q("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var g = Object.seal({ x: 4 }),
            k = new a(v([[g, "s"]]));
          if (
            "s" != k.get(g) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            2 != k.size
          )
            return !1;
          var l = k.entries(),
            m = l.next();
          if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
          m = l.next();
          return m.done ||
            4 != m.value[0].x ||
            "t" != m.value[1] ||
            !l.next().done
            ? !1
            : !0;
        } catch (r) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (g) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (g) {
          g = v(g);
          for (var k; !(k = g.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (g, k) {
      g = 0 === g ? 0 : g;
      var l = d(this, g);
      l.list || (l.list = this[0][l.id] = []);
      l.A
        ? (l.A.value = k)
        : ((l.A = {
            next: this[1],
            G: this[1].G,
            head: this[1],
            key: g,
            value: k,
          }),
          l.list.push(l.A),
          (this[1].G.next = l.A),
          (this[1].G = l.A),
          this.size++);
      return this;
    };
    c.prototype.delete = function (g) {
      g = d(this, g);
      return g.A && g.list
        ? (g.list.splice(g.index, 1),
          g.list.length || delete this[0][g.id],
          (g.A.G.next = g.A.next),
          (g.A.next.G = g.A.G),
          (g.A.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].G = f();
      this.size = 0;
    };
    c.prototype.has = function (g) {
      return !!d(this, g).A;
    };
    c.prototype.get = function (g) {
      return (g = d(this, g).A) && g.value;
    };
    c.prototype.entries = function () {
      return e(this, function (g) {
        return [g.key, g.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (g) {
        return g.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (g) {
        return g.value;
      });
    };
    c.prototype.forEach = function (g, k) {
      for (var l = this.entries(), m; !(m = l.next()).done; )
        (m = m.value), g.call(k, m[1], m[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (g, k) {
        var l = k && typeof k;
        "object" == l || "function" == l
          ? b.has(k)
            ? (l = b.get(k))
            : ((l = "" + ++h), b.set(k, l))
          : (l = "p_" + k);
        var m = g[0][l];
        if (m && w(g[0], l))
          for (g = 0; g < m.length; g++) {
            var r = m[g];
            if ((k !== k && r.key !== r.key) || k === r.key)
              return { id: l, list: m, index: g, A: r };
          }
        return { id: l, list: m, index: -1, A: void 0 };
      },
      e = function (g, k) {
        var l = g[1];
        return da(function () {
          if (l) {
            for (; l.head != g[1]; ) l = l.G;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var g = {};
        return (g.G = g.next = g.head = g);
      },
      h = 0;
    return c;
  });
  q("Math.log2", function (a) {
    return a
      ? a
      : function (b) {
          return Math.log(b) / Math.LN2;
        };
  });
  q("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) w(b, d) && c.push(b[d]);
          return c;
        };
  });
  q("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  q("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  q("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.includes must not be a regular expression"
            );
          return -1 !== (this + "").indexOf(b, c || 0);
        };
  });
  q("Set", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(v([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == c ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (h) {
          return !1;
        }
      })()
    )
      return a;
    var b = function (c) {
      this.g = new Map();
      if (c) {
        c = v(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    };
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.g.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  q("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  var pa = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  q("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return pa(this, function (b, c) {
            return [b, c];
          });
        };
  });
  q("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return pa(this, function (b) {
            return b;
          });
        };
  });
  q("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return pa(this, function (b, c) {
            return c;
          });
        };
  });
  q("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (g) {
                  return g;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var h = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, h++));
          } else
            for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
          return e;
        };
  });
  q("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) w(b, d) && c.push([d, b[d]]);
          return c;
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var x = this || self,
    y = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    qa = function (a) {
      var b = y(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    z = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    ra = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    sa = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    ta = function (a, b, c) {
      ta =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? ra
          : sa;
      return ta.apply(null, arguments);
    },
    ua = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    A = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.I = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.gb = function (d, e, f) {
        for (
          var h = Array(arguments.length - 2), g = 2;
          g < arguments.length;
          g++
        )
          h[g - 2] = arguments[g];
        return b.prototype[e].apply(d, h);
      };
    },
    va = function (a) {
      return a;
    };
  function wa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, wa);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  A(wa, Error);
  wa.prototype.name = "CustomError";
  function xa(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    wa.call(this, c + a[d]);
  }
  A(xa, wa);
  xa.prototype.name = "AssertionError";
  function ya(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var f = d;
    } else a && ((e += ": " + a), (f = b));
    throw new xa("" + e, f || []);
  }
  var B = function (a, b, c) {
      a || ya("", null, b, Array.prototype.slice.call(arguments, 2));
    },
    za = function (a, b) {
      throw new xa(
        "Failure" + (a ? ": " + a : ""),
        Array.prototype.slice.call(arguments, 1)
      );
    },
    Aa = function (a, b, c) {
      "number" !== typeof a &&
        ya(
          "Expected number but got %s: %s.",
          [y(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
      return a;
    },
    Ba = function (a, b, c) {
      Array.isArray(a) ||
        ya(
          "Expected array but got %s: %s.",
          [y(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    };
  var Ca, Da;
  a: {
    for (var Ea = ["CLOSURE_FLAGS"], Fa = x, Ga = 0; Ga < Ea.length; Ga++)
      if (((Fa = Fa[Ea[Ga]]), null == Fa)) {
        Da = null;
        break a;
      }
    Da = Fa;
  }
  var Ha = Da && Da[610401301];
  Ca = null != Ha ? Ha : !1;
  function Ia() {
    var a = x.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Ja,
    Ka = x.navigator;
  Ja = Ka ? Ka.userAgentData || null : null;
  function La(a) {
    return Ca
      ? Ja
        ? Ja.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function D(a) {
    return -1 != Ia().indexOf(a);
  }
  function E() {
    return Ca ? !!Ja && 0 < Ja.brands.length : !1;
  }
  function Ma() {
    return E()
      ? La("Chromium")
      : ((D("Chrome") || D("CriOS")) && !(E() ? 0 : D("Edge"))) || D("Silk");
  }
  var Na = Array.prototype.indexOf
      ? function (a, b) {
          B(null != a.length);
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Oa = Array.prototype.forEach
      ? function (a, b) {
          B(null != a.length);
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a);
        };
  function Pa(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  var Qa = function (a) {
    Qa[" "](a);
    return a;
  };
  Qa[" "] = function () {};
  var Ta = function (a, b) {
    try {
      return Qa(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var Ua = E() ? !1 : D("Trident") || D("MSIE"),
    Va =
      D("Gecko") &&
      !(-1 != Ia().toLowerCase().indexOf("webkit") && !D("Edge")) &&
      !(D("Trident") || D("MSIE")) &&
      !D("Edge");
  !D("Android") || Ma();
  Ma();
  D("Safari") &&
    (Ma() ||
      (E() ? 0 : D("Coast")) ||
      (E() ? 0 : D("Opera")) ||
      (E() ? 0 : D("Edge")) ||
      (E() ? La("Microsoft Edge") : D("Edg/")) ||
      (E() && La("Opera")));
  B(!0);
  var Wa =
    "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol("INTERNAL_ARRAY_STATE")
      : void 0;
  B(
    13 ===
      Math.round(
        Math.log2(
          Math.max.apply(
            Math,
            fa(
              Object.values({
                Qa: 1,
                Oa: 2,
                Na: 4,
                Ta: 8,
                Sa: 16,
                Ra: 32,
                wa: 64,
                eb: 128,
                Ma: 256,
                La: 512,
                Pa: 1024,
                ya: 2048,
                bb: 4096,
                za: 8192,
              })
            )
          )
        )
      )
  );
  var Xa = Object.getOwnPropertyDescriptor(Array.prototype, "ta");
  Object.defineProperties(Array.prototype, {
    ta: {
      get: function () {
        function a(e, f) {
          e & b && c.push(f);
        }
        var b = Ya(this),
          c = [];
        a(1, "IS_REPEATED_FIELD");
        a(2, "IS_IMMUTABLE_ARRAY");
        a(4, "IS_API_FORMATTED");
        a(4096, "STRING_FORMATTED");
        a(8192, "GBIGINT_FORMATTED");
        a(8, "ONLY_MUTABLE_VALUES");
        a(32, "MUTABLE_REFERENCES_ARE_OWNED");
        a(64, "CONSTRUCTED");
        a(128, "TRANSFERRED");
        a(256, "HAS_SPARSE_OBJECT");
        a(512, "HAS_MESSAGE_ID");
        a(2048, "FROZEN_ARRAY");
        var d = Za(b);
        536870912 !== d && c.push("pivot: " + d);
        d = c.join(",");
        return Xa ? Xa.get.call(this) + "|" + d : d;
      },
      configurable: !0,
      enumerable: !1,
    },
  });
  var Ya = Wa
    ? function (a) {
        Ba(a, "state is only maintained on arrays.");
        return a[Wa] | 0;
      }
    : function (a) {
        Ba(a, "state is only maintained on arrays.");
        return a.ca | 0;
      };
  function Za(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var $a = [];
  (Wa
    ? function (a, b) {
        Ba(a, "state is only maintained on arrays.");
        B((b & 16777215) == b);
        a[Wa] = b;
      }
    : function (a, b) {
        Ba(a, "state is only maintained on arrays.");
        B((b & 16777215) == b);
        void 0 !== a.ca
          ? (a.ca = b)
          : Object.defineProperties(a, {
              ca: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      })($a, 55);
  Object.freeze($a);
  var ab =
    "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var bb = function () {
    throw Error("please construct maps as mutable then call toImmutable");
  };
  if (ab) {
    var cb = function () {
        throw Error(
          "Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information"
        );
      },
      db = {};
    Object.defineProperties(
      bb,
      ((db[Symbol.hasInstance] = {
        value: cb,
        configurable: !1,
        writable: !1,
        enumerable: !1,
      }),
      db)
    );
    B(
      bb[Symbol.hasInstance] === cb,
      "defineProperties did not work: was it monkey-patched?"
    );
  }
  if ("undefined" !== typeof Proxy) {
    var F = eb;
    new Proxy(
      {},
      {
        getPrototypeOf: F,
        setPrototypeOf: F,
        isExtensible: F,
        preventExtensions: F,
        getOwnPropertyDescriptor: F,
        defineProperty: F,
        has: F,
        get: F,
        set: F,
        deleteProperty: F,
        apply: F,
        construct: F,
      }
    );
  }
  function eb() {
    throw Error(
      "this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array"
    );
    throw Error();
  }
  function fb() {}
  function gb(a, b) {
    b = void 0 === b ? new Set() : b;
    if (b.has(a)) return "(Recursive reference)";
    switch (typeof a) {
      case "object":
        if (a) {
          var c = Object.getPrototypeOf(a);
          switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
              b.add(a);
              var d =
                "[" +
                Array.from(a, function (e) {
                  return gb(e, b);
                }).join(", ") +
                "]";
              b.delete(a);
              c !== Array.prototype && (d = hb(c.constructor) + "(" + d + ")");
              return d;
            case Object.prototype:
              return (
                b.add(a),
                (c =
                  "{" +
                  Object.entries(a)
                    .map(function (e) {
                      var f = v(e);
                      e = f.next().value;
                      f = f.next().value;
                      return e + ": " + gb(f, b);
                    })
                    .join(", ") +
                  "}"),
                b.delete(a),
                c
              );
            default:
              return (
                (d = "Object"),
                c && c.constructor && (d = hb(c.constructor)),
                "function" === typeof a.toString &&
                a.toString !== Object.prototype.toString
                  ? d + "(" + String(a) + ")"
                  : "(object " + d + ")"
              );
          }
        }
        break;
      case "function":
        return "function " + hb(a);
      case "number":
        if (!Number.isFinite(a)) return String(a);
        break;
      case "bigint":
        return a.toString(10) + "n";
      case "symbol":
        return a.toString();
    }
    return JSON.stringify(a);
  }
  function hb(a) {
    var b = a.name;
    b ||
      (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
    return b;
  }
  function ib(a) {
    var b = jb();
    a || kb("Guard truthy failed:", b || "Expected truthy, got " + gb(a));
  }
  function lb(a, b) {
    a.aa =
      "function" === typeof b
        ? b
        : function () {
            return b;
          };
    return a;
  }
  function mb(a, b, c, d) {
    var e = a(b, c);
    if (!e && c) {
      var f = "";
      d &&
        ((f = ("function" === typeof d ? d() : d).trim()),
        f.length && (f += ": "));
      f += "Expected " + a.aa() + ", got " + gb(b);
      c.push(f);
    }
    return e;
  }
  var nb = void 0;
  function jb() {
    var a = nb;
    nb = void 0;
    return a;
  }
  function kb() {
    throw Error(
      oa
        .apply(0, arguments)
        .map(function (a) {
          return "function" === typeof a ? a() : a;
        })
        .filter(function (a) {
          return a;
        })
        .join("\n")
        .trim()
        .replace(/:$/, "")
    );
  }
  (function () {
    var a = x.jspbGetTypeName;
    x.jspbGetTypeName = a
      ? function (b) {
          return a(b) || void 0;
        }
      : fb;
  })(); /*

 SPDX-License-Identifier: Apache-2.0
*/
  var ob = ea([""]),
    pb = t(["\x00"], ["\\0"]),
    qb = t(["\n"], ["\\n"]),
    rb = t(["\x00"], ["\\u0000"]),
    sb = ea([""]),
    tb = t(["\x00"], ["\\0"]),
    ub = t(["\n"], ["\\n"]),
    vb = t(["\x00"], ["\\u0000"]);
  function wb(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw);
  }
  function xb(a) {
    return -1 === a.toString().indexOf("`");
  }
  var yb =
      xb(function (a) {
        return a(ob);
      }) ||
      xb(function (a) {
        return a(pb);
      }) ||
      xb(function (a) {
        return a(qb);
      }) ||
      xb(function (a) {
        return a(rb);
      }),
    zb = wb(sb) && wb(tb) && wb(ub) && wb(vb);
  function Ab(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function Bb(a) {
    for (var b in a) delete a[b];
  }
  var Cb =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function Db(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Cb.length; f++)
        (c = Cb[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Eb;
  var G = function (a, b) {
    if (b !== Fb)
      throw Error("TrustedResourceUrl is not meant to be built directly");
    this.g = a;
  };
  G.prototype.toString = function () {
    return this.g + "";
  };
  G.prototype.P = !0;
  G.prototype.O = function () {
    return this.g.toString();
  };
  var Fb = {},
    Gb = function (a) {
      if (void 0 === Eb) {
        var b = null;
        var c = x.trustedTypes;
        if (c && c.createPolicy) {
          try {
            b = c.createPolicy("goog#html", {
              createHTML: va,
              createScript: va,
              createScriptURL: va,
            });
          } catch (d) {
            x.console && x.console.error(d.message);
          }
          Eb = b;
        } else Eb = b;
      }
      a = (b = Eb) ? b.createScriptURL(a) : a;
      return new G(a, Fb);
    };
  var H = function (a, b) {
    if (b !== Hb) throw Error("SafeUrl is not meant to be built directly");
    this.g = a;
  };
  H.prototype.toString = function () {
    return this.g.toString();
  };
  H.prototype.P = !0;
  H.prototype.O = function () {
    return this.g.toString();
  };
  var Hb = {},
    Ib = new H("about:invalid#zClosurez", Hb);
  new H("about:blank", Hb);
  var Jb = {},
    Kb = function () {
      if (Jb !== Jb) throw Error("SafeStyle is not meant to be built directly");
      this.P = !0;
    };
  Kb.prototype.O = function () {
    return "";
  };
  Kb.prototype.toString = function () {
    return "".toString();
  };
  new Kb();
  var Lb = {},
    Mb = function () {
      if (Lb !== Lb)
        throw Error("SafeStyleSheet is not meant to be built directly");
      this.P = !0;
    };
  Mb.prototype.toString = function () {
    return "".toString();
  };
  Mb.prototype.O = function () {
    return "";
  };
  new Mb();
  var Nb = {},
    Ob = function () {
      var a = (x.trustedTypes && x.trustedTypes.emptyHTML) || "";
      if (Nb !== Nb) throw Error("SafeHtml is not meant to be built directly");
      this.g = a;
      this.P = !0;
    };
  Ob.prototype.O = function () {
    return this.g.toString();
  };
  Ob.prototype.toString = function () {
    return this.g.toString();
  };
  new Ob();
  var Pb =
    Object.freeze ||
    function (a) {
      return a;
    };
  var Qb = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Qb.prototype.toString = function () {
    return this.name;
  };
  var Rb = new Qb("OFF", Infinity),
    Sb = new Qb("WARNING", 900),
    Tb = new Qb("CONFIG", 700),
    Ub = function () {
      this.clear();
    },
    Vb;
  Ub.prototype.clear = function () {};
  var Wb = function (a, b, c) {
    this.reset(a || Rb, b, c, void 0, void 0);
  };
  Wb.prototype.reset = function () {};
  var Xb = function (a, b) {
      this.g = null;
      this.j = [];
      this.h = (void 0 === b ? null : b) || null;
      this.i = [];
      this.l = {
        g: function () {
          return a;
        },
      };
    },
    Yb = function (a) {
      if (a.g) return a.g;
      if (a.h) return Yb(a.h);
      za("Root logger has no level set.");
      return Rb;
    },
    Zb = function (a, b) {
      for (; a; )
        a.j.forEach(function (c) {
          c(b);
        }),
          (a = a.h);
    },
    $b = function () {
      this.entries = {};
      var a = new Xb("");
      a.g = Tb;
      this.entries[""] = a;
    },
    ac,
    bc = function (a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = bc(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      var d = new Xb(b, c);
      a.entries[b] = d;
      c.i.push(d);
      return d;
    },
    cc = function () {
      ac || (ac = new $b());
      return ac;
    };
  var dc = function (a) {
    this.sa = a;
  };
  function ec(a) {
    return new dc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var fc = [
      ec("data"),
      ec("http"),
      ec("https"),
      ec("mailto"),
      ec("ftp"),
      new dc(function (a) {
        return /^[^:]*([/?#]|$)/.test(a);
      }),
    ],
    gc = "function" === typeof URL,
    hc = [],
    ic = function () {};
  jc(function (a) {
    var b = bc(cc(), "safevalues").l;
    if (b) {
      a = "A URL with content '" + a + "' was sanitized away.";
      var c = Sb,
        d;
      if ((d = b))
        if ((d = b && c)) {
          d = c.value;
          var e = b ? Yb(bc(cc(), b.g())) : Rb;
          d = d >= e.value;
        }
      d &&
        ((c = c || Rb),
        (d = bc(cc(), b.g())),
        "function" === typeof a && (a = a()),
        Vb || (Vb = new Ub()),
        (b = new Wb(c, a, b.g())),
        Zb(d, b));
    }
  });
  function jc(a) {
    -1 === hc.indexOf(a) && hc.push(a);
    ic = function (b) {
      hc.forEach(function (c) {
        c(b);
      });
    };
  }
  function kc(a) {
    var b = oa.apply(1, arguments);
    if (
      !Array.isArray(a) ||
      !Array.isArray(a.raw) ||
      a.length !== a.raw.length ||
      (!yb && a === a.raw) ||
      !((yb && !zb) || wb(a)) ||
      b.length + 1 !== a.length
    )
      throw new TypeError(
        "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
      );
    if (0 === b.length) return Gb(a[0]);
    var c = a[0].toLowerCase();
    if (/^data:/.test(c))
      throw Error(
        "Data URLs cannot have expressions in the template literal input."
      );
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var d = c.indexOf("//") + 2;
      var e = c.indexOf("/", d);
      if (e <= d)
        throw Error(
          "Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'."
        );
      d = c.substring(d, e);
      if (!/^[0-9a-z.:-]+$/i.test(d))
        throw Error("The origin contains unsupported characters.");
      if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
      if (!/(^|\.)[a-z][^.]*$/i.test(d))
        throw Error("The top-level domain must start with a letter.");
      d = !0;
    } else d = !1;
    if (!d)
      if (/^\//.test(c))
        if ("/" === c || (1 < c.length && "/" !== c[1] && "\\" !== c[1]))
          d = !0;
        else throw Error("The path start in the url is invalid.");
      else d = !1;
    if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
      if (/^about:blank/.test(c)) {
        if ("about:blank" !== c && !/^about:blank#/.test(c))
          throw Error("The about url is invalid.");
        d = !0;
      } else d = !1;
    if (!d)
      throw Error(
        "Trying to interpolate expressions in an unsupported url format."
      );
    c = a[0];
    for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return Gb(c);
  }
  var lc = /^((market|itms|intent|itms-appss):\/\/)/i;
  var mc = function (a) {
    var b = 0,
      c = !1,
      d = [],
      e = function () {
        b = 0;
        c && ((c = !1), f());
      },
      f = function () {
        b = x.setTimeout(e, 1e3);
        var h = d;
        d = [];
        a.apply(void 0, h);
      };
    return function (h) {
      d = arguments;
      b ? (c = !0) : f();
    };
  };
  var nc = function (a) {
    return null == a ? "" : String(a);
  };
  function oc(a, b) {
    b instanceof G && b.constructor === G
      ? (b = b.g)
      : (za(
          "expected object of type TrustedResourceUrl, got '%s' of type %s",
          b,
          y(b)
        ),
        (b = "type_error:TrustedResourceUrl"));
    a.src = b;
    var c, d;
    (c = (b =
      null ==
      (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  var pc = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  var qc = [];
  var sc = function (a, b) {
      Ab(b, function (c, d) {
        c && "object" == typeof c && c.P && (c = c.O());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : rc.hasOwnProperty(d)
          ? a.setAttribute(rc[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    rc = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    },
    uc = function (a, b, c) {
      var d = arguments,
        e = document,
        f = d[1];
      var h = String(d[0]);
      h = String(h);
      "application/xhtml+xml" === e.contentType && (h = h.toLowerCase());
      h = e.createElement(h);
      f &&
        ("string" === typeof f
          ? (h.className = f)
          : Array.isArray(f)
          ? (h.className = f.join(" "))
          : sc(h, f));
      2 < d.length && tc(e, h, d);
      return h;
    },
    tc = function (a, b, c) {
      function d(g) {
        g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!qa(f) || (z(f) && 0 < f.nodeType)) d(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (z(f)) {
                var h =
                  "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                h = "function" == typeof f.item;
                break a;
              }
            }
            h = !1;
          }
          Oa(h ? Pa(f) : f, d);
        }
      }
    };
  var vc = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    wc = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    };
  var xc = function (a) {
      try {
        return !!a && null != a.location.href && Ta(a, "foo");
      } catch (b) {
        return !1;
      }
    },
    yc = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    zc = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Ac(a) {
    a = void 0 === a ? x : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) &&
      (null == (d = b) ? 0 : d.canonicalUrl)
      ? b
      : null;
  }
  var Bc = function () {
      this.S = {};
    },
    Cc = function () {
      var a = Ac(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6));
        } else b = null;
        return +b;
      }
      for (a = b = window; b && b != b.parent; )
        (b = b.parent), xc(b) && (a = b);
      b = a;
      a = b.google_global_correlator;
      a ||
        (b.google_global_correlator = a =
          1 + Math.floor(Math.random() * Math.pow(2, 43)));
      return a;
    },
    Ec = function (a, b) {
      var c = Dc[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      return void 0 === d ? ((a[c] = b()), a[c]) : d;
    },
    Fc = function (a) {
      var b = Cc();
      return Ec(a, function () {
        return b;
      });
    },
    Gc = null,
    Hc = {},
    Dc =
      ((Hc[8] = "google_prev_ad_formats_by_region"),
      (Hc[9] = "google_prev_ad_slotnames_by_region"),
      Hc);
  var Ic = lb(function (a) {
      return "string" === typeof a;
    }, "string"),
    Jc = lb(function (a) {
      return Array.isArray(a);
    }, "Array<unknown>");
  function Kc() {
    return lb(
      function (a, b) {
        return mb(Jc, a, b)
          ? a.every(function (c, d) {
              return mb(Ic, c, b, "At index " + d);
            })
          : !1;
      },
      function () {
        return "Array<" + Ic.aa() + ">";
      }
    );
  }
  var Lc = function (a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  };
  var Mc = ea(["err_rep.js"]),
    Nc = function () {
      var a = void 0 === a ? "jserror" : a;
      var b = void 0 === b ? 0.01 : b;
      var c = void 0 === c ? kc(Mc) : c;
      this.i = a;
      this.h = b;
      this.g = c;
    };
  var Oc = function (a) {
    var b;
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  };
  var Pc = null;
  function Qc() {
    var a = void 0 === a ? x : a;
    return (a = a.performance) && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Rc() {
    var a = void 0 === a ? x : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  var Sc = function (a, b) {
    var c = Rc() || Qc();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random();
  };
  var I = x.performance,
    Tc = !!(I && I.mark && I.measure && I.clearMarks),
    Uc = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a;
      if ((a = Tc)) {
        var b;
        if (null === Pc) {
          Pc = "";
          try {
            a = "";
            try {
              a = x.top.location.hash;
            } catch (c) {
              a = x.location.hash;
            }
            a && (Pc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = Pc;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    }),
    J = function (a, b) {
      this.l = [];
      this.g = b || x;
      var c = null;
      b &&
        ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        (this.l = b.google_js_reporting_queue),
        (c = b.google_measure_js_timing));
      this.m = Uc() || (null != c ? c : Math.random() < a);
    };
  J.prototype.u = function () {
    this.m = !1;
    this.l != this.g.google_js_reporting_queue &&
      (Uc() && Oa(this.l, Vc), (this.l.length = 0));
  };
  J.prototype.F = function (a) {
    !this.m || 2048 < this.l.length || this.l.push(a);
  };
  var Vc = function (a) {
    a &&
      I &&
      Uc() &&
      (I.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      I.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  };
  J.prototype.start = function (a, b) {
    if (!this.m) return null;
    a = new Sc(a, b);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    I && Uc() && I.mark(b);
    return a;
  };
  J.prototype.end = function (a) {
    if (this.m && (B(a), "number" === typeof a.value)) {
      a.duration = (Rc() || Qc()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      I && Uc() && I.mark(b);
      this.F(a);
    }
  };
  var Wc = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return (a.pq = a.pq || []);
  };
  function Xc(a) {
    a = null === a ? "null" : void 0 === a ? "undefined" : a;
    if ("string" !== typeof a) throw Error("Expected a string");
    return Gb(a);
  }
  function Yc(a, b, c) {
    yc(b, function (d, e) {
      var f = c && c[e];
      (!d && 0 !== d) ||
        f ||
        ((a +=
          "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d))),
        c && (c[e] = !0));
    });
    return a;
  }
  var ad = function (a, b, c, d, e, f, h, g) {
    f = void 0 === f ? Infinity : f;
    h = void 0 === h ? !1 : h;
    J.call(this, a, g);
    var k = this;
    this.H = b;
    this.D = c;
    this.s = d;
    this.M = e;
    this.o = 0;
    this.j = {};
    this.C = {};
    this.T = [];
    this.report = {};
    this.h = 0;
    this.v = [];
    this.J = f;
    this.H = b;
    this.D = c;
    this.s = d;
    this.M = e;
    a = this.g.navigator;
    this.N = !("csi.gstatic.com" !== this.D || !a || !a.sendBeacon);
    (this.g.performance && this.g.performance.now) || K(this, "dat", 1);
    a && a.deviceMemory && K(this, "dmc", a.deviceMemory);
    this.g === this.g.top && K(this, "top", 1);
    this.U = !h;
    this.K = function () {
      k.g.setTimeout(function () {
        L(k);
      }, 1100);
    };
    this.L = function () {
      K(k, "uet", 2);
      for (var m = v(k.T), r = m.next(); !r.done; r = m.next()) {
        r = r.value;
        try {
          r();
        } catch (C) {}
      }
      m = k.g;
      var u = void 0 === u ? {} : u;
      "function" === typeof window.CustomEvent
        ? (r = new CustomEvent("rum_blp", u))
        : ((r = document.createEvent("CustomEvent")),
          r.initCustomEvent("rum_blp", !!u.bubbles, !!u.cancelable, u.detail));
      m.dispatchEvent(r);
      L(k);
      null != k.j.uet && ((k.i -= 3 + k.j.uet.length + 2), delete k.j.uet);
    };
    this.V = mc(function () {
      L(k);
    });
    this.Z = function () {
      var m = k.g.document;
      (null != m.hidden
        ? m.hidden
        : null != m.mozHidden
        ? m.mozHidden
        : null != m.webkitHidden && m.webkitHidden) && k.V();
    };
    this.B = this.g.setTimeout(function () {
      L(k);
    }, 5e3);
    this.i = b.length + c.length + d.length + e.length + 3;
    Oa(this.l, function (m) {
      Zc(k, m);
    });
    b = Wc(this.g);
    var l = function () {
      var m = oa.apply(0, arguments)[0],
        r = Kc(),
        u = jb(),
        C = [];
      mb(r, m, C) ||
        kb.apply(
          null,
          [void 0, u, "Guard " + r.aa() + " failed:"].concat(fa(C.reverse()))
        );
      ib(2 === m.length);
      r = m[0];
      m = m[1];
      u = r.length + m.length + 2;
      8e3 < k.i + k.h + u && L(k);
      k.v.push([r, m]);
      k.h += u;
      6e3 <= k.i + k.h && L(k);
      return 0;
    };
    Oa(b, function (m) {
      return l(m);
    });
    b.length = 0;
    b.push = l;
    K(this, "puid", (this.o + 1).toString(36) + "~" + Date.now().toString(36));
    $c(this);
  };
  na(ad, J);
  var $c = function (a) {
      "complete" === a.g.document.readyState
        ? a.g.setTimeout(function () {
            L(a);
          }, 0)
        : pc(a.g, "load", a.K);
      var b = Oc(a.g.document);
      "undefined" !== typeof b && pc(a.g, b, a.Z);
      pc(a.g, "pagehide", a.L);
    },
    K = function (a, b, c) {
      c = String(c);
      a.i =
        null != a.j[b]
          ? a.i + (c.length - a.j[b].length)
          : a.i + (b.length + c.length + 2);
      a.j[b] = c;
    },
    cd = function (a, b, c) {
      var d = b + "=" + c;
      a.C[d] || (bd(a, b, c, !1), 1e3 > d.length && (a.C[d] = !0));
    },
    bd = function (a, b, c, d, e) {
      e = void 0 === e ? "" : e;
      var f =
        null == a.report[b]
          ? b.length + c.length + 2
          : d
          ? c.length + (void 0 === e ? "" : e).length
          : c.length - a.report[b].length;
      8e3 < a.i + a.h + f && (L(a), (f = b.length + c.length + 2));
      a.report[b] =
        d && null != a.report[b]
          ? a.report[b] + ("" + (void 0 === e ? "" : e) + c)
          : c;
      a.h += f;
      6e3 <= a.i + a.h && L(a);
    },
    L = function (a) {
      if (a.m && a.U) {
        try {
          a.h && (a.sendBeacon(a.report), a.o === a.J && a.u());
        } catch (f) {
          var b = new Nc(),
            c = f;
          var d = void 0 === d ? b.h : d;
          var e = void 0 === e ? b.i : e;
          Math.random() > d ||
            ((c.error && c.meta && c.id) ||
              (c = new Lc(c, { context: 358, id: e })),
            (x.google_js_errors = x.google_js_errors || []),
            x.google_js_errors.push(c),
            x.error_rep_loaded ||
              ((d = x.document),
              (c = zc("SCRIPT", d)),
              oc(c, b.g),
              (b = d.getElementsByTagName("script")[0]) &&
                b.parentNode &&
                b.parentNode.insertBefore(c, b),
              (x.error_rep_loaded = !0)));
        }
        a.report = {};
        a.h = 0;
        a.l.length = 0;
        a.g.clearTimeout(a.B);
        a.B = 0;
      }
    },
    dd = function (a, b) {
      ib(2 === a.s.split("?").length);
      ib("=" === a.s[a.s.length - 1]);
      var c = a.H + "//" + a.D + a.s + a.M,
        d = {};
      c = Yc(c, a.j, d);
      c = Yc(c, b, d);
      b = a.g;
      b.google_timing_params &&
        ((c = Yc(c, b.google_timing_params, d)),
        (b.google_timing_params = void 0));
      Oa(a.v, function (e) {
        ib(2 === e.length);
        var f = v(e);
        e = f.next().value;
        f = f.next().value;
        var h = {};
        c = Yc(c, ((h[e] = f), h));
      });
      a.v.length = 0;
      return c;
    };
  ad.prototype.sendBeacon = function (a) {
    this.o++;
    a = dd(this, a);
    var b = !1;
    try {
      b = !!(
        this.N &&
        this.g.navigator &&
        this.g.navigator.sendBeacon(a, null)
      );
    } catch (d) {
      this.N = !1;
    }
    if (!b) {
      b = this.g;
      b.google_image_requests || (b.google_image_requests = []);
      var c = zc("IMG", b.document);
      c.src = a;
      b.google_image_requests.push(c);
    }
    K(this, "puid", (this.o + 1).toString(36) + "~" + Date.now().toString(36));
  };
  var Zc = function (a, b) {
    var c = "met." + b.type,
      d =
        "number" === typeof b.value
          ? Math.round(b.value).toString(36)
          : b.value,
      e = Math.round(b.duration);
    b =
      "" +
      b.label +
      (null != b.slotId ? "_" + b.slotId : "") +
      ("." + d) +
      (0 < e ? "_" + e.toString(36) : "") +
      (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
    bd(a, c, b, !0, "~");
  };
  ad.prototype.F = function (a) {
    this.m && this.o < this.J && (J.prototype.F.call(this, a), Zc(this, a));
  };
  ad.prototype.u = function () {
    J.prototype.u.call(this);
    this.g.clearTimeout(this.B);
    this.h = this.B = 0;
    this.report = {};
    Bb(this.C);
    Bb(this.j);
    var a = this.g;
    a.removeEventListener && a.removeEventListener("load", this.K, !1);
    a = this.g;
    a.removeEventListener && a.removeEventListener("pagehide", this.L, !1);
  };
  var M = function () {
      this.g = new ad(
        1,
        "https:",
        "csi.gstatic.com",
        "/csi?v=2&s=",
        "ima",
        void 0,
        !0
      );
      if (Gc) var a = Gc;
      else {
        a =
          ((a = void 0 === a ? Ac() : a)
            ? xc(a.master)
              ? a.master
              : null
            : null) || window;
        var b = a.google_persistent_state_async;
        a =
          null != b &&
          "object" == typeof b &&
          null != b.S &&
          "object" == typeof b.S
            ? (Gc = b)
            : (a.google_persistent_state_async = Gc = new Bc());
      }
      a = Fc(a);
      null != a && K(this.g, "c", a);
      a = parseInt(this.g.j.c, 10) / 2;
      null != a && K(this.g, "slotId", a);
      bc(cc(), "google3.javascript.ads.imalib.instrumentation.instrumentation");
    },
    ed = function () {
      B(
        !Object.isSealed(M),
        "Cannot use getInstance() with a sealed constructor."
      );
      var a = "ba";
      if (M.ba && M.hasOwnProperty(a)) a = M.ba;
      else {
        qc.push(M);
        var b = new M();
        M.ba = b;
        B(M.hasOwnProperty(a), "Could not instantiate singleton.");
        a = b;
      }
      return a;
    };
  var fd = (function () {
    if (!x.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      var c = function () {};
      x.addEventListener("test", c, b);
      x.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  function gd(a, b) {
    if ("undefined" !== typeof ReportingObserver) {
      var c = function (e) {
          e = v(e);
          for (var f = e.next(); !f.done; f = e.next())
            (f = f.value), a(f) && b(f);
        },
        d = new ReportingObserver(c, { buffered: !0 });
      x.addEventListener("pagehide", function () {
        c(d.takeRecords(), d);
        d.disconnect();
      });
      d.observe();
    }
  }
  function hd(a) {
    gd(function (b) {
      return b.body && "HeavyAdIntervention" === b.body.id;
    }, a);
  }
  function id(a) {
    hd(function (b) {
      b = b.body.message;
      b.includes("CPU")
        ? a("heavy_ad_intervention_cpu")
        : b.includes("network") && a("heavy_ad_intervention_network");
    });
  }
  function jd(a) {
    a = void 0 === a ? null : a;
    gd(
      function (b) {
        return b.body && "HeavyAdIntervention" === b.body.id;
      },
      function (b) {
        var c = b.body.message,
          d = ed();
        null != c && cd(d.g, "ham", c);
        c.includes("CPU")
          ? cd(d.g, "hacpu", "true")
          : c.includes("network") && cd(d.g, "habytes", "true");
        a && a(b);
      }
    );
  }
  var kd = {
    va: "collapseAd",
    xa: "expandAd",
    Aa: "getAdIcons",
    Ba: "getAdCompanions",
    Ca: "getAdDuration",
    Da: "getAdExpanded",
    Ea: "getAdHeight",
    Fa: "getAdLinear",
    Ga: "getAdRemainingTime",
    Ha: "getAdSkippableState",
    Ia: "getAdVolume",
    Ja: "getAdWidth",
    Ka: "handshakeVersion",
    INIT: "initAd",
    Ua: "pauseAd",
    Va: "resizeAd",
    Wa: "resumeAd",
    Ya: "skipAd",
    Za: "startAd",
    Xa: "setAdVolume",
    ab: "stopAd",
    cb: "subscribe",
    fb: "unsubscribe",
  };
  var ld = function (a, b, c, d) {
      this.m = a;
      this.g = b;
      this.j = c;
      this.l = d;
      this.h = new Map();
      this.i = !1;
    },
    md = function (a) {
      N(a, a.ha, "AdClickThru");
      N(a, a.ia, "AdDurationChange");
      N(a, a.ja, "AdError");
      N(a, a.ka, "AdExpandedChange");
      N(
        a,
        function () {
          return O(a, "AdImpression");
        },
        "AdImpression"
      );
      N(a, a.la, "AdInteraction");
      N(a, a.ma, "AdLinearChange");
      N(a, a.na, "AdLoaded");
      N(a, a.oa, "AdLog");
      N(
        a,
        function () {
          return O(a, "AdPaused");
        },
        "AdPaused"
      );
      N(
        a,
        function () {
          return O(a, "AdPlaying");
        },
        "AdPlaying"
      );
      N(a, a.pa, "AdRemainingTimeChange");
      N(
        a,
        function () {
          return O(a, "AdSizeChange");
        },
        "AdSizeChange"
      );
      N(
        a,
        function () {
          return O(a, "AdSkipped");
        },
        "AdSkipped"
      );
      N(
        a,
        function () {
          return O(a, "AdStarted");
        },
        "AdStarted"
      );
      N(a, a.qa, "AdStopped");
      N(
        a,
        function () {
          return O(a, "AdSkippableStateChange");
        },
        "AdSkippableStateChange"
      );
      N(
        a,
        function () {
          return O(a, "AdUserAcceptInvitation");
        },
        "AdUserAcceptInvitation"
      );
      N(
        a,
        function () {
          return O(a, "AdUserClose");
        },
        "AdUserClose"
      );
      N(
        a,
        function () {
          return O(a, "AdUserMinimize");
        },
        "AdUserMinimize"
      );
      N(
        a,
        function () {
          return O(a, "AdVideoComplete");
        },
        "AdVideoComplete"
      );
      N(
        a,
        function () {
          return O(a, "AdVideoFirstQuartile");
        },
        "AdVideoFirstQuartile"
      );
      N(
        a,
        function () {
          return O(a, "AdVideoMidpoint");
        },
        "AdVideoMidpoint"
      );
      N(
        a,
        function () {
          return O(a, "AdVideoStart");
        },
        "AdVideoStart"
      );
      N(
        a,
        function () {
          return O(a, "AdVideoThirdQuartile");
        },
        "AdVideoThirdQuartile"
      );
      N(a, a.ra, "AdVolumeChange");
      N(a, a.ua, "Ping");
    };
  n = ld.prototype;
  n.ha = function (a, b, c) {
    var d = null;
    /^[\s\xa0]*$/.test(nc(a))
      ? /^[\s\xa0]*$/.test(nc(this.j)) || (d = this.j)
      : (d = a);
    if (
      c &&
      null != d &&
      ((a = d),
      (c = this.l),
      (c = null != c ? c : ""),
      Ua && (c = ""),
      !/^[\s\xa0]*$/.test(nc(a)))
    ) {
      var e;
      a instanceof H || !lc.test(a) ? (e = a) : (e = new H(a, Hb));
      if (e instanceof H) var f = e;
      else {
        f = void 0 === f ? fc : f;
        a: if (((f = void 0 === f ? fc : f), a instanceof H)) f = a;
        else {
          for (e = 0; e < f.length; ++e) {
            var h = f[e];
            if (h instanceof dc && h.sa(a)) {
              f = new H(a, Hb);
              break a;
            }
          }
          f = void 0;
        }
        void 0 === f && ic(a.toString());
        f = f || Ib;
      }
      a = c;
      c = window;
      if (f instanceof H)
        if (f instanceof H && f.constructor === H) var g = f.g;
        else
          za(
            "expected object of type SafeUrl, got '" + f + "' of type " + y(f)
          ),
            (g = "type_error:SafeUrl");
      else {
        b: if (gc) {
          try {
            g = new URL(f);
          } catch (k) {
            g = "https:";
            break b;
          }
          g = g.protocol;
        } else
          c: {
            g = document.createElement("a");
            try {
              g.href = f;
            } catch (k) {
              g = void 0;
              break c;
            }
            g = g.protocol;
            g = ":" === g || "" === g ? "https:" : g;
          }
        "javascript:" === g ? (ic(f), (g = void 0)) : (g = f);
      }
      void 0 !== g && c.open(g, "_blank", a);
    }
    O(this, "AdClickThru", { url: d, id: b });
  };
  n.ia = function () {
    var a = this.g.getAdDuration(),
      b = this.g.getAdRemainingTime();
    O(this, "AdDurationChange", { duration: a, remainingTime: b });
  };
  n.ja = function (a) {
    O(this, "AdError", { message: a });
  };
  n.ka = function () {
    var a = {};
    a.expanded = this.g.getAdExpanded();
    O(this, "AdExpandedChange", a);
  };
  n.la = function (a) {
    O(this, "AdInteraction", { id: a });
  };
  n.ma = function () {
    var a = {};
    a.isLinear = this.g.getAdLinear();
    O(this, "AdLinearChange", a);
  };
  n.na = function () {
    var a = {
      companions:
        "function" === typeof this.g.getAdCompanions
          ? this.g.getAdCompanions()
          : "",
    };
    O(this, "AdLoaded", a);
  };
  n.oa = function (a) {
    O(this, "AdLog", { message: a });
  };
  n.pa = function () {
    var a = { remainingTime: this.g.getAdRemainingTime() };
    O(this, "AdRemainingTimeChange", a);
  };
  n.qa = function () {
    for (var a = v(this.h), b = a.next(); !b.done; b = a.next()) {
      var c = v(b.value);
      b = c.next().value;
      c = c.next().value;
      if (this.g) {
        try {
          this.g.unsubscribe(c, b);
        } catch (d) {}
        try {
          this.g.unsubscribe(b, c);
        } catch (d) {}
      }
    }
    this.h.clear();
    O(this, "AdStopped");
    this.i = !0;
  };
  n.ra = function () {
    var a = { volume: this.g.getAdVolume() };
    O(this, "AdVolumeChange", a);
  };
  n.ua = function (a) {
    O(this, "Ping", { url: a });
  };
  var N = function (a, b, c) {
      a.h.set(c, b.bind(a));
      a.g.subscribe(b.bind(a), c);
    },
    O = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a.i ||
        ((a = { type: b, session: a.m }),
        Db(a, c),
        window.parent != window &&
          window.parent.postMessage(JSON.stringify(a), "*"));
    };
  function nd(a) {
    a && "function" == typeof a.da && a.da();
  }
  var P = function () {
    this.D = this.D;
    this.B = this.B;
  };
  P.prototype.D = !1;
  P.prototype.da = function () {
    this.D || ((this.D = !0), this.s());
  };
  P.prototype.s = function () {
    if (this.B) for (; this.B.length; ) this.B.shift()();
  };
  var Q = function (a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = !1;
  };
  Q.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var pd = function (a, b) {
    Q.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
      var c = (this.type = a.type),
        d =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      this.target = a.target || a.srcElement;
      this.g = b;
      (b = a.relatedTarget)
        ? Va && (Ta(b, "nodeName") || (b = null))
        : "mouseover" == c
        ? (b = a.fromElement)
        : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType =
        "string" === typeof a.pointerType
          ? a.pointerType
          : od[a.pointerType] || "";
      this.state = a.state;
      this.i = a;
      a.defaultPrevented && pd.I.h.call(this);
    }
  };
  A(pd, Q);
  var od = Pb({ 2: "touch", 3: "pen", 4: "mouse" });
  pd.prototype.h = function () {
    pd.I.h.call(this);
    var a = this.i;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var qd = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var rd = 0;
  var sd = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Y = e;
      this.key = ++rd;
      this.R = this.W = !1;
    },
    td = function (a) {
      a.R = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Y = null;
    };
  var ud = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  ud.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var h = vd(a, b, d, e);
    -1 < h
      ? ((b = a[h]), c || (b.W = !1))
      : ((b = new sd(b, this.src, f, !!d, e)), (b.W = c), a.push(b));
    return b;
  };
  var wd = function (a, b) {
      var c = b.type;
      if (c in a.g) {
        var d = a.g[c],
          e = Na(d, b),
          f;
        if ((f = 0 <= e))
          B(null != d.length), Array.prototype.splice.call(d, e, 1);
        f && (td(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
      }
    },
    vd = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.R && f.listener == b && f.capture == !!c && f.Y == d) return e;
      }
      return -1;
    };
  var xd = "closure_lm_" + ((1e6 * Math.random()) | 0),
    yd = {},
    zd = 0,
    Bd = function (a, b, c, d, e) {
      if (d && d.once) return Ad(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Bd(a, b[f], c, d, e);
        return null;
      }
      c = Cd(c);
      a && a[qd]
        ? ((d = z(d) ? !!d.capture : !!d),
          Dd(a),
          (a = a.h.add(String(b), c, !1, d, e)))
        : (a = Ed(a, b, c, !1, d, e));
      return a;
    },
    Ed = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var h = z(e) ? !!e.capture : !!e,
        g = Fd(a);
      g || (a[xd] = g = new ud(a));
      c = g.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = Gd();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        fd || (e = h),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Hd(b.toString()), d);
      else if (a.addListener && a.removeListener)
        B("change" === b, "MediaQueryList only has a change event"),
          a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      zd++;
      return c;
    },
    Gd = function () {
      var a = Id,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    Ad = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Ad(a, b[f], c, d, e);
        return null;
      }
      c = Cd(c);
      return a && a[qd]
        ? a.h.add(String(b), c, !0, z(d) ? !!d.capture : !!d, e)
        : Ed(a, b, c, !0, d, e);
    },
    Jd = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) Jd(a, b[f], c, d, e);
      else
        ((d = z(d) ? !!d.capture : !!d), (c = Cd(c)), a && a[qd])
          ? ((a = a.h),
            (b = String(b).toString()),
            b in a.g &&
              ((f = a.g[b]),
              (c = vd(f, c, d, e)),
              -1 < c &&
                (td(f[c]),
                B(null != f.length),
                Array.prototype.splice.call(f, c, 1),
                0 == f.length && (delete a.g[b], a.h--))))
          : a &&
            (a = Fd(a)) &&
            ((b = a.g[b.toString()]),
            (a = -1),
            b && (a = vd(b, c, d, e)),
            (c = -1 < a ? b[a] : null) && Kd(c));
    },
    Kd = function (a) {
      if ("number" !== typeof a && a && !a.R) {
        var b = a.src;
        if (b && b[qd]) wd(b.h, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Hd(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          zd--;
          (c = Fd(b))
            ? (wd(c, a), 0 == c.h && ((c.src = null), (b[xd] = null)))
            : td(a);
        }
      }
    },
    Hd = function (a) {
      return a in yd ? yd[a] : (yd[a] = "on" + a);
    },
    Id = function (a, b) {
      if (a.R) a = !0;
      else {
        b = new pd(b, this);
        var c = a.listener,
          d = a.Y || a.src;
        a.W && Kd(a);
        a = c.call(d, b);
      }
      return a;
    },
    Fd = function (a) {
      a = a[xd];
      return a instanceof ud ? a : null;
    },
    Ld = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Cd = function (a) {
      B(a, "Listener can not be null.");
      if ("function" === typeof a) return a;
      B(a.handleEvent, "An object listener must have handleEvent method.");
      a[Ld] ||
        (a[Ld] = function (b) {
          return a.handleEvent(b);
        });
      return a[Ld];
    };
  var R = function () {
    P.call(this);
    this.h = new ud(this);
    this.F = this;
    this.m = null;
  };
  A(R, P);
  R.prototype[qd] = !0;
  R.prototype.addEventListener = function (a, b, c, d) {
    Bd(this, a, b, c, d);
  };
  R.prototype.removeEventListener = function (a, b, c, d) {
    Jd(this, a, b, c, d);
  };
  var Nd = function (a, b) {
    Dd(a);
    var c = a.m;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.m) d.push(c), B(1e3 > ++e, "infinite loop");
    }
    a = a.F;
    c = b.type || b;
    "string" === typeof b
      ? (b = new Q(b, a))
      : b instanceof Q
      ? (b.target = b.target || a)
      : ((e = b), (b = new Q(c, a)), Db(b, e));
    e = !0;
    if (d)
      for (var f = d.length - 1; 0 <= f; f--) {
        var h = (b.g = d[f]);
        e = Md(h, c, !0, b) && e;
      }
    h = b.g = a;
    e = Md(h, c, !0, b) && e;
    e = Md(h, c, !1, b) && e;
    if (d)
      for (f = 0; f < d.length; f++)
        (h = b.g = d[f]), (e = Md(h, c, !1, b) && e);
  };
  R.prototype.s = function () {
    R.I.s.call(this);
    if (this.h) {
      var a = this.h,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, td(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.m = null;
  };
  var Md = function (a, b, c, d) {
      b = a.h.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.R && h.capture == c) {
          var g = h.listener,
            k = h.Y || h.src;
          h.W && wd(a.h, h);
          e = !1 !== g.call(k, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    },
    Dd = function (a) {
      B(
        a.h,
        "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?"
      );
    };
  var S = function () {
    R.call(this);
    this.duration = this.currentTime = 0;
    this.type = this.src = "";
    this.playbackRate = 1;
    this.ended = !1;
    this.paused = !0;
    this.l = [];
    this.g = "";
    this.i = this.j = null;
  };
  na(S, R);
  S.prototype.load = function () {
    Od({
      type: "videoCall",
      func: "load",
      src: this.src,
      mimetype: this.type,
      session: this.g,
    });
  };
  S.prototype.v = function () {
    var a = this;
    this.paused = !1;
    Od({
      type: "videoCall",
      func: "play",
      src: this.src,
      mimetype: this.type,
      session: this.g,
    });
    return new Promise(function (b, c) {
      a.j = b;
      a.i = c;
    });
  };
  S.prototype.u = function () {
    this.paused = !0;
    Od({ type: "videoCall", func: "pause", session: this.g });
  };
  var Od = function (a) {
    window.parent != window &&
      window.parent.postMessage(JSON.stringify(a), "*");
  };
  S.prototype.o = function (a) {
    return this.l.includes(a) ? "maybe" : "";
  };
  S.prototype.C = function (a, b) {
    switch (a) {
      case "currentTime":
        if ("number" !== typeof b) break;
        this.currentTime = b;
        Od({
          type: "videoCall",
          func: "currentTime",
          currentTime: b,
          session: this.g,
        });
        break;
      case "src":
        this.src = b;
        break;
      case "type":
        this.type = b;
    }
  };
  S.prototype.removeEventListener = function (a, b, c, d) {
    null != b && Jd(this, a, b, c, d);
  };
  S.prototype.removeEventListener = S.prototype.removeEventListener;
  S.prototype.addEventListener = S.prototype.addEventListener;
  S.prototype.canPlayType = S.prototype.o;
  S.prototype.load = S.prototype.load;
  S.prototype.pause = S.prototype.u;
  S.prototype.play = S.prototype.v;
  S.prototype.setAttribute = S.prototype.C;
  var T = function (a) {
    P.call(this);
    this.ea = a;
    this.C = {};
  };
  A(T, P);
  var Pd = [],
    Qd = function (a, b, c, d) {
      Array.isArray(c) || (c && (Pd[0] = c.toString()), (c = Pd));
      for (var e = 0; e < c.length; e++) {
        var f = Bd(b, c[e], d || a.handleEvent, !1, a.ea || a);
        if (!f) break;
        a.C[f.key] = f;
      }
    },
    Rd = function (a) {
      Ab(
        a.C,
        function (b, c) {
          this.C.hasOwnProperty(c) && Kd(b);
        },
        a
      );
      a.C = {};
    };
  T.prototype.s = function () {
    T.I.s.call(this);
    Rd(this);
  };
  T.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var U = function (a, b) {
    R.call(this);
    this.l = a || 1;
    this.i = b || x;
    this.o = ta(this.v, this);
    this.u = Date.now();
  };
  A(U, R);
  U.prototype.j = !1;
  U.prototype.g = null;
  U.prototype.v = function () {
    if (this.j) {
      var a = Date.now() - this.u;
      0 < a && a < 0.8 * this.l
        ? (this.g = this.i.setTimeout(this.o, this.l - a))
        : (this.g && (this.i.clearTimeout(this.g), (this.g = null)),
          Nd(this, "tick"),
          this.j && (Sd(this), this.start()));
    }
  };
  U.prototype.start = function () {
    this.j = !0;
    this.g ||
      ((this.g = this.i.setTimeout(this.o, this.l)), (this.u = Date.now()));
  };
  var Sd = function (a) {
    a.j = !1;
    a.g && (a.i.clearTimeout(a.g), (a.g = null));
  };
  U.prototype.s = function () {
    U.I.s.call(this);
    Sd(this);
    delete this.i;
  };
  var Td = function (a) {
    this.h = this.s = this.j = "";
    this.o = null;
    this.m = this.g = "";
    this.l = !1;
    var b;
    a instanceof Td
      ? ((this.l = a.l),
        Ud(this, a.j),
        (this.s = a.s),
        (this.h = a.h),
        Vd(this, a.o),
        (this.g = a.g),
        Wd(this, Xd(a.i)),
        (this.m = a.m))
      : a && (b = String(a).match(vc))
      ? ((this.l = !1),
        Ud(this, b[1] || "", !0),
        (this.s = V(b[2] || "")),
        (this.h = V(b[3] || "", !0)),
        Vd(this, b[4]),
        (this.g = V(b[5] || "", !0)),
        Wd(this, b[6] || "", !0),
        (this.m = V(b[7] || "")))
      : ((this.l = !1), (this.i = new W(null, this.l)));
  };
  Td.prototype.toString = function () {
    var a = [],
      b = this.j;
    b && a.push(Yd(b, Zd, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.s) && a.push(Yd(b, Zd, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.o),
        null != c && a.push(":", String(c));
    if ((c = this.g))
      this.h && "/" != c.charAt(0) && a.push("/"),
        a.push(Yd(c, "/" == c.charAt(0) ? $d : ae, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.m) && a.push("#", Yd(c, be));
    return a.join("");
  };
  Td.prototype.resolve = function (a) {
    var b = new Td(this),
      c = !!a.j;
    c ? Ud(b, a.j) : (c = !!a.s);
    c ? (b.s = a.s) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.o);
    var d = a.g;
    if (c) Vd(b, a.o);
    else if ((c = !!a.g)) {
      if ("/" != d.charAt(0))
        if (this.h && !this.g) d = "/" + d;
        else {
          var e = b.g.lastIndexOf("/");
          -1 != e && (d = b.g.slice(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], h = 0; h < e.length; ) {
          var g = e[h++];
          "." == g
            ? d && h == e.length && f.push("")
            : ".." == g
            ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
              d && h == e.length && f.push(""))
            : (f.push(g), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? (b.g = d) : (c = "" !== a.i.toString());
    c ? Wd(b, Xd(a.i)) : (c = !!a.m);
    c && (b.m = a.m);
    return b;
  };
  var Ud = function (a, b, c) {
      a.j = c ? V(b, !0) : b;
      a.j && (a.j = a.j.replace(/:$/, ""));
    },
    Vd = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.o = b;
      } else a.o = null;
    },
    Wd = function (a, b, c) {
      b instanceof W
        ? ((a.i = b), ce(a.i, a.l))
        : (c || (b = Yd(b, de)), (a.i = new W(b, a.l)));
    },
    ee = function () {
      var a = new Td(window.location.href);
      return V(a.i.toString());
    },
    V = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, "%2525"))
          : decodeURIComponent(a)
        : "";
    },
    Yd = function (a, b, c) {
      return "string" === typeof a
        ? ((a = encodeURI(a).replace(b, fe)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    },
    fe = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Zd = /[#\/\?@]/g,
    ae = /[#\?:]/g,
    $d = /[#\?]/g,
    de = /[#\?@]/g,
    be = /#/g,
    W = function (a, b) {
      this.h = this.g = null;
      this.i = a || null;
      this.j = !!b;
    },
    X = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.i &&
          wc(a.i, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  W.prototype.add = function (a, b) {
    X(this);
    this.i = null;
    a = Y(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h = Aa(this.h) + 1;
    return this;
  };
  var ge = function (a, b) {
    X(a);
    b = Y(a, b);
    a.g.has(b) &&
      ((a.i = null), (a.h = Aa(a.h) - a.g.get(b).length), a.g.delete(b));
  };
  W.prototype.clear = function () {
    this.g = this.i = null;
    this.h = 0;
  };
  var he = function (a, b) {
    X(a);
    b = Y(a, b);
    return a.g.has(b);
  };
  W.prototype.forEach = function (a, b) {
    X(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  var ie = function (a, b) {
    X(a);
    var c = [];
    if ("string" === typeof b) he(a, b) && (c = c.concat(a.g.get(Y(a, b))));
    else
      for (a = Array.from(a.g.values()), b = 0; b < a.length; b++)
        c = c.concat(a[b]);
    return c;
  };
  W.prototype.set = function (a, b) {
    X(this);
    this.i = null;
    a = Y(this, a);
    he(this, a) && (this.h = Aa(this.h) - this.g.get(a).length);
    this.g.set(a, [b]);
    this.h = Aa(this.h) + 1;
    return this;
  };
  W.prototype.get = function (a, b) {
    if (!a) return b;
    a = ie(this, a);
    return 0 < a.length ? String(a[0]) : b;
  };
  W.prototype.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = ie(this, d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
      }
    }
    return (this.i = a.join("&"));
  };
  var Xd = function (a) {
      var b = new W();
      b.i = a.i;
      a.g && ((b.g = new Map(a.g)), (b.h = a.h));
      return b;
    },
    Y = function (a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    },
    ce = function (a, b) {
      b &&
        !a.j &&
        (X(a),
        (a.i = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (ge(this, d),
            ge(this, e),
            0 < c.length &&
              ((this.i = null),
              this.g.set(Y(this, e), Pa(c)),
              (this.h = Aa(this.h) + c.length)));
        }, a));
      a.j = b;
    };
  var Z = function (a, b) {
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? null : b;
    T.call(this);
    this.Z = a;
    this.g = null;
    this.H = "";
    this.N = -2;
    this.u = this.K = "";
    this.V = null;
    this.F = new S();
    this.h = this.m = null;
    this.U = [];
    this.J = this.L = "";
    this.j = this.i = 0;
    this.l = null != b;
    this.v = null;
    this.l
      ? Qd(this, window.parent, "message", this.T)
      : Qd(this, window, "message", this.T);
    null != b && ((this.l = !0), (this.u = b), je(this, "friendlyReady"));
  };
  na(Z, T);
  Z.prototype.fa = function (a, b) {
    this.m = a;
    this.h = b;
  };
  var ke = function (a, b) {
      id(function (d) {
        var e = {};
        d = ((e.heavyAdInterventionEventType = d), e);
        je(a, "heavyAdIntervention", d);
      });
      jd(function (d) {
        a.o(Error(d.body.message));
        d = ed();
        cd(d.g, "havl", "1");
      });
      a.L = b.clickThroughUrl;
      a.J = b.attributionParams;
      a.H = b.viewMode;
      a.N = b.desiredBitrate;
      a.K = b.creativeData;
      if (a.Z) a.M();
      else {
        var c = a.l ? b.adUrl : ee();
        a.l && a.m && (a.m.volume = b.volume);
        b = uc("SCRIPT", { type: "text/javascript" });
        oc(b, Xc(c));
        Qd(a, b, "load", a.M);
        Qd(a, b, "error", a.o);
        window.document.body.appendChild(b);
      }
    },
    je = function (a, b, c) {
      c = void 0 === c ? {} : c;
      window.parent != window &&
        ((c.type = b),
        (c.session = a.u),
        (a = JSON.stringify(c)),
        window.parent.postMessage(a, "*"));
    };
  Z.prototype.T = function (a) {
    try {
      var b = JSON.parse(a.i.data);
    } catch (d) {
      return;
    }
    a = b.type;
    var c = b.session;
    if (!this.l && "initAd" == a) (this.u = c), (this.F.g = this.u);
    else if (this.u != c) return;
    switch (a) {
      case "wrapperCall":
        a: {
          a = this.F;
          c = b.messageType;
          switch (c) {
            case "ended":
              a.ended = !0;
              break;
            case "pause":
              a.paused = !0;
              break;
            case "play":
              a.paused = !1;
              a.ended = !1;
              break;
            case "playing":
              null != a.j && (a.j(), (a.i = null), (a.j = null));
              a.paused = !1;
              a.ended = !1;
              break;
            case "supportedMimeTypes":
              a.l = b.supportedMimeTypes;
              break a;
            case "timeupdate":
              a.duration = b.duration;
              a.currentTime = b.currentTime;
              break;
            case "loadedmetadata":
              a.duration = b.duration;
              break;
            case "autoplayDisallowed":
              null != a.i && (a.i(), (a.i = null), (a.j = null));
          }
          Nd(a, { type: c });
        }
        break;
      case "initAd":
        ke(this, b);
        break;
      case "getAdDuration":
        le(this, "getAdDuration", "returnDuration", "duration");
        break;
      case "getAdRemainingTime":
        le(this, "getAdRemainingTime", "returnRemainingTime", "remainingTime");
        break;
      case "setAdVolume":
        null != this.g && this.g.setAdVolume(b.value);
        break;
      case "resizeAd":
        a = b.width;
        c = b.height;
        b = b.viewMode;
        this.m &&
          this.m.style &&
          ((this.m.style.width = a + "px"), (this.m.style.height = c + "px"));
        this.h &&
          this.h.style &&
          ((this.i = c),
          (this.j = a),
          (this.h.style.height = c + "px"),
          (this.h.style.width = a + "px"));
        if (null != this.g)
          try {
            this.g.resizeAd(a, c, b);
          } catch (d) {
            this.o(d);
          }
        break;
      case "friendlyReady":
        break;
      default:
        if (this.g) {
          if ("function" === typeof this.g[a]) this.g[a]();
        } else this.U.push(a);
    }
  };
  Z.prototype.ga = function () {
    this.j = this.l ? this.h.clientWidth || this.j : window.innerWidth;
    this.i = this.l ? this.h.clientHeight || this.i : window.innerHeight;
    if (0 != this.j && 0 != this.i) {
      this.h.style.height = this.i + "px";
      this.h.style.width = this.j + "px";
      try {
        this.g.resizeAd(this.j, this.i, this.H);
      } catch (a) {
        this.o(a);
      }
      Sd(this.v);
    }
  };
  Z.prototype.o = function (a) {
    a = void 0 === a ? null : a;
    je(this, "AdError", { message: null != a ? a.message : "" });
  };
  var me = function (a) {
      Ab(
        kd,
        function (b) {
          if (
            "getAdCompanions" != b &&
            !(b in this.g && "function" === typeof this.g[b])
          )
            throw Error("missing functions " + b);
        },
        a
      );
      if ("2.0" != a.g.handshakeVersion("2.0")) throw Error("version");
    },
    ne = function (a) {
      a.U.forEach(function (b) {
        if ("function" === typeof a.g[b]) a.g[b]();
      });
    };
  Z.prototype.M = function () {
    var a = window.getVPAIDAd;
    try {
      (this.g = a()), me(this), ne(this);
    } catch (d) {
      this.o(d);
      return;
    }
    if (null == this.g) this.o();
    else {
      this.V = new ld(this.u, this.g, this.L, this.J);
      md(this.V);
      this.l
        ? (a = { slot: this.h, videoSlot: this.m, videoSlotCanAutoPlay: !0 })
        : ((this.h = document.getElementById("slot")),
          null == this.h
            ? (a = window.document.body)
            : ((this.h.style.height =
                0 != window.innerHeight
                  ? window.innerHeight + "px"
                  : 0 != this.i
                  ? this.i + "px"
                  : "100%"),
              (this.h.style.width =
                0 != window.innerWidth
                  ? window.innerWidth + "px"
                  : 0 != this.j
                  ? this.j + "px"
                  : "100%"),
              (a = this.h)),
          (a = { slot: a, videoSlot: this.F, videoSlotCanAutoPlay: !0 }));
      var b = { AdParameters: this.K };
      try {
        this.i = this.l ? this.h.clientHeight || this.i : window.innerHeight;
        this.j = this.l ? this.h.clientWidth || this.j : window.innerWidth;
        if (0 == this.i || 0 == this.j) {
          this.v = new U(200);
          var c = ua(nd, this.v);
          this.D ? c() : (this.B || (this.B = []), this.B.push(c));
          Qd(this, this.v, "tick", this.ga);
          this.v.start();
        }
        this.g.initAd(this.j, this.i, this.H, this.N, b, a);
      } catch (d) {
        this.o(d);
      }
    }
  };
  var le = function (a, b, c, d) {
    var e = -1;
    try {
      e = a.g[b]();
    } catch (f) {}
    "number" !== typeof e && (e = -1);
    b = {};
    b[d] = e;
    je(a, c, b);
  };
  Z.prototype.initFriendly = Z.prototype.fa;
  window.VPAIDLoader = Z;
}).call(this);
