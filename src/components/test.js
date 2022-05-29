!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], e)
    : 'object' == typeof exports
    ? (exports['react-slideshow-image'] = e(require('react')))
    : (t['react-slideshow-image'] = e(t.React));
})(this, (t) =>
  (() => {
    'use strict';
    var e = {
        787: (e) => {
          e.exports = t;
        },
      },
      i = {};
    function n(t) {
      var r = i[t];
      if (void 0 !== r) return r.exports;
      var o = (i[t] = { exports: {} });
      return e[t](o, o.exports, n), o.exports;
    }
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
      (n.d = (t, e) => {
        for (var i in e)
          n.o(e, i) &&
            !n.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }),
      (n.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (t) {
          if ('object' == typeof window) return window;
        }
      })()),
      (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (n.r = (t) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      });
    var r = {};
    return (
      (() => {
        n.r(r), n.d(r, { Fade: () => mt, Slide: () => ht, Zoom: () => Tt });
        var t,
          e = n(787),
          i = n.n(e),
          o = {
            Linear: {
              None: function (t) {
                return t;
              },
            },
            Quadratic: {
              In: function (t) {
                return t * t;
              },
              Out: function (t) {
                return t * (2 - t);
              },
              InOut: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
              },
            },
            Cubic: {
              In: function (t) {
                return t * t * t;
              },
              Out: function (t) {
                return --t * t * t + 1;
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t
                  : 0.5 * ((t -= 2) * t * t + 2);
              },
            },
            Quartic: {
              In: function (t) {
                return t * t * t * t;
              },
              Out: function (t) {
                return 1 - --t * t * t * t;
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t
                  : -0.5 * ((t -= 2) * t * t * t - 2);
              },
            },
            Quintic: {
              In: function (t) {
                return t * t * t * t * t;
              },
              Out: function (t) {
                return --t * t * t * t * t + 1;
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t * t
                  : 0.5 * ((t -= 2) * t * t * t * t + 2);
              },
            },
            Sinusoidal: {
              In: function (t) {
                return 1 - Math.cos((t * Math.PI) / 2);
              },
              Out: function (t) {
                return Math.sin((t * Math.PI) / 2);
              },
              InOut: function (t) {
                return 0.5 * (1 - Math.cos(Math.PI * t));
              },
            },
            Exponential: {
              In: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1);
              },
              Out: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
              },
              InOut: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (t *= 2) < 1
                  ? 0.5 * Math.pow(1024, t - 1)
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              },
            },
            Circular: {
              In: function (t) {
                return 1 - Math.sqrt(1 - t * t);
              },
              Out: function (t) {
                return Math.sqrt(1 - --t * t);
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              },
            },
            Elastic: {
              In: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : -Math.pow(2, 10 * (t - 1)) *
                    Math.sin(5 * (t - 1.1) * Math.PI);
              },
              Out: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : Math.pow(2, -10 * t) * Math.sin(5 * (t - 0.1) * Math.PI) +
                    1;
              },
              InOut: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (t *= 2) < 1
                  ? -0.5 *
                    Math.pow(2, 10 * (t - 1)) *
                    Math.sin(5 * (t - 1.1) * Math.PI)
                  : 0.5 *
                      Math.pow(2, -10 * (t - 1)) *
                      Math.sin(5 * (t - 1.1) * Math.PI) +
                    1;
              },
            },
            Back: {
              In: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e);
              },
              Out: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1;
              },
              InOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1
                  ? t * t * ((e + 1) * t - e) * 0.5
                  : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
              },
            },
            Bounce: {
              In: function (t) {
                return 1 - o.Bounce.Out(1 - t);
              },
              Out: function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
              InOut: function (t) {
                return t < 0.5
                  ? 0.5 * o.Bounce.In(2 * t)
                  : 0.5 * o.Bounce.Out(2 * t - 1) + 0.5;
              },
            },
          },
          s =
            'undefined' == typeof self &&
            'undefined' != typeof process &&
            process.hrtime
              ? function () {
                  var t = process.hrtime();
                  return 1e3 * t[0] + t[1] / 1e6;
                }
              : 'undefined' != typeof self &&
                void 0 !== self.performance &&
                void 0 !== self.performance.now
              ? self.performance.now.bind(self.performance)
              : void 0 !== Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                },
          a = (function () {
            function t() {
              (this._tweens = {}), (this._tweensAddedDuringUpdate = {});
            }
            return (
              (t.prototype.getAll = function () {
                var t = this;
                return Object.keys(this._tweens).map(function (e) {
                  return t._tweens[e];
                });
              }),
              (t.prototype.removeAll = function () {
                this._tweens = {};
              }),
              (t.prototype.add = function (t) {
                (this._tweens[t.getId()] = t),
                  (this._tweensAddedDuringUpdate[t.getId()] = t);
              }),
              (t.prototype.remove = function (t) {
                delete this._tweens[t.getId()],
                  delete this._tweensAddedDuringUpdate[t.getId()];
              }),
              (t.prototype.update = function (t, e) {
                void 0 === t && (t = s()), void 0 === e && (e = !1);
                var i = Object.keys(this._tweens);
                if (0 === i.length) return !1;
                for (; i.length > 0; ) {
                  this._tweensAddedDuringUpdate = {};
                  for (var n = 0; n < i.length; n++) {
                    var r = this._tweens[i[n]],
                      o = !e;
                    r &&
                      !1 === r.update(t, o) &&
                      !e &&
                      delete this._tweens[i[n]];
                  }
                  i = Object.keys(this._tweensAddedDuringUpdate);
                }
                return !0;
              }),
              t
            );
          })(),
          u = {
            Linear: function (t, e) {
              var i = t.length - 1,
                n = i * e,
                r = Math.floor(n),
                o = u.Utils.Linear;
              return e < 0
                ? o(t[0], t[1], n)
                : e > 1
                ? o(t[i], t[i - 1], i - n)
                : o(t[r], t[r + 1 > i ? i : r + 1], n - r);
            },
            Bezier: function (t, e) {
              for (
                var i = 0,
                  n = t.length - 1,
                  r = Math.pow,
                  o = u.Utils.Bernstein,
                  s = 0;
                s <= n;
                s++
              )
                i += r(1 - e, n - s) * r(e, s) * t[s] * o(n, s);
              return i;
            },
            CatmullRom: function (t, e) {
              var i = t.length - 1,
                n = i * e,
                r = Math.floor(n),
                o = u.Utils.CatmullRom;
              return t[0] === t[i]
                ? (e < 0 && (r = Math.floor((n = i * (1 + e)))),
                  o(
                    t[(r - 1 + i) % i],
                    t[r],
                    t[(r + 1) % i],
                    t[(r + 2) % i],
                    n - r
                  ))
                : e < 0
                ? t[0] - (o(t[0], t[0], t[1], t[1], -n) - t[0])
                : e > 1
                ? t[i] - (o(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i])
                : o(
                    t[r ? r - 1 : 0],
                    t[r],
                    t[i < r + 1 ? i : r + 1],
                    t[i < r + 2 ? i : r + 2],
                    n - r
                  );
            },
            Utils: {
              Linear: function (t, e, i) {
                return (e - t) * i + t;
              },
              Bernstein: function (t, e) {
                var i = u.Utils.Factorial;
                return i(t) / i(e) / i(t - e);
              },
              Factorial:
                ((t = [1]),
                function (e) {
                  var i = 1;
                  if (t[e]) return t[e];
                  for (var n = e; n > 1; n--) i *= n;
                  return (t[e] = i), i;
                }),
              CatmullRom: function (t, e, i, n, r) {
                var o = 0.5 * (i - t),
                  s = 0.5 * (n - e),
                  a = r * r;
                return (
                  (2 * e - 2 * i + o + s) * (r * a) +
                  (-3 * e + 3 * i - 2 * o - s) * a +
                  o * r +
                  e
                );
              },
            },
          },
          c = (function () {
            function t() {}
            return (
              (t.nextId = function () {
                return t._nextId++;
              }),
              (t._nextId = 0),
              t
            );
          })(),
          h = new a(),
          l = (function () {
            function t(t, e) {
              void 0 === e && (e = h),
                (this._object = t),
                (this._group = e),
                (this._isPaused = !1),
                (this._pauseStart = 0),
                (this._valuesStart = {}),
                (this._valuesEnd = {}),
                (this._valuesStartRepeat = {}),
                (this._duration = 1e3),
                (this._initialRepeat = 0),
                (this._repeat = 0),
                (this._yoyo = !1),
                (this._isPlaying = !1),
                (this._reversed = !1),
                (this._delayTime = 0),
                (this._startTime = 0),
                (this._easingFunction = o.Linear.None),
                (this._interpolationFunction = u.Linear),
                (this._chainedTweens = []),
                (this._onStartCallbackFired = !1),
                (this._id = c.nextId()),
                (this._isChainStopped = !1),
                (this._goToEnd = !1);
            }
            return (
              (t.prototype.getId = function () {
                return this._id;
              }),
              (t.prototype.isPlaying = function () {
                return this._isPlaying;
              }),
              (t.prototype.isPaused = function () {
                return this._isPaused;
              }),
              (t.prototype.to = function (t, e) {
                return (
                  (this._valuesEnd = Object.create(t)),
                  void 0 !== e && (this._duration = e),
                  this
                );
              }),
              (t.prototype.duration = function (t) {
                return (this._duration = t), this;
              }),
              (t.prototype.start = function (t) {
                if (this._isPlaying) return this;
                if (
                  (this._group && this._group.add(this),
                  (this._repeat = this._initialRepeat),
                  this._reversed)
                )
                  for (var e in ((this._reversed = !1),
                  this._valuesStartRepeat))
                    this._swapEndStartRepeatValues(e),
                      (this._valuesStart[e] = this._valuesStartRepeat[e]);
                return (
                  (this._isPlaying = !0),
                  (this._isPaused = !1),
                  (this._onStartCallbackFired = !1),
                  (this._isChainStopped = !1),
                  (this._startTime =
                    void 0 !== t
                      ? 'string' == typeof t
                        ? s() + parseFloat(t)
                        : t
                      : s()),
                  (this._startTime += this._delayTime),
                  this._setupProperties(
                    this._object,
                    this._valuesStart,
                    this._valuesEnd,
                    this._valuesStartRepeat
                  ),
                  this
                );
              }),
              (t.prototype._setupProperties = function (t, e, i, n) {
                for (var r in i) {
                  var o = t[r],
                    s = Array.isArray(o),
                    a = s ? 'array' : typeof o,
                    u = !s && Array.isArray(i[r]);
                  if ('undefined' !== a && 'function' !== a) {
                    if (u) {
                      var c = i[r];
                      if (0 === c.length) continue;
                      (c = c.map(this._handleRelativeValue.bind(this, o))),
                        (i[r] = [o].concat(c));
                    }
                    if (('object' !== a && !s) || !o || u)
                      void 0 === e[r] && (e[r] = o),
                        s || (e[r] *= 1),
                        (n[r] = u ? i[r].slice().reverse() : e[r] || 0);
                    else {
                      for (var h in ((e[r] = s ? [] : {}), o)) e[r][h] = o[h];
                      (n[r] = s ? [] : {}),
                        this._setupProperties(o, e[r], i[r], n[r]);
                    }
                  }
                }
              }),
              (t.prototype.stop = function () {
                return (
                  this._isChainStopped ||
                    ((this._isChainStopped = !0), this.stopChainedTweens()),
                  this._isPlaying
                    ? (this._group && this._group.remove(this),
                      (this._isPlaying = !1),
                      (this._isPaused = !1),
                      this._onStopCallback &&
                        this._onStopCallback(this._object),
                      this)
                    : this
                );
              }),
              (t.prototype.end = function () {
                return (this._goToEnd = !0), this.update(1 / 0), this;
              }),
              (t.prototype.pause = function (t) {
                return (
                  void 0 === t && (t = s()),
                  this._isPaused ||
                    !this._isPlaying ||
                    ((this._isPaused = !0),
                    (this._pauseStart = t),
                    this._group && this._group.remove(this)),
                  this
                );
              }),
              (t.prototype.resume = function (t) {
                return (
                  void 0 === t && (t = s()),
                  this._isPaused && this._isPlaying
                    ? ((this._isPaused = !1),
                      (this._startTime += t - this._pauseStart),
                      (this._pauseStart = 0),
                      this._group && this._group.add(this),
                      this)
                    : this
                );
              }),
              (t.prototype.stopChainedTweens = function () {
                for (var t = 0, e = this._chainedTweens.length; t < e; t++)
                  this._chainedTweens[t].stop();
                return this;
              }),
              (t.prototype.group = function (t) {
                return (this._group = t), this;
              }),
              (t.prototype.delay = function (t) {
                return (this._delayTime = t), this;
              }),
              (t.prototype.repeat = function (t) {
                return (this._initialRepeat = t), (this._repeat = t), this;
              }),
              (t.prototype.repeatDelay = function (t) {
                return (this._repeatDelayTime = t), this;
              }),
              (t.prototype.yoyo = function (t) {
                return (this._yoyo = t), this;
              }),
              (t.prototype.easing = function (t) {
                return (this._easingFunction = t), this;
              }),
              (t.prototype.interpolation = function (t) {
                return (this._interpolationFunction = t), this;
              }),
              (t.prototype.chain = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return (this._chainedTweens = t), this;
              }),
              (t.prototype.onStart = function (t) {
                return (this._onStartCallback = t), this;
              }),
              (t.prototype.onUpdate = function (t) {
                return (this._onUpdateCallback = t), this;
              }),
              (t.prototype.onRepeat = function (t) {
                return (this._onRepeatCallback = t), this;
              }),
              (t.prototype.onComplete = function (t) {
                return (this._onCompleteCallback = t), this;
              }),
              (t.prototype.onStop = function (t) {
                return (this._onStopCallback = t), this;
              }),
              (t.prototype.update = function (t, e) {
                if (
                  (void 0 === t && (t = s()),
                  void 0 === e && (e = !0),
                  this._isPaused)
                )
                  return !0;
                var i,
                  n,
                  r = this._startTime + this._duration;
                if (!this._goToEnd && !this._isPlaying) {
                  if (t > r) return !1;
                  e && this.start(t);
                }
                if (((this._goToEnd = !1), t < this._startTime)) return !0;
                !1 === this._onStartCallbackFired &&
                  (this._onStartCallback && this._onStartCallback(this._object),
                  (this._onStartCallbackFired = !0)),
                  (n = (t - this._startTime) / this._duration),
                  (n = 0 === this._duration || n > 1 ? 1 : n);
                var o = this._easingFunction(n);
                if (
                  (this._updateProperties(
                    this._object,
                    this._valuesStart,
                    this._valuesEnd,
                    o
                  ),
                  this._onUpdateCallback &&
                    this._onUpdateCallback(this._object, n),
                  1 === n)
                ) {
                  if (this._repeat > 0) {
                    for (i in (isFinite(this._repeat) && this._repeat--,
                    this._valuesStartRepeat))
                      this._yoyo ||
                        'string' != typeof this._valuesEnd[i] ||
                        (this._valuesStartRepeat[i] =
                          this._valuesStartRepeat[i] +
                          parseFloat(this._valuesEnd[i])),
                        this._yoyo && this._swapEndStartRepeatValues(i),
                        (this._valuesStart[i] = this._valuesStartRepeat[i]);
                    return (
                      this._yoyo && (this._reversed = !this._reversed),
                      void 0 !== this._repeatDelayTime
                        ? (this._startTime = t + this._repeatDelayTime)
                        : (this._startTime = t + this._delayTime),
                      this._onRepeatCallback &&
                        this._onRepeatCallback(this._object),
                      !0
                    );
                  }
                  this._onCompleteCallback &&
                    this._onCompleteCallback(this._object);
                  for (var a = 0, u = this._chainedTweens.length; a < u; a++)
                    this._chainedTweens[a].start(
                      this._startTime + this._duration
                    );
                  return (this._isPlaying = !1), !1;
                }
                return !0;
              }),
              (t.prototype._updateProperties = function (t, e, i, n) {
                for (var r in i)
                  if (void 0 !== e[r]) {
                    var o = e[r] || 0,
                      s = i[r],
                      a = Array.isArray(t[r]),
                      u = Array.isArray(s);
                    !a && u
                      ? (t[r] = this._interpolationFunction(s, n))
                      : 'object' == typeof s && s
                      ? this._updateProperties(t[r], o, s, n)
                      : 'number' ==
                          typeof (s = this._handleRelativeValue(o, s)) &&
                        (t[r] = o + (s - o) * n);
                  }
              }),
              (t.prototype._handleRelativeValue = function (t, e) {
                return 'string' != typeof e
                  ? e
                  : '+' === e.charAt(0) || '-' === e.charAt(0)
                  ? t + parseFloat(e)
                  : parseFloat(e);
              }),
              (t.prototype._swapEndStartRepeatValues = function (t) {
                var e = this._valuesStartRepeat[t],
                  i = this._valuesEnd[t];
                (this._valuesStartRepeat[t] =
                  'string' == typeof i
                    ? this._valuesStartRepeat[t] + parseFloat(i)
                    : this._valuesEnd[t]),
                  (this._valuesEnd[t] = e);
              }),
              t
            );
          })(),
          p = c.nextId,
          d = h,
          f = d.getAll.bind(d),
          v = d.removeAll.bind(d),
          y = d.add.bind(d),
          m = d.remove.bind(d),
          b = d.update.bind(d);
        const g = {
          Easing: o,
          Group: a,
          Interpolation: u,
          now: s,
          Sequence: c,
          nextId: p,
          Tween: l,
          VERSION: '18.6.4',
          getAll: f,
          removeAll: v,
          add: y,
          remove: m,
          update: b,
        };
        var w = (function () {
            if ('undefined' != typeof Map) return Map;
            function t(t, e) {
              var i = -1;
              return (
                t.some(function (t, n) {
                  return t[0] === e && ((i = n), !0);
                }),
                i
              );
            }
            return (function () {
              function e() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(e.prototype, 'size', {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.get = function (e) {
                  var i = t(this.__entries__, e),
                    n = this.__entries__[i];
                  return n && n[1];
                }),
                (e.prototype.set = function (e, i) {
                  var n = t(this.__entries__, e);
                  ~n
                    ? (this.__entries__[n][1] = i)
                    : this.__entries__.push([e, i]);
                }),
                (e.prototype.delete = function (e) {
                  var i = this.__entries__,
                    n = t(i, e);
                  ~n && i.splice(n, 1);
                }),
                (e.prototype.has = function (e) {
                  return !!~t(this.__entries__, e);
                }),
                (e.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (e.prototype.forEach = function (t, e) {
                  void 0 === e && (e = null);
                  for (var i = 0, n = this.__entries__; i < n.length; i++) {
                    var r = n[i];
                    t.call(e, r[1], r[0]);
                  }
                }),
                e
              );
            })();
          })(),
          _ =
            'undefined' != typeof window &&
            'undefined' != typeof document &&
            window.document === document,
          S =
            void 0 !== n.g && n.g.Math === Math
              ? n.g
              : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
              ? window
              : Function('return this')(),
          O =
            'function' == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(S)
              : function (t) {
                  return setTimeout(function () {
                    return t(Date.now());
                  }, 1e3 / 60);
                },
          T = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          k = 'undefined' != typeof MutationObserver,
          x = (function () {
            function t() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (t, e) {
                  var i = !1,
                    n = !1,
                    r = 0;
                  function o() {
                    i && ((i = !1), t()), n && a();
                  }
                  function s() {
                    O(o);
                  }
                  function a() {
                    var t = Date.now();
                    if (i) {
                      if (t - r < 2) return;
                      n = !0;
                    } else (i = !0), (n = !1), setTimeout(s, 20);
                    r = t;
                  }
                  return a;
                })(this.refresh.bind(this)));
            }
            return (
              (t.prototype.addObserver = function (t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t),
                  this.connected_ || this.connect_();
              }),
              (t.prototype.removeObserver = function (t) {
                var e = this.observers_,
                  i = e.indexOf(t);
                ~i && e.splice(i, 1),
                  !e.length && this.connected_ && this.disconnect_();
              }),
              (t.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (t.prototype.updateObservers_ = function () {
                var t = this.observers_.filter(function (t) {
                  return t.gatherActive(), t.hasActive();
                });
                return (
                  t.forEach(function (t) {
                    return t.broadcastActive();
                  }),
                  t.length > 0
                );
              }),
              (t.prototype.connect_ = function () {
                _ &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_
                  ),
                  window.addEventListener('resize', this.refresh),
                  k
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        'DOMSubtreeModified',
                        this.refresh
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (t.prototype.disconnect_ = function () {
                _ &&
                  this.connected_ &&
                  (document.removeEventListener(
                    'transitionend',
                    this.onTransitionEnd_
                  ),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      'DOMSubtreeModified',
                      this.refresh
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (t.prototype.onTransitionEnd_ = function (t) {
                var e = t.propertyName,
                  i = void 0 === e ? '' : e;
                T.some(function (t) {
                  return !!~i.indexOf(t);
                }) && this.refresh();
              }),
              (t.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new t()), this.instance_
                );
              }),
              (t.instance_ = null),
              t
            );
          })(),
          E = function (t, e) {
            for (var i = 0, n = Object.keys(e); i < n.length; i++) {
              var r = n[i];
              Object.defineProperty(t, r, {
                value: e[r],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return t;
          },
          C = function (t) {
            return (t && t.ownerDocument && t.ownerDocument.defaultView) || S;
          },
          M = A(0, 0, 0, 0);
        function j(t) {
          return parseFloat(t) || 0;
        }
        function P(t) {
          for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
          return e.reduce(function (e, i) {
            return e + j(t['border-' + i + '-width']);
          }, 0);
        }
        var I =
          'undefined' != typeof SVGGraphicsElement
            ? function (t) {
                return t instanceof C(t).SVGGraphicsElement;
              }
            : function (t) {
                return (
                  t instanceof C(t).SVGElement && 'function' == typeof t.getBBox
                );
              };
        function R(t) {
          return _
            ? I(t)
              ? (function (t) {
                  var e = t.getBBox();
                  return A(0, 0, e.width, e.height);
                })(t)
              : (function (t) {
                  var e = t.clientWidth,
                    i = t.clientHeight;
                  if (!e && !i) return M;
                  var n = C(t).getComputedStyle(t),
                    r = (function (t) {
                      for (
                        var e = {},
                          i = 0,
                          n = ['top', 'right', 'bottom', 'left'];
                        i < n.length;
                        i++
                      ) {
                        var r = n[i],
                          o = t['padding-' + r];
                        e[r] = j(o);
                      }
                      return e;
                    })(n),
                    o = r.left + r.right,
                    s = r.top + r.bottom,
                    a = j(n.width),
                    u = j(n.height);
                  if (
                    ('border-box' === n.boxSizing &&
                      (Math.round(a + o) !== e &&
                        (a -= P(n, 'left', 'right') + o),
                      Math.round(u + s) !== i &&
                        (u -= P(n, 'top', 'bottom') + s)),
                    !(function (t) {
                      return t === C(t).document.documentElement;
                    })(t))
                  ) {
                    var c = Math.round(a + o) - e,
                      h = Math.round(u + s) - i;
                    1 !== Math.abs(c) && (a -= c),
                      1 !== Math.abs(h) && (u -= h);
                  }
                  return A(r.left, r.top, a, u);
                })(t)
            : M;
        }
        function A(t, e, i, n) {
          return { x: t, y: e, width: i, height: n };
        }
        var z = (function () {
            function t(t) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = A(0, 0, 0, 0)),
                (this.target = t);
            }
            return (
              (t.prototype.isActive = function () {
                var t = R(this.target);
                return (
                  (this.contentRect_ = t),
                  t.width !== this.broadcastWidth ||
                    t.height !== this.broadcastHeight
                );
              }),
              (t.prototype.broadcastRect = function () {
                var t = this.contentRect_;
                return (
                  (this.broadcastWidth = t.width),
                  (this.broadcastHeight = t.height),
                  t
                );
              }),
              t
            );
          })(),
          W = function (t, e) {
            var i,
              n,
              r,
              o,
              s,
              a,
              u,
              c =
                ((n = (i = e).x),
                (r = i.y),
                (o = i.width),
                (s = i.height),
                (a =
                  'undefined' != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object),
                (u = Object.create(a.prototype)),
                E(u, {
                  x: n,
                  y: r,
                  width: o,
                  height: s,
                  top: r,
                  right: n + o,
                  bottom: s + r,
                  left: n,
                }),
                u);
            E(this, { target: t, contentRect: c });
          },
          D = (function () {
            function t(t, e, i) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new w()),
                'function' != typeof t)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.'
                );
              (this.callback_ = t),
                (this.controller_ = e),
                (this.callbackCtx_ = i);
            }
            return (
              (t.prototype.observe = function (t) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.'
                  );
                if (
                  'undefined' != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(t instanceof C(t).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var e = this.observations_;
                  e.has(t) ||
                    (e.set(t, new z(t)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (t.prototype.unobserve = function (t) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.'
                  );
                if (
                  'undefined' != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(t instanceof C(t).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var e = this.observations_;
                  e.has(t) &&
                    (e.delete(t),
                    e.size || this.controller_.removeObserver(this));
                }
              }),
              (t.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (t.prototype.gatherActive = function () {
                var t = this;
                this.clearActive(),
                  this.observations_.forEach(function (e) {
                    e.isActive() && t.activeObservations_.push(e);
                  });
              }),
              (t.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var t = this.callbackCtx_,
                    e = this.activeObservations_.map(function (t) {
                      return new W(t.target, t.broadcastRect());
                    });
                  this.callback_.call(t, e, t), this.clearActive();
                }
              }),
              (t.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (t.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              t
            );
          })(),
          N = 'undefined' != typeof WeakMap ? new WeakMap() : new w(),
          F = function t(e) {
            if (!(this instanceof t))
              throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            var i = x.getInstance(),
              n = new D(e, i, this);
            N.set(this, n);
          };
        ['observe', 'unobserve', 'disconnect'].forEach(function (t) {
          F.prototype[t] = function () {
            var e;
            return (e = N.get(this))[t].apply(e, arguments);
          };
        });
        const U = void 0 !== S.ResizeObserver ? S.ResizeObserver : F;
        function G(t) {
          return (
            (G =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            G(t)
          );
        }
        function B(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              i.push.apply(i, n);
          }
          return i;
        }
        function X(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        var L = {
            duration: 5e3,
            transitionDuration: 1e3,
            defaultIndex: 0,
            infinite: !0,
            autoplay: !0,
            indicators: !1,
            arrows: !0,
            pauseOnHover: !0,
            scale: 1,
            easing: 'linear',
            canSwipe: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssClass: '',
            responsive: [],
          },
          q = function (t) {
            var e,
              n = i().Children.map(t.children, function (t) {
                return t;
              }),
              r = {};
            if ('undefined' != typeof window && Array.isArray(t.responsive)) {
              var o =
                ((e = window.innerWidth),
                t.responsive.find(function (t) {
                  return t.breakpoint <= e;
                }));
              o && (r = o.settings);
            }
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? B(i, !0).forEach(function (e) {
                      X(t, e, i[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(i)
                    )
                  : B(i).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(i, e)
                      );
                    });
              }
              return t;
            })({}, L, {}, t, {}, r, { children: n });
          },
          H = {
            duration: 'number',
            transitionDuration: 'number',
            defaultIndex: 'number',
            infinite: 'boolean',
            indicators: ['boolean', 'function'],
            autoplay: 'boolean',
            arrows: 'boolean',
            onChange: 'function',
            pauseOnHover: 'boolean',
            prevArrow: ['object', 'function'],
            nextArrow: ['object', 'function'],
            scale: 'number',
            easing: 'string',
            canSwipe: 'boolean',
            slidesToShow: 'number',
            slidesToScroll: 'number',
            cssClass: 'string',
            responsive: 'array',
          },
          V = function (t) {
            for (var e in t) {
              var i = G(t[e]);
              H[e] &&
                (Array.isArray(H[e]) && !H[e].includes(i)
                  ? console.warn(
                      ''
                        .concat(e, ' must be of one of type ')
                        .concat(H[e].join(', '))
                    )
                  : (('array' !== H[e] || Array.isArray(t[e])) &&
                      ('array' === H[e] ||
                        Array.isArray(H[e]) ||
                        i === H[e])) ||
                    console.warn(
                      ''.concat(e, ' must be of type ').concat(H[e])
                    ));
            }
          };
        function Q() {
          return (
            (Q =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                }
                return t;
              }),
            Q.apply(this, arguments)
          );
        }
        function Z(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              i.push.apply(i, n);
          }
          return i;
        }
        function J(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Z(i, !0).forEach(function (e) {
                  K(t, e, i[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : Z(i).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e)
                  );
                });
          }
          return t;
        }
        function K(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        var Y = {
            linear: g.Easing.Linear.None,
            ease: g.Easing.Quadratic.InOut,
            'ease-in': g.Easing.Quadratic.In,
            'ease-out': g.Easing.Quadratic.Out,
            cubic: g.Easing.Cubic.InOut,
            'cubic-in': g.Easing.Cubic.In,
            'cubic-out': g.Easing.Cubic.Out,
          },
          $ = function (t) {
            return Y[t] || Y.linear;
          },
          tt = function (t, e) {
            var i = Object.keys(t);
            return Object.keys(e).reduce(function (t, n) {
              return -1 === i.indexOf(n) && (t[n] = e[n]), t;
            }, {});
          },
          et = function (t, e, n) {
            var r = t.prevArrow,
              o = t.infinite,
              s = e <= 0 && !o,
              a = {
                'data-type': 'prev',
                'aria-label': 'Previous Slide',
                disabled: s,
                onClick: n,
              };
            if (r)
              return i().cloneElement(
                r,
                J(
                  {
                    className: ''
                      .concat(r.props.className, ' nav ')
                      .concat(s ? 'disabled' : ''),
                  },
                  a
                )
              );
            var u = 'nav default-nav '.concat(s ? 'disabled' : '');
            return i().createElement(
              'button',
              Q({ className: u }, a),
              i().createElement(
                'svg',
                { width: '24', height: '24', viewBox: '0 0 24 24' },
                i().createElement('path', {
                  d: 'M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z',
                })
              )
            );
          },
          it = function (t, e, n) {
            var r = t.nextArrow,
              o = t.infinite,
              s = t.children,
              a = t.slidesToScroll,
              u = e >= s.length - a && !o,
              c = {
                'data-type': 'next',
                'aria-label': 'Next Slide',
                disabled: u,
                onClick: n,
              };
            if (r)
              return i().cloneElement(
                r,
                J(
                  {
                    className: ''
                      .concat(r.props.className, ' nav ')
                      .concat(u ? 'disabled' : ''),
                  },
                  c
                )
              );
            var h = 'nav default-nav '.concat(u ? 'disabled' : '');
            return i().createElement(
              'button',
              Q({ className: h }, c),
              i().createElement(
                'svg',
                { width: '24', height: '24', viewBox: '0 0 24 24' },
                i().createElement('path', {
                  d: 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z',
                })
              )
            );
          },
          nt = function (t, e, n) {
            var r = t.children,
              o = t.indicators,
              s = t.slidesToScroll,
              a = 'boolean' != typeof o,
              u = Math.ceil(r.length / s);
            return i().createElement(
              'ul',
              { className: 'indicators' },
              Array.from({ length: u }, function (t, r) {
                var u = {
                    'data-key': r,
                    'aria-label': 'Go to slide '.concat(r + 1),
                    onClick: n,
                  },
                  c = Math.floor((e + s - 1) / s) === r;
                return a
                  ? (function (t, e, n, r) {
                      return i().cloneElement(
                        r,
                        J(
                          {
                            className: ''
                              .concat(r.props.className, ' ')
                              .concat(t ? 'active' : ''),
                            key: e,
                          },
                          n
                        )
                      );
                    })(c, r, u, o(r))
                  : (function (t, e, n) {
                      return i().createElement(
                        'li',
                        { key: e },
                        i().createElement(
                          'button',
                          Q(
                            {
                              className: 'each-slideshow-indicator '.concat(
                                t ? 'active' : ''
                              ),
                            },
                            n
                          )
                        )
                      );
                    })(c, r, u);
              })
            );
          };
        function rt(t) {
          return (
            (rt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            rt(t)
          );
        }
        function ot() {
          return (
            (ot =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                }
                return t;
              }),
            ot.apply(this, arguments)
          );
        }
        function st(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function at(t) {
          return (
            (at = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            at(t)
          );
        }
        function ut(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ct(t, e) {
          return (
            (ct =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            ct(t, e)
          );
        }
        const ht = (function (t) {
          function n(t) {
            var i;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              ((i = (function (t, e) {
                return !e || ('object' !== rt(e) && 'function' != typeof e)
                  ? ut(t)
                  : e;
              })(this, at(n).call(this))).state = {
                slidesToShow: t.slidesToShow || 1,
                index:
                  t.defaultIndex && t.defaultIndex < t.children.length
                    ? t.defaultIndex
                    : 0,
              }),
              (i.width = 0),
              (i.dragging = !1),
              (i.imageContainer = null),
              (i.wrapper = null),
              (i.timeout = null),
              (i.moveSlides = i.moveSlides.bind(ut(i))),
              (i.pauseSlides = i.pauseSlides.bind(ut(i))),
              (i.startSlides = i.startSlides.bind(ut(i))),
              (i.handleResize = i.handleResize.bind(ut(i))),
              (i.initResizeObserver = i.initResizeObserver.bind(ut(i))),
              (i.reactSlideshowWrapper = (0, e.createRef)()),
              (i.goToSlide = i.goToSlide.bind(ut(i))),
              (i.tweenGroup = new g.Group()),
              (i.startSwipe = i.startSwipe.bind(ut(i))),
              (i.endSwipe = i.endSwipe.bind(ut(i))),
              (i.swipe = i.swipe.bind(ut(i))),
              (i.distanceSwiped = 0),
              i
            );
          }
          var r, o;
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && ct(t, e);
            })(n, t),
            (r = n),
            (o = [
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this;
                  this.setWidth(), this.initResizeObserver(), V(this.props);
                  var e = q(this.props),
                    i = e.autoplay,
                    n = e.duration;
                  i &&
                    (this.timeout = setTimeout(function () {
                      return t.goNext();
                    }, n));
                },
              },
              {
                key: 'initResizeObserver',
                value: function () {
                  var t = this;
                  (this.resizeObserver = new U(function (e) {
                    e && t.handleResize();
                  })),
                    this.reactSlideshowWrapper.current &&
                      this.resizeObserver.observe(
                        this.reactSlideshowWrapper.current
                      );
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.tweenGroup.removeAll(),
                    clearTimeout(this.timeout),
                    this.removeResizeObserver();
                },
              },
              {
                key: 'startSwipe',
                value: function (t) {
                  q(this.props).canSwipe &&
                    ((this.startingClientX = t.touches
                      ? t.touches[0].pageX
                      : t.clientX),
                    clearTimeout(this.timeout),
                    (this.dragging = !0));
                },
              },
              {
                key: 'endSwipe',
                value: function () {
                  q(this.props).canSwipe &&
                    ((this.dragging = !1),
                    Math.abs(this.distanceSwiped) / this.width > 0.2
                      ? this.distanceSwiped < 0
                        ? this.goNext()
                        : this.goBack()
                      : Math.abs(this.distanceSwiped) > 0 &&
                        this.slideImages(this.state.index, 300));
                },
              },
              {
                key: 'swipe',
                value: function (t) {
                  var e = q(this.props),
                    i = e.canSwipe,
                    n = e.slidesToShow,
                    r = e.children,
                    o = e.infinite,
                    s = e.slidesToScroll;
                  if (i) {
                    var a = t.touches ? t.touches[0].pageX : t.clientX;
                    if (this.dragging) {
                      var u =
                          this.width *
                          (this.state.index + this.getOffset(o, n)),
                        c = a - this.startingClientX;
                      if (!o && this.state.index === r.length - s && c < 0)
                        return;
                      if (!o && 0 === this.state.index && c > 0) return;
                      (this.distanceSwiped = c),
                        (u -= this.distanceSwiped),
                        (this.imageContainer.style.transform =
                          'translate(-'.concat(u, 'px)'));
                    }
                  }
                },
              },
              {
                key: 'removeResizeObserver',
                value: function () {
                  this.resizeObserver &&
                    this.reactSlideshowWrapper &&
                    this.reactSlideshowWrapper.current &&
                    this.resizeObserver.unobserve(
                      this.reactSlideshowWrapper.current
                    );
                },
              },
              {
                key: 'setWidth',
                value: function () {
                  this.allImages =
                    (this.wrapper &&
                      Array.prototype.slice.call(
                        this.wrapper.querySelectorAll('.images-wrap > div'),
                        0
                      )) ||
                    [];
                  var t = q(this.props),
                    e = t.slidesToShow,
                    n = t.infinite;
                  this.state.slidesToShow !== e &&
                    this.setState({ slidesToShow: e, index: 0 }),
                    (this.width =
                      ((this.wrapper && this.wrapper.clientWidth) || 0) / e);
                  var r = i().Children.count(this.props.children),
                    o = this.width * (r + 2 * e);
                  this.imageContainer &&
                    ((this.imageContainer.style.width = ''.concat(o, 'px')),
                    (this.imageContainer.style.transform = 'translate(-'.concat(
                      this.width * (this.state.index + this.getOffset(n, e)),
                      'px)'
                    ))),
                    this.applySlideStyle();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var e = this,
                    i = q(this.props),
                    n = i.autoplay,
                    r = i.duration,
                    o = i.children,
                    s = q(t);
                  n !== s.autoplay &&
                    (n
                      ? (this.timeout = setTimeout(function () {
                          return e.goNext();
                        }, r))
                      : clearTimeout(this.timeout)),
                    o.length != s.children.length &&
                      (this.setWidth(),
                      clearTimeout(this.timeout),
                      (this.timeout = setTimeout(function () {
                        return e.goNext();
                      }, r)));
                },
              },
              {
                key: 'handleResize',
                value: function () {
                  this.setWidth();
                },
              },
              {
                key: 'applySlideStyle',
                value: function () {
                  var t = this;
                  this.allImages.forEach(function (e, i) {
                    (e.style.width = ''.concat(t.width, 'px')),
                      (e.style.display = 'block');
                  });
                },
              },
              {
                key: 'pauseSlides',
                value: function () {
                  q(this.props).pauseOnHover && clearTimeout(this.timeout);
                },
              },
              {
                key: 'startSlides',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    i = e.pauseOnHover,
                    n = e.autoplay,
                    r = e.duration;
                  this.dragging
                    ? this.endSwipe()
                    : i &&
                      n &&
                      (this.timeout = setTimeout(function () {
                        return t.goNext();
                      }, r));
                },
              },
              {
                key: 'moveSlides',
                value: function (t) {
                  'next' === t.currentTarget.dataset.type
                    ? this.goNext()
                    : this.goBack();
                },
              },
              {
                key: 'goToSlide',
                value: function (t) {
                  var e = t.currentTarget,
                    i = q(this.props).slidesToScroll;
                  this.goTo(parseInt(e.dataset.key * i));
                },
              },
              {
                key: 'goTo',
                value: function (t) {
                  this.slideImages(this.calculateIndex(t));
                },
              },
              {
                key: 'calculateIndex',
                value: function (t) {
                  var e = q(this.props),
                    i = e.children,
                    n = e.slidesToScroll;
                  return t < i.length && t + n > i.length && (i.length - n) % n
                    ? i.length - n
                    : t;
                },
              },
              {
                key: 'goNext',
                value: function () {
                  var t = this.state.index,
                    e = q(this.props),
                    i = e.children,
                    n = e.infinite,
                    r = e.slidesToScroll;
                  if (n || t !== i.length - r) {
                    var o = this.calculateIndex(t + r);
                    this.slideImages(o);
                  }
                },
              },
              {
                key: 'goBack',
                value: function () {
                  var t = this.state.index,
                    e = q(this.props),
                    i = e.infinite,
                    n = e.slidesToScroll;
                  if (i || 0 !== t) {
                    var r = t - n;
                    r % n && (r = Math.ceil(r / n) * n), this.slideImages(r);
                  }
                },
              },
              {
                key: 'isSlideActive',
                value: function (t) {
                  var e = q(this.props).slidesToShow;
                  return t < this.state.index + e && t >= this.state.index;
                },
              },
              {
                key: 'renderPreceedingSlides',
                value: function (t, e) {
                  return t.slice(-e).map(function (t, n) {
                    return i().createElement(
                      'div',
                      {
                        'data-index': n - e,
                        'aria-roledescription': 'slide',
                        'aria-hidden': 'true',
                        key: n - e,
                      },
                      t
                    );
                  });
                },
              },
              {
                key: 'renderTrailingSlides',
                value: function () {
                  var t = q(this.props),
                    e = t.children,
                    n = t.slidesToShow,
                    r = t.slidesToScroll;
                  if (t.infinite || n !== r)
                    return e.slice(0, n).map(function (t, n) {
                      return i().createElement(
                        'div',
                        {
                          'data-index': e.length + n,
                          'aria-roledescription': 'slide',
                          'aria-hidden': 'true',
                          key: e.length + n,
                        },
                        t
                      );
                    });
                },
              },
              {
                key: 'getOffset',
                value: function (t, e) {
                  return t ? e : 0;
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    n = e.children,
                    r = e.indicators,
                    o = e.arrows,
                    s = e.cssClass,
                    a = e.slidesToShow,
                    u = e.infinite,
                    c = tt(H, this.props),
                    h = this.state.index,
                    l = {
                      transform: 'translate(-'.concat(
                        (h + this.getOffset(u, a)) * this.width,
                        'px)'
                      ),
                    };
                  return i().createElement(
                    'div',
                    ot({ dir: 'ltr', 'aria-roledescription': 'carousel' }, c),
                    i().createElement(
                      'div',
                      {
                        className: 'react-slideshow-container',
                        onMouseEnter: this.pauseSlides,
                        onMouseOver: this.pauseSlides,
                        onMouseLeave: this.startSlides,
                        onMouseDown: this.startSwipe,
                        onMouseUp: this.endSwipe,
                        onMouseMove: this.swipe,
                        onTouchStart: this.startSwipe,
                        onTouchEnd: this.endSwipe,
                        onTouchCancel: this.endSwipe,
                        onTouchMove: this.swipe,
                        ref: this.reactSlideshowWrapper,
                      },
                      o && et(q(this.props), this.state.index, this.moveSlides),
                      i().createElement(
                        'div',
                        {
                          className: 'react-slideshow-wrapper slide '.concat(s),
                          ref: function (e) {
                            return (t.wrapper = e);
                          },
                        },
                        i().createElement(
                          'div',
                          {
                            className: 'images-wrap',
                            style: l,
                            ref: function (e) {
                              return (t.imageContainer = e);
                            },
                          },
                          u ? this.renderPreceedingSlides(n, a) : '',
                          n.map(function (e, n) {
                            var r = t.isSlideActive(n);
                            return i().createElement(
                              'div',
                              {
                                'data-index': n,
                                key: n,
                                className: r ? 'active' : '',
                                'aria-roledescription': 'slide',
                                'aria-hidden': r ? 'false' : 'true',
                              },
                              e
                            );
                          }),
                          this.renderTrailingSlides()
                        )
                      ),
                      o && it(q(this.props), this.state.index, this.moveSlides)
                    ),
                    r && nt(q(this.props), this.state.index, this.goToSlide)
                  );
                },
              },
              {
                key: 'slideImages',
                value: function (t, e) {
                  var i = this,
                    n = q(this.props),
                    r = n.children,
                    o = n.transitionDuration,
                    s = n.autoplay,
                    a = n.infinite,
                    u = n.duration,
                    c = n.onChange,
                    h = n.easing,
                    l = n.slidesToShow,
                    p = n.slidesToScroll;
                  if (((o = e || o), !this.tweenGroup.getAll().length)) {
                    clearTimeout(this.timeout);
                    var d = {
                        margin:
                          -this.width *
                            (this.state.index + this.getOffset(a, l)) +
                          this.distanceSwiped,
                      },
                      f = new g.Tween(d, this.tweenGroup)
                        .to(
                          { margin: -this.width * (t + this.getOffset(a, l)) },
                          o
                        )
                        .onUpdate(function (t) {
                          i.imageContainer &&
                            (i.imageContainer.style.transform =
                              'translate('.concat(t.margin, 'px)'));
                        })
                        .start();
                    f.easing($(h)),
                      (function t() {
                        requestAnimationFrame(t), i.tweenGroup.update();
                      })(),
                      f.onComplete(function () {
                        i.distanceSwiped = 0;
                        var e = t;
                        e < 0 ? (e = r.length - p) : e >= r.length && (e = 0),
                          'function' == typeof c && c(i.state.index, e),
                          i.setState({ index: e }, function () {
                            s &&
                              (a || i.state.index < r.length) &&
                              (clearTimeout(i.timeout),
                              (i.timeout = setTimeout(function () {
                                return i.goNext();
                              }, u)));
                          });
                      });
                  }
                },
              },
            ]) && st(r.prototype, o),
            n
          );
        })(e.Component);
        function lt(t) {
          return (
            (lt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            lt(t)
          );
        }
        function pt() {
          return (
            (pt =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                }
                return t;
              }),
            pt.apply(this, arguments)
          );
        }
        function dt(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function ft(t) {
          return (
            (ft = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ft(t)
          );
        }
        function vt(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function yt(t, e) {
          return (
            (yt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            yt(t, e)
          );
        }
        const mt = (function (t) {
          function n(t) {
            var i;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              ((i = (function (t, e) {
                return !e || ('object' !== lt(e) && 'function' != typeof e)
                  ? vt(t)
                  : e;
              })(this, ft(n).call(this))).state = {
                index:
                  t.defaultIndex && t.defaultIndex < t.children.length
                    ? t.defaultIndex
                    : 0,
              }),
              (i.width = 0),
              (i.timeout = null),
              (i.divsContainer = null),
              (i.wrapper = null),
              (i.setWidth = i.setWidth.bind(vt(i))),
              (i.handleResize = i.handleResize.bind(vt(i))),
              (i.navigate = i.navigate.bind(vt(i))),
              (i.preFade = i.preFade.bind(vt(i))),
              (i.pauseSlides = i.pauseSlides.bind(vt(i))),
              (i.startSlides = i.startSlides.bind(vt(i))),
              (i.initResizeObserver = i.initResizeObserver.bind(vt(i))),
              (i.tweenGroup = new g.Group()),
              (i.reactSlideshowWrapper = (0, e.createRef)()),
              (i.wrapper = (0, e.createRef)()),
              (i.startSwipe = i.startSwipe.bind(vt(i))),
              (i.endSwipe = i.endSwipe.bind(vt(i))),
              i
            );
          }
          var r, o;
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && yt(t, e);
            })(n, t),
            (r = n),
            (o = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.setWidth(),
                    this.play(),
                    this.initResizeObserver(),
                    V(this.props);
                },
              },
              {
                key: 'initResizeObserver',
                value: function () {
                  var t = this;
                  this.reactSlideshowWrapper.current &&
                    ((this.resizeObserver = new U(function (e) {
                      e && t.handleResize();
                    })),
                    this.resizeObserver.observe(
                      this.reactSlideshowWrapper.current
                    ));
                },
              },
              {
                key: 'play',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    i = e.autoplay,
                    n = e.children,
                    r = e.duration,
                    o = this.state.index;
                  i &&
                    n.length > 1 &&
                    (clearTimeout(this.timeout),
                    (this.timeout = setTimeout(function () {
                      return t.fadeImages(o + 1);
                    }, r)));
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var e = q(this.props),
                    i = e.autoplay,
                    n = e.children,
                    r = q(t);
                  i !== r.autoplay &&
                    (i ? this.play() : clearTimeout(this.timeout)),
                    n.length != r.children.length &&
                      (this.applyStyle(),
                      clearTimeout(this.timeout),
                      this.play());
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.tweenGroup.removeAll(),
                    clearTimeout(this.timeout),
                    this.removeResizeObserver();
                },
              },
              {
                key: 'removeResizeObserver',
                value: function () {
                  this.resizeObserver &&
                    this.reactSlideshowWrapper &&
                    this.reactSlideshowWrapper.current &&
                    this.resizeObserver.unobserve(
                      this.reactSlideshowWrapper.current
                    );
                },
              },
              {
                key: 'setWidth',
                value: function () {
                  this.wrapper.current &&
                    (this.width = this.wrapper.current.clientWidth),
                    this.applyStyle();
                },
              },
              {
                key: 'handleResize',
                value: function () {
                  this.setWidth();
                },
              },
              {
                key: 'applyStyle',
                value: function () {
                  var t = this.width * i().Children.count(this.props.children);
                  if (this.divsContainer) {
                    this.divsContainer.style.width = ''.concat(t, 'px');
                    for (
                      var e = 0;
                      e < this.divsContainer.children.length;
                      e++
                    ) {
                      var n = this.divsContainer.children[e];
                      n &&
                        ((n.style.width = ''.concat(this.width, 'px')),
                        (n.style.left = ''.concat(e * -this.width, 'px')),
                        (n.style.display = 'block'));
                    }
                  }
                },
              },
              {
                key: 'pauseSlides',
                value: function () {
                  q(this.props).pauseOnHover && clearTimeout(this.timeout);
                },
              },
              {
                key: 'startSlides',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    i = e.pauseOnHover,
                    n = e.autoplay,
                    r = e.duration;
                  i &&
                    n &&
                    (this.timeout = setTimeout(function () {
                      return t.goNext();
                    }, r));
                },
              },
              {
                key: 'goNext',
                value: function () {
                  var t = this.state.index,
                    e = q(this.props),
                    i = e.children;
                  (e.infinite || t !== i.length - 1) &&
                    this.fadeImages((t + 1) % i.length);
                },
              },
              {
                key: 'goBack',
                value: function () {
                  var t = this.state.index,
                    e = q(this.props),
                    i = e.children;
                  (e.infinite || 0 !== t) &&
                    this.fadeImages(0 === t ? i.length - 1 : t - 1);
                },
              },
              {
                key: 'navigate',
                value: function (t) {
                  var e = t.currentTarget.dataset;
                  e.key != this.state.index && this.goTo(parseInt(e.key));
                },
              },
              {
                key: 'goTo',
                value: function (t) {
                  this.fadeImages(t);
                },
              },
              {
                key: 'preFade',
                value: function (t) {
                  'prev' === t.currentTarget.dataset.type
                    ? this.goBack()
                    : this.goNext();
                },
              },
              {
                key: 'startSwipe',
                value: function (t) {
                  q(this.props).canSwipe &&
                    ((this.startingClientX = t.touches
                      ? t.touches[0].pageX
                      : t.clientX),
                    clearTimeout(this.timeout),
                    (this.dragging = !0));
                },
              },
              {
                key: 'endSwipe',
                value: function (t) {
                  var e =
                    (t.changedTouches ? t.changedTouches[0].pageX : t.clientX) -
                    this.startingClientX;
                  q(this.props).canSwipe &&
                    ((this.dragging = !1),
                    Math.abs(e) / this.width > 0.2 &&
                      (e < 0 ? this.goNext() : this.goBack()));
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    n = e.indicators,
                    r = e.children,
                    o = e.arrows,
                    s = e.cssClass,
                    a = this.state.index,
                    u = tt(H, this.props);
                  return i().createElement(
                    'div',
                    pt({ dir: 'ltr', 'aria-roledescription': 'carousel' }, u),
                    i().createElement(
                      'div',
                      {
                        className: 'react-slideshow-container',
                        onMouseEnter: this.pauseSlides,
                        onMouseOver: this.pauseSlides,
                        onMouseLeave: this.startSlides,
                        onMouseDown: this.startSwipe,
                        onMouseUp: this.endSwipe,
                        onTouchStart: this.startSwipe,
                        onTouchEnd: this.endSwipe,
                        onTouchCancel: this.endSwipe,
                        ref: this.reactSlideshowWrapper,
                      },
                      o && et(q(this.props), this.state.index, this.preFade),
                      i().createElement(
                        'div',
                        {
                          className: 'react-slideshow-fade-wrapper '.concat(s),
                          ref: this.wrapper,
                        },
                        i().createElement(
                          'div',
                          {
                            className: 'react-slideshow-fade-images-wrap',
                            ref: function (e) {
                              return (t.divsContainer = e);
                            },
                          },
                          r.map(function (t, e) {
                            return i().createElement(
                              'div',
                              {
                                style: {
                                  opacity: e === a ? '1' : '0',
                                  zIndex: e === a ? '1' : '0',
                                },
                                'data-index': e,
                                key: e,
                                'aria-roledescription': 'slide',
                                'aria-hidden': e === a ? 'false' : 'true',
                              },
                              t
                            );
                          })
                        )
                      ),
                      o && it(q(this.props), this.state.index, this.preFade)
                    ),
                    n && nt(q(this.props), this.state.index, this.navigate)
                  );
                },
              },
              {
                key: 'fadeImages',
                value: function (t) {
                  var e = this,
                    i = this.state.index,
                    n = q(this.props),
                    r = n.autoplay,
                    o = n.children,
                    s = n.infinite,
                    a = n.duration,
                    u = n.transitionDuration,
                    c = n.onChange,
                    h = n.easing;
                  if (!this.tweenGroup.getAll().length) {
                    this.divsContainer.children[t] || (t = 0),
                      clearTimeout(this.timeout),
                      (function t() {
                        requestAnimationFrame(t), e.tweenGroup.update();
                      })();
                    var l = new g.Tween({ opacity: 0 }, this.tweenGroup)
                      .to({ opacity: 1 }, u)
                      .onUpdate(function (n) {
                        (e.divsContainer.children[t].style.opacity = n.opacity),
                          (e.divsContainer.children[i].style.opacity =
                            1 - n.opacity);
                      })
                      .start();
                    l.easing($(h)),
                      l.onComplete(function () {
                        e.setState({ index: t }),
                          'function' == typeof c && c(i, t),
                          r &&
                            (s || t < o.length - 1) &&
                            (clearTimeout(e.timeout),
                            (e.timeout = setTimeout(function () {
                              e.fadeImages((t + 1) % o.length);
                            }, a)));
                      });
                  }
                },
              },
            ]) && dt(r.prototype, o),
            n
          );
        })(e.Component);
        function bt(t) {
          return (
            (bt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            bt(t)
          );
        }
        function gt() {
          return (
            (gt =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                }
                return t;
              }),
            gt.apply(this, arguments)
          );
        }
        function wt(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function _t(t) {
          return (
            (_t = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            _t(t)
          );
        }
        function St(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Ot(t, e) {
          return (
            (Ot =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            Ot(t, e)
          );
        }
        const Tt = (function (t) {
          function n(t) {
            var i;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              ((i = (function (t, e) {
                return !e || ('object' !== bt(e) && 'function' != typeof e)
                  ? St(t)
                  : e;
              })(this, _t(n).call(this))).state = {
                index:
                  t.defaultIndex && t.defaultIndex < t.children.length
                    ? t.defaultIndex
                    : 0,
              }),
              (i.width = 0),
              (i.timeout = null),
              (i.divsContainer = null),
              (i.wrapper = null),
              (i.setWidth = i.setWidth.bind(St(i))),
              (i.handleResize = i.handleResize.bind(St(i))),
              (i.navigate = i.navigate.bind(St(i))),
              (i.preZoom = i.preZoom.bind(St(i))),
              (i.pauseSlides = i.pauseSlides.bind(St(i))),
              (i.startSlides = i.startSlides.bind(St(i))),
              (i.tweenGroup = new g.Group()),
              (i.initResizeObserver = i.initResizeObserver.bind(St(i))),
              (i.reactSlideshowWrapper = (0, e.createRef)()),
              (i.startSwipe = i.startSwipe.bind(St(i))),
              (i.endSwipe = i.endSwipe.bind(St(i))),
              i
            );
          }
          var r, o;
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && Ot(t, e);
            })(n, t),
            (r = n),
            (o = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.setWidth(),
                    this.play(),
                    this.initResizeObserver(),
                    V(this.props);
                },
              },
              {
                key: 'initResizeObserver',
                value: function () {
                  var t = this;
                  this.reactSlideshowWrapper.current &&
                    ((this.resizeObserver = new U(function (e) {
                      e && t.handleResize();
                    })),
                    this.resizeObserver.observe(
                      this.reactSlideshowWrapper.current
                    ));
                },
              },
              {
                key: 'play',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    i = e.autoplay,
                    n = e.children,
                    r = e.duration,
                    o = this.state.index;
                  i &&
                    n.length > 1 &&
                    (clearTimeout(this.timeout),
                    (this.timeout = setTimeout(function () {
                      return t.zoomTo(o + 1);
                    }, r)));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.tweenGroup.removeAll(),
                    clearTimeout(this.timeout),
                    this.removeResizeObserver();
                },
              },
              {
                key: 'removeResizeObserver',
                value: function () {
                  this.resizeObserver &&
                    this.reactSlideshowWrapper &&
                    this.reactSlideshowWrapper.current &&
                    this.resizeObserver.unobserve(
                      this.reactSlideshowWrapper.current
                    );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var e = q(this.props),
                    i = e.autoplay,
                    n = e.children,
                    r = q(t);
                  i !== r.autoplay &&
                    (i ? this.play() : clearTimeout(this.timeout)),
                    n.length != r.children.length &&
                      (this.applyStyle(),
                      clearTimeout(this.timeout),
                      this.play());
                },
              },
              {
                key: 'setWidth',
                value: function () {
                  this.wrapper && (this.width = this.wrapper.clientWidth),
                    this.applyStyle();
                },
              },
              {
                key: 'handleResize',
                value: function () {
                  this.setWidth();
                },
              },
              {
                key: 'applyStyle',
                value: function () {
                  var t = this.width * i().Children.count(this.props.children);
                  if (this.divsContainer) {
                    this.divsContainer.style.width = ''.concat(t, 'px');
                    for (
                      var e = 0;
                      e < this.divsContainer.children.length;
                      e++
                    ) {
                      var n = this.divsContainer.children[e];
                      n &&
                        ((n.style.width = ''.concat(this.width, 'px')),
                        (n.style.left = ''.concat(e * -this.width, 'px')),
                        (n.style.display = 'block'));
                    }
                  }
                },
              },
              {
                key: 'pauseSlides',
                value: function () {
                  q(this.props).pauseOnHover && clearTimeout(this.timeout);
                },
              },
              {
                key: 'startSlides',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    i = e.pauseOnHover,
                    n = e.autoplay,
                    r = e.duration;
                  i &&
                    n &&
                    (this.timeout = setTimeout(function () {
                      return t.goNext();
                    }, r));
                },
              },
              {
                key: 'goNext',
                value: function () {
                  var t = this.state.index,
                    e = q(this.props),
                    i = e.children;
                  (e.infinite || t !== i.length - 1) &&
                    this.zoomTo((t + 1) % i.length);
                },
              },
              {
                key: 'goBack',
                value: function () {
                  var t = this.state.index,
                    e = q(this.props),
                    i = e.children;
                  (e.infinite || 0 !== t) &&
                    this.zoomTo(0 === t ? i.length - 1 : t - 1);
                },
              },
              {
                key: 'goTo',
                value: function (t) {
                  this.zoomTo(t);
                },
              },
              {
                key: 'navigate',
                value: function (t) {
                  var e = t.currentTarget.dataset;
                  e.key != this.state.index && this.goTo(parseInt(e.key));
                },
              },
              {
                key: 'preZoom',
                value: function (t) {
                  'prev' === t.currentTarget.dataset.type
                    ? this.goBack()
                    : this.goNext();
                },
              },
              {
                key: 'startSwipe',
                value: function (t) {
                  q(this.props).canSwipe &&
                    ((this.startingClientX = t.touches
                      ? t.touches[0].pageX
                      : t.clientX),
                    clearTimeout(this.timeout),
                    (this.dragging = !0));
                },
              },
              {
                key: 'endSwipe',
                value: function (t) {
                  var e =
                    (t.changedTouches ? t.changedTouches[0].pageX : t.clientX) -
                    this.startingClientX;
                  q(this.props).canSwipe &&
                    ((this.dragging = !1),
                    Math.abs(e) / this.width > 0.2 &&
                      (e < 0 ? this.goNext() : this.goBack()));
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = q(this.props),
                    n = e.indicators,
                    r = e.arrows,
                    o = e.children,
                    s = e.cssClass,
                    a = this.state.index,
                    u = tt(H, this.props);
                  return i().createElement(
                    'div',
                    gt({ dir: 'ltr', 'aria-roledescription': 'carousel' }, u),
                    i().createElement(
                      'div',
                      {
                        className: 'react-slideshow-container',
                        onMouseEnter: this.pauseSlides,
                        onMouseOver: this.pauseSlides,
                        onMouseLeave: this.startSlides,
                        onMouseDown: this.startSwipe,
                        onMouseUp: this.endSwipe,
                        onTouchStart: this.startSwipe,
                        onTouchEnd: this.endSwipe,
                        onTouchCancel: this.endSwipe,
                        ref: this.reactSlideshowWrapper,
                      },
                      r && et(q(this.props), this.state.index, this.preZoom),
                      i().createElement(
                        'div',
                        {
                          className: 'react-slideshow-zoom-wrapper '.concat(s),
                          ref: function (e) {
                            return (t.wrapper = e);
                          },
                        },
                        i().createElement(
                          'div',
                          {
                            className: 'zoom-wrapper',
                            ref: function (e) {
                              return (t.divsContainer = e);
                            },
                          },
                          o.map(function (t, e) {
                            return i().createElement(
                              'div',
                              {
                                style: {
                                  opacity: e === a ? '1' : '0',
                                  zIndex: e === a ? '1' : '0',
                                },
                                'data-index': e,
                                key: e,
                                'aria-roledescription': 'slide',
                                'aria-hidden': e === a ? 'false' : 'true',
                              },
                              t
                            );
                          })
                        )
                      ),
                      r && it(q(this.props), this.state.index, this.preZoom)
                    ),
                    n && nt(q(this.props), this.state.index, this.navigate)
                  );
                },
              },
              {
                key: 'zoomTo',
                value: function (t) {
                  var e = this,
                    i = this.state.index,
                    n = q(this.props),
                    r = n.children,
                    o = n.scale,
                    s = n.autoplay,
                    a = n.infinite,
                    u = n.transitionDuration,
                    c = n.duration,
                    h = n.onChange,
                    l = n.easing;
                  if (!this.tweenGroup.getAll().length) {
                    this.divsContainer &&
                      !this.divsContainer.children[t] &&
                      (t = 0),
                      clearTimeout(this.timeout),
                      (function t() {
                        requestAnimationFrame(t), e.tweenGroup.update();
                      })();
                    var p = new g.Tween(
                      { opacity: 0, scale: 1 },
                      this.tweenGroup
                    )
                      .to({ opacity: 1, scale: o }, u)
                      .onUpdate(function (n) {
                        e.divsContainer &&
                          ((e.divsContainer.children[t].style.opacity =
                            n.opacity),
                          (e.divsContainer.children[i].style.opacity =
                            1 - n.opacity),
                          (e.divsContainer.children[i].style.transform =
                            'scale('.concat(n.scale, ')')));
                      })
                      .start();
                    p.easing($(l)),
                      p.onComplete(function () {
                        'function' == typeof h && h(i, t),
                          e.setState({ index: t }, function () {
                            e.divsContainer &&
                              (e.divsContainer.children[i].style.transform =
                                'scale(1)');
                          }),
                          s &&
                            (a || t < r.length - 1) &&
                            (clearTimeout(e.timeout),
                            (e.timeout = setTimeout(function () {
                              e.zoomTo((t + 1) % r.length);
                            }, c)));
                      });
                  }
                },
              },
            ]) && wt(r.prototype, o),
            n
          );
        })(e.Component);
      })(),
      r
    );
  })()
);
