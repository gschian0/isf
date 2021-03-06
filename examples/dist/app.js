// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../dist/build.js":[function(require,module,exports) {
var define;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e13) { throw _e13; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e14) { didErr = true; err = _e14; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.interactiveShaderFormat = e() : t.interactiveShaderFormat = e();
}(window, function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 60);
  }([function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(2).hasOwnProperty;

    function i(t, e) {
      return !(!t || "object" !== n(t)) && (!!o(u, e) || !(e in Object.prototype) && !(e in Function.prototype));
    }

    function a(t, e) {
      return !(!t || "function" != typeof t[e]) && !(o(t, e) && Object.getPrototypeOf && e in Object.getPrototypeOf(t)) && (!!o(p, e) || !(e in Object.prototype) && !(e in Function.prototype));
    }

    function s(t) {
      return "object" === n(t) && t && t.constructor === Object;
    }

    var u = {
      length: !0,
      name: !0
    },
        p = {
      toString: !0,
      valueOf: !0,
      toLocaleString: !0
    };
    e.getSafeProperty = function (t, e) {
      if (s(t) && i(t, e)) return t[e];
      if ("function" == typeof t[e] && a(t, e)) throw new Error('Cannot access method "' + e + '" as a property');
      throw new Error('No access to property "' + e + '"');
    }, e.setSafeProperty = function (t, e, r) {
      if (s(t) && i(t, e)) return t[e] = r, r;
      throw new Error('No access to property "' + e + '"');
    }, e.isSafeProperty = i, e.validateSafeMethod = function (t, e) {
      if (!a(t, e)) throw new Error('No access to method "' + e + '"');
    }, e.isSafeMethod = a, e.isPlainObject = s;
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(13),
        i = r(2).deepEqual,
        a = r(2).hasOwnProperty;
    e.name = "Node", e.path = "expression.node", e.math = !0, e.factory = function (t, e, r, s, u) {
      function p() {
        if (!(this instanceof p)) throw new SyntaxError("Constructor must be called with the new operator");
      }

      return p.prototype.eval = function (t) {
        return this.compile().eval(t);
      }, p.prototype.type = "Node", p.prototype.isNode = !0, p.prototype.comment = "", p.prototype.compile = function () {
        var t = this._compile(u.expression.mathWithTransform, {}),
            e = {};

        return {
          eval: function _eval(r) {
            var n = r || {};
            return function (t) {
              for (var e in t) {
                if (a(t, e) && e in o) throw new Error('Scope contains an illegal symbol, "' + e + '" is a reserved keyword');
              }
            }(n), t(n, e, null);
          }
        };
      }, p.prototype._compile = function (t, e) {
        throw new Error("Method _compile should be implemented by type " + this.type);
      }, p.prototype.forEach = function (t) {
        throw new Error("Cannot run forEach on a Node interface");
      }, p.prototype.map = function (t) {
        throw new Error("Cannot run map on a Node interface");
      }, p.prototype._ifNode = function (e) {
        if (!t.isNode(e)) throw new TypeError("Callback function must return a Node");
        return e;
      }, p.prototype.traverse = function (t) {
        t(this, null, null), function t(e, r) {
          e.forEach(function (e, n, o) {
            r(e, n, o), t(e, r);
          });
        }(this, t);
      }, p.prototype.transform = function (t) {
        return function t(e, r) {
          return e.map(function (e, n, o) {
            return t(r(e, n, o), r);
          });
        }(t(this, null, null), t);
      }, p.prototype.filter = function (t) {
        var e = [];
        return this.traverse(function (r, n, o) {
          t(r, n, o) && e.push(r);
        }), e;
      }, p.prototype.find = function () {
        throw new Error("Function Node.find is deprecated. Use Node.filter instead.");
      }, p.prototype.match = function () {
        throw new Error("Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.");
      }, p.prototype.clone = function () {
        throw new Error("Cannot clone a Node interface");
      }, p.prototype.cloneDeep = function () {
        return this.map(function (t) {
          return t.cloneDeep();
        });
      }, p.prototype.equals = function (t) {
        return !!t && i(this, t);
      }, p.prototype.toString = function (t) {
        var e;
        if (t && "object" === n(t)) switch (n(t.handler)) {
          case "object":
          case "undefined":
            break;

          case "function":
            e = t.handler(this, t);
            break;

          default:
            throw new TypeError("Object or function expected as callback");
        }
        return void 0 !== e ? e : this._toString(t);
      }, p.prototype.toJSON = function () {
        throw new Error("Cannot serialize object: toJSON not implemented by " + this.type);
      }, p.prototype.toHTML = function (t) {
        var e;
        if (t && "object" === n(t)) switch (n(t.handler)) {
          case "object":
          case "undefined":
            break;

          case "function":
            e = t.handler(this, t);
            break;

          default:
            throw new TypeError("Object or function expected as callback");
        }
        return void 0 !== e ? e : this.toHTML(t);
      }, p.prototype._toString = function () {
        throw new Error("_toString not implemented for " + this.type);
      }, p.prototype.toTex = function (t) {
        var e;
        if (t && "object" === n(t)) switch (n(t.handler)) {
          case "object":
          case "undefined":
            break;

          case "function":
            e = t.handler(this, t);
            break;

          default:
            throw new TypeError("Object or function expected as callback");
        }
        return void 0 !== e ? e : this._toTex(t);
      }, p.prototype._toTex = function (t) {
        throw new Error("_toTex not implemented for " + this.type);
      }, p.prototype.getIdentifier = function () {
        return this.type;
      }, p.prototype.getContent = function () {
        return this;
      }, p;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(9);
    e.clone = function t(r) {
      var i = n(r);
      if ("number" === i || "string" === i || "boolean" === i || null == r) return r;
      if ("function" == typeof r.clone) return r.clone();
      if (Array.isArray(r)) return r.map(function (e) {
        return t(e);
      });
      if (r instanceof Date) return new Date(r.valueOf());
      if (o(r)) return r;
      if (r instanceof RegExp) throw new TypeError("Cannot clone " + r);
      return e.map(r, t);
    }, e.map = function (t, r) {
      var n = {};

      for (var o in t) {
        e.hasOwnProperty(t, o) && (n[o] = r(t[o]));
      }

      return n;
    }, e.extend = function (t, r) {
      for (var n in r) {
        e.hasOwnProperty(r, n) && (t[n] = r[n]);
      }

      return t;
    }, e.deepExtend = function t(r, n) {
      if (Array.isArray(n)) throw new TypeError("Arrays are not supported by deepExtend");

      for (var o in n) {
        if (e.hasOwnProperty(n, o)) if (n[o] && n[o].constructor === Object) void 0 === r[o] && (r[o] = {}), r[o].constructor === Object ? t(r[o], n[o]) : r[o] = n[o];else {
          if (Array.isArray(n[o])) throw new TypeError("Arrays are not supported by deepExtend");
          r[o] = n[o];
        }
      }

      return r;
    }, e.deepEqual = function (t, r) {
      var n, o, i;

      if (Array.isArray(t)) {
        if (!Array.isArray(r)) return !1;
        if (t.length !== r.length) return !1;

        for (o = 0, i = t.length; o < i; o++) {
          if (!e.deepEqual(t[o], r[o])) return !1;
        }

        return !0;
      }

      if (t instanceof Object) {
        if (Array.isArray(r) || !(r instanceof Object)) return !1;

        for (n in t) {
          if (!e.deepEqual(t[n], r[n])) return !1;
        }

        for (n in r) {
          if (!e.deepEqual(t[n], r[n])) return !1;
        }

        return !0;
      }

      return t === r;
    }, e.canDefineProperty = function () {
      try {
        if (Object.defineProperty) return Object.defineProperty({}, "x", {
          get: function get() {}
        }), !0;
      } catch (t) {}

      return !1;
    }, e.lazy = function (t, r, n) {
      if (e.canDefineProperty()) {
        var o,
            i = !0;
        Object.defineProperty(t, r, {
          get: function get() {
            return i && (o = n(), i = !1), o;
          },
          set: function set(t) {
            o = t, i = !1;
          },
          configurable: !0,
          enumerable: !0
        });
      } else t[r] = n();
    }, e.traverse = function (t, e) {
      var r = t;
      if (e) for (var n = e.split("."), o = 0; o < n.length; o++) {
        var i = n[o];
        i in r || (r[i] = {}), r = r[i];
      }
      return r;
    }, e.hasOwnProperty = function (t, e) {
      return t && Object.hasOwnProperty.call(t, e);
    }, e.isFactory = function (t) {
      return t && "function" == typeof t.factory;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(8).format,
        i = r(39).format,
        a = r(9);
    e.isString = function (t) {
      return "string" == typeof t;
    }, e.endsWith = function (t, e) {
      var r = t.length - e.length,
          n = t.length;
      return t.substring(r, n) === e;
    }, e.format = function (t, r) {
      if ("number" == typeof t) return o(t, r);
      if (a(t)) return i(t, r);
      if (function (t) {
        return t && "object" === n(t) && "number" == typeof t.s && "number" == typeof t.n && "number" == typeof t.d || !1;
      }(t)) return r && "decimal" === r.fraction ? t.toString() : t.s * t.n + "/" + t.d;
      if (Array.isArray(t)) return function t(r, n) {
        if (Array.isArray(r)) {
          for (var o = "[", i = r.length, a = 0; a < i; a++) {
            0 !== a && (o += ", "), o += t(r[a], n);
          }

          return o += "]";
        }

        return e.format(r, n);
      }(t, r);
      if (e.isString(t)) return '"' + t + '"';
      if ("function" == typeof t) return t.syntax ? String(t.syntax) : "function";

      if (t && "object" === n(t)) {
        if ("function" == typeof t.format) return t.format(r);
        if (t && t.toString() !== {}.toString()) return t.toString();
        var s = [];

        for (var u in t) {
          t.hasOwnProperty(u) && s.push('"' + u + '": ' + e.format(t[u], r));
        }

        return "{" + s.join(", ") + "}";
      }

      return String(t);
    }, e.stringify = function (t) {
      for (var e = String(t), r = "", n = 0; n < e.length;) {
        var o = e.charAt(n);
        "\\" === o ? (r += o, n++, "" !== (o = e.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(o) || (r += "\\"), r += o) : r += '"' === o ? '\\"' : o, n++;
      }

      return '"' + r + '"';
    }, e.escape = function (t) {
      var e = String(t);
      return e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
  }, function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.size = u, e.validate = function (t, e) {
      if (0 === e.length) {
        if (Array.isArray(t)) throw new i.default(t.length, 0);
      } else !function t(e, r, n) {
        var o;
        var a = e.length;
        if (a !== r[n]) throw new i.default(a, r[n]);

        if (n < r.length - 1) {
          var s = n + 1;

          for (o = 0; o < a; o++) {
            var u = e[o];
            if (!Array.isArray(u)) throw new i.default(r.length - 1, r.length, "<");
            t(e[o], r, s);
          }
        } else for (o = 0; o < a; o++) {
          if (Array.isArray(e[o])) throw new i.default(r.length + 1, r.length, ">");
        }
      }(t, e, 0);
    }, e.validateIndex = function (t, e) {
      if (!n.default.isNumber(t) || !n.default.isInteger(t)) throw new TypeError("Index must be an integer (value: " + t + ")");
      if (t < 0 || "number" == typeof e && t >= e) throw new a.default(t, e);
    }, e.resize = function (t, e, r) {
      if (!Array.isArray(t) || !Array.isArray(e)) throw new TypeError("Array expected");
      if (0 === e.length) throw new Error("Resizing to scalar is not supported");
      e.forEach(function (t) {
        if (!n.default.isNumber(t) || !n.default.isInteger(t) || t < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + o.default.format(e) + ")");
      });
      var i = void 0 !== r ? r : 0;
      return function t(e, r, n, o) {
        var i,
            a,
            s = e.length,
            u = r[n],
            p = Math.min(s, u);

        if (e.length = u, n < r.length - 1) {
          var c = n + 1;

          for (i = 0; i < p; i++) {
            a = e[i], Array.isArray(a) || (a = [a], e[i] = a), t(a, r, c, o);
          }

          for (i = p; i < u; i++) {
            a = [], e[i] = a, t(a, r, c, o);
          }
        } else {
          for (i = 0; i < p; i++) {
            for (; Array.isArray(e[i]);) {
              e[i] = e[i][0];
            }
          }

          for (i = p; i < u; i++) {
            e[i] = o;
          }
        }
      }(t, e, 0, i), t;
    }, e.reshape = function (t, e) {
      var r,
          n = p(t);

      function o(t) {
        return t.reduce(function (t, e) {
          return t * e;
        });
      }

      if (!Array.isArray(t) || !Array.isArray(e)) throw new TypeError("Array expected");
      if (0 === e.length) throw new i.default(0, o(u(t)), "!=");

      for (var a = 1, s = 0; s < e.length; s++) {
        a *= e[s];
      }

      if (n.length !== a) throw new i.default(o(e), o(u(t)), "!=");

      try {
        r = function (t, e) {
          for (var r, n = t, o = e.length - 1; o > 0; o--) {
            var i = e[o];
            r = [];

            for (var a = n.length / i, s = 0; s < a; s++) {
              r.push(n.slice(s * i, (s + 1) * i));
            }

            n = r;
          }

          return n;
        }(n, e);
      } catch (r) {
        if (r instanceof i.default) throw new i.default(o(e), o(u(t)), "!=");
        throw r;
      }

      return r;
    }, e.squeeze = function (t, e) {
      var r = e || u(t);

      for (; Array.isArray(t) && 1 === t.length;) {
        t = t[0], r.shift();
      }

      var n = r.length;

      for (; 1 === r[n - 1];) {
        n--;
      }

      n < r.length && (t = function t(e, r, n) {
        var o, i;

        if (n < r) {
          var a = n + 1;

          for (o = 0, i = e.length; o < i; o++) {
            e[o] = t(e[o], r, a);
          }
        } else for (; Array.isArray(e);) {
          e = e[0];
        }

        return e;
      }(t, n, 0), r.length = n);
      return t;
    }, e.unsqueeze = function (t, e, r, n) {
      var o = n || u(t);
      if (r) for (var i = 0; i < r; i++) {
        t = [t], o.unshift(1);
      }

      t = function t(e, r, n) {
        var o, i;

        if (Array.isArray(e)) {
          var a = n + 1;

          for (o = 0, i = e.length; o < i; o++) {
            e[o] = t(e[o], r, a);
          }
        } else for (var s = n; s < r; s++) {
          e = [e];
        }

        return e;
      }(t, e, 0);

      for (; o.length < e;) {
        o.push(1);
      }

      return t;
    }, e.flatten = p, e.map = function (t, e) {
      return Array.prototype.map.call(t, e);
    }, e.forEach = function (t, e) {
      Array.prototype.forEach.call(t, e);
    }, e.filter = function (t, e) {
      if (1 !== u(t).length) throw new Error("Only one dimensional matrices supported");
      return Array.prototype.filter.call(t, e);
    }, e.filterRegExp = function (t, e) {
      if (1 !== u(t).length) throw new Error("Only one dimensional matrices supported");
      return Array.prototype.filter.call(t, function (t) {
        return e.test(t);
      });
    }, e.join = function (t, e) {
      return Array.prototype.join.call(t, e);
    }, e.identify = function (t) {
      if (!Array.isArray(t)) throw new TypeError("Array input expected");
      if (0 === t.length) return t;
      var e = [],
          r = 0;
      e[0] = {
        value: t[0],
        identifier: 0
      };

      for (var n = 1; n < t.length; n++) {
        t[n] === t[n - 1] ? r++ : r = 0, e.push({
          value: t[n],
          identifier: r
        });
      }

      return e;
    }, e.generalize = function (t) {
      if (!Array.isArray(t)) throw new TypeError("Array input expected");
      if (0 === t.length) return t;

      for (var e = [], r = 0; r < t.length; r++) {
        e.push(t[r].value);
      }

      return e;
    };
    var n = s(r(8)),
        o = s(r(3)),
        i = s(r(18)),
        a = s(r(16));

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u(t) {
      for (var e = []; Array.isArray(t);) {
        e.push(t.length), t = t[0];
      }

      return e;
    }

    function p(t) {
      if (!Array.isArray(t)) return t;
      var e = [];
      return t.forEach(function t(r) {
        Array.isArray(r) ? r.forEach(t) : e.push(r);
      }), e;
    }
  }, function (t, e, r) {
    "use strict";

    t.exports = function t(e, r, n) {
      return e && "function" == typeof e.map ? e.map(function (e) {
        return t(e, r, n);
      }) : r(e);
    };
  }, function (t, e, r) {
    "use strict";

    var n = [{
      AssignmentNode: {},
      FunctionAssignmentNode: {}
    }, {
      ConditionalNode: {
        latexLeftParens: !1,
        latexRightParens: !1,
        latexParens: !1
      }
    }, {
      "OperatorNode:or": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:xor": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:and": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:bitOr": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:bitXor": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:bitAnd": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:equal": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:unequal": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:smaller": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:larger": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:smallerEq": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:largerEq": {
        associativity: "left",
        associativeWith: []
      },
      RelationalNode: {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:leftShift": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:rightArithShift": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:rightLogShift": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:to": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      RangeNode: {}
    }, {
      "OperatorNode:add": {
        associativity: "left",
        associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
      },
      "OperatorNode:subtract": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:multiply": {
        associativity: "left",
        associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
      },
      "OperatorNode:divide": {
        associativity: "left",
        associativeWith: [],
        latexLeftParens: !1,
        latexRightParens: !1,
        latexParens: !1
      },
      "OperatorNode:dotMultiply": {
        associativity: "left",
        associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
      },
      "OperatorNode:dotDivide": {
        associativity: "left",
        associativeWith: []
      },
      "OperatorNode:mod": {
        associativity: "left",
        associativeWith: []
      }
    }, {
      "OperatorNode:unaryPlus": {
        associativity: "right"
      },
      "OperatorNode:unaryMinus": {
        associativity: "right"
      },
      "OperatorNode:bitNot": {
        associativity: "right"
      },
      "OperatorNode:not": {
        associativity: "right"
      }
    }, {
      "OperatorNode:pow": {
        associativity: "right",
        associativeWith: [],
        latexRightParens: !1
      },
      "OperatorNode:dotPow": {
        associativity: "right",
        associativeWith: []
      }
    }, {
      "OperatorNode:factorial": {
        associativity: "left"
      }
    }, {
      "OperatorNode:transpose": {
        associativity: "left"
      }
    }];

    function o(t, e) {
      var r = t;
      "keep" !== e && (r = t.getContent());

      for (var o = r.getIdentifier(), i = 0; i < n.length; i++) {
        if (o in n[i]) return i;
      }

      return null;
    }

    t.exports.properties = n, t.exports.getPrecedence = o, t.exports.getAssociativity = function (t, e) {
      var r = t;
      "keep" !== e && (r = t.getContent());
      var i = r.getIdentifier(),
          a = o(r, e);
      if (null === a) return null;
      var s = n[a][i];

      if (s.hasOwnProperty("associativity")) {
        if ("left" === s.associativity) return "left";
        if ("right" === s.associativity) return "right";
        throw Error("'" + i + "' has the invalid associativity '" + s.associativity + "'.");
      }

      return null;
    }, t.exports.isAssociativeWith = function (t, e, r) {
      var i = "keep" !== r ? t.getContent() : t,
          a = "keep" !== r ? t.getContent() : e,
          s = i.getIdentifier(),
          u = a.getIdentifier(),
          p = o(i, r);
      if (null === p) return null;
      var c = n[p][s];

      if (c.hasOwnProperty("associativeWith") && c.associativeWith instanceof Array) {
        for (var f = 0; f < c.associativeWith.length; f++) {
          if (c.associativeWith[f] === u) return !0;
        }

        return !1;
      }

      return null;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(47);
    e.symbols = {
      Alpha: "A",
      alpha: "\\alpha",
      Beta: "B",
      beta: "\\beta",
      Gamma: "\\Gamma",
      gamma: "\\gamma",
      Delta: "\\Delta",
      delta: "\\delta",
      Epsilon: "E",
      epsilon: "\\epsilon",
      varepsilon: "\\varepsilon",
      Zeta: "Z",
      zeta: "\\zeta",
      Eta: "H",
      eta: "\\eta",
      Theta: "\\Theta",
      theta: "\\theta",
      vartheta: "\\vartheta",
      Iota: "I",
      iota: "\\iota",
      Kappa: "K",
      kappa: "\\kappa",
      varkappa: "\\varkappa",
      Lambda: "\\Lambda",
      lambda: "\\lambda",
      Mu: "M",
      mu: "\\mu",
      Nu: "N",
      nu: "\\nu",
      Xi: "\\Xi",
      xi: "\\xi",
      Omicron: "O",
      omicron: "o",
      Pi: "\\Pi",
      pi: "\\pi",
      varpi: "\\varpi",
      Rho: "P",
      rho: "\\rho",
      varrho: "\\varrho",
      Sigma: "\\Sigma",
      sigma: "\\sigma",
      varsigma: "\\varsigma",
      Tau: "T",
      tau: "\\tau",
      Upsilon: "\\Upsilon",
      upsilon: "\\upsilon",
      Phi: "\\Phi",
      phi: "\\phi",
      varphi: "\\varphi",
      Chi: "X",
      chi: "\\chi",
      Psi: "\\Psi",
      psi: "\\psi",
      Omega: "\\Omega",
      omega: "\\omega",
      true: "\\mathrm{True}",
      false: "\\mathrm{False}",
      i: "i",
      inf: "\\infty",
      Inf: "\\infty",
      infinity: "\\infty",
      Infinity: "\\infty",
      oo: "\\infty",
      lim: "\\lim",
      undefined: "\\mathbf{?}"
    }, e.operators = {
      transpose: "^\\top",
      ctranspose: "^H",
      factorial: "!",
      pow: "^",
      dotPow: ".^\\wedge",
      unaryPlus: "+",
      unaryMinus: "-",
      bitNot: "\\~",
      not: "\\neg",
      multiply: "\\cdot",
      divide: "\\frac",
      dotMultiply: ".\\cdot",
      dotDivide: ".:",
      mod: "\\mod",
      add: "+",
      subtract: "-",
      to: "\\rightarrow",
      leftShift: "<<",
      rightArithShift: ">>",
      rightLogShift: ">>>",
      equal: "=",
      unequal: "\\neq",
      smaller: "<",
      larger: ">",
      smallerEq: "\\leq",
      largerEq: "\\geq",
      bitAnd: "\\&",
      bitXor: "\\underline{|}",
      bitOr: "|",
      and: "\\wedge",
      xor: "\\veebar",
      or: "\\vee"
    }, e.defaultTemplate = "\\mathrm{${name}}\\left(${args}\\right)";
    var o = {
      deg: "^\\circ"
    };
    e.escape = function (t) {
      return n(t, {
        preserveFormatting: !0
      });
    }, e.toSymbol = function (t, r) {
      return (r = void 0 !== r && r) ? o.hasOwnProperty(t) ? o[t] : "\\mathrm{" + e.escape(t) + "}" : e.symbols.hasOwnProperty(t) ? e.symbols[t] : e.escape(t);
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(2);

    function o(t) {
      for (var e = [], r = 0; r < t; r++) {
        e.push(0);
      }

      return e;
    }

    e.isNumber = function (t) {
      return "number" == typeof t;
    }, e.isInteger = function (t) {
      return "boolean" == typeof t || !!isFinite(t) && t === Math.round(t);
    }, e.sign = Math.sign || function (t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0;
    }, e.format = function (t, r) {
      if ("function" == typeof r) return r(t);
      if (t === 1 / 0) return "Infinity";
      if (t === -1 / 0) return "-Infinity";
      if (isNaN(t)) return "NaN";
      var o,
          i = "auto";

      switch (r && (r.notation && (i = r.notation), e.isNumber(r) ? o = r : r.precision && (o = r.precision)), i) {
        case "fixed":
          return e.toFixed(t, o);

        case "exponential":
          return e.toExponential(t, o);

        case "engineering":
          return e.toEngineering(t, o);

        case "auto":
          if (r && r.exponential && (void 0 !== r.exponential.lower || void 0 !== r.exponential.upper)) {
            var a = n.map(r, function (t) {
              return t;
            });
            return a.exponential = void 0, void 0 !== r.exponential.lower && (a.lowerExp = Math.round(Math.log(r.exponential.lower) / Math.LN10)), void 0 !== r.exponential.upper && (a.upperExp = Math.round(Math.log(r.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(r) + " with " + JSON.stringify(a)), e.toPrecision(t, o, a);
          }

          return e.toPrecision(t, o, r && r).replace(/((\.\d*?)(0+))($|e)/, function () {
            var t = arguments[2],
                e = arguments[4];
            return "." !== t ? t + e : e;
          });

        default:
          throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", or "fixed".');
      }
    }, e.splitNumber = function (t) {
      var e = String(t).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
      if (!e) throw new SyntaxError("Invalid number " + t);
      var r = e[1],
          n = e[2],
          o = parseFloat(e[4] || "0"),
          i = n.indexOf(".");
      o += -1 !== i ? i - 1 : n.length - 1;
      var a = n.replace(".", "").replace(/^0*/, function (t) {
        return o -= t.length, "";
      }).replace(/0*$/, "").split("").map(function (t) {
        return parseInt(t);
      });
      return 0 === a.length && (a.push(0), o++), {
        sign: r,
        coefficients: a,
        exponent: o
      };
    }, e.toEngineering = function (t, r) {
      if (isNaN(t) || !isFinite(t)) return String(t);
      var n = e.roundDigits(e.splitNumber(t), r),
          i = n.exponent,
          a = n.coefficients,
          s = i % 3 == 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
      if (e.isNumber(r)) r > a.length && (a = a.concat(o(r - a.length)));else {
        var u = i >= 0 ? i : Math.abs(s);
        a.length - 1 < u && (a = a.concat(o(u - (a.length - 1))));
      }

      for (var p = Math.abs(i - s), c = 1; --p >= 0;) {
        c++;
      }

      var f = a.slice(c).join(""),
          h = e.isNumber(r) && f.length || f.match(/[1-9]/) ? "." + f : "",
          l = a.slice(0, c).join("") + h + "e" + (i >= 0 ? "+" : "") + s.toString();
      return n.sign + l;
    }, e.toFixed = function (t, r) {
      if (isNaN(t) || !isFinite(t)) return String(t);
      var n = e.splitNumber(t),
          i = "number" == typeof r ? e.roundDigits(n, n.exponent + 1 + r) : n,
          a = i.coefficients,
          s = i.exponent + 1,
          u = s + (r || 0);
      return a.length < u && (a = a.concat(o(u - a.length))), s < 0 && (a = o(1 - s).concat(a), s = 1), s < a.length && a.splice(s, 0, 0 === s ? "0." : "."), i.sign + a.join("");
    }, e.toExponential = function (t, r) {
      if (isNaN(t) || !isFinite(t)) return String(t);
      var n = e.splitNumber(t),
          i = r ? e.roundDigits(n, r) : n,
          a = i.coefficients,
          s = i.exponent;
      a.length < r && (a = a.concat(o(r - a.length)));
      var u = a.shift();
      return i.sign + u + (a.length > 0 ? "." + a.join("") : "") + "e" + (s >= 0 ? "+" : "") + s;
    }, e.toPrecision = function (t, r, n) {
      if (isNaN(t) || !isFinite(t)) return String(t);
      var i = n && void 0 !== n.lowerExp ? n.lowerExp : -3,
          a = n && void 0 !== n.upperExp ? n.upperExp : 5,
          s = e.splitNumber(t);
      if (s.exponent < i || s.exponent >= a) return e.toExponential(t, r);
      var u = r ? e.roundDigits(s, r) : s,
          p = u.coefficients,
          c = u.exponent;
      p.length < r && (p = p.concat(o(r - p.length))), p = p.concat(o(c - p.length + 1 + (p.length < r ? r - p.length : 0)));
      var f = c > 0 ? c : 0;
      return f < (p = o(-c).concat(p)).length - 1 && p.splice(f + 1, 0, "."), u.sign + p.join("");
    }, e.roundDigits = function (t, e) {
      for (var r = {
        sign: t.sign,
        coefficients: t.coefficients,
        exponent: t.exponent
      }, n = r.coefficients; e <= 0;) {
        n.unshift(0), r.exponent++, e++;
      }

      if (n.length > e && n.splice(e, n.length - e)[0] >= 5) {
        var o = e - 1;

        for (n[o]++; 10 === n[o];) {
          n.pop(), 0 === o && (n.unshift(0), r.exponent++, o++), n[--o]++;
        }
      }

      return r;
    }, e.digits = function (t) {
      return t.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
    }, e.DBL_EPSILON = Number.EPSILON || 2.220446049250313e-16, e.nearlyEqual = function (t, r, n) {
      if (null == n) return t === r;
      if (t === r) return !0;
      if (isNaN(t) || isNaN(r)) return !1;

      if (isFinite(t) && isFinite(r)) {
        var o = Math.abs(t - r);
        return o < e.DBL_EPSILON || o <= Math.max(Math.abs(t), Math.abs(r)) * n;
      }

      return !1;
    };
  }, function (t, e, r) {
    "use strict";

    t.exports = function (t) {
      return t && t.constructor.prototype.isBigNumber || !1;
    };
  }, function (t, e, r) {
    "use strict";

    function n() {
      return (n = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];

          for (var n in r) {
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    var o = r(12),
        i = r(5);
    e.name = "parse", e.path = "expression", e.factory = function (t, e, a, s) {
      var u = a(r(34)),
          p = a(r(38)),
          c = a(r(40)),
          f = a(r(41)),
          h = a(r(43)),
          l = a(r(45)),
          m = a(r(46)),
          d = a(r(48)),
          y = a(r(49)),
          g = a(r(51)),
          v = a(r(52)),
          x = a(r(53)),
          w = a(r(54)),
          b = a(r(55)),
          N = a(r(56)),
          E = a(r(20));

      function S(e, r) {
        if (1 !== arguments.length && 2 !== arguments.length) throw new o("parse", arguments.length, 1, 2);
        var n = r && r.nodes ? r.nodes : {};
        if ("string" == typeof e) return U(e, n);
        if (Array.isArray(e) || e instanceof t.Matrix) return i(e, function (t) {
          if ("string" != typeof t) throw new TypeError("String expected");
          return U(t, n);
        });
        throw new TypeError("String or matrix expected");
      }

      var T = {
        NULL: 0,
        DELIMITER: 1,
        NUMBER: 2,
        SYMBOL: 3,
        UNKNOWN: 4
      },
          O = {
        ",": !0,
        "(": !0,
        ")": !0,
        "[": !0,
        "]": !0,
        "{": !0,
        "}": !0,
        '"': !0,
        "'": !0,
        ";": !0,
        "+": !0,
        "-": !0,
        "*": !0,
        ".*": !0,
        "/": !0,
        "./": !0,
        "%": !0,
        "^": !0,
        ".^": !0,
        "~": !0,
        "!": !0,
        "&": !0,
        "|": !0,
        "^|": !0,
        "=": !0,
        ":": !0,
        "?": !0,
        "==": !0,
        "!=": !0,
        "<": !0,
        ">": !0,
        "<=": !0,
        ">=": !0,
        "<<": !0,
        ">>": !0,
        ">>>": !0
      },
          A = {
        mod: !0,
        to: !0,
        in: !0,
        and: !0,
        xor: !0,
        or: !0,
        not: !0
      },
          P = {
        true: !0,
        false: !1,
        null: null,
        undefined: void 0
      },
          _ = ["NaN", "Infinity"];

      function j(t, e) {
        return t.expression.substr(t.index, e);
      }

      function k(t) {
        return j(t, 1);
      }

      function I(t) {
        t.index++;
      }

      function M(t) {
        return t.expression.charAt(t.index - 1);
      }

      function F(t) {
        return t.expression.charAt(t.index + 1);
      }

      function R(t) {
        for (t.tokenType = T.NULL, t.token = "", t.comment = ""; S.isWhitespace(k(t), t.nestingLevel);) {
          I(t);
        }

        if ("#" === k(t)) for (; "\n" !== k(t) && "" !== k(t);) {
          t.comment += k(t), I(t);
        }

        if ("" !== k(t)) {
          if ("\n" === k(t) && !t.nestingLevel) return t.tokenType = T.DELIMITER, t.token = k(t), void I(t);
          var e = k(t),
              r = j(t, 2),
              n = j(t, 3);
          if (3 === n.length && O[n]) return t.tokenType = T.DELIMITER, t.token = n, I(t), I(t), void I(t);
          if (2 === r.length && O[r]) return t.tokenType = T.DELIMITER, t.token = r, I(t), void I(t);
          if (O[e]) return t.tokenType = T.DELIMITER, t.token = e, void I(t);

          if (S.isDigitDot(e)) {
            if (t.tokenType = T.NUMBER, "." === k(t)) t.token += k(t), I(t), S.isDigit(k(t)) || (t.tokenType = T.DELIMITER);else {
              for (; S.isDigit(k(t));) {
                t.token += k(t), I(t);
              }

              S.isDecimalMark(k(t), F(t)) && (t.token += k(t), I(t));
            }

            for (; S.isDigit(k(t));) {
              t.token += k(t), I(t);
            }

            if ("E" === k(t) || "e" === k(t)) if (S.isDigit(F(t)) || "-" === F(t) || "+" === F(t)) {
              if (t.token += k(t), I(t), "+" !== k(t) && "-" !== k(t) || (t.token += k(t), I(t)), !S.isDigit(k(t))) throw at(t, 'Digit expected, got "' + k(t) + '"');

              for (; S.isDigit(k(t));) {
                t.token += k(t), I(t);
              }

              if (S.isDecimalMark(k(t), F(t))) throw at(t, 'Digit expected, got "' + k(t) + '"');
            } else if ("." === F(t)) throw I(t), at(t, 'Digit expected, got "' + k(t) + '"');
          } else {
            if (!S.isAlpha(k(t), M(t), F(t))) {
              for (t.tokenType = T.UNKNOWN; "" !== k(t);) {
                t.token += k(t), I(t);
              }

              throw at(t, 'Syntax error in part "' + t.token + '"');
            }

            for (; S.isAlpha(k(t), M(t), F(t)) || S.isDigit(k(t));) {
              t.token += k(t), I(t);
            }

            A.hasOwnProperty(t.token) ? t.tokenType = T.DELIMITER : t.tokenType = T.SYMBOL;
          }
        } else t.tokenType = T.DELIMITER;
      }

      function C(t) {
        do {
          R(t);
        } while ("\n" === t.token);
      }

      function D(t) {
        t.nestingLevel++;
      }

      function L(t) {
        t.nestingLevel--;
      }

      function U(t, e) {
        var r = {
          extraNodes: {},
          expression: "",
          comment: "",
          index: 0,
          token: "",
          tokenType: T.NULL,
          nestingLevel: 0,
          conditionalLevel: null
        };
        n(r, {
          expression: t,
          extraNodes: e
        }), R(r);

        var o = function (t) {
          var e,
              r,
              n = [];

          for ("" !== t.token && "\n" !== t.token && ";" !== t.token && ((e = B(t)).comment = t.comment); "\n" === t.token || ";" === t.token;) {
            0 === n.length && e && (r = ";" !== t.token, n.push({
              node: e,
              visible: r
            })), R(t), "\n" !== t.token && ";" !== t.token && "" !== t.token && ((e = B(t)).comment = t.comment, r = ";" !== t.token, n.push({
              node: e,
              visible: r
            }));
          }

          return n.length > 0 ? new h(n) : (e || ((e = new m(void 0)).comment = t.comment), e);
        }(r);

        if ("" !== r.token) throw r.tokenType === T.DELIMITER ? st(r, "Unexpected operator " + r.token) : at(r, 'Unexpected part "' + r.token + '"');
        return o;
      }

      function B(e) {
        var r,
            n,
            o,
            i,
            a = function (t) {
          for (var e = function (t) {
            for (var e = H(t); "or" === t.token;) {
              C(t), e = new v("or", "or", [e, H(t)]);
            }

            return e;
          }(t); "?" === t.token;) {
            var r = t.conditionalLevel;
            t.conditionalLevel = t.nestingLevel, C(t);
            var n = e,
                o = B(t);
            if (":" !== t.token) throw at(t, "False part of conditional expression expected");
            t.conditionalLevel = null, C(t);
            var i = B(t);
            e = new l(n, o, i), t.conditionalLevel = r;
          }

          return e;
        }(e);

        if ("=" === e.token) {
          if (t.isSymbolNode(a)) return r = a.name, C(e), o = B(e), new f(new E(r), o);
          if (t.isAccessorNode(a)) return C(e), o = B(e), new f(a.object, a.index, o);
          if (t.isFunctionNode(a) && t.isSymbolNode(a.fn) && (i = !0, n = [], r = a.name, a.args.forEach(function (e, r) {
            t.isSymbolNode(e) ? n[r] = e.name : i = !1;
          }), i)) return C(e), o = B(e), new d(r, n, o);
          throw at(e, "Invalid left hand side of assignment operator =");
        }

        return a;
      }

      function H(t) {
        for (var e = z(t); "xor" === t.token;) {
          C(t), e = new v("xor", "xor", [e, z(t)]);
        }

        return e;
      }

      function z(t) {
        for (var e = $(t); "and" === t.token;) {
          C(t), e = new v("and", "and", [e, $(t)]);
        }

        return e;
      }

      function $(t) {
        for (var e = W(t); "|" === t.token;) {
          C(t), e = new v("|", "bitOr", [e, W(t)]);
        }

        return e;
      }

      function W(t) {
        for (var e = V(t); "^|" === t.token;) {
          C(t), e = new v("^|", "bitXor", [e, V(t)]);
        }

        return e;
      }

      function V(t) {
        for (var e = J(t); "&" === t.token;) {
          C(t), e = new v("&", "bitAnd", [e, J(t)]);
        }

        return e;
      }

      function J(t) {
        for (var e = [q(t)], r = [], n = {
          "==": "equal",
          "!=": "unequal",
          "<": "smaller",
          ">": "larger",
          "<=": "smallerEq",
          ">=": "largerEq"
        }; n.hasOwnProperty(t.token);) {
          var o = {
            name: t.token,
            fn: n[t.token]
          };
          r.push(o), C(t), e.push(q(t));
        }

        return 1 === e.length ? e[0] : 2 === e.length ? new v(r[0].name, r[0].fn, e) : new N(r.map(function (t) {
          return t.fn;
        }), e);
      }

      function q(t) {
        var e, r, n, o, i;

        for (e = X(t), r = {
          "<<": "leftShift",
          ">>": "rightArithShift",
          ">>>": "rightLogShift"
        }; r.hasOwnProperty(t.token);) {
          o = r[n = t.token], C(t), i = [e, X(t)], e = new v(n, o, i);
        }

        return e;
      }

      function X(t) {
        var e, r, n, o, i;

        for (e = G(t), r = {
          to: "to",
          in: "to"
        }; r.hasOwnProperty(t.token);) {
          o = r[n = t.token], C(t), "in" === n && "" === t.token ? e = new v("*", "multiply", [e, new E("in")], !0) : (i = [e, G(t)], e = new v(n, o, i));
        }

        return e;
      }

      function G(t) {
        var e,
            r = [];

        if (e = ":" === t.token ? new m(1) : Y(t), ":" === t.token && t.conditionalLevel !== t.nestingLevel) {
          for (r.push(e); ":" === t.token && r.length < 3;) {
            C(t), ")" === t.token || "]" === t.token || "," === t.token || "" === t.token ? r.push(new E("end")) : r.push(Y(t));
          }

          e = 3 === r.length ? new b(r[0], r[2], r[1]) : new b(r[0], r[1]);
        }

        return e;
      }

      function Y(t) {
        var e, r, n, o, i;

        for (e = Z(t), r = {
          "+": "add",
          "-": "subtract"
        }; r.hasOwnProperty(t.token);) {
          o = r[n = t.token], C(t), i = [e, Z(t)], e = new v(n, o, i);
        }

        return e;
      }

      function Z(t) {
        var e, r, n, o, i;

        for (r = e = K(t), n = {
          "*": "multiply",
          ".*": "dotMultiply",
          "/": "divide",
          "./": "dotDivide",
          "%": "mod",
          mod: "mod"
        }; n.hasOwnProperty(t.token);) {
          i = n[o = t.token], C(t), r = K(t), e = new v(o, i, [e, r]);
        }

        return e;
      }

      function K(e) {
        var r, n;

        for (n = r = Q(e); e.tokenType === T.SYMBOL || "in" === e.token && t.isConstantNode(r) || !(e.tokenType !== T.NUMBER || t.isConstantNode(n) || t.isOperatorNode(n) && "!" !== n.op) || "(" === e.token;) {
          n = Q(e), r = new v("*", "multiply", [r, n], !0);
        }

        return r;
      }

      function Q(e) {
        for (var r = tt(e), o = r, i = []; "/" === e.token && t.isConstantNode(o);) {
          if (i.push(n({}, e)), C(e), e.tokenType !== T.NUMBER) {
            n(e, i.pop());
            break;
          }

          if (i.push(n({}, e)), C(e), e.tokenType !== T.SYMBOL && "(" !== e.token) {
            i.pop(), n(e, i.pop());
            break;
          }

          n(e, i.pop()), i.pop(), o = tt(e), r = new v("/", "divide", [r, o]);
        }

        return r;
      }

      function tt(t) {
        var r,
            n,
            o,
            i = {
          "-": "unaryMinus",
          "+": "unaryPlus",
          "~": "bitNot",
          not: "not"
        };
        return i.hasOwnProperty(t.token) ? (o = i[t.token], r = t.token, C(t), n = [tt(t)], new v(r, o, n)) : function (t) {
          var r, n, o, i;
          return r = function (t) {
            var r, n, o, i;

            for (r = function (t) {
              var r = [];

              if (t.tokenType === T.SYMBOL && t.extraNodes.hasOwnProperty(t.token)) {
                var n = t.extraNodes[t.token];

                if (R(t), "(" === t.token) {
                  if (r = [], D(t), R(t), ")" !== t.token) for (r.push(B(t)); "," === t.token;) {
                    R(t), r.push(B(t));
                  }
                  if (")" !== t.token) throw at(t, "Parenthesis ) expected");
                  L(t), R(t);
                }

                return new n(r);
              }

              return function (t) {
                var r, n;
                return t.tokenType === T.SYMBOL || t.tokenType === T.DELIMITER && (t.token in A) ? (n = t.token, R(t), r = P.hasOwnProperty(n) ? new m(P[n]) : -1 !== _.indexOf(n) ? new m(u(n, "number")) : new E(n), r = et(t, r)) : function (t) {
                  var r, n;
                  return '"' === t.token ? (n = rt(t), r = new m(n), r = et(t, r)) : function (t) {
                    var r, n;
                    return "'" === t.token ? (n = nt(t), r = new m(n), r = et(t, r)) : function (t) {
                      var r, n, o, i;

                      if ("[" === t.token) {
                        if (D(t), R(t), "]" !== t.token) {
                          var a = ot(t);

                          if (";" === t.token) {
                            for (o = 1, n = [a]; ";" === t.token;) {
                              R(t), n[o] = ot(t), o++;
                            }

                            if ("]" !== t.token) throw at(t, "End of matrix ] expected");
                            L(t), R(t), i = n[0].items.length;

                            for (var s = 1; s < o; s++) {
                              if (n[s].items.length !== i) throw st(t, "Column dimensions mismatch (" + n[s].items.length + " !== " + i + ")");
                            }

                            r = new c(n);
                          } else {
                            if ("]" !== t.token) throw at(t, "End of matrix ] expected");
                            L(t), R(t), r = a;
                          }
                        } else L(t), R(t), r = new c([]);

                        return et(t, r);
                      }

                      return function (t) {
                        if ("{" === t.token) {
                          var r,
                              n = {};

                          do {
                            if (R(t), "}" !== t.token) {
                              if ('"' === t.token) r = rt(t);else if ("'" === t.token) r = nt(t);else {
                                if (t.tokenType !== T.SYMBOL) throw at(t, "Symbol or string expected as object key");
                                r = t.token, R(t);
                              }
                              if (":" !== t.token) throw at(t, "Colon : expected after object key");
                              R(t), n[r] = B(t);
                            }
                          } while ("," === t.token);

                          if ("}" !== t.token) throw at(t, "Comma , or bracket } expected after object value");
                          R(t);
                          var o = new g(n);
                          return o = et(t, o);
                        }

                        return function (t) {
                          var r;
                          return t.tokenType === T.NUMBER ? (r = t.token, R(t), new m(u(r, e.number))) : function (t) {
                            var e;

                            if ("(" === t.token) {
                              if (D(t), R(t), e = B(t), ")" !== t.token) throw at(t, "Parenthesis ) expected");
                              return L(t), R(t), e = new x(e), e = et(t, e);
                            }

                            return function (t) {
                              throw "" === t.token ? at(t, "Unexpected end of expression") : at(t, "Value expected");
                            }(t);
                          }(t);
                        }(t);
                      }(t);
                    }(t);
                  }(t);
                }(t);
              }(t);
            }(t), n = {
              "!": "factorial",
              "'": "ctranspose"
            }; n.hasOwnProperty(t.token);) {
              o = t.token, i = n[o], R(t), r = new v(o, i, [r]), r = et(t, r);
            }

            return r;
          }(t), ("^" === t.token || ".^" === t.token) && (n = t.token, o = "^" === n ? "pow" : "dotPow", C(t), i = [r, tt(t)], r = new v(n, o, i)), r;
        }(t);
      }

      function et(e, r, n) {
        for (var o; !("(" !== e.token && "[" !== e.token && "." !== e.token || n && -1 === n.indexOf(e.token));) {
          if (o = [], "(" === e.token) {
            if (!t.isSymbolNode(r) && !t.isAccessorNode(r)) return r;
            if (D(e), R(e), ")" !== e.token) for (o.push(B(e)); "," === e.token;) {
              R(e), o.push(B(e));
            }
            if (")" !== e.token) throw at(e, "Parenthesis ) expected");
            L(e), R(e), r = new w(r, o);
          } else if ("[" === e.token) {
            if (D(e), R(e), "]" !== e.token) for (o.push(B(e)); "," === e.token;) {
              R(e), o.push(B(e));
            }
            if ("]" !== e.token) throw at(e, "Parenthesis ] expected");
            L(e), R(e), r = new p(r, new y(o));
          } else {
            if (R(e), e.tokenType !== T.SYMBOL) throw at(e, "Property name expected after dot");
            o.push(new m(e.token)), R(e), r = new p(r, new y(o, !0));
          }
        }

        return r;
      }

      function rt(t) {
        for (var e = ""; "" !== k(t) && '"' !== k(t);) {
          "\\" === k(t) && (e += k(t), I(t)), e += k(t), I(t);
        }

        if (R(t), '"' !== t.token) throw at(t, 'End of string " expected');
        return R(t), JSON.parse('"' + e + '"');
      }

      function nt(t) {
        for (var e = ""; "" !== k(t) && "'" !== k(t);) {
          "\\" === k(t) && (e += k(t), I(t)), e += k(t), I(t);
        }

        if (R(t), "'" !== t.token) throw at(t, "End of string ' expected");
        return R(t), JSON.parse('"' + e + '"');
      }

      function ot(t) {
        for (var e = [B(t)], r = 1; "," === t.token;) {
          R(t), e[r] = B(t), r++;
        }

        return new c(e);
      }

      function it(t) {
        return t.index - t.token.length + 1;
      }

      function at(t, e) {
        var r = it(t),
            n = new SyntaxError(e + " (char " + r + ")");
        return n.char = r, n;
      }

      function st(t, e) {
        var r = it(t),
            n = new SyntaxError(e + " (char " + r + ")");
        return n.char = r, n;
      }

      return S.isAlpha = function (t, e, r) {
        return S.isValidLatinOrGreek(t) || S.isValidMathSymbol(t, r) || S.isValidMathSymbol(e, t);
      }, S.isValidLatinOrGreek = function (t) {
        return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(t);
      }, S.isValidMathSymbol = function (t, e) {
        return /^[\uD835]$/.test(t) && /^[\uDC00-\uDFFF]$/.test(e) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(e);
      }, S.isWhitespace = function (t, e) {
        return " " === t || "\t" === t || "\n" === t && e > 0;
      }, S.isDecimalMark = function (t, e) {
        return "." === t && "/" !== e && "*" !== e && "^" !== e;
      }, S.isDigitDot = function (t) {
        return t >= "0" && t <= "9" || "." === t;
      }, S.isDigit = function (t) {
        return t >= "0" && t <= "9";
      }, S;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    e.name = "typeof", e.factory = function (t, e, r, o) {
      var i = o("_typeof", {
        any: function any(e) {
          var r = n(e);
          return "object" === r ? null === e ? "null" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : t.isBigNumber(e) ? "BigNumber" : t.isComplex(e) ? "Complex" : t.isFraction(e) ? "Fraction" : t.isMatrix(e) ? "Matrix" : t.isUnit(e) ? "Unit" : t.isIndex(e) ? "Index" : t.isRange(e) ? "Range" : t.isResultSet(e) ? "ResultSet" : t.isNode(e) ? e.type : t.isChain(e) ? "Chain" : t.isHelp(e) ? "Help" : "Object" : "function" === r ? "Function" : r;
        }
      });
      return i.toTex = void 0, i;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t, e, r, o) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.fn = t, this.count = e, this.min = r, this.max = o, this.message = "Wrong number of arguments in function " + t + " (" + e + " provided, " + r + (null != o ? "-" + o : "") + " expected)", this.stack = new Error().stack;
    }

    n.prototype = new Error(), n.prototype.constructor = Error, n.prototype.name = "ArgumentsError", n.prototype.isArgumentsError = !0, t.exports = n;
  }, function (t, e, r) {
    "use strict";

    t.exports = {
      end: !0
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(15).transform,
        i = r(0).getSafeProperty;

    e.factory = function (t, e, a, s) {
      var u = a(r(17));
      return function (t, e) {
        try {
          if (Array.isArray(t)) return u(t, e);
          if (t && "function" == typeof t.subset) return t.subset(e);
          if ("string" == typeof t) return u(t, e);

          if ("object" === n(t)) {
            if (!e.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
            return i(t, e.getObjectProperty());
          }

          throw new TypeError("Cannot apply index: unsupported type of object");
        } catch (t) {
          throw o(t);
        }
      };
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(16);

    e.transform = function (t) {
      return t && t.isIndexError ? new n(t.index + 1, t.min + 1, void 0 !== t.max ? t.max + 1 : void 0) : t;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t, e, r) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.index = t, arguments.length < 3 ? (this.min = 0, this.max = e) : (this.min = e, this.max = r), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
    }

    n.prototype = new RangeError(), n.prototype.constructor = RangeError, n.prototype.name = "IndexError", n.prototype.isIndexError = !0, t.exports = n;
  }, function (t, e, r) {
    "use strict";

    var n = r(2).clone,
        o = r(4).validateIndex,
        i = r(0).getSafeProperty,
        a = r(0).setSafeProperty,
        s = r(18);

    function u(t, e) {
      if (1 !== e.size().length) throw new s(e.size(), 1);
      var r = e.dimension(0);
      if ("string" != typeof r) throw new TypeError("String expected as index to retrieve an object property");
      return i(t, r);
    }

    function p(t, e, r) {
      if (1 !== e.size().length) throw new s(e.size(), 1);
      var o = e.dimension(0);
      if ("string" != typeof o) throw new TypeError("String expected as index to retrieve an object property");
      var i = n(t);
      return a(i, o, r), i;
    }

    e.name = "subset", e.factory = function (t, e, i, a) {
      var c = i(r(19)),
          f = a("subset", {
        "Array, Index": function ArrayIndex(t, e) {
          var r = c(t).subset(e);
          return e.isScalar() ? r : r.valueOf();
        },
        "Matrix, Index": function MatrixIndex(t, e) {
          return t.subset(e);
        },
        "Object, Index": u,
        "string, Index": function stringIndex(e, r) {
          if (!t.isIndex(r)) throw new TypeError("Index expected");
          if (1 !== r.size().length) throw new s(r.size().length, 1);
          var n = e.length;
          o(r.min()[0], n), o(r.max()[0], n);
          var i = r.dimension(0),
              a = "";
          return i.forEach(function (t) {
            a += e.charAt(t);
          }), a;
        },
        "Array, Index, any": function ArrayIndexAny(t, e, r) {
          return c(n(t)).subset(e, r, void 0).valueOf();
        },
        "Array, Index, any, any": function ArrayIndexAnyAny(t, e, r, o) {
          return c(n(t)).subset(e, r, o).valueOf();
        },
        "Matrix, Index, any": function MatrixIndexAny(t, e, r) {
          return t.clone().subset(e, r);
        },
        "Matrix, Index, any, any": function MatrixIndexAnyAny(t, e, r, n) {
          return t.clone().subset(e, r, n);
        },
        "string, Index, string": h,
        "string, Index, string, string": h,
        "Object, Index, any": p
      });
      return f.toTex = void 0, f;

      function h(t, e, r, n) {
        if (!e || !0 !== e.isIndex) throw new TypeError("Index expected");
        if (1 !== e.size().length) throw new s(e.size().length, 1);

        if (void 0 !== n) {
          if ("string" != typeof n || 1 !== n.length) throw new TypeError("Single character expected as defaultValue");
        } else n = " ";

        var i = e.dimension(0);
        if (i.size()[0] !== r.length) throw new s(i.size()[0], r.length);
        var a = t.length;
        o(e.min()[0]), o(e.max()[0]);

        for (var u = [], p = 0; p < a; p++) {
          u[p] = t.charAt(p);
        }

        if (i.forEach(function (t, e) {
          u[t] = r.charAt(e[0]);
        }), u.length > a) for (var c = a - 1, f = u.length; c < f; c++) {
          u[c] || (u[c] = n);
        }
        return u.join("");
      }
    };
  }, function (t, e, r) {
    "use strict";

    function n(t, e, r) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.actual = t, this.expected = e, this.relation = r, this.message = "Dimension mismatch (" + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + " " + (this.relation || "!=") + " " + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + ")", this.stack = new Error().stack;
    }

    n.prototype = new RangeError(), n.prototype.constructor = RangeError, n.prototype.name = "DimensionError", n.prototype.isDimensionError = !0, t.exports = n;
  }, function (t, e, r) {
    "use strict";

    e.name = "matrix", e.factory = function (t, e, r, n) {
      var o = n("matrix", {
        "": function _() {
          return i([]);
        },
        string: function string(t) {
          return i([], t);
        },
        "string, string": function stringString(t, e) {
          return i([], t, e);
        },
        Array: function Array(t) {
          return i(t);
        },
        Matrix: function Matrix(t) {
          return i(t, t.storage());
        },
        "Array | Matrix, string": i,
        "Array | Matrix, string, string": i
      });
      return o.toTex = {
        0: "\\begin{bmatrix}\\end{bmatrix}",
        1: "\\left(${args[0]}\\right)",
        2: "\\left(${args[0]}\\right)"
      }, o;

      function i(e, r, n) {
        return new (t.Matrix.storage(r || "default"))(e, n);
      }
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(7),
        o = r(3).escape,
        i = r(2).hasOwnProperty,
        a = r(0).getSafeProperty;
    e.name = "SymbolNode", e.path = "expression.node", e.math = !0, e.factory = function (t, e, s, u, p) {
      var c = s(r(1));

      function f(e) {
        return !!t.Unit && t.Unit.isValuelessUnit(e);
      }

      function h(t) {
        if (!(this instanceof h)) throw new SyntaxError("Constructor must be called with the new operator");
        if ("string" != typeof t) throw new TypeError('String expected for parameter "name"');
        this.name = t;
      }

      return h.prototype = new c(), h.prototype.type = "SymbolNode", h.prototype.isSymbolNode = !0, h.prototype._compile = function (e, r) {
        var n = this.name;
        if (i(r, n)) return function (t, e, r) {
          return e[n];
        };
        if (n in e) return function (t, r, o) {
          return a(n in t ? t : e, n);
        };
        var o = f(n);
        return function (e, r, i) {
          return n in e ? a(e, n) : o ? new t.Unit(null, n) : function (t) {
            throw new Error("Undefined symbol " + t);
          }(n);
        };
      }, h.prototype.forEach = function (t) {}, h.prototype.map = function (t) {
        return this.clone();
      }, h.prototype.clone = function () {
        return new h(this.name);
      }, h.prototype._toString = function (t) {
        return this.name;
      }, h.prototype.toHTML = function (t) {
        var e = o(this.name);
        return "true" === e || "false" === e ? '<span class="math-symbol math-boolean">' + e + "</span>" : "i" === e ? '<span class="math-symbol math-imaginary-symbol">' + e + "</span>" : "Infinity" === e ? '<span class="math-symbol math-infinity-symbol">' + e + "</span>" : "NaN" === e ? '<span class="math-symbol math-nan-symbol">' + e + "</span>" : "null" === e ? '<span class="math-symbol math-null-symbol">' + e + "</span>" : "undefined" === e ? '<span class="math-symbol math-undefined-symbol">' + e + "</span>" : '<span class="math-symbol">' + e + "</span>";
      }, h.prototype.toJSON = function () {
        return {
          mathjs: "SymbolNode",
          name: this.name
        };
      }, h.fromJSON = function (t) {
        return new h(t.name);
      }, h.prototype._toTex = function (t) {
        var e = !1;
        void 0 === p[this.name] && f(this.name) && (e = !0);
        var r = n.toSymbol(this.name, e);
        return "\\" === r[0] ? r : " " + r;
      }, h;
    };
  }, function (t, e, r) {
    var n = r(23).create();
    n.import(r(33)), n.import(r(57)), n.import(r(58)), n.import(r(59)), n.import({
      add: function add(t, e) {
        return t + e;
      },
      subtract: function subtract(t, e) {
        return t - e;
      },
      multiply: function multiply(t, e) {
        return t * e;
      },
      divide: function divide(t, e) {
        return t / e;
      },
      mod: function mod(t, e) {
        return t % e;
      },
      unaryPlus: function unaryPlus(t) {
        return t;
      },
      unaryMinus: function unaryMinus(t) {
        return -t;
      },
      bitOr: function bitOr(t, e) {
        return t | e;
      },
      bitXor: function bitXor(t, e) {
        return t ^ e;
      },
      bitAnd: function bitAnd(t, e) {
        return t & e;
      },
      bitNot: function bitNot(t) {
        return ~t;
      },
      leftShift: function leftShift(t, e) {
        return t << e;
      },
      rightArithShift: function rightArithShift(t, e) {
        return t >> e;
      },
      rightLogShift: function rightLogShift(t, e) {
        return t >>> e;
      },
      or: function or(t, e) {
        return !(!t && !e);
      },
      xor: function xor(t, e) {
        return !!t != !!e;
      },
      and: function and(t, e) {
        return !(!t || !e);
      },
      not: function not(t) {
        return !t;
      },
      equal: function equal(t, e) {
        return t == e;
      },
      unequal: function unequal(t, e) {
        return t != e;
      },
      smaller: function smaller(t, e) {
        return t < e;
      },
      larger: function larger(t, e) {
        return t > e;
      },
      smallerEq: function smallerEq(t, e) {
        return t <= e;
      },
      largerEq: function largerEq(t, e) {
        return t >= e;
      },
      matrix: function matrix() {
        throw new Error("Matrices not supported");
      },
      index: function index() {
        throw new Error("Matrix indexes not supported");
      },
      pi: Math.PI,
      e: Math.E,
      true: !0,
      false: !1,
      null: null
    });
    var o = {};
    Object.getOwnPropertyNames(Math).forEach(function (t) {
      Object.prototype.hasOwnProperty(t) || (o[t] = Math[t]);
    }), n.import(o), t.exports = n;
  }, function (t, e) {
    t.exports = function () {
      "use strict";

      var t,
          e,
          r,
          _n,
          o = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
      },
          i = function i(e) {
        throw {
          name: "SyntaxError",
          message: e,
          at: t,
          text: r
        };
      },
          a = function a(n) {
        return n && n !== e && i("Expected '" + n + "' instead of '" + e + "'"), e = r.charAt(t), t += 1, e;
      },
          s = function s() {
        var t,
            r = "";

        for ("-" === e && (r = "-", a("-")); e >= "0" && e <= "9";) {
          r += e, a();
        }

        if ("." === e) for (r += "."; a() && e >= "0" && e <= "9";) {
          r += e;
        }
        if ("e" === e || "E" === e) for (r += e, a(), "-" !== e && "+" !== e || (r += e, a()); e >= "0" && e <= "9";) {
          r += e, a();
        }
        if (t = +r, isFinite(t)) return t;
        i("Bad number");
      },
          u = function u() {
        var t,
            r,
            n,
            s = "";
        if ('"' === e) for (; a();) {
          if ('"' === e) return a(), s;
          if ("\\" === e) {
            if (a(), "u" === e) {
              for (n = 0, r = 0; r < 4 && (t = parseInt(a(), 16), isFinite(t)); r += 1) {
                n = 16 * n + t;
              }

              s += String.fromCharCode(n);
            } else {
              if ("string" != typeof o[e]) break;
              s += o[e];
            }
          } else s += e;
        }
        i("Bad string");
      },
          p = function p() {
        for (; e && e <= " ";) {
          a();
        }
      };

      return _n = function n() {
        switch (p(), e) {
          case "{":
            return function () {
              var t,
                  r = {};

              if ("{" === e) {
                if (a("{"), p(), "}" === e) return a("}"), r;

                for (; e;) {
                  if (t = u(), p(), a(":"), Object.hasOwnProperty.call(r, t) && i("Duplicate key '" + t + "'"), r[t] = _n(), p(), "}" === e) return a("}"), r;
                  a(","), p();
                }
              }

              i("Bad object");
            }();

          case "[":
            return function () {
              var t = [];

              if ("[" === e) {
                if (a("["), p(), "]" === e) return a("]"), t;

                for (; e;) {
                  if (t.push(_n()), p(), "]" === e) return a("]"), t;
                  a(","), p();
                }
              }

              i("Bad array");
            }();

          case '"':
            return u();

          case "-":
            return s();

          default:
            return e >= "0" && e <= "9" ? s() : function () {
              switch (e) {
                case "t":
                  return a("t"), a("r"), a("u"), a("e"), !0;

                case "f":
                  return a("f"), a("a"), a("l"), a("s"), a("e"), !1;

                case "n":
                  return a("n"), a("u"), a("l"), a("l"), null;
              }

              i("Unexpected '" + e + "'");
            }();
        }
      }, function (o, a) {
        var s;
        return r = o, t = 0, e = " ", s = _n(), p(), e && i("Syntax error"), "function" == typeof a ? function t(e, r) {
          var n,
              o,
              i = e[r];
          if (i && "object" == _typeof(i)) for (n in i) {
            Object.prototype.hasOwnProperty.call(i, n) && (void 0 !== (o = t(i, n)) ? i[n] = o : delete i[n]);
          }
          return a.call(e, r, i);
        }({
          "": s
        }, "") : s;
      };
    }();
  }, function (t, e, r) {
    t.exports = r(24);
  }, function (t, e, r) {
    "use strict";

    r(25);
    var n = r(2).isFactory,
        o = r(26),
        i = r(29),
        a = r(31),
        s = r(32);

    e.create = function (t) {
      if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
      var e = [],
          r = [],
          u = i.mixin({});
      u.type = {}, u.expression = {
        transform: {},
        mathWithTransform: {}
      }, u.typed = o.create(u.type);
      var p = {
        epsilon: 1e-12,
        matrix: "Matrix",
        number: "number",
        precision: 64,
        predictable: !1,
        randomSeed: null
      };

      function c(t) {
        if (!n(t)) throw new Error("Factory object with properties `type`, `name`, and `factory` expected");
        var o,
            i = e.indexOf(t);
        return -1 === i ? (o = !0 === t.math ? t.factory(u.type, p, c, u.typed, u) : t.factory(u.type, p, c, u.typed), e.push(t), r.push(o)) : o = r[i], o;
      }

      return u.import = c(a), u.config = c(s), u.expression.mathWithTransform.config = u.config, t && u.config(t), u;
    };
  }, function (t, e, r) {
    "use strict";

    Number.isFinite = Number.isFinite || function (t) {
      return "number" == typeof t && isFinite(t);
    }, Number.isNaN = Number.isNaN || function (t) {
      return t != t;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(27),
        i = r(8).digits,
        a = r(9),
        s = r(28),
        _u = function u() {
      return _u = o.create, o;
    };

    e.create = function (t) {
      t.isNumber = function (t) {
        return "number" == typeof t;
      }, t.isComplex = function (e) {
        return t.Complex && e instanceof t.Complex || !1;
      }, t.isBigNumber = a, t.isFraction = function (e) {
        return t.Fraction && e instanceof t.Fraction || !1;
      }, t.isUnit = function (t) {
        return t && t.constructor.prototype.isUnit || !1;
      }, t.isString = function (t) {
        return "string" == typeof t;
      }, t.isArray = Array.isArray, t.isMatrix = s, t.isDenseMatrix = function (t) {
        return t && t.isDenseMatrix && t.constructor.prototype.isMatrix || !1;
      }, t.isSparseMatrix = function (t) {
        return t && t.isSparseMatrix && t.constructor.prototype.isMatrix || !1;
      }, t.isRange = function (t) {
        return t && t.constructor.prototype.isRange || !1;
      }, t.isIndex = function (t) {
        return t && t.constructor.prototype.isIndex || !1;
      }, t.isBoolean = function (t) {
        return "boolean" == typeof t;
      }, t.isResultSet = function (t) {
        return t && t.constructor.prototype.isResultSet || !1;
      }, t.isHelp = function (t) {
        return t && t.constructor.prototype.isHelp || !1;
      }, t.isFunction = function (t) {
        return "function" == typeof t;
      }, t.isDate = function (t) {
        return t instanceof Date;
      }, t.isRegExp = function (t) {
        return t instanceof RegExp;
      }, t.isObject = function (e) {
        return "object" === n(e) && e.constructor === Object && !t.isComplex(e) && !t.isFraction(e);
      }, t.isNull = function (t) {
        return null === t;
      }, t.isUndefined = function (t) {
        return void 0 === t;
      }, t.isAccessorNode = function (t) {
        return t && t.isAccessorNode && t.constructor.prototype.isNode || !1;
      }, t.isArrayNode = function (t) {
        return t && t.isArrayNode && t.constructor.prototype.isNode || !1;
      }, t.isAssignmentNode = function (t) {
        return t && t.isAssignmentNode && t.constructor.prototype.isNode || !1;
      }, t.isBlockNode = function (t) {
        return t && t.isBlockNode && t.constructor.prototype.isNode || !1;
      }, t.isConditionalNode = function (t) {
        return t && t.isConditionalNode && t.constructor.prototype.isNode || !1;
      }, t.isConstantNode = function (t) {
        return t && t.isConstantNode && t.constructor.prototype.isNode || !1;
      }, t.isFunctionAssignmentNode = function (t) {
        return t && t.isFunctionAssignmentNode && t.constructor.prototype.isNode || !1;
      }, t.isFunctionNode = function (t) {
        return t && t.isFunctionNode && t.constructor.prototype.isNode || !1;
      }, t.isIndexNode = function (t) {
        return t && t.isIndexNode && t.constructor.prototype.isNode || !1;
      }, t.isNode = function (t) {
        return t && t.isNode && t.constructor.prototype.isNode || !1;
      }, t.isObjectNode = function (t) {
        return t && t.isObjectNode && t.constructor.prototype.isNode || !1;
      }, t.isOperatorNode = function (t) {
        return t && t.isOperatorNode && t.constructor.prototype.isNode || !1;
      }, t.isParenthesisNode = function (t) {
        return t && t.isParenthesisNode && t.constructor.prototype.isNode || !1;
      }, t.isRangeNode = function (t) {
        return t && t.isRangeNode && t.constructor.prototype.isNode || !1;
      }, t.isSymbolNode = function (t) {
        return t && t.isSymbolNode && t.constructor.prototype.isNode || !1;
      }, t.isChain = function (t) {
        return t && t.constructor.prototype.isChain || !1;
      };

      var e = _u();

      return e.types = [{
        name: "number",
        test: t.isNumber
      }, {
        name: "Complex",
        test: t.isComplex
      }, {
        name: "BigNumber",
        test: t.isBigNumber
      }, {
        name: "Fraction",
        test: t.isFraction
      }, {
        name: "Unit",
        test: t.isUnit
      }, {
        name: "string",
        test: t.isString
      }, {
        name: "Array",
        test: t.isArray
      }, {
        name: "Matrix",
        test: t.isMatrix
      }, {
        name: "DenseMatrix",
        test: t.isDenseMatrix
      }, {
        name: "SparseMatrix",
        test: t.isSparseMatrix
      }, {
        name: "Range",
        test: t.isRange
      }, {
        name: "Index",
        test: t.isIndex
      }, {
        name: "boolean",
        test: t.isBoolean
      }, {
        name: "ResultSet",
        test: t.isResultSet
      }, {
        name: "Help",
        test: t.isHelp
      }, {
        name: "function",
        test: t.isFunction
      }, {
        name: "Date",
        test: t.isDate
      }, {
        name: "RegExp",
        test: t.isRegExp
      }, {
        name: "null",
        test: t.isNull
      }, {
        name: "undefined",
        test: t.isUndefined
      }, {
        name: "OperatorNode",
        test: t.isOperatorNode
      }, {
        name: "ConstantNode",
        test: t.isConstantNode
      }, {
        name: "SymbolNode",
        test: t.isSymbolNode
      }, {
        name: "ParenthesisNode",
        test: t.isParenthesisNode
      }, {
        name: "FunctionNode",
        test: t.isFunctionNode
      }, {
        name: "FunctionAssignmentNode",
        test: t.isFunctionAssignmentNode
      }, {
        name: "ArrayNode",
        test: t.isArrayNode
      }, {
        name: "AssignmentNode",
        test: t.isAssignmentNode
      }, {
        name: "BlockNode",
        test: t.isBlockNode
      }, {
        name: "ConditionalNode",
        test: t.isConditionalNode
      }, {
        name: "IndexNode",
        test: t.isIndexNode
      }, {
        name: "RangeNode",
        test: t.isRangeNode
      }, {
        name: "Node",
        test: t.isNode
      }, {
        name: "Object",
        test: t.isObject
      }], e.conversions = [{
        from: "number",
        to: "BigNumber",
        convert: function convert(e) {
          if (i(e) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + e + "). Use function bignumber(x) to convert to BigNumber.");
          return new t.BigNumber(e);
        }
      }, {
        from: "number",
        to: "Complex",
        convert: function convert(e) {
          return new t.Complex(e, 0);
        }
      }, {
        from: "number",
        to: "string",
        convert: function convert(t) {
          return t + "";
        }
      }, {
        from: "BigNumber",
        to: "Complex",
        convert: function convert(e) {
          return new t.Complex(e.toNumber(), 0);
        }
      }, {
        from: "Fraction",
        to: "BigNumber",
        convert: function convert(t) {
          throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
        }
      }, {
        from: "Fraction",
        to: "Complex",
        convert: function convert(e) {
          return new t.Complex(e.valueOf(), 0);
        }
      }, {
        from: "number",
        to: "Fraction",
        convert: function convert(e) {
          if (new t.Fraction(e).valueOf() !== e) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + e + "). Use function fraction(x) to convert to Fraction.");
          return new t.Fraction(e);
        }
      }, {
        from: "string",
        to: "number",
        convert: function convert(t) {
          var e = Number(t);
          if (isNaN(e)) throw new Error('Cannot convert "' + t + '" to a number');
          return e;
        }
      }, {
        from: "string",
        to: "BigNumber",
        convert: function convert(e) {
          try {
            return new t.BigNumber(e);
          } catch (t) {
            throw new Error('Cannot convert "' + e + '" to BigNumber');
          }
        }
      }, {
        from: "string",
        to: "Fraction",
        convert: function convert(e) {
          try {
            return new t.Fraction(e);
          } catch (t) {
            throw new Error('Cannot convert "' + e + '" to Fraction');
          }
        }
      }, {
        from: "string",
        to: "Complex",
        convert: function convert(e) {
          try {
            return new t.Complex(e);
          } catch (t) {
            throw new Error('Cannot convert "' + e + '" to Complex');
          }
        }
      }, {
        from: "boolean",
        to: "number",
        convert: function convert(t) {
          return +t;
        }
      }, {
        from: "boolean",
        to: "BigNumber",
        convert: function convert(e) {
          return new t.BigNumber(+e);
        }
      }, {
        from: "boolean",
        to: "Fraction",
        convert: function convert(e) {
          return new t.Fraction(+e);
        }
      }, {
        from: "boolean",
        to: "string",
        convert: function convert(t) {
          return +t;
        }
      }, {
        from: "Array",
        to: "Matrix",
        convert: function convert(e) {
          return new t.DenseMatrix(e);
        }
      }, {
        from: "Matrix",
        to: "Array",
        convert: function convert(t) {
          return t.valueOf();
        }
      }], e;
    };
  }, function (t, e, r) {
    "use strict";

    var n, o, i;
    o = [], void 0 === (i = "function" == typeof (n = function n() {
      function t() {
        return !0;
      }

      function e() {
        return !1;
      }

      function r() {}

      return function n() {
        var o = [{
          name: "number",
          test: function test(t) {
            return "number" == typeof t;
          }
        }, {
          name: "string",
          test: function test(t) {
            return "string" == typeof t;
          }
        }, {
          name: "boolean",
          test: function test(t) {
            return "boolean" == typeof t;
          }
        }, {
          name: "Function",
          test: function test(t) {
            return "function" == typeof t;
          }
        }, {
          name: "Array",
          test: Array.isArray
        }, {
          name: "Date",
          test: function test(t) {
            return t instanceof Date;
          }
        }, {
          name: "RegExp",
          test: function test(t) {
            return t instanceof RegExp;
          }
        }, {
          name: "Object",
          test: function test(t) {
            return "object" == _typeof(t) && t.constructor === Object;
          }
        }, {
          name: "null",
          test: function test(t) {
            return null === t;
          }
        }, {
          name: "undefined",
          test: function test(t) {
            return void 0 === t;
          }
        }],
            i = {
          name: "any",
          test: t
        },
            a = [],
            s = [],
            u = {
          types: o,
          conversions: s,
          ignore: a
        };

        function p(t) {
          var e = L(u.types, function (e) {
            return e.name === t;
          });
          if (e) return e;
          if ("any" === t) return i;
          var r = L(u.types, function (e) {
            return e.name.toLowerCase() === t.toLowerCase();
          });
          throw new TypeError('Unknown type "' + t + '"' + (r ? '. Did you mean "' + r.name + '"?' : ""));
        }

        function c(t) {
          return t === i ? 999 : u.types.indexOf(t);
        }

        function f(t) {
          var e = L(u.types, function (e) {
            return e.test(t);
          });
          if (e) return e.name;
          throw new TypeError("Value has unknown type. Value: " + t);
        }

        function h(t) {
          return t.map(function (t) {
            var e = t.types.map(w);
            return (t.restParam ? "..." : "") + e.join("|");
          }).join(",");
        }

        function l(t, e) {
          var r = 0 === t.indexOf("..."),
              n = r ? t.length > 3 ? t.slice(3) : "any" : t,
              o = n.split("|").map(k).filter(I).filter(j),
              i = function (t, e) {
            var r = {};
            return t.forEach(function (t) {
              -1 !== e.indexOf(t.from) || -1 === e.indexOf(t.to) || r[t.from] || (r[t.from] = t);
            }), Object.keys(r).map(function (t) {
              return r[t];
            });
          }(e, o),
              a = o.map(function (t) {
            var e = p(t);
            return {
              name: t,
              typeIndex: c(e),
              test: e.test,
              conversion: null,
              conversionIndex: -1
            };
          }),
              s = i.map(function (t) {
            var r = p(t.from);
            return {
              name: t.from,
              typeIndex: c(r),
              test: r.test,
              conversion: t,
              conversionIndex: e.indexOf(t)
            };
          });

          return {
            types: a.concat(s),
            restParam: r
          };
        }

        function m(t) {
          var e = R(t);
          return !!e && e.restParam;
        }

        function d(t) {
          return t.types.some(function (t) {
            return null != t.conversion;
          });
        }

        function y(e) {
          if (e && 0 !== e.types.length) {
            if (1 === e.types.length) return p(e.types[0].name).test;

            if (2 === e.types.length) {
              var r = p(e.types[0].name).test,
                  n = p(e.types[1].name).test;
              return function (t) {
                return r(t) || n(t);
              };
            }

            var o = e.types.map(function (t) {
              return p(t.name).test;
            });
            return function (t) {
              for (var e = 0; e < o.length; e++) {
                if (o[e](t)) return !0;
              }

              return !1;
            };
          }

          return t;
        }

        function g(t) {
          var e, r, n, o;

          if (m(t)) {
            var i = (e = (o = t, o.slice(0, o.length - 1)).map(y)).length,
                a = y(R(t));
            return function (t) {
              for (var r = 0; r < e.length; r++) {
                if (!e[r](t[r])) return !1;
              }

              return function (t) {
                for (var e = i; e < t.length; e++) {
                  if (!a(t[e])) return !1;
                }

                return !0;
              }(t) && t.length >= i + 1;
            };
          }

          return 0 === t.length ? function (t) {
            return 0 === t.length;
          } : 1 === t.length ? (r = y(t[0]), function (t) {
            return r(t[0]) && 1 === t.length;
          }) : 2 === t.length ? (r = y(t[0]), n = y(t[1]), function (t) {
            return r(t[0]) && n(t[1]) && 2 === t.length;
          }) : (e = t.map(y), function (t) {
            for (var r = 0; r < e.length; r++) {
              if (!e[r](t[r])) return !1;
            }

            return t.length === e.length;
          });
        }

        function v(t, e) {
          return e < t.params.length ? t.params[e] : m(t.params) ? R(t.params) : null;
        }

        function x(t, e, r) {
          var n = v(t, e),
              o = n ? r ? n.types.filter(b) : n.types : [];
          return o.map(w);
        }

        function w(t) {
          return t.name;
        }

        function b(t) {
          return null === t.conversion || void 0 === t.conversion;
        }

        function N(t, e) {
          var r = function (t) {
            for (var e = {}, r = 0; r < t.length; r++) {
              e[t[r]] = !0;
            }

            return Object.keys(e);
          }(U(t, function (t) {
            return x(t, e, !1);
          }));

          return -1 !== r.indexOf("any") ? ["any"] : r;
        }

        function E(t) {
          for (var e = 999, r = 0; r < t.types.length; r++) {
            b(t.types[r]) && (e = Math.min(e, t.types[r].typeIndex));
          }

          return e;
        }

        function S(t) {
          for (var e = 999, r = 0; r < t.types.length; r++) {
            b(t.types[r]) || (e = Math.min(e, t.types[r].conversionIndex));
          }

          return e;
        }

        function T(t, e) {
          var r;
          return 0 != (r = t.restParam - e.restParam) ? r : 0 != (r = d(t) - d(e)) ? r : 0 != (r = E(t) - E(e)) ? r : S(t) - S(e);
        }

        function O(t, e) {
          var r,
              n,
              o = Math.min(t.params.length, e.params.length);
          if (0 != (n = t.params.some(d) - e.params.some(d))) return n;

          for (r = 0; r < o; r++) {
            if (0 != (n = d(t.params[r]) - d(e.params[r]))) return n;
          }

          for (r = 0; r < o; r++) {
            if (0 !== (n = T(t.params[r], e.params[r]))) return n;
          }

          return t.params.length - e.params.length;
        }

        function A(t) {
          var e,
              r,
              n,
              o,
              i = [],
              a = [];

          switch (t.types.forEach(function (t) {
            t.conversion && (i.push(p(t.conversion.from).test), a.push(t.conversion.convert));
          }), a.length) {
            case 0:
              return function (t) {
                return t;
              };

            case 1:
              return e = i[0], n = a[0], function (t) {
                return e(t) ? n(t) : t;
              };

            case 2:
              return e = i[0], r = i[1], n = a[0], o = a[1], function (t) {
                return e(t) ? n(t) : r(t) ? o(t) : t;
              };

            default:
              return function (t) {
                for (var e = 0; e < a.length; e++) {
                  if (i[e](t)) return a[e](t);
                }

                return t;
              };
          }
        }

        function P(t, e) {
          return function t(r, n, o) {
            if (n < r.length) {
              var i,
                  a = r[n],
                  s = e ? a.types.filter(b) : a.types;

              if (a.restParam) {
                var u = s.filter(b);
                i = u.length < s.length ? [u, s] : [s];
              } else i = s.map(function (t) {
                return [t];
              });

              return U(i, function (e) {
                return t(r, n + 1, o.concat([e]));
              });
            }

            var p = o.map(function (t, e) {
              return {
                types: t,
                restParam: e === r.length - 1 && m(r)
              };
            });
            return [p];
          }(t, 0, []);
        }

        function _(t, n) {
          if (0 === Object.keys(n).length) throw new SyntaxError("No signatures provided");
          var o = [];
          Object.keys(n).map(function (t) {
            return function (t, e, r) {
              var n = [];
              return "" !== t.trim() && (n = t.split(",").map(k).map(function (t, e, n) {
                var o = l(t, r);
                if (o.restParam && e !== n.length - 1) throw new SyntaxError('Unexpected rest parameter "' + t + '": only allowed for the last parameter');
                return o;
              })), n.some(F) ? null : {
                params: n,
                fn: e
              };
            }(t, n[t], u.conversions);
          }).filter(M).forEach(function (t) {
            var e = L(o, function (e) {
              return function (t, e) {
                for (var r = Math.max(t.params.length, e.params.length), n = 0; n < r; n++) {
                  var o = x(t, n, !0),
                      i = x(e, n, !0);
                  if (!D(o, i)) return !1;
                }

                var a = t.params.length,
                    s = e.params.length,
                    u = m(t.params),
                    p = m(e.params);
                return u ? p ? a === s : s >= a : p ? a >= s : a === s;
              }(e, t);
            });
            if (e) throw new TypeError('Conflicting signatures "' + h(e.params) + '" and "' + h(t.params) + '".');
            o.push(t);
          });
          var i = U(o, function (t) {
            var e = t ? P(t.params, !1) : [];
            return e.map(function (e) {
              return {
                params: e,
                fn: t.fn
              };
            });
          }).filter(M);
          i.sort(O);

          var a = i[0] && i[0].params.length <= 2 && !m(i[0].params),
              s = i[1] && i[1].params.length <= 2 && !m(i[1].params),
              p = i[2] && i[2].params.length <= 2 && !m(i[2].params),
              c = i[3] && i[3].params.length <= 2 && !m(i[3].params),
              w = i[4] && i[4].params.length <= 2 && !m(i[4].params),
              b = i[5] && i[5].params.length <= 2 && !m(i[5].params),
              E = a && s && p && c && w && b,
              S = i.map(function (t) {
            return g(t.params);
          }),
              T = a ? y(i[0].params[0]) : e,
              _ = s ? y(i[1].params[0]) : e,
              j = p ? y(i[2].params[0]) : e,
              I = c ? y(i[3].params[0]) : e,
              R = w ? y(i[4].params[0]) : e,
              B = b ? y(i[5].params[0]) : e,
              H = a ? y(i[0].params[1]) : e,
              z = s ? y(i[1].params[1]) : e,
              $ = p ? y(i[2].params[1]) : e,
              W = c ? y(i[3].params[1]) : e,
              V = w ? y(i[4].params[1]) : e,
              J = b ? y(i[5].params[1]) : e,
              q = i.map(function (t) {
            return function (t, e) {
              var r = e;

              if (t.some(d)) {
                var n = m(t),
                    o = t.map(A);

                r = function r() {
                  for (var t = [], r = n ? arguments.length - 1 : arguments.length, i = 0; i < r; i++) {
                    t[i] = o[i](arguments[i]);
                  }

                  return n && (t[r] = arguments[r].map(o[r])), e.apply(null, t);
                };
              }

              var i = r;

              if (m(t)) {
                var a = t.length - 1;

                i = function i() {
                  return r.apply(null, C(arguments, 0, a).concat([C(arguments, a)]));
                };
              }

              return i;
            }(t.params, t.fn);
          }),
              X = a ? q[0] : r,
              G = s ? q[1] : r,
              Y = p ? q[2] : r,
              Z = c ? q[3] : r,
              K = w ? q[4] : r,
              Q = b ? q[5] : r,
              tt = a ? i[0].params.length : -1,
              et = s ? i[1].params.length : -1,
              rt = p ? i[2].params.length : -1,
              nt = c ? i[3].params.length : -1,
              ot = w ? i[4].params.length : -1,
              it = b ? i[5].params.length : -1,
              at = E ? 6 : 0,
              st = i.length,
              ut = function ut() {
            for (var e = at; e < st; e++) {
              if (S[e](arguments)) return q[e].apply(null, arguments);
            }

            throw function (t, e, r) {
              var n,
                  o,
                  i,
                  a = t || "unnamed",
                  s = r;

              for (i = 0; i < e.length; i++) {
                var u = s.filter(function (t) {
                  var r = y(v(t, i));
                  return (i < t.params.length || m(t.params)) && r(e[i]);
                });

                if (0 === u.length) {
                  if ((o = N(s, i)).length > 0) {
                    var p = f(e[i]);
                    return (n = new TypeError("Unexpected type of argument in function " + a + " (expected: " + o.join(" or ") + ", actual: " + p + ", index: " + i + ")")).data = {
                      category: "wrongType",
                      fn: a,
                      index: i,
                      actual: p,
                      expected: o
                    }, n;
                  }
                } else s = u;
              }

              var c = s.map(function (t) {
                return m(t.params) ? 1 / 0 : t.params.length;
              });
              if (e.length < Math.min.apply(null, c)) return o = N(s, i), (n = new TypeError("Too few arguments in function " + a + " (expected: " + o.join(" or ") + ", index: " + e.length + ")")).data = {
                category: "tooFewArgs",
                fn: a,
                index: e.length,
                expected: o
              }, n;
              var h = Math.max.apply(null, c);
              return e.length > h ? ((n = new TypeError("Too many arguments in function " + a + " (expected: " + h + ", actual: " + e.length + ")")).data = {
                category: "tooManyArgs",
                fn: a,
                index: e.length,
                expectedLength: h
              }, n) : ((n = new TypeError('Arguments of type "' + e.join(", ") + '" do not match any of the defined signatures of function ' + a + ".")).data = {
                category: "mismatch",
                actual: e.map(f)
              }, n);
            }(t, arguments, i);
          },
              pt = function pt(t, e) {
            return arguments.length === tt && T(t) && H(e) ? X.apply(null, arguments) : arguments.length === et && _(t) && z(e) ? G.apply(null, arguments) : arguments.length === rt && j(t) && $(e) ? Y.apply(null, arguments) : arguments.length === nt && I(t) && W(e) ? Z.apply(null, arguments) : arguments.length === ot && R(t) && V(e) ? K.apply(null, arguments) : arguments.length === it && B(t) && J(e) ? Q.apply(null, arguments) : ut.apply(null, arguments);
          };

          try {
            Object.defineProperty(pt, "name", {
              value: t
            });
          } catch (t) {}

          return pt.signatures = function (t) {
            var e = {};
            return t.forEach(function (t) {
              t.params.some(d) || P(t.params, !0).forEach(function (r) {
                e[h(r)] = t.fn;
              });
            }), e;
          }(i), pt;
        }

        function j(t) {
          return -1 === u.ignore.indexOf(t);
        }

        function k(t) {
          return t.trim();
        }

        function I(t) {
          return !!t;
        }

        function M(t) {
          return null !== t;
        }

        function F(t) {
          return 0 === t.types.length;
        }

        function R(t) {
          return t[t.length - 1];
        }

        function C(t, e, r) {
          return Array.prototype.slice.call(t, e, r);
        }

        function D(t, e) {
          for (var r = 0; r < t.length; r++) {
            if (n = e, o = t[r], -1 !== n.indexOf(o)) return !0;
          }

          var n, o;
          return !1;
        }

        function L(t, e) {
          for (var r = 0; r < t.length; r++) {
            if (e(t[r])) return t[r];
          }
        }

        function U(t, e) {
          return Array.prototype.concat.apply([], t.map(e));
        }

        function B(t) {
          for (var e = "", r = 0; r < t.length; r++) {
            var n = t[r];
            if (("object" == _typeof(n.signatures) || "string" == typeof n.signature) && "" !== n.name) if ("" === e) e = n.name;else if (e !== n.name) {
              var o = new Error("Function names do not match (expected: " + e + ", actual: " + n.name + ")");
              throw o.data = {
                actual: n.name,
                expected: e
              }, o;
            }
          }

          return e;
        }

        function H(t) {
          var e,
              r = {};

          function n(t, n) {
            if (r.hasOwnProperty(t) && n !== r[t]) throw (e = new Error('Signature "' + t + '" is defined twice')).data = {
              signature: t
            }, e;
          }

          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            if ("object" == _typeof(i.signatures)) for (var a in i.signatures) {
              i.signatures.hasOwnProperty(a) && (n(a, i.signatures[a]), r[a] = i.signatures[a]);
            } else {
              if ("string" != typeof i.signature) throw (e = new TypeError("Function is no typed-function (index: " + o + ")")).data = {
                index: o
              }, e;
              n(i.signature, i), r[i.signature] = i;
            }
          }

          return r;
        }

        return (u = _("typed", {
          "string, Object": _,
          Object: function Object(t) {
            var e = [];

            for (var r in t) {
              t.hasOwnProperty(r) && e.push(t[r]);
            }

            var n = B(e);
            return _(n, t);
          },
          "...Function": function Function(t) {
            return _(B(t), H(t));
          },
          "string, ...Function": function stringFunction(t, e) {
            return _(t, H(e));
          }
        })).create = n, u.types = o, u.conversions = s, u.ignore = a, u.convert = function (t, e) {
          var r = f(t);
          if (e === r) return t;

          for (var n = 0; n < u.conversions.length; n++) {
            var o = u.conversions[n];
            if (o.from === r && o.to === e) return o.convert(t);
          }

          throw new Error("Cannot convert from " + r + " to " + e);
        }, u.find = function (t, e) {
          if (!t.signatures) throw new TypeError("Function is no typed-function");
          var r;

          if ("string" == typeof e) {
            r = e.split(",");

            for (var n = 0; n < r.length; n++) {
              r[n] = r[n].trim();
            }
          } else {
            if (!Array.isArray(e)) throw new TypeError("String array or a comma separated string expected");
            r = e;
          }

          var o = r.join(","),
              i = t.signatures[o];
          if (i) return i;
          throw new TypeError("Signature not found (signature: " + (t.name || "unnamed") + "(" + r.join(", ") + "))");
        }, u.addType = function (t, e) {
          if (!t || "string" != typeof t.name || "function" != typeof t.test) throw new TypeError("Object with properties {name: string, test: function} expected");
          if (!1 !== e) for (var r = 0; r < u.types.length; r++) {
            if ("Object" === u.types[r].name) return void u.types.splice(r, 0, t);
          }
          u.types.push(t);
        }, u.addConversion = function (t) {
          if (!t || "string" != typeof t.from || "string" != typeof t.to || "function" != typeof t.convert) throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
          u.conversions.push(t);
        }, u;
      }();
    }) ? n.apply(e, o) : n) || (t.exports = i);
  }, function (t, e, r) {
    "use strict";

    t.exports = function (t) {
      return t && t.constructor.prototype.isMatrix || !1;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(30);

    e.mixin = function (t) {
      var e = new n();
      return t.on = e.on.bind(e), t.off = e.off.bind(e), t.once = e.once.bind(e), t.emit = e.emit.bind(e), t;
    };
  }, function (t, e) {
    function r() {}

    r.prototype = {
      on: function on(t, e, r) {
        var n = this.e || (this.e = {});
        return (n[t] || (n[t] = [])).push({
          fn: e,
          ctx: r
        }), this;
      },
      once: function once(t, e, r) {
        var n = this;

        function o() {
          n.off(t, o), e.apply(r, arguments);
        }

        return o._ = e, this.on(t, o, r);
      },
      emit: function emit(t) {
        for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, o = r.length; n < o; n++) {
          r[n].fn.apply(r[n].ctx, e);
        }

        return this;
      },
      off: function off(t, e) {
        var r = this.e || (this.e = {}),
            n = r[t],
            o = [];
        if (n && e) for (var i = 0, a = n.length; i < a; i++) {
          n[i].fn !== e && n[i].fn._ !== e && o.push(n[i]);
        }
        return o.length ? r[t] = o : delete r[t], this;
      }
    }, t.exports = r;
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(2).lazy,
        i = r(2).isFactory,
        a = r(2).traverse,
        s = r(12);
    e.math = !0, e.name = "import", e.factory = function (t, e, r, u, p) {
      function c(t, e, r) {
        if (r.wrap && "function" == typeof e && (o = function o() {
          for (var t = [], e = 0, r = arguments.length; e < r; e++) {
            var o = arguments[e];
            t[e] = o && o.valueOf();
          }

          return n.apply(p, t);
        }, (n = e).transform && (o.transform = n.transform), e = o), d(p[t]) && d(e)) return e = r.override ? u(t, e.signatures) : u(p[t], e), p[t] = e, f(t, e), void p.emit("import", t, function () {
          return e;
        });
        var n, o;
        if (void 0 === p[t] || r.override) return p[t] = e, f(t, e), void p.emit("import", t, function () {
          return e;
        });
        if (!r.silent) throw new Error('Cannot import "' + t + '": already exists');
      }

      function f(t, e) {
        e && "function" == typeof e.transform ? (p.expression.transform[t] = e.transform, y(t) && (p.expression.mathWithTransform[t] = e.transform)) : (delete p.expression.transform[t], y(t) && (p.expression.mathWithTransform[t] = e));
      }

      function h(t) {
        delete p.expression.transform[t], y(t) ? p.expression.mathWithTransform[t] = p[t] : delete p.expression.mathWithTransform[t];
      }

      function l(t, e) {
        if ("string" == typeof t.name) {
          var n = t.name,
              i = (n in p.expression.transform),
              s = t.path ? a(p, t.path) : p,
              c = s.hasOwnProperty(n) ? s[n] : void 0,
              f = function f() {
            var o = r(t);
            if (o && "function" == typeof o.transform) throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
            if (d(c) && d(o)) return e.override || (o = u(c, o)), o;
            if (void 0 === c || e.override) return o;
            if (!e.silent) throw new Error('Cannot import "' + n + '": already exists');
          };

          !1 !== t.lazy ? (o(s, n, f), i ? h(n) : ("expression.transform" === t.path || g(t)) && o(p.expression.mathWithTransform, n, f)) : (s[n] = f(), i ? h(n) : ("expression.transform" === t.path || g(t)) && (p.expression.mathWithTransform[n] = f())), p.emit("import", n, f, t.path);
        } else r(t);
      }

      function m(e) {
        return "function" == typeof e || "number" == typeof e || "string" == typeof e || "boolean" == typeof e || null === e || e && t.isUnit(e) || e && t.isComplex(e) || e && t.isBigNumber(e) || e && t.isFraction(e) || e && t.isMatrix(e) || e && Array.isArray(e);
      }

      function d(t) {
        return "function" == typeof t && "object" === n(t.signatures);
      }

      function y(t) {
        return !v.hasOwnProperty(t);
      }

      function g(t) {
        return void 0 === t.path && !v.hasOwnProperty(t.name);
      }

      var v = {
        expression: !0,
        type: !0,
        docs: !0,
        error: !0,
        json: !0,
        chain: !0
      };
      return function t(e, r) {
        var o = arguments.length;
        if (1 !== o && 2 !== o) throw new s("import", o, 1, 2);
        if (r || (r = {}), i(e)) l(e, r);else if (Array.isArray(e)) e.forEach(function (e) {
          t(e, r);
        });else if ("object" === n(e)) {
          for (var a in e) {
            if (e.hasOwnProperty(a)) {
              var u = e[a];
              m(u) ? c(a, u, r) : i(e) ? l(e, r) : t(u, r);
            }
          }
        } else if (!r.silent) throw new TypeError("Factory, Object, or Array expected");
      };
    }, e.lazy = !0;
  }, function (t, e, r) {
    "use strict";

    var n = r(2);

    function o(t, e, r) {
      if (void 0 !== t[e] && (o = r, i = t[e], -1 === o.indexOf(i))) {
        var n = function (t, e) {
          return t.map(function (t) {
            return t.toLowerCase();
          }).indexOf(e.toLowerCase());
        }(r, t[e]);

        -1 !== n ? (console.warn('Warning: Wrong casing for configuration option "' + e + '", should be "' + r[n] + '" instead of "' + t[e] + '".'), t[e] = r[n]) : console.warn('Warning: Unknown value "' + t[e] + '" for configuration option "' + e + '". Available options: ' + r.map(JSON.stringify).join(", ") + ".");
      }

      var o, i;
    }

    e.name = "config", e.math = !0, e.factory = function (t, e, r, i, a) {
      var s = ["Matrix", "Array"],
          u = ["number", "BigNumber", "Fraction"];

      function p(t) {
        if (t) {
          var r = n.map(e, n.clone);
          o(t, "matrix", s), o(t, "number", u), n.deepExtend(e, t);
          var i = n.map(e, n.clone),
              p = n.map(t, n.clone);
          return a.emit("config", i, r, p), i;
        }

        return n.map(e, n.clone);
      }

      return p.MATRIX = s, p.NUMBER = u, p;
    };
  }, function (t, e, r) {
    "use strict";

    e.name = "parse", e.factory = function (t, e, n, o) {
      var i = n(r(10));
      return o("parse", {
        "string | Array | Matrix": i,
        "string | Array | Matrix, Object": i
      });
    };
  }, function (t, e, r) {
    "use strict";

    e.path = "type", e.name = "_numeric", e.factory = function (t, e, n, o) {
      var i = n(r(11)),
          a = {
        string: !0,
        number: !0,
        BigNumber: !0,
        Fraction: !0
      },
          s = {
        number: n(r(35)),
        BigNumber: n(r(36)),
        Fraction: n(r(37))
      },
          u = function u(t, e) {
        var r = i(t);
        if (!(r in a)) throw new TypeError("Cannot convert " + t + ' of type "' + r + '"; valid input types are ' + Object.keys(a).join(", "));
        if (!(e in s)) throw new TypeError("Cannot convert " + t + ' to type "' + e + '"; valid output types are ' + Object.keys(s).join(", "));
        return e === r ? t : s[e](t);
      };

      return u.toTex = function (t, e) {
        return t.args[0].toTex();
      }, u;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(5);
    e.name = "number", e.factory = function (t, e, r, o) {
      var i = o("number", {
        "": function _() {
          return 0;
        },
        number: function number(t) {
          return t;
        },
        string: function string(t) {
          if ("NaN" === t) return NaN;
          var e = Number(t);
          if (isNaN(e)) throw new SyntaxError('String "' + t + '" is no valid number');
          return e;
        },
        BigNumber: function BigNumber(t) {
          return t.toNumber();
        },
        Fraction: function Fraction(t) {
          return t.valueOf();
        },
        Unit: function Unit(t) {
          throw new Error("Second argument with valueless unit expected");
        },
        null: function _null(t) {
          return 0;
        },
        "Unit, string | Unit": function UnitStringUnit(t, e) {
          return t.toNumber(e);
        },
        "Array | Matrix": function ArrayMatrix(t) {
          return n(t, i);
        }
      });
      return i.toTex = {
        0: "0",
        1: "\\left(${args[0]}\\right)",
        2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
      }, i;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(5);
    e.name = "bignumber", e.factory = function (t, e, r, o) {
      var i = o("bignumber", {
        "": function _() {
          return new t.BigNumber(0);
        },
        number: function number(e) {
          return new t.BigNumber(e + "");
        },
        string: function string(e) {
          return new t.BigNumber(e);
        },
        BigNumber: function BigNumber(t) {
          return t;
        },
        Fraction: function Fraction(e) {
          return new t.BigNumber(e.n).div(e.d).times(e.s);
        },
        null: function _null(e) {
          return new t.BigNumber(0);
        },
        "Array | Matrix": function ArrayMatrix(t) {
          return n(t, i);
        }
      });
      return i.toTex = {
        0: "0",
        1: "\\left(${args[0]}\\right)"
      }, i;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(5);
    e.name = "fraction", e.factory = function (t, e, r, o) {
      var i = o("fraction", {
        number: function number(e) {
          if (!isFinite(e) || isNaN(e)) throw new Error(e + " cannot be represented as a fraction");
          return new t.Fraction(e);
        },
        string: function string(e) {
          return new t.Fraction(e);
        },
        "number, number": function numberNumber(e, r) {
          return new t.Fraction(e, r);
        },
        null: function _null(e) {
          return new t.Fraction(0);
        },
        BigNumber: function BigNumber(e) {
          return new t.Fraction(e.toString());
        },
        Fraction: function Fraction(t) {
          return t;
        },
        Object: function Object(e) {
          return new t.Fraction(e);
        },
        "Array | Matrix": function ArrayMatrix(t) {
          return n(t, i);
        }
      });
      return i;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(0).getSafeProperty;
    e.name = "AccessorNode", e.path = "expression.node", e.factory = function (t, e, o, i) {
      var a = o(r(1)),
          s = o(r(14));

      function u(e, r) {
        if (!(this instanceof u)) throw new SyntaxError("Constructor must be called with the new operator");
        if (!t.isNode(e)) throw new TypeError('Node expected for parameter "object"');
        if (!t.isIndexNode(r)) throw new TypeError('IndexNode expected for parameter "index"');
        this.object = e || null, this.index = r, Object.defineProperty(this, "name", {
          get: function () {
            return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
          }.bind(this),
          set: function set() {
            throw new Error("Cannot assign a new name, name is read-only");
          }
        });
      }

      function p(e) {
        return !(t.isAccessorNode(e) || t.isArrayNode(e) || t.isConstantNode(e) || t.isFunctionNode(e) || t.isObjectNode(e) || t.isParenthesisNode(e) || t.isSymbolNode(e));
      }

      return u.prototype = new a(), u.prototype.type = "AccessorNode", u.prototype.isAccessorNode = !0, u.prototype._compile = function (t, e) {
        var r = this.object._compile(t, e),
            o = this.index._compile(t, e);

        if (this.index.isObjectProperty()) {
          var i = this.index.getObjectProperty();
          return function (t, e, o) {
            return n(r(t, e, o), i);
          };
        }

        return function (t, e, n) {
          var i = r(t, e, n),
              a = o(t, e, i);
          return s(i, a);
        };
      }, u.prototype.forEach = function (t) {
        t(this.object, "object", this), t(this.index, "index", this);
      }, u.prototype.map = function (t) {
        return new u(this._ifNode(t(this.object, "object", this)), this._ifNode(t(this.index, "index", this)));
      }, u.prototype.clone = function () {
        return new u(this.object, this.index);
      }, u.prototype._toString = function (t) {
        var e = this.object.toString(t);
        return p(this.object) && (e = "(" + e + ")"), e + this.index.toString(t);
      }, u.prototype.toHTML = function (t) {
        var e = this.object.toHTML(t);
        return p(this.object) && (e = '<span class="math-parenthesis math-round-parenthesis">(</span>' + e + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e + this.index.toHTML(t);
      }, u.prototype._toTex = function (t) {
        var e = this.object.toTex(t);
        return p(this.object) && (e = "\\left(' + object + '\\right)"), e + this.index.toTex(t);
      }, u.prototype.toJSON = function () {
        return {
          mathjs: "AccessorNode",
          object: this.object,
          index: this.index
        };
      }, u.fromJSON = function (t) {
        return new u(t.object, t.index);
      }, u;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(2);
    e.format = function (t, r) {
      if ("function" == typeof r) return r(t);
      if (!t.isFinite()) return t.isNaN() ? "NaN" : t.gt(0) ? "Infinity" : "-Infinity";
      var o,
          i = "auto";

      switch (void 0 !== r && (r.notation && (i = r.notation), "number" == typeof r ? o = r : r.precision && (o = r.precision)), i) {
        case "fixed":
          return e.toFixed(t, o);

        case "exponential":
          return e.toExponential(t, o);

        case "auto":
          if (r && r.exponential && (void 0 !== r.exponential.lower || void 0 !== r.exponential.upper)) {
            var a = n.map(r, function (t) {
              return t;
            });
            return a.exponential = void 0, void 0 !== r.exponential.lower && (a.lowerExp = Math.round(Math.log(r.exponential.lower) / Math.LN10)), void 0 !== r.exponential.upper && (a.upperExp = Math.round(Math.log(r.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(r) + " with " + JSON.stringify(a)), e.format(t, a);
          }

          var s = r && void 0 !== r.lowerExp ? r.lowerExp : -3,
              u = r && void 0 !== r.upperExp ? r.upperExp : 5;
          if (t.isZero()) return "0";
          var p = t.logarithm();
          return (p.gte(s) && p.lt(u) ? t.toSignificantDigits(o).toFixed() : e.toExponential(t, o)).replace(/((\.\d*?)(0+))($|e)/, function () {
            var t = arguments[2],
                e = arguments[4];
            return "." !== t ? t + e : e;
          });

        default:
          throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", or "fixed".');
      }
    }, e.toExponential = function (t, e) {
      return void 0 !== e ? t.toExponential(e - 1) : t.toExponential();
    }, e.toFixed = function (t, e) {
      return t.toFixed(e);
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(4).map;
    e.name = "ArrayNode", e.path = "expression.node", e.factory = function (t, e, o, i) {
      var a = o(r(1));

      function s(e) {
        if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
        if (this.items = e || [], !Array.isArray(this.items) || !this.items.every(t.isNode)) throw new TypeError("Array containing Nodes expected");

        var r = function r() {
          throw new Error("Property `ArrayNode.nodes` is deprecated, use `ArrayNode.items` instead");
        };

        Object.defineProperty(this, "nodes", {
          get: r,
          set: r
        });
      }

      return s.prototype = new a(), s.prototype.type = "ArrayNode", s.prototype.isArrayNode = !0, s.prototype._compile = function (t, e) {
        var r = n(this.items, function (r) {
          return r._compile(t, e);
        });

        if ("Array" !== t.config().matrix) {
          var o = t.matrix;
          return function (t, e, i) {
            return o(n(r, function (r) {
              return r(t, e, i);
            }));
          };
        }

        return function (t, e, o) {
          return n(r, function (r) {
            return r(t, e, o);
          });
        };
      }, s.prototype.forEach = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          t(this.items[e], "items[" + e + "]", this);
        }
      }, s.prototype.map = function (t) {
        for (var e = [], r = 0; r < this.items.length; r++) {
          e[r] = this._ifNode(t(this.items[r], "items[" + r + "]", this));
        }

        return new s(e);
      }, s.prototype.clone = function () {
        return new s(this.items.slice(0));
      }, s.prototype._toString = function (t) {
        return "[" + this.items.map(function (e) {
          return e.toString(t);
        }).join(", ") + "]";
      }, s.prototype.toJSON = function () {
        return {
          mathjs: "ArrayNode",
          items: this.items
        };
      }, s.fromJSON = function (t) {
        return new s(t.items);
      }, s.prototype.toHTML = function (t) {
        return '<span class="math-parenthesis math-square-parenthesis">[</span>' + this.items.map(function (e) {
          return e.toHTML(t);
        }).join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
      }, s.prototype._toTex = function (t) {
        var e = "\\begin{bmatrix}";
        return this.items.forEach(function (r) {
          r.items ? e += r.items.map(function (e) {
            return e.toTex(t);
          }).join("&") : e += r.toTex(t), e += "\\\\";
        }), e += "\\end{bmatrix}";
      }, s;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(0).getSafeProperty,
        o = r(0).setSafeProperty;
    e.name = "AssignmentNode", e.path = "expression.node", e.factory = function (t, e, i, a) {
      var s = i(r(1)),
          u = i(r(42)),
          p = i(r(14)),
          c = r(6);

      function f(e, r, n) {
        if (!(this instanceof f)) throw new SyntaxError("Constructor must be called with the new operator");
        if (this.object = e, this.index = n ? r : null, this.value = n || r, !t.isSymbolNode(e) && !t.isAccessorNode(e)) throw new TypeError('SymbolNode or AccessorNode expected as "object"');
        if (t.isSymbolNode(e) && "end" === e.name) throw new Error('Cannot assign to symbol "end"');
        if (this.index && !t.isIndexNode(this.index)) throw new TypeError('IndexNode expected as "index"');
        if (!t.isNode(this.value)) throw new TypeError('Node expected as "value"');
        Object.defineProperty(this, "name", {
          get: function () {
            return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
          }.bind(this),
          set: function set() {
            throw new Error("Cannot assign a new name, name is read-only");
          }
        });
      }

      function h(t, e) {
        e || (e = "keep");
        var r = c.getPrecedence(t, e),
            n = c.getPrecedence(t.value, e);
        return "all" === e || null !== n && n <= r;
      }

      return f.prototype = new s(), f.prototype.type = "AssignmentNode", f.prototype.isAssignmentNode = !0, f.prototype._compile = function (e, r) {
        var i = this.object._compile(e, r),
            a = this.index ? this.index._compile(e, r) : null,
            s = this.value._compile(e, r),
            c = this.object.name;

        if (this.index) {
          if (this.index.isObjectProperty()) {
            var f = this.index.getObjectProperty();
            return function (t, e, r) {
              var n = i(t, e, r),
                  a = s(t, e, r);
              return o(n, f, a);
            };
          }

          if (t.isSymbolNode(this.object)) return function (t, e, r) {
            var n = i(t, e, r),
                p = s(t, e, r),
                f = a(t, e, n);
            return o(t, c, u(n, f, p)), p;
          };

          var h = this.object.object._compile(e, r);

          if (this.object.index.isObjectProperty()) {
            var l = this.object.index.getObjectProperty();
            return function (t, e, r) {
              var i = h(t, e, r),
                  p = n(i, l),
                  c = a(t, e, p),
                  f = s(t, e, r);
              return o(i, l, u(p, c, f)), f;
            };
          }

          var m = this.object.index._compile(e, r);

          return function (t, e, r) {
            var n = h(t, e, r),
                o = m(t, e, n),
                i = p(n, o),
                c = a(t, e, i),
                f = s(t, e, r);
            return u(n, o, u(i, c, f)), f;
          };
        }

        if (!t.isSymbolNode(this.object)) throw new TypeError("SymbolNode expected as object");
        return function (t, e, r) {
          return o(t, c, s(t, e, r));
        };
      }, f.prototype.forEach = function (t) {
        t(this.object, "object", this), this.index && t(this.index, "index", this), t(this.value, "value", this);
      }, f.prototype.map = function (t) {
        return new f(this._ifNode(t(this.object, "object", this)), this.index ? this._ifNode(t(this.index, "index", this)) : null, this._ifNode(t(this.value, "value", this)));
      }, f.prototype.clone = function () {
        return new f(this.object, this.index, this.value);
      }, f.prototype._toString = function (t) {
        var e = this.object.toString(t),
            r = this.index ? this.index.toString(t) : "",
            n = this.value.toString(t);
        return h(this, t && t.parenthesis) && (n = "(" + n + ")"), e + r + " = " + n;
      }, f.prototype.toJSON = function () {
        return {
          mathjs: "AssignmentNode",
          object: this.object,
          index: this.index,
          value: this.value
        };
      }, f.fromJSON = function (t) {
        return new f(t.object, t.index, t.value);
      }, f.prototype.toHTML = function (t) {
        var e = this.object.toHTML(t),
            r = this.index ? this.index.toHTML(t) : "",
            n = this.value.toHTML(t);
        return h(this, t && t.parenthesis) && (n = '<span class="math-paranthesis math-round-parenthesis">(</span>' + n + '<span class="math-paranthesis math-round-parenthesis">)</span>'), e + r + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + n;
      }, f.prototype._toTex = function (t) {
        var e = this.object.toTex(t),
            r = this.index ? this.index.toTex(t) : "",
            n = this.value.toTex(t);
        return h(this, t && t.parenthesis) && (n = "\\left(".concat(n, "\\right)")), e + r + ":=" + n;
      }, f;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(15).transform,
        i = r(0).setSafeProperty;

    e.factory = function (t, e, a, s) {
      var u = a(r(17)),
          p = a(r(19));
      return function (t, e, r) {
        try {
          if (Array.isArray(t)) return p(t).subset(e, r).valueOf();
          if (t && "function" == typeof t.subset) return t.subset(e, r);
          if ("string" == typeof t) return u(t, e, r);

          if ("object" === n(t)) {
            if (!e.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
            return i(t, e.getObjectProperty(), r), t;
          }

          throw new TypeError("Cannot apply index: unsupported type of object");
        } catch (t) {
          throw o(t);
        }
      };
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(4).forEach,
        o = r(4).map;
    e.name = "BlockNode", e.path = "expression.node", e.factory = function (t, e, i, a) {
      var s = i(r(1)),
          u = i(r(44));

      function p(e) {
        if (!(this instanceof p)) throw new SyntaxError("Constructor must be called with the new operator");
        if (!Array.isArray(e)) throw new Error("Array expected");
        this.blocks = e.map(function (e) {
          var r = e && e.node,
              n = !e || void 0 === e.visible || e.visible;
          if (!t.isNode(r)) throw new TypeError('Property "node" must be a Node');
          if ("boolean" != typeof n) throw new TypeError('Property "visible" must be a boolean');
          return {
            node: r,
            visible: n
          };
        });
      }

      return p.prototype = new s(), p.prototype.type = "BlockNode", p.prototype.isBlockNode = !0, p.prototype._compile = function (t, e) {
        var r = o(this.blocks, function (r) {
          return {
            eval: r.node._compile(t, e),
            visible: r.visible
          };
        });
        return function (t, e, o) {
          var i = [];
          return n(r, function (r) {
            var n = r.eval(t, e, o);
            r.visible && i.push(n);
          }), new u(i);
        };
      }, p.prototype.forEach = function (t) {
        for (var e = 0; e < this.blocks.length; e++) {
          t(this.blocks[e].node, "blocks[" + e + "].node", this);
        }
      }, p.prototype.map = function (t) {
        for (var e = [], r = 0; r < this.blocks.length; r++) {
          var n = this.blocks[r],
              o = this._ifNode(t(n.node, "blocks[" + r + "].node", this));

          e[r] = {
            node: o,
            visible: n.visible
          };
        }

        return new p(e);
      }, p.prototype.clone = function () {
        return new p(this.blocks.map(function (t) {
          return {
            node: t.node,
            visible: t.visible
          };
        }));
      }, p.prototype._toString = function (t) {
        return this.blocks.map(function (e) {
          return e.node.toString(t) + (e.visible ? "" : ";");
        }).join("\n");
      }, p.prototype.toJSON = function () {
        return {
          mathjs: "BlockNode",
          blocks: this.blocks
        };
      }, p.fromJSON = function (t) {
        return new p(t.blocks);
      }, p.prototype.toHTML = function (t) {
        return this.blocks.map(function (e) {
          return e.node.toHTML(t) + (e.visible ? "" : '<span class="math-separator">;</span>');
        }).join('<span class="math-separator"><br /></span>');
      }, p.prototype._toTex = function (t) {
        return this.blocks.map(function (e) {
          return e.node.toTex(t) + (e.visible ? "" : ";");
        }).join("\\;\\;\n");
      }, p;
    };
  }, function (t, e, r) {
    "use strict";

    e.name = "ResultSet", e.path = "type", e.factory = function (t, e, r, n) {
      function o(t) {
        if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
        this.entries = t || [];
      }

      return o.prototype.type = "ResultSet", o.prototype.isResultSet = !0, o.prototype.valueOf = function () {
        return this.entries;
      }, o.prototype.toString = function () {
        return "[" + this.entries.join(", ") + "]";
      }, o.prototype.toJSON = function () {
        return {
          mathjs: "ResultSet",
          entries: this.entries
        };
      }, o.fromJSON = function (t) {
        return new o(t.entries);
      }, o;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(6);
    e.name = "ConditionalNode", e.path = "expression.node", e.factory = function (t, e, o, i) {
      var a = o(r(1)),
          s = o(r(11));

      function u(e, r, n) {
        if (!(this instanceof u)) throw new SyntaxError("Constructor must be called with the new operator");
        if (!t.isNode(e)) throw new TypeError("Parameter condition must be a Node");
        if (!t.isNode(r)) throw new TypeError("Parameter trueExpr must be a Node");
        if (!t.isNode(n)) throw new TypeError("Parameter falseExpr must be a Node");
        this.condition = e, this.trueExpr = r, this.falseExpr = n;
      }

      return u.prototype = new a(), u.prototype.type = "ConditionalNode", u.prototype.isConditionalNode = !0, u.prototype._compile = function (e, r) {
        var n = this.condition._compile(e, r),
            o = this.trueExpr._compile(e, r),
            i = this.falseExpr._compile(e, r);

        return function (e, r, a) {
          return function (e) {
            if ("number" == typeof e || "boolean" == typeof e || "string" == typeof e) return !!e;

            if (e) {
              if (t.isBigNumber(e)) return !e.isZero();
              if (t.isComplex(e)) return !(!e.re && !e.im);
              if (t.isUnit(e)) return !!e.value;
            }

            if (null == e) return !1;
            throw new TypeError('Unsupported type of condition "' + s(e) + '"');
          }(n(e, r, a)) ? o(e, r, a) : i(e, r, a);
        };
      }, u.prototype.forEach = function (t) {
        t(this.condition, "condition", this), t(this.trueExpr, "trueExpr", this), t(this.falseExpr, "falseExpr", this);
      }, u.prototype.map = function (t) {
        return new u(this._ifNode(t(this.condition, "condition", this)), this._ifNode(t(this.trueExpr, "trueExpr", this)), this._ifNode(t(this.falseExpr, "falseExpr", this)));
      }, u.prototype.clone = function () {
        return new u(this.condition, this.trueExpr, this.falseExpr);
      }, u.prototype._toString = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = n.getPrecedence(this, e),
            o = this.condition.toString(t),
            i = n.getPrecedence(this.condition, e);
        ("all" === e || "OperatorNode" === this.condition.type || null !== i && i <= r) && (o = "(" + o + ")");
        var a = this.trueExpr.toString(t),
            s = n.getPrecedence(this.trueExpr, e);
        ("all" === e || "OperatorNode" === this.trueExpr.type || null !== s && s <= r) && (a = "(" + a + ")");
        var u = this.falseExpr.toString(t),
            p = n.getPrecedence(this.falseExpr, e);
        return ("all" === e || "OperatorNode" === this.falseExpr.type || null !== p && p <= r) && (u = "(" + u + ")"), o + " ? " + a + " : " + u;
      }, u.prototype.toJSON = function () {
        return {
          mathjs: "ConditionalNode",
          condition: this.condition,
          trueExpr: this.trueExpr,
          falseExpr: this.falseExpr
        };
      }, u.fromJSON = function (t) {
        return new u(t.condition, t.trueExpr, t.falseExpr);
      }, u.prototype.toHTML = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = n.getPrecedence(this, e),
            o = this.condition.toHTML(t),
            i = n.getPrecedence(this.condition, e);
        ("all" === e || "OperatorNode" === this.condition.type || null !== i && i <= r) && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>');
        var a = this.trueExpr.toHTML(t),
            s = n.getPrecedence(this.trueExpr, e);
        ("all" === e || "OperatorNode" === this.trueExpr.type || null !== s && s <= r) && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>');
        var u = this.falseExpr.toHTML(t),
            p = n.getPrecedence(this.falseExpr, e);
        return ("all" === e || "OperatorNode" === this.falseExpr.type || null !== p && p <= r) && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), o + '<span class="math-operator math-conditional-operator">?</span>' + a + '<span class="math-operator math-conditional-operator">:</span>' + u;
      }, u.prototype._toTex = function (t) {
        return "\\begin{cases} {" + this.trueExpr.toTex(t) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(t) + "}\\\\{" + this.falseExpr.toTex(t) + "}, &\\quad{\\text{otherwise}}\\end{cases}";
      }, u;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(3).format,
        o = r(7).escape;
    e.name = "ConstantNode", e.path = "expression.node", e.factory = function (t, e, i, a) {
      var s = i(r(1)),
          u = i(r(11));

      function p(t) {
        if (!(this instanceof p)) throw new SyntaxError("Constructor must be called with the new operator");
        if (2 === arguments.length) throw new SyntaxError("new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.");
        this.value = t;
      }

      return p.prototype = new s(), p.prototype.type = "ConstantNode", p.prototype.isConstantNode = !0, p.prototype._compile = function (t, e) {
        var r = this.value;
        return function () {
          return r;
        };
      }, p.prototype.forEach = function (t) {}, p.prototype.map = function (t) {
        return this.clone();
      }, p.prototype.clone = function () {
        return new p(this.value);
      }, p.prototype._toString = function (t) {
        return n(this.value, t);
      }, p.prototype.toHTML = function (t) {
        var e = this._toString(t);

        switch (u(this.value)) {
          case "number":
          case "BigNumber":
          case "Fraction":
            return '<span class="math-number">' + e + "</span>";

          case "string":
            return '<span class="math-string">' + e + "</span>";

          case "boolean":
            return '<span class="math-boolean">' + e + "</span>";

          case "null":
            return '<span class="math-null-symbol">' + e + "</span>";

          case "undefined":
            return '<span class="math-undefined">' + e + "</span>";

          default:
            return '<span class="math-symbol">' + e + "</span>";
        }
      }, p.prototype.toJSON = function () {
        return {
          mathjs: "ConstantNode",
          value: this.value
        };
      }, p.fromJSON = function (t) {
        return new p(t.value);
      }, p.prototype._toTex = function (t) {
        var e = this._toString(t);

        switch (u(this.value)) {
          case "string":
            return "\\mathtt{" + o(e) + "}";

          case "number":
          case "BigNumber":
            var r = e.toLowerCase().indexOf("e");
            return -1 !== r ? e.substring(0, r) + "\\cdot10^{" + e.substring(r + 1) + "}" : e;

          case "Fraction":
            return this.value.toLatex();

          default:
            return e;
        }
      }, p;
    };
  }, function (t, e, r) {
    "use strict";

    var n = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
      }

      return t;
    },
        o = {
      "{": "\\{",
      "}": "\\}",
      "\\": "\\textbackslash{}",
      "#": "\\#",
      $: "\\$",
      "%": "\\%",
      "&": "\\&",
      "^": "\\textasciicircum{}",
      _: "\\_",
      "~": "\\textasciitilde{}"
    },
        i = {
      "???": "\\--",
      "???": "\\---",
      " ": "~",
      "\t": "\\qquad{}",
      "\r\n": "\\newline{}",
      "\n": "\\newline{}"
    },
        a = function a(t, e) {
      return n({}, t, e);
    };

    t.exports = function (t) {
      for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = e.preserveFormatting, s = void 0 !== r && r, u = e.escapeMapFn, p = void 0 === u ? a : u, c = String(t), f = "", h = p(n({}, o), s ? n({}, i) : {}), l = Object.keys(h), m = function m() {
        var t = !1;
        l.forEach(function (e, r) {
          t || c.length >= e.length && c.slice(0, e.length) === e && (f += h[l[r]], c = c.slice(e.length, c.length), t = !0);
        }), t || (f += c.slice(0, 1), c = c.slice(1, c.length));
      }; c;) {
        m();
      }

      return f;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(13),
        o = r(3).escape,
        i = r(4).forEach,
        a = r(4).join,
        s = r(7),
        u = r(6),
        p = r(0).setSafeProperty;
    e.name = "FunctionAssignmentNode", e.path = "expression.node", e.factory = function (t, e, c, f) {
      var h = c(r(1));

      function l(e, r, o) {
        if (!(this instanceof l)) throw new SyntaxError("Constructor must be called with the new operator");
        if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
        if (!Array.isArray(r)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
        if (!t.isNode(o)) throw new TypeError('Node expected for parameter "expr"');
        if (e in n) throw new Error('Illegal function name, "' + e + '" is a reserved keyword');
        this.name = e, this.params = r.map(function (t) {
          return t && t.name || t;
        }), this.types = r.map(function (t) {
          return t && t.type || "any";
        }), this.expr = o;
      }

      function m(t, e) {
        var r = u.getPrecedence(t, e),
            n = u.getPrecedence(t.expr, e);
        return "all" === e || null !== n && n <= r;
      }

      return l.prototype = new h(), l.prototype.type = "FunctionAssignmentNode", l.prototype.isFunctionAssignmentNode = !0, l.prototype._compile = function (t, e) {
        var r = Object.create(e);
        i(this.params, function (t) {
          r[t] = !0;
        });

        var n = this.expr._compile(t, r),
            o = this.name,
            s = this.params,
            u = a(this.types, ","),
            c = o + "(" + a(this.params, ", ") + ")";

        return function (t, e, r) {
          var i = {};

          i[u] = function () {
            for (var o = Object.create(e), i = 0; i < s.length; i++) {
              o[s[i]] = arguments[i];
            }

            return n(t, o, r);
          };

          var a = f(o, i);
          return a.syntax = c, p(t, o, a), a;
        };
      }, l.prototype.forEach = function (t) {
        t(this.expr, "expr", this);
      }, l.prototype.map = function (t) {
        var e = this._ifNode(t(this.expr, "expr", this));

        return new l(this.name, this.params.slice(0), e);
      }, l.prototype.clone = function () {
        return new l(this.name, this.params.slice(0), this.expr);
      }, l.prototype._toString = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = this.expr.toString(t);
        return m(this, e) && (r = "(" + r + ")"), this.name + "(" + this.params.join(", ") + ") = " + r;
      }, l.prototype.toJSON = function () {
        var t = this.types;
        return {
          mathjs: "FunctionAssignmentNode",
          name: this.name,
          params: this.params.map(function (e, r) {
            return {
              name: e,
              type: t[r]
            };
          }),
          expr: this.expr
        };
      }, l.fromJSON = function (t) {
        return new l(t.name, t.params, t.expr);
      }, l.prototype.toHTML = function (t) {
        for (var e = t && t.parenthesis ? t.parenthesis : "keep", r = [], n = 0; n < this.params.length; n++) {
          r.push('<span class="math-symbol math-parameter">' + o(this.params[n]) + "</span>");
        }

        var i = this.expr.toHTML(t);
        return m(this, e) && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + o(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + r.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + i;
      }, l.prototype._toTex = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = this.expr.toTex(t);
        return m(this, e) && (r = "\\left(".concat(r, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(s.toSymbol).join(",") + "\\right):=" + r;
      }, l;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(4).map,
        o = r(3).escape;
    e.name = "IndexNode", e.path = "expression.node", e.factory = function (t, e, i, a) {
      var s = i(r(1)),
          u = i(r(50)),
          p = Array.isArray;

      function c(e, r) {
        if (!(this instanceof c)) throw new SyntaxError("Constructor must be called with the new operator");
        if (this.dimensions = e, this.dotNotation = r || !1, !p(e) || !e.every(t.isNode)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
        if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties");

        var n = function n() {
          throw new Error("Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead");
        };

        Object.defineProperty(this, "object", {
          get: n,
          set: n
        });
      }

      function f(e, r, n) {
        return new u(t.isBigNumber(e) ? e.toNumber() : e, t.isBigNumber(r) ? r.toNumber() : r, t.isBigNumber(n) ? n.toNumber() : n);
      }

      return c.prototype = new s(), c.prototype.type = "IndexNode", c.prototype.isIndexNode = !0, c.prototype._compile = function (e, r) {
        var o = n(this.dimensions, function (n, o) {
          if (t.isRangeNode(n)) {
            if (n.needsEnd()) {
              var i = Object.create(r);
              i.end = !0;

              var a = n.start._compile(e, i),
                  s = n.end._compile(e, i),
                  u = n.step ? n.step._compile(e, i) : function () {
                return 1;
              };

              return function (t, r, n) {
                var i = e.size(n).valueOf(),
                    p = Object.create(r);
                return p.end = i[o], f(a(t, p, n), s(t, p, n), u(t, p, n));
              };
            }

            var p = n.start._compile(e, r),
                c = n.end._compile(e, r),
                h = n.step ? n.step._compile(e, r) : function () {
              return 1;
            };

            return function (t, e, r) {
              return f(p(t, e, r), c(t, e, r), h(t, e, r));
            };
          }

          if (t.isSymbolNode(n) && "end" === n.name) {
            var l = Object.create(r);
            l.end = !0;

            var m = n._compile(e, l);

            return function (t, r, n) {
              var i = e.size(n).valueOf(),
                  a = Object.create(r);
              return a.end = i[o], m(t, a, n);
            };
          }

          var d = n._compile(e, r);

          return function (t, e, r) {
            return d(t, e, r);
          };
        });
        return function (t, r, i) {
          var a = n(o, function (e) {
            return e(t, r, i);
          });
          return e.index.apply(e, a);
        };
      }, c.prototype.forEach = function (t) {
        for (var e = 0; e < this.dimensions.length; e++) {
          t(this.dimensions[e], "dimensions[" + e + "]", this);
        }
      }, c.prototype.map = function (t) {
        for (var e = [], r = 0; r < this.dimensions.length; r++) {
          e[r] = this._ifNode(t(this.dimensions[r], "dimensions[" + r + "]", this));
        }

        return new c(e);
      }, c.prototype.clone = function () {
        return new c(this.dimensions.slice(0));
      }, c.prototype.isObjectProperty = function () {
        return 1 === this.dimensions.length && t.isConstantNode(this.dimensions[0]) && "string" == typeof this.dimensions[0].value;
      }, c.prototype.getObjectProperty = function () {
        return this.isObjectProperty() ? this.dimensions[0].value : null;
      }, c.prototype._toString = function (t) {
        return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]";
      }, c.prototype.toJSON = function () {
        return {
          mathjs: "IndexNode",
          dimensions: this.dimensions,
          dotNotation: this.dotNotation
        };
      }, c.fromJSON = function (t) {
        return new c(t.dimensions, t.dotNotation);
      }, c.prototype.toHTML = function (t) {
        for (var e = [], r = 0; r < this.dimensions.length; r++) {
          e[r] = this.dimensions[r].toHTML();
        }

        return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + o(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + e.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
      }, c.prototype._toTex = function (t) {
        var e = this.dimensions.map(function (e) {
          return e.toTex(t);
        });
        return this.dotNotation ? "." + this.getObjectProperty() : "_{" + e.join(",") + "}";
      }, c;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(8);
    e.name = "Range", e.path = "type", e.factory = function (t, e, r, o) {
      function i(e, r, n) {
        if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
        var o = null != e,
            a = null != r,
            s = null != n;
        if (o) if (t.isBigNumber(e)) e = e.toNumber();else if ("number" != typeof e) throw new TypeError("Parameter start must be a number");
        if (a) if (t.isBigNumber(r)) r = r.toNumber();else if ("number" != typeof r) throw new TypeError("Parameter end must be a number");
        if (s) if (t.isBigNumber(n)) n = n.toNumber();else if ("number" != typeof n) throw new TypeError("Parameter step must be a number");
        this.start = o ? parseFloat(e) : 0, this.end = a ? parseFloat(r) : 0, this.step = s ? parseFloat(n) : 1;
      }

      return i.prototype.type = "Range", i.prototype.isRange = !0, i.parse = function (t) {
        if ("string" != typeof t) return null;
        var e = t.split(":").map(function (t) {
          return parseFloat(t);
        });
        if (e.some(function (t) {
          return isNaN(t);
        })) return null;

        switch (e.length) {
          case 2:
            return new i(e[0], e[1]);

          case 3:
            return new i(e[0], e[2], e[1]);

          default:
            return null;
        }
      }, i.prototype.clone = function () {
        return new i(this.start, this.end, this.step);
      }, i.prototype.size = function () {
        var t = 0,
            e = this.start,
            r = this.step,
            o = this.end - e;
        return n.sign(r) === n.sign(o) ? t = Math.ceil(o / r) : 0 === o && (t = 0), isNaN(t) && (t = 0), [t];
      }, i.prototype.min = function () {
        var t = this.size()[0];
        return t > 0 ? this.step > 0 ? this.start : this.start + (t - 1) * this.step : void 0;
      }, i.prototype.max = function () {
        var t = this.size()[0];
        return t > 0 ? this.step > 0 ? this.start + (t - 1) * this.step : this.start : void 0;
      }, i.prototype.forEach = function (t) {
        var e = this.start,
            r = this.step,
            n = this.end,
            o = 0;
        if (r > 0) for (; e < n;) {
          t(e, [o], this), e += r, o++;
        } else if (r < 0) for (; e > n;) {
          t(e, [o], this), e += r, o++;
        }
      }, i.prototype.map = function (t) {
        var e = [];
        return this.forEach(function (r, n, o) {
          e[n[0]] = t(r, n, o);
        }), e;
      }, i.prototype.toArray = function () {
        var t = [];
        return this.forEach(function (e, r) {
          t[r[0]] = e;
        }), t;
      }, i.prototype.valueOf = function () {
        return this.toArray();
      }, i.prototype.format = function (t) {
        var e = n.format(this.start, t);
        return 1 !== this.step && (e += ":" + n.format(this.step, t)), e += ":" + n.format(this.end, t);
      }, i.prototype.toString = function () {
        return this.format();
      }, i.prototype.toJSON = function () {
        return {
          mathjs: "Range",
          start: this.start,
          end: this.end,
          step: this.step
        };
      }, i.fromJSON = function (t) {
        return new i(t.start, t.end, t.step);
      }, i;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var o = r(3).stringify,
        i = r(3).escape,
        a = r(0).isSafeProperty,
        s = r(2).hasOwnProperty;
    e.name = "ObjectNode", e.path = "expression.node", e.factory = function (t, e, u, p) {
      var c = u(r(1));

      function f(e) {
        if (!(this instanceof f)) throw new SyntaxError("Constructor must be called with the new operator");
        if (this.properties = e || {}, e && ("object" !== n(e) || !Object.keys(e).every(function (r) {
          return t.isNode(e[r]);
        }))) throw new TypeError("Object containing Nodes expected");
      }

      return f.prototype = new c(), f.prototype.type = "ObjectNode", f.prototype.isObjectNode = !0, f.prototype._compile = function (t, e) {
        var r = {};

        for (var n in this.properties) {
          if (s(this.properties, n)) {
            var i = o(n),
                u = JSON.parse(i);
            if (!a(this.properties, u)) throw new Error('No access to property "' + u + '"');
            r[u] = this.properties[n]._compile(t, e);
          }
        }

        return function (t, e, n) {
          var o = {};

          for (var i in r) {
            s(r, i) && (o[i] = r[i](t, e, n));
          }

          return o;
        };
      }, f.prototype.forEach = function (t) {
        for (var e in this.properties) {
          this.properties.hasOwnProperty(e) && t(this.properties[e], "properties[" + o(e) + "]", this);
        }
      }, f.prototype.map = function (t) {
        var e = {};

        for (var r in this.properties) {
          this.properties.hasOwnProperty(r) && (e[r] = this._ifNode(t(this.properties[r], "properties[" + o(r) + "]", this)));
        }

        return new f(e);
      }, f.prototype.clone = function () {
        var t = {};

        for (var e in this.properties) {
          this.properties.hasOwnProperty(e) && (t[e] = this.properties[e]);
        }

        return new f(t);
      }, f.prototype._toString = function (t) {
        var e = [];

        for (var r in this.properties) {
          this.properties.hasOwnProperty(r) && e.push(o(r) + ": " + this.properties[r].toString(t));
        }

        return "{" + e.join(", ") + "}";
      }, f.prototype.toJSON = function () {
        return {
          mathjs: "ObjectNode",
          properties: this.properties
        };
      }, f.fromJSON = function (t) {
        return new f(t.properties);
      }, f.prototype.toHTML = function (t) {
        var e = [];

        for (var r in this.properties) {
          this.properties.hasOwnProperty(r) && e.push('<span class="math-symbol math-property">' + i(r) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[r].toHTML(t));
        }

        return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + e.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
      }, f.prototype._toTex = function (t) {
        var e = [];

        for (var r in this.properties) {
          this.properties.hasOwnProperty(r) && e.push("\\mathbf{" + r + ":} & " + this.properties[r].toTex(t) + "\\\\");
        }

        return "\\left\\{\\begin{array}{ll}".concat(e.join("\n"), "\\end{array}\\right\\}");
      }, f;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(7),
        o = r(4).map,
        i = r(3).escape,
        a = r(0).isSafeMethod,
        s = r(0).getSafeProperty,
        u = r(6);
    e.name = "OperatorNode", e.path = "expression.node", e.factory = function (t, e, p, c) {
      var f = p(r(1));

      function h(e, r, n, o) {
        if (!(this instanceof h)) throw new SyntaxError("Constructor must be called with the new operator");
        if ("string" != typeof e) throw new TypeError('string expected for parameter "op"');
        if ("string" != typeof r) throw new TypeError('string expected for parameter "fn"');
        if (!Array.isArray(n) || !n.every(t.isNode)) throw new TypeError('Array containing Nodes expected for parameter "args"');
        this.implicit = !0 === o, this.op = e, this.fn = r, this.args = n || [];
      }

      function l(t, e, r, n, o) {
        var i,
            a = u.getPrecedence(t, e),
            s = u.getAssociativity(t, e);
        if ("all" === e || n.length > 2 && "OperatorNode:add" !== t.getIdentifier() && "OperatorNode:multiply" !== t.getIdentifier()) return n.map(function (t) {
          switch (t.getContent().type) {
            case "ArrayNode":
            case "ConstantNode":
            case "SymbolNode":
            case "ParenthesisNode":
              return !1;

            default:
              return !0;
          }
        });

        switch (n.length) {
          case 0:
            i = [];
            break;

          case 1:
            var p = u.getPrecedence(n[0], e);

            if (o && null !== p) {
              var c, f;

              if ("keep" === e ? (c = n[0].getIdentifier(), f = t.getIdentifier()) : (c = n[0].getContent().getIdentifier(), f = t.getContent().getIdentifier()), !1 === u.properties[a][f].latexLeftParens) {
                i = [!1];
                break;
              }

              if (!1 === u.properties[p][c].latexParens) {
                i = [!1];
                break;
              }
            }

            if (null === p) {
              i = [!1];
              break;
            }

            if (p <= a) {
              i = [!0];
              break;
            }

            i = [!1];
            break;

          case 2:
            var h,
                l,
                m = u.getPrecedence(n[0], e),
                d = u.isAssociativeWith(t, n[0], e);
            h = null !== m && (m === a && "right" === s && !d || m < a);
            var y,
                g,
                v,
                x = u.getPrecedence(n[1], e),
                w = u.isAssociativeWith(t, n[1], e);
            l = null !== x && (x === a && "left" === s && !w || x < a), o && ("keep" === e ? (y = t.getIdentifier(), g = t.args[0].getIdentifier(), v = t.args[1].getIdentifier()) : (y = t.getContent().getIdentifier(), g = t.args[0].getContent().getIdentifier(), v = t.args[1].getContent().getIdentifier()), null !== m && (!1 === u.properties[a][y].latexLeftParens && (h = !1), !1 === u.properties[m][g].latexParens && (h = !1)), null !== x && (!1 === u.properties[a][y].latexRightParens && (l = !1), !1 === u.properties[x][v].latexParens && (l = !1))), i = [h, l];
            break;

          default:
            "OperatorNode:add" !== t.getIdentifier() && "OperatorNode:multiply" !== t.getIdentifier() || (i = n.map(function (r) {
              var n = u.getPrecedence(r, e),
                  o = u.isAssociativeWith(t, r, e),
                  i = u.getAssociativity(r, e);
              return null !== n && (a === n && s === i && !o || n < a);
            }));
        }

        return n.length >= 2 && "OperatorNode:multiply" === t.getIdentifier() && t.implicit && "auto" === e && "hide" === r && (i = n.map(function (t, e) {
          var r = "ParenthesisNode" === t.getIdentifier();
          return !(!i[e] && !r);
        })), i;
      }

      return h.prototype = new f(), h.prototype.type = "OperatorNode", h.prototype.isOperatorNode = !0, h.prototype._compile = function (t, e) {
        if ("string" != typeof this.fn || !a(t, this.fn)) throw t[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
        var r = s(t, this.fn),
            n = o(this.args, function (r) {
          return r._compile(t, e);
        });

        if (1 === n.length) {
          var i = n[0];
          return function (t, e, n) {
            return r(i(t, e, n));
          };
        }

        if (2 === n.length) {
          var u = n[0],
              p = n[1];
          return function (t, e, n) {
            return r(u(t, e, n), p(t, e, n));
          };
        }

        return function (t, e, i) {
          return r.apply(null, o(n, function (r) {
            return r(t, e, i);
          }));
        };
      }, h.prototype.forEach = function (t) {
        for (var e = 0; e < this.args.length; e++) {
          t(this.args[e], "args[" + e + "]", this);
        }
      }, h.prototype.map = function (t) {
        for (var e = [], r = 0; r < this.args.length; r++) {
          e[r] = this._ifNode(t(this.args[r], "args[" + r + "]", this));
        }

        return new h(this.op, this.fn, e, this.implicit);
      }, h.prototype.clone = function () {
        return new h(this.op, this.fn, this.args.slice(0), this.implicit);
      }, h.prototype.isUnary = function () {
        return 1 === this.args.length;
      }, h.prototype.isBinary = function () {
        return 2 === this.args.length;
      }, h.prototype._toString = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = t && t.implicit ? t.implicit : "hide",
            n = this.args,
            o = l(this, e, r, n, !1);

        if (1 === n.length) {
          var i = u.getAssociativity(this, e),
              a = n[0].toString(t);
          return o[0] && (a = "(" + a + ")"), "right" === i ? this.op + a : a + this.op;
        }

        if (2 === n.length) {
          var s = n[0].toString(t),
              p = n[1].toString(t);
          return o[0] && (s = "(" + s + ")"), o[1] && (p = "(" + p + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === r ? s + " " + p : s + " " + this.op + " " + p;
        }

        if (n.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
          var c = n.map(function (e, r) {
            return e = e.toString(t), o[r] && (e = "(" + e + ")"), e;
          });
          return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === r ? c.join(" ") : c.join(" " + this.op + " ");
        }

        return this.fn + "(" + this.args.join(", ") + ")";
      }, h.prototype.toJSON = function () {
        return {
          mathjs: "OperatorNode",
          op: this.op,
          fn: this.fn,
          args: this.args,
          implicit: this.implicit
        };
      }, h.fromJSON = function (t) {
        return new h(t.op, t.fn, t.args, t.implicit);
      }, h.prototype.toHTML = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = t && t.implicit ? t.implicit : "hide",
            n = this.args,
            o = l(this, e, r, n, !1);

        if (1 === n.length) {
          var a = u.getAssociativity(this, e),
              s = n[0].toHTML(t);
          return o[0] && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), "right" === a ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + i(this.op) + "</span>" + s : '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + i(this.op) + "</span>" + s;
        }

        if (2 === n.length) {
          var p = n[0].toHTML(t),
              c = n[1].toHTML(t);
          return o[0] && (p = '<span class="math-parenthesis math-round-parenthesis">(</span>' + p + '<span class="math-parenthesis math-round-parenthesis">)</span>'), o[1] && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === r ? p + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + c : p + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + i(this.op) + "</span>" + c;
        }

        var f = n.map(function (e, r) {
          return e = e.toHTML(t), o[r] && (e = '<span class="math-parenthesis math-round-parenthesis">(</span>' + e + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e;
        });
        return n.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === r ? f.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : f.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + i(this.op) + "</span>") : '<span class="math-function">' + i(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + f.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      }, h.prototype._toTex = function (t) {
        var e = t && t.parenthesis ? t.parenthesis : "keep",
            r = t && t.implicit ? t.implicit : "hide",
            o = this.args,
            i = l(this, e, r, o, !0),
            a = n.operators[this.fn];

        if (a = void 0 === a ? this.op : a, 1 === o.length) {
          var s = u.getAssociativity(this, e),
              p = o[0].toTex(t);
          return i[0] && (p = "\\left(".concat(p, "\\right)")), "right" === s ? a + p : p + a;
        }

        if (2 === o.length) {
          var c = o[0],
              f = c.toTex(t);
          i[0] && (f = "\\left(".concat(f, "\\right)"));
          var h,
              m = o[1].toTex(t);

          switch (i[1] && (m = "\\left(".concat(m, "\\right)")), h = "keep" === e ? c.getIdentifier() : c.getContent().getIdentifier(), this.getIdentifier()) {
            case "OperatorNode:divide":
              return a + "{" + f + "}{" + m + "}";

            case "OperatorNode:pow":
              switch (f = "{" + f + "}", m = "{" + m + "}", h) {
                case "ConditionalNode":
                case "OperatorNode:divide":
                  f = "\\left(".concat(f, "\\right)");
              }

              break;

            case "OperatorNode:multiply":
              if (this.implicit && "hide" === r) return f + "~" + m;
          }

          return f + a + m;
        }

        if (o.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
          var d = o.map(function (e, r) {
            return e = e.toTex(t), i[r] && (e = "\\left(".concat(e, "\\right)")), e;
          });
          return "OperatorNode:multiply" === this.getIdentifier() && this.implicit ? d.join("~") : d.join(a);
        }

        return "\\mathrm{" + this.fn + "}\\left(" + o.map(function (e) {
          return e.toTex(t);
        }).join(",") + "\\right)";
      }, h.prototype.getIdentifier = function () {
        return this.type + ":" + this.fn;
      }, h;
    };
  }, function (t, e, r) {
    "use strict";

    e.name = "ParenthesisNode", e.path = "expression.node", e.factory = function (t, e, n, o) {
      var i = n(r(1));

      function a(e) {
        if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
        if (!t.isNode(e)) throw new TypeError('Node expected for parameter "content"');
        this.content = e;
      }

      return a.prototype = new i(), a.prototype.type = "ParenthesisNode", a.prototype.isParenthesisNode = !0, a.prototype._compile = function (t, e) {
        return this.content._compile(t, e);
      }, a.prototype.getContent = function () {
        return this.content.getContent();
      }, a.prototype.forEach = function (t) {
        t(this.content, "content", this);
      }, a.prototype.map = function (t) {
        return new a(t(this.content, "content", this));
      }, a.prototype.clone = function () {
        return new a(this.content);
      }, a.prototype._toString = function (t) {
        return !t || t && !t.parenthesis || t && "keep" === t.parenthesis ? "(" + this.content.toString(t) + ")" : this.content.toString(t);
      }, a.prototype.toJSON = function () {
        return {
          mathjs: "ParenthesisNode",
          content: this.content
        };
      }, a.fromJSON = function (t) {
        return new a(t.content);
      }, a.prototype.toHTML = function (t) {
        return !t || t && !t.parenthesis || t && "keep" === t.parenthesis ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(t) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(t);
      }, a.prototype._toTex = function (t) {
        return !t || t && !t.parenthesis || t && "keep" === t.parenthesis ? "\\left(".concat(this.content.toTex(t), "\\right)") : this.content.toTex(t);
      }, a;
    };
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function o() {
      return (o = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];

          for (var n in r) {
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    var i = r(7),
        a = r(3).escape,
        s = r(2).hasOwnProperty,
        u = r(4).map,
        p = r(0).validateSafeMethod,
        c = r(0).getSafeProperty;
    e.name = "FunctionNode", e.path = "expression.node", e.math = !0, e.factory = function (t, e, f, h, l) {
      var m = f(r(1)),
          d = f(r(20));

      function y(e, r) {
        if (!(this instanceof y)) throw new SyntaxError("Constructor must be called with the new operator");
        if ("string" == typeof e && (e = new d(e)), !t.isNode(e)) throw new TypeError('Node expected as parameter "fn"');
        if (!Array.isArray(r) || !r.every(t.isNode)) throw new TypeError('Array containing Nodes expected for parameter "args"');
        this.fn = e, this.args = r || [], Object.defineProperty(this, "name", {
          get: function () {
            return this.fn.name || "";
          }.bind(this),
          set: function set() {
            throw new Error("Cannot assign a new name, name is read-only");
          }
        });

        var n = function n() {
          throw new Error("Property `FunctionNode.object` is deprecated, use `FunctionNode.fn` instead");
        };

        Object.defineProperty(this, "object", {
          get: n,
          set: n
        });
      }

      y.prototype = new m(), y.prototype.type = "FunctionNode", y.prototype.isFunctionNode = !0, y.prototype._compile = function (e, r) {
        if (!(this instanceof y)) throw new TypeError("No valid FunctionNode");
        var n = u(this.args, function (t) {
          return t._compile(e, r);
        });

        if (t.isSymbolNode(this.fn)) {
          var i = this.fn.name,
              a = i in e ? c(e, i) : void 0;

          if ("function" == typeof a && !0 === a.rawArgs) {
            var s = this.args;
            return function (t, r, n) {
              return (i in t ? c(t, i) : a)(s, e, o({}, t, r));
            };
          }

          if (1 === n.length) {
            var f = n[0];
            return function (t, e, r) {
              return (i in t ? c(t, i) : a)(f(t, e, r));
            };
          }

          if (2 === n.length) {
            var h = n[0],
                l = n[1];
            return function (t, e, r) {
              return (i in t ? c(t, i) : a)(h(t, e, r), l(t, e, r));
            };
          }

          return function (t, e, r) {
            return (i in t ? c(t, i) : a).apply(null, u(n, function (n) {
              return n(t, e, r);
            }));
          };
        }

        if (t.isAccessorNode(this.fn) && t.isIndexNode(this.fn.index) && this.fn.index.isObjectProperty()) {
          var m = this.fn.object._compile(e, r),
              d = this.fn.index.getObjectProperty(),
              g = this.args;

          return function (t, r, i) {
            var a = m(t, r, i);
            return p(a, d), a[d] && a[d].rawArgs ? a[d](g, e, o({}, t, r)) : a[d].apply(a, u(n, function (e) {
              return e(t, r, i);
            }));
          };
        }

        var v = this.fn._compile(e, r),
            x = this.args;

        return function (t, r, i) {
          var a = v(t, r, i);
          return a && a.rawArgs ? a(x, e, o({}, t, r)) : a.apply(a, u(n, function (e) {
            return e(t, r, i);
          }));
        };
      }, y.prototype.forEach = function (t) {
        for (var e = 0; e < this.args.length; e++) {
          t(this.args[e], "args[" + e + "]", this);
        }
      }, y.prototype.map = function (t) {
        for (var e = this.fn.map(t), r = [], n = 0; n < this.args.length; n++) {
          r[n] = this._ifNode(t(this.args[n], "args[" + n + "]", this));
        }

        return new y(e, r);
      }, y.prototype.clone = function () {
        return new y(this.fn, this.args.slice(0));
      };
      var g = y.prototype.toString;

      function v(e, r, o) {
        for (var i, a = "", s = new RegExp("\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)", "ig"), u = 0; null !== (i = s.exec(e));) {
          if (a += e.substring(u, i.index), u = i.index, "$$" === i[0]) a += "$", u++;else {
            u += i[0].length;
            var p = r[i[1]];
            if (!p) throw new ReferenceError("Template: Property " + i[1] + " does not exist.");
            if (void 0 === i[2]) switch (n(p)) {
              case "string":
                a += p;
                break;

              case "object":
                if (t.isNode(p)) a += p.toTex(o);else {
                  if (!Array.isArray(p)) throw new TypeError("Template: " + i[1] + " has to be a Node, String or array of Nodes");
                  a += p.map(function (e, r) {
                    if (t.isNode(e)) return e.toTex(o);
                    throw new TypeError("Template: " + i[1] + "[" + r + "] is not a Node.");
                  }).join(",");
                }
                break;

              default:
                throw new TypeError("Template: " + i[1] + " has to be a Node, String or array of Nodes");
            } else {
              if (!t.isNode(p[i[2]] && p[i[2]])) throw new TypeError("Template: " + i[1] + "[" + i[2] + "] is not a Node.");
              a += p[i[2]].toTex(o);
            }
          }
        }

        return a += e.slice(u);
      }

      y.prototype.toString = function (t) {
        var e,
            r = this.fn.toString(t);
        return t && "object" === n(t.handler) && s(t.handler, r) && (e = t.handler[r](this, t)), void 0 !== e ? e : g.call(this, t);
      }, y.prototype._toString = function (e) {
        var r = this.args.map(function (t) {
          return t.toString(e);
        });
        return (t.isFunctionAssignmentNode(this.fn) ? "(" + this.fn.toString(e) + ")" : this.fn.toString(e)) + "(" + r.join(", ") + ")";
      }, y.prototype.toJSON = function () {
        return {
          mathjs: "FunctionNode",
          fn: this.fn,
          args: this.args
        };
      }, y.fromJSON = function (t) {
        return new y(t.fn, t.args);
      }, y.prototype.toHTML = function (t) {
        var e = this.args.map(function (e) {
          return e.toHTML(t);
        });
        return '<span class="math-function">' + a(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + e.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      };
      var x = y.prototype.toTex;
      return y.prototype.toTex = function (t) {
        var e;
        return t && "object" === n(t.handler) && s(t.handler, this.name) && (e = t.handler[this.name](this, t)), void 0 !== e ? e : x.call(this, t);
      }, y.prototype._toTex = function (t) {
        var e,
            r,
            o = this.args.map(function (e) {
          return e.toTex(t);
        });

        switch (!l[this.name] || "function" != typeof l[this.name].toTex && "object" !== n(l[this.name].toTex) && "string" != typeof l[this.name].toTex || (e = l[this.name].toTex), n(e)) {
          case "function":
            r = e(this, t);
            break;

          case "string":
            r = v(e, this, t);
            break;

          case "object":
            switch (n(e[o.length])) {
              case "function":
                r = e[o.length](this, t);
                break;

              case "string":
                r = v(e[o.length], this, t);
            }

        }

        return void 0 !== r ? r : v(i.defaultTemplate, this, t);
      }, y.prototype.getIdentifier = function () {
        return this.type + ":" + this.name;
      }, y;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(6);
    e.name = "RangeNode", e.path = "expression.node", e.factory = function (t, e, o, i) {
      var a = o(r(1));

      function s(e, r, n) {
        if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
        if (!t.isNode(e)) throw new TypeError("Node expected");
        if (!t.isNode(r)) throw new TypeError("Node expected");
        if (n && !t.isNode(n)) throw new TypeError("Node expected");
        if (arguments.length > 3) throw new Error("Too many arguments");
        this.start = e, this.end = r, this.step = n || null;
      }

      function u(t, e) {
        var r = n.getPrecedence(t, e),
            o = {},
            i = n.getPrecedence(t.start, e);

        if (o.start = null !== i && i <= r || "all" === e, t.step) {
          var a = n.getPrecedence(t.step, e);
          o.step = null !== a && a <= r || "all" === e;
        }

        var s = n.getPrecedence(t.end, e);
        return o.end = null !== s && s <= r || "all" === e, o;
      }

      return s.prototype = new a(), s.prototype.type = "RangeNode", s.prototype.isRangeNode = !0, s.prototype.needsEnd = function () {
        return this.filter(function (e) {
          return t.isSymbolNode(e) && "end" === e.name;
        }).length > 0;
      }, s.prototype._compile = function (t, e) {
        var r = t.range,
            n = this.start._compile(t, e),
            o = this.end._compile(t, e);

        if (this.step) {
          var i = this.step._compile(t, e);

          return function (t, e, a) {
            return r(n(t, e, a), o(t, e, a), i(t, e, a));
          };
        }

        return function (t, e, i) {
          return r(n(t, e, i), o(t, e, i));
        };
      }, s.prototype.forEach = function (t) {
        t(this.start, "start", this), t(this.end, "end", this), this.step && t(this.step, "step", this);
      }, s.prototype.map = function (t) {
        return new s(this._ifNode(t(this.start, "start", this)), this._ifNode(t(this.end, "end", this)), this.step && this._ifNode(t(this.step, "step", this)));
      }, s.prototype.clone = function () {
        return new s(this.start, this.end, this.step && this.step);
      }, s.prototype._toString = function (t) {
        var e,
            r = u(this, t && t.parenthesis ? t.parenthesis : "keep"),
            n = this.start.toString(t);

        if (r.start && (n = "(" + n + ")"), e = n, this.step) {
          var o = this.step.toString(t);
          r.step && (o = "(" + o + ")"), e += ":" + o;
        }

        var i = this.end.toString(t);
        return r.end && (i = "(" + i + ")"), e += ":" + i;
      }, s.prototype.toJSON = function () {
        return {
          mathjs: "RangeNode",
          start: this.start,
          end: this.end,
          step: this.step
        };
      }, s.fromJSON = function (t) {
        return new s(t.start, t.end, t.step);
      }, s.prototype.toHTML = function (t) {
        var e,
            r = u(this, t && t.parenthesis ? t.parenthesis : "keep"),
            n = this.start.toHTML(t);

        if (r.start && (n = '<span class="math-parenthesis math-round-parenthesis">(</span>' + n + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e = n, this.step) {
          var o = this.step.toHTML(t);
          r.step && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e += '<span class="math-operator math-range-operator">:</span>' + o;
        }

        var i = this.end.toHTML(t);
        return r.end && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e += '<span class="math-operator math-range-operator">:</span>' + i;
      }, s.prototype._toTex = function (t) {
        var e = u(this, t && t.parenthesis ? t.parenthesis : "keep"),
            r = this.start.toTex(t);

        if (e.start && (r = "\\left(".concat(r, "\\right)")), this.step) {
          var n = this.step.toTex(t);
          e.step && (n = "\\left(".concat(n, "\\right)")), r += ":" + n;
        }

        var o = this.end.toTex(t);
        return e.end && (o = "\\left(".concat(o, "\\right)")), r += ":" + o;
      }, s;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(6),
        o = r(7),
        i = r(3).escape;
    e.name = "RelationalNode", e.path = "expression.node", e.factory = function (t, e, a, s) {
      var u = a(r(1)),
          p = r(0).getSafeProperty;

      function c(t, e) {
        if (!(this instanceof c)) throw new SyntaxError("Constructor must be called with the new operator");
        if (!Array.isArray(t)) throw new TypeError("Parameter conditionals must be an array");
        if (!Array.isArray(e)) throw new TypeError("Parameter params must be an array");
        if (t.length !== e.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
        this.conditionals = t, this.params = e;
      }

      return c.prototype = new u(), c.prototype.type = "RelationalNode", c.prototype.isRelationalNode = !0, c.prototype._compile = function (t, e) {
        var r = this,
            n = this.params.map(function (r) {
          return r._compile(t, e);
        });
        return function (e, o, i) {
          for (var a, s = n[0](e, o, i), u = 0; u < r.conditionals.length; u++) {
            if (a = s, s = n[u + 1](e, o, i), !p(t, r.conditionals[u])(a, s)) return !1;
          }

          return !0;
        };
      }, c.prototype.forEach = function (t) {
        var e = this;
        this.params.forEach(function (r, n) {
          return t(r, "params[" + n + "]", e);
        }, this);
      }, c.prototype.map = function (t) {
        var e = this;
        return new c(this.conditionals.slice(), this.params.map(function (r, n) {
          return e._ifNode(t(r, "params[" + n + "]", e));
        }, this));
      }, c.prototype.clone = function () {
        return new c(this.conditionals, this.params);
      }, c.prototype._toString = function (t) {
        for (var e = t && t.parenthesis ? t.parenthesis : "keep", r = n.getPrecedence(this, e), o = this.params.map(function (o, i) {
          var a = n.getPrecedence(o, e);
          return "all" === e || null !== a && a <= r ? "(" + o.toString(t) + ")" : o.toString(t);
        }), i = {
          equal: "==",
          unequal: "!=",
          smaller: "<",
          larger: ">",
          smallerEq: "<=",
          largerEq: ">="
        }, a = o[0], s = 0; s < this.conditionals.length; s++) {
          a += " " + i[this.conditionals[s]] + " " + o[s + 1];
        }

        return a;
      }, c.prototype.toJSON = function () {
        return {
          mathjs: "RelationalNode",
          conditionals: this.conditionals,
          params: this.params
        };
      }, c.fromJSON = function (t) {
        return new c(t.conditionals, t.params);
      }, c.prototype.toHTML = function (t) {
        for (var e = t && t.parenthesis ? t.parenthesis : "keep", r = n.getPrecedence(this, e), o = this.params.map(function (o, i) {
          var a = n.getPrecedence(o, e);
          return "all" === e || null !== a && a <= r ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + o.toHTML(t) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : o.toHTML(t);
        }), a = {
          equal: "==",
          unequal: "!=",
          smaller: "<",
          larger: ">",
          smallerEq: "<=",
          largerEq: ">="
        }, s = o[0], u = 0; u < this.conditionals.length; u++) {
          s += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + i(a[this.conditionals[u]]) + "</span>" + o[u + 1];
        }

        return s;
      }, c.prototype._toTex = function (t) {
        for (var e = t && t.parenthesis ? t.parenthesis : "keep", r = n.getPrecedence(this, e), i = this.params.map(function (o, i) {
          var a = n.getPrecedence(o, e);
          return "all" === e || null !== a && a <= r ? "\\left(" + o.toString(t) + "\right)" : o.toString(t);
        }), a = i[0], s = 0; s < this.conditionals.length; s++) {
          a += o.operators[this.conditionals[s]] + i[s + 1];
        }

        return a;
      }, c;
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(5);
    e.name = "compile", e.factory = function (t, e, o, i) {
      var a = o(r(10));
      return i("compile", {
        string: function string(t) {
          return a(t).compile();
        },
        "Array | Matrix": function ArrayMatrix(t) {
          return n(t, function (t) {
            return a(t).compile();
          });
        }
      });
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(5);
    e.name = "eval", e.factory = function (t, e, o, i) {
      var a = o(r(10));
      return i("compile", {
        string: function string(t) {
          return a(t).compile().eval({});
        },
        "string, Object": function stringObject(t, e) {
          return a(t).compile().eval(e);
        },
        "Array | Matrix": function ArrayMatrix(t) {
          var e = {};
          return n(t, function (t) {
            return a(t).compile().eval(e);
          });
        },
        "Array | Matrix, Object": function ArrayMatrixObject(t, e) {
          return n(t, function (t) {
            return a(t).compile().eval(e);
          });
        }
      });
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(3);
    e.name = "format", e.factory = function (t, e, r, o) {
      var i = o("format", {
        any: n.format,
        "any, Object | function | number": n.format
      });
      return i.toTex = void 0, i;
    };
  }, function (t, e, r) {
    "use strict";

    r.r(e);
    var n = r(21),
        o = r.n(n);

    var i = function i(t) {
      this.gl = t, this.textureIndex = 0;
    };

    i.prototype.newTextureIndex = function () {
      var t = this.textureIndex;
      return this.textureIndex += 1, t;
    }, i.prototype.reset = function () {
      this.textureIndex = 0;
    };
    var a = i;

    function s(t, e, r) {
      this.gl = t, this.vShader = this.createShader(e, this.gl.VERTEX_SHADER), this.fShader = this.createShader(r, this.gl.FRAGMENT_SHADER), this.program = this.createProgram(this.vShader, this.fShader), this.locations = {};
    }

    s.prototype.use = function () {
      this.gl.useProgram(this.program);
    }, s.prototype.getUniformLocation = function (t) {
      return this.gl.getUniformLocation(this.program, t);
    }, s.prototype.bindVertices = function () {
      this.use();
      var t = this.gl.getAttribLocation(this.program, "position");
      this.buffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
      var e = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, e, this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(t), this.gl.vertexAttribPointer(t, 2, this.gl.FLOAT, !1, 0, 0);
    }, s.prototype.cleanup = function () {
      this.gl.deleteShader(this.fShader), this.gl.deleteShader(this.vShader), this.gl.deleteProgram(this.program), this.gl.deleteBuffer(this.buffer);
    }, s.prototype.createShader = function (t, e) {
      var r = this.gl.createShader(e);

      if (this.gl.shaderSource(r, t), this.gl.compileShader(r), !this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS)) {
        var _t = this.gl.getShaderInfoLog(r);

        throw console.log("Error Compiling Shader ", _t), new Error({
          message: _t,
          type: "shader"
        });
      }

      return r;
    }, s.prototype.createProgram = function (t, e) {
      var r = this.gl.createProgram();

      if (this.gl.attachShader(r, t), this.gl.attachShader(r, e), this.gl.linkProgram(r), !this.gl.getProgramParameter(r, this.gl.LINK_STATUS)) {
        var _t2 = this.gl.getProgramInfoLog(r);

        throw console.log("Error in program linking", _t2), new Error({
          message: _t2,
          type: "program"
        });
      }

      return r;
    };
    var u = s;

    function p(t, e) {
      null == t && (t = {}), this.contextState = e, this.float = t.float, this.gl = this.contextState.gl, this.texture = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !0), this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }

    p.prototype.bind = function (t) {
      null == t && (t = -1);
      var e = this.contextState.newTextureIndex();
      this.gl.activeTexture(this.gl.TEXTURE0 + e), this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture), -1 !== t && this.gl.uniform1i(t, e);
    }, p.prototype.setSize = function (t, e) {
      if (this.width !== t || this.height !== e) {
        this.width = t, this.height = e;

        var _r = this.float ? this.gl.FLOAT : this.gl.UNSIGNED_BYTE;

        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, t, e, 0, this.gl.RGBA, _r, null);
      }
    }, p.prototype.destroy = function () {
      this.gl.deleteTexture(this.texture);
    };
    var c = p;

    function f(t, e) {
      this.contextState = e, this.gl = this.contextState.gl, this.persistent = t.persistent, this.name = t.target, this.textures = [], this.textures.push(new c(t, this.contextState)), this.textures.push(new c(t, this.contextState)), this.flipFlop = !1, this.fbo = this.gl.createFramebuffer(), this.flipFlop = !1;
    }

    f.prototype.setSize = function (t, e) {
      if (this.width !== t || this.height !== e) {
        this.width = t, this.height = e;

        for (var _r2 = 0; _r2 < this.textures.length; _r2++) {
          this.textures[_r2].setSize(t, e);
        }
      }
    }, f.prototype.readTexture = function () {
      return this.flipFlop ? this.textures[1] : this.textures[0];
    }, f.prototype.writeTexture = function () {
      return this.flipFlop ? this.textures[0] : this.textures[1];
    }, f.prototype.flip = function () {
      this.flipFlop = !this.flipFlop;
    }, f.prototype.destroy = function () {
      for (var _t3 = 0; _t3 < this.textures.length; _t3++) {
        this.textures[_t3].destroy();
      }

      this.gl.deleteFramebuffer(this.fbo);
    };
    var h = f,
        l = r(22),
        m = r.n(l);
    var d = "Something is wrong with your ISF metadata";

    function y(t) {
      var e = /\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+/.exec(t);
      if (!e) throw new Error("There is no metadata here.");
      var r,
          n = e[0];
      n = n.substring(1, n.length - 1);

      try {
        r = m()(n);
      } catch (t) {
        var _e = t.at,
            _r3 = t.message || "Invalid JSON";

        if (_e) {
          var _t4 = (n || "").substring(0, _e).split(/\r\n|\r|\n/),
              _o = _t4.length,
              _i = _t4[_o - 1].length,
              _a = new Error("".concat(d, ": ").concat(_r3, "        at line ").concat(_o, " and position ").concat(_i));

          throw _a.lineNumber = _o, _a.position = _i, _a;
        }

        throw new Error("".concat(d, ": ").concat(_r3));
      }

      return {
        objectValue: r,
        stringValue: n,
        startIndex: t.indexOf("/*"),
        endIndex: t.indexOf("*/")
      };
    }

    var g = {
      float: "float",
      image: "sampler2D",
      bool: "bool",
      event: "bool",
      long: "int",
      color: "vec4",
      point2D: "vec2"
    },
        v = function v() {};

    v.prototype.parse = function (t, e) {
      try {
        this.valid = !0, this.rawFragmentShader = t, this.rawVertexShader = e || v.vertexShaderDefault, this.error = null;

        var _r4 = y(this.rawFragmentShader),
            _n2 = _r4.objectValue,
            _o2 = _r4.stringValue;

        this.metadata = _n2, this.credit = _n2.CREDIT, this.categories = _n2.CATEGORIES, this.inputs = _n2.INPUTS, this.imports = _n2.IMPORTED || {}, this.description = _n2.DESCRIPTION;

        var _i2 = _n2.PASSES || [{}];

        this.passes = this.parsePasses(_i2);

        var _a2 = this.rawFragmentShader.indexOf(_o2) + _o2.length + 2;

        this.rawFragmentMain = this.rawFragmentShader.substring(_a2), this.generateShaders(), this.inferFilterType(), this.isfVersion = this.inferISFVersion();
      } catch (t) {
        this.valid = !1, this.error = t, this.inputs = [], this.categories = [], this.credit = "", this.errorLine = t.lineNumber;
      }
    }, v.prototype.parsePasses = function (t) {
      var e = [];

      for (var _r5 = 0; _r5 < t.length; ++_r5) {
        var _n3 = t[_r5],
            _o3 = {};
        _n3.TARGET && (_o3.target = _n3.TARGET), _o3.persistent = !!_n3.PERSISTENT, _o3.width = _n3.WIDTH || "$WIDTH", _o3.height = _n3.HEIGHT || "$HEIGHT", _o3.float = !!_n3.FLOAT, e.push(_o3);
      }

      return e;
    }, v.prototype.generateShaders = function () {
      this.uniformDefs = "";

      for (var _t5 = 0; _t5 < this.inputs.length; ++_t5) {
        this.addUniform(this.inputs[_t5]);
      }

      for (var _t6 = 0; _t6 < this.passes.length; ++_t6) {
        this.passes[_t6].target && this.addUniform({
          NAME: this.passes[_t6].target,
          TYPE: "image"
        });
      }

      for (var _t7 in this.imports) {
        ({}).hasOwnProperty.call(this.imports, _t7) && this.addUniform({
          NAME: _t7,
          TYPE: "image"
        });
      }

      this.fragmentShader = this.buildFragmentShader(), this.vertexShader = this.buildVertexShader();
    }, v.prototype.addUniform = function (t) {
      var e = this.inputToType(t.TYPE);
      this.addUniformLine("uniform ".concat(e, " ").concat(t.NAME, ";")), "sampler2D" === e && this.addUniformLine(this.samplerUniforms(t));
    }, v.prototype.addUniformLine = function (t) {
      this.uniformDefs += "".concat(t, "\n");
    }, v.prototype.samplerUniforms = function (t) {
      var e = t.NAME;
      var r = "";
      return r += "uniform vec4 _".concat(e, "_imgRect;\n"), r += "uniform vec2 _".concat(e, "_imgSize;\n"), r += "uniform bool _".concat(e, "_flip;\n"), r += "varying vec2 _".concat(e, "_normTexCoord;\n"), r += "varying vec2 _".concat(e, "_texCoord;\n"), r += "\n";
    }, v.prototype.buildFragmentShader = function () {
      var t = this.replaceSpecialFunctions(this.rawFragmentMain);
      return v.fragmentShaderSkeleton.replace("[[uniforms]]", this.uniformDefs).replace("[[main]]", t);
    }, v.prototype.replaceSpecialFunctions = function (t) {
      var e;
      return e = /IMG_THIS_PIXEL\((.+?)\)/g, t = t.replace(e, function (t, e) {
        return "texture2D(".concat(e, ", isf_FragNormCoord)");
      }), e = /IMG_THIS_NORM_PIXEL\((.+?)\)/g, t = t.replace(e, function (t, e) {
        return "texture2D(".concat(e, ", isf_FragNormCoord)");
      }), e = /IMG_PIXEL\((.+?)\)/g, t = t.replace(e, function (t, e) {
        var r = e.split(",");
        return "texture2D(".concat(r[0], ", (").concat(r[1], ") / RENDERSIZE)");
      }), e = /IMG_NORM_PIXEL\((.+?)\)/g, t = t.replace(e, function (t, e) {
        var r = e.split(","),
            n = r[0];
        return "VVSAMPLER_2DBYNORM(".concat(n, ", _").concat(n, "_imgRect, _").concat(n, "_imgSize, _").concat(n, "_flip, ").concat(r[1], ")");
      }), e = /IMG_SIZE\((.+?)\)/g, t = t.replace(e, function (t, e) {
        return "_".concat(e, "_imgSize");
      });
    }, v.prototype.buildVertexShader = function () {
      var t = "\n";

      for (var _e2 = 0; _e2 < this.inputs.length; ++_e2) {
        var _r6 = this.inputs[_e2];
        "image" === _r6.TYPE && (t += "".concat(this.texCoordFunctions(_r6), "\n"));
      }

      return v.vertexShaderSkeleton.replace("[[functions]]", t).replace("[[uniforms]]", this.uniformDefs).replace("[[main]]", this.rawVertexShader);
    }, v.prototype.texCoordFunctions = function (t) {
      var e = t.NAME;
      return ["_[[name]]_texCoord =", "    vec2(((isf_fragCoord.x / _[[name]]_imgSize.x * _[[name]]_imgRect.z) + _[[name]]_imgRect.x), ", "          (isf_fragCoord.y / _[[name]]_imgSize.y * _[[name]]_imgRect.w) + _[[name]]_imgRect.y);", "", "_[[name]]_normTexCoord =", "  vec2((((isf_FragNormCoord.x * _[[name]]_imgSize.x) / _[[name]]_imgSize.x * _[[name]]_imgRect.z) + _[[name]]_imgRect.x),", "          ((isf_FragNormCoord.y * _[[name]]_imgSize.y) / _[[name]]_imgSize.y * _[[name]]_imgRect.w) + _[[name]]_imgRect.y);"].join("\n").replace(/\[\[name\]\]/g, e);
    }, v.prototype.inferFilterType = function () {
      function t(t, e) {
        return t.filter(e).length > 0;
      }

      var e = t(this.inputs, function (t) {
        return "image" === t.TYPE && "inputImage" === t.NAME;
      }),
          r = t(this.inputs, function (t) {
        return "image" === t.TYPE && "startImage" === t.NAME;
      }) && t(this.inputs, function (t) {
        return "image" === t.TYPE && "endImage" === t.NAME;
      }) && t(this.inputs, function (t) {
        return "float" === t.TYPE && "progress" === t.NAME;
      });
      this.type = e ? "filter" : r ? "transition" : "generator";
    }, v.prototype.inferISFVersion = function () {
      var t = 2;
      return (this.metadata.PERSISTENT_BUFFERS || -1 !== this.rawFragmentShader.indexOf("vv_FragNormCoord") || -1 !== this.rawVertexShader.indexOf("vv_vertShaderInit") || -1 !== this.rawVertexShader.indexOf("vv_FragNormCoord")) && (t = 1), t;
    }, v.prototype.inputToType = function (t) {
      var e = g[t];
      if (!e) throw new Error("Unknown input type [".concat(t, "]"));
      return e;
    }, v.fragmentShaderSkeleton = "\nprecision highp float;\nprecision highp int;\n\nuniform int PASSINDEX;\nuniform vec2 RENDERSIZE;\nvarying vec2 isf_FragNormCoord;\nvarying vec2 isf_FragCoord;\nuniform float TIME;\nuniform float TIMEDELTA;\nuniform int FRAMEINDEX;\nuniform vec4 DATE;\n\n[[uniforms]]\n\n// We don't need 2DRect functions since we control all inputs.  Don't need flip either, but leaving\n// for consistency sake.\nvec4 VVSAMPLER_2DBYPIXEL(sampler2D sampler, vec4 samplerImgRect, vec2 samplerImgSize, bool samplerFlip, vec2 loc) {\n  return (samplerFlip)\n    ? texture2D   (sampler,vec2(((loc.x/samplerImgSize.x*samplerImgRect.z)+samplerImgRect.x), (samplerImgRect.w-(loc.y/samplerImgSize.y*samplerImgRect.w)+samplerImgRect.y)))\n    : texture2D   (sampler,vec2(((loc.x/samplerImgSize.x*samplerImgRect.z)+samplerImgRect.x), ((loc.y/samplerImgSize.y*samplerImgRect.w)+samplerImgRect.y)));\n}\nvec4 VVSAMPLER_2DBYNORM(sampler2D sampler, vec4 samplerImgRect, vec2 samplerImgSize, bool samplerFlip, vec2 normLoc)  {\n  vec4    returnMe = VVSAMPLER_2DBYPIXEL(   sampler,samplerImgRect,samplerImgSize,samplerFlip,vec2(normLoc.x*samplerImgSize.x, normLoc.y*samplerImgSize.y));\n  return returnMe;\n}\n\n[[main]]\n\n", v.vertexShaderDefault = "\nvoid main() {\n  isf_vertShaderInit();\n}\n", v.vertexShaderSkeleton = "\nprecision highp float;\nprecision highp int;\nvoid isf_vertShaderInit();\n\nattribute vec2 position; // -1..1\n\nuniform int     PASSINDEX;\nuniform vec2    RENDERSIZE;\nvarying vec2    isf_FragNormCoord; // 0..1\nvec2    isf_fragCoord; // Pixel Space\n\n[[uniforms]]\n\n[[main]]\nvoid isf_vertShaderInit(void)  {\ngl_Position = vec4( position, 0.0, 1.0 );\n  isf_FragNormCoord = vec2((gl_Position.x+1.0)/2.0, (gl_Position.y+1.0)/2.0);\n  isf_fragCoord = floor(isf_FragNormCoord * RENDERSIZE);\n  [[functions]]\n}\n";
    var x = v;

    function w(t) {
      var e = t.split("\n");

      for (var _t8 = 0; _t8 < e.length; _t8++) {
        if (console.log("line", e[_t8]), -1 !== e[_t8].indexOf("main()")) return _t8;
      }

      return -1;
    }

    var b = o.a.eval;

    function N(t) {
      this.gl = t, this.uniforms = [], this.contextState = new a(this.gl), this.setupPaintToScreen(), this.startTime = Date.now(), this.lastRenderTime = Date.now(), this.frameIndex = 0;
    }

    N.prototype.loadSource = function (t, e) {
      var r = new x();
      r.parse(t, e), this.sourceChanged(r.fragmentShader, r.vertexShader, r);
    }, N.prototype.sourceChanged = function (t, e, r) {
      if (this.fragmentShader = t, this.vertexShader = e, this.model = r, !this.model.valid) return this.valid = !1, this.error = this.model.error, void (this.errorLine = this.model.errorLine);

      try {
        this.valid = !0, this.error = null, this.errorLine = null, this.setupGL(), this.initUniforms();

        for (var _t9 = 0; _t9 < r.inputs.length; _t9++) {
          var _e3 = r.inputs[_t9];
          void 0 !== _e3.DEFAULT && this.setValue(_e3.NAME, _e3.DEFAULT);
        }
      } catch (t) {
        this.valid = !1, this.error = t, this.errorLine = function (t, e, r) {
          var n = w(e),
              o = w(r),
              i = /ERROR: (\d+):(\d+): (.*)/g.exec(t.message)[2];
          return parseInt(i, 10) + o - n;
        }(t, this.fragmentShader, this.model.rawFragmentShader);
      }
    }, N.prototype.initUniforms = function () {
      this.uniforms = this.findUniforms(this.fragmentShader);
      var t = this.model.inputs;

      for (var _e4 = 0; _e4 < t.length; ++_e4) {
        var _r7 = t[_e4],
            _n4 = this.uniforms[_r7.NAME];
        _n4 && (_n4.value = this.model[_r7.NAME], "t" === _n4.type && (_n4.texture = new c({}, this.contextState)));
      }

      this.pushTextures();
    }, N.prototype.setValue = function (t, e) {
      this.program.use();
      var r = this.uniforms[t];
      r ? (r.value = e, "t" === r.type && (r.textureLoaded = !1), this.pushUniform(r)) : console.error("No uniform named ".concat(t));
    }, N.prototype.setNormalizedValue = function (t, e) {
      var r = this.model.inputs;
      var n = null;

      for (var _e5 = 0; _e5 < r.length; _e5++) {
        var _o4 = r[_e5];

        if (_o4.NAME === t) {
          n = _o4;
          break;
        }
      }

      n && void 0 !== n.MIN && void 0 !== n.MAX ? this.setValue(t, n.MIN + (n.MAX - n.MIN) * e) : console.log("Trying to set normalized value without MIN and MAX input", t, n);
    }, N.prototype.setupPaintToScreen = function () {
      return this.paintProgram = new u(this.gl, this.basicVertexShader, this.basicFragmentShader), this.paintProgram.bindVertices();
    }, N.prototype.setupGL = function () {
      this.cleanup(), this.program = new u(this.gl, this.vertexShader, this.fragmentShader), this.program.bindVertices(), this.generatePersistentBuffers();
    }, N.prototype.generatePersistentBuffers = function () {
      this.renderBuffers = [];
      var t = this.model.passes;

      for (var _e6 = 0; _e6 < t.length; ++_e6) {
        var _r8 = t[_e6],
            _n5 = new h(_r8, this.contextState);

        _r8.buffer = _n5, this.renderBuffers.push(_n5);
      }
    }, N.prototype.paintToScreen = function (t, e) {
      this.paintProgram.use(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.viewport(0, 0, t.width, t.height);
      var r = this.paintProgram.getUniformLocation("tex");
      e.readTexture().bind(r), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), this.program.use();
    }, N.prototype.pushTextures = function () {
      var _this = this;

      Object.keys(this.uniforms).forEach(function (t) {
        var e = _this.uniforms[t];
        "t" === e.type && _this.pushTexture(e);
      });
    }, N.prototype.pushTexture = function (t) {
      if (!t.value) return;
      if ("OffscreenCanvas" !== t.value.constructor.name && "CANVAS" !== t.value.tagName && !t.value.complete && 4 !== t.value.readyState) return;
      var e = this.program.getUniformLocation(t.name);

      if (t.texture.bind(e), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, t.value), !t.textureLoaded) {
        var _e7 = t.value;
        t.textureLoaded = !0;

        var _r9 = _e7.naturalWidth || _e7.width || _e7.videoWidth,
            _n6 = _e7.naturalHeight || _e7.height || _e7.videoHeight;

        this.setValue("_".concat(t.name, "_imgSize"), [_r9, _n6]), this.setValue("_".concat(t.name, "_imgRect"), [0, 0, 1, 1]), this.setValue("_".concat(t.name, "_flip"), !1);
      }
    }, N.prototype.pushUniforms = function () {
      var _iterator = _createForOfIteratorHelper(this.uniforms),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t10 = _step.value;
          this.pushUniform(_t10);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, N.prototype.pushUniform = function (t) {
      var e = this.program.getUniformLocation(t.name);

      if (-1 !== e) {
        if ("t" === t.type) return void this.pushTexture(t);
        var _r10 = t.value;

        switch (t.type) {
          case "f":
            this.gl.uniform1f(e, _r10);
            break;

          case "v2":
            this.gl.uniform2f(e, _r10[0], _r10[1]);
            break;

          case "v3":
            this.gl.uniform3f(e, _r10[0], _r10[1], _r10[2]);
            break;

          case "v4":
            this.gl.uniform4f(e, _r10[0], _r10[1], _r10[2], _r10[3]);
            break;

          case "i":
            this.gl.uniform1i(e, _r10);
            break;

          case "color":
            this.gl.uniform4f(e, _r10[0], _r10[1], _r10[2], _r10[3]);
            break;

          default:
            console.log("Unknown type for uniform setting ".concat(t.type), t);
        }
      }
    }, N.prototype.findUniforms = function (t) {
      var e = t.split("\n"),
          r = {},
          n = e.length;

      for (var _t11 = 0; _t11 < n; ++_t11) {
        var _n7 = e[_t11].trim();

        if (0 === _n7.indexOf("uniform")) {
          var _t12 = _n7.split(" "),
              _e8 = _t12[2].substring(0, _t12[2].length - 1),
              _o5 = this.typeToUniform(_t12[1]);

          _o5.name = _e8, r[_e8] = _o5;
        }
      }

      return r;
    }, N.prototype.typeToUniform = function (t) {
      switch (t) {
        case "float":
          return {
            type: "f",
            value: 0
          };

        case "vec2":
          return {
            type: "v2",
            value: [0, 0]
          };

        case "vec3":
          return {
            type: "v3",
            value: [0, 0, 0]
          };

        case "vec4":
          return {
            type: "v4",
            value: [0, 0, 0, 0]
          };

        case "bool":
        case "int":
          return {
            type: "i",
            value: 0
          };

        case "color":
          return {
            type: "v4",
            value: [0, 0, 0, 0]
          };

        case "point2D":
          return {
            type: "v2",
            value: [0, 0],
            isPoint: !0
          };

        case "sampler2D":
          return {
            type: "t",
            value: {
              complete: !1,
              readyState: 0
            },
            texture: null,
            textureUnit: null
          };

        default:
          throw new Error("Unknown uniform type in ISFRenderer.typeToUniform: ".concat(t));
      }
    }, N.prototype.setDateUniforms = function () {
      var t = Date.now();
      this.setValue("TIME", (t - this.startTime) / 1e3), this.setValue("TIMEDELTA", (t - this.lastRenderTime) / 1e3), this.setValue("FRAMEINDEX", this.frameIndex++);
      var e = new Date();
      this.setValue("DATE", [e.getFullYear(), e.getMonth() + 1, e.getDate(), 3600 * e.getHours() + 60 * e.getMinutes() + e.getSeconds()]), this.lastRenderTime = t;
    }, N.prototype.draw = function (t) {
      this.contextState.reset(), this.program.use(), this.setDateUniforms();
      var e = this.renderBuffers;

      for (var _t13 = 0; _t13 < e.length; ++_t13) {
        var _r11 = e[_t13],
            _n8 = _r11.readTexture(),
            _o6 = this.program.getUniformLocation(_r11.name);

        _n8.bind(_o6), _r11.name && (this.setValue("_".concat(_r11.name, "_imgSize"), [_r11.width, _r11.height]), this.setValue("_".concat(_r11.name, "_imgRect"), [0, 0, 1, 1]), this.setValue("_".concat(_r11.name, "_flip"), !1));
      }

      var r = null;
      var n = this.model.passes;

      for (var _e9 = 0; _e9 < n.length; ++_e9) {
        var _o7 = n[_e9];
        this.setValue("PASSINDEX", _e9);
        var _i3 = _o7.buffer;

        if (_o7.target) {
          var _e10 = this.evaluateSize(t, _o7.width),
              _n9 = this.evaluateSize(t, _o7.height);

          _i3.setSize(_e10, _n9);

          var _a3 = _i3.writeTexture();

          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, _i3.fbo), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, _a3.texture, 0), this.setValue("RENDERSIZE", [_i3.width, _i3.height]), r = _i3, this.gl.viewport(0, 0, _e10, _n9);
        } else {
          var _e11 = t.width,
              _n10 = t.height;
          this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.setValue("RENDERSIZE", [_e11, _n10]), r = null, this.gl.viewport(0, 0, _e11, _n10);
        }

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      }

      for (var _t14 = 0; _t14 < e.length; ++_t14) {
        e[_t14].flip();
      }

      r && this.paintToScreen(t, r);
    }, N.prototype.evaluateSize = function (t, e) {
      var r = (e += "").replace("$WIDTH", t.offsetWidth || t.width).replace("$HEIGHT", t.offsetHeight || t.height);

      for (var _t15 in this.uniforms) {
        if ({}.hasOwnProperty.call(this.uniforms, _t15)) {
          var _e12 = this.uniforms[_t15];
          r = r.replace("$".concat(_t15), _e12.value);
        }
      }

      return b(r);
    }, N.prototype.cleanup = function () {
      if (this.contextState.reset(), this.renderBuffers) for (var _t16 = 0; _t16 < this.renderBuffers.length; ++_t16) {
        this.renderBuffers[_t16].destroy();
      }
    }, N.prototype.basicVertexShader = "precision mediump float;\nprecision mediump int;\nattribute vec2 position; // -1..1\nvarying vec2 texCoord;\n\nvoid main(void) {\n  // Since webgl doesn't support ftransform, we do this by hand.\n  gl_Position = vec4(position, 0, 1);\n  texCoord = position;\n}\n", N.prototype.basicFragmentShader = "precision mediump float;\nuniform sampler2D tex;\nvarying vec2 texCoord;\nvoid main()\n{\n  gl_FragColor = texture2D(tex, texCoord * 0.5 + 0.5);\n  //gl_FragColor = vec4(texCoord.x);\n}";
    var E = N;
    var S = {
      convertFragment: function convertFragment(t) {
        var e = y(t),
            r = e.objectValue,
            n = r.PERSISTENT_BUFFERS || [];
        return r.PASSES && r.PASSES.forEach(function (t) {
          -1 !== n.indexOf(t.TARGET) && (t.persistent = !0);
        }), delete r.PERSISTENT_BUFFERS, t = (t = t.replace(e.stringValue, JSON.stringify(r, null, 2))).replace(/vv_FragNormCoord/g, "isf_FragNormCoord");
      },
      convertVertex: function convertVertex(t) {
        return t = (t = t.replace(/vv_vertShaderInit/g, "isf_vertShaderInit")).replace(/vv_FragNormCoord/g, "isf_FragNormCoord");
      }
    };
    r.d(e, "Renderer", function () {
      return E;
    }), r.d(e, "Parser", function () {
      return x;
    }), r.d(e, "Upgrader", function () {
      return S;
    }), r.d(e, "MetadataExtractor", function () {
      return y;
    });
  }]);
});
},{}],"app.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ISFRenderer = require('../dist/build.js').Renderer;

var video = null;

function loadFile(_x, _x2) {
  return _loadFile.apply(this, arguments);
}

function _loadFile() {
  _loadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(src, callback) {
    var response, body;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('examples/' + src);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.text();

          case 5:
            body = _context.sent;
            callback(body);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadFile.apply(this, arguments);
}

function createRendering(fsFilename, vsFilename, label) {
  var fsSrc;

  var fsLoaded = function fsLoaded(response) {
    fsSrc = response;

    if (vsFilename) {
      loadFile(vsFilename, vsLoaded);
    } else {
      vsLoaded();
    }
  };

  var vsLoaded = function vsLoaded(vsSrc) {
    var container = document.createElement('div');
    var canvas = document.createElement('canvas');
    var title = document.createElement('div');
    title.style.position = 'absolute';
    title.style.top = '0';
    title.style.color = 'white';
    title.style.left = '0';
    container.style.position = 'relative';
    container.appendChild(canvas);
    container.appendChild(title);
    title.textContent = fsFilename;

    if (label) {
      title.textContent += '(' + label + ')';
    }

    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
    document.body.appendChild(container); // Using webgl2 for non-power-of-two textures

    var gl = canvas.getContext('webgl2');
    var renderer = new ISFRenderer(gl);
    renderer.loadSource(fsSrc, vsSrc);

    var animate = function animate() {
      requestAnimationFrame(animate); // tapestryfract doesn't have inputImage so we'll need to check

      if ('inputImage' in renderer.uniforms) {
        renderer.setValue('inputImage', video);
      }

      renderer.draw(canvas);
    };

    requestAnimationFrame(animate);
  };

  loadFile(fsFilename, fsLoaded);
}

var button = document.createElement('button');
button.textContent = 'Start webcam';
document.body.appendChild(button);
createRendering('tapestryfract.fs');
button.addEventListener('click', function () {
  video = document.createElement('video');
  video.autoplay = true;
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(function (stream) {
    video.srcObject = stream;
  });
  createRendering('badtv.fs', undefined, 'Simple');
  createRendering('feedback.fs', undefined, 'Has target on last pass');
  createRendering('rgbtimeglitch.fs', undefined, 'Has lots of buffers and passes');
  createRendering('rgbglitchmod.fs', undefined, 'Has target on last pass');
  createRendering('edges.fs', 'edges.vs', 'Has custom vertex shader');
});
},{"../dist/build.js":"../dist/build.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56099" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.js.map