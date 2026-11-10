var Te = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var Er = Te.exports, Lo;
function Or() {
  return Lo || (Lo = 1, function(h, o) {
    (function(r, l) {
      l(o);
    })(Er, function(r) {
      var l = "1.9.4";
      function c(t) {
        var e, i, n, s;
        for (i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (e in s)
            t[e] = s[e];
        }
        return t;
      }
      var d = Object.create || /* @__PURE__ */ function() {
        function t() {
        }
        return function(e) {
          return t.prototype = e, new t();
        };
      }();
      function p(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
          return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
          return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
        };
      }
      var v = 0;
      function m(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++v), t._leaflet_id;
      }
      function w(t, e, i) {
        var n, s, a, u;
        return u = function() {
          n = !1, s && (a.apply(i, s), s = !1);
        }, a = function() {
          n ? s = arguments : (t.apply(i, arguments), setTimeout(u, e), n = !0);
        }, a;
      }
      function k(t, e, i) {
        var n = e[1], s = e[0], a = n - s;
        return t === n && i ? t : ((t - s) % a + a) % a + s;
      }
      function y() {
        return !1;
      }
      function b(t, e) {
        if (e === !1)
          return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function N(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function R(t) {
        return N(t).split(/\s+/);
      }
      function $(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? d(t.options) : {});
        for (var i in e)
          t.options[i] = e[i];
        return t.options;
      }
      function vt(t, e, i) {
        var n = [];
        for (var s in t)
          n.push(encodeURIComponent(i ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var Pt = /\{ *([\w_ -]+) *\}/g;
      function Ot(t, e) {
        return t.replace(Pt, function(i, n) {
          var s = e[n];
          if (s === void 0)
            throw new Error("No value provided for variable " + i);
          return typeof s == "function" && (s = s(e)), s;
        });
      }
      var Q = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function It(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1;
      }
      var Yt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function A(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var j = 0;
      function _t(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - j));
        return j = e + i, window.setTimeout(t, i);
      }
      var lt = window.requestAnimationFrame || A("RequestAnimationFrame") || _t, ot = window.cancelAnimationFrame || A("CancelAnimationFrame") || A("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function G(t, e, i) {
        if (i && lt === _t)
          t.call(e);
        else
          return lt.call(window, p(t, e));
      }
      function st(t) {
        t && ot.call(window, t);
      }
      var di = {
        __proto__: null,
        extend: c,
        create: d,
        bind: p,
        get lastId() {
          return v;
        },
        stamp: m,
        throttle: w,
        wrapNum: k,
        falseFn: y,
        formatNum: b,
        trim: N,
        splitWords: R,
        setOptions: $,
        getParamString: vt,
        template: Ot,
        isArray: Q,
        indexOf: It,
        emptyImageUrl: Yt,
        requestFn: lt,
        cancelFn: ot,
        requestAnimFrame: G,
        cancelAnimFrame: st
      };
      function ct() {
      }
      ct.extend = function(t) {
        var e = function() {
          $(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = d(i);
        n.constructor = e, e.prototype = n;
        for (var s in this)
          Object.prototype.hasOwnProperty.call(this, s) && s !== "prototype" && s !== "__super__" && (e[s] = this[s]);
        return t.statics && c(e, t.statics), t.includes && (fi(t.includes), c.apply(null, [n].concat(t.includes))), c(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? d(i.options) : {}, c(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var a = 0, u = n._initHooks.length; a < u; a++)
              n._initHooks[a].call(this);
          }
        }, e;
      }, ct.include = function(t) {
        var e = this.prototype.options;
        return c(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, ct.mergeOptions = function(t) {
        return c(this.prototype.options, t), this;
      }, ct.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function fi(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = Q(t) ? t : [t];
          for (var e = 0; e < t.length; e++)
            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var it = {
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
            t = R(t);
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
            t = R(t);
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
                  n[s].fn = y;
              delete this._events[t];
              return;
            }
            if (typeof e != "function") {
              console.warn("wrong listener type: " + typeof e);
              return;
            }
            var u = this._listens(t, e, i);
            if (u !== !1) {
              var f = n[u];
              this._firingCount && (f.fn = y, this._events[t] = n = n.slice()), n.splice(u, 1);
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
          var n = c({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var s = this._events[t];
            if (s) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var a = 0, u = s.length; a < u; a++) {
                var f = s[a], _ = f.fn;
                f.once && this.off(t, _, f.ctx), _.call(f.ctx || this, n);
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
            t = R(t);
            for (var s = 0, a = t.length; s < a; s++)
              this._on(t[s], e, i, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(t) {
          return this._eventParents = this._eventParents || {}, this._eventParents[m(t)] = t, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[m(t)], this;
        },
        _propagateEvent: function(t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, c({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      it.addEventListener = it.on, it.removeEventListener = it.clearAllEventListeners = it.off, it.addOneTimeEventListener = it.once, it.fireEvent = it.fire, it.hasEventListeners = it.listens;
      var Zt = ct.extend(it);
      function S(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var ce = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      S.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new S(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(z(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(z(t));
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
          return new S(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new S(this.x / t.x, this.y / t.y);
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
          return this.x = ce(this.x), this.y = ce(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = z(t);
          var e = t.x - this.x, i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = z(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = z(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + b(this.x) + ", " + b(this.y) + ")";
        }
      };
      function z(t, e, i) {
        return t instanceof S ? t : Q(t) ? new S(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new S(t.x, t.y) : new S(t, e, i);
      }
      function U(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
            this.extend(i[n]);
      }
      U.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e, i;
          if (!t)
            return this;
          if (t instanceof S || typeof t[0] == "number" || "x" in t)
            e = i = z(t);
          else if (t = rt(t), e = t.min, i = t.max, !e || !i)
            return this;
          return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return z(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return z(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return z(this.max.x, this.min.y);
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
          return typeof t[0] == "number" || t instanceof S ? t = z(t) : t = rt(t), t instanceof U ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
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
            z(e.x - n, e.y - s),
            z(i.x + n, i.y + s)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = rt(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function rt(t, e) {
        return !t || t instanceof U ? t : new U(t, e);
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
          if (t instanceof H)
            n = t, s = t;
          else if (t instanceof at) {
            if (n = t._southWest, s = t._northEast, !n || !s)
              return this;
          } else
            return t ? this.extend(Z(t) || Y(t)) : this;
          return !e && !i ? (this._southWest = new H(n.lat, n.lng), this._northEast = new H(s.lat, s.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(s.lat, i.lat), i.lng = Math.max(s.lng, i.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, s = Math.abs(e.lng - i.lng) * t;
          return new at(
            new H(e.lat - n, e.lng - s),
            new H(i.lat + n, i.lng + s)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new H(
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
          return new H(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new H(this.getSouth(), this.getEast());
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
          typeof t[0] == "number" || t instanceof H || "lat" in t ? t = Z(t) : t = Y(t);
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
      function H(t, e, i) {
        if (isNaN(t) || isNaN(e))
          throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
      }
      H.prototype = {
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
          return Mt.distance(this, Z(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Mt.wrapLatLng(this);
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
          return new H(this.lat, this.lng, this.alt);
        }
      };
      function Z(t, e, i) {
        return t instanceof H ? t : Q(t) && typeof t[0] != "object" ? t.length === 3 ? new H(t[0], t[1], t[2]) : t.length === 2 ? new H(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new H(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new H(t, e, i);
      }
      var Lt = {
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
          return new U(n, s);
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
          var e = this.wrapLng ? k(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? k(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
          return new H(i, e, n);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(t) {
          var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, s = e.lng - i.lng;
          if (n === 0 && s === 0)
            return t;
          var a = t.getSouthWest(), u = t.getNorthEast(), f = new H(a.lat - n, a.lng - s), _ = new H(u.lat - n, u.lng - s);
          return new at(f, _);
        }
      }, Mt = c({}, Lt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, e) {
          var i = Math.PI / 180, n = t.lat * i, s = e.lat * i, a = Math.sin((e.lat - t.lat) * i / 2), u = Math.sin((e.lng - t.lng) * i / 2), f = a * a + Math.cos(n) * Math.cos(s) * u * u, _ = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
          return this.R * _;
        }
      }), fn = 6378137, pi = {
        R: fn,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = Math.sin(n * e);
          return new S(
            this.R * t.lng * e,
            this.R * Math.log((1 + s) / (1 - s)) / 2
          );
        },
        unproject: function(t) {
          var e = 180 / Math.PI;
          return new H(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            t.x * e / this.R
          );
        },
        bounds: function() {
          var t = fn * Math.PI;
          return new U([-t, -t], [t, t]);
        }()
      };
      function _i(t, e, i, n) {
        if (Q(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      _i.prototype = {
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
          return e = e || 1, new S(
            (t.x / e - this._b) / this._a,
            (t.y / e - this._d) / this._c
          );
        }
      };
      function ue(t, e, i, n) {
        return new _i(t, e, i, n);
      }
      var mi = c({}, Mt, {
        code: "EPSG:3857",
        projection: pi,
        transformation: function() {
          var t = 0.5 / (Math.PI * pi.R);
          return ue(t, 0.5, -t, 0.5);
        }()
      }), ls = c({}, mi, {
        code: "EPSG:900913"
      });
      function pn(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function _n(t, e) {
        var i = "", n, s, a, u, f, _;
        for (n = 0, a = t.length; n < a; n++) {
          for (f = t[n], s = 0, u = f.length; s < u; s++)
            _ = f[s], i += (s ? "L" : "M") + _.x + " " + _.y;
          i += e ? P.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var gi = document.documentElement.style, De = "ActiveXObject" in window, cs = De && !document.addEventListener, mn = "msLaunchUri" in navigator && !("documentMode" in document), vi = yt("webkit"), gn = yt("android"), vn = yt("android 2") || yt("android 3"), us = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), ds = gn && yt("Google") && us < 537 && !("AudioNode" in window), yi = !!window.opera, yn = !mn && yt("chrome"), xn = yt("gecko") && !vi && !yi && !De, fs = !yn && yt("safari"), wn = yt("phantom"), bn = "OTransition" in gi, ps = navigator.platform.indexOf("Win") === 0, Pn = De && "transition" in gi, xi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vn, Ln = "MozPerspective" in gi, _s = !window.L_DISABLE_3D && (Pn || xi || Ln) && !bn && !wn, de = typeof orientation < "u" || yt("mobile"), ms = de && vi, gs = de && xi, kn = !window.PointerEvent && window.MSPointerEvent, Tn = !!(window.PointerEvent || kn), Cn = "ontouchstart" in window || !!window.TouchEvent, vs = !window.L_NO_TOUCH && (Cn || Tn), ys = de && yi, xs = de && xn, ws = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, bs = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", y, e), window.removeEventListener("testPassiveEventSupport", y, e);
        } catch {
        }
        return t;
      }(), Ps = function() {
        return !!document.createElement("canvas").getContext;
      }(), wi = !!(document.createElementNS && pn("svg").createSVGRect), Ls = !!wi && function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), ks = !wi && function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      }(), Ts = navigator.platform.indexOf("Mac") === 0, Cs = navigator.platform.indexOf("Linux") === 0;
      function yt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var P = {
        ie: De,
        ielt9: cs,
        edge: mn,
        webkit: vi,
        android: gn,
        android23: vn,
        androidStock: ds,
        opera: yi,
        chrome: yn,
        gecko: xn,
        safari: fs,
        phantom: wn,
        opera12: bn,
        win: ps,
        ie3d: Pn,
        webkit3d: xi,
        gecko3d: Ln,
        any3d: _s,
        mobile: de,
        mobileWebkit: ms,
        mobileWebkit3d: gs,
        msPointer: kn,
        pointer: Tn,
        touch: vs,
        touchNative: Cn,
        mobileOpera: ys,
        mobileGecko: xs,
        retina: ws,
        passiveEvents: bs,
        canvas: Ps,
        svg: wi,
        vml: ks,
        inlineSvg: Ls,
        mac: Ts,
        linux: Cs
      }, An = P.msPointer ? "MSPointerDown" : "pointerdown", Mn = P.msPointer ? "MSPointerMove" : "pointermove", Sn = P.msPointer ? "MSPointerUp" : "pointerup", $n = P.msPointer ? "MSPointerCancel" : "pointercancel", bi = {
        touchstart: An,
        touchmove: Mn,
        touchend: Sn,
        touchcancel: $n
      }, zn = {
        touchstart: Es,
        touchmove: Ne,
        touchend: Ne,
        touchcancel: Ne
      }, Kt = {}, En = !1;
      function As(t, e, i) {
        return e === "touchstart" && zs(), zn[e] ? (i = zn[e].bind(this, i), t.addEventListener(bi[e], i, !1), i) : (console.warn("wrong event specified:", e), y);
      }
      function Ms(t, e, i) {
        if (!bi[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(bi[e], i, !1);
      }
      function Ss(t) {
        Kt[t.pointerId] = t;
      }
      function $s(t) {
        Kt[t.pointerId] && (Kt[t.pointerId] = t);
      }
      function On(t) {
        delete Kt[t.pointerId];
      }
      function zs() {
        En || (document.addEventListener(An, Ss, !0), document.addEventListener(Mn, $s, !0), document.addEventListener(Sn, On, !0), document.addEventListener($n, On, !0), En = !0);
      }
      function Ne(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in Kt)
            e.touches.push(Kt[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function Es(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && tt(e), Ne(t, e);
      }
      function Os(t) {
        var e = {}, i, n;
        for (n in t)
          i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
      }
      var Is = 200;
      function Zs(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function s(a) {
          if (a.detail !== 1) {
            n = a.detail;
            return;
          }
          if (!(a.pointerType === "mouse" || a.sourceCapabilities && !a.sourceCapabilities.firesTouchEvents)) {
            var u = Nn(a);
            if (!(u.some(function(_) {
              return _ instanceof HTMLLabelElement && _.attributes.for;
            }) && !u.some(function(_) {
              return _ instanceof HTMLInputElement || _ instanceof HTMLSelectElement;
            }))) {
              var f = Date.now();
              f - i <= Is ? (n++, n === 2 && e(Os(a))) : n = 1, i = f;
            }
          }
        }
        return t.addEventListener("click", s), {
          dblclick: e,
          simDblclick: s
        };
      }
      function Bs(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var Pi = Fe(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), fe = Fe(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), In = fe === "webkitTransition" || fe === "OTransition" ? fe + "End" : "transitionend";
      function Zn(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function pe(t, e) {
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
      function q(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function Re(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function Jt(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function Xt(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function Li(t, e) {
        if (t.classList !== void 0)
          return t.classList.contains(e);
        var i = He(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function O(t, e) {
        if (t.classList !== void 0)
          for (var i = R(e), n = 0, s = i.length; n < s; n++)
            t.classList.add(i[n]);
        else if (!Li(t, e)) {
          var a = He(t);
          ki(t, (a ? a + " " : "") + e);
        }
      }
      function V(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : ki(t, N((" " + He(t) + " ").replace(" " + e + " ", " ")));
      }
      function ki(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function He(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function dt(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Ds(t, e);
      }
      function Ds(t, e) {
        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1)
            return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function Fe(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1;
      }
      function Bt(t, e, i) {
        var n = e || new S(0, 0);
        t.style[Pi] = (P.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function K(t, e) {
        t._leaflet_pos = e, P.any3d ? Bt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function Dt(t) {
        return t._leaflet_pos || new S(0, 0);
      }
      var _e, me, Ti;
      if ("onselectstart" in document)
        _e = function() {
          E(window, "selectstart", tt);
        }, me = function() {
          F(window, "selectstart", tt);
        };
      else {
        var ge = Fe(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        _e = function() {
          if (ge) {
            var t = document.documentElement.style;
            Ti = t[ge], t[ge] = "none";
          }
        }, me = function() {
          ge && (document.documentElement.style[ge] = Ti, Ti = void 0);
        };
      }
      function Ci() {
        E(window, "dragstart", tt);
      }
      function Ai() {
        F(window, "dragstart", tt);
      }
      var We, Mi;
      function Si(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (Ue(), We = t, Mi = t.style.outlineStyle, t.style.outlineStyle = "none", E(window, "keydown", Ue));
      }
      function Ue() {
        We && (We.style.outlineStyle = Mi, We = void 0, Mi = void 0, F(window, "keydown", Ue));
      }
      function Bn(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function $i(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }
      var Ns = {
        __proto__: null,
        TRANSFORM: Pi,
        TRANSITION: fe,
        TRANSITION_END: In,
        get: Zn,
        getStyle: pe,
        create: D,
        remove: q,
        empty: Re,
        toFront: Jt,
        toBack: Xt,
        hasClass: Li,
        addClass: O,
        removeClass: V,
        setClass: ki,
        getClass: He,
        setOpacity: dt,
        testProp: Fe,
        setTransform: Bt,
        setPosition: K,
        getPosition: Dt,
        get disableTextSelection() {
          return _e;
        },
        get enableTextSelection() {
          return me;
        },
        disableImageDrag: Ci,
        enableImageDrag: Ai,
        preventOutline: Si,
        restoreOutline: Ue,
        getSizedParentNode: Bn,
        getScale: $i
      };
      function E(t, e, i, n) {
        if (e && typeof e == "object")
          for (var s in e)
            Ei(t, s, e[s], i);
        else {
          e = R(e);
          for (var a = 0, u = e.length; a < u; a++)
            Ei(t, e[a], i, n);
        }
        return this;
      }
      var xt = "_leaflet_events";
      function F(t, e, i, n) {
        if (arguments.length === 1)
          Dn(t), delete t[xt];
        else if (e && typeof e == "object")
          for (var s in e)
            Oi(t, s, e[s], i);
        else if (e = R(e), arguments.length === 2)
          Dn(t, function(f) {
            return It(e, f) !== -1;
          });
        else
          for (var a = 0, u = e.length; a < u; a++)
            Oi(t, e[a], i, n);
        return this;
      }
      function Dn(t, e) {
        for (var i in t[xt]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && Oi(t, n, null, null, i);
        }
      }
      var zi = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Ei(t, e, i, n) {
        var s = e + m(i) + (n ? "_" + m(n) : "");
        if (t[xt] && t[xt][s])
          return this;
        var a = function(f) {
          return i.call(n || t, f || window.event);
        }, u = a;
        !P.touchNative && P.pointer && e.indexOf("touch") === 0 ? a = As(t, e, a) : P.touch && e === "dblclick" ? a = Zs(t, a) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(zi[e] || e, a, P.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (a = function(f) {
          f = f || window.event, Zi(t, f) && u(f);
        }, t.addEventListener(zi[e], a, !1)) : t.addEventListener(e, u, !1) : t.attachEvent("on" + e, a), t[xt] = t[xt] || {}, t[xt][s] = a;
      }
      function Oi(t, e, i, n, s) {
        s = s || e + m(i) + (n ? "_" + m(n) : "");
        var a = t[xt] && t[xt][s];
        if (!a)
          return this;
        !P.touchNative && P.pointer && e.indexOf("touch") === 0 ? Ms(t, e, a) : P.touch && e === "dblclick" ? Bs(t, a) : "removeEventListener" in t ? t.removeEventListener(zi[e] || e, a, !1) : t.detachEvent("on" + e, a), t[xt][s] = null;
      }
      function Nt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function Ii(t) {
        return Ei(t, "wheel", Nt), this;
      }
      function ve(t) {
        return E(t, "mousedown touchstart dblclick contextmenu", Nt), t._leaflet_disable_click = !0, this;
      }
      function tt(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function Rt(t) {
        return tt(t), Nt(t), this;
      }
      function Nn(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var e = [], i = t.target; i; )
          e.push(i), i = i.parentNode;
        return e;
      }
      function Rn(t, e) {
        if (!e)
          return new S(t.clientX, t.clientY);
        var i = $i(e), n = i.boundingClientRect;
        return new S(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - n.left) / i.x - e.clientLeft,
          (t.clientY - n.top) / i.y - e.clientTop
        );
      }
      var Rs = P.linux && P.chrome ? window.devicePixelRatio : P.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Hn(t) {
        return P.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / Rs : (
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
      function Zi(t, e) {
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
      var Hs = {
        __proto__: null,
        on: E,
        off: F,
        stopPropagation: Nt,
        disableScrollPropagation: Ii,
        disableClickPropagation: ve,
        preventDefault: tt,
        stop: Rt,
        getPropagationPath: Nn,
        getMousePosition: Rn,
        getWheelDelta: Hn,
        isExternalTarget: Zi,
        addListener: E,
        removeListener: F
      }, Fn = Zt.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Dt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
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
      }), B = Zt.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: mi,
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
          e = $(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(Z(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = fe && P.any3d && !P.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), E(this._proxy, In, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, e, i) {
          if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(Z(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
            i.animate !== void 0 && (i.zoom = c({ animate: i.animate }, i.zoom), i.pan = c({ animate: i.animate, duration: i.duration }, i.pan));
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
          return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, e) {
          return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, e, i) {
          var n = this.getZoomScale(e), s = this.getSize().divideBy(2), a = t instanceof S ? t : this.latLngToContainerPoint(t), u = a.subtract(s).multiplyBy(1 - 1 / n), f = this.containerPointToLatLng(s.add(u));
          return this.setView(f, e, { zoom: i });
        },
        _getBoundsCenterZoom: function(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : Y(t);
          var i = z(e.paddingTopLeft || e.padding || [0, 0]), n = z(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, i.add(n));
          if (s = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, s) : s, s === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: s
            };
          var a = n.subtract(i).divideBy(2), u = this.project(t.getSouthWest(), s), f = this.project(t.getNorthEast(), s), _ = this.unproject(u.add(f).divideBy(2).add(a), s);
          return {
            center: _,
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
          if (t = z(t).round(), e = e || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Fn(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            O(this._mapPane, "leaflet-pan-anim");
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
          if (i = i || {}, i.animate === !1 || !P.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()), s = this.project(t), a = this.getSize(), u = this._zoom;
          t = Z(t), e = e === void 0 ? u : e;
          var f = Math.max(a.x, a.y), _ = f * this.getZoomScale(u, e), g = s.distanceTo(n) || 1, x = 1.42, T = x * x;
          function I(J) {
            var ii = J ? -1 : 1, Mr = J ? _ : f, Sr = _ * _ - f * f + ii * T * T * g * g, $r = 2 * Mr * T * g, ji = Sr / $r, Po = Math.sqrt(ji * ji + 1) - ji, zr = Po < 1e-9 ? -18 : Math.log(Po);
            return zr;
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
          var ht = I(0);
          function oe(J) {
            return f * (X(ht) / X(ht + x * J));
          }
          function kr(J) {
            return f * (X(ht) * pt(ht + x * J) - nt(ht)) / T;
          }
          function Tr(J) {
            return 1 - Math.pow(1 - J, 1.5);
          }
          var Cr = Date.now(), wo = (I(1) - ht) / x, Ar = i.duration ? 1e3 * i.duration : 1e3 * wo * 0.8;
          function bo() {
            var J = (Date.now() - Cr) / Ar, ii = Tr(J) * wo;
            J <= 1 ? (this._flyToFrame = G(bo, this), this._move(
              this.unproject(n.add(s.subtract(n).multiplyBy(kr(ii) / g)), u),
              this.getScaleZoom(f / oe(ii), u),
              { flyTo: !0 }
            )) : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), bo.call(this), this;
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
          var i = z(e.paddingTopLeft || e.padding || [0, 0]), n = z(e.paddingBottomRight || e.padding || [0, 0]), s = this.project(this.getCenter()), a = this.project(t), u = this.getPixelBounds(), f = rt([u.min.add(i), u.max.subtract(n)]), _ = f.getSize();
          if (!f.contains(a)) {
            this._enforcingBounds = !0;
            var g = a.subtract(f.getCenter()), x = f.extend(a).getSize().subtract(_);
            s.x += g.x < 0 ? -x.x : x.x, s.y += g.y < 0 ? -x.y : x.y, this.panTo(this.unproject(s), e), this._enforcingBounds = !1;
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
          t = c({
            animate: !1,
            pan: !0
          }, t === !0 ? { animate: !0 } : t);
          var e = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var i = this.getSize(), n = e.divideBy(2).round(), s = i.divideBy(2).round(), a = n.subtract(s);
          return !a.x && !a.y ? this : (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
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
          if (t = this._locateOptions = c({
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
          var e = p(this._handleGeolocationResponse, this), i = p(this._handleGeolocationError, this);
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
            var e = t.coords.latitude, i = t.coords.longitude, n = new H(e, i), s = n.toBounds(t.coords.accuracy * 2), a = this._locateOptions;
            if (a.setView) {
              var u = this.getBoundsZoom(s);
              this.setView(n, a.maxZoom ? Math.min(u, a.maxZoom) : u);
            }
            var f = {
              latlng: n,
              bounds: s,
              timestamp: t.timestamp
            };
            for (var _ in t.coords)
              typeof t.coords[_] == "number" && (f[_] = t.coords[_]);
            this.fire("locationfound", f);
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), q(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (st(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var t;
          for (t in this._layers)
            this._layers[t].remove();
          for (t in this._panes)
            q(this._panes[t]);
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
          t = Y(t), i = z(i || [0, 0]);
          var n = this.getZoom() || 0, s = this.getMinZoom(), a = this.getMaxZoom(), u = t.getNorthWest(), f = t.getSouthEast(), _ = this.getSize().subtract(i), g = rt(this.project(f, n), this.project(u, n)).getSize(), x = P.any3d ? this.options.zoomSnap : 1, T = _.x / g.x, I = _.y / g.y, nt = e ? Math.max(T, I) : Math.min(T, I);
          return n = this.getScaleZoom(nt, n), x && (n = Math.round(n / (x / 100)) * (x / 100), n = e ? Math.ceil(n / x) * x : Math.floor(n / x) * x), Math.max(s, Math.min(a, n));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new S(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new U(i, i.add(this.getSize()));
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
          return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(z(t), e);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var e = z(t).add(this.getPixelOrigin());
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
          return z(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return z(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var e = this.containerPointToLayerPoint(z(t));
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
          return Rn(t, this._container);
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
          var e = this._container = Zn(t);
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          E(e, "scroll", this._onScroll, this), this._containerId = m(e);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && P.any3d, O(t, "leaflet-container" + (P.touch ? " leaflet-touch" : "") + (P.retina ? " leaflet-retina" : "") + (P.ielt9 ? " leaflet-oldie" : "") + (P.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = pe(t, "position");
          e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), K(this._mapPane, new S(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (O(t.markerPane, "leaflet-zoom-hide"), O(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, e, i) {
          K(this._mapPane, new S(0, 0));
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
          this._targets = {}, this._targets[m(this._container)] = this;
          var e = t ? F : E;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), P.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
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
            if (n = this._targets[m(a)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
              u = !0;
              break;
            }
            if (n && n.listens(e, !0) && (s && !Zi(a, t) || (i.push(n), s)) || a === this._container)
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
            i === "mousedown" && Si(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
          if (t.type === "click") {
            var n = c({}, t);
            n.type = "preclick", this._fireDOMEvent(n, n.type, i);
          }
          var s = this._findEventTargets(t, e);
          if (i) {
            for (var a = [], u = 0; u < i.length; u++)
              i[u].listens(e, !0) && a.push(i[u]);
            s = a.concat(s);
          }
          if (s.length) {
            e === "contextmenu" && tt(t);
            var f = s[0], _ = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var g = f.getLatLng && (!f._radius || f._radius <= 10);
              _.containerPoint = g ? this.latLngToContainerPoint(f.getLatLng()) : this.mouseEventToContainerPoint(t), _.layerPoint = this.containerPointToLayerPoint(_.containerPoint), _.latlng = g ? f.getLatLng() : this.layerPointToLatLng(_.layerPoint);
            }
            for (u = 0; u < s.length; u++)
              if (s[u].fire(e, _, !0), _.originalEvent._stopped || s[u].options.bubblingMouseEvents === !1 && It(this._mouseEvents, e) !== -1)
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
          return Dt(this._mapPane) || new S(0, 0);
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
          var n = this.project(t, e), s = this.getSize().divideBy(2), a = new U(n.subtract(s), n.add(s)), u = this._getBoundsOffset(a, i, e);
          return Math.abs(u.x) <= 1 && Math.abs(u.y) <= 1 ? t : this.unproject(n.add(u), e);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(t, e) {
          if (!e)
            return t;
          var i = this.getPixelBounds(), n = new U(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(t, e, i) {
          var n = rt(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ), s = n.min.subtract(t.min), a = n.max.subtract(t.max), u = this._rebound(s.x, -a.x), f = this._rebound(s.y, -a.y);
          return new S(u, f);
        },
        _rebound: function(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function(t) {
          var e = this.getMinZoom(), i = this.getMaxZoom(), n = P.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          V(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function() {
          var t = this._proxy = D("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
            var i = Pi, n = this._proxy.style[i];
            Bt(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          q(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), e = this.getZoom();
          Bt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
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
          this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, O(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: n
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(p(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && V(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function Fs(t, e) {
        return new B(t, e);
      }
      var mt = ct.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          $(this, t);
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
          return O(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (q(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), ye = function(t) {
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
            q(this._controlCorners[t]);
          q(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Wn = mt.extend({
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
          $(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
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
          var e = this._getLayer(m(t));
          return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          O(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (O(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : V(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return V(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", e = this._container = D("div", t), i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), ve(e), Ii(e);
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
              tt(a), this._expandSafely();
            }
          }, this), i || this.expand(), this._baseLayersList = D("div", t + "-base", n), this._separator = D("div", t + "-separator", n), this._overlaysList = D("div", t + "-overlays", n), e.appendChild(n);
        },
        _getLayer: function(t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && m(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function(t, e, i) {
          this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: t,
            name: e,
            overlay: i
          }), this.options.sortLayers && this._layers.sort(p(function(n, s) {
            return this.options.sortFunction(n.layer, s.layer, n.name, s.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Re(this._baseLayersList), Re(this._overlaysList), this._layerControlInputs = [];
          var t, e, i, n, s = 0;
          for (i = 0; i < this._layers.length; i++)
            n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
          return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
        },
        _onLayerChange: function(t) {
          this._handlingClick || this._update();
          var e = this._getLayer(m(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
          i && this._map.fire(i, e);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(t, e) {
          var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
          return n.innerHTML = i, n.firstChild;
        },
        _addItem: function(t) {
          var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
          t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + m(this), i), this._layerControlInputs.push(n), n.layerId = m(t.layer), E(n, "click", this._onInputClick, this);
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
          this._preventClick = !0, E(t, "click", tt), this.expand();
          var e = this;
          setTimeout(function() {
            F(t, "click", tt), e._preventClick = !1;
          });
        }
      }), Ws = function(t, e, i) {
        return new Wn(t, e, i);
      }, Bi = mt.extend({
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
          return a.innerHTML = t, a.href = "#", a.title = e, a.setAttribute("role", "button"), a.setAttribute("aria-label", e), ve(a), E(a, "click", Rt), E(a, "click", s, this), E(a, "click", this._refocusOnMap, this), a;
        },
        _updateDisabled: function() {
          var t = this._map, e = "leaflet-disabled";
          V(this._zoomInButton, e), V(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (O(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (O(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      B.mergeOptions({
        zoomControl: !0
      }), B.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Bi(), this.addControl(this.zoomControl));
      });
      var Us = function(t) {
        return new Bi(t);
      }, Un = mt.extend({
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
      }), qs = function(t) {
        return new Un(t);
      }, Vs = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Di = mt.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (P.inlineSvg ? Vs + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          $(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = D("div", "leaflet-control-attribution"), ve(this._container);
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
        this.options.attributionControl && new Di().addTo(this);
      });
      var js = function(t) {
        return new Di(t);
      };
      mt.Layers = Wn, mt.Zoom = Bi, mt.Scale = Un, mt.Attribution = Di, ye.layers = Ws, ye.zoom = Us, ye.scale = qs, ye.attribution = js;
      var wt = ct.extend({
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
      wt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var Gs = { Events: it }, qn = P.touch ? "touchstart mousedown" : "mousedown", St = Zt.extend({
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
          $(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (E(this._dragStartTarget, qn, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (St._dragging === this && this.finishDrag(!0), F(this._dragStartTarget, qn, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !Li(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              St._dragging === this && this.finishDrag();
              return;
            }
            if (!(St._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (St._dragging = this, this._preventOutline && Si(this._element), Ci(), _e(), !this._moving)) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t, i = Bn(this._element);
              this._startPoint = new S(e.clientX, e.clientY), this._startPos = Dt(this._element), this._parentScale = $i(i);
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
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new S(e.clientX, e.clientY)._subtract(this._startPoint);
            !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, tt(t), this._moved || (this.fire("dragstart"), this._moved = !0, O(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), O(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
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
          V(document.body, "leaflet-dragging"), this._lastTarget && (V(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), F(document, "mousemove touchmove", this._onMove, this), F(document, "mouseup touchend touchcancel", this._onUp, this), Ai(), me();
          var e = this._moved && this._moving;
          this._moving = !1, St._dragging = !1, e && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Vn(t, e, i) {
        var n, s = [1, 4, 2, 8], a, u, f, _, g, x, T, I;
        for (a = 0, x = t.length; a < x; a++)
          t[a]._code = Ht(t[a], e);
        for (f = 0; f < 4; f++) {
          for (T = s[f], n = [], a = 0, x = t.length, u = x - 1; a < x; u = a++)
            _ = t[a], g = t[u], _._code & T ? g._code & T || (I = qe(g, _, T, e, i), I._code = Ht(I, e), n.push(I)) : (g._code & T && (I = qe(g, _, T, e, i), I._code = Ht(I, e), n.push(I)), n.push(_));
          t = n;
        }
        return t;
      }
      function jn(t, e) {
        var i, n, s, a, u, f, _, g, x;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var T = Z([0, 0]), I = Y(t), nt = I.getNorthWest().distanceTo(I.getSouthWest()) * I.getNorthEast().distanceTo(I.getNorthWest());
        nt < 1700 && (T = Ni(t));
        var X = t.length, pt = [];
        for (i = 0; i < X; i++) {
          var ht = Z(t[i]);
          pt.push(e.project(Z([ht.lat - T.lat, ht.lng - T.lng])));
        }
        for (f = _ = g = 0, i = 0, n = X - 1; i < X; n = i++)
          s = pt[i], a = pt[n], u = s.y * a.x - a.y * s.x, _ += (s.x + a.x) * u, g += (s.y + a.y) * u, f += u * 3;
        f === 0 ? x = pt[0] : x = [_ / f, g / f];
        var oe = e.unproject(z(x));
        return Z([oe.lat + T.lat, oe.lng + T.lng]);
      }
      function Ni(t) {
        for (var e = 0, i = 0, n = 0, s = 0; s < t.length; s++) {
          var a = Z(t[s]);
          e += a.lat, i += a.lng, n++;
        }
        return Z([e / n, i / n]);
      }
      var Ys = {
        __proto__: null,
        clipPolygon: Vn,
        polygonCenter: jn,
        centroid: Ni
      };
      function Gn(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = Xs(t, i), t = Js(t, i), t;
      }
      function Yn(t, e, i) {
        return Math.sqrt(xe(t, e, i, !0));
      }
      function Ks(t, e, i) {
        return xe(t, e, i);
      }
      function Js(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, s = new n(i);
        s[0] = s[i - 1] = 1, Ri(t, s, e, 0, i - 1);
        var a, u = [];
        for (a = 0; a < i; a++)
          s[a] && u.push(t[a]);
        return u;
      }
      function Ri(t, e, i, n, s) {
        var a = 0, u, f, _;
        for (f = n + 1; f <= s - 1; f++)
          _ = xe(t[f], t[n], t[s], !0), _ > a && (u = f, a = _);
        a > i && (e[u] = 1, Ri(t, e, i, n, u), Ri(t, e, i, u, s));
      }
      function Xs(t, e) {
        for (var i = [t[0]], n = 1, s = 0, a = t.length; n < a; n++)
          Qs(t[n], t[s]) > e && (i.push(t[n]), s = n);
        return s < a - 1 && i.push(t[a - 1]), i;
      }
      var Kn;
      function Jn(t, e, i, n, s) {
        var a = n ? Kn : Ht(t, i), u = Ht(e, i), f, _, g;
        for (Kn = u; ; ) {
          if (!(a | u))
            return [t, e];
          if (a & u)
            return !1;
          f = a || u, _ = qe(t, e, f, i, s), g = Ht(_, i), f === a ? (t = _, a = g) : (e = _, u = g);
        }
      }
      function qe(t, e, i, n, s) {
        var a = e.x - t.x, u = e.y - t.y, f = n.min, _ = n.max, g, x;
        return i & 8 ? (g = t.x + a * (_.y - t.y) / u, x = _.y) : i & 4 ? (g = t.x + a * (f.y - t.y) / u, x = f.y) : i & 2 ? (g = _.x, x = t.y + u * (_.x - t.x) / a) : i & 1 && (g = f.x, x = t.y + u * (f.x - t.x) / a), new S(g, x, s);
      }
      function Ht(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function Qs(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function xe(t, e, i, n) {
        var s = e.x, a = e.y, u = i.x - s, f = i.y - a, _ = u * u + f * f, g;
        return _ > 0 && (g = ((t.x - s) * u + (t.y - a) * f) / _, g > 1 ? (s = i.x, a = i.y) : g > 0 && (s += u * g, a += f * g)), u = t.x - s, f = t.y - a, n ? u * u + f * f : new S(s, a);
      }
      function ft(t) {
        return !Q(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function Xn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ft(t);
      }
      function Qn(t, e) {
        var i, n, s, a, u, f, _, g;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var x = Z([0, 0]), T = Y(t), I = T.getNorthWest().distanceTo(T.getSouthWest()) * T.getNorthEast().distanceTo(T.getNorthWest());
        I < 1700 && (x = Ni(t));
        var nt = t.length, X = [];
        for (i = 0; i < nt; i++) {
          var pt = Z(t[i]);
          X.push(e.project(Z([pt.lat - x.lat, pt.lng - x.lng])));
        }
        for (i = 0, n = 0; i < nt - 1; i++)
          n += X[i].distanceTo(X[i + 1]) / 2;
        if (n === 0)
          g = X[0];
        else
          for (i = 0, a = 0; i < nt - 1; i++)
            if (u = X[i], f = X[i + 1], s = u.distanceTo(f), a += s, a > n) {
              _ = (a - n) / s, g = [
                f.x - _ * (f.x - u.x),
                f.y - _ * (f.y - u.y)
              ];
              break;
            }
        var ht = e.unproject(z(g));
        return Z([ht.lat + x.lat, ht.lng + x.lng]);
      }
      var tr = {
        __proto__: null,
        simplify: Gn,
        pointToSegmentDistance: Yn,
        closestPointOnSegment: Ks,
        clipSegment: Jn,
        _getEdgeIntersection: qe,
        _getBitCode: Ht,
        _sqClosestPointOnSegment: xe,
        isFlat: ft,
        _flat: Xn,
        polylineCenter: Qn
      }, Hi = {
        project: function(t) {
          return new S(t.lng, t.lat);
        },
        unproject: function(t) {
          return new H(t.y, t.x);
        },
        bounds: new U([-180, -90], [180, 90])
      }, Fi = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new U([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var e = Math.PI / 180, i = this.R, n = t.lat * e, s = this.R_MINOR / i, a = Math.sqrt(1 - s * s), u = a * Math.sin(n), f = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - u) / (1 + u), a / 2);
          return n = -i * Math.log(Math.max(f, 1e-10)), new S(t.lng * e * i, n);
        },
        unproject: function(t) {
          for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, s = Math.sqrt(1 - n * n), a = Math.exp(-t.y / i), u = Math.PI / 2 - 2 * Math.atan(a), f = 0, _ = 0.1, g; f < 15 && Math.abs(_) > 1e-7; f++)
            g = s * Math.sin(u), g = Math.pow((1 - g) / (1 + g), s / 2), _ = Math.PI / 2 - 2 * Math.atan(a * g) - u, u += _;
          return new H(u * e, t.x * e / i);
        }
      }, er = {
        __proto__: null,
        LonLat: Hi,
        Mercator: Fi,
        SphericalMercator: pi
      }, ir = c({}, Mt, {
        code: "EPSG:3395",
        projection: Fi,
        transformation: function() {
          var t = 0.5 / (Math.PI * Fi.R);
          return ue(t, 0.5, -t, 0.5);
        }()
      }), to = c({}, Mt, {
        code: "EPSG:4326",
        projection: Hi,
        transformation: ue(1 / 180, 1, -1 / 180, 0.5)
      }), nr = c({}, Lt, {
        projection: Hi,
        transformation: ue(1, 0, -1, 0),
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
      Lt.Earth = Mt, Lt.EPSG3395 = ir, Lt.EPSG3857 = mi, Lt.EPSG900913 = ls, Lt.EPSG4326 = to, Lt.Simple = nr;
      var gt = Zt.extend({
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
          return this._map._targets[m(t)] = this, this;
        },
        removeInteractiveTarget: function(t) {
          return delete this._map._targets[m(t)], this;
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
          var e = m(t);
          return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(t) {
          var e = m(t);
          return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(t) {
          return m(t) in this._layers;
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
          t = t ? Q(t) ? t : [t] : [];
          for (var e = 0, i = t.length; e < i; e++)
            this.addLayer(t[e]);
        },
        _addZoomLimit: function(t) {
          (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[m(t)] = t, this._updateZoomLevels());
        },
        _removeZoomLimit: function(t) {
          var e = m(t);
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
      var Qt = gt.extend({
        initialize: function(t, e) {
          $(this, e), this._layers = {};
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
          return m(t);
        }
      }), or = function(t, e) {
        return new Qt(t, e);
      }, kt = Qt.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), Qt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Qt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
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
      }), sr = function(t, e) {
        return new kt(t, e);
      }, te = ct.extend({
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
          $(this, t);
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
          var s = z(n), a = z(e === "shadow" && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + "px", t.style.marginTop = -a.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
        },
        _createImg: function(t, e) {
          return e = e || document.createElement("img"), e.src = t, e;
        },
        _getIconUrl: function(t) {
          return P.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function rr(t) {
        return new te(t);
      }
      var we = te.extend({
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
          return typeof we.imagePath != "string" && (we.imagePath = this._detectIconPath()), (this.options.imagePath || we.imagePath) + te.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var e = function(i, n, s) {
            var a = n.exec(i);
            return a && a[s];
          };
          return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = D("div", "leaflet-default-icon-path", document.body), e = pe(t, "background-image") || pe(t, "backgroundImage");
          if (document.body.removeChild(t), e = this._stripUrl(e), e)
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        }
      }), eo = wt.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new St(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), O(t, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && V(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t) {
          var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, s = this._marker.options.autoPanPadding, a = Dt(e._icon), u = i.getPixelBounds(), f = i.getPixelOrigin(), _ = rt(
            u.min._subtract(f).add(s),
            u.max._subtract(f).subtract(s)
          );
          if (!_.contains(a)) {
            var g = z(
              (Math.max(_.max.x, a.x) - _.max.x) / (u.max.x - _.max.x) - (Math.min(_.min.x, a.x) - _.min.x) / (u.min.x - _.min.x),
              (Math.max(_.max.y, a.y) - _.max.y) / (u.max.y - _.max.y) - (Math.min(_.min.y, a.y) - _.min.y) / (u.min.y - _.min.y)
            ).multiplyBy(n);
            i.panBy(g, { animate: !1 }), this._draggable._newPos._add(g), this._draggable._startPos._add(g), K(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = G(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (st(this._panRequest), this._panRequest = G(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var e = this._marker, i = e._shadow, n = Dt(e._icon), s = e._map.layerPointToLatLng(n);
          i && K(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          st(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), Ve = gt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new we(),
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
          $(this, e), this._latlng = Z(t);
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
          i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), O(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && E(i, "focus", this._panOnFocus, this);
          var s = t.icon.createShadow(this._shadow), a = !1;
          s !== this._shadow && (this._removeShadow(), a = !0), s && (O(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && a && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && F(this._icon, "focus", this._panOnFocus, this), q(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && q(this._shadow), this._shadow = null;
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
          if (this.options.interactive && (O(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), eo)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new eo(this), t && this.dragging.enable();
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
            var e = this.options.icon.options, i = e.iconSize ? z(e.iconSize) : z(0, 0), n = e.iconAnchor ? z(e.iconAnchor) : z(0, 0);
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
      function ar(t, e) {
        return new Ve(t, e);
      }
      var $t = gt.extend({
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
          return $(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
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
      }), je = $t.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, e) {
          $(this, e), this._latlng = Z(t), this._radius = this.options.radius;
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
          return $t.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
          this._pxBounds = new U(this._point.subtract(n), this._point.add(n));
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
      function hr(t, e) {
        return new je(t, e);
      }
      var Wi = je.extend({
        initialize: function(t, e, i) {
          if (typeof e == "number" && (e = c({}, i, { radius: e })), $(this, e), this._latlng = Z(t), isNaN(this.options.radius))
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
        setStyle: $t.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
          if (n.distance === Mt.distance) {
            var s = Math.PI / 180, a = this._mRadius / Mt.R / s, u = i.project([e + a, t]), f = i.project([e - a, t]), _ = u.add(f).divideBy(2), g = i.unproject(_).lat, x = Math.acos((Math.cos(a * s) - Math.sin(e * s) * Math.sin(g * s)) / (Math.cos(e * s) * Math.cos(g * s))) / s;
            (isNaN(x) || x === 0) && (x = a / Math.cos(Math.PI / 180 * e)), this._point = _.subtract(i.getPixelOrigin()), this._radius = isNaN(x) ? 0 : _.x - i.project([g, t - x]).x, this._radiusY = _.y - u.y;
          } else {
            var T = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(T).x;
          }
          this._updateBounds();
        }
      });
      function lr(t, e, i) {
        return new Wi(t, e, i);
      }
      var Tt = $t.extend({
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
          $(this, e), this._setLatLngs(t);
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
          for (var e = 1 / 0, i = null, n = xe, s, a, u = 0, f = this._parts.length; u < f; u++)
            for (var _ = this._parts[u], g = 1, x = _.length; g < x; g++) {
              s = _[g - 1], a = _[g];
              var T = n(t, s, a, !0);
              T < e && (e = T, i = n(t, s, a));
            }
          return i && (i.distance = Math.sqrt(e)), i;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Qn(this._defaultShape(), this._map.options.crs);
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
          var t = new U();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), e = new S(t, t);
          this._rawPxBounds && (this._pxBounds = new U([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, e, i) {
          var n = t[0] instanceof H, s = t.length, a, u;
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
            var e = this._parts, i, n, s, a, u, f, _;
            for (i = 0, s = 0, a = this._rings.length; i < a; i++)
              for (_ = this._rings[i], n = 0, u = _.length; n < u - 1; n++)
                f = Jn(_[n], _[n + 1], t, n, !0), f && (e[s] = e[s] || [], e[s].push(f[0]), (f[1] !== _[n + 1] || n === u - 2) && (e[s].push(f[1]), s++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
            t[i] = Gn(t[i], e);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, e) {
          var i, n, s, a, u, f, _ = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (i = 0, a = this._parts.length; i < a; i++)
            for (f = this._parts[i], n = 0, u = f.length, s = u - 1; n < u; s = n++)
              if (!(!e && n === 0) && Yn(t, f[s], f[n]) <= _)
                return !0;
          return !1;
        }
      });
      function cr(t, e) {
        return new Tt(t, e);
      }
      Tt._flat = Xn;
      var ee = Tt.extend({
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
          return jn(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var e = Tt.prototype._convertLatLngs.call(this, t), i = e.length;
          return i >= 2 && e[0] instanceof H && e[0].equals(e[i - 1]) && e.pop(), e;
        },
        _setLatLngs: function(t) {
          Tt.prototype._setLatLngs.call(this, t), ft(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return ft(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, e = this.options.weight, i = new S(e, e);
          if (t = new U(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var n = 0, s = this._rings.length, a; n < s; n++)
              a = Vn(this._rings[n], t, !0), a.length && this._parts.push(a);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var e = !1, i, n, s, a, u, f, _, g;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (a = 0, _ = this._parts.length; a < _; a++)
            for (i = this._parts[a], u = 0, g = i.length, f = g - 1; u < g; f = u++)
              n = i[u], s = i[f], n.y > t.y != s.y > t.y && t.x < (s.x - n.x) * (t.y - n.y) / (s.y - n.y) + n.x && (e = !e);
          return e || Tt.prototype._containsPoint.call(this, t, !0);
        }
      });
      function ur(t, e) {
        return new ee(t, e);
      }
      var Ct = kt.extend({
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
          $(this, e), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var e = Q(t) ? t : t.features, i, n, s;
          if (e) {
            for (i = 0, n = e.length; i < n; i++)
              s = e[i], (s.geometries || s.geometry || s.features || s.coordinates) && this.addData(s);
            return this;
          }
          var a = this.options;
          if (a.filter && !a.filter(t))
            return this;
          var u = Ge(t, a);
          return u ? (u.feature = Je(t), u.defaultOptions = u.options, this.resetStyle(u), a.onEachFeature && a.onEachFeature(t, u), this.addLayer(u)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = c({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
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
      function Ge(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, s = [], a = e && e.pointToLayer, u = e && e.coordsToLatLng || Ui, f, _, g, x;
        if (!n && !i)
          return null;
        switch (i.type) {
          case "Point":
            return f = u(n), io(a, t, f, e);
          case "MultiPoint":
            for (g = 0, x = n.length; g < x; g++)
              f = u(n[g]), s.push(io(a, t, f, e));
            return new kt(s);
          case "LineString":
          case "MultiLineString":
            return _ = Ye(n, i.type === "LineString" ? 0 : 1, u), new Tt(_, e);
          case "Polygon":
          case "MultiPolygon":
            return _ = Ye(n, i.type === "Polygon" ? 1 : 2, u), new ee(_, e);
          case "GeometryCollection":
            for (g = 0, x = i.geometries.length; g < x; g++) {
              var T = Ge({
                geometry: i.geometries[g],
                type: "Feature",
                properties: t.properties
              }, e);
              T && s.push(T);
            }
            return new kt(s);
          case "FeatureCollection":
            for (g = 0, x = i.features.length; g < x; g++) {
              var I = Ge(i.features[g], e);
              I && s.push(I);
            }
            return new kt(s);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function io(t, e, i, n) {
        return t ? t(e, i) : new Ve(i, n && n.markersInheritOptions && n);
      }
      function Ui(t) {
        return new H(t[1], t[0], t[2]);
      }
      function Ye(t, e, i) {
        for (var n = [], s = 0, a = t.length, u; s < a; s++)
          u = e ? Ye(t[s], e - 1, i) : (i || Ui)(t[s]), n.push(u);
        return n;
      }
      function qi(t, e) {
        return t = Z(t), t.alt !== void 0 ? [b(t.lng, e), b(t.lat, e), b(t.alt, e)] : [b(t.lng, e), b(t.lat, e)];
      }
      function Ke(t, e, i, n) {
        for (var s = [], a = 0, u = t.length; a < u; a++)
          s.push(e ? Ke(t[a], ft(t[a]) ? 0 : e - 1, i, n) : qi(t[a], n));
        return !e && i && s.length > 0 && s.push(s[0].slice()), s;
      }
      function ie(t, e) {
        return t.feature ? c({}, t.feature, { geometry: e }) : Je(e);
      }
      function Je(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var Vi = {
        toGeoJSON: function(t) {
          return ie(this, {
            type: "Point",
            coordinates: qi(this.getLatLng(), t)
          });
        }
      };
      Ve.include(Vi), Wi.include(Vi), je.include(Vi), Tt.include({
        toGeoJSON: function(t) {
          var e = !ft(this._latlngs), i = Ke(this._latlngs, e ? 1 : 0, !1, t);
          return ie(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i
          });
        }
      }), ee.include({
        toGeoJSON: function(t) {
          var e = !ft(this._latlngs), i = e && !ft(this._latlngs[0]), n = Ke(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return e || (n = [n]), ie(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          });
        }
      }), Qt.include({
        toMultiPoint: function(t) {
          var e = [];
          return this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }), ie(this, {
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
                var u = Je(a);
                u.type === "FeatureCollection" ? n.push.apply(n, u.features) : n.push(u);
              }
            }
          }), i ? ie(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
      function no(t, e) {
        return new Ct(t, e);
      }
      var dr = no, Xe = gt.extend({
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
          this._url = t, this._bounds = Y(e), $(this, i);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (O(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          q(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
          return this._map && Jt(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Xt(this._image), this;
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
          if (O(e, "leaflet-image-layer"), this._zoomAnimated && O(e, "leaflet-zoom-animated"), this.options.className && O(e, this.options.className), e.onselectstart = y, e.onmousemove = y, e.onload = p(this.fire, this, "load"), e.onerror = p(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = e.src;
            return;
          }
          e.src = this._url, e.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          Bt(this._image, i, e);
        },
        _reset: function() {
          var t = this._image, e = new U(
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
      }), fr = function(t, e, i) {
        return new Xe(t, e, i);
      }, oo = Xe.extend({
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
          if (O(e, "leaflet-image-layer"), this._zoomAnimated && O(e, "leaflet-zoom-animated"), this.options.className && O(e, this.options.className), e.onselectstart = y, e.onmousemove = y, e.onloadeddata = p(this.fire, this, "load"), t) {
            for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++)
              n.push(i[s].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          Q(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var a = 0; a < this._url.length; a++) {
            var u = D("source");
            u.src = this._url[a], e.appendChild(u);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function pr(t, e, i) {
        return new oo(t, e, i);
      }
      var so = Xe.extend({
        _initImage: function() {
          var t = this._image = this._url;
          O(t, "leaflet-image-layer"), this._zoomAnimated && O(t, "leaflet-zoom-animated"), this.options.className && O(t, this.options.className), t.onselectstart = y, t.onmousemove = y;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function _r(t, e, i) {
        return new so(t, e, i);
      }
      var bt = gt.extend({
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
          t && (t instanceof H || Q(t)) ? (this._latlng = Z(t), $(this, e)) : ($(this, t), this._source = e), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && dt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && dt(this._container, 1), this.bringToFront(), this.options.interactive && (O(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (dt(this._container, 0), this._removeTimeout = setTimeout(p(q, void 0, this._container), 200)) : q(this._container), this.options.interactive && (V(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._map && Jt(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Xt(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var e = this._source;
          if (!e._map)
            return !1;
          if (e instanceof kt) {
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
            var t = this._map.latLngToLayerPoint(this._latlng), e = z(this.options.offset), i = this._getAnchor();
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
          return s instanceof t ? ($(s, n), s._source = this) : (s = e && !n ? e : new t(n, this), s.setContent(i)), s;
        }
      });
      var Qe = bt.extend({
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
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, bt.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          bt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof $t || this._source.on("preclick", Nt));
        },
        onRemove: function(t) {
          bt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof $t || this._source.off("preclick", Nt));
        },
        getEvents: function() {
          var t = bt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", e = this._container = D(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), i = this._wrapper = D("div", t + "-content-wrapper", e);
          if (this._contentNode = D("div", t + "-content", i), ve(e), Ii(this._contentNode), E(e, "contextmenu", Nt), this._tipContainer = D("div", t + "-tip-container", e), this._tip = D("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var n = this._closeButton = D("a", t + "-close-button", e);
            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', E(n, "click", function(s) {
              tt(s), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var i = t.offsetWidth;
          i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
          var n = t.offsetHeight, s = this.options.maxHeight, a = "leaflet-popup-scrolled";
          s && n > s ? (e.height = s + "px", O(t, a)) : V(t, a), this._containerWidth = this._container.offsetWidth;
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
            var t = this._map, e = parseInt(pe(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, s = new S(this._containerLeft, -i - this._containerBottom);
            s._add(Dt(this._container));
            var a = t.layerPointToContainerPoint(s), u = z(this.options.autoPanPadding), f = z(this.options.autoPanPaddingTopLeft || u), _ = z(this.options.autoPanPaddingBottomRight || u), g = t.getSize(), x = 0, T = 0;
            a.x + n + _.x > g.x && (x = a.x + n - g.x + _.x), a.x - x - f.x < 0 && (x = a.x - f.x), a.y + i + _.y > g.y && (T = a.y + i - g.y + _.y), a.y - T - f.y < 0 && (T = a.y - f.y), (x || T) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([x, T]));
          }
        },
        _getAnchor: function() {
          return z(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), mr = function(t, e) {
        return new Qe(t, e);
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
          return this._initOverlay(Qe, t, e, i).openOn(this), this;
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
          return this._popup = this._initOverlay(Qe, this._popup, t, e), this._popupHandlersAdded || (this.on({
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
          return this._popup && (this instanceof kt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
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
            Rt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof $t)) {
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
      var ti = bt.extend({
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
          bt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          bt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = bt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = D("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + m(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var e, i, n = this._map, s = this._container, a = n.latLngToContainerPoint(n.getCenter()), u = n.layerPointToContainerPoint(t), f = this.options.direction, _ = s.offsetWidth, g = s.offsetHeight, x = z(this.options.offset), T = this._getAnchor();
          f === "top" ? (e = _ / 2, i = g) : f === "bottom" ? (e = _ / 2, i = 0) : f === "center" ? (e = _ / 2, i = g / 2) : f === "right" ? (e = 0, i = g / 2) : f === "left" ? (e = _, i = g / 2) : u.x < a.x ? (f = "right", e = 0, i = g / 2) : (f = "left", e = _ + (x.x + T.x) * 2, i = g / 2), t = t.subtract(z(e, i, !0)).add(x).add(T), V(s, "leaflet-tooltip-right"), V(s, "leaflet-tooltip-left"), V(s, "leaflet-tooltip-top"), V(s, "leaflet-tooltip-bottom"), O(s, "leaflet-tooltip-" + f), K(s, t);
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
          return z(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), gr = function(t, e) {
        return new ti(t, e);
      };
      B.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, e, i) {
          return this._initOverlay(ti, t, e, i).openOn(this), this;
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
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ti, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          return this._tooltip && (this instanceof kt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
      var ro = te.extend({
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
          if (i.html instanceof Element ? (Re(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
            var n = z(i.bgPos);
            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
          }
          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function() {
          return null;
        }
      });
      function vr(t) {
        return new ro(t);
      }
      te.Default = we;
      var be = gt.extend({
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
          updateWhenIdle: P.mobile,
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
          $(this, t);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(t) {
          t._addZoomLimit(this);
        },
        onRemove: function(t) {
          this._removeAllTiles(), q(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Jt(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Xt(this._container), this._setAutoZIndex(Math.min)), this;
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
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = w(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
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
          return t instanceof S ? t : new S(t, t);
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
          if (this._map && !P.ielt9) {
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
        _onOpaqueTile: y,
        _initContainer: function() {
          this._container || (this._container = D("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, e = this.options.maxZoom;
          if (t !== void 0) {
            for (var i in this._levels)
              i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (q(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
            var n = this._levels[t], s = this._map;
            return n || (n = this._levels[t] = {}, n.el = D("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), y(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
          }
        },
        _onUpdateLevel: y,
        _onRemoveLevel: y,
        _onCreateLevel: y,
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
            q(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, e, i, n) {
          var s = Math.floor(t / 2), a = Math.floor(e / 2), u = i - 1, f = new S(+s, +a);
          f.z = +u;
          var _ = this._tileCoordsToKey(f), g = this._tiles[_];
          return g && g.active ? (g.retain = !0, !0) : (g && g.loaded && (g.retain = !0), u > n ? this._retainParent(s, a, u, n) : !1);
        },
        _retainChildren: function(t, e, i, n) {
          for (var s = 2 * t; s < 2 * t + 2; s++)
            for (var a = 2 * e; a < 2 * e + 2; a++) {
              var u = new S(s, a);
              u.z = i + 1;
              var f = this._tileCoordsToKey(u), _ = this._tiles[f];
              if (_ && _.active) {
                _.retain = !0;
                continue;
              } else _ && _.loaded && (_.retain = !0);
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
          P.any3d ? Bt(t.el, s, n) : K(t.el, s);
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
          return new U(s.subtract(a), s.add(a));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(t) {
          var e = this._map;
          if (e) {
            var i = this._clampZoom(e.getZoom());
            if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
              var n = this._getTiledPixelBounds(t), s = this._pxBoundsToTileRange(n), a = s.getCenter(), u = [], f = this.options.keepBuffer, _ = new U(
                s.getBottomLeft().subtract([f, -f]),
                s.getTopRight().add([f, -f])
              );
              if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var g in this._tiles) {
                var x = this._tiles[g].coords;
                (x.z !== this._tileZoom || !_.contains(new S(x.x, x.y))) && (this._tiles[g].current = !1);
              }
              if (Math.abs(i - this._tileZoom) > 1) {
                this._setView(t, i);
                return;
              }
              for (var T = s.min.y; T <= s.max.y; T++)
                for (var I = s.min.x; I <= s.max.x; I++) {
                  var nt = new S(I, T);
                  if (nt.z = this._tileZoom, !!this._isValidTile(nt)) {
                    var X = this._tiles[this._tileCoordsToKey(nt)];
                    X ? X.current = !0 : u.push(nt);
                  }
                }
              if (u.sort(function(ht, oe) {
                return ht.distanceTo(a) - oe.distanceTo(a);
              }), u.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var pt = document.createDocumentFragment();
                for (I = 0; I < u.length; I++)
                  this._addTile(u[I], pt);
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
          var e = t.split(":"), i = new S(+e[0], +e[1]);
          return i.z = +e[2], i;
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          e && (q(e.el), delete this._tiles[t], this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function(t) {
          O(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = y, t.onmousemove = y, P.ielt9 && this.options.opacity < 1 && dt(t, this.options.opacity);
        },
        _addTile: function(t, e) {
          var i = this._getTilePos(t), n = this._tileCoordsToKey(t), s = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
          this._initTile(s), this.createTile.length < 2 && G(p(this._tileReady, this, t, null, s)), K(s, i), this._tiles[n] = {
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
          i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (dt(i.el, 0), st(this._fadeFrame), this._fadeFrame = G(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (O(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: i.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), P.ielt9 || !this._map._fadeAnimated ? G(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var e = new S(
            this._wrapX ? k(t.x, this._wrapX) : t.x,
            this._wrapY ? k(t.y, this._wrapY) : t.y
          );
          return e.z = t.z, e;
        },
        _pxBoundsToTileRange: function(t) {
          var e = this.getTileSize();
          return new U(
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
      function yr(t) {
        return new be(t);
      }
      var ne = be.extend({
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
          this._url = t, e = $(this, e), e.detectRetina && P.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
          return E(i, "load", p(this._tileOnLoad, this, e, i)), E(i, "error", p(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var e = {
            r: P.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }
          return Ot(this._url, c(e, this.options));
        },
        _tileOnLoad: function(t, e) {
          P.ielt9 ? setTimeout(p(t, this, null, e), 0) : t(null, e);
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
            if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = y, e.onerror = y, !e.complete)) {
              e.src = Yt;
              var i = this._tiles[t].coords;
              q(e), delete this._tiles[t], this.fire("tileabort", {
                tile: e,
                coords: i
              });
            }
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          if (e)
            return e.el.setAttribute("src", Yt), be.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, e, i) {
          if (!(!this._map || i && i.getAttribute("src") === Yt))
            return be.prototype._tileReady.call(this, t, e, i);
        }
      });
      function ao(t, e) {
        return new ne(t, e);
      }
      var ho = ne.extend({
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
          var i = c({}, this.defaultWmsParams);
          for (var n in e)
            n in this.options || (i[n] = e[n]);
          e = $(this, e);
          var s = e.detectRetina && P.retina ? 2 : 1, a = this.getTileSize();
          i.width = a.x * s, i.height = a.y * s, this.wmsParams = i;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, ne.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t), i = this._crs, n = rt(i.project(e[0]), i.project(e[1])), s = n.min, a = n.max, u = (this._wmsVersion >= 1.3 && this._crs === to ? [s.y, s.x, a.y, a.x] : [s.x, s.y, a.x, a.y]).join(","), f = ne.prototype.getTileUrl.call(this, t);
          return f + vt(this.wmsParams, f, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + u;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, e) {
          return c(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      function xr(t, e) {
        return new ho(t, e);
      }
      ne.WMS = ho, ao.wms = xr;
      var At = gt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          $(this, t), m(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), O(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          P.any3d ? Bt(this._container, a, i) : K(this._container, a);
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
          this._bounds = new U(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), lo = At.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var t = At.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          At.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var t = this._container = document.createElement("canvas");
          E(t, "mousemove", this._onMouseMove, this), E(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), E(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          st(this._redrawRequest), delete this._ctx, q(this._container), F(this._container), delete this._container;
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
            At.prototype._update.call(this);
            var t = this._bounds, e = this._container, i = t.getSize(), n = P.retina ? 2 : 1;
            K(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", P.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function() {
          At.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(t) {
          this._updateDashArray(t), this._layers[m(t)] = t;
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
          i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[m(t)], this._requestRedraw(t);
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
            this._redrawBounds = this._redrawBounds || new U(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
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
            var i, n, s, a, u = t._parts, f = u.length, _ = this._ctx;
            if (f) {
              for (_.beginPath(), i = 0; i < f; i++) {
                for (n = 0, s = u[i].length; n < s; n++)
                  a = u[i][n], _[n ? "lineTo" : "moveTo"](a.x, a.y);
                e && _.closePath();
              }
              this._fillStroke(_, t);
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
          e && (V(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, s = this._drawFirst; s; s = s.next)
              i = s.layer, i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (O(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(p(function() {
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
      function co(t) {
        return P.canvas ? new lo(t) : null;
      }
      var Pe = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), wr = {
        _initContainer: function() {
          this._container = D("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (At.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var e = t._container = Pe("shape");
          O(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Pe("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[m(t)] = t;
        },
        _addPath: function(t) {
          var e = t._container;
          this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function(t) {
          var e = t._container;
          q(e), t.removeInteractiveTarget(e), delete this._layers[m(t)];
        },
        _updateStyle: function(t) {
          var e = t._stroke, i = t._fill, n = t.options, s = t._container;
          s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = Pe("stroke")), s.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = Q(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = Pe("fill")), s.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null);
        },
        _updateCircle: function(t) {
          var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
        },
        _setPath: function(t, e) {
          t._path.v = e;
        },
        _bringToFront: function(t) {
          Jt(t._container);
        },
        _bringToBack: function(t) {
          Xt(t._container);
        }
      }, ei = P.vml ? Pe : pn, Le = At.extend({
        _initContainer: function() {
          this._container = ei("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ei("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          q(this._container), F(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            At.prototype._update.call(this);
            var t = this._bounds, e = t.getSize(), i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), K(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var e = t._path = ei("path");
          t.options.className && O(e, t.options.className), t.options.interactive && O(e, "leaflet-interactive"), this._updateStyle(t), this._layers[m(t)] = t;
        },
        _addPath: function(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function(t) {
          q(t._path), t.removeInteractiveTarget(t._path), delete this._layers[m(t)];
        },
        _updatePath: function(t) {
          t._project(), t._update();
        },
        _updateStyle: function(t) {
          var e = t._path, i = t.options;
          e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
        },
        _updatePoly: function(t, e) {
          this._setPath(t, _n(t._parts, e));
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
          Jt(t._path);
        },
        _bringToBack: function(t) {
          Xt(t._path);
        }
      });
      P.vml && Le.include(wr);
      function uo(t) {
        return P.svg || P.vml ? new Le(t) : null;
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
          return this.options.preferCanvas && co(t) || uo(t);
        }
      });
      var fo = ee.extend({
        initialize: function(t, e) {
          ee.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
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
      function br(t, e) {
        return new fo(t, e);
      }
      Le.create = ei, Le.pointsToPath = _n, Ct.geometryToLayer = Ge, Ct.coordsToLatLng = Ui, Ct.coordsToLatLngs = Ye, Ct.latLngToCoords = qi, Ct.latLngsToCoords = Ke, Ct.getFeature = ie, Ct.asFeature = Je, B.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var po = wt.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          E(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          F(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          q(this._pane), delete this._pane;
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
          this._clearDeferredResetState(), this._resetState(), _e(), Ci(), this._startPoint = this._map.mouseEventToContainerPoint(t), E(document, {
            contextmenu: Rt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = D("div", "leaflet-zoom-box", this._container), O(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new U(this._point, this._startPoint), i = e.getSize();
          K(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
        },
        _finish: function() {
          this._moved && (q(this._box), V(this._container, "leaflet-crosshair")), me(), Ai(), F(document, {
            contextmenu: Rt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0);
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
      B.addInitHook("addHandler", "boxZoom", po), B.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var _o = wt.extend({
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
      B.addInitHook("addHandler", "doubleClickZoom", _o), B.mergeOptions({
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
      var mo = wt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new St(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          O(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          V(this._map._container, "leaflet-grab"), V(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
            var s = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, u = i.easeLinearity, f = s.multiplyBy(u / a), _ = f.distanceTo([0, 0]), g = Math.min(i.inertiaMaxSpeed, _), x = f.multiplyBy(g / _), T = g / (i.inertiaDeceleration * u), I = x.multiplyBy(-T / 2).round();
            !I.x && !I.y ? e.fire("moveend") : (I = e._limitOffset(I, e.options.maxBounds), G(function() {
              e.panBy(I, {
                duration: T,
                easeLinearity: u,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      B.addInitHook("addHandler", "dragging", mo), B.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var go = wt.extend({
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
          this._removeHooks(), F(this._map._container, {
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
          F(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e = t.keyCode, i = this._map, n;
            if (e in this._panKeys) {
              if (!i._panAnim || !i._panAnim._inProgress)
                if (n = this._panKeys[e], t.shiftKey && (n = z(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(z(n), i.options.maxBounds)), i.options.worldCopyJump) {
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
            Rt(t);
          }
        }
      });
      B.addInitHook("addHandler", "keyboard", go), B.mergeOptions({
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
      var vo = wt.extend({
        addHooks: function() {
          E(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          F(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = Hn(t), i = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n), Rt(t);
        },
        _performZoom: function() {
          var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, a = i ? Math.ceil(s / i) * i : s, u = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
          this._delta = 0, this._startTime = null, u && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + u) : t.setZoomAround(this._lastMousePos, e + u));
        }
      });
      B.addInitHook("addHandler", "scrollWheelZoom", vo);
      var Pr = 600;
      B.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: P.touchNative && P.safari && P.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var yo = wt.extend({
        addHooks: function() {
          E(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          F(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var e = t.touches[0];
            this._startPos = this._newPos = new S(e.clientX, e.clientY), this._holdTimeout = setTimeout(p(function() {
              this._cancel(), this._isTapValid() && (E(document, "touchend", tt), E(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
            }, this), Pr), E(document, "touchend touchcancel contextmenu", this._cancel, this), E(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          F(document, "touchend", tt), F(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), F(document, "touchend touchcancel contextmenu", this._cancel, this), F(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var e = t.touches[0];
          this._newPos = new S(e.clientX, e.clientY);
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
      B.addInitHook("addHandler", "tapHold", yo), B.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: P.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var xo = wt.extend({
        addHooks: function() {
          O(this._map._container, "leaflet-touch-zoom"), E(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          V(this._map._container, "leaflet-touch-zoom"), F(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
            var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), E(document, "touchmove", this._onTouchMove, this), E(document, "touchend touchcancel", this._onTouchEnd, this), tt(t);
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
            var u = p(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = G(u, this, !0), tt(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, st(this._animRequest), F(document, "touchmove", this._onTouchMove, this), F(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      B.addInitHook("addHandler", "touchZoom", xo), B.BoxZoom = po, B.DoubleClickZoom = _o, B.Drag = mo, B.Keyboard = go, B.ScrollWheelZoom = vo, B.TapHold = yo, B.TouchZoom = xo, r.Bounds = U, r.Browser = P, r.CRS = Lt, r.Canvas = lo, r.Circle = Wi, r.CircleMarker = je, r.Class = ct, r.Control = mt, r.DivIcon = ro, r.DivOverlay = bt, r.DomEvent = Hs, r.DomUtil = Ns, r.Draggable = St, r.Evented = Zt, r.FeatureGroup = kt, r.GeoJSON = Ct, r.GridLayer = be, r.Handler = wt, r.Icon = te, r.ImageOverlay = Xe, r.LatLng = H, r.LatLngBounds = at, r.Layer = gt, r.LayerGroup = Qt, r.LineUtil = tr, r.Map = B, r.Marker = Ve, r.Mixin = Gs, r.Path = $t, r.Point = S, r.PolyUtil = Ys, r.Polygon = ee, r.Polyline = Tt, r.Popup = Qe, r.PosAnimation = Fn, r.Projection = er, r.Rectangle = fo, r.Renderer = At, r.SVG = Le, r.SVGOverlay = so, r.TileLayer = ne, r.Tooltip = ti, r.Transformation = _i, r.Util = di, r.VideoOverlay = oo, r.bind = p, r.bounds = rt, r.canvas = co, r.circle = lr, r.circleMarker = hr, r.control = ye, r.divIcon = vr, r.extend = c, r.featureGroup = sr, r.geoJSON = no, r.geoJson = dr, r.gridLayer = yr, r.icon = rr, r.imageOverlay = fr, r.latLng = Z, r.latLngBounds = Y, r.layerGroup = or, r.map = Fs, r.marker = ar, r.point = z, r.polygon = ur, r.polyline = cr, r.popup = mr, r.rectangle = br, r.setOptions = $, r.stamp = m, r.svg = uo, r.svgOverlay = _r, r.tileLayer = ao, r.tooltip = gr, r.transformation = ue, r.version = l, r.videoOverlay = pr;
      var Lr = window.L;
      r.noConflict = function() {
        return window.L = Lr, this;
      }, window.L = r;
    });
  }(Te, Te.exports)), Te.exports;
}
var se = Or();
const Ir = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ni = globalThis, an = ni.ShadowRoot && (ni.ShadyCSS === void 0 || ni.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, hn = Symbol(), ko = /* @__PURE__ */ new WeakMap();
let Fo = class {
  constructor(o, r, l) {
    if (this._$cssResult$ = !0, l !== hn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = o, this.t = r;
  }
  get styleSheet() {
    let o = this.o;
    const r = this.t;
    if (an && o === void 0) {
      const l = r !== void 0 && r.length === 1;
      l && (o = ko.get(r)), o === void 0 && ((this.o = o = new CSSStyleSheet()).replaceSync(this.cssText), l && ko.set(r, o));
    }
    return o;
  }
  toString() {
    return this.cssText;
  }
};
const Wo = (h) => new Fo(typeof h == "string" ? h : h + "", void 0, hn), Zr = (h, ...o) => {
  const r = h.length === 1 ? h[0] : o.reduce((l, c, d) => l + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(c) + h[d + 1], h[0]);
  return new Fo(r, h, hn);
}, Br = (h, o) => {
  if (an) h.adoptedStyleSheets = o.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of o) {
    const l = document.createElement("style"), c = ni.litNonce;
    c !== void 0 && l.setAttribute("nonce", c), l.textContent = r.cssText, h.appendChild(l);
  }
}, To = an ? (h) => h : (h) => h instanceof CSSStyleSheet ? ((o) => {
  let r = "";
  for (const l of o.cssRules) r += l.cssText;
  return Wo(r);
})(h) : h;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Dr, defineProperty: Nr, getOwnPropertyDescriptor: Rr, getOwnPropertyNames: Hr, getOwnPropertySymbols: Fr, getPrototypeOf: Wr } = Object, Et = globalThis, Co = Et.trustedTypes, Ur = Co ? Co.emptyScript : "", Gi = Et.reactiveElementPolyfillSupport, Ae = (h, o) => h, tn = { toAttribute(h, o) {
  switch (o) {
    case Boolean:
      h = h ? Ur : null;
      break;
    case Object:
    case Array:
      h = h == null ? h : JSON.stringify(h);
  }
  return h;
}, fromAttribute(h, o) {
  let r = h;
  switch (o) {
    case Boolean:
      r = h !== null;
      break;
    case Number:
      r = h === null ? null : Number(h);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(h);
      } catch {
        r = null;
      }
  }
  return r;
} }, Uo = (h, o) => !Dr(h, o), Ao = { attribute: !0, type: String, converter: tn, reflect: !1, useDefault: !1, hasChanged: Uo };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Et.litPropertyMetadata ?? (Et.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let re = class extends HTMLElement {
  static addInitializer(o) {
    this._$Ei(), (this.l ?? (this.l = [])).push(o);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(o, r = Ao) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(o) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(o, r), !r.noAccessor) {
      const l = Symbol(), c = this.getPropertyDescriptor(o, l, r);
      c !== void 0 && Nr(this.prototype, o, c);
    }
  }
  static getPropertyDescriptor(o, r, l) {
    const { get: c, set: d } = Rr(this.prototype, o) ?? { get() {
      return this[r];
    }, set(p) {
      this[r] = p;
    } };
    return { get: c, set(p) {
      const v = c == null ? void 0 : c.call(this);
      d == null || d.call(this, p), this.requestUpdate(o, v, l);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(o) {
    return this.elementProperties.get(o) ?? Ao;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ae("elementProperties"))) return;
    const o = Wr(this);
    o.finalize(), o.l !== void 0 && (this.l = [...o.l]), this.elementProperties = new Map(o.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ae("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ae("properties"))) {
      const r = this.properties, l = [...Hr(r), ...Fr(r)];
      for (const c of l) this.createProperty(c, r[c]);
    }
    const o = this[Symbol.metadata];
    if (o !== null) {
      const r = litPropertyMetadata.get(o);
      if (r !== void 0) for (const [l, c] of r) this.elementProperties.set(l, c);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, l] of this.elementProperties) {
      const c = this._$Eu(r, l);
      c !== void 0 && this._$Eh.set(c, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(o) {
    const r = [];
    if (Array.isArray(o)) {
      const l = new Set(o.flat(1 / 0).reverse());
      for (const c of l) r.unshift(To(c));
    } else o !== void 0 && r.push(To(o));
    return r;
  }
  static _$Eu(o, r) {
    const l = r.attribute;
    return l === !1 ? void 0 : typeof l == "string" ? l : typeof o == "string" ? o.toLowerCase() : void 0;
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
    for (const l of r.keys()) this.hasOwnProperty(l) && (o.set(l, this[l]), delete this[l]);
    o.size > 0 && (this._$Ep = o);
  }
  createRenderRoot() {
    const o = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Br(o, this.constructor.elementStyles), o;
  }
  connectedCallback() {
    var o;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (o = this._$EO) == null || o.forEach((r) => {
      var l;
      return (l = r.hostConnected) == null ? void 0 : l.call(r);
    });
  }
  enableUpdating(o) {
  }
  disconnectedCallback() {
    var o;
    (o = this._$EO) == null || o.forEach((r) => {
      var l;
      return (l = r.hostDisconnected) == null ? void 0 : l.call(r);
    });
  }
  attributeChangedCallback(o, r, l) {
    this._$AK(o, l);
  }
  _$ET(o, r) {
    var d;
    const l = this.constructor.elementProperties.get(o), c = this.constructor._$Eu(o, l);
    if (c !== void 0 && l.reflect === !0) {
      const p = (((d = l.converter) == null ? void 0 : d.toAttribute) !== void 0 ? l.converter : tn).toAttribute(r, l.type);
      this._$Em = o, p == null ? this.removeAttribute(c) : this.setAttribute(c, p), this._$Em = null;
    }
  }
  _$AK(o, r) {
    var d, p;
    const l = this.constructor, c = l._$Eh.get(o);
    if (c !== void 0 && this._$Em !== c) {
      const v = l.getPropertyOptions(c), m = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((d = v.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? v.converter : tn;
      this._$Em = c;
      const w = m.fromAttribute(r, v.type);
      this[c] = w ?? ((p = this._$Ej) == null ? void 0 : p.get(c)) ?? w, this._$Em = null;
    }
  }
  requestUpdate(o, r, l, c = !1, d) {
    var p;
    if (o !== void 0) {
      const v = this.constructor;
      if (c === !1 && (d = this[o]), l ?? (l = v.getPropertyOptions(o)), !((l.hasChanged ?? Uo)(d, r) || l.useDefault && l.reflect && d === ((p = this._$Ej) == null ? void 0 : p.get(o)) && !this.hasAttribute(v._$Eu(o, l)))) return;
      this.C(o, r, l);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(o, r, { useDefault: l, reflect: c, wrapped: d }, p) {
    l && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(o) && (this._$Ej.set(o, p ?? r ?? this[o]), d !== !0 || p !== void 0) || (this._$AL.has(o) || (this.hasUpdated || l || (r = void 0), this._$AL.set(o, r)), c === !0 && this._$Em !== o && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(o));
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
    var l;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [d, p] of this._$Ep) this[d] = p;
        this._$Ep = void 0;
      }
      const c = this.constructor.elementProperties;
      if (c.size > 0) for (const [d, p] of c) {
        const { wrapped: v } = p, m = this[d];
        v !== !0 || this._$AL.has(d) || m === void 0 || this.C(d, void 0, p, m);
      }
    }
    let o = !1;
    const r = this._$AL;
    try {
      o = this.shouldUpdate(r), o ? (this.willUpdate(r), (l = this._$EO) == null || l.forEach((c) => {
        var d;
        return (d = c.hostUpdate) == null ? void 0 : d.call(c);
      }), this.update(r)) : this._$EM();
    } catch (c) {
      throw o = !1, this._$EM(), c;
    }
    o && this._$AE(r);
  }
  willUpdate(o) {
  }
  _$AE(o) {
    var r;
    (r = this._$EO) == null || r.forEach((l) => {
      var c;
      return (c = l.hostUpdated) == null ? void 0 : c.call(l);
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
re.elementStyles = [], re.shadowRootOptions = { mode: "open" }, re[Ae("elementProperties")] = /* @__PURE__ */ new Map(), re[Ae("finalized")] = /* @__PURE__ */ new Map(), Gi == null || Gi({ ReactiveElement: re }), (Et.reactiveElementVersions ?? (Et.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = globalThis, Mo = (h) => h, ri = Me.trustedTypes, So = ri ? ri.createPolicy("lit-html", { createHTML: (h) => h }) : void 0, qo = "$lit$", zt = `lit$${Math.random().toFixed(9).slice(2)}$`, Vo = "?" + zt, qr = `<${Vo}>`, Vt = document, Ee = () => Vt.createComment(""), Oe = (h) => h === null || typeof h != "object" && typeof h != "function", ln = Array.isArray, Vr = (h) => ln(h) || typeof (h == null ? void 0 : h[Symbol.iterator]) == "function", Yi = `[ 	
\f\r]`, ke = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $o = /-->/g, zo = />/g, Ft = RegExp(`>|${Yi}(?:([^\\s"'>=/]+)(${Yi}*=${Yi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Eo = /'/g, Oo = /"/g, jo = /^(?:script|style|textarea|title)$/i, Go = (h) => (o, ...r) => ({ _$litType$: h, strings: o, values: r }), M = Go(1), et = Go(2), he = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Io = /* @__PURE__ */ new WeakMap(), Ut = Vt.createTreeWalker(Vt, 129);
function Yo(h, o) {
  if (!ln(h) || !h.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return So !== void 0 ? So.createHTML(o) : o;
}
const jr = (h, o) => {
  const r = h.length - 1, l = [];
  let c, d = o === 2 ? "<svg>" : o === 3 ? "<math>" : "", p = ke;
  for (let v = 0; v < r; v++) {
    const m = h[v];
    let w, k, y = -1, b = 0;
    for (; b < m.length && (p.lastIndex = b, k = p.exec(m), k !== null); ) b = p.lastIndex, p === ke ? k[1] === "!--" ? p = $o : k[1] !== void 0 ? p = zo : k[2] !== void 0 ? (jo.test(k[2]) && (c = RegExp("</" + k[2], "g")), p = Ft) : k[3] !== void 0 && (p = Ft) : p === Ft ? k[0] === ">" ? (p = c ?? ke, y = -1) : k[1] === void 0 ? y = -2 : (y = p.lastIndex - k[2].length, w = k[1], p = k[3] === void 0 ? Ft : k[3] === '"' ? Oo : Eo) : p === Oo || p === Eo ? p = Ft : p === $o || p === zo ? p = ke : (p = Ft, c = void 0);
    const N = p === Ft && h[v + 1].startsWith("/>") ? " " : "";
    d += p === ke ? m + qr : y >= 0 ? (l.push(w), m.slice(0, y) + qo + m.slice(y) + zt + N) : m + zt + (y === -2 ? v : N);
  }
  return [Yo(h, d + (h[r] || "<?>") + (o === 2 ? "</svg>" : o === 3 ? "</math>" : "")), l];
};
class Ie {
  constructor({ strings: o, _$litType$: r }, l) {
    let c;
    this.parts = [];
    let d = 0, p = 0;
    const v = o.length - 1, m = this.parts, [w, k] = jr(o, r);
    if (this.el = Ie.createElement(w, l), Ut.currentNode = this.el.content, r === 2 || r === 3) {
      const y = this.el.content.firstChild;
      y.replaceWith(...y.childNodes);
    }
    for (; (c = Ut.nextNode()) !== null && m.length < v; ) {
      if (c.nodeType === 1) {
        if (c.hasAttributes()) for (const y of c.getAttributeNames()) if (y.endsWith(qo)) {
          const b = k[p++], N = c.getAttribute(y).split(zt), R = /([.?@])?(.*)/.exec(b);
          m.push({ type: 1, index: d, name: R[2], strings: N, ctor: R[1] === "." ? Yr : R[1] === "?" ? Kr : R[1] === "@" ? Jr : ci }), c.removeAttribute(y);
        } else y.startsWith(zt) && (m.push({ type: 6, index: d }), c.removeAttribute(y));
        if (jo.test(c.tagName)) {
          const y = c.textContent.split(zt), b = y.length - 1;
          if (b > 0) {
            c.textContent = ri ? ri.emptyScript : "";
            for (let N = 0; N < b; N++) c.append(y[N], Ee()), Ut.nextNode(), m.push({ type: 2, index: ++d });
            c.append(y[b], Ee());
          }
        }
      } else if (c.nodeType === 8) if (c.data === Vo) m.push({ type: 2, index: d });
      else {
        let y = -1;
        for (; (y = c.data.indexOf(zt, y + 1)) !== -1; ) m.push({ type: 7, index: d }), y += zt.length - 1;
      }
      d++;
    }
  }
  static createElement(o, r) {
    const l = Vt.createElement("template");
    return l.innerHTML = o, l;
  }
}
function le(h, o, r = h, l) {
  var p, v;
  if (o === he) return o;
  let c = l !== void 0 ? (p = r._$Co) == null ? void 0 : p[l] : r._$Cl;
  const d = Oe(o) ? void 0 : o._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== d && ((v = c == null ? void 0 : c._$AO) == null || v.call(c, !1), d === void 0 ? c = void 0 : (c = new d(h), c._$AT(h, r, l)), l !== void 0 ? (r._$Co ?? (r._$Co = []))[l] = c : r._$Cl = c), c !== void 0 && (o = le(h, c._$AS(h, o.values), c, l)), o;
}
class Gr {
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
    const { el: { content: r }, parts: l } = this._$AD, c = ((o == null ? void 0 : o.creationScope) ?? Vt).importNode(r, !0);
    Ut.currentNode = c;
    let d = Ut.nextNode(), p = 0, v = 0, m = l[0];
    for (; m !== void 0; ) {
      if (p === m.index) {
        let w;
        m.type === 2 ? w = new Ze(d, d.nextSibling, this, o) : m.type === 1 ? w = new m.ctor(d, m.name, m.strings, this, o) : m.type === 6 && (w = new Xr(d, this, o)), this._$AV.push(w), m = l[++v];
      }
      p !== (m == null ? void 0 : m.index) && (d = Ut.nextNode(), p++);
    }
    return Ut.currentNode = Vt, c;
  }
  p(o) {
    let r = 0;
    for (const l of this._$AV) l !== void 0 && (l.strings !== void 0 ? (l._$AI(o, l, r), r += l.strings.length - 2) : l._$AI(o[r])), r++;
  }
}
class Ze {
  get _$AU() {
    var o;
    return ((o = this._$AM) == null ? void 0 : o._$AU) ?? this._$Cv;
  }
  constructor(o, r, l, c) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = o, this._$AB = r, this._$AM = l, this.options = c, this._$Cv = (c == null ? void 0 : c.isConnected) ?? !0;
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
    o = le(this, o, r), Oe(o) ? o === C || o == null || o === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : o !== this._$AH && o !== he && this._(o) : o._$litType$ !== void 0 ? this.$(o) : o.nodeType !== void 0 ? this.T(o) : Vr(o) ? this.k(o) : this._(o);
  }
  O(o) {
    return this._$AA.parentNode.insertBefore(o, this._$AB);
  }
  T(o) {
    this._$AH !== o && (this._$AR(), this._$AH = this.O(o));
  }
  _(o) {
    this._$AH !== C && Oe(this._$AH) ? this._$AA.nextSibling.data = o : this.T(Vt.createTextNode(o)), this._$AH = o;
  }
  $(o) {
    var d;
    const { values: r, _$litType$: l } = o, c = typeof l == "number" ? this._$AC(o) : (l.el === void 0 && (l.el = Ie.createElement(Yo(l.h, l.h[0]), this.options)), l);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === c) this._$AH.p(r);
    else {
      const p = new Gr(c, this), v = p.u(this.options);
      p.p(r), this.T(v), this._$AH = p;
    }
  }
  _$AC(o) {
    let r = Io.get(o.strings);
    return r === void 0 && Io.set(o.strings, r = new Ie(o)), r;
  }
  k(o) {
    ln(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let l, c = 0;
    for (const d of o) c === r.length ? r.push(l = new Ze(this.O(Ee()), this.O(Ee()), this, this.options)) : l = r[c], l._$AI(d), c++;
    c < r.length && (this._$AR(l && l._$AB.nextSibling, c), r.length = c);
  }
  _$AR(o = this._$AA.nextSibling, r) {
    var l;
    for ((l = this._$AP) == null ? void 0 : l.call(this, !1, !0, r); o !== this._$AB; ) {
      const c = Mo(o).nextSibling;
      Mo(o).remove(), o = c;
    }
  }
  setConnected(o) {
    var r;
    this._$AM === void 0 && (this._$Cv = o, (r = this._$AP) == null || r.call(this, o));
  }
}
class ci {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(o, r, l, c, d) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = o, this.name = r, this._$AM = c, this.options = d, l.length > 2 || l[0] !== "" || l[1] !== "" ? (this._$AH = Array(l.length - 1).fill(new String()), this.strings = l) : this._$AH = C;
  }
  _$AI(o, r = this, l, c) {
    const d = this.strings;
    let p = !1;
    if (d === void 0) o = le(this, o, r, 0), p = !Oe(o) || o !== this._$AH && o !== he, p && (this._$AH = o);
    else {
      const v = o;
      let m, w;
      for (o = d[0], m = 0; m < d.length - 1; m++) w = le(this, v[l + m], r, m), w === he && (w = this._$AH[m]), p || (p = !Oe(w) || w !== this._$AH[m]), w === C ? o = C : o !== C && (o += (w ?? "") + d[m + 1]), this._$AH[m] = w;
    }
    p && !c && this.j(o);
  }
  j(o) {
    o === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, o ?? "");
  }
}
class Yr extends ci {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(o) {
    this.element[this.name] = o === C ? void 0 : o;
  }
}
let Kr = class extends ci {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(o) {
    this.element.toggleAttribute(this.name, !!o && o !== C);
  }
};
class Jr extends ci {
  constructor(o, r, l, c, d) {
    super(o, r, l, c, d), this.type = 5;
  }
  _$AI(o, r = this) {
    if ((o = le(this, o, r, 0) ?? C) === he) return;
    const l = this._$AH, c = o === C && l !== C || o.capture !== l.capture || o.once !== l.once || o.passive !== l.passive, d = o !== C && (l === C || c);
    c && this.element.removeEventListener(this.name, this, l), d && this.element.addEventListener(this.name, this, o), this._$AH = o;
  }
  handleEvent(o) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, o) : this._$AH.handleEvent(o);
  }
}
class Xr {
  constructor(o, r, l) {
    this.element = o, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = l;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(o) {
    le(this, o);
  }
}
const Ki = Me.litHtmlPolyfillSupport;
Ki == null || Ki(Ie, Ze), (Me.litHtmlVersions ?? (Me.litHtmlVersions = [])).push("3.3.3");
const Qr = (h, o, r) => {
  const l = (r == null ? void 0 : r.renderBefore) ?? o;
  let c = l._$litPart$;
  if (c === void 0) {
    const d = (r == null ? void 0 : r.renderBefore) ?? null;
    l._$litPart$ = c = new Ze(o.insertBefore(Ee(), d), d, void 0, r ?? {});
  }
  return c._$AI(h), c;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = globalThis;
let ae = class extends re {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(o), this._$Do = Qr(r, this.renderRoot, this.renderOptions);
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
    return he;
  }
};
var Ho;
ae._$litElement$ = !0, ae.finalized = !0, (Ho = qt.litElementHydrateSupport) == null || Ho.call(qt, { LitElement: ae });
const Ji = qt.litElementPolyfillSupport;
Ji == null || Ji({ LitElement: ae });
(qt.litElementVersions ?? (qt.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ta = (h) => h.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ea = { CHILD: 2 }, ia = (h) => (...o) => ({ _$litDirective$: h, values: o });
class na {
  constructor(o) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(o, r, l) {
    this._$Ct = o, this._$AM = r, this._$Ci = l;
  }
  _$AS(o, r) {
    return this.update(o, r);
  }
  update(o, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Se = (h, o) => {
  var l;
  const r = h._$AN;
  if (r === void 0) return !1;
  for (const c of r) (l = c._$AO) == null || l.call(c, o, !1), Se(c, o);
  return !0;
}, ai = (h) => {
  let o, r;
  do {
    if ((o = h._$AM) === void 0) break;
    r = o._$AN, r.delete(h), h = o;
  } while ((r == null ? void 0 : r.size) === 0);
}, Ko = (h) => {
  for (let o; o = h._$AM; h = o) {
    let r = o._$AN;
    if (r === void 0) o._$AN = r = /* @__PURE__ */ new Set();
    else if (r.has(h)) break;
    r.add(h), ra(o);
  }
};
function oa(h) {
  this._$AN !== void 0 ? (ai(this), this._$AM = h, Ko(this)) : this._$AM = h;
}
function sa(h, o = !1, r = 0) {
  const l = this._$AH, c = this._$AN;
  if (c !== void 0 && c.size !== 0) if (o) if (Array.isArray(l)) for (let d = r; d < l.length; d++) Se(l[d], !1), ai(l[d]);
  else l != null && (Se(l, !1), ai(l));
  else Se(this, h);
}
const ra = (h) => {
  h.type == ea.CHILD && (h._$AP ?? (h._$AP = sa), h._$AQ ?? (h._$AQ = oa));
};
class aa extends na {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(o, r, l) {
    super._$AT(o, r, l), Ko(this), this.isConnected = o._$AU;
  }
  _$AO(o, r = !0) {
    var l, c;
    o !== this.isConnected && (this.isConnected = o, o ? (l = this.reconnected) == null || l.call(this) : (c = this.disconnected) == null || c.call(this)), r && (Se(this, o), ai(this));
  }
  setValue(o) {
    if (ta(this._$Ct)) this._$Ct._$AI(o, this);
    else {
      const r = [...this._$Ct._$AH];
      r[this._$Ci] = o, this._$Ct._$AI(r, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const Xi = /* @__PURE__ */ new WeakMap(), Zo = ia(class extends aa {
  render(h) {
    return C;
  }
  update(h, [o]) {
    var l;
    const r = o !== this.G;
    return r && this.rt(void 0), (r || this.lt !== this.ct) && (this.G = o, this.ht = (l = h.options) == null ? void 0 : l.host, this.rt(this.ct = h.element)), C;
  }
  rt(h) {
    if (this.G !== void 0) if (this.isConnected || (h = void 0), typeof this.G == "function") {
      const o = this.ht ?? globalThis;
      let r = Xi.get(o);
      r === void 0 && (r = /* @__PURE__ */ new WeakMap(), Xi.set(o, r)), r.get(this.G) !== void 0 && this.G.call(this.ht, void 0), r.set(this.G, h), h !== void 0 && this.G.call(this.ht, h);
    } else this.G.value = h;
  }
  get lt() {
    var h, o;
    return typeof this.G == "function" ? (h = Xi.get(this.ht ?? globalThis)) == null ? void 0 : h.get(this.G) : (o = this.G) == null ? void 0 : o.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), Jo = {
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
  showMap: "Map",
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
}, ha = {
  ...Jo,
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
  showMap: "Carte",
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
function ui(h) {
  return (h || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}
function Xo(h) {
  return h === "fr" ? ha : Jo;
}
function la(h, o) {
  return h[o] || o || h.unknown;
}
function Be(h) {
  return h && typeof h == "object" ? {
    language: h.language || "en",
    hour12: h.hour12,
    timeZone: h.timeZone
  } : { language: h || "en" };
}
function ca(h) {
  var v, m, w, k;
  const o = ((v = h == null ? void 0 : h.locale) == null ? void 0 : v.language) || (h == null ? void 0 : h.language) || "en", r = (m = h == null ? void 0 : h.locale) == null ? void 0 : m.time_format;
  let l;
  r === "12" ? l = !0 : r === "24" && (l = !1);
  const c = (w = h == null ? void 0 : h.locale) == null ? void 0 : w.time_zone, d = (k = h == null ? void 0 : h.config) == null ? void 0 : k.time_zone;
  return { language: o, hour12: l, timeZone: c === "server" && typeof d == "string" && d !== "" && d !== "local" && d !== "server" ? d : void 0 };
}
function W(h, o, r) {
  return h.toLocaleString(r === "fr" ? "fr-FR" : "en-US", {
    minimumFractionDigits: o,
    maximumFractionDigits: o
  });
}
const ua = /^<.*>$/;
function Qo(h) {
  if (typeof h != "string")
    return null;
  const o = h.trim();
  if (!o || ua.test(o))
    return null;
  const r = o.toLowerCase();
  return r === "none" || r === "null" ? null : o;
}
function ts(h) {
  return h.replace(/[\u00a0\u202f]/g, " ").replace(/\s+/g, " ").trim();
}
function cn(h, o) {
  const r = { ...o };
  return h.timeZone && (r.timeZone = h.timeZone), r;
}
function oi(h, o) {
  return ts(
    new Intl.DateTimeFormat(
      o.language || "en",
      cn(o, { weekday: "short", day: "numeric", month: "short" })
    ).format(h)
  );
}
function Ce(h, o) {
  const r = cn(o, {
    hour: o.hour12 ? "numeric" : "2-digit",
    minute: "2-digit"
  });
  return typeof o.hour12 == "boolean" && (r.hour12 = o.hour12), ts(new Intl.DateTimeFormat(o.language || "en", r).format(h));
}
function Bo(h, o) {
  const r = new Intl.DateTimeFormat(
    "en-US",
    cn(o, { year: "numeric", month: "2-digit", day: "2-digit" })
  ).formatToParts(h), l = (c) => {
    var d;
    return ((d = r.find((p) => p.type === c)) == null ? void 0 : d.value) ?? "";
  };
  return `${l("year")}-${l("month")}-${l("day")}`;
}
function da(h, o) {
  const r = new Date(h);
  if (Number.isNaN(r.getTime()))
    return h;
  const l = Be(o);
  return `${oi(r, l)}, ${Ce(r, l)}`;
}
function $e(h) {
  if (h == null || Number.isNaN(h))
    return "—";
  const o = Math.max(0, Math.round(h)), r = Math.floor(o / 3600), l = Math.floor(o % 3600 / 60);
  return r > 0 ? `${r} h ${l} min` : `${l} min`;
}
function es(h) {
  return h.map((o) => typeof o == "string" ? o.trim() : "").filter((o) => o.length > 0);
}
function ze(h) {
  return typeof h != "string" ? null : h.trim() || null;
}
function jt(h) {
  return typeof h == "number" && Number.isFinite(h) ? h : null;
}
function is(h, o, r) {
  const l = jt(h), c = jt(o);
  return l == null && c == null ? null : l != null && c != null ? `${W(l, 0, r)} → ${W(c, 0, r)} %` : `${W(l ?? c, 0, r)} %`;
}
function ns(h, o, r) {
  const l = Be(r), c = new Date(h);
  if (Number.isNaN(c.getTime()))
    return h;
  const d = `${oi(c, l)}, ${Ce(c, l)}`;
  if (!o)
    return d;
  const p = new Date(o);
  if (Number.isNaN(p.getTime()))
    return d;
  if (Bo(c, l) !== Bo(p, l)) {
    const v = `${oi(p, l)}, ${Ce(p, l)}`;
    return `${d} – ${v}`;
  }
  return `${oi(c, l)}, ${Ce(c, l)}–${Ce(p, l)}`;
}
function os(h, o) {
  const r = jt(h);
  return r == null ? null : `${W(r, 1, o)} kWh`;
}
function fa(h, o) {
  const r = Be(o), l = ui(r.language), c = ze(h.start_address), d = ze(h.end_address), p = c && d ? `${c} → ${d}` : c || d, v = en(h.energy_used_kwh, h.distance_km), m = is(h.start_battery_level, h.end_battery_level, l), w = es([
    jt(h.duration_s) == null ? null : $e(h.duration_s),
    v == null ? null : `${W(v, 0, l)} Wh/km`,
    m ?? os(h.energy_used_kwh, l)
  ]), k = jt(h.distance_km);
  return {
    datetime: h.start_at,
    when: ns(h.start_at, h.end_at, r),
    place: p,
    figure: k == null ? null : `${W(k, 1, l)} km`,
    detail: w.join(" · "),
    details: w
  };
}
function pa(h) {
  if (h.is_dc === !0)
    return "DC";
  if (h.is_dc === !1)
    return "AC";
  const o = Qo(h.charger_type);
  return o === "AC" || o === "DC" ? o : null;
}
function _a(h, o) {
  const r = Be(o), l = ui(r.language), c = ze(h.address) || ze(h.geofence) || ze(h.location), d = Qo(h.charger_type), p = d && d !== "AC" && d !== "DC" ? d : null, v = jt(h.max_power_kw), m = es([
    jt(h.duration_s) == null ? null : $e(h.duration_s),
    is(h.start_battery_level, h.end_battery_level, l),
    v == null ? null : `${W(v, 0, l)} kW`,
    pa(h)
  ]);
  return {
    datetime: h.start_at,
    when: ns(h.start_at, h.end_at, r),
    place: c || p,
    figure: os(h.energy_added_kwh, l),
    detail: m.join(" · "),
    details: m
  };
}
function en(h, o) {
  return h == null || o == null || o <= 0 ? null : h * 1e3 / o;
}
function ss(h, o = /* @__PURE__ */ new Date()) {
  const r = new Date(o);
  if (h === "week") {
    const c = (r.getDay() + 6) % 7;
    r.setDate(r.getDate() - c);
  } else h === "month" ? r.setDate(1) : r.setMonth(0, 1);
  r.setHours(0, 0, 0, 0);
  const l = new Date(r);
  return h === "week" ? l.setDate(l.getDate() + 7) : h === "month" ? l.setMonth(l.getMonth() + 1) : l.setFullYear(l.getFullYear() + 1), { start: r, end: l };
}
function rs(h, o, r = /* @__PURE__ */ new Date()) {
  const l = new Date(h).getTime();
  if (Number.isNaN(l))
    return !1;
  const { start: c, end: d } = ss(o, r);
  return l >= c.getTime() && l < d.getTime();
}
function ma(h) {
  const o = /* @__PURE__ */ new Date();
  return { from: ss(h, o).start.toISOString(), to: o.toISOString() };
}
function ga(h) {
  return typeof h == "string" ? h : h instanceof Error || h && typeof h == "object" && "message" in h && typeof h.message == "string" ? h.message : "";
}
function va(h, o) {
  const r = ga(h);
  return !r || r.includes("tl_") ? o : r.slice(0, 180);
}
function Gt(h) {
  return !h || typeof h != "object" ? null : h;
}
const ya = {
  week: 12,
  month: 12,
  year: 5
}, xa = 480;
function wa(h, o = !1) {
  const r = o ? 200 : 360, l = h != null && Number.isFinite(h) && h >= 64 ? h : r, c = l < xa;
  return {
    width: l,
    height: o ? c ? 116 : 132 : c ? 184 : 208,
    left: o ? 32 : 42,
    right: o ? 8 : 12,
    top: o ? 8 : 12,
    bottom: o ? 22 : 28
  };
}
function ba(h) {
  if (!Number.isFinite(h) || h <= 0)
    return 1;
  const o = 10 ** Math.floor(Math.log10(h)), r = h / o;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * o;
}
function Pa(h, o, r = /* @__PURE__ */ new Date()) {
  let l = -1;
  return h.forEach((c, d) => {
    rs(c, o, r) && (l = d);
  }), l >= 0 ? l : Math.max(0, h.length - 1);
}
function Qi(h, o, r) {
  const l = new Date(h);
  if (Number.isNaN(l.getTime()))
    return h;
  const c = Be(r), d = c.language || "en", p = c.timeZone ? { timeZone: c.timeZone } : {};
  return o === "year" ? new Intl.DateTimeFormat(d, { year: "numeric", ...p }).format(l) : o === "month" ? new Intl.DateTimeFormat(d, { month: "short", ...p }).format(l).replace(/[\u00a0\u202f]/g, " ").replace(/\.$/, "").trim() : new Intl.DateTimeFormat(d, { day: "numeric", month: "short", ...p }).format(l).replace(/[\u00a0\u202f]/g, " ").replace(/,/g, "").replace(/\s+/g, " ").trim();
}
function La(h, o, r, l, c = {}) {
  const d = wa(c.width, c.compact), v = h.map((A) => o === "stack" ? Math.max(0, A.value ?? 0) + Math.max(0, A.stack ?? 0) : A.value != null && Number.isFinite(A.value) && A.value > 0 ? A.value : 0).filter((A) => A > 0), m = ba(v.length ? Math.max(...v) : 0), w = d.width - d.left - d.right, k = d.height - d.top - d.bottom, y = h.length > 0 ? w / h.length : w, b = (A) => d.top + k - A / m * k, N = b(0), R = [m, m / 2, 0], $ = h.map((A, j) => {
    const _t = d.left + y * j + y / 2, lt = A.value != null && Number.isFinite(A.value) ? A.value : null, ot = lt == null ? null : b(Math.max(0, lt));
    return { ...A, x: _t, y: ot, value: lt };
  }), vt = h.length > 8 ? 2 : 1, Pt = (A, j, _t) => {
    if (!c.onSelect)
      return et`<g><title>${j}</title>${_t}</g>`;
    const lt = c.selected === A;
    return et`
      <g
        class=${lt ? "selected" : ""}
        role="button"
        tabindex="0"
        aria-pressed=${lt ? "true" : "false"}
        aria-label=${j}
        @click=${() => {
      var ot;
      return (ot = c.onSelect) == null ? void 0 : ot.call(c, A);
    }}
        @keydown=${(ot) => {
      var G;
      (ot.key === "Enter" || ot.key === " ") && (ot.preventDefault(), (G = c.onSelect) == null || G.call(c, A));
    }}
      >
        <title>${j}</title>
        ${_t}
      </g>
    `;
  }, Ot = o === "line" ? [] : $.map((A, j) => {
    const _t = Math.min(c.compact ? 16 : 22, y * 0.62), lt = (A.x - _t / 2).toFixed(1), ot = et`
            <rect
              class="hit"
              x=${(A.x - y / 2).toFixed(1)}
              y=${d.top}
              width=${y.toFixed(1)}
              height=${k}
            ></rect>
          `;
    if (o === "stack") {
      const di = [
        { amount: Math.max(0, A.value ?? 0), className: "bar ac" },
        { amount: Math.max(0, A.stack ?? 0), className: "bar dc" }
      ];
      let ct = 0;
      const fi = di.map((it) => {
        const Zt = b(ct);
        ct += it.amount;
        const S = b(ct), ce = Math.max(0, Zt - S);
        return ce <= 0 ? et`` : et`
                <rect
                  class=${it.className}
                  x=${lt}
                  y=${S.toFixed(1)}
                  width=${_t.toFixed(1)}
                  height=${ce.toFixed(1)}
                  rx="2"
                ></rect>
              `;
      });
      return Pt(j, A.title, et`${ot}${fi}`);
    }
    const G = A.y ?? N, st = Math.max(0, N - G);
    return Pt(
      j,
      A.title,
      et`
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
  }), Q = [];
  let It = !1;
  if (o === "line")
    for (const A of $) {
      if (A.y == null) {
        It = !1;
        continue;
      }
      Q.push(`${It ? "L" : "M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`), It = !0;
    }
  const Yt = o === "line" ? $.map((A, j) => A.y == null ? et`` : Pt(
    j,
    A.title,
    et`
              <circle class="hit" cx=${A.x.toFixed(1)} cy=${A.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${A.x.toFixed(1)} cy=${A.y.toFixed(1)} r="3.5"></circle>
            `
  )) : [];
  return et`
    <svg
      class=${c.compact ? "series-chart compact" : "series-chart"}
      viewBox=${`0 0 ${d.width} ${d.height}`}
      width="100%"
      height=${String(d.height)}
      role="group"
      aria-label=${r}
      preserveAspectRatio="xMinYMin meet"
    >
      ${R.map((A) => {
    const j = b(A);
    return et`
          <line class="grid" x1=${d.left} y1=${j.toFixed(1)} x2=${d.width - d.right} y2=${j.toFixed(1)}></line>
          <text class="y-label" x=${d.left - 4} y=${(j + 4).toFixed(1)} text-anchor="end">
            ${l(A)}
          </text>
        `;
  })}
      ${Ot}
      ${Q.length > 1 ? et`<path class="line" d=${Q.join(" ")}></path>` : et``}
      ${Yt}
      ${$.map(
    (A, j) => j % vt === 0 || j === $.length - 1 ? et`<text class="x-label" x=${A.x.toFixed(1)} y=${d.height - 6} text-anchor="middle">${A.label}</text>` : et``
  )}
    </svg>
  `;
}
function ka(h, o) {
  const r = [];
  for (const l of h) {
    const c = l[o];
    typeof c == "number" && Number.isFinite(c) && r.push(c);
  }
  return r;
}
function Ta(h, o = 320, r = 56) {
  if (h.length < 2)
    return et``;
  const l = Math.min(...h), d = Math.max(...h) - l || 1, p = o / (h.length - 1), v = h.map((m, w) => {
    const k = w * p, y = r - 4 - (m - l) / d * (r - 8);
    return `${k.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return et`
    <svg class="chart" viewBox="0 0 ${o} ${r}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${v}></polyline>
    </svg>
  `;
}
const as = 15, Wt = 256, Do = 85.05112878;
function Ca(h, o) {
  return typeof h != "number" || typeof o != "number" || !Number.isFinite(h) || !Number.isFinite(o) || h < -90 || h > 90 || o < -180 || o > 180 ? null : { lat: h, lon: o };
}
function Aa(h, o, r = as) {
  const l = Wt * 2 ** r, d = Math.min(Do, Math.max(-Do, h)) * Math.PI / 180, p = (o + 180) / 360 * l, m = (1 - Math.log(Math.tan(Math.PI / 4 + d / 2)) / Math.PI) / 2 * l;
  return { x: p, y: m };
}
function Ma(h, o, r, l, c = as) {
  const d = Aa(h, o, c), p = d.x - r / 2, v = d.y - l / 2, m = Math.floor(p / Wt), w = Math.floor((p + Math.max(r, 1) - 1e-3) / Wt), k = Math.floor(v / Wt), y = Math.floor((v + Math.max(l, 1) - 1e-3) / Wt), b = 2 ** c, N = [];
  for (let R = m; R <= w; R += 1)
    for (let $ = k; $ <= y; $ += 1) {
      if ($ < 0 || $ >= b)
        continue;
      const vt = (R % b + b) % b;
      N.push({
        x: vt,
        y: $,
        left: Math.round((R * Wt - p) * 10) / 10,
        top: Math.round(($ * Wt - v) * 10) / 10,
        url: `https://tile.openstreetmap.org/${c}/${vt}/${$}.png`
      });
    }
  return {
    tiles: N,
    dot: { left: r / 2, top: l / 2 }
  };
}
const un = {
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
}, hs = Object.keys(un);
function nn(h) {
  const o = { ...un }, r = h == null ? void 0 : h.show;
  if (!r || typeof r != "object")
    return o;
  for (const l of hs) {
    const c = r[l];
    typeof c == "boolean" && (o[l] = c);
  }
  return o;
}
function on(h) {
  return h.chart_consumption || h.chart_distance || h.chart_energy || h.totals || h.battery_health || h.charging_split || h.vampire_drain || h.consumption_vs_temp;
}
function No(h) {
  return h.chart_consumption || h.chart_distance || h.chart_energy || h.totals || h.battery_health || h.charging_split || h.vampire_drain;
}
function si(h) {
  const o = [];
  return h.status && o.push("status"), h.drives && o.push("drives"), h.charges && o.push("charges"), o.push("stats"), on(h) && o.push("charts"), o;
}
function Sa(h, o) {
  return h === "drive" ? o.drives ? h : si(o)[0] ?? "stats" : h === "stats" || si(o).includes(h) ? h : si(o)[0] ?? "stats";
}
const hi = "tesla-logger-card";
function Ro(h) {
  const o = Gt(h);
  return !!(o && Array.isArray(o.data));
}
function $a(h) {
  const o = Gt(h);
  return !!(o && Array.isArray(o.route) && Array.isArray(o.series));
}
function za(h) {
  const o = Gt(h);
  return !!(o && typeof o.distance_km == "number");
}
function Ea(h) {
  const o = Gt(h);
  return !!(o && Array.isArray(o.buckets));
}
function Oa(h) {
  const o = Gt(h);
  return (o && Array.isArray(o.data) ? o.data : []).filter((l) => {
    const c = Gt(l);
    return !!(c && typeof c.temp_c_bucket == "number");
  });
}
function ut(h) {
  return typeof h == "number" && Number.isFinite(h) ? h : null;
}
const li = class li extends ae {
  constructor() {
    super(...arguments), this._view = "status", this._bucketIndex = null, this._period = "month", this._page = 1, this._loading = !1, this._error = "", this._plotWidths = {}, this._headerBox = { width: 0, height: 0 }, this.watchSize = (o) => {
      var r;
      o && ((r = this._resize) == null || r.observe(o));
    };
  }
  setConfig(o) {
    var l;
    if (!o || typeof o.entity != "string" || !o.entity)
      throw new Error("Please select a Tesla Logger entity");
    const r = ((l = this._config) == null ? void 0 : l.entity) !== o.entity;
    this._config = o, r && (this._view = o.default_view || "status", this.clearHistory()), this.ensureVisibleView();
  }
  get flags() {
    return nn(this._config);
  }
  ensureVisibleView() {
    const o = Sa(this._view, this.flags);
    o !== this._view && (this._view = o);
  }
  static getConfigElement() {
    return document.createElement("tesla-logger-card-editor");
  }
  static getStubConfig(o) {
    return { entity: Object.keys(o.states).find((l) => {
      var c, d;
      return ((d = (c = o.states[l]) == null ? void 0 : c.attributes) == null ? void 0 : d.key) === "location";
    }) || "", show: { ...un } };
  }
  getCardSize() {
    return 6;
  }
  connectedCallback() {
    super.connectedCallback(), typeof ResizeObserver == "function" && (this._resize = new ResizeObserver((o) => {
      const r = o.map((l) => {
        const c = l.target;
        return {
          plot: c.dataset.plot,
          mapHost: c.dataset.mapHost != null,
          width: Math.round(l.contentRect.width),
          height: Math.round(l.contentRect.height)
        };
      });
      queueMicrotask(() => {
        if (!this._resize)
          return;
        let l = this._plotWidths, c = !1, d = this._headerBox, p = !1;
        for (const v of r) {
          if (v.plot) {
            v.width > 0 && l[v.plot] !== v.width && (c || (l = { ...l }, c = !0), l[v.plot] = v.width);
            continue;
          }
          v.mapHost && (d.width !== v.width || d.height !== v.height) && (d = { width: v.width, height: v.height }, p = !0);
        }
        c && (this._plotWidths = l), p && (this._headerBox = d);
      });
    }));
  }
  disconnectedCallback() {
    var o;
    (o = this._resize) == null || o.disconnect(), this._resize = void 0, this.destroyMap(), super.disconnectedCallback();
  }
  updated(o) {
    (o.has("_view") || o.has("_config")) && this.ensureView(), this._view === "drive" && (o.has("_detail") || o.has("_view")) && this.syncMap(), o.has("_view") && this._view !== "drive" && this.destroyMap();
  }
  render() {
    var o;
    return (o = this._config) != null && o.entity ? M`
      <ha-card>
        ${this.header()}
        <div class="tabs" role="tablist">
          ${si(this.flags).map((r) => this.tab(r, this.text[r]))}
        </div>
        ${this._error ? M`<p class="message">${this._error}</p>` : C}
        ${this._loading ? M`<p class="message">${this.text.loading}</p>` : C}
        ${this.body()}
      </ha-card>
    ` : M`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;
  }
  get dates() {
    return ca(this.hass);
  }
  get cardLang() {
    return ui(this.dates.language);
  }
  get text() {
    return Xo(this.cardLang);
  }
  get readings() {
    var p, v, m, w;
    const o = /* @__PURE__ */ new Map(), r = this.hass, l = (p = this._config) == null ? void 0 : p.entity;
    if (!r || !l || !r.states[l])
      return o;
    const c = (m = (v = r.entities) == null ? void 0 : v[l]) == null ? void 0 : m.device_id, d = r.states[l].attributes.vin;
    for (const [k, y] of Object.entries(r.states)) {
      const b = (w = r.entities) == null ? void 0 : w[k], N = !!(c && (b == null ? void 0 : b.device_id) === c), R = !!(d && y.attributes.vin === d);
      if (!N && !R)
        continue;
      const $ = (b == null ? void 0 : b.translation_key) || (typeof y.attributes.key == "string" ? y.attributes.key : void 0);
      $ && o.set($, y);
    }
    return o;
  }
  get deviceId() {
    var r, l, c;
    const o = (r = this._config) == null ? void 0 : r.entity;
    if (!(!this.hass || !o))
      return (c = (l = this.hass.entities) == null ? void 0 : l[o]) == null ? void 0 : c.device_id;
  }
  numeric(o) {
    var c;
    const r = (c = this.readings.get(o)) == null ? void 0 : c.state;
    if (!r || r === "unknown" || r === "unavailable")
      return null;
    const l = Number(r);
    return Number.isFinite(l) ? l : null;
  }
  label(o) {
    var l;
    const r = (l = this.readings.get(o)) == null ? void 0 : l.state;
    return !r || r === "unknown" || r === "unavailable" ? null : r;
  }
  header() {
    var w, k, y, b, N, R;
    const o = this.numeric("battery_level"), r = o == null ? "—" : `${Math.round(o)}`, l = o == null ? 0 : Math.max(0, Math.min(100, o)), c = this.label("activity") || "", d = this.deviceId ? (y = (k = (w = this.hass) == null ? void 0 : w.devices) == null ? void 0 : k[this.deviceId]) == null ? void 0 : y.name : void 0, p = (R = (N = this.hass) == null ? void 0 : N.states[((b = this._config) == null ? void 0 : b.entity) || ""]) == null ? void 0 : R.attributes.friendly_name, v = d || (typeof p == "string" ? p : this.text.unknown), m = this.label("geofence");
    return M`
      <div class="header-wrap" data-map-host ${Zo(this.watchSize)}>
        ${this.watermark()}
        <div class="header">
          <svg class="ring" viewBox="0 0 36 36" aria-label="${r}%">
            <circle class="track" cx="18" cy="18" r="15.5"></circle>
            <circle
              class="value"
              cx="18"
              cy="18"
              r="15.5"
              pathLength="100"
              stroke-dasharray="${l} 100"
            ></circle>
            <text x="18" y="20">${r}</text>
          </svg>
          <div>
            <p class="name">${v}</p>
            ${m ? M`<p class="sub">${m}</p>` : C}
            <span class="pill">${la(this.text, c)}</span>
          </div>
        </div>
      </div>
    `;
  }
  mapEnabled() {
    var o;
    return ((o = this._config) == null ? void 0 : o.show_map) !== !1;
  }
  carPosition() {
    const o = this.readings.get("location");
    return Ca(o == null ? void 0 : o.attributes.latitude, o == null ? void 0 : o.attributes.longitude);
  }
  watermark() {
    var p, v;
    if (!this.mapEnabled())
      return C;
    const o = this.carPosition(), { width: r, height: l } = this._headerBox;
    if (!o || r < 32 || l < 32)
      return C;
    const c = Ma(o.lat, o.lon, r, l), d = !!((v = (p = this.hass) == null ? void 0 : p.themes) != null && v.darkMode);
    return M`
      <div class=${d ? "map-bg dark" : "map-bg"} aria-hidden="true">
        ${c.tiles.map(
      (m) => M`
            <img
              alt=""
              width="256"
              height="256"
              src=${m.url}
              referrerpolicy="strict-origin-when-cross-origin"
              style=${`left:${m.left}px;top:${m.top}px`}
              draggable="false"
            />
          `
    )}
        <span class="map-credit">© OpenStreetMap</span>
      </div>
      <span
        class="map-dot"
        aria-hidden="true"
        style=${`left:${c.dot.left}px;top:${c.dot.top}px`}
      ></span>
    `;
  }
  tab(o, r) {
    return M`
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
  metric(o, r, l) {
    return M`<div class="metric">
      ${l ? M`<ha-icon icon=${l}></ha-icon>` : C}
      <div><span>${o}</span><strong>${r}</strong></div>
    </div>`;
  }
  quantity(o, r, l) {
    const c = this.numeric(o);
    return c == null ? "—" : `${W(c, r, this.cardLang)} ${l}`;
  }
  status() {
    return M`
      <div class="grid">
        ${this.metric(
      this.text.range,
      this.quantity("rated_range", 0, "km"),
      "mdi:map-marker-distance"
    )}
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
    return M`
      ${this.listToolbar(o)}
      <ul class="list">
        ${((o == null ? void 0 : o.data) || []).map(
      (r) => this.historyRow(fa(r, this.dates), () => this.openDrive(r.id))
    )}
      </ul>
      ${o && o.data.length === 0 ? M`<p class="message">${this.text.emptyDrives}</p>` : C}
    `;
  }
  drive() {
    const o = this._detail, r = en(o == null ? void 0 : o.energy_used_kwh, o == null ? void 0 : o.distance_km);
    return M`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left", this.text.back, !1, () => this.open("drives"))}
          <button type="button" class="back-label" @click=${() => this.open("drives")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${o ? this.when(o.start_at) : ""}</span>
      </div>
      ${o ? M`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(o.distance_km))}
              ${this.metric(this.text.duration, $e(o.duration_s))}
              ${this.metric(this.text.energy, this.kwh(o.energy_used_kwh))}
              ${this.metric(
      this.text.efficiency,
      r == null ? "—" : `${W(r, 0, this.cardLang)} Wh/km`
    )}
            </div>
            <p class="message">${this.text.map}</p>
            ${o.route.length ? M`<div class="map"></div>` : M`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart, o.series, "speed_kmh", "km/h")}
            ${this.chart(this.text.elevationChart, o.series, "elevation_m", "m")}
            ${this.chart(this.text.batteryChart, o.series, "battery_level", "%")}
          ` : C}
    `;
  }
  charges() {
    const o = this._charges;
    return M`
      ${this.listToolbar(o)}
      <ul class="list">
        ${((o == null ? void 0 : o.data) || []).map(
      (r) => this.historyRow(_a(r, this.dates))
    )}
      </ul>
      ${o && o.data.length === 0 ? M`<p class="message">${this.text.emptyCharges}</p>` : C}
    `;
  }
  stats() {
    const o = this._stats, r = en(o == null ? void 0 : o.energy_used_kwh, o == null ? void 0 : o.distance_km);
    return M`
      ${this.periodBar()}
      ${o ? M`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(o.distance_km))}
              ${this.metric(this.text.duration, $e(o.drive_duration_s))}
              ${this.metric(this.text.energy, this.kwh(o.energy_used_kwh))}
              ${this.metric(
      this.text.efficiency,
      r == null ? "—" : `${W(r, 0, this.cardLang)} Wh/km`
    )}
              ${this.metric(this.text.drivesCount, String(o.drive_count))}
              ${this.metric(this.text.chargesCount, String(o.charge_count))}
              ${this.metric(this.text.energyAdded, this.kwh(o.energy_added_kwh))}
            </div>
          ` : C}
    `;
  }
  periodBar() {
    return M`
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${["week", "month", "year"].map(
      (o) => M`
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
    const o = this.flags, r = this._series, l = (r == null ? void 0 : r.buckets) ?? [], c = l.length ? this.selectedBucketIndex(l) : -1, d = o.chart_consumption || o.chart_distance || o.chart_energy, p = o.battery_health || o.charging_split || o.vampire_drain || o.consumption_vs_temp;
    return M`
      ${this.periodBar()}
      ${d && r && l.length === 0 ? M`<p class="message">${this.text.emptySeries}</p>` : C}
      ${d && l.length ? M`
            <div class="series-list">
              ${o.chart_consumption ? this.seriesFigure(
      "consumption",
      "line",
      this.text.consumptionChart,
      "Wh/km",
      (v) => ut(v.wh_per_km),
      c
    ) : C}
              ${o.chart_distance ? this.seriesFigure(
      "distance",
      "bar",
      this.text.distance,
      "km",
      (v) => ut(v.distance_km),
      c
    ) : C}
              ${o.chart_energy ? this.seriesFigure(
      "energy",
      "bar",
      this.text.chargedChart,
      "kWh",
      (v) => ut(v.energy_charged_kwh),
      c
    ) : C}
            </div>
          ` : C}
      ${o.totals && c >= 0 ? this.bucketTotals(l[c]) : C}
      ${p ? M`
            <div class="series-extra">
              ${o.battery_health && c >= 0 ? this.seriesFigure(
      "health",
      "line",
      this.text.batteryHealth,
      "km",
      (v) => ut(v.range_at_100_km),
      c,
      !0
    ) : C}
              ${o.charging_split && c >= 0 ? this.acDcFigure(l, c) : C}
              ${o.vampire_drain && c >= 0 ? this.seriesFigure(
      "idle",
      "bar",
      this.text.idleUse,
      "km/j",
      (v) => ut(v.idle_range_loss_km_per_day),
      c,
      !0
    ) : C}
              ${o.consumption_vs_temp ? this.tempFigure() : C}
            </div>
          ` : C}
    `;
  }
  selectedBucketIndex(o) {
    return this._bucketIndex != null && this._bucketIndex >= 0 && this._bucketIndex < o.length ? this._bucketIndex : Pa(
      o.map((r) => r.start),
      this._period
    );
  }
  selectBucket(o) {
    this._bucketIndex = o;
  }
  bucketHeading(o) {
    return rs(o.start, this._period) ? this._period === "week" ? this.text.thisWeek : this._period === "month" ? this.text.thisMonth : this.text.thisYear : Qi(o.start, this._period, this.dates);
  }
  bucketTotals(o) {
    const r = ut(o.energy_used_kwh);
    return M`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(o)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(o.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${$e(o.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(o.energy_charged_kwh)}</strong>
            ${r == null ? C : M`<span class="totals-sub">${this.text.consumed} ${this.kwh(r)}</span>`}
          </div>
        </div>
      </section>
    `;
  }
  seriesFigure(o, r, l, c, d, p, v = !1) {
    var $;
    const m = (($ = this._series) == null ? void 0 : $.buckets) ?? [], w = c === "Wh/km" ? 0 : 1, k = m.map((vt) => {
      const Pt = d(vt), Ot = Qi(vt.start, this._period, this.dates), Q = Pt == null ? "—" : `${W(Pt, w, this.cardLang)} ${c}`;
      return { label: Ot, value: Pt, title: `${Ot} · ${Q}` };
    }), y = v ? k[p] : k[k.length - 1], b = v ? this.bucketHeading(m[p]) : this.text.latest, N = (y == null ? void 0 : y.value) == null ? "—" : `${W(y.value, w, this.cardLang)} ${c}`, R = `${l}. ${b} ${N}`;
    return M`
      <figure class=${v ? "series-card compact" : "series-card"}>
        <figcaption>
          <span class="series-title">${l}</span>
          <span class="series-value">${b} ${N}</span>
        </figcaption>
        ${this.drawSeries(o, k, r, R, p, v)}
      </figure>
    `;
  }
  acDcFigure(o, r) {
    const l = o[r], c = ut(l == null ? void 0 : l.dc_share_pct), d = ut(l == null ? void 0 : l.charge_cost), p = ut(l == null ? void 0 : l.cost_per_km), v = o.map((w) => {
      const k = Qi(w.start, this._period, this.dates), y = ut(w.ac_energy_kwh), b = ut(w.dc_energy_kwh), N = y == null ? "—" : `${W(y, 1, this.cardLang)} kWh`, R = b == null ? "—" : `${W(b, 1, this.cardLang)} kWh`;
      return {
        label: k,
        value: y,
        stack: b,
        title: `${k} · AC ${N} · DC ${R}`
      };
    }), m = `${this.text.acDc}. ${this.bucketHeading(l)}`;
    return M`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">
          ${c == null ? C : M`${W(c, 0, this.cardLang)} % ${this.text.fastShare}`}
          ${d == null ? C : M`${c == null ? "" : " · "}${this.text.cost} ${W(d, 2, this.cardLang)}`}
          ${p == null ? C : M`<span class="totals-sub">${W(p, 2, this.cardLang)} ${this.text.perKm}</span>`}
        </p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc", v, "stack", m, r, !0)}
      </figure>
    `;
  }
  tempFigure() {
    const r = (this._tempBins ?? []).map((l) => {
      const c = l.temp_c_bucket, d = `${W(c, 0, this.cardLang)}–${W(c + 5, 0, this.cardLang)}°`, p = ut(l.wh_per_km), v = ut(l.distance_km), m = p == null ? "—" : `${W(p, 0, this.cardLang)} Wh/km`, w = v == null ? "" : ` · ${W(v, 0, this.cardLang)} km`;
      return { label: d, value: p, title: `${d} · ${m}${w}` };
    });
    return M`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${r.length ? this.drawSeries("temp", r, "bar", this.text.tempUse, -1, !0, !1) : M`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `;
  }
  drawSeries(o, r, l, c, d, p, v = !0) {
    const m = (w) => W(w, w >= 10 || w === 0 ? 0 : 1, this.cardLang);
    return M`
      <div class="plot" data-plot=${o} ${Zo(this.watchSize)}>
        ${La(r, l, c, m, {
      width: this._plotWidths[o],
      compact: p,
      selected: d,
      onSelect: v ? (w) => this.selectBucket(w) : void 0
    })}
      </div>
    `;
  }
  chart(o, r, l, c) {
    const d = ka(r, l);
    if (d.length < 2)
      return C;
    const p = d[d.length - 1];
    return M`
      <div class="chart-block">
        <span class="muted">${o} · ${W(p, 0, this.cardLang)} ${c}</span>
        ${Ta(d)}
      </div>
    `;
  }
  listToolbar(o) {
    const r = (o == null ? void 0 : o.page) ?? this._page, l = o && o.per_page > 0 ? Math.ceil(o.total / o.per_page) : 1;
    return M`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton(
      "mdi:chevron-left",
      this.text.previous,
      !o || r <= 1,
      () => this.setPage(r - 1)
    )}
          ${this.iconButton(
      "mdi:chevron-right",
      this.text.next,
      !o || r >= l,
      () => this.setPage(r + 1)
    )}
          ${this.iconButton("mdi:refresh", this.text.refresh, !1, () => this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(o)}</span>
      </div>
    `;
  }
  pageIndicator(o) {
    if (!o || o.total <= 0 || o.per_page <= 0 || o.total <= o.per_page)
      return `${this.text.page} ${(o == null ? void 0 : o.page) ?? this._page}`;
    const r = (o.page - 1) * o.per_page + 1, l = Math.min(o.page * o.per_page, o.total);
    return `${r}–${l}`;
  }
  iconButton(o, r, l, c) {
    return M`
      <ha-icon-button
        .label=${r}
        aria-label=${r}
        title=${r}
        ?disabled=${l}
        @click=${() => {
      l || c();
    }}
      >
        <ha-icon icon=${o}></ha-icon>
      </ha-icon-button>
    `;
  }
  historyRow(o, r) {
    const l = o.place ? `${o.when} · ${o.place}` : o.when, c = M`<span class="entry-line"
        ><span class="entry-main" title=${l}
          ><time datetime=${o.datetime}>${o.when}</time>${o.place ? ` · ${o.place}` : C}</span
        ><strong class="entry-figure">${o.figure ?? "—"}</strong></span
      >${o.details.length ? M`<span class="entry-meta" title=${o.detail}
            >${o.details.map((d) => M`<span>${d}</span>`)}</span
          >` : C}`;
    return r ? M`
        <li>
          <button type="button" class="entry" @click=${r}>${c}</button>
        </li>
      ` : M`<li><div class="entry">${c}</div></li>`;
  }
  km(o) {
    return o == null ? "—" : `${W(o, 1, this.cardLang)} km`;
  }
  kwh(o) {
    return o == null ? "—" : `${W(o, 1, this.cardLang)} kWh`;
  }
  when(o) {
    return da(o, this.dates);
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
    this._view === "drives" && this.flags.drives && !this._drives ? await this.loadDrives() : this._view === "charges" && this.flags.charges && !this._charges ? await this.loadCharges() : this._view === "stats" && !this._stats ? await this.loadStats() : this._view === "charts" && on(this.flags) && this.seriesStale() ? await this.loadSeries() : this._view === "drive" && this.flags.drives && this._driveId != null && !this._detail && await this.loadDrive();
  }
  async loadDrives() {
    await this.load("drives", async () => {
      const o = await this.call("get_drives", { page: this._page, per_page: 20 });
      if (!Ro(o))
        throw new Error(this.text.failed);
      this._drives = o;
    });
  }
  async loadCharges() {
    await this.load("charges", async () => {
      const o = await this.call("get_charges", { page: this._page, per_page: 20 });
      if (!Ro(o))
        throw new Error(this.text.failed);
      this._charges = o;
    });
  }
  async loadDrive() {
    const o = this._driveId;
    o != null && await this.load("drive", async () => {
      const r = await this.call("get_drive", { drive_id: o, max_points: 300 });
      if (!$a(r))
        throw new Error(this.text.failed);
      this._detail = r;
    });
  }
  seriesStale() {
    const o = this.flags;
    return !!(this._seriesPeriod !== this._period || No(o) && !this._series || o.consumption_vs_temp && !this._tempBins);
  }
  async loadSeries() {
    const o = this.flags;
    if (!on(o))
      return;
    const r = this._period, l = No(o), c = o.consumption_vs_temp;
    l && (this._series = void 0), c && (this._tempBins = void 0), await this.load("charts", async () => {
      const d = ya[r];
      if (l) {
        const p = await this.call("get_stats_series", { period: r, count: d });
        if (!Ea(p))
          throw new Error(this.text.failed);
        this._series = p;
      }
      if (c)
        try {
          this._tempBins = Oa(await this.call("get_consumption_by_temp", { period: r, count: d }));
        } catch {
          this._tempBins = [];
        }
      this._seriesPeriod = r;
    });
  }
  async loadStats() {
    const o = this._period;
    await this.load("stats", async () => {
      const r = ma(o), l = await this.call("get_stats", r);
      if (!za(l))
        throw new Error(this.text.failed);
      this._stats = l;
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
    } catch (l) {
      this._error = va(l, this.text.failed);
    } finally {
      this._loading = !1;
    }
  }
  async call(o, r) {
    if (!this.hass || !this.deviceId)
      throw new Error(this.text.missingDevice);
    const l = await this.hass.callService(
      "tesla_logger",
      o,
      { device_id: this.deviceId, ...r },
      void 0,
      !1,
      !0
    ), c = Gt(l);
    return c && "response" in c ? c.response : l;
  }
  syncMap() {
    var m, w, k, y;
    const o = this.renderRoot.querySelector(".map"), r = ((m = this._detail) == null ? void 0 : m.route) ?? [];
    if (!o || r.length === 0)
      return;
    if (this.map && this.mapEl !== o && this.destroyMap(), !this.map) {
      if (this.map = se.map(o, { zoomControl: !0, attributionControl: !0 }), se.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        // HA serves Referrer-Policy: no-referrer; override per-tile so OSM gets a Referer.
        referrerPolicy: "strict-origin-when-cross-origin",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map), (k = (w = this.hass) == null ? void 0 : w.themes) != null && k.darkMode) {
        const b = this.map.getPane("tilePane");
        b && (b.style.filter = "invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9)");
      }
      this.mapEl = o;
    }
    (y = this.routeLayer) == null || y.remove();
    const l = se.layerGroup().addTo(this.map), c = r.map(
      (b) => [b.latitude, b.longitude]
    ), d = getComputedStyle(this).getPropertyValue("--primary-color").trim() || "#03a9f4", p = se.polyline(c, { color: d, weight: 4 }).addTo(l);
    se.circleMarker(c[0], {
      radius: 6,
      color: "#2e7d32",
      fillColor: "#2e7d32",
      fillOpacity: 1
    }).addTo(l);
    const v = c[c.length - 1];
    se.circleMarker(v, {
      radius: 6,
      color: "#c62828",
      fillColor: "#c62828",
      fillOpacity: 1
    }).addTo(l), this.routeLayer = l, this.map.fitBounds(p.getBounds().pad(0.15)), requestAnimationFrame(() => {
      var b;
      return (b = this.map) == null ? void 0 : b.invalidateSize();
    });
  }
  destroyMap() {
    var o;
    (o = this.map) == null || o.remove(), this.map = void 0, this.mapEl = void 0, this.routeLayer = void 0;
  }
};
li.properties = {
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
  _error: { state: !0 },
  _plotWidths: { state: !0 },
  _headerBox: { state: !0 }
}, li.styles = [
  Wo(Ir),
  Zr`
      :host {
        display: block;
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header-wrap {
        position: relative;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 12px;
        align-items: center;
        padding: 16px 16px 8px;
      }
      .map-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
      }
      .map-bg img {
        position: absolute;
        width: 256px;
        height: 256px;
        filter: grayscale(1);
        opacity: 0.22;
        pointer-events: none;
      }
      .map-bg.dark img {
        filter: invert(1) hue-rotate(180deg) grayscale(1) brightness(0.85);
        opacity: 0.2;
      }
      .map-dot {
        position: absolute;
        z-index: 2;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        border-radius: 50%;
        background: #c62828;
        box-shadow: 0 0 0 1.5px #fff;
      }
      .map-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        color: var(--secondary-text-color, #666);
        font-size: 9px;
        line-height: 1;
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
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 12px;
        padding: 10px 12px;
      }
      .metric ha-icon {
        flex: none;
        --mdc-icon-size: 22px;
        color: var(--primary-color, #03a9f4);
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
        gap: 0;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 0 12px 4px;
        list-style: none;
      }
      .entry {
        display: flex;
        flex-direction: column;
        gap: 2px;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding: 7px 4px;
        border: 0;
        border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
        border-radius: 0;
        background: transparent;
        color: var(--primary-text-color, #212121);
        text-align: left;
      }
      .entry-line {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        column-gap: 12px;
        align-items: baseline;
        min-width: 0;
      }
      .entry-main {
        min-width: 0;
        overflow: hidden;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 600;
        line-height: 1.25;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-figure {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        white-space: nowrap;
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
      .entry-meta {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.3;
      }
      .entry-meta > span {
        min-width: 0;
        overflow: hidden;
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
      .plot {
        width: 100%;
        min-width: 0;
      }
      .series-chart {
        width: 100%;
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
        vector-effect: non-scaling-stroke;
      }
      .series-chart .grid,
      .series-chart .dot,
      .series-chart .bar {
        vector-effect: non-scaling-stroke;
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
        align-items: center;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
      }
      .toolbar-actions,
      .back {
        display: flex;
        align-items: center;
        min-width: 0;
      }
      .page-indicator {
        margin-left: auto;
        color: var(--secondary-text-color);
        font-size: 0.85rem;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      ha-icon-button {
        width: 36px;
        height: 36px;
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        color: var(--primary-text-color);
      }
      ha-icon-button[disabled] {
        color: var(--disabled-text-color, var(--secondary-text-color));
        opacity: 0.4;
      }
      button.back-label {
        min-height: 0;
        margin: 0;
        padding: 0 4px 0 0;
        border-bottom: 0;
        color: var(--primary-text-color);
        font-size: 0.92rem;
        font-weight: 600;
      }
      @media (max-width: 420px) {
        .header {
          grid-template-columns: 64px 1fr;
        }
        .list {
          gap: 0;
          padding: 0 8px 4px;
        }
        .entry {
          padding: 6px 2px;
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
let sn = li;
function Ia(h, o) {
  const r = h.split(".").pop() ?? h;
  return r === "entity" ? o.entity : r === "default_view" ? o.defaultView : r === "show" ? o.showBlocks : r === "show_map" ? o.showMap : r in o.showFields ? o.showFields[r] : h;
}
const Za = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { integration: "tesla_logger" } }
  },
  {
    name: "show_map",
    selector: { boolean: {} }
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
    schema: hs.map((h) => ({ name: h, selector: { boolean: {} } }))
  }
], dn = class dn extends ae {
  setConfig(o) {
    this._config = { ...o, show_map: o.show_map !== !1, show: nn(o) };
  }
  render() {
    var r;
    if (!this.hass || !this._config)
      return C;
    const o = Xo(ui(((r = this.hass.locale) == null ? void 0 : r.language) || this.hass.language));
    return M`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Za}
        .computeLabel=${(l) => Ia(l.name, o)}
        @value-changed=${(l) => {
      const c = { ...this._config, ...l.detail.value };
      this._config = { ...c, show: nn(c) }, this.dispatchEvent(
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
dn.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
};
let rn = dn;
customElements.get(hi) || customElements.define(hi, sn);
customElements.get("tesla-logger-card-editor") || customElements.define("tesla-logger-card-editor", rn);
window.customCards = window.customCards || [];
window.customCards.some((h) => h.type === hi) || window.customCards.push({
  type: hi,
  name: "Tesla Logger",
  description: "Vehicle status, drives, charges, and stats from tesla-logger",
  preview: !1
});
export {
  sn as TeslaLoggerCard
};
