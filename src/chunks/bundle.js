System.register([], function(_export, _context) {
    return {
        execute: function() {
            System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js", [], (function(e) {
                "use strict";
                return {
                    execute: function() {
                        function i(e, i) {
                            for (var r = 0; r < i.length; r++) {
                                var t = i[r];
                                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                            }
                        }

                        function r(i, t) {
                            return (r = e("setPrototypeOf", Object.setPrototypeOf || function(e, i) {
                                return e.__proto__ = i, e
                            }))(i, t)
                        }
                        e({
                            applyDecoratedDescriptor: function(e, i, r, t, n) {
                                var o = {};
                                Object.keys(t).forEach((function(e) {
                                    o[e] = t[e]
                                })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0);
                                o = r.slice().reverse().reduce((function(r, t) {
                                    return t(e, i, r) || r
                                }), o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0);
                                void 0 === o.initializer && (Object.defineProperty(e, i, o), o = null);
                                return o
                            },
                            assertThisInitialized: function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            },
                            createClass: function(e, r, t) {
                                r && i(e.prototype, r);
                                t && i(e, t);
                                return e
                            },
                            defineProperty: function(e, i, r) {
                                i in e ? Object.defineProperty(e, i, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[i] = r;
                                return e
                            },
                            inheritsLoose: function(e, i) {
                                e.prototype = Object.create(i.prototype), e.prototype.constructor = e, r(e, i)
                            },
                            initializerDefineProperty: function(e, i, r, t) {
                                if (!r) return;
                                Object.defineProperty(e, i, {
                                    enumerable: r.enumerable,
                                    configurable: r.configurable,
                                    writable: r.writable,
                                    value: r.initializer ? r.initializer.call(t) : void 0
                                })
                            },
                            setPrototypeOf: r
                        })
                    }
                }
            }));

        }
    };
});