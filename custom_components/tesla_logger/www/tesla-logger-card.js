var ke = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var dr = ke.exports, fo;
function fr() {
  return fo || (fo = 1, function(c, o) {
    (function(r, h) {
      h(o);
    })(dr, function(r) {
      var h = "1.9.4";
      function l(t) {
        var e, i, n, s;
        for (i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (e in s)
            t[e] = s[e];
        }
        return t;
      }
      var p = Object.create || /* @__PURE__ */ function() {
        function t() {
        }
        return function(e) {
          return t.prototype = e, new t();
        };
      }();
      function _(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
          return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
          return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
        };
      }
      var x = 0;
      function g(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++x), t._leaflet_id;
      }
      function P(t, e, i) {
        var n, s, a, u;
        return u = function() {
          n = !1, s && (a.apply(i, s), s = !1);
        }, a = function() {
          n ? s = arguments : (t.apply(i, arguments), setTimeout(u, e), n = !0);
        }, a;
      }
      function A(t, e, i) {
        var n = e[1], s = e[0], a = n - s;
        return t === n && i ? t : ((t - s) % a + a) % a + s;
      }
      function v() {
        return !1;
      }
      function b(t, e) {
        if (e === !1)
          return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function H(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function F(t) {
        return H(t).split(/\s+/);
      }
      function I(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? p(t.options) : {});
        for (var i in e)
          t.options[i] = e[i];
        return t.options;
      }
      function Ct(t, e, i) {
        var n = [];
        for (var s in t)
          n.push(encodeURIComponent(i ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var At = /\{ *([\w_ -]+) *\}/g;
      function Vt(t, e) {
        return t.replace(At, function(i, n) {
          var s = e[n];
          if (s === void 0)
            throw new Error("No value provided for variable " + i);
          return typeof s == "function" && (s = s(e)), s;
        });
      }
      var it = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function Ot(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1;
      }
      var jt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function T(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var j = 0;
      function _t(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - j));
        return j = e + i, window.setTimeout(t, i);
      }
      var lt = window.requestAnimationFrame || T("RequestAnimationFrame") || _t, ot = window.cancelAnimationFrame || T("CancelAnimationFrame") || T("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function G(t, e, i) {
        if (i && lt === _t)
          t.call(e);
        else
          return lt.call(window, _(t, e));
      }
      function st(t) {
        t && ot.call(window, t);
      }
      var ni = {
        __proto__: null,
        extend: l,
        create: p,
        bind: _,
        get lastId() {
          return x;
        },
        stamp: g,
        throttle: P,
        wrapNum: A,
        falseFn: v,
        formatNum: b,
        trim: H,
        splitWords: F,
        setOptions: I,
        getParamString: Ct,
        template: Vt,
        isArray: it,
        indexOf: Ot,
        emptyImageUrl: jt,
        requestFn: lt,
        cancelFn: ot,
        requestAnimFrame: G,
        cancelAnimFrame: st
      };
      function ut() {
      }
      ut.extend = function(t) {
        var e = function() {
          I(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = p(i);
        n.constructor = e, e.prototype = n;
        for (var s in this)
          Object.prototype.hasOwnProperty.call(this, s) && s !== "prototype" && s !== "__super__" && (e[s] = this[s]);
        return t.statics && l(e, t.statics), t.includes && (oi(t.includes), l.apply(null, [n].concat(t.includes))), l(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? p(i.options) : {}, l(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var a = 0, u = n._initHooks.length; a < u; a++)
              n._initHooks[a].call(this);
          }
        }, e;
      }, ut.include = function(t) {
        var e = this.prototype.options;
        return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, ut.mergeOptions = function(t) {
        return l(this.prototype.options, t), this;
      }, ut.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function oi(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = it(t) ? t : [t];
          for (var e = 0; e < t.length; e++)
            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var et = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(t, e, i) {
          if (typeof t == "object")
            for (var n in t)
              this._on(n, t[n], e);
          else {
            t = F(t);
            for (var s = 0, a = t.length; s < a; s++)
              this._on(t[s], e, i);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(t, e, i) {
          if (!arguments.length)
            delete this._events;
          else if (typeof t == "object")
            for (var n in t)
              this._off(n, t[n], e);
          else {
            t = F(t);
            for (var s = arguments.length === 1, a = 0, u = t.length; a < u; a++)
              s ? this._off(t[a]) : this._off(t[a], e, i);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(t, e, i, n) {
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          if (this._listens(t, e, i) === !1) {
            i === this && (i = void 0);
            var s = { fn: e, ctx: i };
            n && (s.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(s);
          }
        },
        _off: function(t, e, i) {
          var n, s, a;
          if (this._events && (n = this._events[t], !!n)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (s = 0, a = n.length; s < a; s++)
                  n[s].fn = v;
              delete this._events[t];
              return;
            }
            if (typeof e != "function") {
              console.warn("wrong listener type: " + typeof e);
              return;
            }
            var u = this._listens(t, e, i);
            if (u !== !1) {
              var d = n[u];
              this._firingCount && (d.fn = v, this._events[t] = n = n.slice()), n.splice(u, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(t, e, i) {
          if (!this.listens(t, i))
            return this;
          var n = l({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var s = this._events[t];
            if (s) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var a = 0, u = s.length; a < u; a++) {
                var d = s[a], f = d.fn;
                d.once && this.off(t, f, d.ctx), f.call(d.ctx || this, n);
              }
              this._firingCount--;
            }
          }
          return i && this._propagateEvent(n), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(t, e, i, n) {
          typeof t != "string" && console.warn('"string" type argument expected');
          var s = e;
          typeof e != "function" && (n = !!e, s = void 0, i = void 0);
          var a = this._events && this._events[t];
          if (a && a.length && this._listens(t, s, i) !== !1)
            return !0;
          if (n) {
            for (var u in this._eventParents)
              if (this._eventParents[u].listens(t, e, i, n))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(t, e, i) {
          if (!this._events)
            return !1;
          var n = this._events[t] || [];
          if (!e)
            return !!n.length;
          i === this && (i = void 0);
          for (var s = 0, a = n.length; s < a; s++)
            if (n[s].fn === e && n[s].ctx === i)
              return s;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(t, e, i) {
          if (typeof t == "object")
            for (var n in t)
              this._on(n, t[n], e, !0);
          else {
            t = F(t);
            for (var s = 0, a = t.length; s < a; s++)
              this._on(t[s], e, i, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(t) {
          return this._eventParents = this._eventParents || {}, this._eventParents[g(t)] = t, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[g(t)], this;
        },
        _propagateEvent: function(t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, l({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      et.addEventListener = et.on, et.removeEventListener = et.clearAllEventListeners = et.off, et.addOneTimeEventListener = et.once, et.fireEvent = et.fire, et.hasEventListeners = et.listens;
      var It = ut.extend(et);
      function C(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var he = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      C.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new C(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(S(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(S(t));
        },
        _subtract: function(t) {
          return this.x -= t.x, this.y -= t.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(t) {
          return this.clone()._divideBy(t);
        },
        _divideBy: function(t) {
          return this.x /= t, this.y /= t, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(t) {
          return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function(t) {
          return this.x *= t, this.y *= t, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(t) {
          return new C(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new C(this.x / t.x, this.y / t.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = he(this.x), this.y = he(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = S(t);
          var e = t.x - this.x, i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = S(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = S(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + b(this.x) + ", " + b(this.y) + ")";
        }
      };
      function S(t, e, i) {
        return t instanceof C ? t : it(t) ? new C(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new C(t.x, t.y) : new C(t, e, i);
      }
      function W(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
            this.extend(i[n]);
      }
      W.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e, i;
          if (!t)
            return this;
          if (t instanceof C || typeof t[0] == "number" || "x" in t)
            e = i = S(t);
          else if (t = rt(t), e = t.min, i = t.max, !e || !i)
            return this;
          return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return S(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return S(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return S(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          var e, i;
          return typeof t[0] == "number" || t instanceof C ? t = S(t) : t = rt(t), t instanceof W ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(t) {
          t = rt(t);
          var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x >= e.x && n.x <= i.x, u = s.y >= e.y && n.y <= i.y;
          return a && u;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(t) {
          t = rt(t);
          var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x > e.x && n.x < i.x, u = s.y > e.y && n.y < i.y;
          return a && u;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, s = Math.abs(e.y - i.y) * t;
          return rt(
            S(e.x - n, e.y - s),
            S(i.x + n, i.y + s)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = rt(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function rt(t, e) {
        return !t || t instanceof W ? t : new W(t, e);
      }
      function at(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
            this.extend(i[n]);
      }
      at.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e = this._southWest, i = this._northEast, n, s;
          if (t instanceof N)
            n = t, s = t;
          else if (t instanceof at) {
            if (n = t._southWest, s = t._northEast, !n || !s)
              return this;
          } else
            return t ? this.extend(Z(t) || Y(t)) : this;
          return !e && !i ? (this._southWest = new N(n.lat, n.lng), this._northEast = new N(s.lat, s.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(s.lat, i.lat), i.lng = Math.max(s.lng, i.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, s = Math.abs(e.lng - i.lng) * t;
          return new at(
            new N(e.lat - n, e.lng - s),
            new N(i.lat + n, i.lng + s)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new N(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new N(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new N(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          typeof t[0] == "number" || t instanceof N || "lat" in t ? t = Z(t) : t = Y(t);
          var e = this._southWest, i = this._northEast, n, s;
          return t instanceof at ? (n = t.getSouthWest(), s = t.getNorthEast()) : n = s = t, n.lat >= e.lat && s.lat <= i.lat && n.lng >= e.lng && s.lng <= i.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(t) {
          t = Y(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat >= e.lat && n.lat <= i.lat, u = s.lng >= e.lng && n.lng <= i.lng;
          return a && u;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(t) {
          t = Y(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat > e.lat && n.lat < i.lat, u = s.lng > e.lng && n.lng < i.lng;
          return a && u;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          return t ? (t = Y(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function Y(t, e) {
        return t instanceof at ? t : new at(t, e);
      }
      function N(t, e, i) {
        if (isNaN(t) || isNaN(e))
          throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
      }
      N.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          if (!t)
            return !1;
          t = Z(t);
          var i = Math.max(
            Math.abs(this.lat - t.lat),
            Math.abs(this.lng - t.lng)
          );
          return i <= (e === void 0 ? 1e-9 : e);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(t) {
          return "LatLng(" + b(this.lat, t) + ", " + b(this.lng, t) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(t) {
          return St.distance(this, Z(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return St.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(t) {
          var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
          return Y(
            [this.lat - e, this.lng - i],
            [this.lat + e, this.lng + i]
          );
        },
        clone: function() {
          return new N(this.lat, this.lng, this.alt);
        }
      };
      function Z(t, e, i) {
        return t instanceof N ? t : it(t) && typeof t[0] != "object" ? t.length === 3 ? new N(t[0], t[1], t[2]) : t.length === 2 ? new N(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new N(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new N(t, e, i);
      }
      var bt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(t, e) {
          var i = this.projection.project(t), n = this.scale(e);
          return this.transformation._transform(i, n);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(t, e) {
          var i = this.scale(e), n = this.transformation.untransform(t, i);
          return this.projection.unproject(n);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(t) {
          return this.projection.project(t);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(t) {
          return this.projection.unproject(t);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(t) {
          return 256 * Math.pow(2, t);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(t) {
          return Math.log(t / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(t) {
          if (this.infinite)
            return null;
          var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), s = this.transformation.transform(e.max, i);
          return new W(n, s);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(t) {
          var e = this.wrapLng ? A(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? A(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
          return new N(i, e, n);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(t) {
          var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, s = e.lng - i.lng;
          if (n === 0 && s === 0)
            return t;
          var a = t.getSouthWest(), u = t.getNorthEast(), d = new N(a.lat - n, a.lng - s), f = new N(u.lat - n, u.lng - s);
          return new at(d, f);
        }
      }, St = l({}, bt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, e) {
          var i = Math.PI / 180, n = t.lat * i, s = e.lat * i, a = Math.sin((e.lat - t.lat) * i / 2), u = Math.sin((e.lng - t.lng) * i / 2), d = a * a + Math.cos(n) * Math.cos(s) * u * u, f = 2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
          return this.R * f;
        }
      }), en = 6378137, si = {
        R: en,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = Math.sin(n * e);
          return new C(
            this.R * t.lng * e,
            this.R * Math.log((1 + s) / (1 - s)) / 2
          );
        },
        unproject: function(t) {
          var e = 180 / Math.PI;
          return new N(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            t.x * e / this.R
          );
        },
        bounds: function() {
          var t = en * Math.PI;
          return new W([-t, -t], [t, t]);
        }()
      };
      function ri(t, e, i, n) {
        if (it(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      ri.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(t, e) {
          return this._transform(t.clone(), e);
        },
        // destructive transform (faster)
        _transform: function(t, e) {
          return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(t, e) {
          return e = e || 1, new C(
            (t.x / e - this._b) / this._a,
            (t.y / e - this._d) / this._c
          );
        }
      };
      function le(t, e, i, n) {
        return new ri(t, e, i, n);
      }
      var ai = l({}, St, {
        code: "EPSG:3857",
        projection: si,
        transformation: function() {
          var t = 0.5 / (Math.PI * si.R);
          return le(t, 0.5, -t, 0.5);
        }()
      }), Fo = l({}, ai, {
        code: "EPSG:900913"
      });
      function nn(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function on(t, e) {
        var i = "", n, s, a, u, d, f;
        for (n = 0, a = t.length; n < a; n++) {
          for (d = t[n], s = 0, u = d.length; s < u; s++)
            f = d[s], i += (s ? "L" : "M") + f.x + " " + f.y;
          i += e ? w.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var hi = document.documentElement.style, ze = "ActiveXObject" in window, Wo = ze && !document.addEventListener, sn = "msLaunchUri" in navigator && !("documentMode" in document), li = vt("webkit"), rn = vt("android"), an = vt("android 2") || vt("android 3"), Uo = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), qo = rn && vt("Google") && Uo < 537 && !("AudioNode" in window), ui = !!window.opera, hn = !sn && vt("chrome"), ln = vt("gecko") && !li && !ui && !ze, Vo = !hn && vt("safari"), un = vt("phantom"), cn = "OTransition" in hi, jo = navigator.platform.indexOf("Win") === 0, dn = ze && "transition" in hi, ci = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !an, fn = "MozPerspective" in hi, Go = !window.L_DISABLE_3D && (dn || ci || fn) && !cn && !un, ue = typeof orientation < "u" || vt("mobile"), Yo = ue && li, Ko = ue && ci, pn = !window.PointerEvent && window.MSPointerEvent, _n = !!(window.PointerEvent || pn), mn = "ontouchstart" in window || !!window.TouchEvent, Jo = !window.L_NO_TOUCH && (mn || _n), Xo = ue && ui, Qo = ue && ln, ts = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, es = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", v, e), window.removeEventListener("testPassiveEventSupport", v, e);
        } catch {
        }
        return t;
      }(), is = function() {
        return !!document.createElement("canvas").getContext;
      }(), di = !!(document.createElementNS && nn("svg").createSVGRect), ns = !!di && function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), os = !di && function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      }(), ss = navigator.platform.indexOf("Mac") === 0, rs = navigator.platform.indexOf("Linux") === 0;
      function vt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var w = {
        ie: ze,
        ielt9: Wo,
        edge: sn,
        webkit: li,
        android: rn,
        android23: an,
        androidStock: qo,
        opera: ui,
        chrome: hn,
        gecko: ln,
        safari: Vo,
        phantom: un,
        opera12: cn,
        win: jo,
        ie3d: dn,
        webkit3d: ci,
        gecko3d: fn,
        any3d: Go,
        mobile: ue,
        mobileWebkit: Yo,
        mobileWebkit3d: Ko,
        msPointer: pn,
        pointer: _n,
        touch: Jo,
        touchNative: mn,
        mobileOpera: Xo,
        mobileGecko: Qo,
        retina: ts,
        passiveEvents: es,
        canvas: is,
        svg: di,
        vml: os,
        inlineSvg: ns,
        mac: ss,
        linux: rs
      }, gn = w.msPointer ? "MSPointerDown" : "pointerdown", vn = w.msPointer ? "MSPointerMove" : "pointermove", yn = w.msPointer ? "MSPointerUp" : "pointerup", xn = w.msPointer ? "MSPointerCancel" : "pointercancel", fi = {
        touchstart: gn,
        touchmove: vn,
        touchend: yn,
        touchcancel: xn
      }, wn = {
        touchstart: ds,
        touchmove: $e,
        touchend: $e,
        touchcancel: $e
      }, Gt = {}, bn = !1;
      function as(t, e, i) {
        return e === "touchstart" && cs(), wn[e] ? (i = wn[e].bind(this, i), t.addEventListener(fi[e], i, !1), i) : (console.warn("wrong event specified:", e), v);
      }
      function hs(t, e, i) {
        if (!fi[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(fi[e], i, !1);
      }
      function ls(t) {
        Gt[t.pointerId] = t;
      }
      function us(t) {
        Gt[t.pointerId] && (Gt[t.pointerId] = t);
      }
      function Pn(t) {
        delete Gt[t.pointerId];
      }
      function cs() {
        bn || (document.addEventListener(gn, ls, !0), document.addEventListener(vn, us, !0), document.addEventListener(yn, Pn, !0), document.addEventListener(xn, Pn, !0), bn = !0);
      }
      function $e(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in Gt)
            e.touches.push(Gt[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function ds(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Q(e), $e(t, e);
      }
      function fs(t) {
        var e = {}, i, n;
        for (n in t)
          i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
      }
      var ps = 200;
      function _s(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function s(a) {
          if (a.detail !== 1) {
            n = a.detail;
            return;
          }
          if (!(a.pointerType === "mouse" || a.sourceCapabilities && !a.sourceCapabilities.firesTouchEvents)) {
            var u = An(a);
            if (!(u.some(function(f) {
              return f instanceof HTMLLabelElement && f.attributes.for;
            }) && !u.some(function(f) {
              return f instanceof HTMLInputElement || f instanceof HTMLSelectElement;
            }))) {
              var d = Date.now();
              d - i <= ps ? (n++, n === 2 && e(fs(a))) : n = 1, i = d;
            }
          }
        }
        return t.addEventListener("click", s), {
          dblclick: e,
          simDblclick: s
        };
      }
      function ms(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var pi = Ze(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), ce = Ze(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Ln = ce === "webkitTransition" || ce === "OTransition" ? ce + "End" : "transitionend";
      function kn(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function de(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || i === "auto") && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return i === "auto" ? null : i;
      }
      function D(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n;
      }
      function U(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function Oe(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function Yt(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function Kt(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function _i(t, e) {
        if (t.classList !== void 0)
          return t.classList.contains(e);
        var i = Ie(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function z(t, e) {
        if (t.classList !== void 0)
          for (var i = F(e), n = 0, s = i.length; n < s; n++)
            t.classList.add(i[n]);
        else if (!_i(t, e)) {
          var a = Ie(t);
          mi(t, (a ? a + " " : "") + e);
        }
      }
      function q(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : mi(t, H((" " + Ie(t) + " ").replace(" " + e + " ", " ")));
      }
      function mi(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function Ie(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function dt(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && gs(t, e);
      }
      function gs(t, e) {
        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1)
            return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function Ze(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1;
      }
      function Zt(t, e, i) {
        var n = e || new C(0, 0);
        t.style[pi] = (w.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function K(t, e) {
        t._leaflet_pos = e, w.any3d ? Zt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function Bt(t) {
        return t._leaflet_pos || new C(0, 0);
      }
      var fe, pe, gi;
      if ("onselectstart" in document)
        fe = function() {
          E(window, "selectstart", Q);
        }, pe = function() {
          R(window, "selectstart", Q);
        };
      else {
        var _e = Ze(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        fe = function() {
          if (_e) {
            var t = document.documentElement.style;
            gi = t[_e], t[_e] = "none";
          }
        }, pe = function() {
          _e && (document.documentElement.style[_e] = gi, gi = void 0);
        };
      }
      function vi() {
        E(window, "dragstart", Q);
      }
      function yi() {
        R(window, "dragstart", Q);
      }
      var Be, xi;
      function wi(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (De(), Be = t, xi = t.style.outlineStyle, t.style.outlineStyle = "none", E(window, "keydown", De));
      }
      function De() {
        Be && (Be.style.outlineStyle = xi, Be = void 0, xi = void 0, R(window, "keydown", De));
      }
      function Tn(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function bi(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }
      var vs = {
        __proto__: null,
        TRANSFORM: pi,
        TRANSITION: ce,
        TRANSITION_END: Ln,
        get: kn,
        getStyle: de,
        create: D,
        remove: U,
        empty: Oe,
        toFront: Yt,
        toBack: Kt,
        hasClass: _i,
        addClass: z,
        removeClass: q,
        setClass: mi,
        getClass: Ie,
        setOpacity: dt,
        testProp: Ze,
        setTransform: Zt,
        setPosition: K,
        getPosition: Bt,
        get disableTextSelection() {
          return fe;
        },
        get enableTextSelection() {
          return pe;
        },
        disableImageDrag: vi,
        enableImageDrag: yi,
        preventOutline: wi,
        restoreOutline: De,
        getSizedParentNode: Tn,
        getScale: bi
      };
      function E(t, e, i, n) {
        if (e && typeof e == "object")
          for (var s in e)
            Li(t, s, e[s], i);
        else {
          e = F(e);
          for (var a = 0, u = e.length; a < u; a++)
            Li(t, e[a], i, n);
        }
        return this;
      }
      var yt = "_leaflet_events";
      function R(t, e, i, n) {
        if (arguments.length === 1)
          Cn(t), delete t[yt];
        else if (e && typeof e == "object")
          for (var s in e)
            ki(t, s, e[s], i);
        else if (e = F(e), arguments.length === 2)
          Cn(t, function(d) {
            return Ot(e, d) !== -1;
          });
        else
          for (var a = 0, u = e.length; a < u; a++)
            ki(t, e[a], i, n);
        return this;
      }
      function Cn(t, e) {
        for (var i in t[yt]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && ki(t, n, null, null, i);
        }
      }
      var Pi = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Li(t, e, i, n) {
        var s = e + g(i) + (n ? "_" + g(n) : "");
        if (t[yt] && t[yt][s])
          return this;
        var a = function(d) {
          return i.call(n || t, d || window.event);
        }, u = a;
        !w.touchNative && w.pointer && e.indexOf("touch") === 0 ? a = as(t, e, a) : w.touch && e === "dblclick" ? a = _s(t, a) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Pi[e] || e, a, w.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (a = function(d) {
          d = d || window.event, Ci(t, d) && u(d);
        }, t.addEventListener(Pi[e], a, !1)) : t.addEventListener(e, u, !1) : t.attachEvent("on" + e, a), t[yt] = t[yt] || {}, t[yt][s] = a;
      }
      function ki(t, e, i, n, s) {
        s = s || e + g(i) + (n ? "_" + g(n) : "");
        var a = t[yt] && t[yt][s];
        if (!a)
          return this;
        !w.touchNative && w.pointer && e.indexOf("touch") === 0 ? hs(t, e, a) : w.touch && e === "dblclick" ? ms(t, a) : "removeEventListener" in t ? t.removeEventListener(Pi[e] || e, a, !1) : t.detachEvent("on" + e, a), t[yt][s] = null;
      }
      function Dt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function Ti(t) {
        return Li(t, "wheel", Dt), this;
      }
      function me(t) {
        return E(t, "mousedown touchstart dblclick contextmenu", Dt), t._leaflet_disable_click = !0, this;
      }
      function Q(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function Nt(t) {
        return Q(t), Dt(t), this;
      }
      function An(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var e = [], i = t.target; i; )
          e.push(i), i = i.parentNode;
        return e;
      }
      function Sn(t, e) {
        if (!e)
          return new C(t.clientX, t.clientY);
        var i = bi(e), n = i.boundingClientRect;
        return new C(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - n.left) / i.x - e.clientLeft,
          (t.clientY - n.top) / i.y - e.clientTop
        );
      }
      var ys = w.linux && w.chrome ? window.devicePixelRatio : w.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Mn(t) {
        return w.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / ys : (
            // Pixels
            t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
              // Lines
              t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
                // Pages
                t.deltaX || t.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                      // Legacy Moz lines
                      t.detail ? t.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function Ci(t, e) {
        var i = e.relatedTarget;
        if (!i)
          return !0;
        try {
          for (; i && i !== t; )
            i = i.parentNode;
        } catch {
          return !1;
        }
        return i !== t;
      }
      var xs = {
        __proto__: null,
        on: E,
        off: R,
        stopPropagation: Dt,
        disableScrollPropagation: Ti,
        disableClickPropagation: me,
        preventDefault: Q,
        stop: Nt,
        getPropagationPath: An,
        getMousePosition: Sn,
        getWheelDelta: Mn,
        isExternalTarget: Ci,
        addListener: E,
        removeListener: R
      }, En = It.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Bt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = G(this._animate, this), this._step();
        },
        _step: function(t) {
          var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
          e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), K(this._el, i), this.fire("step");
        },
        _complete: function() {
          st(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }), B = It.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: ai,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(t, e) {
          e = I(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = _(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(Z(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ce && w.any3d && !w.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), E(this._proxy, Ln, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, e, i) {
          if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(Z(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
            i.animate !== void 0 && (i.zoom = l({ animate: i.animate }, i.zoom), i.pan = l({ animate: i.animate, duration: i.duration }, i.pan));
            var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
            if (n)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(t, e) {
          return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(t, e) {
          return t = t || (w.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, e) {
          return t = t || (w.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, e, i) {
          var n = this.getZoomScale(e), s = this.getSize().divideBy(2), a = t instanceof C ? t : this.latLngToContainerPoint(t), u = a.subtract(s).multiplyBy(1 - 1 / n), d = this.containerPointToLatLng(s.add(u));
          return this.setView(d, e, { zoom: i });
        },
        _getBoundsCenterZoom: function(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : Y(t);
          var i = S(e.paddingTopLeft || e.padding || [0, 0]), n = S(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, i.add(n));
          if (s = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, s) : s, s === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: s
            };
          var a = n.subtract(i).divideBy(2), u = this.project(t.getSouthWest(), s), d = this.project(t.getNorthEast(), s), f = this.unproject(u.add(d).divideBy(2).add(a), s);
          return {
            center: f,
            zoom: s
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(t, e) {
          if (t = Y(t), !t.isValid())
            throw new Error("Bounds are not valid.");
          var i = this._getBoundsCenterZoom(t, e);
          return this.setView(i.center, i.zoom, e);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(t) {
          return this.fitBounds([[-90, -180], [90, 180]], t);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(t, e) {
          return this.setView(t, this._zoom, { pan: e });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(t, e) {
          if (t = S(t).round(), e = e || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new En(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            z(this._mapPane, "leaflet-pan-anim");
            var i = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
          } else
            this._rawPanBy(t), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(t, e, i) {
          if (i = i || {}, i.animate === !1 || !w.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()), s = this.project(t), a = this.getSize(), u = this._zoom;
          t = Z(t), e = e === void 0 ? u : e;
          var d = Math.max(a.x, a.y), f = d * this.getZoomScale(u, e), m = s.distanceTo(n) || 1, y = 1.42, k = y * y;
          function O(J) {
            var Ke = J ? -1 : 1, hr = J ? f : d, lr = f * f - d * d + Ke * k * k * m * m, ur = 2 * hr * k * m, Di = lr / ur, co = Math.sqrt(Di * Di + 1) - Di, cr = co < 1e-9 ? -18 : Math.log(co);
            return cr;
          }
          function nt(J) {
            return (Math.exp(J) - Math.exp(-J)) / 2;
          }
          function X(J) {
            return (Math.exp(J) + Math.exp(-J)) / 2;
          }
          function pt(J) {
            return nt(J) / X(J);
          }
          var ht = O(0);
          function ie(J) {
            return d * (X(ht) / X(ht + y * J));
          }
          function or(J) {
            return d * (X(ht) * pt(ht + y * J) - nt(ht)) / k;
          }
          function sr(J) {
            return 1 - Math.pow(1 - J, 1.5);
          }
          var rr = Date.now(), lo = (O(1) - ht) / y, ar = i.duration ? 1e3 * i.duration : 1e3 * lo * 0.8;
          function uo() {
            var J = (Date.now() - rr) / ar, Ke = sr(J) * lo;
            J <= 1 ? (this._flyToFrame = G(uo, this), this._move(
              this.unproject(n.add(s.subtract(n).multiplyBy(or(Ke) / m)), u),
              this.getScaleZoom(d / ie(Ke), u),
              { flyTo: !0 }
            )) : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), uo.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(t, e) {
          var i = this._getBoundsCenterZoom(t, e);
          return this.flyTo(i.center, i.zoom, e);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(t) {
          return t = Y(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(t) {
          var e = this.options.minZoom;
          return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(t) {
          var e = this.options.maxZoom;
          return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(t, e) {
          this._enforcingBounds = !0;
          var i = this.getCenter(), n = this._limitCenter(i, this._zoom, Y(t));
          return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(t, e) {
          e = e || {};
          var i = S(e.paddingTopLeft || e.padding || [0, 0]), n = S(e.paddingBottomRight || e.padding || [0, 0]), s = this.project(this.getCenter()), a = this.project(t), u = this.getPixelBounds(), d = rt([u.min.add(i), u.max.subtract(n)]), f = d.getSize();
          if (!d.contains(a)) {
            this._enforcingBounds = !0;
            var m = a.subtract(d.getCenter()), y = d.extend(a).getSize().subtract(f);
            s.x += m.x < 0 ? -y.x : y.x, s.y += m.y < 0 ? -y.y : y.y, this.panTo(this.unproject(s), e), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(t) {
          if (!this._loaded)
            return this;
          t = l({
            animate: !1,
            pan: !0
          }, t === !0 ? { animate: !0 } : t);
          var e = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var i = this.getSize(), n = e.divideBy(2).round(), s = i.divideBy(2).round(), a = n.subtract(s);
          return !a.x && !a.y ? this : (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(_(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: e,
            newSize: i
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(t) {
          if (t = this._locateOptions = l({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, t), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var e = _(this._handleGeolocationResponse, this), i = _(this._handleGeolocationError, this);
          return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(t) {
          if (this._container._leaflet_id) {
            var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: e,
              message: "Geolocation error: " + i + "."
            });
          }
        },
        _handleGeolocationResponse: function(t) {
          if (this._container._leaflet_id) {
            var e = t.coords.latitude, i = t.coords.longitude, n = new N(e, i), s = n.toBounds(t.coords.accuracy * 2), a = this._locateOptions;
            if (a.setView) {
              var u = this.getBoundsZoom(s);
              this.setView(n, a.maxZoom ? Math.min(u, a.maxZoom) : u);
            }
            var d = {
              latlng: n,
              bounds: s,
              timestamp: t.timestamp
            };
            for (var f in t.coords)
              typeof t.coords[f] == "number" && (d[f] = t.coords[f]);
            this.fire("locationfound", d);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(t, e) {
          if (!e)
            return this;
          var i = this[t] = new e(this);
          return this._handlers.push(i), this.options[t] && i.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), U(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (st(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var t;
          for (t in this._layers)
            this._layers[t].remove();
          for (t in this._panes)
            U(this._panes[t]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(t, e) {
          var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = D("div", i, e || this._mapPane);
          return t && (this._panes[t] = n), n;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
          return new at(e, i);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(t, e, i) {
          t = Y(t), i = S(i || [0, 0]);
          var n = this.getZoom() || 0, s = this.getMinZoom(), a = this.getMaxZoom(), u = t.getNorthWest(), d = t.getSouthEast(), f = this.getSize().subtract(i), m = rt(this.project(d, n), this.project(u, n)).getSize(), y = w.any3d ? this.options.zoomSnap : 1, k = f.x / m.x, O = f.y / m.y, nt = e ? Math.max(k, O) : Math.min(k, O);
          return n = this.getScaleZoom(nt, n), y && (n = Math.round(n / (y / 100)) * (y / 100), n = e ? Math.ceil(n / y) * y : Math.floor(n / y) * y), Math.max(s, Math.min(a, n));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new C(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new W(i, i.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(t) {
          return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(t) {
          return typeof t == "string" ? this._panes[t] : t;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(t, e) {
          var i = this.options.crs;
          return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(t, e) {
          var i = this.options.crs;
          e = e === void 0 ? this._zoom : e;
          var n = i.zoom(t * i.scale(e));
          return isNaN(n) ? 1 / 0 : n;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(Z(t), e);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(S(t), e);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var e = S(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(t) {
          var e = this.project(Z(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(t) {
          return this.options.crs.wrapLatLng(Z(t));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(t) {
          return this.options.crs.wrapLatLngBounds(Y(t));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(t, e) {
          return this.options.crs.distance(Z(t), Z(e));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(t) {
          return S(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return S(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var e = this.containerPointToLayerPoint(S(t));
          return this.layerPointToLatLng(e);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Z(t)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(t) {
          return Sn(t, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        // map initialization methods
        _initContainer: function(t) {
          var e = this._container = kn(t);
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          E(e, "scroll", this._onScroll, this), this._containerId = g(e);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && w.any3d, z(t, "leaflet-container" + (w.touch ? " leaflet-touch" : "") + (w.retina ? " leaflet-retina" : "") + (w.ielt9 ? " leaflet-oldie" : "") + (w.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = de(t, "position");
          e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), K(this._mapPane, new C(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (z(t.markerPane, "leaflet-zoom-hide"), z(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, e, i) {
          K(this._mapPane, new C(0, 0));
          var n = !this._loaded;
          this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
          var s = this._zoom !== e;
          this._moveStart(s, i)._move(t, e)._moveEnd(s), this.fire("viewreset"), n && this.fire("load");
        },
        _moveStart: function(t, e) {
          return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
        },
        _move: function(t, e, i, n) {
          e === void 0 && (e = this._zoom);
          var s = this._zoom !== e;
          return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((s || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
        },
        _moveEnd: function(t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return st(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t) {
          K(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(t) {
          this._targets = {}, this._targets[g(this._container)] = this;
          var e = t ? R : E;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), w.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          st(this._resizeRequest), this._resizeRequest = G(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(t, e) {
          for (var i = [], n, s = e === "mouseout" || e === "mouseover", a = t.target || t.srcElement, u = !1; a; ) {
            if (n = this._targets[g(a)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
              u = !0;
              break;
            }
            if (n && n.listens(e, !0) && (s && !Ci(a, t) || (i.push(n), s)) || a === this._container)
              break;
            a = a.parentNode;
          }
          return !i.length && !u && !s && this.listens(e, !0) && (i = [this]), i;
        },
        _isClickDisabled: function(t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click)
              return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function(t) {
          var e = t.target || t.srcElement;
          if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
            var i = t.type;
            i === "mousedown" && wi(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
          if (t.type === "click") {
            var n = l({}, t);
            n.type = "preclick", this._fireDOMEvent(n, n.type, i);
          }
          var s = this._findEventTargets(t, e);
          if (i) {
            for (var a = [], u = 0; u < i.length; u++)
              i[u].listens(e, !0) && a.push(i[u]);
            s = a.concat(s);
          }
          if (s.length) {
            e === "contextmenu" && Q(t);
            var d = s[0], f = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var m = d.getLatLng && (!d._radius || d._radius <= 10);
              f.containerPoint = m ? this.latLngToContainerPoint(d.getLatLng()) : this.mouseEventToContainerPoint(t), f.layerPoint = this.containerPointToLayerPoint(f.containerPoint), f.latlng = m ? d.getLatLng() : this.layerPointToLatLng(f.layerPoint);
            }
            for (u = 0; u < s.length; u++)
              if (s[u].fire(e, f, !0), f.originalEvent._stopped || s[u].options.bubblingMouseEvents === !1 && Ot(this._mouseEvents, e) !== -1)
                return;
          }
        },
        _draggableMoved: function(t) {
          return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(t, e) {
          return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Bt(this._mapPane) || new C(0, 0);
        },
        _moved: function() {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function(t, e) {
          var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
          return i.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(t, e) {
          var i = this.getSize()._divideBy(2);
          return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return this.project(t, e)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return rt([
            this.project(t.getSouthWest(), e)._subtract(n),
            this.project(t.getNorthWest(), e)._subtract(n),
            this.project(t.getSouthEast(), e)._subtract(n),
            this.project(t.getNorthEast(), e)._subtract(n)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(t, e, i) {
          if (!i)
            return t;
          var n = this.project(t, e), s = this.getSize().divideBy(2), a = new W(n.subtract(s), n.add(s)), u = this._getBoundsOffset(a, i, e);
          return Math.abs(u.x) <= 1 && Math.abs(u.y) <= 1 ? t : this.unproject(n.add(u), e);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(t, e) {
          if (!e)
            return t;
          var i = this.getPixelBounds(), n = new W(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(t, e, i) {
          var n = rt(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ), s = n.min.subtract(t.min), a = n.max.subtract(t.max), u = this._rebound(s.x, -a.x), d = this._rebound(s.y, -a.y);
          return new C(u, d);
        },
        _rebound: function(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function(t) {
          var e = this.getMinZoom(), i = this.getMaxZoom(), n = w.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          q(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function() {
          var t = this._proxy = D("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
            var i = pi, n = this._proxy.style[i];
            Zt(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          U(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), e = this.getZoom();
          Zt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function(t) {
          this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(t, e, i) {
          if (this._animatingZoom)
            return !0;
          if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var n = this.getZoomScale(e), s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return i.animate !== !0 && !this.getSize().contains(s) ? !1 : (G(function() {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this), !0);
        },
        _animateZoom: function(t, e, i, n) {
          this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, z(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: n
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(_(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && q(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function ws(t, e) {
        return new B(t, e);
      }
      var mt = ut.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          I(this, t);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(t) {
          var e = this._map;
          return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(t) {
          this.remove(), this._map = t;
          var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
          return z(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (U(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), ge = function(t) {
        return new mt(t);
      };
      B.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(t) {
          return t.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(t) {
          return t.remove(), this;
        },
        _initControlPos: function() {
          var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = D("div", e + "control-container", this._container);
          function n(s, a) {
            var u = e + s + " " + e + a;
            t[s + a] = D("div", u, i);
          }
          n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners)
            U(this._controlCorners[t]);
          U(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var zn = mt.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(t, e, i, n) {
            return i < n ? -1 : n < i ? 1 : 0;
          }
        },
        initialize: function(t, e, i) {
          I(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var n in t)
            this._addLayer(t[n], n);
          for (n in e)
            this._addLayer(e[n], n, !0);
        },
        onAdd: function(t) {
          this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(t) {
          return mt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(t) {
          t.off("add remove", this._onLayerChange, this);
          var e = this._getLayer(g(t));
          return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          z(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (z(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : q(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return q(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", e = this._container = D("div", t), i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), me(e), Ti(e);
          var n = this._section = D("section", t + "-list");
          i && (this._map.on("click", this.collapse, this), E(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var s = this._layersLink = D("a", t + "-toggle", e);
          s.href = "#", s.title = "Layers", s.setAttribute("role", "button"), E(s, {
            keydown: function(a) {
              a.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(a) {
              Q(a), this._expandSafely();
            }
          }, this), i || this.expand(), this._baseLayersList = D("div", t + "-base", n), this._separator = D("div", t + "-separator", n), this._overlaysList = D("div", t + "-overlays", n), e.appendChild(n);
        },
        _getLayer: function(t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && g(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function(t, e, i) {
          this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: t,
            name: e,
            overlay: i
          }), this.options.sortLayers && this._layers.sort(_(function(n, s) {
            return this.options.sortFunction(n.layer, s.layer, n.name, s.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Oe(this._baseLayersList), Oe(this._overlaysList), this._layerControlInputs = [];
          var t, e, i, n, s = 0;
          for (i = 0; i < this._layers.length; i++)
            n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
          return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
        },
        _onLayerChange: function(t) {
          this._handlingClick || this._update();
          var e = this._getLayer(g(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
          i && this._map.fire(i, e);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(t, e) {
          var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
          return n.innerHTML = i, n.firstChild;
        },
        _addItem: function(t) {
          var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
          t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + g(this), i), this._layerControlInputs.push(n), n.layerId = g(t.layer), E(n, "click", this._onInputClick, this);
          var s = document.createElement("span");
          s.innerHTML = " " + t.name;
          var a = document.createElement("span");
          e.appendChild(a), a.appendChild(n), a.appendChild(s);
          var u = t.overlay ? this._overlaysList : this._baseLayersList;
          return u.appendChild(e), this._checkDisabledLayers(), e;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var t = this._layerControlInputs, e, i, n = [], s = [];
            this._handlingClick = !0;
            for (var a = t.length - 1; a >= 0; a--)
              e = t[a], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || s.push(i);
            for (a = 0; a < s.length; a++)
              this._map.hasLayer(s[a]) && this._map.removeLayer(s[a]);
            for (a = 0; a < n.length; a++)
              this._map.hasLayer(n[a]) || this._map.addLayer(n[a]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), s = t.length - 1; s >= 0; s--)
            e = t[s], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var t = this._section;
          this._preventClick = !0, E(t, "click", Q), this.expand();
          var e = this;
          setTimeout(function() {
            R(t, "click", Q), e._preventClick = !1;
          });
        }
      }), bs = function(t, e, i) {
        return new zn(t, e, i);
      }, Ai = mt.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
          var e = "leaflet-control-zoom", i = D("div", e + " leaflet-bar"), n = this.options;
          return this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            e + "-in",
            i,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            e + "-out",
            i,
            this._zoomOut
          ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
        },
        onRemove: function(t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(t) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function(t) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function(t, e, i, n, s) {
          var a = D("a", i, n);
          return a.innerHTML = t, a.href = "#", a.title = e, a.setAttribute("role", "button"), a.setAttribute("aria-label", e), me(a), E(a, "click", Nt), E(a, "click", s, this), E(a, "click", this._refocusOnMap, this), a;
        },
        _updateDisabled: function() {
          var t = this._map, e = "leaflet-disabled";
          q(this._zoomInButton, e), q(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (z(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (z(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      B.mergeOptions({
        zoomControl: !0
      }), B.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Ai(), this.addControl(this.zoomControl));
      });
      var Ps = function(t) {
        return new Ai(t);
      }, $n = mt.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(t) {
          var e = "leaflet-control-scale", i = D("div", e), n = this.options;
          return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
        },
        onRemove: function(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t, e, i) {
          t.metric && (this._mScale = D("div", e, i)), t.imperial && (this._iScale = D("div", e, i));
        },
        _update: function() {
          var t = this._map, e = t.getSize().y / 2, i = t.distance(
            t.containerPointToLatLng([0, e]),
            t.containerPointToLatLng([this.options.maxWidth, e])
          );
          this._updateScales(i);
        },
        _updateScales: function(t) {
          this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function(t) {
          var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
          this._updateScale(this._mScale, i, e / t);
        },
        _updateImperial: function(t) {
          var e = t * 3.2808399, i, n, s;
          e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (s = this._getRoundNum(e), this._updateScale(this._iScale, s + " ft", s / e));
        },
        _updateScale: function(t, e, i) {
          t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
        },
        _getRoundNum: function(t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
          return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
        }
      }), Ls = function(t) {
        return new $n(t);
      }, ks = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Si = mt.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (w.inlineSvg ? ks + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          I(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = D("div", "leaflet-control-attribution"), me(this._container);
          for (var e in t._layers)
            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
          return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(t) {
          t.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(t) {
          t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
            this.removeAttribution(t.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(t) {
          return this.options.prefix = t, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(t) {
          return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(t) {
          return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var t = [];
            for (var e in this._attributions)
              this._attributions[e] && t.push(e);
            var i = [];
            this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      B.mergeOptions({
        attributionControl: !0
      }), B.addInitHook(function() {
        this.options.attributionControl && new Si().addTo(this);
      });
      var Ts = function(t) {
        return new Si(t);
      };
      mt.Layers = zn, mt.Zoom = Ai, mt.Scale = $n, mt.Attribution = Si, ge.layers = bs, ge.zoom = Ps, ge.scale = Ls, ge.attribution = Ts;
      var xt = ut.extend({
        initialize: function(t) {
          this._map = t;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      xt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var Cs = { Events: et }, On = w.touch ? "touchstart mousedown" : "mousedown", Mt = It.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(t, e, i, n) {
          I(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (E(this._dragStartTarget, On, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Mt._dragging === this && this.finishDrag(!0), R(this._dragStartTarget, On, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !_i(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              Mt._dragging === this && this.finishDrag();
              return;
            }
            if (!(Mt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (Mt._dragging = this, this._preventOutline && wi(this._element), vi(), fe(), !this._moving)) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t, i = Tn(this._element);
              this._startPoint = new C(e.clientX, e.clientY), this._startPos = Bt(this._element), this._parentScale = bi(i);
              var n = t.type === "mousedown";
              E(document, n ? "mousemove" : "touchmove", this._onMove, this), E(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new C(e.clientX, e.clientY)._subtract(this._startPoint);
            !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Q(t), this._moved || (this.fire("dragstart"), this._moved = !0, z(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), z(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t), K(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(t) {
          q(document.body, "leaflet-dragging"), this._lastTarget && (q(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), R(document, "mousemove touchmove", this._onMove, this), R(document, "mouseup touchend touchcancel", this._onUp, this), yi(), pe();
          var e = this._moved && this._moving;
          this._moving = !1, Mt._dragging = !1, e && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function In(t, e, i) {
        var n, s = [1, 4, 2, 8], a, u, d, f, m, y, k, O;
        for (a = 0, y = t.length; a < y; a++)
          t[a]._code = Rt(t[a], e);
        for (d = 0; d < 4; d++) {
          for (k = s[d], n = [], a = 0, y = t.length, u = y - 1; a < y; u = a++)
            f = t[a], m = t[u], f._code & k ? m._code & k || (O = Ne(m, f, k, e, i), O._code = Rt(O, e), n.push(O)) : (m._code & k && (O = Ne(m, f, k, e, i), O._code = Rt(O, e), n.push(O)), n.push(f));
          t = n;
        }
        return t;
      }
      function Zn(t, e) {
        var i, n, s, a, u, d, f, m, y;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var k = Z([0, 0]), O = Y(t), nt = O.getNorthWest().distanceTo(O.getSouthWest()) * O.getNorthEast().distanceTo(O.getNorthWest());
        nt < 1700 && (k = Mi(t));
        var X = t.length, pt = [];
        for (i = 0; i < X; i++) {
          var ht = Z(t[i]);
          pt.push(e.project(Z([ht.lat - k.lat, ht.lng - k.lng])));
        }
        for (d = f = m = 0, i = 0, n = X - 1; i < X; n = i++)
          s = pt[i], a = pt[n], u = s.y * a.x - a.y * s.x, f += (s.x + a.x) * u, m += (s.y + a.y) * u, d += u * 3;
        d === 0 ? y = pt[0] : y = [f / d, m / d];
        var ie = e.unproject(S(y));
        return Z([ie.lat + k.lat, ie.lng + k.lng]);
      }
      function Mi(t) {
        for (var e = 0, i = 0, n = 0, s = 0; s < t.length; s++) {
          var a = Z(t[s]);
          e += a.lat, i += a.lng, n++;
        }
        return Z([e / n, i / n]);
      }
      var As = {
        __proto__: null,
        clipPolygon: In,
        polygonCenter: Zn,
        centroid: Mi
      };
      function Bn(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = Es(t, i), t = Ms(t, i), t;
      }
      function Dn(t, e, i) {
        return Math.sqrt(ve(t, e, i, !0));
      }
      function Ss(t, e, i) {
        return ve(t, e, i);
      }
      function Ms(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, s = new n(i);
        s[0] = s[i - 1] = 1, Ei(t, s, e, 0, i - 1);
        var a, u = [];
        for (a = 0; a < i; a++)
          s[a] && u.push(t[a]);
        return u;
      }
      function Ei(t, e, i, n, s) {
        var a = 0, u, d, f;
        for (d = n + 1; d <= s - 1; d++)
          f = ve(t[d], t[n], t[s], !0), f > a && (u = d, a = f);
        a > i && (e[u] = 1, Ei(t, e, i, n, u), Ei(t, e, i, u, s));
      }
      function Es(t, e) {
        for (var i = [t[0]], n = 1, s = 0, a = t.length; n < a; n++)
          zs(t[n], t[s]) > e && (i.push(t[n]), s = n);
        return s < a - 1 && i.push(t[a - 1]), i;
      }
      var Nn;
      function Rn(t, e, i, n, s) {
        var a = n ? Nn : Rt(t, i), u = Rt(e, i), d, f, m;
        for (Nn = u; ; ) {
          if (!(a | u))
            return [t, e];
          if (a & u)
            return !1;
          d = a || u, f = Ne(t, e, d, i, s), m = Rt(f, i), d === a ? (t = f, a = m) : (e = f, u = m);
        }
      }
      function Ne(t, e, i, n, s) {
        var a = e.x - t.x, u = e.y - t.y, d = n.min, f = n.max, m, y;
        return i & 8 ? (m = t.x + a * (f.y - t.y) / u, y = f.y) : i & 4 ? (m = t.x + a * (d.y - t.y) / u, y = d.y) : i & 2 ? (m = f.x, y = t.y + u * (f.x - t.x) / a) : i & 1 && (m = d.x, y = t.y + u * (d.x - t.x) / a), new C(m, y, s);
      }
      function Rt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function zs(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function ve(t, e, i, n) {
        var s = e.x, a = e.y, u = i.x - s, d = i.y - a, f = u * u + d * d, m;
        return f > 0 && (m = ((t.x - s) * u + (t.y - a) * d) / f, m > 1 ? (s = i.x, a = i.y) : m > 0 && (s += u * m, a += d * m)), u = t.x - s, d = t.y - a, n ? u * u + d * d : new C(s, a);
      }
      function ft(t) {
        return !it(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function Hn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ft(t);
      }
      function Fn(t, e) {
        var i, n, s, a, u, d, f, m;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var y = Z([0, 0]), k = Y(t), O = k.getNorthWest().distanceTo(k.getSouthWest()) * k.getNorthEast().distanceTo(k.getNorthWest());
        O < 1700 && (y = Mi(t));
        var nt = t.length, X = [];
        for (i = 0; i < nt; i++) {
          var pt = Z(t[i]);
          X.push(e.project(Z([pt.lat - y.lat, pt.lng - y.lng])));
        }
        for (i = 0, n = 0; i < nt - 1; i++)
          n += X[i].distanceTo(X[i + 1]) / 2;
        if (n === 0)
          m = X[0];
        else
          for (i = 0, a = 0; i < nt - 1; i++)
            if (u = X[i], d = X[i + 1], s = u.distanceTo(d), a += s, a > n) {
              f = (a - n) / s, m = [
                d.x - f * (d.x - u.x),
                d.y - f * (d.y - u.y)
              ];
              break;
            }
        var ht = e.unproject(S(m));
        return Z([ht.lat + y.lat, ht.lng + y.lng]);
      }
      var $s = {
        __proto__: null,
        simplify: Bn,
        pointToSegmentDistance: Dn,
        closestPointOnSegment: Ss,
        clipSegment: Rn,
        _getEdgeIntersection: Ne,
        _getBitCode: Rt,
        _sqClosestPointOnSegment: ve,
        isFlat: ft,
        _flat: Hn,
        polylineCenter: Fn
      }, zi = {
        project: function(t) {
          return new C(t.lng, t.lat);
        },
        unproject: function(t) {
          return new N(t.y, t.x);
        },
        bounds: new W([-180, -90], [180, 90])
      }, $i = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new W([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var e = Math.PI / 180, i = this.R, n = t.lat * e, s = this.R_MINOR / i, a = Math.sqrt(1 - s * s), u = a * Math.sin(n), d = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - u) / (1 + u), a / 2);
          return n = -i * Math.log(Math.max(d, 1e-10)), new C(t.lng * e * i, n);
        },
        unproject: function(t) {
          for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, s = Math.sqrt(1 - n * n), a = Math.exp(-t.y / i), u = Math.PI / 2 - 2 * Math.atan(a), d = 0, f = 0.1, m; d < 15 && Math.abs(f) > 1e-7; d++)
            m = s * Math.sin(u), m = Math.pow((1 - m) / (1 + m), s / 2), f = Math.PI / 2 - 2 * Math.atan(a * m) - u, u += f;
          return new N(u * e, t.x * e / i);
        }
      }, Os = {
        __proto__: null,
        LonLat: zi,
        Mercator: $i,
        SphericalMercator: si
      }, Is = l({}, St, {
        code: "EPSG:3395",
        projection: $i,
        transformation: function() {
          var t = 0.5 / (Math.PI * $i.R);
          return le(t, 0.5, -t, 0.5);
        }()
      }), Wn = l({}, St, {
        code: "EPSG:4326",
        projection: zi,
        transformation: le(1 / 180, 1, -1 / 180, 0.5)
      }), Zs = l({}, bt, {
        projection: zi,
        transformation: le(1, 0, -1, 0),
        scale: function(t) {
          return Math.pow(2, t);
        },
        zoom: function(t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function(t, e) {
          var i = e.lng - t.lng, n = e.lat - t.lat;
          return Math.sqrt(i * i + n * n);
        },
        infinite: !0
      });
      bt.Earth = St, bt.EPSG3395 = Is, bt.EPSG3857 = ai, bt.EPSG900913 = Fo, bt.EPSG4326 = Wn, bt.Simple = Zs;
      var gt = It.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(t) {
          return t.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(t) {
          return t && t.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget: function(t) {
          return this._map._targets[g(t)] = this, this;
        },
        removeInteractiveTarget: function(t) {
          return delete this._map._targets[g(t)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(t) {
          var e = t.target;
          if (e.hasLayer(this)) {
            if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
              var i = this.getEvents();
              e.on(i, this), this.once("remove", function() {
                e.off(i, this);
              }, this);
            }
            this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
          }
        }
      });
      B.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(t) {
          if (!t._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var e = g(t);
          return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(t) {
          var e = g(t);
          return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(t) {
          return g(t) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this;
        },
        _addLayers: function(t) {
          t = t ? it(t) ? t : [t] : [];
          for (var e = 0, i = t.length; e < i; e++)
            this.addLayer(t[e]);
        },
        _addZoomLimit: function(t) {
          (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[g(t)] = t, this._updateZoomLevels());
        },
        _removeZoomLimit: function(t) {
          var e = g(t);
          this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
          for (var n in this._zoomBoundLayers) {
            var s = this._zoomBoundLayers[n].options;
            t = s.minZoom === void 0 ? t : Math.min(t, s.minZoom), e = s.maxZoom === void 0 ? e : Math.max(e, s.maxZoom);
          }
          this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Jt = gt.extend({
        initialize: function(t, e) {
          I(this, e), this._layers = {};
          var i, n;
          if (t)
            for (i = 0, n = t.length; i < n; i++)
              this.addLayer(t[i]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(t) {
          var e = this.getLayerId(t);
          return this._layers[e] = t, this._map && this._map.addLayer(t), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(t) {
          var e = typeof t == "number" ? t : this.getLayerId(t);
          return e in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(t) {
          var e = Array.prototype.slice.call(arguments, 1), i, n;
          for (i in this._layers)
            n = this._layers[i], n[t] && n[t].apply(n, e);
          return this;
        },
        onAdd: function(t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function(t) {
          this.eachLayer(t.removeLayer, t);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(t) {
          return this._layers[t];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(t) {
          return this.invoke("setZIndex", t);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(t) {
          return g(t);
        }
      }), Bs = function(t, e) {
        return new Jt(t, e);
      }, Pt = Jt.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), Jt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Jt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(t) {
          return this.invoke("setStyle", t);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var t = new at();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        }
      }), Ds = function(t, e) {
        return new Pt(t, e);
      }, Xt = ut.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(t) {
          I(this, t);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(t) {
          return this._createIcon("icon", t);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function(t, e) {
          var i = this._getIconUrl(t);
          if (!i) {
            if (t === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
          return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
        },
        _setIconStyles: function(t, e) {
          var i = this.options, n = i[e + "Size"];
          typeof n == "number" && (n = [n, n]);
          var s = S(n), a = S(e === "shadow" && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + "px", t.style.marginTop = -a.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
        },
        _createImg: function(t, e) {
          return e = e || document.createElement("img"), e.src = t, e;
        },
        _getIconUrl: function(t) {
          return w.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function Ns(t) {
        return new Xt(t);
      }
      var ye = Xt.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
          return typeof ye.imagePath != "string" && (ye.imagePath = this._detectIconPath()), (this.options.imagePath || ye.imagePath) + Xt.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var e = function(i, n, s) {
            var a = n.exec(i);
            return a && a[s];
          };
          return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = D("div", "leaflet-default-icon-path", document.body), e = de(t, "background-image") || de(t, "backgroundImage");
          if (document.body.removeChild(t), e = this._stripUrl(e), e)
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        }
      }), Un = xt.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new Mt(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), z(t, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && q(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t) {
          var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, s = this._marker.options.autoPanPadding, a = Bt(e._icon), u = i.getPixelBounds(), d = i.getPixelOrigin(), f = rt(
            u.min._subtract(d).add(s),
            u.max._subtract(d).subtract(s)
          );
          if (!f.contains(a)) {
            var m = S(
              (Math.max(f.max.x, a.x) - f.max.x) / (u.max.x - f.max.x) - (Math.min(f.min.x, a.x) - f.min.x) / (u.min.x - f.min.x),
              (Math.max(f.max.y, a.y) - f.max.y) / (u.max.y - f.max.y) - (Math.min(f.min.y, a.y) - f.min.y) / (u.min.y - f.min.y)
            ).multiplyBy(n);
            i.panBy(m, { animate: !1 }), this._draggable._newPos._add(m), this._draggable._startPos._add(m), K(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = G(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (st(this._panRequest), this._panRequest = G(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var e = this._marker, i = e._shadow, n = Bt(e._icon), s = e._map.layerPointToLatLng(n);
          i && K(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          st(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), Re = gt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new ye(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(t, e) {
          I(this, e), this._latlng = Z(t);
        },
        onAdd: function(t) {
          this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(t) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = Z(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(t) {
          return this.options.zIndexOffset = t, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(t) {
          return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function() {
          var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
          i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), z(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && E(i, "focus", this._panOnFocus, this);
          var s = t.icon.createShadow(this._shadow), a = !1;
          s !== this._shadow && (this._removeShadow(), a = !0), s && (z(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && a && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && R(this._icon, "focus", this._panOnFocus, this), U(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && U(this._shadow), this._shadow = null;
        },
        _setPos: function(t) {
          this._icon && K(this._icon, t), this._shadow && K(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(e);
        },
        _initInteraction: function() {
          if (this.options.interactive && (z(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Un)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Un(this), t && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var t = this.options.opacity;
          this._icon && dt(this._icon, t), this._shadow && dt(this._shadow, t);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options, i = e.iconSize ? S(e.iconSize) : S(0, 0), n = e.iconAnchor ? S(e.iconAnchor) : S(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: n,
              paddingBottomRight: i.subtract(n)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function Rs(t, e) {
        return new Re(t, e);
      }
      var Et = gt.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(t) {
          return I(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), He = Et.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, e) {
          I(this, e), this._latlng = Z(t), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = Z(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(t) {
          return this.options.radius = this._radius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(t) {
          var e = t && t.radius || this._radius;
          return Et.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
          this._pxBounds = new W(this._point.subtract(n), this._point.add(n));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Hs(t, e) {
        return new He(t, e);
      }
      var Oi = He.extend({
        initialize: function(t, e, i) {
          if (typeof e == "number" && (e = l({}, i, { radius: e })), I(this, e), this._latlng = Z(t), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(t) {
          return this._mRadius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var t = [this._radius, this._radiusY || this._radius];
          return new at(
            this._map.layerPointToLatLng(this._point.subtract(t)),
            this._map.layerPointToLatLng(this._point.add(t))
          );
        },
        setStyle: Et.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
          if (n.distance === St.distance) {
            var s = Math.PI / 180, a = this._mRadius / St.R / s, u = i.project([e + a, t]), d = i.project([e - a, t]), f = u.add(d).divideBy(2), m = i.unproject(f).lat, y = Math.acos((Math.cos(a * s) - Math.sin(e * s) * Math.sin(m * s)) / (Math.cos(e * s) * Math.cos(m * s))) / s;
            (isNaN(y) || y === 0) && (y = a / Math.cos(Math.PI / 180 * e)), this._point = f.subtract(i.getPixelOrigin()), this._radius = isNaN(y) ? 0 : f.x - i.project([m, t - y]).x, this._radiusY = f.y - u.y;
          } else {
            var k = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(k).x;
          }
          this._updateBounds();
        }
      });
      function Fs(t, e, i) {
        return new Oi(t, e, i);
      }
      var Lt = Et.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(t, e) {
          I(this, e), this._setLatLngs(t);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(t) {
          return this._setLatLngs(t), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(t) {
          for (var e = 1 / 0, i = null, n = ve, s, a, u = 0, d = this._parts.length; u < d; u++)
            for (var f = this._parts[u], m = 1, y = f.length; m < y; m++) {
              s = f[m - 1], a = f[m];
              var k = n(t, s, a, !0);
              k < e && (e = k, i = n(t, s, a));
            }
          return i && (i.distance = Math.sqrt(e)), i;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Fn(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(t, e) {
          return e = e || this._defaultShape(), t = Z(t), e.push(t), this._bounds.extend(t), this.redraw();
        },
        _setLatLngs: function(t) {
          this._bounds = new at(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function() {
          return ft(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(t) {
          for (var e = [], i = ft(t), n = 0, s = t.length; n < s; n++)
            i ? (e[n] = Z(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
          return e;
        },
        _project: function() {
          var t = new W();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), e = new C(t, t);
          this._rawPxBounds && (this._pxBounds = new W([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, e, i) {
          var n = t[0] instanceof N, s = t.length, a, u;
          if (n) {
            for (u = [], a = 0; a < s; a++)
              u[a] = this._map.latLngToLayerPoint(t[a]), i.extend(u[a]);
            e.push(u);
          } else
            for (a = 0; a < s; a++)
              this._projectLatlngs(t[a], e, i);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var t = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var e = this._parts, i, n, s, a, u, d, f;
            for (i = 0, s = 0, a = this._rings.length; i < a; i++)
              for (f = this._rings[i], n = 0, u = f.length; n < u - 1; n++)
                d = Rn(f[n], f[n + 1], t, n, !0), d && (e[s] = e[s] || [], e[s].push(d[0]), (d[1] !== f[n + 1] || n === u - 2) && (e[s].push(d[1]), s++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
            t[i] = Bn(t[i], e);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, e) {
          var i, n, s, a, u, d, f = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (i = 0, a = this._parts.length; i < a; i++)
            for (d = this._parts[i], n = 0, u = d.length, s = u - 1; n < u; s = n++)
              if (!(!e && n === 0) && Dn(t, d[s], d[n]) <= f)
                return !0;
          return !1;
        }
      });
      function Ws(t, e) {
        return new Lt(t, e);
      }
      Lt._flat = Hn;
      var Qt = Lt.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Zn(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var e = Lt.prototype._convertLatLngs.call(this, t), i = e.length;
          return i >= 2 && e[0] instanceof N && e[0].equals(e[i - 1]) && e.pop(), e;
        },
        _setLatLngs: function(t) {
          Lt.prototype._setLatLngs.call(this, t), ft(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return ft(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, e = this.options.weight, i = new C(e, e);
          if (t = new W(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var n = 0, s = this._rings.length, a; n < s; n++)
              a = In(this._rings[n], t, !0), a.length && this._parts.push(a);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var e = !1, i, n, s, a, u, d, f, m;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (a = 0, f = this._parts.length; a < f; a++)
            for (i = this._parts[a], u = 0, m = i.length, d = m - 1; u < m; d = u++)
              n = i[u], s = i[d], n.y > t.y != s.y > t.y && t.x < (s.x - n.x) * (t.y - n.y) / (s.y - n.y) + n.x && (e = !e);
          return e || Lt.prototype._containsPoint.call(this, t, !0);
        }
      });
      function Us(t, e) {
        return new Qt(t, e);
      }
      var kt = Pt.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(t, e) {
          I(this, e), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var e = it(t) ? t : t.features, i, n, s;
          if (e) {
            for (i = 0, n = e.length; i < n; i++)
              s = e[i], (s.geometries || s.geometry || s.features || s.coordinates) && this.addData(s);
            return this;
          }
          var a = this.options;
          if (a.filter && !a.filter(t))
            return this;
          var u = Fe(t, a);
          return u ? (u.feature = qe(t), u.defaultOptions = u.options, this.resetStyle(u), a.onEachFeature && a.onEachFeature(t, u), this.addLayer(u)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(t) {
          return this.eachLayer(function(e) {
            this._setLayerStyle(e, t);
          }, this);
        },
        _setLayerStyle: function(t, e) {
          t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
        }
      });
      function Fe(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, s = [], a = e && e.pointToLayer, u = e && e.coordsToLatLng || Ii, d, f, m, y;
        if (!n && !i)
          return null;
        switch (i.type) {
          case "Point":
            return d = u(n), qn(a, t, d, e);
          case "MultiPoint":
            for (m = 0, y = n.length; m < y; m++)
              d = u(n[m]), s.push(qn(a, t, d, e));
            return new Pt(s);
          case "LineString":
          case "MultiLineString":
            return f = We(n, i.type === "LineString" ? 0 : 1, u), new Lt(f, e);
          case "Polygon":
          case "MultiPolygon":
            return f = We(n, i.type === "Polygon" ? 1 : 2, u), new Qt(f, e);
          case "GeometryCollection":
            for (m = 0, y = i.geometries.length; m < y; m++) {
              var k = Fe({
                geometry: i.geometries[m],
                type: "Feature",
                properties: t.properties
              }, e);
              k && s.push(k);
            }
            return new Pt(s);
          case "FeatureCollection":
            for (m = 0, y = i.features.length; m < y; m++) {
              var O = Fe(i.features[m], e);
              O && s.push(O);
            }
            return new Pt(s);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function qn(t, e, i, n) {
        return t ? t(e, i) : new Re(i, n && n.markersInheritOptions && n);
      }
      function Ii(t) {
        return new N(t[1], t[0], t[2]);
      }
      function We(t, e, i) {
        for (var n = [], s = 0, a = t.length, u; s < a; s++)
          u = e ? We(t[s], e - 1, i) : (i || Ii)(t[s]), n.push(u);
        return n;
      }
      function Zi(t, e) {
        return t = Z(t), t.alt !== void 0 ? [b(t.lng, e), b(t.lat, e), b(t.alt, e)] : [b(t.lng, e), b(t.lat, e)];
      }
      function Ue(t, e, i, n) {
        for (var s = [], a = 0, u = t.length; a < u; a++)
          s.push(e ? Ue(t[a], ft(t[a]) ? 0 : e - 1, i, n) : Zi(t[a], n));
        return !e && i && s.length > 0 && s.push(s[0].slice()), s;
      }
      function te(t, e) {
        return t.feature ? l({}, t.feature, { geometry: e }) : qe(e);
      }
      function qe(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var Bi = {
        toGeoJSON: function(t) {
          return te(this, {
            type: "Point",
            coordinates: Zi(this.getLatLng(), t)
          });
        }
      };
      Re.include(Bi), Oi.include(Bi), He.include(Bi), Lt.include({
        toGeoJSON: function(t) {
          var e = !ft(this._latlngs), i = Ue(this._latlngs, e ? 1 : 0, !1, t);
          return te(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i
          });
        }
      }), Qt.include({
        toGeoJSON: function(t) {
          var e = !ft(this._latlngs), i = e && !ft(this._latlngs[0]), n = Ue(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return e || (n = [n]), te(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          });
        }
      }), Jt.include({
        toMultiPoint: function(t) {
          var e = [];
          return this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }), te(this, {
            type: "MultiPoint",
            coordinates: e
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(t) {
          var e = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (e === "MultiPoint")
            return this.toMultiPoint(t);
          var i = e === "GeometryCollection", n = [];
          return this.eachLayer(function(s) {
            if (s.toGeoJSON) {
              var a = s.toGeoJSON(t);
              if (i)
                n.push(a.geometry);
              else {
                var u = qe(a);
                u.type === "FeatureCollection" ? n.push.apply(n, u.features) : n.push(u);
              }
            }
          }), i ? te(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
      function Vn(t, e) {
        return new kt(t, e);
      }
      var qs = Vn, Ve = gt.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(t, e, i) {
          this._url = t, this._bounds = Y(e), I(this, i);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (z(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          U(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(t) {
          return this.options.opacity = t, this._image && this._updateOpacity(), this;
        },
        setStyle: function(t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && Yt(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Kt(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(t) {
          return this._bounds = Y(t), this._map && this._reset(), this;
        },
        getEvents: function() {
          var t = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var t = this._url.tagName === "IMG", e = this._image = t ? this._url : D("img");
          if (z(e, "leaflet-image-layer"), this._zoomAnimated && z(e, "leaflet-zoom-animated"), this.options.className && z(e, this.options.className), e.onselectstart = v, e.onmousemove = v, e.onload = _(this.fire, this, "load"), e.onerror = _(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = e.src;
            return;
          }
          e.src = this._url, e.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          Zt(this._image, i, e);
        },
        _reset: function() {
          var t = this._image, e = new W(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), i = e.getSize();
          K(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
        },
        _updateOpacity: function() {
          dt(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && (this._url = t, this._image.src = t);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), Vs = function(t, e, i) {
        return new Ve(t, e, i);
      }, jn = Ve.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : D("video");
          if (z(e, "leaflet-image-layer"), this._zoomAnimated && z(e, "leaflet-zoom-animated"), this.options.className && z(e, this.options.className), e.onselectstart = v, e.onmousemove = v, e.onloadeddata = _(this.fire, this, "load"), t) {
            for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++)
              n.push(i[s].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          it(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var a = 0; a < this._url.length; a++) {
            var u = D("source");
            u.src = this._url[a], e.appendChild(u);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function js(t, e, i) {
        return new jn(t, e, i);
      }
      var Gn = Ve.extend({
        _initImage: function() {
          var t = this._image = this._url;
          z(t, "leaflet-image-layer"), this._zoomAnimated && z(t, "leaflet-zoom-animated"), this.options.className && z(t, this.options.className), t.onselectstart = v, t.onmousemove = v;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Gs(t, e, i) {
        return new Gn(t, e, i);
      }
      var wt = gt.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(t, e) {
          t && (t instanceof N || it(t)) ? (this._latlng = Z(t), I(this, e)) : (I(this, t), this._source = e), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(t) {
          return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
        },
        onAdd: function(t) {
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && dt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && dt(this._container, 1), this.bringToFront(), this.options.interactive && (z(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (dt(this._container, 0), this._removeTimeout = setTimeout(_(U, void 0, this._container), 200)) : U(this._container), this.options.interactive && (q(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(t) {
          return this._latlng = Z(t), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(t) {
          return this._content = t, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var t = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && Yt(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Kt(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var e = this._source;
          if (!e._map)
            return !1;
          if (e instanceof Pt) {
            e = null;
            var i = this._source._layers;
            for (var n in i)
              if (i[n]._map) {
                e = i[n];
                break;
              }
            if (!e)
              return !1;
            this._source = e;
          }
          if (!t)
            if (e.getCenter)
              t = e.getCenter();
            else if (e.getLatLng)
              t = e.getLatLng();
            else if (e.getBounds)
              t = e.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(t), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof e == "string")
              t.innerHTML = e;
            else {
              for (; t.hasChildNodes(); )
                t.removeChild(t.firstChild);
              t.appendChild(e);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng), e = S(this.options.offset), i = this._getAnchor();
            this._zoomAnimated ? K(this._container, t.add(i)) : e = e.add(t).add(i);
            var n = this._containerBottom = -e.y, s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
            this._container.style.bottom = n + "px", this._container.style.left = s + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      B.include({
        _initOverlay: function(t, e, i, n) {
          var s = e;
          return s instanceof t || (s = new t(n).setContent(e)), i && s.setLatLng(i), s;
        }
      }), gt.include({
        _initOverlay: function(t, e, i, n) {
          var s = i;
          return s instanceof t ? (I(s, n), s._source = this) : (s = e && !n ? e : new t(n, this), s.setContent(i)), s;
        }
      });
      var je = wt.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, wt.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          wt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Et || this._source.on("preclick", Dt));
        },
        onRemove: function(t) {
          wt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Et || this._source.off("preclick", Dt));
        },
        getEvents: function() {
          var t = wt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", e = this._container = D(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), i = this._wrapper = D("div", t + "-content-wrapper", e);
          if (this._contentNode = D("div", t + "-content", i), me(e), Ti(this._contentNode), E(e, "contextmenu", Dt), this._tipContainer = D("div", t + "-tip-container", e), this._tip = D("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var n = this._closeButton = D("a", t + "-close-button", e);
            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', E(n, "click", function(s) {
              Q(s), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var i = t.offsetWidth;
          i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
          var n = t.offsetHeight, s = this.options.maxHeight, a = "leaflet-popup-scrolled";
          s && n > s ? (e.height = s + "px", z(t, a)) : q(t, a), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
          K(this._container, e.add(i));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var t = this._map, e = parseInt(de(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, s = new C(this._containerLeft, -i - this._containerBottom);
            s._add(Bt(this._container));
            var a = t.layerPointToContainerPoint(s), u = S(this.options.autoPanPadding), d = S(this.options.autoPanPaddingTopLeft || u), f = S(this.options.autoPanPaddingBottomRight || u), m = t.getSize(), y = 0, k = 0;
            a.x + n + f.x > m.x && (y = a.x + n - m.x + f.x), a.x - y - d.x < 0 && (y = a.x - d.x), a.y + i + f.y > m.y && (k = a.y + i - m.y + f.y), a.y - k - d.y < 0 && (k = a.y - d.y), (y || k) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([y, k]));
          }
        },
        _getAnchor: function() {
          return S(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Ys = function(t, e) {
        return new je(t, e);
      };
      B.mergeOptions({
        closePopupOnClick: !0
      }), B.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(t, e, i) {
          return this._initOverlay(je, t, e, i).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(t) {
          return t = arguments.length ? t : this._popup, t && t.close(), this;
        }
      }), gt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(t, e) {
          return this._popup = this._initOverlay(je, this._popup, t, e), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(t) {
          return this._popup && (this instanceof Pt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(t) {
          return this._popup && this._popup.setContent(t), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(t) {
          if (!(!this._popup || !this._map)) {
            Nt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof Et)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
              return;
            }
            this._popup._source = e, this.openPopup(t.latlng);
          }
        },
        _movePopup: function(t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function(t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        }
      });
      var Ge = wt.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(t) {
          wt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          wt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = wt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = D("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + g(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var e, i, n = this._map, s = this._container, a = n.latLngToContainerPoint(n.getCenter()), u = n.layerPointToContainerPoint(t), d = this.options.direction, f = s.offsetWidth, m = s.offsetHeight, y = S(this.options.offset), k = this._getAnchor();
          d === "top" ? (e = f / 2, i = m) : d === "bottom" ? (e = f / 2, i = 0) : d === "center" ? (e = f / 2, i = m / 2) : d === "right" ? (e = 0, i = m / 2) : d === "left" ? (e = f, i = m / 2) : u.x < a.x ? (d = "right", e = 0, i = m / 2) : (d = "left", e = f + (y.x + k.x) * 2, i = m / 2), t = t.subtract(S(e, i, !0)).add(y).add(k), q(s, "leaflet-tooltip-right"), q(s, "leaflet-tooltip-left"), q(s, "leaflet-tooltip-top"), q(s, "leaflet-tooltip-bottom"), z(s, "leaflet-tooltip-" + d), K(s, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          this.options.opacity = t, this._container && dt(this._container, t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function() {
          return S(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Ks = function(t, e) {
        return new Ge(t, e);
      };
      B.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, e, i) {
          return this._initOverlay(Ge, t, e, i).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(t) {
          return t.close(), this;
        }
      }), gt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(t, e) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ge, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var e = t ? "off" : "on", i = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(t) {
          return this._tooltip && (this instanceof Pt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && (E(e, "focus", function() {
            this._tooltip._source = t, this.openTooltip();
          }, this), E(e, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && e.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(t) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var e = this;
              this._map.once("moveend", function() {
                e._openOnceFlag = !1, e._openTooltip(t);
              });
              return;
            }
            this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
          }
        },
        _moveTooltip: function(t) {
          var e = t.latlng, i, n;
          this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
        }
      });
      var Yn = Xt.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(t) {
          var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
          if (i.html instanceof Element ? (Oe(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
            var n = S(i.bgPos);
            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
          }
          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function() {
          return null;
        }
      });
      function Js(t) {
        return new Yn(t);
      }
      Xt.Default = ye;
      var xe = gt.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: w.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(t) {
          I(this, t);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(t) {
          t._addZoomLimit(this);
        },
        onRemove: function(t) {
          this._removeAllTiles(), U(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Yt(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Kt(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(t) {
          return this.options.opacity = t, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var t = this._clampZoom(this._map.getZoom());
            t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var t = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = P(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var t = this.options.tileSize;
          return t instanceof C ? t : new C(t, t);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(t) {
          for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, s = e.length, a; n < s; n++)
            a = e[n].style.zIndex, e[n] !== this._container && a && (i = t(i, +a));
          isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !w.ielt9) {
            dt(this._container, this.options.opacity);
            var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
            for (var n in this._tiles) {
              var s = this._tiles[n];
              if (!(!s.current || !s.loaded)) {
                var a = Math.min(1, (t - s.loaded) / 200);
                dt(s.el, a), a < 1 ? e = !0 : (s.active ? i = !0 : this._onOpaqueTile(s), s.active = !0);
              }
            }
            i && !this._noPrune && this._pruneTiles(), e && (st(this._fadeFrame), this._fadeFrame = G(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: v,
        _initContainer: function() {
          this._container || (this._container = D("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, e = this.options.maxZoom;
          if (t !== void 0) {
            for (var i in this._levels)
              i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (U(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
            var n = this._levels[t], s = this._map;
            return n || (n = this._levels[t] = {}, n.el = D("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), v(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
          }
        },
        _onUpdateLevel: v,
        _onRemoveLevel: v,
        _onCreateLevel: v,
        _pruneTiles: function() {
          if (this._map) {
            var t, e, i = this._map.getZoom();
            if (i > this.options.maxZoom || i < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (t in this._tiles)
              e = this._tiles[t], e.retain = e.current;
            for (t in this._tiles)
              if (e = this._tiles[t], e.current && !e.active) {
                var n = e.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles)
              this._tiles[t].retain || this._removeTile(t);
          }
        },
        _removeTilesAtZoom: function(t) {
          for (var e in this._tiles)
            this._tiles[e].coords.z === t && this._removeTile(e);
        },
        _removeAllTiles: function() {
          for (var t in this._tiles)
            this._removeTile(t);
        },
        _invalidateAll: function() {
          for (var t in this._levels)
            U(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, e, i, n) {
          var s = Math.floor(t / 2), a = Math.floor(e / 2), u = i - 1, d = new C(+s, +a);
          d.z = +u;
          var f = this._tileCoordsToKey(d), m = this._tiles[f];
          return m && m.active ? (m.retain = !0, !0) : (m && m.loaded && (m.retain = !0), u > n ? this._retainParent(s, a, u, n) : !1);
        },
        _retainChildren: function(t, e, i, n) {
          for (var s = 2 * t; s < 2 * t + 2; s++)
            for (var a = 2 * e; a < 2 * e + 2; a++) {
              var u = new C(s, a);
              u.z = i + 1;
              var d = this._tileCoordsToKey(u), f = this._tiles[d];
              if (f && f.active) {
                f.retain = !0;
                continue;
              } else f && f.loaded && (f.retain = !0);
              i + 1 < n && this._retainChildren(s, a, i + 1, n);
            }
        },
        _resetView: function(t) {
          var e = t && (t.pinch || t.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
        },
        _animateZoom: function(t) {
          this._setView(t.center, t.zoom, !0, t.noUpdate);
        },
        _clampZoom: function(t) {
          var e = this.options;
          return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
        },
        _setView: function(t, e, i, n) {
          var s = Math.round(e);
          this.options.maxZoom !== void 0 && s > this.options.maxZoom || this.options.minZoom !== void 0 && s < this.options.minZoom ? s = void 0 : s = this._clampZoom(s);
          var a = this.options.updateWhenZooming && s !== this._tileZoom;
          (!n || a) && (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), s !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
        },
        _setZoomTransforms: function(t, e) {
          for (var i in this._levels)
            this._setZoomTransform(this._levels[i], t, e);
        },
        _setZoomTransform: function(t, e, i) {
          var n = this._map.getZoomScale(i, t.zoom), s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
          w.any3d ? Zt(t.el, s, n) : K(t.el, s);
        },
        _resetGrid: function() {
          var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, s = this._map.getPixelWorldBounds(this._tileZoom);
          s && (this._globalTileRange = this._pxBoundsToTileRange(s)), this._wrapX = e.wrapLng && !this.options.noWrap && [
            Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
            Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
          ], this._wrapY = e.wrapLat && !this.options.noWrap && [
            Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
            Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(t) {
          var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), s = e.project(t, this._tileZoom).floor(), a = e.getSize().divideBy(n * 2);
          return new W(s.subtract(a), s.add(a));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(t) {
          var e = this._map;
          if (e) {
            var i = this._clampZoom(e.getZoom());
            if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
              var n = this._getTiledPixelBounds(t), s = this._pxBoundsToTileRange(n), a = s.getCenter(), u = [], d = this.options.keepBuffer, f = new W(
                s.getBottomLeft().subtract([d, -d]),
                s.getTopRight().add([d, -d])
              );
              if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var m in this._tiles) {
                var y = this._tiles[m].coords;
                (y.z !== this._tileZoom || !f.contains(new C(y.x, y.y))) && (this._tiles[m].current = !1);
              }
              if (Math.abs(i - this._tileZoom) > 1) {
                this._setView(t, i);
                return;
              }
              for (var k = s.min.y; k <= s.max.y; k++)
                for (var O = s.min.x; O <= s.max.x; O++) {
                  var nt = new C(O, k);
                  if (nt.z = this._tileZoom, !!this._isValidTile(nt)) {
                    var X = this._tiles[this._tileCoordsToKey(nt)];
                    X ? X.current = !0 : u.push(nt);
                  }
                }
              if (u.sort(function(ht, ie) {
                return ht.distanceTo(a) - ie.distanceTo(a);
              }), u.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var pt = document.createDocumentFragment();
                for (O = 0; O < u.length; O++)
                  this._addTile(u[O], pt);
                this._level.el.appendChild(pt);
              }
            }
          }
        },
        _isValidTile: function(t) {
          var e = this._map.options.crs;
          if (!e.infinite) {
            var i = this._globalTileRange;
            if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var n = this._tileCoordsToBounds(t);
          return Y(this.options.bounds).overlaps(n);
        },
        _keyToBounds: function(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function(t) {
          var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), s = n.add(i), a = e.unproject(n, t.z), u = e.unproject(s, t.z);
          return [a, u];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(t) {
          var e = this._tileCoordsToNwSe(t), i = new at(e[0], e[1]);
          return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(t) {
          var e = t.split(":"), i = new C(+e[0], +e[1]);
          return i.z = +e[2], i;
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          e && (U(e.el), delete this._tiles[t], this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function(t) {
          z(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = v, t.onmousemove = v, w.ielt9 && this.options.opacity < 1 && dt(t, this.options.opacity);
        },
        _addTile: function(t, e) {
          var i = this._getTilePos(t), n = this._tileCoordsToKey(t), s = this.createTile(this._wrapCoords(t), _(this._tileReady, this, t));
          this._initTile(s), this.createTile.length < 2 && G(_(this._tileReady, this, t, null, s)), K(s, i), this._tiles[n] = {
            el: s,
            coords: t,
            current: !0
          }, e.appendChild(s), this.fire("tileloadstart", {
            tile: s,
            coords: t
          });
        },
        _tileReady: function(t, e, i) {
          e && this.fire("tileerror", {
            error: e,
            tile: i,
            coords: t
          });
          var n = this._tileCoordsToKey(t);
          i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (dt(i.el, 0), st(this._fadeFrame), this._fadeFrame = G(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (z(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: i.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), w.ielt9 || !this._map._fadeAnimated ? G(this._pruneTiles, this) : setTimeout(_(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var e = new C(
            this._wrapX ? A(t.x, this._wrapX) : t.x,
            this._wrapY ? A(t.y, this._wrapY) : t.y
          );
          return e.z = t.z, e;
        },
        _pxBoundsToTileRange: function(t) {
          var e = this.getTileSize();
          return new W(
            t.min.unscaleBy(e).floor(),
            t.max.unscaleBy(e).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var t in this._tiles)
            if (!this._tiles[t].loaded)
              return !1;
          return !0;
        }
      });
      function Xs(t) {
        return new xe(t);
      }
      var ee = xe.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(t, e) {
          this._url = t, e = I(this, e), e.detectRetina && w.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(t, e) {
          return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(t, e) {
          var i = document.createElement("img");
          return E(i, "load", _(this._tileOnLoad, this, e, i)), E(i, "error", _(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var e = {
            r: w.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }
          return Vt(this._url, l(e, this.options));
        },
        _tileOnLoad: function(t, e) {
          w.ielt9 ? setTimeout(_(t, this, null, e), 0) : t(null, e);
        },
        _tileOnError: function(t, e, i) {
          var n = this.options.errorTileUrl;
          n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
        },
        _onTileRemove: function(t) {
          t.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
          return i && (t = e - t), t + n;
        },
        _getSubdomain: function(t) {
          var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
          return this.options.subdomains[e];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var t, e;
          for (t in this._tiles)
            if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = v, e.onerror = v, !e.complete)) {
              e.src = jt;
              var i = this._tiles[t].coords;
              U(e), delete this._tiles[t], this.fire("tileabort", {
                tile: e,
                coords: i
              });
            }
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          if (e)
            return e.el.setAttribute("src", jt), xe.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, e, i) {
          if (!(!this._map || i && i.getAttribute("src") === jt))
            return xe.prototype._tileReady.call(this, t, e, i);
        }
      });
      function Kn(t, e) {
        return new ee(t, e);
      }
      var Jn = ee.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(t, e) {
          this._url = t;
          var i = l({}, this.defaultWmsParams);
          for (var n in e)
            n in this.options || (i[n] = e[n]);
          e = I(this, e);
          var s = e.detectRetina && w.retina ? 2 : 1, a = this.getTileSize();
          i.width = a.x * s, i.height = a.y * s, this.wmsParams = i;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, ee.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t), i = this._crs, n = rt(i.project(e[0]), i.project(e[1])), s = n.min, a = n.max, u = (this._wmsVersion >= 1.3 && this._crs === Wn ? [s.y, s.x, a.y, a.x] : [s.x, s.y, a.x, a.y]).join(","), d = ee.prototype.getTileUrl.call(this, t);
          return d + Ct(this.wmsParams, d, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + u;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, e) {
          return l(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      function Qs(t, e) {
        return new Jn(t, e);
      }
      ee.WMS = Jn, Kn.wms = Qs;
      var Tt = gt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          I(this, t), g(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), z(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function(t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(t, e) {
          var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), s = this._map.project(this._center, e), a = n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t, e));
          w.any3d ? Zt(this._container, a, i) : K(this._container, a);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers)
            this._layers[t]._reset();
        },
        _onZoomEnd: function() {
          for (var t in this._layers)
            this._layers[t]._project();
        },
        _updatePaths: function() {
          for (var t in this._layers)
            this._layers[t]._update();
        },
        _update: function() {
          var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          this._bounds = new W(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), Xn = Tt.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var t = Tt.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Tt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var t = this._container = document.createElement("canvas");
          E(t, "mousemove", this._onMouseMove, this), E(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), E(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          st(this._redrawRequest), delete this._ctx, U(this._container), R(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers)
              t = this._layers[e], t._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Tt.prototype._update.call(this);
            var t = this._bounds, e = this._container, i = t.getSize(), n = w.retina ? 2 : 1;
            K(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", w.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Tt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(t) {
          this._updateDashArray(t), this._layers[g(t)] = t;
          var e = t._order = {
            layer: t,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(t) {
          this._requestRedraw(t);
        },
        _removePath: function(t) {
          var e = t._order, i = e.next, n = e.prev;
          i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[g(t)], this._requestRedraw(t);
        },
        _updatePath: function(t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function(t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function(t) {
          if (typeof t.options.dashArray == "string") {
            var e = t.options.dashArray.split(/[, ]+/), i = [], n, s;
            for (s = 0; s < e.length; s++) {
              if (n = Number(e[s]), isNaN(n))
                return;
              i.push(n);
            }
            t.options._dashArray = i;
          } else
            t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function(t) {
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || G(this._redraw, this));
        },
        _extendRedrawBounds: function(t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new W(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var t, e = this._redrawBounds;
          if (this._ctx.save(), e) {
            var i = e.getSize();
            this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(t, e) {
          if (this._drawing) {
            var i, n, s, a, u = t._parts, d = u.length, f = this._ctx;
            if (d) {
              for (f.beginPath(), i = 0; i < d; i++) {
                for (n = 0, s = u[i].length; n < s; n++)
                  a = u[i][n], f[n ? "lineTo" : "moveTo"](a.x, a.y);
                e && f.closePath();
              }
              this._fillStroke(f, t);
            }
          }
        },
        _updateCircle: function(t) {
          if (!(!this._drawing || t._empty())) {
            var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), s = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            s !== 1 && (i.save(), i.scale(1, s)), i.beginPath(), i.arc(e.x, e.y / s, n, 0, Math.PI * 2, !1), s !== 1 && i.restore(), this._fillStroke(i, t);
          }
        },
        _fillStroke: function(t, e) {
          var i = e.options;
          i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(t) {
          for (var e = this._map.mouseEventToLayerPoint(t), i, n, s = this._drawFirst; s; s = s.next)
            i = s.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
          this._fireEvent(n ? [n] : !1, t);
        },
        _onMouseMove: function(t) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function(t) {
          var e = this._hoveredLayer;
          e && (q(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, s = this._drawFirst; s; s = s.next)
              i = s.layer, i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (z(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(_(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(t, e, i) {
          this._map._fireDOMEvent(e, i || e.type, t);
        },
        _bringToFront: function(t) {
          var e = t._order;
          if (e) {
            var i = e.next, n = e.prev;
            if (i)
              i.prev = n;
            else
              return;
            n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
          }
        },
        _bringToBack: function(t) {
          var e = t._order;
          if (e) {
            var i = e.next, n = e.prev;
            if (n)
              n.next = i;
            else
              return;
            i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
          }
        }
      });
      function Qn(t) {
        return w.canvas ? new Xn(t) : null;
      }
      var we = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), tr = {
        _initContainer: function() {
          this._container = D("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Tt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var e = t._container = we("shape");
          z(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = we("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[g(t)] = t;
        },
        _addPath: function(t) {
          var e = t._container;
          this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function(t) {
          var e = t._container;
          U(e), t.removeInteractiveTarget(e), delete this._layers[g(t)];
        },
        _updateStyle: function(t) {
          var e = t._stroke, i = t._fill, n = t.options, s = t._container;
          s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = we("stroke")), s.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = it(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = we("fill")), s.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null);
        },
        _updateCircle: function(t) {
          var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
        },
        _setPath: function(t, e) {
          t._path.v = e;
        },
        _bringToFront: function(t) {
          Yt(t._container);
        },
        _bringToBack: function(t) {
          Kt(t._container);
        }
      }, Ye = w.vml ? we : nn, be = Tt.extend({
        _initContainer: function() {
          this._container = Ye("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ye("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          U(this._container), R(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Tt.prototype._update.call(this);
            var t = this._bounds, e = t.getSize(), i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), K(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var e = t._path = Ye("path");
          t.options.className && z(e, t.options.className), t.options.interactive && z(e, "leaflet-interactive"), this._updateStyle(t), this._layers[g(t)] = t;
        },
        _addPath: function(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function(t) {
          U(t._path), t.removeInteractiveTarget(t._path), delete this._layers[g(t)];
        },
        _updatePath: function(t) {
          t._project(), t._update();
        },
        _updateStyle: function(t) {
          var e = t._path, i = t.options;
          e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
        },
        _updatePoly: function(t, e) {
          this._setPath(t, on(t._parts, e));
        },
        _updateCircle: function(t) {
          var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, s = "a" + i + "," + n + " 0 1,0 ", a = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + s + i * 2 + ",0 " + s + -i * 2 + ",0 ";
          this._setPath(t, a);
        },
        _setPath: function(t, e) {
          t._path.setAttribute("d", e);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(t) {
          Yt(t._path);
        },
        _bringToBack: function(t) {
          Kt(t._path);
        }
      });
      w.vml && be.include(tr);
      function to(t) {
        return w.svg || w.vml ? new be(t) : null;
      }
      B.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(t) {
          var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
          return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
        },
        _getPaneRenderer: function(t) {
          if (t === "overlayPane" || t === void 0)
            return !1;
          var e = this._paneRenderers[t];
          return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
        },
        _createRenderer: function(t) {
          return this.options.preferCanvas && Qn(t) || to(t);
        }
      });
      var eo = Qt.extend({
        initialize: function(t, e) {
          Qt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return t = Y(t), [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast()
          ];
        }
      });
      function er(t, e) {
        return new eo(t, e);
      }
      be.create = Ye, be.pointsToPath = on, kt.geometryToLayer = Fe, kt.coordsToLatLng = Ii, kt.coordsToLatLngs = We, kt.latLngToCoords = Zi, kt.latLngsToCoords = Ue, kt.getFeature = te, kt.asFeature = qe, B.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var io = xt.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          E(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          R(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          U(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(t) {
          if (!t.shiftKey || t.which !== 1 && t.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), fe(), vi(), this._startPoint = this._map.mouseEventToContainerPoint(t), E(document, {
            contextmenu: Nt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = D("div", "leaflet-zoom-box", this._container), z(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new W(this._point, this._startPoint), i = e.getSize();
          K(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
        },
        _finish: function() {
          this._moved && (U(this._box), q(this._container, "leaflet-crosshair")), pe(), yi(), R(document, {
            contextmenu: Nt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(_(this._resetState, this), 0);
            var e = new at(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
          }
        },
        _onKeyDown: function(t) {
          t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      B.addInitHook("addHandler", "boxZoom", io), B.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var no = xt.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(t) {
          var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, s = t.originalEvent.shiftKey ? i - n : i + n;
          e.options.doubleClickZoom === "center" ? e.setZoom(s) : e.setZoomAround(t.containerPoint, s);
        }
      });
      B.addInitHook("addHandler", "doubleClickZoom", no), B.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var oo = xt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new Mt(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          z(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          q(this._map._container, "leaflet-grab"), q(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var t = this._map;
          if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var e = Y(this._map.options.maxBounds);
            this._offsetLimit = rt(
              this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(t) {
          if (this._map.options.inertia) {
            var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(i), this._times.push(e), this._prunePositions(e);
          }
          this._map.fire("move", t).fire("drag", t);
        },
        _prunePositions: function(t) {
          for (; this._positions.length > 1 && t - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(t, e) {
          return t - (t - e) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
          }
        },
        _onPreDragWrap: function() {
          var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, s = (n - e + i) % t + e - i, a = (n + e + i) % t - e - i, u = Math.abs(s + i) < Math.abs(a + i) ? s : a;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = u;
        },
        _onDragEnd: function(t) {
          var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
          if (e.fire("dragend", t), n)
            e.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var s = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, u = i.easeLinearity, d = s.multiplyBy(u / a), f = d.distanceTo([0, 0]), m = Math.min(i.inertiaMaxSpeed, f), y = d.multiplyBy(m / f), k = m / (i.inertiaDeceleration * u), O = y.multiplyBy(-k / 2).round();
            !O.x && !O.y ? e.fire("moveend") : (O = e._limitOffset(O, e.options.maxBounds), G(function() {
              e.panBy(O, {
                duration: k,
                easeLinearity: u,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      B.addInitHook("addHandler", "dragging", oo), B.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var so = xt.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
          this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks: function() {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = "0"), E(t, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), R(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
            this._map._container.focus(), window.scrollTo(n, i);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(t) {
          var e = this._panKeys = {}, i = this.keyCodes, n, s;
          for (n = 0, s = i.left.length; n < s; n++)
            e[i.left[n]] = [-1 * t, 0];
          for (n = 0, s = i.right.length; n < s; n++)
            e[i.right[n]] = [t, 0];
          for (n = 0, s = i.down.length; n < s; n++)
            e[i.down[n]] = [0, t];
          for (n = 0, s = i.up.length; n < s; n++)
            e[i.up[n]] = [0, -1 * t];
        },
        _setZoomDelta: function(t) {
          var e = this._zoomKeys = {}, i = this.keyCodes, n, s;
          for (n = 0, s = i.zoomIn.length; n < s; n++)
            e[i.zoomIn[n]] = t;
          for (n = 0, s = i.zoomOut.length; n < s; n++)
            e[i.zoomOut[n]] = -t;
        },
        _addHooks: function() {
          E(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          R(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e = t.keyCode, i = this._map, n;
            if (e in this._panKeys) {
              if (!i._panAnim || !i._panAnim._inProgress)
                if (n = this._panKeys[e], t.shiftKey && (n = S(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(S(n), i.options.maxBounds)), i.options.worldCopyJump) {
                  var s = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
                  i.panTo(s);
                } else
                  i.panBy(n);
            } else if (e in this._zoomKeys)
              i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
            else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
              i.closePopup();
            else
              return;
            Nt(t);
          }
        }
      });
      B.addInitHook("addHandler", "keyboard", so), B.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var ro = xt.extend({
        addHooks: function() {
          E(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          R(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = Mn(t), i = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(_(this._performZoom, this), n), Nt(t);
        },
        _performZoom: function() {
          var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, a = i ? Math.ceil(s / i) * i : s, u = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
          this._delta = 0, this._startTime = null, u && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + u) : t.setZoomAround(this._lastMousePos, e + u));
        }
      });
      B.addInitHook("addHandler", "scrollWheelZoom", ro);
      var ir = 600;
      B.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: w.touchNative && w.safari && w.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var ao = xt.extend({
        addHooks: function() {
          E(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          R(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var e = t.touches[0];
            this._startPos = this._newPos = new C(e.clientX, e.clientY), this._holdTimeout = setTimeout(_(function() {
              this._cancel(), this._isTapValid() && (E(document, "touchend", Q), E(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
            }, this), ir), E(document, "touchend touchcancel contextmenu", this._cancel, this), E(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          R(document, "touchend", Q), R(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), R(document, "touchend touchcancel contextmenu", this._cancel, this), R(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var e = t.touches[0];
          this._newPos = new C(e.clientX, e.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(t, e) {
          var i = new MouseEvent(t, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: e.screenX,
            screenY: e.screenY,
            clientX: e.clientX,
            clientY: e.clientY
            // button: 2,
            // buttons: 2
          });
          i._simulated = !0, e.target.dispatchEvent(i);
        }
      });
      B.addInitHook("addHandler", "tapHold", ao), B.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: w.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var ho = xt.extend({
        addHooks: function() {
          z(this._map._container, "leaflet-touch-zoom"), E(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          q(this._map._container, "leaflet-touch-zoom"), R(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
            var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), E(document, "touchmove", this._onTouchMove, this), E(document, "touchend touchcancel", this._onTouchEnd, this), Q(t);
          }
        },
        _onTouchMove: function(t) {
          if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
            var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), s = i.distanceTo(n) / this._startDist;
            if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
              if (this._center = this._startLatLng, s === 1)
                return;
            } else {
              var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
              if (s === 1 && a.x === 0 && a.y === 0)
                return;
              this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom);
            }
            this._moved || (e._moveStart(!0, !1), this._moved = !0), st(this._animRequest);
            var u = _(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = G(u, this, !0), Q(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, st(this._animRequest), R(document, "touchmove", this._onTouchMove, this), R(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      B.addInitHook("addHandler", "touchZoom", ho), B.BoxZoom = io, B.DoubleClickZoom = no, B.Drag = oo, B.Keyboard = so, B.ScrollWheelZoom = ro, B.TapHold = ao, B.TouchZoom = ho, r.Bounds = W, r.Browser = w, r.CRS = bt, r.Canvas = Xn, r.Circle = Oi, r.CircleMarker = He, r.Class = ut, r.Control = mt, r.DivIcon = Yn, r.DivOverlay = wt, r.DomEvent = xs, r.DomUtil = vs, r.Draggable = Mt, r.Evented = It, r.FeatureGroup = Pt, r.GeoJSON = kt, r.GridLayer = xe, r.Handler = xt, r.Icon = Xt, r.ImageOverlay = Ve, r.LatLng = N, r.LatLngBounds = at, r.Layer = gt, r.LayerGroup = Jt, r.LineUtil = $s, r.Map = B, r.Marker = Re, r.Mixin = Cs, r.Path = Et, r.Point = C, r.PolyUtil = As, r.Polygon = Qt, r.Polyline = Lt, r.Popup = je, r.PosAnimation = En, r.Projection = Os, r.Rectangle = eo, r.Renderer = Tt, r.SVG = be, r.SVGOverlay = Gn, r.TileLayer = ee, r.Tooltip = Ge, r.Transformation = ri, r.Util = ni, r.VideoOverlay = jn, r.bind = _, r.bounds = rt, r.canvas = Qn, r.circle = Fs, r.circleMarker = Hs, r.control = ge, r.divIcon = Js, r.extend = l, r.featureGroup = Ds, r.geoJSON = Vn, r.geoJson = qs, r.gridLayer = Xs, r.icon = Ns, r.imageOverlay = Vs, r.latLng = Z, r.latLngBounds = Y, r.layerGroup = Bs, r.map = ws, r.marker = Rs, r.point = S, r.polygon = Us, r.polyline = Ws, r.popup = Ys, r.rectangle = er, r.setOptions = I, r.stamp = g, r.svg = to, r.svgOverlay = Gs, r.tileLayer = Kn, r.tooltip = Ks, r.transformation = le, r.version = h, r.videoOverlay = js;
      var nr = window.L;
      r.noConflict = function() {
        return window.L = nr, this;
      }, window.L = r;
    });
  }(ke, ke.exports)), ke.exports;
}
var ne = fr();
const pr = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Je = globalThis, Ki = Je.ShadowRoot && (Je.ShadyCSS === void 0 || Je.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ji = Symbol(), po = /* @__PURE__ */ new WeakMap();
let Ao = class {
  constructor(o, r, h) {
    if (this._$cssResult$ = !0, h !== Ji) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = o, this.t = r;
  }
  get styleSheet() {
    let o = this.o;
    const r = this.t;
    if (Ki && o === void 0) {
      const h = r !== void 0 && r.length === 1;
      h && (o = po.get(r)), o === void 0 && ((this.o = o = new CSSStyleSheet()).replaceSync(this.cssText), h && po.set(r, o));
    }
    return o;
  }
  toString() {
    return this.cssText;
  }
};
const So = (c) => new Ao(typeof c == "string" ? c : c + "", void 0, Ji), _r = (c, ...o) => {
  const r = c.length === 1 ? c[0] : o.reduce((h, l, p) => h + ((_) => {
    if (_._$cssResult$ === !0) return _.cssText;
    if (typeof _ == "number") return _;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + _ + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(l) + c[p + 1], c[0]);
  return new Ao(r, c, Ji);
}, mr = (c, o) => {
  if (Ki) c.adoptedStyleSheets = o.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of o) {
    const h = document.createElement("style"), l = Je.litNonce;
    l !== void 0 && h.setAttribute("nonce", l), h.textContent = r.cssText, c.appendChild(h);
  }
}, _o = Ki ? (c) => c : (c) => c instanceof CSSStyleSheet ? ((o) => {
  let r = "";
  for (const h of o.cssRules) r += h.cssText;
  return So(r);
})(c) : c;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: gr, defineProperty: vr, getOwnPropertyDescriptor: yr, getOwnPropertyNames: xr, getOwnPropertySymbols: wr, getPrototypeOf: br } = Object, $t = globalThis, mo = $t.trustedTypes, Pr = mo ? mo.emptyScript : "", Ni = $t.reactiveElementPolyfillSupport, Te = (c, o) => c, qi = { toAttribute(c, o) {
  switch (o) {
    case Boolean:
      c = c ? Pr : null;
      break;
    case Object:
    case Array:
      c = c == null ? c : JSON.stringify(c);
  }
  return c;
}, fromAttribute(c, o) {
  let r = c;
  switch (o) {
    case Boolean:
      r = c !== null;
      break;
    case Number:
      r = c === null ? null : Number(c);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(c);
      } catch {
        r = null;
      }
  }
  return r;
} }, Mo = (c, o) => !gr(c, o), go = { attribute: !0, type: String, converter: qi, reflect: !1, useDefault: !1, hasChanged: Mo };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), $t.litPropertyMetadata ?? ($t.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let oe = class extends HTMLElement {
  static addInitializer(o) {
    this._$Ei(), (this.l ?? (this.l = [])).push(o);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(o, r = go) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(o) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(o, r), !r.noAccessor) {
      const h = Symbol(), l = this.getPropertyDescriptor(o, h, r);
      l !== void 0 && vr(this.prototype, o, l);
    }
  }
  static getPropertyDescriptor(o, r, h) {
    const { get: l, set: p } = yr(this.prototype, o) ?? { get() {
      return this[r];
    }, set(_) {
      this[r] = _;
    } };
    return { get: l, set(_) {
      const x = l == null ? void 0 : l.call(this);
      p == null || p.call(this, _), this.requestUpdate(o, x, h);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(o) {
    return this.elementProperties.get(o) ?? go;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Te("elementProperties"))) return;
    const o = br(this);
    o.finalize(), o.l !== void 0 && (this.l = [...o.l]), this.elementProperties = new Map(o.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Te("properties"))) {
      const r = this.properties, h = [...xr(r), ...wr(r)];
      for (const l of h) this.createProperty(l, r[l]);
    }
    const o = this[Symbol.metadata];
    if (o !== null) {
      const r = litPropertyMetadata.get(o);
      if (r !== void 0) for (const [h, l] of r) this.elementProperties.set(h, l);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, h] of this.elementProperties) {
      const l = this._$Eu(r, h);
      l !== void 0 && this._$Eh.set(l, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(o) {
    const r = [];
    if (Array.isArray(o)) {
      const h = new Set(o.flat(1 / 0).reverse());
      for (const l of h) r.unshift(_o(l));
    } else o !== void 0 && r.push(_o(o));
    return r;
  }
  static _$Eu(o, r) {
    const h = r.attribute;
    return h === !1 ? void 0 : typeof h == "string" ? h : typeof o == "string" ? o.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var o;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (o = this.constructor.l) == null || o.forEach((r) => r(this));
  }
  addController(o) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(o), this.renderRoot !== void 0 && this.isConnected && ((r = o.hostConnected) == null || r.call(o));
  }
  removeController(o) {
    var r;
    (r = this._$EO) == null || r.delete(o);
  }
  _$E_() {
    const o = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const h of r.keys()) this.hasOwnProperty(h) && (o.set(h, this[h]), delete this[h]);
    o.size > 0 && (this._$Ep = o);
  }
  createRenderRoot() {
    const o = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return mr(o, this.constructor.elementStyles), o;
  }
  connectedCallback() {
    var o;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (o = this._$EO) == null || o.forEach((r) => {
      var h;
      return (h = r.hostConnected) == null ? void 0 : h.call(r);
    });
  }
  enableUpdating(o) {
  }
  disconnectedCallback() {
    var o;
    (o = this._$EO) == null || o.forEach((r) => {
      var h;
      return (h = r.hostDisconnected) == null ? void 0 : h.call(r);
    });
  }
  attributeChangedCallback(o, r, h) {
    this._$AK(o, h);
  }
  _$ET(o, r) {
    var p;
    const h = this.constructor.elementProperties.get(o), l = this.constructor._$Eu(o, h);
    if (l !== void 0 && h.reflect === !0) {
      const _ = (((p = h.converter) == null ? void 0 : p.toAttribute) !== void 0 ? h.converter : qi).toAttribute(r, h.type);
      this._$Em = o, _ == null ? this.removeAttribute(l) : this.setAttribute(l, _), this._$Em = null;
    }
  }
  _$AK(o, r) {
    var p, _;
    const h = this.constructor, l = h._$Eh.get(o);
    if (l !== void 0 && this._$Em !== l) {
      const x = h.getPropertyOptions(l), g = typeof x.converter == "function" ? { fromAttribute: x.converter } : ((p = x.converter) == null ? void 0 : p.fromAttribute) !== void 0 ? x.converter : qi;
      this._$Em = l;
      const P = g.fromAttribute(r, x.type);
      this[l] = P ?? ((_ = this._$Ej) == null ? void 0 : _.get(l)) ?? P, this._$Em = null;
    }
  }
  requestUpdate(o, r, h, l = !1, p) {
    var _;
    if (o !== void 0) {
      const x = this.constructor;
      if (l === !1 && (p = this[o]), h ?? (h = x.getPropertyOptions(o)), !((h.hasChanged ?? Mo)(p, r) || h.useDefault && h.reflect && p === ((_ = this._$Ej) == null ? void 0 : _.get(o)) && !this.hasAttribute(x._$Eu(o, h)))) return;
      this.C(o, r, h);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(o, r, { useDefault: h, reflect: l, wrapped: p }, _) {
    h && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(o) && (this._$Ej.set(o, _ ?? r ?? this[o]), p !== !0 || _ !== void 0) || (this._$AL.has(o) || (this.hasUpdated || h || (r = void 0), this._$AL.set(o, r)), l === !0 && this._$Em !== o && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(o));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const o = this.scheduleUpdate();
    return o != null && await o, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var h;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [p, _] of this._$Ep) this[p] = _;
        this._$Ep = void 0;
      }
      const l = this.constructor.elementProperties;
      if (l.size > 0) for (const [p, _] of l) {
        const { wrapped: x } = _, g = this[p];
        x !== !0 || this._$AL.has(p) || g === void 0 || this.C(p, void 0, _, g);
      }
    }
    let o = !1;
    const r = this._$AL;
    try {
      o = this.shouldUpdate(r), o ? (this.willUpdate(r), (h = this._$EO) == null || h.forEach((l) => {
        var p;
        return (p = l.hostUpdate) == null ? void 0 : p.call(l);
      }), this.update(r)) : this._$EM();
    } catch (l) {
      throw o = !1, this._$EM(), l;
    }
    o && this._$AE(r);
  }
  willUpdate(o) {
  }
  _$AE(o) {
    var r;
    (r = this._$EO) == null || r.forEach((h) => {
      var l;
      return (l = h.hostUpdated) == null ? void 0 : l.call(h);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(o)), this.updated(o);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(o) {
    return !0;
  }
  update(o) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(o) {
  }
  firstUpdated(o) {
  }
};
oe.elementStyles = [], oe.shadowRootOptions = { mode: "open" }, oe[Te("elementProperties")] = /* @__PURE__ */ new Map(), oe[Te("finalized")] = /* @__PURE__ */ new Map(), Ni == null || Ni({ ReactiveElement: oe }), ($t.reactiveElementVersions ?? ($t.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ce = globalThis, vo = (c) => c, Qe = Ce.trustedTypes, yo = Qe ? Qe.createPolicy("lit-html", { createHTML: (c) => c }) : void 0, Eo = "$lit$", zt = `lit$${Math.random().toFixed(9).slice(2)}$`, zo = "?" + zt, Lr = `<${zo}>`, Ut = document, Ae = () => Ut.createComment(""), Se = (c) => c === null || typeof c != "object" && typeof c != "function", Xi = Array.isArray, kr = (c) => Xi(c) || typeof (c == null ? void 0 : c[Symbol.iterator]) == "function", Ri = `[ 	
\f\r]`, Pe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, xo = /-->/g, wo = />/g, Ht = RegExp(`>|${Ri}(?:([^\\s"'>=/]+)(${Ri}*=${Ri}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), bo = /'/g, Po = /"/g, $o = /^(?:script|style|textarea|title)$/i, Oo = (c) => (o, ...r) => ({ _$litType$: c, strings: o, values: r }), $ = Oo(1), tt = Oo(2), re = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), Lo = /* @__PURE__ */ new WeakMap(), Ft = Ut.createTreeWalker(Ut, 129);
function Io(c, o) {
  if (!Xi(c) || !c.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return yo !== void 0 ? yo.createHTML(o) : o;
}
const Tr = (c, o) => {
  const r = c.length - 1, h = [];
  let l, p = o === 2 ? "<svg>" : o === 3 ? "<math>" : "", _ = Pe;
  for (let x = 0; x < r; x++) {
    const g = c[x];
    let P, A, v = -1, b = 0;
    for (; b < g.length && (_.lastIndex = b, A = _.exec(g), A !== null); ) b = _.lastIndex, _ === Pe ? A[1] === "!--" ? _ = xo : A[1] !== void 0 ? _ = wo : A[2] !== void 0 ? ($o.test(A[2]) && (l = RegExp("</" + A[2], "g")), _ = Ht) : A[3] !== void 0 && (_ = Ht) : _ === Ht ? A[0] === ">" ? (_ = l ?? Pe, v = -1) : A[1] === void 0 ? v = -2 : (v = _.lastIndex - A[2].length, P = A[1], _ = A[3] === void 0 ? Ht : A[3] === '"' ? Po : bo) : _ === Po || _ === bo ? _ = Ht : _ === xo || _ === wo ? _ = Pe : (_ = Ht, l = void 0);
    const H = _ === Ht && c[x + 1].startsWith("/>") ? " " : "";
    p += _ === Pe ? g + Lr : v >= 0 ? (h.push(P), g.slice(0, v) + Eo + g.slice(v) + zt + H) : g + zt + (v === -2 ? x : H);
  }
  return [Io(c, p + (c[r] || "<?>") + (o === 2 ? "</svg>" : o === 3 ? "</math>" : "")), h];
};
class Me {
  constructor({ strings: o, _$litType$: r }, h) {
    let l;
    this.parts = [];
    let p = 0, _ = 0;
    const x = o.length - 1, g = this.parts, [P, A] = Tr(o, r);
    if (this.el = Me.createElement(P, h), Ft.currentNode = this.el.content, r === 2 || r === 3) {
      const v = this.el.content.firstChild;
      v.replaceWith(...v.childNodes);
    }
    for (; (l = Ft.nextNode()) !== null && g.length < x; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes()) for (const v of l.getAttributeNames()) if (v.endsWith(Eo)) {
          const b = A[_++], H = l.getAttribute(v).split(zt), F = /([.?@])?(.*)/.exec(b);
          g.push({ type: 1, index: p, name: F[2], strings: H, ctor: F[1] === "." ? Ar : F[1] === "?" ? Sr : F[1] === "@" ? Mr : ii }), l.removeAttribute(v);
        } else v.startsWith(zt) && (g.push({ type: 6, index: p }), l.removeAttribute(v));
        if ($o.test(l.tagName)) {
          const v = l.textContent.split(zt), b = v.length - 1;
          if (b > 0) {
            l.textContent = Qe ? Qe.emptyScript : "";
            for (let H = 0; H < b; H++) l.append(v[H], Ae()), Ft.nextNode(), g.push({ type: 2, index: ++p });
            l.append(v[b], Ae());
          }
        }
      } else if (l.nodeType === 8) if (l.data === zo) g.push({ type: 2, index: p });
      else {
        let v = -1;
        for (; (v = l.data.indexOf(zt, v + 1)) !== -1; ) g.push({ type: 7, index: p }), v += zt.length - 1;
      }
      p++;
    }
  }
  static createElement(o, r) {
    const h = Ut.createElement("template");
    return h.innerHTML = o, h;
  }
}
function ae(c, o, r = c, h) {
  var _, x;
  if (o === re) return o;
  let l = h !== void 0 ? (_ = r._$Co) == null ? void 0 : _[h] : r._$Cl;
  const p = Se(o) ? void 0 : o._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== p && ((x = l == null ? void 0 : l._$AO) == null || x.call(l, !1), p === void 0 ? l = void 0 : (l = new p(c), l._$AT(c, r, h)), h !== void 0 ? (r._$Co ?? (r._$Co = []))[h] = l : r._$Cl = l), l !== void 0 && (o = ae(c, l._$AS(c, o.values), l, h)), o;
}
class Cr {
  constructor(o, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = o, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(o) {
    const { el: { content: r }, parts: h } = this._$AD, l = ((o == null ? void 0 : o.creationScope) ?? Ut).importNode(r, !0);
    Ft.currentNode = l;
    let p = Ft.nextNode(), _ = 0, x = 0, g = h[0];
    for (; g !== void 0; ) {
      if (_ === g.index) {
        let P;
        g.type === 2 ? P = new Ee(p, p.nextSibling, this, o) : g.type === 1 ? P = new g.ctor(p, g.name, g.strings, this, o) : g.type === 6 && (P = new Er(p, this, o)), this._$AV.push(P), g = h[++x];
      }
      _ !== (g == null ? void 0 : g.index) && (p = Ft.nextNode(), _++);
    }
    return Ft.currentNode = Ut, l;
  }
  p(o) {
    let r = 0;
    for (const h of this._$AV) h !== void 0 && (h.strings !== void 0 ? (h._$AI(o, h, r), r += h.strings.length - 2) : h._$AI(o[r])), r++;
  }
}
class Ee {
  get _$AU() {
    var o;
    return ((o = this._$AM) == null ? void 0 : o._$AU) ?? this._$Cv;
  }
  constructor(o, r, h, l) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = o, this._$AB = r, this._$AM = h, this.options = l, this._$Cv = (l == null ? void 0 : l.isConnected) ?? !0;
  }
  get parentNode() {
    let o = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (o == null ? void 0 : o.nodeType) === 11 && (o = r.parentNode), o;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(o, r = this) {
    o = ae(this, o, r), Se(o) ? o === M || o == null || o === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : o !== this._$AH && o !== re && this._(o) : o._$litType$ !== void 0 ? this.$(o) : o.nodeType !== void 0 ? this.T(o) : kr(o) ? this.k(o) : this._(o);
  }
  O(o) {
    return this._$AA.parentNode.insertBefore(o, this._$AB);
  }
  T(o) {
    this._$AH !== o && (this._$AR(), this._$AH = this.O(o));
  }
  _(o) {
    this._$AH !== M && Se(this._$AH) ? this._$AA.nextSibling.data = o : this.T(Ut.createTextNode(o)), this._$AH = o;
  }
  $(o) {
    var p;
    const { values: r, _$litType$: h } = o, l = typeof h == "number" ? this._$AC(o) : (h.el === void 0 && (h.el = Me.createElement(Io(h.h, h.h[0]), this.options)), h);
    if (((p = this._$AH) == null ? void 0 : p._$AD) === l) this._$AH.p(r);
    else {
      const _ = new Cr(l, this), x = _.u(this.options);
      _.p(r), this.T(x), this._$AH = _;
    }
  }
  _$AC(o) {
    let r = Lo.get(o.strings);
    return r === void 0 && Lo.set(o.strings, r = new Me(o)), r;
  }
  k(o) {
    Xi(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let h, l = 0;
    for (const p of o) l === r.length ? r.push(h = new Ee(this.O(Ae()), this.O(Ae()), this, this.options)) : h = r[l], h._$AI(p), l++;
    l < r.length && (this._$AR(h && h._$AB.nextSibling, l), r.length = l);
  }
  _$AR(o = this._$AA.nextSibling, r) {
    var h;
    for ((h = this._$AP) == null ? void 0 : h.call(this, !1, !0, r); o !== this._$AB; ) {
      const l = vo(o).nextSibling;
      vo(o).remove(), o = l;
    }
  }
  setConnected(o) {
    var r;
    this._$AM === void 0 && (this._$Cv = o, (r = this._$AP) == null || r.call(this, o));
  }
}
class ii {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(o, r, h, l, p) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = o, this.name = r, this._$AM = l, this.options = p, h.length > 2 || h[0] !== "" || h[1] !== "" ? (this._$AH = Array(h.length - 1).fill(new String()), this.strings = h) : this._$AH = M;
  }
  _$AI(o, r = this, h, l) {
    const p = this.strings;
    let _ = !1;
    if (p === void 0) o = ae(this, o, r, 0), _ = !Se(o) || o !== this._$AH && o !== re, _ && (this._$AH = o);
    else {
      const x = o;
      let g, P;
      for (o = p[0], g = 0; g < p.length - 1; g++) P = ae(this, x[h + g], r, g), P === re && (P = this._$AH[g]), _ || (_ = !Se(P) || P !== this._$AH[g]), P === M ? o = M : o !== M && (o += (P ?? "") + p[g + 1]), this._$AH[g] = P;
    }
    _ && !l && this.j(o);
  }
  j(o) {
    o === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, o ?? "");
  }
}
class Ar extends ii {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(o) {
    this.element[this.name] = o === M ? void 0 : o;
  }
}
let Sr = class extends ii {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(o) {
    this.element.toggleAttribute(this.name, !!o && o !== M);
  }
};
class Mr extends ii {
  constructor(o, r, h, l, p) {
    super(o, r, h, l, p), this.type = 5;
  }
  _$AI(o, r = this) {
    if ((o = ae(this, o, r, 0) ?? M) === re) return;
    const h = this._$AH, l = o === M && h !== M || o.capture !== h.capture || o.once !== h.once || o.passive !== h.passive, p = o !== M && (h === M || l);
    l && this.element.removeEventListener(this.name, this, h), p && this.element.addEventListener(this.name, this, o), this._$AH = o;
  }
  handleEvent(o) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, o) : this._$AH.handleEvent(o);
  }
}
class Er {
  constructor(o, r, h) {
    this.element = o, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = h;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(o) {
    ae(this, o);
  }
}
const Hi = Ce.litHtmlPolyfillSupport;
Hi == null || Hi(Me, Ee), (Ce.litHtmlVersions ?? (Ce.litHtmlVersions = [])).push("3.3.3");
const zr = (c, o, r) => {
  const h = (r == null ? void 0 : r.renderBefore) ?? o;
  let l = h._$litPart$;
  if (l === void 0) {
    const p = (r == null ? void 0 : r.renderBefore) ?? null;
    h._$litPart$ = l = new Ee(o.insertBefore(Ae(), p), p, void 0, r ?? {});
  }
  return l._$AI(c), l;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt = globalThis;
class se extends oe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const o = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = o.firstChild), o;
  }
  update(o) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(o), this._$Do = zr(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var o;
    super.connectedCallback(), (o = this._$Do) == null || o.setConnected(!0);
  }
  disconnectedCallback() {
    var o;
    super.disconnectedCallback(), (o = this._$Do) == null || o.setConnected(!1);
  }
  render() {
    return re;
  }
}
var Co;
se._$litElement$ = !0, se.finalized = !0, (Co = Wt.litElementHydrateSupport) == null || Co.call(Wt, { LitElement: se });
const Fi = Wt.litElementPolyfillSupport;
Fi == null || Fi({ LitElement: se });
(Wt.litElementVersions ?? (Wt.litElementVersions = [])).push("4.2.2");
const Zo = {
  status: "Status",
  drives: "Drives",
  charges: "Charges",
  stats: "Stats",
  charts: "Charts",
  consumptionChart: "Consumption",
  chargedChart: "Energy charged",
  emptySeries: "No data for this period.",
  latest: "Latest",
  period: "Period",
  thisWeek: "This week",
  thisMonth: "This month",
  thisYear: "This year",
  consumed: "consumed",
  batteryHealth: "Battery health",
  rangeAtFull: "Range at 100%",
  acDc: "AC/DC charging",
  fastShare: "fast charging",
  cost: "Cost",
  perKm: "/km",
  idleUse: "Parked consumption",
  tempUse: "Consumption vs temperature",
  range: "Range",
  speed: "Speed",
  power: "Power",
  inside: "Inside",
  outside: "Outside",
  charger: "Charger",
  added: "Added",
  odometer: "Odometer",
  limit: "Limit",
  location: "Location",
  unknown: "Unknown",
  loading: "Loading…",
  emptyDrives: "No drives in this page.",
  emptyCharges: "No charges in this page.",
  back: "Back",
  refresh: "Refresh",
  week: "Week",
  month: "Month",
  year: "Year",
  distance: "Distance",
  duration: "Duration",
  energy: "Energy",
  efficiency: "Efficiency",
  drivesCount: "Drives",
  chargesCount: "Charges",
  energyAdded: "Energy added",
  map: "Route",
  speedChart: "Speed",
  elevationChart: "Elevation",
  batteryChart: "Battery",
  noRoute: "This drive has no route points.",
  pick: "Select a Tesla Logger entity in the card editor.",
  missingDevice: "This entity is not linked to a Tesla Logger device.",
  failed: "Could not load history.",
  previous: "Previous",
  next: "Next",
  page: "Page",
  online: "Online",
  asleep: "Asleep",
  offline: "Offline",
  driving: "Driving",
  charging: "Charging",
  updating: "Updating",
  entity: "Entity",
  defaultView: "Default view",
  showBlocks: "Blocks",
  showFields: {
    status: "Status",
    drives: "Drives",
    charges: "Charges",
    chart_consumption: "Consumption (Wh/km)",
    chart_distance: "Distance",
    chart_energy: "Energy charged",
    totals: "Totals",
    battery_health: "Battery health",
    charging_split: "AC/DC charging and cost",
    vampire_drain: "Parked consumption",
    consumption_vs_temp: "Consumption vs temperature"
  }
}, $r = {
  ...Zo,
  status: "État",
  drives: "Trajets",
  charges: "Charges",
  stats: "Stats",
  charts: "Graphiques",
  consumptionChart: "Consommation",
  chargedChart: "Énergie chargée",
  emptySeries: "Aucune donnée sur cette période.",
  latest: "Dernier",
  period: "Période",
  thisWeek: "Cette semaine",
  thisMonth: "Ce mois",
  thisYear: "Cette année",
  consumed: "consommé",
  batteryHealth: "Santé batterie",
  rangeAtFull: "Autonomie à 100 %",
  acDc: "Charges AC/DC",
  fastShare: "recharge rapide",
  cost: "Coût",
  perKm: "/km",
  idleUse: "Consommation à l'arrêt",
  tempUse: "Consommation vs température",
  range: "Autonomie",
  speed: "Vitesse",
  power: "Puissance",
  inside: "Intérieur",
  outside: "Extérieur",
  charger: "Chargeur",
  added: "Ajoutée",
  odometer: "Odomètre",
  limit: "Limite",
  location: "Lieu",
  unknown: "Inconnu",
  loading: "Chargement…",
  emptyDrives: "Aucun trajet sur cette page.",
  emptyCharges: "Aucune charge sur cette page.",
  back: "Retour",
  refresh: "Actualiser",
  week: "Semaine",
  month: "Mois",
  year: "Année",
  distance: "Distance",
  duration: "Durée",
  energy: "Énergie",
  efficiency: "Efficacité",
  drivesCount: "Trajets",
  chargesCount: "Charges",
  energyAdded: "Énergie ajoutée",
  map: "Tracé",
  speedChart: "Vitesse",
  elevationChart: "Altitude",
  batteryChart: "Batterie",
  noRoute: "Ce trajet n'a pas de tracé.",
  pick: "Choisissez une entité Tesla Logger dans l'éditeur.",
  missingDevice: "Cette entité n'est pas liée à un appareil Tesla Logger.",
  failed: "Impossible de charger l'historique.",
  previous: "Précédent",
  next: "Suivant",
  page: "Page",
  online: "En ligne",
  asleep: "Endormie",
  offline: "Hors ligne",
  driving: "En route",
  charging: "En charge",
  updating: "Mise à jour",
  entity: "Entité",
  defaultView: "Vue par défaut",
  showBlocks: "Blocs",
  showFields: {
    status: "État",
    drives: "Trajets",
    charges: "Charges",
    chart_consumption: "Consommation (Wh/km)",
    chart_distance: "Distance",
    chart_energy: "Énergie chargée",
    totals: "Totaux",
    battery_health: "Santé batterie",
    charging_split: "Charges AC/DC et coût",
    vampire_drain: "Consommation à l'arrêt",
    consumption_vs_temp: "Consommation vs température"
  }
};
function Bo(c) {
  return (c || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}
function Do(c) {
  return c === "fr" ? $r : Zo;
}
function Or(c, o) {
  return c[o] || o || c.unknown;
}
function V(c, o, r) {
  return c.toLocaleString(r === "fr" ? "fr-FR" : "en-US", {
    minimumFractionDigits: o,
    maximumFractionDigits: o
  });
}
const Ir = /^<.*>$/;
function Zr(c) {
  if (typeof c != "string")
    return null;
  const o = c.trim();
  if (!o || Ir.test(o))
    return null;
  const r = o.toLowerCase();
  return r === "none" || r === "null" ? null : o;
}
function Br(c) {
  return c.map((o) => typeof o == "string" ? o.trim() : "").filter((o) => o.length > 0).join(" · ");
}
function Dr(c, o) {
  const r = new Date(c);
  if (Number.isNaN(r.getTime()))
    return c;
  const h = o === "fr" ? "fr-FR" : "en-US", l = new Intl.DateTimeFormat(h, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }).format(r).replace(/[\u00a0\u202f]/g, " ").replace(/,/g, "").replace(/\s+/g, " ").trim(), p = new Intl.DateTimeFormat(h, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(r).replace(/[\u00a0\u202f]/g, " ").trim();
  return `${l} ${p}`;
}
function Le(c) {
  if (c == null || Number.isNaN(c))
    return "—";
  const o = Math.max(0, Math.round(c)), r = Math.floor(o / 3600), h = Math.floor(o % 3600 / 60);
  return r > 0 ? `${r} h ${h} min` : `${h} min`;
}
function Wi(c, o) {
  return c == null || o == null || o <= 0 ? null : c * 1e3 / o;
}
function No(c, o = /* @__PURE__ */ new Date()) {
  const r = new Date(o);
  if (c === "week") {
    const l = (r.getDay() + 6) % 7;
    r.setDate(r.getDate() - l);
  } else c === "month" ? r.setDate(1) : r.setMonth(0, 1);
  r.setHours(0, 0, 0, 0);
  const h = new Date(r);
  return c === "week" ? h.setDate(h.getDate() + 7) : c === "month" ? h.setMonth(h.getMonth() + 1) : h.setFullYear(h.getFullYear() + 1), { start: r, end: h };
}
function Ro(c, o, r = /* @__PURE__ */ new Date()) {
  const h = new Date(c).getTime();
  if (Number.isNaN(h))
    return !1;
  const { start: l, end: p } = No(o, r);
  return h >= l.getTime() && h < p.getTime();
}
function Nr(c) {
  const o = /* @__PURE__ */ new Date();
  return { from: No(c, o).start.toISOString(), to: o.toISOString() };
}
function Rr(c) {
  return typeof c == "string" ? c : c instanceof Error || c && typeof c == "object" && "message" in c && typeof c.message == "string" ? c.message : "";
}
function Hr(c, o) {
  const r = Rr(c);
  return !r || r.includes("tl_") ? o : r.slice(0, 180);
}
function qt(c) {
  return !c || typeof c != "object" ? null : c;
}
const Fr = {
  week: 12,
  month: 12,
  year: 5
}, Wr = 360, Ur = 168, qr = 42, Vr = 10, jr = 12, Gr = 28;
function Yr(c) {
  if (!Number.isFinite(c) || c <= 0)
    return 1;
  const o = 10 ** Math.floor(Math.log10(c)), r = c / o;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * o;
}
function Kr(c, o, r = /* @__PURE__ */ new Date()) {
  let h = -1;
  return c.forEach((l, p) => {
    Ro(l, o, r) && (h = p);
  }), h >= 0 ? h : Math.max(0, c.length - 1);
}
function Ui(c, o, r) {
  const h = new Date(c);
  if (Number.isNaN(h.getTime()))
    return c;
  const l = r === "fr" ? "fr-FR" : "en-US";
  return o === "year" ? new Intl.DateTimeFormat(l, { year: "numeric" }).format(h) : o === "month" ? new Intl.DateTimeFormat(l, { month: "short" }).format(h).replace(/\.$/, "") : new Intl.DateTimeFormat(l, { day: "numeric", month: "short" }).format(h).replace(/,/g, "").replace(/\s+/g, " ").trim();
}
function Jr(c, o, r, h, l = {}) {
  const p = l.compact ? { width: 200, height: 112, left: 32, right: 6, top: 8, bottom: 20 } : {
    width: Wr,
    height: Ur,
    left: qr,
    right: Vr,
    top: jr,
    bottom: Gr
  }, x = c.map((T) => o === "stack" ? Math.max(0, T.value ?? 0) + Math.max(0, T.stack ?? 0) : T.value != null && Number.isFinite(T.value) && T.value > 0 ? T.value : 0).filter((T) => T > 0), g = Yr(x.length ? Math.max(...x) : 0), P = p.width - p.left - p.right, A = p.height - p.top - p.bottom, v = c.length > 0 ? P / c.length : P, b = (T) => p.top + A - T / g * A, H = b(0), F = [g, g / 2, 0], I = c.map((T, j) => {
    const _t = p.left + v * j + v / 2, lt = T.value != null && Number.isFinite(T.value) ? T.value : null, ot = lt == null ? null : b(Math.max(0, lt));
    return { ...T, x: _t, y: ot, value: lt };
  }), Ct = c.length > 8 ? 2 : 1, At = (T, j, _t) => {
    if (!l.onSelect)
      return tt`<g><title>${j}</title>${_t}</g>`;
    const lt = l.selected === T;
    return tt`
      <g
        class=${lt ? "selected" : ""}
        role="button"
        tabindex="0"
        aria-pressed=${lt ? "true" : "false"}
        aria-label=${j}
        @click=${() => {
      var ot;
      return (ot = l.onSelect) == null ? void 0 : ot.call(l, T);
    }}
        @keydown=${(ot) => {
      var G;
      (ot.key === "Enter" || ot.key === " ") && (ot.preventDefault(), (G = l.onSelect) == null || G.call(l, T));
    }}
      >
        <title>${j}</title>
        ${_t}
      </g>
    `;
  }, Vt = o === "line" ? [] : I.map((T, j) => {
    const _t = Math.min(l.compact ? 16 : 22, v * 0.62), lt = (T.x - _t / 2).toFixed(1), ot = tt`
            <rect
              class="hit"
              x=${(T.x - v / 2).toFixed(1)}
              y=${p.top}
              width=${v.toFixed(1)}
              height=${A}
            ></rect>
          `;
    if (o === "stack") {
      const ni = [
        { amount: Math.max(0, T.value ?? 0), className: "bar ac" },
        { amount: Math.max(0, T.stack ?? 0), className: "bar dc" }
      ];
      let ut = 0;
      const oi = ni.map((et) => {
        const It = b(ut);
        ut += et.amount;
        const C = b(ut), he = Math.max(0, It - C);
        return he <= 0 ? tt`` : tt`
                <rect
                  class=${et.className}
                  x=${lt}
                  y=${C.toFixed(1)}
                  width=${_t.toFixed(1)}
                  height=${he.toFixed(1)}
                  rx="2"
                ></rect>
              `;
      });
      return At(j, T.title, tt`${ot}${oi}`);
    }
    const G = T.y ?? H, st = Math.max(0, H - G);
    return At(
      j,
      T.title,
      tt`
              ${ot}
              <rect
                class="bar"
                x=${lt}
                y=${G.toFixed(1)}
                width=${_t.toFixed(1)}
                height=${st.toFixed(1)}
                rx="2"
              ></rect>
            `
    );
  }), it = [];
  let Ot = !1;
  if (o === "line")
    for (const T of I) {
      if (T.y == null) {
        Ot = !1;
        continue;
      }
      it.push(`${Ot ? "L" : "M"}${T.x.toFixed(1)},${T.y.toFixed(1)}`), Ot = !0;
    }
  const jt = o === "line" ? I.map((T, j) => T.y == null ? tt`` : At(
    j,
    T.title,
    tt`
              <circle class="hit" cx=${T.x.toFixed(1)} cy=${T.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${T.x.toFixed(1)} cy=${T.y.toFixed(1)} r="3.5"></circle>
            `
  )) : [];
  return tt`
    <svg
      class=${l.compact ? "series-chart compact" : "series-chart"}
      viewBox=${`0 0 ${p.width} ${p.height}`}
      role="group"
      aria-label=${r}
      preserveAspectRatio="xMidYMid meet"
    >
      ${F.map((T) => {
    const j = b(T);
    return tt`
          <line class="grid" x1=${p.left} y1=${j.toFixed(1)} x2=${p.width - p.right} y2=${j.toFixed(1)}></line>
          <text class="y-label" x=${p.left - 4} y=${(j + 4).toFixed(1)} text-anchor="end">
            ${h(T)}
          </text>
        `;
  })}
      ${Vt}
      ${it.length > 1 ? tt`<path class="line" d=${it.join(" ")}></path>` : tt``}
      ${jt}
      ${I.map(
    (T, j) => j % Ct === 0 || j === I.length - 1 ? tt`<text class="x-label" x=${T.x.toFixed(1)} y=${p.height - 6} text-anchor="middle">${T.label}</text>` : tt``
  )}
    </svg>
  `;
}
function Xr(c, o) {
  const r = [];
  for (const h of c) {
    const l = h[o];
    typeof l == "number" && Number.isFinite(l) && r.push(l);
  }
  return r;
}
function Qr(c, o = 320, r = 56) {
  if (c.length < 2)
    return tt``;
  const h = Math.min(...c), p = Math.max(...c) - h || 1, _ = o / (c.length - 1), x = c.map((g, P) => {
    const A = P * _, v = r - 4 - (g - h) / p * (r - 8);
    return `${A.toFixed(1)},${v.toFixed(1)}`;
  }).join(" ");
  return tt`
    <svg class="chart" viewBox="0 0 ${o} ${r}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${x}></polyline>
    </svg>
  `;
}
const Qi = {
  status: !0,
  drives: !0,
  charges: !0,
  chart_consumption: !0,
  chart_distance: !0,
  chart_energy: !0,
  totals: !0,
  battery_health: !0,
  charging_split: !0,
  vampire_drain: !0,
  consumption_vs_temp: !0
}, Ho = Object.keys(Qi);
function Vi(c) {
  const o = { ...Qi }, r = c == null ? void 0 : c.show;
  if (!r || typeof r != "object")
    return o;
  for (const h of Ho) {
    const l = r[h];
    typeof l == "boolean" && (o[h] = l);
  }
  return o;
}
function ji(c) {
  return c.chart_consumption || c.chart_distance || c.chart_energy || c.totals || c.battery_health || c.charging_split || c.vampire_drain || c.consumption_vs_temp;
}
function ko(c) {
  return c.chart_consumption || c.chart_distance || c.chart_energy || c.totals || c.battery_health || c.charging_split || c.vampire_drain;
}
function Xe(c) {
  const o = [];
  return c.status && o.push("status"), c.drives && o.push("drives"), c.charges && o.push("charges"), o.push("stats"), ji(c) && o.push("charts"), o;
}
function ta(c, o) {
  return c === "drive" ? o.drives ? c : Xe(o)[0] ?? "stats" : c === "stats" || Xe(o).includes(c) ? c : Xe(o)[0] ?? "stats";
}
const ti = "tesla-logger-card";
function To(c) {
  const o = qt(c);
  return !!(o && Array.isArray(o.data));
}
function ea(c) {
  const o = qt(c);
  return !!(o && Array.isArray(o.route) && Array.isArray(o.series));
}
function ia(c) {
  const o = qt(c);
  return !!(o && typeof o.distance_km == "number");
}
function na(c) {
  const o = qt(c);
  return !!(o && Array.isArray(o.buckets));
}
function oa(c) {
  const o = qt(c);
  return (o && Array.isArray(o.data) ? o.data : []).filter((h) => {
    const l = qt(h);
    return !!(l && typeof l.temp_c_bucket == "number");
  });
}
function ct(c) {
  return typeof c == "number" && Number.isFinite(c) ? c : null;
}
const ei = class ei extends se {
  constructor() {
    super(...arguments), this._view = "status", this._bucketIndex = null, this._period = "month", this._page = 1, this._loading = !1, this._error = "";
  }
  setConfig(o) {
    var h;
    if (!o || typeof o.entity != "string" || !o.entity)
      throw new Error("Please select a Tesla Logger entity");
    const r = ((h = this._config) == null ? void 0 : h.entity) !== o.entity;
    this._config = o, r && (this._view = o.default_view || "status", this.clearHistory()), this.ensureVisibleView();
  }
  get flags() {
    return Vi(this._config);
  }
  ensureVisibleView() {
    const o = ta(this._view, this.flags);
    o !== this._view && (this._view = o);
  }
  static getConfigElement() {
    return document.createElement("tesla-logger-card-editor");
  }
  static getStubConfig(o) {
    return { entity: Object.keys(o.states).find((h) => {
      var l, p;
      return ((p = (l = o.states[h]) == null ? void 0 : l.attributes) == null ? void 0 : p.key) === "location";
    }) || "", show: { ...Qi } };
  }
  getCardSize() {
    return 6;
  }
  disconnectedCallback() {
    this.destroyMap(), super.disconnectedCallback();
  }
  updated(o) {
    (o.has("_view") || o.has("_config")) && this.ensureView(), this._view === "drive" && (o.has("_detail") || o.has("_view")) && this.syncMap(), o.has("_view") && this._view !== "drive" && this.destroyMap();
  }
  render() {
    var o;
    return (o = this._config) != null && o.entity ? $`
      <ha-card>
        ${this.header()}
        <div class="tabs" role="tablist">
          ${Xe(this.flags).map((r) => this.tab(r, this.text[r]))}
        </div>
        ${this._error ? $`<p class="message">${this._error}</p>` : M}
        ${this._loading ? $`<p class="message">${this.text.loading}</p>` : M}
        ${this.body()}
      </ha-card>
    ` : $`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;
  }
  get cardLang() {
    var o, r, h;
    return Bo(((r = (o = this.hass) == null ? void 0 : o.locale) == null ? void 0 : r.language) || ((h = this.hass) == null ? void 0 : h.language));
  }
  get text() {
    return Do(this.cardLang);
  }
  get readings() {
    var _, x, g, P;
    const o = /* @__PURE__ */ new Map(), r = this.hass, h = (_ = this._config) == null ? void 0 : _.entity;
    if (!r || !h || !r.states[h])
      return o;
    const l = (g = (x = r.entities) == null ? void 0 : x[h]) == null ? void 0 : g.device_id, p = r.states[h].attributes.vin;
    for (const [A, v] of Object.entries(r.states)) {
      const b = (P = r.entities) == null ? void 0 : P[A], H = !!(l && (b == null ? void 0 : b.device_id) === l), F = !!(p && v.attributes.vin === p);
      if (!H && !F)
        continue;
      const I = (b == null ? void 0 : b.translation_key) || (typeof v.attributes.key == "string" ? v.attributes.key : void 0);
      I && o.set(I, v);
    }
    return o;
  }
  get deviceId() {
    var r, h, l;
    const o = (r = this._config) == null ? void 0 : r.entity;
    if (!(!this.hass || !o))
      return (l = (h = this.hass.entities) == null ? void 0 : h[o]) == null ? void 0 : l.device_id;
  }
  numeric(o) {
    var l;
    const r = (l = this.readings.get(o)) == null ? void 0 : l.state;
    if (!r || r === "unknown" || r === "unavailable")
      return null;
    const h = Number(r);
    return Number.isFinite(h) ? h : null;
  }
  label(o) {
    var h;
    const r = (h = this.readings.get(o)) == null ? void 0 : h.state;
    return !r || r === "unknown" || r === "unavailable" ? null : r;
  }
  header() {
    var P, A, v, b, H, F;
    const o = this.numeric("battery_level"), r = o == null ? "—" : `${Math.round(o)}`, h = o == null ? 0 : Math.max(0, Math.min(100, o)), l = this.label("activity") || "", p = this.numeric("rated_range"), _ = this.deviceId ? (v = (A = (P = this.hass) == null ? void 0 : P.devices) == null ? void 0 : A[this.deviceId]) == null ? void 0 : v.name : void 0, x = (F = (H = this.hass) == null ? void 0 : H.states[((b = this._config) == null ? void 0 : b.entity) || ""]) == null ? void 0 : F.attributes.friendly_name, g = _ || (typeof x == "string" ? x : this.text.unknown);
    return $`
      <div class="header">
        <svg class="ring" viewBox="0 0 36 36" aria-label="${r}%">
          <circle class="track" cx="18" cy="18" r="15.5"></circle>
          <circle
            class="value"
            cx="18"
            cy="18"
            r="15.5"
            pathLength="100"
            stroke-dasharray="${h} 100"
          ></circle>
          <text x="18" y="20">${r}</text>
        </svg>
        <div>
          <p class="name">${g}</p>
          <p class="sub">
            ${this.text.range}
            ${p == null ? "—" : `${V(p, 0, this.cardLang)} km`}
            · ${this.locationText()}
          </p>
          <span class="pill">${Or(this.text, l)}</span>
        </div>
      </div>
    `;
  }
  locationText() {
    const o = this.label("geofence");
    if (o)
      return o;
    const r = this.readings.get("location"), h = r == null ? void 0 : r.attributes.latitude, l = r == null ? void 0 : r.attributes.longitude;
    return typeof h == "number" && typeof l == "number" ? `${h.toFixed(4)}, ${l.toFixed(4)}` : this.text.unknown;
  }
  tab(o, r) {
    return $`
      <button
        role="tab"
        aria-selected=${this._view === o ? "true" : "false"}
        @click=${() => this.open(o)}
      >
        ${r}
      </button>
    `;
  }
  open(o) {
    this._error = "", this._view = o, o !== "drive" && (this._driveId = void 0, this._detail = void 0);
  }
  body() {
    return this._view === "status" ? this.status() : this._view === "drives" ? this.drives() : this._view === "drive" ? this.drive() : this._view === "charges" ? this.charges() : this._view === "charts" ? this.charts() : this.stats();
  }
  metric(o, r) {
    return $`<div class="metric"><span>${o}</span><strong>${r}</strong></div>`;
  }
  quantity(o, r, h) {
    const l = this.numeric(o);
    return l == null ? "—" : `${V(l, r, this.cardLang)} ${h}`;
  }
  status() {
    return $`
      <div class="grid">
        ${this.metric(this.text.speed, this.quantity("speed", 0, "km/h"))}
        ${this.metric(this.text.power, this.quantity("power", 1, "kW"))}
        ${this.metric(this.text.inside, this.quantity("inside_temp", 1, "°C"))}
        ${this.metric(this.text.outside, this.quantity("outside_temp", 1, "°C"))}
        ${this.metric(this.text.charger, this.quantity("charger_power", 1, "kW"))}
        ${this.metric(this.text.added, this.quantity("energy_added", 1, "kWh"))}
        ${this.metric(this.text.odometer, this.quantity("odometer", 0, "km"))}
        ${this.metric(this.text.limit, this.quantity("charge_limit", 0, "%"))}
      </div>
    `;
  }
  drives() {
    const o = this._drives;
    return $`
      <div class="toolbar">
        <span>${this.text.page} ${(o == null ? void 0 : o.page) ?? this._page}</span>
        <button @click=${() => this.reload()}>${this.text.refresh}</button>
      </div>
      <ul class="list">
        ${((o == null ? void 0 : o.data) || []).map(
      (r) => this.historyEntry(
        r.start_at,
        this.driveDetails(r),
        () => this.openDrive(r.id)
      )
    )}
      </ul>
      ${o && o.data.length === 0 ? $`<p class="message">${this.text.emptyDrives}</p>` : M}
      ${this.pager(o)}
    `;
  }
  drive() {
    const o = this._detail, r = Wi(o == null ? void 0 : o.energy_used_kwh, o == null ? void 0 : o.distance_km);
    return $`
      <div class="toolbar">
        <button @click=${() => this.open("drives")}>${this.text.back}</button>
        <span>${o ? this.when(o.start_at) : ""}</span>
      </div>
      ${o ? $`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(o.distance_km))}
              ${this.metric(this.text.duration, Le(o.duration_s))}
              ${this.metric(this.text.energy, this.kwh(o.energy_used_kwh))}
              ${this.metric(
      this.text.efficiency,
      r == null ? "—" : `${V(r, 0, this.cardLang)} Wh/km`
    )}
            </div>
            <p class="message">${this.text.map}</p>
            ${o.route.length ? $`<div class="map"></div>` : $`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart, o.series, "speed_kmh", "km/h")}
            ${this.chart(this.text.elevationChart, o.series, "elevation_m", "m")}
            ${this.chart(this.text.batteryChart, o.series, "battery_level", "%")}
          ` : M}
    `;
  }
  charges() {
    const o = this._charges;
    return $`
      <div class="toolbar">
        <span>${this.text.page} ${(o == null ? void 0 : o.page) ?? this._page}</span>
        <button @click=${() => this.reload()}>${this.text.refresh}</button>
      </div>
      <ul class="list">
        ${((o == null ? void 0 : o.data) || []).map(
      (r) => this.historyEntry(r.start_at, this.chargeDetails(r))
    )}
      </ul>
      ${o && o.data.length === 0 ? $`<p class="message">${this.text.emptyCharges}</p>` : M}
      ${this.pager(o)}
    `;
  }
  stats() {
    const o = this._stats, r = Wi(o == null ? void 0 : o.energy_used_kwh, o == null ? void 0 : o.distance_km);
    return $`
      ${this.periodBar()}
      ${o ? $`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(o.distance_km))}
              ${this.metric(this.text.duration, Le(o.drive_duration_s))}
              ${this.metric(this.text.energy, this.kwh(o.energy_used_kwh))}
              ${this.metric(
      this.text.efficiency,
      r == null ? "—" : `${V(r, 0, this.cardLang)} Wh/km`
    )}
              ${this.metric(this.text.drivesCount, String(o.drive_count))}
              ${this.metric(this.text.chargesCount, String(o.charge_count))}
              ${this.metric(this.text.energyAdded, this.kwh(o.energy_added_kwh))}
            </div>
          ` : M}
    `;
  }
  periodBar() {
    return $`
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${["week", "month", "year"].map(
      (o) => $`
            <button
              type="button"
              aria-pressed=${this._period === o ? "true" : "false"}
              class=${this._period === o ? "active" : ""}
              @click=${() => this.setPeriod(o)}
            >
              ${this.text[o]}
            </button>
          `
    )}
      </div>
    `;
  }
  charts() {
    const o = this.flags, r = this._series, h = (r == null ? void 0 : r.buckets) ?? [], l = h.length ? this.selectedBucketIndex(h) : -1, p = o.chart_consumption || o.chart_distance || o.chart_energy, _ = o.battery_health || o.charging_split || o.vampire_drain || o.consumption_vs_temp;
    return $`
      ${this.periodBar()}
      ${p && r && h.length === 0 ? $`<p class="message">${this.text.emptySeries}</p>` : M}
      ${p && h.length ? $`
            <div class="series-list">
              ${o.chart_consumption ? this.seriesFigure(
      "line",
      this.text.consumptionChart,
      "Wh/km",
      (x) => ct(x.wh_per_km),
      l
    ) : M}
              ${o.chart_distance ? this.seriesFigure(
      "bar",
      this.text.distance,
      "km",
      (x) => ct(x.distance_km),
      l
    ) : M}
              ${o.chart_energy ? this.seriesFigure(
      "bar",
      this.text.chargedChart,
      "kWh",
      (x) => ct(x.energy_charged_kwh),
      l
    ) : M}
            </div>
          ` : M}
      ${o.totals && l >= 0 ? this.bucketTotals(h[l]) : M}
      ${_ ? $`
            <div class="series-extra">
              ${o.battery_health && l >= 0 ? this.seriesFigure(
      "line",
      this.text.batteryHealth,
      "km",
      (x) => ct(x.range_at_100_km),
      l,
      !0
    ) : M}
              ${o.charging_split && l >= 0 ? this.acDcFigure(h, l) : M}
              ${o.vampire_drain && l >= 0 ? this.seriesFigure(
      "bar",
      this.text.idleUse,
      "km/j",
      (x) => ct(x.idle_range_loss_km_per_day),
      l,
      !0
    ) : M}
              ${o.consumption_vs_temp ? this.tempFigure() : M}
            </div>
          ` : M}
    `;
  }
  selectedBucketIndex(o) {
    return this._bucketIndex != null && this._bucketIndex >= 0 && this._bucketIndex < o.length ? this._bucketIndex : Kr(
      o.map((r) => r.start),
      this._period
    );
  }
  selectBucket(o) {
    this._bucketIndex = o;
  }
  bucketHeading(o) {
    return Ro(o.start, this._period) ? this._period === "week" ? this.text.thisWeek : this._period === "month" ? this.text.thisMonth : this.text.thisYear : Ui(o.start, this._period, this.cardLang);
  }
  bucketTotals(o) {
    const r = ct(o.energy_used_kwh);
    return $`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(o)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(o.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${Le(o.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(o.energy_charged_kwh)}</strong>
            ${r == null ? M : $`<span class="totals-sub">${this.text.consumed} ${this.kwh(r)}</span>`}
          </div>
        </div>
      </section>
    `;
  }
  seriesFigure(o, r, h, l, p, _ = !1) {
    var F;
    const x = ((F = this._series) == null ? void 0 : F.buckets) ?? [], g = h === "Wh/km" ? 0 : 1, P = x.map((I) => {
      const Ct = l(I), At = Ui(I.start, this._period, this.cardLang), Vt = Ct == null ? "—" : `${V(Ct, g, this.cardLang)} ${h}`;
      return { label: At, value: Ct, title: `${At} · ${Vt}` };
    }), A = _ ? P[p] : P[P.length - 1], v = _ ? this.bucketHeading(x[p]) : this.text.latest, b = (A == null ? void 0 : A.value) == null ? "—" : `${V(A.value, g, this.cardLang)} ${h}`, H = `${r}. ${v} ${b}`;
    return $`
      <figure class=${_ ? "series-card compact" : "series-card"}>
        <figcaption>
          <span class="series-title">${r}</span>
          <span class="series-value">${v} ${b}</span>
        </figcaption>
        ${this.drawSeries(P, o, H, p, _)}
      </figure>
    `;
  }
  acDcFigure(o, r) {
    const h = o[r], l = ct(h == null ? void 0 : h.dc_share_pct), p = ct(h == null ? void 0 : h.charge_cost), _ = ct(h == null ? void 0 : h.cost_per_km), x = o.map((P) => {
      const A = Ui(P.start, this._period, this.cardLang), v = ct(P.ac_energy_kwh), b = ct(P.dc_energy_kwh), H = v == null ? "—" : `${V(v, 1, this.cardLang)} kWh`, F = b == null ? "—" : `${V(b, 1, this.cardLang)} kWh`;
      return {
        label: A,
        value: v,
        stack: b,
        title: `${A} · AC ${H} · DC ${F}`
      };
    }), g = `${this.text.acDc}. ${this.bucketHeading(h)}`;
    return $`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">
          ${l == null ? M : $`${V(l, 0, this.cardLang)} % ${this.text.fastShare}`}
          ${p == null ? M : $`${l == null ? "" : " · "}${this.text.cost} ${V(p, 2, this.cardLang)}`}
          ${_ == null ? M : $`<span class="totals-sub">${V(_, 2, this.cardLang)} ${this.text.perKm}</span>`}
        </p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries(x, "stack", g, r, !0)}
      </figure>
    `;
  }
  tempFigure() {
    const r = (this._tempBins ?? []).map((h) => {
      const l = h.temp_c_bucket, p = `${V(l, 0, this.cardLang)}–${V(l + 5, 0, this.cardLang)}°`, _ = ct(h.wh_per_km), x = ct(h.distance_km), g = _ == null ? "—" : `${V(_, 0, this.cardLang)} Wh/km`, P = x == null ? "" : ` · ${V(x, 0, this.cardLang)} km`;
      return { label: p, value: _, title: `${p} · ${g}${P}` };
    });
    return $`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${r.length ? this.drawSeries(r, "bar", this.text.tempUse, -1, !0, !1) : $`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `;
  }
  drawSeries(o, r, h, l, p, _ = !0) {
    return Jr(o, r, h, (g) => V(g, g >= 10 || g === 0 ? 0 : 1, this.cardLang), {
      compact: p,
      selected: l,
      onSelect: _ ? (g) => this.selectBucket(g) : void 0
    });
  }
  chart(o, r, h, l) {
    const p = Xr(r, h);
    if (p.length < 2)
      return M;
    const _ = p[p.length - 1];
    return $`
      <div class="chart-block">
        <span class="muted">${o} · ${V(_, 0, this.cardLang)} ${l}</span>
        ${Qr(p)}
      </div>
    `;
  }
  pager(o) {
    if (!o || o.total <= o.per_page)
      return M;
    const r = Math.ceil(o.total / o.per_page);
    return $`
      <div class="pager">
        <button ?disabled=${o.page <= 1} @click=${() => this.setPage(o.page - 1)}>
          ${this.text.previous}
        </button>
        <button ?disabled=${o.page >= r} @click=${() => this.setPage(o.page + 1)}>
          ${this.text.next}
        </button>
      </div>
    `;
  }
  historyEntry(o, r, h) {
    const l = Br(r), p = $`
      <strong class="entry-when">
        <time datetime=${o}>${Dr(o, this.cardLang)}</time>
      </strong>
      ${l ? $`<span class="entry-meta" title=${l}>${l}</span>` : M}
    `;
    return h ? $`
        <li>
          <button type="button" class="entry" @click=${h}>${p}</button>
        </li>
      ` : $`<li><div class="entry">${p}</div></li>`;
  }
  driveDetails(o) {
    const r = Wi(o.energy_used_kwh, o.distance_km), h = this.place(o.start_address), l = this.place(o.end_address), p = h && l ? `${h} → ${l}` : h || l;
    return [
      o.duration_s == null ? null : Le(o.duration_s),
      o.distance_km == null ? null : this.km(o.distance_km),
      r == null ? null : `${V(r, 0, this.cardLang)} Wh/km`,
      o.energy_used_kwh == null ? null : this.kwh(o.energy_used_kwh),
      p
    ];
  }
  chargeDetails(o) {
    return [
      o.duration_s == null ? null : Le(o.duration_s),
      o.energy_added_kwh == null ? null : this.kwh(o.energy_added_kwh),
      o.max_power_kw == null ? null : `${V(o.max_power_kw, 0, this.cardLang)} kW`,
      Zr(o.charger_type)
    ];
  }
  place(o) {
    return typeof o != "string" ? null : o.trim() || null;
  }
  km(o) {
    return o == null ? "—" : `${V(o, 1, this.cardLang)} km`;
  }
  kwh(o) {
    return o == null ? "—" : `${V(o, 1, this.cardLang)} kWh`;
  }
  when(o) {
    const r = new Date(o);
    return Number.isNaN(r.getTime()) ? o : r.toLocaleString(this.cardLang === "fr" ? "fr-FR" : "en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  openDrive(o) {
    this._driveId = o, this._detail = void 0, this._view = "drive";
  }
  setPeriod(o) {
    if (this._period = o, this._bucketIndex = null, this._view === "charts") {
      this.loadSeries();
      return;
    }
    this._stats = void 0, this.loadStats();
  }
  setPage(o) {
    this._page = o, this._view === "drives" ? (this._drives = void 0, this.loadDrives()) : this._view === "charges" && (this._charges = void 0, this.loadCharges());
  }
  reload() {
    this.clearHistory(), this.ensureView();
  }
  clearHistory() {
    this._drives = void 0, this._charges = void 0, this._detail = void 0, this._stats = void 0, this._series = void 0, this._tempBins = void 0, this._seriesPeriod = void 0, this._bucketIndex = null, this._page = 1, this._error = "";
  }
  async ensureView() {
    this._view === "drives" && this.flags.drives && !this._drives ? await this.loadDrives() : this._view === "charges" && this.flags.charges && !this._charges ? await this.loadCharges() : this._view === "stats" && !this._stats ? await this.loadStats() : this._view === "charts" && ji(this.flags) && this.seriesStale() ? await this.loadSeries() : this._view === "drive" && this.flags.drives && this._driveId != null && !this._detail && await this.loadDrive();
  }
  async loadDrives() {
    await this.load("drives", async () => {
      const o = await this.call("get_drives", { page: this._page, per_page: 20 });
      if (!To(o))
        throw new Error(this.text.failed);
      this._drives = o;
    });
  }
  async loadCharges() {
    await this.load("charges", async () => {
      const o = await this.call("get_charges", { page: this._page, per_page: 20 });
      if (!To(o))
        throw new Error(this.text.failed);
      this._charges = o;
    });
  }
  async loadDrive() {
    const o = this._driveId;
    o != null && await this.load("drive", async () => {
      const r = await this.call("get_drive", { drive_id: o, max_points: 300 });
      if (!ea(r))
        throw new Error(this.text.failed);
      this._detail = r;
    });
  }
  seriesStale() {
    const o = this.flags;
    return !!(this._seriesPeriod !== this._period || ko(o) && !this._series || o.consumption_vs_temp && !this._tempBins);
  }
  async loadSeries() {
    const o = this.flags;
    if (!ji(o))
      return;
    const r = this._period, h = ko(o), l = o.consumption_vs_temp;
    h && (this._series = void 0), l && (this._tempBins = void 0), await this.load("charts", async () => {
      const p = Fr[r];
      if (h) {
        const _ = await this.call("get_stats_series", { period: r, count: p });
        if (!na(_))
          throw new Error(this.text.failed);
        this._series = _;
      }
      if (l)
        try {
          this._tempBins = oa(await this.call("get_consumption_by_temp", { period: r, count: p }));
        } catch {
          this._tempBins = [];
        }
      this._seriesPeriod = r;
    });
  }
  async loadStats() {
    const o = this._period;
    await this.load("stats", async () => {
      const r = Nr(o), h = await this.call("get_stats", r);
      if (!ia(h))
        throw new Error(this.text.failed);
      this._stats = h;
    });
  }
  async load(o, r) {
    if (!this.deviceId) {
      this._error = this.text.missingDevice;
      return;
    }
    this._loading = !0, this._error = "";
    try {
      if (await r(), this._view !== o && o !== "drive")
        return;
    } catch (h) {
      this._error = Hr(h, this.text.failed);
    } finally {
      this._loading = !1;
    }
  }
  async call(o, r) {
    if (!this.hass || !this.deviceId)
      throw new Error(this.text.missingDevice);
    const h = await this.hass.callService(
      "tesla_logger",
      o,
      { device_id: this.deviceId, ...r },
      void 0,
      !1,
      !0
    ), l = qt(h);
    return l && "response" in l ? l.response : h;
  }
  syncMap() {
    var g, P, A, v;
    const o = this.renderRoot.querySelector(".map"), r = ((g = this._detail) == null ? void 0 : g.route) ?? [];
    if (!o || r.length === 0)
      return;
    if (this.map && this.mapEl !== o && this.destroyMap(), !this.map) {
      if (this.map = ne.map(o, { zoomControl: !0, attributionControl: !0 }), ne.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        // HA serves Referrer-Policy: no-referrer; override per-tile so OSM gets a Referer.
        referrerPolicy: "strict-origin-when-cross-origin",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map), (A = (P = this.hass) == null ? void 0 : P.themes) != null && A.darkMode) {
        const b = this.map.getPane("tilePane");
        b && (b.style.filter = "invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9)");
      }
      this.mapEl = o;
    }
    (v = this.routeLayer) == null || v.remove();
    const h = ne.layerGroup().addTo(this.map), l = r.map(
      (b) => [b.latitude, b.longitude]
    ), p = getComputedStyle(this).getPropertyValue("--primary-color").trim() || "#03a9f4", _ = ne.polyline(l, { color: p, weight: 4 }).addTo(h);
    ne.circleMarker(l[0], {
      radius: 6,
      color: "#2e7d32",
      fillColor: "#2e7d32",
      fillOpacity: 1
    }).addTo(h);
    const x = l[l.length - 1];
    ne.circleMarker(x, {
      radius: 6,
      color: "#c62828",
      fillColor: "#c62828",
      fillOpacity: 1
    }).addTo(h), this.routeLayer = h, this.map.fitBounds(_.getBounds().pad(0.15)), requestAnimationFrame(() => {
      var b;
      return (b = this.map) == null ? void 0 : b.invalidateSize();
    });
  }
  destroyMap() {
    var o;
    (o = this.map) == null || o.remove(), this.map = void 0, this.mapEl = void 0, this.routeLayer = void 0;
  }
};
ei.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _view: { state: !0 },
  _drives: { state: !0 },
  _charges: { state: !0 },
  _detail: { state: !0 },
  _stats: { state: !0 },
  _series: { state: !0 },
  _tempBins: { state: !0 },
  _bucketIndex: { state: !0 },
  _period: { state: !0 },
  _page: { state: !0 },
  _loading: { state: !0 },
  _error: { state: !0 }
}, ei.styles = [
  So(pr),
  _r`
      :host {
        display: block;
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header {
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 12px;
        align-items: center;
        padding: 16px 16px 8px;
      }
      .ring {
        width: 72px;
        height: 72px;
      }
      .ring circle {
        fill: none;
        stroke-width: 3.5;
      }
      .ring .track {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.35));
      }
      .ring .value {
        stroke: var(--primary-color, #03a9f4);
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 18px 18px;
      }
      .ring text {
        fill: var(--primary-text-color, #212121);
        font-size: 8px;
        text-anchor: middle;
        font-weight: 600;
      }
      .name {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .sub {
        margin: 2px 0 0;
        color: var(--secondary-text-color);
        font-size: 0.92rem;
      }
      .pill {
        display: inline-block;
        margin-top: 6px;
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-text-color);
        font-size: 0.78rem;
        letter-spacing: 0.02em;
      }
      .tabs, .periods, .pager {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding: 4px 12px 8px;
      }
      button {
        border: 0;
        background: transparent;
        color: var(--secondary-text-color);
        font: inherit;
        min-height: 40px;
        padding: 8px 10px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
      }
      button[aria-selected="true"], button.active {
        color: var(--primary-text-color);
        border-bottom-color: var(--primary-color, #03a9f4);
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .metric {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 12px;
        padding: 10px 12px;
      }
      .metric span, .muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .metric strong {
        color: var(--primary-text-color);
        font-size: 1rem;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0;
        padding: 0 12px 4px;
        list-style: none;
      }
      .entry {
        display: flex;
        flex-direction: column;
        gap: 1px;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding: 5px 8px;
        border: 0;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.16));
        color: var(--primary-text-color, #212121);
        text-align: left;
      }
      button.entry {
        font: inherit;
        min-height: 0;
        border-bottom: 0;
        cursor: pointer;
      }
      button.entry:hover {
        background: color-mix(
          in srgb,
          var(--primary-text-color, #212121) 8%,
          var(--secondary-background-color, transparent)
        );
      }
      button.entry:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      .entry-when {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
        line-height: 1.25;
      }
      .entry-meta {
        display: block;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        color: var(--secondary-text-color);
        font-size: 0.8rem;
        line-height: 1.3;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .map {
        height: 220px;
        margin: 0 12px 8px;
        border-radius: 12px;
        overflow: hidden;
        background: var(--secondary-background-color);
      }
      .chart-block {
        padding: 0 12px 8px;
      }
      .chart {
        width: 100%;
        height: 56px;
        display: block;
      }
      .chart polyline {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
      }
      .series-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card {
        margin: 0;
        padding: 8px 8px 2px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .series-card figcaption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
        padding: 0 4px 2px;
      }
      .series-title {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .series-value {
        color: var(--secondary-text-color);
        font-size: 0.8rem;
      }
      .series-chart {
        width: 100%;
        height: auto;
        display: block;
      }
      .series-chart .grid {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.45));
        stroke-width: 1;
      }
      .series-chart g[role="button"] {
        cursor: pointer;
      }
      .series-chart .bar {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.62;
      }
      .series-chart g.selected .bar,
      .series-chart g[role="button"]:focus-visible .bar {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 1.5;
      }
      .series-chart .hit {
        fill: transparent;
      }
      .series-chart .line {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      .series-chart .dot {
        fill: var(--primary-color, #03a9f4);
        stroke: var(--card-background-color, #fff);
        stroke-width: 1;
        opacity: 0.75;
      }
      .series-chart g.selected .dot,
      .series-chart g[role="button"]:focus-visible .dot {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 2;
      }
      .totals {
        margin: 0 12px 8px;
        padding: 8px 10px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .totals-label {
        margin: 0 0 6px;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .totals-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }
      .totals-row span {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .totals-row strong {
        display: block;
        color: var(--primary-text-color, #212121);
        font-size: 0.95rem;
      }
      .totals-sub {
        margin-top: 2px;
      }
      .series-extra {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card.compact {
        padding: 6px 6px 0;
      }
      .series-card.compact .series-title {
        font-size: 0.82rem;
      }
      .series-note {
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .legend {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
      }
      .swatch {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 2px;
      }
      .swatch.ac {
        background: var(--primary-color, #03a9f4);
      }
      .swatch.dc {
        background: var(--accent-color, #ff9800);
      }
      .series-chart .bar.ac {
        fill: var(--primary-color, #03a9f4);
      }
      .series-chart .bar.dc {
        fill: var(--accent-color, #ff9800);
      }
      .series-chart.compact text {
        font-size: 12px;
      }
      .series-chart text {
        fill: var(--secondary-text-color, currentColor);
        font-size: 11px;
        font-family: inherit;
      }
      .message, .toolbar {
        padding: 4px 16px 8px;
        color: var(--secondary-text-color);
      }
      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      @media (max-width: 420px) {
        .header {
          grid-template-columns: 64px 1fr;
        }
        .list {
          gap: 3px;
          padding: 0 8px 4px;
        }
        .entry {
          padding: 4px 8px;
        }
        .totals-row {
          gap: 4px;
        }
        .totals-row strong {
          font-size: 0.85rem;
        }
        .series-extra {
          grid-template-columns: 1fr;
        }
      }
    `
];
let Gi = ei;
function sa(c, o) {
  const r = c.split(".").pop() ?? c;
  return r === "entity" ? o.entity : r === "default_view" ? o.defaultView : r === "show" ? o.showBlocks : r in o.showFields ? o.showFields[r] : c;
}
const ra = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { integration: "tesla_logger" } }
  },
  {
    name: "default_view",
    selector: {
      select: {
        options: [
          { value: "status", label: "Status" },
          { value: "drives", label: "Drives" },
          { value: "charges", label: "Charges" },
          { value: "stats", label: "Stats" },
          { value: "charts", label: "Charts" }
        ]
      }
    }
  },
  {
    name: "show",
    type: "grid",
    column_min_width: "200px",
    schema: Ho.map((c) => ({ name: c, selector: { boolean: {} } }))
  }
], tn = class tn extends se {
  setConfig(o) {
    this._config = { ...o, show: Vi(o) };
  }
  render() {
    var r;
    if (!this.hass || !this._config)
      return M;
    const o = Do(Bo(((r = this.hass.locale) == null ? void 0 : r.language) || this.hass.language));
    return $`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ra}
        .computeLabel=${(h) => sa(h.name, o)}
        @value-changed=${(h) => {
      const l = { ...this._config, ...h.detail.value };
      this._config = { ...l, show: Vi(l) }, this.dispatchEvent(
        new CustomEvent("config-changed", {
          detail: { config: this._config },
          bubbles: !0,
          composed: !0
        })
      );
    }}
      ></ha-form>
    `;
  }
};
tn.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
};
let Yi = tn;
customElements.get(ti) || customElements.define(ti, Gi);
customElements.get("tesla-logger-card-editor") || customElements.define("tesla-logger-card-editor", Yi);
window.customCards = window.customCards || [];
window.customCards.some((c) => c.type === ti) || window.customCards.push({
  type: ti,
  name: "Tesla Logger",
  description: "Vehicle status, drives, charges, and stats from tesla-logger",
  preview: !1
});
export {
  Gi as TeslaLoggerCard
};
