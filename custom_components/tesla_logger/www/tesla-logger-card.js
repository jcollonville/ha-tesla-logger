var we = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var cr = we.exports, lo;
function dr() {
  return lo || (lo = 1, function(c, o) {
    (function(r, h) {
      h(o);
    })(cr, function(r) {
      var h = "1.9.4";
      function u(t) {
        var e, i, n, s;
        for (i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (e in s)
            t[e] = s[e];
        }
        return t;
      }
      var _ = Object.create || /* @__PURE__ */ function() {
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
      var b = 0;
      function g(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++b), t._leaflet_id;
      }
      function P(t, e, i) {
        var n, s, a, l;
        return l = function() {
          n = !1, s && (a.apply(i, s), s = !1);
        }, a = function() {
          n ? s = arguments : (t.apply(i, arguments), setTimeout(l, e), n = !0);
        }, a;
      }
      function E(t, e, i) {
        var n = e[1], s = e[0], a = n - s;
        return t === n && i ? t : ((t - s) % a + a) % a + s;
      }
      function y() {
        return !1;
      }
      function k(t, e) {
        if (e === !1)
          return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function H(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function R(t) {
        return H(t).split(/\s+/);
      }
      function O(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? _(t.options) : {});
        for (var i in e)
          t.options[i] = e[i];
        return t.options;
      }
      function Et(t, e, i) {
        var n = [];
        for (var s in t)
          n.push(encodeURIComponent(i ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var zt = /\{ *([\w_ -]+) *\}/g;
      function Ft(t, e) {
        return t.replace(zt, function(i, n) {
          var s = e[n];
          if (s === void 0)
            throw new Error("No value provided for variable " + i);
          return typeof s == "function" && (s = s(e)), s;
        });
      }
      var nt = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function C(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1;
      }
      var V = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function _t(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var rt = 0;
      function ot(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - rt));
        return rt = e + i, window.setTimeout(t, i);
      }
      var Wt = window.requestAnimationFrame || _t("RequestAnimationFrame") || ot, Ki = window.cancelAnimationFrame || _t("CancelAnimationFrame") || _t("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function Q(t, e, i) {
        if (i && Wt === ot)
          t.call(e);
        else
          return Wt.call(window, p(t, e));
      }
      function at(t) {
        t && Ki.call(window, t);
      }
      var Ro = {
        __proto__: null,
        extend: u,
        create: _,
        bind: p,
        get lastId() {
          return b;
        },
        stamp: g,
        throttle: P,
        wrapNum: E,
        falseFn: y,
        formatNum: k,
        trim: H,
        splitWords: R,
        setOptions: O,
        getParamString: Et,
        template: Ft,
        isArray: nt,
        indexOf: C,
        emptyImageUrl: V,
        requestFn: Wt,
        cancelFn: Ki,
        requestAnimFrame: Q,
        cancelAnimFrame: at
      };
      function xt() {
      }
      xt.extend = function(t) {
        var e = function() {
          O(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = _(i);
        n.constructor = e, e.prototype = n;
        for (var s in this)
          Object.prototype.hasOwnProperty.call(this, s) && s !== "prototype" && s !== "__super__" && (e[s] = this[s]);
        return t.statics && u(e, t.statics), t.includes && (No(t.includes), u.apply(null, [n].concat(t.includes))), u(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? _(i.options) : {}, u(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var a = 0, l = n._initHooks.length; a < l; a++)
              n._initHooks[a].call(this);
          }
        }, e;
      }, xt.include = function(t) {
        var e = this.prototype.options;
        return u(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, xt.mergeOptions = function(t) {
        return u(this.prototype.options, t), this;
      }, xt.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function No(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = nt(t) ? t : [t];
          for (var e = 0; e < t.length; e++)
            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var st = {
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
            for (var s = arguments.length === 1, a = 0, l = t.length; a < l; a++)
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
            var l = this._listens(t, e, i);
            if (l !== !1) {
              var d = n[l];
              this._firingCount && (d.fn = y, this._events[t] = n = n.slice()), n.splice(l, 1);
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
          var n = u({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var s = this._events[t];
            if (s) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var a = 0, l = s.length; a < l; a++) {
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
            for (var l in this._eventParents)
              if (this._eventParents[l].listens(t, e, i, n))
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
          return this._eventParents = this._eventParents || {}, this._eventParents[g(t)] = t, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[g(t)], this;
        },
        _propagateEvent: function(t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, u({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      st.addEventListener = st.on, st.removeEventListener = st.clearAllEventListeners = st.off, st.addOneTimeEventListener = st.once, st.fireEvent = st.fire, st.hasEventListeners = st.listens;
      var oe = xt.extend(st);
      function A(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var Ji = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      A.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new A(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(T(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(T(t));
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
          return new A(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new A(this.x / t.x, this.y / t.y);
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
          return this.x = Ji(this.x), this.y = Ji(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = T(t);
          var e = t.x - this.x, i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = T(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = T(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + k(this.x) + ", " + k(this.y) + ")";
        }
      };
      function T(t, e, i) {
        return t instanceof A ? t : nt(t) ? new A(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new A(t.x, t.y) : new A(t, e, i);
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
          if (t instanceof A || typeof t[0] == "number" || "x" in t)
            e = i = T(t);
          else if (t = tt(t), e = t.min, i = t.max, !e || !i)
            return this;
          return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return T(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return T(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return T(this.max.x, this.min.y);
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
          return typeof t[0] == "number" || t instanceof A ? t = T(t) : t = tt(t), t instanceof W ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(t) {
          t = tt(t);
          var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x >= e.x && n.x <= i.x, l = s.y >= e.y && n.y <= i.y;
          return a && l;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(t) {
          t = tt(t);
          var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x > e.x && n.x < i.x, l = s.y > e.y && n.y < i.y;
          return a && l;
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
          return tt(
            T(e.x - n, e.y - s),
            T(i.x + n, i.y + s)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = tt(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function tt(t, e) {
        return !t || t instanceof W ? t : new W(t, e);
      }
      function et(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
            this.extend(i[n]);
      }
      et.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e = this._southWest, i = this._northEast, n, s;
          if (t instanceof N)
            n = t, s = t;
          else if (t instanceof et) {
            if (n = t._southWest, s = t._northEast, !n || !s)
              return this;
          } else
            return t ? this.extend($(t) || j(t)) : this;
          return !e && !i ? (this._southWest = new N(n.lat, n.lng), this._northEast = new N(s.lat, s.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(s.lat, i.lat), i.lng = Math.max(s.lng, i.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, s = Math.abs(e.lng - i.lng) * t;
          return new et(
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
          typeof t[0] == "number" || t instanceof N || "lat" in t ? t = $(t) : t = j(t);
          var e = this._southWest, i = this._northEast, n, s;
          return t instanceof et ? (n = t.getSouthWest(), s = t.getNorthEast()) : n = s = t, n.lat >= e.lat && s.lat <= i.lat && n.lng >= e.lng && s.lng <= i.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(t) {
          t = j(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat >= e.lat && n.lat <= i.lat, l = s.lng >= e.lng && n.lng <= i.lng;
          return a && l;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(t) {
          t = j(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat > e.lat && n.lat < i.lat, l = s.lng > e.lng && n.lng < i.lng;
          return a && l;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          return t ? (t = j(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function j(t, e) {
        return t instanceof et ? t : new et(t, e);
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
          t = $(t);
          var i = Math.max(
            Math.abs(this.lat - t.lat),
            Math.abs(this.lng - t.lng)
          );
          return i <= (e === void 0 ? 1e-9 : e);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(t) {
          return "LatLng(" + k(this.lat, t) + ", " + k(this.lng, t) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(t) {
          return kt.distance(this, $(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return kt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(t) {
          var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
          return j(
            [this.lat - e, this.lng - i],
            [this.lat + e, this.lng + i]
          );
        },
        clone: function() {
          return new N(this.lat, this.lng, this.alt);
        }
      };
      function $(t, e, i) {
        return t instanceof N ? t : nt(t) && typeof t[0] != "object" ? t.length === 3 ? new N(t[0], t[1], t[2]) : t.length === 2 ? new N(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new N(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new N(t, e, i);
      }
      var wt = {
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
          var e = this.wrapLng ? E(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? E(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
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
          var a = t.getSouthWest(), l = t.getNorthEast(), d = new N(a.lat - n, a.lng - s), f = new N(l.lat - n, l.lng - s);
          return new et(d, f);
        }
      }, kt = u({}, wt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, e) {
          var i = Math.PI / 180, n = t.lat * i, s = e.lat * i, a = Math.sin((e.lat - t.lat) * i / 2), l = Math.sin((e.lng - t.lng) * i / 2), d = a * a + Math.cos(n) * Math.cos(s) * l * l, f = 2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
          return this.R * f;
        }
      }), Xi = 6378137, ei = {
        R: Xi,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = Math.sin(n * e);
          return new A(
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
          var t = Xi * Math.PI;
          return new W([-t, -t], [t, t]);
        }()
      };
      function ii(t, e, i, n) {
        if (nt(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      ii.prototype = {
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
          return e = e || 1, new A(
            (t.x / e - this._b) / this._a,
            (t.y / e - this._d) / this._c
          );
        }
      };
      function se(t, e, i, n) {
        return new ii(t, e, i, n);
      }
      var ni = u({}, kt, {
        code: "EPSG:3857",
        projection: ei,
        transformation: function() {
          var t = 0.5 / (Math.PI * ei.R);
          return se(t, 0.5, -t, 0.5);
        }()
      }), Ho = u({}, ni, {
        code: "EPSG:900913"
      });
      function Qi(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function tn(t, e) {
        var i = "", n, s, a, l, d, f;
        for (n = 0, a = t.length; n < a; n++) {
          for (d = t[n], s = 0, l = d.length; s < l; s++)
            f = d[s], i += (s ? "L" : "M") + f.x + " " + f.y;
          i += e ? x.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var oi = document.documentElement.style, Se = "ActiveXObject" in window, Fo = Se && !document.addEventListener, en = "msLaunchUri" in navigator && !("documentMode" in document), si = mt("webkit"), nn = mt("android"), on = mt("android 2") || mt("android 3"), Wo = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Uo = nn && mt("Google") && Wo < 537 && !("AudioNode" in window), ri = !!window.opera, sn = !en && mt("chrome"), rn = mt("gecko") && !si && !ri && !Se, qo = !sn && mt("safari"), an = mt("phantom"), hn = "OTransition" in oi, Vo = navigator.platform.indexOf("Win") === 0, ln = Se && "transition" in oi, ai = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !on, un = "MozPerspective" in oi, jo = !window.L_DISABLE_3D && (ln || ai || un) && !hn && !an, re = typeof orientation < "u" || mt("mobile"), Go = re && si, Yo = re && ai, cn = !window.PointerEvent && window.MSPointerEvent, dn = !!(window.PointerEvent || cn), fn = "ontouchstart" in window || !!window.TouchEvent, Ko = !window.L_NO_TOUCH && (fn || dn), Jo = re && ri, Xo = re && rn, Qo = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ts = function() {
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
      }(), es = function() {
        return !!document.createElement("canvas").getContext;
      }(), hi = !!(document.createElementNS && Qi("svg").createSVGRect), is = !!hi && function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), ns = !hi && function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      }(), os = navigator.platform.indexOf("Mac") === 0, ss = navigator.platform.indexOf("Linux") === 0;
      function mt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var x = {
        ie: Se,
        ielt9: Fo,
        edge: en,
        webkit: si,
        android: nn,
        android23: on,
        androidStock: Uo,
        opera: ri,
        chrome: sn,
        gecko: rn,
        safari: qo,
        phantom: an,
        opera12: hn,
        win: Vo,
        ie3d: ln,
        webkit3d: ai,
        gecko3d: un,
        any3d: jo,
        mobile: re,
        mobileWebkit: Go,
        mobileWebkit3d: Yo,
        msPointer: cn,
        pointer: dn,
        touch: Ko,
        touchNative: fn,
        mobileOpera: Jo,
        mobileGecko: Xo,
        retina: Qo,
        passiveEvents: ts,
        canvas: es,
        svg: hi,
        vml: ns,
        inlineSvg: is,
        mac: os,
        linux: ss
      }, pn = x.msPointer ? "MSPointerDown" : "pointerdown", _n = x.msPointer ? "MSPointerMove" : "pointermove", mn = x.msPointer ? "MSPointerUp" : "pointerup", gn = x.msPointer ? "MSPointerCancel" : "pointercancel", li = {
        touchstart: pn,
        touchmove: _n,
        touchend: mn,
        touchcancel: gn
      }, vn = {
        touchstart: cs,
        touchmove: Me,
        touchend: Me,
        touchcancel: Me
      }, Ut = {}, yn = !1;
      function rs(t, e, i) {
        return e === "touchstart" && us(), vn[e] ? (i = vn[e].bind(this, i), t.addEventListener(li[e], i, !1), i) : (console.warn("wrong event specified:", e), y);
      }
      function as(t, e, i) {
        if (!li[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(li[e], i, !1);
      }
      function hs(t) {
        Ut[t.pointerId] = t;
      }
      function ls(t) {
        Ut[t.pointerId] && (Ut[t.pointerId] = t);
      }
      function xn(t) {
        delete Ut[t.pointerId];
      }
      function us() {
        yn || (document.addEventListener(pn, hs, !0), document.addEventListener(_n, ls, !0), document.addEventListener(mn, xn, !0), document.addEventListener(gn, xn, !0), yn = !0);
      }
      function Me(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in Ut)
            e.touches.push(Ut[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function cs(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && J(e), Me(t, e);
      }
      function ds(t) {
        var e = {}, i, n;
        for (n in t)
          i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
      }
      var fs = 200;
      function ps(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function s(a) {
          if (a.detail !== 1) {
            n = a.detail;
            return;
          }
          if (!(a.pointerType === "mouse" || a.sourceCapabilities && !a.sourceCapabilities.firesTouchEvents)) {
            var l = Tn(a);
            if (!(l.some(function(f) {
              return f instanceof HTMLLabelElement && f.attributes.for;
            }) && !l.some(function(f) {
              return f instanceof HTMLInputElement || f instanceof HTMLSelectElement;
            }))) {
              var d = Date.now();
              d - i <= fs ? (n++, n === 2 && e(ds(a))) : n = 1, i = d;
            }
          }
        }
        return t.addEventListener("click", s), {
          dblclick: e,
          simDblclick: s
        };
      }
      function _s(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var ui = Oe(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), ae = Oe(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), wn = ae === "webkitTransition" || ae === "OTransition" ? ae + "End" : "transitionend";
      function bn(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function he(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || i === "auto") && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return i === "auto" ? null : i;
      }
      function B(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n;
      }
      function U(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function Ee(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function qt(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function Vt(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function ci(t, e) {
        if (t.classList !== void 0)
          return t.classList.contains(e);
        var i = ze(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function M(t, e) {
        if (t.classList !== void 0)
          for (var i = R(e), n = 0, s = i.length; n < s; n++)
            t.classList.add(i[n]);
        else if (!ci(t, e)) {
          var a = ze(t);
          di(t, (a ? a + " " : "") + e);
        }
      }
      function q(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : di(t, H((" " + ze(t) + " ").replace(" " + e + " ", " ")));
      }
      function di(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function ze(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function ht(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && ms(t, e);
      }
      function ms(t, e) {
        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1)
            return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function Oe(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1;
      }
      function Ot(t, e, i) {
        var n = e || new A(0, 0);
        t.style[ui] = (x.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function G(t, e) {
        t._leaflet_pos = e, x.any3d ? Ot(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function $t(t) {
        return t._leaflet_pos || new A(0, 0);
      }
      var le, ue, fi;
      if ("onselectstart" in document)
        le = function() {
          S(window, "selectstart", J);
        }, ue = function() {
          F(window, "selectstart", J);
        };
      else {
        var ce = Oe(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        le = function() {
          if (ce) {
            var t = document.documentElement.style;
            fi = t[ce], t[ce] = "none";
          }
        }, ue = function() {
          ce && (document.documentElement.style[ce] = fi, fi = void 0);
        };
      }
      function pi() {
        S(window, "dragstart", J);
      }
      function _i() {
        F(window, "dragstart", J);
      }
      var $e, mi;
      function gi(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (Ie(), $e = t, mi = t.style.outlineStyle, t.style.outlineStyle = "none", S(window, "keydown", Ie));
      }
      function Ie() {
        $e && ($e.style.outlineStyle = mi, $e = void 0, mi = void 0, F(window, "keydown", Ie));
      }
      function Pn(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function vi(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }
      var gs = {
        __proto__: null,
        TRANSFORM: ui,
        TRANSITION: ae,
        TRANSITION_END: wn,
        get: bn,
        getStyle: he,
        create: B,
        remove: U,
        empty: Ee,
        toFront: qt,
        toBack: Vt,
        hasClass: ci,
        addClass: M,
        removeClass: q,
        setClass: di,
        getClass: ze,
        setOpacity: ht,
        testProp: Oe,
        setTransform: Ot,
        setPosition: G,
        getPosition: $t,
        get disableTextSelection() {
          return le;
        },
        get enableTextSelection() {
          return ue;
        },
        disableImageDrag: pi,
        enableImageDrag: _i,
        preventOutline: gi,
        restoreOutline: Ie,
        getSizedParentNode: Pn,
        getScale: vi
      };
      function S(t, e, i, n) {
        if (e && typeof e == "object")
          for (var s in e)
            xi(t, s, e[s], i);
        else {
          e = R(e);
          for (var a = 0, l = e.length; a < l; a++)
            xi(t, e[a], i, n);
        }
        return this;
      }
      var gt = "_leaflet_events";
      function F(t, e, i, n) {
        if (arguments.length === 1)
          Ln(t), delete t[gt];
        else if (e && typeof e == "object")
          for (var s in e)
            wi(t, s, e[s], i);
        else if (e = R(e), arguments.length === 2)
          Ln(t, function(d) {
            return C(e, d) !== -1;
          });
        else
          for (var a = 0, l = e.length; a < l; a++)
            wi(t, e[a], i, n);
        return this;
      }
      function Ln(t, e) {
        for (var i in t[gt]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && wi(t, n, null, null, i);
        }
      }
      var yi = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function xi(t, e, i, n) {
        var s = e + g(i) + (n ? "_" + g(n) : "");
        if (t[gt] && t[gt][s])
          return this;
        var a = function(d) {
          return i.call(n || t, d || window.event);
        }, l = a;
        !x.touchNative && x.pointer && e.indexOf("touch") === 0 ? a = rs(t, e, a) : x.touch && e === "dblclick" ? a = ps(t, a) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(yi[e] || e, a, x.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (a = function(d) {
          d = d || window.event, Pi(t, d) && l(d);
        }, t.addEventListener(yi[e], a, !1)) : t.addEventListener(e, l, !1) : t.attachEvent("on" + e, a), t[gt] = t[gt] || {}, t[gt][s] = a;
      }
      function wi(t, e, i, n, s) {
        s = s || e + g(i) + (n ? "_" + g(n) : "");
        var a = t[gt] && t[gt][s];
        if (!a)
          return this;
        !x.touchNative && x.pointer && e.indexOf("touch") === 0 ? as(t, e, a) : x.touch && e === "dblclick" ? _s(t, a) : "removeEventListener" in t ? t.removeEventListener(yi[e] || e, a, !1) : t.detachEvent("on" + e, a), t[gt][s] = null;
      }
      function It(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function bi(t) {
        return xi(t, "wheel", It), this;
      }
      function de(t) {
        return S(t, "mousedown touchstart dblclick contextmenu", It), t._leaflet_disable_click = !0, this;
      }
      function J(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function Zt(t) {
        return J(t), It(t), this;
      }
      function Tn(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var e = [], i = t.target; i; )
          e.push(i), i = i.parentNode;
        return e;
      }
      function kn(t, e) {
        if (!e)
          return new A(t.clientX, t.clientY);
        var i = vi(e), n = i.boundingClientRect;
        return new A(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - n.left) / i.x - e.clientLeft,
          (t.clientY - n.top) / i.y - e.clientTop
        );
      }
      var vs = x.linux && x.chrome ? window.devicePixelRatio : x.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Cn(t) {
        return x.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / vs : (
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
      function Pi(t, e) {
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
      var ys = {
        __proto__: null,
        on: S,
        off: F,
        stopPropagation: It,
        disableScrollPropagation: bi,
        disableClickPropagation: de,
        preventDefault: J,
        stop: Zt,
        getPropagationPath: Tn,
        getMousePosition: kn,
        getWheelDelta: Cn,
        isExternalTarget: Pi,
        addListener: S,
        removeListener: F
      }, An = oe.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = $t(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = Q(this._animate, this), this._step();
        },
        _step: function(t) {
          var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
          e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), G(this._el, i), this.fire("step");
        },
        _complete: function() {
          at(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }), I = oe.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: ni,
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
          e = O(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView($(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ae && x.any3d && !x.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, wn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, e, i) {
          if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter($(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
            i.animate !== void 0 && (i.zoom = u({ animate: i.animate }, i.zoom), i.pan = u({ animate: i.animate, duration: i.duration }, i.pan));
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
          return t = t || (x.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, e) {
          return t = t || (x.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, e, i) {
          var n = this.getZoomScale(e), s = this.getSize().divideBy(2), a = t instanceof A ? t : this.latLngToContainerPoint(t), l = a.subtract(s).multiplyBy(1 - 1 / n), d = this.containerPointToLatLng(s.add(l));
          return this.setView(d, e, { zoom: i });
        },
        _getBoundsCenterZoom: function(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : j(t);
          var i = T(e.paddingTopLeft || e.padding || [0, 0]), n = T(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, i.add(n));
          if (s = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, s) : s, s === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: s
            };
          var a = n.subtract(i).divideBy(2), l = this.project(t.getSouthWest(), s), d = this.project(t.getNorthEast(), s), f = this.unproject(l.add(d).divideBy(2).add(a), s);
          return {
            center: f,
            zoom: s
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(t, e) {
          if (t = j(t), !t.isValid())
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
          if (t = T(t).round(), e = e || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new An(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            M(this._mapPane, "leaflet-pan-anim");
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
          if (i = i || {}, i.animate === !1 || !x.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()), s = this.project(t), a = this.getSize(), l = this._zoom;
          t = $(t), e = e === void 0 ? l : e;
          var d = Math.max(a.x, a.y), f = d * this.getZoomScale(l, e), m = s.distanceTo(n) || 1, v = 1.42, w = v * v;
          function z(Y) {
            var je = Y ? -1 : 1, ar = Y ? f : d, hr = f * f - d * d + je * w * w * m * m, lr = 2 * ar * w * m, $i = hr / lr, ho = Math.sqrt($i * $i + 1) - $i, ur = ho < 1e-9 ? -18 : Math.log(ho);
            return ur;
          }
          function X(Y) {
            return (Math.exp(Y) - Math.exp(-Y)) / 2;
          }
          function K(Y) {
            return (Math.exp(Y) + Math.exp(-Y)) / 2;
          }
          function ut(Y) {
            return X(Y) / K(Y);
          }
          var it = z(0);
          function Xt(Y) {
            return d * (K(it) / K(it + v * Y));
          }
          function nr(Y) {
            return d * (K(it) * ut(it + v * Y) - X(it)) / w;
          }
          function or(Y) {
            return 1 - Math.pow(1 - Y, 1.5);
          }
          var sr = Date.now(), ro = (z(1) - it) / v, rr = i.duration ? 1e3 * i.duration : 1e3 * ro * 0.8;
          function ao() {
            var Y = (Date.now() - sr) / rr, je = or(Y) * ro;
            Y <= 1 ? (this._flyToFrame = Q(ao, this), this._move(
              this.unproject(n.add(s.subtract(n).multiplyBy(nr(je) / m)), l),
              this.getScaleZoom(d / Xt(je), l),
              { flyTo: !0 }
            )) : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), ao.call(this), this;
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
          return t = j(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
          var i = this.getCenter(), n = this._limitCenter(i, this._zoom, j(t));
          return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(t, e) {
          e = e || {};
          var i = T(e.paddingTopLeft || e.padding || [0, 0]), n = T(e.paddingBottomRight || e.padding || [0, 0]), s = this.project(this.getCenter()), a = this.project(t), l = this.getPixelBounds(), d = tt([l.min.add(i), l.max.subtract(n)]), f = d.getSize();
          if (!d.contains(a)) {
            this._enforcingBounds = !0;
            var m = a.subtract(d.getCenter()), v = d.extend(a).getSize().subtract(f);
            s.x += m.x < 0 ? -v.x : v.x, s.y += m.y < 0 ? -v.y : v.y, this.panTo(this.unproject(s), e), this._enforcingBounds = !1;
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
          t = u({
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
          if (t = this._locateOptions = u({
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
            var e = t.coords.latitude, i = t.coords.longitude, n = new N(e, i), s = n.toBounds(t.coords.accuracy * 2), a = this._locateOptions;
            if (a.setView) {
              var l = this.getBoundsZoom(s);
              this.setView(n, a.maxZoom ? Math.min(l, a.maxZoom) : l);
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), U(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (at(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
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
          var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = B("div", i, e || this._mapPane);
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
          return new et(e, i);
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
          t = j(t), i = T(i || [0, 0]);
          var n = this.getZoom() || 0, s = this.getMinZoom(), a = this.getMaxZoom(), l = t.getNorthWest(), d = t.getSouthEast(), f = this.getSize().subtract(i), m = tt(this.project(d, n), this.project(l, n)).getSize(), v = x.any3d ? this.options.zoomSnap : 1, w = f.x / m.x, z = f.y / m.y, X = e ? Math.max(w, z) : Math.min(w, z);
          return n = this.getScaleZoom(X, n), v && (n = Math.round(n / (v / 100)) * (v / 100), n = e ? Math.ceil(n / v) * v : Math.floor(n / v) * v), Math.max(s, Math.min(a, n));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new A(
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
          return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint($(t), e);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(T(t), e);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var e = T(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(t) {
          var e = this.project($(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(t) {
          return this.options.crs.wrapLatLng($(t));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(t) {
          return this.options.crs.wrapLatLngBounds(j(t));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(t, e) {
          return this.options.crs.distance($(t), $(e));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(t) {
          return T(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return T(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var e = this.containerPointToLayerPoint(T(t));
          return this.layerPointToLatLng(e);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint($(t)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(t) {
          return kn(t, this._container);
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
          var e = this._container = bn(t);
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          S(e, "scroll", this._onScroll, this), this._containerId = g(e);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && x.any3d, M(t, "leaflet-container" + (x.touch ? " leaflet-touch" : "") + (x.retina ? " leaflet-retina" : "") + (x.ielt9 ? " leaflet-oldie" : "") + (x.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = he(t, "position");
          e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), G(this._mapPane, new A(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"), M(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, e, i) {
          G(this._mapPane, new A(0, 0));
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
          return at(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t) {
          G(this._mapPane, this._getMapPanePos().subtract(t));
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
          var e = t ? F : S;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), x.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          at(this._resizeRequest), this._resizeRequest = Q(
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
          for (var i = [], n, s = e === "mouseout" || e === "mouseover", a = t.target || t.srcElement, l = !1; a; ) {
            if (n = this._targets[g(a)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
              l = !0;
              break;
            }
            if (n && n.listens(e, !0) && (s && !Pi(a, t) || (i.push(n), s)) || a === this._container)
              break;
            a = a.parentNode;
          }
          return !i.length && !l && !s && this.listens(e, !0) && (i = [this]), i;
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
            i === "mousedown" && gi(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
          if (t.type === "click") {
            var n = u({}, t);
            n.type = "preclick", this._fireDOMEvent(n, n.type, i);
          }
          var s = this._findEventTargets(t, e);
          if (i) {
            for (var a = [], l = 0; l < i.length; l++)
              i[l].listens(e, !0) && a.push(i[l]);
            s = a.concat(s);
          }
          if (s.length) {
            e === "contextmenu" && J(t);
            var d = s[0], f = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var m = d.getLatLng && (!d._radius || d._radius <= 10);
              f.containerPoint = m ? this.latLngToContainerPoint(d.getLatLng()) : this.mouseEventToContainerPoint(t), f.layerPoint = this.containerPointToLayerPoint(f.containerPoint), f.latlng = m ? d.getLatLng() : this.layerPointToLatLng(f.layerPoint);
            }
            for (l = 0; l < s.length; l++)
              if (s[l].fire(e, f, !0), f.originalEvent._stopped || s[l].options.bubblingMouseEvents === !1 && C(this._mouseEvents, e) !== -1)
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
          return $t(this._mapPane) || new A(0, 0);
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
          return tt([
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
          var n = this.project(t, e), s = this.getSize().divideBy(2), a = new W(n.subtract(s), n.add(s)), l = this._getBoundsOffset(a, i, e);
          return Math.abs(l.x) <= 1 && Math.abs(l.y) <= 1 ? t : this.unproject(n.add(l), e);
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
          var n = tt(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ), s = n.min.subtract(t.min), a = n.max.subtract(t.max), l = this._rebound(s.x, -a.x), d = this._rebound(s.y, -a.y);
          return new A(l, d);
        },
        _rebound: function(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function(t) {
          var e = this.getMinZoom(), i = this.getMaxZoom(), n = x.any3d ? this.options.zoomSnap : 1;
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
          var t = this._proxy = B("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
            var i = ui, n = this._proxy.style[i];
            Ot(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          U(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), e = this.getZoom();
          Ot(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
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
          return i.animate !== !0 && !this.getSize().contains(s) ? !1 : (Q(function() {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this), !0);
        },
        _animateZoom: function(t, e, i, n) {
          this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: n
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(p(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && q(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function xs(t, e) {
        return new I(t, e);
      }
      var ft = xt.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          O(this, t);
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
          return M(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (U(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), fe = function(t) {
        return new ft(t);
      };
      I.include({
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
          var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = B("div", e + "control-container", this._container);
          function n(s, a) {
            var l = e + s + " " + e + a;
            t[s + a] = B("div", l, i);
          }
          n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners)
            U(this._controlCorners[t]);
          U(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Sn = ft.extend({
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
          O(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
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
          return ft.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
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
          M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : q(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return q(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", e = this._container = B("div", t), i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), de(e), bi(e);
          var n = this._section = B("section", t + "-list");
          i && (this._map.on("click", this.collapse, this), S(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var s = this._layersLink = B("a", t + "-toggle", e);
          s.href = "#", s.title = "Layers", s.setAttribute("role", "button"), S(s, {
            keydown: function(a) {
              a.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(a) {
              J(a), this._expandSafely();
            }
          }, this), i || this.expand(), this._baseLayersList = B("div", t + "-base", n), this._separator = B("div", t + "-separator", n), this._overlaysList = B("div", t + "-overlays", n), e.appendChild(n);
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
          }), this.options.sortLayers && this._layers.sort(p(function(n, s) {
            return this.options.sortFunction(n.layer, s.layer, n.name, s.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Ee(this._baseLayersList), Ee(this._overlaysList), this._layerControlInputs = [];
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
          t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + g(this), i), this._layerControlInputs.push(n), n.layerId = g(t.layer), S(n, "click", this._onInputClick, this);
          var s = document.createElement("span");
          s.innerHTML = " " + t.name;
          var a = document.createElement("span");
          e.appendChild(a), a.appendChild(n), a.appendChild(s);
          var l = t.overlay ? this._overlaysList : this._baseLayersList;
          return l.appendChild(e), this._checkDisabledLayers(), e;
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
          this._preventClick = !0, S(t, "click", J), this.expand();
          var e = this;
          setTimeout(function() {
            F(t, "click", J), e._preventClick = !1;
          });
        }
      }), ws = function(t, e, i) {
        return new Sn(t, e, i);
      }, Li = ft.extend({
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
          var e = "leaflet-control-zoom", i = B("div", e + " leaflet-bar"), n = this.options;
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
          var a = B("a", i, n);
          return a.innerHTML = t, a.href = "#", a.title = e, a.setAttribute("role", "button"), a.setAttribute("aria-label", e), de(a), S(a, "click", Zt), S(a, "click", s, this), S(a, "click", this._refocusOnMap, this), a;
        },
        _updateDisabled: function() {
          var t = this._map, e = "leaflet-disabled";
          q(this._zoomInButton, e), q(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (M(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (M(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      I.mergeOptions({
        zoomControl: !0
      }), I.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Li(), this.addControl(this.zoomControl));
      });
      var bs = function(t) {
        return new Li(t);
      }, Mn = ft.extend({
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
          var e = "leaflet-control-scale", i = B("div", e), n = this.options;
          return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
        },
        onRemove: function(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t, e, i) {
          t.metric && (this._mScale = B("div", e, i)), t.imperial && (this._iScale = B("div", e, i));
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
      }), Ps = function(t) {
        return new Mn(t);
      }, Ls = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Ti = ft.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (x.inlineSvg ? Ls + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          O(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = B("div", "leaflet-control-attribution"), de(this._container);
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
      I.mergeOptions({
        attributionControl: !0
      }), I.addInitHook(function() {
        this.options.attributionControl && new Ti().addTo(this);
      });
      var Ts = function(t) {
        return new Ti(t);
      };
      ft.Layers = Sn, ft.Zoom = Li, ft.Scale = Mn, ft.Attribution = Ti, fe.layers = ws, fe.zoom = bs, fe.scale = Ps, fe.attribution = Ts;
      var vt = xt.extend({
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
      vt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var ks = { Events: st }, En = x.touch ? "touchstart mousedown" : "mousedown", Ct = oe.extend({
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
          O(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (S(this._dragStartTarget, En, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Ct._dragging === this && this.finishDrag(!0), F(this._dragStartTarget, En, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !ci(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              Ct._dragging === this && this.finishDrag();
              return;
            }
            if (!(Ct._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (Ct._dragging = this, this._preventOutline && gi(this._element), pi(), le(), !this._moving)) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t, i = Pn(this._element);
              this._startPoint = new A(e.clientX, e.clientY), this._startPos = $t(this._element), this._parentScale = vi(i);
              var n = t.type === "mousedown";
              S(document, n ? "mousemove" : "touchmove", this._onMove, this), S(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new A(e.clientX, e.clientY)._subtract(this._startPoint);
            !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, J(t), this._moved || (this.fire("dragstart"), this._moved = !0, M(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t), G(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(t) {
          q(document.body, "leaflet-dragging"), this._lastTarget && (q(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), F(document, "mousemove touchmove", this._onMove, this), F(document, "mouseup touchend touchcancel", this._onUp, this), _i(), ue();
          var e = this._moved && this._moving;
          this._moving = !1, Ct._dragging = !1, e && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function zn(t, e, i) {
        var n, s = [1, 4, 2, 8], a, l, d, f, m, v, w, z;
        for (a = 0, v = t.length; a < v; a++)
          t[a]._code = Bt(t[a], e);
        for (d = 0; d < 4; d++) {
          for (w = s[d], n = [], a = 0, v = t.length, l = v - 1; a < v; l = a++)
            f = t[a], m = t[l], f._code & w ? m._code & w || (z = Ze(m, f, w, e, i), z._code = Bt(z, e), n.push(z)) : (m._code & w && (z = Ze(m, f, w, e, i), z._code = Bt(z, e), n.push(z)), n.push(f));
          t = n;
        }
        return t;
      }
      function On(t, e) {
        var i, n, s, a, l, d, f, m, v;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        lt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var w = $([0, 0]), z = j(t), X = z.getNorthWest().distanceTo(z.getSouthWest()) * z.getNorthEast().distanceTo(z.getNorthWest());
        X < 1700 && (w = ki(t));
        var K = t.length, ut = [];
        for (i = 0; i < K; i++) {
          var it = $(t[i]);
          ut.push(e.project($([it.lat - w.lat, it.lng - w.lng])));
        }
        for (d = f = m = 0, i = 0, n = K - 1; i < K; n = i++)
          s = ut[i], a = ut[n], l = s.y * a.x - a.y * s.x, f += (s.x + a.x) * l, m += (s.y + a.y) * l, d += l * 3;
        d === 0 ? v = ut[0] : v = [f / d, m / d];
        var Xt = e.unproject(T(v));
        return $([Xt.lat + w.lat, Xt.lng + w.lng]);
      }
      function ki(t) {
        for (var e = 0, i = 0, n = 0, s = 0; s < t.length; s++) {
          var a = $(t[s]);
          e += a.lat, i += a.lng, n++;
        }
        return $([e / n, i / n]);
      }
      var Cs = {
        __proto__: null,
        clipPolygon: zn,
        polygonCenter: On,
        centroid: ki
      };
      function $n(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = Ms(t, i), t = Ss(t, i), t;
      }
      function In(t, e, i) {
        return Math.sqrt(pe(t, e, i, !0));
      }
      function As(t, e, i) {
        return pe(t, e, i);
      }
      function Ss(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, s = new n(i);
        s[0] = s[i - 1] = 1, Ci(t, s, e, 0, i - 1);
        var a, l = [];
        for (a = 0; a < i; a++)
          s[a] && l.push(t[a]);
        return l;
      }
      function Ci(t, e, i, n, s) {
        var a = 0, l, d, f;
        for (d = n + 1; d <= s - 1; d++)
          f = pe(t[d], t[n], t[s], !0), f > a && (l = d, a = f);
        a > i && (e[l] = 1, Ci(t, e, i, n, l), Ci(t, e, i, l, s));
      }
      function Ms(t, e) {
        for (var i = [t[0]], n = 1, s = 0, a = t.length; n < a; n++)
          Es(t[n], t[s]) > e && (i.push(t[n]), s = n);
        return s < a - 1 && i.push(t[a - 1]), i;
      }
      var Zn;
      function Bn(t, e, i, n, s) {
        var a = n ? Zn : Bt(t, i), l = Bt(e, i), d, f, m;
        for (Zn = l; ; ) {
          if (!(a | l))
            return [t, e];
          if (a & l)
            return !1;
          d = a || l, f = Ze(t, e, d, i, s), m = Bt(f, i), d === a ? (t = f, a = m) : (e = f, l = m);
        }
      }
      function Ze(t, e, i, n, s) {
        var a = e.x - t.x, l = e.y - t.y, d = n.min, f = n.max, m, v;
        return i & 8 ? (m = t.x + a * (f.y - t.y) / l, v = f.y) : i & 4 ? (m = t.x + a * (d.y - t.y) / l, v = d.y) : i & 2 ? (m = f.x, v = t.y + l * (f.x - t.x) / a) : i & 1 && (m = d.x, v = t.y + l * (d.x - t.x) / a), new A(m, v, s);
      }
      function Bt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function Es(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function pe(t, e, i, n) {
        var s = e.x, a = e.y, l = i.x - s, d = i.y - a, f = l * l + d * d, m;
        return f > 0 && (m = ((t.x - s) * l + (t.y - a) * d) / f, m > 1 ? (s = i.x, a = i.y) : m > 0 && (s += l * m, a += d * m)), l = t.x - s, d = t.y - a, n ? l * l + d * d : new A(s, a);
      }
      function lt(t) {
        return !nt(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function Dn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), lt(t);
      }
      function Rn(t, e) {
        var i, n, s, a, l, d, f, m;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        lt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var v = $([0, 0]), w = j(t), z = w.getNorthWest().distanceTo(w.getSouthWest()) * w.getNorthEast().distanceTo(w.getNorthWest());
        z < 1700 && (v = ki(t));
        var X = t.length, K = [];
        for (i = 0; i < X; i++) {
          var ut = $(t[i]);
          K.push(e.project($([ut.lat - v.lat, ut.lng - v.lng])));
        }
        for (i = 0, n = 0; i < X - 1; i++)
          n += K[i].distanceTo(K[i + 1]) / 2;
        if (n === 0)
          m = K[0];
        else
          for (i = 0, a = 0; i < X - 1; i++)
            if (l = K[i], d = K[i + 1], s = l.distanceTo(d), a += s, a > n) {
              f = (a - n) / s, m = [
                d.x - f * (d.x - l.x),
                d.y - f * (d.y - l.y)
              ];
              break;
            }
        var it = e.unproject(T(m));
        return $([it.lat + v.lat, it.lng + v.lng]);
      }
      var zs = {
        __proto__: null,
        simplify: $n,
        pointToSegmentDistance: In,
        closestPointOnSegment: As,
        clipSegment: Bn,
        _getEdgeIntersection: Ze,
        _getBitCode: Bt,
        _sqClosestPointOnSegment: pe,
        isFlat: lt,
        _flat: Dn,
        polylineCenter: Rn
      }, Ai = {
        project: function(t) {
          return new A(t.lng, t.lat);
        },
        unproject: function(t) {
          return new N(t.y, t.x);
        },
        bounds: new W([-180, -90], [180, 90])
      }, Si = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new W([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var e = Math.PI / 180, i = this.R, n = t.lat * e, s = this.R_MINOR / i, a = Math.sqrt(1 - s * s), l = a * Math.sin(n), d = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - l) / (1 + l), a / 2);
          return n = -i * Math.log(Math.max(d, 1e-10)), new A(t.lng * e * i, n);
        },
        unproject: function(t) {
          for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, s = Math.sqrt(1 - n * n), a = Math.exp(-t.y / i), l = Math.PI / 2 - 2 * Math.atan(a), d = 0, f = 0.1, m; d < 15 && Math.abs(f) > 1e-7; d++)
            m = s * Math.sin(l), m = Math.pow((1 - m) / (1 + m), s / 2), f = Math.PI / 2 - 2 * Math.atan(a * m) - l, l += f;
          return new N(l * e, t.x * e / i);
        }
      }, Os = {
        __proto__: null,
        LonLat: Ai,
        Mercator: Si,
        SphericalMercator: ei
      }, $s = u({}, kt, {
        code: "EPSG:3395",
        projection: Si,
        transformation: function() {
          var t = 0.5 / (Math.PI * Si.R);
          return se(t, 0.5, -t, 0.5);
        }()
      }), Nn = u({}, kt, {
        code: "EPSG:4326",
        projection: Ai,
        transformation: se(1 / 180, 1, -1 / 180, 0.5)
      }), Is = u({}, wt, {
        projection: Ai,
        transformation: se(1, 0, -1, 0),
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
      wt.Earth = kt, wt.EPSG3395 = $s, wt.EPSG3857 = ni, wt.EPSG900913 = Ho, wt.EPSG4326 = Nn, wt.Simple = Is;
      var pt = oe.extend({
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
      I.include({
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
          t = t ? nt(t) ? t : [t] : [];
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
      var jt = pt.extend({
        initialize: function(t, e) {
          O(this, e), this._layers = {};
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
      }), Zs = function(t, e) {
        return new jt(t, e);
      }, bt = jt.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), jt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), jt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
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
          var t = new et();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        }
      }), Bs = function(t, e) {
        return new bt(t, e);
      }, Gt = xt.extend({
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
          O(this, t);
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
          var s = T(n), a = T(e === "shadow" && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + "px", t.style.marginTop = -a.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
        },
        _createImg: function(t, e) {
          return e = e || document.createElement("img"), e.src = t, e;
        },
        _getIconUrl: function(t) {
          return x.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function Ds(t) {
        return new Gt(t);
      }
      var _e = Gt.extend({
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
          return typeof _e.imagePath != "string" && (_e.imagePath = this._detectIconPath()), (this.options.imagePath || _e.imagePath) + Gt.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var e = function(i, n, s) {
            var a = n.exec(i);
            return a && a[s];
          };
          return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = B("div", "leaflet-default-icon-path", document.body), e = he(t, "background-image") || he(t, "backgroundImage");
          if (document.body.removeChild(t), e = this._stripUrl(e), e)
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        }
      }), Hn = vt.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new Ct(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), M(t, "leaflet-marker-draggable");
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
          var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, s = this._marker.options.autoPanPadding, a = $t(e._icon), l = i.getPixelBounds(), d = i.getPixelOrigin(), f = tt(
            l.min._subtract(d).add(s),
            l.max._subtract(d).subtract(s)
          );
          if (!f.contains(a)) {
            var m = T(
              (Math.max(f.max.x, a.x) - f.max.x) / (l.max.x - f.max.x) - (Math.min(f.min.x, a.x) - f.min.x) / (l.min.x - f.min.x),
              (Math.max(f.max.y, a.y) - f.max.y) / (l.max.y - f.max.y) - (Math.min(f.min.y, a.y) - f.min.y) / (l.min.y - f.min.y)
            ).multiplyBy(n);
            i.panBy(m, { animate: !1 }), this._draggable._newPos._add(m), this._draggable._startPos._add(m), G(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = Q(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (at(this._panRequest), this._panRequest = Q(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var e = this._marker, i = e._shadow, n = $t(e._icon), s = e._map.layerPointToLatLng(n);
          i && G(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          at(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), Be = pt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new _e(),
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
          O(this, e), this._latlng = $(t);
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
          return this._latlng = $(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
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
          i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), M(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && S(i, "focus", this._panOnFocus, this);
          var s = t.icon.createShadow(this._shadow), a = !1;
          s !== this._shadow && (this._removeShadow(), a = !0), s && (M(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && a && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && F(this._icon, "focus", this._panOnFocus, this), U(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && U(this._shadow), this._shadow = null;
        },
        _setPos: function(t) {
          this._icon && G(this._icon, t), this._shadow && G(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(e);
        },
        _initInteraction: function() {
          if (this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Hn)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Hn(this), t && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var t = this.options.opacity;
          this._icon && ht(this._icon, t), this._shadow && ht(this._shadow, t);
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
            var e = this.options.icon.options, i = e.iconSize ? T(e.iconSize) : T(0, 0), n = e.iconAnchor ? T(e.iconAnchor) : T(0, 0);
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
        return new Be(t, e);
      }
      var At = pt.extend({
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
          return O(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
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
      }), De = At.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, e) {
          O(this, e), this._latlng = $(t), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = $(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
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
          return At.prototype.setStyle.call(this, t), this.setRadius(e), this;
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
      function Ns(t, e) {
        return new De(t, e);
      }
      var Mi = De.extend({
        initialize: function(t, e, i) {
          if (typeof e == "number" && (e = u({}, i, { radius: e })), O(this, e), this._latlng = $(t), isNaN(this.options.radius))
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
          return new et(
            this._map.layerPointToLatLng(this._point.subtract(t)),
            this._map.layerPointToLatLng(this._point.add(t))
          );
        },
        setStyle: At.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
          if (n.distance === kt.distance) {
            var s = Math.PI / 180, a = this._mRadius / kt.R / s, l = i.project([e + a, t]), d = i.project([e - a, t]), f = l.add(d).divideBy(2), m = i.unproject(f).lat, v = Math.acos((Math.cos(a * s) - Math.sin(e * s) * Math.sin(m * s)) / (Math.cos(e * s) * Math.cos(m * s))) / s;
            (isNaN(v) || v === 0) && (v = a / Math.cos(Math.PI / 180 * e)), this._point = f.subtract(i.getPixelOrigin()), this._radius = isNaN(v) ? 0 : f.x - i.project([m, t - v]).x, this._radiusY = f.y - l.y;
          } else {
            var w = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(w).x;
          }
          this._updateBounds();
        }
      });
      function Hs(t, e, i) {
        return new Mi(t, e, i);
      }
      var Pt = At.extend({
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
          O(this, e), this._setLatLngs(t);
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
          for (var e = 1 / 0, i = null, n = pe, s, a, l = 0, d = this._parts.length; l < d; l++)
            for (var f = this._parts[l], m = 1, v = f.length; m < v; m++) {
              s = f[m - 1], a = f[m];
              var w = n(t, s, a, !0);
              w < e && (e = w, i = n(t, s, a));
            }
          return i && (i.distance = Math.sqrt(e)), i;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Rn(this._defaultShape(), this._map.options.crs);
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
          return e = e || this._defaultShape(), t = $(t), e.push(t), this._bounds.extend(t), this.redraw();
        },
        _setLatLngs: function(t) {
          this._bounds = new et(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function() {
          return lt(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(t) {
          for (var e = [], i = lt(t), n = 0, s = t.length; n < s; n++)
            i ? (e[n] = $(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
          return e;
        },
        _project: function() {
          var t = new W();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), e = new A(t, t);
          this._rawPxBounds && (this._pxBounds = new W([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, e, i) {
          var n = t[0] instanceof N, s = t.length, a, l;
          if (n) {
            for (l = [], a = 0; a < s; a++)
              l[a] = this._map.latLngToLayerPoint(t[a]), i.extend(l[a]);
            e.push(l);
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
            var e = this._parts, i, n, s, a, l, d, f;
            for (i = 0, s = 0, a = this._rings.length; i < a; i++)
              for (f = this._rings[i], n = 0, l = f.length; n < l - 1; n++)
                d = Bn(f[n], f[n + 1], t, n, !0), d && (e[s] = e[s] || [], e[s].push(d[0]), (d[1] !== f[n + 1] || n === l - 2) && (e[s].push(d[1]), s++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
            t[i] = $n(t[i], e);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, e) {
          var i, n, s, a, l, d, f = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (i = 0, a = this._parts.length; i < a; i++)
            for (d = this._parts[i], n = 0, l = d.length, s = l - 1; n < l; s = n++)
              if (!(!e && n === 0) && In(t, d[s], d[n]) <= f)
                return !0;
          return !1;
        }
      });
      function Fs(t, e) {
        return new Pt(t, e);
      }
      Pt._flat = Dn;
      var Yt = Pt.extend({
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
          return On(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var e = Pt.prototype._convertLatLngs.call(this, t), i = e.length;
          return i >= 2 && e[0] instanceof N && e[0].equals(e[i - 1]) && e.pop(), e;
        },
        _setLatLngs: function(t) {
          Pt.prototype._setLatLngs.call(this, t), lt(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return lt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, e = this.options.weight, i = new A(e, e);
          if (t = new W(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var n = 0, s = this._rings.length, a; n < s; n++)
              a = zn(this._rings[n], t, !0), a.length && this._parts.push(a);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var e = !1, i, n, s, a, l, d, f, m;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (a = 0, f = this._parts.length; a < f; a++)
            for (i = this._parts[a], l = 0, m = i.length, d = m - 1; l < m; d = l++)
              n = i[l], s = i[d], n.y > t.y != s.y > t.y && t.x < (s.x - n.x) * (t.y - n.y) / (s.y - n.y) + n.x && (e = !e);
          return e || Pt.prototype._containsPoint.call(this, t, !0);
        }
      });
      function Ws(t, e) {
        return new Yt(t, e);
      }
      var Lt = bt.extend({
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
          O(this, e), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var e = nt(t) ? t : t.features, i, n, s;
          if (e) {
            for (i = 0, n = e.length; i < n; i++)
              s = e[i], (s.geometries || s.geometry || s.features || s.coordinates) && this.addData(s);
            return this;
          }
          var a = this.options;
          if (a.filter && !a.filter(t))
            return this;
          var l = Re(t, a);
          return l ? (l.feature = Fe(t), l.defaultOptions = l.options, this.resetStyle(l), a.onEachFeature && a.onEachFeature(t, l), this.addLayer(l)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = u({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
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
      function Re(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, s = [], a = e && e.pointToLayer, l = e && e.coordsToLatLng || Ei, d, f, m, v;
        if (!n && !i)
          return null;
        switch (i.type) {
          case "Point":
            return d = l(n), Fn(a, t, d, e);
          case "MultiPoint":
            for (m = 0, v = n.length; m < v; m++)
              d = l(n[m]), s.push(Fn(a, t, d, e));
            return new bt(s);
          case "LineString":
          case "MultiLineString":
            return f = Ne(n, i.type === "LineString" ? 0 : 1, l), new Pt(f, e);
          case "Polygon":
          case "MultiPolygon":
            return f = Ne(n, i.type === "Polygon" ? 1 : 2, l), new Yt(f, e);
          case "GeometryCollection":
            for (m = 0, v = i.geometries.length; m < v; m++) {
              var w = Re({
                geometry: i.geometries[m],
                type: "Feature",
                properties: t.properties
              }, e);
              w && s.push(w);
            }
            return new bt(s);
          case "FeatureCollection":
            for (m = 0, v = i.features.length; m < v; m++) {
              var z = Re(i.features[m], e);
              z && s.push(z);
            }
            return new bt(s);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function Fn(t, e, i, n) {
        return t ? t(e, i) : new Be(i, n && n.markersInheritOptions && n);
      }
      function Ei(t) {
        return new N(t[1], t[0], t[2]);
      }
      function Ne(t, e, i) {
        for (var n = [], s = 0, a = t.length, l; s < a; s++)
          l = e ? Ne(t[s], e - 1, i) : (i || Ei)(t[s]), n.push(l);
        return n;
      }
      function zi(t, e) {
        return t = $(t), t.alt !== void 0 ? [k(t.lng, e), k(t.lat, e), k(t.alt, e)] : [k(t.lng, e), k(t.lat, e)];
      }
      function He(t, e, i, n) {
        for (var s = [], a = 0, l = t.length; a < l; a++)
          s.push(e ? He(t[a], lt(t[a]) ? 0 : e - 1, i, n) : zi(t[a], n));
        return !e && i && s.length > 0 && s.push(s[0].slice()), s;
      }
      function Kt(t, e) {
        return t.feature ? u({}, t.feature, { geometry: e }) : Fe(e);
      }
      function Fe(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var Oi = {
        toGeoJSON: function(t) {
          return Kt(this, {
            type: "Point",
            coordinates: zi(this.getLatLng(), t)
          });
        }
      };
      Be.include(Oi), Mi.include(Oi), De.include(Oi), Pt.include({
        toGeoJSON: function(t) {
          var e = !lt(this._latlngs), i = He(this._latlngs, e ? 1 : 0, !1, t);
          return Kt(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i
          });
        }
      }), Yt.include({
        toGeoJSON: function(t) {
          var e = !lt(this._latlngs), i = e && !lt(this._latlngs[0]), n = He(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return e || (n = [n]), Kt(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          });
        }
      }), jt.include({
        toMultiPoint: function(t) {
          var e = [];
          return this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }), Kt(this, {
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
                var l = Fe(a);
                l.type === "FeatureCollection" ? n.push.apply(n, l.features) : n.push(l);
              }
            }
          }), i ? Kt(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
      function Wn(t, e) {
        return new Lt(t, e);
      }
      var Us = Wn, We = pt.extend({
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
          this._url = t, this._bounds = j(e), O(this, i);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
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
          return this._map && qt(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Vt(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(t) {
          return this._bounds = j(t), this._map && this._reset(), this;
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
          var t = this._url.tagName === "IMG", e = this._image = t ? this._url : B("img");
          if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = y, e.onmousemove = y, e.onload = p(this.fire, this, "load"), e.onerror = p(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = e.src;
            return;
          }
          e.src = this._url, e.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          Ot(this._image, i, e);
        },
        _reset: function() {
          var t = this._image, e = new W(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), i = e.getSize();
          G(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
        },
        _updateOpacity: function() {
          ht(this._image, this.options.opacity);
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
      }), qs = function(t, e, i) {
        return new We(t, e, i);
      }, Un = We.extend({
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
          var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : B("video");
          if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = y, e.onmousemove = y, e.onloadeddata = p(this.fire, this, "load"), t) {
            for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++)
              n.push(i[s].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          nt(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var a = 0; a < this._url.length; a++) {
            var l = B("source");
            l.src = this._url[a], e.appendChild(l);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Vs(t, e, i) {
        return new Un(t, e, i);
      }
      var qn = We.extend({
        _initImage: function() {
          var t = this._image = this._url;
          M(t, "leaflet-image-layer"), this._zoomAnimated && M(t, "leaflet-zoom-animated"), this.options.className && M(t, this.options.className), t.onselectstart = y, t.onmousemove = y;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function js(t, e, i) {
        return new qn(t, e, i);
      }
      var yt = pt.extend({
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
          t && (t instanceof N || nt(t)) ? (this._latlng = $(t), O(this, e)) : (O(this, t), this._source = e), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ht(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ht(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (ht(this._container, 0), this._removeTimeout = setTimeout(p(U, void 0, this._container), 200)) : U(this._container), this.options.interactive && (q(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._latlng = $(t), this._map && (this._updatePosition(), this._adjustPan()), this;
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
          return this._map && qt(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Vt(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var e = this._source;
          if (!e._map)
            return !1;
          if (e instanceof bt) {
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
            var t = this._map.latLngToLayerPoint(this._latlng), e = T(this.options.offset), i = this._getAnchor();
            this._zoomAnimated ? G(this._container, t.add(i)) : e = e.add(t).add(i);
            var n = this._containerBottom = -e.y, s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
            this._container.style.bottom = n + "px", this._container.style.left = s + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      I.include({
        _initOverlay: function(t, e, i, n) {
          var s = e;
          return s instanceof t || (s = new t(n).setContent(e)), i && s.setLatLng(i), s;
        }
      }), pt.include({
        _initOverlay: function(t, e, i, n) {
          var s = i;
          return s instanceof t ? (O(s, n), s._source = this) : (s = e && !n ? e : new t(n, this), s.setContent(i)), s;
        }
      });
      var Ue = yt.extend({
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
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, yt.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          yt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof At || this._source.on("preclick", It));
        },
        onRemove: function(t) {
          yt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof At || this._source.off("preclick", It));
        },
        getEvents: function() {
          var t = yt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", e = this._container = B(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), i = this._wrapper = B("div", t + "-content-wrapper", e);
          if (this._contentNode = B("div", t + "-content", i), de(e), bi(this._contentNode), S(e, "contextmenu", It), this._tipContainer = B("div", t + "-tip-container", e), this._tip = B("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var n = this._closeButton = B("a", t + "-close-button", e);
            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', S(n, "click", function(s) {
              J(s), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var i = t.offsetWidth;
          i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
          var n = t.offsetHeight, s = this.options.maxHeight, a = "leaflet-popup-scrolled";
          s && n > s ? (e.height = s + "px", M(t, a)) : q(t, a), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
          G(this._container, e.add(i));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var t = this._map, e = parseInt(he(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, s = new A(this._containerLeft, -i - this._containerBottom);
            s._add($t(this._container));
            var a = t.layerPointToContainerPoint(s), l = T(this.options.autoPanPadding), d = T(this.options.autoPanPaddingTopLeft || l), f = T(this.options.autoPanPaddingBottomRight || l), m = t.getSize(), v = 0, w = 0;
            a.x + n + f.x > m.x && (v = a.x + n - m.x + f.x), a.x - v - d.x < 0 && (v = a.x - d.x), a.y + i + f.y > m.y && (w = a.y + i - m.y + f.y), a.y - w - d.y < 0 && (w = a.y - d.y), (v || w) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([v, w]));
          }
        },
        _getAnchor: function() {
          return T(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Gs = function(t, e) {
        return new Ue(t, e);
      };
      I.mergeOptions({
        closePopupOnClick: !0
      }), I.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(t, e, i) {
          return this._initOverlay(Ue, t, e, i).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(t) {
          return t = arguments.length ? t : this._popup, t && t.close(), this;
        }
      }), pt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(t, e) {
          return this._popup = this._initOverlay(Ue, this._popup, t, e), this._popupHandlersAdded || (this.on({
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
          return this._popup && (this instanceof bt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
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
            Zt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof At)) {
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
      var qe = yt.extend({
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
          yt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          yt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = yt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = B("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + g(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var e, i, n = this._map, s = this._container, a = n.latLngToContainerPoint(n.getCenter()), l = n.layerPointToContainerPoint(t), d = this.options.direction, f = s.offsetWidth, m = s.offsetHeight, v = T(this.options.offset), w = this._getAnchor();
          d === "top" ? (e = f / 2, i = m) : d === "bottom" ? (e = f / 2, i = 0) : d === "center" ? (e = f / 2, i = m / 2) : d === "right" ? (e = 0, i = m / 2) : d === "left" ? (e = f, i = m / 2) : l.x < a.x ? (d = "right", e = 0, i = m / 2) : (d = "left", e = f + (v.x + w.x) * 2, i = m / 2), t = t.subtract(T(e, i, !0)).add(v).add(w), q(s, "leaflet-tooltip-right"), q(s, "leaflet-tooltip-left"), q(s, "leaflet-tooltip-top"), q(s, "leaflet-tooltip-bottom"), M(s, "leaflet-tooltip-" + d), G(s, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          this.options.opacity = t, this._container && ht(this._container, t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function() {
          return T(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Ys = function(t, e) {
        return new qe(t, e);
      };
      I.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, e, i) {
          return this._initOverlay(qe, t, e, i).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(t) {
          return t.close(), this;
        }
      }), pt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(t, e) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(qe, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          return this._tooltip && (this instanceof bt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
          e && (S(e, "focus", function() {
            this._tooltip._source = t, this.openTooltip();
          }, this), S(e, "blur", this.closeTooltip, this));
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
      var Vn = Gt.extend({
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
          if (i.html instanceof Element ? (Ee(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
            var n = T(i.bgPos);
            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
          }
          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function() {
          return null;
        }
      });
      function Ks(t) {
        return new Vn(t);
      }
      Gt.Default = _e;
      var me = pt.extend({
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
          updateWhenIdle: x.mobile,
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
          O(this, t);
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
          return this._map && (qt(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Vt(this._container), this._setAutoZIndex(Math.min)), this;
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
          return t instanceof A ? t : new A(t, t);
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
          if (this._map && !x.ielt9) {
            ht(this._container, this.options.opacity);
            var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
            for (var n in this._tiles) {
              var s = this._tiles[n];
              if (!(!s.current || !s.loaded)) {
                var a = Math.min(1, (t - s.loaded) / 200);
                ht(s.el, a), a < 1 ? e = !0 : (s.active ? i = !0 : this._onOpaqueTile(s), s.active = !0);
              }
            }
            i && !this._noPrune && this._pruneTiles(), e && (at(this._fadeFrame), this._fadeFrame = Q(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: y,
        _initContainer: function() {
          this._container || (this._container = B("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, e = this.options.maxZoom;
          if (t !== void 0) {
            for (var i in this._levels)
              i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (U(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
            var n = this._levels[t], s = this._map;
            return n || (n = this._levels[t] = {}, n.el = B("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), y(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
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
            U(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, e, i, n) {
          var s = Math.floor(t / 2), a = Math.floor(e / 2), l = i - 1, d = new A(+s, +a);
          d.z = +l;
          var f = this._tileCoordsToKey(d), m = this._tiles[f];
          return m && m.active ? (m.retain = !0, !0) : (m && m.loaded && (m.retain = !0), l > n ? this._retainParent(s, a, l, n) : !1);
        },
        _retainChildren: function(t, e, i, n) {
          for (var s = 2 * t; s < 2 * t + 2; s++)
            for (var a = 2 * e; a < 2 * e + 2; a++) {
              var l = new A(s, a);
              l.z = i + 1;
              var d = this._tileCoordsToKey(l), f = this._tiles[d];
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
          x.any3d ? Ot(t.el, s, n) : G(t.el, s);
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
              var n = this._getTiledPixelBounds(t), s = this._pxBoundsToTileRange(n), a = s.getCenter(), l = [], d = this.options.keepBuffer, f = new W(
                s.getBottomLeft().subtract([d, -d]),
                s.getTopRight().add([d, -d])
              );
              if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var m in this._tiles) {
                var v = this._tiles[m].coords;
                (v.z !== this._tileZoom || !f.contains(new A(v.x, v.y))) && (this._tiles[m].current = !1);
              }
              if (Math.abs(i - this._tileZoom) > 1) {
                this._setView(t, i);
                return;
              }
              for (var w = s.min.y; w <= s.max.y; w++)
                for (var z = s.min.x; z <= s.max.x; z++) {
                  var X = new A(z, w);
                  if (X.z = this._tileZoom, !!this._isValidTile(X)) {
                    var K = this._tiles[this._tileCoordsToKey(X)];
                    K ? K.current = !0 : l.push(X);
                  }
                }
              if (l.sort(function(it, Xt) {
                return it.distanceTo(a) - Xt.distanceTo(a);
              }), l.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var ut = document.createDocumentFragment();
                for (z = 0; z < l.length; z++)
                  this._addTile(l[z], ut);
                this._level.el.appendChild(ut);
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
          return j(this.options.bounds).overlaps(n);
        },
        _keyToBounds: function(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function(t) {
          var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), s = n.add(i), a = e.unproject(n, t.z), l = e.unproject(s, t.z);
          return [a, l];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(t) {
          var e = this._tileCoordsToNwSe(t), i = new et(e[0], e[1]);
          return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(t) {
          var e = t.split(":"), i = new A(+e[0], +e[1]);
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
          M(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = y, t.onmousemove = y, x.ielt9 && this.options.opacity < 1 && ht(t, this.options.opacity);
        },
        _addTile: function(t, e) {
          var i = this._getTilePos(t), n = this._tileCoordsToKey(t), s = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
          this._initTile(s), this.createTile.length < 2 && Q(p(this._tileReady, this, t, null, s)), G(s, i), this._tiles[n] = {
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
          i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (ht(i.el, 0), at(this._fadeFrame), this._fadeFrame = Q(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (M(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: i.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), x.ielt9 || !this._map._fadeAnimated ? Q(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var e = new A(
            this._wrapX ? E(t.x, this._wrapX) : t.x,
            this._wrapY ? E(t.y, this._wrapY) : t.y
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
      function Js(t) {
        return new me(t);
      }
      var Jt = me.extend({
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
          this._url = t, e = O(this, e), e.detectRetina && x.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
          return S(i, "load", p(this._tileOnLoad, this, e, i)), S(i, "error", p(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var e = {
            r: x.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }
          return Ft(this._url, u(e, this.options));
        },
        _tileOnLoad: function(t, e) {
          x.ielt9 ? setTimeout(p(t, this, null, e), 0) : t(null, e);
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
              e.src = V;
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
            return e.el.setAttribute("src", V), me.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, e, i) {
          if (!(!this._map || i && i.getAttribute("src") === V))
            return me.prototype._tileReady.call(this, t, e, i);
        }
      });
      function jn(t, e) {
        return new Jt(t, e);
      }
      var Gn = Jt.extend({
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
          var i = u({}, this.defaultWmsParams);
          for (var n in e)
            n in this.options || (i[n] = e[n]);
          e = O(this, e);
          var s = e.detectRetina && x.retina ? 2 : 1, a = this.getTileSize();
          i.width = a.x * s, i.height = a.y * s, this.wmsParams = i;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, Jt.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t), i = this._crs, n = tt(i.project(e[0]), i.project(e[1])), s = n.min, a = n.max, l = (this._wmsVersion >= 1.3 && this._crs === Nn ? [s.y, s.x, a.y, a.x] : [s.x, s.y, a.x, a.y]).join(","), d = Jt.prototype.getTileUrl.call(this, t);
          return d + Et(this.wmsParams, d, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + l;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, e) {
          return u(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      function Xs(t, e) {
        return new Gn(t, e);
      }
      Jt.WMS = Gn, jn.wms = Xs;
      var Tt = pt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          O(this, t), g(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          x.any3d ? Ot(this._container, a, i) : G(this._container, a);
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
      }), Yn = Tt.extend({
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
          S(t, "mousemove", this._onMouseMove, this), S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          at(this._redrawRequest), delete this._ctx, U(this._container), F(this._container), delete this._container;
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
            var t = this._bounds, e = this._container, i = t.getSize(), n = x.retina ? 2 : 1;
            G(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", x.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
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
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || Q(this._redraw, this));
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
            var i, n, s, a, l = t._parts, d = l.length, f = this._ctx;
            if (d) {
              for (f.beginPath(), i = 0; i < d; i++) {
                for (n = 0, s = l[i].length; n < s; n++)
                  a = l[i][n], f[n ? "lineTo" : "moveTo"](a.x, a.y);
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
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (M(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(p(function() {
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
      function Kn(t) {
        return x.canvas ? new Yn(t) : null;
      }
      var ge = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), Qs = {
        _initContainer: function() {
          this._container = B("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Tt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var e = t._container = ge("shape");
          M(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = ge("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[g(t)] = t;
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
          s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = ge("stroke")), s.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = nt(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = ge("fill")), s.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null);
        },
        _updateCircle: function(t) {
          var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
        },
        _setPath: function(t, e) {
          t._path.v = e;
        },
        _bringToFront: function(t) {
          qt(t._container);
        },
        _bringToBack: function(t) {
          Vt(t._container);
        }
      }, Ve = x.vml ? ge : Qi, ve = Tt.extend({
        _initContainer: function() {
          this._container = Ve("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ve("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          U(this._container), F(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Tt.prototype._update.call(this);
            var t = this._bounds, e = t.getSize(), i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), G(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var e = t._path = Ve("path");
          t.options.className && M(e, t.options.className), t.options.interactive && M(e, "leaflet-interactive"), this._updateStyle(t), this._layers[g(t)] = t;
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
          this._setPath(t, tn(t._parts, e));
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
          qt(t._path);
        },
        _bringToBack: function(t) {
          Vt(t._path);
        }
      });
      x.vml && ve.include(Qs);
      function Jn(t) {
        return x.svg || x.vml ? new ve(t) : null;
      }
      I.include({
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
          return this.options.preferCanvas && Kn(t) || Jn(t);
        }
      });
      var Xn = Yt.extend({
        initialize: function(t, e) {
          Yt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return t = j(t), [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast()
          ];
        }
      });
      function tr(t, e) {
        return new Xn(t, e);
      }
      ve.create = Ve, ve.pointsToPath = tn, Lt.geometryToLayer = Re, Lt.coordsToLatLng = Ei, Lt.coordsToLatLngs = Ne, Lt.latLngToCoords = zi, Lt.latLngsToCoords = He, Lt.getFeature = Kt, Lt.asFeature = Fe, I.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Qn = vt.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          S(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          F(this._container, "mousedown", this._onMouseDown, this);
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
          this._clearDeferredResetState(), this._resetState(), le(), pi(), this._startPoint = this._map.mouseEventToContainerPoint(t), S(document, {
            contextmenu: Zt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = B("div", "leaflet-zoom-box", this._container), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new W(this._point, this._startPoint), i = e.getSize();
          G(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
        },
        _finish: function() {
          this._moved && (U(this._box), q(this._container, "leaflet-crosshair")), ue(), _i(), F(document, {
            contextmenu: Zt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0);
            var e = new et(
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
      I.addInitHook("addHandler", "boxZoom", Qn), I.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var to = vt.extend({
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
      I.addInitHook("addHandler", "doubleClickZoom", to), I.mergeOptions({
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
      var eo = vt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new Ct(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          M(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
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
            var e = j(this._map.options.maxBounds);
            this._offsetLimit = tt(
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
          var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, s = (n - e + i) % t + e - i, a = (n + e + i) % t - e - i, l = Math.abs(s + i) < Math.abs(a + i) ? s : a;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = l;
        },
        _onDragEnd: function(t) {
          var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
          if (e.fire("dragend", t), n)
            e.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var s = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, l = i.easeLinearity, d = s.multiplyBy(l / a), f = d.distanceTo([0, 0]), m = Math.min(i.inertiaMaxSpeed, f), v = d.multiplyBy(m / f), w = m / (i.inertiaDeceleration * l), z = v.multiplyBy(-w / 2).round();
            !z.x && !z.y ? e.fire("moveend") : (z = e._limitOffset(z, e.options.maxBounds), Q(function() {
              e.panBy(z, {
                duration: w,
                easeLinearity: l,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      I.addInitHook("addHandler", "dragging", eo), I.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var io = vt.extend({
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
          t.tabIndex <= 0 && (t.tabIndex = "0"), S(t, {
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
          S(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          F(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e = t.keyCode, i = this._map, n;
            if (e in this._panKeys) {
              if (!i._panAnim || !i._panAnim._inProgress)
                if (n = this._panKeys[e], t.shiftKey && (n = T(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(T(n), i.options.maxBounds)), i.options.worldCopyJump) {
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
            Zt(t);
          }
        }
      });
      I.addInitHook("addHandler", "keyboard", io), I.mergeOptions({
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
      var no = vt.extend({
        addHooks: function() {
          S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          F(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = Cn(t), i = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n), Zt(t);
        },
        _performZoom: function() {
          var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, a = i ? Math.ceil(s / i) * i : s, l = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
          this._delta = 0, this._startTime = null, l && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + l) : t.setZoomAround(this._lastMousePos, e + l));
        }
      });
      I.addInitHook("addHandler", "scrollWheelZoom", no);
      var er = 600;
      I.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: x.touchNative && x.safari && x.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var oo = vt.extend({
        addHooks: function() {
          S(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          F(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var e = t.touches[0];
            this._startPos = this._newPos = new A(e.clientX, e.clientY), this._holdTimeout = setTimeout(p(function() {
              this._cancel(), this._isTapValid() && (S(document, "touchend", J), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
            }, this), er), S(document, "touchend touchcancel contextmenu", this._cancel, this), S(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          F(document, "touchend", J), F(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), F(document, "touchend touchcancel contextmenu", this._cancel, this), F(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var e = t.touches[0];
          this._newPos = new A(e.clientX, e.clientY);
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
      I.addInitHook("addHandler", "tapHold", oo), I.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: x.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var so = vt.extend({
        addHooks: function() {
          M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          q(this._map._container, "leaflet-touch-zoom"), F(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
            var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), S(document, "touchmove", this._onTouchMove, this), S(document, "touchend touchcancel", this._onTouchEnd, this), J(t);
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
            this._moved || (e._moveStart(!0, !1), this._moved = !0), at(this._animRequest);
            var l = p(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = Q(l, this, !0), J(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, at(this._animRequest), F(document, "touchmove", this._onTouchMove, this), F(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      I.addInitHook("addHandler", "touchZoom", so), I.BoxZoom = Qn, I.DoubleClickZoom = to, I.Drag = eo, I.Keyboard = io, I.ScrollWheelZoom = no, I.TapHold = oo, I.TouchZoom = so, r.Bounds = W, r.Browser = x, r.CRS = wt, r.Canvas = Yn, r.Circle = Mi, r.CircleMarker = De, r.Class = xt, r.Control = ft, r.DivIcon = Vn, r.DivOverlay = yt, r.DomEvent = ys, r.DomUtil = gs, r.Draggable = Ct, r.Evented = oe, r.FeatureGroup = bt, r.GeoJSON = Lt, r.GridLayer = me, r.Handler = vt, r.Icon = Gt, r.ImageOverlay = We, r.LatLng = N, r.LatLngBounds = et, r.Layer = pt, r.LayerGroup = jt, r.LineUtil = zs, r.Map = I, r.Marker = Be, r.Mixin = ks, r.Path = At, r.Point = A, r.PolyUtil = Cs, r.Polygon = Yt, r.Polyline = Pt, r.Popup = Ue, r.PosAnimation = An, r.Projection = Os, r.Rectangle = Xn, r.Renderer = Tt, r.SVG = ve, r.SVGOverlay = qn, r.TileLayer = Jt, r.Tooltip = qe, r.Transformation = ii, r.Util = Ro, r.VideoOverlay = Un, r.bind = p, r.bounds = tt, r.canvas = Kn, r.circle = Hs, r.circleMarker = Ns, r.control = fe, r.divIcon = Ks, r.extend = u, r.featureGroup = Bs, r.geoJSON = Wn, r.geoJson = Us, r.gridLayer = Js, r.icon = Ds, r.imageOverlay = qs, r.latLng = $, r.latLngBounds = j, r.layerGroup = Zs, r.map = xs, r.marker = Rs, r.point = T, r.polygon = Ws, r.polyline = Fs, r.popup = Gs, r.rectangle = tr, r.setOptions = O, r.stamp = g, r.svg = Jn, r.svgOverlay = js, r.tileLayer = jn, r.tooltip = Ys, r.transformation = se, r.version = h, r.videoOverlay = Vs;
      var ir = window.L;
      r.noConflict = function() {
        return window.L = ir, this;
      }, window.L = r;
    });
  }(we, we.exports)), we.exports;
}
var Qt = dr();
const fr = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ke = globalThis, Vi = Ke.ShadowRoot && (Ke.ShadyCSS === void 0 || Ke.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ji = Symbol(), uo = /* @__PURE__ */ new WeakMap();
let ko = class {
  constructor(o, r, h) {
    if (this._$cssResult$ = !0, h !== ji) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = o, this.t = r;
  }
  get styleSheet() {
    let o = this.o;
    const r = this.t;
    if (Vi && o === void 0) {
      const h = r !== void 0 && r.length === 1;
      h && (o = uo.get(r)), o === void 0 && ((this.o = o = new CSSStyleSheet()).replaceSync(this.cssText), h && uo.set(r, o));
    }
    return o;
  }
  toString() {
    return this.cssText;
  }
};
const Co = (c) => new ko(typeof c == "string" ? c : c + "", void 0, ji), pr = (c, ...o) => {
  const r = c.length === 1 ? c[0] : o.reduce((h, u, _) => h + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(u) + c[_ + 1], c[0]);
  return new ko(r, c, ji);
}, _r = (c, o) => {
  if (Vi) c.adoptedStyleSheets = o.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of o) {
    const h = document.createElement("style"), u = Ke.litNonce;
    u !== void 0 && h.setAttribute("nonce", u), h.textContent = r.cssText, c.appendChild(h);
  }
}, co = Vi ? (c) => c : (c) => c instanceof CSSStyleSheet ? ((o) => {
  let r = "";
  for (const h of o.cssRules) r += h.cssText;
  return Co(r);
})(c) : c;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mr, defineProperty: gr, getOwnPropertyDescriptor: vr, getOwnPropertyNames: yr, getOwnPropertySymbols: xr, getPrototypeOf: wr } = Object, Mt = globalThis, fo = Mt.trustedTypes, br = fo ? fo.emptyScript : "", Ii = Mt.reactiveElementPolyfillSupport, be = (c, o) => c, Wi = { toAttribute(c, o) {
  switch (o) {
    case Boolean:
      c = c ? br : null;
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
} }, Ao = (c, o) => !mr(c, o), po = { attribute: !0, type: String, converter: Wi, reflect: !1, useDefault: !1, hasChanged: Ao };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Mt.litPropertyMetadata ?? (Mt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let te = class extends HTMLElement {
  static addInitializer(o) {
    this._$Ei(), (this.l ?? (this.l = [])).push(o);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(o, r = po) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(o) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(o, r), !r.noAccessor) {
      const h = Symbol(), u = this.getPropertyDescriptor(o, h, r);
      u !== void 0 && gr(this.prototype, o, u);
    }
  }
  static getPropertyDescriptor(o, r, h) {
    const { get: u, set: _ } = vr(this.prototype, o) ?? { get() {
      return this[r];
    }, set(p) {
      this[r] = p;
    } };
    return { get: u, set(p) {
      const b = u == null ? void 0 : u.call(this);
      _ == null || _.call(this, p), this.requestUpdate(o, b, h);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(o) {
    return this.elementProperties.get(o) ?? po;
  }
  static _$Ei() {
    if (this.hasOwnProperty(be("elementProperties"))) return;
    const o = wr(this);
    o.finalize(), o.l !== void 0 && (this.l = [...o.l]), this.elementProperties = new Map(o.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(be("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(be("properties"))) {
      const r = this.properties, h = [...yr(r), ...xr(r)];
      for (const u of h) this.createProperty(u, r[u]);
    }
    const o = this[Symbol.metadata];
    if (o !== null) {
      const r = litPropertyMetadata.get(o);
      if (r !== void 0) for (const [h, u] of r) this.elementProperties.set(h, u);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, h] of this.elementProperties) {
      const u = this._$Eu(r, h);
      u !== void 0 && this._$Eh.set(u, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(o) {
    const r = [];
    if (Array.isArray(o)) {
      const h = new Set(o.flat(1 / 0).reverse());
      for (const u of h) r.unshift(co(u));
    } else o !== void 0 && r.push(co(o));
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
    return _r(o, this.constructor.elementStyles), o;
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
    var _;
    const h = this.constructor.elementProperties.get(o), u = this.constructor._$Eu(o, h);
    if (u !== void 0 && h.reflect === !0) {
      const p = (((_ = h.converter) == null ? void 0 : _.toAttribute) !== void 0 ? h.converter : Wi).toAttribute(r, h.type);
      this._$Em = o, p == null ? this.removeAttribute(u) : this.setAttribute(u, p), this._$Em = null;
    }
  }
  _$AK(o, r) {
    var _, p;
    const h = this.constructor, u = h._$Eh.get(o);
    if (u !== void 0 && this._$Em !== u) {
      const b = h.getPropertyOptions(u), g = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((_ = b.converter) == null ? void 0 : _.fromAttribute) !== void 0 ? b.converter : Wi;
      this._$Em = u;
      const P = g.fromAttribute(r, b.type);
      this[u] = P ?? ((p = this._$Ej) == null ? void 0 : p.get(u)) ?? P, this._$Em = null;
    }
  }
  requestUpdate(o, r, h, u = !1, _) {
    var p;
    if (o !== void 0) {
      const b = this.constructor;
      if (u === !1 && (_ = this[o]), h ?? (h = b.getPropertyOptions(o)), !((h.hasChanged ?? Ao)(_, r) || h.useDefault && h.reflect && _ === ((p = this._$Ej) == null ? void 0 : p.get(o)) && !this.hasAttribute(b._$Eu(o, h)))) return;
      this.C(o, r, h);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(o, r, { useDefault: h, reflect: u, wrapped: _ }, p) {
    h && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(o) && (this._$Ej.set(o, p ?? r ?? this[o]), _ !== !0 || p !== void 0) || (this._$AL.has(o) || (this.hasUpdated || h || (r = void 0), this._$AL.set(o, r)), u === !0 && this._$Em !== o && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(o));
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
        for (const [_, p] of this._$Ep) this[_] = p;
        this._$Ep = void 0;
      }
      const u = this.constructor.elementProperties;
      if (u.size > 0) for (const [_, p] of u) {
        const { wrapped: b } = p, g = this[_];
        b !== !0 || this._$AL.has(_) || g === void 0 || this.C(_, void 0, p, g);
      }
    }
    let o = !1;
    const r = this._$AL;
    try {
      o = this.shouldUpdate(r), o ? (this.willUpdate(r), (h = this._$EO) == null || h.forEach((u) => {
        var _;
        return (_ = u.hostUpdate) == null ? void 0 : _.call(u);
      }), this.update(r)) : this._$EM();
    } catch (u) {
      throw o = !1, this._$EM(), u;
    }
    o && this._$AE(r);
  }
  willUpdate(o) {
  }
  _$AE(o) {
    var r;
    (r = this._$EO) == null || r.forEach((h) => {
      var u;
      return (u = h.hostUpdated) == null ? void 0 : u.call(h);
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
te.elementStyles = [], te.shadowRootOptions = { mode: "open" }, te[be("elementProperties")] = /* @__PURE__ */ new Map(), te[be("finalized")] = /* @__PURE__ */ new Map(), Ii == null || Ii({ ReactiveElement: te }), (Mt.reactiveElementVersions ?? (Mt.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = globalThis, _o = (c) => c, Je = Pe.trustedTypes, mo = Je ? Je.createPolicy("lit-html", { createHTML: (c) => c }) : void 0, So = "$lit$", St = `lit$${Math.random().toFixed(9).slice(2)}$`, Mo = "?" + St, Pr = `<${Mo}>`, Ht = document, Le = () => Ht.createComment(""), Te = (c) => c === null || typeof c != "object" && typeof c != "function", Gi = Array.isArray, Lr = (c) => Gi(c) || typeof (c == null ? void 0 : c[Symbol.iterator]) == "function", Zi = `[ 	
\f\r]`, ye = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, go = /-->/g, vo = />/g, Dt = RegExp(`>|${Zi}(?:([^\\s"'>=/]+)(${Zi}*=${Zi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), yo = /'/g, xo = /"/g, Eo = /^(?:script|style|textarea|title)$/i, zo = (c) => (o, ...r) => ({ _$litType$: c, strings: o, values: r }), Z = zo(1), dt = zo(2), ie = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), wo = /* @__PURE__ */ new WeakMap(), Rt = Ht.createTreeWalker(Ht, 129);
function Oo(c, o) {
  if (!Gi(c) || !c.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return mo !== void 0 ? mo.createHTML(o) : o;
}
const Tr = (c, o) => {
  const r = c.length - 1, h = [];
  let u, _ = o === 2 ? "<svg>" : o === 3 ? "<math>" : "", p = ye;
  for (let b = 0; b < r; b++) {
    const g = c[b];
    let P, E, y = -1, k = 0;
    for (; k < g.length && (p.lastIndex = k, E = p.exec(g), E !== null); ) k = p.lastIndex, p === ye ? E[1] === "!--" ? p = go : E[1] !== void 0 ? p = vo : E[2] !== void 0 ? (Eo.test(E[2]) && (u = RegExp("</" + E[2], "g")), p = Dt) : E[3] !== void 0 && (p = Dt) : p === Dt ? E[0] === ">" ? (p = u ?? ye, y = -1) : E[1] === void 0 ? y = -2 : (y = p.lastIndex - E[2].length, P = E[1], p = E[3] === void 0 ? Dt : E[3] === '"' ? xo : yo) : p === xo || p === yo ? p = Dt : p === go || p === vo ? p = ye : (p = Dt, u = void 0);
    const H = p === Dt && c[b + 1].startsWith("/>") ? " " : "";
    _ += p === ye ? g + Pr : y >= 0 ? (h.push(P), g.slice(0, y) + So + g.slice(y) + St + H) : g + St + (y === -2 ? b : H);
  }
  return [Oo(c, _ + (c[r] || "<?>") + (o === 2 ? "</svg>" : o === 3 ? "</math>" : "")), h];
};
class ke {
  constructor({ strings: o, _$litType$: r }, h) {
    let u;
    this.parts = [];
    let _ = 0, p = 0;
    const b = o.length - 1, g = this.parts, [P, E] = Tr(o, r);
    if (this.el = ke.createElement(P, h), Rt.currentNode = this.el.content, r === 2 || r === 3) {
      const y = this.el.content.firstChild;
      y.replaceWith(...y.childNodes);
    }
    for (; (u = Rt.nextNode()) !== null && g.length < b; ) {
      if (u.nodeType === 1) {
        if (u.hasAttributes()) for (const y of u.getAttributeNames()) if (y.endsWith(So)) {
          const k = E[p++], H = u.getAttribute(y).split(St), R = /([.?@])?(.*)/.exec(k);
          g.push({ type: 1, index: _, name: R[2], strings: H, ctor: R[1] === "." ? Cr : R[1] === "?" ? Ar : R[1] === "@" ? Sr : ti }), u.removeAttribute(y);
        } else y.startsWith(St) && (g.push({ type: 6, index: _ }), u.removeAttribute(y));
        if (Eo.test(u.tagName)) {
          const y = u.textContent.split(St), k = y.length - 1;
          if (k > 0) {
            u.textContent = Je ? Je.emptyScript : "";
            for (let H = 0; H < k; H++) u.append(y[H], Le()), Rt.nextNode(), g.push({ type: 2, index: ++_ });
            u.append(y[k], Le());
          }
        }
      } else if (u.nodeType === 8) if (u.data === Mo) g.push({ type: 2, index: _ });
      else {
        let y = -1;
        for (; (y = u.data.indexOf(St, y + 1)) !== -1; ) g.push({ type: 7, index: _ }), y += St.length - 1;
      }
      _++;
    }
  }
  static createElement(o, r) {
    const h = Ht.createElement("template");
    return h.innerHTML = o, h;
  }
}
function ne(c, o, r = c, h) {
  var p, b;
  if (o === ie) return o;
  let u = h !== void 0 ? (p = r._$Co) == null ? void 0 : p[h] : r._$Cl;
  const _ = Te(o) ? void 0 : o._$litDirective$;
  return (u == null ? void 0 : u.constructor) !== _ && ((b = u == null ? void 0 : u._$AO) == null || b.call(u, !1), _ === void 0 ? u = void 0 : (u = new _(c), u._$AT(c, r, h)), h !== void 0 ? (r._$Co ?? (r._$Co = []))[h] = u : r._$Cl = u), u !== void 0 && (o = ne(c, u._$AS(c, o.values), u, h)), o;
}
class kr {
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
    const { el: { content: r }, parts: h } = this._$AD, u = ((o == null ? void 0 : o.creationScope) ?? Ht).importNode(r, !0);
    Rt.currentNode = u;
    let _ = Rt.nextNode(), p = 0, b = 0, g = h[0];
    for (; g !== void 0; ) {
      if (p === g.index) {
        let P;
        g.type === 2 ? P = new Ce(_, _.nextSibling, this, o) : g.type === 1 ? P = new g.ctor(_, g.name, g.strings, this, o) : g.type === 6 && (P = new Mr(_, this, o)), this._$AV.push(P), g = h[++b];
      }
      p !== (g == null ? void 0 : g.index) && (_ = Rt.nextNode(), p++);
    }
    return Rt.currentNode = Ht, u;
  }
  p(o) {
    let r = 0;
    for (const h of this._$AV) h !== void 0 && (h.strings !== void 0 ? (h._$AI(o, h, r), r += h.strings.length - 2) : h._$AI(o[r])), r++;
  }
}
class Ce {
  get _$AU() {
    var o;
    return ((o = this._$AM) == null ? void 0 : o._$AU) ?? this._$Cv;
  }
  constructor(o, r, h, u) {
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = o, this._$AB = r, this._$AM = h, this.options = u, this._$Cv = (u == null ? void 0 : u.isConnected) ?? !0;
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
    o = ne(this, o, r), Te(o) ? o === D || o == null || o === "" ? (this._$AH !== D && this._$AR(), this._$AH = D) : o !== this._$AH && o !== ie && this._(o) : o._$litType$ !== void 0 ? this.$(o) : o.nodeType !== void 0 ? this.T(o) : Lr(o) ? this.k(o) : this._(o);
  }
  O(o) {
    return this._$AA.parentNode.insertBefore(o, this._$AB);
  }
  T(o) {
    this._$AH !== o && (this._$AR(), this._$AH = this.O(o));
  }
  _(o) {
    this._$AH !== D && Te(this._$AH) ? this._$AA.nextSibling.data = o : this.T(Ht.createTextNode(o)), this._$AH = o;
  }
  $(o) {
    var _;
    const { values: r, _$litType$: h } = o, u = typeof h == "number" ? this._$AC(o) : (h.el === void 0 && (h.el = ke.createElement(Oo(h.h, h.h[0]), this.options)), h);
    if (((_ = this._$AH) == null ? void 0 : _._$AD) === u) this._$AH.p(r);
    else {
      const p = new kr(u, this), b = p.u(this.options);
      p.p(r), this.T(b), this._$AH = p;
    }
  }
  _$AC(o) {
    let r = wo.get(o.strings);
    return r === void 0 && wo.set(o.strings, r = new ke(o)), r;
  }
  k(o) {
    Gi(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let h, u = 0;
    for (const _ of o) u === r.length ? r.push(h = new Ce(this.O(Le()), this.O(Le()), this, this.options)) : h = r[u], h._$AI(_), u++;
    u < r.length && (this._$AR(h && h._$AB.nextSibling, u), r.length = u);
  }
  _$AR(o = this._$AA.nextSibling, r) {
    var h;
    for ((h = this._$AP) == null ? void 0 : h.call(this, !1, !0, r); o !== this._$AB; ) {
      const u = _o(o).nextSibling;
      _o(o).remove(), o = u;
    }
  }
  setConnected(o) {
    var r;
    this._$AM === void 0 && (this._$Cv = o, (r = this._$AP) == null || r.call(this, o));
  }
}
class ti {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(o, r, h, u, _) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = o, this.name = r, this._$AM = u, this.options = _, h.length > 2 || h[0] !== "" || h[1] !== "" ? (this._$AH = Array(h.length - 1).fill(new String()), this.strings = h) : this._$AH = D;
  }
  _$AI(o, r = this, h, u) {
    const _ = this.strings;
    let p = !1;
    if (_ === void 0) o = ne(this, o, r, 0), p = !Te(o) || o !== this._$AH && o !== ie, p && (this._$AH = o);
    else {
      const b = o;
      let g, P;
      for (o = _[0], g = 0; g < _.length - 1; g++) P = ne(this, b[h + g], r, g), P === ie && (P = this._$AH[g]), p || (p = !Te(P) || P !== this._$AH[g]), P === D ? o = D : o !== D && (o += (P ?? "") + _[g + 1]), this._$AH[g] = P;
    }
    p && !u && this.j(o);
  }
  j(o) {
    o === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, o ?? "");
  }
}
class Cr extends ti {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(o) {
    this.element[this.name] = o === D ? void 0 : o;
  }
}
let Ar = class extends ti {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(o) {
    this.element.toggleAttribute(this.name, !!o && o !== D);
  }
};
class Sr extends ti {
  constructor(o, r, h, u, _) {
    super(o, r, h, u, _), this.type = 5;
  }
  _$AI(o, r = this) {
    if ((o = ne(this, o, r, 0) ?? D) === ie) return;
    const h = this._$AH, u = o === D && h !== D || o.capture !== h.capture || o.once !== h.once || o.passive !== h.passive, _ = o !== D && (h === D || u);
    u && this.element.removeEventListener(this.name, this, h), _ && this.element.addEventListener(this.name, this, o), this._$AH = o;
  }
  handleEvent(o) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, o) : this._$AH.handleEvent(o);
  }
}
class Mr {
  constructor(o, r, h) {
    this.element = o, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = h;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(o) {
    ne(this, o);
  }
}
const Bi = Pe.litHtmlPolyfillSupport;
Bi == null || Bi(ke, Ce), (Pe.litHtmlVersions ?? (Pe.litHtmlVersions = [])).push("3.3.3");
const Er = (c, o, r) => {
  const h = (r == null ? void 0 : r.renderBefore) ?? o;
  let u = h._$litPart$;
  if (u === void 0) {
    const _ = (r == null ? void 0 : r.renderBefore) ?? null;
    h._$litPart$ = u = new Ce(o.insertBefore(Le(), _), _, void 0, r ?? {});
  }
  return u._$AI(c), u;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = globalThis;
class ee extends te {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(o), this._$Do = Er(r, this.renderRoot, this.renderOptions);
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
    return ie;
  }
}
var To;
ee._$litElement$ = !0, ee.finalized = !0, (To = Nt.litElementHydrateSupport) == null || To.call(Nt, { LitElement: ee });
const Di = Nt.litElementPolyfillSupport;
Di == null || Di({ LitElement: ee });
(Nt.litElementVersions ?? (Nt.litElementVersions = [])).push("4.2.2");
const $o = {
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
  defaultView: "Default view"
}, zr = {
  ...$o,
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
  defaultView: "Vue par défaut"
};
function Io(c) {
  return (c || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}
function Zo(c) {
  return c === "fr" ? zr : $o;
}
function Or(c, o) {
  return c[o] || o || c.unknown;
}
function ct(c, o, r) {
  return c.toLocaleString(r === "fr" ? "fr-FR" : "en-US", {
    minimumFractionDigits: o,
    maximumFractionDigits: o
  });
}
const $r = /^<.*>$/;
function Ir(c) {
  if (typeof c != "string")
    return null;
  const o = c.trim();
  if (!o || $r.test(o))
    return null;
  const r = o.toLowerCase();
  return r === "none" || r === "null" ? null : o;
}
function Zr(c) {
  return c.map((o) => typeof o == "string" ? o.trim() : "").filter((o) => o.length > 0).join(" · ");
}
function Br(c, o) {
  const r = new Date(c);
  if (Number.isNaN(r.getTime()))
    return c;
  const h = o === "fr" ? "fr-FR" : "en-US", u = new Intl.DateTimeFormat(h, {
    weekday: "short",
    day: "numeric",
    month: "short"
  }).format(r).replace(/[\u00a0\u202f]/g, " ").replace(/,/g, "").replace(/\s+/g, " ").trim(), _ = new Intl.DateTimeFormat(h, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(r).replace(/[\u00a0\u202f]/g, " ").trim();
  return `${u} ${_}`;
}
function xe(c) {
  if (c == null || Number.isNaN(c))
    return "—";
  const o = Math.max(0, Math.round(c)), r = Math.floor(o / 3600), h = Math.floor(o % 3600 / 60);
  return r > 0 ? `${r} h ${h} min` : `${h} min`;
}
function Ri(c, o) {
  return c == null || o == null || o <= 0 ? null : c * 1e3 / o;
}
function Bo(c, o = /* @__PURE__ */ new Date()) {
  const r = new Date(o);
  if (c === "week") {
    const u = (r.getDay() + 6) % 7;
    r.setDate(r.getDate() - u);
  } else c === "month" ? r.setDate(1) : r.setMonth(0, 1);
  r.setHours(0, 0, 0, 0);
  const h = new Date(r);
  return c === "week" ? h.setDate(h.getDate() + 7) : c === "month" ? h.setMonth(h.getMonth() + 1) : h.setFullYear(h.getFullYear() + 1), { start: r, end: h };
}
function Do(c, o, r = /* @__PURE__ */ new Date()) {
  const h = new Date(c).getTime();
  if (Number.isNaN(h))
    return !1;
  const { start: u, end: _ } = Bo(o, r);
  return h >= u.getTime() && h < _.getTime();
}
function Dr(c) {
  const o = /* @__PURE__ */ new Date();
  return { from: Bo(c, o).start.toISOString(), to: o.toISOString() };
}
function Rr(c) {
  return typeof c == "string" ? c : c instanceof Error || c && typeof c == "object" && "message" in c && typeof c.message == "string" ? c.message : "";
}
function Nr(c, o) {
  const r = Rr(c);
  return !r || r.includes("tl_") ? o : r.slice(0, 180);
}
function Ae(c) {
  return !c || typeof c != "object" ? null : c;
}
const Hr = {
  week: 12,
  month: 12,
  year: 6
}, Ni = 360, Hi = 168, Ge = 42, bo = 10, Fi = 12, Fr = 28;
function Wr(c) {
  if (!Number.isFinite(c) || c <= 0)
    return 1;
  const o = 10 ** Math.floor(Math.log10(c)), r = c / o;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * o;
}
function Ur(c, o, r = /* @__PURE__ */ new Date()) {
  let h = -1;
  return c.forEach((u, _) => {
    Do(u, o, r) && (h = _);
  }), h >= 0 ? h : Math.max(0, c.length - 1);
}
function Po(c, o, r) {
  const h = new Date(c);
  if (Number.isNaN(h.getTime()))
    return c;
  const u = r === "fr" ? "fr-FR" : "en-US";
  return o === "year" ? new Intl.DateTimeFormat(u, { year: "numeric" }).format(h) : o === "month" ? new Intl.DateTimeFormat(u, { month: "short" }).format(h).replace(/\.$/, "") : new Intl.DateTimeFormat(u, { day: "numeric", month: "short" }).format(h).replace(/,/g, "").replace(/\s+/g, " ").trim();
}
function qr(c, o, r, h, u = {}) {
  const _ = c.map((C) => C.value).filter((C) => C != null && Number.isFinite(C) && C > 0), p = Wr(_.length ? Math.max(..._) : 0), b = Ni - Ge - bo, g = Hi - Fi - Fr, P = c.length > 0 ? b / c.length : b, E = (C) => Fi + g - C / p * g, y = E(0), k = [p, p / 2, 0], H = c.map((C, V) => {
    const _t = Ge + P * V + P / 2, rt = C.value != null && Number.isFinite(C.value) ? C.value : null, ot = rt == null ? null : E(Math.max(0, rt));
    return { ...C, x: _t, y: ot, value: rt };
  }), R = c.length > 8 ? 2 : 1, O = (C, V, _t) => {
    const rt = u.selected === C;
    return dt`
      <g
        class=${rt ? "selected" : ""}
        role="button"
        tabindex="0"
        aria-pressed=${rt ? "true" : "false"}
        aria-label=${V}
        @click=${() => {
      var ot;
      return (ot = u.onSelect) == null ? void 0 : ot.call(u, C);
    }}
        @keydown=${(ot) => {
      var Wt;
      (ot.key === "Enter" || ot.key === " ") && (ot.preventDefault(), (Wt = u.onSelect) == null || Wt.call(u, C));
    }}
      >
        <title>${V}</title>
        ${_t}
      </g>
    `;
  }, Et = o === "bar" ? H.map((C, V) => {
    const _t = Math.min(22, P * 0.62), rt = C.y ?? y, ot = Math.max(0, y - rt);
    return O(
      V,
      C.title,
      dt`
              <rect
                class="hit"
                x=${(C.x - P / 2).toFixed(1)}
                y=${Fi}
                width=${P.toFixed(1)}
                height=${g}
              ></rect>
              <rect
                class="bar"
                x=${(C.x - _t / 2).toFixed(1)}
                y=${rt.toFixed(1)}
                width=${_t.toFixed(1)}
                height=${ot.toFixed(1)}
                rx="2"
              ></rect>
            `
    );
  }) : [], zt = [];
  let Ft = !1;
  if (o === "line")
    for (const C of H) {
      if (C.y == null) {
        Ft = !1;
        continue;
      }
      zt.push(`${Ft ? "L" : "M"}${C.x.toFixed(1)},${C.y.toFixed(1)}`), Ft = !0;
    }
  const nt = o === "line" ? H.map((C, V) => C.y == null ? dt`` : O(
    V,
    C.title,
    dt`
              <circle class="hit" cx=${C.x.toFixed(1)} cy=${C.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${C.x.toFixed(1)} cy=${C.y.toFixed(1)} r="3.5"></circle>
            `
  )) : [];
  return dt`
    <svg
      class="series-chart"
      viewBox="0 0 ${Ni} ${Hi}"
      role="group"
      aria-label=${r}
      preserveAspectRatio="xMidYMid meet"
    >
      ${k.map((C) => {
    const V = E(C);
    return dt`
          <line class="grid" x1=${Ge} y1=${V.toFixed(1)} x2=${Ni - bo} y2=${V.toFixed(1)}></line>
          <text class="y-label" x=${Ge - 6} y=${(V + 4).toFixed(1)} text-anchor="end">
            ${h(C)}
          </text>
        `;
  })}
      ${Et}
      ${zt.length > 1 ? dt`<path class="line" d=${zt.join(" ")}></path>` : dt``}
      ${nt}
      ${H.map(
    (C, V) => V % R === 0 || V === H.length - 1 ? dt`<text class="x-label" x=${C.x.toFixed(1)} y=${Hi - 8} text-anchor="middle">${C.label}</text>` : dt``
  )}
    </svg>
  `;
}
function Vr(c, o) {
  const r = [];
  for (const h of c) {
    const u = h[o];
    typeof u == "number" && Number.isFinite(u) && r.push(u);
  }
  return r;
}
function jr(c, o = 320, r = 56) {
  if (c.length < 2)
    return dt``;
  const h = Math.min(...c), _ = Math.max(...c) - h || 1, p = o / (c.length - 1), b = c.map((g, P) => {
    const E = P * p, y = r - 4 - (g - h) / _ * (r - 8);
    return `${E.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return dt`
    <svg class="chart" viewBox="0 0 ${o} ${r}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${b}></polyline>
    </svg>
  `;
}
const Xe = "tesla-logger-card";
function Lo(c) {
  const o = Ae(c);
  return !!(o && Array.isArray(o.data));
}
function Gr(c) {
  const o = Ae(c);
  return !!(o && Array.isArray(o.route) && Array.isArray(o.series));
}
function Yr(c) {
  const o = Ae(c);
  return !!(o && typeof o.distance_km == "number");
}
function Kr(c) {
  const o = Ae(c);
  return !!(o && Array.isArray(o.buckets));
}
function Ye(c) {
  return typeof c == "number" && Number.isFinite(c) ? c : null;
}
const Qe = class Qe extends ee {
  constructor() {
    super(...arguments), this._view = "status", this._bucketIndex = null, this._period = "month", this._page = 1, this._loading = !1, this._error = "";
  }
  setConfig(o) {
    var h;
    if (!o || typeof o.entity != "string" || !o.entity)
      throw new Error("Please select a Tesla Logger entity");
    const r = ((h = this._config) == null ? void 0 : h.entity) !== o.entity;
    this._config = o, r && (this._view = o.default_view || "status", this.clearHistory());
  }
  static getConfigElement() {
    return document.createElement("tesla-logger-card-editor");
  }
  static getStubConfig(o) {
    return { entity: Object.keys(o.states).find((h) => {
      var u, _;
      return ((_ = (u = o.states[h]) == null ? void 0 : u.attributes) == null ? void 0 : _.key) === "location";
    }) || "" };
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
    return (o = this._config) != null && o.entity ? Z`
      <ha-card>
        ${this.header()}
        <div class="tabs" role="tablist">
          ${this.tab("status", this.text.status)}
          ${this.tab("drives", this.text.drives)}
          ${this.tab("charges", this.text.charges)}
          ${this.tab("stats", this.text.stats)}
          ${this.tab("charts", this.text.charts)}
        </div>
        ${this._error ? Z`<p class="message">${this._error}</p>` : D}
        ${this._loading ? Z`<p class="message">${this.text.loading}</p>` : D}
        ${this.body()}
      </ha-card>
    ` : Z`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;
  }
  get cardLang() {
    var o, r, h;
    return Io(((r = (o = this.hass) == null ? void 0 : o.locale) == null ? void 0 : r.language) || ((h = this.hass) == null ? void 0 : h.language));
  }
  get text() {
    return Zo(this.cardLang);
  }
  get readings() {
    var p, b, g, P;
    const o = /* @__PURE__ */ new Map(), r = this.hass, h = (p = this._config) == null ? void 0 : p.entity;
    if (!r || !h || !r.states[h])
      return o;
    const u = (g = (b = r.entities) == null ? void 0 : b[h]) == null ? void 0 : g.device_id, _ = r.states[h].attributes.vin;
    for (const [E, y] of Object.entries(r.states)) {
      const k = (P = r.entities) == null ? void 0 : P[E], H = !!(u && (k == null ? void 0 : k.device_id) === u), R = !!(_ && y.attributes.vin === _);
      if (!H && !R)
        continue;
      const O = (k == null ? void 0 : k.translation_key) || (typeof y.attributes.key == "string" ? y.attributes.key : void 0);
      O && o.set(O, y);
    }
    return o;
  }
  get deviceId() {
    var r, h, u;
    const o = (r = this._config) == null ? void 0 : r.entity;
    if (!(!this.hass || !o))
      return (u = (h = this.hass.entities) == null ? void 0 : h[o]) == null ? void 0 : u.device_id;
  }
  numeric(o) {
    var u;
    const r = (u = this.readings.get(o)) == null ? void 0 : u.state;
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
    var P, E, y, k, H, R;
    const o = this.numeric("battery_level"), r = o == null ? "—" : `${Math.round(o)}`, h = o == null ? 0 : Math.max(0, Math.min(100, o)), u = this.label("activity") || "", _ = this.numeric("rated_range"), p = this.deviceId ? (y = (E = (P = this.hass) == null ? void 0 : P.devices) == null ? void 0 : E[this.deviceId]) == null ? void 0 : y.name : void 0, b = (R = (H = this.hass) == null ? void 0 : H.states[((k = this._config) == null ? void 0 : k.entity) || ""]) == null ? void 0 : R.attributes.friendly_name, g = p || (typeof b == "string" ? b : this.text.unknown);
    return Z`
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
            ${_ == null ? "—" : `${ct(_, 0, this.cardLang)} km`}
            · ${this.locationText()}
          </p>
          <span class="pill">${Or(this.text, u)}</span>
        </div>
      </div>
    `;
  }
  locationText() {
    const o = this.label("geofence");
    if (o)
      return o;
    const r = this.readings.get("location"), h = r == null ? void 0 : r.attributes.latitude, u = r == null ? void 0 : r.attributes.longitude;
    return typeof h == "number" && typeof u == "number" ? `${h.toFixed(4)}, ${u.toFixed(4)}` : this.text.unknown;
  }
  tab(o, r) {
    return Z`
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
    return Z`<div class="metric"><span>${o}</span><strong>${r}</strong></div>`;
  }
  quantity(o, r, h) {
    const u = this.numeric(o);
    return u == null ? "—" : `${ct(u, r, this.cardLang)} ${h}`;
  }
  status() {
    return Z`
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
    return Z`
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
      ${o && o.data.length === 0 ? Z`<p class="message">${this.text.emptyDrives}</p>` : D}
      ${this.pager(o)}
    `;
  }
  drive() {
    const o = this._detail, r = Ri(o == null ? void 0 : o.energy_used_kwh, o == null ? void 0 : o.distance_km);
    return Z`
      <div class="toolbar">
        <button @click=${() => this.open("drives")}>${this.text.back}</button>
        <span>${o ? this.when(o.start_at) : ""}</span>
      </div>
      ${o ? Z`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(o.distance_km))}
              ${this.metric(this.text.duration, xe(o.duration_s))}
              ${this.metric(this.text.energy, this.kwh(o.energy_used_kwh))}
              ${this.metric(
      this.text.efficiency,
      r == null ? "—" : `${ct(r, 0, this.cardLang)} Wh/km`
    )}
            </div>
            <p class="message">${this.text.map}</p>
            ${o.route.length ? Z`<div class="map"></div>` : Z`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart, o.series, "speed_kmh", "km/h")}
            ${this.chart(this.text.elevationChart, o.series, "elevation_m", "m")}
            ${this.chart(this.text.batteryChart, o.series, "battery_level", "%")}
          ` : D}
    `;
  }
  charges() {
    const o = this._charges;
    return Z`
      <div class="toolbar">
        <span>${this.text.page} ${(o == null ? void 0 : o.page) ?? this._page}</span>
        <button @click=${() => this.reload()}>${this.text.refresh}</button>
      </div>
      <ul class="list">
        ${((o == null ? void 0 : o.data) || []).map(
      (r) => this.historyEntry(r.start_at, this.chargeDetails(r))
    )}
      </ul>
      ${o && o.data.length === 0 ? Z`<p class="message">${this.text.emptyCharges}</p>` : D}
      ${this.pager(o)}
    `;
  }
  stats() {
    const o = this._stats, r = Ri(o == null ? void 0 : o.energy_used_kwh, o == null ? void 0 : o.distance_km);
    return Z`
      ${this.periodBar()}
      ${o ? Z`
            <div class="grid">
              ${this.metric(this.text.distance, this.km(o.distance_km))}
              ${this.metric(this.text.duration, xe(o.drive_duration_s))}
              ${this.metric(this.text.energy, this.kwh(o.energy_used_kwh))}
              ${this.metric(
      this.text.efficiency,
      r == null ? "—" : `${ct(r, 0, this.cardLang)} Wh/km`
    )}
              ${this.metric(this.text.drivesCount, String(o.drive_count))}
              ${this.metric(this.text.chargesCount, String(o.charge_count))}
              ${this.metric(this.text.energyAdded, this.kwh(o.energy_added_kwh))}
            </div>
          ` : D}
    `;
  }
  periodBar() {
    return Z`
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${["week", "month", "year"].map(
      (o) => Z`
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
    const o = this._series, r = (o == null ? void 0 : o.buckets) ?? [], h = this.selectedBucketIndex(r);
    return Z`
      ${this.periodBar()}
      ${o && r.length === 0 ? Z`<p class="message">${this.text.emptySeries}</p>` : D}
      ${r.length ? Z`
            <div class="series-list">
              ${this.seriesFigure(
      "line",
      this.text.consumptionChart,
      "Wh/km",
      (u) => Ye(u.wh_per_km),
      h
    )}
              ${this.seriesFigure(
      "bar",
      this.text.distance,
      "km",
      (u) => Ye(u.distance_km),
      h
    )}
              ${this.seriesFigure(
      "bar",
      this.text.chargedChart,
      "kWh",
      (u) => Ye(u.energy_charged_kwh),
      h
    )}
            </div>
            ${this.bucketTotals(r[h])}
          ` : D}
    `;
  }
  selectedBucketIndex(o) {
    return this._bucketIndex != null && this._bucketIndex >= 0 && this._bucketIndex < o.length ? this._bucketIndex : Ur(
      o.map((r) => r.start),
      this._period
    );
  }
  selectBucket(o) {
    this._bucketIndex = o;
  }
  bucketHeading(o) {
    return Do(o.start, this._period) ? this._period === "week" ? this.text.thisWeek : this._period === "month" ? this.text.thisMonth : this.text.thisYear : Po(o.start, this._period, this.cardLang);
  }
  bucketTotals(o) {
    const r = Ye(o.energy_used_kwh);
    return Z`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(o)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(o.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${xe(o.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(o.energy_charged_kwh)}</strong>
            ${r == null ? D : Z`<span class="totals-sub">${this.text.consumed} ${this.kwh(r)}</span>`}
          </div>
        </div>
      </section>
    `;
  }
  seriesFigure(o, r, h, u, _) {
    var H;
    const p = ((H = this._series) == null ? void 0 : H.buckets) ?? [], b = h === "Wh/km" ? 0 : 1, g = p.map((R) => {
      const O = u(R), Et = Po(R.start, this._period, this.cardLang), zt = O == null ? "—" : `${ct(O, b, this.cardLang)} ${h}`;
      return { label: Et, value: O, title: `${Et} · ${zt}` };
    }), P = g[g.length - 1], E = (P == null ? void 0 : P.value) == null ? "—" : `${ct(P.value, b, this.cardLang)} ${h}`, y = `${r}. ${this.text.latest} ${E}`, k = (R) => ct(R, R >= 10 || R === 0 ? 0 : 1, this.cardLang);
    return Z`
      <figure class="series-card">
        <figcaption>
          <span class="series-title">${r}</span>
          <span class="series-value">${this.text.latest} ${E}</span>
        </figcaption>
        ${qr(g, o, y, k, {
      selected: _,
      onSelect: (R) => this.selectBucket(R)
    })}
      </figure>
    `;
  }
  chart(o, r, h, u) {
    const _ = Vr(r, h);
    if (_.length < 2)
      return D;
    const p = _[_.length - 1];
    return Z`
      <div class="chart-block">
        <span class="muted">${o} · ${ct(p, 0, this.cardLang)} ${u}</span>
        ${jr(_)}
      </div>
    `;
  }
  pager(o) {
    if (!o || o.total <= o.per_page)
      return D;
    const r = Math.ceil(o.total / o.per_page);
    return Z`
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
    const u = Zr(r), _ = Z`
      <strong class="entry-when">
        <time datetime=${o}>${Br(o, this.cardLang)}</time>
      </strong>
      ${u ? Z`<span class="entry-meta" title=${u}>${u}</span>` : D}
    `;
    return h ? Z`
        <li>
          <button type="button" class="entry" @click=${h}>${_}</button>
        </li>
      ` : Z`<li><div class="entry">${_}</div></li>`;
  }
  driveDetails(o) {
    const r = Ri(o.energy_used_kwh, o.distance_km), h = this.place(o.start_address), u = this.place(o.end_address), _ = h && u ? `${h} → ${u}` : h || u;
    return [
      o.duration_s == null ? null : xe(o.duration_s),
      o.distance_km == null ? null : this.km(o.distance_km),
      r == null ? null : `${ct(r, 0, this.cardLang)} Wh/km`,
      o.energy_used_kwh == null ? null : this.kwh(o.energy_used_kwh),
      _
    ];
  }
  chargeDetails(o) {
    return [
      o.duration_s == null ? null : xe(o.duration_s),
      o.energy_added_kwh == null ? null : this.kwh(o.energy_added_kwh),
      o.max_power_kw == null ? null : `${ct(o.max_power_kw, 0, this.cardLang)} kW`,
      Ir(o.charger_type)
    ];
  }
  place(o) {
    return typeof o != "string" ? null : o.trim() || null;
  }
  km(o) {
    return o == null ? "—" : `${ct(o, 1, this.cardLang)} km`;
  }
  kwh(o) {
    return o == null ? "—" : `${ct(o, 1, this.cardLang)} kWh`;
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
    this._drives = void 0, this._charges = void 0, this._detail = void 0, this._stats = void 0, this._series = void 0, this._seriesPeriod = void 0, this._bucketIndex = null, this._page = 1, this._error = "";
  }
  async ensureView() {
    this._view === "drives" && !this._drives ? await this.loadDrives() : this._view === "charges" && !this._charges ? await this.loadCharges() : this._view === "stats" && !this._stats ? await this.loadStats() : this._view === "charts" && this._seriesPeriod !== this._period ? await this.loadSeries() : this._view === "drive" && this._driveId != null && !this._detail && await this.loadDrive();
  }
  async loadDrives() {
    await this.load("drives", async () => {
      const o = await this.call("get_drives", { page: this._page, per_page: 20 });
      if (!Lo(o))
        throw new Error(this.text.failed);
      this._drives = o;
    });
  }
  async loadCharges() {
    await this.load("charges", async () => {
      const o = await this.call("get_charges", { page: this._page, per_page: 20 });
      if (!Lo(o))
        throw new Error(this.text.failed);
      this._charges = o;
    });
  }
  async loadDrive() {
    const o = this._driveId;
    o != null && await this.load("drive", async () => {
      const r = await this.call("get_drive", { drive_id: o, max_points: 300 });
      if (!Gr(r))
        throw new Error(this.text.failed);
      this._detail = r;
    });
  }
  async loadSeries() {
    const o = this._period;
    this._series = void 0, await this.load("charts", async () => {
      const r = await this.call("get_stats_series", {
        period: o,
        count: Hr[o]
      });
      if (!Kr(r))
        throw new Error(this.text.failed);
      this._series = r, this._seriesPeriod = o;
    });
  }
  async loadStats() {
    const o = this._period;
    await this.load("stats", async () => {
      const r = Dr(o), h = await this.call("get_stats", r);
      if (!Yr(h))
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
      this._error = Nr(h, this.text.failed);
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
    ), u = Ae(h);
    return u && "response" in u ? u.response : h;
  }
  syncMap() {
    var g, P, E, y;
    const o = this.renderRoot.querySelector(".map"), r = ((g = this._detail) == null ? void 0 : g.route) ?? [];
    if (!o || r.length === 0)
      return;
    if (this.map && this.mapEl !== o && this.destroyMap(), !this.map) {
      if (this.map = Qt.map(o, { zoomControl: !0, attributionControl: !0 }), Qt.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        // HA serves Referrer-Policy: no-referrer; override per-tile so OSM gets a Referer.
        referrerPolicy: "strict-origin-when-cross-origin",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map), (E = (P = this.hass) == null ? void 0 : P.themes) != null && E.darkMode) {
        const k = this.map.getPane("tilePane");
        k && (k.style.filter = "invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9)");
      }
      this.mapEl = o;
    }
    (y = this.routeLayer) == null || y.remove();
    const h = Qt.layerGroup().addTo(this.map), u = r.map(
      (k) => [k.latitude, k.longitude]
    ), _ = getComputedStyle(this).getPropertyValue("--primary-color").trim() || "#03a9f4", p = Qt.polyline(u, { color: _, weight: 4 }).addTo(h);
    Qt.circleMarker(u[0], {
      radius: 6,
      color: "#2e7d32",
      fillColor: "#2e7d32",
      fillOpacity: 1
    }).addTo(h);
    const b = u[u.length - 1];
    Qt.circleMarker(b, {
      radius: 6,
      color: "#c62828",
      fillColor: "#c62828",
      fillOpacity: 1
    }).addTo(h), this.routeLayer = h, this.map.fitBounds(p.getBounds().pad(0.15)), requestAnimationFrame(() => {
      var k;
      return (k = this.map) == null ? void 0 : k.invalidateSize();
    });
  }
  destroyMap() {
    var o;
    (o = this.map) == null || o.remove(), this.map = void 0, this.mapEl = void 0, this.routeLayer = void 0;
  }
};
Qe.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _view: { state: !0 },
  _drives: { state: !0 },
  _charges: { state: !0 },
  _detail: { state: !0 },
  _stats: { state: !0 },
  _series: { state: !0 },
  _bucketIndex: { state: !0 },
  _period: { state: !0 },
  _page: { state: !0 },
  _loading: { state: !0 },
  _error: { state: !0 }
}, Qe.styles = [
  Co(fr),
  pr`
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
      }
    `
];
let Ui = Qe;
const Jr = [
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
  }
], Yi = class Yi extends ee {
  setConfig(o) {
    this._config = o;
  }
  render() {
    var r;
    if (!this.hass || !this._config)
      return D;
    const o = Zo(Io(((r = this.hass.locale) == null ? void 0 : r.language) || this.hass.language));
    return Z`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Jr}
        .computeLabel=${(h) => h.name === "entity" ? o.entity : o.defaultView}
        @value-changed=${(h) => {
      this._config = { ...this._config, ...h.detail.value }, this.dispatchEvent(
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
Yi.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
};
let qi = Yi;
customElements.get(Xe) || customElements.define(Xe, Ui);
customElements.get("tesla-logger-card-editor") || customElements.define("tesla-logger-card-editor", qi);
window.customCards = window.customCards || [];
window.customCards.some((c) => c.type === Xe) || window.customCards.push({
  type: Xe,
  name: "Tesla Logger",
  description: "Vehicle status, drives, charges, and stats from tesla-logger",
  preview: !1
});
export {
  Ui as TeslaLoggerCard
};
