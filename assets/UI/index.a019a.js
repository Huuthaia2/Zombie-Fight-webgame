System.register("chunks:///_virtual/PrivacyPolicyUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var i, e, n, o, r, a, s, c, l, u, m;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized, r = t.initializerDefineProperty
        }, function(t) {
            a = t.cclegacy, s = t._decorator, c = t.Node
        }, function(t) {
            l = t.GlobalEnum
        }, function(t) {
            u = t.EventType
        }, function(t) {
            m = t.default
        }],
        execute: function() {
            var y, p, v, h, f, C, P;
            a._RF.push({}, "02996CrQiJH545IN1R/t85Z", "PrivacyPolicyUI", void 0);
            var d = s.ccclass,
                E = s.property;
            t("PrivacyPolicyUI", (y = d("PrivacyPolicyUI"), p = E(c), v = E(c), y((C = i((f = function(t) {
                function i() {
                    for (var i, e = arguments.length, a = new Array(e), s = 0; s < e; s++) a[s] = arguments[s];
                    return i = t.call.apply(t, [this].concat(a)) || this, n(o(i), "uiType", l.UI.PrivacyPolicyUI), r(o(i), "panel", C, o(i)), r(o(i), "txt", P, o(i)), n(o(i), "_isFirst", !1), i
                }
                e(i, t);
                var a = i.prototype;
                return a.show = function(i) {
                    void 0 === i && (i = !0), this._isFirst = i, t.prototype.show.call(this), this.panel.active = this._isFirst, this.txt.active = !this._isFirst
                }, a.onConfirmClick = function() {
                    this.emit(u.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "privacyPolicy",
                        value: !0,
                        mode: "=",
                        emit: !1,
                        save: !0
                    }), this.emit(u.Common.AudioEvent.playClickBtn), this.emit(u.Common.UIEvent.exit, l.UI.PrivacyPolicyUI), this.emit(u.LevelEvent.finishYinSi)
                }, a.onCloseClick = function() {
                    var t = this;
                    this.emit(u.Common.AudioEvent.playClickBtn), this.emit(u.Common.UIEvent.exit, this.uiType), setTimeout((function() {
                        t.emit(u.Common.HeyGameSDK.CloseGame)
                    }), 100)
                }, a.showTxt = function() {
                    this.emit(u.Common.AudioEvent.playClickBtn), this.txt.active = !0
                }, a.hideTxt = function() {
                    this.emit(u.Common.AudioEvent.playClickBtn), this.txt.active = !1, this._isFirst || this.emit(u.Common.UIEvent.exit, this.uiType)
                }, i
            }(m)).prototype, "panel", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = i(f.prototype, "txt", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = f)) || h));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerAssetBar.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalPool.ts"], (function(t) {
    "use strict";
    var n, i, o, e, a, s, r, l, h, u, d, c, g, f, S, m, p, v, y, b, I, z;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.initializerDefineProperty, e = t.assertThisInitialized, a = t.defineProperty
        }, function(t) {
            s = t.cclegacy, r = t.Label, l = t.Node, h = t.Prefab, u = t._decorator, d = t.v3, c = t.UITransform, g = t.Widget, f = t.Tween, S = t.tween
        }, function(t) {
            m = t.GlobalEnum
        }, function(t) {
            p = t.EventType
        }, function(t) {
            v = t.default
        }, function(t) {
            y = t.default, b = t.ActionMngType
        }, function(t) {
            I = t.default
        }, function(t) {
            z = t.default
        }],
        execute: function() {
            var C, P, A, G, T, Z, M, E, L, w, D, U, N, B, x, F, _, k;
            s._RF.push({}, "08b7fQRKfNDVZa5QgqRT/Gw", "PlayerAssetBar", void 0);
            var R = u,
                q = R.ccclass,
                W = R.property;
            t("default", (C = W(r), P = W(l), A = W(l), G = W(h), T = W(r), Z = W(l), M = W(l), E = W(h), q((D = n((w = function(t) {
                function n() {
                    for (var n, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return n = t.call.apply(t, [this].concat(s)) || this, o(e(n), "goldLabel", D, e(n)), a(e(n), "gold", void 0), o(e(n), "goldLayer", U, e(n)), o(e(n), "goldIconTargetNode", N, e(n)), o(e(n), "goldIconPrefab", B, e(n)), a(e(n), "cb", void 0), a(e(n), "finishGold", null), a(e(n), "addGoldStep", 1), a(e(n), "goldIconCount", 0), o(e(n), "zuanShiLabel", x, e(n)), a(e(n), "zuanShi", void 0), o(e(n), "zuanShiLayer", F, e(n)), o(e(n), "zuanShiIconTargetNode", _, e(n)), o(e(n), "zuanShiIconPrefab", k, e(n)), a(e(n), "finishZuanShi", null), a(e(n), "zuanShiCb", void 0), a(e(n), "addZuanShiStep", 1), a(e(n), "zuanShiIconCount", 0), a(e(n), "_tmpPos", d()), n
                }
                i(n, t);
                var s = n.prototype;
                return s.init = function() {
                    this.initGoldIcon(), this.initZuanShiIcon(), this.onEvents(), this.setData()
                }, s.onEvents = function() {
                    this.on(p.Common.PlayerDataEvent.playerDataChanged, this.onPlayerDataChanged, this), this.on(p.Common.UIEvent.playGoldAnim, this.playGoldAnim, this), this.on(p.Common.UIEvent.playZuanShiAnim, this.playZuanShiAnim, this)
                }, s.reset = function() {
                    this.resetGoldIcon(), this.resetZuanShiIcon()
                }, s.show = function() {
                    this.node.active = !0, this.setData(), this.onEvents()
                }, s.hide = function() {
                    this.offEvents(), this.node.active = !1
                }, s.setData = function() {
                    var t = v.getData("gameData.asset");
                    this.setGold(t.gold), this.setZuanShi(t.zuanShi)
                }, s.convertToString = function(t) {
                    return t.toString()
                }, s.onPlayerDataChanged = function(t) {
                    switch (t.attribute) {
                        case "gameData.asset.gold":
                            this.setGold(t.value);
                            break;
                        case "gameData.asset.zuanShi":
                            this.setZuanShi(t.value)
                    }
                }, s.addGold = function(t) {
                    this.emit(p.Common.AudioEvent.playEffect, m.AudioClip.gold, {
                        volume: .5
                    }), this.setGold(this.gold + t)
                }, s.setGold = function(t) {
                    this.gold = t, this.goldLabel.string = this.convertToString(t)
                }, s.initGoldIcon = function() {
                    this.cb = null, z.createPool(this.goldIconPrefab.data.name, this.goldIconPrefab)
                }, s.resetGoldIcon = function() {
                    this.cb = null;
                    for (var t = y.getMng(b.UI), n = this.goldLayer.children.length - 1; n >= 0; --n) t.stopAllActions(this.goldLayer.children[n]);
                    z.putAllChildren(this.goldLayer, !0)
                }, s.playGoldAnim = function(t) {
                    this.resetGoldIcon(), this.emit(p.Common.UIEvent.showTouchMask), this.cb = t.cb;
                    var n = d();
                    t.startPos && (n.x = t.startPos.x, n.y = t.startPos.y), this.goldIconCount = Math.round(10 * Math.random()) + 20, t.gold ? this.addGoldStep = Math.floor(t.gold / this.goldIconCount) : this.addGoldStep = 0;
                    var i = this.goldIconCount,
                        o = y.getMng(b.UI),
                        e = this.goldIconTargetNode.getComponent(c).convertToWorldSpaceAR(d());
                    e = this.node.getComponent(c).convertToNodeSpaceAR(e);
                    for (var a = 0; a < i; a++) {
                        var s = z.get(this.goldIconPrefab.data.name);
                        this.goldLayer.addChild(s), s.setPosition(n), s.setScale(1, 1);
                        var r = y.moveBy(.3 + .2 * Math.random(), 500 * (Math.random() - .5), 500 * (Math.random() - .5), 0);
                        r.easing(y.easeOut(2));
                        var l = y.moveTo(.7, e.x, e.y, 0);
                        l.easing(y.easeSinIn());
                        var h = y.scaleTo(.7, .5, .5, 1),
                            u = y.spawn(l, h),
                            g = y.callFun(this.onGoldParticleArrived, this, s),
                            f = y.sequence(r, u, g);
                        o.runAction(s, f)
                    }
                }, s.onGoldParticleArrived = function(t) {
                    t && z.put(t), this.addGold(this.addGoldStep), --this.goldIconCount <= 0 && this.playFinish()
                }, s.playFinish = function() {
                    this.emit(p.Common.UIEvent.hideTouchMask);
                    var t = v.getData("gameData.asset");
                    this.setGold(t.gold), this.cb ? this.cb() : this.emit(p.Common.UIEvent.goldAnimPlayFinish), this.resetGoldIcon()
                }, s.addZuanShi = function(t) {
                    this.emit(p.Common.AudioEvent.playEffect, m.AudioClip.zuanShi, {
                        volume: .5
                    }), this.setZuanShi(this.zuanShi + t)
                }, s.setZuanShi = function(t) {
                    this.zuanShi = t, this.zuanShiLabel.string = this.zuanShi.toString()
                }, s.initZuanShiIcon = function() {
                    this.zuanShiCb = null, z.createPool(this.zuanShiIconPrefab.data.name, this.zuanShiIconPrefab)
                }, s.resetZuanShiIcon = function() {
                    this.zuanShiCb = null;
                    for (var t = y.getMng(b.UI), n = this.zuanShiLayer.children.length - 1; n >= 0; --n) t.stopAllActions(this.zuanShiLayer.children[n]);
                    z.putAllChildren(this.zuanShiLayer, !0)
                }, s.playZuanShiAnim = function(t) {
                    this.resetZuanShiIcon(), this.emit(p.Common.UIEvent.showTouchMask), this.zuanShiCb = t.cb;
                    var n = d();
                    t.startPos && (n.x = t.startPos.x, n.y = t.startPos.y), this.zuanShiIconCount = Math.round(10 * Math.random()) + 20, t.zuanShi ? this.addZuanShiStep = Math.floor(t.zuanShi / this.zuanShiIconCount) : this.addZuanShiStep = 0;
                    var i = this.zuanShiIconCount,
                        o = y.getMng(b.UI),
                        e = this.zuanShiIconTargetNode.getComponent(c).convertToWorldSpaceAR(d());
                    e = this.node.getComponent(c).convertToNodeSpaceAR(e);
                    for (var a = 0; a < i; a++) {
                        var s = z.get(this.zuanShiIconPrefab.data.name);
                        this.zuanShiLayer.addChild(s), s.setPosition(n), s.setScale(1, 1);
                        var r = y.moveBy(.3 + .2 * Math.random(), 500 * (Math.random() - .5), 500 * (Math.random() - .5), 0);
                        r.easing(y.easeOut(2));
                        var l = y.moveTo(.7, e.x, e.y, 0);
                        l.easing(y.easeSinIn());
                        var h = y.scaleTo(.7, .5, .5, 1),
                            u = y.spawn(l, h),
                            g = y.callFun(this.onZuanShiParticleArrived, this, s),
                            f = y.sequence(r, u, g);
                        o.runAction(s, f)
                    }
                }, s.onZuanShiParticleArrived = function(t) {
                    t && z.put(t), this.addZuanShi(this.addZuanShiStep), --this.zuanShiIconCount <= 0 && this.playZuanShiFinish()
                }, s.playZuanShiFinish = function() {
                    var t = v.getData("gameData.asset");
                    this.setZuanShi(t.zuanShi), this.emit(p.Common.UIEvent.hideTouchMask), this.zuanShiCb ? this.zuanShiCb() : this.emit(p.Common.UIEvent.zuanShiAnimPlayFinish), this.resetZuanShiIcon()
                }, s.setGoldBarPos = function(t) {
                    var n = this;
                    void 0 === t && (t = !0), this.goldIconTargetNode.getComponent(g).enabled = !1;
                    var i = this.goldIconTargetNode.getPosition();
                    i.x = t ? -327 : -97, f.stopAllByTarget(this._tmpPos), S(this._tmpPos).to(.3, {
                        x: i.x
                    }, {
                        onUpdate: function() {
                            n.goldIconTargetNode.setPosition(n._tmpPos)
                        }
                    }).start()
                }, s.onBtnTest = function() {
                    this.playGoldAnim({
                        gold: 200
                    })
                }, s.onBtnGetGold = function() {
                    this.playClickBtn(), this.showUI(m.UI.addGold)
                }, s.onBtnGetZuanShi = function() {
                    this.playClickBtn(), this.showUI(m.UI.addZuanShi)
                }, n
            }(I)).prototype, "goldLabel", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = n(w.prototype, "goldLayer", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = n(w.prototype, "goldIconTargetNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = n(w.prototype, "goldIconPrefab", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = n(w.prototype, "zuanShiLabel", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = n(w.prototype, "zuanShiLayer", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = n(w.prototype, "zuanShiIconTargetNode", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = n(w.prototype, "zuanShiIconPrefab", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = w)) || L));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BtnWeapon.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, i, n, o, a, s, r, c, p, d, u, l, h, v;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized, a = t.defineProperty
        }, function(t) {
            s = t.cclegacy, r = t._decorator, c = t.Node, p = t.v3
        }, function(t) {
            d = t.EventType
        }, function(t) {
            u = t.default
        }, function(t) {
            l = t.default, h = t.ActionMngType
        }, function(t) {
            v = t.default
        }],
        execute: function() {
            var f, N, y, T, g;
            s._RF.push({}, "2ad03aAvu5LcqUymIxQXUID", "BtnWeapon", void 0);
            var A = r.ccclass,
                E = r.property;
            t("BtnWeapon", (f = A("BtnWeapon"), N = E(c), f((g = e((T = function(t) {
                function e() {
                    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(s)) || this, n(o(e), "tipNode", g, o(e)), a(o(e), "action", void 0), e
                }
                i(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this.init(), this.updateTipNode()
                }, s.initSub = function() {
                    this.initTipNode()
                }, s.onEvents = function() {
                    this.on(d.LevelEvent.changedWeapon, this.updateTipNode, this), this.on(d.LevelEvent.updateBtnWeapon, this.updateTipNode, this)
                }, s.initTipNode = function() {
                    this.tipNode.active = !1;
                    var t = .4,
                        e = 1.4,
                        i = l.scaleTo(t, e, e, e);
                    t = 1.5, e = 1;
                    var n = l.scaleTo(t, e, e, e);
                    n.easing(l.easeElasticOut(.3));
                    var o = l.delay(.8),
                        a = 20;
                    t = .2;
                    var s = l.rotateTo2d(t, a);
                    a = -10;
                    var r = l.rotateTo2d(t, a),
                        c = l.rotateTo2d(1, 0);
                    c.easing(l.easeElasticOut(.4));
                    var p = l.delay(.5),
                        d = l.sequence(p, i, n, o, s, r, c);
                    this.action = l.repeatForever(d)
                }, s.showTipNode = function() {
                    this.tipNode.active || (this.tipNode.active = !0, this.tipNode.setScale(1, 1, 1), this.tipNode.eulerAngles = p(0, 0, 0), l.getMng(h.UI).runAction(this.tipNode, this.action))
                }, s.hideTipNode = function() {
                    this.tipNode.active && (this.tipNode.active = !1, l.getMng(h.UI).stopAllActions(this.tipNode))
                }, s.updateTipNode = function() {
                    var t = u.getPlayerData().weapons;
                    t.owned.length < t.unlocked.length ? this.showTipNode() : this.hideTipNode()
                }, e
            }(v)).prototype, "tipNode", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = T)) || y));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BtnHeiYe.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(e) {
    "use strict";
    var t, i, o, n, s, l, r, c, a, u, h, g, f, m, d, p, y, v, L, T, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, o = e.initializerDefineProperty, n = e.assertThisInitialized, s = e.defineProperty, l = e.createClass
        }, function(e) {
            r = e.cclegacy, c = e._decorator, a = e.Sprite, u = e.Node, h = e.Label, g = e.color, f = e.Color
        }, function(e) {
            m = e.GlobalEnum
        }, function(e) {
            d = e.default
        }, function(e) {
            p = e.EventType
        }, function(e) {
            y = e.default
        }, function(e) {
            v = e.default, L = e.ActionMngType
        }, function(e) {
            T = e.default
        }, function(e) {
            b = e.default
        }],
        execute: function() {
            var C, k, I, S, E, H, Y, _, D, M, G, P, w;
            r._RF.push({}, "34be0PMtyNMJpv+X0wBAi0r", "BtnHeiYe", void 0);
            var A = c.ccclass,
                z = c.property;
            e("BtnHeiYe", (C = A("BtnHeiYe"), k = z([a]), I = z(a), S = z(u), E = z(u), H = z(h), C((D = t((_ = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), r = 0; r < i; r++) l[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(l)) || this, o(n(t), "grayImgs", D, n(t)), o(n(t), "contentImg", M, n(t)), o(n(t), "iconLock", G, n(t)), o(n(t), "tipLock", P, n(t)), s(n(t), "_isLocked", !0), o(n(t), "coolTimerLabel", w, n(t)), s(n(t), "coolTimer", 0), s(n(t), "curSecond", 0), s(n(t), "_isCooling", !1), t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this.node.on(u.EventType.TOUCH_START, this.onClick, this), this.on(p.LevelEvent.enterLobby, this.onEnterLobby, this)
                }, r.onEnable = function() {
                    var e = y.getPlayerData().curLevel;
                    (this.isLocked = e <= d.GameRule.lvHeiYe, this.isLocked) || (y.getPlayerData().tipedHeiYe || (y.getPlayerData().tipedHeiYe = !0, y.saveData(), this.emit(p.LevelEvent.teachHeiYe, this.node)));
                    if (this.isLocked) this.isCooling = !1;
                    else {
                        var t = y.getPlayerData().heiYeCoolStartTime,
                            i = (new Date).getTime(),
                            o = d.GameRule.heiYeCoolTime - Math.floor(.001 * (i - t));
                        o > 0 ? (this.coolTimer = o, this.curSecond = this.coolTimer - 1, this.isCooling = !0) : this.isCooling = !1
                    }
                }, r.startCool = function() {
                    this.isLocked || (this.coolTimer = d.GameRule.heiYeCoolTime, this.curSecond = this.coolTimer - 1, this.isCooling = !0)
                }, r.updateCooling = function(e) {
                    this.isCooling && (this.coolTimer -= e, this.coolTimer <= 0 ? this.isCooling = !1 : this.coolTimer < this.curSecond && (this.curSecond = Math.floor(this.coolTimer), this.coolTimerLabel.string = "CD：" + this.curSecond.toString() + "s"))
                }, r.onClick = function() {
                    var e = this;
                    if (this.isLocked) {
                        this.playClickCancel();
                        var t = .1,
                            i = 1;
                        this.tipLock.setScale(i, i, i), i = 1.2;
                        var o = v.scaleTo(t, i, i, i);
                        t = .5, i = 1;
                        var n = v.scaleTo(t, i, i, i);
                        n.easing(v.easeElasticOut(.3));
                        var s = v.sequence(o, n);
                        v.getMng(L.UI).runAction(this.tipLock, s)
                    } else if (this.isCooling) {
                        this.playClickCancel();
                        var l = .1,
                            r = 1;
                        this.coolTimerLabel.node.setScale(r, r, r), r = 1.2;
                        var c = v.scaleTo(l, r, r, r);
                        l = .5, r = 1;
                        var a = v.scaleTo(l, r, r, r);
                        a.easing(v.easeElasticOut(.3));
                        var u = v.sequence(c, a);
                        v.getMng(L.UI).runAction(this.coolTimerLabel.node, u)
                    } else {
                        this.playClickBtn();
                        var h = 1;
                        this.tipLock.setScale(h, h, h), h = 1.1;
                        var g = v.scaleTo(.1, h, h, h);
                        h = 1;
                        var f = v.scaleTo(.1, h, h, h),
                            m = v.callFun((function() {
                                e.emit(p.LevelEvent.startHeiYe)
                            })),
                            d = v.sequence(g, f, m);
                        v.getMng(L.UI).runAction(this.node, d)
                    }
                }, r.onEnterLobby = function() {
                    this.isLocked || b.get(m.myGlobalDataType.fightMode) == m.FightMode.heiYe && this.startCool()
                }, r.update = function(e) {
                    this.updateCooling(e)
                }, l(t, [{
                    key: "isLocked",
                    get: function() {
                        return this._isLocked
                    },
                    set: function(e) {
                        this._isLocked = e;
                        for (var t = this.grayImgs.length - 1; t >= 0; --t) this.grayImgs[t].grayscale = e;
                        this.iconLock.active = e, this.tipLock.active = e, e ? (this.contentImg.color = g(170, 170, 170, 255), this.coolTimerLabel.node.active = !1, this._isCooling = !1) : this.contentImg.color = f.WHITE
                    }
                }, {
                    key: "isCooling",
                    get: function() {
                        return this._isCooling
                    },
                    set: function(e) {
                        if (this.isLocked) this.coolTimerLabel.node.active = !1;
                        else {
                            this._isCooling = e;
                            for (var t = this.grayImgs.length - 1; t >= 0; --t) this.grayImgs[t].grayscale = e;
                            e ? (this.contentImg.color = g(170, 170, 170, 255), this.coolTimerLabel.node.active = !0, this.coolTimerLabel.string = "CD：" + this.curSecond.toString() + "s") : (this.contentImg.color = f.WHITE, this.coolTimerLabel.node.active = !1)
                        }
                    }
                }]), t
            }(T)).prototype, "grayImgs", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), M = t(_.prototype, "contentImg", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(_.prototype, "iconLock", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(_.prototype, "tipLock", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(_.prototype, "coolTimerLabel", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = _)) || Y));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AddGoldUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./Action3dManager.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var n, e, i, o, a, r, l, s, u, c, d, h, f;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor, e = t.inheritsLoose, i = t.initializerDefineProperty, o = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, r = t._decorator, l = t.Node, s = t.Label
        }, function(t) {
            u = t.GlobalEnum
        }, function(t) {
            c = t.EventType
        }, function(t) {
            d = t.default, h = t.ActionMngType
        }, function(t) {
            f = t.default
        }],
        execute: function() {
            var p, m, g, b, y, v, A, G, I;
            a._RF.push({}, "35d9fr1PoJIbYEbHAy7L9G6", "AddGoldUI", void 0);
            var L = r.ccclass,
                U = r.property;
            t("AddGoldUI", (p = L("AddGoldUI"), m = U(l), g = U(s), b = U(l), p((A = n((v = function(t) {
                function n() {
                    for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
                    return n = t.call.apply(t, [this].concat(a)) || this, i(o(n), "light", A, o(n)), i(o(n), "goldLabel", G, o(n)), i(o(n), "btnNormal", I, o(n)), n
                }
                e(n, t);
                var a = n.prototype;
                return a.show = function() {
                    this.node.active = !0, this.playLight(), this.randomBtnPosition()
                }, a.hide = function() {
                    this.resetLight(), this.node.active = !1
                }, a.initLight = function() {}, a.resetLight = function() {
                    d.getMng(h.UI).stopAllActions(this.light)
                }, a.playLight = function() {
                    this.light.setRotation(0, 0, 0, 1);
                    var t = d.rotateTo2d(2, 120),
                        n = d.rotateTo2d(2, 240),
                        e = d.rotateTo2d(2, 360),
                        i = d.rotateTo2d(0, 0),
                        o = d.sequence(t, n, e, i),
                        a = d.repeatForever(o);
                    d.getMng(h.UI).runAction(this.light, a)
                }, a.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, a.onBtnVideo = function() {
                    var t = this;
                    // this.playClickBtn(), this.emit(c.Common.SDKEvent.showVideo, {
                    //     success: function() {
                    //         t.addGold(500)
                    //     }
                    // })
                    this.playClickBtn();
                    window["fbSDK"].showRewardVideoAd(function () {
                        t.addGold(500);
                    },function () {

                    })

                }, a.addGold = function(t) {
                    var n = this;
                    this.emit(c.Common.UIEvent.playGoldAnim, {
                        cb: function() {
                            n.emit(c.Common.PlayerDataEvent.updatePlayerData, {
                                attribute: "gameData.asset.gold",
                                value: t,
                                mode: "+",
                                emit: !0,
                                save: !0
                            }), n.hideUI(u.UI.addGold)
                        },
                        gold: t
                    })
                }, a.onBtnClose = function() {
                    this.emit(c.Common.AudioEvent.playEffect, u.AudioClip.btnCancel), this.hideUI(u.UI.addGold)
                }, n
            }(f)).prototype, "light", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = n(v.prototype, "goldLabel", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = n(v.prototype, "btnNormal", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = v)) || y));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UnlockTileUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, i, o, n, l, s, r, a, u, c, h, p, m, y, d, f;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.initializerDefineProperty, n = t.assertThisInitialized, l = t.defineProperty
        }, function(t) {
            s = t.cclegacy, r = t._decorator, a = t.Label, u = t.Sprite, c = t.SpriteFrame, h = t.Node, p = t.v2
        }, function(t) {
            m = t.GlobalEnum
        }, function(t) {
            y = t.EventType
        }, function(t) {
            d = t.default
        }, function(t) {
            f = t.default
        }],
        execute: function() {
            var b, g, v, k, T, P, C, U, R, E, w, D, I, L, z;
            s._RF.push({}, "36610hzNBtKHajHkYdimsiz", "UnlockTileUI", void 0);
            var S = r.ccclass,
                x = r.property;
            t("UnlockTileUI", (b = S("UnlockTileUI"), g = x(a), v = x(u), k = x(c), T = x(c), P = x(a), C = x(h), b((E = e((R = function(t) {
                function e() {
                    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(s)) || this, o(n(e), "title", E, n(e)), o(n(e), "img", w, n(e)), o(n(e), "imgRoom", D, n(e)), o(n(e), "imgSoldier", I, n(e)), l(n(e), "tilePos", p()), l(n(e), "unlockType", void 0), o(n(e), "priceLabel", L, n(e)), l(n(e), "gold", 0), o(n(e), "btnNormal", z, n(e)), e
                }
                i(e, t);
                var s = e.prototype;
                return s.setData = function(t) {
                    this.tilePos.set(t.tilePos), this.setUnlockType(t.type), this.setGold(t.gold)
                }, s.show = function(t) {
                    this.node.active = !0, this.reset(), t && this.setData(t), this.randomBtnPosition()
                }, s.setUnlockType = function(t) {
                    var e;
                    switch (this.unlockType = t, this.unlockType) {
                        case m.TileContentType.soldier:
                            e = "hired soldiers", this.img.spriteFrame = this.imgSoldier;
                            break;
                        case m.TileContentType.unlockRoom:
                            e = "unlock Room", this.img.spriteFrame = this.imgRoom
                    }
                    this.title.string = e
                }, s.setGold = function(t) {
                    this.gold = t, this.priceLabel.string = this.gold.toString()
                }, s.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, s.onBtnUnlock = function() {
                    if (d.getPlayerData().asset.gold < this.gold) return this.showMsg("You can obtain a gold coin reward"), this.emit(y.Common.AudioEvent.playEffect, m.AudioClip.btnCancel), void this.showUI(m.UI.addGold);
                    this.playClickBtn(), this.emit(y.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "gameData.asset.gold",
                        value: this.gold,
                        mode: "-",
                        save: !1
                    });
                    var t = d.getPlayerData().unlockTileContents;
                    switch (t[this.tilePos.x] || (t[this.tilePos.x] = {}), t[this.tilePos.x][this.tilePos.y] || (t[this.tilePos.x][this.tilePos.y] = {
                        type: this.unlockType
                    }), this.unlockType) {
                        case m.TileContentType.unlockRoom:
                            this.emit(y.LevelEvent.unlockRoom, this.tilePos), t[this.tilePos.x][this.tilePos.y].unlockRoomRemainGold = 0, this.emit(y.LevelEvent.checkRenWu, {
                                type: m.RenWuType.unlockRoom
                            });
                            break;
                        case m.TileContentType.soldier:
                            this.emit(y.LevelEvent.unlockSoldier, this.tilePos), t[this.tilePos.x][this.tilePos.y].soldierRemainGold = 0, t[this.tilePos.x][this.tilePos.y].soldierLv = 1, this.emit(y.LevelEvent.checkRenWu, {
                                type: m.RenWuType.buySolider
                            });
                            break;
                        case m.TileContentType.weapon:
                    }
                    d.saveData(), this.hideUI(m.UI.unlockTile), this.emit(y.Common.AudioEvent.playEffect, m.AudioClip.lvUp)
                }, s.onBtnClose = function() {
                    this.emit(y.Common.AudioEvent.playEffect, m.AudioClip.btnCancel), this.hideUI(m.UI.unlockTile)
                }, e
            }(f)).prototype, "title", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = e(R.prototype, "img", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = e(R.prototype, "imgRoom", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = e(R.prototype, "imgSoldier", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = e(R.prototype, "priceLabel", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = e(R.prototype, "btnNormal", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = R)) || U));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./yyComponent.ts", "./CameraRotateCtrl.ts", "./CameraZoomCtrl.ts", "./PlayerJoyCtrl.ts"], (function(t) {
    "use strict";
    var e, r, n, o, i, a, l, s, c, u, C, m;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized
        }, function(t) {
            i = t.cclegacy, a = t._decorator, l = t.Widget
        }, function(t) {
            s = t.EventType
        }, function(t) {
            c = t.default
        }, function(t) {
            u = t.CameraRotateCtrl
        }, function(t) {
            C = t.CameraZoomCtrl
        }, function(t) {
            m = t.PlayerJoyCtrl
        }],
        execute: function() {
            var y, f, h, p, v, b, d, J;
            i._RF.push({}, "40bcc/o5rtGMK5aKqyYxbY2", "LevelController", void 0);
            var g = a,
                E = g.ccclass,
                R = g.property;
            t("default", (y = R(m), f = R(u), h = R(C), E((b = e((v = function(t) {
                function e() {
                    for (var e, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(i)) || this, n(o(e), "playerJoyCtrl", b, o(e)), n(o(e), "cameraRotateCtrl", d, o(e)), n(o(e), "cameraZoomCtrl", J, o(e)), e
                }
                r(e, t);
                var i = e.prototype;
                return i.init = function() {
                    this.initCameraRotate(), this.initCameraZoomCtrl(), this.initPlayerJoyCtrl(), this.onEvents()
                }, i.onEvents = function() {
                    this.on(s.Common.CtrlEvent.ctrlStart, this.setEnable, this), this.on(s.Common.CtrlEvent.ctrlEnd, this.setDisable, this)
                }, i.reset = function() {
                    this.resetCameraRotate(), this.resetCameraZoomCtrl(), this.resetPlayerJoyCtrl()
                }, i.show = function() {
                    this.node.active = !0, this.emit(s.Common.DirectorEvent.resumeLevel)
                }, i.setEnable = function() {
                    this.reset(), this.node.active = !0, this.node.getComponent(l).updateAlignment(), this.playerJoyCtrl.enableTouchNode()
                }, i.setDisable = function() {
                    this.reset(), this.node.active = !1
                }, i.initPlayerJoyCtrl = function() {
                    this.playerJoyCtrl.init()
                }, i.resetPlayerJoyCtrl = function() {
                    this.playerJoyCtrl.reset()
                }, i.initCameraRotate = function() {}, i.resetCameraRotate = function() {}, i.initCameraZoomCtrl = function() {}, i.resetCameraZoomCtrl = function() {}, e
            }(c)).prototype, "playerJoyCtrl", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = e(v.prototype, "cameraRotateCtrl", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = e(v.prototype, "cameraZoomCtrl", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), p = v)) || p));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelInfoUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts", "./GlobalPool.ts", "./RenWuList.ts"], (function(e) {
    "use strict";
    var t, i, n, a, o, s, h, r, l, c, u, p, d, v, b, y, f, g, m, L, I, B, D, w;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.defineProperty, a = e.assertThisInitialized, o = e.initializerDefineProperty
        }, function(e) {
            s = e.cclegacy, h = e._decorator, r = e.Node, l = e.Label, c = e.UITransform, u = e.Prefab, p = e.v3, d = e.Sprite, v = e.v4
        }, function(e) {
            b = e.GlobalEnum
        }, function(e) {
            y = e.default
        }, function(e) {
            f = e.EventType
        }, function(e) {
            g = e.default
        }, function(e) {
            m = e.default, L = e.ActionMngType
        }, function(e) {
            I = e.default
        }, function(e) {
            B = e.default
        }, function(e) {
            D = e.default
        }, function(e) {
            w = e.RenWuList
        }],
        execute: function() {
            var E, S, G, F, T, M, C, W, P, k, Y, A, x, U, R, z, H, N, K, X, J, O, _, j, q, Q, V, Z, $, ee, te, ie, ne, ae, oe, se, he, re, le, ce, ue, pe, de, ve, be, ye, fe, ge, me, Le, Ie, Be, De, we, Ee, Se, Ge, Fe, Te, Me;
            s._RF.push({}, "4393ap5mKNKOIGdbWF8MM3a", "LevelInfoUI", void 0);
            var Ce = h.ccclass,
                We = h.property;
            e("default", (E = We(r), S = We(l), G = We(l), F = We(r), T = We(l), M = We(l), C = We(l), W = We(c), P = We(r), k = We(l), Y = We(r), A = We(l), x = We([r]), U = We(r), R = We([r]), z = We(r), H = We(r), N = We(r), K = We(l), X = We(r), J = We(r), O = We(r), _ = We(r), j = We(u), q = We(r), Q = We(u), V = We(r), Z = We(r), $ = We(r), Ce((ie = t((te = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), h = 0; h < i; h++) s[h] = arguments[h];
                    return t = e.call.apply(e, [this].concat(s)) || this, n(a(t), "uiType", b.UI.levelInfo), o(a(t), "sceneInfo", ie, a(t)), o(a(t), "sceneLabel", ne, a(t)), o(a(t), "levelLabel", ae, a(t)), o(a(t), "levelProgressInfo", oe, a(t)), o(a(t), "curLevelLabel", se, a(t)), o(a(t), "nextLevelLabel", he, a(t)), o(a(t), "enemyCount", re, a(t)), o(a(t), "levelProgressBar", le, a(t)), n(a(t), "levelProgressTotalLen", 384), o(a(t), "totalGoldLayer", ce, a(t)), o(a(t), "totalGoldLabel", ue, a(t)), o(a(t), "killedEnemyLayer", pe, a(t)), o(a(t), "killedEnemyLabel", de, a(t)), o(a(t), "lobbyBtns", ve, a(t)), o(a(t), "btnStartFight", be, a(t)), o(a(t), "startFightBtns", ye, a(t)), o(a(t), "btnWuJin", fe, a(t)), o(a(t), "btnEnterNewScene", ge, a(t)), n(a(t), "nextScene", void 0), o(a(t), "btnFixGeBan", me, a(t)), o(a(t), "fixPriceLabel", Le, a(t)), n(a(t), "fixGold", 0), o(a(t), "btnFightWeaponShop", Ie, a(t)), o(a(t), "btnChangeWeapon", Be, a(t)), n(a(t), "btnChangeWeaponPos", void 0), n(a(t), "weaponType", void 0), o(a(t), "heiYeMask", De, a(t)), n(a(t), "pass", void 0), n(a(t), "heiYeHandle", void 0), n(a(t), "heiYeData", void 0), n(a(t), "heiYeRadius", void 0), o(a(t), "geBanDirIconLayer", we, a(t)), o(a(t), "prefabGeBanDirIcon", Ee, a(t)), n(a(t), "geBanDirIcons", void 0), o(a(t), "enemyDirIconLayer", Se, a(t)), o(a(t), "prefabEnemyDirIcon", Ge, a(t)), n(a(t), "enemyDirIcons", void 0), n(a(t), "enemyEnterIcons", void 0), o(a(t), "tipFightAnim", Fe, a(t)), n(a(t), "showTipRemainTime", 15), o(a(t), "renWuList", Te, a(t)), o(a(t), "btnDeskIcon", Me, a(t)), t
                }
                i(t, e);
                var s = t.prototype;
                return s.initSub = function() {
                    this.initEnemyDirIcons(), this.initEnemyEnterIcons(), this.initFightBtns(), this.initGeBanDirIcons(), this.initHeiYe(), this.initKilledEnemy(), this.initLobbyBtns(), this.initTipFightAnim(), this.initTotalGoldBar()
                }, s.resetSub = function() {
                    this.resetEnemyDirIcons(), this.resetEnemyEnterIcons(), this.resetFightBtns(), this.resetGeBanDirIcons(), this.resetHeiYe(), this.resetKilledEnemy(), this.resetLobbyBtns(), this.resetTipFightAnim(), this.resetTotalGoldBar()
                }, s.onEvents = function() {
                    this.on(f.LevelEvent.enterLobby, this.onEnterLobby, this), this.on(f.LevelEvent.showBtnChangeWeapon, this.showBtnWeapon, this), this.on(f.LevelEvent.hideBtnChangeWeapon, this.hideBtnWeapon, this), this.on(f.LevelEvent.showLevelProgress, this.showLevelProgress, this), this.on(f.LevelEvent.updateLevelProgress, this.updateLevelProgress, this), this.on(f.LevelEvent.showBtnXiuFu, this.onShowBtnXiuFu, this), this.on(f.LevelEvent.hideBtnXiuFu, this.hideBtnXiuFu, this), this.on(f.LevelEvent.showTeach, this.onShowTeach, this), this.on(f.LevelEvent.enterNewSceneFinish, this.onEnterNewSceneFinish, this), this.on(f.LevelEvent.showGeBanDirIcon, this.showGeBanDirIcon, this), this.on(f.LevelEvent.hideGeBanDirIcon, this.hideGeBanDirIcon, this), this.on(f.LevelEvent.showEnemyDirIcon, this.showEnemyDirIcon, this), this.on(f.LevelEvent.hideEnemyDirIcon, this.hideEnemyDirIcon, this), this.on(f.LevelEvent.showEnemyEnterDir, this.showEnemyEnterDir, this), this.on(f.LevelEvent.hideEnemyEnterDir, this.hideEnemyEnterDir, this), this.on(f.LevelEvent.showMaskLevelScene, this.showLevelSceneMask, this), this.on(f.LevelEvent.showMaskLevelSceneOpen, this.showLevelSceneMaskOpen, this), this.on(f.LevelEvent.startHeiYe, this.onStartHeiYe, this), this.on(f.LevelEvent.startWuJin, this.onStartWuJin, this), this.on(f.LevelEvent.showTotalGoldBar, this.showTotalGoldBar, this), this.on(f.LevelEvent.updateTotalGold, this.updateTotalGold, this), this.on(f.LevelEvent.disideLeaveScene, this.onDecideLeaveScene, this), this.on(f.Common.PlayerDataEvent.playerDataChanged, this.onGoldChange, this)
                }, s.setData = function(e) {}, s.show = function(e) {
                    this.reset(), this.checkDeskIcon(), g.getData("firstEnterGame") ? (this.hideLobbyBtns(), this.hideBtnWeapon(), this.hideSceneInfo(), this.hideBtnXiuFu(), this.hideBtnFightWeaponShop(), this.btnEnterNewScene.active = !1, this.hideRenWu()) : (this.showLobbyBtns(), this.showBtnFightWeaponShop(), this.showSceneInfo(), this.checkNewScene(), this.showRenWu(), this.emit(f.LevelEvent.getGeBanXiuFuState)), this.hideLevelProgress(), this.hideTotalGoldBar(), this.emit(f.Common.AudioEvent.playBGM, b.AudioClip.BGMLobby), g.getData("teached") && this.showUI(b.UI.levelTeachUI)
                }, s.checkNewScene = function() {
                    this.showFightBtns();
                    var e = y.GameRule.sceneLvConfig;
                    g.getPlayerData().curLevel > e[g.getPlayerData().curSceneIndex].maxLv ? (this.btnStartFight.active = !1, this.btnEnterNewScene.active = !0) : (this.btnStartFight.active = !0, this.btnEnterNewScene.active = !1)
                }, s.showSceneInfo = function() {
                    this.sceneInfo.active = !0;
                    var e = g.getPlayerData().curSceneIndex;
                    this.sceneLabel.string = (e + 1).toString();
                    var t = y.GameRule.sceneLvConfig[e],
                        i = g.getPlayerData().curLevel;
                    i > t.maxLv && (i = t.maxLv), this.levelLabel.string = i + "/" + t.maxLv
                }, s.hideSceneInfo = function() {
                    this.sceneInfo.active = !1
                }, s.showLevelProgress = function(e, t) {
                    this.levelProgressInfo.active = !0;
                    var i = g.getPlayerData().curLevel;
                    switch (B.get(b.myGlobalDataType.fightMode)) {
                        case b.FightMode.heiYe:
                            i -= 1, this.curLevelLabel.string = "LV " + i + " Night mode";
                            break;
                        case b.FightMode.normal:
                        default:
                            this.curLevelLabel.string = "LV " + i;
                    }
                    this.updateLevelProgress(e, t)
                }, s.hideLevelProgress = function() {
                    this.levelProgressInfo.active = !1
                }, s.updateLevelProgress = function(e, t) {
                    if (this.updateKilledEnemy(e), this.levelProgressInfo.active) {
                        var i = e / t,
                            n = this.levelProgressTotalLen * i;
                        n < 1 && (n = 1), this.levelProgressBar.width = n, this.enemyCount.string = e + "/" + t
                    }
                }, s.initTotalGoldBar = function() {
                    this.totalGoldLayer.active = !1
                }, s.resetTotalGoldBar = function() {
                    this.totalGoldLayer.active = !1
                }, s.showTotalGoldBar = function() {
                    this.totalGoldLayer.active = !0, this.totalGoldLabel.string = "0", this.showKilledEnemy()
                }, s.hideTotalGoldBar = function() {
                    this.totalGoldLayer.active = !1, this.hideKilledEnemy()
                }, s.updateTotalGold = function(e) {
                    this.totalGoldLayer.active && (this.totalGoldLabel.string = e.toString())
                }, s.initKilledEnemy = function() {
                    this.killedEnemyLayer.active = !1
                }, s.resetKilledEnemy = function() {
                    this.killedEnemyLayer.active = !1
                }, s.showKilledEnemy = function() {
                    this.killedEnemyLayer.active = !0, this.killedEnemyLabel.string = "0"
                }, s.hideKilledEnemy = function() {
                    this.killedEnemyLayer.active = !1
                }, s.updateKilledEnemy = function(e) {
                    this.killedEnemyLabel.string = e.toString()
                }, s.initLobbyBtns = function() {}, s.resetLobbyBtns = function() {}, s.showLobbyBtns = function() {
                    for (var e = this.lobbyBtns.length - 1; e >= 0; --e) this.lobbyBtns[e].active = !0
                }, s.showFightBtns = function() {
                    for (var e = this.startFightBtns.length - 1; e >= 0; --e) this.startFightBtns[e].active = !0;
                    var t = g.getPlayerData().curSceneIndex;
                    this.btnWuJin.active = t > 0
                }, s.hideFightBtns = function() {
                    for (var e = this.startFightBtns.length - 1; e >= 0; --e) this.startFightBtns[e].active = !1
                }, s.hideLobbyBtns = function() {
                    for (var e = this.lobbyBtns.length - 1; e >= 0; --e) this.lobbyBtns[e].active = !1;
                    this.btnWuJin.active = !1
                }, s.hideBtnXiuFu = function() {
                    this.btnFixGeBan.active = !1
                }, s.initFightBtns = function() {
                    this.btnChangeWeaponPos = p(), this.hideBtnWeapon()
                }, s.resetFightBtns = function() {
                    this.hideBtnWeapon()
                }, s.showBtnWeapon = function(e) {
                    this.weaponType = e, this.btnChangeWeapon.active = !0
                }, s.hideBtnWeapon = function() {
                    this.btnChangeWeapon.active = !1
                }, s.showBtnFightWeaponShop = function() {
                    this.btnFightWeaponShop.active = !0
                }, s.hideBtnFightWeaponShop = function() {
                    this.btnFightWeaponShop.active = !1
                }, s.initHeiYe = function() {
                    var e = this.heiYeMask.getComponent(d).getMaterial(0);
                    this.pass = e.passes[0], this.heiYeHandle = this.pass.getHandle("screenRate"), this.heiYeData = v(1, 1, .25, 0);
                    var t = B.get(b.Common.GlobalDataType.canvasTransform);
                    this.heiYeData.x = t.width / t.height, this.heiYeMask.active = !1, this.heiYeRadius = .5 * this.heiYeData.x
                }, s.resetHeiYe = function() {
                    this.heiYeMask.active = !1
                }, s.applyHeiYeMat = function() {
                    this.pass.setUniform(this.heiYeHandle, this.heiYeData)
                }, s.showHeiYe = function() {
                    this.heiYeMask.active = !0, this.heiYeData.y = 1, this.applyHeiYeMat();
                    var e = m.thread(this.threadHeiYe, this);
                    m.getMng(L.UI).runAction(this, e)
                }, s.threadHeiYe = function(e) {
                    this.heiYeData.y -= .5 * e, this.heiYeData.y <= this.heiYeRadius && (this.heiYeData.y = this.heiYeRadius, m.getMng(L.UI).stopAllActions(this)), this.applyHeiYeMat()
                }, s.showLevelSceneMask = function() {
                    this.heiYeMask.active = !0, this.heiYeData.y = 1, this.applyHeiYeMat();
                    var e = m.thread(this.threadMaskLevelScene, this);
                    m.getMng(L.UI).runAction(this, e)
                }, s.threadMaskLevelScene = function(e) {
                    this.heiYeData.y -= .25 * e, this.heiYeData.y <= 0 && (this.heiYeData.y = 0, m.getMng(L.UI).stopAllActions(this), this.emit(f.LevelEvent.levelSceneMaskClosed), this.showLevelSceneMaskOpen()), this.applyHeiYeMat()
                }, s.showLevelSceneMaskOpen = function() {
                    var e = m.thread(this.threadMaskLevelSceneOpen, this);
                    m.getMng(L.UI).runAction(this, e)
                }, s.threadMaskLevelSceneOpen = function(e) {
                    this.heiYeData.y += e, this.heiYeData.y >= 1 ? (this.heiYeData.y = 1, this.heiYeMask.active = !1, m.getMng(L.UI).stopAllActions(this)) : this.applyHeiYeMat()
                }, s.initGeBanDirIcons = function() {
                    this.geBanDirIcons = {}, D.createPool(this.prefabGeBanDirIcon.data.name, this.prefabGeBanDirIcon)
                }, s.resetGeBanDirIcons = function() {
                    D.putAllChildren(this.geBanDirIconLayer, !0), this.geBanDirIcons = {}
                }, s.showGeBanDirIcon = function(e) {
                    var t = this.geBanDirIcons[e.id];
                    t || (t = D.get(this.prefabGeBanDirIcon.data.name), this.geBanDirIconLayer.addChild(t), this.geBanDirIcons[e.id] = t), this.updateDirIcon(t, e.uiPos)
                }, s.hideGeBanDirIcon = function(e) {
                    var t = this.geBanDirIcons[e.id];
                    t && (D.put(t), this.geBanDirIcons[e.id] = null)
                }, s.initEnemyDirIcons = function() {
                    this.enemyDirIcons = {}, D.createPool(this.prefabEnemyDirIcon.data.name, this.prefabEnemyDirIcon)
                }, s.resetEnemyDirIcons = function() {
                    D.putAllChildren(this.enemyDirIconLayer, !0), this.enemyDirIcons = {}
                }, s.showEnemyDirIcon = function(e) {
                    var t = this.enemyDirIcons[e.id];
                    t || (t = D.get(this.prefabEnemyDirIcon.data.name), this.enemyDirIconLayer.addChild(t), this.enemyDirIcons[e.id] = t), t.active = !0, this.updateDirIcon(t, e.uiPos)
                }, s.hideEnemyDirIcon = function(e) {
                    var t = this.enemyDirIcons[e.id];
                    t && (t.active = !1)
                }, s.initEnemyEnterIcons = function() {
                    this.enemyEnterIcons = {}
                }, s.resetEnemyEnterIcons = function() {
                    this.enemyEnterIcons = {}
                }, s.showEnemyEnterDir = function(e) {
                    var t = this.enemyEnterIcons[e.id];
                    t || (t = D.get(this.prefabEnemyDirIcon.data.name), this.enemyDirIconLayer.addChild(t), this.enemyEnterIcons[e.id] = t), t.active = !0, this.updateDirIcon(t, e.uiPos), this.emit(f.LevelEvent.teachBreakIcon, t)
                }, s.hideEnemyEnterDir = function(e) {
                    var t = this.enemyEnterIcons[e.id];
                    t && (t.active = !1)
                }, s.updateDirIcon = function(e, t) {
                    var i = .5 * Math.atan2(t.y, t.x);
                    e.setRotation(0, 0, Math.sin(i), Math.cos(i)), i = -i, e.children[0].setRotation(0, 0, Math.sin(i), Math.cos(i));
                    var n = .5 * B.get(b.Common.GlobalDataType.canvasTransform).height,
                        a = t.x,
                        o = t.y;
                    Math.abs(a) > 375 ? (o *= Math.abs(375 / a), Math.abs(o) > n ? a *= Math.abs(n / o) : (a > 0 && (a = 375), a < 0 && (a = -375))) : (a *= Math.abs(n / o), o > 0 && (o = n), o < 0 && (o = -n)), e.setPosition(a, o, 0)
                }, s.initTipFightAnim = function() {
                    this.tipFightAnim.active = !1, this.showTipRemainTime = 15
                }, s.resetTipFightAnim = function() {
                    this.tipFightAnim.active = !1, this.showTipRemainTime = 15
                }, s.showTipFightAnim = function() {
                    g.getData("teachedTile").indexOf(b.TileContentType.soldier) >= 0 && (this.tipFightAnim.active = !0)
                }, s.hideTipFightAnim = function() {
                    this.tipFightAnim.active = !1
                }, s.onGoldChange = function() {
                    if (this.btnStartFight.active || this.btnEnterNewScene.active) {
                        for (var e = !1, t = B.get(b.myGlobalDataType.tileCollers), i = t.length - 1; i >= 0; --i)
                            if (t[i].canGrow) {
                                e = !0;
                                break
                            }
                        this.showTipRemainTime = e ? 15 : 6
                    }
                }, s.updateTipFightAnim = function(e) {
                    this.tipFightAnim.active || (this.showTipRemainTime -= e, this.showTipRemainTime < 0 && this.showTipFightAnim())
                }, s.showRenWu = function() {
                    0 == g.getPlayerData().fixRenWuPtr ? B.get(b.myGlobalDataType.allRooms).length >= 4 ? this.renWuList.active = !0 : this.renWuList.active = !1 : this.renWuList.active = !0
                }, s.hideRenWu = function() {
                    this.renWuList.active = !1
                }, s.update = function(e) {
                    B.get(b.myGlobalDataType.isLevelFighting) || this.updateTipFightAnim(e)
                }, s.onEnterLobby = function() {
                    this.resetEnemyDirIcons(), this.resetGeBanDirIcons(), this.resetHeiYe(), this.hideLevelProgress(), this.hideTotalGoldBar(), this.hideBtnWeapon(), this.showLobbyBtns(), this.showBtnFightWeaponShop(), this.showSceneInfo(), this.checkNewScene(), this.onGoldChange(), this.emit(f.Common.AudioEvent.playBGM, b.AudioClip.BGMLobby), this.showRenWu()
                }, s.onShowBtnXiuFu = function(e) {
                    0 == e ? this.btnFixGeBan.active = !1 : (this.btnFixGeBan.active = !0, this.fixGold = 20 * e, this.fixPriceLabel.string = this.fixGold.toString())
                }, s.onShowTeach = function() {
                    this.showUI(b.UI.levelTeachUI, {
                        btnStart: this.btnStartFight
                    })
                }, s.onEnterNewSceneFinish = function() {
                    this.hideLevelProgress(), this.hideTotalGoldBar(), this.showBtnFightWeaponShop(), this.hideBtnWeapon(), this.showLobbyBtns(), this.showSceneInfo(), this.showFightBtns(), this.btnEnterNewScene.active = !1, this.hideTipFightAnim(), this.showTipRemainTime = 15, this.showRenWu(), this.renWuList.getComponent(w).setNextRenWu()
                }, s.onBtnEnterNewScene = function() {
                    this.playClickBtn(), this.showUI(b.UI.leaveSceneTip)
                }, s.onDecideLeaveScene = function() {
                    this.hideBtnFightWeaponShop(), this.hideLobbyBtns(), this.hideBtnWeapon(), this.hideSceneInfo(), this.hideBtnXiuFu(), this.hideRenWu(), this.btnEnterNewScene.active = !1, g.getPlayerData().unlockTileContents = {}, g.getPlayerData().geBans = {};
                    var e = y.GameRule.sceneLvConfig;
                    g.getPlayerData().curSceneIndex < e.length - 1 ? g.getPlayerData().curSceneIndex += 1 : g.getPlayerData().curSceneIndex = 1, this.emit(f.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "gameData.asset.gold",
                        value: 100,
                        mode: "=",
                        emit: !0,
                        save: !0
                    }), this.emit(f.LevelEvent.levelCurScene), this.hideTipFightAnim(), this.showTipRemainTime = 150
                }, s.onBtnStartFight = function() {
                    this.playClickBtn(), this.hideLobbyUI(), this.btnEnterNewScene.active = !1, B.set(b.myGlobalDataType.fightMode, b.FightMode.normal), this.emit(f.LevelEvent.startFight), this.emit(f.Common.AudioEvent.playBGM, b.AudioClip.BGMLevel)
                }, s.hideLobbyUI = function() {
                    this.resetEnemyDirIcons(), this.resetGeBanDirIcons(), this.hideBtnWeapon(), this.hideLobbyBtns(), this.hideSceneInfo(), this.hideBtnXiuFu(), this.hideTipFightAnim(), this.hideRenWu()
                }, s.onStartHeiYe = function() {
                    this.hideLobbyUI(), this.btnEnterNewScene.active = !1, this.showHeiYe(), B.set(b.myGlobalDataType.fightMode, b.FightMode.heiYe), this.emit(f.LevelEvent.startFight), this.emit(f.Common.AudioEvent.playBGM, b.AudioClip.BGMLevel)
                }, s.onStartWuJin = function() {
                    this.hideLobbyUI(), this.btnEnterNewScene.active = !1, B.set(b.myGlobalDataType.fightMode, b.FightMode.wuJin), this.emit(f.LevelEvent.startFight), this.emit(f.Common.AudioEvent.playBGM, b.AudioClip.BGMLevel)
                }, s.onBtnWeaponUI = function() {
                    this.playClickBtn(), this.showUI(b.UI.weaponShop)
                }, s.onBtnChangeWeapon = function() {
                    this.playClickBtn(), g.getPlayerData().weapons.curId = this.weaponType, this.emit(f.LevelEvent.changedWeapon, this.weaponType), this.hideBtnWeapon()
                }, s.onBtnXiuFu = function() {
                    if (g.getPlayerData().asset.gold < this.fixGold) return this.playClickCancel(), this.showMsg("Not enough gold coins~"), void this.showUI(b.UI.addGold);
                    this.playClickBtn(), this.emit(f.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "gameData.asset.gold",
                        value: this.fixGold,
                        mode: "-",
                        save: !0,
                        emit: !0
                    }), this.emit(f.LevelEvent.autoXiuFuGeBan), this.btnFixGeBan.active = !1
                }, s.onBtnSetting = function() {
                    this.playClickBtn(), this.showUI(b.UI.settingUI)
                }, s.onBtnYinSi = function() {
                    this.playClickBtn(), this.showUI(b.UI.PrivacyPolicyUI, !1)
                }, s.onBtnMoreGame = function() {
                    this.playClickBtn(), this.emit(f.Common.HeyGameSDK.showMoreGame)
                }, s.checkDeskIcon = function() {
                    var e = this;
                    this.emit(f.Common.SDKEvent.getTableIconState, (function(t) {
                        t ? e.btnDeskIcon.setScale(1, 1, 1) : e.btnDeskIcon.setScale(0, 0, 0)
                    }))
                }, s.onBtnAddDeskIcon = function() {
                    var e = this;
                    0 != this.btnDeskIcon.scale.x && (this.playClickBtn(), this.emit(f.Common.SDKEvent.addTableIcon, (function() {
                        e.btnDeskIcon.setScale(0, 0, 0)
                    })))
                }, t
            }(I)).prototype, "sceneInfo", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(te.prototype, "sceneLabel", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(te.prototype, "levelLabel", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(te.prototype, "levelProgressInfo", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(te.prototype, "curLevelLabel", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(te.prototype, "nextLevelLabel", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(te.prototype, "enemyCount", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(te.prototype, "levelProgressBar", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(te.prototype, "totalGoldLayer", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(te.prototype, "totalGoldLabel", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(te.prototype, "killedEnemyLayer", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t(te.prototype, "killedEnemyLabel", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ve = t(te.prototype, "lobbyBtns", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), be = t(te.prototype, "btnStartFight", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ye = t(te.prototype, "startFightBtns", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), fe = t(te.prototype, "btnWuJin", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(te.prototype, "btnEnterNewScene", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), me = t(te.prototype, "btnFixGeBan", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Le = t(te.prototype, "fixPriceLabel", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ie = t(te.prototype, "btnFightWeaponShop", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Be = t(te.prototype, "btnChangeWeapon", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), De = t(te.prototype, "heiYeMask", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), we = t(te.prototype, "geBanDirIconLayer", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ee = t(te.prototype, "prefabGeBanDirIcon", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = t(te.prototype, "enemyDirIconLayer", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ge = t(te.prototype, "prefabEnemyDirIcon", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Fe = t(te.prototype, "tipFightAnim", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(te.prototype, "renWuList", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(te.prototype, "btnDeskIcon", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = te)) || ee));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerSkillCtrl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(t) {
    "use strict";
    var r, e, l, n;
    return {
        setters: [function(t) {
            r = t.inheritsLoose
        }, function(t) {
            e = t.cclegacy, l = t._decorator
        }, function(t) {
            n = t.default
        }],
        execute: function() {
            var i;
            e._RF.push({}, "4a1afukq1hH8ZCdTWbSfXpr", "PlayerSkillCtrl", void 0);
            var c = l.ccclass;
            l.property, t("PlayerSkillCtrl", c("PlayerSkillCtrl")(i = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return r(e, t), e
            }(n)) || i);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SettingUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./yyComponent.ts"], (function(e) {
    "use strict";
    var i, t, a, n, c, o, r, s, h, u, k;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor, t = e.inheritsLoose, a = e.initializerDefineProperty, n = e.assertThisInitialized
        }, function(e) {
            c = e.cclegacy, o = e._decorator, r = e.Node
        }, function(e) {
            s = e.GlobalEnum
        }, function(e) {
            h = e.default
        }, function(e) {
            u = e.EventType
        }, function(e) {
            k = e.default
        }],
        execute: function() {
            var l, v, C, f, d, p, m, b, M;
            c._RF.push({}, "4ab2b+4gQVGkqQM/IIKTQzd", "SettingUI", void 0);
            var g = o.ccclass,
                y = o.property;
            e("SettingUI", (l = g("SettingUI"), v = y(r), C = y(r), f = y(r), l((m = i((p = function(e) {
                function i() {
                    for (var i, t = arguments.length, c = new Array(t), o = 0; o < t; o++) c[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(c)) || this, a(n(i), "audioCheckMask", m, n(i)), a(n(i), "vibrateCheckMask", b, n(i)), a(n(i), "cameraShakeCheckMask", M, n(i)), i
                }
                t(i, e);
                var c = i.prototype;
                return c.show = function() {
                    this.node.active = !0, this.audioCheckMask.active = h.audioConfig.bgm, this.vibrateCheckMask.active = h.driveConfig.vibrate, this.cameraShakeCheckMask.active = h.driveConfig.cameraShake
                }, c.hide = function() {
                    var e = {
                        bgm: this.audioCheckMask.active,
                        effect: this.audioCheckMask.active
                    };
                    h.audioConfig = e, h.driveConfig = {
                        vibrate: this.vibrateCheckMask.active,
                        cameraShake: this.cameraShakeCheckMask.active
                    }, this.node.active = !1
                }, c.onAudio = function() {
                    var e = !this.audioCheckMask.active;
                    this.audioCheckMask.active = e, e ? (this.playClickBtn(), this.emit(u.Common.AudioEvent.playBGM, s.AudioClip.BGMLobby)) : this.emit(u.Common.AudioEvent.stopBGM)
                }, c.onVibrate = function() {
                    this.audioCheckMask.active && this.playClickBtn();
                    var e = !this.vibrateCheckMask.active;
                    this.vibrateCheckMask.active = e
                }, c.onCameraShake = function() {
                    this.audioCheckMask.active && this.playClickBtn();
                    var e = !this.cameraShakeCheckMask.active;
                    this.cameraShakeCheckMask.active = e
                }, c.onBtnClose = function() {
                    this.audioCheckMask.active && this.emit(u.Common.AudioEvent.playEffect, s.AudioClip.btnCancel), this.hideUI(s.UI.settingUI)
                }, i
            }(k)).prototype, "audioCheckMask", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = i(p.prototype, "vibrateCheckMask", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = i(p.prototype, "cameraShakeCheckMask", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = p)) || d));
            c._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RenWuList.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(e) {
    "use strict";
    var t, a, n, i, r, o, u, s, l, c, d, h, p, y, W, f, v, R;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, a = e.inheritsLoose, n = e.initializerDefineProperty, i = e.assertThisInitialized, r = e.defineProperty
        }, function(e) {
            o = e.cclegacy, u = e._decorator, s = e.Node, l = e.Label, c = e.v3
        }, function(e) {
            d = e.GlobalEnum
        }, function(e) {
            h = e.default
        }, function(e) {
            p = e.EventType
        }, function(e) {
            y = e.default
        }, function(e) {
            W = e.default, f = e.ActionMngType
        }, function(e) {
            v = e.default
        }, function(e) {
            R = e.default
        }],
        execute: function() {
            var g, w, T, D, b, m, A, k, P, N, L;
            o._RF.push({}, "5116fkurDRKqJJCrc4izm6j", "RenWuList", void 0);
            var x = u.ccclass,
                G = u.property;
            e("RenWuList", (g = x("RenWuList"), w = G(s), T = G(l), D = G(l), b = G(s), g((k = t((A = function(e) {
                function t() {
                    for (var t, a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(i(t), "btnAward", k, i(t)), n(i(t), "goldLabel", P, i(t)), r(i(t), "award", 0), n(i(t), "content", N, i(t)), n(i(t), "tipNode", L, i(t)), r(i(t), "action", void 0), t
                }
                a(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.init(), this.hideBtnAward();
                    var e = y.getPlayerData().renWuData;
                    if (e.finished) this.setTxt(), this.showBtnAward(e.awardGold);
                    else {
                        var t = y.getPlayerData().fixRenWuPtr;
                        if (0 == t) {
                            var a = h.renWuData[t];
                            this.setRenWuData(a.type, a.target, a.awardGold, a.data)
                        } else this.setTxt()
                    }
                }, o.initSub = function() {
                    this.initTipNode()
                }, o.onEvents = function() {
                    this.on(p.LevelEvent.checkRenWu, this.onCheckRenWu, this), this.once(p.LevelEvent.tipRenWuBtnAward, this.onTipBtnAward, this), this.on(p.LevelEvent.showRenWu, this.showRenWu, this), y.getPlayerData().teachedRenWuAward || this.once(p.LevelEvent.unlockSoldier, this.onUnlockSolider, this)
                }, o.showRenWu = function() {
                    this.node.active = !0
                }, o.showBtnAward = function(e) {
                    this.btnAward.active = !0, this.award = e, this.goldLabel.string = this.award.toString(), this.showTipNode(), y.getPlayerData().renWuData.finished = !0, y.saveData()
                }, o.hideBtnAward = function() {
                    this.btnAward.active = !1, this.hideTipNode()
                }, o.setTxt = function() {
                    var e, t = y.getPlayerData().renWuData;
                    switch (t.type) {
                        case d.RenWuType.buySolider:
                            e = "Hire 1 soldier";
                            break;
                        case d.RenWuType.growAttribute:
                            e = "upgrade" + h.getAttributeCHName(t.data) + "arrive" + t.target + "level";
                            break;
                        case d.RenWuType.growSolider:
                            e = "upgrade soldier" + t.target + "order";
                            break;
                        case d.RenWuType.unlockRoom:
                            e = "Unlock 1 new room at a time";
                            break;
                        case d.RenWuType.unlockWeapon:
                            e = "Unlock new weapons";
                            break;
                        case d.RenWuType.winHeiYe:
                            e = "Pass once in dark mode";
                            break;
                        case d.RenWuType.winLevel:
                            e = "Pass the level once";
                            break;
                        case d.RenWuType.winWuJin:
                            e = "Endless Mode Kill" + t.target + "enemies";
                            break;
                        case d.RenWuType.xiuFuGeBan:
                            e = "Repair the damaged door once"
                    }
                    this.content.string = e
                }, o.onCheckRenWu = function(e) {
                    var t = y.getPlayerData().renWuData;
                    if (t.type == e.type) switch (e.type) {
                        case d.RenWuType.growAttribute:
                            this.onGrowAttribute(e);
                            break;
                        case d.RenWuType.winWuJin:
                            this.onWuJinWin(e);
                            break;
                        default:
                            this.showBtnAward(t.awardGold)
                    }
                }, o.onGrowAttribute = function(e) {
                    var t = y.getPlayerData().renWuData;
                    t.type == e.type && t.data === e.data && (y.getPlayerData().attributeLv[h.convertAttributeName(e.data)] >= t.target && this.showBtnAward(t.awardGold))
                }, o.onWuJinWin = function(e) {
                    var t = y.getPlayerData().renWuData;
                    t.target <= e.data && this.showBtnAward(t.awardGold)
                }, o.initTipNode = function() {
                    this.tipNode.active = !1;
                    var e = .4,
                        t = 1.4,
                        a = W.scaleTo(e, t, t, t);
                    e = 1.5, t = 1;
                    var n = W.scaleTo(e, t, t, t);
                    n.easing(W.easeElasticOut(.3));
                    var i = W.delay(.8),
                        r = 20;
                    e = .2;
                    var o = W.rotateTo2d(e, r);
                    r = -10;
                    var u = W.rotateTo2d(e, r),
                        s = W.rotateTo2d(1, 0);
                    s.easing(W.easeElasticOut(.4));
                    var l = W.delay(.5),
                        c = W.sequence(l, a, n, i, o, u, s);
                    this.action = W.repeatForever(c)
                }, o.showTipNode = function() {
                    this.tipNode.active || (this.tipNode.active = !0, this.tipNode.setScale(1, 1, 1), this.tipNode.eulerAngles = c(0, 0, 0), W.getMng(f.UI).runAction(this.tipNode, this.action))
                }, o.hideTipNode = function() {
                    this.tipNode.active && (this.tipNode.active = !1, W.getMng(f.UI).stopAllActions(this.tipNode))
                }, o.setNextRenWu = function() {
                    this.hideBtnAward();
                    var e = y.getPlayerData().renWuData,
                        t = y.getPlayerData().fixRenWuPtr,
                        a = h.renWuData;
                    if (t < a.length) {
                        var n = a[t];
                        this.setRenWuData(n.type, n.target, n.awardGold, n.data)
                    } else switch (e.type) {
                        case d.RenWuType.unlockRoom:
                            this.setUnlockRoomNextRenWu();
                            break;
                        case d.RenWuType.buySolider:
                            this.setBuySoliderNextRenWu();
                            break;
                        default:
                            this.setUnlockRoomNextRenWu()
                    }
                }, o.setUnlockRoomNextRenWu = function() {
                    var e = R.get(d.myGlobalDataType.tileCollers);
                    if (e.length > 0)
                        for (var t = e.length - 1; t >= 0; --t)
                            if (this.checkTileRenWu(e[t])) return;
                    this.setFinishNextRenWu()
                }, o.checkTileRenWu = function(e) {
                    if (!e.canGrow) return !1;
                    var t = Math.random(),
                        a = y.getPlayerData().renWuData,
                        n = 3 * y.getPlayerData().curLevel;
                    if (e.name.indexOf("TileShop") >= 0) {
                        if (a.type == d.RenWuType.growAttribute && (e.shopType == a.data || t < .5)) return !1;
                        var i = y.getPlayerData().attributeLv,
                            r = h.getAttributeMaxLv(e.shopType, 1),
                            o = h.convertAttributeName(e.shopType);
                        if (i[o] < r) {
                            var u = i[o] + 1;
                            u > r && (u = r);
                            var s = h.getGrowPrice(e.shopType, u);
                            return n > .3 * s && (n = Math.round(.3 * s)), this.setRenWuData(d.RenWuType.growAttribute, u, n, e.shopType), !0
                        }
                    } else if (e.name.indexOf("TileSoldier") >= 0) {
                        if (a.type != d.RenWuType.buySolider && e.canGrow) return this.setRenWuData(d.RenWuType.buySolider, 1, n), !0
                    } else if (e.name.indexOf("TileWeapon") >= 0) {
                        if (a.type != d.RenWuType.unlockWeapon && !e.unlocked) return this.setRenWuData(d.RenWuType.unlockWeapon, 1, n), !0
                    } else if (e.name.indexOf("Soldier") >= 0 && a.type != d.RenWuType.growSolider && e.canGrow && t < .5) return this.setRenWuData(d.RenWuType.growSolider, 1, n), !0;
                    return !1
                }, o.setBuySoliderNextRenWu = function() {
                    var e = 5 * y.getPlayerData().curLevel;
                    this.setRenWuData(d.RenWuType.growSolider, 1, e)
                }, o.setFinishNextRenWu = function() {
                    var e = Math.random(),
                        t = R.get(d.myGlobalDataType.remainUnlockRoomCount),
                        a = y.getPlayerData().curLevel > 15,
                        n = t <= 0 && y.getPlayerData().curSceneIndex > 0,
                        i = 5 * y.getPlayerData().curLevel;
                    if (e < .5 && t > 0) this.setRenWuData(d.RenWuType.unlockRoom, 1, i);
                    else if (e < .6) this.setRenWuData(d.RenWuType.winLevel, 1, i);
                    else if (e < .8) a ? this.setRenWuData(d.RenWuType.winHeiYe, 1, i) : this.setRenWuData(d.RenWuType.winLevel, 1, i);
                    else if (n) {
                        var r = y.getPlayerData().renWuWuJinTarget;
                        y.getPlayerData().renWuWuJinTarget += 50, this.setRenWuData(d.RenWuType.winWuJin, r, i)
                    } else this.setRenWuData(d.RenWuType.winLevel, 1, i)
                }, o.setRenWuData = function(e, t, a, n) {
                    var i = y.getPlayerData().renWuData;
                    i.type = e, i.target = t, i.awardGold = a, i.data = n, i.finished = !1, this.setTxt()
                }, o.onBtnAward = function() {
                    var e = this;
                    this.playClickBtn(), this.hideBtnAward();
                    var t = y.getPlayerData().renWuData.awardGold,
                        a = this.goldLabel.node.getWorldPosition();
                    R.get(d.Common.GlobalDataType.canvasTransform).convertToNodeSpaceAR(a, a), this.emit(p.Common.UIEvent.playGoldAnim, {
                        startPos: a,
                        cb: function() {
                            e.emit(p.Common.PlayerDataEvent.updatePlayerData, {
                                attribute: "gameData.asset.gold",
                                value: t,
                                mode: "+",
                                emit: !0,
                                save: !1
                            }), y.getPlayerData().fixRenWuPtr += 1, e.showNextRenWu(), y.saveData()
                        },
                        gold: t
                    })
                }, o.showNextRenWu = function() {
                    var e = this;
                    this.setNextRenWu(), this.node.active = !1, setTimeout((function() {
                        e.node.active = !0
                    }), 0)
                }, o.onTipBtnAward = function() {
                    var e = this;
                    this.showTouchMask(1, 2), setTimeout((function() {
                        e.hideTouchMask();
                        var t = e.btnAward;
                        e.emit(p.LevelEvent.teachAwardRenWu, t)
                    }), 1200)
                }, o.onUnlockSolider = function() {
                    var e = this;
                    this.showTouchMask(), setTimeout((function() {
                        e.hideTouchMask();
                        var t = e.btnAward;
                        e.emit(p.LevelEvent.teachAwardRenWu, t), y.getPlayerData().teachedRenWuAward = !0
                    }), 200)
                }, t
            }(v)).prototype, "btnAward", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(A.prototype, "goldLabel", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(A.prototype, "content", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(A.prototype, "tipNode", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = A)) || m));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LoseUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var i, e, n, o, s, a, r, l, h, p, u, c, d, v, f, g, m;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized, s = t.defineProperty, a = t.createClass
        }, function(t) {
            r = t.cclegacy, l = t._decorator, h = t.Label, p = t.Node
        }, function(t) {
            u = t.GlobalEnum
        }, function(t) {
            c = t.EventType
        }, function(t) {
            d = t.default
        }, function(t) {
            v = t.default, f = t.ActionMngType
        }, function(t) {
            g = t.default
        }, function(t) {
            m = t.default
        }],
        execute: function() {
            var b, y, T, S, E, P, D, L, w, A;
            r._RF.push({}, "5b60bp7DWBFX6KWPG1rZbqO", "LoseUI", void 0);
            var B = l.ccclass,
                M = l.property;
            t("default", (b = M(h), y = M(h), T = M([p]), S = M(p), B((D = i((P = function(t) {
                function i() {
                    for (var i, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(a)) || this, n(o(i), "goldLabel", D, o(i)), s(o(i), "gold", 0), n(o(i), "tip", L, o(i)), s(o(i), "tips", void 0), s(o(i), "tipPtr", void 0), s(o(i), "tipAction", void 0), s(o(i), "tipStr", void 0), s(o(i), "tipStrPtr", void 0), s(o(i), "tipStrElapsed", void 0), n(o(i), "btns", w, o(i)), n(o(i), "btnNormal", A, o(i)), i
                }
                e(i, t);
                var r = i.prototype;
                return r.initSub = function() {
                    this.initTip()
                }, r.resetSub = function() {
                    this.resetTip()
                }, r.setData = function(t) {
                    this.gold = t.gold, this.goldLabel.string = "+" + t.gold.toString();
                    var i = (new Date).getTime() - t.startFightTime;
                    i = Math.round(.001 * i)
                }, r.show = function(t) {
                    var i = this;
                    this.reset(), this.node.active = !0, void 0 !== t && this.setData(t), this.hideBtns(), this.tip.string = "", setTimeout((function() {
                        i.showTip()
                    }), 1500);
                    var e, n = m.get(u.myGlobalDataType.fightMode),
                        o = d.getPlayerData().curLevel - 1;
                    switch (n) {
                        case u.FightMode.heiYe:
                            e = u.TongJiEvent.heiYeLose
                    }
                    e && this.emit(c.Common.ALDEvent.sendEvent, {
                        eventName: e,
                        data: {
                            lv: o
                        }
                    }), this.randomBtnPosition(),window["fbSDK"].showInterstitialAD();
                }, r.initTip = function() {
                    this.tips = ["Go to the store and try \nupgrading your attack power", "Choose the right weapon", "Lead the enemy near the mercenaries，\nYou'll be much easier~", "Reasonable travel route，\nHas a significant impact on the war situation", "Night Mode and Endless Mode，\nYou can obtain many rewards", "Keep unlocking the room，\nIncrease living space"], this.tipPtr = 0;
                    var t = v.delay(2),
                        i = 1,
                        e = v.scaleTo(1, i, i, i);
                    e.easing(v.easeElasticOut(.3)), i = 1.2;
                    var n = v.scaleTo(.1, i, i, i),
                        o = v.sequence(t, n, e);
                    this.tipAction = v.repeatForever(o)
                }, r.resetTip = function() {
                    v.getMng(f.UI).stopAllActions(this.tip.node)
                }, r.showTip = function() {
                    var t = this.tips[this.tipPtr];
                    this.tipPtr += 1, this.tipPtr >= this.tips.length && (this.tipPtr = 0), this.showTipStr(t)
                }, r.showTipStr = function(t) {
                    this.tip.node.active = !0, this.tip.node.setScale(1, 1, 1), this.tip.string = "", this.tipStr = t, this.tipStrPtr = 0, this.tipStrElapsed = 0;
                    var i = v.thread(this.updateTipLabel, this);
                    v.getMng(f.UI).runAction(this, i)
                }, r.updateTipLabel = function(t) {
                    var i = this;
                    if (this.tipStrElapsed += t, !(this.tipStrElapsed < .05)) {
                        this.tipStrElapsed = 0, this.tipStrPtr += 1;
                        var e = this.tipStr.substr(0, this.tipStrPtr);
                        this.tip.string = e, this.tipStrPtr >= this.tipStr.length && (v.getMng(f.UI).stopAllActions(this), v.getMng(f.UI).runAction(this.tip.node, this.tipAction), setTimeout((function() {
                            i.showBtns()
                        }), 500))
                    }
                }, r.showBtns = function() {
                    for (var t = this.btns.length - 1; t >= 0; --t) this.btns[t].setScale(1, 1, 1)
                }, r.hideBtns = function() {
                    for (var t = this.btns.length - 1; t >= 0; --t) this.btns[t].setScale(0, 0, 0)
                }, r.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, r.onBtnVideo = function() {
                    var t = this;
                    this.playClickBtn(),
                        //     this.emit(c.Common.SDKEvent.showVideo, {
                        //     success: function() {
                        //         t.addGold(3 * t.gold, t.enterLobby.bind(t)), t.sendEventTongJi()
                        //     }
                        // })
                        window["fbSDK"].showRewardVideoAd(function () {
                            t.addGold(3 * t.gold, t.enterLobby.bind(t)), t.sendEventTongJi()
                        },function () {

                        })

                }, r.sendEventTongJi = function() {
                    var t;
                    switch (m.get(u.myGlobalDataType.fightMode)) {
                        case u.FightMode.heiYe:
                            t = "黑夜";
                            break;
                        case u.FightMode.normal:
                            t = "普通";
                            break;
                        case u.FightMode.wuJin:
                            t = "无尽"
                    }
                    this.emit(c.Common.ALDEvent.sendEvent, {
                        eventName: u.TongJiEvent.loseVideoAward,
                        data: {
                            lv: d.getPlayerData().curLevel - 1,
                            mode: t
                        }
                    })
                }, r.onContinueGame = function() {
                    this.playClickBtn(), this.emit(c.Common.AudioEvent.playClickBtn), this.addGold(this.gold, this.enterLobby.bind(this))
                }, r.enterLobby = function() {
                    this.hideUI(u.UI.loseUI), this.emit(c.LevelEvent.enterLobby)
                }, r.addGold = function(t, i) {
                    var e = this;
                    this.emit(c.Common.UIEvent.playGoldAnim, {
                        cb: function() {
                            e.emit(c.Common.PlayerDataEvent.updatePlayerData, {
                                attribute: "gameData.asset.gold",
                                value: t,
                                mode: "+",
                                emit: !0,
                                save: !1
                            }), i && i()
                        },
                        gold: t
                    })
                }, r.onBtnMoreGame = function() {
                    this.emit(c.Common.SDKEvent.showAppBox)
                }, r.onBtnShare = function() {
                    this.emit(c.Common.SDKEvent.shareToFriends)
                }, a(i, [{
                    key: "uiType",
                    get: function() {
                        return u.UI.loseUI
                    }
                }]), i
            }(g)).prototype, "goldLabel", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = i(P.prototype, "tip", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = i(P.prototype, "btns", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), A = i(P.prototype, "btnNormal", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = P)) || E));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameLobby.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./SettingCmp.ts"], (function(t) {
    "use strict";
    var e, n, i, o, r, a, s, c, u, l, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.defineProperty, o = t.assertThisInitialized, r = t.initializerDefineProperty
        }, function(t) {
            a = t.cclegacy, s = t._decorator
        }, function(t) {
            c = t.GlobalEnum
        }, function(t) {
            u = t.EventType
        }, function(t) {
            l = t.default
        }, function(t) {
            p = t.SettingCmp
        }],
        execute: function() {
            var m, f, h, y;
            a._RF.push({}, "69ef72xiQlAL4AzHd4vX34+", "GameLobby", void 0);
            var v = s,
                b = v.ccclass,
                d = v.property;
            t("default", (m = d(p), b((y = e((h = function(t) {
                function e() {
                    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(a)) || this, i(o(e), "uiType", c.UI.lobby), r(o(e), "setCmp", y, o(e)), e
                }
                n(e, t);
                var a = e.prototype;
                return a.onBtnStartGame = function() {
                    this.emit(u.Common.AudioEvent.playClickBtn), this.startGame()
                }, a.startGame = function() {
                    var t = this;
                    this.showTouchMask(), this.emit(u.Common.DirectorEvent.enterLevel), setTimeout((function() {
                        t.hideTouchMask()
                    }), 100)
                }, a.onShowSetting = function() {
                    this.playClickBtn(), this.setCmp.onShowSetting()
                }, e
            }(l)).prototype, "setCmp", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = h)) || f));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EnemyInfoUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts", "./GameData.ts"], (function(e) {
    "use strict";
    var t, n, i, o, a, s, r, l, u, c, y, d, f, m, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.defineProperty, o = e.assertThisInitialized, a = e.initializerDefineProperty
        }, function(e) {
            s = e.cclegacy, r = e._decorator, l = e.Node, u = e.Label, c = e.instantiate
        }, function(e) {
            y = e.GlobalEnum
        }, function(e) {
            d = e.EventType
        }, function(e) {
            f = e.default
        }, function(e) {
            m = e.default
        }, function(e) {
            h = e.default
        }, function(e) {
            p = e.default
        }],
        execute: function() {
            var v, I, b, T, D, g, E, L, w;
            s._RF.push({}, "6cad8JFLsREm5YSWrOCxqq3", "EnemyInfoUI", void 0);
            var C = r.ccclass,
                U = r.property;
            e("EnemyInfoUI", (v = C("EnemyInfoUI"), I = U(l), b = U(u), T = U([l]), v((E = t((g = function(e) {
                function t() {
                    for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(s)) || this, i(o(t), "enemyTypeId", void 0), a(o(t), "modelLayer", E, o(t)), i(o(t), "model", void 0), i(o(t), "meshType", void 0), a(o(t), "info", L, o(t)), a(o(t), "btns", w, o(t)), t
                }
                n(t, e);
                var s = t.prototype;
                return s.setData = function(e) {
                    this.enemyTypeId = e.id, this.showModel(), this.setInfo()
                }, s.show = function(e) {
                    this.node.active = !0, this.setData(e), this.emit(d.Common.DirectorEvent.pauseLevel)
                }, s.hide = function() {
                    this.node.active = !1, this.emit(d.Common.DirectorEvent.resumeLevel)
                }, s.initModel = function() {}, s.resetModel = function() {}, s.showModel = function() {
                    var e = this,
                        t = p.getData(y.GameDataType.enemyData, this.enemyTypeId);
                    if (this.meshType == t.meshType) this.model.reuse({
                        id: this.enemyTypeId
                    });
                    else {
                        this.model && (this.model.node.destroy(), this.model = null), this.meshType = t.meshType;
                        var n = "UI" + t.meshType;
                        m.loadBundleRes("LevelScene", "SinglePrefab/" + n, (function(t) {
                            var n = c(t);
                            e.modelLayer.addChild(n), e.model = n.getComponent(h), e.model.init({
                                id: e.enemyTypeId
                            })
                        }))
                    }
                }, s.setInfo = function() {
                    var e = p.getData(y.GameDataType.enemyData, this.enemyTypeId);
                    this.info.string = "New enemies：" + e.info
                }, s.hideBtns = function() {
                    for (var e = this.btns.length - 1; e >= 0; --e) this.btns[e].active = !1
                }, s.showBtns = function() {
                    for (var e = this.btns.length - 1; e >= 0; --e) this.btns[e].active = !0
                }, s.onBtnClose = function() {
                    this.playClickBtn(), f.getPlayerData().enemyTip.push(this.enemyTypeId), f.saveData(), this.hideUI(y.UI.enemyInfoUI)
                }, t
            }(h)).prototype, "modelLayer", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(g.prototype, "info", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(g.prototype, "btns", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), D = g)) || D));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerJoyCtrl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, o, i, h, s, n, y, c, r, a, u, d, l, C, K, v, f, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, o = t.inheritsLoose, i = t.initializerDefineProperty, h = t.assertThisInitialized, s = t.defineProperty
        }, function(t) {
            n = t.cclegacy, y = t._decorator, c = t.Node, r = t.systemEvent, a = t.SystemEventType, u = t.Widget, d = t.v3, l = t.UITransform, C = t.v2, K = t.macro
        }, function(t) {
            v = t.GlobalEnum
        }, function(t) {
            f = t.EventType
        }, function(t) {
            p = t.default
        }],
        execute: function() {
            var k, S, m, P, g, D, E;
            n._RF.push({}, "6f107C1SlxBIo7BgXgJXW4v", "PlayerJoyCtrl", void 0);
            var T = y.ccclass,
                j = y.property;
            t("PlayerJoyCtrl", (k = T("PlayerJoyCtrl"), S = j(c), m = j(c), k((D = e((g = function(t) {
                function e() {
                    for (var e, o = arguments.length, n = new Array(o), y = 0; y < o; y++) n[y] = arguments[y];
                    return e = t.call.apply(t, [this].concat(n)) || this, i(h(e), "joyBg", D, h(e)), i(h(e), "joyCenter", E, h(e)), s(h(e), "joyOriginalPos", void 0), s(h(e), "joyRadius", void 0), s(h(e), "joyRadiusSqr", void 0), s(h(e), "touched", !1), s(h(e), "touchStartPos", void 0), s(h(e), "cachePos", void 0), s(h(e), "cachePosPre", void 0), s(h(e), "touchId", void 0), s(h(e), "keyCenter", void 0), s(h(e), "keyDir", void 0), s(h(e), "keyMap", {}), s(h(e), "touchStayKey", void 0), e
                }
                o(e, t);
                var n = e.prototype;
                return n.init = function() {
                    this.initJoy(), this.initKeyState(), this.initTouchState(), r.on(a.KEY_DOWN, this.onKeyDown, this), r.on(a.KEY_UP, this.onKeyUp, this)
                }, n.reset = function() {
                    this.resetJoy(), this.resetKeyState(), this.resetTouchState()
                }, n.enableTouchNode = function() {
                    var t = this.node.getComponent(u);
                    t && t.updateAlignment(), this.hideJoy()
                }, n.initJoy = function() {
                    this.joyOriginalPos = d(), this.joyBg.getPosition(this.joyOriginalPos);
                    var t = this.joyBg.getComponent(l);
                    this.joyRadius = .5 * t.width * this.joyBg.scale.x, this.joyRadiusSqr = this.joyRadius * this.joyRadius, this.joyBg.active = !1
                }, n.resetJoy = function() {
                    this.joyBg.active = !1
                }, n.showJoy = function() {
                    this.joyBg.active = !0, this.joyBg.setPosition(this.touchStartPos.x, this.touchStartPos.y, 0), this.joyCenter.setPosition(0, 0, 0)
                }, n.updateJoyPosition = function() {
                    var t = this.cachePos.x - this.touchStartPos.x,
                        e = this.cachePos.y - this.touchStartPos.y,
                        o = t * t + e * e;
                    o > this.joyRadiusSqr && (t *= o = this.joyRadius / Math.sqrt(o), e *= o), this.joyCenter.setPosition(t, e, 0)
                }, n.hideJoy = function() {
                    this.joyBg.active = !1
                }, n.initTouchState = function() {
                    this.touched = !1, this.touchId = null, this.touchStartPos = C(), this.cachePos = C(), this.cachePosPre = C(), this.node.on(c.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(c.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(c.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(c.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }, n.resetTouchState = function() {
                    this.touched = !1, this.touchId = null
                }, n.onTouchStart = function(t) {
                    this.touched || (this.touched = !0, this.touchId = t.getID(), t.getUILocation(this.touchStartPos), this.emit(f.Common.CtrlEvent.touchStart, this.touchStartPos), this.showJoy())
                }, n.onTouchMove = function(t) {
                    this.touched && this.touchId == t.getID() && (t.getDelta(this.cachePosPre), this.cachePosPre.lengthSqr() < 9 || (t.getUILocation(this.cachePos), this.emit(f.Common.CtrlEvent.touchMove, this.touchStartPos, this.cachePos), this.updateJoyPosition()))
                }, n.onTouchEnd = function(t) {
                    this.touched && this.touchId == t.getID() && (this.touched = !1, this.touchId = null, t.getUILocation(this.cachePos), this.emit(f.Common.CtrlEvent.touchEnd, this.touchStartPos, this.cachePos), this.hideJoy())
                }, n.initKeyState = function() {
                    for (var t in this.keyCenter = C(), this.keyDir = C(), this.touchStayKey = {}, this.keyMap = {}, this.keyMap[K.KEY.a] = v.KeyCode.left, this.keyMap[K.KEY.s] = v.KeyCode.down, this.keyMap[K.KEY.d] = v.KeyCode.right, this.keyMap[K.KEY.w] = v.KeyCode.up, this.keyMap) {
                        var e = this.keyMap[t];
                        this.touchStayKey[e] = {
                            keyCode: e,
                            touched: !1
                        }
                    }
                }, n.resetKeyState = function() {
                    for (var t in this.keyDir.x = this.keyDir.y = 0, this.touchStayKey) this.touchStayKey[t].touched = !1
                }, n.onKeyDown = function(t) {
                    var e = this.keyMap[t.keyCode];
                    if (e) switch (e) {
                        case v.KeyCode.left:
                        case v.KeyCode.right:
                        case v.KeyCode.down:
                        case v.KeyCode.up:
                            this.touchStayKey[e].touched = !0, this.onKeyDirDown(e);
                            break;
                        default:
                            this.touchStayKey[e].touched || (this.touchStayKey[e].touched = !0, this.emit(f.Common.CtrlEvent.btnTouchStart, e))
                    }
                }, n.onKeyUp = function(t) {
                    var e = this.keyMap[t.keyCode];
                    if (e) switch (e) {
                        case v.KeyCode.left:
                        case v.KeyCode.right:
                        case v.KeyCode.down:
                        case v.KeyCode.up:
                            this.touchStayKey[e].touched = !1, this.onKeyDirUp(e);
                            break;
                        default:
                            this.touchStayKey[e].touched = !1, this.emit(f.Common.CtrlEvent.btnTouchEnd, e)
                    }
                }, n.onKeyDirDown = function(t) {
                    switch (t) {
                        case v.KeyCode.left:
                            this.keyDir.x = -1;
                            break;
                        case v.KeyCode.right:
                            this.keyDir.x = 1;
                            break;
                        case v.KeyCode.down:
                            this.keyDir.y = -1;
                            break;
                        case v.KeyCode.up:
                            this.keyDir.y = 1;
                            break;
                        default:
                            return
                    }
                    this.emit(f.Common.CtrlEvent.touchMove, this.keyCenter, this.keyDir)
                }, n.onKeyDirUp = function(t) {
                    switch (t) {
                        case v.KeyCode.left:
                        case v.KeyCode.right:
                            this.keyDir.x = 0, this.touchStayKey[v.KeyCode.left].touched && (this.keyDir.x = -1), this.touchStayKey[v.KeyCode.right].touched && (this.keyDir.x = 1);
                            break;
                        case v.KeyCode.down:
                        case v.KeyCode.up:
                            this.keyDir.y = 0, this.touchStayKey[v.KeyCode.down].touched && (this.keyDir.y = -1), this.touchStayKey[v.KeyCode.up].touched && (this.keyDir.y = 1);
                            break;
                        default:
                            return
                    }
                    0 == this.keyDir.x && 0 == this.keyDir.y ? this.emit(f.Common.CtrlEvent.touchEnd, this.keyCenter, this.keyDir) : this.emit(f.Common.CtrlEvent.touchMove, this.keyCenter, this.keyDir)
                }, n.updateKeyStay = function(t) {
                    for (var e in this.touchStayKey) this.touchStayKey[e].touched && this.emit(f.Common.CtrlEvent.btnTouchStay, this.touchStayKey[e].keyCode)
                }, n.updateKeyDir = function(t) {
                    0 == this.keyDir.x && 0 == this.keyDir.y || this.emit(f.Common.CtrlEvent.touchMove, this.keyCenter, this.keyDir)
                }, e
            }(p)).prototype, "joyBg", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = e(g.prototype, "joyCenter", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = g)) || P));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AttributeShopUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, i, r, a, n, o, u, l, s, h, p, c, v, b, m, d, g, y;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, r = t.defineProperty, a = t.assertThisInitialized, n = t.initializerDefineProperty
        }, function(t) {
            o = t.cclegacy, u = t._decorator, l = t.Sprite, s = t.SpriteFrame, h = t.Label, p = t.Node, c = t.v2
        }, function(t) {
            v = t.GlobalEnum
        }, function(t) {
            b = t.default
        }, function(t) {
            m = t.EventType
        }, function(t) {
            d = t.default
        }, function(t) {
            g = t.default
        }, function(t) {
            y = t.default
        }],
        execute: function() {
            var L, f, T, w, S, A, P, x, B, V, C, D, N, E, z, G, k, I, U, R, F, M, _, H, W, Y, J, q, j, K, O, Q, X, Z, $;
            o._RF.push({}, "738bayJrMNM+qBbH6DmYqbC", "AttributeShopUI", void 0);
            var tt = u.ccclass,
                et = u.property;
            t("AttributeShopUI", (L = tt("AttributeShopUI"), f = et(l), T = et(s), w = et(s), S = et(l), A = et(h), P = et(p), x = et(h), B = et(p), V = et(h), C = et(h), D = et(p), N = et(h), E = et(h), z = et(p), G = et(p), k = et(p), L((R = e((U = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(o)) || this, r(a(e), "tilePos", c()), r(a(e), "attributeType", void 0), r(a(e), "attributeName", void 0), n(a(e), "imgBg", R, a(e)), n(a(e), "imgBgBlue", F, a(e)), n(a(e), "imgBgYellow", M, a(e)), n(a(e), "img", _, a(e)), n(a(e), "curLvLabel", H, a(e)), n(a(e), "lvArrow", W, a(e)), n(a(e), "nextLvLabel", Y, a(e)), r(a(e), "curLv", void 0), r(a(e), "maxLv", void 0), n(a(e), "attributeValueLayer", J, a(e)), n(a(e), "attributeNameLabel", q, a(e)), n(a(e), "curValue", j, a(e)), n(a(e), "valueArrow", K, a(e)), n(a(e), "addValue", O, a(e)), n(a(e), "price", Q, a(e)), r(a(e), "gold", void 0), n(a(e), "btnGrowLv", X, a(e)), n(a(e), "maxLvTip", Z, a(e)), n(a(e), "btnNormal", $, a(e)), e
                }
                i(e, t);
                var o = e.prototype;
                return o.setData = function(t) {
                    t.tilePos && this.tilePos.set(t.tilePos), t.gold && (this.gold = t.gold), this.setAttributeType(t.type), this.setAttributeLv(t.maxLv, t.curLv), this.showAttributeValue(), this.showPrice(), this.updateBtnGrowLv()
                }, o.show = function(t) {
                    this.node.active = !0, this.reset(), t && this.setData(t), this.randomBtnPosition()
                }, o.setAttributeType = function(t) {
                    var e = this;
                    this.attributeType = t, this.attributeName = b.convertAttributeName(t);
                    var i = "icon" + this.attributeName;
                    g.loadBundleRes("UI", "Image/AttributeShop/" + i + "/spriteFrame", (function(t) {
                        e.img.spriteFrame = t
                    })), t == v.ShopType.soldier ? this.imgBg.spriteFrame = this.imgBgYellow : this.imgBg.spriteFrame = this.imgBgBlue
                }, o.setAttributeLv = function(t, e) {
                    if (void 0 === e) {
                        var i = d.getPlayerData().attributeLv;
                        this.curLv = i[this.attributeName]
                    } else this.curLv = e;
                    var r = this.curLv;
                    this.maxLv = b.getAttributeMaxLv(this.attributeType, t), this.curLv >= this.maxLv ? (this.curLvLabel.string = "Lv" + r, this.nextLvLabel.node.active = !1, this.lvArrow.active = !1) : (this.curLvLabel.string = "Lv" + r, this.nextLvLabel.node.active = !0, this.nextLvLabel.string = "Lv" + (r + 1), this.lvArrow.active = !0)
                }, o.showAttributeValue = function() {
                    switch (this.attributeType) {
                        case v.ShopType.geBan:
                        case v.ShopType.soldier:
                            return void(this.attributeValueLayer.active = !1);
                        case v.ShopType.atk:
                            this.attributeNameLabel.string = "atk";
                            break;
                        case v.ShopType.atkSpeed:
                            this.attributeNameLabel.string = "atkSpeed";
                            break;
                        case v.ShopType.hp:
                            this.attributeNameLabel.string = "hp";
                            break;
                        case v.ShopType.moveSpeed:
                            this.attributeNameLabel.string = "moveSpeed"
                    }
                    this.attributeValueLayer.active = !0, this.setAttributeValue()
                }, o.hideAttributeValue = function() {
                    this.attributeValueLayer.active = !1
                }, o.setAttributeValue = function() {
                    var t = this.attributeType == v.ShopType.atkSpeed || this.attributeType == v.ShopType.moveSpeed,
                        e = this.curLv,
                        i = b.GameRule.attributeConfig[this.attributeName],
                        r = b.getAttributeConfig(e),
                        a = r.addValue;
                    t ? this.attributeType == v.ShopType.atkSpeed ? this.curValue.string = 100 + 10 * (e - 1) + "%" : this.curValue.string = 100 + 5 * (e - 1) + "%" : this.curValue.string = (i.value + r.addValue).toString(), this.curLv < this.maxLv ? (this.valueArrow.active = !0, this.addValue.node.active = !0, e += 1, t ? this.attributeType == v.ShopType.atkSpeed ? this.addValue.string = "10%" : this.addValue.string = "5%" : (r = b.getAttributeConfig(e), this.addValue.string = (r.addValue - a).toString())) : (this.valueArrow.active = !1, this.addValue.node.active = !1)
                }, o.showPrice = function() {
                    this.curLv >= this.maxLv ? this.price.node.parent.active = !1 : (this.price.node.parent.active = !0, this.setPrice())
                }, o.setPrice = function() {
                    var t = b.getGrowPrice(this.attributeType, this.curLv);
                    this.attributeType == v.ShopType.soldier ? this.price.string = (this.gold + t).toString() : (this.gold = t, this.price.string = this.gold.toString())
                }, o.updateBtnGrowLv = function() {
                    this.curLv >= this.maxLv ? (this.btnGrowLv.active = !1, this.maxLvTip.active = !0) : (this.btnGrowLv.active = !0, this.maxLvTip.active = !1)
                }, o.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, o.onBtnGrow = function() {
                    var t = this.gold;
                    if (this.attributeType == v.ShopType.soldier && (t = this.gold + b.getGrowPrice(this.attributeType, this.curLv)), d.getPlayerData().asset.gold < t) return this.emit(m.Common.AudioEvent.playEffect, v.AudioClip.btnCancel), this.showMsg("Not enough gold coins~"), void this.showUI(v.UI.addGold);
                    if (this.playClickBtn(), this.emit(m.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "gameData.asset.gold",
                        value: t,
                        mode: "-",
                        save: !1,
                        emit: !0
                    }), this.attributeType == v.ShopType.soldier) {
                        var e = d.getPlayerData().unlockTileContents;
                        e[this.tilePos.x] || (e[this.tilePos.x] = {}), e[this.tilePos.x][this.tilePos.y] || (e[this.tilePos.x][this.tilePos.y] = {}), e[this.tilePos.x][this.tilePos.y].soldierLv = this.curLv + 1, this.emit(m.LevelEvent.growSoldier, this.tilePos)
                    } else this.emit(m.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "gameData.attributeLv." + this.attributeName,
                        value: 1,
                        mode: "+",
                        save: !1
                    });
                    this.showMsg("Upgrade succeeded"), this.emit(m.Common.AudioEvent.playEffect, v.AudioClip.lvUp), this.emit(m.LevelEvent.attributeGrowed, {
                        type: this.attributeType,
                        lv: this.curLv + 1
                    }), this.attributeType == v.ShopType.soldier ? this.setData({
                        type: this.attributeType,
                        maxLv: this.maxLv,
                        curLv: this.curLv + 1,
                        gold: this.gold
                    }) : this.setData({
                        type: this.attributeType,
                        maxLv: this.maxLv,
                        curLv: this.curLv + 1
                    }), d.saveData(), this.attributeType == v.ShopType.soldier ? (this.emit(m.Common.ALDEvent.sendEvent, {
                        eventName: v.TongJiEvent.growSoldier,
                        data: {
                            lv: d.getPlayerData().curLevel,
                            attributeLv: this.curLv
                        }
                    }), this.emit(m.LevelEvent.checkRenWu, {
                        type: v.RenWuType.growSolider
                    })) : (this.emit(m.Common.ALDEvent.sendEvent, {
                        eventName: v.TongJiEvent.growAttribute,
                        data: {
                            lv: d.getPlayerData().curLevel,
                            attributeLv: this.curLv,
                            type: this.getCHName(this.attributeType)
                        }
                    }), this.emit(m.LevelEvent.checkRenWu, {
                        type: v.RenWuType.growAttribute,
                        data: this.attributeType
                    }))
                }, o.getCHName = function(t) {
                    switch (t) {
                        case v.ShopType.atk:
                            return "atk";
                        case v.ShopType.atkSpeed:
                            return "atkSpeed";
                        case v.ShopType.geBan:
                            return "geBan";
                        case v.ShopType.hp:
                            return "hp";
                        case v.ShopType.moveSpeed:
                            return "moveSpeed";
                        case v.ShopType.soldier:
                            return "soldier";
                        default:
                            return "其他"
                    }
                }, o.onBtnClose = function() {
                    this.emit(m.Common.AudioEvent.playEffect, v.AudioClip.btnCancel), this.hideUI(v.UI.attributeShop)
                }, e
            }(y)).prototype, "imgBg", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = e(U.prototype, "imgBgBlue", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = e(U.prototype, "imgBgYellow", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = e(U.prototype, "img", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = e(U.prototype, "curLvLabel", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = e(U.prototype, "lvArrow", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = e(U.prototype, "nextLvLabel", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = e(U.prototype, "attributeValueLayer", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = e(U.prototype, "attributeNameLabel", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = e(U.prototype, "curValue", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = e(U.prototype, "valueArrow", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = e(U.prototype, "addValue", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Q = e(U.prototype, "price", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = e(U.prototype, "btnGrowLv", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = e(U.prototype, "maxLvTip", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = e(U.prototype, "btnNormal", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = U)) || I));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelTeachUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts", "./UIManager.ts", "./MaskAnim.ts"], (function(t) {
    "use strict";
    var i, e, n, o, s, a, h, r, l, c, u, p, m, T, g, v, d, f, y, b, A, w, S;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized, s = t.initializerDefineProperty
        }, function(t) {
            a = t.cclegacy, h = t._decorator, r = t.Node, l = t.Label, c = t.Sprite, u = t.UITransform, p = t.v3
        }, function(t) {
            m = t.GlobalEnum
        }, function(t) {
            T = t.EventType
        }, function(t) {
            g = t.default
        }, function(t) {
            v = t.default
        }, function(t) {
            d = t.default, f = t.ActionMngType
        }, function(t) {
            y = t.default
        }, function(t) {
            b = t.default
        }, function(t) {
            A = t.default
        }, function(t) {
            w = t.MaskAnim, S = t.MaskShapeType
        }],
        execute: function() {
            var k, C, F, x, L, B, E, M, D, I, N, P, U, R, G, W, z, H, X;
            a._RF.push({}, "7a47bN1QQRHerXbbzOF/PoF", "LevelTeachUI", void 0);
            var O = h.ccclass,
                _ = h.property;
            t("LevelTeachUI", (k = O("LevelTeachUI"), C = _(r), F = _(w), x = _(r), L = _(l), B = _(r), E = _(r), M = _(c), D = _(l), k((P = i((N = function(t) {
                function i() {
                    for (var i, e = arguments.length, a = new Array(e), h = 0; h < e; h++) a[h] = arguments[h];
                    return i = t.call.apply(t, [this].concat(a)) || this, n(o(i), "tips", void 0), n(o(i), "tileType", void 0), n(o(i), "tipStartAgain", !0), s(o(i), "finger", P, o(i)), s(o(i), "maskAnim", U, o(i)), s(o(i), "moveAnim", R, o(i)), n(o(i), "animAutoHide", !1), s(o(i), "tipLabel", G, o(i)), n(o(i), "tipStr", void 0), n(o(i), "tipStrPtr", void 0), n(o(i), "tipStrElapsed", void 0), n(o(i), "tipFinishShowBtn", !1), s(o(i), "btnNext", W, o(i)), n(o(i), "nextCb", void 0), s(o(i), "dialog", z, o(i)), s(o(i), "dialogTitle", H, o(i)), s(o(i), "dialogContent", X, o(i)), i
                }
                e(i, t);
                var a = i.prototype;
                return a.initSub = function() {
                    this.initBtnNext(), this.initDialog(), this.initFinger(), this.initMaskAnim(), this.initTileTips(), this.initTipLabel()
                }, a.resetSub = function() {
                    this.resetBtnNext(), this.resetDialog(), this.resetFinger(), this.resetMaskAnim(), this.resetTipLabel()
                }, a.onEvents = function() {
                    console.log("教学UI监听事件"), this.once(T.LevelEvent.teachHeiYe, this.onTipHeiYe, this), this.once(T.LevelEvent.teachWuJin, this.onTipWuJin, this), this.once(T.LevelEvent.teachAwardRenWu, this.onTeachAwardRenWu, this)
                }, a.hideTeachUI = function() {
                    this.hideFinger()
                }, a.show = function(t) {
                    this.node.active = !0, this.reset(), t ? this.showTeachStartFight(t.btnStart) : (this.on(T.LevelEvent.enterLobby, this.showMoveAnim, this), this.showMoveAnim())
                }, a.showTeachStartFight = function(t) {
                    var i = this,
                        e = t.getWorldPosition(),
                        n = t.getComponent(u);
                    this.node.getComponent(u).convertToNodeSpaceAR(e, e), this.maskAnim.maskTo({
                        type: S.rect,
                        x: e.x - .5 * n.width,
                        y: e.y - .5 * n.height,
                        w: n.width,
                        h: n.height,
                        t: .5
                    });
                    var o = p(e);
                    e.y += 100, setTimeout((function() {
                        i.playFingerMoveAnim(e, o)
                    }), 600), this.once(T.LevelEvent.startFight, this.onStartFight, this)
                }, a.onStartFight = function() {
                    this.resetMaskAnim(), this.resetFinger(), this.moveAnim.active = !0, this.once(T.Common.CtrlEvent.touchStart, this.onTouchStart, this)
                }, a.onTouchStart = function() {
                    var t = this;
                    this.once(T.LevelEvent.enterLobby, this.onEnterLobby, this), setTimeout((function() {
                        t.moveAnim.active = !1
                    }), 3e3)
                }, a.teachFinish = function() {
                    this.emit(T.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "teached",
                        value: !0,
                        mode: "=",
                        save: !1,
                        emit: !1
                    })
                }, a.onEnterLobby = function() {
                    var t = this,
                        i = b.get(m.myGlobalDataType.player),
                        e = b.get(m.Common.GlobalDataType.levelMng);
                    i.setPosition(e.levelMap.playerEnterPos);
                    for (var n = b.get(m.myGlobalDataType.tileCollers), o = p(), s = n.length - 1; s >= 0; --s)
                        if ("TileUnlockRoom" == n[s].node.name) {
                            n[s].getPriceWorldPos(o);
                            break
                        }
                    this.showTouchMask(), setTimeout((function() {
                        t.hideTouchMask(10), t.showTile(m.TileContentType.unlockRoom, o)
                    }), 1e3), this.once(T.LevelEvent.startFight, this.cancelTeachStartAgain, this)
                }, a.onShowBtnXiuFu = function(t, i) {
                    var e = this;
                    if (g.getData("teachedTile").indexOf(m.TileContentType.unlockRoom) >= 0) {
                        this.off(T.LevelEvent.showBtnXiuFu, this.onShowBtnXiuFu, this), this.showTouchMask();
                        var n = p(i);
                        n.y = 2, setTimeout((function() {
                            e.hideTouchMask(10), e.showTile(m.TileContentType.geBan, n)
                        }), 1e3)
                    }
                }, a.onTipHeiYe = function(t) {
                    var i = this,
                        e = t.getWorldPosition(),
                        n = t.getComponent(u);
                    this.node.getComponent(u).convertToNodeSpaceAR(e, e), this.maskAnim.maskTo({
                        type: S.rect,
                        x: e.x - .5 * n.width,
                        y: e.y - .5 * n.height,
                        w: n.width,
                        h: n.height,
                        t: 1
                    }), setTimeout((function() {
                        i.showDialog("heiYe", "Night falls, defeating all zombies hidden in the darkness！")
                    }), 1e3)
                }, a.onTipWuJin = function(t) {
                    var i = this,
                        e = t.getWorldPosition(),
                        n = t.getComponent(u);
                    this.node.getComponent(u).convertToNodeSpaceAR(e, e), this.maskAnim.maskTo({
                        type: S.rect,
                        x: e.x - .5 * n.width,
                        y: e.y - .5 * n.height,
                        w: n.width,
                        h: n.height,
                        t: 1
                    }), setTimeout((function() {
                        i.showDialog("wuJin", "Zombies are coming in an endless stream, n ready to fight until the last moment！")
                    }), 1e3)
                }, a.onTeachAwardRenWu = function(t) {
                    var i = this,
                        e = t.getWorldPosition(),
                        n = t.getComponent(u);
                    this.node.getComponent(u).convertToNodeSpaceAR(e, e), this.maskAnim.maskTo({
                        type: S.rect,
                        x: e.x - .5 * n.width,
                        y: e.y - .5 * n.height,
                        w: n.width,
                        h: n.height,
                        t: 1
                    }), setTimeout((function() {
                        i.tipFinishShowBtn = !1, i.showTip("You have reached your goal. Claim the reward quickly", p(0, 0, 0))
                    }), 1e3), setTimeout((function() {
                        i.showBtnNext(p(0, -300))
                    }), 1700)
                }, a.onTeachGeBanBreakIcon = function(t) {
                    var i = this;
                    this.emit(T.Common.DirectorEvent.pauseLevel);
                    var e = t.children[0].getWorldPosition();
                    this.node.getComponent(u).convertToNodeSpaceAR(e, e), this.maskAnim.maskTo({
                        type: S.rect,
                        x: e.x - 61,
                        y: e.y - 61,
                        w: 122,
                        h: 122,
                        t: 1
                    }), setTimeout((function() {
                        i.tipFinishShowBtn = !1;
                        i.showTip("look out! The enemy here has broken through the door", p(0, 350, 0))
                    }), 1e3), setTimeout((function() {
                        i.showBtnNext(p(0, -300), i.onTeachIconFinish.bind(i))
                    }), 1700), g.getPlayerData().tipedGeBanBreakIcon = !0
                }, a.onTeachIconFinish = function() {
                    this.emit(T.Common.DirectorEvent.resumeLevel)
                }, a.initTileTips = function() {
                    this.tips = {}, this.tips[m.TileContentType.unlockRoom] = "provide various new functions", this.tips[m.TileContentType.shop] = "can upgrade attributes", this.tips[m.TileContentType.weapon] = "A new weapon unlocked by diamonds", this.tips[m.TileContentType.soldier] = "Hire soldiers to assist in the battle!", this.tips[m.TileContentType.geBan] = "The door is damaged. Approaching it will automatically repair it";
                    var t = g.getData("teachedTile");
                    if (t)
                        for (var i = t.length - 1; i >= 0; --i) delete this.tips[t[i]];
                    this.tileType = null, Object.keys(this.tips).length > 0 && (this.on(T.LevelEvent.addTileForTeach, this.showTile, this), this.tips[m.TileContentType.geBan] && this.on(T.LevelEvent.showBtnXiuFu, this.onShowBtnXiuFu, this), this.tips[m.TileContentType.shop] && this.tips[m.TileContentType.unlockRoom] ? this.tipStartAgain = !0 : this.tipStartAgain = !1), g.getPlayerData().tipedGeBanBreakIcon || this.once(T.LevelEvent.teachBreakIcon, this.onTeachGeBanBreakIcon, this)
                }, a.showTile = function(t, i) {
                    if (this.tips[t]) {
                        if (t == m.TileContentType.weapon) g.getPlayerData().asset.zuanShi < 10 && this.emit(T.Common.PlayerDataEvent.updatePlayerData, {
                            attribute: "gameData.asset.zuanShi",
                            value: 10,
                            mode: "=",
                            emit: !0,
                            save: !0
                        });
                        this.tileType = t, this.emit(T.LevelEvent.enterTeach), this.showTouchMask();
                        var e = b.get(m.Common.GlobalDataType.levelCamera);
                        e.moveTo(200, i), e.changeCamera({
                            duration: 1,
                            pos: p(0, 12, 0),
                            cb: this.maskToTile.bind(this)
                        })
                    }
                }, a.maskToTile = function() {
                    var t = this;
                    this.tileType == m.TileContentType.geBan ? (this.maskAnim.maskTo({
                        type: S.rect,
                        x: -200,
                        y: -175,
                        w: 400,
                        h: 475,
                        t: .5
                    }), setTimeout((function() {
                        t.tipFinishShowBtn = !0, t.showTip(t.tips[t.tileType], p(0, 350, 0))
                    }), 1e3)) : (this.maskAnim.maskTo({
                        type: S.rect,
                        x: -150,
                        y: -125,
                        w: 300,
                        h: 350,
                        t: .5
                    }), setTimeout((function() {
                        t.tipFinishShowBtn = !0, t.showTip(t.tips[t.tileType], p(0, 300, 0))
                    }), 1e3))
                }, a.onTeachTileFinish = function() {
                    var t = this;
                    g.getData("teachedTile").push(this.tileType), g.saveData(), delete this.tips[this.tileType], 0 == Object.keys(this.tips).length && (this.off(T.LevelEvent.addTileForTeach, this.showTile, this), this.teachFinish(), this.on(T.LevelEvent.enterLobby, this.showMoveAnim, this));
                    var i = b.get(m.Common.GlobalDataType.levelCamera);
                    i.resumeOriginalTransform(1, (function() {
                        t.emit(T.LevelEvent.exitTeach)
                    }));
                    var e = b.get(m.myGlobalDataType.player);
                    i.moveTo(1, e.node.position), this.tileType == m.TileContentType.unlockRoom && (this.moveAnim.active = !0, this.once(T.Common.CtrlEvent.touchStart, this.autoHideMoveAnim, this)), this.tileType == m.TileContentType.soldier && this.emit(T.LevelEvent.showRenWu), this.tipStartAgain && this.on(T.Common.UIEvent.exited, this.onExitedUI, this)
                }, a.onExitedUI = function(t) {
                    t == m.UI.attributeShop && (this.off(T.Common.UIEvent.exited, this.onExitedUI, this), this.tipStartAgain && (this.tipStartAgain = !1, this.teachStartFightAgain()))
                }, a.teachStartFightAgain = function() {
                    var t = this,
                        i = A.getUI(m.UI.levelInfo).btnStartFight,
                        e = i.getWorldPosition(),
                        n = i.getComponent(u);
                    this.node.getComponent(u).convertToNodeSpaceAR(e, e), this.maskAnim.maskTo({
                        type: S.rect,
                        x: e.x - .5 * n.width,
                        y: e.y - .5 * n.height,
                        w: n.width,
                        h: n.height,
                        t: .5
                    }), this.tipFinishShowBtn = !1;
                    var o = p(e);
                    o.y += 300, this.showTouchMask(1, 2), setTimeout((function() {
                        t.showTip("continue the battle", o)
                    }), 600), setTimeout((function() {
                        t.hideTouchMask(10), t.showBtnNext(p(0, e.y + 150))
                    }), 1400), this.tipStartAgain = !1, this.once(T.LevelEvent.startFight, this.startAgain, this)
                }, a.startAgain = function() {
                    this.resetBtnNext(), this.resetTipLabel(), this.resetFinger(), this.resetMaskAnim(), this.tipStartAgain = !1
                }, a.cancelTeachStartAgain = function() {
                    this.tipStartAgain = !1
                }, a.initFinger = function() {
                    this.finger.active = !1
                }, a.resetFinger = function() {
                    this.hideFinger()
                }, a.hideFinger = function() {
                    this.finger.active = !1, d.getMng(f.UI).stopAllActions(this.finger)
                }, a.playFingerMoveAnim = function(t, i, e) {
                    e || (e = 1), this.finger.active = !0, this.finger.setPosition(t.x, t.y, 0);
                    var n = d.moveTo(e, i.x, i.y, 0),
                        o = d.repeatForever(n);
                    d.getMng(f.UI).runAction(this.finger, o)
                }, a.initMaskAnim = function() {
                    this.maskAnim.init(), this.maskAnim.hide()
                }, a.resetMaskAnim = function() {
                    this.maskAnim.reset(), this.maskAnim.hide()
                }, a.showMoveAnim = function() {
                    this.animAutoHide = !1, this.moveAnim.active = !0, this.once(T.Common.CtrlEvent.touchStart, this.autoHideMoveAnim, this)
                }, a.autoHideMoveAnim = function() {
                    var t = this;
                    this.animAutoHide || (this.animAutoHide = !0, setTimeout((function() {
                        t.moveAnim.active = !1, t.animAutoHide = !1
                    }), 2e3))
                }, a.initTipLabel = function() {
                    this.tipLabel.node.active = !1, this.tipFinishShowBtn = !1
                }, a.resetTipLabel = function() {
                    this.tipLabel.node.active = !1, this.tipFinishShowBtn = !1
                }, a.showTip = function(t, i) {
                    // this.tipLabel.node.active = !0;
                    // var e = -20 * t.length;
                    // this.tipLabel.node.setPosition(e, i.y, 0), this.tipLabel.string = "", this.tipStr = t, this.tipStrPtr = 0, this.tipStrElapsed = 0;
                    // var n = d.thread(this.updateTipLabel, this);
                    // d.getMng(f.UI).runAction(this, n)
                    this.hideTouchMask(10), this.tipFinishShowBtn && (this.tipFinishShowBtn = !1, this.showBtnNext(p(0, -300), this.onTeachTileFinish.bind(this))),
                    this.showBtnNext();
                    var t = v.getData(p.GameDataType.enemyData, this.enemyTypeId).info;
                    this.tipLabel.node.active = !0;
                    // var i = -1 * t.length;
                    this.tipLabel.string = t;
                    this.tipLabel.node.setAnchorPoint(0.5, 0);
                    this.tipLabel.node.setHorizontalAlign(cc.Label.HorizontalAlign.CENTER);
                    this.tipLabel.node.setVerticalAlign(cc.Label.VerticalAlign.CENTER);
                    this.tipLabel.node.setPosition(i, i.y, 0);
                }, a.updateTipLabel = function(t) {
                    if (this.tipStrElapsed += t, !(this.tipStrElapsed < .05)) {
                        this.tipStrElapsed = 0, this.tipStrPtr += 1;
                        var i = this.tipStr.substr(0, this.tipStrPtr);
                        this.tipLabel.string = i, this.tipStrPtr >= this.tipStr.length && (d.getMng(f.UI).stopAllActions(this), this.hideTouchMask(10), this.tipFinishShowBtn && (this.tipFinishShowBtn = !1, this.showBtnNext(p(0, -300), this.onTeachTileFinish.bind(this))))
                    }
                }, a.initBtnNext = function() {
                    this.btnNext.active = !1, this.nextCb = null
                }, a.resetBtnNext = function() {
                    d.getMng(f.UI).stopAllActions(this.btnNext), this.btnNext.active = !1, this.nextCb = null
                }, a.showBtnNext = function(t, i) {
                    this.btnNext.active = !0, this.btnNext.setPosition(t), this.nextCb = i;
                    var e = .9;
                    this.btnNext.setScale(e, e, e), e = 1.1;
                    var n = d.scaleTo(1, e, e, e);
                    e = .9;
                    var o = d.scaleTo(1, e, e, e),
                        s = d.sequence(n, o),
                        a = d.repeatForever(s);
                    d.getMng(f.UI).runAction(this.btnNext, a)
                }, a.onBtnNext = function() {
                    this.playClickBtn();
                    var t = this.nextCb;
                    this.nextCb = null, this.resetBtnNext(), this.resetTipLabel(), this.resetFinger(), this.resetMaskAnim(), this.resetDialog(), t && t()
                }, a.initDialog = function() {
                    this.dialog.active = !1
                }, a.resetDialog = function() {
                    this.dialog.active = !1
                }, a.showDialog = function(t, i) {
                    var e = this;
                    this.dialog.active = !0, this.dialogTitle.spriteFrame = null, v.loadBundleRes("UI", "Image/LevelInfo/" + t + "/spriteFrame", (function(t) {
                        e.dialogTitle.spriteFrame = t
                    })), this.dialogContent.string = i
                }, a.onBtnCloseDialog = function() {
                    this.playClickBtn(), this.resetBtnNext(), this.resetTipLabel(), this.resetFinger(), this.resetMaskAnim(), this.resetDialog()
                }, i
            }(y)).prototype, "finger", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = i(N.prototype, "maskAnim", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = i(N.prototype, "moveAnim", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = i(N.prototype, "tipLabel", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = i(N.prototype, "btnNext", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = i(N.prototype, "dialog", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = i(N.prototype, "dialogTitle", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = i(N.prototype, "dialogContent", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = N)) || I));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/WeaponShopItem.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./Action3dManager.ts", "./yyComponent.ts"], (function(e) {
    "use strict";
    var t, n, i, o, a, s, u, c, r, l, h, p, d, k, f, y, w, b, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.defineProperty, o = e.assertThisInitialized, a = e.initializerDefineProperty, s = e.createClass
        }, function(e) {
            u = e.cclegacy, c = e._decorator, r = e.Node, l = e.Sprite, h = e.Label
        }, function(e) {
            p = e.GlobalEnum
        }, function(e) {
            d = e.default
        }, function(e) {
            k = e.EventType
        }, function(e) {
            f = e.default
        }, function(e) {
            y = e.default
        }, function(e) {
            w = e.default, b = e.ActionMngType
        }, function(e) {
            g = e.default
        }],
        execute: function() {
            var m, v, M, E, q, T, S, z, I, _, U, B, C, W, D, A, R, G, L, P, F, x, O;
            u._RF.push({}, "8865fm1dS9MzZgpIGyDG7sR", "WeaponShopItem", void 0);
            var H = c.ccclass,
                Z = c.property;
            e("WeaponShopItem", (m = H("WeaponShopItem"), v = Z(r), M = Z(l), E = Z(r), q = Z(r), T = Z(r), S = Z(r), z = Z(l), I = Z(r), _ = Z(h), U = Z(r), m((W = t((C = function(e) {
                function t() {
                    for (var t, n = arguments.length, s = new Array(n), u = 0; u < n; u++) s[u] = arguments[u];
                    return t = e.call.apply(e, [this].concat(s)) || this, i(o(t), "weaponType", void 0), a(o(t), "bg", W, o(t)), a(o(t), "img", D, o(t)), a(o(t), "chosedMask", A, o(t)), i(o(t), "_chosed", !1), a(o(t), "equipedMask", R, o(t)), i(o(t), "_equiped", !1), a(o(t), "lockedMask", G, o(t)), i(o(t), "_locked", !0), a(o(t), "unkownMask", L, o(t)), a(o(t), "weaponMask", P, o(t)), i(o(t), "_unkown", !1), a(o(t), "btnUnlock", F, o(t)), a(o(t), "price", x, o(t)), i(o(t), "zuanShi", 0), a(o(t), "btnEquip", O, o(t)), t
                }
                n(t, e);
                var u = t.prototype;
                return u.init = function(e) {
                    this.node.on(r.EventType.TOUCH_START, this.onClick, this), e && this.setData(e)
                }, u.reset = function() {
                    this.setData({
                        type: this.weaponType
                    })
                }, u.setData = function(e) {
                    var t = e.type;
                    this.weaponType = t, this.setImg();
                    var n = f.getPlayerData().weapons;
                    this.unkown = n.unlocked.indexOf(t) < 0, this.locked = n.owned.indexOf(t) < 0, this.equiped = n.curId == t, this.chosed = !1
                }, u.setImg = function() {
                    var e = this;
                    y.loadBundleRes("UI", "Image/weaponShopItem/weapon" + (this.weaponType + 1) + "/spriteFrame", (function(t) {
                        e.img.spriteFrame = t, e.weaponMask.spriteFrame = t
                    }))
                }, u.showBtnUnlock = function() {
                    this.btnUnlock.active = !0;
                    var e = d.GameRule.weaponConfig[this.weaponType + 1].zuanShi;
                    this.price.string = e.toString(), this.zuanShi = e
                }, u.hideBtnUnlock = function() {
                    this.btnUnlock.active = !1
                }, u.showBtnEquip = function() {
                    this.btnEquip.active = !0
                }, u.hideBtnEquip = function() {
                    this.btnEquip.active = !1
                }, u.onClick = function() {
                    this.playClickBtn();
                    var e = 1;
                    this.unkownMask.setScale(e, e, e);
                    e = 1.1;
                    var t = w.scaleTo(.1, e, e, e);
                    e = 1;
                    var n = w.scaleTo(.1, e, e, e),
                        i = w.sequence(t, n);
                    w.getMng(b.UI).runAction(this.node, i), this.unkown ? this.showMsg("The weapon hasn't been discovered yet") : this.chosed || (this.chosed = !0, this.emit(k.WeaponShop.clickWeaponItem, this))
                }, u.onBtnUnlock = function() {
                    if (f.getPlayerData().asset.zuanShi < this.zuanShi) return this.showMsg("Not enough diamonds~\nYou can obtain diamond rewards"), this.emit(k.Common.AudioEvent.playEffect, p.AudioClip.btnCancel), void this.showUI(p.UI.addZuanShi);
                    this.emit(k.Common.AudioEvent.playEffect, p.AudioClip.unlockWeapon), this.locked = !1, this.emit(k.LevelEvent.unlockWeapon, this.weaponType, this.zuanShi), f.unlockWeapon(this.weaponType, this.zuanShi), this.showUI(p.UI.tipUnlockWeapon, {
                        type: this.weaponType
                    }), this.emit(k.LevelEvent.checkRenWu, {
                        type: p.RenWuType.unlockWeapon
                    })
                }, u.onBtnEquip = function() {
                    this.playClickBtn(), f.getPlayerData().weapons.curId = this.weaponType, this.emit(k.LevelEvent.changedWeapon, this.weaponType)
                }, u.onChangeWeapon = function(e) {
                    this.equiped = this.weaponType == e, this.chosed = this._chosed
                }, s(t, [{
                    key: "chosed",
                    get: function() {
                        return this._chosed
                    },
                    set: function(e) {
                        this._chosed = e, this.chosedMask.active = e, this._chosed ? (this.node.setSiblingIndex(this.node.parent.children.length - 1), this.locked ? (this.showBtnUnlock(), this.hideBtnEquip()) : (this.hideBtnUnlock(), this.equiped ? (this.chosedMask.active = !1, this.hideBtnEquip()) : this.showBtnEquip())) : (this.hideBtnEquip(), this.hideBtnUnlock())
                    }
                }, {
                    key: "equiped",
                    get: function() {
                        return this._equiped
                    },
                    set: function(e) {
                        this._equiped = e, this.equipedMask.active = e
                    }
                }, {
                    key: "locked",
                    get: function() {
                        return this._locked
                    },
                    set: function(e) {
                        this._locked = e, this.unkown ? this.lockedMask.active = !1 : this.lockedMask.active = e
                    }
                }, {
                    key: "unkown",
                    get: function() {
                        return this._unkown
                    },
                    set: function(e) {
                        this._unkown = e, this.unkownMask.active = e, this.img.grayscale = e, this.unkown ? this.lockedMask.active = !1 : this.lockedMask.active = this.locked
                    }
                }]), t
            }(g)).prototype, "bg", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(C.prototype, "img", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(C.prototype, "chosedMask", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(C.prototype, "equipedMask", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(C.prototype, "lockedMask", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(C.prototype, "unkownMask", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(C.prototype, "weaponMask", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(C.prototype, "btnUnlock", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(C.prototype, "price", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(C.prototype, "btnEquip", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = C)) || B));
            u._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SettingCmp.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var i, e, n, o, a, s, c, r, l, u, h, d, f, m, p, v;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized, a = t.defineProperty
        }, function(t) {
            s = t.cclegacy, c = t._decorator, r = t.Node, l = t.v3, u = t.Tween, h = t.tween, d = t.Vec3
        }, function(t) {
            f = t.GlobalEnum
        }, function(t) {
            m = t.default
        }, function(t) {
            p = t.EventType
        }, function(t) {
            v = t.default
        }],
        execute: function() {
            var g, y, b, C, S, B, _, k, A;
            s._RF.push({}, "8b5b9jvtqNEz6De0VDcwVTx", "SettingCmp", void 0);
            var w = c.ccclass,
                E = c.property;
            t("SettingCmp", (g = w("SettingCmp"), y = E(r), b = E(r), C = E(r), g((_ = i((B = function(t) {
                function i() {
                    for (var i, e = arguments.length, s = new Array(e), c = 0; c < e; c++) s[c] = arguments[c];
                    return i = t.call.apply(t, [this].concat(s)) || this, n(o(i), "animNode", _, o(i)), n(o(i), "audioBtn", k, o(i)), n(o(i), "shakeBtn", A, o(i)), a(o(i), "_isShow", !1), a(o(i), "_scale", l()), i
                }
                e(i, t);
                var s = i.prototype;
                return s.onLoad = function() {
                    this.hideAnim(!1)
                }, s.onEnable = function() {
                    this.check()
                }, s.onDisable = function() {
                    this.hideAnim(!1)
                }, s.check = function() {
                    this.setAudioSp(m.audioConfig.bgm), this.setShakeSp(m.driveConfig.vibrate)
                }, s.setAudioSp = function(t) {
                    var i = this.audioBtn.getChildByName("on"),
                        e = this.audioBtn.getChildByName("off");
                    i.active = t, e.active = !t
                }, s.setShakeSp = function(t) {
                    var i = this.shakeBtn.getChildByName("on"),
                        e = this.shakeBtn.getChildByName("off");
                    i.active = t, e.active = !t
                }, s.onAudioClick = function() {
                    var t = m.audioConfig.bgm,
                        i = {
                            bgm: t = !t,
                            effect: t
                        };
                    m.audioConfig = i, t ? this.emit(p.Common.AudioEvent.playBGM, f.AudioClip.BGMLobby) : this.emit(p.Common.AudioEvent.stopBGM), this.check(), this.emit(p.Common.AudioEvent.playClickBtn)
                }, s.onShakeClick = function() {
                    this.emit(p.Common.AudioEvent.playClickBtn);
                    var t = m.driveConfig.vibrate;
                    m.driveConfig.vibrate = !t, this.check()
                }, s.onShowSetting = function() {
                    this.node.active = !0, this._isShow = !this._isShow, this._isShow ? this.showAnim() : this.hideAnim()
                }, s.onHideSetting = function() {
                    this.node.active && (this._isShow = !1, this.hideAnim())
                }, s.showAnim = function() {
                    var t = this;
                    u.stopAllByTarget(this._scale), this._scale.set(0, 0, 0), h(this._scale).to(.4, {
                        x: 1,
                        y: 1,
                        z: 1
                    }, {
                        easing: "backOut",
                        onUpdate: function() {
                            t.animNode.setScale(t._scale)
                        }
                    }).start()
                }, s.hideAnim = function(t) {
                    var i = this;
                    if (void 0 === t && (t = !0), !t) return this._scale.set(d.ZERO), void this.animNode.setScale(this._scale);
                    u.stopAllByTarget(this._scale), h(this._scale).to(.4, {
                        x: 0,
                        y: 0,
                        z: 0
                    }, {
                        easing: "backIn",
                        onUpdate: function() {
                            i.animNode.setScale(i._scale)
                        }
                    }).start()
                }, i
            }(v)).prototype, "animNode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = i(B.prototype, "audioBtn", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = i(B.prototype, "shakeBtn", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = B)) || S));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CameraRotateCtrl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, o, a, i, n, r, h, s, c, u, d, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, o = t.inheritsLoose, a = t.defineProperty, i = t.assertThisInitialized, n = t.initializerDefineProperty
        }, function(t) {
            r = t.cclegacy, h = t._decorator, s = t.Node, c = t.Widget, u = t.v2
        }, function(t) {
            d = t.EventType
        }, function(t) {
            l = t.default
        }],
        execute: function() {
            var T, p, C, v, f;
            r._RF.push({}, "94d2d34L0hPhbLoljRfXPq8", "CameraRotateCtrl", void 0);
            var m = h.ccclass,
                R = h.property;
            t("CameraRotateCtrl", (T = m("CameraRotateCtrl"), p = R(s), T((f = e((v = function(t) {
                function e() {
                    for (var e, o = arguments.length, r = new Array(o), h = 0; h < o; h++) r[h] = arguments[h];
                    return e = t.call.apply(t, [this].concat(r)) || this, a(i(e), "rotateTouchCachePos", void 0), a(i(e), "rotateTouched", !1), a(i(e), "rotateTouchId", void 0), n(i(e), "tipNode", f, i(e)), e
                }
                o(e, t);
                var r = e.prototype;
                return r.init = function() {
                    this.initRotateCameraState()
                }, r.reset = function() {
                    this.resetRotateCameraState()
                }, r.enableTouchNode = function() {
                    var t = this.node.getComponent(c);
                    t && t.updateAlignment()
                }, r.initRotateCameraState = function() {
                    this.rotateTouchCachePos = u(), this.rotateTouched = !1, this.rotateTouchId = null, this.node.on(s.EventType.TOUCH_START, this.onRotateStart, this), this.node.on(s.EventType.TOUCH_MOVE, this.onRotateMove, this), this.node.on(s.EventType.TOUCH_END, this.onRotateEnd, this), this.node.on(s.EventType.TOUCH_CANCEL, this.onRotateEnd, this)
                }, r.resetRotateCameraState = function() {
                    this.rotateTouched = !1, this.rotateTouchId = null
                }, r.onRotateStart = function(t) {
                    this.rotateTouched || (this.rotateTouched = !0, this.rotateTouchId = t.getID(), t.getUILocation(this.rotateTouchCachePos), this.emit(d.LevelEvent.rotateCameraStart, this.rotateTouchCachePos))
                }, r.onRotateMove = function(t) {
                    this.rotateTouched && t.getID() == this.rotateTouchId && (t.getUILocation(this.rotateTouchCachePos), this.emit(d.LevelEvent.rotateCameraMove, this.rotateTouchCachePos))
                }, r.onRotateEnd = function(t) {
                    this.rotateTouched && t.getID() == this.rotateTouchId && (this.rotateTouched = !1, this.rotateTouchId = null, this.emit(d.LevelEvent.rotateCameraEnd))
                }, e
            }(l)).prototype, "tipNode", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = v)) || C));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AddZuanShiUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./Action3dManager.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var n, i, e, o, a, r, u, s, l, c, h, d;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor, i = t.inheritsLoose, e = t.initializerDefineProperty, o = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, r = t._decorator, u = t.Node
        }, function(t) {
            s = t.GlobalEnum
        }, function(t) {
            l = t.EventType
        }, function(t) {
            c = t.default, h = t.ActionMngType
        }, function(t) {
            d = t.default
        }],
        execute: function() {
            var p, f, m, g, v, y, b;
            a._RF.push({}, "a395dc/uS5PcYKTAS+gbEAz", "AddZuanShiUI", void 0);
            var A = r.ccclass,
                I = r.property;
            t("AddZuanShiUI", (p = A("AddZuanShiUI"), f = I(u), m = I(u), p((y = n((v = function(t) {
                function n() {
                    for (var n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                    return n = t.call.apply(t, [this].concat(a)) || this, e(o(n), "light", y, o(n)), e(o(n), "btnNormal", b, o(n)), n
                }
                i(n, t);
                var a = n.prototype;
                return a.show = function() {
                    this.node.active = !0, this.playLight(), this.randomBtnPosition()
                }, a.hide = function() {
                    this.resetLight(), this.node.active = !1
                }, a.initLight = function() {}, a.resetLight = function() {
                    c.getMng(h.UI).stopAllActions(this.light)
                }, a.playLight = function() {
                    this.light.setRotation(0, 0, 0, 1);
                    var t = c.rotateTo2d(2, 120),
                        n = c.rotateTo2d(2, 240),
                        i = c.rotateTo2d(2, 360),
                        e = c.rotateTo2d(0, 0),
                        o = c.sequence(t, n, i, e),
                        a = c.repeatForever(o);
                    c.getMng(h.UI).runAction(this.light, a)
                }, a.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, a.onBtnVideo = function() {
                    var t = this;
                    this.playClickBtn(),
                        //     this.emit(l.Common.SDKEvent.showVideo, {
                        //     success: function() {
                        //         t.addGold(20)
                        //     }
                        // })
                        window["fbSDK"].showRewardVideoAd(function () {
                            t.addGold(20)
                        },function () {

                        })

                }, a.addGold = function(t) {
                    var n = this;
                    this.emit(l.Common.UIEvent.playZuanShiAnim, {
                        cb: function() {
                            n.emit(l.Common.PlayerDataEvent.updatePlayerData, {
                                attribute: "gameData.asset.zuanShi",
                                value: t,
                                mode: "+",
                                emit: !0,
                                save: !0
                            }), n.hideUI(s.UI.addZuanShi)
                        },
                        gold: t
                    })
                }, a.onBtnClose = function() {
                    this.emit(l.Common.AudioEvent.playEffect, s.AudioClip.btnCancel), this.hideUI(s.UI.addZuanShi)
                }, n
            }(d)).prototype, "light", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = n(v.prototype, "btnNormal", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = v)) || g));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LeaveSceneTipUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts"], (function(e) {
    "use strict";
    var n, t, i, c, o, s;
    return {
        setters: [function(e) {
            n = e.inheritsLoose
        }, function(e) {
            t = e.cclegacy, i = e._decorator
        }, function(e) {
            c = e.GlobalEnum
        }, function(e) {
            o = e.EventType
        }, function(e) {
            s = e.default
        }],
        execute: function() {
            var a;
            t._RF.push({}, "af479Mv7oFAsZXOJGfKtB09", "LeaveSceneTipUI", void 0);
            var u = i.ccclass;
            i.property, e("LeaveSceneTipUI", u("LeaveSceneTipUI")(a = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                n(t, e);
                var i = t.prototype;
                return i.onBtnLeave = function() {
                    this.playClickBtn(), this.hideUI(c.UI.leaveSceneTip), this.emit(o.LevelEvent.disideLeaveScene)
                }, i.onBtnCancel = function() {
                    this.playClickBtn(), this.hideUI(c.UI.leaveSceneTip)
                }, t
            }(s)) || a);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UnlockWeaponUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts"], (function(e) {
    "use strict";
    var t, n, i, o, a, r, s, l, u, p, c, h, f, m, d, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.defineProperty, o = e.assertThisInitialized, a = e.initializerDefineProperty
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Sprite, u = e.Label, p = e.Node
        }, function(e) {
            c = e.GlobalEnum
        }, function(e) {
            h = e.default
        }, function(e) {
            f = e.EventType
        }, function(e) {
            m = e.default
        }, function(e) {
            d = e.default
        }, function(e) {
            y = e.default
        }],
        execute: function() {
            var b, g, w, v, k, U, I, z, W, S, C, E, T, P, N, A, D;
            r._RF.push({}, "b5a2abdLapKQY0qEb0VWelS", "UnlockWeaponUI", void 0);
            var L = s.ccclass,
                R = s.property;
            e("UnlockWeaponUI", (b = L("UnlockWeaponUI"), g = R(l), w = R(u), v = R(u), k = R(u), U = R(u), I = R(u), z = R(p), b((C = t((S = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)) || this, i(o(t), "weaponType", void 0), a(o(t), "img", C, o(t)), a(o(t), "weaponName", E, o(t)), a(o(t), "atk", T, o(t)), a(o(t), "spd", P, o(t)), a(o(t), "spe", N, o(t)), a(o(t), "price", A, o(t)), i(o(t), "zuanShi", null), a(o(t), "btnNormal", D, o(t)), t
                }
                n(t, e);
                var r = t.prototype;
                return r.setData = function(e) {
                    this.setWeapon(e.weaponType)
                }, r.show = function(e) {
                    this.node.active = !0, this.reset(), e && this.setData(e), this.randomBtnPosition()
                }, r.setWeapon = function(e) {
                    this.weaponType = e;
                    var t = h.GameRule.weaponConfig[e + 1];
                    this.setImg(), this.weaponName.string = t.name, this.atk.string = "" + t.atk, this.spd.string = "" + t.atkSpeed, t.spe ? (this.spe.node.active = !0, this.spe.string = t.spe) : this.spe.node.active = !1, this.setPrice()
                }, r.setImg = function() {
                    var e = this;
                    d.loadBundleRes("UI", "Image/weaponShopItem/weapon" + (this.weaponType + 1) + "/spriteFrame", (function(t) {
                        e.img.spriteFrame = t
                    }))
                }, r.setPrice = function() {
                    this.zuanShi = h.GameRule.weaponConfig[this.weaponType + 1].zuanShi, this.price.string = this.zuanShi.toString()
                }, r.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, r.onBtnUnlock = function() {
                    if (m.getPlayerData().asset.zuanShi < this.zuanShi) return this.showMsg("You can obtain a gold coin reward"), this.emit(f.Common.AudioEvent.playEffect, c.AudioClip.btnCancel), void this.showUI(c.UI.addZuanShi);
                    this.emit(f.Common.AudioEvent.playEffect, c.AudioClip.unlockWeapon), this.emit(f.LevelEvent.unlockWeapon, this.weaponType, this.zuanShi), m.unlockWeapon(this.weaponType, this.zuanShi), this.hideUI(c.UI.unlockWeapon), this.showUI(c.UI.tipUnlockWeapon, {
                        type: this.weaponType
                    }), this.emit(f.LevelEvent.checkRenWu, {
                        type: c.RenWuType.unlockWeapon
                    })
                }, r.onBtnClose = function() {
                    this.emit(f.Common.AudioEvent.playEffect, c.AudioClip.btnCancel), this.hideUI(c.UI.unlockWeapon)
                }, t
            }(y)).prototype, "img", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(S.prototype, "weaponName", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(S.prototype, "atk", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(S.prototype, "spd", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(S.prototype, "spe", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(S.prototype, "price", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(S.prototype, "btnNormal", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = S)) || W));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MaskAnim.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var i, s, e, h, a, n, o, u, r, c, d, p, l, g, S, k;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, s = t.inheritsLoose, e = t.initializerDefineProperty, h = t.assertThisInitialized, a = t.defineProperty
        }, function(t) {
            n = t.cclegacy, o = t._decorator, u = t.Sprite, r = t.UITransform, c = t.Node, d = t.v4, p = t.size, l = t.v3
        }, function(t) {
            g = t.GlobalEnum
        }, function(t) {
            S = t.default
        }, function(t) {
            k = t.default
        }],
        execute: function() {
            var m, f, z, M, w, v, y, T, b;
            t("MaskShapeType", void 0), n._RF.push({}, "b8121Hfd91FJrGUuh6HZT/W", "MaskAnim", void 0);
            var P, D, x = o.ccclass,
                H = o.property;
            t("MaskAnim", (m = x("MaskAnim"), f = H(u), z = H([r]), M = H(c), m((y = i((v = function(t) {
                function i() {
                    for (var i, s = arguments.length, n = new Array(s), o = 0; o < s; o++) n[o] = arguments[o];
                    return i = t.call.apply(t, [this].concat(n)) || this, e(h(i), "sprite", y, h(i)), a(h(i), "pass", null), a(h(i), "shapeHandle", null), a(h(i), "maskShape", null), a(h(i), "animHandle", null), a(h(i), "animData", null), a(h(i), "nodeSize", null), a(h(i), "elapsed", 0), a(h(i), "duration", 1), a(h(i), "cb", void 0), e(h(i), "touchMasks", T, h(i)), e(h(i), "kuang", b, h(i)), a(h(i), "kuangTR", null), a(h(i), "curSize", void 0), a(h(i), "targetSize", void 0), a(h(i), "curPos", void 0), a(h(i), "targetPos", void 0), i
                }
                s(i, t);
                var n = i.prototype;
                return n.initSub = function() {
                    this.initAnimState(), this.initKuang(), this.initMat(), this.initTouchMasks()
                }, n.resetSub = function() {
                    this.resetAnimState(), this.resetKuang(), this.resetMat(), this.resetTouchMasks()
                }, n.registAllCustomUpdate = function() {
                    this.registCustomUpdate(D.updateShape, this.stepUpdateShape)
                }, n.maskTo = function(t) {
                    this.node.active = !0, this.reset(), t.cb && (this.cb = t.cb), t.t ? this.duration = t.t : this.duration = .5, this.setKuang(t), this.setMaskShape(t), this.showTouchMasks(t), this.showTouchMask(), this.enterCustomUpdateState(D.updateShape)
                }, n.initMat = function() {
                    var t = this.sprite.getMaterialInstance(0);
                    this.pass = t.passes[0], this.shapeHandle = this.pass.getHandle("maskShape"), this.maskShape = d(), this.animHandle = this.pass.getHandle("animData"), this.animData = d();
                    var i = k.get(g.Common.GlobalDataType.canvasTransform);
                    this.nodeSize = p(i.width, i.height), this.animData.x = i.width / i.height
                }, n.resetMat = function() {
                    this.animData.z = 0, this.pass.setUniform(this.animHandle, this.animData)
                }, n.setMaskShape = function(t) {
                    if (t.type == P.rect) {
                        this.animData.w = 1;
                        var i = t.x + .5 * t.w + .5 * this.nodeSize.width,
                            s = t.y + .5 * t.h + .5 * this.nodeSize.height;
                        this.maskShape.x = i / this.nodeSize.width, this.maskShape.y = 1 - s / this.nodeSize.height, this.maskShape.z = .5 * t.w / this.nodeSize.width, this.maskShape.w = .5 * t.h / this.nodeSize.height
                    } else this.animData.w = 0, this.maskShape.x = t.x / this.nodeSize.width, this.maskShape.y = t.y / this.nodeSize.height, this.maskShape.z = t.r / this.nodeSize.height;
                    this.pass.setUniform(this.shapeHandle, this.maskShape)
                }, n.initAnimState = function() {
                    this.elapsed = 0, this.cb = null
                }, n.resetAnimState = function() {
                    this.elapsed = 0, this.cb = null
                }, n.initTouchMasks = function() {
                    this.hideTouchMasks()
                }, n.resetTouchMasks = function() {
                    this.hideTouchMasks()
                }, n.hideTouchMasks = function() {
                    for (var t = this.touchMasks.length - 1; t >= 0; --t) this.touchMasks[t].node.active = !1
                }, n.showTouchMasks = function(t) {
                    if (t.type == P.rect) {
                        this.touchMasks[0].node.active = !0;
                        var i = .5 * this.nodeSize.height - t.y - t.h;
                        this.touchMasks[0].height = i, this.touchMasks[1].node.active = !0;
                        var s = .5 * this.nodeSize.width + t.x;
                        this.touchMasks[1].width = s, this.touchMasks[1].height = t.h, this.touchMasks[1].node.setPosition(.5 * -this.nodeSize.width, t.y, 0), this.touchMasks[2].node.active = !0, s = .5 * this.nodeSize.width - t.x - t.w, this.touchMasks[2].width = s, this.touchMasks[2].height = t.h, this.touchMasks[2].node.setPosition(.5 * this.nodeSize.width, t.y, 0), this.touchMasks[3].node.active = !0, i = this.nodeSize.height - i - t.h, this.touchMasks[3].height = i
                    }
                }, n.initKuang = function() {
                    this.kuangTR = this.kuang.getComponent(r), this.kuang.active = !1, this.curSize = p(), this.targetSize = p(), this.curPos = l(), this.targetPos = l()
                }, n.resetKuang = function() {
                    this.kuang.active = !1
                }, n.setKuang = function(t) {
                    if (t.type == P.rect) {
                        this.targetSize.width = t.w + 35, this.targetSize.height = t.h + 35, this.targetPos.x = t.x + .5 * t.w, this.targetPos.y = t.y + .5 * t.h;
                        var i = k.get(g.Common.GlobalDataType.canvasTransform);
                        this.curSize.width = i.width, this.curSize.height = i.height, this.curPos.x = 0, this.curPos.y = 0, this.kuangTR.width = this.curSize.width, this.kuangTR.height = this.curSize.height, this.kuang.active = !0, this.kuang.setPosition(this.curPos)
                    }
                }, n.updateKuang = function(t) {
                    this.curPos.x = this.targetPos.x * t, this.curPos.y = this.targetPos.y * t, this.kuang.setPosition(this.curPos);
                    var i = k.get(g.Common.GlobalDataType.canvasTransform);
                    this.curSize.width = i.width + (this.targetSize.width - i.width) * t, this.curSize.height = i.height + (this.targetSize.height - i.height) * t, this.kuangTR.width = this.curSize.width, this.kuangTR.height = this.curSize.height
                }, n.stepUpdateShape = function(t) {
                    this.elapsed += t;
                    var i = this.elapsed / this.duration;
                    if (i > 1 && (i = 1), i = Math.sqrt(i), this.animData.z = i, this.pass.setUniform(this.animHandle, this.animData), this.updateKuang(i), i >= 1) {
                        this.hideTouchMask(), this.resetCustomUpdateState();
                        var s = this.cb;
                        this.cb = null, s && s()
                    }
                }, n.update = function(t) {
                    this.customUpdate(t)
                }, i
            }(S)).prototype, "sprite", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = i(v.prototype, "touchMasks", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), b = i(v.prototype, "kuang", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = v)) || w));
            ! function(t) {
                t[t.rect = 0] = "rect", t[t.circle = 1] = "circle"
            }(P || (P = t("MaskShapeType", {}))),
                function(t) {
                    t[t.updateShape = 0] = "updateShape", t[t.finished = 1] = "finished"
                }(D || (D = {})), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RenWuItem.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, n, r, i, o, a, l, u, c, s;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, r = t.initializerDefineProperty, i = t.assertThisInitialized, o = t.defineProperty
        }, function(t) {
            a = t.cclegacy, l = t._decorator, u = t.Node, c = t.Label
        }, function(t) {
            s = t.default
        }],
        execute: function() {
            var p, d, b, f, h, w, y, g, m;
            a._RF.push({}, "bb4eb3YoEdNkrSJslS4at4w", "RenWuItem", void 0);
            var v = l.ccclass,
                A = l.property;
            t("RenWuItem", (p = v("RenWuItem"), d = A(u), b = A(c), f = A(c), p((y = e((w = function(t) {
                function e() {
                    for (var e, n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(a)) || this, r(i(e), "btnAward", y, i(e)), r(i(e), "goldLabel", g, i(e)), o(i(e), "award", 0), r(i(e), "content", m, i(e)), e
                }
                n(e, t);
                var a = e.prototype;
                return a.showBtnAward = function(t) {
                    this.btnAward.active = !0, this.award = t, this.goldLabel.string = this.award.toString()
                }, a.hideBtnAward = function() {
                    this.btnAward.active = !1
                }, a.setTxt = function(t) {
                    this.content.string = t
                }, e
            }(s)).prototype, "btnAward", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = e(w.prototype, "goldLabel", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = e(w.prototype, "content", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = w)) || h));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BossInfoUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GameData.ts"], (function(t) {
    "use strict";
    var i, e, n, s, o, a, r, c, u, p, l, h, f, d, b, v;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.defineProperty, s = t.assertThisInitialized, o = t.initializerDefineProperty
        }, function(t) {
            a = t.cclegacy, r = t._decorator, c = t.Node, u = t.Label
        }, function(t) {
            p = t.GlobalEnum
        }, function(t) {
            l = t.EventType
        }, function(t) {
            h = t.default
        }, function(t) {
            f = t.default, d = t.ActionMngType
        }, function(t) {
            b = t.default
        }, function(t) {
            v = t.default
        }],
        execute: function() {
            var y, I, N, g, T, m, S, x, M, L, k;
            a._RF.push({}, "bdd037VLj5MtKf2P74LxIjH", "BossInfoUI", void 0);
            var B = r.ccclass,
                w = r.property;
            t("BossInfoUI", (y = B("BossInfoUI"), I = w(c), N = w(c), g = w(u), T = w(c), y((x = i((S = function(t) {
                function i() {
                    for (var i, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(a)) || this, n(s(i), "enemyTypeId", void 0), o(s(i), "tipNode", x, s(i)), o(s(i), "mask", M, s(i)), o(s(i), "tipLabel", L, s(i)), n(s(i), "tipStr", void 0), n(s(i), "tipStrPtr", void 0), n(s(i), "tipStrElapsed", void 0), o(s(i), "btnNext", k, s(i)), i
                }
                e(i, t);
                var a = i.prototype;
                return a.initSub = function() {
                    this.initBtnNext(), this.initInfo(), this.initMask(), this.initTipNode()
                }, a.resetSub = function() {
                    this.resetBtnNext(), this.resetInfo(), this.resetMask(), this.resetTipNode()
                }, a.setData = function(t) {
                    var i = this;
                    this.enemyTypeId = t.id, this.showTipNode(), setTimeout((function() {
                        i.showMask()
                    }), 1e3), setTimeout((function() {
                        i.showTip()
                    }), 2e3)
                }, a.initTipNode = function() {
                    this.tipNode.active = !1
                }, a.resetTipNode = function() {
                    this.tipNode.active = !1
                }, a.showTipNode = function() {
                    this.tipNode.active = !0;
                    var t = 2;
                    this.tipNode.setScale(t, t, t);
                    t = 1;
                    var i = f.scaleTo(.5, t, t, t);
                    f.getMng(d.UI).runAction(this.tipNode, i)
                }, a.initMask = function() {
                    this.mask.active = !1
                }, a.resetMask = function() {
                    this.mask.active = !1
                }, a.showMask = function() {
                    this.mask.active = !0;
                    var t = f.fadeTo(0, 1),
                        i = f.fadeTo(.5, 155),
                        e = f.sequence(t, i);
                    f.getMng(d.UI).runAction(this.mask, e)
                }, a.initInfo = function() {
                    this.tipLabel.node.active = !1
                }, a.resetInfo = function() {
                    this.tipLabel.node.active = !1
                }, a.showTip = function() {
                    // var t = v.getData(p.GameDataType.enemyData, this.enemyTypeId).info;
                    // this.tipLabel.node.active = !0;
                    // var i = -1 * t.length;
                    // this.tipLabel.node.setPosition(i, 0, 0), this.tipLabel.string = "", this.tipStr = t, this.tipStrPtr = 0, this.tipStrElapsed = 0;
                    // var e = f.thread(this.updateInfoLabel, this);
                    // f.getMng(d.UI).runAction(this, e)
                    this.hideTouchMask();
                    this.showBtnNext();
                    var t = v.getData(p.GameDataType.enemyData, this.enemyTypeId).info;
                    this.tipLabel.node.active = !0;
                    // var i = -1 * t.length;
                    this.tipLabel.string = t;
                    this.tipLabel.node.setAnchorPoint(0.5, 0);
                    this.tipLabel.node.setHorizontalAlign(cc.Label.HorizontalAlign.CENTER);
                    this.tipLabel.node.setVerticalAlign(cc.Label.VerticalAlign.CENTER);
                    this.tipLabel.node.setPosition(i, 0, 0);
                    //     , this.tipLabel.string = "", this.tipStr = t, this.tipStrPtr = 0, this.tipStrElapsed = 0;
                    // var e = f.thread(this.updateInfoLabel, this);
                    // f.getMng(d.UI).runAction(this, e)
                }, a.updateInfoLabel = function(t) {
                    var i = this;
                    if (this.tipStrElapsed += t, !(this.tipStrElapsed < .05)) {
                        this.tipStrElapsed = 0, this.tipStrPtr += 1;
                        var e = this.tipStr.substr(0, this.tipStrPtr);
                        this.tipLabel.string = e, this.tipStrPtr >= this.tipStr.length && (f.getMng(d.UI).stopAllActions(this), setTimeout((function() {
                            i.hideTouchMask(), i.showBtnNext()
                        }), 300))
                    }
                }, a.initBtnNext = function() {
                    this.btnNext.active = !1
                }, a.resetBtnNext = function() {
                    f.getMng(d.UI).stopAllActions(this.btnNext), this.btnNext.active = !1
                }, a.showBtnNext = function() {
                    this.btnNext.active = !0;
                    var t = .9;
                    this.btnNext.setScale(t, t, t), t = 1.1;
                    var i = f.scaleTo(1, t, t, t);
                    t = .9;
                    var e = f.scaleTo(1, t, t, t),
                        n = f.sequence(i, e),
                        s = f.repeatForever(n);
                    f.getMng(d.UI).runAction(this.btnNext, s)
                }, a.onBtnNext = function() {
                    this.playClickBtn(), h.getPlayerData().bossTip.push(this.enemyTypeId), this.hideUI(p.UI.bossInfoUI), this.emit(l.LevelEvent.exitBossInfo)
                }, i
            }(b)).prototype, "tipNode", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = i(S.prototype, "mask", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = i(S.prototype, "tipLabel", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = i(S.prototype, "btnNext", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = S)) || m));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/VideoTipUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts"], (function(i) {
    "use strict";
    var e, t, n, o, r, c, l, s, a, u;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor, t = i.inheritsLoose, n = i.initializerDefineProperty, o = i.assertThisInitialized
        }, function(i) {
            r = i.cclegacy, c = i._decorator, l = i.Label
        }, function(i) {
            s = i.GlobalEnum
        }, function(i) {
            a = i.EventType
        }, function(i) {
            u = i.default
        }],
        execute: function() {
            var p, h, d, f, v;
            r._RF.push({}, "c266cxrOulPq5K77U5iDuhi", "VideoTipUI", void 0);
            var m = c.ccclass,
                y = c.property;
            i("VideoTipUI", (p = m("VideoTipUI"), h = y(l), p((v = e((f = function(i) {
                function e() {
                    for (var e, t = arguments.length, r = new Array(t), c = 0; c < t; c++) r[c] = arguments[c];
                    return e = i.call.apply(i, [this].concat(r)) || this, n(o(e), "tipLabel", v, o(e)), e
                }
                t(e, i);
                var r = e.prototype;
                return r.setData = function(i) {}, r.show = function(i) {
                    var e = this;
                    console.error("测试继续观看视频UI"), this.node.active = !1, console.log("不显示 继续视频提示窗"), setTimeout((function() {
                        e.hideUI(s.UI.videoTip), console.log("取消继续观看视频"), e.emit(a.Common.SDKEvent.showVideoTipCancel)
                    }), 0)
                }, r.setTipLabel = function(i) {
                    this.tipLabel.string = i
                }, r.onBtnVideo = function() {
                    this.playClickBtn(), this.hideUI(s.UI.videoTip), this.emit(a.Common.SDKEvent.showVideoTipContinue)
                }, r.onBtnCancel = function() {
                    this.playClickBtn(), this.hideUI(s.UI.videoTip), this.emit(a.Common.SDKEvent.showVideoTipCancel)
                }, e
            }(u)).prototype, "tipLabel", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = f)) || d));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/WinUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var e, i, n, o, a, r, l, s, u, h, c, d, g, f, m, p, b, v;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized, a = t.defineProperty, r = t.createClass
        }, function(t) {
            l = t.cclegacy, s = t._decorator, u = t.Label, h = t.Node, c = t.Animation
        }, function(t) {
            d = t.GlobalEnum
        }, function(t) {
            g = t.EventType
        }, function(t) {
            f = t.default
        }, function(t) {
            m = t.default, p = t.ActionMngType
        }, function(t) {
            b = t.default
        }, function(t) {
            v = t.default
        }],
        execute: function() {
            var y, G, w, R, A, T, D, S, z, E, L, B, P, M, I, U, C, F, J, k, N, W, _;
            l._RF.push({}, "c860bLLRGpP+4YCxmj81c6R", "WinUI", void 0);
            var Y = s.ccclass,
                Z = s.property;
            t("WinUI", (y = Y("WinUI"), G = Z(u), w = Z(h), R = Z(u), A = Z(u), T = Z(u), D = Z(h), S = Z(u), z = Z(c), E = Z([h]), L = Z(h), y((M = e((P = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(r)) || this, n(o(e), "lvTime", M, o(e)), n(o(e), "light", I, o(e)), n(o(e), "totalGold", U, o(e)), n(o(e), "totalZuanShi", C, o(e)), n(o(e), "normalBtnGold", F, o(e)), a(o(e), "zuanShi", 0), a(o(e), "gold", 100), a(o(e), "awarded", !1), n(o(e), "ratePtr", J, o(e)), n(o(e), "rateGold", k, o(e)), a(o(e), "preRate", 0), a(o(e), "threadRateGold", void 0), n(o(e), "ratePtrAnim", N, o(e)), n(o(e), "btns", W, o(e)), n(o(e), "btnNormal", _, o(e)), e
                }
                i(e, t);
                var l = e.prototype;
                return l.init = function(t) {
                    this.initBtns(), this.initGold(), this.initLight(), this.initRateGold(), void 0 !== t && this.setData(t),window["fbSDK"].showInterstitialAD()
                }, l.setData = function(t) {
                    this.setGold(t.gold), this.zuanShi = t.zuanShi, this.totalZuanShi.string = "+" + t.zuanShi.toString(), this.showBtns();
                    var e = (new Date).getTime() - t.startFightTime;
                    e = Math.round(.001 * e), this.lvTime && (this.lvTime.string = "关卡用时：" + e.toString() + "秒")
                }, l.reset = function() {
                    this.resetBtns(), this.resetGold(), this.resetLight(), this.resetRateGold()
                }, l.show = function(t) {
                    this.reset(), this.node.active = !0, void 0 !== t && this.setData(t), this.playLight(), this.playRateGold(), this.playRateAnim();
                    var e, i = v.get(d.myGlobalDataType.fightMode),
                        n = f.getPlayerData().curLevel - 1;
                    switch (i) {
                        case d.FightMode.heiYe:
                            e = d.TongJiEvent.heiYeWin;
                            break;
                        case d.FightMode.wuJin:
                            e = d.TongJiEvent.wuJin, n += 1
                    }
                    e && this.emit(g.Common.ALDEvent.sendEvent, {
                        eventName: e,
                        data: {
                            lv: n
                        }
                    }), this.randomBtnPosition()
                }, l.initLight = function() {}, l.resetLight = function() {
                    m.getMng(p.UI).stopAllActions(this.light)
                }, l.playLight = function() {
                    this.light.setRotation(0, 0, 0, 1);
                    var t = m.rotateTo2d(2, 120),
                        e = m.rotateTo2d(2, 240),
                        i = m.rotateTo2d(2, 360),
                        n = m.rotateTo2d(0, 0),
                        o = m.sequence(t, e, i, n),
                        a = m.repeatForever(o);
                    m.getMng(p.UI).runAction(this.light, a)
                }, l.initGold = function() {
                    this.awarded = !1
                }, l.resetGold = function() {
                    this.awarded = !1
                }, l.setGold = function(t) {
                    this.gold = t, this.totalGold.string = "+" + t.toString(), this.normalBtnGold.string = t.toString()
                }, l.getTotalGold = function() {
                    return this.gold
                }, l.initRateGold = function() {
                    this.preRate = 0, this.rateGold.string = "", this.threadRateGold = m.thread(this.updateRateGold, this)
                }, l.resetRateGold = function() {
                    this.preRate = 0, this.rateGold.string = "", m.getMng(p.UI).stopAllActions(this)
                }, l.playRateGold = function() {
                    m.getMng(p.UI).runAction(this, this.threadRateGold)
                }, l.getRate = function() {
                    var t = this.ratePtr.eulerAngles.z;
                    return t += 145, t = (t = (t = 6 - 2 * Math.floor(t / 56)) < 2 ? 2 : t) > 6 ? 6 : t
                }, l.updateRateGold = function() {
                    var t = this.getRate();
                    this.preRate != t && (this.preRate = t, this.rateGold.string = (this.gold * this.preRate).toString())
                }, l.playRateAnim = function() {
                    this.ratePtrAnim.play()
                }, l.stopRateAnim = function() {
                    this.ratePtrAnim.stop()
                }, l.initBtns = function() {
                    for (var t = this.btns.length - 1; t >= 0; --t) this.btns[t].active = !1
                }, l.resetBtns = function() {
                    for (var t = this.btns.length - 1; t >= 0; --t) this.btns[t].active = !1
                }, l.showBtns = function() {
                    for (var t = this.btns.length - 1; t >= 0; --t) this.btns[t].active = !0
                }, l.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, l.onBtnGetAward = function() {
                    this.playClickBtn(), this.addGold(this.getTotalGold(), this.enterLobby.bind(this))
                }, l.onBtnVideo = function() {
                    var t = this;
                    this.playClickBtn(), this.stopRateAnim(),
                        //     this.emit(g.Common.SDKEvent.showVideo, {
                        //     success: function() {
                        //         t.addGold(t.getTotalGold() * t.getRate(), t.enterLobby.bind(t)), t.sendEventTongJi()
                        //     },
                        //     fail: function() {
                        //         t.playRateAnim()
                        //     }
                        // })
                        // t.addGold(t.getTotalGold() * t.getRate(), t.enterLobby.bind(t))

                    window["fbSDK"].showRewardVideoAd(function () {
                        t.addGold(t.getTotalGold() * t.getRate(), t.enterLobby.bind(t))
                    },function () {

                    })
                }, l.sendEventTongJi = function() {
                    var t;
                    switch (v.get(d.myGlobalDataType.fightMode)) {
                        case d.FightMode.heiYe:
                            t = "黑夜";
                            break;
                        case d.FightMode.normal:
                            t = "普通";
                            break;
                        case d.FightMode.wuJin:
                            t = "无尽"
                    }
                    this.emit(g.Common.ALDEvent.sendEvent, {
                        eventName: d.TongJiEvent.winVideoAward,
                        data: {
                            lv: f.getPlayerData().curLevel - 1,
                            mode: t
                        }
                    })
                }, l.addGold = function(t, e) {
                    var i = this;
                    f.getPlayerData().asset.zuanShi += this.zuanShi, this.emit(g.Common.UIEvent.playZuanShiAnim, {
                        zuanShi: this.zuanShi
                    }), this.emit(g.Common.UIEvent.playGoldAnim, {
                        cb: function() {
                            i.emit(g.Common.PlayerDataEvent.updatePlayerData, {
                                attribute: "gameData.asset.gold",
                                value: t,
                                mode: "+",
                                emit: !0,
                                save: !1
                            }), i.awarded = !0, e && e()
                        },
                        gold: t
                    })
                }, l.enterLobby = function() {
                    this.hideUI(d.UI.winUI), this.emit(g.LevelEvent.enterLobby)
                }, l.onBtnMoreGame = function() {
                    this.emit(g.Common.SDKEvent.showAppBox)
                }, l.onBtnShare = function() {
                    this.emit(g.Common.SDKEvent.shareToFriends)
                }, r(e, [{
                    key: "uiType",
                    get: function() {
                        return d.UI.winUI
                    }
                }]), e
            }(b)).prototype, "lvTime", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = e(P.prototype, "light", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = e(P.prototype, "totalGold", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = e(P.prototype, "totalZuanShi", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = e(P.prototype, "normalBtnGold", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = e(P.prototype, "ratePtr", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = e(P.prototype, "rateGold", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = e(P.prototype, "ratePtrAnim", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = e(P.prototype, "btns", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), _ = e(P.prototype, "btnNormal", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = P)) || B));
            l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CameraZoomCtrl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var e, i, o, h, n, s, a, c, u, r, l, d, m, v, f, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.initializerDefineProperty, h = t.assertThisInitialized, n = t.defineProperty
        }, function(t) {
            s = t.cclegacy, a = t._decorator, c = t.Node, u = t.systemEvent, r = t.SystemEventType, l = t.Widget, d = t.v2
        }, function(t) {
            m = t.GlobalEnum
        }, function(t) {
            v = t.EventType
        }, function(t) {
            f = t.default
        }, function(t) {
            p = t.default
        }],
        execute: function() {
            var g, T, y, S, C;
            s._RF.push({}, "ccc3c74L2RIPK50jjcSXTiZ", "CameraZoomCtrl", void 0);
            var E = a.ccclass,
                H = a.property;
            t("CameraZoomCtrl", (g = E("CameraZoomCtrl"), T = H(c), g((C = e((S = function(t) {
                function e() {
                    for (var e, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(s)) || this, o(h(e), "handle", C, h(e)), n(h(e), "maxHeight", 250), n(h(e), "touched", !1), n(h(e), "touchId", null), n(h(e), "touchStartPos", void 0), n(h(e), "touchCachePos", void 0), n(h(e), "touchStartHeight", void 0), e
                }
                i(e, t);
                var s = e.prototype;
                return s.init = function() {
                    this.initTouchState(), u.on(r.MOUSE_WHEEL, this.onMouseWheel, this)
                }, s.reset = function() {
                    this.resetTouchState()
                }, s.enableTouchNode = function() {
                    var t = this.node.getComponent(l);
                    t && t.updateAlignment();
                    var e = p.get(m.Common.GlobalDataType.levelCamera);
                    if (e) {
                        var i = 1 - e.curZoomRate;
                        this.handle.setPosition(0, this.maxHeight * i, 0)
                    }
                }, s.initTouchState = function() {
                    this.touchId = null, this.touched = !1, this.touchStartPos = d(), this.touchCachePos = d(), this.touchStartHeight = 0, this.handle.setPosition(0, .78 * this.maxHeight, 0);
                    this.handle.setScale(1, 1, 1), this.handle.on(c.EventType.TOUCH_START, this.onTouchStart, this), this.handle.on(c.EventType.TOUCH_MOVE, this.onTouchMove, this), this.handle.on(c.EventType.TOUCH_END, this.onTouchEnd, this), this.handle.on(c.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }, s.resetTouchState = function() {
                    this.touchId = null, this.touched = !1, this.touchStartHeight = 0, this.handle.setPosition(0, .5 * this.maxHeight, 0);
                    this.handle.setScale(1, 1, 1)
                }, s.onTouchStart = function(t) {
                    if (!this.touched) {
                        this.touched = !0, this.touchId = t.getID(), t.getUILocation(this.touchStartPos), this.touchStartHeight = this.handle.position.y;
                        this.handle.setScale(1.2, 1.2, 1.2)
                    }
                }, s.onTouchMove = function(t) {
                    if (this.touched && this.touchId == t.getID()) {
                        t.getUILocation(this.touchCachePos);
                        var e = this.touchCachePos.y - this.touchStartPos.y + this.touchStartHeight;
                        e < 0 ? e = 0 : e > this.maxHeight && (e = this.maxHeight), this.handle.setPosition(0, e, 0), this.emit(v.LevelEvent.zoomCamera, 1 - e / this.maxHeight)
                    }
                }, s.onTouchEnd = function(t) {
                    if (this.touched && this.touchId == t.getID()) {
                        this.touched = !1, this.touchId = null;
                        this.handle.setScale(1, 1, 1)
                    }
                }, s.onMouseWheel = function(t) {
                    var e = t.getScrollY();
                    if (0 != e) {
                        var i = this.handle.position.y;
                        e > 0 ? i += 10 : i -= 10, i < 0 ? i = 0 : i > this.maxHeight && (i = this.maxHeight), this.handle.setPosition(0, i, 0), this.emit(v.LevelEvent.zoomCamera, 1 - i / this.maxHeight)
                    }
                }, e
            }(f)).prototype, "handle", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = S)) || y));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TipUnlockWeaponUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./Loader.ts", "./Action3dManager.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, n, i, o, r, a, l, u, c, s, p, f, g, h, m;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, o = t.assertThisInitialized
        }, function(t) {
            r = t.cclegacy, a = t._decorator, l = t.Sprite, u = t.Label, c = t.Node
        }, function(t) {
            s = t.GlobalEnum
        }, function(t) {
            p = t.default
        }, function(t) {
            f = t.default
        }, function(t) {
            g = t.default, h = t.ActionMngType
        }, function(t) {
            m = t.default
        }],
        execute: function() {
            var d, y, b, I, U, v, T, w, L;
            r._RF.push({}, "d6868CEFrlASrdxzTvduIY7", "TipUnlockWeaponUI", void 0);
            var k = a.ccclass,
                A = a.property;
            t("TipUnlockWeaponUI", (d = k("TipUnlockWeaponUI"), y = A(l), b = A(u), I = A(c), d((T = e((v = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(r)) || this, i(o(e), "img", T, o(e)), i(o(e), "weaponName", w, o(e)), i(o(e), "light", L, o(e)), e
                }
                n(e, t);
                var r = e.prototype;
                return r.initSub = function() {
                    this.initLight()
                }, r.resetSub = function() {
                    this.resetLight()
                }, r.setData = function(t) {
                    this.setImg(t.type), this.setName(t.type), this.playLight()
                }, r.setImg = function(t) {
                    var e = this;
                    f.loadBundleRes("UI", "Image/weaponShopItem/weapon" + (t + 1) + "/spriteFrame", (function(t) {
                        e.img.spriteFrame = t
                    }))
                }, r.setName = function(t) {
                    var e = p.GameRule.weaponConfig[t + 1];
                    this.weaponName.string = e.name
                }, r.initLight = function() {}, r.resetLight = function() {
                    g.getMng(h.UI).stopAllActions(this.light)
                }, r.playLight = function() {
                    this.light.setRotation(0, 0, 0, 1);
                    var t = g.rotateTo2d(2, 120),
                        e = g.rotateTo2d(2, 240),
                        n = g.rotateTo2d(2, 360),
                        i = g.rotateTo2d(0, 0),
                        o = g.sequence(t, e, n, i),
                        r = g.repeatForever(o);
                    g.getMng(h.UI).runAction(this.light, r)
                }, r.onBtnClose = function() {
                    this.playClickBtn(), this.hideUI(s.UI.tipUnlockWeapon)
                }, e
            }(m)).prototype, "img", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = e(v.prototype, "weaponName", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = e(v.prototype, "light", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = v)) || U));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/WeaponShopUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./Loader.ts", "./yyComponent.ts", "./GlobalData.ts", "./WeaponShopItem.ts"], (function(e) {
    "use strict";
    var t, n, i, o, a, r, l, s, p, u, h, c, f, m, y, d, I, v, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty
        }, function(e) {
            r = e.cclegacy, l = e._decorator, s = e.Node, p = e.Prefab, u = e.Label, h = e.instantiate, c = e.Layout
        }, function(e) {
            f = e.GlobalEnum
        }, function(e) {
            m = e.default
        }, function(e) {
            y = e.EventType
        }, function(e) {
            d = e.default
        }, function(e) {
            I = e.default
        }, function(e) {
            v = e.default
        }, function(e) {
            b = e.WeaponShopItem
        }],
        execute: function() {
            var g, w, W, L, S, C, P, k, T, z, E, D, G, U, N, B, _;
            r._RF.push({}, "d95b6NbNp5NmpvfTzqQvleH", "WeaponShopUI", void 0);
            var F = l.ccclass,
                R = l.property;
            e("WeaponShopUI", (g = F("WeaponShopUI"), w = R(s), W = R(p), L = R(u), S = R(u), C = R(u), P = R(u), k = R(s), g((E = t((z = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(r)) || this, i(o(t), "itemLayer", E, o(t)), i(o(t), "itemPrefab", D, o(t)), a(o(t), "allItems", void 0), a(o(t), "curItem", null), i(o(t), "weaponName", G, o(t)), i(o(t), "atk", U, o(t)), i(o(t), "atkSpeed", N, o(t)), i(o(t), "spe", B, o(t)), i(o(t), "playerLayer", _, o(t)), a(o(t), "player", void 0), t
                }
                n(t, e);
                var r = t.prototype;
                return r.initSub = function() {
                    this.initItems(), this.initPlayer()
                }, r.resetSub = function() {
                    this.resetItems(), this.resetPlayer()
                }, r.onEvents = function() {
                    this.on(y.WeaponShop.clickWeaponItem, this.onClickWeaponItem, this), this.on(y.LevelEvent.changedWeapon, this.onChangeWeapon, this)
                }, r.show = function() {
                    this.node.active = !0, this.reset(), this.onEvents(), v.get(f.myGlobalDataType.isLevelFighting) && this.emit(y.Common.DirectorEvent.pauseLevel), this.showPlayerWeapon()
                }, r.hide = function() {
                    this.offEvents(), this.node.active = !1, v.get(f.myGlobalDataType.isLevelFighting) && this.emit(y.Common.DirectorEvent.resumeLevel)
                }, r.initItems = function() {
                    this.allItems = [];
                    for (var e = f.WeaponType.count, t = 0; t < e; ++t) {
                        var n = h(this.itemPrefab);
                        this.itemLayer.addChild(n);
                        var i = n.getComponent(b);
                        i.init({
                            type: t
                        }), this.allItems.push(i)
                    }
                    var o = this.itemLayer.getComponent(c);
                    o.updateLayout(), o.destroy()
                }, r.resetItems = function() {
                    for (var e = this.allItems.length - 1; e >= 0; --e) this.allItems[e].reset(), this.allItems[e].equiped && (this.curItem = this.allItems[e]);
                    this.curItem.chosed = !0, this.showWeaponInfo(this.curItem.weaponType)
                }, r.showWeaponInfo = function(e) {
                    var t = m.GameRule.weaponConfig[e + 1];
                    this.weaponName.string = t.name, this.atk.string = t.atk.toString(), this.atkSpeed.string = t.atkSpeed.toString(), t.spe ? (this.spe.node.active = !0, this.spe.string = t.spe) : this.spe.node.active = !1
                }, r.initPlayer = function() {
                    var e = this;
                    d.loadBundle("LevelScene", (function() {
                        d.loadBundleRes("LevelScene", "SinglePrefab/UIPlayer", (function(t) {
                            var n = h(t);
                            e.playerLayer.addChild(n), e.player = n.getComponent("UIPlayer"), e.curItem && e.player.showWeapon(e.curItem.weaponType)
                        }))
                    }))
                }, r.resetPlayer = function() {}, r.showPlayerWeapon = function() {
                    this.player && this.player.showWeapon(this.curItem.weaponType)
                }, r.onClickWeaponItem = function(e) {
                    this.curItem.chosed = !1, this.curItem = e, this.showWeaponInfo(this.curItem.weaponType), this.showPlayerWeapon()
                }, r.onChangeWeapon = function(e) {
                    for (var t = this.allItems.length - 1; t >= 0; --t) this.allItems[t].onChangeWeapon(e)
                }, r.onBtnClose = function() {
                    this.playClickBtn(), this.hideUI(f.UI.weaponShop)
                }, t
            }(I)).prototype, "itemLayer", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(z.prototype, "itemPrefab", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(z.prototype, "weaponName", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(z.prototype, "atk", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(z.prototype, "atkSpeed", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(z.prototype, "spe", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = t(z.prototype, "playerLayer", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = z)) || T));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ResurgenceUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(e) {
    "use strict";
    var i, t, n, r, s, a, o, c, u, l, m, h, g, f, d;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized, s = e.defineProperty
        }, function(e) {
            a = e.cclegacy, o = e._decorator, c = e.Sprite, u = e.Label, l = e.Node
        }, function(e) {
            m = e.GlobalEnum
        }, function(e) {
            h = e.EventType
        }, function(e) {
            g = e.default
        }, function(e) {
            f = e.default
        }, function(e) {
            d = e.default
        }],
        execute: function() {
            var p, T, b, v, y, R, I, S, L;
            a._RF.push({}, "deea2XyLetBnbx+8/kYjbDA", "ResurgenceUI", void 0);
            var D = o.ccclass,
                E = o.property;
            e("ResurgenceUI", (p = D("ResurgenceUI"), T = E(c), b = E(u), v = E(l), p((I = i((R = function(e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(a)) || this, n(r(i), "rateImg", I, r(i)), s(r(i), "totalTime", 5), s(r(i), "remainTime", 0), s(r(i), "curSecond", 0), n(r(i), "timerLabel", S, r(i)), s(r(i), "isTimerRunning", !1), n(r(i), "btnNormal", L, r(i)), i
                }
                t(i, e);
                var a = i.prototype;
                return a.initSub = function() {
                    this.initTimer()
                }, a.resetSub = function() {
                    this.resetTimer()
                }, a.show = function() {
                    this.node.active = !0, this.reset(), this.startTimer(), this.randomBtnPosition()
                }, a.initTimer = function() {}, a.resetTimer = function() {}, a.startTimer = function() {
                    this.rateImg.fillRange = 1, this.remainTime = this.totalTime, this.curSecond = this.totalTime - 1, this.timerLabel.string = (this.curSecond + 1).toString(), this.isTimerRunning = !0
                }, a.updateTimer = function(e) {
                    this.isTimerRunning && (this.remainTime <= 0 || (this.remainTime -= e, this.remainTime < 0 ? this.timeOver() : (this.rateImg.fillRange = this.remainTime / this.totalTime, this.remainTime < this.curSecond && (this.curSecond -= 1, this.timerLabel.string = (this.curSecond + 1).toString()))))
                }, a.timeOver = function() {
                    this.isTimerRunning = !1, this.hideUI(m.UI.resurgence), this.cancelResurgence()
                }, a.randomBtnPosition = function() {
                    this.btnNormal && this.btnNative
                }, a.onBtnResurgence = function() {
                    console.log("复活1")
                    var e = this;
                    this.playClickBtn(), this.isTimerRunning = !1,
                        //     this.emit(h.Common.SDKEvent.showVideo, {
                        //     success: this._resurgence.bind(this),
                        //     fail: function() {
                        //         e.isTimerRunning = !0
                        //     },
                        //     quit: function() {
                        //         e.isTimerRunning = !0
                        //     }
                        // })
                        window["fbSDK"].showRewardVideoAd(function () {
                            e._resurgence()
                        },function () {
                            e.isTimerRunning = !0
                        })

                }, a._resurgence = function() {
                    console.log("复活2")
                    var e;
                    switch (this.hideUI(m.UI.resurgence), this.emit(h.LevelEvent.resurgence), d.get(m.myGlobalDataType.fightMode)) {
                        case m.FightMode.heiYe:
                            e = "黑夜";
                            break;
                        case m.FightMode.normal:
                            e = "普通";
                            break;
                        case m.FightMode.wuJin:
                            e = "无尽"
                    }
                    this.emit(h.Common.ALDEvent.sendEvent, {
                        eventName: m.TongJiEvent.resurgence,
                        data: {
                            lv: g.getPlayerData().curLevel,
                            mode: e
                        }
                    })
                }, a.onBtnCancel = function() {
                    this.playClickBtn(), this.hideUI(m.UI.resurgence), this.cancelResurgence()
                }, a.cancelResurgence = function() {
                    this.emit(h.LevelEvent.cancelResurgence)
                }, a.update = function(e) {
                    this.node.activeInHierarchy && this.updateTimer(e)
                }, i
            }(f)).prototype, "rateImg", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = i(R.prototype, "timerLabel", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = i(R.prototype, "btnNormal", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = R)) || y));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BtnWuJin.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(e) {
    "use strict";
    var t, i, o, n, l, s, a, c, r, u, h, g, m, d, f, p, v, y, L, T, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, o = e.initializerDefineProperty, n = e.assertThisInitialized, l = e.defineProperty, s = e.createClass
        }, function(e) {
            a = e.cclegacy, c = e._decorator, r = e.Sprite, u = e.Node, h = e.Label, g = e.color, m = e.Color
        }, function(e) {
            d = e.GlobalEnum
        }, function(e) {
            f = e.default
        }, function(e) {
            p = e.EventType
        }, function(e) {
            v = e.default
        }, function(e) {
            y = e.default, L = e.ActionMngType
        }, function(e) {
            T = e.default
        }, function(e) {
            b = e.default
        }],
        execute: function() {
            var C, k, S, I, D, E, J, w, W, _, M, P, A;
            a._RF.push({}, "eb885l1kC5LnZeMjSl8YHpb", "BtnWuJin", void 0);
            var G = c.ccclass,
                R = c.property;
            e("BtnWuJin", (C = G("BtnWuJin"), k = R([r]), S = R(r), I = R(u), D = R(u), E = R(h), C((W = t((w = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(s)) || this, o(n(t), "grayImgs", W, n(t)), o(n(t), "contentImg", _, n(t)), o(n(t), "iconLock", M, n(t)), o(n(t), "tipLock", P, n(t)), l(n(t), "_isLocked", !0), o(n(t), "coolTimerLabel", A, n(t)), l(n(t), "coolTimer", 0), l(n(t), "curSecond", 0), l(n(t), "_isCooling", !1), t
                }
                i(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    this.node.on(u.EventType.TOUCH_START, this.onClick, this), this.on(p.LevelEvent.unlockedAllRooms, this.onUnlockedAllRooms, this), this.on(p.LevelEvent.levelCurScene, this.onLeaveCurScene, this), this.on(p.LevelEvent.enterLobby, this.onEnterLobby, this)
                }, a.onEnable = function() {
                    var e = b.get(d.myGlobalDataType.remainUnlockRoomCount);
                    (this.isLocked = 0 !== e, this.isLocked) || (v.getPlayerData().tipedWuJin || (v.getPlayerData().tipedWuJin = !0, v.saveData(), this.emit(p.LevelEvent.teachWuJin, this.node)));
                    if (this.isLocked) this.isCooling = !1;
                    else {
                        var t = v.getPlayerData().wuJinCoolStartTime,
                            i = (new Date).getTime(),
                            o = f.GameRule.wuJinCoolTime - Math.floor(.001 * (i - t));
                        o > 0 ? (this.coolTimer = o, this.curSecond = this.coolTimer - 1, this.isCooling = !0) : this.isCooling = !1
                    }
                }, a.onUnlockedAllRooms = function() {
                    0 != v.getPlayerData().curSceneIndex && (this.isLocked = !1, v.getPlayerData().tipedWuJin || (v.getPlayerData().tipedWuJin = !0, v.saveData(), this.emit(p.LevelEvent.teachWuJin, this.node)))
                }, a.onLeaveCurScene = function() {
                    this.isLocked = !0
                }, a.startCool = function() {
                    this.isLocked || (this.coolTimer = f.GameRule.wuJinCoolTime, this.curSecond = this.coolTimer - 1, this.isCooling = !0, v.getPlayerData().wuJinCoolStartTime = (new Date).getTime())
                }, a.updateCooling = function(e) {
                    this.isCooling && (this.coolTimer -= e, this.coolTimer <= 0 ? this.isCooling = !1 : this.coolTimer < this.curSecond && (this.curSecond = Math.floor(this.coolTimer), this.coolTimerLabel.string = "CD：" + this.curSecond.toString() + "s"))
                }, a.onClick = function() {
                    var e = this;
                    if (this.isLocked) {
                        this.playClickCancel();
                        var t = .1,
                            i = 1;
                        this.tipLock.setScale(i, i, i), i = 1.2;
                        var o = y.scaleTo(t, i, i, i);
                        t = .5, i = 1;
                        var n = y.scaleTo(t, i, i, i);
                        n.easing(y.easeElasticOut(.3));
                        var l = y.sequence(o, n);
                        y.getMng(L.UI).runAction(this.tipLock, l)
                    } else if (this.isCooling) {
                        this.playClickCancel();
                        var s = .1,
                            a = 1;
                        this.coolTimerLabel.node.setScale(a, a, a), a = 1.2;
                        var c = y.scaleTo(s, a, a, a);
                        s = .5, a = 1;
                        var r = y.scaleTo(s, a, a, a);
                        r.easing(y.easeElasticOut(.3));
                        var u = y.sequence(c, r);
                        y.getMng(L.UI).runAction(this.coolTimerLabel.node, u)
                    } else {
                        this.playClickBtn();
                        var h = 1;
                        this.tipLock.setScale(h, h, h), h = 1.1;
                        var g = y.scaleTo(.1, h, h, h);
                        h = 1;
                        var m = y.scaleTo(.1, h, h, h),
                            d = y.callFun((function() {
                                e.emit(p.LevelEvent.startWuJin)
                            })),
                            f = y.sequence(g, m, d);
                        y.getMng(L.UI).runAction(this.node, f)
                    }
                }, a.onEnterLobby = function() {
                    this.isLocked || b.get(d.myGlobalDataType.fightMode) == d.FightMode.wuJin && this.startCool()
                }, a.update = function(e) {
                    this.updateCooling(e)
                }, s(t, [{
                    key: "isLocked",
                    get: function() {
                        return this._isLocked
                    },
                    set: function(e) {
                        this._isLocked = e;
                        for (var t = this.grayImgs.length - 1; t >= 0; --t) this.grayImgs[t].grayscale = e;
                        this.iconLock.active = e, this.tipLock.active = e, e ? (this.contentImg.color = g(170, 170, 170, 255), this.coolTimerLabel.node.active = !1, this._isCooling = !1) : this.contentImg.color = m.WHITE
                    }
                }, {
                    key: "isCooling",
                    get: function() {
                        return this._isCooling
                    },
                    set: function(e) {
                        if (this.isLocked) this.coolTimerLabel.node.active = !1;
                        else {
                            this._isCooling = e;
                            for (var t = this.grayImgs.length - 1; t >= 0; --t) this.grayImgs[t].grayscale = e;
                            e ? (this.contentImg.color = g(170, 170, 170, 255), this.coolTimerLabel.node.active = !0, this.coolTimerLabel.string = "CD：" + this.curSecond.toString() + "s") : (this.contentImg.color = m.WHITE, this.coolTimerLabel.node.active = !1)
                        }
                    }
                }]), t
            }(T)).prototype, "grayImgs", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), _ = t(w.prototype, "contentImg", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(w.prototype, "iconLock", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(w.prototype, "tipLock", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(w.prototype, "coolTimerLabel", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = w)) || J));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UI", ["./PrivacyPolicyUI.ts", "./PlayerAssetBar.ts", "./BtnWeapon.ts", "./BtnHeiYe.ts", "./AddGoldUI.ts", "./UnlockTileUI.ts", "./CameraRotateCtrl.ts", "./CameraZoomCtrl.ts", "./PlayerJoyCtrl.ts", "./LevelController.ts", "./RenWuList.ts", "./LevelInfoUI.ts", "./PlayerSkillCtrl.ts", "./SettingUI.ts", "./LoseUI.ts", "./SettingCmp.ts", "./GameLobby.ts", "./EnemyInfoUI.ts", "./AttributeShopUI.ts", "./MaskAnim.ts", "./LevelTeachUI.ts", "./WeaponShopItem.ts", "./AddZuanShiUI.ts", "./LeaveSceneTipUI.ts", "./UnlockWeaponUI.ts", "./RenWuItem.ts", "./BossInfoUI.ts", "./VideoTipUI.ts", "./WinUI.ts", "./TipUnlockWeaponUI.ts", "./WeaponShopUI.ts", "./ResurgenceUI.ts", "./BtnWuJin.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/UI', 'chunks:///_virtual/UI');
})(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }],
            execute: function() {}
        };
    });
});