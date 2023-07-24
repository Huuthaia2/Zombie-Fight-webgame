System.register("chunks:///_virtual/LoadingUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var i, e, o, n, a, s, r, h, p, l, c, d, u, f, L, b;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, o = t.initializerDefineProperty, n = t.assertThisInitialized, a = t.defineProperty
        }, function(t) {
            s = t.cclegacy, r = t.Node, h = t.Label, p = t._decorator, l = t.Sprite, c = t.UITransform, d = t.Tween, u = t.UIOpacity, f = t.tween
        }, function(t) {
            L = t.EventType
        }, function(t) {
            b = t.default
        }],
        execute: function() {
            var g, v, T, m, y, w, k, P, R;
            s._RF.push({}, "326d3l9GUNNN6sC8bQK7+Ik", "LoadingUI", void 0);
            var _ = p,
                C = _.ccclass,
                E = _.property;
            t("default", (g = E(r), v = E(r), T = E(h), C((w = i((y = function(t) {
                function i() {
                    for (var i, e = arguments.length, s = new Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(s)) || this, o(n(i), "darkMark", w, n(i)), o(n(i), "bar", k, n(i)), a(n(i), "barTransform", null), o(n(i), "totalLength", P, n(i)), a(n(i), "preRate", 0), a(n(i), "_opacity", {
                        o: 0
                    }), o(n(i), "loadTipLabel", R, n(i)), i
                }
                e(i, t);
                var s = i.prototype;
                return s.init = function() {
                    0 == this.totalLength && (this.totalLength = this.bar.getComponent(l).spriteFrame.originalSize.width), this.bar.setPosition(-.5 * this.totalLength, this.bar.position.y), this.barTransform = this.bar.getComponent(c), this.barTransform.width = 1, this.preRate = 0, this.initLoadTips(), this.onEvents()
                }, s.onEvents = function() {
                    this.on(L.Common.LoadAssetEvent.showProgress, this.onShowProgress, this), this.on(L.Common.LoadAssetEvent.updateProgress, this.onUpdateProgress, this), this.on(L.Common.LoadAssetEvent.hideProgress, this.onHideProgress, this), this.on(L.Common.LoadAssetEvent.showLoadTip, this.showLoadTip, this), this.on(L.Common.LoadAssetEvent.hideLoadTip, this.hideLoadTip, this)
                }, s.onShowProgress = function(t) {
                    this.node.active = !0, this.showMask(!0), void 0 === t && (t = 0), t < this.preRate && (t = this.preRate);
                    var i = this.totalLength * t;
                    i = i > 1 ? i : 1, this.barTransform.width = i, this.preRate = t
                }, s.onUpdateProgress = function(t) {
                    if (1 != t) {
                        if (t > this.preRate) {
                            var i = this.totalLength * t;
                            i = i > 1 ? i : 1, this.barTransform.width = i, this.preRate = t
                        }
                    } else this.preRate = 0
                }, s.onHideProgress = function() {
                    var t = this;
                    this.node && (this.hideLoadTip(), this.showMask(!1, (function() {
                        t.node.active = !1
                    }))), this.preRate = 0
                }, s.showMask = function(t, i) {
                    var e = this;
                    if (this.darkMark) {
                        d.stopAllByTarget(this._opacity), this._opacity.o = t ? 0 : this._opacity.o;
                        var o = t ? 255 : 0,
                            n = this.darkMark.getComponent(u);
                        f(this._opacity).to(.2, {
                            o: o
                        }, {
                            onUpdate: function() {
                                n.opacity = e._opacity.o
                            }
                        }).call((function() {
                            i && i()
                        })).start()
                    } else i && i()
                }, s.initLoadTips = function() {
                    this.loadTipLabel.node.active = !1
                }, s.resetLoadTips = function() {
                    this.loadTipLabel.node.active = !1
                }, s.showLoadTip = function(t) {
                    this.loadTipLabel.node.active = !0, this.loadTipLabel.string = t
                }, s.hideLoadTip = function() {
                    this.loadTipLabel.node.active = !1
                }, i
            }(b)).prototype, "darkMark", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = i(y.prototype, "bar", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = i(y.prototype, "totalLength", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), R = i(y.prototype, "loadTipLabel", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = y)) || m));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameDirector.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts", "./UIManager.ts", "./GameData.ts", "./GlobalPool.ts", "./AdvertManager.ts", "./AudioManager.ts"], (function(e) {
    "use strict";
    var t, i, n, o, s, a, l, h, u, r, c, v, d, f, m, g, p, b, U, L, M, I, y, D, C, k;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, s = e.defineProperty
        }, function(e) {
            a = e.cclegacy, l = e.Node, h = e._decorator, u = e.UITransform, r = e.JsonAsset, c = e.instantiate, v = e.director, d = e.Prefab
        }, function(e) {
            f = e.GlobalEnum
        }, function(e) {
            m = e.EventType
        }, function(e) {
            g = e.default
        }, function(e) {
            p = e.default
        }, function(e) {
            b = e.default, U = e.ActionMngType
        }, function(e) {
            L = e.default
        }, function(e) {
            M = e.default
        }, function(e) {
            I = e.default
        }, function(e) {
            y = e.default
        }, function(e) {
            D = e.default
        }, function(e) {
            C = e.default
        }, function(e) {
            k = e.default
        }],
        execute: function() {
            var S, E, w, T, G, A, P, F, B, R;
            a._RF.push({}, "6d088A7nYNLd6wJkhsMlfmq", "GameDirector", void 0);
            var _ = h,
                N = _.ccclass,
                Y = _.property;
            e("default", (S = Y(l), E = Y(l), w = Y(l), T = Y([L]), N((P = t((A = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(a)) || this, n(o(t), "bg", P, o(t)), n(o(t), "mainLight", F, o(t)), n(o(t), "touchMask", B, o(t)), s(o(t), "touchMaskCount", void 0), s(o(t), "touchMaskElapsed", void 0), n(o(t), "defaultUIs", R, o(t)), s(o(t), "lobbyUIs", []), s(o(t), "levelUIs", []), s(o(t), "persistUIs", []), s(o(t), "uiActMng", null), s(o(t), "levelMng", null), s(o(t), "waitFinishYinSi", !1), s(o(t), "levelData", void 0), s(o(t), "chosedLevel", null), s(o(t), "winData", void 0), s(o(t), "loseData", void 0), t
                }
                i(t, e);
                var a = t.prototype;
                return a.start = function() {
                    this.init(), this.loadGameData(), this.mainLight.setPosition(0, 1, 0)
                }, a.update = function(e) {
                    this.updateTouchMask(e), this.uiActMng.update(e), this.customUpdate(e)
                }, a.initTouchMask = function() {
                    this.touchMask.active = !1, this.touchMaskCount = 0, this.touchMaskElapsed = -1
                }, a.resetTouchMask = function() {
                    this.touchMask.active = !1, this.touchMaskCount = 0, this.touchMaskElapsed = -1
                }, a.showTouchMask = function(e, t) {
                    void 0 === e && (e = 1), void 0 === t && (t = 3), this.touchMaskCount += e, this.touchMask.active = !0, this.touchMaskElapsed < t && (this.touchMaskElapsed = t), console.error("显示遮罩：", this.touchMaskCount, this.touchMaskElapsed)
                }, a.hideTouchMask = function(e) {
                    void 0 === e && (e = 1), this.touchMaskCount -= e, this.touchMaskCount <= 0 && (this.touchMaskCount = 0, this.touchMask.active = !1, this.touchMaskElapsed = -1), console.warn("隐藏遮罩：", this.touchMaskCount)
                }, a.updateTouchMask = function(e) {
                    this.touchMaskElapsed >= 0 && (this.touchMaskElapsed -= e, this.touchMaskElapsed < 0 && (this.touchMaskCount = 0, this.touchMask.active = !1, console.warn("自动隐藏遮罩")))
                }, a.pauseLevel = function() {
                    this.emit(m.Common.DirectorEvent.pauseLevel)
                }, a.resumeLevel = function() {
                    this.emit(m.Common.DirectorEvent.resumeLevel)
                }, a.showUIs = function(e) {
                    for (var t = e.length - 1; t >= 0; --t) this.emit(m.Common.UIEvent.enter, e[t])
                }, a.hideUIs = function(e) {
                    for (var t = e.length - 1; t >= 0; --t) this.emit(m.Common.UIEvent.exit, e[t])
                }, a.initDefaultUIs = function() {
                    for (var e = this.defaultUIs.length - 1; e >= 0; --e) this.defaultUIs[e].init()
                }, a.initUIConfig = function() {
                    this.lobbyUIs = [], this.lobbyUIs.push(f.UI.lobby), this.lobbyUIs.push(f.UI.unlockTile), this.lobbyUIs.push(f.UI.unlockWeapon), this.lobbyUIs.push(f.UI.attributeShop), this.levelUIs = [], this.levelUIs.push(f.UI.levelInfo), this.levelUIs.push(f.UI.levelController), this.levelUIs.push(f.UI.winUI), this.levelUIs.push(f.UI.loseUI), this.levelUIs.push(f.UI.pauseLevel), this.levelUIs.push(f.UI.resurgence), this.persistUIs = []
                }, a.initActMng = function() {
                    this.uiActMng = b.getMng(U.UI)
                }, a.init = function() {
                    this.initUIConfig(), this.initActMng(), this.initTouchMask(), this.initModels(), this.initDefaultUIs(), this.initCustomUpdateState(), this.registAllCustomUpdate(), this.onEvents()
                }, a.initModels = function() {
                    var e = this.node;
                    M.set(f.Common.GlobalDataType.canvas, e);
                    var t = e.getComponent(u);
                    M.set(f.Common.GlobalDataType.canvasTransform, t), C.init();
                    var i = this.node.getChildByName("UI");
                    M.set(f.Common.GlobalDataType.rootUI, i), I.init(i), k.init(), y.init();
                    var n = this.node.getChildByName("NativeAd");
                    this.emit(m.Common.HeyGameSDK.initAdNode, n)
                }, a.onEvents = function() {
                    this.on(m.Common.DirectorEvent.enterLevel, this.onEnterLevel, this), this.on(m.Common.DirectorEvent.enterLobby, this.enterGameLobby, this), this.on(m.Common.DirectorEvent.playerWin, this.onLevelWin, this), this.on(m.Common.DirectorEvent.playerLose, this.onLevelLose, this), this.on(m.Common.DirectorEvent.hideGameLobby, this.hideGameLobbyUI, this), this.on(m.Common.DirectorEvent.chooseTrySkinFinish, this.onChooseTrySkinFinish, this), this.on(m.Common.UIEvent.showTouchMask, this.showTouchMask, this), this.on(m.Common.UIEvent.hideTouchMask, this.hideTouchMask, this), this.on(m.LevelEvent.resurgence, this.onResurgence, this), this.on(m.LevelEvent.startFight, this.onStartFight, this)
                }, a.registAllCustomUpdate = function() {
                    this.registCustomUpdate(f.DirectState.level, this.stepLevelPlaying), this.registCustomUpdate(f.DirectState.lobby, this.stepLobby)
                }, a.reset = function() {
                    this.resetTouchMask(), this.resetCustomUpdateState()
                }, a.loadGameData = function() {
                    var e = this;
                    p.loadBundleDir("MainScene", "JSONData", (function(t) {
                        for (var i = [], n = 0, o = t.length; n < o; ++n) i.push(t[n].name);
                        y.setData(t, i), e.enterGameLobby(), e.onFinishYinSi()
                    }), r, !1)
                }, a.onFinishYinSi = function() {
                    this.waitFinishYinSi && (this.enterCustomUpdateState(f.DirectState.level), this.bg.active = !1)
                }, a.enterGameLobby = function() {
                    this.showUI(f.UI.playerAssetBar), this.onEnterLevel()
                }, a.showLevelLobby = function() {
                    var e = this;
                    p.loadBundle("LevelScene", (function() {
                        p.loadBundleDir("LevelScene", "MultipPrefab", (function(t) {
                            for (var i = t.length - 1; i >= 0; --i) D.createPool(t[i].data.name, t[i]);
                            p.loadBundleRes("LevelScene", "SinglePrefab/LevelManager", (function(t) {
                                if (!e.levelMng) {
                                    var i = c(t);
                                    e.levelMng = i.getComponent("LevelManager"), e.levelMng.init(), v.getScene().addChild(i)
                                }
                                var n = b.fadeTo(3, 1),
                                    o = b.callFun((function() {
                                        e.bg.active = !1, console.log("隐藏首页背景图")
                                    })),
                                    s = b.sequence(n, o);
                                b.getMng(U.UI).runAction(e.bg, s), e.customUpdateState == f.DirectState.lobby && e.levelMng.enterLobby()
                            }), d, !0)
                        }), d, !0)
                    }), !0, !0)
                }, a.hideGameLobbyUI = function() {
                    this.bg.active = !1, this.hideUIs(this.lobbyUIs), this.hideUIs(this.persistUIs), this.hideUI(f.UI.lobby)
                }, a.onEnterLevel = function(e) {
                    this.chosedLevel = e, this.levelMng ? this.checkEnterLevelScene() : this.loadLevelScene()
                }, a.getCurLevel = function() {
                    return g.getData("gameData.curLevel")
                }, a.showTrySkin = function() {
                    this.pauseLevel()
                }, a.onChooseTrySkinFinish = function() {
                    this.showTeachAnim()
                }, a.showTeachAnim = function() {}, a.loadLevelScene = function() {
                    var e = this;
                    p.loadBundle("LevelScene", (function() {
                        p.loadBundleDir("LevelScene", "MultipPrefab", (function(t) {
                            for (var i = t.length - 1; i >= 0; --i) D.createPool(t[i].data.name, t[i]);
                            p.loadBundleRes("LevelScene", "SinglePrefab/LevelManager", (function(t) {
                                if (!e.levelMng) {
                                    var i = c(t);
                                    e.levelMng = i.getComponent("LevelManager"), e.levelMng.init(), v.getScene().addChild(i)
                                }
                                e.onLoadLevelFinish()
                            }), d, !0)
                        }), d, !0)
                    }), !0, !0)
                }, a.onLoadLevelFinish = function() {
                    this.checkEnterLevelScene()
                }, a.checkEnterLevelScene = function() {
                    this.levelMng && this.enterLevelScene()
                }, a.enterLevelScene = function(e) {
                    if(window["fbSDK"].bannerInfo != null)
                    {
                        window["fbSDK"].bannerInfo.showBanner("enterLevelScene");
                    }
                    if (this.levelData) {
                        var t = this.levelData;
                        this.levelData = null, this.chosedLevel = null, this._enterLevelScene(t)
                    } else void 0 === e && (this.chosedLevel ? e = this.chosedLevel : (e = this.getCurLevel(), console.log("当前关卡：", e))), this.chosedLevel = null, y.getLevelData(e, this._enterLevelScene.bind(this))
                }, a._enterLevelScene = function(e) {

                    this.hideUIs(this.levelUIs), this.levelMng.enterLevel(e), this.emit(m.Common.DirectorEvent.pauseLevel, 1), this.showUI(f.UI.levelInfo, e), this.showUI(f.UI.levelController), g.getData("privacyPolicy") ? (this.enterCustomUpdateState(f.DirectState.level), this.bg.active = !1) : this.waitFinishYinSi = !0

                }, a.onLevelWin = function(e) {
                    this.winData = e, this.addCurLevel(e), this.showUI(f.UI.winUI, this.winData)
                }, a.addCurLevel = function(e) {
                    switch (M.get(f.myGlobalDataType.fightMode)) {
                        case f.FightMode.normal:
                            this.emit(m.Common.PlayerDataEvent.updatePlayerData, {
                                type: "gameData",
                                attribute: "gameData.curLevel",
                                value: 1,
                                mode: "+"
                            });
                            break;
                        default:
                            return
                    }
                }, a.updateLevelRecord = function(e) {
                    if (void 0 !== e.star) {
                        var t = g.getData("gameData.levelRecords");
                        (!t[e.lv] || t[e.lv] < e.star) && (t[e.lv] = e.star, this.emit(m.Common.PlayerDataEvent.updatePlayerData, {
                            attribute: "gameData.levelRecords",
                            value: t,
                            mode: "=",
                            save: !0,
                            emit: !1
                        }))
                    }
                }, a.onLevelLose = function(e) {
                    this.loseData = e, this.showUI(f.UI.loseUI, this.loseData)
                }, a.onResurgence = function() {
                    this.hideUIs(this.lobbyUIs)
                }, a.stepWaitYinSi = function() {}, a.stepLobby = function(e) {
                    this.levelMng && this.levelMng.running(e)
                }, a.stepLevelPlaying = function(e) {
                    this.levelMng.running(e)
                }, a.onStartFight = function() {
                    if(window["fbSDK"].bannerInfo != null)
                    {
                        window["fbSDK"].bannerInfo.showBanner("enterLevelScene");
                    }
                    this.hideUIs(this.lobbyUIs)
                }, t
            }(L)).prototype, "bg", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(A.prototype, "mainLight", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(A.prototype, "touchMask", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(A.prototype, "defaultUIs", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), G = A)) || G));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SimpleSky.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GlobalData.ts"], (function(e) {
    "use strict";
    var t, r, n, i, o, a, l, c, s, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, r = e.inheritsLoose, n = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, a = e._decorator, l = e.MeshRenderer, c = e.Component
        }, function(e) {
            s = e.GlobalEnum
        }, function(e) {
            u = e.default
        }],
        execute: function() {
            var p, f, h, m, y;
            o._RF.push({}, "f1b68xHh6JOr4VJ4BoT2iNI", "SimpleSky", void 0);
            var d = a.ccclass,
                b = a.property;
            e("SimpleSky", (p = d("SimpleSky"), f = b(l), p((y = t((m = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(i(t), "meshRender", y, i(t)), t
                }
                return r(t, e), t.prototype.createMesh = function() {
                    var e = u.get(s.Common.GlobalDataType.canvasTransform);
                    e.width, e.height
                }, t
            }(c)).prototype, "meshRender", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = m)) || h));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TipMessage.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./Action3dManager.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, n, i, r, o, s, a, u, c, l, f, p, h, g;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, r = t.assertThisInitialized, o = t.defineProperty
        }, function(t) {
            s = t.cclegacy, a = t._decorator, u = t.Node, c = t.UITransform, l = t.Label
        }, function(t) {
            f = t.EventType
        }, function(t) {
            p = t.default, h = t.ActionMngType
        }, function(t) {
            g = t.default
        }],
        execute: function() {
            var d, T, v, y, m, b, w, M, E, z;
            s._RF.push({}, "fa03fEKcf5HdqLeM7wO+JGh", "TipMessage", void 0);
            var _ = a.ccclass,
                A = a.property;
            t("default", (d = A(u), T = A(c), v = A(l), y = A(c), _((w = e((b = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(s)) || this, i(r(e), "tip", w, r(e)), i(r(e), "tipTransf", M, r(e)), i(r(e), "msg", E, r(e)), i(r(e), "msgTransf", z, r(e)), o(r(e), "action", null), e
                }
                n(e, t);
                var s = e.prototype;
                return s.init = function() {
                    this.onEvents(), this.hide()
                }, s.onEvents = function() {
                    this.on(f.Common.UIEvent.showTip, this.show, this)
                }, s.reset = function() {}, s.show = function(t) {
                    this.node.active = !0, this.setMsg(t);
                    var e = 0,
                        n = 0,
                        i = (p.scaleTo(e, n, n, n), p.fadeTo(e, 1));
                    e = .3;
                    var r = p.fadeTo(e, 255);
                    e = 1, n = 1, p.scaleTo(e, n, n, n).easing(p.easeElasticOut());
                    var o = p.delay(2);
                    e = 1;
                    var s = p.fadeTo(e, 1),
                        a = p.callFun(this.hide, this),
                        u = p.sequence(i, r, o, s, a);
                    p.getMng(h.UI).runAction(this.tip, u)
                }, s.hide = function() {
                    this.node.active = !1
                }, s.setMsg = function(t) {
                    var e = this;
                    this.msg.string = t, setTimeout((function() {
                        e.tipTransf.height = e.msgTransf.height + 20
                    }), 20)
                }, e
            }(g)).prototype, "tip", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = e(b.prototype, "tipTransf", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = e(b.prototype, "msg", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = e(b.prototype, "msgTransf", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = b)) || m));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MainScene", ["./LoadingUI.ts", "./GameDirector.ts", "./SimpleSky.ts", "./TipMessage.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null],
        execute: function() {}
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/MainScene', 'chunks:///_virtual/MainScene');
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