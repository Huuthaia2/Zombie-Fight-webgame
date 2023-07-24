System.register("chunks:///_virtual/BulletChuanTou.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Enemy.ts", "./Bullet.ts"], (function(t) {
    "use strict";
    var e, n, i, o, r, s, u;
    return {
        setters: [function(t) {
            e = t.inheritsLoose, n = t.defineProperty, i = t.assertThisInitialized
        }, function(t) {
            o = t.cclegacy, r = t._decorator
        }, function(t) {
            s = t.EnemyPool
        }, function(t) {
            u = t.Bullet
        }],
        execute: function() {
            var c;
            o._RF.push({}, "003b3wbZjhJeqwr3+A5YGf4", "BulletChuanTou", void 0);
            var a = r.ccclass;
            r.property, t("BulletChuanTou", a("BulletChuanTou")(c = function(t) {
                function o() {
                    for (var e, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(r)) || this, n(i(e), "atkRecord", void 0), n(i(e), "duration", .75), e
                }
                e(o, t);
                var r = o.prototype;
                return r.initSub = function() {
                    this.initAtkRecord(), this.initAtkScope(), this.initMoveData()
                }, r.resetSub = function() {
                    this.resetAtkRecord(), this.resetMoveData()
                }, r.initAtkRecord = function() {
                    this.atkRecord = {}
                }, r.resetAtkRecord = function() {
                    this.atkRecord = {}
                }, r.atkEnemies = function(t, e) {
                    for (var n = this.atkIndexes, i = n.length - 1; i >= 0; --i) {
                        var o = t[e + n[i]];
                        if (o && !this.atkRecord[o]) {
                            var r = s.getInstanceById(o);
                            if (this.onAtk(r)) {
                                this.atkRecord[o] = !0;
                                break
                            }
                        }
                    }
                }, o
            }(u)) || c);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TileUnlockRoom.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./LiquidManager.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelMap.ts", "./LevelColler.ts", "./CustomLabel3D.ts"], (function(i) {
    "use strict";
    var e, t, o, n, l, s, a, r, u, c, d, h, f, m, y, p, g, R, b, P, v, x, G, L;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor, t = i.inheritsLoose, o = i.defineProperty, n = i.assertThisInitialized, l = i.initializerDefineProperty, s = i.createClass
        }, function(i) {
            a = i.cclegacy, r = i._decorator, u = i.v2, c = i.v3
        }, function(i) {
            d = i.GlobalEnum
        }, function(i) {
            h = i.default
        }, function(i) {
            f = i.default, m = i.LiquidColliderType, y = i.LiquidBodyType
        }, function(i) {
            p = i.EventType
        }, function(i) {
            g = i.default
        }, function(i) {
            R = i.default
        }, function(i) {
            b = i.default
        }, function(i) {
            P = i.Tile, v = i.TileMap, x = i.Wall
        }, function(i) {
            G = i.AABB
        }, function(i) {
            L = i.CustomLabel3D
        }],
        execute: function() {
            var T, k, z, B, S;
            a._RF.push({}, "15e8bW3sM9EAL5EsJ7IdB7v", "TileUnlockRoom", void 0);
            var D = r.ccclass,
                A = r.property;
            i("TileUnlockRoom", (T = D("TileUnlockRoom"), k = A(L), T((S = e((B = function(i) {
                function e() {
                    for (var e, t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
                    return e = i.call.apply(i, [this].concat(s)) || this, o(n(e), "tilePos", u()), o(n(e), "rigid", void 0), o(n(e), "rigidJustPlayer", void 0), o(n(e), "_aabb", null), o(n(e), "unlockRoomMaxGold", 0), o(n(e), "unlockRoomRemainGold", 0), l(n(e), "priceLabel", S, n(e)), e
                }
                t(e, i);
                var a = e.prototype;
                return a.initSub = function() {
                    this.initAABB(), this.initGold(), this.initPriceLabel(), this.initRigid()
                }, a.resetSub = function() {
                    this.resetAABB(), this.resetGold(), this.resetPriceLabel(), this.resetRigid()
                }, a.onEvents = function() {
                    this.on(p.LevelEvent.unlockRoom, this.onPlayerUnlockRoom, this)
                }, a.setData = function(i) {
                    this.tilePos.set(i.tilePos);
                    var e = c();
                    P.convertToWorld(i.tilePos.x, i.tilePos.y, e), this.node.setPosition(e), this.unlockRoomMaxGold = i.unlockRoomMaxGold, this.unlockRoomRemainGold = i.unlockRoomRemainGold;
                    for (var t = [0, 1, 0, -1, 1, 0, -1, 0], o = 0; o < 8 && !this.checkPriceTile(i.tilePos, t[o], t[o + 1]); o += 2);
                    var n = 1.5;
                    this._aabb.setMinVert(-n, 0, -n), this._aabb.setMaxVert(n, 1, n), e.x += t[o] * h.GameRule.tileSize.x * .5, e.z -= t[o + 1] * h.GameRule.tileSize.z * .5, this._aabb.addOffset(e);
                    var l = 0;
                    0 != t[o] && (l = .5 * Math.PI), this.createRigid(e, l), e.x = t[o] * h.GameRule.tileSize.x + .2, e.z = -t[o + 1] * h.GameRule.tileSize.z + .5, e.y = .01, this.setPriceLabel({
                        p: e,
                        v: this.unlockRoomRemainGold
                    })
                }, a.checkPriceTile = function(i, e, t) {
                    var o = v.getTile(i.x + 2 * e, i.y + 2 * t),
                        n = x.map[i.x + e][i.y + t];
                    return !o && !n
                }, a.onEnterColl = function() {
                    b.get(d.myGlobalDataType.isLevelFighting) || this.showUI(d.UI.unlockTile, {
                        type: d.TileContentType.unlockRoom,
                        gold: this.unlockRoomRemainGold,
                        tilePos: this.tilePos
                    })
                }, a.onExitColl = function() {
                    b.get(d.myGlobalDataType.isLevelFighting) || this.hideUI(d.UI.unlockTile)
                }, a.onPlayerUnlockRoom = function(i) {
                    this.tilePos.x == i.x && this.tilePos.y == i.y && this.emit(p.LevelEvent.removeTileUnlockRoom, this)
                }, a.initRigid = function() {}, a.resetRigid = function() {
                    this.rigid && this.rigid.SetTransform({
                        x: this.node.position.x,
                        y: -this.node.position.z
                    }, 0), this.rigidJustPlayer && this.rigidJustPlayer.SetTransform({
                        x: this.node.position.x + h.GameRule.enemyMapOffset.x,
                        y: -this.node.position.z
                    }, 0)
                }, a.createRigid = function(i, e) {
                    if (this.rigid) return this.rigid.SetTransform({
                        x: i.x,
                        y: i.z
                    }, e), void(this.rigidJustPlayer && this.rigidJustPlayer.SetTransform({
                        x: i.x + h.GameRule.enemyMapOffset.x,
                        y: i.z
                    }, e));
                    var t = {
                            size: {
                                width: h.GameRule.tileSize.x,
                                height: h.GameRule.wallSize.z
                            }
                        },
                        o = f.CreateCollider(t, m.box),
                        n = {
                            active: !0,
                            allowSleep: !0,
                            angle: e,
                            angularVelocity: 0,
                            angularDamping: 0,
                            awake: !0,
                            bullet: !1,
                            fixedRotation: !0,
                            gravityScale: 0,
                            linearDamping: 0,
                            position: {
                                x: i.x,
                                y: i.z
                            },
                            type: y.b2_staticBody,
                            userData: null
                        },
                        l = {
                            density: 0,
                            friction: 0,
                            isSensor: !1,
                            restitution: 0,
                            shape: null,
                            userData: null
                        };
                    this.rigid = f.CreateRigid([o], n, l).body, n.position.x += h.GameRule.enemyMapOffset.x, this.rigidJustPlayer = f.CreateRigid([o], n, l).body
                }, a.initAABB = function() {
                    this._aabb = new G
                }, a.resetAABB = function() {}, a.getAABB = function() {
                    return this._aabb
                }, a.initGold = function() {}, a.resetGold = function() {}, a.setGold = function() {}, a.initPriceLabel = function() {
                    this.priceLabel.init()
                }, a.resetPriceLabel = function() {
                    this.priceLabel.reset()
                }, a.setPriceLabel = function(i) {
                    this.priceLabel.reuse(i)
                }, a.getPriceWorldPos = function(i) {
                    this.priceLabel.node.getWorldPosition(i)
                }, s(e, [{
                    key: "canGrow",
                    get: function() {
                        return g.getPlayerData().asset.gold >= this.unlockRoomRemainGold
                    }
                }]), e
            }(R)).prototype, "priceLabel", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = B)) || z));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Wall2Mesh.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./LevelMap.ts"], (function(t) {
    "use strict";
    var e, r, s, a, i, n, o, l, h, u, c, p, d, f;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, s = t.initializerDefineProperty, a = t.assertThisInitialized, i = t.defineProperty
        }, function(t) {
            n = t.cclegacy, o = t._decorator, l = t.MeshRenderer, h = t.Mesh, u = t.utils, c = t.gfx, p = t.Component
        }, function(t) {
            d = t.GlobalEnum
        }, function(t) {
            f = t.Wall
        }],
        execute: function() {
            var v, A, m, b, M, g, R;
            n._RF.push({}, "17532t7XRpHy6YuRSoHC+HV", "Wall2Mesh", void 0);
            var y = o.ccclass,
                T = o.property;
            t("Wall2Mesh", (v = y("Wall2Mesh"), A = T(l), m = T(h), v((g = e((M = function(t) {
                function e() {
                    for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(n)) || this, s(a(e), "meshRender", g, a(e)), s(a(e), "wall2", R, a(e)), i(a(e), "baseMeshData", void 0), e
                }
                r(e, t);
                var n = e.prototype;
                return n.reset = function() {
                    this.meshRender.mesh = null
                }, n.createMesh = function() {
                    var t = this;
                    this.recordWallMesh();
                    for (var e = f.pool.getAllItems(), r = f.pool.count, s = e.length, a = {
                            positions: [],
                            normals: [],
                            tangents: [],
                            uvs: [],
                            indices: []
                        }, i = r; i < s; ++i) {
                        var n = e[i];
                        if (n.type == d.WallModel.wangGe) {
                            var o = "wall2";
                            n.tilePos.x % 2 == 0 && (o += "90"), this.pushWall(a, this.baseMeshData[o], n.position)
                        }
                    }
                    setTimeout((function() {
                        t.meshRender.mesh = u.createMesh(a)
                    }), 0)
                }, n.pushWall = function(t, e, r) {
                    var s = t.positions.length / 3;
                    this.recordArrAddV3(t.positions, e.positions, r), this.recordArr(t.normals, e.normals), this.recordArr(t.tangents, e.tangents), this.recordArr(t.uvs, e.uvs), this.recordArrOffset(t.indices, e.indices, s)
                }, n.recordArrOffset = function(t, e, r) {
                    for (var s = 0, a = e.length; s < a; ++s) t.push(e[s] + r)
                }, n.recordArr = function(t, e) {
                    for (var r = 0, s = e.length; r < s; ++r) t.push(e[r])
                }, n.recordArrAddV3 = function(t, e, r) {
                    for (var s = 0, a = e.length; s < a; s += 3) t.push(e[s] + r.x), t.push(e[s + 1] + r.y), t.push(e[s + 2] + r.z)
                }, n.recordWallMesh = function() {
                    if (!this.baseMeshData) {
                        this.baseMeshData = {}, this.baseMeshData.wall2 = this.recordMeshData(this.wall2);
                        var t = this.recordMeshData(this.wall2);
                        this.rotatePosY(t.positions), this.rotatePosY(t.normals), this.rotatePosY(t.tangents), this.baseMeshData.wall290 = t
                    }
                }, n.recordMeshData = function(t) {
                    var e = {};
                    return e.positions = t.readAttribute(0, c.AttributeName.ATTR_POSITION), e.normals = t.readAttribute(0, c.AttributeName.ATTR_NORMAL), e.tangents = t.readAttribute(0, c.AttributeName.ATTR_TANGENT), e.uvs = t.readAttribute(0, c.AttributeName.ATTR_TEX_COORD), e.indices = t.readIndices(0), this.rotatePosX(e.positions), this.rotatePosX(e.normals), this.rotatePosX(e.tangents), e
                }, n.rotatePosX = function(t) {
                    for (var e = t.length / 3, r = 0; r < e; ++r) {
                        var s = 3 * r + 1,
                            a = t[s];
                        t[s] = t[s + 1], t[s + 1] = -a
                    }
                }, n.rotatePosY = function(t) {
                    for (var e = t.length / 3, r = 0; r < e; ++r) {
                        var s = 3 * r,
                            a = t[s];
                        t[s] = t[s + 2], t[s + 2] = -a
                    }
                }, e
            }(p)).prototype, "meshRender", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = e(M.prototype, "wall2", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = M)) || b));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UIPlayer.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var r, t, n, o, i, a, s, c;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized
        }, function(e) {
            i = e.cclegacy, a = e._decorator, s = e.Node, c = e.Component
        }],
        execute: function() {
            var l, p, u, y, f;
            i._RF.push({}, "20d74+PThBEeYtgerBJFSCS", "UIPlayer", void 0);
            var h = a.ccclass,
                v = a.property;
            e("UIPlayer", (l = h("UIPlayer"), p = v([s]), l((f = r((y = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                    return r = e.call.apply(e, [this].concat(i)) || this, n(o(r), "weapons", f, o(r)), r
                }
                return t(r, e), r.prototype.showWeapon = function(e) {
                    for (var r = this.weapons.length - 1; r >= 0; --r) this.weapons[r].active = r == e
                }, r
            }(c)).prototype, "weapons", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), u = y)) || u));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Wall1Mesh.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./PlayerData.ts", "./Loader.ts", "./LevelMap.ts"], (function(t) {
    "use strict";
    var e, r, a, s, n, i, o, l, h, u, c, d, f, p, m, g, v;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, a = t.initializerDefineProperty, s = t.assertThisInitialized, n = t.defineProperty
        }, function(t) {
            i = t.cclegacy, o = t._decorator, l = t.MeshRenderer, h = t.Mesh, u = t.utils, c = t.gfx, d = t.Component
        }, function(t) {
            f = t.GlobalEnum
        }, function(t) {
            p = t.default
        }, function(t) {
            m = t.default
        }, function(t) {
            g = t.default
        }, function(t) {
            v = t.Wall
        }],
        execute: function() {
            var M, b, A, w, D, P, y, R, T;
            i._RF.push({}, "271a3sO0nxLHbyJLDrjeVrG", "Wall1Mesh", void 0);
            var W = o.ccclass,
                N = o.property;
            t("Wall1Mesh", (M = W("Wall1Mesh"), b = N(l), A = N(h), w = N(h), M((y = e((P = function(t) {
                function e() {
                    for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(i)) || this, a(s(e), "meshRender", y, s(e)), a(s(e), "wall1", R, s(e)), a(s(e), "wall2", T, s(e)), n(s(e), "baseMeshData", void 0), n(s(e), "mat", null), e
                }
                r(e, t);
                var i = e.prototype;
                return i.reset = function() {
                    this.meshRender.mesh = null
                }, i.setWallImg = function() {
                    var t = this;
                    this.initMat();
                    var e = p.GameRule.sceneLvConfig[m.getPlayerData().curSceneIndex].sceneId,
                        r = p.GameRule.sceneConfig[e].wallImg;
                    r ? g.loadBundleRes("LevelScene", "textures/" + r + "/texture", (function(e) {
                        e && t.mat.setProperty("mainTexture", e)
                    })) : this.mat.setProperty("mainTexture", null)
                }, i.createMesh = function(t) {
                    var e = this;
                    this.recordWallMesh();
                    for (var r = v.pool.getAllItems(), a = v.pool.count, s = r.length, n = {
                            positions: [],
                            normals: [],
                            tangents: [],
                            uvs: [],
                            indices: []
                        }, i = a; i < s; ++i) {
                        var o = r[i],
                            l = this.getWallNodeName(o.type);
                        o.tilePos.x % 2 == 0 && (l += "90"), this.pushWall(n, this.baseMeshData[l], o.position)
                    }
                    for (var h = t.length - 1; h >= 0; --h) {
                        var c = "wall1";
                        t[h].tilePos.x % 2 == 0 && (c += "90"), this.pushWall(n, this.baseMeshData[c], t[h].position)
                    }
                    setTimeout((function() {
                        e.meshRender.mesh = u.createMesh(n)
                    }), 0)
                }, i.getWallNodeName = function(t) {
                    switch (t) {
                        case f.WallModel.wall:
                            return "wall1";
                        case f.WallModel.wangGe:
                            return "wall2"
                    }
                    return "wall1"
                }, i.pushWall = function(t, e, r) {
                    var a = t.positions.length / 3;
                    this.recordArrAddV3(t.positions, e.positions, r), this.recordArr(t.normals, e.normals), this.recordArr(t.tangents, e.tangents), this.recordArr(t.uvs, e.uvs), this.recordArrOffset(t.indices, e.indices, a)
                }, i.recordArrOffset = function(t, e, r) {
                    for (var a = 0, s = e.length; a < s; ++a) t.push(e[a] + r)
                }, i.recordArr = function(t, e) {
                    for (var r = 0, a = e.length; r < a; ++r) t.push(e[r])
                }, i.recordArrAddV3 = function(t, e, r) {
                    for (var a = 0, s = e.length; a < s; a += 3) t.push(e[a] + r.x), t.push(e[a + 1] + r.y), t.push(e[a + 2] + r.z)
                }, i.recordWallMesh = function() {
                    if (!this.baseMeshData) {
                        this.baseMeshData = {}, this.baseMeshData.wall1 = this.recordMeshData(this.wall1), this.baseMeshData.wall2 = this.recordMeshData(this.wall2);
                        var t = this.recordMeshData(this.wall1);
                        this.rotatePosY(t.positions), this.rotatePosY(t.normals), this.rotatePosY(t.tangents), this.baseMeshData.wall190 = t;
                        var e = this.recordMeshData(this.wall2);
                        this.rotatePosY(e.positions), this.rotatePosY(e.normals), this.rotatePosY(e.tangents), this.baseMeshData.wall290 = e
                    }
                }, i.recordMeshData = function(t) {
                    var e = {};
                    return e.positions = t.readAttribute(0, c.AttributeName.ATTR_POSITION), e.normals = t.readAttribute(0, c.AttributeName.ATTR_NORMAL), e.tangents = t.readAttribute(0, c.AttributeName.ATTR_TANGENT), e.uvs = t.readAttribute(0, c.AttributeName.ATTR_TEX_COORD), e.indices = t.readIndices(0), this.rotatePosX(e.positions), this.rotatePosX(e.normals), this.rotatePosX(e.tangents), e
                }, i.rotatePosX = function(t) {
                    for (var e = t.length / 3, r = 0; r < e; ++r) {
                        var a = 3 * r + 1,
                            s = t[a];
                        t[a] = t[a + 1], t[a + 1] = -s
                    }
                }, i.rotatePosY = function(t) {
                    for (var e = t.length / 3, r = 0; r < e; ++r) {
                        var a = 3 * r,
                            s = t[a];
                        t[a] = t[a + 2], t[a + 2] = -s
                    }
                }, i.initMat = function() {
                    this.mat || (this.mat = this.meshRender.getMaterial(0))
                }, e
            }(d)).prototype, "meshRender", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = e(P.prototype, "wall1", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = e(P.prototype, "wall2", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = P)) || D));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ItemMap.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts"], (function(t) {
    "use strict";
    var i, e, s;
    return {
        setters: [function(t) {
            i = t.defineProperty
        }, function(t) {
            e = t.cclegacy
        }, function(t) {
            s = t.default
        }],
        execute: function() {
            e._RF.push({}, "2fa02RfOCNISIzjv2BHAC1H", "ItemMap", void 0);
            var n = {
                x: 0,
                y: 0
            };
            t("default", function() {
                function t() {
                    i(this, "data", void 0), i(this, "size", void 0), i(this, "scale", void 0), i(this, "invScale", void 0), i(this, "offset", void 0)
                }
                var e = t.prototype;
                return e.init = function(t) {
                    this.size = {
                        x: 0,
                        y: 0
                    }, this.scale = {
                        x: 1,
                        y: 1
                    }, this.invScale = {
                        x: 1,
                        y: 1
                    }, this.offset = {
                        x: 0,
                        y: 0
                    }, this.data = new Int16Array(1), t && this.setSize(t)
                }, e.setSize = function(t) {
                    this.size.x = t.size.x, this.size.y = t.size.y, this.scale.x = t.scale.x, this.scale.y = t.scale.y, this.invScale.x = 1 / this.scale.x, this.invScale.y = 1 / this.scale.y, this.offset.x = t.offset.x, this.offset.y = t.offset.y;
                    var i = 0;
                    void 0 !== t.enabled && (i = t.enabled ? 0 : -1);
                    var e = new ArrayBuffer(this.size.x * this.size.y * 2);
                    this.data = new Int16Array(e), this.data.fill(i)
                }, e.reset = function() {
                    this.data.fill(0)
                }, e.convertToIndex = function(t, i, e) {
                    t.x = Math.round((i - this.offset.x) * this.scale.x), t.y = Math.round((this.offset.y - e) * this.scale.y)
                }, e.convertToBufferIndex = function(t, i) {
                    return i * this.size.x + t
                }, e.reconverToWorld = function(t, i, e) {
                    t.x = i * this.invScale.x + this.offset.x, t.z = -e * this.invScale.y + this.offset.y
                }, e.inScope = function(t) {
                    return t.x >= 0 && t.x < this.size.x && t.y >= 0 && t.y < this.size.y
                }, e.clampPosX = function(t) {
                    return t < 0 ? 0 : t >= this.size.x ? this.size.x - 1 : t
                }, e.clampPosY = function(t) {
                    return t < 0 ? 0 : t >= this.size.y ? this.size.y - 1 : t
                }, e.setDisable = function(t, i, e) {
                    if (void 0 === e && (e = !1), e ? (n.x = t, n.y = i) : this.convertToIndex(n, t, i), this.inScope(n)) {
                        var s = this.convertToBufferIndex(n.x, n.y);
                        this.data[s] = -1
                    }
                }, e.setEnable = function(t, i, e) {
                    if (void 0 === e && (e = !1), e ? (n.x = t, n.y = i) : this.convertToIndex(n, t, i), this.inScope(n)) {
                        var s = this.convertToBufferIndex(n.x, n.y); - 1 == this.data[s] && (this.data[s] = 0)
                    }
                }, e.setDisableRect = function(t, i, e, s, o) {
                    void 0 === o && (o = !1);
                    var a = t,
                        r = t + e,
                        h = i,
                        c = i + s;
                    if (o || (this.convertToIndex(n, a, h), a = n.x, h = n.y, this.convertToIndex(n, r, c), r = n.x, c = n.y), !(a >= this.size.x || h >= this.size.y || r < 0 || c < 0)) {
                        a = this.clampPosX(a), r = this.clampPosX(r), h = this.clampPosY(h), c = this.clampPosY(c);
                        for (var f = h; f <= c; ++f)
                            for (var d = this.convertToBufferIndex(a, f), x = a; x <= r; ++x) 0 == this.data[d] && (this.data[d] = -1), d++
                    }
                }, e.setEnableRect = function(t, i, e, s, o) {
                    void 0 === o && (o = !1);
                    var a = t,
                        r = t + e,
                        h = i,
                        c = i + s;
                    if (o || (this.convertToIndex(n, a, h), a = n.x, h = n.y, this.convertToIndex(n, r, c), r = n.x, c = n.y), !(a >= this.size.x || h >= this.size.y || r < 0 || c < 0)) {
                        a = this.clampPosX(a), r = this.clampPosX(r), h = this.clampPosY(h), c = this.clampPosY(c);
                        for (var f = h; f <= c; ++f)
                            for (var d = this.convertToBufferIndex(a, f), x = a; x <= r; ++x) - 1 == this.data[d] && (this.data[d] = 0), d++
                    }
                }, e.addItem = function(t, i, e, s) {
                    if (void 0 === s && (s = !1), s ? (n.x = t, n.y = i) : this.convertToIndex(n, t, i), this.inScope(n)) {
                        var o = this.convertToBufferIndex(n.x, n.y);
                        if (0 == this.data[o]) return this.data[o] = e, !0
                    }
                    return !1
                }, e.removeItem = function(t, i, e) {
                    void 0 === e && (e = !1), e ? (n.x = t, n.y = i) : this.convertToIndex(n, t, i);
                    var s = this.convertToBufferIndex(n.x, n.y),
                        o = this.data[s];
                    return -1 != o ? this.data[s] = 0 : o = 0, o
                }, e.getItem = function(t, i, e) {
                    if (void 0 === e && (e = !1), e ? (n.x = t, n.y = i) : this.convertToIndex(n, t, i), this.inScope(n)) {
                        var s = this.convertToBufferIndex(n.x, n.y);
                        return this.data[s]
                    }
                    return 0
                }, e.getItemsRect = function(t, i, e, s, o, a) {
                    void 0 === a && (a = !1);
                    var r = i,
                        h = i + s,
                        c = e,
                        f = e + o;
                    if (a || (this.convertToIndex(n, r, c), r = n.x, c = n.y, this.convertToIndex(n, h, f), h = n.x, f = n.y), !(r >= this.size.x || c >= this.size.y || h < 0 || f < 0)) {
                        r = this.clampPosX(r), h = this.clampPosX(h), c = this.clampPosY(c), f = this.clampPosY(f);
                        for (var d = c; d <= f; ++d)
                            for (var x = this.convertToBufferIndex(r, d), v = r; v <= h; ++v) {
                                var u = this.data[x];
                                t.push(u), x++
                            }
                    }
                }, e.getData = function() {
                    return this.data
                }, e.getAllData = function() {
                    return this.data
                }, e.getBarriers = function() {}, e.getCircleIndexes = function(t, i) {
                    for (var e = t * s.GameRule.world2Map, n = {}, o = .017453, a = .5 * Math.PI, r = Math.floor(a / o), h = 0; h <= r; ++h) {
                        var c = h * o;
                        n[h] = {
                            s: Math.sin(c),
                            c: Math.cos(c)
                        }
                    }
                    for (var f = 1 / s.GameRule.enemyMapScale.x, d = 0; d < e; d += f)
                        for (var x = 0; x <= r; ++x) {
                            var v = Math.round(d * n[x].c),
                                u = Math.round(d * n[x].s),
                                l = this.convertToMapIndex(v, u);
                            i.indexOf(l) < 0 && i.push(l), l = this.convertToMapIndex(v, -u), i.indexOf(l) < 0 && i.push(l), l = this.convertToMapIndex(-v, -u), i.indexOf(l) < 0 && i.push(l), l = this.convertToMapIndex(-v, u), i.indexOf(l) < 0 && i.push(l)
                        }
                }, e.convertToMapIndex = function(t, i) {
                    return -i * this.size.x + t
                }, t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/duYeParticle.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, s, r, n, o, a, i;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }, function(t) {
            s = t.cclegacy, r = t._decorator, n = t.MeshRenderer, o = t.gfx, a = t.utils
        }, function(t) {
            i = t.default
        }],
        execute: function() {
            var u;
            s._RF.push({}, "30e6diAO3tHyq16y2LeklIb", "duYeParticle", void 0);
            var c = r.ccclass;
            r.property, r.executeInEditMode, t("DuYeParticle", c("DuYeParticle")(u = function(t) {
                function s() {
                    return t.apply(this, arguments) || this
                }
                e(s, t);
                var r = s.prototype;
                return r.onEnable = function() {
                    var t = this.node.getComponent(n);
                    t.mesh || this.createMesh(t)
                }, r.createMesh = function(t) {
                    for (var e = {
                            positions: [],
                            uvs: [],
                            indices: [],
                            customAttributes: [{
                                attr: {
                                    name: "a_speed",
                                    format: o.Format.RGBA32F,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }]
                        }, s = .06, r = 0, n = .8, i = 0; i < 30; ++i) {
                        e.positions.push(-s, s, 0, -s, -s, 0, s, -s, 0, s, s, 0), e.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), e.indices.push(r, r + 1, r + 2, r, r + 2, r + 3), r += 4, n = .3 * Math.random() + .8;
                        var u = (Math.random() - .5) * n,
                            c = (Math.random() + .2) * n,
                            h = (Math.random() - .5) * n,
                            d = 1 * Math.random() + .5;
                        e.customAttributes[0].values.push(u, c, h, d, u, c, h, d, u, c, h, d, u, c, h, d)
                    }
                    t.mesh = a.createMesh(e)
                }, s
            }(i)) || u);
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EnemyDeathAnim.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts", "./GlobalPool.ts"], (function(t) {
    "use strict";
    var e, i, s, o, n, a, h, c, u, l, r, p, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.defineProperty, s = t.inheritsLoose, o = t.assertThisInitialized, n = t.initializerDefineProperty
        }, function(t) {
            a = t.cclegacy, h = t._decorator, c = t.SkeletalAnimation, u = t.director, l = t.v3
        }, function(t) {
            r = t.default
        }, function(t) {
            p = t.default, d = t.customPoolScript
        }],
        execute: function() {
            var y, f, m, P, v;
            a._RF.push({}, "3327aZwtbVC+4RFUpHQHI61", "EnemyDeathAnim", void 0);
            var g, _ = h.ccclass,
                D = h.property;
            t("EnemyDeathAnim", (y = _("EnemyDeathAnim"), f = D(c), y((v = e((P = function(t) {
                function e() {
                    for (var e, s = arguments.length, a = new Array(s), h = 0; h < s; h++) a[h] = arguments[h];
                    return e = t.call.apply(t, [this].concat(a)) || this, i(o(e), "cachePos", void 0), i(o(e), "speed", void 0), n(o(e), "anim", v, o(e)), i(o(e), "elapsed", 0), e
                }
                s(e, t);
                var a = e.prototype;
                return a.initSub = function() {
                    this.initAnim()
                }, a.registAllCustomUpdate = function() {
                    this.registCustomUpdate(g.fly, this.stepFly), this.registCustomUpdate(g.delay, this.stepDelay), this.registCustomUpdate(g.fadeOut, this.stepFadeOut)
                }, a.setData = function(t) {
                    this.node.setPosition(t.p), this.node.setRotation(0, Math.sin(.5 * t.radian), 0, Math.cos(.5 * t.radian)), this.node.setScale(t.s, t.s, t.s), this.cachePos.set(t.p), this.speed.set(t.speed), this.enterCustomUpdateState(g.fly)
                }, a.reuse = function(t) {
                    this.reset(), t && this.setData(t), this.anim.play("z_death")
                }, a.stepFly = function(t) {
                    this.speed.y -= 10 * t, this.cachePos.x += this.speed.x * t, this.cachePos.y += this.speed.y * t, this.cachePos.z += this.speed.z * t, this.cachePos.y < -.5 && (this.cachePos.y = -.5, this.elapsed = 0, this.enterCustomUpdateState(g.delay)), this.node.setPosition(this.cachePos)
                }, a.initAnim = function() {
                    this.cachePos = l(), this.speed = l()
                }, a.onAnimFinish = function() {
                    this.elapsed = 0, this.enterCustomUpdateState(g.delay)
                }, a.stepDelay = function(t) {
                    this.elapsed += t, this.elapsed > .3 && (this.elapsed = 0, this.enterCustomUpdateState(g.fadeOut))
                }, a.stepFadeOut = function(t) {
                    this.cachePos.y -= 2 * t, this.cachePos.y < -1.05 ? C.put(this) : this.node.setPosition(this.cachePos)
                }, a.update = function(t) {
                    this.customUpdate(t)
                }, e
            }(r)).prototype, "anim", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), m = P)) || m));
            ! function(t) {
                t[t.none = 0] = "none", t[t.fly = 1] = "fly", t[t.delay = 2] = "delay", t[t.fadeOut = 3] = "fadeOut"
            }(g || (g = {}));
            var C = t("EnemyDeathPool", function() {
                function t() {}
                return t.get = function(t) {
                    if (this.count > 0) {
                        this.count -= 1;
                        var e = this._pool[this.count];
                        return e.node.active = !0, e.reuse(t), u.getScene().addChild(e.node), e
                    }
                    var i = p.get("EnemyDeathAnim", t);
                    u.getScene().addChild(i);
                    var s = i[d];
                    return s.poolIndex = this._pool.length, this._pool.push(s), console.log("死亡动画数量：", this._pool.length), s
                }, t.put = function(t) {
                    t.unuse();
                    var e = this._pool[this.count];
                    this._pool[t.poolIndex] = e, e.poolIndex = t.poolIndex, this._pool[this.count] = t, t.poolIndex = this.count, this.count++, t.node.removeFromParent(), t.node.active = !1
                }, t
            }());
            i(C, "_pool", []), i(C, "count", 0), a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LanGan.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./LiquidManager.ts", "./LevelMap.ts"], (function(i) {
    "use strict";
    var t, e, s, n, o, r, a, u, l, d;
    return {
        setters: [function(i) {
            t = i.createClass, e = i.defineProperty
        }, function(i) {
            s = i.cclegacy, n = i.v2, o = i.v3
        }, function(i) {
            r = i.default
        }, function(i) {
            a = i.default, u = i.LiquidColliderType, l = i.LiquidBodyType
        }, function(i) {
            d = i.Tile
        }],
        execute: function() {
            s._RF.push({}, "338e8H+HE9H1b7jo7sI+uXo", "LanGan", void 0);
            var h = i("LanGan", function() {
                function i() {
                    e(this, "_customId", null), e(this, "tilePos", void 0), e(this, "position", void 0), e(this, "rigid", void 0), e(this, "rigidJustPlayer", void 0)
                }
                var s = i.prototype;
                return s.init = function(i) {
                    this.initSub(), void 0 !== i && this.setData(i)
                }, s.reset = function() {
                    this.resetSub()
                }, s.reuse = function(i) {
                    this.reset(), void 0 !== i && this.setData(i)
                }, s.unuse = function() {
                    this.reset()
                }, s.initSub = function() {
                    this.initRigid()
                }, s.resetSub = function() {
                    this.resetRigid()
                }, s.setData = function(i) {
                    this.tilePos = n(i), this.position || (this.position = o()), d.convertToWorld(i.x, i.y, this.position);
                    var t = 0;
                    i.x % 2 == 0 && (t = .5 * Math.PI), this.createRigid(this.position, t)
                }, s.initRigid = function() {}, s.resetRigid = function() {
                    this.rigid && this.rigid.SetTransform({
                        x: this.position.x,
                        y: -this.position.z
                    }, 0), this.rigidJustPlayer && this.rigidJustPlayer.SetTransform({
                        x: this.position.x + r.GameRule.enemyMapOffset.x,
                        y: -this.position.z
                    }, 0)
                }, s.createRigid = function(i, t) {
                    if (this.rigid) return this.rigid.SetTransform({
                        x: i.x,
                        y: i.z
                    }, t), void(this.rigidJustPlayer && this.rigidJustPlayer.SetTransform({
                        x: i.x + r.GameRule.enemyMapOffset.x,
                        y: i.z
                    }, t));
                    var e = {
                            size: {
                                width: r.GameRule.tileSize.x,
                                height: r.GameRule.wallSize.z
                            }
                        },
                        s = a.CreateCollider(e, u.box),
                        n = {
                            active: !0,
                            allowSleep: !0,
                            angle: t,
                            angularVelocity: 0,
                            angularDamping: 0,
                            awake: !0,
                            bullet: !1,
                            fixedRotation: !0,
                            gravityScale: 0,
                            linearDamping: 0,
                            position: {
                                x: i.x,
                                y: i.z
                            },
                            type: l.b2_staticBody,
                            userData: null
                        },
                        o = {
                            density: 0,
                            friction: 0,
                            isSensor: !1,
                            restitution: 0,
                            shape: null,
                            userData: null
                        };
                    this.rigid = a.CreateRigid([s], n, o).body, n.position.x += r.GameRule.enemyMapOffset.x, this.rigidJustPlayer = a.CreateRigid([s], n, o).body
                }, t(i, [{
                    key: "Id",
                    get: function() {
                        return null === this._customId && (this._customId = i._autoId++), this._customId
                    }
                }]), i
            }());
            e(h, "_autoId", 1), s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BeHitParticle.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var i, e, s, n, r, o, a, h, u, c, p, l, d, f;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.inheritsLoose, s = t.initializerDefineProperty, n = t.assertThisInitialized, r = t.defineProperty
        }, function(t) {
            o = t.cclegacy, a = t._decorator, h = t.MeshRenderer, u = t.director, c = t.gfx, p = t.utils, l = t.v4
        }, function(t) {
            d = t.EventType
        }, function(t) {
            f = t.default
        }],
        execute: function() {
            var v, y, m, M, P;
            o._RF.push({}, "34c62qEO05DRrYe9WpkhYs4", "BeHitParticle", void 0);
            var g = a.ccclass,
                b = a.property;
            t("BeHitParticle", (v = g("BeHitParticle"), y = b(h), v((P = i((M = function(t) {
                function i() {
                    for (var i, e = arguments.length, o = new Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                    return i = t.call.apply(t, [this].concat(o)) || this, s(n(i), "meshRender", P, n(i)), r(n(i), "pass", void 0), r(n(i), "handle", void 0), r(n(i), "groupPos", void 0), r(n(i), "curPtr", void 0), r(n(i), "dirtyMat", !1), i
                }
                e(i, t);
                var o = i.prototype;
                return o.onLoad = function() {
                    this.init(), this.node.active = !1
                }, o.onEnable = function() {
                    this.createMesh()
                }, o.initSub = function() {
                    this.initMat(), this.initMesh()
                }, o.resetSub = function() {
                    this.resetMat()
                }, o.onEvents = function() {
                    this.on(d.LevelEvent.playBeHitParticle, this.play, this), this.on(d.LevelEvent.startFight, this.onStartFight, this), this.on(d.LevelEvent.enterLobby, this.onEnterLobby, this)
                }, o.play = function(t) {
                    ++this.curPtr >= 30 && (this.curPtr = 0);
                    var i = this.groupPos[this.curPtr];
                    i.x = t.x, i.y = t.y, i.z = t.z, i.w = u.root.cumulativeTime, this.dirtyMat = !0
                }, o.initMesh = function() {
                    this.meshRender.mesh = null
                }, o.createMesh = function() {
                    if (!this.meshRender.mesh) {
                        for (var t = {
                                positions: [],
                                uvs: [],
                                indices: [],
                                customAttributes: [{
                                    attr: {
                                        name: "a_animData",
                                        format: c.Format.RGBA32F,
                                        isNormalized: !1,
                                        stream: 0,
                                        isInstanced: !1,
                                        location: 0,
                                        customOffset: 0
                                    },
                                    values: []
                                }]
                            }, i = 0; i < 30; ++i) this.pushParticleGroup(t, i);
                        this.meshRender.mesh = p.createMesh(t)
                    }
                }, o.pushParticleGroup = function(t, i) {
                    for (var e = t.positions.length / 3, s = Math.round(5 * Math.random() + 8), n = .15 * Math.random() + .05, r = 0; r < s; ++r) {
                        t.positions.push(-n, n, 0, -n, -n, 0, n, -n, 0, n, n, 0), t.uvs.push(0, 0, 0, 1, 1, 1, 1, 0);
                        var o = 6.3 * Math.random(),
                            a = 1 * Math.random() + .5,
                            h = 3 * Math.random() + 3,
                            u = h * Math.sin(a),
                            c = h * Math.cos(a),
                            p = c * Math.cos(o),
                            l = c * Math.sin(o);
                        t.customAttributes[0].values.push(p, u, l, i, p, u, l, i, p, u, l, i, p, u, l, i), t.indices.push(e, e + 1, e + 2, e, e + 2, e + 3), e += 4
                    }
                }, o.initMat = function() {
                    var t = this.meshRender.getMaterialInstance(0);
                    this.pass = t.passes[0], this.handle = this.pass.getHandle("groupPos"), this.groupPos = [];
                    for (var i = 0; i < 30; ++i) this.groupPos.push(l());
                    this.curPtr = 0
                }, o.resetMat = function() {
                    for (var t = 0; t < 30; ++t) this.groupPos[t].set(0, 0, 0, 0);
                    this.applyMat(), this.dirtyMat = !1
                }, o.applyMat = function() {
                    this.pass.setUniformArray(this.handle, this.groupPos)
                }, o.update = function(t) {
                    this.dirtyMat && (this.dirtyMat = !1, this.applyMat())
                }, o.onStartFight = function() {
                    this.node.active = !0
                }, o.onEnterLobby = function() {
                    this.reset(), this.node.active = !1
                }, i
            }(f)).prototype, "meshRender", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = M)) || m));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BulletBoom.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./GlobalData.ts", "./GlobalPool.ts", "./Enemy.ts", "./Bullet.ts"], (function(t) {
    "use strict";
    var e, o, i, n, s, a, c, l, r, u, h;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }, function(t) {
            o = t.cclegacy, i = t._decorator, n = t.v3, s = t.director
        }, function(t) {
            a = t.GlobalEnum
        }, function(t) {
            c = t.EventType
        }, function(t) {
            l = t.default
        }, function(t) {
            r = t.default
        }, function(t) {
            u = t.EnemyPool
        }, function(t) {
            h = t.Bullet
        }],
        execute: function() {
            var f;
            o._RF.push({}, "37abdYtj2pLyKYxcSXClIBE", "BulletBoom", void 0);
            var p = i.ccclass,
                v = (i.property, n());
            t("BulletBoom", p("BulletBoom")(f = function(t) {
                function o() {
                    return t.apply(this, arguments) || this
                }
                e(o, t);
                var i = o.prototype;
                return i.initAtkScope = function() {
                    this.computeAtkScope(2.5)
                }, i.checkAtk = function() {
                    var t = l.get(a.myGlobalDataType.enemyMap);
                    t.convertToIndex(this.tilePos, this.cachePos.x, this.cachePos.z);
                    var e = t.convertToBufferIndex(this.tilePos.x, this.tilePos.y),
                        o = t.getAllData(),
                        i = o[e];
                    if (i) {
                        var n = u.getInstanceById(i),
                            h = this.cachePos.x - n.position.x,
                            f = this.cachePos.z - n.position.z;
                        if (h * h + f * f < .25) {
                            this.emit(c.Common.AudioEvent.playEffect, a.AudioClip.boom), this.emit(c.LevelEvent.addBaoZhaParticle, this.cachePos);
                            var p = r.get("BaoZhaAnim", {
                                p: this.cachePos
                            });
                            s.getScene().addChild(p), this.atkBoom(o, e), this.emit(c.LevelEvent.removePlayerBullet, this), this.emit(c.Common.SDKEvent.vibrateShort), this.emit(c.LevelEvent.shakeScreen)
                        }
                    }
                }, i.atkBoom = function(t, e) {
                    for (var o = this.atkIndexes, i = [], n = o.length - 1; n >= 0; --n) {
                        var s = t[e + o[n]];
                        if (s && i.indexOf(s) < 0) {
                            i.push(s);
                            var a = u.getInstanceById(s);
                            this.onAtk(a)
                        }
                    }
                }, i.onAtk = function(t) {
                    if (!t.canBeHit) return !1;
                    var e = v;
                    return e.x = t.position.x - this.cachePos.x, e.z = t.position.z - this.cachePos.z, e.y = 1, t.beHit({
                        atk: this.atkValue,
                        atkType: null,
                        bulletPosition: this.cachePos,
                        atkDir: e
                    }), this.playAtkEffect(), !0
                }, o
            }(h)) || f);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ZiDanKe.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts", "./GlobalPool.ts"], (function(t) {
    "use strict";
    var e, s, i, a, n, o, h, p;
    return {
        setters: [function(t) {
            e = t.inheritsLoose, s = t.defineProperty, i = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, n = t._decorator, o = t.v3
        }, function(t) {
            h = t.default
        }, function(t) {
            p = t.default
        }],
        execute: function() {
            var u;
            a._RF.push({}, "37c0eiMRSpLQLyLvI1LaUIc", "ZiDanKe", void 0);
            var d, c = n.ccclass;
            n.property, t("ZiDanKe", c("ZiDanKe")(u = function(t) {
                function a() {
                    for (var e, a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(n)) || this, s(i(e), "cachePos", void 0), s(i(e), "speed", void 0), s(i(e), "radianSpd", void 0), s(i(e), "angle", void 0), s(i(e), "delayElapsed", 0), e
                }
                e(a, t);
                var n = a.prototype;
                return n.initSub = function() {
                    this.initMoveState()
                }, n.registAllCustomUpdate = function() {
                    this.registCustomUpdate(d.jump1, this.stepJump1), this.registCustomUpdate(d.jump2, this.stepJump2), this.registCustomUpdate(d.jump3, this.stepJump3), this.registCustomUpdate(d.delay, this.stepDelay)
                }, n.setData = function(t) {
                    this.node.setPosition(t.p), this.cachePos.set(t.p), this.node.eulerAngles = o(0, t.e, 0), this.angle.y = t.e;
                    var e = .017453 * (t.e + 180 + 50 * (Math.random() - .5)),
                        s = Math.sin(e),
                        i = Math.cos(e),
                        a = 2 + Math.random();
                    this.speed.x = i * a, this.speed.z = -s * a, this.speed.y = 8, this.radianSpd = 180 * (Math.random() - .5), this.enterCustomUpdateState(d.jump1)
                }, n.initMoveState = function() {
                    this.cachePos = o(), this.speed = o(), this.radianSpd = 0, this.angle = o(-90, 0, 0), this.delayElapsed = 0
                }, n.updatePos = function(t) {
                    this.speed.y -= 50 * t, this.cachePos.x += this.speed.x * t, this.cachePos.y += this.speed.y * t, this.cachePos.z += this.speed.z * t, this.cachePos.y < .05 && (this.cachePos.y = .05), this.node.setPosition(this.cachePos), this.angle.y += this.radianSpd * t, this.node.eulerAngles = this.angle
                }, n.stepJump1 = function(t) {
                    this.updatePos(t), this.cachePos.y < .06 && (this.speed.y = 10, this.enterCustomUpdateState(d.jump2))
                }, n.stepJump2 = function(t) {
                    this.updatePos(t), this.cachePos.y < .06 && (this.speed.y = 5, this.enterCustomUpdateState(d.jump3))
                }, n.stepJump3 = function(t) {
                    this.updatePos(t), this.cachePos.y < .06 && (this.delayElapsed = 0, this.enterCustomUpdateState(d.delay))
                }, n.stepDelay = function(t) {
                    this.delayElapsed += t, this.delayElapsed > 1 && p.put(this.node)
                }, n.update = function(t) {
                    this.node.activeInHierarchy && this.customStep(t)
                }, a
            }(h)) || u);
            ! function(t) {
                t[t.jump1 = 0] = "jump1", t[t.jump2 = 1] = "jump2", t[t.jump3 = 2] = "jump3", t[t.delay = 3] = "delay"
            }(d || (d = {})), a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DropedHuDun.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelColler.ts"], (function(t) {
    "use strict";
    var e, s, i, o, a, n, r, h, c, u, l;
    return {
        setters: [function(t) {
            e = t.inheritsLoose, s = t.defineProperty, i = t.assertThisInitialized
        }, function(t) {
            o = t.cclegacy, a = t._decorator, n = t.v3
        }, function(t) {
            r = t.GlobalEnum
        }, function(t) {
            h = t.EventType
        }, function(t) {
            c = t.default
        }, function(t) {
            u = t.default
        }, function(t) {
            l = t.AABB
        }],
        execute: function() {
            var p;
            o._RF.push({}, "3c2a4wo3rhNopBrLINItsGc", "DropedHuDun", void 0);
            var b, d = a.ccclass;
            a.property, t("DropedHuDun", d("DropedHuDun")(p = function(t) {
                function o() {
                    for (var e, o = arguments.length, a = new Array(o), n = 0; n < o; n++) a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this, s(i(e), "_aabb", null), s(i(e), "aabbDirty", !0), s(i(e), "elapsed", 0), s(i(e), "startPos", void 0), s(i(e), "cachePos", void 0), e
                }
                e(o, t);
                var a = o.prototype;
                return a.initSub = function() {
                    this.initAABB(), this.initMoveState()
                }, a.resetSub = function() {
                    this.resetAABB()
                }, a.registAllCustomUpdate = function() {
                    this.registCustomUpdate(b.moveToPlayer, this.stepMoveToPlayer)
                }, a.setData = function(t) {
                    this.node.setPosition(t.p.x, 1, t.p.z), this.aabbDirty = !0, this.resetCustomUpdateState()
                }, a.initAABB = function() {
                    this._aabb = new l, this.aabbDirty = !0
                }, a.resetAABB = function() {
                    this.aabbDirty = !0
                }, a.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, a.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        this._aabb.setMinVert(-2, 0, -2), this._aabb.setMaxVert(2, 1, 2);
                        var t = this.node.getWorldPosition();
                        this._aabb.addOffset(t), this._aabb.computeCenter()
                    }
                }, a.onEnterColl = function(t) {
                    this.cachePos.x = 1e4, this.cachePos.z = 1e4, this._aabb.addOffset(this.cachePos), this.aabbDirty = !1, this.elapsed = 0, this.node.getPosition(this.startPos), this.cachePos.y = this.startPos.y, this.enterCustomUpdateState(b.moveToPlayer)
                }, a.initMoveState = function() {
                    this.elapsed = 0, this.startPos = n(), this.cachePos = n()
                }, a.stepMoveToPlayer = function(t) {
                    this.elapsed += 10 * t;
                    var e = this.elapsed;
                    if (e >= 1) this.addToPlayer();
                    else {
                        var s = u.get(r.myGlobalDataType.player).position;
                        this.cachePos.x = this.startPos.x + (s.x - this.startPos.x) * e, this.cachePos.z = this.startPos.z + (s.z - this.startPos.z) * e, this.node.setPosition(this.cachePos)
                    }
                }, a.addToPlayer = function() {
                    u.get(r.myGlobalDataType.player).addHuDun(), this.emit(h.LevelEvent.removeDropItem, this)
                }, o
            }(c)) || p);
            ! function(t) {
                t[t.none = 0] = "none", t[t.moveToPlayer = 1] = "moveToPlayer"
            }(b || (b = {})), o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EnemyMeshMng.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./yyComponent.ts", "./GlobalData.ts", "./RoleMeshCreator.ts"], (function(i) {
    "use strict";
    var t, e, n, r, s, o, a, h, u, m, l, f, d, p;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor, e = i.inheritsLoose, n = i.defineProperty, r = i.assertThisInitialized, s = i.initializerDefineProperty
        }, function(i) {
            o = i.cclegacy, a = i._decorator, h = i.MeshRenderer, u = i.v4
        }, function(i) {
            m = i.GlobalEnum
        }, function(i) {
            l = i.default
        }, function(i) {
            f = i.default
        }, function(i) {
            d = i.default
        }, function(i) {
            p = i.default
        }],
        execute: function() {
            var c, y, M, A, v;
            o._RF.push({}, "4056cbxz1BMv5MRKSQC3cSL", "EnemyMeshMng", void 0);
            var S = a.ccclass,
                g = a.property,
                b = (i("EnemyMeshMng", (c = S("EnemyMeshMng"), y = g(h), c((v = t((A = function(i) {
                    function t() {
                        for (var t, e = arguments.length, o = new Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                        return t = i.call.apply(i, [this].concat(o)) || this, n(r(t), "meshType", void 0), s(r(t), "meshRender", v, r(t)), n(r(t), "pass", void 0), n(r(t), "uniforms", void 0), n(r(t), "uniformArrays", void 0), n(r(t), "dirtyMat", !0), n(r(t), "anim", void 0), n(r(t), "animSpeed", 1), n(r(t), "offsetFrame", void 0), n(r(t), "animElapsed", void 0), n(r(t), "idPool", void 0), n(r(t), "autoId", void 0), n(r(t), "maxEnemyCount", void 0), t
                    }
                    e(t, i);
                    var o = t.prototype;
                    return o.onEnable = function() {
                        this.createMesh()
                    }, o.initSub = function() {
                        this.initAnimState(), this.initIdPool(), this.initMat(), this.initMesh()
                    }, o.resetSub = function() {
                        this.resetAnimState(), this.resetIdPool(), this.resetMat(), this.resetMesh()
                    }, o.setData = function(i) {
                        this.meshType = i.meshType;
                        var t = 1;
                        switch (i.animSpeed) {
                            case m.BatchMeshAnimSpeed.spd1:
                                t = 1;
                                break;
                            case m.BatchMeshAnimSpeed.spd2:
                                t = 2;
                                break;
                            case m.BatchMeshAnimSpeed.spdHalf:
                                t = .67;
                                break;
                            default:
                                t = 1
                        }
                        this.setAnim(i.anim, t)
                    }, o.getRoleId = function() {
                        return this.idPool.length > 0 ? this.idPool.pop() : this.autoId < this.maxEnemyCount ? this.autoId++ : null
                    }, o.putRoleId = function(i) {
                        this.idPool.push(i), this.uniformArrays[R.roleColor].uniformArray[i].w = 0, this.dirtyMat = !0
                    }, o.updateRoleRT = function(i) {
                        var t = i.roleMeshId,
                            e = this.uniformArrays[R.roleTransf].uniformArray[t];
                        e.x = i.position.x, e.z = i.position.z, e.y = i.sr, e.w = i.cr
                    }, o.setRoleColor = function(i) {
                        var t = i.roleMeshId;
                        this.uniformArrays[R.roleColor].uniformArray[t].set(i.color)
                    }, o.initMesh = function() {
                        this.meshRender.mesh = null
                    }, o.resetMesh = function() {}, o.createMesh = function() {
                        for (var i = l.EnemyMeshConfig, t = i.length - 1; t >= 0; --t)
                            if (i[t].mesh == this.meshType && i[t].anim == this.anim && i[t].animSpeed == this.animSpeed) {
                                p.createMesh(this.meshRender, t), this.maxEnemyCount = i[t].enemyCount;
                                break
                            }
                    }, o.initMat = function() {
                        this.dirtyMat = !0;
                        var i = this.meshRender.getMaterialInstance(0);
                        this.pass = i.passes[0], this.initUniforms(), this.initUniformArrays()
                    }, o.initUniforms = function() {
                        this.uniforms = {};
                        var i = b.playerScope;
                        this.uniforms[i] = {
                            handle: this.pass.getHandle(i),
                            uniform: u()
                        }
                    }, o.initUniformArrays = function() {
                        this.uniformArrays = {};
                        var i = R.boneMatrix;
                        this.uniformArrays[i] = {
                            handle: this.pass.getHandle(i),
                            uniformArray: null
                        }, i = R.roleTransf;
                        for (var t = [], e = 0, n = l.GameRule.matPerRole; e < n; ++e) t.push(u());
                        this.uniformArrays[i] = {
                            handle: this.pass.getHandle(i),
                            uniformArray: t
                        }, i = R.roleColor;
                        for (var r = [], s = 0, o = l.GameRule.matPerRole; s < o; ++s) r.push(u());
                        this.uniformArrays[i] = {
                            handle: this.pass.getHandle(i),
                            uniformArray: r
                        }
                    }, o.resetMat = function() {
                        this.dirtyMat = !0, this.uniformArrays[R.boneMatrix].uniformArray = null;
                        for (var i = this.uniformArrays[R.roleColor].uniformArray, t = 0, e = i.length; t < e; ++t) i[t].w = 0;
                        this.applyMat()
                    }, o.applyMat = function() {
                        var i = d.get(m.myGlobalDataType.player),
                            t = this.uniforms[b.playerScope].uniform;
                        for (var e in t.x = i.position.x, t.z = i.position.z, t.w = i.viewScopeSqr, this.uniforms) this.pass.setUniform(this.uniforms[e].handle, this.uniforms[e].uniform);
                        for (var n in this.uniformArrays) this.uniformArrays[n].uniformArray && this.pass.setUniformArray(this.uniformArrays[n].handle, this.uniformArrays[n].uniformArray)
                    }, o.initAnimState = function() {
                        this.offsetFrame = 0, this.animElapsed = 0
                    }, o.resetAnimState = function() {
                        this.animElapsed = 0
                    }, o.setAnim = function(i, t) {
                        void 0 === t && (t = 1), this.anim = i, this.animSpeed = t, this.offsetFrame = Math.floor(33 * Math.random() + 20)
                    }, o.updateAnim = function(i) {
                        this.animElapsed += i * this.animSpeed;
                        var t = p.getAnimData(this.anim, this.animElapsed, this.offsetFrame, this.meshType);
                        this.uniformArrays[R.boneMatrix].uniformArray = t, this.dirtyMat = !0
                    }, o.initIdPool = function() {
                        this.idPool = [], this.autoId = 0, this.maxEnemyCount = 1
                    }, o.resetIdPool = function() {
                        this.idPool = [], this.autoId = 0, this.maxEnemyCount = 1
                    }, o.customUpdate = function(i) {
                        this.updateAnim(i), this.applyMat()
                    }, t
                }(f)).prototype, "meshRender", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), M = A)) || M)), {
                    playerScope: "playerScope"
                }),
                R = i("uniformArrayNames", {
                    boneMatrix: "boneMatrix",
                    roleTransf: "roleTransf",
                    roleColor: "roleColor"
                });
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GuangQuan.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(e) {
    "use strict";
    var o, t, n, r, i, s, u, a, c, l, p, h;
    return {
        setters: [function(e) {
            o = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized, i = e.createClass
        }, function(e) {
            s = e.cclegacy, u = e._decorator, a = e.MeshRenderer, c = e.color, l = e.v3, p = e.utils
        }, function(e) {
            h = e.default
        }],
        execute: function() {
            var g, f, d, v, y, m;
            s._RF.push({}, "41c36SuuOpGvZbndVXaLP00", "GuangQuan", void 0);
            var M = u.ccclass,
                b = u.property,
                C = u.executeInEditMode;
            e("GuangQuan", (g = M("GuangQuan"), f = b(a), g(d = C((y = o((v = function(e) {
                function o() {
                    for (var o, t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                    return o = e.call.apply(e, [this].concat(i)) || this, n(r(o), "_guangQuanColor", y, r(o)), n(r(o), "meshRender", m, r(o)), o
                }
                t(o, e);
                var s = o.prototype;
                return s.onEvents = function() {}, s.showMode = function() {
                    this.node.active = !0
                }, s.hideMode = function() {
                    this.node.active = !1
                }, s.setData = function(e) {
                    this.node.setPosition(e.p);
                    var o = [e.color.r / 255, e.color.g / 255, e.color.b / 255, 1];
                    this.createMesh(o)
                }, s.createMesh = function(e) {
                    var o = this,
                        t = {
                            positions: [],
                            uvs: [],
                            colors: [],
                            minPos: l(-2, 0, -2),
                            maxPos: l(2, 2, 2),
                            indices: []
                        },
                        n = .4,
                        r = .01;
                    t.positions.push(-n, r, -n, -n, r, n, n, r, n, n, r, -n), t.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), t.colors.push(e[0], e[1], e[2], 0, e[0], e[1], e[2], 0, e[0], e[1], e[2], 0, e[0], e[1], e[2], 0), t.indices.push(0, 1, 2, 0, 2, 3), n *= .92;
                    for (var i = 0; i <= 36; ++i) {
                        var s = 2 * Math.PI * i / 36,
                            u = Math.cos(s) * n,
                            a = -Math.sin(s) * n;
                        t.positions.push(u, 3, a, u, 0, a), t.uvs.push(0, 0, 0, 1), t.colors.push(e[0], e[1], e[2], 1, e[0], e[1], e[2], 1)
                    }
                    for (var c = 4, h = 0; h < 36; ++h) t.indices.push(c, c + 1, c + 2, c + 1, c + 3, c + 2), c += 2;
                    setTimeout((function() {
                        o.meshRender.mesh = p.createMesh(t)
                    }), 0)
                }, i(o, [{
                    key: "guangColor",
                    get: function() {
                        return this._guangQuanColor
                    },
                    set: function(e) {
                        this._guangQuanColor = e, this.setData({
                            p: l(0, 0, 0),
                            color: this._guangQuanColor
                        })
                    }
                }]), o
            }(h)).prototype, "_guangQuanColor", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return c(255, 255, 255, 255)
                }
            }), o(v.prototype, "guangColor", [b], Object.getOwnPropertyDescriptor(v.prototype, "guangColor"), v.prototype), m = o(v.prototype, "meshRender", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = v)) || d) || d));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/QiangKouAnim.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var i, s, e, a, n, h, o, r, p;
    return {
        setters: [function(t) {
            i = t.inheritsLoose, s = t.defineProperty, e = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, n = t._decorator, h = t.MeshRenderer, o = t.utils, r = t.v4, p = t.Component
        }],
        execute: function() {
            var l;
            a._RF.push({}, "4453bFAAJdJBK6LJM6cGu74", "QiangKouAnim", void 0);
            var u = n.ccclass;
            n.property, t("QiangKouAnim", u("QiangKouAnim")(l = function(t) {
                function a() {
                    for (var i, a = arguments.length, n = new Array(a), h = 0; h < a; h++) n[h] = arguments[h];
                    return i = t.call.apply(t, [this].concat(n)) || this, s(e(i), "pass", void 0), s(e(i), "handle", void 0), s(e(i), "tile", void 0), s(e(i), "frame", void 0), s(e(i), "elapsed", void 0), s(e(i), "frameDuration", void 0), i
                }
                i(a, t);
                var n = a.prototype;
                return n.onLoad = function() {
                    this.initMat()
                }, n.onEnable = function() {
                    this.createMesh()
                }, n.play = function() {
                    this.tile.z = 0, this.elapsed = 0, this.frame = 0, this.applyMat()
                }, n.createMesh = function() {
                    var t = this.node.getComponent(h);
                    if (!t.mesh) {
                        var i = {
                                positions: [],
                                uvs: [],
                                indices: []
                            },
                            s = .5;
                        i.positions.push(0, s, 0, 0, -s, 0, 1, -s, 0, 1, s, 0), i.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), i.indices.push(0, 1, 2, 0, 2, 3), i.positions.push(0, 0, -s, 0, 0, s, 1, 0, s, 1, 0, -s), i.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), i.indices.push(4, 5, 6, 4, 6, 7), t.mesh = o.createMesh(i)
                    }
                }, n.initMat = function() {
                    var t = this.node.getComponent(h).getMaterial(0);
                    this.pass = t.passes[0], this.handle = this.pass.getHandle("tilingOffset"), this.tile = r(), this.pass.getUniform(this.handle, this.tile), this.elapsed = 0, this.frame = 2, this.frameDuration = .05, this.tile.z = .3333333 * this.frame, this.applyMat()
                }, n.resetMat = function() {
                    this.elapsed = 0, this.frame = 2, this.tile.z = .3333333 * this.frame, this.applyMat()
                }, n.applyMat = function() {
                    this.pass.setUniform(this.handle, this.tile)
                }, n.update = function(t) {
                    this.frame < 2 && (this.elapsed += t, this.elapsed >= this.frameDuration && (this.elapsed = 0, this.frame += 1, this.tile.z = .3333333 * this.frame, this.applyMat()))
                }, a
            }(p)) || l);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DuYe.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./GlobalData.ts", "./GlobalPool.ts", "./LevelColler.ts"], (function(t) {
    "use strict";
    var i, e, s, n, a, o, r, l, h, u, c, p, d, f;
    return {
        setters: [function(t) {
            i = t.inheritsLoose, e = t.defineProperty, s = t.assertThisInitialized
        }, function(t) {
            n = t.cclegacy, a = t._decorator, o = t.v3, r = t.director, l = t.Vec3
        }, function(t) {
            h = t.GlobalEnum
        }, function(t) {
            u = t.EventType
        }, function(t) {
            c = t.default
        }, function(t) {
            p = t.default
        }, function(t) {
            d = t.default
        }, function(t) {
            f = t.AABB
        }],
        execute: function() {
            var y;
            n._RF.push({}, "454d3PbsFdLyYFqlFRzDUEs", "DuYe", void 0);
            var b, v = a.ccclass,
                D = (a.property, o()),
                P = o();
            t("DuYe", v("DuYe")(y = function(t) {
                function n() {
                    for (var i, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(a)) || this, e(s(i), "position", o()), e(s(i), "particle", null), e(s(i), "_aabb", null), e(s(i), "aabbDirty", !0), e(s(i), "elapsed", 0), i
                }
                i(n, t);
                var a = n.prototype;
                return a.initSub = function() {
                    this.initAABB(), this.initParticle()
                }, a.resetSub = function() {
                    this.resetAABB(), this.resetParticle()
                }, a.registAllCustomUpdate = function() {
                    this.registCustomUpdate(b.delay, this.stepDelay), this.registCustomUpdate(b.hit, this.stepHitPlayer)
                }, a.setData = function(t) {
                    this.position.set(t), this.position.y = 1, this.node.setPosition(this.position), this.aabbDirty = !0, this.showParticle(), this.elapsed = 0, this.enterCustomUpdateState(b.delay)
                }, a.initParticle = function() {}, a.resetParticle = function() {
                    this.particle && (d.put(this.particle), this.particle = null)
                }, a.showParticle = function() {
                    if (!this.particle) {
                        var t = d.get("DuYeParticle");
                        r.getScene().addChild(t), this.particle = t
                    }
                    this.particle.setPosition(this.position)
                }, a.initAABB = function() {
                    this._aabb = new f, this.aabbDirty = !0
                }, a.resetAABB = function() {
                    this.aabbDirty = !0
                }, a.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, a.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        var t = .7;
                        this._aabb.setMaxVert(t, t, t), t = -.7, this._aabb.setMinVert(t, t, t), this._aabb.addOffset(this.position)
                    }
                }, a.hitPlayer = function(t) {
                    this.resetParticle(), this.elapsed = 0, this.enterCustomUpdateState(b.hit)
                }, a.stepDelay = function(t) {
                    this.elapsed += t, this.elapsed > 20 && (this.emit(u.LevelEvent.removeDuYe, this), d.put(this.node))
                }, a.stepHitPlayer = function(t) {
                    var i = p.get(h.myGlobalDataType.player);
                    D.set(i.position), D.y = 1, this.elapsed += 3 * t;
                    var e = this.elapsed;
                    if (e > 1) return i.isAlive && p.get(h.myGlobalDataType.isLevelFighting) && (i.beHitDuYe(this.position), this.emit(u.LevelEvent.playBeHitParticle, D)), this.emit(u.LevelEvent.removeDuYe, this), void d.put(this.node);
                    l.lerp(P, this.position, D, e), this.node.setPosition(P)
                }, n
            }(c)) || y);
            ! function(t) {
                t[t.none = 0] = "none", t[t.delay = 1] = "delay", t[t.hit = 2] = "hit"
            }(b || (b = {})), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TileShop.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./LiquidManager.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelMap.ts", "./LevelColler.ts", "./GuangQuan.ts"], (function(t) {
    "use strict";
    var e, i, n, o, a, r, s, l, c, h, u, p, d, y, g, b, f, v, m, T, S, I, C, L, G, P, _, A, D, w;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized, a = t.initializerDefineProperty, r = t.createClass
        }, function(t) {
            s = t.cclegacy, l = t._decorator, c = t.SkeletalAnimation, h = t.Node, u = t.MeshRenderer, p = t.v3, d = t.v2, y = t.Color, g = t.color
        }, function(t) {
            b = t.GlobalEnum
        }, function(t) {
            f = t.default
        }, function(t) {
            v = t.default, m = t.LiquidColliderType, T = t.LiquidBodyType
        }, function(t) {
            S = t.EventType
        }, function(t) {
            I = t.default
        }, function(t) {
            C = t.default
        }, function(t) {
            L = t.default
        }, function(t) {
            G = t.default
        }, function(t) {
            P = t.Tile, _ = t.TileMap, A = t.Room
        }, function(t) {
            D = t.AABB
        }, function(t) {
            w = t.GuangQuan
        }],
        execute: function() {
            var x, B, k, R, E, N, M, Q, F, z, U;
            s._RF.push({}, "4ab6dF6lOlIh4tdx3+P3919", "TileShop", void 0);
            var J = l.ccclass,
                Y = l.property;
            t("TileShop", (x = J("TileShop"), B = Y(c), k = Y(h), R = Y(h), E = Y(u), x((Q = e((M = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(r)) || this, n(o(e), "dirY", 0), n(o(e), "shopType", void 0), n(o(e), "maxLv", void 0), n(o(e), "rigid", void 0), n(o(e), "rigidJustPlayer", void 0), a(o(e), "npcAnim", Q, o(e)), a(o(e), "guangQuan", F, o(e)), n(o(e), "growPrice", 0), a(o(e), "collerIcon", z, o(e)), n(o(e), "_aabb", null), n(o(e), "aabbDirty", !0), a(o(e), "typeImgMesh", U, o(e)), e
                }
                i(e, t);
                var s = e.prototype;
                return s.initSub = function() {
                    this.initAABB(), this.initCollerIcon(), this.initNpc(), this.initRigid()
                }, s.resetSub = function() {
                    this.resetAABB(), this.resetCollerIcon(), this.resetNpc(), this.resetRigid()
                }, s.onEvents = function() {
                    this.on(S.LevelEvent.startFight, this.onStartFight, this), this.on(S.LevelEvent.enterLobby, this.onEnterLobby, this), this.on(S.LevelEvent.attributeGrowed, this.onGrowAttribute, this), this.on(S.Common.PlayerDataEvent.playerDataChanged, this.onGoldChanged, this)
                }, s.setData = function(t) {
                    var e = p();
                    switch (P.convertToWorld(t.tilePos.x, t.tilePos.y, e), this.node.setPosition(e), this.shopType = t.shopType, this.setTypeImg(), this.setGuangQuanColor(), this.shopType) {
                        case b.ShopType.atk:
                        case b.ShopType.hp:
                            this.maxLv = 999;
                            break;
                        case b.ShopType.geBan:
                        case b.ShopType.soldier:
                            this.maxLv = 5;
                            break;
                        case b.ShopType.moveSpeed:
                        case b.ShopType.atkSpeed:
                            this.maxLv = 20;
                            break;
                        default:
                            this.maxLv = t.maxLv
                    }
                    var i = _.getTile(t.tilePos.x, t.tilePos.y),
                        n = A.getItemById(i.roomId).centerPosition,
                        o = e.x - n.x,
                        a = e.z - n.z,
                        r = 0;
                    o > 0 ? a > 0 && (r = 270) : r = a > 0 ? 180 : 90, this.dirY = r, this.node.eulerAngles = p(0, r, 0), this.createRigid(), this.setNpcStand(), this.updateGrowPrice(), this.showCollerIcon(), this.aabbDirty = !0, this.emit(S.LevelEvent.addTileForTeach, b.TileContentType.shop, this.node.position)
                }, s.onEnterColl = function() {
                    G.get(b.myGlobalDataType.isLevelFighting) || this.showUI(b.UI.attributeShop, {
                        type: this.shopType,
                        maxLv: this.maxLv
                    })
                }, s.onExitColl = function() {
                    G.get(b.myGlobalDataType.isLevelFighting) || this.hideUI(b.UI.attributeShop)
                }, s.initRigid = function() {}, s.resetRigid = function() {
                    this.rigid && (v.RemoveBody(this.rigid), this.rigid = null), this.rigidJustPlayer && (v.RemoveBody(this.rigidJustPlayer), this.rigidJustPlayer = null)
                }, s.createRigid = function() {
                    var t;
                    this.rigid && this.resetRigid(), t = this.dirY % 180 != 0 ? [d(-1.07, .57), d(-.57, 1.07), d(1.07, -.57), d(.57, -1.07)] : [d(-.57, -1.07), d(-1.07, -.57), d(.57, 1.07), d(1.07, .57)];
                    var e = v.CreateCollider({
                            points: t
                        }, m.ploygon),
                        i = {
                            active: !0,
                            allowSleep: !0,
                            angle: 0,
                            angularVelocity: 0,
                            angularDamping: 0,
                            awake: !0,
                            bullet: !1,
                            fixedRotation: !0,
                            gravityScale: 0,
                            linearDamping: 0,
                            position: {
                                x: this.node.position.x,
                                y: this.node.position.z
                            },
                            type: T.b2_staticBody,
                            userData: null
                        },
                        n = {
                            density: 0,
                            friction: 0,
                            isSensor: !1,
                            restitution: 0,
                            shape: null,
                            userData: null
                        };
                    this.rigid = v.CreateRigid([e], i, n).body, i.position.x += f.GameRule.enemyMapOffset.x, this.rigidJustPlayer = v.CreateRigid([e], i, n).body
                }, s.initNpc = function() {}, s.resetNpc = function() {}, s.setNpcHide = function() {
                    this.npcAnim.play("NPC_Hide")
                }, s.setNpcStand = function() {
                    this.npcAnim.play("NPC_idle")
                }, s.setGuangQuanColor = function() {
                    var t, e = this.guangQuan.getComponent(w);
                    switch (this.shopType) {
                        case b.ShopType.atk:
                            t = g(255, 123, 8, 255);
                            break;
                        case b.ShopType.atkSpeed:
                            t = g(255, 255, 0, 255);
                            break;
                        case b.ShopType.geBan:
                            t = y.YELLOW;
                            break;
                        case b.ShopType.hp:
                            t = g(78, 226, 255, 255);
                            break;
                        case b.ShopType.moveSpeed:
                            t = y.CYAN
                    }
                    e.init({
                        p: p(0, 0, 0),
                        color: t
                    })
                }, s.updateGuangQuanState = function() {
                    var t = f.convertAttributeName(this.shopType),
                        e = I.getPlayerData().attributeLv[t];
                    this.guangQuan.active = e < this.maxLv && this.canGrow
                }, s.updateGrowPrice = function() {
                    var t = f.convertAttributeName(this.shopType),
                        e = I.getPlayerData().attributeLv[t];
                    this.growPrice = f.getGrowPrice(this.shopType, e)
                }, s.initCollerIcon = function() {}, s.resetCollerIcon = function() {}, s.hideCollerIcon = function() {
                    this.collerIcon.active = !1
                }, s.showCollerIcon = function() {
                    this.collerIcon.active = !0, this.updateGuangQuanState()
                }, s.initAABB = function() {
                    this._aabb = new D, this.aabbDirty = !0
                }, s.resetAABB = function() {
                    this.aabbDirty = !0
                }, s.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, s.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        var t = 1.2;
                        this._aabb.setMinVert(-t, 0, -t), this._aabb.setMaxVert(t, 1, t);
                        var e = this.collerIcon.getWorldPosition();
                        this._aabb.addOffset(e), this._aabb.computeCenter()
                    }
                }, s.setTypeImg = function() {
                    var t = this,
                        e = "";
                    switch (this.shopType) {
                        case b.ShopType.atk:
                            e = "UI_Arb_Icon_GJL";
                            break;
                        case b.ShopType.atkSpeed:
                            e = "UI_Arb_Icon_GJSD";
                            break;
                        case b.ShopType.geBan:
                            e = "UI_Arb_Icon_GB";
                            break;
                        case b.ShopType.hp:
                            e = "UI_Arb_Icon_SMZ";
                            break;
                        case b.ShopType.moveSpeed:
                            e = "UI_Arb_Icon_YDSD"
                    }
                    C.loadBundleRes("LevelScene", "shopTypeImg/" + e + "/texture", (function(e) {
                        t.typeImgMesh.getMaterialInstance(0).setProperty("mainTexture", e)
                    }))
                }, s.onStartFight = function() {
                    this.setNpcHide(), this.hideCollerIcon()
                }, s.onEnterLobby = function() {
                    this.setNpcStand(), this.showCollerIcon()
                }, s.onGrowAttribute = function() {
                    this.updateGrowPrice(), this.updateGuangQuanState()
                }, s.onGoldChanged = function() {
                    G.get(b.myGlobalDataType.isLevelFighting) || (this.updateGrowPrice(), this.updateGuangQuanState())
                }, r(e, [{
                    key: "canGrow",
                    get: function() {
                        return I.getPlayerData().asset.gold >= this.growPrice
                    }
                }]), e
            }(L)).prototype, "npcAnim", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = e(M.prototype, "guangQuan", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = e(M.prototype, "collerIcon", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = e(M.prototype, "typeImgMesh", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = M)) || N));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelMap.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./LiquidManager.ts", "./EventManager.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts", "./GlobalData.ts", "./ObjectPool.ts", "./GameData.ts", "./GlobalPool.ts", "./LanGan.ts", "./Wall1Mesh.ts"], (function(t) {
    "use strict";
    var e, o, i, n, s, a, l, h, r, u, d, c, p, m, f, v, y, g, T, I, x, G, P, M, D, R, S, B, C, L;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, o = t.createClass, i = t.defineProperty, n = t.inheritsLoose, s = t.assertThisInitialized, a = t.initializerDefineProperty
        }, function(t) {
            l = t.cclegacy, h = t._decorator, r = t.v3, u = t.v2, d = t.Node, c = t.instantiate, p = t.director
        }, function(t) {
            m = t.GlobalEnum
        }, function(t) {
            f = t.default
        }, function(t) {
            v = t.default, y = t.LiquidColliderType, g = t.LiquidBodyType
        }, function(t) {
            T = t.default
        }, function(t) {
            I = t.EventType
        }, function(t) {
            x = t.default
        }, function(t) {
            G = t.default
        }, function(t) {
            P = t.default
        }, function(t) {
            M = t.default
        }, function(t) {
            D = t.Pool
        }, function(t) {
            R = t.default
        }, function(t) {
            S = t.default, B = t.customPoolScript
        }, function(t) {
            C = t.LanGan
        }, function(t) {
            L = t.Wall1Mesh
        }],
        execute: function() {
            var k, z, w, b, W, E, U, F, A;
            l._RF.push({}, "4c48211GhdMVLEcIo6alUzO", "LevelMap", void 0);
            var q = h.ccclass,
                _ = h.property,
                O = r(),
                X = u(),
                N = (t("LevelMap", (k = q("LevelMap"), z = _(d), w = _(L), b = _(d), k((U = e((E = function(t) {
                    function e() {
                        for (var e, o = arguments.length, n = new Array(o), l = 0; l < o; l++) n[l] = arguments[l];
                        return e = t.call.apply(t, [this].concat(n)) || this, i(s(e), "mapId", void 0), i(s(e), "playerEnterPos", void 0), i(s(e), "rooms", void 0), i(s(e), "lanGanPool", void 0), i(s(e), "allLanGan", void 0), i(s(e), "lanGanMap", void 0), a(s(e), "wallLayer", U, s(e)), a(s(e), "wall1Mesh", F, s(e)), i(s(e), "wallColler", void 0), i(s(e), "wallCollerJustPlayer", void 0), a(s(e), "geBanLayer", A, s(e)), i(s(e), "geBanMap", void 0), i(s(e), "allGeBans", void 0), i(s(e), "needFixGeBanCount", 0), i(s(e), "allTileCollers", void 0), i(s(e), "delayAddTileUnlockRoomSequence", void 0), i(s(e), "sceneItemTiles", void 0), i(s(e), "sceneItems", void 0), i(s(e), "sceneItemTileSequnce", void 0), i(s(e), "delayUnlockRoomTiles", []), i(s(e), "newWeaponPosition", void 0), e
                    }
                    n(e, t);
                    var o = e.prototype;
                    return o.initSub = function() {
                        this.initDoor(), this.initGeBan(), this.initLanGan(), this.initRooms(), this.initSceneItemTiles(), this.initTile(), this.initTileCollers(), this.initWall()
                    }, o.resetSub = function() {
                        this.resetDoor(), this.resetGeBan(), this.resetLanGan(), this.resetRooms(), this.resetSceneItemTiles(), this.resetTile(), this.resetTileCollers(), this.resetWall()
                    }, o.onEvents = function() {
                        this.on(I.LevelEvent.unlockRoom, this.onUnlockRoom, this), this.on(I.LevelEvent.delayUnlockRoom, this.onDelayUnlockRoom, this), this.on(I.LevelEvent.delayAddTileUnlockRoom, this.onDelayAddTileUnlockRoom, this), this.on(I.LevelEvent.removeTileUnlockRoom, this.onRemoveTileUnlockRoom, this), this.on(I.LevelEvent.addTileContentItem, this.addTileContentItem, this), this.on(I.LevelEvent.addTileSoldier, this.addTileSoldier, this), this.on(I.LevelEvent.addTileWeapon, this.onAddTileWeapon, this), this.on(I.LevelEvent.removeTileSoldier, this.onRemoveTileSoldier, this), this.on(I.LevelEvent.addSoldier, this.onAddSoldier, this), this.on(I.LevelEvent.enterLobby, this.onEnterLobby, this), this.on(I.LevelEvent.startFight, this.onStartFight, this), this.on(I.LevelEvent.autoXiuFuGeBan, this.onAutoXiuFu, this), this.on(I.LevelEvent.subGeBanNeedXiuFuCount, this.onSubNeedXiuFuGeBan, this), this.on(I.LevelEvent.getGeBanXiuFuState, this.showBtnXiuFu, this)
                    }, o.setData = function(t) {
                        this.mapId = t, this._setData()
                    }, o._setData = function() {
                        this.wall1Mesh.setWallImg();
                        for (var t = R.getData(m.GameDataType.levelMapData, this.mapId), e = t.rooms, o = [], i = {
                                xMin: 1 / 0,
                                xMax: -1 / 0,
                                zMin: -1 / 0,
                                zMax: 1 / 0
                            }, n = e.length - 1; n >= 0; --n) {
                            var s = e[n].dependTile;
                            0 == s.x && 0 == s.y && o.push(n);
                            var a = e[n].p,
                                l = e[n].size;
                            i.xMin > a.x && (i.xMin = a.x), i.xMax < a.x + 2 * l.x && (i.xMax = a.x + 2 * l.x), i.zMin < a.y + 2 * l.y && (i.zMin = a.y + 2 * l.y), i.zMax > a.y && (i.zMax = a.y)
                        }
                        i.xMin -= 9, i.xMax += 9, i.zMin += 27, i.zMax -= 6, i.xMin = f.GameRule.enemyMapOffset.x + i.xMin * f.GameRule.tileSize.x * .5, i.xMax = f.GameRule.enemyMapOffset.x + i.xMax * f.GameRule.tileSize.x * .5, i.zMin = f.GameRule.enemyMapOffset.y - i.zMin * f.GameRule.tileSize.z * .5, i.zMax = f.GameRule.enemyMapOffset.y - i.zMax * f.GameRule.tileSize.z * .5, this.emit(I.LevelEvent.createSceneGround, i), this.computePlayerEnterPos(e, o[0]);
                        for (var h = o.length - 1; h >= 0; --h) this.unlockRoom(t, o[h]);
                        for (; this.delayUnlockRoomTiles.length > 0;) {
                            var r = this.delayUnlockRoomTiles.shift();
                            this.unlockRoomByTile(r)
                        }
                        this.postUnlockRoom(), this.showBtnXiuFu()
                    }, o.enterMap = function(t) {
                        this.mapId !== t && (this.reset(), this.setData(t))
                    }, o.computePlayerEnterPos = function(t, e) {
                        var o = t[e];
                        J.convertToWorld(o.p.x, o.p.y, O), O.x += o.size.x * f.GameRule.tileSize.x * .5, O.z -= o.size.y * f.GameRule.tileSize.z * .5, this.playerEnterPos = r(O)
                    }, o.randomGeBanEnemyCount = function(t, e) {
                        void 0 === e && (e = 2);
                        for (var o = [], i = 0, n = this.allGeBans.length, s = 0; s < n; ++s) {
                            var a = Math.random();
                            o.push(a), i += a
                        }
                        o[Math.floor(Math.random() * (n - .01))] += i * e;
                        for (var l = t / (i += i * e), h = 0; h < n; ++h) {
                            var r = Math.ceil(o[h] * l) + 1;
                            this.allGeBans[h].enemyCount = r
                        }
                    }, o.customUpdate = function(t) {
                        this.runCustomUpdate(this.allGeBans, t)
                    }, o.initRooms = function() {
                        this.rooms = [], M.set(m.myGlobalDataType.allRooms, this.rooms), N.init()
                    }, o.resetRooms = function() {
                        this.rooms.length = 0, N.reset()
                    }, o.addRoom = function(t) {
                        var e = N.getItem(t);
                        return this.rooms.push(e), this.emit(I.LevelEvent.addRoomGround, {
                            p: e.tilePos,
                            size: e.size
                        }), e
                    }, o.computeRoomPath = function() {
                        for (var t = this.rooms.length - 1; t >= 1; --t)
                            for (var e = t - 1; e >= 0; --e) this.rooms[t].computePath(this.rooms[e].Id)
                    }, o.initTile = function() {
                        H.init()
                    }, o.resetTile = function() {
                        H.reset()
                    }, o.unlockTiles = function(t) {
                        for (var e = t.p.x + 1, o = e + 2 * (t.size.x - 1), i = t.p.y + 1, n = i + 2 * (t.size.y - 1), s = {
                                p: X,
                                content: null
                            }, a = t.tiles, l = x.getPlayerData(), h = l.unlockTileContents, r = [], u = e; u <= o; u += 2) {
                            X.x = u, h[u] || (h[u] = {});
                            for (var d = i; d <= n; d += 2) {
                                if (X.y = d, h[u] && h[u][d]) s.content = h[u][d];
                                else if (a[u] && a[u][d])
                                    if (s.content = a[u][d], s.content.type == m.TileContentType.weapon) {
                                        var c = l.weapons.unlockMaxType + 1;
                                        c >= m.WeaponType.count && (c = m.WeaponType.count - 1), s.content.weaponType = c, l.weapons.unlockMaxType = c, h[u] || (h[u] = {}), h[u][d] = {
                                            type: m.TileContentType.weapon,
                                            weaponType: c
                                        }
                                    } else h[u][d] = a[u][d];
                                else s.content = null;
                                var p = H.getItem(s);
                                r.push(p.Id)
                            }
                        }
                        return r
                    }, o.initDoor = function() {
                        V.init()
                    }, o.resetDoor = function() {
                        V.reset()
                    }, o.unlockDoors = function(t, e, o) {
                        var i = o.p.x,
                            n = i + 2 * o.size.x,
                            s = o.p.y,
                            a = s + 2 * o.size.y,
                            l = [];
                        this.addDoorsH(t, e, i, n, s, s - 1, l), this.addDoorsH(t, e, i, n, a, a + 1, l), this.addDoorsV(t, e, i, s, a, i - 1, l), this.addDoorsV(t, e, n, s, a, n + 1, l);
                        for (var h = l.length - 1; h >= 0; --h) {
                            V.getItemById(l[h]).addConnectDoors(l)
                        }
                        return l
                    }, o.addDoorsH = function(t, e, o, i, n, s, a) {
                        X.y = n;
                        for (var l = o + 1; l <= i; l += 2)(t[l] && t[l].indexOf(n) >= 0 || e[l] && e[l].indexOf(n) >= 0) && (X.x = l, this.addDoor(X, l, s, a))
                    }, o.addDoorsV = function(t, e, o, i, n, s, a) {
                        X.x = o;
                        for (var l = i + 1; l <= n; l += 2)(t[o] && t[o].indexOf(l) >= 0 || e[o] && e[o].indexOf(l) >= 0) && (X.y = l, this.addDoor(X, s, l, a))
                    }, o.addDoor = function(t, e, o, i) {
                        var n = H.getTile(e, o);
                        if (n) {
                            var s = V.getItem({
                                    p: t
                                }),
                                a = N.getItemById(n.roomId);
                            s.addConnectDoors(a.doors), a.addDoor(s.Id), i.push(s.Id), this.removeLanGan(t)
                        }
                    }, o.updateDoorPath = function() {
                        for (var t = V.pool.getAllItems(), e = V.pool.count, o = t.length - 1; o >= e; --o) t[o].computeConnectPaths();
                        for (var i = 2, n = !0; n;) {
                            n = !1;
                            for (var s = t.length - 1; s >= e; --s) n = t[s].computeChildPath(i) || n;
                            i++
                        }
                    }, o.computeDoorRooms = function() {
                        for (var t = V.pool.getAllItems(), e = V.pool.count, o = t.length - 1; o >= e; --o) t[o].computeRooms()
                    }, o.initLanGan = function() {
                        this.lanGanPool = new D, this.allLanGan = [], this.lanGanMap = [];
                        for (var t = f.GameRule.mapScope, e = f.GameRule.tileSize, o = Math.floor(2 * (t.xMax - t.xMin) / e.x), i = 0; i <= o; ++i) {
                            for (var n = [], s = 0; s <= o; ++s) n.push(0);
                            this.lanGanMap.push(n)
                        }
                    }, o.resetLanGan = function() {
                        for (var t = this.allLanGan.length - 1; t >= 0; --t) this.lanGanPool.put(this.allLanGan[t]);
                        this.allLanGan.length = 0;
                        for (var e = this.lanGanMap.length - 1; e >= 0; --e)
                            for (var o = this.lanGanMap[e], i = o.length - 1; i >= 0; --i) o[i] = 0
                    }, o.updateLanGan = function() {
                        for (var t = this.rooms.length - 1; t >= 0; --t) this.scanRoomLanGan(this.rooms[t].tilePos, this.rooms[t].size)
                    }, o.scanRoomLanGan = function(t, e) {
                        var o = t.x,
                            i = t.x + 2 * e.x,
                            n = t.y,
                            s = t.y + 2 * e.y;
                        this.addLanGanH(o, i, n, n - 1, n + 1), this.addLanGanH(o, i, s, s - 1, s + 1), this.addLanGanV(o, n, s, o - 1, o + 1), this.addLanGanV(i, n, s, i - 1, i + 1)
                    }, o.addLanGanH = function(t, e, o, i, n) {
                        X.y = o;
                        for (var s = t + 1; s < e; s += 2) {
                            X.x = s;
                            var a = H.getTile(s, i),
                                l = H.getTile(s, n);
                            j.map[s][o] || this.geBanMap[s][o] || V.map[s][o] || a && a.isUnlockRoom || l && l.isUnlockRoom ? this.removeLanGan(X) : this.addLanGan(X)
                        }
                    }, o.addLanGanV = function(t, e, o, i, n) {
                        X.x = t;
                        for (var s = e + 1; s < o; s += 2) {
                            X.y = s;
                            var a = H.getTile(i, s),
                                l = H.getTile(n, s);
                            j.map[t][s] || this.geBanMap[t][s] || V.map[t][s] || a && a.isUnlockRoom || l && l.isUnlockRoom ? this.removeLanGan(X) : this.addLanGan(X)
                        }
                    }, o.addLanGan = function(t) {
                        if (!this.lanGanMap[t.x][t.y]) {
                            var e = this.lanGanPool.get(C, t);
                            this.allLanGan.push(e), this.lanGanMap[t.x][t.y] = 1
                        }
                    }, o.removeLanGan = function(t) {
                        for (var e = this.allLanGan.length - 1; e >= 0; --e) {
                            var o = this.allLanGan[e];
                            if (o.tilePos.x == t.x && o.tilePos.y == t.y) {
                                this.allLanGan.splice(e, 1), this.lanGanPool.put(o), this.lanGanMap[t.x][t.y] = 0;
                                break
                            }
                        }
                    }, o.initWall = function() {
                        j.init(), this.wallColler = null, this.wallCollerJustPlayer = null
                    }, o.resetWall = function() {
                        S.putAllChildren(this.wallLayer), j.reset(), this.wallColler && (v.RemoveBody(this.wallColler), this.wallColler = null), this.wallCollerJustPlayer && (v.RemoveBody(this.wallCollerJustPlayer), this.wallCollerJustPlayer = null), this.wall1Mesh.reset()
                    }, o.unlockWall = function(t, e) {
                        for (var o = t.walls, i = t.rooms[e], n = i.p.x, s = i.p.x + 2 * i.size.x, a = i.p.y, l = i.p.y + 2 * i.size.y, h = j.map, r = n + 1; r <= s; r += 2) o[r] && o[r][a] && !h[r][a] && this.addWall(r, a, o[r][a]), o[r] && o[r][l] && !h[r][l] && this.addWall(r, l, o[r][l]);
                        for (var u = a + 1; u <= l; u += 2) o[n] && o[n][u] && !h[n][u] && this.addWall(n, u, o[n][u]), o[s] && o[s][u] && !h[s][u] && this.addWall(s, u, o[s][u])
                    }, o.addWall = function(t, e, o) {
                        j.getItem({
                            p: {
                                x: t,
                                y: e
                            },
                            type: o
                        })
                    }, o.setWallMesh = function() {
                        this.wall1Mesh.createMesh(this.allLanGan)
                    }, o.addWallNode = function(t, e, o) {
                        var i = 0;
                        t.x % 2 == 0 && (i = 90);
                        var n = e,
                            s = this.getWallNodeName(o),
                            a = S.get(s);
                        a.setPosition(n);
                        var l = .017453 * i * .5;
                        a.setRotation(0, Math.sin(l), 0, Math.cos(l)), this.wallLayer.addChild(a)
                    }, o.getWallNodeName = function(t) {
                        switch (t) {
                            case m.WallModel.wall:
                                return "Wall1";
                            case m.WallModel.wangGe:
                                return "Wall2"
                        }
                        return ""
                    }, o.setWallColler = function() {
                        this.wallColler && (v.RemoveBody(this.wallColler), this.wallColler = null), this.wallCollerJustPlayer && (v.RemoveBody(this.wallCollerJustPlayer), this.wallCollerJustPlayer = null);
                        for (var t = f.GameRule.mapScope, e = f.GameRule.tileSize, o = Math.floor(2 * (t.xMax - t.xMin) / e.x), i = [], n = j.map, s = {
                                size: {
                                    width: 0,
                                    height: j.houDu
                                },
                                offset: {
                                    x: 0,
                                    y: 0
                                }
                            }, a = 0; a <= o; a += 2) {
                            s.offset.y = -a * e.z * .5;
                            for (var l = 0, h = !1, r = 1; r <= o; r += 2)
                                if (h) {
                                    if (!n[r][a]) {
                                        h = !1;
                                        var u = r - 2;
                                        s.size.width = (r - l) * j.width * .5, s.offset.x = .5 * (u + l) * e.x * .5;
                                        var d = v.CreateCollider(s, y.box);
                                        i.push(d)
                                    }
                                } else n[r][a] && (h = !0, l = r)
                        }
                        s.size.width = j.houDu;
                        for (var c = 0; c <= o; c += 2) {
                            s.offset.x = c * e.x * .5;
                            for (var p = 0, m = !1, T = 1; T <= o; T += 2)
                                if (m) {
                                    if (!n[c][T]) {
                                        m = !1;
                                        var I = T - 2;
                                        s.size.height = (T - p) * j.width * .5, s.offset.y = .5 * -(I + p) * e.z * .5;
                                        var x = v.CreateCollider(s, y.box);
                                        i.push(x)
                                    }
                                } else n[c][T] && (m = !0, p = T)
                        }
                        var G = {
                                active: !0,
                                allowSleep: !0,
                                angle: 0,
                                angularVelocity: 0,
                                angularDamping: 0,
                                awake: !0,
                                bullet: !1,
                                fixedRotation: !0,
                                gravityScale: 0,
                                linearDamping: 0,
                                position: {
                                    x: f.GameRule.enemyMapOffset.x,
                                    y: f.GameRule.enemyMapOffset.y
                                },
                                type: g.b2_staticBody,
                                userData: null
                            },
                            P = {
                                density: 0,
                                friction: 0,
                                isSensor: !1,
                                restitution: 0,
                                shape: null,
                                userData: null
                            };
                        this.wallColler = v.CreateRigid(i, G, P).body, G.position.x += f.GameRule.enemyMapOffset.x, this.wallCollerJustPlayer = v.CreateRigid(i, G, P).body
                    }, o.initGeBan = function() {
                        var t = f.GameRule.mapScope,
                            e = f.GameRule.tileSize,
                            o = Math.floor(2 * (t.xMax - t.xMin) / e.x);
                        this.geBanMap = [];
                        for (var i = 0; i <= o; ++i) {
                            for (var n = [], s = 0; s <= o; ++s) n.push(null);
                            this.geBanMap.push(n)
                        }
                        this.allGeBans = [], this.needFixGeBanCount = 0
                    }, o.resetGeBan = function() {
                        S.putAllChildren(this.geBanLayer, !0);
                        for (var t = this.geBanMap.length - 1; t >= 0; --t)
                            for (var e = this.geBanMap[t], o = 0, i = e.length; o < i; ++o) e[o] = null;
                        this.allGeBans.length = 0, this.needFixGeBanCount = 0
                    }, o.removeGeBan = function(t, e) {
                        var o = this.geBanMap[t][e];
                        this.removeElementInArray(o, this.allGeBans), this.geBanMap[t][e] = null, S.put(o.node)
                    }, o.addGeBan = function(t) {
                        var e = x.getPlayerData().geBans;
                        e[t.p.x] && void 0 !== e[t.p.x][t.p.y] && (t.hp = e[t.p.x][t.p.y]);
                        var o = S.get("GeBan", t);
                        this.geBanLayer.addChild(o);
                        var i = o[B];
                        this.geBanMap[i.tilePos.x][i.tilePos.y] = i, this.allGeBans.push(i), i.needXiuFu && (this.needFixGeBanCount += 1)
                    }, o.unlockGeBan = function(t, e) {
                        var o = t.rooms[e],
                            i = o.p.x,
                            n = o.p.x + 2 * o.size.x,
                            s = o.p.y,
                            a = o.p.y + 2 * o.size.y,
                            l = t.geBans;
                        this.addGeBansH(l, i, n, s, s - 1), this.addGeBansH(l, i, n, a, a + 1), this.addGeBansV(l, i, s, a, i - 1), this.addGeBansV(l, n, s, a, n + 1)
                    }, o.addGeBansH = function(t, e, o, i, n) {
                        X.y = i;
                        for (var s = x.getPlayerData().geBans, a = e + 1; a <= o; a += 2) this.geBanMap[a][i] ? H.getTile(a, n) && (this.geBanMap[a][i].needXiuFu && this.onSubNeedXiuFuGeBan(), this.removeGeBan(a, i)) : t[a] && t[a].indexOf(i) >= 0 && (s[a] && -1 === s[a][i] || (X.x = a, this.addGeBan({
                            p: X
                        })))
                    }, o.addGeBansV = function(t, e, o, i, n) {
                        if (t[e]) {
                            X.x = e;
                            for (var s = o + 1; s <= i; s += 2) this.geBanMap[e][s] ? H.getTile(n, s) && (this.geBanMap[e][s].needXiuFu && this.onSubNeedXiuFuGeBan(), this.removeGeBan(e, s)) : t[e].indexOf(s) >= 0 && (X.y = s, this.addGeBan({
                                p: X
                            }))
                        }
                    }, o.saveGeBanHp = function() {
                        for (var t = x.getPlayerData().geBans, e = this.allGeBans.length - 1; e >= 0; --e) {
                            var o = this.allGeBans[e],
                                i = o.tilePos;
                            t[i.x] || (t[i.x] = {}), t[i.x][i.y] = o.hp
                        }
                    }, o.initTileCollers = function() {
                        this.allTileCollers = [], this.delayAddTileUnlockRoomSequence = [], M.set(m.myGlobalDataType.tileCollers, this.allTileCollers)
                    }, o.resetTileCollers = function() {
                        for (var t = this.allTileCollers.length - 1; t >= 0; --t) S.put(this.allTileCollers[t].node);
                        this.allTileCollers.length = 0, this.delayAddTileUnlockRoomSequence = []
                    }, o.addTileContentItem = function(t) {
                        var e = this;
                        G.loadBundleRes("LevelScene", "SinglePrefab/" + t.str, (function(o) {
                            var i = c(o);
                            p.getScene().addChild(i);
                            var n = i.getComponent(P);
                            i[B] = n, n.init(t.data), e.allTileCollers.push(n)
                        }))
                    }, o.addTileSoldier = function(t) {
                        var e = S.get("TileSoldier", t);
                        p.getScene().addChild(e);
                        var o = e[B];
                        this.allTileCollers.push(o)
                    }, o.onRemoveTileSoldier = function(t) {
                        S.put(t.node), this.removeElementInArray(t, this.allTileCollers), this.emit(I.Common.ALDEvent.sendEvent, {
                            eventName: m.TongJiEvent.unlockSoldier,
                            data: {
                                lv: x.getPlayerData().curLevel,
                                count: M.get(m.Common.GlobalDataType.levelMng).allSoldiers.length
                            }
                        })
                    }, o.onAddSoldier = function(t) {
                        var e = S.get("Soldier", t);
                        p.getScene().addChild(e);
                        var o = e[B];
                        this.allTileCollers.push(o), this.emit(I.LevelEvent.addFightSoldier, o)
                    }, o.onAddTileWeapon = function(t) {
                        var e = S.get("TileWeapon", t);
                        p.getScene().addChild(e);
                        var o = e[B];
                        this.allTileCollers.push(o);
                        var i = x.getPlayerData().weapons;
                        i.unlocked.indexOf(t.weaponType) < 0 && (i.unlocked.push(t.weaponType), this.newWeaponPosition = e.getWorldPosition(), this.emit(I.LevelEvent.updateBtnWeapon))
                    }, o.onDelayAddTileUnlockRoom = function(t, e) {
                        this.delayAddTileUnlockRoomSequence.push({
                            tilePos: t,
                            unlockRoomMaxGold: e.unlockRoomMaxGold,
                            unlockRoomRemainGold: e.unlockRoomRemainGold
                        })
                    }, o.processTileUnlockRoomSequence = function() {
                        for (var t = this.delayAddTileUnlockRoomSequence.length - 1; t >= 0; --t) {
                            var e = S.get("TileUnlockRoom", this.delayAddTileUnlockRoomSequence[t]);
                            p.getScene().addChild(e);
                            var o = e[B];
                            this.allTileCollers.push(o)
                        }
                        this.delayAddTileUnlockRoomSequence.length = 0
                    }, o.initSceneItemTiles = function() {
                        this.sceneItemTiles = [], this.sceneItems = {}, this.sceneItemTileSequnce = []
                    }, o.resetSceneItemTiles = function() {
                        for (var t in this.sceneItemTiles = {}, this.sceneItems)
                            for (var e in this.sceneItems[t]) this.sceneItems[t][e] && S.put(this.sceneItems[t][e]);
                        this.sceneItems = {}, this.sceneItemTileSequnce = {}
                    }, o.removeSceneItems = function(t, e) {
                        for (var o = t.x + 1, i = t.x + 2 * e.x - 1, n = t.y + 1, s = t.y + 2 * e.y - 1, a = o; a <= i; a += 2)
                            for (var l = n; l <= s; l += 2) this.sceneItems[a] && this.sceneItems[a][l] && (S.put(this.sceneItems[a][l]), this.sceneItems[a][l] = null), this.sceneItemTileSequnce[a] || (this.sceneItemTileSequnce[a] = {}), this.sceneItemTileSequnce[a][l] = !1
                    }, o.addSceneItemTiles = function(t, e, o, i) {
                        for (var n = t + 1; n <= e; n += 2) {
                            this.sceneItemTileSequnce[n] || (this.sceneItemTileSequnce[n] = {});
                            for (var s = o + 1; s <= i; s += 2) H.getTile(n, s) || this.sceneItemTiles[n] && this.sceneItemTiles[n][s] || !1 === this.sceneItemTileSequnce[n][s] || (this.sceneItemTileSequnce[n][s] = !0)
                        }
                    }, o.procressSceneItems = function() {
                        var t = f.GameRule.sceneLvConfig[x.getPlayerData().curSceneIndex].sceneId,
                            e = f.GameRule.sceneConfig[t].items;
                        for (var o in this.sceneItemTileSequnce)
                            for (var i in X.x = parseInt(o), this.sceneItemTiles[o] || (this.sceneItemTiles[o] = {}), this.sceneItemTileSequnce[o]) this.sceneItemTileSequnce[o][i] && !this.sceneItemTiles[o][i] && (X.y = parseInt(i), this.sceneItemTiles[o][i] = !0, Math.random() < .2 && this.addSceneItem(X, e))
                    }, o.addSceneItem = function(t, e) {
                        J.convertToWorld(t.x, t.y, O), O.x += 2 * (Math.random() - .5), O.z += 2 * (Math.random() - .5);
                        var o = e[Math.floor(Math.random() * (e.length - .001))],
                            i = S.get(o);
                        i.setPosition(O), i.eulerAngles = r(-90, 360 * Math.random(), 0);
                        var n = .5 * Math.random() + .8;
                        i.setScale(n, n, n), p.getScene().addChild(i), this.sceneItems[t.x] || (this.sceneItems[t.x] = {}), this.sceneItems[t.x][t.y] = i
                    }, o.onDelayUnlockRoom = function(t) {
                        this.delayUnlockRoomTiles.push(t)
                    }, o.onUnlockRoom = function(t) {
                        this.newWeaponPosition = null, H.getTile(t.x, t.y).isUnlockRoom = !1, this.unlockRoomByTile(t), this.postUnlockRoom(), this.newWeaponPosition && x.getData("teachedTile").indexOf(m.TileContentType.weapon) >= 0 && this.showNewWeapon(), this.newWeaponPosition = null
                    }, o.showNewWeapon = function() {
                        this.emit(I.LevelEvent.enterTeach), this.showTouchMask();
                        var t = this.newWeaponPosition;
                        this.newWeaponPosition = null, t.y = .5;
                        var e = M.get(m.Common.GlobalDataType.levelCamera);
                        e.moveTo(1, t), e.changeCamera({
                            duration: 1,
                            pos: r(0, 8, 0),
                            cb: this.onShowNewWeaponTip.bind(this)
                        })
                    }, o.onShowNewWeaponTip = function() {
                        var t = this;
                        this.showMsg("Discovers New Weapons!"), setTimeout((function() {
                            var e = M.get(m.Common.GlobalDataType.levelCamera);
                            e.resumeOriginalTransform(1, (function() {
                                t.emit(I.LevelEvent.exitTeach), t.hideTouchMask()
                            }));
                            var o = M.get(m.myGlobalDataType.player);
                            e.moveTo(1, o.node.position)
                        }), 1e3)
                    }, o.unlockRoomByTile = function(t) {
                        for (var e = R.getData(m.GameDataType.levelMapData, this.mapId), o = e.rooms, i = 0, n = o.length; i < n; ++i) {
                            var s = o[i].dependTile;
                            if (s && s.x == t.x && s.y == t.y) {
                                this.unlockRoom(e, i);
                                break
                            }
                        }
                        this.emit(I.Common.ALDEvent.sendEvent, {
                            eventName: m.TongJiEvent.unlockRoom,
                            data: {
                                lv: x.getPlayerData().curLevel,
                                count: this.rooms.length
                            }
                        })
                    }, o.unlockRoom = function(t, e) {
                        for (var o = this.addRoom(t.rooms[e]), i = this.unlockTiles(t.rooms[e]), n = i.length - 1; n >= 0; --n) o.addTile(i[n]);
                        this.unlockGeBan(t, e);
                        for (var s = this.unlockDoors(t.doors, t.geBans, t.rooms[e]), a = s.length - 1; a >= 0; --a) o.addDoor(s[a]);
                        this.updateDoorPath(), this.computeRoomPath(), this.unlockWall(t, e);
                        var l = u(o.tilePos);
                        l.x -= 2, l.y -= 2;
                        var h = u(o.size);
                        h.x += 2, h.y += 2, this.removeSceneItems(l, h);
                        var r = o.tilePos.x - 8,
                            d = r + 6,
                            c = o.tilePos.y,
                            p = o.tilePos.y + 2 * o.size.y;
                        this.addSceneItemTiles(r, d, c, p), d = (r = o.tilePos.x + 2 * o.size.y + 2) + 6, this.addSceneItemTiles(r, d, c, p), r = o.tilePos.x - 6, d = o.tilePos.x + 2 * o.size.x + 6, p = (c = o.tilePos.y - 8) + 6, this.addSceneItemTiles(r, d, c, p), p = (c = o.tilePos.y + 2 * o.size.y + 2) + 14, this.addSceneItemTiles(r, d, c, p)
                    }, o.postUnlockRoom = function() {
                        this.processTileUnlockRoomSequence(), this.computeDoorRooms(), this.updateLanGan(), this.setWallMesh(), this.setWallColler(), this.procressSceneItems();
                        var t = this.rooms.length;
                        t > 16 && (t = 16), t = .5 * t * .01 + .18, this.emit(I.LevelEvent.zoomCamera, t), t = R.getData(m.GameDataType.levelMapData, this.mapId).rooms.length - this.rooms.length, M.set(m.myGlobalDataType.remainUnlockRoomCount, t), t <= 0 && this.emit(I.LevelEvent.unlockedAllRooms)
                    }, o.onRemoveTileUnlockRoom = function(t) {
                        this.removeElementInArray(t, this.allTileCollers), S.put(t.node)
                    }, o.onEnterLobby = function() {
                        this.saveGeBanHp(), x.saveData(), this.showBtnXiuFu()
                    }, o.showBtnXiuFu = function() {
                        var t;
                        this.needFixGeBanCount = 0;
                        for (var e = this.allGeBans.length - 1; e >= 0; --e) this.allGeBans[e].onEnterLobby(), this.allGeBans[e].needXiuFu && (this.allGeBans[e].showIconXiuLi(), this.needFixGeBanCount += 1, t = this.allGeBans[e].position);
                        this.needFixGeBanCount && this.emit(I.LevelEvent.showBtnXiuFu, this.needFixGeBanCount, t)
                    }, o.onStartFight = function() {
                        for (var t = this.allGeBans.length - 1; t >= 0; --t) this.allGeBans[t].onStartFight()
                    }, o.onAutoXiuFu = function() {
                        this.needFixGeBanCount = 0;
                        for (var t = this.allGeBans.length - 1; t >= 0; --t) this.allGeBans[t].onEnterColl()
                    }, o.onSubNeedXiuFuGeBan = function() {
                        this.needFixGeBanCount > 0 && (this.needFixGeBanCount -= 1, this.emit(I.LevelEvent.showBtnXiuFu, this.needFixGeBanCount))
                    }, e
                }(P)).prototype, "wallLayer", [z], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), F = e(E.prototype, "wall1Mesh", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), A = e(E.prototype, "geBanLayer", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), W = E)) || W)), t("Room", function() {
                    function t() {
                        i(this, "_Id", null), i(this, "tilePos", void 0), i(this, "size", void 0), i(this, "position", void 0), i(this, "centerPosition", void 0), i(this, "doors", void 0), i(this, "tiles", void 0), i(this, "paths", void 0)
                    }
                    t.getItem = function(e) {
                        return this.pool.get(t, e)
                    }, t.getItemById = function(t) {
                        return this.pool.getItemById(t)
                    }, t.putItem = function(t) {
                        this.pool.put(t)
                    }, t.init = function() {
                        this.pool = new D
                    }, t.reset = function() {
                        this.pool.reset()
                    };
                    var e = t.prototype;
                    return e.init = function(t) {
                        this.initDoors(), this.initPaths(), this.initPos(), this.initTiles(), t && this.setData(t)
                    }, e.setData = function(t) {
                        this.setSize(t.size), this.setTilePos(t.p)
                    }, e.reset = function() {
                        this.resetDoors(), this.resetPaths(), this.resetPos(), this.resetTiles()
                    }, e.unuse = function() {
                        this.reset()
                    }, e.reuse = function(t) {
                        this.reset(), t && this.setData(t)
                    }, e.computePath = function(e) {
                        var o = t.getItemById(e),
                            i = o.doors,
                            n = this.doors,
                            s = 1 / 0;
                        this.paths[e] || (this.paths[e] = {
                            startDoorId: 0,
                            targetDoorId: 0
                        });
                        for (var a = this.paths[e], l = n.length - 1; l >= 0; --l)
                            for (var h = V.getItemById(n[l]), r = i.length - 1; r >= 0; --r) {
                                var u = h.getPath(i[r]);
                                u.dis < s && (s = u.dis, a.startDoorId = n[l], a.targetDoorId = i[r])
                            }
                        o.setTargetRoomPath(this.Id, a)
                    }, e.getPath = function(t) {
                        var e = this.paths[t];
                        return V.getItemById(e.startDoorId).getPath(e.targetDoorId)
                    }, e.setTargetRoomPath = function(t, e) {
                        this.paths[t] ? (this.paths[t].startDoorId = e.targetDoorId, this.paths[t].targetDoorId = e.startDoorId) : this.paths[t] = {
                            startDoorId: e.targetDoorId,
                            targetDoorId: e.startDoorId
                        }
                    }, e.initPos = function() {
                        this.tilePos = u(), this.size = u(), this.position = r(), this.centerPosition = r()
                    }, e.resetPos = function() {}, e.setTilePos = function(t) {
                        this.tilePos.set(t), J.convertToWorld(this.tilePos.x, this.tilePos.y, this.position), this.centerPosition.set(this.position), this.centerPosition.x += .5 * this.size.x * f.GameRule.tileSize.x, this.centerPosition.z -= .5 * this.size.y * f.GameRule.tileSize.z
                    }, e.setSize = function(t) {
                        this.size.set(t)
                    }, e.initDoors = function() {
                        this.doors = []
                    }, e.resetDoors = function() {
                        this.doors.length = 0
                    }, e.addDoor = function(t) {
                        this.doors.push(t), this.connectDoorToTile(t)
                    }, e.initTiles = function() {
                        this.tiles = []
                    }, e.resetTiles = function() {
                        this.tiles.length = 0
                    }, e.addTile = function(t) {
                        this.tiles.push(t);
                        var e = H.getItemById(t);
                        e.roomId = this.Id, e.addConnectDoors(this.doors)
                    }, e.connectDoorToTile = function(t) {
                        for (var e = [t], o = this.tiles.length - 1; o >= 0; --o) {
                            H.getItemById(this.tiles[o]).addConnectDoors(e)
                        }
                    }, e.connectDoorsToTile = function(t) {
                        for (var e = t, o = this.tiles.length - 1; o >= 0; --o) {
                            H.getItemById(this.tiles[o]).addConnectDoors(e)
                        }
                    }, e.initPaths = function() {
                        this.paths = {}
                    }, e.resetPaths = function() {
                        this.paths = {}
                    }, o(t, [{
                        key: "Id",
                        get: function() {
                            return this._Id || (this._Id = t.autoId++), this._Id
                        }
                    }]), t
                }()));
            i(N, "pool", void 0), i(N, "autoId", 1);
            var H = t("TileMap", function() {
                function t() {}
                return t.getItem = function(t) {
                    var e = this.pool.get(J, t);
                    return this.map[e.tilePos.x][e.tilePos.y] = e, e
                }, t.getItemById = function(t) {
                    return this.pool.getItemById(t)
                }, t.putItem = function(t) {
                    this.pool.put(t)
                }, t.init = function() {
                    this.pool = new D, this.initMap()
                }, t.reset = function() {
                    this.resetMap(), this.pool.reset()
                }, t.initMap = function() {
                    this.map = [];
                    for (var t = f.GameRule.mapScope, e = f.GameRule.tileSize, o = Math.floor(2 * (t.xMax - t.xMin) / e.x), i = 0; i <= o; ++i) {
                        for (var n = [], s = 0; s <= o; ++s) n.push(null);
                        this.map.push(n)
                    }
                }, t.resetMap = function() {
                    for (var t = this.map.length - 1; t >= 0; --t)
                        for (var e = this.map[t], o = e.length - 1; o >= 0; --o) e[o] = null
                }, t.setMap = function(t) {}, t.getTile = function(t, e) {
                    return this.map[t][e]
                }, t.findNearDoorTile = function(t, e) {
                    var o = this.map[t][e + 2];
                    return o.isDoor || (o = this.map[t][e - 2]).isDoor || (o = this.map[t + 2][e]).isDoor || (o = this.map[t - 2][e]).isDoor ? o : void 0
                }, t
            }());
            i(H, "pool", void 0), i(H, "map", void 0);
            var J = t("Tile", function() {
                function t() {
                    i(this, "_Id", null), i(this, "roomId", void 0), i(this, "isDoor", !1), i(this, "isGeBan", !1), i(this, "isUnlockRoom", !1), i(this, "geBanId", void 0), i(this, "position", void 0), i(this, "tilePos", void 0), i(this, "content", void 0), i(this, "doors", void 0)
                }
                t.convertToWorld = function(t, e, o) {
                    var i = f.GameRule.tileSize;
                    o.x = t * i.x * .5 + f.GameRule.enemyMapOffset.x, o.z = f.GameRule.enemyMapOffset.y - e * i.z * .5
                }, t.convertToTile = function(t, e, o, i) {
                    void 0 === i && (i = !0);
                    var n = f.GameRule.tileSize,
                        s = f.GameRule.enemyMapOffset;
                    i ? (o.x = 2 * Math.floor((t - s.x) / n.x) + 1, o.y = 2 * Math.floor((s.y - e) / n.z) + 1) : (o.x = Math.round(2 * (t - s.x) / n.x), o.y = Math.round(2 * (s.y - e) / n.z))
                };
                var e = t.prototype;
                return e.init = function(t) {
                    this.initConnectDoors(), this.initContent(), this.initState(), t && this.setData(t)
                }, e.setData = function(t) {
                    this.setTilePos(t.p), t.content && this.setContent(t.content)
                }, e.reset = function() {
                    this.resetConnectDoors(), this.resetContent(), this.resetState()
                }, e.unuse = function() {
                    this.reset()
                }, e.reuse = function(t) {
                    this.reset(), t && this.setData(t)
                }, e.initState = function() {
                    this.position = r(), this.tilePos = u(), this.isDoor = !1, this.isGeBan = !1, this.isUnlockRoom = !1, this.geBanId = null
                }, e.resetState = function() {
                    this.isDoor = !1, this.isGeBan = !1, this.isUnlockRoom = !1, this.geBanId = null
                }, e.setTilePos = function(e) {
                    this.tilePos.set(e), t.convertToWorld(e.x, e.y, this.position)
                }, e.initContent = function() {}, e.resetContent = function() {
                    this.content, this.content = null
                }, e.setContent = function(t) {
                    switch (t.type) {
                        case m.TileContentType.shop:
                            this.addShop(t);
                            break;
                        case m.TileContentType.soldier:
                            this.addSoldier(t);
                            break;
                        case m.TileContentType.unlockRoom:
                            this.addUnlockRoom(t);
                            break;
                        case m.TileContentType.weapon:
                            this.addWeapon(t)
                    }
                }, e.addShop = function(t) {
                    var e;
                    switch (t.shopType) {
                        case m.ShopType.atk:
                            e = "TileShopAtk";
                            break;
                        case m.ShopType.atkSpeed:
                            e = "TileShopAtkSpeed";
                            break;
                        case m.ShopType.geBan:
                            e = "TileShopGeBan";
                            break;
                        case m.ShopType.hp:
                            e = "TileShopHp";
                            break;
                        case m.ShopType.moveSpeed:
                            e = "TileShopMoveSpeed"
                    }
                    T.emit(I.LevelEvent.addTileContentItem, {
                        str: e,
                        data: t
                    })
                }, e.addSoldier = function(t) {
                    t.tilePos = this.tilePos, t.soldierRemainGold > 0 ? T.emit(I.LevelEvent.addTileSoldier, t) : T.emit(I.LevelEvent.addSoldier, t)
                }, e.addWeapon = function(t) {
                    t.tilePos = this.tilePos, T.emit(I.LevelEvent.addTileWeapon, t)
                }, e.addUnlockRoom = function(t) {
                    t.unlockRoomRemainGold <= 0 ? T.emit(I.LevelEvent.delayUnlockRoom, this.tilePos) : (this.isUnlockRoom = !0, T.emit(I.LevelEvent.delayAddTileUnlockRoom, this.tilePos, t))
                }, e.initConnectDoors = function() {
                    this.doors = []
                }, e.resetConnectDoors = function() {
                    this.doors.length = 0
                }, e.addConnectDoors = function(t) {
                    for (var e = t.length - 1; e >= 0; --e) {
                        var o = V.getItemById(t[e]),
                            i = o.position.x - this.position.x,
                            n = o.position.z - this.position.z,
                            s = Math.sqrt(i * i + n * n);
                        this.doors.push({
                            doorId: o.Id,
                            dis: s
                        }), Math.abs(o.tilePos.x - this.tilePos.x) <= 1 && Math.abs(o.tilePos.y - this.tilePos.y) <= 1 && (this.isDoor = !0)
                    }
                }, o(t, [{
                    key: "Id",
                    get: function() {
                        return this._Id || (this._Id = t.autoId++), this._Id
                    }
                }]), t
            }());
            i(J, "autoId", 1);
            var V = t("Door", function() {
                function t() {
                    i(this, "_Id", null), i(this, "tilePos", void 0), i(this, "normal", void 0), i(this, "position", void 0), i(this, "connectDoors", void 0), i(this, "paths", void 0), i(this, "rooms", void 0)
                }
                t.getItem = function(e) {
                    var o = this.pool.get(t, e);
                    return this.map[o.tilePos.x][o.tilePos.y] = o.Id, o
                }, t.getItemById = function(t) {
                    return this.pool.getItemById(t)
                }, t.putItem = function(t) {
                    this.pool.put(t)
                }, t.init = function() {
                    this.pool = new D, this.initMap()
                }, t.reset = function() {
                    this.pool.reset(), this.resetMap()
                }, t.initMap = function() {
                    this.map = [];
                    for (var t = f.GameRule.mapScope, e = f.GameRule.tileSize, o = Math.floor(2 * (t.xMax - t.xMin) / e.x), i = 0; i <= o; ++i) {
                        for (var n = [], s = 0; s <= o; ++s) n.push(0);
                        this.map.push(n)
                    }
                }, t.resetMap = function() {
                    for (var t = this.map.length - 1; t >= 0; --t)
                        for (var e = this.map[t], o = e.length - 1; o >= 0; --o) e[o] = 0
                };
                var e = t.prototype;
                return e.init = function(t) {
                    this.initPath(), this.initRooms(), t && this.setData(t)
                }, e.setData = function(t) {
                    this.setTilePos(t.p)
                }, e.reset = function() {
                    this.resetPath(), this.resetRooms()
                }, e.unuse = function() {
                    this.reset()
                }, e.reuse = function(t) {
                    t && this.setData(t)
                }, e.getPath = function(t) {
                    return this.paths[t]
                }, e.addConnectDoors = function(e) {
                    for (var o = e.length - 1; o >= 0; --o) {
                        var i = e[o];
                        if (i != this.Id && !this.isConnect(i)) {
                            var n = t.getItemById(i);
                            O.x = n.position.x - this.position.x, O.z = n.position.z - this.position.z;
                            var s = Math.sqrt(O.x * O.x + O.z * O.z);
                            this.connectDoors.push({
                                doorId: i,
                                dis: s
                            }), n.connectDoor(this.Id, s)
                        }
                    }
                }, e.connectDoor = function(t, e) {
                    for (var o = this.connectDoors.length - 1; o >= 0; --o)
                        if (this.connectDoors[o].doorId == t) return;
                    this.connectDoors.push({
                        doorId: t,
                        dis: e
                    })
                }, e.computeConnectPaths = function() {
                    this.paths = {};
                    for (var t = this.connectDoors.length - 1; t >= 0; --t) this.paths[this.connectDoors[t].doorId] = {
                        path: [this.Id, this.connectDoors[t].doorId],
                        dis: this.connectDoors[t].dis
                    };
                    this.paths[this.Id] = {
                        path: [this.Id, this.Id],
                        dis: 0
                    }
                }, e.computeChildPath = function(t) {
                    var e = [];
                    for (var o in this.paths) this.paths[o].path.length == t && e.push(this.paths[o].path[t - 1]);
                    for (var i = e.length - 1; i >= 0; --i) {
                        var n = this.paths[e[i]].path,
                            s = this.paths[e[i]].dis;
                        this.recordChildPath(e[i], n, s)
                    }
                    return e.length > 0
                }, e.recordChildPath = function(e, o, i) {
                    for (var n = t.getItemById(e).connectDoors, s = n.length - 1; s >= 0; --s) {
                        var a = n[s].doorId;
                        if (a != this.Id) {
                            var l = i + n[s].dis;
                            if (!this.paths[a] || this.paths[a].dis > l) {
                                var h = [].concat(o);
                                h.push(a), this.paths[a] = {
                                    path: h,
                                    dis: l
                                }
                            }
                        }
                    }
                }, e.initPath = function() {
                    this.tilePos = u(), this.normal = r(), this.position = r(), this.connectDoors = [], this.paths = {}
                }, e.resetPath = function() {
                    this.connectDoors.length = 0, this.paths = {}
                }, e.setTilePos = function(t) {
                    this.tilePos.set(t), J.convertToWorld(t.x, t.y, this.position), this.normal.set(0, 0, 0), t.x % 2 == 0 ? this.normal.x = 1 : this.normal.z = 1
                }, e.isConnect = function(t) {
                    for (var e = this.connectDoors.length - 1; e >= 0; --e)
                        if (this.connectDoors[e].doorId == t) return this.connectDoors[e].dis;
                    return 0
                }, e.initRooms = function() {
                    this.rooms = {}
                }, e.resetRooms = function() {
                    this.rooms = {}
                }, e.computeRooms = function() {
                    if (1 == this.normal.x) {
                        var t = H.getTile(this.tilePos.x - 1, this.tilePos.y);
                        t && (this.rooms[t.roomId] = !0), (t = H.getTile(this.tilePos.x + 1, this.tilePos.y)) && (this.rooms[t.roomId] = !0)
                    } else if (1 == this.normal.z) {
                        var e = H.getTile(this.tilePos.x, this.tilePos.y - 1);
                        e && (this.rooms[e.roomId] = !0), (e = H.getTile(this.tilePos.x, this.tilePos.y + 1)) && (this.rooms[e.roomId] = !0)
                    }
                }, o(t, [{
                    key: "Id",
                    get: function() {
                        return this._Id || (this._Id = t.autoId++), this._Id
                    }
                }]), t
            }());
            i(V, "pool", void 0), i(V, "map", void 0), i(V, "autoId", 1);
            var j = t("Wall", function() {
                function t() {
                    i(this, "_Id", null), i(this, "type", void 0), i(this, "tilePos", void 0), i(this, "position", void 0)
                }
                t.getItem = function(e) {
                    var o = this.pool.get(t, e);
                    return this.map[o.tilePos.x][o.tilePos.y] = 1, o
                }, t.getItemById = function(t) {
                    return this.pool.getItemById(t)
                }, t.putItem = function(t) {
                    this.pool.put(t)
                }, t.init = function() {
                    this.pool = new D, this.initMap()
                }, t.reset = function() {
                    this.pool.reset(), this.resetMap()
                }, t.initMap = function() {
                    this.map = [];
                    for (var t = f.GameRule.mapScope, e = f.GameRule.tileSize, o = Math.floor(2 * (t.xMax - t.xMin) / e.x), i = 0; i <= o; ++i) {
                        for (var n = [], s = 0; s <= o; ++s) n.push(0);
                        this.map.push(n)
                    }
                }, t.resetMap = function() {
                    for (var t = this.map.length - 1; t >= 0; --t)
                        for (var e = this.map[t], o = e.length - 1; o >= 0; --o) e[o] = 0
                };
                var e = t.prototype;
                return e.init = function(t) {
                    this.initPosition(), t && this.setData(t)
                }, e.setData = function(t) {
                    this.setTilePos(t.p), this.type = t.type
                }, e.reset = function() {
                    this.resetPosition()
                }, e.unuse = function() {
                    this.reset()
                }, e.reuse = function(t) {
                    this.reset(), t && this.setData(t)
                }, e.initPosition = function() {
                    this.type = m.WallModel.wall, this.tilePos = u(), this.position = r()
                }, e.resetPosition = function() {}, e.setTilePos = function(t) {
                    this.tilePos.set(t), J.convertToWorld(t.x, t.y, this.position)
                }, o(t, [{
                    key: "Id",
                    get: function() {
                        return this._Id || (this._Id = t.autoId++), this._Id
                    }
                }]), t
            }());
            i(j, "houDu", f.GameRule.wallSize.z), i(j, "width", f.GameRule.wallSize.x), i(j, "pool", void 0), i(j, "map", void 0), i(j, "autoId", 1), l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TileSoldier.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelMap.ts", "./LevelColler.ts", "./CustomLabel3D.ts"], (function(t) {
    "use strict";
    var e, i, o, n, l, s, r, a, c, u, h, d, b, f, p, y, v, g, T;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.defineProperty, n = t.assertThisInitialized, l = t.initializerDefineProperty, s = t.createClass
        }, function(t) {
            r = t.cclegacy, a = t._decorator, c = t.v2, u = t.v3, h = t.Node
        }, function(t) {
            d = t.GlobalEnum
        }, function(t) {
            b = t.EventType
        }, function(t) {
            f = t.default
        }, function(t) {
            p = t.default
        }, function(t) {
            y = t.default
        }, function(t) {
            v = t.Tile
        }, function(t) {
            g = t.AABB
        }, function(t) {
            T = t.CustomLabel3D
        }],
        execute: function() {
            var k, D, L, m, I, P, B;
            r._RF.push({}, "52775l2NmdBprjo9KnTnLsX", "TileSoldier", void 0);
            var U = a.ccclass,
                A = a.property,
                S = (c(), c(), u());
            t("TileSoldier", (k = U("TileSoldier"), D = A(h), L = A(T), k((P = e((I = function(t) {
                function e() {
                    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(s)) || this, o(n(e), "gold", 0), o(n(e), "tilePos", c()), l(n(e), "unlockIcon", P, n(e)), l(n(e), "priceLabel", B, n(e)), o(n(e), "_aabb", null), o(n(e), "aabbDirty", !0), e
                }
                i(e, t);
                var r = e.prototype;
                return r.initSub = function() {
                    this.initAABB(), this.initUnlockIcon()
                }, r.resetSub = function() {
                    this.resetAABB(), this.resetUnlockIcon()
                }, r.onEvents = function() {
                    this.on(b.LevelEvent.unlockSoldier, this.onUnlockSoldier, this)
                }, r.setData = function(t) {
                    this.gold = t.soldierMaxGold, this.tilePos.set(t.tilePos), v.convertToWorld(this.tilePos.x, this.tilePos.y, S), this.node.setPosition(S), this.showUnlockIcon(), this.aabbDirty = !0, this.emit(b.LevelEvent.addTileForTeach, d.TileContentType.soldier, this.node.position)
                }, r.onEnterColl = function() {
                    y.get(d.myGlobalDataType.isLevelFighting) || this.showUI(d.UI.unlockTile, {
                        type: d.TileContentType.soldier,
                        gold: this.gold,
                        tilePos: this.tilePos
                    })
                }, r.onExitColl = function() {
                    y.get(d.myGlobalDataType.isLevelFighting) || this.hideUI(d.UI.unlockTile)
                }, r.setLv = function(t) {
                    this.showUnlockIcon()
                }, r.initUnlockIcon = function() {}, r.resetUnlockIcon = function() {}, r.showUnlockIcon = function() {
                    this.unlockIcon.active = !0, S.set(.1, 0, .5), this.priceLabel.reuse({
                        p: S,
                        v: this.gold
                    })
                }, r.hideUnlockIcon = function() {
                    this.unlockIcon.active = !1
                }, r.initAABB = function() {
                    this._aabb = new g, this.aabbDirty = !0
                }, r.resetAABB = function() {
                    this.aabbDirty = !0
                }, r.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, r.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        var t = 1.25;
                        this._aabb.setMinVert(-t, 0, -t), this._aabb.setMaxVert(t, 1, t);
                        var e = this.node.position;
                        this._aabb.addOffset(e), this._aabb.computeCenter()
                    }
                }, r.onUnlockSoldier = function(t) {
                    this.tilePos.x == t.x && this.tilePos.y == t.y && (this.emit(b.LevelEvent.addSoldier, {
                        tilePos: this.tilePos,
                        soldierLv: 1,
                        soldierMaxGold: this.gold
                    }), this.emit(b.LevelEvent.removeTileSoldier, this))
                }, s(e, [{
                    key: "canGrow",
                    get: function() {
                        return f.getPlayerData().asset.gold >= this.gold
                    }
                }]), e
            }(p)).prototype, "unlockIcon", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = e(I.prototype, "priceLabel", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = I)) || m));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SceneGround.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts"], (function(e) {
    "use strict";
    var n, t, r, i, s, o, u, c, a, l, h, f, d, p, v;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor, t = e.inheritsLoose, r = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            s = e.cclegacy, o = e._decorator, u = e.v3, c = e.MeshRenderer, a = e.utils, l = e.Color, h = e.v4
        }, function(e) {
            f = e.default
        }, function(e) {
            d = e.EventType
        }, function(e) {
            p = e.default
        }, function(e) {
            v = e.default
        }],
        execute: function() {
            var m, y, M, g, R;
            s._RF.push({}, "54d49a/HVlOfbZTwZnbkRD4", "SceneGround", void 0);
            var G = o.ccclass,
                b = o.property;
            u(), e("SceneGround", (m = G("SceneGround"), y = b(c), m((R = n((g = function(e) {
                function n() {
                    for (var n, t = arguments.length, s = new Array(t), o = 0; o < t; o++) s[o] = arguments[o];
                    return n = e.call.apply(e, [this].concat(s)) || this, r(i(n), "meshRender", R, i(n)), n
                }
                t(n, e);
                var s = n.prototype;
                return s.onLoad = function() {
                    this.init()
                }, s.initSub = function() {
                    this.initMesh()
                }, s.resetSub = function() {
                    this.resetMesh()
                }, s.onEvents = function() {
                    this.on(d.LevelEvent.createSceneGround, this.createMesh, this)
                }, s.initMesh = function() {
                    this.meshRender.mesh = null
                }, s.resetMesh = function() {
                    this.meshRender.mesh = null
                }, s.createMesh = function(e) {
                    var n = this;
                    this.setGroundColor();
                    for (var t = {
                            positions: [],
                            uvs: [],
                            indices: []
                        }, r = 0, i = e.xMin; i < e.xMax; i += 9)
                        for (var s = e.zMin; s < e.zMax; s += 9) t.positions.push(i, 0, s, i, 0, s + 9, i + 9, 0, s + 9, i + 9, 0, s), t.uvs.push(0, 0, 0, 3, 3, 3, 3, 0), t.indices.push(r, r + 1, r + 2, r, r + 2, r + 3), r += 4;
                    var o = a.createMesh(t);
                    setTimeout((function() {
                        n.meshRender.mesh = o
                    }), 110)
                }, s.setGroundColor = function() {
                    var e = p.getPlayerData().curSceneIndex,
                        n = f.GameRule.sceneLvConfig[e].sceneId,
                        t = f.GameRule.sceneConfig[n].groundColor,
                        r = new l(t),
                        i = this.meshRender.getMaterial(0),
                        s = h();
                    s.x = r.r / 255, s.y = r.g / 255, s.z = r.b / 255, s.w = 1, i.setProperty("mainColor", s)
                }, n
            }(v)).prototype, "meshRender", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = g)) || M));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/HpBarMng.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var i, s, e, o, n, r, a, h, u, p, l, c, f;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, s = t.inheritsLoose, e = t.initializerDefineProperty, o = t.assertThisInitialized, n = t.defineProperty
        }, function(t) {
            r = t.cclegacy, a = t._decorator, h = t.MeshRenderer, u = t.utils, p = t.v4
        }, function(t) {
            l = t.GlobalEnum
        }, function(t) {
            c = t.default
        }, function(t) {
            f = t.default
        }],
        execute: function() {
            var d, y, m, v, M;
            r._RF.push({}, "59956/jyiBCWYFZmcAaqUaA", "HpBarMng", void 0);
            var P = a.ccclass,
                S = a.property,
                g = 100;
            t("HpBarMng", (d = P("HpBarMng"), y = S(h), d((M = i((v = function(t) {
                function i() {
                    for (var i, s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                    return i = t.call.apply(t, [this].concat(r)) || this, e(o(i), "meshRender", M, o(i)), n(o(i), "pass", void 0), n(o(i), "handlePos", void 0), n(o(i), "uniformPos", void 0), n(o(i), "handleSize", void 0), n(o(i), "uniformSize", void 0), n(o(i), "handlePlayerScope", void 0), n(o(i), "uniformPlayerScope", void 0), n(o(i), "dirtyMat", !0), n(o(i), "pool", void 0), n(o(i), "autoId", 1), i
                }
                s(i, t);
                var r = i.prototype;
                return r.onEnable = function() {
                    this.meshRender.mesh || this.createMesh()
                }, r.init = function() {
                    this.initPool(), this.initMat(), f.set(l.myGlobalDataType.hpBarMng, this)
                }, r.reset = function() {
                    this.resetPool(), this.resetMat()
                }, r.getId = function() {
                    return this.pool.length > 0 ? this.pool.pop() : this.autoId < g ? this.autoId++ : null
                }, r.putId = function(t) {
                    this.pool.push(t)
                }, r.showBar = function(t, i, s, e, o) {
                    var n = this.uniformPos[t];
                    n.x = i.x, n.y = i.y, n.z = i.z, n.w = s, (n = this.uniformSize[t]).x = e, n.y = o, this.dirtyMat = !0
                }, r.hideBar = function(t) {
                    this.uniformPos[t].y = 0, this.dirtyMat = !0
                }, r.createMesh = function() {
                    for (var t = {
                            positions: [],
                            uvs: [],
                            colors: [],
                            indices: []
                        }, i = 0; i < g; ++i) this.pushBarMesh(t, i);
                    this.meshRender.mesh = u.createMesh(t)
                }, r.pushBarMesh = function(t, i) {
                    var s = .32,
                        e = .08;
                    t.positions.push(-s, e, i, -s, -e, i, s, -e, i, s, e, i), t.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), t.colors.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), s *= .953125, e *= .8125, t.positions.push(-s, e, i, -s, -e, i, s, -e, i, s, e, i), t.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), 0 == i ? t.colors.push(0, 1, .5, 1, 0, 1, .5, 1, 0, 1, .5, 1, 0, 1, .5, 1) : t.colors.push(1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1), i *= 8, t.indices.push(i, i + 1, i + 2, i, i + 2, i + 3), i += 4, t.indices.push(i, i + 1, i + 2, i, i + 2, i + 3)
                }, r.initMat = function() {
                    var t = this.meshRender.getMaterialInstance(0);
                    this.pass = t.passes[0], this.handlePos = this.pass.getHandle("barPositions"), this.uniformPos = [];
                    for (var i = 0; i < g; ++i) this.uniformPos.push(p());
                    this.handleSize = this.pass.getHandle("barSize"), this.uniformSize = [];
                    for (var s = 0; s < g; ++s) this.uniformSize.push(p(1, 1, 1, 1));
                    this.handlePlayerScope = this.pass.getHandle("playerScope"), this.uniformPlayerScope = p(), this.dirtyMat = !1
                }, r.resetMat = function() {
                    for (var t = 0; t < g; ++t) this.uniformPos[t].y = 0, this.uniformSize[t].set(1, 1, 1, 1);
                    this.applyMat(), this.dirtyMat = !1
                }, r.applyMat = function() {
                    var t = f.get(l.myGlobalDataType.player),
                        i = this.uniformPlayerScope;
                    i.x = t.position.x, i.z = t.position.z, i.w = t.viewScopeSqr, this.pass.setUniform(this.handlePlayerScope, this.uniformPlayerScope), this.pass.setUniformArray(this.handlePos, this.uniformPos), this.pass.setUniformArray(this.handleSize, this.uniformSize)
                }, r.initPool = function() {
                    this.pool = [], this.autoId = 1
                }, r.resetPool = function() {
                    this.pool = [], this.autoId = 1
                }, r.update = function(t) {
                    this.dirtyMat && (this.applyMat(), this.dirtyMat = !1)
                }, i
            }(c)).prototype, "meshRender", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = v)) || m));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FrameAnim.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts", "./GlobalPool.ts"], (function(a) {
    "use strict";
    var t, e, i, s, n, r, l, h, o, p, c, u;
    return {
        setters: [function(a) {
            t = a.applyDecoratedDescriptor, e = a.inheritsLoose, i = a.initializerDefineProperty, s = a.assertThisInitialized, n = a.defineProperty
        }, function(a) {
            r = a.cclegacy, l = a._decorator, h = a.MeshRenderer, o = a.director, p = a.v4
        }, function(a) {
            c = a.default
        }, function(a) {
            u = a.default
        }],
        execute: function() {
            var f, m, y, D, d;
            r._RF.push({}, "5cfccpOCOdDJ6u08wD4hk00", "FrameAnim", void 0);
            var v = l.ccclass,
                g = l.property;
            a("FrameAnim", (f = v("FrameAnim"), m = g(h), f((d = t((D = function(a) {
                function t() {
                    for (var t, e = arguments.length, r = new Array(e), l = 0; l < e; l++) r[l] = arguments[l];
                    return t = a.call.apply(a, [this].concat(r)) || this, i(s(t), "mesh", d, s(t)), n(s(t), "pass", null), n(s(t), "handleFrameData", void 0), n(s(t), "frameData", void 0), n(s(t), "handlePlayData", void 0), n(s(t), "playData", void 0), t
                }
                e(t, a);
                var r = t.prototype;
                return r.initSub = function() {
                    this.initMat()
                }, r.setData = function(a) {
                    if (this.node.setPosition(a.p), a.e && (this.node.eulerAngles = a.e), a.s && this.node.setScale(a.s), this.pass && (this.playData.w = o.root.cumulativeTime, this.applyMat(), this.playData.x > 0)) {
                        var t = this.playData.x * this.frameData.w / this.frameData.z;
                        this.scheduleOnce(this.onPlayFinish, t + .1)
                    }
                }, r.onPlayFinish = function() {
                    u.put(this.node)
                }, r.initMat = function() {
                    this.frameData = p(), this.playData = p();
                    var a = this.mesh.getMaterial(0),
                        t = a.passes[0],
                        e = t.getHandle("playData");
                    t.getUniform(e, this.playData), 1 != this.playData.y && (a = this.mesh.getMaterialInstance(0), this.pass = a.passes[0], this.handlePlayData = this.pass.getHandle("playData"), this.pass.getUniform(this.handlePlayData, this.playData), this.handleFrameData = this.pass.getHandle("frameData"), this.pass.getUniform(this.handleFrameData, this.frameData))
                }, r.applyMat = function() {
                    this.pass && (this.pass.setUniform(this.handleFrameData, this.frameData), this.pass.setUniform(this.handlePlayData, this.playData))
                }, t
            }(c)).prototype, "mesh", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = D)) || y));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/YanWuEffect.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var e, s, i, a, r, n, o, h, l, u, c, m, f, d, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, s = t.inheritsLoose, i = t.initializerDefineProperty, a = t.assertThisInitialized, r = t.defineProperty
        }, function(t) {
            n = t.cclegacy, o = t._decorator, h = t.MeshRenderer, l = t.director, u = t.gfx, c = t.utils, m = t.v4
        }, function(t) {
            f = t.GlobalEnum
        }, function(t) {
            d = t.default
        }, function(t) {
            p = t.default
        }],
        execute: function() {
            var I, v, y, M, P;
            n._RF.push({}, "60d69FzFkRNP4djJuHBGM4l", "YanWuEffect", void 0);
            var D = o.ccclass,
                F = o.property,
                b = 50;
            t("YanWuEffect", (I = D("YanWuEffect"), v = F(h), I((P = e((M = function(t) {
                function e() {
                    for (var e, s = arguments.length, n = new Array(s), o = 0; o < s; o++) n[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(n)) || this, i(a(e), "meshRender", P, a(e)), r(a(e), "pass", void 0), r(a(e), "handle", void 0), r(a(e), "animDatas", void 0), r(a(e), "dirtyMesh", !0), r(a(e), "allItems", []), r(a(e), "lastFreeItemPtr", void 0), e
                }
                s(e, t);
                var n = e.prototype;
                return n.init = function() {
                    this.initItemIdPool(), this.initMat(), this.initMesh(), p.set(f.myGlobalDataType.yanWuEffect, this)
                }, n.reset = function() {
                    this.resetItemIdPool(), this.resetMat(), this.resetMesh()
                }, n.onEnable = function() {
                    this.meshRender.mesh || this.createMesh()
                }, n.setParticle = function(t, e) {
                    var s = this.getItem();
                    if (!s) return !1;
                    s.duration = e;
                    var i = s.id,
                        a = this.animDatas[i];
                    return a.x = t.x, a.y = t.y, a.z = t.z, a.w = l.root.cumulativeTime, this.dirtyMesh = !0, !0
                }, n.initMesh = function() {}, n.createMesh = function() {
                    for (var t = {
                            positions: [],
                            uvs: [],
                            indices: [],
                            customAttributes: [{
                                attr: {
                                    name: "a_animData",
                                    format: u.Format.RGBA32F,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }]
                        }, e = .5, s = 0, i = t.customAttributes[0].values, a = 0, r = 0, n = 0; n < 50; ++n) t.positions.push(-e, e, 0, -e, -e, 0, e, -e, 0, e, e, 0), a = Math.random() > .5 ? .5 : 0, r = Math.random() > .5 ? .5 : 0, t.uvs.push(a, r, a, r + .5, a + .5, r + .5, a + .5, r), t.indices.push(s, s + 1, s + 2, s, s + 2, s + 3), s += 4, i.push(n, 0, 0, 0, n, 0, 0, 0, n, 0, 0, 0, n, 0, 0, 0);
                    this.meshRender.mesh = c.createMesh(t)
                }, n.resetMesh = function() {}, n.initMat = function() {
                    var t = this.meshRender.getMaterialInstance(0);
                    this.pass = t.passes[0], this.handle = this.pass.getHandle("animData"), this.animDatas = [];
                    for (var e = 0; e < b; ++e) this.animDatas.push(m());
                    this.dirtyMesh = !0
                }, n.resetMat = function() {
                    for (var t = 0; t < b; ++t) this.animDatas[t].w = 0;
                    this.applyMat(), this.dirtyMesh = !1
                }, n.applyMat = function() {
                    this.pass.setUniformArray(this.handle, this.animDatas)
                }, n.initItemIdPool = function() {
                    this.allItems = [];
                    for (var t = 0; t < b; ++t) this.allItems.push({
                        id: t,
                        duration: 0
                    });
                    this.lastFreeItemPtr = 49
                }, n.resetItemIdPool = function() {
                    for (var t = 0; t < b; ++t) this.allItems[t].duration = 0;
                    this.lastFreeItemPtr = 49
                }, n.getItem = function() {
                    return this.lastFreeItemPtr >= 0 ? this.allItems[this.lastFreeItemPtr--] : null
                }, n.updateItems = function(t) {
                    for (var e = this.lastFreeItemPtr + 1; e < b; ++e) {
                        var s = this.allItems[e];
                        if (s.duration -= t, s.duration <= 0) {
                            var i = this.allItems[++this.lastFreeItemPtr];
                            this.allItems[this.lastFreeItemPtr] = s, this.allItems[e] = i;
                            var a = s.id,
                                r = this.animDatas[a];
                            r.x = 0, r.y = 0, r.z = 0, r.w = 0, this.dirtyMesh = !0
                        }
                    }
                }, n.update = function(t) {
                    this.updateItems(t), this.dirtyMesh && (this.applyMat(), this.dirtyMesh = !1)
                }, e
            }(d)).prototype, "meshRender", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = M)) || y));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomLabel3D.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(e) {
    "use strict";
    var t, s, i, n, r, o, u, a, l, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, s = e.inheritsLoose, i = e.defineProperty, n = e.assertThisInitialized, r = e.initializerDefineProperty
        }, function(e) {
            o = e.cclegacy, u = e._decorator, a = e.MeshRenderer, l = e.utils
        }, function(e) {
            c = e.default
        }],
        execute: function() {
            var h, p, v, d, f;
            o._RF.push({}, "61b8bWkG11Hma56xvUp/usS", "CustomLabel3D", void 0);
            var y = u.ccclass,
                m = u.property;
            u.executeInEditMode, e("CustomLabel3D", (h = y("CustomLabel3D"), p = m(a), h((f = t((d = function(e) {
                function t() {
                    for (var t, s = arguments.length, o = new Array(s), u = 0; u < s; u++) o[u] = arguments[u];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(n(t), "value", void 0), i(n(t), "valueDirty", !1), r(n(t), "meshRender", f, n(t)), t
                }
                s(t, e);
                var o = t.prototype;
                return o.onEnable = function() {
                    this.valueDirty && (this.valueDirty = !1, this.createMesh(this.value))
                }, o.setData = function(e) {
                    this.node.setPosition(e.p), this.value = e.v, this.meshRender.mesh = null, this.valueDirty = !0
                }, o.createMesh = function(e) {
                    for (var t = {
                            positions: [],
                            uvs: [],
                            indices: []
                        }, s = e.toString(), i = s.length, n = -.32 * (i - 1) * .5, r = 0; r < i; ++r) {
                        var o = .1 * parseInt(s[r]);
                        this.pushMesh(t, n, o), n += .32
                    }
                    this.meshRender.mesh = l.createMesh(t)
                }, o.pushMesh = function(e, t, s) {
                    var i = e.positions.length / 3;
                    e.indices.push(i, i + 1, i + 2, i, i + 2, i + 3);
                    var n = .32,
                        r = .48;
                    e.positions.push(t - n, 0, -r, t - n, 0, r, t + n, 0, r, t + n, 0, -r), e.uvs.push(s, 0, s, 1, s + .1, 1, s + .1, 0)
                }, t
            }(c)).prototype, "meshRender", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = d)) || v));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RoleMeshCreator.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./Loader.ts"], (function(e) {
    "use strict";
    var t, s, a, r, n, i, o, h, u, m, c, d, l, f, A, v;
    return {
        setters: [function(e) {
            t = e.defineProperty
        }, function(e) {
            s = e.cclegacy, a = e.Prefab, r = e.instantiate, n = e.director, i = e.SkinnedMeshRenderer, o = e.SkeletalAnimation, h = e.gfx, u = e.SkelAnimDataHub, m = e.mat4, c = e.Mat4, d = e.v4, l = e.utils
        }, function(e) {
            f = e.GlobalEnum
        }, function(e) {
            A = e.default
        }, function(e) {
            v = e.default
        }],
        execute: function() {
            s._RF.push({}, "69bf21D4fhCQ5gHPkX7efuy", "RoleMeshCreator", void 0);
            var M = e("default", function() {
                function e() {}
                return e.init = function(e) {
                    this.initBaseMeshData(e)
                }, e.initBaseMeshData = function(e) {
                    this.baseMeshData || (this.skinNodes = [], this.baseMeshData = {}, this.animData = {}, this._loadedMesh(f.BatchSkinMesh.normalEnemy, e))
                }, e.loadBaseMesh = function(e, t) {
                    var s = this;
                    this.baseMeshData[e] || v.loadBundleRes("LevelScene", t, (function(t) {
                        s._loadedMesh(e, t)
                    }), a, !1)
                }, e._loadedMesh = function(e, t) {
                    var s = this,
                        a = r(t);
                    this.skinNodes.push(a), n.getScene().addChild(a);
                    var h = a.getComponentInChildren(i),
                        u = this.recordMeshData(h);
                    this.baseMeshData[e] = u, setTimeout((function() {
                        var t = a.getComponent(o),
                            r = s.recordAnimData(t, h);
                        s.animData[e] = r, a.destroy()
                    }), 0), this.onLoseFinish()
                }, e.recordMeshData = function(e) {
                    var t = e.mesh,
                        s = {};
                    return s.positions = t.readAttribute(0, h.AttributeName.ATTR_POSITION), s.normals = t.readAttribute(0, h.AttributeName.ATTR_NORMAL), s.tangents = t.readAttribute(0, h.AttributeName.ATTR_TANGENT), s.uvs = t.readAttribute(0, h.AttributeName.ATTR_TEX_COORD), s.colors = t.readAttribute(0, h.AttributeName.ATTR_COLOR), s.a_joints = t.readAttribute(0, h.AttributeName.ATTR_JOINTS), s.a_weights = t.readAttribute(0, h.AttributeName.ATTR_WEIGHTS), s.indices = t.readIndices(0), s
                }, e.rotatePosX = function(e) {
                    for (var t = e.length / 3, s = 0; s < t; ++s) {
                        var a = 3 * s + 1,
                            r = e[a];
                        e[a] = e[a + 1], e[a + 1] = -r
                    }
                }, e.onLoseFinish = function() {
                    if (!(Object.keys(this.baseMeshData).length < f.BatchSkinMesh.count)) {
                        for (var e = A.EnemyMeshConfig, t = e.length - 1; t >= 0; --t) this.createRoleMesh(e[t].mesh, e[t].enemyCount);
                        for (var s = this.meshRenderSqenue.length - 1; s >= 0; --s) this.createMesh(this.meshRenderSqenue[s].meshRender, this.meshRenderSqenue[s].cfgIndex);
                        this.meshRenderSqenue = []
                    }
                }, e.recordAnimData = function(e, t) {
                    for (var s = {}, a = e.clips, r = t.skeleton.bindposes, n = t.skeleton.joints, i = a.length - 1; i >= 0; --i) {
                        var o = e.getState(a[i].name);
                        this._recordAnimData(o, s, r, n)
                    }
                    return s
                }, e._recordAnimData = function(e, t, s, a) {
                    var r = u.getOrExtract(e.clip),
                        n = r.info.frames;
                    t[e.name] = {
                        data: [],
                        frames: n
                    };
                    for (var i = m(), o = 0; o < n; ++o) {
                        for (var h = [], d = 0, l = a.length; d < l; ++d) {
                            var f = r.data[a[d]].worldMatrix.values[o],
                                A = s[d];
                            c.multiply(i, f, A), this.matToUniform(h, i)
                        }
                        t[e.name].data.push(h)
                    }
                }, e.matToUniform = function(e, t) {
                    e.push(d(t.m00, t.m01, t.m02, t.m12), d(t.m04, t.m05, t.m06, t.m13), d(t.m08, t.m09, t.m10, t.m14))
                }, e.createMesh = function(e, t) {
                    if (this._roleMeshes)
                        for (var s = A.EnemyMeshConfig[t], a = this._roleMeshes.length - 1; a >= 0; --a)
                            if (this._roleMeshes[a].mesh == s.mesh && this._roleMeshes[a].count == s.enemyCount) return void(e.mesh = this._roleMeshes[a].data);
                    this.meshRenderSqenue.push({
                        cfgIndex: t,
                        meshRender: e
                    })
                }, e.createRoleMesh = function(e, t) {
                    for (var s = this._roleMeshes.length - 1; s >= 0; --s)
                        if (this._roleMeshes[s].mesh == e && this._roleMeshes[s].count == t) return;
                    for (var a = {
                            positions: [],
                            normals: [],
                            tangents: [],
                            uvs: [],
                            indices: [],
                            customAttributes: [{
                                attr: {
                                    name: "a_animData",
                                    format: h.Format.RGBA32F,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }, {
                                attr: {
                                    name: "a_joints",
                                    format: h.Format.RGBA16UI,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }, {
                                attr: {
                                    name: "a_weights",
                                    format: h.Format.RGBA32F,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }]
                        }, r = 0; r < t; ++r) this.addRoleMesh(a, e, r);
                    var n = l.createMesh(a);
                    this._roleMeshes.push({
                        mesh: e,
                        count: t,
                        data: n
                    })
                }, e.addRoleMesh = function(e, t, s) {
                    var a = e.positions.length / 3,
                        r = this.baseMeshData[t];
                    this.recordArr(e.positions, r.positions), this.recordArr(e.normals, r.normals), this.recordArr(e.tangents, r.tangents), this.recordArr(e.uvs, r.uvs), this.recordArrOffset(e.indices, r.indices, a), this.recordArr(e.customAttributes[1].values, r.a_joints), this.recordArr(e.customAttributes[2].values, r.a_weights);
                    for (var n = e.customAttributes[0].values, i = 0, o = r.positions.length / 3; i < o; ++i) n.push(s, 0, 0, 0)
                }, e.recordArrScale = function(e, t, s) {
                    for (var a = 0, r = t.length; a < r; a += 3) e.push(t[a] * s.x), e.push(t[a + 1] * s.y), e.push(t[a + 2] * s.z)
                }, e.recordArrOffset = function(e, t, s) {
                    for (var a = 0, r = t.length; a < r; ++a) e.push(t[a] + s)
                }, e.recordArr = function(e, t) {
                    for (var s = 0, a = t.length; s < a; ++s) e.push(t[s])
                }, e.getAnimFrames = function(e, t) {
                    return this.animData[e][t].frames
                }, e.getAnimData = function(e, t, s, a) {
                    var r = this.animData[a][e].frames,
                        n = Math.floor(t * r + s) % r;
                    return this.animData[a][e].data[n]
                }, e
            }());
            t(M, "skinNodes", void 0), t(M, "baseMeshData", void 0), t(M, "animData", void 0), t(M, "meshRenderSqenue", []), t(M, "_roleMeshes", []), s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DropedHp.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelColler.ts"], (function(t) {
    "use strict";
    var e, s, i, o, a, n, r, h, c, l, u;
    return {
        setters: [function(t) {
            e = t.inheritsLoose, s = t.defineProperty, i = t.assertThisInitialized
        }, function(t) {
            o = t.cclegacy, a = t._decorator, n = t.v3
        }, function(t) {
            r = t.GlobalEnum
        }, function(t) {
            h = t.EventType
        }, function(t) {
            c = t.default
        }, function(t) {
            l = t.default
        }, function(t) {
            u = t.AABB
        }],
        execute: function() {
            var p;
            o._RF.push({}, "7af8dDrzLlBb5Ymcc/3uWYX", "DropedHp", void 0);
            var b, d = a.ccclass;
            a.property, t("DropedHp", d("DropedHp")(p = function(t) {
                function o() {
                    for (var e, o = arguments.length, a = new Array(o), n = 0; n < o; n++) a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this, s(i(e), "_aabb", null), s(i(e), "aabbDirty", !0), s(i(e), "elapsed", 0), s(i(e), "startPos", void 0), s(i(e), "cachePos", void 0), e
                }
                e(o, t);
                var a = o.prototype;
                return a.initSub = function() {
                    this.initAABB(), this.initMoveState()
                }, a.resetSub = function() {
                    this.resetAABB()
                }, a.registAllCustomUpdate = function() {
                    this.registCustomUpdate(b.moveToPlayer, this.stepMoveToPlayer)
                }, a.setData = function(t) {
                    this.node.setPosition(t.p.x, 1, t.p.z), this.aabbDirty = !0, this.resetCustomUpdateState()
                }, a.initAABB = function() {
                    this._aabb = new u, this.aabbDirty = !0
                }, a.resetAABB = function() {
                    this.aabbDirty = !0
                }, a.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, a.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        this._aabb.setMinVert(-2, 0, -2), this._aabb.setMaxVert(2, 1, 2);
                        var t = this.node.getWorldPosition();
                        this._aabb.addOffset(t), this._aabb.computeCenter()
                    }
                }, a.onEnterColl = function(t) {
                    this.cachePos.x = 1e4, this.cachePos.z = 1e4, this._aabb.addOffset(this.cachePos), this.aabbDirty = !1, this.elapsed = 0, this.node.getPosition(this.startPos), this.cachePos.y = this.startPos.y, this.enterCustomUpdateState(b.moveToPlayer)
                }, a.initMoveState = function() {
                    this.elapsed = 0, this.startPos = n(), this.cachePos = n()
                }, a.stepMoveToPlayer = function(t) {
                    this.elapsed += 10 * t;
                    var e = this.elapsed;
                    if (e >= 1) this.addToPlayer();
                    else {
                        var s = l.get(r.myGlobalDataType.player).position;
                        this.cachePos.x = this.startPos.x + (s.x - this.startPos.x) * e, this.cachePos.z = this.startPos.z + (s.z - this.startPos.z) * e, this.node.setPosition(this.cachePos)
                    }
                }, a.addToPlayer = function() {
                    l.get(r.myGlobalDataType.player).addXueBao(), this.emit(h.LevelEvent.removeDropItem, this)
                }, o
            }(c)) || p);
            ! function(t) {
                t[t.none = 0] = "none", t[t.moveToPlayer = 1] = "moveToPlayer"
            }(b || (b = {})), o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelColler.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(t) {
    "use strict";
    var i, e, n, s, r, a, h, o, x, M, c;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor, e = t.defineProperty, n = t.inheritsLoose, s = t.initializerDefineProperty, r = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, h = t._decorator, o = t.v3, x = t.Vec3, M = t.v2
        }, function(t) {
            c = t.default
        }],
        execute: function() {
            var u, y, f, l, b, z;
            a._RF.push({}, "8084dsN6AJFIJN9vcGHU4hF", "LevelColler", void 0);
            var d = h,
                p = d.ccclass,
                m = d.property,
                v = (t("default", (u = m({
                    displayName: "最小点",
                    tooltip: "碰撞范围长方体在XYZ轴上坐标值最小的顶点在节点中的局部坐标"
                }), y = m({
                    displayName: "最大点",
                    tooltip: "碰撞范围长方体在XYZ轴上坐标值最大的顶点在节点中的局部坐标"
                }), p((b = i((l = function(t) {
                    function i() {
                        for (var i, n = arguments.length, a = new Array(n), h = 0; h < n; h++) a[h] = arguments[h];
                        return i = t.call.apply(t, [this].concat(a)) || this, s(r(i), "minVert", b, r(i)), s(r(i), "maxVert", z, r(i)), e(r(i), "_aabb", null), e(r(i), "aabbDirty", !0), i
                    }
                    n(i, t);
                    var a = i.prototype;
                    return a.init = function(t) {
                        this.initAABB(), this.initCustomUpdateState(), this.registAllCustomUpdate(), this.onEvents(), void 0 !== t && this.setData(t)
                    }, a.reset = function() {
                        this.resetAABB(), this.resetCustomUpdateState()
                    }, a.initAABB = function() {
                        this._aabb = new v, this.aabbDirty = !0
                    }, a.resetAABB = function() {
                        this.aabbDirty = !0
                    }, a.setPosition = function(t) {
                        this.node.setPosition(t.x, t.y), this.aabbDirty = !0
                    }, a.setScale = function(t) {
                        this.node.setScale(t), this.aabbDirty = !0
                    }, a.setAngle = function(t) {
                        this.node.eulerAngles = t, this.aabbDirty = !0
                    }, a.clamp = function(t, i, e) {
                        return t < i ? i : t > e ? e : t
                    }, a.getAABB = function() {
                        return this.processDirty(), this._aabb
                    }, a.processDirty = function() {
                        if (this.aabbDirty) {
                            this.aabbDirty = !1;
                            var t = this.node.getWorldMatrix(),
                                i = o(this.minVert);
                            x.transformMat4(i, i, t), this._aabb.recordVert(i), i.set(this.minVert), i.x = this.maxVert.x, x.transformMat4(i, i, t), this._aabb.recordVert(i), i.set(this.minVert), i.z = this.maxVert.z, x.transformMat4(i, i, t), this._aabb.recordVert(i), i.set(this.maxVert), x.transformMat4(i, i, t), this._aabb.recordVert(i), i.set(this.maxVert), i.x = this.minVert.x, x.transformMat4(i, i, t), this._aabb.recordVert(i), i.set(this.maxVert), i.z = this.minVert.z, x.transformMat4(i, i, t), this._aabb.recordVert(i), this._aabb.computeCenter()
                        }
                    }, i.checkAABB = function(t, i) {
                        return t.xMax >= i.xMin && t.xMin <= i.xMax && t.yMax >= i.yMin && t.yMin <= i.yMax && t.zMax >= i.zMin && t.zMin <= i.zMax
                    }, a.checkAABB = function(t) {
                        var i = this.getAABB();
                        return i.xMax >= t.xMin && i.xMin <= t.xMax && i.yMax >= t.yMin && i.yMin <= t.yMax && i.zMax >= t.zMin && i.zMin <= t.zMax
                    }, a.getCrossPos = function(t, i) {
                        var e = this.getMax(t.xMin, i.xMin),
                            n = this.getMin(t.xMax, i.xMax),
                            s = this.getMax(t.yMin, i.yMin),
                            r = this.getMin(t.yMax, i.yMax);
                        return M(.5 * (e + n), .5 * (s + r))
                    }, a.getMin = function(t, i) {
                        return t < i ? t : i
                    }, a.getMax = function(t, i) {
                        return t > i ? t : i
                    }, i
                }(c)).prototype, "minVert", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return o()
                    }
                }), z = i(l.prototype, "maxVert", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return o()
                    }
                }), f = l)) || f)), t("AABB", function() {
                    function t() {
                        e(this, "xMin", void 0), e(this, "xMax", void 0), e(this, "xCenter", void 0), e(this, "yMin", void 0), e(this, "yMax", void 0), e(this, "yCenter", void 0), e(this, "zMin", void 0), e(this, "zMax", void 0), e(this, "zCenter", void 0), this.xMin = 0, this.xMax = 0, this.xCenter = 0, this.yMin = 0, this.yMax = 0, this.yCenter = 0, this.zMin = 0, this.zMax = 0, this.zCenter = 0
                    }
                    var i = t.prototype;
                    return i.recordVert = function(t) {
                        this.xMin > t.x && (this.xMin = t.x), this.xMax < t.x && (this.xMax = t.x), this.yMin > t.y && (this.yMin = t.y), this.yMax < t.y && (this.yMax = t.y), this.zMin > t.z && (this.zMin = t.z), this.zMax < t.z && (this.zMax = t.z)
                    }, i.computeCenter = function() {
                        this.xCenter = .5 * (this.xMin + this.xMax), this.yCenter = .5 * (this.yMin + this.yMax), this.zCenter = .5 * (this.zMin + this.zMax)
                    }, i.addOffset = function(t) {
                        this.xMin += t.x, this.xMax += t.x, this.yMin += t.y, this.yMax += t.y, this.zMin += t.z, this.zMax += t.z, this.computeCenter()
                    }, i.setMinVert = function(t, i, e) {
                        this.xMin = t, this.yMin = i, this.zMin = e
                    }, i.setMaxVert = function(t, i, e) {
                        this.xMax = t, this.yMax = i, this.zMax = e
                    }, i.checkColler = function(t) {
                        return this.xMin < t.xMax && this.xMax > t.xMin && this.zMin < t.zMax && this.zMax > t.zMin
                    }, t
                }()));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DeadBlood.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, s, i, r, n, o, a, h, u, c, p, d, l, f;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, s = t.inheritsLoose, i = t.initializerDefineProperty, r = t.assertThisInitialized, n = t.defineProperty
        }, function(t) {
            o = t.cclegacy, a = t._decorator, h = t.MeshRenderer, u = t.director, c = t.gfx, p = t.utils, d = t.v4
        }, function(t) {
            l = t.EventType
        }, function(t) {
            f = t.default
        }],
        execute: function() {
            var m, M, v, y, g;
            o._RF.push({}, "880e67jwCFCzpkzHWUR3z1K", "DeadBlood", void 0);
            var P = a.ccclass,
                R = a.property;
            t("DeadBlood", (m = P("DeadBlood"), M = R(h), m((g = e((y = function(t) {
                function e() {
                    for (var e, s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(o)) || this, i(r(e), "meshRender", g, r(e)), n(r(e), "pass", void 0), n(r(e), "handle", void 0), n(r(e), "groupPos", void 0), n(r(e), "curPtr", void 0), n(r(e), "dirtyMat", !1), e
                }
                s(e, t);
                var o = e.prototype;
                return o.onEnable = function() {
                    this.meshRender.mesh || this.createMesh()
                }, o.initSub = function() {
                    this.initMat(), this.initMesh()
                }, o.resetSub = function() {
                    this.resetMat()
                }, o.onEvents = function() {
                    this.on(l.LevelEvent.playEnemyDeadBlood, this.play, this)
                }, o.play = function(t) {
                    ++this.curPtr >= 30 && (this.curPtr = 0);
                    var e = this.groupPos[this.curPtr];
                    e.x = t.x, e.y = 1, e.z = t.z, e.w = u.root.cumulativeTime, this.dirtyMat = !0
                }, o.initMesh = function() {
                    this.meshRender.mesh = null
                }, o.createMesh = function() {
                    if (!this.meshRender.mesh) {
                        for (var t = {
                                positions: [],
                                uvs: [],
                                indices: [],
                                customAttributes: [{
                                    attr: {
                                        name: "a_animData",
                                        format: c.Format.RGBA32F,
                                        isNormalized: !1,
                                        stream: 0,
                                        isInstanced: !1,
                                        location: 0,
                                        customOffset: 0
                                    },
                                    values: []
                                }]
                            }, e = 0; e < 30; ++e) this.pushParticleGroup(t, e);
                        this.meshRender.mesh = p.createMesh(t)
                    }
                }, o.pushParticleGroup = function(t, e) {
                    for (var s = t.positions.length / 3, i = Math.round(1 * Math.random() + 2), r = .1 * Math.random() + .1, n = .5 * Math.round(Math.random()), o = .5 * Math.round(Math.random()), a = 0; a < i; ++a) {
                        t.uvs.push(n, o, n, o + .5, n + .5, o + .5, n + .5, o);
                        var h = 6.3 * Math.random(),
                            u = .5 * Math.random() + 1,
                            c = 3 * Math.random() + 4,
                            p = c * Math.sin(u),
                            d = c * Math.cos(u),
                            l = d * Math.cos(h),
                            f = d * Math.sin(h);
                        t.customAttributes[0].values.push(l, p, f, e, l, p, f, e, l, p, f, e, l, p, f, e);
                        var m = .1 * (p + Math.sqrt(p * p + 19.8));
                        t.positions.push(-r, r, m, -r, -r, m, r, -r, m, r, r, m), t.indices.push(s, s + 1, s + 2, s, s + 2, s + 3), s += 4
                    }
                }, o.initMat = function() {
                    var t = this.meshRender.getMaterialInstance(0);
                    this.pass = t.passes[0], this.handle = this.pass.getHandle("groupPos"), this.groupPos = [];
                    for (var e = 0; e < 30; ++e) this.groupPos.push(d());
                    this.curPtr = 0
                }, o.resetMat = function() {
                    for (var t = this.groupPos.length - 1; t >= 0; --t) this.groupPos[t].set(0, 0, 0, 0);
                    this.applyMat()
                }, o.applyMat = function() {
                    this.pass.setUniformArray(this.handle, this.groupPos)
                }, o.update = function(t) {
                    this.dirtyMat && (this.dirtyMat = !1, this.applyMat())
                }, e
            }(f)).prototype, "meshRender", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = y)) || v));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var e, i, n, s, o, a, l, h, u, d, r, m, p, v, c, L, g;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.defineProperty, s = t.assertThisInitialized, o = t.initializerDefineProperty, a = t.createClass
        }, function(t) {
            l = t.cclegacy, h = t.Node, u = t._decorator, d = t.warn
        }, function(t) {
            r = t.GlobalEnum
        }, function(t) {
            m = t.EventType
        }, function(t) {
            p = t.default
        }, function(t) {
            v = t.default, c = t.ActionMngType
        }, function(t) {
            L = t.default
        }, function(t) {
            g = t.default
        }],
        execute: function() {
            var f, C, S, y;
            l._RF.push({}, "8a3a1r8py9NEZq3f4jOfVcp", "LevelManager", void 0);
            var E = u,
                b = E.ccclass,
                D = E.property;
            t("default", (f = D(h), b((y = e((S = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(a)) || this, n(s(e), "isPaused", void 0), n(s(e), "pauseCount", 0), n(s(e), "elapseTimer", void 0), n(s(e), "lastFrameTime", void 0), n(s(e), "loadedCount", void 0), n(s(e), "loadingSqenue", void 0), n(s(e), "loadElapsed", 0), n(s(e), "delayLoadFinish", 0), n(s(e), "levelData", void 0), o(s(e), "levelLayer", y, s(e)), n(s(e), "actMng", null), n(s(e), "nextState", null), n(s(e), "needLoadCount", 0), e
                }
                i(e, t);
                var l = e.prototype;
                return l.init = function() {
                    this.initCustomUpdateState(), this.initLevelTimer(), this.initActMng(), this.initEnterLobbyState(), this.loadLobbyItems(), this.initLoadingState(), this.initSub(), this.registAllCustomUpdate(), this.onEvents()
                }, l.registAllCustomUpdate = function() {
                    d("关卡管理器的registAllCustomUpdate需由子类实现"), this.registCustomUpdate(r.LevelState.lobby, this.stepLobby), this.registCustomUpdate(r.LevelState.win, this.stepLevelWin), this.registCustomUpdate(r.LevelState.lose, this.stepLevelLose), this.registCustomUpdate(r.LevelState.playing, this.stepLevelPlaying), this.registCustomUpdate(r.LevelState.loading, this.stepLoading), this.registCustomUpdate(r.LevelState.delayLoadFinish, this.stepDelayLoadFinish)
                }, l.onEvents = function() {
                    d("关卡管理器的onEvents需由子类实现"), this.on(m.Common.DirectorEvent.pauseLevel, this.pause, this), this.on(m.Common.DirectorEvent.resumeLevel, this.resume, this)
                }, l.loadLobbyItems = function() {}, l.reset = function() {
                    this.resetCustomUpdateState(), this.resetLevelTimer(), this.resetSimpleComps(), this.resetLoadingState(), this.resetSub()
                }, l.pause = function(t) {
                    void 0 === t && (t = 1), this.pauseCount += t, this.isPaused = !0
                }, l.resume = function(t) {
                    void 0 === t && (t = 1), -1 === t ? (this.pauseCount = 0, this.isPaused = !1) : (this.pauseCount -= t, this.pauseCount <= 0 && (this.pauseCount = 0, this.isPaused = !1))
                }, l.initLevelTimer = function() {
                    this.elapseTimer = 0, this.isPaused = !1, this.pauseCount = 0, this.lastFrameTime = Date.now()
                }, l.resetLevelTimer = function() {
                    this.elapseTimer = 0, this.isPaused = !1, this.pauseCount = 0, this.lastFrameTime = Date.now()
                }, l.customUpdate = function() {
                    if (!this.isPaused) {
                        var t = Date.now(),
                            e = t - this.lastFrameTime;
                        this.lastFrameTime = t, e > 34 && (e = 34), e *= .001, this.elapseTimer += e, this.updateAction(e), this.customStep && this.customStep(e)
                    }
                }, l.running = function(t) {
                    this.isPaused || (t > .0333 && (t = .0333), this.updateAction(t), this.customStep && this.customStep(t))
                }, l.initLoadingState = function() {
                    this.loadedCount = 0, this.loadingSqenue = [], this.loadElapsed = 0
                }, l.resetLoadingState = function() {
                    this.loadedCount = 0, this.loadingSqenue = [], this.loadElapsed = 0
                }, l.onLevelItemLoadStart = function(t) {
                    this.loadingSqenue.push(t), this.updateLoadTip(), this.enterCustomUpdateState(r.LevelState.loading)
                }, l.onLevelItemLoadFinish = function(t) {
                    console.log(t), this.loadedCount += 1, this.loadedCount >= this.loadingSqenue.length ? (this.delayLoadFinish = .1, this.enterCustomUpdateState(r.LevelState.delayLoadFinish)) : (this.emit(m.Common.LoadAssetEvent.showProgress, this.loadedCount / this.loadingSqenue.length), this.updateLoadTip())
                }, l.updateLoadTip = function() {
                    this.emit(m.Common.LoadAssetEvent.showProgress, this.loadedCount / this.loadingSqenue.length);
                    var t = this.loadingSqenue[this.loadedCount] + "..." + this.loadedCount + "/" + this.loadingSqenue.length;
                    console.log(t), this.emit(m.Common.LoadAssetEvent.showLoadTip, t)
                }, l.hideLoadTip = function() {
                    this.emit(m.Common.LoadAssetEvent.hideLoadTip)
                }, l.getLevelData = function() {
                    return this.levelData
                }, l.initActMng = function() {
                    this.actMng = v.getMng(c.Level)
                }, l.updateAction = function(t) {
                    this.actMng.update(t)
                }, l.enterLevel = function(t) {
                    this.node.active = !0, this.needLoadCount <= 0 ? (this.levelData = t, this._enterLevel()) : (this.levelData = t, this.nextState = r.LevelState.playing)
                }, l._enterLevel = function() {
                    this.reset(), this.setData(), this.startLevel()
                }, l.startLevel = function() {
                    this.enterCustomUpdateState(r.LevelState.playing), this.lastFrameTime = Date.now(), this.emit(m.Common.CtrlEvent.ctrlStart);
                    var t = this.levelData.lv;
                    void 0 === t && (t = this.levelData.id), this.emit(m.Common.ALDEvent.levelStart, t)
                }, l.setTeachCmp = function(t) {}, l.exit = function() {
                    this.reset(), this.node.active = !1
                }, l.initEnterLobbyState = function() {
                    this.nextState = null, this.needLoadCount = 0, console.warn("进入首页必须加载的预制件数量为：", this.needLoadCount)
                }, l.enterLobby = function() {
                    this.needLoadCount <= 0 ? (this.reset(), this.setEnterLobbyData(), this.enterCustomUpdateState(r.LevelState.lobby)) : this.nextState = r.LevelState.lobby
                }, l.setEnterLobbyData = function() {
                    console.log("设置关卡场景作为首页背景时的数据，由子类实现")
                }, l.loadLobbyItemFinish = function() {
                    if (this.needLoadCount--, this.needLoadCount <= 0) {
                        switch (this.nextState) {
                            case r.LevelState.lobby:
                                this.setEnterLobbyData(), this.enterCustomUpdateState(r.LevelState.lobby);
                                break;
                            case r.LevelState.playing:
                                this._enterLevel()
                        }
                        this.emit(m.LevelEvent.levelSceneLoadFinish)
                    }
                }, l.stepLevelPlaying = function(t) {
                    this.enterCustomUpdateState(r.LevelState.loading)
                }, l.stepLoading = function(t) {
                    this.loadElapsed += t, 0 == this.loadingSqenue.length && this.loadElapsed > .05 && (this.hideLoadTip(), this.emit(m.Common.LoadAssetEvent.hideProgress), this.enterCustomUpdateState(r.LevelState.fighting))
                }, l.stepDelayLoadFinish = function(t) {
                    this.delayLoadFinish -= t, this.delayLoadFinish <= 0 && (this.hideLoadTip(), this.emit(m.Common.LoadAssetEvent.hideProgress), this.enterCustomUpdateState(r.LevelState.fighting))
                }, l.stepLevelWin = function(t) {}, l.stepLevelLose = function(t) {}, l.stepLobby = function(t) {}, l.playWinAudio = function() {
                    this.emit(m.Common.AudioEvent.playEffect, r.AudioClip.win)
                }, l.playLoseAudio = function() {
                    this.emit(m.Common.AudioEvent.playEffect, r.AudioClip.lose)
                }, l.win = function(t) {
                    if (this.enterCustomUpdateState(r.LevelState.win), this.emit(m.Common.DirectorEvent.playerWin, t), this.emit(m.Common.AudioEvent.stopBGM), this.emit(m.Common.SDKEvent.stopRecord), g.get(r.myGlobalDataType.fightMode) == r.FightMode.normal) {
                        var e = p.getPlayerData().curLevel;
                        this.emit(m.Common.ALDEvent.levelWin, e - 1)
                    }
                    this.emit(m.Common.PlayerDataEvent.trySkinEnd)
                }, l.lose = function(t) {
                    if (this.enterCustomUpdateState(r.LevelState.lose), this.emit(m.Common.DirectorEvent.playerLose, t), this.emit(m.Common.AudioEvent.stopBGM), this.emit(m.Common.SDKEvent.stopRecord), g.get(r.myGlobalDataType.fightMode) == r.FightMode.normal) {
                        var e = p.getPlayerData().curLevel;
                        this.emit(m.Common.ALDEvent.levelLose, e)
                    }
                    this.emit(m.Common.PlayerDataEvent.trySkinEnd)
                }, a(e, [{
                    key: "paused",
                    get: function() {
                        return this.isPaused
                    }
                }]), e
            }(L)).prototype, "levelLayer", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = S)) || C));
            l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DuYeBaoZha.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, s, o, a, r, n;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }, function(t) {
            s = t.cclegacy, o = t._decorator, a = t.gfx, r = t.utils, n = t.Component
        }],
        execute: function() {
            var u;
            s._RF.push({}, "8a7217xxMVLoItK7geU6LhR", "DuYeBaoZha", void 0);
            var i = o.ccclass;
            o.property, t("DuYeBaoZha", i("DuYeBaoZha")(u = function(t) {
                function s() {
                    return t.apply(this, arguments) || this
                }
                return e(s, t), s.prototype.createMesh = function(t) {
                    for (var e = {
                            positions: [],
                            uvs: [],
                            indices: [],
                            customAttributes: [{
                                attr: {
                                    name: "a_speed",
                                    format: a.Format.RGBA32F,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }]
                        }, s = .06, o = 0, n = .8, u = 0; u < 30; ++u) {
                        e.positions.push(-s, s, 0, -s, -s, 0, s, -s, 0, s, s, 0), e.uvs.push(0, 0, 0, 1, 1, 1, 1, 0), e.indices.push(o, o + 1, o + 2, o, o + 2, o + 3), o += 4, n = .3 * Math.random() + .8;
                        var i = (Math.random() - .5) * n,
                            c = (Math.random() + .2) * n,
                            h = (Math.random() - .5) * n,
                            p = 1 * Math.random() + .5;
                        e.customAttributes[0].values.push(i, c, h, p, i, c, h, p, i, c, h, p, i, c, h, p)
                    }
                    t.mesh = r.createMesh(e)
                }, s
            }(n)) || u);
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MyLevelManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./LiquidManager.ts", "./GameEventType.ts", "./QuadTree.ts", "./PlayerData.ts", "./Loader.ts", "./Action3dManager.ts", "./GlobalData.ts", "./LevelDataTemplate.ts", "./GameData.ts", "./GlobalPool.ts", "./LevelMap.ts", "./Enemy.ts", "./ItemMap.ts", "./RoleMeshCreator.ts", "./HpBarMng.ts", "./YanWuEffect.ts", "./DeadBlood.ts", "./LevelManager.ts", "./LevelCamera.ts", "./Player.ts", "./GoldMng.ts", "./Ground.ts"], (function(e) {
    "use strict";
    var t, i, n, a, s, o, r, l, h, d, u, m, c, p, y, v, g, f, M, E, S, C, L, b, G, A, T, P, D, w, B, J, I, F, R, U, k, x, Y, q, z;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, s = e.defineProperty
        }, function(e) {
            o = e.cclegacy, r = e._decorator, l = e.v3, h = e.Prefab, d = e.Node, u = e.Color, m = e.director, c = e.Vec3, p = e.v4
        }, function(e) {
            y = e.GlobalEnum
        }, function(e) {
            v = e.default
        }, function(e) {
            g = e.default, f = e.LiquidColliderType
        }, function(e) {
            M = e.EventType
        }, function(e) {
            E = e.default
        }, function(e) {
            S = e.default
        }, function(e) {
            C = e.default
        }, function(e) {
            L = e.default, b = e.ActionMngType
        }, function(e) {
            G = e.default
        }, function(e) {
            A = e.default
        }, function(e) {
            T = e.default
        }, function(e) {
            P = e.default, D = e.customPoolScript
        }, function(e) {
            w = e.LevelMap
        }, function(e) {
            B = e.EnemyPool
        }, function(e) {
            J = e.default
        }, function(e) {
            I = e.default
        }, function(e) {
            F = e.HpBarMng
        }, function(e) {
            R = e.YanWuEffect
        }, function(e) {
            U = e.DeadBlood
        }, function(e) {
            k = e.default
        }, function(e) {
            x = e.default
        }, function(e) {
            Y = e.Player
        }, function(e) {
            q = e.GoldMng
        }, function(e) {
            z = e.Ground
        }],
        execute: function() {
            var W, N, O, _, j, H, V, Z, Q, K, X, $, ee, te, ie, ne, ae, se, oe, re, le, he;
            o._RF.push({}, "96965tMQ3pGBpQf/2vNsU/8", "MyLevelManager", void 0);
            var de = r.ccclass,
                ue = r.property,
                me = l();
            e("default", (W = ue(h), N = ue(z), O = ue(w), _ = ue(x), j = ue(Y), H = ue(U), V = ue(q), Z = ue(F), Q = ue(d), K = ue(R), de((ee = t(($ = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(a(t), "normalEnemyPrefab", ee, a(t)), n(a(t), "groundMesh", te, a(t)), s(a(t), "grade", void 0), n(a(t), "levelMap", ie, a(t)), n(a(t), "camera", ne, a(t)), n(a(t), "player", ae, a(t)), s(a(t), "enemyMeshMngs", void 0), s(a(t), "allEnemyMeshMng", void 0), s(a(t), "waitAddEnemySequence", void 0), s(a(t), "addedEnemyPtr", void 0), s(a(t), "totalEnemyCount", void 0), s(a(t), "boss", void 0), s(a(t), "killedEnemyCount", 0), s(a(t), "enemyMap", null), s(a(t), "particleSys", null), s(a(t), "particleGroup", null), s(a(t), "allBullets", void 0), n(a(t), "blood", se, a(t)), n(a(t), "goldMng", oe, a(t)), s(a(t), "totalGoldCount", 0), s(a(t), "allSoldiers", void 0), n(a(t), "hpBar", re, a(t)), s(a(t), "audioRecord", {}), n(a(t), "feiJi", le, a(t)), s(a(t), "feiJiSpeed", void 0), s(a(t), "feiJiPos", void 0), s(a(t), "feiJiSitPos", void 0), s(a(t), "feiJiArrived", !1), n(a(t), "yanWu", he, a(t)), s(a(t), "duYe", void 0), s(a(t), "duYeTree", void 0), s(a(t), "dropItems", void 0), s(a(t), "goldAnimElapsed", 0), s(a(t), "startFightTime", 0), t
                }
                i(t, e);
                var o = t.prototype;
                return o.initSub = function() {
                    G.set(y.Common.GlobalDataType.levelMng, this), this.initAudioRecord(), this.initBlood(), this.initBullet(), this.initCamera(), this.initDropItems(), this.initDuYe(), this.initEnemyMap(), this.initEnemyMeshs(), this.initEnemys(), this.initFeiJi(), this.initGoldAnim(), this.initGrade(), this.initGroundMesh(), this.initHpBar(), this.initLevelMap(), this.initLiquidMng(), this.initPlayer(), this.initSoldiers(), this.initYanWu(), I.init(this.normalEnemyPrefab)
                }, o.resetSub = function() {
                    this.resetAudioRecord(), this.resetBlood(), this.resetBullet(), this.resetCamera(), this.resetDropItems(), this.resetDuYe(), this.resetEnemyMap(), this.resetEnemyMesh(), this.resetEnemys(), this.resetFeiJi(), this.resetGoldAnim(), this.resetGrade(), this.resetGroundMesh(), this.resetHpBar(), this.resetLevelMap(), this.resetLiquidMng(), this.resetPlayer(), this.resetSoldiers(), this.resetYanWu()
                }, o.registAllCustomUpdate = function() {
                    e.prototype.registAllCustomUpdate.call(this), this.registCustomUpdate(y.LevelState.fighting, this.stepFighting), this.registCustomUpdate(y.LevelState.playGoldAnim, this.stepPickGold), this.registCustomUpdate(y.LevelState.enterNewScene, this.stepEnterNewScene), this.registCustomUpdate(y.LevelState.playerJump, this.stepPlayerJump), this.registCustomUpdate(y.LevelState.teaching, this.stepTeaching), this.registCustomUpdate(y.LevelState.playerDied, this.stepPlayerDied), this.registCustomUpdate(y.LevelState.showBoss, this.stepShowBoss), this.registCustomUpdate(y.LevelState.playerJumpToFeiJi, this.stepJumpToFeiJi), this.registCustomUpdate(y.LevelState.feiJiMoveDown, this.stepFeiJiMoveDown), this.registCustomUpdate(y.LevelState.feiJiLeave, this.stepFeiJiLeave)
                }, o.onEvents = function() {
                    e.prototype.onEvents.call(this), this.on(M.LevelEvent.startFight, this.onStartFight, this), this.on(M.LevelEvent.enterLobby, this.onEnterLobby, this), this.on(M.LevelEvent.playerDead, this.onPlayerDied, this), this.on(M.LevelEvent.resurgence, this.onResurgence, this), this.on(M.LevelEvent.cancelResurgence, this.onCancelResurgence, this), this.on(M.LevelEvent.geBanAddEnemy, this.onGeBanAddEnemy, this), this.on(M.LevelEvent.removeEnemy, this.removeEnemy, this), this.on(M.LevelEvent.addEnemyByBoss, this.addEnemyByBoss, this), this.on(M.LevelEvent.addFightSoldier, this.addSoldier, this), this.on(M.LevelEvent.addPlayerBullet, this.addBullet, this), this.on(M.LevelEvent.removePlayerBullet, this.removeBullet, this), this.on(M.LevelEvent.addGold, this.addGold, this), this.on(M.LevelEvent.addDuYe, this.addDuYe, this), this.on(M.LevelEvent.removeDuYe, this.removeDuYe, this), this.on(M.LevelEvent.playerChangeRoom, this.onPlayerChangeRoom, this), this.on(M.LevelEvent.enterNewScene, this.onEnterScene, this), this.on(M.LevelEvent.levelCurScene, this.onLeaveCurScene, this), this.on(M.LevelEvent.addBaoZhaParticle, this.onAddBaoZhaParticle, this), this.on(M.LevelEvent.changeAudioRecord, this.changeAudioRecord, this), this.on(M.LevelEvent.enterTeach, this.onEnterTeach, this), this.on(M.LevelEvent.exitTeach, this.onExitTeach, this), this.on(M.LevelEvent.exitBossInfo, this.onExitBossInfo, this), this.on(M.LevelEvent.levelSceneMaskClosed, this.onLevelSceneMaskClosed, this), this.on(M.LevelEvent.addDropItem, this.addDropItem, this), this.on(M.LevelEvent.removeDropItem, this.removeDropItem, this), S.getData("firstEnterGame") || (this.on(M.Common.LoadAssetEvent.levelItemLoadStart, this.onLevelItemLoadStart, this), this.on(M.Common.LoadAssetEvent.levelItemLoadFinish, this.onLevelItemLoadFinish, this))
                }, o._enterLevel = function() {
                    if (this.setData(), this.emit(M.Common.CtrlEvent.ctrlStart), S.getData("firstEnterGame")) this._enterNewScene();
                    else {
                        var e = {
                            p: this.levelMap.playerEnterPos,
                            e: 0
                        };
                        this.player.enterLevel(e), this.camera.resumeOriginalTransform(1), this.camera.setTarget(this.player.node), this.camera.enterLevel(), this.enterCustomUpdateState(y.LevelState.playing), S.getData("teached") //|| this.showUI(y.UI.levelTeachUI)
                    }
                }, o.setData = function() {
                    var e = v.GameRule.sceneLvConfig,
                        t = S.getPlayerData().curSceneIndex;
                    this.setLevelMap(e[t].mapId), this.setCameraClearColor(), this.setGroundImg()
                }, o.initGroundMesh = function() {
                    this.groundMesh.init()
                }, o.resetGroundMesh = function() {
                    this.groundMesh.reset()
                }, o.setGroundImg = function() {
                    this.groundMesh.setImg()
                }, o.initGrade = function() {
                    this.grade = {
                        gold: 0,
                        zuanShi: 0
                    }
                }, o.resetGrade = function() {
                    this.grade.gold = 0, this.grade.zuanShi = 0
                }, o.computeGrade = function() {
                    var e = G.get(y.myGlobalDataType.fightMode),
                        t = v.GameRule.sceneLvConfig,
                        i = S.getPlayerData().curLevel,
                        n = S.getPlayerData().curSceneIndex,
                        a = this.player.isAlive;
                    switch (e) {
                        case y.FightMode.heiYe:
                            this.grade.zuanShi = Math.round(Math.random()) + 5, a && this.emit(M.LevelEvent.checkRenWu, {
                                type: y.RenWuType.winHeiYe
                            });
                            break;
                        case y.FightMode.normal:
                            t[n].maxLv == i ? this.grade.zuanShi = 10 : this.grade.zuanShi = Math.round(Math.random()) + 3, a && this.emit(M.LevelEvent.checkRenWu, {
                                type: y.RenWuType.winLevel
                            });
                            break;
                        case y.FightMode.wuJin:
                            this.grade.zuanShi = 0, this.emit(M.LevelEvent.checkRenWu, {
                                type: y.RenWuType.winWuJin,
                                data: this.killedEnemyCount
                            })
                    }
                    if (1 == i) this.grade.gold = 45;
                    else switch (e) {
                        case y.FightMode.heiYe:
                            this.grade.gold = 2 * this.totalGoldCount, i > 21 && (this.grade.gold += 20 * (i - 1));
                            break;
                        case y.FightMode.normal:
                            this.grade.gold = this.totalGoldCount, i > 20 && (this.grade.gold += 10 * i);
                            break;
                        default:
                            this.grade.gold = this.totalGoldCount
                    }
                    this.grade.startFightTime = this.startFightTime
                }, o.initLevelMap = function() {
                    this.levelMap.init()
                }, o.resetLevelMap = function() {
                    this.levelMap.reset()
                }, o.setLevelMap = function(e) {
                    this.levelMap.enterMap(e)
                }, o.initCamera = function() {
                    this.camera.init(), G.set(y.Common.GlobalDataType.levelCamera, this.camera)
                }, o.resetCamera = function() {
                    this.camera.reset()
                }, o.setCameraClearColor = function() {
                    var e = S.getPlayerData().curSceneIndex,
                        t = v.GameRule.sceneLvConfig[e].sceneId,
                        i = v.GameRule.sceneConfig[t].groundColor,
                        n = new u(i);
                    this.camera.camera.clearColor = n
                }, o.updateCamera = function(e) {
                    this.camera.customUpdate(e)
                }, o.initPlayer = function() {
                    this.player.init(), G.set(y.myGlobalDataType.player, this.player)
                }, o.resetPlayer = function() {
                    this.player.reset()
                }, o.updatePlayer = function(e) {
                    this.player.customUpdate(e), this.player.checkCollerTileContent()
                }, o.initEnemyMeshs = function() {
                    this.allEnemyMeshMng = [], this.enemyMeshMngs = {}
                }, o.resetEnemyMesh = function() {
                    for (var e = this.allEnemyMeshMng.length - 1; e >= 0; --e) P.put(this.allEnemyMeshMng[e].node);
                    this.allEnemyMeshMng.length = 0, this.enemyMeshMngs = {}
                }, o.addEnemyMesh = function(e) {
                    this.enemyMeshMngs[e.meshType] && this.enemyMeshMngs[e.meshType][e.anim] && this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed] || this.addEnemyMeshMng(e);
                    for (var t = this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed], i = 0, n = t.length; i < n; ++i) {
                        var a = t[i],
                            s = a.getRoleId();
                        if (null !== s) return void e.setMesh(a, i, s)
                    }
                    var o = this.addEnemyMeshMng(e),
                        r = o.getRoleId();
                    e.setMesh(o, t.length - 1, r)
                }, o.addEnemyMeshMng = function(e) {
                    var t = P.get("EnemyMeshMng", e);
                    m.getScene().addChild(t);
                    var i = t[D];
                    return this.enemyMeshMngs[e.meshType] || (this.enemyMeshMngs[e.meshType] = {}), this.enemyMeshMngs[e.meshType][e.anim] || (this.enemyMeshMngs[e.meshType][e.anim] = {}), this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed] || (this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed] = []), this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed].push(i), this.allEnemyMeshMng.push(i), i
                }, o.updateEnemyMesh = function(e) {
                    this.runCustomUpdate(this.allEnemyMeshMng, e)
                }, o.initEnemys = function() {
                    this.waitAddEnemySequence = [], this.addedEnemyPtr = -1, this.killedEnemyCount = 0
                }, o.resetEnemys = function() {
                    B.reset(), this.waitAddEnemySequence.length = 0, this.addedEnemyPtr = -1, this.killedEnemyCount = 0
                }, o.setEnemySequence = function(e) {
                    for (var t = [], i = [], n = null, a = S.getPlayerData().enemyTip, s = e.length - 1; s >= 0; --s) {
                        var o = e[s].id;
                        if (o)
                            if (o > 100)
                                for (var r = e[s].count; r > 0; --r) i.push(o);
                            else {
                                a.indexOf(o) < 0 && (n = o);
                                for (var l = e[s].count; l > 0; --l) t.push(o)
                            }
                    }
                    if (this.totalEnemyCount = t.length, this.totalEnemyCount > 0)
                        for (var h = this.totalEnemyCount - .1, d = t.length - 1; d >= 0; --d) {
                            var u = Math.floor(Math.random() * h);
                            this.waitAddEnemySequence.push(t[u]), t.splice(u, 1), h -= 1
                        }
                    if (this.totalEnemyCount > 0)
                        for (var m = .6 * this.totalEnemyCount, c = i.length - 1; c >= 0; --c) {
                            var p = i[c],
                                v = Math.floor(m + Math.random() * (this.waitAddEnemySequence.length - m));
                            v >= this.waitAddEnemySequence.length && (v = this.waitAddEnemySequence.length - 1);
                            var g = this.waitAddEnemySequence[v];
                            this.waitAddEnemySequence[v] = p, this.waitAddEnemySequence.push(g)
                        } else
                            for (var f = i.length - 1; f >= 0; --f) this.waitAddEnemySequence.push(i[f]);
                    this.totalEnemyCount = this.waitAddEnemySequence.length, n && this.showUI(y.UI.enemyInfoUI, {
                        id: n
                    })
                }, o.setEnemySeqWuJin = function() {
                    for (var e = [].concat(S.getPlayerData().enemyTip), t = S.getPlayerData().bossTip, i = A.getWuJinEnemy(), n = i.length - 1; n >= 0; --n) {
                        var a = i[n].id;
                        e.indexOf(a) < 0 && t.indexOf(a) < 0 && i.splice(n, 1)
                    }
                    this.setEnemySequence(i), this.addedEnemyPtr = -1, this.totalEnemyCount = 1 / 0
                }, o.addEnemy = function(e) {
                    var t = B.get(e);
                    return this.addEnemyMesh(t), t.enterLevel(e), t
                }, o.addEnemyByBoss = function(e) {
                    var t = G.get(y.myGlobalDataType.maxEnemyParticle) - B.pool.usingCount;
                    t > e.count && (t = e.count), this.totalEnemyCount += t;
                    for (var i = 0; i < t; ++i) {
                        var n = B.get(e);
                        this.addEnemyMesh(n), n.enterLevelRoom(e)
                    }
                }, o.removeEnemy = function(e) {
                    var t = this;
                    B.put(e), this.killedEnemyCount += 1, this.emit(M.LevelEvent.updateLevelProgress, this.killedEnemyCount, this.totalEnemyCount);
                    var i = G.get(y.myGlobalDataType.fightMode),
                        n = B.getVisibleCount();
                    i != y.FightMode.wuJin && 0 == n && (this.player.onKilledAllEnemy(), setTimeout((function() {
                        t.clearFightingItems()
                    }), 0), this.playGetGoldAnim(), this.emit(M.Common.AudioEvent.stopBGM), this.emit(M.Common.AudioEvent.playEffect, y.AudioClip.win), this.enterCustomUpdateState(y.LevelState.playGoldAnim), this.camera.changeCamera({
                        duration: 2,
                        pos: l(0, 7, 2.5),
                        angle: l(-70, 0, 0)
                    }))
                }, o.updateEnemys = function(e) {
                    for (var t = B.getAllItems(), i = B.getVisibleStartPtr(), n = this.addedEnemyPtr > 5 && B.pool.usingCount <= 5, a = t.length - 1; a >= i; --a) t[a].customUpdate(e), n && (t[a].isAlive ? this.updateEnemyDirIcons(t[a]) : this.emit(M.LevelEvent.hideEnemyDirIcon, {
                        id: t[a].Id
                    }))
                }, o.updateEnemyDirIcons = function(e) {
                    var t = e.position;
                    this.camera.convertToUI(t, me);
                    var i = G.get(y.Common.GlobalDataType.canvasTransform);
                    Math.abs(me.x) < .5 * i.width && Math.abs(me.y) < .5 * i.height ? this.emit(M.LevelEvent.hideEnemyDirIcon, {
                        id: e.Id
                    }) : this.emit(M.LevelEvent.showEnemyDirIcon, {
                        id: e.Id,
                        uiPos: me
                    })
                }, o.initEnemyMap = function() {
                    this.enemyMap = new J, this.enemyMap.init({
                        size: v.GameRule.enemyMapSize,
                        offset: v.GameRule.enemyMapOffset,
                        scale: v.GameRule.enemyMapScale
                    }), G.set(y.myGlobalDataType.enemyMap, this.enemyMap)
                }, o.resetEnemyMap = function() {
                    this.enemyMap.reset()
                }, o.setEnemyMap = function(e) {
                    this.enemyMap.setSize(e)
                }, o.initLiquidMng = function() {
                    g.init({
                        x: 0,
                        y: 0
                    }), this.createParticleSys()
                }, o.createParticleSys = function() {
                    if (!this.particleSys || !this.particleGroup) {
                        var e = {
                            colorMixingStrength: .5,
                            dampingStrength: 1,
                            destroyByAge: !1,
                            ejectionStrength: 0,
                            elasticStrength: 0,
                            lifetimeGranularity: 100,
                            powderStrength: 0,
                            pressureStrength: .05,
                            radius: v.GameRule.roleRadius,
                            repulsiveStrength: 1,
                            springStrength: 0,
                            staticPressureIterations: 1,
                            staticPressureRelaxation: .2,
                            staticPressureStrength: .2,
                            surfaceTensionNormalStrength: .2,
                            surfaceTensionPressureStrength: .2,
                            viscousStrength: .25
                        };
                        this.particleSys = g.CreateParticleSystem(e), G.set(y.myGlobalDataType.particleSys, this.particleSys);
                        var t = g.CreateCollider({
                                size: {
                                    width: 24,
                                    height: 24
                                },
                                offset: {
                                    x: 0,
                                    y: 0
                                }
                            }, f.box),
                            i = {
                                angle: 0,
                                angularVelocity: 0,
                                color: {
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 0
                                },
                                flags: 0,
                                group: new b2ParticleGroup(null),
                                groupFlags: 0,
                                lifetime: 0,
                                linearVelocity: {
                                    x: 0,
                                    y: 0
                                },
                                position: v.GameRule.enemyMapOffset,
                                positionData: null,
                                particleCount: 0,
                                shape: t,
                                strength: 1,
                                stride: 0,
                                userData: null
                            };
                        this.particleGroup = this.particleSys.CreateParticleGroup(i), G.set(y.myGlobalDataType.particleGroup, this.particleGroup);
                        var n = this.particleGroup.GetParticleCount();
                        G.set(y.myGlobalDataType.maxEnemyParticle, Math.floor(n / 2) - 1);
                        var a = this.particleSys.GetPositionBuffer();
                        G.set(y.myGlobalDataType.particlePosBuffer, a);
                        var s = this.particleSys.GetVelocityBuffer();
                        G.set(y.myGlobalDataType.particleVecBuffer, s)
                    }
                }, o.resetLiquidMng = function() {}, o.updateLiquidMng = function(e) {
                    g.update(e)
                }, o.initBullet = function() {
                    this.allBullets = []
                }, o.resetBullet = function() {
                    for (var e = this.allBullets.length - 1; e >= 0; --e) P.put(this.allBullets[e].node);
                    this.allBullets.length = 0
                }, o.addBullet = function(e) {
                    var t = P.get(e.bullet, e);
                    m.getScene().addChild(t), this.allBullets.push(t[D])
                }, o.removeBullet = function(e) {
                    this.removeElementInArray(e, this.allBullets), P.put(e.node)
                }, o.updateBullets = function(e) {
                    this.runCustomUpdate(this.allBullets, e)
                }, o.initBlood = function() {
                    this.blood.init(), this.blood.node.active = !1
                }, o.resetBlood = function() {
                    this.blood.reset(), this.blood.node.active = !1
                }, o.initGoldAnim = function() {
                    this.goldMng.init(), this.goldMng.node.active = !1, this.totalGoldCount = 0
                }, o.resetGoldAnim = function() {
                    this.goldMng.reset(), this.goldMng.node.active = !1, this.totalGoldCount = 0
                }, o.addGold = function(e, t) {
                    this.goldMng.addGold(e), this.totalGoldCount += t, this.emit(M.LevelEvent.updateTotalGold, this.totalGoldCount)
                }, o.playGetGoldAnim = function() {
                    this.computeGrade(), this.goldMng.moveToPlayer(), this.player.isAlive, this.goldAnimElapsed = 2.5, this.showTouchMask()
                }, o.removeGoldAnim = function() {
                    this.resetGoldAnim()
                }, o.updateGoldAnims = function(e) {
                    this.goldMng.customUpdate(e)
                }, o.initSoldiers = function() {
                    this.allSoldiers = []
                }, o.resetSoldiers = function() {
                    this.allSoldiers.length = 0
                }, o.addSoldier = function(e) {
                    this.allSoldiers.push(e)
                }, o.removeAllSoldier = function() {
                    this.allSoldiers.length = 0
                }, o.updateSoldier = function(e) {
                    switch (G.get(y.myGlobalDataType.fightMode)) {
                        case y.FightMode.heiYe:
                            break;
                        case y.FightMode.normal:
                        default:
                            this.runCustomUpdate(this.allSoldiers, e)
                    }
                }, o.initHpBar = function() {
                    this.hpBar.init()
                }, o.resetHpBar = function() {
                    this.hpBar.reset()
                }, o.initAudioRecord = function() {
                    this.audioRecord = {}, this.audioRecord[y.AudioClip.xiuFu] = {
                        play: !1,
                        elapsed: 0,
                        interval: .05
                    }, this.audioRecord[y.AudioClip.breakWood] = {
                        play: !1,
                        elapsed: 0,
                        interval: .1
                    }, this.audioRecord[y.AudioClip.gold] = {
                        play: !1,
                        elapsed: 0,
                        interval: .2
                    }, this.audioRecord[y.AudioClip.boom] = {
                        play: !1,
                        elapsed: 0,
                        interval: .2
                    };
                    for (var e = 1; e <= 5; ++e) this.audioRecord["gun" + e] = {
                        play: !1,
                        elapsed: 0,
                        interval: .05
                    }
                }, o.resetAudioRecord = function() {
                    for (var e in this.audioRecord) this.audioRecord[e].play = !1, this.audioRecord[e].elapsed = 0
                }, o.changeAudioRecord = function(e) {
                    this.audioRecord[e] ? this.audioRecord[e].elapsed >= this.audioRecord[e].interval && (this.audioRecord[e].play = !0) : console.error("音效未记录：", e)
                }, o.updateAudioRecord = function(e) {
                    for (var t in this.audioRecord) this.audioRecord[t].elapsed += e, this.audioRecord[t].elapsed >= this.audioRecord[t].interval && this.audioRecord[t].play && (this.emit(M.Common.AudioEvent.playEffect, t), this.audioRecord[t].play = !1, this.audioRecord[t].elapsed = 0)
                }, o.initFeiJi = function() {
                    this.feiJiPos = l(), this.feiJiSpeed = l(-10, 0, -10), this.feiJiSitPos = l(.5, -.63, .874), this.feiJi.active = !1, this.feiJi.setPosition(0, 0, 0), this.feiJiArrived = !1
                }, o.resetFeiJi = function() {
                    this.feiJi.setPosition(0, 0, 0), this.feiJi.active = !1, this.feiJiArrived = !1
                }, o.showFeiJi = function() {
                    var e = this;
                    this.feiJi.active = !0;
                    var t = this.levelMap.playerEnterPos;
                    me.set(t), me.y = 10, me.x += 21, me.z += 19, this.feiJiPos.set(me), this.feiJi.setPosition(me);
                    var i = L.moveTo(5, t.x + 1, 5, t.z - 1);
                    i.easing(L.easeInOut(3));
                    var n = L.callFun((function() {
                            e.feiJiArrived = !0
                        })),
                        a = L.sequence(i, n);
                    L.getMng(b.Level).runAction(this.feiJi, a), this.player.node.removeFromParent(), this.feiJi.addChild(this.player.node), this.player.node.setPosition(this.feiJiSitPos), this.player.enterFeiJi(), this.camera.enterNewScene(this.player.node, 5), this.emit(M.Common.AudioEvent.playEffect, y.AudioClip.feiJi)
                }, o.moveAwayFeiJi = function() {
                    var e = L.moveBy(1, 0, 10, 0),
                        t = L.callFun(this.resetFeiJi, this),
                        i = L.sequence(e, t);
                    L.getMng(b.Level).runAction(this.feiJi, i), this.feiJiArrived = !1
                }, o.showLeaveFeiJi = function() {
                    var e = this;
                    this.feiJi.active = !0;
                    var t = this.player.position;
                    me.set(t), me.y = 15, me.x += 1, me.z -= 1, this.feiJiPos.set(me), this.feiJi.setPosition(me);
                    var i = L.moveBy(1, 0, -10, 0),
                        n = L.callFun((function() {
                            var t = e.feiJi.getWorldMatrix();
                            c.transformMat4(me, e.feiJiSitPos, t), e.player.jumpToFeiJi(me), e.enterCustomUpdateState(y.LevelState.playerJumpToFeiJi), e.once(M.LevelEvent.jumpToFeiJiFinish, e.jumpToFeiJiFinish, e)
                        })),
                        a = L.sequence(i, n);
                    L.getMng(b.Level).runAction(this.feiJi, a), this.emit(M.Common.AudioEvent.playEffect, y.AudioClip.feiJi)
                }, o.jumpToFeiJiFinish = function() {
                    this.enterCustomUpdateState(y.LevelState.feiJiLeave);
                    this.player.node.removeFromParent(), this.feiJi.addChild(this.player.node), this.player.node.setPosition(this.feiJiSitPos), this.player.enterFeiJi(), this.camera.levelCurScene(this.player.node, 5);
                    var e = L.moveBy(5, -20, 10, -20);
                    e.easing(L.easeInOut(3)), L.getMng(b.Level).runAction(this.feiJi, e), this.emit(M.LevelEvent.showMaskLevelScene)
                }, o.onLevelSceneMaskClosed = function() {
                    var e = v.GameRule.sceneLvConfig,
                        t = S.getPlayerData().curSceneIndex;
                    this.onEnterScene(e[t])
                }, o.updateFeiJi = function(e) {}, o.checkFeiJiArrived = function() {
                    return this.feiJiArrived
                }, o.initYanWu = function() {
                    this.yanWu.init()
                }, o.resetYanWu = function() {
                    this.yanWu.reset(), this.yanWu.node.active = !1
                }, o.initDuYe = function() {
                    this.duYe = [];
                    var e = v.GameRule.mapScope;
                    this.duYeTree = new E(e.xMin, e.xMax, e.zMin, e.zMax)
                }, o.resetDuYe = function() {
                    for (var e = this.duYe.length - 1; e >= 0; --e) P.put(this.duYe[e].node);
                    this.duYe.length = 0, this.duYeTree.reset()
                }, o.addDuYe = function(e) {
                    var t = P.get("DuYe", e);
                    m.getScene().addChild(t);
                    var i = t[D];
                    this.duYe.push(i), this.duYeTree.insertObj(i)
                }, o.removeDuYe = function(e) {
                    this.duYeTree.removeObj(e), this.removeElementInArray(e, this.duYe)
                }, o.updateDuYe = function(e) {
                    if (this.player.isAlive && !this.player.isWuDi) {
                        this.runCustomUpdate(this.duYe, e);
                        for (var t = this.player.getAABB(), i = this.duYeTree.getObjsByAABB(t), n = i.length - 1; n >= 0; --n) {
                            var a = i[n].getAABB();
                            if (t.checkColler(a)) {
                                this.duYeTree.removeObj(i[n]), i[n].hitPlayer(this.player);
                                break
                            }
                        }
                    }
                }, o.initDropItems = function() {
                    this.dropItems = []
                }, o.resetDropItems = function() {
                    for (var e = this.dropItems.length - 1; e >= 0; --e) P.put(this.dropItems[e].node);
                    this.dropItems = []
                }, o.addDropItem = function(e) {
                    var t = this,
                        i = P.get(e.n, e);
                    if (i) {
                        m.getScene().addChild(i);
                        var n = i[D];
                        this.dropItems.push(n)
                    } else C.loadBundleRes("LevelScene", "SinglePrefab/" + e.n, (function(i) {
                        P.createPool(i.data.name, i);
                        var n = P.get(e.n, e);
                        m.getScene().addChild(n);
                        var a = n[D];
                        t.dropItems.push(a)
                    }))
                }, o.removeDropItem = function(e) {
                    this.removeElementInArray(e, this.dropItems), P.put(e.node)
                }, o.checkCollDropItem = function() {
                    for (var e = this.player.getAABB(), t = this.dropItems.length - 1; t >= 0; --t) {
                        var i = this.dropItems[t].getAABB();
                        e.checkColler(i) && this.dropItems[t].onEnterColl(this.player)
                    }
                }, o.updateDropItem = function(e) {
                    this.runCustomUpdate(this.dropItems, e), this.checkCollDropItem()
                }, o.clearFightingItems = function() {
                    this.resetEnemys(), this.resetEnemyMesh(), this.resetEnemyMap(), this.resetBlood(), this.resetBullet(), this.resetYanWu(), this.resetDuYe(), this.resetDropItems()
                }, o.stepLoading = function(e) {
                    this.loadElapsed += e, 0 == this.loadingSqenue.length && this.loadElapsed > .05 && (this.hideLoadTip(), this.emit(M.Common.LoadAssetEvent.hideProgress), S.getData("firstEnterGame") ? this._enterNewScene() : this.enterCustomUpdateState(y.LevelState.lobby))
                }, o.stepDelayLoadFinish = function(e) {
                    this.delayLoadFinish -= e, this.delayLoadFinish <= 0 && (this.hideLoadTip(), this.emit(M.Common.LoadAssetEvent.hideProgress), S.getData("firstEnterGame") ? this._enterNewScene() : this.enterCustomUpdateState(y.LevelState.lobby))
                }, o.stepFighting = function(e) {
                    this.levelMap.customUpdate(e), this.updateLiquidMng(e), this.updatePlayer(e), this.updateSoldier(e), this.updateEnemys(e), this.updateEnemyMesh(e), this.updateCamera(e), this.updateBullets(e), this.updateDuYe(e), this.updateDropItem(e), this.updateGoldAnims(e), this.updateAudioRecord(e)
                }, o.stepPickGold = function(e) {
                    if (this.updateLiquidMng(e), this.updatePlayer(e), this.updateCamera(e), this.updateAudioRecord(e), this.goldAnimElapsed -= e, this.goldAnimElapsed < 0) {
                        this.hideTouchMask();
                        var t = this.grade;
                        switch (this.resetGoldAnim(), G.get(y.myGlobalDataType.fightMode)) {
                            case y.FightMode.wuJin:
                                t.gold > 0 ? this.win(t) : this.lose(t);
                                break;
                            default:
                                this.player.isAlive ? this.win(t) : this.lose(t)
                        }
                    }
                }, o.stepLobby = function(e) {
                    this.levelMap.customUpdate(e), this.updateLiquidMng(e), this.updatePlayer(e), this.updateCamera(e), this.updateAudioRecord(e)
                }, o.stepEnterNewScene = function(e) {
                    if (this.updateFeiJi(e), this.updateCamera(e), this.updateEnemyMesh(e), this.checkFeiJiArrived()) {
                        this.player.node.removeFromParent(), this.node.addChild(this.player.node);
                        var t = this.feiJi.getWorldMatrix();
                        c.transformMat4(me, this.feiJiSitPos, t), this.player.jumpOutFeiJi(me), this.player.node.eulerAngles = l(0, -45, 0), this.enterCustomUpdateState(y.LevelState.playerJump), this.camera.setTarget(this.player.node), this.camera.enterLevel()
                    }
                }, o.stepPlayerJump = function(e) {
                    var t = this;
                    this.player.customUpdate(e), this.updateCamera(e), this.player.checkJumpFinish() && (this.player.enterLevel({
                        p: this.player.node.position,
                        e: -135,
                        noAnim: !0
                    }), this.resetEnemyMesh(), this.moveAwayFeiJi(), this.onEnterLobby(), this.camera.setTarget(this.player.node), this.camera.enterLevel(), this.emit(M.Common.PlayerDataEvent.updatePlayerData, {
                        attribute: "firstEnterGame",
                        value: !1,
                        mode: "=",
                        save: !1,
                        emit: !1
                    }), this.resetEnemyMesh(), setTimeout((function() {
                        t.hideTouchMask(), t.emit(M.LevelEvent.enterNewSceneFinish), S.getData("teached") || t.emit(M.LevelEvent.showTeach)
                    }), 1200))
                }, o.stepTeaching = function(e) {}, o.stepPlayerDied = function(e) {
                    this.updatePlayer(e), this.updateEnemyMesh(e), this.updateAudioRecord(e)
                }, o.stepShowBoss = function(e) {
                    this.updateEnemyMesh(e), this.updateAudioRecord(e)
                }, o.stepFeiJiMoveDown = function(e) {
                    this.updateCamera(e)
                }, o.stepJumpToFeiJi = function(e) {
                    this.player.customUpdate(e), this.updateCamera(e)
                }, o.stepFeiJiLeave = function(e) {
                    this.updateCamera(e)
                }, o.onEnterScene = function(e) {
                    this.resetBlood(), this.resetBullet(), this.resetCamera(), this.resetEnemyMap(), this.resetEnemyMesh(), this.resetEnemys(), this.resetGoldAnim(), this.resetGrade(), this.resetGroundMesh(), this.resetLevelMap(), this.resetPlayer(), this.resetSoldiers(), this.setData(), this._enterNewScene()
                }, o.onLeaveCurScene = function() {
                    this.showLeaveFeiJi(), this.enterCustomUpdateState(y.LevelState.feiJiMoveDown)
                }, o._enterNewScene = function() {
                    this._customUpdateState != y.LevelState.enterNewScene && this._customUpdateState != y.LevelState.playerJump ? (console.error("进入新场景过场动画"), this._addEnterNewSceneEnemy(), this.showFeiJi(), this.enterCustomUpdateState(y.LevelState.enterNewScene), this.showTouchMask(1, 7)) : console.error("已在过场动画中")
                }, o._addEnterNewSceneEnemy = function() {
                    me.set(0, 0, 0);
                    var e = T.getData(y.GameDataType.enemyData, 1),
                        t = {
                            id: 1,
                            meshType: e.meshType,
                            anim: e.anim,
                            animSpeed: e.animSpeed,
                            roleMeshId: 0,
                            position: me,
                            radian: 0,
                            sr: 0,
                            cr: 0,
                            color: p()
                        };
                    t.color.x = e.color.r / 255, t.color.y = e.color.g / 255, t.color.z = e.color.b / 255, t.color.w = e.scale;
                    for (var i = this.levelMap.playerEnterPos, n = 0; n < 300; ++n) {
                        var a = 40 * (Math.random() - 0) - 10,
                            s = 60 * (Math.random() - .5) + 0;
                        Math.abs(a) < 9 && Math.abs(s) < 9 && (a > -9 && a < 9 && (a = 10 + 20 * Math.random()), s > -9 && s < 9 && (s = 10 + 20 * Math.random())), t.radian = Math.atan2(s, -a), t.sr = Math.sin(t.radian + 1.57), t.cr = Math.cos(t.radian + 1.57), me.x = i.x + a, me.z = i.z + s, this.addNewSceneEnemyMesh(t)
                    }
                }, o.addNewSceneEnemyMesh = function(e) {
                    this.enemyMeshMngs[e.meshType] && this.enemyMeshMngs[e.meshType][e.anim] && this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed] || this.addEnemyMeshMng(e);
                    for (var t = this.enemyMeshMngs[e.meshType][e.anim][e.animSpeed], i = 0, n = t.length; i < n; ++i) {
                        var a = t[i],
                            s = a.getRoleId();
                        if (null !== s) return e.roleMeshId = s, a.updateRoleRT(e), void a.setRoleColor(e)
                    }
                    var o = this.addEnemyMeshMng(e),
                        r = o.getRoleId();
                    e.roleMeshId = r, o.updateRoleRT(e), o.setRoleColor(e)
                }, o.onStartFight = function() {
                    switch (this.startFightTime = (new Date).getTime(), G.get(y.myGlobalDataType.fightMode)) {
                        case y.FightMode.heiYe:
                            this.startFightHeiYe();
                            break;
                        case y.FightMode.normal:
                            this.startFightNormal();
                            break;
                        case y.FightMode.wuJin:
                            this.startFightWuJin()
                    }
                }, o.startFightNormal = function() {
                    G.set(y.myGlobalDataType.isLevelFighting, !0);
                    var e = S.getPlayerData().curLevel,
                        t = A.getLevelEnemy(e);
                    this.setEnemySequence(t), this.emit(M.LevelEvent.showLevelProgress, this.killedEnemyCount, this.totalEnemyCount), t[0].rate ? this.levelMap.randomGeBanEnemyCount(this.totalEnemyCount, t[0].rate) : this.levelMap.randomGeBanEnemyCount(this.totalEnemyCount), this.enterCustomUpdateState(y.LevelState.fighting), this.goldMng.enterLevel(), this.blood.node.active = !0, this.yanWu.node.active = !0, this.emit(M.Common.ALDEvent.levelStart, e)
                }, o.startFightHeiYe = function() {
                    G.set(y.myGlobalDataType.isLevelFighting, !0);
                    var e = S.getPlayerData().curLevel - 1,
                        t = A.getLevelEnemy(e);
                    this.setEnemySequence(t), this.emit(M.LevelEvent.showLevelProgress, this.killedEnemyCount, this.totalEnemyCount), t[0].rate ? this.levelMap.randomGeBanEnemyCount(this.totalEnemyCount, t[0].rate) : this.levelMap.randomGeBanEnemyCount(this.totalEnemyCount), this.enterCustomUpdateState(y.LevelState.fighting), this.goldMng.enterLevel(), this.blood.node.active = !0, this.yanWu.node.active = !0
                }, o.startFightWuJin = function() {
                    G.set(y.myGlobalDataType.isLevelFighting, !0), this.setEnemySeqWuJin(), this.emit(M.LevelEvent.showTotalGoldBar);
                    var e = S.getPlayerData().curLevel,
                        t = e - 2;
                    e < 10 && (t = e);
                    var i = S.getPlayerData().curSceneIndex;
                    i > 0 && (i -= 1, t = v.GameRule.sceneLvConfig[i].maxLv), G.set(y.myGlobalDataType.wuJinCircleCount, t), this.levelMap.randomGeBanEnemyCount(this.totalEnemyCount), this.enterCustomUpdateState(y.LevelState.fighting), this.goldMng.enterLevel(), this.blood.node.active = !0, this.yanWu.node.active = !0
                }, o.onEnterLobby = function() {
                    this.camera.resumeOriginalTransform(1), G.set(y.myGlobalDataType.isLevelFighting, !1), this.enterCustomUpdateState(y.LevelState.lobby)
                }, o.onGeBanAddEnemy = function(e) {
                    switch (G.get(y.myGlobalDataType.fightMode)) {
                        case y.FightMode.wuJin:
                            this.geBanAddEnemyWuJin(e);
                            break;
                        default:
                            this.geBanAddEnemyNormal(e)
                    }
                }, o.geBanAddEnemyNormal = function(e) {
                    var t = e.count;
                    this.addedEnemyPtr + t >= this.waitAddEnemySequence.length && (t = this.waitAddEnemySequence.length - this.addedEnemyPtr - 1);
                    var i = {
                        id: 1,
                        p: me,
                        radian: e.radian,
                        geBanId: e.geBanId
                    };
                    me.y = 0;
                    for (var n = S.getPlayerData().bossTip, a = null, s = 0; s < t; ++s) {
                        this.addedEnemyPtr++;
                        var o = this.waitAddEnemySequence[this.addedEnemyPtr];
                        o || (o = this.waitAddEnemySequence[this.waitAddEnemySequence.length - 1]), i.id = o, me.x = e.p.x + 9 * (Math.random() - .5), me.z = e.p.z + 6 * (Math.random() - .5);
                        var r = this.addEnemy(i);
                        o > 100 && n.indexOf(o) < 0 && (a = r)
                    }
                    a && this.showNewBoss(a)
                }, o.geBanAddEnemyWuJin = function(e) {
                    var t = e.count,
                        i = {
                            id: 1,
                            p: me,
                            radian: e.radian,
                            geBanId: e.geBanId
                        };
                    me.y = 0;
                    for (var n = 0; n < t; ++n) {
                        if (this.addedEnemyPtr++, this.addedEnemyPtr % 100 == 0) {
                            var a = G.get(y.myGlobalDataType.wuJinCircleCount);
                            a += 1, G.set(y.myGlobalDataType.wuJinCircleCount, a)
                        }
                        this.addedEnemyPtr >= this.waitAddEnemySequence.length && (this.addedEnemyPtr = 0);
                        var s = this.waitAddEnemySequence[this.addedEnemyPtr];
                        i.id = s, me.x = e.p.x + 9 * (Math.random() - .5), me.z = e.p.z + 6 * (Math.random() - .5), this.addEnemy(i)
                    }
                }, o.showNewBoss = function(e) {
                    var t = this;
                    this.enterCustomUpdateState(y.LevelState.showBoss), this.showTouchMask();
                    var i = e.position,
                        n = e.enemyTypeId;
                    this.camera.moveTo(1, i), this.camera.changeCamera({
                        duration: 1,
                        pos: l(0, 7, 1),
                        angle: l(-50, 0, 0),
                        cb: function() {
                            t.showUI(y.UI.bossInfoUI, {
                                id: n
                            })
                        }
                    })
                }, o.onExitBossInfo = function() {
                    var e = this;
                    this.camera.moveTo(1, this.player.position), this.showTouchMask(), this.camera.resumeOriginalTransform(1, (function() {
                        e.hideTouchMask(), e.enterCustomUpdateState(y.LevelState.fighting)
                    }))
                }, o.onPlayerChangeRoom = function(e, t) {
                    for (var i = B.getAllItems(), n = B.getVisibleStartPtr(), a = i.length - 1; a >= n; --a) {
                        var s = i[a];
                        s.canAtkClock && s.onPlayerChangeRoom(e, t)
                    }
                }, o.onPlayerDied = function() {
                    var e = this;
                    this.enterCustomUpdateState(y.LevelState.playerDied), this.showTouchMask(), setTimeout((function() {
                        e.hideTouchMask(), e.showUI(y.UI.resurgence)
                    }), 2500)
                }, o.onResurgence = function() {
                    this.player.resurgence(), this.enterCustomUpdateState(y.LevelState.fighting), this.emit(M.Common.AudioEvent.playBGM, y.AudioClip.BGMLevel)
                }, o.onCancelResurgence = function() {
                    var e = this;
                    setTimeout((function() {
                        e.clearFightingItems()
                    }), 0), this.playGetGoldAnim(), this.enterCustomUpdateState(y.LevelState.playGoldAnim)
                }, o.onAddBaoZhaParticle = function(e) {
                    var t = {
                            p: e
                        },
                        i = P.get("BaoZhaParticle", t);
                    i ? m.getScene().addChild(i) : C.loadBundleRes("LevelScene", "SinglePrefab/BaoZhaParticle", (function(e) {
                        P.createPool(e.data.name, e), i = P.get("BaoZhaParticle", t), m.getScene().addChild(i)
                    }))
                }, o.onEnterTeach = function() {
                    this.enterCustomUpdateState(y.LevelState.teaching)
                }, o.onExitTeach = function() {
                    G.get(y.myGlobalDataType.isLevelFighting) ? this.enterCustomUpdateState(y.LevelState.fighting) : this.enterCustomUpdateState(y.LevelState.lobby)
                }, t
            }(k)).prototype, "normalEnemyPrefab", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), te = t($.prototype, "groundMesh", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t($.prototype, "levelMap", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t($.prototype, "camera", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t($.prototype, "player", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t($.prototype, "blood", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t($.prototype, "goldMng", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t($.prototype, "hpBar", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t($.prototype, "feiJi", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t($.prototype, "yanWu", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = $)) || X));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SceneItemMng.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(e) {
    "use strict";
    var t, n, c, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, c = e._decorator
        }, function(e) {
            r = e.default
        }],
        execute: function() {
            var o;
            n._RF.push({}, "98433ERFZ5G0qAsIQz70PIh", "SceneItemMng", void 0);
            var s = c.ccclass;
            c.property, e("SceneItemMng", s("SceneItemMng")(o = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n
            }(r)) || o);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GeBanAnim.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalPool.ts"], (function(t) {
    "use strict";
    var i, e, n, s, o, r, a, u, h, c;
    return {
        setters: [function(t) {
            i = t.inheritsLoose, e = t.defineProperty, n = t.assertThisInitialized
        }, function(t) {
            s = t.cclegacy, o = t._decorator, r = t.v3
        }, function(t) {
            a = t.default, u = t.ActionMngType
        }, function(t) {
            h = t.default
        }, function(t) {
            c = t.default
        }],
        execute: function() {
            var l;
            s._RF.push({}, "a5542d23rtPfo6Jfz2SSOQh", "GeBanAnim", void 0);
            var m = o.ccclass;
            o.property, t("GeBanAnim", m("GeBanAnim")(l = function(t) {
                function s() {
                    for (var i, s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(o)) || this, e(n(i), "items", []), e(n(i), "itemOriginalPos", void 0), i
                }
                i(s, t);
                var o = s.prototype;
                return o.initSub = function() {
                    this.initItems()
                }, o.resetSub = function() {
                    this.resetItems()
                }, o.setData = function(t) {
                    this.node.setPosition(t.p), this.node.eulerAngles = r(0, t.e, 0), this.playItems(t.p.y)
                }, o.initItems = function() {
                    this.items = this.node.children, this.itemOriginalPos = [];
                    for (var t = 0, i = this.items.length; t < i; ++t) this.itemOriginalPos.push(this.items[t].getPosition())
                }, o.resetItems = function() {
                    for (var t = 0, i = this.items.length; t < i; ++t) this.items[t].eulerAngles = r(-90, 0, 0), this.items[t].setPosition(this.itemOriginalPos[t])
                }, o.playItems = function(t) {
                    for (var i = this, e = -t, n = a.getMng(u.Level), s = 0, o = this.items.length; s < o; ++s) {
                        var r = this.itemOriginalPos[s],
                            h = a.jumpBy(1, r.x * (.5 * Math.random() + 1), e, 2 + 3 * Math.random(), 10 + 5 * Math.random()),
                            l = a.rotateTo(1, 0, 180 * (Math.random() - .5), 0),
                            m = a.spawn(h, l);
                        n.runAction(this.items[s], m)
                    }
                    setTimeout((function() {
                        c.put(i.node)
                    }), 1500)
                }, s
            }(h)) || l);
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BulletLockTarget.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameEventType.ts", "./Bullet.ts"], (function(t) {
    "use strict";
    var s, e, i, a, o, n, r, h, l;
    return {
        setters: [function(t) {
            s = t.inheritsLoose, e = t.defineProperty, i = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, o = t._decorator, n = t.v3, r = t.v2
        }, function(t) {
            h = t.EventType
        }, function(t) {
            l = t.Bullet
        }],
        execute: function() {
            var c;
            a._RF.push({}, "aadebYrcyBPv6frj2AADUdR", "BulletLockTarget", void 0);
            var u = o.ccclass,
                p = (o.property, n());
            t("BulletLockTarget", u("BulletLockTarget")(c = function(t) {
                function a() {
                    for (var s, a = arguments.length, o = new Array(a), n = 0; n < a; n++) o[n] = arguments[n];
                    return s = t.call.apply(t, [this].concat(o)) || this, e(i(s), "targetEnemy", null), e(i(s), "targetY", 1), e(i(s), "duration", void 0), e(i(s), "invDuration", void 0), e(i(s), "startPos", void 0), s
                }
                s(a, t);
                var o = a.prototype;
                return o.setData = function(t) {
                    this.startPos.set(t.startPos), this.targetEnemy = t.targetEnemy;
                    var s = this.targetEnemy.position.x - this.startPos.x,
                        e = this.targetEnemy.position.z - this.startPos.z,
                        i = Math.sqrt(s * s + e * e);
                    this.duration = i / t.moveSpeed, this.invDuration = 1 / this.duration, this.elapsed = 0, this.cachePos.set(t.startPos), this.node.setPosition(this.cachePos);
                    var a = this.targetEnemy.position.y - this.startPos.y;
                    if (0 != a) {
                        var o = 57.3 * Math.atan2(-e, s),
                            n = 57.3 * Math.atan2(a, i);
                        p.set(n, o, 0), this.node.eulerAngles = p
                    } else {
                        var r = .5 * Math.atan2(-e, s);
                        this.node.setRotation(0, Math.sin(r), 0, Math.cos(r))
                    }
                    this.atkValue = t.atkValue, this.targetEnemy.atkClock(this.atkValue)
                }, o.initMoveData = function() {
                    this.tilePos = r(), this.moveSpeed = n(), this.targetEnemy = null, this.elapsed = 0, this.duration = 1, this.invDuration = 1, this.startPos = n(), this.cachePos = n()
                }, o.resetMoveData = function() {
                    this.targetEnemy = null, this.elapsed = 0
                }, o.updatePosition = function(t) {
                    if (this.elapsed += t, this.elapsed >= this.duration) this.onArrived();
                    else {
                        var s = this.elapsed * this.invDuration;
                        this.cachePos.x = this.startPos.x + (this.targetEnemy.position.x - this.startPos.x) * s, this.cachePos.y = this.startPos.y + (this.targetY - this.startPos.y) * s, this.cachePos.z = this.startPos.z + (this.targetEnemy.position.z - this.startPos.z) * s, this.node.setPosition(this.cachePos)
                    }
                }, o.onArrived = function() {
                    var t = p;
                    t.x = this.targetEnemy.position.x - this.startPos.x, t.y = 0, t.z = this.targetEnemy.position.z - this.startPos.z, this.targetEnemy.beHit({
                        atk: this.atkValue,
                        atkType: null,
                        bulletPosition: this.cachePos,
                        atkDir: t
                    }), this.playAtkEffect(), this.emit(h.LevelEvent.removePlayerBullet, this)
                }, o.customUpdate = function(t) {
                    this.updatePosition(t)
                }, a
            }(l)) || c);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelCamera.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var e, i, a, o, s, n, r, h, c, l, u, d, m, g, v, p, f, S, P, C;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, a = t.initializerDefineProperty, o = t.assertThisInitialized, s = t.defineProperty, n = t.createClass
        }, function(t) {
            r = t.cclegacy, h = t.Camera, c = t.Node, l = t._decorator, u = t.v3, d = t.v2, m = t.CameraComponent
        }, function(t) {
            g = t.GlobalEnum
        }, function(t) {
            v = t.default
        }, function(t) {
            p = t.EventType
        }, function(t) {
            f = t.default, S = t.ActionMngType
        }, function(t) {
            P = t.default
        }, function(t) {
            C = t.default
        }],
        execute: function() {
            var y, D, A, T, x, k, M, N;
            r._RF.push({}, "ade43+9RZtE46LoF1vdxOuA", "LevelCamera", void 0);
            var E = l,
                L = E.ccclass,
                w = E.property;
            t("default", (y = w(h), D = w(c), A = w(c), L((k = e((x = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(n)) || this, a(o(e), "camera", k, o(e)), a(o(e), "cameraNode", M, o(e)), a(o(e), "anchorNode", N, o(e)), s(o(e), "_originalPos", void 0), s(o(e), "__originalPos", void 0), s(o(e), "_originalEulerAngles", void 0), s(o(e), "shakeElapsed", 0), s(o(e), "shakeDuration", .3), s(o(e), "shakeRadius", .1), s(o(e), "shaking", !1), s(o(e), "normalScale", void 0), s(o(e), "maxScale", void 0), s(o(e), "scaleElapsed", void 0), s(o(e), "scaleDuration", void 0), s(o(e), "scaleCenter", void 0), s(o(e), "scaleStay", void 0), s(o(e), "scaleBackDuration", void 0), s(o(e), "followTarget", void 0), s(o(e), "cachePos", void 0), s(o(e), "centerPos", void 0), s(o(e), "convertData", void 0), s(o(e), "rotateStartAngle", void 0), s(o(e), "rotateStartPos", void 0), s(o(e), "rotateCacheAngle", void 0), s(o(e), "minZoomDis", void 0), s(o(e), "maxZoomDis", void 0), s(o(e), "curZoomDis", void 0), e
                }
                i(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    console.error("添加了一个关卡相机")
                }, r.init = function() {
                    this.anchorNode = this.node, this.camera = this.node.getComponentInChildren(h), this.cameraNode = this.camera.node, this.initConvertData(), this.initFollowState(), this.initScaleData(), this.initOriginalTransform(), this.initRotateState(), this.initZoom(), this.initCustomUpdateState(), this.registAllCustomUpdate(), this.onEvents()
                }, r.registAllCustomUpdate = function() {
                    this.registCustomUpdate(g.LevelCameraState.follow, this.stepSlowFollow), this.registCustomUpdate(g.LevelCameraState.enterNewScene, this.stepEnterNewScene)
                }, r.onEvents = function() {
                    this.on(p.LevelEvent.shakeScreen, this.shake, this), this.on(p.LevelEvent.shockScreen, this.shock, this), this.on(p.LevelEvent.rotateCameraStart, this.onRotateStart, this), this.on(p.LevelEvent.rotateCameraMove, this.onRotateMove, this), this.on(p.LevelEvent.rotateCameraEnd, this.onRotateEnd, this), this.on(p.LevelEvent.zoomCamera, this.updateZoom, this)
                }, r.reset = function() {
                    this.followTarget = null, this.node.eulerAngles = u(0, 0, 0), this.stopScaleScreen(), this.resetScaleData(), this.stopShake(), this.resumeOriginalTransform(), this.resetZoom()
                }, r.enterLevel = function() {
                    var t = f.rotateTo(1, 45, 0, 0);
                    f.getMng(S.Level).runAction(this.node, t), this.enterCustomUpdateState(g.LevelCameraState.follow)
                }, r.setMapSize = function(t) {
                    var e = C.get(g.Common.GlobalDataType.canvasTransform),
                        i = 4.5 * e.height / e.width,
                        a = 17 * Math.sin(.017453 * Math.abs(this.cameraNode.eulerAngles.x));
                    console.log("相机视野：", i, a);
                    var o = i > a ? i : a;
                    o *= 1, this.camera.orthoHeight = o
                }, r.enterNewScene = function(t, e) {
                    var i = this;
                    t.getWorldPosition(this.cachePos), this.node.setPosition(this.cachePos), this.setTarget(t), this.enterCustomUpdateState(g.LevelCameraState.enterNewScene), this.changeCamera({
                        duration: 0,
                        pos: u(0, 30, 0),
                        cb: function() {
                            i.changeCamera({
                                duration: e,
                                pos: u(0, 12, 0)
                            })
                        }
                    }), this.node.eulerAngles = u(0, 0, 0);
                    var a = f.rotateTo(e, 35, 0, 0);
                    f.getMng(S.Level).runAction(this.node, a)
                }, r.stepEnterNewScene = function(t) {
                    this.followTarget.getWorldPosition(this.cachePos), this.node.setPosition(this.cachePos)
                }, r.levelCurScene = function(t, e) {
                    t.getWorldPosition(this.cachePos), this.node.setPosition(this.cachePos), this.setTarget(t), this.enterCustomUpdateState(g.LevelCameraState.enterNewScene), this.changeCamera({
                        duration: e,
                        pos: u(0, 30, 0),
                        angle: u(-90, 0, 0)
                    });
                    var i = f.rotateTo(e, 0, 0, 0);
                    f.getMng(S.Level).runAction(this.node, i)
                }, r.initOriginalTransform = function() {
                    this._originalPos = u(), this.cameraNode.getPosition(this._originalPos), this.__originalPos = u(), this.__originalPos.set(this._originalPos), this._originalEulerAngles = u(), this._originalEulerAngles.set(this.cameraNode.eulerAngles)
                }, r.resumeOriginalTransform = function(t, e) {
                    if (void 0 === t && (t = 0), this._originalPos.set(this.__originalPos), this._originalPos.normalize().multiplyScalar(this.curZoomDis), !t) return this.cameraNode.setPosition(this._originalPos), void(this.cameraNode.eulerAngles = this._originalEulerAngles);
                    this.changeCamera({
                        duration: t,
                        pos: this._originalPos,
                        angle: this._originalEulerAngles,
                        cb: e
                    })
                }, r.changeCamera = function(t) {
                    if (!t.duration) return t.pos && this.cameraNode.setPosition(t.pos), t.angle && (this.cameraNode.eulerAngles = t.angle), void(t.cb && t.cb());
                    var e = null,
                        i = null;
                    t.pos && (e = f.moveTo(t.duration, t.pos)).easing(f.easeSinInOut()), t.angle && (i = f.rotateTo(t.duration, t.angle)).easing(f.easeSinInOut());
                    var a = null;
                    e && i ? a = f.spawn(e, i) : e ? a = f.spawn(e) : i && (a = f.spawn(i));
                    var o = f.getMng(S.Level);
                    if (a && t.cb) {
                        var s = f.callFun(t.cb),
                            n = f.sequence(a, s);
                        o.runAction(this.cameraNode, n)
                    } else a ? o.runAction(this.cameraNode, a) : t.cb && t.cb()
                }, r.moveTo = function(t, e, i) {
                    if (0 == t) return this.node.setPosition(e), void(i && i());
                    var a = f.getMng(S.Level),
                        o = f.moveTo(t, e);
                    if (o.easing(f.easeSinInOut()), i) {
                        var s = f.callFun(i);
                        a.runAction(this.node, f.sequence(o, s))
                    } else a.runAction(this.node, o)
                }, r.shake = function(t) {
                    if (void 0 === t && (t = {}), v.driveConfig.cameraShake && !f.getMng(S.Level).haveAction(this.cameraNode)) {
                        this.stopShock(), this.shakeElapsed = 0;
                        var e = t.duration || .3;
                        if (this.shakeDuration < e && (this.shakeDuration = e), e = t.radius || .1, this.shakeRadius < e && (this.shakeRadius = e), this.cameraNode.getPosition(this._originalPos), !this.shaking) {
                            this.stopScaleScreen();
                            var i = f.thread(this.randomCameraPos, this);
                            f.getMng(S.Level).runAction(this, i), this.shaking = !0
                        }
                    }
                }, r.randomCameraPos = function(t) {
                    if (this.shakeElapsed += t, this.shakeElapsed >= this.shakeDuration) this.stopShake();
                    else {
                        var e = this.shakeRadius * (1 - this.shakeElapsed / this.shakeDuration),
                            i = 6.28 * Math.random();
                        this.shakeElapsed == t && (i = 0);
                        var a = Math.sin(i) * e,
                            o = Math.cos(i) * e;
                        this.cameraNode.setPosition(this._originalPos.x + a, this._originalPos.y + o, this._originalPos.z)
                    }
                }, r.stopShake = function() {
                    this.shakeElapsed = 0, this.shaking = !1, this.cameraNode.setPosition(this._originalPos), f.getMng(S.Level).stopAllActions(this)
                }, r.shock = function(t) {
                    if (v.driveConfig.cameraShake && !f.getMng(S.Level).haveAction(this.cameraNode)) {
                        this.stopShake();
                        var e = this._originalPos;
                        this.cameraNode.setPosition(e.x + t.offset.x, e.y + t.offset.y, e.z + t.offset.z);
                        var i = f.moveTo(t.duration, e);
                        f.getMng(S.Level).runAction(this.cameraNode, i)
                    }
                }, r.stopShock = function() {
                    f.getMng(S.Level).stopAllActions(this.cameraNode), this.cameraNode.setPosition(this._originalPos)
                }, r.initScaleData = function() {
                    this.normalScale = 1, this.maxScale = 1.5, this.scaleElapsed = 0, this.scaleDuration = .1, this.scaleStay = .1, this.scaleCenter = d(), this.scaleBackDuration = 0
                }, r.resetScaleData = function() {
                    this.scaleElapsed = 0
                }, r.scaleScreen = function(t) {
                    this.stopShake(), this.maxScale = t.maxScale || 1.5, t.center ? (this.scaleCenter.x = t.center.x - this.node.position.x, this.scaleCenter.y = t.center.y - this.node.position.y) : (this.scaleCenter.x = 0, this.scaleCenter.y = 0), this.scaleDuration = t.duration || .1, this.scaleStay = t.stay || .1, this.scaleElapsed = 0, this.scaleBackDuration = t.scaleBackDuration || 0;
                    var e = f.thread(this.threadScaleScreen, this);
                    f.getMng(S.Level).runAction(this, e)
                }, r.threadScaleScreen = function(t) {
                    if (this.scaleElapsed += t, this.scaleElapsed > this.scaleDuration + this.scaleStay + this.scaleBackDuration) this.stopScaleScreen();
                    else if (this.scaleElapsed <= this.scaleDuration) {
                        var e = this.scaleElapsed / this.scaleDuration,
                            i = this.normalScale + (this.maxScale - this.normalScale) * e,
                            a = this.scaleCenter.x - this.scaleCenter.x / i,
                            o = this.scaleCenter.y - this.scaleCenter.y / i;
                        this.cameraNode.setPosition(a, o)
                    } else if (this.scaleElapsed > this.scaleDuration + this.scaleStay) {
                        var s = (this.scaleElapsed - this.scaleDuration - this.scaleStay) / this.scaleBackDuration,
                            n = this.maxScale - (this.maxScale - this.normalScale) * s,
                            r = this.scaleCenter.x - this.scaleCenter.x / n,
                            h = this.scaleCenter.y - this.scaleCenter.y / n;
                        this.cameraNode.setPosition(r, h)
                    }
                }, r.stopScaleScreen = function() {
                    this.cameraNode.setPosition(this._originalPos), f.getMng(S.Level).stopAllActions(this)
                }, r.initFollowState = function() {
                    this.followTarget = null, this.cachePos = u(), this.centerPos = u()
                }, r.setTarget = function(t) {
                    this.followTarget = t, this.followTarget && (this.followTarget.getWorldPosition(this.cachePos), this.stepSlowFollow(0))
                }, r.stepSlowFollow = function(t) {
                    this.followTarget && (this.centerPos.set(this.followTarget.position), this.cachePos.x += .1 * (this.centerPos.x - this.cachePos.x), this.cachePos.y += .5 * (this.centerPos.y - this.cachePos.y), this.cachePos.z += .1 * (this.centerPos.z - this.cachePos.z), this.node.setPosition(this.cachePos))
                }, r.initConvertData = function() {
                    this.convertData = {
                        a: 0,
                        b: 0,
                        c: 0,
                        d: 0
                    };
                    var t = .017453 * this.camera.fov,
                        e = C.get(g.Common.GlobalDataType.canvasTransform),
                        i = e.width / Math.tan(.5 * t),
                        a = Math.atan(e.height / i);
                    this.convertData.d = .5 * e.height / Math.tan(a)
                }, r.convertToLevelMap = function(t, e) {
                    this.camera.projection == m.ProjectionType.ORTHO ? this.convertToLevelMapOrtho(t, e) : this.convertToLevelMapPerspective(t, e)
                }, r.convertToLevelMapPerspective = function(t, e) {
                    this.initConvertData();
                    var i = this.camera.node.getWorldPosition(),
                        a = .017453 * (90 + this.camera.node.eulerAngles.x),
                        o = i.y - e.y,
                        s = i.z,
                        n = C.get(g.Common.GlobalDataType.canvasTransform),
                        r = t.y - .5 * n.height,
                        h = Math.tan(r / this.convertData.d);
                    h += a;
                    var c = o * Math.tan(h);
                    e.z = s - c;
                    var l = r * r + this.convertData.d * this.convertData.d,
                        u = c * c + o * o;
                    e.x = i.x + Math.sqrt(u / l) * (t.x - .5 * n.width)
                }, r.convertToLevelMapOrtho = function(t, e) {
                    var i = C.get(g.Common.GlobalDataType.canvasTransform),
                        a = 2 * this.camera.orthoHeight,
                        o = Math.abs(.017453 * this.cameraNode.eulerAngles.x),
                        s = Math.sin(o),
                        n = a * (t.y - .5 * i.height) / i.height / s;
                    n = this.node.position.z + this.cameraNode.position.z - this.cameraNode.position.y / Math.tan(o) - n;
                    var r = a * (t.x - .5 * i.width) / i.height + this.node.position.x + this.cameraNode.position.x;
                    e.x = r, e.y = 0, e.z = n
                }, r.convertToUI = function(t, e) {
                    this.camera.projection == m.ProjectionType.ORTHO ? this.convertToUIOrtho(t, e) : this.convertToUIPerspective(t, e)
                }, r.convertToUIPerspective = function(t, e) {
                    var i = C.get(g.Common.GlobalDataType.canvas);
                    this.camera.convertToUINode(t, i, e)
                }, r.convertToUIOrtho = function(t, e) {
                    var i = C.get(g.Common.GlobalDataType.canvasTransform),
                        a = 2 * this.camera.orthoHeight,
                        o = i.height / a,
                        s = Math.abs(.017453 * this.cameraNode.eulerAngles.x);
                    e.y = (this.node.position.z - t.z) * Math.sin(s) * o + t.y * Math.cos(s) * o, e.x = (t.x - this.cameraNode.worldPosition.x) * o
                }, r.initRotateState = function() {
                    this.rotateStartAngle = u(), this.rotateStartPos = d(), this.rotateCacheAngle = u()
                }, r.onRotateStart = function(t) {
                    this.rotateStartAngle.set(this.node.eulerAngles), this.rotateStartPos.set(t)
                }, r.onRotateMove = function(t) {
                    var e = t.x - this.rotateStartPos.x;
                    this.rotateCacheAngle.y = this.rotateStartAngle.y - .5 * e;
                    var i = t.y - this.rotateStartPos.y;
                    this.rotateCacheAngle.x = this.rotateStartAngle.x + .5 * i, this.rotateCacheAngle.x < 3 ? this.rotateCacheAngle.x = 3 : this.rotateCacheAngle.x > 87 && (this.rotateCacheAngle.x = 87), this.node.eulerAngles = this.rotateCacheAngle, this.emit(p.LevelEvent.cameraRotated, this.rotateCacheAngle)
                }, r.onRotateEnd = function() {}, r.initZoom = function() {
                    this.minZoomDis = 0, this.maxZoomDis = 100;
                    var t = this.cameraNode.getPosition();
                    this.curZoomDis = t.length()
                }, r.resetZoom = function() {
                    var t = this.cameraNode.getPosition();
                    this.curZoomDis = t.length()
                }, r.updateZoom = function(t) {
                    if (!(t < 0 || t > 1)) {
                        var e = this.minZoomDis + (this.maxZoomDis - this.minZoomDis) * t;
                        this.curZoomDis = e, this._originalPos.normalize().multiplyScalar(this.curZoomDis), C.get(g.Common.GlobalDataType.levelMng).customUpdateState != g.LevelState.teaching && this.changeCamera({
                            duration: 1,
                            pos: this._originalPos
                        })
                    }
                }, n(e, [{
                    key: "curZoomRate",
                    get: function() {
                        return (this.curZoomDis - this.minZoomDis) / (this.maxZoomDis - this.minZoomDis)
                    }
                }]), e
            }(P)).prototype, "camera", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = e(x.prototype, "cameraNode", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = e(x.prototype, "anchorNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = x)) || T));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BulletSword.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], (function(t) {
    "use strict";
    var e, r, o, n;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }, function(t) {
            r = t.cclegacy, o = t._decorator
        }, function(t) {
            n = t.default
        }],
        execute: function() {
            var u;
            r._RF.push({}, "b4ac8x2I/JGAJqVQrRTAwIy", "BulletSword", void 0);
            var c = o.ccclass;
            o.property, t("BulletSword", c("BulletSword")(u = function(t) {
                function r() {
                    return t.apply(this, arguments) || this
                }
                return e(r, t), r
            }(n)) || u);
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Enemy.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./EventManager.ts", "./GameEventType.ts", "./PlayerData.ts", "./GlobalData.ts", "./ObjectPool.ts", "./GameData.ts", "./GlobalPool.ts", "./LevelMap.ts", "./EnemyDeathAnim.ts", "./GeBan.ts", "./LevelColler.ts"], (function(t) {
    "use strict";
    var e, i, s, a, o, h, n, r, p, l, c, d, u, m, f, v, P, y, g, B, M, I, b;
    return {
        setters: [function(t) {
            e = t.createClass, i = t.defineProperty
        }, function(t) {
            s = t.cclegacy, a = t.v2, o = t.v3, h = t.v4, n = t.director
        }, function(t) {
            r = t.GlobalEnum
        }, function(t) {
            p = t.default
        }, function(t) {
            l = t.default
        }, function(t) {
            c = t.EventType
        }, function(t) {
            d = t.default
        }, function(t) {
            u = t.default
        }, function(t) {
            m = t.Pool
        }, function(t) {
            f = t.default
        }, function(t) {
            v = t.default
        }, function(t) {
            P = t.Tile, y = t.TileMap, g = t.Room, B = t.Door
        }, function(t) {
            M = t.EnemyDeathPool
        }, function(t) {
            I = t.GeBanMap
        }, function(t) {
            b = t.AABB
        }],
        execute: function() {
            s._RF.push({}, "b6dd1UwUAtC3oT0BVL8YUpQ", "Enemy", void 0);
            var S = a(),
                x = o(),
                R = t("Enemy", function() {
                    function t() {
                        i(this, "_Id", null), i(this, "_customUpdateState", void 0), i(this, "customUpdateMap", void 0), i(this, "customStep", void 0), i(this, "enemyTypeId", void 0), i(this, "_visible", !1), i(this, "meshType", void 0), i(this, "anim", void 0), i(this, "animSpeed", void 0), i(this, "baseColor", void 0), i(this, "color", void 0), i(this, "color2", void 0), i(this, "colorElapsed", void 0), i(this, "scale", void 0), i(this, "gold", void 0), i(this, "mapIndexPtr", void 0), i(this, "beHitColorElapsed", 0), i(this, "canYinShen", !1), i(this, "isYinShening", !1), i(this, "yinShenElapsed", 0), i(this, "meshMng", void 0), i(this, "meshIndex", void 0), i(this, "roleMeshId", void 0), i(this, "_aabb", null), i(this, "aabbDirty", !0), i(this, "_moveSpeedValue", void 0), i(this, "moveSpeed", void 0), i(this, "tempCachePos", void 0), i(this, "moveDirComputeElapsed", void 0), i(this, "_faceRadian", 0), i(this, "sr", void 0), i(this, "cr", void 0), i(this, "preFaceRadian", 0), i(this, "trunLeft", !1), i(this, "_targetRadian", 0), i(this, "particlePtr", void 0), i(this, "particleOriginalPos", void 0), i(this, "atk", void 0), i(this, "hpMax", void 0), i(this, "hp", void 0), i(this, "preHp", void 0), i(this, "hpBarId", void 0), i(this, "hpBarY", void 0), i(this, "animHp", void 0), i(this, "hpBarSize", void 0), i(this, "geBanId", void 0), i(this, "geBanPosition", void 0), i(this, "geBanNormal", void 0), i(this, "tilePos", void 0), i(this, "roomId", void 0), i(this, "tileCheckElapsed", 0), i(this, "area", r.EnemyAreaType.outRoom), i(this, "path", void 0), i(this, "targetPathPtr", void 0), i(this, "targetPosition", void 0), i(this, "checkArriveElapsed", 0)
                    }
                    t.initItemIndexArr = function() {
                        if (!this.itemIndexArr) {
                            this.itemIndexArr = [];
                            var t = f.getData(r.GameDataType.enemyData),
                                e = [];
                            for (var i in t) {
                                var s = t[i].scale;
                                if (e.indexOf(s) < 0) {
                                    e.push(s);
                                    var a = [],
                                        o = s * p.GameRule.roleRadius;
                                    this.computeIndexes(o, a), this.itemIndexArr.push({
                                        scale: s,
                                        indexes: a
                                    })
                                }
                            }
                        }
                    }, t.computeIndexes = function(t, e) {
                        for (var i = p.GameRule.enemyMapSize, s = Math.ceil(t * p.GameRule.world2Map), a = -s; a <= s; ++a)
                            for (var o = a * i.x - s, h = -s; h <= s; ++h) e.push(o), o++
                    };
                    var s = t.prototype;
                    return s.init = function(e) {
                        t.initItemIndexArr(), this.initAABB(), this.initArea(), this.initBeHitColor(), this.initFace(), this.initHp(), this.initHpBar(), this.initMesh(), this.initModel(), this.initMoveData(), this.initParticlePtr(), this.initPath(), this.initTilePosition(), this.initYinShen(), this.registAllCustomUpdate(), this.onEvents(), e && this.setData(e)
                    }, s.reset = function() {
                        this.resetAABB(), this.resetArea(), this.resetBeHitColor(), this.resetFace(), this.resetHp(), this.resetHpBar(), this.resetMesh(), this.resetModel(), this.resetMoveData(), this.resetParticlePtr(), this.resetPath(), this.resetTilePosition(), this.resetYinShen()
                    }, s.registAllCustomUpdate = function() {
                        this.registCustomUpdate(r.EnemyRunState.moveToGeBan, this.stepMoveToGeBan), this.registCustomUpdate(r.EnemyRunState.atkGeBan, this.stepAtkGeBan), this.registCustomUpdate(r.EnemyRunState.enterRoomByGeBan, this.stepEnterRoomByGeBan), this.registCustomUpdate(r.EnemyRunState.moveToRoom, this.stepMoveToRoom), this.registCustomUpdate(r.EnemyRunState.moveToPlayer, this.stepMoveToPlayer)
                    }, s.onEvents = function() {}, s.setData = function(t) {
                        var e = f.getData(r.GameDataType.enemyData, t.id);
                        this.setModel(e), this.setHpMax(e.hp), this.atk = e.atk
                    }, s.stepEmpty = function(t) {}, s.initCustomUpdateState = function() {
                        this._customUpdateState = null, this.customStep = this.stepEmpty, this.customUpdateMap = {}
                    }, s.resetCustomUpdateState = function() {
                        this._customUpdateState = null, this.customStep = this.stepEmpty
                    }, s.registCustomUpdate = function(t, e) {
                        this.customUpdateMap || (this.customUpdateMap = {}), this.customUpdateMap[t] = e
                    }, s.enterCustomUpdateState = function(t) {
                        this._customUpdateState != t && (this._customUpdateState = t, this.customUpdateMap[t] ? this.customStep = this.customUpdateMap[t] : this.customStep = this.stepEmpty)
                    }, s.customUpdate = function(t) {
                        this.customStep && this.customStep(t)
                    }, s.unuse = function() {
                        this.reset(), this._visible = !1
                    }, s.reuse = function(t) {
                        this.reset(), t && this.setData(t)
                    }, s.enterLevel = function(t) {
                        this.setGeBanId(t.geBanId), this.setPosition(t.p), this.setFace(t.radian), this.meshMng.updateRoleRT(this), this.meshMng.setRoleColor(this), this.createParticle(), this.setParticlePosition(), this.setParticleSpeed(), this.moveToGeBan(), this.enterCustomUpdateState(r.EnemyRunState.moveToGeBan), this._visible = !0
                    }, s.enterLevelRoom = function(t) {
                        this.setGeBanId(t.geBanId), this.setPosition(t.p), this.setFace(t.radian), this.meshMng.updateRoleRT(this), this.meshMng.setRoleColor(this), this.createParticle(), this.setParticlePosition(), this.setParticleSpeed(), this.computeTilePos(), this._computePathToPlayer(), this._visible = !0
                    }, s.setMesh = function(t, e, i) {
                        this.meshMng = t, this.meshIndex = e, this.roleMeshId = i
                    }, s.setPosition = function(t) {
                        this.tempCachePos.set(t), this.computeTilePos()
                    }, s.setFaceTo = function(t) {
                        var e = t.x - this.position.x,
                            i = t.z - this.position.z,
                            s = Math.atan2(-i, e);
                        this.setFace(s)
                    }, s.setFace = function(t) {
                        this.faceRadian = t, this._targetRadian = t
                    }, s.atkClock = function(t) {
                        this.preHp -= t
                    }, s.beHit = function(t) {
                        this.hp <= 0 || !this.visible || (this.hp -= t.atk, this.preHp > this.hp && (this.preHp = this.hp), this.playBeHitEffect(t.atkType), this.hp <= 0 ? (this.hideHpBar(), this.died(t)) : this.showHpBar())
                    }, s.died = function(t) {
                        this.clearItemMapRecord(), x.set(this.position), l.emit(c.LevelEvent.playEnemyDeadBlood, x), this.setFace(Math.atan2(t.atkDir.z, -t.atkDir.x));
                        var e = x;
                        e.set(t.atkDir), e.normalize().multiplyScalar(2 * Math.random() + 3), e.y = Math.random();
                        var i = {
                            p: this.position,
                            radian: this.faceRadian + 1.57,
                            s: this.scale,
                            speed: e
                        };
                        M.get(i), l.emit(c.LevelEvent.addGold, this.position, this.gold), this.processDied(), l.emit(c.LevelEvent.removeEnemy, this), l.emit(c.LevelEvent.hideEnemyDirIcon, {
                            id: this.Id
                        })
                    }, s.playBeHitEffect = function(t) {
                        this.beHitColorElapsed = .1, x.set(this.position), x.y = 1, l.emit(c.LevelEvent.playBeHitParticle, x)
                    }, s.onPlayerChangeRoom = function(t, e) {
                        switch (this._customUpdateState) {
                            case r.EnemyRunState.moveToPlayer:
                            case r.EnemyRunState.moveToRoom:
                        }
                    }, s.initModel = function() {
                        this.baseColor = h(), this.color = h(), this.color.w = 0, this.scale = 0, this.gold = 1
                    }, s.resetModel = function() {
                        this.scale = 0, this.baseColor.w = this.scale, this.color.w = this.scale
                    }, s.setModel = function(e) {
                        this.enemyTypeId = e.id, this.anim = e.anim, this.animSpeed = e.animSpeed, this._moveSpeedValue = p.GameRule.enemyMoveSpeed * e.moveSpeed, this.meshType = e.meshType, this.color.x = e.color.r / 255, this.color.y = e.color.g / 255, this.color.z = e.color.b / 255, this.color.w = e.scale, this.baseColor.set(this.color), this.scale = e.scale, this.canYinShen = !!e.yinShen, this.hpBarY = e.hpBarY, e.hpBarSize ? this.hpBarSize.set(e.hpBarSize) : this.hpBarSize.set(1, 1), this.gold = e.gold, this.mapIndexPtr = 0;
                        for (var i = t.itemIndexArr, s = i.length - 1; s >= 0; --s)
                            if (i[s].scale == this.scale) {
                                this.mapIndexPtr = s;
                                break
                            }
                        e.color2 ? (this.color2 || (this.color2 = h()), this.color2.x = e.color2.r / 255 - this.baseColor.x, this.color2.y = e.color2.g / 255 - this.baseColor.y, this.color2.z = e.color2.b / 255 - this.baseColor.z, this.colorElapsed = 0) : this.color2 = null
                    }, s.updateModelColor = function(t) {
                        if (this.color2) {
                            this.colorElapsed += 5 * t, this.colorElapsed > 2 && (this.colorElapsed -= 2);
                            var e = this.colorElapsed;
                            e > 1 && (e = 2 - e), this.color.x = this.baseColor.x + this.color2.x * e, this.color.y = this.baseColor.y + this.color2.y * e, this.color.z = this.baseColor.z + this.color2.z * e
                        }
                    }, s.initBeHitColor = function() {
                        this.beHitColorElapsed = 0
                    }, s.resetBeHitColor = function() {
                        this.beHitColorElapsed = 0
                    }, s.updateBeHitColor = function(t) {
                        if (this.color.set(this.baseColor), this.color.w = this.scale, this.updateModelColor(t), this.updateYinShen(t), this.beHitColorElapsed <= 0) this.meshMng.setRoleColor(this);
                        else {
                            if (this.beHitColorElapsed -= t, this.beHitColorElapsed < 0) this.color.set(this.baseColor);
                            else {
                                var e = 10 * this.beHitColorElapsed,
                                    i = 1 - e;
                                e *= .8, this.color.x = this.baseColor.x * i + e, this.color.y = this.baseColor.y * i + e, this.color.z = this.baseColor.z * i + e
                            }
                            this.meshMng.setRoleColor(this)
                        }
                    }, s.initYinShen = function() {
                        this.canYinShen = !1, this.isYinShening = !1, this.yinShenElapsed = 0
                    }, s.resetYinShen = function() {
                        this.canYinShen = !1, this.isYinShening = !1, this.yinShenElapsed = 0
                    }, s.updateYinShen = function(t) {
                        this.canYinShen && (this.yinShenElapsed -= t, this.yinShenElapsed < 0 && (this.isYinShening = !this.isYinShening, this.isYinShening ? this.yinShenElapsed = 4 : this.yinShenElapsed = 1), this.isYinShening && this.color.set(0, 0, 0, this.scale))
                    }, s.initMesh = function() {
                        this.meshMng = null, this.meshIndex = null, this.roleMeshId = null
                    }, s.resetMesh = function() {
                        this.meshMng && this.meshMng.putRoleId(this.roleMeshId), this.meshMng = null, this.meshIndex = null, this.roleMeshId = null
                    }, s.updateMesh = function(t) {
                        this.meshMng.updateRoleRT(this)
                    }, s.initAABB = function() {
                        this._aabb = new b, this._aabb.yMin = 0, this._aabb.yCenter = 1, this._aabb.yMax = 2, this.aabbDirty = !0
                    }, s.resetAABB = function() {
                        this.aabbDirty = !0
                    }, s.getAABB = function() {
                        return this.processDirty(), this._aabb
                    }, s.processDirty = function() {
                        if (this.aabbDirty) {
                            this.aabbDirty = !1;
                            var t = this.tempCachePos,
                                e = p.GameRule.roleRadius;
                            this._aabb.xMin = t.x - e, this._aabb.xCenter = t.x, this._aabb.xMax = t.x + e, this._aabb.zMin = t.z - e, this._aabb.zCenter = t.z, this._aabb.zMax = t.z + e
                        }
                    }, s.initMoveData = function() {
                        this._moveSpeedValue = p.GameRule.enemyMoveSpeed, this.moveSpeed = o(), this.tempCachePos = o(), this.moveDirComputeElapsed = 0
                    }, s.resetMoveData = function() {}, s.clearItemMapRecord = function() {
                        var e = u.get(r.myGlobalDataType.enemyMap);
                        e.convertToIndex(S, this.tempCachePos.x, this.tempCachePos.z);
                        for (var i = e.convertToBufferIndex(S.x, S.y), s = e.getData(), a = t.itemIndexArr[this.mapIndexPtr].indexes, o = 0, h = a.length; o < h; ++o) s[i + a[o]] == this.Id && (s[i + a[o]] = 0)
                    }, s.setItemMapRecord = function() {
                        var e = u.get(r.myGlobalDataType.enemyMap);
                        e.convertToIndex(S, this.tempCachePos.x, this.tempCachePos.z);
                        for (var i = e.convertToBufferIndex(S.x, S.y), s = e.getData(), a = t.itemIndexArr[this.mapIndexPtr].indexes, o = this.Id, h = 0, n = a.length; h < n; ++h) 0 == s[i + a[h]] && (s[i + a[h]] = o)
                    }, s.moveToPoint = function(t) {
                        var e = this.position;
                        this.moveSpeed.x = t.x - e.x, this.moveSpeed.z = t.z - e.z, this.moveSpeed.normalize().multiplyScalar(this.moveSpeedValue), this.targetRadian = Math.atan2(-this.moveSpeed.z, this.moveSpeed.x), this.moveDirComputeElapsed = 0
                    }, s.stopMoveSpeed = function() {
                        this.moveSpeed.x = 0, this.moveSpeed.z = 0
                    }, s.updateMoveDir = function(t) {
                        this.moveDirComputeElapsed += t, this.moveDirComputeElapsed > .5 && this.moveToPoint(this.targetPosition)
                    }, s.updatePosition = function(t) {
                        this.clearItemMapRecord(), this.setParticleSpeed(), this.getParticlePosition(), this.updateFace(t), this.updateMesh(t), this.aabbDirty = !0, this.setItemMapRecord(), this.updateHpBar(t)
                    }, s.initFace = function() {
                        this.faceRadian = 0, this.preFaceRadian = 0, this._targetRadian = 0
                    }, s.resetFace = function() {
                        this.faceRadian = 0, this.preFaceRadian = 0, this._targetRadian = 0
                    }, s.updateFace = function(t) {
                        if (this.preFaceRadian = this.faceRadian, this.faceRadian !== this.targetRadian) {
                            var e = Math.PI * t * 2;
                            e > Math.abs(this.targetRadian - this.faceRadian) ? this.faceRadian = this.targetRadian : (this.trunLeft || (e = -e), this.faceRadian += e)
                        }
                    }, s.initParticlePtr = function() {
                        this.particleOriginalPos = a()
                    }, s.resetParticlePtr = function() {
                        if (this.particlePtr) {
                            var t = u.get(r.myGlobalDataType.particlePosBuffer);
                            t[2 * this.particlePtr] = this.particleOriginalPos.x, t[2 * this.particlePtr + 1] = this.particleOriginalPos.y, (t = u.get(r.myGlobalDataType.particleVecBuffer))[2 * this.particlePtr] = 0, t[2 * this.particlePtr + 1] = 0
                        }
                    }, s.createParticle = function() {
                        if (!this.particlePtr) {
                            this.particlePtr = this.Id;
                            var t = u.get(r.myGlobalDataType.particlePosBuffer);
                            this.particleOriginalPos.x = t[2 * this.particlePtr], this.particleOriginalPos.y = t[2 * this.particlePtr + 1]
                        }
                    }, s.setParticlePosition = function() {
                        var t = u.get(r.myGlobalDataType.particlePosBuffer);
                        t[2 * this.particlePtr] = this.position.x, t[2 * this.particlePtr + 1] = this.position.z
                    }, s.setParticleSpeed = function() {
                        var t = u.get(r.myGlobalDataType.particleVecBuffer);
                        t[2 * this.particlePtr] = this.moveSpeed.x, t[2 * this.particlePtr + 1] = this.moveSpeed.z
                    }, s.getParticlePosition = function() {
                        var t = u.get(r.myGlobalDataType.particlePosBuffer);
                        this.tempCachePos.x = t[2 * this.particlePtr], this.tempCachePos.z = t[2 * this.particlePtr + 1]
                    }, s.initHp = function() {
                        this.atk = 1, this.hpMax = 1, this.hp = this.hpMax, this.preHp = this.hpMax
                    }, s.resetHp = function() {}, s.setHpMax = function(t) {
                        switch (u.get(r.myGlobalDataType.fightMode)) {
                            case r.FightMode.wuJin:
                                this.computeHpMaxWuJin(t);
                                break;
                            case r.FightMode.heiYe:
                                this.computeHpMaxHeiYe(t);
                                break;
                            default:
                                this.computeHpMaxNormal(t)
                        }
                    }, s.computeHpMaxNormal = function(t) {
                        var e = d.getPlayerData().curLevel;
                        if (e > 25) {
                            for (var i = e - 25, s = 1; s < i; ++s) e += .2 * s;
                            this.hpMax = t * e * 10
                        } else this.hpMax = e <= 20 ? t * e * 12 : t * e * 10;
                        this.hp = this.hpMax, this.preHp = this.hpMax
                    }, s.computeHpMaxHeiYe = function(t) {
                        var e = d.getPlayerData().curLevel + 5;
                        if (e > 25)
                            for (var i = e - 25, s = 1; s < i; ++s) e += .2 * s;
                        this.hpMax = t * e * 10, this.hp = this.hpMax, this.preHp = this.hpMax
                    }, s.computeHpMaxWuJin = function(t) {
                        var e = u.get(r.myGlobalDataType.wuJinCircleCount);
                        if (e > 25)
                            for (var i = e - 25, s = 1; s < i; ++s) e += .2 * s;
                        this.hpMax = t * e * 10, this.hp = this.hpMax, this.preHp = this.hpMax
                    }, s.initHpBar = function() {
                        this.animHp = 1, this.hpBarSize = a(1, 1)
                    }, s.resetHpBar = function() {
                        this.hideHpBar(), this.animHp = 1, this.hpBarSize.set(1, 1)
                    }, s.showHpBar = function() {
                        if (!this.hpBarId) {
                            var t = u.get(r.myGlobalDataType.hpBarMng);
                            this.hpBarId = t.getId(), this.animHp = 1
                        }
                        this.updateHpBar(0)
                    }, s.hideHpBar = function() {
                        if (this.hpBarId) {
                            var t = u.get(r.myGlobalDataType.hpBarMng);
                            t.hideBar(this.hpBarId), t.putId(this.hpBarId), this.hpBarId = null
                        }
                    }, s.updateHpBar = function(t) {
                        if (this.hpBarId) {
                            x.set(this.cachePos), x.y = this.hpBarY;
                            var e = u.get(r.myGlobalDataType.hpBarMng);
                            this.animHp -= 3 * t;
                            var i = this.hp / this.hpMax;
                            this.animHp < i && (this.animHp = i), e.showBar(this.hpBarId, x, this.animHp, this.hpBarSize.x, this.hpBarSize.y)
                        }
                    }, s.initGeBanId = function() {
                        this.geBanId = null
                    }, s.resetGeBanId = function() {
                        this.geBanId = null
                    }, s.setGeBanId = function(t) {
                        this.geBanId = t;
                        var e = I.getItemById(t);
                        this.geBanPosition = e.position, this.geBanNormal = e.normal
                    }, s.moveToGeBan = function() {
                        this.targetPosition.set(this.geBanPosition), this.moveToPoint(this.targetPosition)
                    }, s.checkEnterGeBan = function() {
                        var t = this.position.x - this.geBanPosition.x,
                            e = this.position.z - this.geBanPosition.z,
                            i = !1;
                        return 0 != this.geBanNormal.x ? Math.abs(t) < .2 && Math.abs(e) < 1 && (i = !0) : Math.abs(t) < 1 && Math.abs(e) < .2 && (i = !0), i
                    }, s.checkArrivedGeBan = function() {
                        var t = this.position.x - this.geBanPosition.x,
                            e = this.position.z - this.geBanPosition.z,
                            i = !1,
                            s = p.GameRule.enemyArrivedCheckDis;
                        return 0 != this.geBanNormal.x ? Math.abs(t) <= s && Math.abs(e) < 1.5 && (i = !0) : Math.abs(t) < 1.5 && Math.abs(e) < s && (i = !0), i
                    }, s.initTilePosition = function() {
                        this.tilePos = a(), this.roomId = 0, this.tileCheckElapsed = 0
                    }, s.resetTilePosition = function() {
                        this.tileCheckElapsed = 0
                    }, s.computeTilePos = function() {
                        P.convertToTile(this.cachePos.x, this.cachePos.z, this.tilePos);
                        var t = y.getTile(this.tilePos.x, this.tilePos.y);
                        if (t) this.roomId = g.getItemById(t.roomId).Id;
                        else {
                            var e = I.getItemById(this.geBanId);
                            this.tilePos.set(e.enemyTilePos), this.roomId = e.enemyRoomId
                        }
                        this.tileCheckElapsed = 0
                    }, s.updateTilePos = function(t) {
                        if (this.tileCheckElapsed += t, !(this.tileCheckElapsed < .5)) {
                            var e = this.roomId;
                            this.computeTilePos(), e !== this.roomId && this.updateArea()
                        }
                    }, s.initArea = function() {
                        this.area = r.EnemyAreaType.outRoom
                    }, s.resetArea = function() {
                        this.area = r.EnemyAreaType.outRoom
                    }, s.setArea = function(t) {
                        this.area = t
                    }, s.updateArea = function() {
                        var t = u.get(r.myGlobalDataType.player);
                        this.roomId, t.roomId
                    }, s.initPath = function() {
                        this.path = [], this.targetPathPtr = 0, this.targetPosition = o(), this.checkArriveElapsed = this.Id % 60 * .008
                    }, s.resetPath = function() {
                        this.path = [], this.targetPathPtr = 0
                    }, s.setPath = function(t) {
                        this.path = t, this.targetPathPtr = 0
                    }, s.moveToPathPoint = function(t) {
                        this.targetPathPtr = t;
                        var e = this.path[t],
                            i = B.getItemById(e);
                        this.targetPosition.set(i.position), this.moveToPoint(this.targetPosition)
                    }, s.updatePathPtr = function(t) {
                        this.checkArriveElapsed += t, this.checkArriveElapsed < .5 || (this.checkArriveElapsed = 0, this.computePathToPlayer())
                    }, s.checkArrivePathPoint = function() {
                        var t = this.path[this.targetPathPtr];
                        if (this.targetPathPtr + 1 < this.path.length) {
                            var e = this.path[this.targetPathPtr + 1];
                            if (B.getItemById(e).rooms[this.roomId]) return !0
                        }
                        var i = B.getItemById(t),
                            s = this.targetPosition,
                            a = this.position,
                            o = a.x - s.x,
                            h = a.z - s.z;
                        return 0 != i.normal.x ? this.moveSpeed.x > 0 ? o > -.2 && Math.abs(h) < 1 : o < .2 && Math.abs(h) < 1 : this.moveSpeed.z > 0 ? Math.abs(o) < 1 && h > -.2 : Math.abs(o) < 1 && h < .2
                    }, s.computePathToPlayer = function() {
                        this.computeTilePos(), this._computePathToPlayer()
                    }, s._computePathToPlayer = function() {
                        var t = u.get(r.myGlobalDataType.player),
                            e = t.roomId;
                        this.roomId == e ? (this.targetPosition.set(t.position), this.moveToPoint(this.targetPosition), this.enterCustomUpdateState(r.EnemyRunState.moveToPlayer)) : (this.computeRoomPath(), this.moveToPathPoint(0), this.enterCustomUpdateState(r.EnemyRunState.moveToRoom))
                    }, s.computeRoomPath = function() {
                        var t = u.get(r.myGlobalDataType.player).roomId,
                            e = y.getTile(this.tilePos.x, this.tilePos.y),
                            i = g.getItemById(e.roomId).getPath(t);
                        this.setPath(i.path)
                    }, s.stepMoveToGeBan = function(t) {
                        this.updateBeHitColor(t), this.checkArrivedGeBan() ? this.onArrivedGeBan() : (this.updateMoveDir(t), this.updatePosition(t))
                    }, s.onArrivedGeBan = function() {
                        I.getItemById(this.geBanId).isAlive ? (this.clearItemMapRecord(), this.aabbDirty = !0, this.setItemMapRecord(), this.stopMoveSpeed(), this.setParticleSpeed(), this.enterCustomUpdateState(r.EnemyRunState.atkGeBan)) : this.enterCustomUpdateState(r.EnemyRunState.enterRoomByGeBan)
                    }, s.stepAtkGeBan = function(t) {
                        this.updateBeHitColor(t), this.clearItemMapRecord(), this.aabbDirty = !0, this.setItemMapRecord(), I.getItemById(this.geBanId).isAlive ? (this.stopMoveSpeed(), this.setParticleSpeed()) : this.enterCustomUpdateState(r.EnemyRunState.enterRoomByGeBan)
                    }, s.stepEnterRoomByGeBan = function(t) {
                        if (this.updateBeHitColor(t), this.checkEnterGeBan()) {
                            var e = I.getItemById(this.geBanId);
                            this.tilePos.set(e.enemyTilePos), this.roomId = e.enemyRoomId, this._computePathToPlayer()
                        } else this.moveToPoint(this.geBanPosition), this.updatePosition(t)
                    }, s.stepMoveToRoom = function(t) {
                        this.updateBeHitColor(t), this.updatePosition(t), this.updatePathPtr(t)
                    }, s.stepMoveToPlayer = function(t) {
                        this.updateBeHitColor(t), this.updatePosition(t), this.updatePathPtr(t)
                    }, s.processDied = function() {
                        switch (this.enemyTypeId) {
                            case 4:
                                this.proDied4();
                                break;
                            case 5:
                                this.proDied5();
                                break;
                            case 7:
                                this.proDied7();
                                break;
                            case 8:
                                this.proDied8();
                                break;
                            case 106:
                                this.proDied106()
                        }
                    }, s.proDied4 = function() {
                        l.emit(c.LevelEvent.changeAudioRecord, r.AudioClip.boom), l.emit(c.LevelEvent.shakeScreen), x.set(this.position), x.y = 1, l.emit(c.LevelEvent.addBaoZhaParticle, x);
                        var t = v.get("BaoZhaAnim", {
                            p: this.cachePos
                        });
                        n.getScene().addChild(t);
                        var e = [];
                        u.get(r.myGlobalDataType.enemyMap).getItemsRect(e, x.x - 2.5, x.z + 2.5, 5, -5, !1);
                        var i = [];
                        x.y = 1;
                        for (var s = e.length - 1; s >= 0; --s)
                            if (e[s] && i.indexOf(e[s]) < 0) {
                                i.push(e[s]);
                                var a = C.getInstanceById(e[s]);
                                if (a.canBeHit) {
                                    var o = a.position,
                                        h = o.x - this.position.x,
                                        p = this.position.z - o.z;
                                    h * h + p * p < 6.25 && (x.x = h, x.z = -p, a.beHit({
                                        atk: .9 * this.hpMax,
                                        atkType: null,
                                        bulletPosition: this.position,
                                        atkDir: x
                                    }))
                                }
                            }
                        var d = u.get(r.myGlobalDataType.player);
                        if (d.isAlive && !d.isWuDi) {
                            var m = d.position.x - this.position.x,
                                f = d.position.z - this.position.z;
                            m * m + f * f < 6.25 && d.beHit(50)
                        }
                    }, s.proDied5 = function() {
                        l.emit(c.LevelEvent.addDuYe, this.position)
                    }, s.proDied7 = function() {
                        l.emit(c.LevelEvent.addDropItem, {
                            n: "DropedHuDun",
                            p: this.position
                        })
                    }, s.proDied8 = function() {
                        l.emit(c.LevelEvent.addDropItem, {
                            n: "DropedXueBao",
                            p: this.position
                        })
                    }, s.proDied106 = function() {
                        l.emit(c.LevelEvent.addEnemyByBoss, {
                            id: 2,
                            geBanId: this.geBanId,
                            p: this.position,
                            radian: this._faceRadian,
                            count: 20
                        })
                    }, e(t, [{
                        key: "Id",
                        get: function() {
                            return this._Id || (this._Id = t._autoId++), this._Id
                        }
                    }, {
                        key: "customUpdateState",
                        get: function() {
                            return this._customUpdateState
                        }
                    }, {
                        key: "visible",
                        get: function() {
                            return this._visible
                        }
                    }, {
                        key: "isAlive",
                        get: function() {
                            return this.preHp > 0
                        }
                    }, {
                        key: "canAtkClock",
                        get: function() {
                            return this.preHp > 0 && !this.isYinShening
                        }
                    }, {
                        key: "canBeHit",
                        get: function() {
                            return this.preHp > 0 && !this.isYinShening
                        }
                    }, {
                        key: "moveSpeedValue",
                        get: function() {
                            return this._moveSpeedValue
                        }
                    }, {
                        key: "cachePos",
                        get: function() {
                            return this.tempCachePos
                        }
                    }, {
                        key: "position",
                        get: function() {
                            return this.tempCachePos
                        }
                    }, {
                        key: "faceRadian",
                        get: function() {
                            return this._faceRadian
                        },
                        set: function(t) {
                            this._faceRadian = t, this.sr = Math.sin(t + 1.57), this.cr = Math.cos(t + 1.57)
                        }
                    }, {
                        key: "targetRadian",
                        get: function() {
                            return this._targetRadian
                        },
                        set: function(t) {
                            this._targetRadian = t;
                            var e = Math.PI;
                            this._targetRadian < 0 && (this._targetRadian += 2 * e), this.faceRadian > 2 * e ? this.faceRadian -= 2 * e : this.faceRadian < 0 && (this.faceRadian += 2 * e);
                            var i = this._targetRadian - this.faceRadian;
                            i > e ? (this.trunLeft = !1, this.faceRadian += 2 * e) : i > 0 ? this.trunLeft = !0 : i < -e ? (this.trunLeft = !0, this._targetRadian += 2 * e) : i < 0 && (this.trunLeft = !1)
                        }
                    }]), t
                }());
            i(R, "_autoId", 1), i(R, "itemIndexArr", void 0);
            var C = t("EnemyPool", function() {
                function t() {}
                return t.get = function(t) {
                    var e = this.pool.get(R, t);
                    return this.itemMap[e.Id] = e, e
                }, t.getInstanceById = function(t) {
                    return this.itemMap[t]
                }, t.put = function(t) {
                    this.pool.put(t)
                }, t.getAllItems = function() {
                    return this.pool.getAllItems()
                }, t.getVisibleStartPtr = function() {
                    return this.pool.count
                }, t.getVisibleCount = function() {
                    return this.pool.usingCount
                }, t.reset = function() {
                    this.pool.reset()
                }, t
            }());
            i(C, "pool", new m), i(C, "itemMap", {}), s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Solider.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelMap.ts", "./LevelColler.ts", "./Enemy.ts", "./GuangQuan.ts"], (function(t) {
    "use strict";
    var e, i, n, o, s, a, r, c, l, h, u, d, v, g, f, p, y, k, m, b, E, A, P;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.defineProperty, o = t.assertThisInitialized, s = t.initializerDefineProperty, a = t.createClass
        }, function(t) {
            r = t.cclegacy, c = t._decorator, l = t.v2, h = t.v3, u = t.Node, d = t.color
        }, function(t) {
            v = t.GlobalEnum
        }, function(t) {
            g = t.default
        }, function(t) {
            f = t.EventType
        }, function(t) {
            p = t.default
        }, function(t) {
            y = t.default
        }, function(t) {
            k = t.default
        }, function(t) {
            m = t.Tile, b = t.TileMap
        }, function(t) {
            E = t.AABB
        }, function(t) {
            A = t.EnemyPool
        }, function(t) {
            P = t.GuangQuan
        }],
        execute: function() {
            var L, S, I, w, T, x, C, D, G, B, M, z, U, _, R;
            r._RF.push({}, "b857a6Al49Ne6GFsNkBlYOT", "Solider", void 0);
            var V, F = c.ccclass,
                Q = c.property,
                q = l(),
                N = (l(), h());
            t("Solider", (L = F("Solider"), S = Q(u), I = Q(u), w = Q([u]), T = Q(u), x = Q(u), C = Q(u), L((B = e((G = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(a)) || this, n(o(e), "curLv", 0), n(o(e), "gold", 0), n(o(e), "tilePos", l()), s(o(e), "unlockIcon", B, o(e)), n(o(e), "_aabb", null), n(o(e), "aabbDirty", !0), s(o(e), "tower", M, o(e)), s(o(e), "towerLvModels", z, o(e)), n(o(e), "cachePos", h()), s(o(e), "roleNode", U, o(e)), n(o(e), "atkScopeRadius", void 0), n(o(e), "atkScopeRadiusSqrt", void 0), n(o(e), "atkScopeIndexes", void 0), n(o(e), "curAtkCirclePtr", void 0), n(o(e), "targetEnemy", void 0), s(o(e), "qiangKou", _, o(e)), n(o(e), "atkValue", void 0), n(o(e), "atkInterval", void 0), n(o(e), "atkElapsed", void 0), s(o(e), "guangQuan", R, o(e)), e
                }
                i(e, t);
                var r = e.prototype;
                return r.initSub = function() {
                    this.initAABB(), this.initAtkData(), this.initAtkScope(), this.initTower(), this.initUnlockIcon()
                }, r.resetSub = function() {
                    this.resetAABB(), this.resetAtkData(), this.resetAtkScope(), this.resetTower(), this.resetUnlockIcon()
                }, r.registAllCustomUpdate = function() {
                    this.registCustomUpdate(V.standAtk, this.stepAtking)
                }, r.onEvents = function() {
                    this.on(f.LevelEvent.startFight, this.onStartFight, this), this.on(f.LevelEvent.enterLobby, this.onEnterLobby, this), this.on(f.LevelEvent.growSoldier, this.onGrowLv, this)
                }, r.setData = function(t) {
                    this.gold = t.soldierMaxGold, this.tilePos.set(t.tilePos), m.convertToWorld(this.tilePos.x, this.tilePos.y, this.cachePos), this.node.setPosition(this.cachePos), this.setLv(t.soldierLv), this.aabbDirty = !0, this.setGuangQuanColor()
                }, r.onEnterColl = function() {
                    k.get(v.myGlobalDataType.isLevelFighting) || this.showUI(v.UI.attributeShop, {
                        type: v.ShopType.soldier,
                        maxLv: 5,
                        curLv: this.curLv,
                        tilePos: this.tilePos,
                        gold: this.gold
                    })
                }, r.onExitColl = function() {
                    k.get(v.myGlobalDataType.isLevelFighting) || this.hideUI(v.UI.attributeShop)
                }, r.setLv = function(t) {
                    var e = this;
                    this.curLv = t, this.showTower(), setTimeout((function() {
                        e.showUnlockIcon()
                    }), 0), this.setAtkScopeRadius(this.curLv + 9), this.setAtkData({
                        atkValue: 5,
                        atkInterval: .3
                    }, this.curLv)
                }, r.initUnlockIcon = function() {}, r.resetUnlockIcon = function() {}, r.showUnlockIcon = function() {
                    if (this.curLv >= 5) this.unlockIcon.active = !1;
                    else {
                        this.unlockIcon.active = !0;
                        for (var t = [0, -1, 1, 0, -1, 0, 0, 1], e = 0, i = b.getTile(this.tilePos.x, this.tilePos.y).roomId; e < 8; e += 2) {
                            var n = b.getTile(this.tilePos.x + 2 * t[e], this.tilePos.y + 2 * t[e + 1]);
                            if (n && n.roomId == i) break
                        }
                        this.unlockIcon.setPosition(1.5 * t[e], .01, 1.5 * -t[e + 1])
                    }
                }, r.initAABB = function() {
                    this._aabb = new E, this.aabbDirty = !0
                }, r.resetAABB = function() {
                    this.aabbDirty = !0
                }, r.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, r.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        var t = 1.2;
                        this._aabb.setMinVert(-t, 0, -t), this._aabb.setMaxVert(t, 1, t);
                        var e = this.unlockIcon.getWorldPosition();
                        this._aabb.addOffset(e), this._aabb.computeCenter()
                    }
                }, r.initTower = function() {}, r.resetTower = function() {}, r.showTower = function() {
                    this.tower.active = !0;
                    for (var t = 0; t < this.curLv - 1; ++t) this.towerLvModels[t].active = !0;
                    for (var e = this.curLv - 1; e < 4; ++e) this.towerLvModels[e].active = !1
                }, r.initAtkScope = function() {
                    this.atkScopeIndexes = [], this.curAtkCirclePtr = 0, this.targetEnemy = null
                }, r.resetAtkScope = function() {
                    this.curAtkCirclePtr = 0, this.targetEnemy = null
                }, r.setAtkScopeRadius = function(t) {
                    this.atkScopeRadius = t, this.atkScopeRadiusSqrt = t * t;
                    var e = [];
                    for (k.get(v.myGlobalDataType.enemyMap).getCircleIndexes(t, e); e.length > 0;) this.atkScopeIndexes.push(e.splice(0, 100));
                    this.curAtkCirclePtr = 0
                }, r.scanEnemy = function() {
                    this.targetEnemy && !this.targetEnemy.canAtkClock && (this.targetEnemy = null);
                    var t = this.curAtkCirclePtr,
                        e = this.atkScopeIndexes[t],
                        i = k.get(v.myGlobalDataType.enemyMap),
                        n = i.getAllData(),
                        o = this.cachePos;
                    i.convertToIndex(q, o.x, o.z);
                    for (var s = i.convertToBufferIndex(q.x, q.y), a = 0, r = e.length; a < r; a += 1) {
                        var c = n[s + e[a]];
                        if (c > 0 && c < 1e4) {
                            var l = A.getInstanceById(c);
                            if (l.canAtkClock) return this.setTargetEnemy(l), void(this.curAtkCirclePtr = 0)
                        }
                    }
                    this.curAtkCirclePtr += 1, this.curAtkCirclePtr >= this.atkScopeIndexes.length && (this.curAtkCirclePtr = 0)
                }, r.setTargetEnemy = function(t) {
                    if (this.targetEnemy) {
                        var e = this.cachePos.x - t.position.x,
                            i = this.cachePos.z - t.position.z;
                        e * e + i * i < (e = this.cachePos.x - this.targetEnemy.position.x) * e + (i = this.cachePos.z - this.targetEnemy.position.z) * i - 3 && (this.targetEnemy = t)
                    } else this.targetEnemy = t;
                    this.startAtkEnemy()
                }, r.startAtkEnemy = function() {
                    this.enterCustomUpdateState(V.standAtk)
                }, r.faceToTargetEnemy = function() {
                    if (this.targetEnemy && this.targetEnemy.isAlive) {
                        var t = this.targetEnemy.position,
                            e = t.x - this.node.position.x,
                            i = t.z - this.node.position.z,
                            n = .5 * Math.atan2(-i, e) + .25 * Math.PI;
                        this.roleNode.setRotation(0, Math.sin(n), 0, Math.cos(n))
                    }
                }, r.checkEnemyAlive = function() {
                    if (this.targetEnemy) {
                        var t = this.targetEnemy.position.x - this.cachePos.x,
                            e = this.targetEnemy.position.z - this.cachePos.z;
                        (!this.targetEnemy.isAlive || t * t + e * e > this.atkScopeRadiusSqrt) && (this.targetEnemy = null)
                    }
                    this.scanEnemy()
                }, r.initAtkData = function() {}, r.resetAtkData = function() {
                    this.atkElapsed = 0
                }, r.setAtkData = function(t, e) {
                    var i = p.getPlayerData().curLevel;
                    0 == p.getPlayerData().curSceneIndex ? this.atkValue = t.atkValue * e + 1 * i : this.atkValue = t.atkValue * e + 3 * i, this.atkInterval = t.atkInterval, this.atkElapsed = 0
                }, r.updateAtkCool = function(t) {
                    this.atkElapsed += t, this.atkElapsed > this.atkInterval && (this.atkElapsed = 0, this.atk())
                }, r.atk = function() {
                    this.targetEnemy && this.targetEnemy.isAlive && (this.qiangKou.getWorldPosition(N), this.emit(f.LevelEvent.addPlayerBullet, {
                        bullet: "Bullet1",
                        startPos: N,
                        targetEnemy: this.targetEnemy,
                        atkValue: this.atkValue,
                        moveSpeed: 30
                    }))
                }, r.setGuangQuanColor = function() {
                    var t = this.guangQuan.getComponent(P),
                        e = d(0, 250, 102, 255);
                    t.init({
                        p: h(0, 0, 0),
                        color: e
                    })
                }, r.updateGuangQuanState = function() {
                    this.guangQuan.active = this.canGrow
                }, r.stepAtking = function(t) {
                    this.checkEnemyAlive(), this.faceToTargetEnemy(), this.updateAtkCool(t)
                }, r.onStartFight = function() {
                    switch (this.unlockIcon.active = !1, this.targetEnemy = null, k.get(v.myGlobalDataType.fightMode)) {
                        case v.FightMode.heiYe:
                            this.node.active = !1;
                            break;
                        default:
                            this.node.active = !0, this.curLv >= 1 && this.enterCustomUpdateState(V.standAtk)
                    }
                }, r.onEnterLobby = function() {
                    this.targetEnemy = null, this.node.active = !0, this.resetCustomUpdateState(), this.showUnlockIcon()
                }, r.onGrowLv = function(t) {
                    this.tilePos.x == t.x && this.tilePos.y == t.y && (this.curLv += 1, this.setLv(this.curLv))
                }, a(e, [{
                    key: "canGrow",
                    get: function() {
                        return !(this.curLv >= 5) && p.getPlayerData().asset.gold >= this.gold + g.getGrowPrice(v.ShopType.soldier, this.curLv)
                    }
                }]), e
            }(y)).prototype, "unlockIcon", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = e(G.prototype, "tower", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = e(G.prototype, "towerLvModels", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), U = e(G.prototype, "roleNode", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = e(G.prototype, "qiangKou", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = e(G.prototype, "guangQuan", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = G)) || D));
            ! function(t) {
                t[t.stand = 0] = "stand", t[t.standAtk = 1] = "standAtk"
            }(V || (V = {})), r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UIEnemy.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./yyComponent.ts", "./GameData.ts"], (function(t) {
    "use strict";
    var o, e, i, r, s, n, l, a, c, h, u, p, d, f;
    return {
        setters: [function(t) {
            o = t.applyDecoratedDescriptor, e = t.inheritsLoose, i = t.initializerDefineProperty, r = t.assertThisInitialized, s = t.defineProperty
        }, function(t) {
            n = t.cclegacy, l = t._decorator, a = t.MeshRenderer, c = t.SkeletalAnimation, h = t.v4, u = t.Material
        }, function(t) {
            p = t.GlobalEnum
        }, function(t) {
            d = t.default
        }, function(t) {
            f = t.default
        }],
        execute: function() {
            var m, y, b, C, v, E, M;
            n._RF.push({}, "c7febK1akFCUIxxMWsEAPWY", "UIEnemy", void 0);
            var z = l.ccclass,
                A = l.property;
            t("UIEnemy", (m = z("UIEnemy"), y = A(a), b = A(c), m((E = o((v = function(t) {
                function o() {
                    for (var o, e = arguments.length, n = new Array(e), l = 0; l < e; l++) n[l] = arguments[l];
                    return o = t.call.apply(t, [this].concat(n)) || this, i(r(o), "meshRender", E, r(o)), s(r(o), "mat", null), s(r(o), "color", null), i(r(o), "anim", M, r(o)), s(r(o), "baseColor", void 0), s(r(o), "color2", void 0), s(r(o), "colorElapsed", void 0), o
                }
                e(o, t);
                var n = o.prototype;
                return n.initSub = function() {
                    this.initAnim(), this.initColor(), this.initMat()
                }, n.resetSub = function() {
                    this.resetAnim(), this.resetColor(), this.resetMat()
                }, n.setData = function(t) {
                    this.setEnemyTypeId(t.id)
                }, n.setEnemyTypeId = function(t) {
                    var o = this,
                        e = f.getData(p.GameDataType.enemyData, t);
                    this.setAnimSpeed(e.animSpeed), this.color.x = e.color.r / 255, this.color.y = e.color.g / 255, this.color.z = e.color.b / 255, setTimeout((function() {
                        o.applyMat()
                    }), 0), this.baseColor.set(this.color), e.color2 ? (this.color2 || (this.color2 = h()), this.color2.x = e.color2.r / 255 - this.baseColor.x, this.color2.y = e.color2.g / 255 - this.baseColor.y, this.color2.z = e.color2.b / 255 - this.baseColor.z, this.colorElapsed = 0) : this.color2 = null
                }, n.initMat = function() {
                    var t = this.meshRender.getMaterial(0);
                    this.mat = t, this.color = h(0, 0, 0, 1)
                }, n.resetMat = function() {}, n.applyMat = function() {
                    var t = new u;
                    t.initialize(this.mat), t.setProperty("roleColor", this.color), this.meshRender.setMaterial(t, 0)
                }, n.initAnim = function() {}, n.resetAnim = function() {}, n.setAnimSpeed = function(t) {
                    var o = 1;
                    switch (t) {
                        case p.BatchMeshAnimSpeed.spd1:
                            o = 1;
                            break;
                        case p.BatchMeshAnimSpeed.spd2:
                            o = 2;
                            break;
                        case p.BatchMeshAnimSpeed.spdHalf:
                            o = .67;
                            break;
                        default:
                            o = 1
                    }
                    this.anim.getState("z_run").speed = o
                }, n.initColor = function() {
                    this.baseColor = h(), this.colorElapsed = 0
                }, n.resetColor = function() {
                    this.color2 = null
                }, n.updateColor = function(t) {
                    if (this.color2) {
                        this.colorElapsed += 5 * t, this.colorElapsed > 2 && (this.colorElapsed -= 2);
                        var o = this.colorElapsed;
                        o > 1 && (o = 2 - o), this.color.x = this.baseColor.x + this.color2.x * o, this.color.y = this.baseColor.y + this.color2.y * o, this.color.z = this.baseColor.z + this.color2.z * o, this.applyMat()
                    }
                }, n.update = function(t) {
                    this.updateColor(t)
                }, o
            }(d)).prototype, "meshRender", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = o(v.prototype, "anim", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = v)) || C));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Player.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./LiquidManager.ts", "./GameEventType.ts", "./PlayerData.ts", "./yyComponent.ts", "./GlobalData.ts", "./GlobalPool.ts", "./LevelMap.ts", "./GeBan.ts", "./LevelColler.ts", "./Enemy.ts", "./QiangKouAnim.ts"], (function(t) {
    "use strict";
    var e, i, s, a, n, o, h, r, p, l, u, c, d, m, y, f, g, v, A, S, k, w, P, b, D, x, T, E, M, C, R, F, z, B;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, s = t.defineProperty, a = t.assertThisInitialized, n = t.initializerDefineProperty, o = t.createClass
        }, function(t) {
            h = t.cclegacy, r = t._decorator, p = t.v2, l = t.v3, u = t.SkeletalAnimation, c = t.Node, d = t.MeshRenderer, m = t.director, y = t.Vec3, f = t.Animation, g = t.mat4, v = t.v4
        }, function(t) {
            A = t.GlobalEnum
        }, function(t) {
            S = t.default
        }, function(t) {
            k = t.default, w = t.LiquidColliderType, P = t.LiquidBodyType
        }, function(t) {
            b = t.EventType
        }, function(t) {
            D = t.default
        }, function(t) {
            x = t.default
        }, function(t) {
            T = t.default
        }, function(t) {
            E = t.default
        }, function(t) {
            M = t.Tile, C = t.TileMap
        }, function(t) {
            R = t.GeBanMap
        }, function(t) {
            F = t.AABB
        }, function(t) {
            z = t.EnemyPool
        }, function(t) {
            B = t.QiangKouAnim
        }],
        execute: function() {
            var H, I, L, U, G, J, _, W, V, K, q, j, N, O, Q, Z, Y;
            h._RF.push({}, "cf54474XEZAhLJ+1OYZMbvZ", "Player", void 0);
            var X, $ = r.ccclass,
                tt = r.property,
                et = p(),
                it = p(),
                st = l();
            t("Player", (H = $("Player"), I = tt(u), L = tt(c), U = tt([c]), G = tt(c), J = tt(B), _ = tt(d), W = tt(c), H((q = e((K = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), h = 0; h < i; h++) o[h] = arguments[h];
                    return e = t.call.apply(t, [this].concat(o)) || this, s(a(e), "moveSpeedValue", void 0), s(a(e), "speed", void 0), s(a(e), "cachePos", void 0), s(a(e), "faceRadian", 0), s(a(e), "_targetRadian", 0), s(a(e), "trunLeft", !1), n(a(e), "anim", q, a(e)), s(a(e), "curAnim", void 0), s(a(e), "animCb", null), n(a(e), "weaponLayer", j, a(e)), n(a(e), "weapons", N, a(e)), n(a(e), "ziDanKePos", O, a(e)), n(a(e), "qiangKouAnim", Q, a(e)), s(a(e), "qiangKouAnimTransf", void 0), s(a(e), "weaponType", void 0), s(a(e), "qiangKouPositions", void 0), s(a(e), "qiangKouMat", void 0), s(a(e), "bulletName", void 0), s(a(e), "bulletSpeed", void 0), s(a(e), "atkScopeRadius", void 0), s(a(e), "atkScopeRadiusSqrt", void 0), s(a(e), "atkScopeIndexes", void 0), s(a(e), "curAtkCirclePtr", void 0), s(a(e), "targetEnemy", void 0), s(a(e), "atkValue", void 0), s(a(e), "atkInterval", void 0), s(a(e), "atkElapsed", void 0), s(a(e), "curAudioClip", ""), n(a(e), "bodyMesh", Z, a(e)), s(a(e), "bodyPass", void 0), s(a(e), "bodyHandle", void 0), s(a(e), "bodyBeHitData", void 0), s(a(e), "hpMax", void 0), s(a(e), "hp", void 0), s(a(e), "animHp", void 0), s(a(e), "rigid", void 0), s(a(e), "rigidJustPlayer", void 0), s(a(e), "_aabb", null), s(a(e), "aabbDirty", !0), n(a(e), "wuDiEffect", Y, a(e)), s(a(e), "wuDiPass", void 0), s(a(e), "wuDiHandle", void 0), s(a(e), "wuDiColor", void 0), s(a(e), "wuDi", !1), s(a(e), "wuDiRemainTime", 0), s(a(e), "tilePos", void 0), s(a(e), "roomId", void 0), s(a(e), "tileCheckElapsed", 0), s(a(e), "beHitElapsed", 0), s(a(e), "beHitInterval", 1), s(a(e), "beHitIndexes", void 0), s(a(e), "viewScope", void 0), s(a(e), "viewScopeSqr", void 0), s(a(e), "curColler", null), s(a(e), "jumpTargetPos", void 0), e
                }
                i(e, t);
                var h = e.prototype;
                return h.initSub = function() {
                    this.initAABB(), this.initAnim(), this.initAtkData(), this.initAtkScope(), this.initBeHitState(), this.initBodyMat(), this.initCollState(), this.initHp(), this.initMoveSpeed(), this.initRigid(), this.initTilePosition(), this.initViewScope(), this.initWeapon(), this.initWuDi()
                }, h.resetSub = function() {
                    this.resetAABB(), this.resetAnim(), this.resetAtkData(), this.resetAtkScope(), this.resetBeHitState(), this.resetBodyMat(), this.resetCollState(), this.resetHp(), this.resetMoveSpeed(), this.resetRigid(), this.resetTilePosition(), this.resetViewScope(), this.resetWeapon(), this.resetWuDi()
                }, h.registAllCustomUpdate = function() {
                    this.registCustomUpdate(X.stand, this.stepStand), this.registCustomUpdate(X.standAtk, this.stepStandAtk), this.registCustomUpdate(X.move, this.stepMove), this.registCustomUpdate(X.moveAtk, this.stepMoveAtk), this.registCustomUpdate(X.jumpOutFeiJi, this.stepJumpOutFeiJi), this.registCustomUpdate(X.died, this.stepDied), this.registCustomUpdate(X.jumpToFeiJiUp, this.stepJumpToFeiJiUp), this.registCustomUpdate(X.jumpToFeiJiDown, this.stepJumpToFeiJiDown)
                }, h.onEvents = function() {
                    this.on(b.Common.CtrlEvent.touchMove, this.onMoveJoy, this), this.on(b.Common.CtrlEvent.touchEnd, this.onStopJoy, this), this.on(b.LevelEvent.attributeGrowed, this.onAttributeGrowed, this), this.on(b.LevelEvent.changedWeapon, this.onChangeWeapon, this), this.on(b.LevelEvent.enterLobby, this.onEnterLobby, this), this.on(b.LevelEvent.startFight, this.onStartFight, this)
                }, h.setPosition = function(t) {
                    this.node.setPosition(t), this.cachePos.set(t), this.computeTilePos(), this.setRigidPosition(), this.aabbDirty = !0
                }, h.enterLevel = function(t) {
                    if (this.node.setPosition(t.p), this.cachePos.set(t.p), this.computeTilePos(), this.createRigid(), this.setRigidPosition(), void 0 !== t.e) {
                        var e = .017453 * t.e + .5 * Math.PI;
                        this.node.setRotation(0, Math.sin(.5 * e), 0, Math.cos(.5 * e)), this.faceRadian = e, this._targetRadian = e
                    }
                    var i = D.getPlayerData().weapons.curId;
                    this.setWeapon(i), this.setHpData(), this.showHp(), this.setSpeedValue(), t.noAnim || this.playAnim(A.FighterAnim.playerIdle), this.enterCustomUpdateState(X.stand)
                }, h.onKilledAllEnemy = function() {
                    this.speed.x = this.speed.z = 0, this.setRigidSpeed(), this.targetEnemy = null, this.weapons[this.weaponType].active = !1, this.resetCustomUpdateState(), this.playAnim(A.FighterAnim.playerWin), this.node.eulerAngles = l(0, 0, 0)
                }, h.win = function() {
                    this.targetEnemy = null
                }, h.lose = function() {
                    this.targetEnemy = null, this.speed.x = this.speed.z = 0, this.setRigidSpeed(), this.enterCustomUpdateState(X.died), this.playAnim(A.FighterAnim.playerIdle)
                }, h.die = function() {
                    this.targetEnemy = null, this.speed.x = this.speed.z = 0, this.enterCustomUpdateState(X.died), this.playAnim(A.FighterAnim.playerDeath)
                }, h.resurgence = function() {
                    this.setHp(this.hpMax), this.setWuDi(3), this.enterCustomUpdateState(X.stand), this.weaponType == A.WeaponType.weapon6 ? this.onSwordAtkFinish() : this.playAnim(A.FighterAnim.playerIdle)
                }, h.addHuDun = function() {
                    this.isAlive && this.setWuDi(3)
                }, h.addXueBao = function() {
                    var t = this;
                    this.isAlive && function() {
                        t.emit(b.Common.AudioEvent.playEffect, A.AudioClip.recoverHp), t.setHp(t.hpMax);
                        for (var e = {
                                p: t.cachePos
                            }, i = 0; i < 30; ++i) setTimeout((function() {
                            var t = E.get("AddXueBaoEffect", e);
                            m.getScene().addChild(t)
                        }), 50 * i)
                    }()
                }, h.enterFeiJi = function() {
                    this.hideHp();
                    var t = D.getPlayerData().weapons.curId;
                    this.setWeapon(t), this.resetCustomUpdateState(), this.playAnim(A.FighterAnim.playerIdle), this.node.eulerAngles = l(0, 0, 0)
                }, h.jumpOutFeiJi = function(t) {
                    this.node.setPosition(t), this.cachePos.set(t), this.speed.x = -.8, this.speed.z = .8, this.speed.y = 3, this.enterCustomUpdateState(X.jumpOutFeiJi), this.playAnim(A.FighterAnim.playerJump)
                }, h.checkJumpFinish = function() {
                    return this.cachePos.y <= 0
                }, h.jumpToFeiJi = function(t) {
                    var e = t.x - this.node.position.x,
                        i = t.z - this.node.position.z,
                        s = .5 * Math.atan2(-i, e) + .5 * Math.PI;
                    this._targetRadian = 2 * s, this.faceRadian = 2 * s, this.node.setRotation(0, Math.sin(s), 0, Math.cos(s)), this.jumpTargetPos = l(t);
                    var a = t.y - this.position.y + .5,
                        n = Math.sqrt(.2 * a),
                        o = 10 * n;
                    this.speed.y = o, a = t.y - this.position.y, n = (o + Math.sqrt(o * o - 20 * a)) / 10, this.speed.x = (t.x - this.position.x) / n, this.speed.z = (t.z - this.position.z) / n, this.playAnim(A.FighterAnim.playerJump), this.enterCustomUpdateState(X.jumpToFeiJiUp)
                }, h.beHitDuYe = function(t) {
                    this.beHit(25)
                }, h.initMoveSpeed = function() {
                    this.moveSpeedValue = S.GameRule.moveSpeed, this.speed = new y(0, 0, 0), this.cachePos = new y, this.faceRadian = 0, this._targetRadian = 0
                }, h.resetMoveSpeed = function() {
                    this.speed.x = this.speed.y = this.speed.z = 0, this.faceRadian = 0, this._targetRadian = 0
                }, h.setSpeedValue = function() {
                    var t = 1 + .05 * D.getPlayerData().attributeLv.moveSpeed;
                    t > 2 && (t = 2), this.moveSpeedValue = S.GameRule.moveSpeed * t, this.speed.normalize().multiplyScalar(this.moveSpeedValue)
                }, h.setSpeedDir = function(t) {
                    this.speed.x = this.moveSpeedValue * Math.cos(t), this.speed.z = -this.moveSpeedValue * Math.sin(t)
                }, h.canMove = function() {
                    return !0
                }, h.updateFaceRadian = function(t) {
                    if (this.faceRadian != this.targetRadian) {
                        var e = Math.PI * t * 3;
                        e > Math.abs(this.targetRadian - this.faceRadian) ? this.faceRadian = this.targetRadian : (this.trunLeft || (e = -e), this.faceRadian += e);
                        var i = .5 * this.faceRadian;
                        this.node.setRotation(0, Math.sin(i), 0, Math.cos(i))
                    }
                }, h.clampPosMapScope = function() {}, h.updateMovePos = function(t) {
                    this.setRigidSpeed(), this.getRigidPosition(), this.checkCollerGeBan(), this.clampPosMapScope(), this.node.setPosition(this.cachePos), this.updateTilePos(t), this.updateHpBar(t), this.aabbDirty = !0
                }, h.initAnim = function() {
                    this.curAnim = ""
                }, h.resetAnim = function() {}, h.playAnim = function(t, e) {
                    var i = this.getAnimName(t);
                    if (i)
                        if (this.weaponType == A.WeaponType.weapon6 && i.indexOf("attack") >= 0) this.curAnim = i, this.anim.play(i), this.anim.once(f.EventType.FINISHED, this.onSwordAtkFinish.bind(this));
                        else {
                            if (this.curAnim == i) return;
                            this.curAnim = i, this.anim.play(i)
                        }
                }, h.getAnimName = function(t) {
                    if (this.weaponType < A.WeaponType.weapon6) return t == A.FighterAnim.playerStandAtk ? A.FighterAnim.playerIdle : t;
                    if (t == A.FighterAnim.playerWin || t == A.FighterAnim.playerDeath) return t;
                    if (this.weaponType != A.WeaponType.weapon6) return t;
                    if (this.curAnim.indexOf("attack") >= 0) return null;
                    switch (t) {
                        case A.FighterAnim.playerStandAtk:
                            return "sword2_attack2";
                        case A.FighterAnim.playerIdle:
                            if (this._customUpdateState == X.stand || this._customUpdateState == X.move) return "sword2_idle";
                            if (this._customUpdateState == X.standAtk || this._customUpdateState == X.moveAtk) return "sword2_attack2";
                        case A.FighterAnim.playerMoveBack:
                        case A.FighterAnim.playerMoveForward:
                        case A.FighterAnim.playerMoveLeft:
                        case A.FighterAnim.playerMoveRight:
                            if (this._customUpdateState == X.move || this._customUpdateState == X.stand) return "sword2_run";
                            if (this._customUpdateState == X.moveAtk || this._customUpdateState == X.standAtk) return "sword2_run_attack2";
                        default:
                            return t
                    }
                }, h.onAnimFinish = function() {
                    var t = this.animCb;
                    this.animCb = null, t && t()
                }, h.onSwordAtkFinish = function() {
                    if (this.curAnim = "", this.weaponType == A.WeaponType.weapon6) switch (this._customUpdateState) {
                        case X.move:
                            this.curAnim = "sword2_run", this.anim.play(this.curAnim);
                            break;
                        case X.moveAtk:
                            this.curAnim = "sword2_run_attack2", this.anim.play(this.curAnim), this.anim.once(f.EventType.FINISHED, this.onSwordAtkFinish.bind(this));
                            break;
                        case X.stand:
                            this.curAnim = "sword2_idle", this.anim.play(this.curAnim);
                            break;
                        case X.standAtk:
                            this.curAnim = "sword2_attack2", this.anim.play(this.curAnim), this.anim.once(f.EventType.FINISHED, this.onSwordAtkFinish.bind(this))
                    }
                }, h.initWeapon = function() {
                    this.qiangKouPositions = [l(.284, .522, -.285), l(.284, .522, -.285), l(-.017, .217, -.022), l(-.017, .217, -.022), l(.225, .47, -.168)], this.qiangKouMat = g(), this.qiangKouAnimTransf = [l(0, -.857, .077), l(0, -.855, .095), l(-.037, -.345, .044), l(-.03, -.39, .037)];
                    for (var t = 0; t < this.weapons.length; ++t) this.weapons[t].active = !1
                }, h.resetWeapon = function() {
                    for (var t = 0; t < this.weapons.length; ++t) this.weapons[t].active = !1
                }, h.setWeapon = function(t) {
                    this.weaponType = t;
                    for (var e = 0; e < this.weapons.length; ++e) this.weapons[e].active = e == t;
                    var i = S.GameRule.weaponConfig;
                    if (this.bulletName = i[this.weaponType + 1].bulletName, this.bulletSpeed = i[this.weaponType + 1].bulletSpeed, this.setAtkData(), T.get(A.myGlobalDataType.isLevelFighting) && this.setAtkScopeRadius(), t <= A.WeaponType.weapon4) {
                        var s = this.qiangKouAnim.node;
                        s.active = !0, s.removeFromParent(), this.weapons[this.weaponType].addChild(s);
                        var a = this.qiangKouAnimTransf[this.weaponType];
                        s.setPosition(a), s.eulerAngles = l(0, 0, -90)
                    } else this.qiangKouAnim.node.active = !1;
                    this.curAudioClip = "gun" + (this.weaponType + 1)
                }, h.getQiangKouPos = function(t) {
                    this.weaponLayer.getWorldMatrix(this.qiangKouMat), y.transformMat4(t, this.qiangKouPositions[this.weaponType], this.qiangKouMat)
                }, h.getZiDanKePos = function(t) {
                    this.ziDanKePos.getWorldPosition(t)
                }, h.initAtkScope = function() {
                    this.atkScopeIndexes = [], this.curAtkCirclePtr = 0, this.targetEnemy = null
                }, h.resetAtkScope = function() {
                    this.curAtkCirclePtr = 0, this.targetEnemy = null
                }, h.setAtkScopeRadius = function() {
                    var t = S.GameRule.weaponConfig[this.weaponType + 1].atkScope;
                    if (t > this.viewScope && (t = this.viewScope), this.atkScopeRadius !== t) {
                        this.atkScopeRadius = t, this.atkScopeRadiusSqrt = t * t;
                        var e = [];
                        for (T.get(A.myGlobalDataType.enemyMap).getCircleIndexes(t, e), console.log("玩家攻击范围覆盖格子数量：", e.length), this.atkScopeIndexes = []; e.length;) this.atkScopeIndexes.push(e.splice(0, 100));
                        console.log("玩家攻击范围覆盖格子分组数量：", this.atkScopeIndexes.length), this.curAtkCirclePtr = 0
                    }
                }, h.scanEnemy = function() {
                    if (T.get(A.myGlobalDataType.isLevelFighting)) {
                        this.targetEnemy && !this.targetEnemy.canAtkClock && (this.targetEnemy = null);
                        var t = this.curAtkCirclePtr,
                            e = this.atkScopeIndexes[t],
                            i = T.get(A.myGlobalDataType.enemyMap),
                            s = i.getAllData(),
                            a = this.cachePos;
                        i.convertToIndex(et, a.x, a.z);
                        for (var n = i.convertToBufferIndex(et.x, et.y), o = 0, h = e.length; o < h; o += 1) {
                            var r = s[n + e[o]];
                            if (r > 0 && r < 1e4) {
                                var p = z.getInstanceById(r);
                                if (p.canAtkClock) return this.setTargetEnemy(p), void(this.curAtkCirclePtr = 0)
                            }
                        }
                        this.curAtkCirclePtr += 1, this.curAtkCirclePtr >= this.atkScopeIndexes.length && (this.curAtkCirclePtr = 0)
                    }
                }, h.setTargetEnemy = function(t) {
                    if (this.targetEnemy) {
                        var e = this.cachePos.x - t.position.x,
                            i = this.cachePos.z - t.position.z;
                        e * e + i * i < (e = this.cachePos.x - this.targetEnemy.position.x) * e + (i = this.cachePos.z - this.targetEnemy.position.z) * i && (this.targetEnemy = t)
                    } else this.targetEnemy = t;
                    this.startAtkEnemy()
                }, h.startAtkEnemy = function() {
                    switch (this._customUpdateState) {
                        case X.stand:
                            this.playAnim(A.FighterAnim.playerStandAtk), this.enterCustomUpdateState(X.standAtk);
                            break;
                        case X.move:
                            this.playAnim(A.FighterAnim.playerMoveForward), this.enterCustomUpdateState(X.moveAtk)
                    }
                }, h.faceToTargetEnemy = function() {
                    if (this.targetEnemy && this.targetEnemy.isAlive) {
                        var t = this.targetEnemy.position,
                            e = t.x - this.node.position.x,
                            i = t.z - this.node.position.z,
                            s = .5 * Math.atan2(-i, e) + .25 * Math.PI;
                        this._targetRadian = 2 * s, this.faceRadian = 2 * s, this.node.setRotation(0, Math.sin(s), 0, Math.cos(s))
                    }
                }, h.checkEnemyAlive = function() {
                    if (this.targetEnemy) {
                        var t = this.targetEnemy.position.x - this.cachePos.x,
                            e = this.targetEnemy.position.z - this.cachePos.z;
                        (!this.targetEnemy.isAlive || t * t + e * e > this.atkScopeRadiusSqrt) && (this.targetEnemy = null)
                    }
                    this.scanEnemy(), this.targetEnemy || this.exitAtkTargetEnemy()
                }, h.exitAtkTargetEnemy = function() {
                    switch (this._customUpdateState) {
                        case X.moveAtk:
                            this.weaponType != A.WeaponType.weapon6 && this.playAnim(A.FighterAnim.playerMoveForward);
                            var t = Math.atan2(-this.speed.z, this.speed.x);
                            this.targetRadian = t, this.enterCustomUpdateState(X.move);
                            break;
                        case X.standAtk:
                            this.weaponType != A.WeaponType.weapon6 && this.playAnim(A.FighterAnim.playerIdle), this.enterCustomUpdateState(X.stand)
                    }
                }, h.initAtkData = function() {}, h.resetAtkData = function() {
                    this.atkElapsed = 0
                }, h.setAtkData = function() {
                    var t = D.getPlayerData().attributeLv,
                        e = S.GameRule.weaponConfig[this.weaponType + 1];
                    this.atkInterval = 1 / (e.atkSpeed * (1 + .1 * (t.atkSpeed - 1))), e.atk * e.atkSpeed < 100 ? this.atkValue = Math.round(e.atk + 20 * (t.atk - 1) / e.atkSpeed) : this.atkValue = Math.round(e.atk * (1 + .2 * (t.atk - 1))), this.weaponType == A.WeaponType.weapon1 && 1 == t.atk && (this.atkValue += 2), this.atkElapsed = 0
                }, h.updateAtkCool = function(t) {
                    this.atkElapsed += t, this.atkElapsed > this.atkInterval && (this.atkElapsed = 0, this.atk())
                }, h.atk = function() {
                    if (this.targetEnemy && this.targetEnemy.isAlive && this.weaponType != A.WeaponType.weapon6) {
                        switch (this.weaponType) {
                            case A.WeaponType.weapon2:
                                this.shotBullet3(), this.dropZiDanKe(), this.shockScreen(.05), this.playQiangKou();
                                break;
                            case A.WeaponType.weapon5:
                                this.shotBullet(), this.shockScreen(.1), this.playQiangKou();
                                break;
                            default:
                                this.shotBullet(), this.dropZiDanKe(), this.playQiangKou()
                        }
                        this.emit(b.LevelEvent.changeAudioRecord, this.curAudioClip)
                    }
                }, h.shotBullet = function() {
                    this.getQiangKouPos(st);
                    var t = this.targetEnemy.position.x - this.position.x,
                        e = this.targetEnemy.position.z - this.position.z,
                        i = Math.atan2(-e, t);
                    this.emit(b.LevelEvent.addPlayerBullet, {
                        bullet: this.bulletName,
                        startPos: st,
                        targetEnemy: this.targetEnemy,
                        atkValue: this.atkValue,
                        moveSpeed: this.bulletSpeed,
                        radianY: i
                    })
                }, h.shotBullet3 = function() {
                    this.getQiangKouPos(st);
                    var t = this.targetEnemy.position.x - this.position.x,
                        e = this.targetEnemy.position.z - this.position.z,
                        i = Math.atan2(-e, t);
                    this.emit(b.LevelEvent.addPlayerBullet, {
                        bullet: this.bulletName,
                        startPos: st,
                        targetEnemy: this.targetEnemy,
                        atkValue: this.atkValue,
                        moveSpeed: this.bulletSpeed,
                        radianY: i
                    });
                    var s = i + .18,
                        a = i - .18;
                    this.emit(b.LevelEvent.addPlayerBullet, {
                        bullet: this.bulletName,
                        startPos: st,
                        targetEnemy: this.targetEnemy,
                        atkValue: this.atkValue,
                        moveSpeed: this.bulletSpeed,
                        radianY: s
                    }), this.emit(b.LevelEvent.addPlayerBullet, {
                        bullet: this.bulletName,
                        startPos: st,
                        targetEnemy: this.targetEnemy,
                        atkValue: this.atkValue,
                        moveSpeed: this.bulletSpeed,
                        radianY: a
                    })
                }, h.dropZiDanKe = function() {
                    this.getZiDanKePos(st);
                    var t = E.get("ZiDanKe", {
                        p: st,
                        e: 57.3 * this.faceRadian
                    });
                    m.getScene().addChild(t)
                }, h.playQiangKou = function() {
                    this.qiangKouAnim.play()
                }, h.shockScreen = function(t) {
                    var e = this.targetEnemy.position.x - this.position.x,
                        i = this.targetEnemy.position.z - this.position.z;
                    st.set(e, 0, i), st.normalize().multiplyScalar(t), this.emit(b.LevelEvent.shockScreen, {
                        duration: .1,
                        offset: st
                    })
                }, h.atkSword = function() {
                    this.emit(b.Common.AudioEvent.playEffect, this.curAudioClip), et.x = Math.cos(this.faceRadian - .785), et.y = Math.sin(this.faceRadian - .785);
                    var t = [];
                    T.get(A.myGlobalDataType.enemyMap).getItemsRect(t, this.cachePos.x - 3, this.cachePos.z + 3, 6, -6, !1);
                    var e = [];
                    st.y = 0;
                    for (var i = t.length - 1; i >= 0; --i)
                        if (t[i] && e.indexOf(t[i]) < 0) {
                            e.push(t[i]);
                            var s = z.getInstanceById(t[i]);
                            if (!s.canBeHit) continue;
                            var a = s.position;
                            it.x = a.x - this.position.x, it.y = this.position.z - a.z, et.x * it.x + et.y * it.y >= 0 && (st.x = a.x - this.position.x, st.z = a.z - this.position.z, s.beHit({
                                atk: this.atkValue,
                                atkType: null,
                                bulletPosition: this.cachePos,
                                atkDir: st
                            }))
                        }
                }, h.initBodyMat = function() {
                    this.bodyPass = this.bodyMesh.getMaterial(0).passes[1], this.bodyHandle = this.bodyPass.getHandle("beHitColor"), this.bodyBeHitData = v(1, 6 / 255, 6 / 255, 0), this.bodyBeHitData.w = 0
                }, h.resetBodyMat = function() {
                    this.bodyBeHitData.w = 0, this.applyBodyMat()
                }, h.applyBodyMat = function() {
                    this.bodyPass.setUniform(this.bodyHandle, this.bodyBeHitData)
                }, h.setBodyBeHit = function() {
                    var t = m.root.cumulativeTime;
                    this.bodyBeHitData.w = t, this.applyBodyMat()
                }, h.initHp = function() {
                    this.animHp = 1
                }, h.resetHp = function() {
                    this.animHp = 1
                }, h.setHpData = function() {
                    var t = D.getPlayerData().attributeLv.hp,
                        e = S.GameRule.attributeConfig.hp;
                    this.hpMax = Math.round(e.value * (1.5 + .3 * t)), this.hp = this.hpMax
                }, h.setHp = function(t) {
                    this.hp = t
                }, h.applyHpMat = function() {}, h.showHp = function() {
                    st.set(this.cachePos), st.y = 2, T.get(A.myGlobalDataType.hpBarMng).showBar(0, st, this.hp / this.hpMax, 1, 1)
                }, h.hideHp = function() {
                    T.get(A.myGlobalDataType.hpBarMng).hideBar(0)
                }, h.updateHpBar = function(t) {
                    st.set(this.cachePos), st.y = 2;
                    var e = T.get(A.myGlobalDataType.hpBarMng),
                        i = this.hp / this.hpMax;
                    this.animHp -= 2 * t, this.animHp < i && (this.animHp = i), e.showBar(0, st, this.animHp, 1, 1)
                }, h.initRigid = function() {}, h.resetRigid = function() {
                    this.rigid && (et.x = this.cachePos.x, et.y = -this.cachePos.z, this.rigid.SetTransform(et, 0))
                }, h.createRigid = function() {
                    if (!this.rigid) {
                        var t = {
                                radius: S.GameRule.roleRadius
                            },
                            e = k.CreateCollider(t, w.circle),
                            i = {
                                active: !0,
                                allowSleep: !1,
                                angle: 0,
                                angularVelocity: 0,
                                angularDamping: 0,
                                awake: !0,
                                bullet: !1,
                                fixedRotation: !0,
                                gravityScale: 0,
                                linearDamping: 0,
                                linearVelocity: {
                                    x: .1,
                                    y: 0
                                },
                                position: {
                                    x: this.cachePos.x,
                                    y: this.cachePos.z
                                },
                                type: P.b2_dynamicBody,
                                userData: null
                            },
                            s = {
                                density: 1,
                                friction: 0,
                                isSensor: !1,
                                restitution: 0,
                                shape: null,
                                userData: null
                            },
                            a = k.CreateRigid([e], i, s);
                        this.rigid = a.body, i.position.x += S.GameRule.enemyMapOffset.x, i.linearVelocity.x = 0, this.rigidJustPlayer = k.CreateRigid([e], i, s).body
                    }
                }, h.setRigidPosition = function() {
                    et.x = this.position.x, et.y = this.position.z, this.wuDi ? (et.x += S.GameRule.enemyMapOffset.x, this.rigidJustPlayer.SetTransform(et, 0)) : this.rigid.SetTransform(et, 0)
                }, h.setRigidSpeed = function() {
                    et.x = this.speed.x, et.y = this.speed.z, this.wuDi ? this.rigidJustPlayer.SetLinearVelocity(et) : this.rigid.SetLinearVelocity(et)
                }, h.getRigidPosition = function() {
                    this.wuDi ? (this.rigidJustPlayer.GetPosition(et), et.x -= S.GameRule.enemyMapOffset.x) : this.rigid.GetPosition(et), this.cachePos.x = et.x, this.cachePos.z = et.y
                }, h.initAABB = function() {
                    this._aabb = new F, this.aabbDirty = !0
                }, h.resetAABB = function() {
                    this.aabbDirty = !0
                }, h.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, h.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        var t = .5;
                        this._aabb.setMaxVert(t, t, t), t = -.5, this._aabb.setMinVert(t, t, t), this._aabb.addOffset(this.position)
                    }
                }, h.initWuDi = function() {
                    this.wuDi = !1, this.wuDiRemainTime = 0;
                    var t = this.wuDiEffect.getComponent(d).getMaterialInstance(0);
                    this.wuDiPass = t.passes[0], this.wuDiHandle = this.wuDiPass.getHandle("sideColor"), this.wuDiColor = v(), this.wuDiPass.getUniform(this.wuDiHandle, this.wuDiColor), this.wuDiEffect.active = !1
                }, h.resetWuDi = function() {
                    this.wuDiEffect.active = !1, this.wuDi = !1, this.wuDiRemainTime = 0
                }, h.setWuDi = function(t) {
                    this.wuDiRemainTime < t && (this.wuDiRemainTime = t), this.wuDi = !0, et.x = et.y = 0, this.rigid.SetLinearVelocity(et), et.x = this.position.x, et.y = -this.position.z, this.rigid.SetTransform(et, 0), et.x += S.GameRule.enemyMapOffset.x, et.y = this.position.z, this.rigidJustPlayer.SetTransform(et, 0), et.x = this.speed.x, et.y = this.speed.z, this.rigidJustPlayer.SetLinearVelocity(et), this.wuDiEffect.active = !0, this.wuDiColor.w = 1, this.wuDiPass.setUniform(this.wuDiHandle, this.wuDiColor)
                }, h.exitWuDi = function() {
                    this.wuDi = !1, this.wuDiRemainTime = 0, et.x = et.y = 0, this.rigidJustPlayer.SetLinearVelocity(et), et.x = this.position.x, et.y = this.position.z, this.rigid.SetTransform(et, 0), et.x = this.speed.x, et.y = this.speed.z, this.rigid.SetLinearVelocity(et), this.wuDiEffect.active = !1
                }, h.updateWuDi = function(t) {
                    this.wuDi && (this.wuDiRemainTime -= t, this.wuDiRemainTime < 1 && (this.wuDiColor.w = this.wuDiRemainTime, this.wuDiPass.setUniform(this.wuDiHandle, this.wuDiColor)), this.wuDiRemainTime <= 0 && this.exitWuDi())
                }, h.initTilePosition = function() {
                    this.tilePos = p(), this.roomId = 0, this.tileCheckElapsed = 0
                }, h.resetTilePosition = function() {
                    this.tileCheckElapsed = 0
                }, h.computeTilePos = function() {
                    M.convertToTile(this.cachePos.x, this.cachePos.z, this.tilePos);
                    var t = C.getTile(this.tilePos.x, this.tilePos.y);
                    t || (t = this.findNearestTile(), this.tilePos.set(t.tilePos), this.cachePos.set(t.position), this.setRigidPosition(), this.node.setPosition(this.cachePos)), this.roomId = t.roomId
                }, h.findNearestTile = function() {
                    for (var t = this.tilePos, e = this.cachePos, i = null, s = 1 / 0, a = (S.GameRule.tileSize, -5); a <= 5; ++a)
                        for (var n = -5; n <= 5; ++n) {
                            var o = C.getTile(t.x + a, t.y + n);
                            if (o) {
                                var h = o.position;
                                et.x = h.x - e.x, et.y = h.z - e.z;
                                var r = et.lengthSqr();
                                r < s && (s = r, i = o)
                            }
                        }
                    return i || console.error("被挤出室外后，没找到相邻5格内的格子"), i
                }, h.updateTilePos = function(t) {
                    var e = this.roomId;
                    this.computeTilePos(), this.tileCheckElapsed += t, this.tileCheckElapsed < .5 || (this.tileCheckElapsed = 0, e !== this.roomId && this.emit(b.LevelEvent.playerChangeRoom, this.roomId, this.tilePos))
                }, h.initBeHitState = function() {
                    this.computeBeHitIndexes(), this.beHitElapsed = 0, this.beHitInterval = 1
                }, h.resetBeHitState = function() {
                    this.beHitElapsed = 0
                }, h.computeBeHitIndexes = function() {
                    var t = [];
                    T.get(A.myGlobalDataType.enemyMap).getCircleIndexes(1, t), this.beHitIndexes = t
                }, h.checkBeHit = function(t) {
                    if (T.get(A.myGlobalDataType.isLevelFighting) && !(this.wuDi || (this.beHitElapsed += t, this.beHitElapsed < this.beHitInterval))) {
                        this.beHitElapsed = 0;
                        var e = T.get(A.myGlobalDataType.enemyMap),
                            i = e.getAllData(),
                            s = this.cachePos;
                        e.convertToIndex(et, s.x, s.z);
                        for (var a = e.convertToBufferIndex(et.x, et.y), n = this.beHitIndexes, o = 0, h = n.length - 1; h >= 0; --h) {
                            var r = i[a + n[h]];
                            if (r) {
                                var p = z.getInstanceById(r);
                                if (p.customUpdateState == A.EnemyRunState.moveToGeBan || p.customUpdateState == A.EnemyRunState.atkGeBan) continue;
                                var l = p.position,
                                    u = l.x - s.x,
                                    c = l.z - s.z;
                                if (u * u + c * c < 2) {
                                    o += 1;
                                    break
                                }
                            }
                        }
                        if (o) o *= 50 + 2 * D.getPlayerData().curLevel, this.beHit(o)
                    }
                }, h.beHit = function(t) {
                    this.setBodyBeHit();
                    var e = this.hp - t;
                    e < 0 && (e = 0), this.setHp(e), e <= 0 && (this.emit(b.LevelEvent.playerDead), this.die(), this.emit(b.Common.AudioEvent.stopBGM), this.emit(b.Common.AudioEvent.playEffect, A.AudioClip.playerDie))
                }, h.initViewScope = function() {
                    this.viewScope = 1e4, this.viewScopeSqr = this.viewScope * this.viewScope
                }, h.resetViewScope = function() {
                    this.viewScope = 1e4, this.viewScopeSqr = this.viewScope * this.viewScope
                }, h.checkCollerGeBan = function() {
                    var t = C.getTile(this.tilePos.x, this.tilePos.y);
                    if (!t.isGeBan) return !1;
                    var e = R.getItemById(t.geBanId);
                    T.get(A.myGlobalDataType.isLevelFighting) || e.onEnterColl();
                    var i = this.cachePos.x - e.position.x,
                        s = this.cachePos.z - e.position.z,
                        a = S.GameRule.roleRadius + .1,
                        n = !1;
                    return e.normal.x > 0 ? i > -a && (this.cachePos.x = e.position.x - a, n = !0) : e.normal.x < 0 ? i < a && (this.cachePos.x = e.position.x + a, n = !0) : e.normal.z > 0 ? s > -a && (this.cachePos.z = e.position.z - a, n = !0) : s < a && (this.cachePos.z = e.position.z + a, n = !0), n && this.setRigidPosition(), n
                }, h.initCollState = function() {
                    this.curColler = null
                }, h.resetCollState = function() {
                    this.curColler = null
                }, h.checkCollerTileContent = function() {
                    var t = this.position.x,
                        e = this.position.z;
                    if (this.curColler) {
                        var i = .5,
                            s = this.curColler.getAABB();
                        (t < s.xMin - i || t > s.xMax + i || e < s.zMin - i || e > s.zMax + i) && (this.curColler.onExitColl(), this.curColler = null)
                    } else
                        for (var a = T.get(A.myGlobalDataType.tileCollers), n = a.length - 1; n >= 0; --n) {
                            var o = a[n],
                                h = o.getAABB();
                            if (t > h.xMin && t < h.xMax && e > h.zMin && e < h.zMax) {
                                this.curColler = o, o.onEnterColl();
                                break
                            }
                        }
                }, h.stepStand = function(t) {
                    this.updateWuDi(t), this.updateMovePos(t), this.scanEnemy(), this.checkBeHit(t)
                }, h.stepMove = function(t) {
                    this.updateWuDi(t), this.updateFaceRadian(t), this.updateMovePos(t), this.scanEnemy(), this.checkBeHit(t)
                }, h.stepStandAtk = function(t) {
                    this.updateWuDi(t), this.updateMovePos(t), this.checkEnemyAlive(), this.faceToTargetEnemy(), this.updateAtkCool(t), this.checkBeHit(t)
                }, h.stepMoveAtk = function(t) {
                    this.updateWuDi(t), this.updateMovePos(t), this.checkEnemyAlive(), this.faceToTargetEnemy(), this.updateAtkCool(t), this.checkBeHit(t)
                }, h.stepJumpOutFeiJi = function(t) {
                    this.speed.y -= 10 * t, this.cachePos.x += this.speed.x * t, this.cachePos.y += this.speed.y * t, this.cachePos.y < 0 && (this.cachePos.y = 0, this.speed.set(0, 0, 0), this.playAnim(A.FighterAnim.playerJumpFinish), this.anim.once(f.EventType.FINISHED, this.onJumpFinish.bind(this))), this.cachePos.z += this.speed.z * t, this.node.setPosition(this.cachePos)
                }, h.onJumpFinish = function() {
                    this.playAnim(A.FighterAnim.playerIdle)
                }, h.playJumpYanWu = function() {
                    for (var t = T.get(A.myGlobalDataType.yanWuEffect), e = 0; e < 10; ++e) st.set(this.cachePos), st.x += 2 * (Math.random() - .5), st.y += .5 * Math.random(), st.z += 2 * (Math.random() - .5), t.setParticle(st, .5);
                    this.emit(b.Common.AudioEvent.playEffect, A.AudioClip.btnCancel)
                }, h.stepJumpToFeiJiUp = function(t) {
                    this.speed.y -= 10 * t, this.cachePos.x += this.speed.x * t, this.cachePos.y += this.speed.y * t, this.speed.y < 0 && (this.playAnim(A.FighterAnim.playerJumpFinish), this.enterCustomUpdateState(X.jumpToFeiJiDown)), this.cachePos.z += this.speed.z * t, this.node.setPosition(this.cachePos)
                }, h.stepJumpToFeiJiDown = function(t) {
                    this.speed.y -= 10 * t, this.cachePos.x += this.speed.x * t, this.cachePos.y += this.speed.y * t, this.cachePos.z += this.speed.z * t, this.node.setPosition(this.cachePos), this.speed.y < this.jumpTargetPos.y && this.emit(b.LevelEvent.jumpToFeiJiFinish)
                }, h.stepDied = function(t) {
                    this.setRigidSpeed(), this.setRigidPosition(), this.updateHpBar(t)
                }, h.onMoveJoy = function(t, e) {
                    var i = Math.atan2(e.y - t.y, e.x - t.x);
                    switch (this._customUpdateState) {
                        case X.stand:
                            this.setSpeedDir(i), this.targetRadian = i, this.playAnim(A.FighterAnim.playerMoveForward), this.enterCustomUpdateState(X.move);
                            break;
                        case X.move:
                            this.setSpeedDir(i), this.targetRadian = i;
                            break;
                        case X.moveAtk:
                            this.setSpeedDir(i), this.checkAtkAnim();
                            break;
                        case X.standAtk:
                            this.setSpeedDir(i), this.checkAtkAnim(), this.enterCustomUpdateState(X.moveAtk)
                    }
                }, h.onStopJoy = function() {
                    switch (this.speed.x = this.speed.z = 0, this._customUpdateState) {
                        case X.stand:
                        case X.standAtk:
                            break;
                        case X.move:
                            this.playAnim(A.FighterAnim.playerIdle), this.enterCustomUpdateState(X.stand);
                            break;
                        case X.moveAtk:
                            this.playAnim(A.FighterAnim.playerIdle), this.enterCustomUpdateState(X.standAtk)
                    }
                }, h.checkAtkAnim = function() {
                    if (this.targetEnemy && this.targetEnemy.isAlive) {
                        var t = this.targetEnemy.position,
                            e = this.cachePos;
                        et.x = t.x - e.x, et.y = e.z - t.z, it.x = this.speed.x, it.y = -this.speed.z;
                        var i = 57.3 * et.signAngle(it),
                            s = Math.abs(i),
                            a = 45,
                            n = 135;
                        switch (this.curAnim) {
                            case A.FighterAnim.playerMoveBack:
                                n = 120;
                                break;
                            case A.FighterAnim.playerMoveForward:
                                a = 60;
                                break;
                            case A.FighterAnim.playerMoveLeft:
                            case A.FighterAnim.playerMoveRight:
                                a = 60, n = 150
                        }
                        s < a ? this.playAnim(A.FighterAnim.playerMoveForward) : s > n ? this.playAnim(A.FighterAnim.playerMoveBack) : i > 0 ? this.playAnim(A.FighterAnim.playerMoveLeft) : this.playAnim(A.FighterAnim.playerMoveRight)
                    }
                }, h.onChangeWeapon = function(t) {
                    this.setWeapon(t)
                }, h.onAttributeGrowed = function(t) {
                    switch (t.type) {
                        case A.ShopType.atk:
                        case A.ShopType.atkSpeed:
                            this.setAtkData();
                            break;
                        case A.ShopType.hp:
                            this.setHpData();
                            break;
                        case A.ShopType.moveSpeed:
                            this.setSpeedValue()
                    }
                }, h.onEnterLobby = function() {
                    this.targetEnemy = null, this.weapons[this.weaponType].active = !0, this.setHp(this.hpMax), this.playAnim(A.FighterAnim.playerIdle), this.enterCustomUpdateState(X.stand)
                }, h.onStartFight = function() {
                    switch (this.targetEnemy = null, T.get(A.myGlobalDataType.fightMode)) {
                        case A.FightMode.heiYe:
                            var t = T.get(A.Common.GlobalDataType.levelCamera);
                            et.x = 750, et.y = .5 * T.get(A.Common.GlobalDataType.canvasTransform).height, st.set(0, 0, 0), t.convertToLevelMap(et, st), this.viewScope = st.x - this.position.x;
                            break;
                        case A.FightMode.normal:
                            this.viewScope = 1e4
                    }
                    this.viewScopeSqr = this.viewScope * this.viewScope, this.setAtkScopeRadius()
                }, o(e, [{
                    key: "isAlive",
                    get: function() {
                        return this.hp > 0
                    }
                }, {
                    key: "isWuDi",
                    get: function() {
                        return this.wuDi
                    }
                }, {
                    key: "position",
                    get: function() {
                        return this.cachePos
                    }
                }, {
                    key: "targetRadian",
                    get: function() {
                        return this._targetRadian
                    },
                    set: function(t) {
                        this._targetRadian = t + .5 * Math.PI;
                        var e = Math.PI;
                        this._targetRadian < 0 && (this._targetRadian += 2 * e), this.faceRadian > 2 * e ? this.faceRadian -= 2 * e : this.faceRadian < 0 && (this.faceRadian += 2 * e);
                        var i = this._targetRadian - this.faceRadian;
                        i > e ? (this.trunLeft = !1, this.faceRadian += 2 * e) : i > 0 ? this.trunLeft = !0 : i < -e ? (this.trunLeft = !0, this._targetRadian += 2 * e) : i < 0 && (this.trunLeft = !1)
                    }
                }]), e
            }(x)).prototype, "anim", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = e(K.prototype, "weaponLayer", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = e(K.prototype, "weapons", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), O = e(K.prototype, "ziDanKePos", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Q = e(K.prototype, "qiangKouAnim", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = e(K.prototype, "bodyMesh", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = e(K.prototype, "wuDiEffect", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = K)) || V));
            ! function(t) {
                t[t.none = 0] = "none", t[t.stand = 1] = "stand", t[t.move = 2] = "move", t[t.standAtk = 3] = "standAtk", t[t.moveAtk = 4] = "moveAtk", t[t.jumpOutFeiJi = 5] = "jumpOutFeiJi", t[t.died = 6] = "died", t[t.jumpToFeiJiUp = 7] = "jumpToFeiJiUp", t[t.jumpToFeiJiDown = 8] = "jumpToFeiJiDown"
            }(X || (X = {})), h._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GeBan.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./LiquidManager.ts", "./GameEventType.ts", "./PlayerData.ts", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalData.ts", "./GlobalPool.ts", "./LevelMap.ts", "./Enemy.ts"], (function(i) {
    "use strict";
    var t, e, s, n, r, o, a, h, l, u, d, m, p, c, y, f, g, v, x, b, E, P, B, I, D, z, T;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor, e = i.defineProperty, s = i.inheritsLoose, n = i.assertThisInitialized, r = i.initializerDefineProperty, o = i.createClass
        }, function(i) {
            a = i.cclegacy, h = i._decorator, l = i.v2, u = i.v3, d = i.Node, m = i.director
        }, function(i) {
            p = i.GlobalEnum
        }, function(i) {
            c = i.default
        }, function(i) {
            y = i.default, f = i.LiquidColliderType, g = i.LiquidBodyType
        }, function(i) {
            v = i.EventType
        }, function(i) {
            x = i.default
        }, function(i) {
            b = i.default, E = i.ActionMngType
        }, function(i) {
            P = i.default
        }, function(i) {
            B = i.default
        }, function(i) {
            I = i.default
        }, function(i) {
            D = i.Tile, z = i.TileMap
        }, function(i) {
            T = i.EnemyPool
        }],
        execute: function() {
            var G, M, R, L, S, w, C;
            a._RF.push({}, "cf97efpqhNHPJBpqI0eOR8r", "GeBan", void 0);
            var A = h.ccclass,
                X = h.property,
                V = l(),
                F = u(),
                H = 1.5,
                W = (i("GeBan", (G = A("GeBan"), M = X([d]), R = X([d]), G((w = t((S = function(i) {
                    function t() {
                        for (var t, s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                        return t = i.call.apply(i, [this].concat(o)) || this, e(n(t), "isXiuFuing", !1), e(n(t), "beHitElapsed", 0), e(n(t), "showedDirIcon", !1), e(n(t), "showedEnemyEnterDir", !1), e(n(t), "tilePos", void 0), e(n(t), "position", void 0), e(n(t), "rigid", void 0), e(n(t), "rigidJustPlayer", void 0), e(n(t), "rigidVisible", !1), e(n(t), "normal", void 0), e(n(t), "enemStartPos", void 0), e(n(t), "enemyCount", void 0), e(n(t), "enemyAddElapsed", 0), e(n(t), "atkEnemyItemBufferIndexes", void 0), e(n(t), "enemyTilePos", void 0), e(n(t), "enemyRoomId", void 0), e(n(t), "isBarrier", !0), e(n(t), "hp", void 0), e(n(t), "hpMax", void 0), r(n(t), "barriers", w, n(t)), e(n(t), "topVisibleBarrierPtr", void 0), r(n(t), "lvModels", C, n(t)), e(n(t), "iconXiuLi", null), t
                    }
                    s(t, i);
                    var a = t.prototype;
                    return a.initSub = function() {
                        this.initBarriers(), this.initDirIcon(), this.initEnemyData(), this.initEnemyEnterDir(), this.initIconXiuLi(), this.initRigid(), this.initState(), this.initTilePos(), W.recordItem(this)
                    }, a.resetSub = function() {
                        this.resetBarriers(), this.resetDirIcon(), this.resetEnemyData(), this.resetEnemyEnterDir(), this.resetIconXiuLi(), this.resetRigid(), this.resetState(), this.resetTilePos()
                    }, a.setData = function(i) {
                        this.setTilePos(i.p), this.computeEnemyData(), this.node.setPosition(this.position);
                        var t = 0;
                        this.normal.x > 0 ? t = -90 : this.normal.x < 0 ? t = 90 : this.normal.z > 0 && (t = 180), this.node.eulerAngles = u(0, t, 0), this.showLvModels();
                        var e = x.getPlayerData().attributeLv.geBan + 5,
                            s = x.getPlayerData().geBans,
                            n = e;
                        s[i.p.x] && void 0 !== s[i.p.x][i.p.y] && (n = s[i.p.x][i.p.y]), this.setHp(e, n), this.setBarriers(n), this.hp > 0 && this.addBarrierRigid(), this.hp < this.hpMax && this.showIconXiuLi()
                    }, a.beHit = function(i) {
                        (this.topVisibleBarrierPtr >= 0 ? this.barriers[this.topVisibleBarrierPtr] : this.barriers[0]).getWorldPosition(F), 0 != this.normal.x ? (this.addYanWu(F), F.z -= 1, this.addYanWu(F), F.z += 2, this.addYanWu(F)) : (F.z += .2, this.addYanWu(F), F.x -= 1, this.addYanWu(F), F.x += 2, this.addYanWu(F)), this.subHp(i), this.emit(v.LevelEvent.changeAudioRecord, p.AudioClip.breakWood)
                    }, a.addYanWu = function(i) {
                        B.get(p.myGlobalDataType.yanWuEffect).setParticle(i, .5)
                    }, a.onEnterColl = function() {
                        this.isXiuFuing || (this.emit(v.LevelEvent.hideGeBanDirIcon, {
                            id: this.Id
                        }), this.hp < this.hpMax && (this.hideIconXiuLi(), this.isXiuFuing = !0, this._xiuFu(), this.emit(v.LevelEvent.subGeBanNeedXiuFuCount), this.emit(v.LevelEvent.checkRenWu, {
                            type: p.RenWuType.xiuFuGeBan
                        })))
                    }, a.onEnterLobby = function() {
                        this.resetDirIcon(), this.resetEnemyEnterDir()
                    }, a.onStartFight = function() {
                        this.resetDirIcon(), this.resetEnemyEnterDir(), this.showedDirIcon = !0, this.hideIconXiuLi()
                    }, a._xiuFu = function() {
                        var i = this,
                            t = Math.round(.2 * this.hpMax);
                        if (this.addHp(t), this.emit(v.LevelEvent.changeAudioRecord, p.AudioClip.xiuFu), this.hp < this.hpMax) setTimeout((function() {
                            i._xiuFu()
                        }), 100);
                        else {
                            this.isXiuFuing = !1;
                            var e = x.getPlayerData().geBans;
                            e[this.tilePos.x] || (e[this.tilePos.x] = {}), e[this.tilePos.x][this.tilePos.y] = this.hp
                        }
                    }, a.customUpdate = function(i) {
                        B.get(p.myGlobalDataType.isLevelFighting) ? (this.updateCreateEnemy(i), this.updateBeHit(i), this.updateEnemyEnterDir(i)) : this.updateDirIcon(i)
                    }, a.updateBeHit = function(i) {
                        if (!(this.hp <= 0 || (this.beHitElapsed += i, this.beHitElapsed < 1))) {
                            this.beHitElapsed = 0;
                            for (var t = this.atkEnemyItemBufferIndexes, e = B.get(p.myGlobalDataType.enemyMap).getAllData(), s = {}, n = t.length - 1; n >= 0; --n) {
                                var r = e[t[n]];
                                r > 0 && (s[r] = r)
                            }
                            var o = 0;
                            for (var a in s) {
                                var h = s[a];
                                T.getInstanceById(h).isAlive && (o += 1)
                            }(o = o > 1 ? 1 : o) && this.beHit(o)
                        }
                    }, a.initDirIcon = function() {
                        this.showedDirIcon = !1
                    }, a.resetDirIcon = function() {
                        this.showedDirIcon = !1, this.emit(v.LevelEvent.hideGeBanDirIcon, {
                            id: this.Id
                        })
                    }, a.updateDirIcon = function(i) {
                        if (this.hp < this.hpMax && !this.showedDirIcon && !this.isXiuFuing) {
                            B.get(p.Common.GlobalDataType.levelCamera).convertToUI(this.position, F);
                            var t = B.get(p.Common.GlobalDataType.canvasTransform);
                            Math.abs(F.x) < .5 * t.width && Math.abs(F.y) < .5 * t.height ? this.emit(v.LevelEvent.hideGeBanDirIcon, {
                                id: this.Id
                            }) : this.emit(v.LevelEvent.showGeBanDirIcon, {
                                id: this.Id,
                                uiPos: F
                            })
                        }
                    }, a.initEnemyEnterDir = function() {
                        this.showedEnemyEnterDir = !1
                    }, a.resetEnemyEnterDir = function() {
                        this.showedEnemyEnterDir = !1
                    }, a.updateEnemyEnterDir = function(i) {
                        if (this.hp <= 0 && !this.showedEnemyEnterDir) {
                            B.get(p.Common.GlobalDataType.levelCamera).convertToUI(this.position, F);
                            var t = B.get(p.Common.GlobalDataType.canvasTransform);
                            Math.abs(F.x) < .5 * t.width && Math.abs(F.y) < .5 * t.height ? (this.emit(v.LevelEvent.hideEnemyEnterDir, {
                                id: this.Id
                            }), this.showedEnemyEnterDir = !0) : this.emit(v.LevelEvent.showEnemyEnterDir, {
                                id: this.Id,
                                uiPos: F
                            })
                        }
                    }, a.initTilePos = function() {
                        this.tilePos = l(), this.position = u()
                    }, a.resetTilePos = function() {}, a.setTilePos = function(i) {
                        this.tilePos.set(i), D.convertToWorld(i.x, i.y, this.position)
                    }, a.initRigid = function() {
                        this.rigidVisible = !1
                    }, a.resetRigid = function() {
                        this.rigid && (y.RemoveBody(this.rigid), this.rigid = null), this.rigidJustPlayer && (y.RemoveBody(this.rigidJustPlayer), this.rigidJustPlayer = null), this.rigidVisible = !1
                    }, a.addBarrierRigid = function() {
                        if (!this.rigidVisible) {
                            if (this.rigidVisible = !0, this.rigid) return this.rigid.SetTransform({
                                x: this.position.x,
                                y: this.position.z
                            }, 0), void(this.rigidJustPlayer && this.rigidJustPlayer.SetTransform({
                                x: this.position.x + c.GameRule.enemyMapOffset.x,
                                y: this.position.z
                            }, 0));
                            var i = {
                                size: {
                                    width: c.GameRule.wallSize.x,
                                    height: c.GameRule.wallSize.z
                                },
                                offset: {
                                    x: 0,
                                    y: 0
                                }
                            };
                            0 != this.normal.x ? i.size.width = c.GameRule.wallSize.z : i.size.height = c.GameRule.wallSize.z;
                            var t = y.CreateCollider(i, f.box),
                                e = {
                                    active: !0,
                                    allowSleep: !0,
                                    angle: 0,
                                    angularVelocity: 0,
                                    angularDamping: 0,
                                    awake: !0,
                                    bullet: !1,
                                    fixedRotation: !0,
                                    gravityScale: 0,
                                    linearDamping: 0,
                                    position: {
                                        x: this.position.x,
                                        y: this.position.z
                                    },
                                    type: g.b2_staticBody,
                                    userData: null
                                },
                                s = {
                                    density: 0,
                                    friction: 0,
                                    isSensor: !1,
                                    restitution: 0,
                                    shape: null,
                                    userData: null
                                };
                            this.rigid = y.CreateRigid([t], e, s).body, e.position.x += c.GameRule.enemyMapOffset.x, this.rigidJustPlayer = y.CreateRigid([t], e, s).body
                        }
                    }, a.removeBarrierRigid = function() {
                        this.rigidVisible && (this.rigidVisible = !1, this.rigid && this.rigid.SetTransform({
                            x: this.position.x,
                            y: -this.position.z
                        }, 0), this.rigidJustPlayer && this.rigidJustPlayer.SetTransform({
                            x: this.position.x + c.GameRule.enemyMapOffset.x,
                            y: -this.position.z
                        }, 0))
                    }, a.initEnemyData = function() {
                        this.normal = u(0, 0, 1), this.enemStartPos = u(), this.enemyCount = 0, this.enemyAddElapsed = Math.random() * H, this.atkEnemyItemBufferIndexes = [], this.enemyTilePos = l(), this.enemyRoomId = 0
                    }, a.resetEnemyData = function() {
                        this.enemyCount = 0, this.enemyAddElapsed = Math.random() * H, this.atkEnemyItemBufferIndexes = [];
                        var i = z.getTile(this.enemyTilePos.x, this.enemyTilePos.y);
                        i && i.geBanId == this.Id && (i.isGeBan = !1, i.geBanId = null)
                    }, a.computeEnemyData = function() {
                        this.normal.set(0, 0, 0), this.enemyTilePos.set(this.tilePos), this.tilePos.x % 2 == 0 ? z.getTile(this.tilePos.x - 1, this.tilePos.y) ? (this.normal.x = 1, this.enemyTilePos.x -= 1) : (this.normal.x = -1, this.enemyTilePos.x += 1) : z.getTile(this.tilePos.x, this.tilePos.y + 1) ? (this.normal.z = 1, this.enemyTilePos.y += 1) : (this.normal.z = -1, this.enemyTilePos.y -= 1);
                        var i = z.getTile(this.enemyTilePos.x, this.enemyTilePos.y);
                        i.isGeBan = !0, i.geBanId = this.Id, this.enemyRoomId = i.roomId, this.enemStartPos.x = this.position.x + this.normal.x * c.GameRule.tileSize.x * 4.5, this.enemStartPos.z = this.position.z + this.normal.z * c.GameRule.tileSize.z * 4.5;
                        var t = B.get(p.myGlobalDataType.enemyMap),
                            e = 0,
                            s = 0,
                            n = 0,
                            r = 0;
                        1 == this.normal.x ? (e = this.position.x, s = this.position.x + 2 * c.GameRule.roleRadius, n = this.position.z - .5 * c.GameRule.tileSize.z, r = this.position.z + .5 * c.GameRule.tileSize.z) : -1 == this.normal.x ? (e = this.position.x - 2 * c.GameRule.roleRadius, s = this.position.x, n = this.position.z - .5 * c.GameRule.tileSize.z, r = this.position.z + .5 * c.GameRule.tileSize.z) : 1 == this.normal.z ? (e = this.position.x - .5 * c.GameRule.tileSize.x, s = this.position.x + .5 * c.GameRule.tileSize.x, n = this.position.z, r = this.position.z + 2 * c.GameRule.roleRadius) : (e = this.position.x - .5 * c.GameRule.tileSize.x, s = this.position.x + .5 * c.GameRule.tileSize.x, n = this.position.z - 2 * c.GameRule.roleRadius, r = this.position.z);
                        for (var o = e; o <= s; ++o)
                            for (var a = n; a <= r; ++a) {
                                t.convertToIndex(V, o, a);
                                var h = t.convertToBufferIndex(V.x, V.y);
                                this.atkEnemyItemBufferIndexes.indexOf(h) < 0 && this.atkEnemyItemBufferIndexes.push(h)
                            }
                    }, a.updateCreateEnemy = function(i) {
                        if (!(this.enemyCount <= 0)) switch (this.enemyAddElapsed += i, B.get(p.myGlobalDataType.fightMode)) {
                            case p.FightMode.wuJin:
                                this.enemyAddElapsed > 4.5 && this.createEnemyWuJin();
                                break;
                            default:
                                this.enemyAddElapsed > H && this.createEnemyNormal()
                        }
                    }, a.createEnemyNormal = function() {
                        var i = B.get(p.myGlobalDataType.maxEnemyParticle) - T.pool.usingCount;
                        if (!(i <= 0)) {
                            this.enemyAddElapsed = .5 * Math.random();
                            var t = Math.round(2 * Math.random() + 4);
                            t > this.enemyCount && (t = this.enemyCount), t > i && (t = i), this.enemyCount -= t;
                            var e = 0;
                            1 == this.normal.x ? e = 180 : 1 == this.normal.z ? e = 90 : -1 == this.normal.z && (e = -90), this.emit(v.LevelEvent.geBanAddEnemy, {
                                geBanId: this.Id,
                                p: this.enemStartPos,
                                radian: .017453 * e,
                                count: t
                            })
                        }
                    }, a.createEnemyWuJin = function() {
                        this.enemyAddElapsed = .5 * Math.random();
                        var i = 0;
                        1 == this.normal.x ? i = 180 : 1 == this.normal.z ? i = 90 : -1 == this.normal.z && (i = -90), this.emit(v.LevelEvent.geBanAddEnemy, {
                            geBanId: this.Id,
                            p: this.enemStartPos,
                            radian: .017453 * i,
                            count: 3
                        })
                    }, a.initState = function() {
                        this.isBarrier = !0, this.hpMax = 1, this.hp = this.hpMax
                    }, a.resetState = function() {
                        this.isBarrier = !0, this.hp = this.hpMax
                    }, a.setHp = function(i, t) {
                        this.hpMax = i, this.hp = void 0 !== t ? t : this.hpMax
                    }, a.subHp = function(i) {
                        this.hp -= i, this.hp < 0 && (this.hp = 0);
                        for (var t = Math.round((this.barriers.length - 1) * this.hp / this.hpMax); this.topVisibleBarrierPtr >= t;) this.subBarrier();
                        this.hp <= 0 && (this.isBarrier = !1, this.removeBarrierRigid())
                    }, a.addHp = function(i) {
                        this.addBarrierRigid(), this.isBarrier = !0, this.hp < 0 && (this.hp = 0), this.hp += i, this.hp > this.hpMax && (this.hp = this.hpMax);
                        for (var t = Math.round((this.barriers.length - 1) * this.hp / this.hpMax); this.topVisibleBarrierPtr < t;) this.addBarrier()
                    }, a.initBarriers = function() {
                        for (var i = this.barriers.length - 1; i >= 0; --i) this.barriers[i].setScale(1, 1, 1);
                        this.topVisibleBarrierPtr = this.barriers.length - 1
                    }, a.resetBarriers = function() {
                        for (var i = this.barriers.length - 1; i >= 0; --i) this.barriers[i].setScale(1, 1, 1);
                        this.topVisibleBarrierPtr = this.barriers.length - 1
                    }, a.subBarrier = function() {
                        if (!(this.topVisibleBarrierPtr < 0)) {
                            var i = this.barriers[this.topVisibleBarrierPtr];
                            this.topVisibleBarrierPtr -= 1;
                            i.setScale(0, 0, 0), i.getWorldPosition(F);
                            var t = this.node.eulerAngles.y,
                                e = I.get("GeBanAnim", {
                                    p: F,
                                    e: t
                                });
                            m.getScene().addChild(e)
                        }
                    }, a.addBarrier = function() {
                        if (this.topVisibleBarrierPtr += 1, this.topVisibleBarrierPtr >= this.barriers.length) this.topVisibleBarrierPtr = this.barriers.length - 1;
                        else {
                            var i = this.barriers[this.topVisibleBarrierPtr],
                                t = b.scaleTo(.2, 1, 1, 1);
                            b.getMng(E.Level).runAction(i, t)
                        }
                    }, a.setBarriers = function(i) {
                        i > this.barriers.length && (i = this.barriers.length);
                        for (var t = 1, e = 0; e < i; ++e) this.barriers[e].setScale(t, t, t);
                        t = 0;
                        for (var s = i; s < this.barriers.length; ++s) this.barriers[s].setScale(t, t, t);
                        this.topVisibleBarrierPtr = i - 1
                    }, a.showLvModels = function() {
                        var i = x.getPlayerData().attributeLv.geBan;
                        i -= 1;
                        for (var t = 0; t < i; ++t) this.lvModels[t].active = !0;
                        for (var e = i, s = this.lvModels.length; e < s; ++e) this.lvModels[e].active = !1
                    }, a.initIconXiuLi = function() {}, a.resetIconXiuLi = function() {
                        this.hideIconXiuLi()
                    }, a.showIconXiuLi = function() {
                        if (!this.iconXiuLi) {
                            var i = I.get("XiuLiIcon");
                            F.set(this.position), F.y = 4.3, i.setPosition(F), m.getScene().addChild(i), this.iconXiuLi = i
                        }
                    }, a.hideIconXiuLi = function() {
                        this.iconXiuLi && (I.put(this.iconXiuLi), this.iconXiuLi = null)
                    }, a.onAttributeGrowed = function(i) {
                        i.type == p.ShopType.geBan && this.showLvModels()
                    }, o(t, [{
                        key: "isAlive",
                        get: function() {
                            return this.hp > 0
                        }
                    }, {
                        key: "needXiuFu",
                        get: function() {
                            return this.hp < this.hpMax && !this.isXiuFuing
                        }
                    }]), t
                }(P)).prototype, "barriers", [M], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), C = t(S.prototype, "lvModels", [R], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), L = S)) || L)), i("GeBanMap", function() {
                    function i() {}
                    return i.getItemById = function(i) {
                        return this.map[i]
                    }, i.recordItem = function(i) {
                        this.map[i.Id] = i
                    }, i
                }()));
            e(W, "map", {}), a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BaoZhaParticle.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts", "./GlobalPool.ts"], (function(t) {
    "use strict";
    var s, a, e, i, n, o, r, h, c, u, p, l;
    return {
        setters: [function(t) {
            s = t.inheritsLoose, a = t.defineProperty, e = t.assertThisInitialized
        }, function(t) {
            i = t.cclegacy, n = t._decorator, o = t.MeshRenderer, r = t.director, h = t.gfx, c = t.utils, u = t.v4
        }, function(t) {
            p = t.default
        }, function(t) {
            l = t.default
        }],
        execute: function() {
            var d;
            i._RF.push({}, "d7015+enE5OmL/hB7e2qF1T", "BaoZhaParticle", void 0);
            var f = n.ccclass;
            n.property, t("BaoZhaParticle", f("BaoZhaParticle")(d = function(t) {
                function i() {
                    for (var s, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return s = t.call.apply(t, [this].concat(n)) || this, a(e(s), "pass", void 0), a(e(s), "handle", void 0), a(e(s), "pos", void 0), s
                }
                s(i, t);
                var n = i.prototype;
                return n.onLoad = function() {
                    this.node.getComponent(o).mesh = null
                }, n.onEnable = function() {
                    this.createMesh()
                }, n.initSub = function() {
                    this.initMat()
                }, n.resetSub = function() {
                    this.resetMat()
                }, n.setData = function(t) {
                    this.pos.x = t.p.x, this.pos.y = t.p.y, this.pos.z = t.p.z, this.pos.w = r.root.cumulativeTime, this.applyMat(), this.scheduleOnce(this.onPlayFinish, 3)
                }, n.onPlayFinish = function() {
                    l.put(this.node)
                }, n.createMesh = function() {
                    var t = this.node.getComponent(o);
                    if (!t.mesh) {
                        for (var s = {
                                positions: [],
                                uvs: [],
                                indices: [],
                                customAttributes: [{
                                    attr: {
                                        name: "a_animData",
                                        format: h.Format.RGBA32F,
                                        isNormalized: !1,
                                        stream: 0,
                                        isInstanced: !1,
                                        location: 0,
                                        customOffset: 0
                                    },
                                    values: []
                                }]
                            }, a = .2, e = 0; e < 20; ++e) {
                            s.positions.push(-a, a, 0, -a, -a, 0, a, -a, 0, a, a, 0);
                            var i = Math.random() < .5 ? 0 : .5,
                                n = Math.random() < .5 ? 0 : .5;
                            s.uvs.push(i, n, i, n + .5, i + .5, n + .5, i + .5, n);
                            var r = 4 * e;
                            s.indices.push(r, r + 1, r + 2, r, r + 2, r + 3);
                            var u = 6.284 * Math.random(),
                                p = 3.14 * (Math.random() - .5),
                                l = 2 * Math.random() + 3,
                                d = l * Math.sin(p),
                                f = l * Math.cos(p),
                                m = f * Math.cos(u),
                                M = f * Math.sin(u);
                            l = .8 * Math.random() + .6, s.customAttributes[0].values.push(m, d, M, l, m, d, M, l, m, d, M, l, m, d, M, l)
                        }
                        t.mesh = c.createMesh(s)
                    }
                }, n.initMat = function() {
                    var t = this.node.getComponent(o).getMaterialInstance(0);
                    this.pass = t.passes[0], this.handle = this.pass.getHandle("position"), this.pos = u()
                }, n.resetMat = function() {
                    this.pos.set(0, 0, 0, 0), this.applyMat()
                }, n.applyMat = function() {
                    this.pass.setUniform(this.handle, this.pos)
                }, i
            }(p)) || d);
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GoldMng.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./GlobalData.ts"], (function(t) {
    "use strict";
    var e, s, i, r, a, o, n, l, h, u, d, p, c, f, m, y, v;
    return {
        setters: [function(t) {
            e = t.defineProperty, s = t.applyDecoratedDescriptor, i = t.inheritsLoose, r = t.initializerDefineProperty, a = t.assertThisInitialized
        }, function(t) {
            o = t.cclegacy, n = t._decorator, l = t.MeshRenderer, h = t.Mesh, u = t.gfx, d = t.utils, p = t.director, c = t.v4
        }, function(t) {
            f = t.GlobalEnum
        }, function(t) {
            m = t.EventType
        }, function(t) {
            y = t.default
        }, function(t) {
            v = t.default
        }],
        execute: function() {
            var g, P, M, A, b, T, G, R, U;
            o._RF.push({}, "d82f4Pf4QVO/6n0n5A1mrH/", "GoldMng", void 0);
            var D, E = n.ccclass,
                H = n.property;
            t("GoldMng", (g = E("GoldMng"), P = H(l), M = H(h), g((U = R = function(t) {
                function s() {
                    for (var s, i = arguments.length, o = new Array(i), n = 0; n < i; n++) o[n] = arguments[n];
                    return s = t.call.apply(t, [this].concat(o)) || this, r(a(s), "meshRender", T, a(s)), r(a(s), "mesh", G, a(s)), e(a(s), "pass", null), e(a(s), "goldHandle", null), e(a(s), "goldUniform", void 0), e(a(s), "playerHanle", null), e(a(s), "playerPos", void 0), e(a(s), "dirtyMat", !0), e(a(s), "autoPtr", 0), e(a(s), "audioElapsed", -1), s
                }
                i(s, t), s.initMeshData = function(t) {
                    this.inited || (this.inited = !0, this.baseData = this.recordMeshData(t), this.createMesh())
                }, s.recordMeshData = function(t) {
                    var e = {};
                    return e.positions = t.readAttribute(0, u.AttributeName.ATTR_POSITION), e.normals = t.readAttribute(0, u.AttributeName.ATTR_NORMAL), e.tangents = t.readAttribute(0, u.AttributeName.ATTR_TANGENT), e.uvs = t.readAttribute(0, u.AttributeName.ATTR_TEX_COORD), e.colors = t.readAttribute(0, u.AttributeName.ATTR_COLOR), e.indices = t.readIndices(0), e
                }, s.createMesh = function() {
                    for (var t = {
                            positions: [],
                            normals: [],
                            tangents: [],
                            uvs: [],
                            indices: [],
                            customAttributes: [{
                                attr: {
                                    name: "a_animData",
                                    format: u.Format.RGBA32F,
                                    isNormalized: !1,
                                    stream: 0,
                                    isInstanced: !1,
                                    location: 0,
                                    customOffset: 0
                                },
                                values: []
                            }]
                        }, e = 0; e < 100; ++e) this.pushMesh(t, this.baseData, e);
                    this.pathMesh = d.createMesh(t)
                }, s.pushMesh = function(t, e, s) {
                    var i = t.positions.length / 3;
                    this.recordArr(t.positions, e.positions), this.recordArr(t.normals, e.normals), this.recordArr(t.tangents, e.tangents), this.recordArr(t.uvs, e.uvs), this.recordArrOffset(t.indices, e.indices, i);
                    for (var r = t.customAttributes[0].values, a = .5 * Math.random(), o = 0, n = e.positions.length / 3; o < n; ++o) r.push(s, a, 0, 0)
                }, s.recordArrOffset = function(t, e, s) {
                    for (var i = 0, r = e.length; i < r; ++i) t.push(e[i] + s)
                }, s.recordArr = function(t, e) {
                    for (var s = 0, i = e.length; s < i; ++s) t.push(e[s])
                };
                var o = s.prototype;
                return o.onEnable = function() {
                    this.meshRender.mesh || (s.initMeshData(this.mesh), this.meshRender.mesh = s.pathMesh, s.pathMesh = null, s.baseData = null)
                }, o.initSub = function() {
                    this.initGoldPtr(), this.initMat(), this.initMesh()
                }, o.resetSub = function() {
                    this.resetGoldPtr(), this.resetMat(), this.resetMesh()
                }, o.registAllCustomUpdate = function() {
                    this.registCustomUpdate(D.moveToPlayer, this.stepUpdatePlayerPos), this.registCustomUpdate(D.addGold, this.stepAddGold)
                }, o.enterLevel = function() {
                    this.node.active = !0, this.enterCustomUpdateState(D.addGold)
                }, o.addGold = function(t) {
                    this.autoPtr >= 100 && (this.autoPtr = 0);
                    var e = this.goldUniform[this.autoPtr];
                    return e.x = t.x, e.z = t.z, e.w = p.root.cumulativeTime, this.dirtyMat = !0, this.autoPtr++, this.audioElapsed < 0 && (this.audioElapsed = 1), !0
                }, o.getGoldCount = function() {
                    return this.autoPtr
                }, o.moveToPlayer = function() {
                    var t = v.get(f.myGlobalDataType.player).position;
                    this.playerPos.x = t.x, this.playerPos.y = .7, this.playerPos.z = t.z;
                    var e = p.root.cumulativeTime;
                    this.playerPos.w = e, this.pass.setUniform(this.playerHanle, this.playerPos), this.enterCustomUpdateState(D.moveToPlayer)
                }, o.initMesh = function() {
                    s.initMeshData(this.mesh)
                }, o.resetMesh = function() {}, o.initMat = function() {
                    var t = this.meshRender.getMaterialInstance(0);
                    this.pass = t.passes[0], this.goldHandle = this.pass.getHandle("goldPos"), this.goldUniform = [];
                    for (var e = 0; e < 100; ++e) this.goldUniform.push(c());
                    this.playerHanle = this.pass.getHandle("playerPos"), this.playerPos = c(), this.dirtyMat = !0
                }, o.resetMat = function() {
                    for (var t = this.goldUniform.length - 1; t >= 0; --t) this.goldUniform[t].set(0, 0, 0, 0);
                    this.playerPos.set(0, 0, 0, 0), this.pass.setUniform(this.playerHanle, this.playerPos), this.applyMat()
                }, o.applyMat = function() {
                    this.pass.setUniformArray(this.goldHandle, this.goldUniform)
                }, o.initGoldPtr = function() {
                    this.autoPtr = 0
                }, o.resetGoldPtr = function() {
                    this.autoPtr = 0
                }, o.stepAddGold = function(t) {
                    this.audioElapsed > 0 && (this.audioElapsed -= t, this.audioElapsed < 0 && this.emit(m.LevelEvent.changeAudioRecord, f.AudioClip.gold)), this.dirtyMat && (this.dirtyMat = !1, this.applyMat())
                }, o.stepUpdatePlayerPos = function(t) {
                    var e = v.get(f.myGlobalDataType.player).position;
                    this.playerPos.x = e.x, this.playerPos.y = .7, this.playerPos.z = e.z, this.pass.setUniform(this.playerHanle, this.playerPos)
                }, s
            }(y), e(R, "baseData", void 0), e(R, "pathMesh", void 0), e(R, "inited", !1), T = s((b = U).prototype, "meshRender", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = s(b.prototype, "mesh", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = b)) || A));
            ! function(t) {
                t[t.none = 0] = "none", t[t.addGold = 1] = "addGold", t[t.moveToPlayer = 2] = "moveToPlayer"
            }(D || (D = {})), o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Bullet.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelMap.ts", "./Enemy.ts"], (function(t) {
    "use strict";
    var e, i, o, s, a, n, c, h, l, r, u, d, p;
    return {
        setters: [function(t) {
            e = t.inheritsLoose, i = t.defineProperty, o = t.assertThisInitialized
        }, function(t) {
            s = t.cclegacy, a = t._decorator, n = t.v3, c = t.v2
        }, function(t) {
            h = t.GlobalEnum
        }, function(t) {
            l = t.EventType
        }, function(t) {
            r = t.default
        }, function(t) {
            u = t.default
        }, function(t) {
            d = t.Tile
        }, function(t) {
            p = t.EnemyPool
        }],
        execute: function() {
            var v;
            s._RF.push({}, "e887efq2WVCx4+U8tD3cGka", "Bullet", void 0);
            var f = a.ccclass,
                P = (a.property, n());
            t("Bullet", f("Bullet")(v = function(t) {
                function s() {
                    for (var e, s = arguments.length, a = new Array(s), n = 0; n < s; n++) a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this, i(o(e), "atkIndexes", void 0), i(o(e), "atkValue", void 0), i(o(e), "moveSpeed", void 0), i(o(e), "tilePos", void 0), i(o(e), "targetY", 1), i(o(e), "elapsed", void 0), i(o(e), "duration", 1), i(o(e), "invDuration", 1), i(o(e), "cachePos", void 0), e
                }
                e(s, t);
                var a = s.prototype;
                return a.initSub = function() {
                    this.initAtkScope(), this.initMoveData()
                }, a.resetSub = function() {
                    this.resetMoveData()
                }, a.setData = function(t) {
                    this.cachePos.set(t.startPos), this.node.setPosition(this.cachePos), this.node.setRotation(0, Math.sin(.5 * t.radianY), 0, Math.cos(.5 * t.radianY)), this.atkValue = t.atkValue, this.moveSpeed.x = Math.cos(t.radianY) * t.moveSpeed, this.moveSpeed.z = -Math.sin(t.radianY) * t.moveSpeed, this.elapsed = 0
                }, a.initAtkScope = function() {
                    this.computeAtkScope(1)
                }, a.computeAtkScope = function(t) {
                    var e = [];
                    u.get(h.myGlobalDataType.enemyMap).getCircleIndexes(t, e), this.atkIndexes = e
                }, a.initMoveData = function() {
                    this.tilePos = c(), this.moveSpeed = n(), this.elapsed = 0, this.invDuration = 1, this.cachePos = n()
                }, a.resetMoveData = function() {
                    this.elapsed = 0
                }, a.updatePosition = function(t) {
                    this.cachePos.x += this.moveSpeed.x * t, this.cachePos.z += this.moveSpeed.z * t, this.node.setPosition(this.cachePos), d.convertToTile(this.cachePos.x, this.cachePos.z, this.tilePos, !1)
                }, a.checkAtk = function() {
                    var t = u.get(h.myGlobalDataType.enemyMap);
                    t.convertToIndex(this.tilePos, this.cachePos.x, this.cachePos.z);
                    var e = t.convertToBufferIndex(this.tilePos.x, this.tilePos.y),
                        i = t.getAllData();
                    this.atkEnemies(i, e)
                }, a.atkEnemies = function(t, e) {
                    for (var i = this.atkIndexes, o = i.length - 1; o >= 0; --o) {
                        var s = t[e + i[o]];
                        if (s) {
                            var a = p.getInstanceById(s);
                            if (this.onAtk(a)) {
                                this.emit(l.LevelEvent.removePlayerBullet, this);
                                break
                            }
                        }
                    }
                }, a.onAtk = function(t) {
                    if (!t.canBeHit) return !1;
                    var e = P;
                    return e.x = t.position.x - this.cachePos.x, e.z = t.position.z - this.cachePos.z, !(e.x * e.x + e.z * e.z > .25) && (e.y = 0, t.beHit({
                        atk: this.atkValue,
                        atkType: null,
                        bulletPosition: this.cachePos,
                        atkDir: e
                    }), this.playAtkEffect(), !0)
                }, a.playAtkEffect = function() {
                    for (var t = u.get(h.myGlobalDataType.yanWuEffect), e = 0; e < 3; ++e) this.node.getPosition(P), P.x += .5 * (Math.random() - .5), P.y += .5 * (Math.random() - .5), P.z += .5 * (Math.random() - .5), t.setParticle(P, .5)
                }, a.customUpdate = function(t) {
                    this.elapsed += t, this.elapsed > this.duration ? this.emit(l.LevelEvent.removePlayerBullet, this) : (this.updatePosition(t), this.checkAtk())
                }, s
            }(r)) || v);
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TileWeapon.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts", "./GlobalData.ts", "./LevelMap.ts", "./LevelColler.ts"], (function(e) {
    "use strict";
    var t, n, i, o, a, s, h, p, l, u, d, c, r, f, y, v, w;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.defineProperty, i = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            a = e.cclegacy, s = e._decorator, h = e.v3, p = e.instantiate
        }, function(e) {
            l = e.GlobalEnum
        }, function(e) {
            u = e.default
        }, function(e) {
            d = e.EventType
        }, function(e) {
            c = e.default
        }, function(e) {
            r = e.default
        }, function(e) {
            f = e.default
        }, function(e) {
            y = e.default
        }, function(e) {
            v = e.Tile
        }, function(e) {
            w = e.AABB
        }],
        execute: function() {
            var g;
            a._RF.push({}, "ef7c4gVabpMNIWT6DE8IbBL", "TileWeapon", void 0);
            var b = s.ccclass;
            s.property, e("TileWeapon", b("TileWeapon")(g = function(e) {
                function a() {
                    for (var t, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(a)) || this, n(i(t), "weaponType", void 0), n(i(t), "unlocked", !1), n(i(t), "fighting", !1), n(i(t), "equiped", !1), n(i(t), "weaponNode", null), n(i(t), "weaponAngle", void 0), n(i(t), "_aabb", null), n(i(t), "aabbDirty", !0), t
                }
                t(a, e);
                var s = a.prototype;
                return s.initSub = function() {
                    this.initAABB(), this.initState(), this.initWeaponNode()
                }, s.resetSub = function() {
                    this.resetAABB(), this.resetState(), this.resetWeaponNode()
                }, s.onEvents = function() {
                    this.on(d.LevelEvent.changedWeapon, this.onChangeWeapon, this), this.on(d.LevelEvent.unlockWeapon, this.onUnlockWeapon, this)
                }, s.setData = function(e) {
                    var t = this,
                        n = h();
                    v.convertToWorld(e.tilePos.x, e.tilePos.y, n), this.node.setPosition(n), this.aabbDirty = !0, this.weaponType = e.weaponType;
                    var i = c.getPlayerData().weapons;
                    this.unlocked = i.owned.indexOf(this.weaponType) >= 0, this.fighting = !1, this.equiped = this.weaponType == i.curId;
                    var o = "Gun" + (this.weaponType + 1) + "T";
                    r.loadBundleRes("LevelScene", "SinglePrefab/" + o, (function(e) {
                        var n = p(e);
                        t.node.addChild(n), n.setPosition(0, .6, 0), n.eulerAngles = t.weaponAngle, t.weaponNode = n, t.equiped && t.hideWeaponNode()
                    })), this.emit(d.LevelEvent.addTileForTeach, l.TileContentType.weapon, this.node.position)
                }, s.onEnterColl = function() {
                    this.equiped || (y.get(l.myGlobalDataType.isLevelFighting) ? this.unlocked && this.emit(d.LevelEvent.showBtnChangeWeapon, this.weaponType) : this.unlocked ? this.emit(d.LevelEvent.showBtnChangeWeapon, this.weaponType) : this.showUI(l.UI.unlockWeapon, {
                        type: l.TileContentType.weapon,
                        weaponType: this.weaponType
                    }))
                }, s.onExitColl = function() {
                    this.equiped || (y.get(l.myGlobalDataType.isLevelFighting) ? this.unlocked && this.emit(d.LevelEvent.hideBtnChangeWeapon) : this.unlocked ? this.emit(d.LevelEvent.hideBtnChangeWeapon) : this.hideUI(l.UI.unlockWeapon))
                }, s.initState = function() {
                    this.unlocked = !1, this.fighting = !1, this.equiped = !1
                }, s.resetState = function() {
                    this.unlocked = !1, this.fighting = !1, this.equiped = !1
                }, s.initWeaponNode = function() {
                    this.weaponAngle = h(-135, 0, 0)
                }, s.resetWeaponNode = function() {
                    this.weaponNode && (this.weaponNode.destroy(), this.weaponNode = null)
                }, s.showWeaponNode = function() {
                    this.weaponNode && (this.weaponNode.active = !0)
                }, s.hideWeaponNode = function() {
                    this.weaponNode && (this.weaponNode.active = !1)
                }, s.updateWeaponNode = function(e) {
                    this.weaponNode && this.weaponNode.activeInHierarchy && (this.weaponAngle.y += 90 * e, this.weaponNode.eulerAngles = this.weaponAngle)
                }, s.initAABB = function() {
                    this._aabb = new w, this.aabbDirty = !0
                }, s.resetAABB = function() {
                    this.aabbDirty = !0
                }, s.getAABB = function() {
                    return this.processDirty(), this._aabb
                }, s.processDirty = function() {
                    if (this.aabbDirty) {
                        this.aabbDirty = !1;
                        var e = 1.2;
                        this._aabb.setMinVert(-e, 0, -e), this._aabb.setMaxVert(e, 1, e);
                        var t = this.node.getWorldPosition();
                        this._aabb.addOffset(t), this._aabb.computeCenter()
                    }
                }, s.onUnlockWeapon = function(e) {
                    this.weaponType == e && (this.unlocked = !0)
                }, s.onChangeWeapon = function(e) {
                    this.weaponType == e ? (this.equiped = !0, this.hideWeaponNode()) : this.equiped && (this.equiped = !1, this.showWeaponNode())
                }, s.update = function(e) {
                    this.updateWeaponNode(e)
                }, o(a, [{
                    key: "canGrow",
                    get: function() {
                        var e = c.getPlayerData().asset.zuanShi;
                        return !this.unlocked && e >= u.GameRule.weaponConfig[this.weaponType + 1].zuanShi
                    }
                }]), a
            }(f)) || g);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AddXueBaoEffect.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Action3dManager.ts", "./yyComponent.ts", "./GlobalPool.ts"], (function(t) {
    "use strict";
    var n, e, o, a, i, c, r, s, u, d;
    return {
        setters: [function(t) {
            n = t.inheritsLoose, e = t.defineProperty, o = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, i = t._decorator, c = t.director
        }, function(t) {
            r = t.default, s = t.ActionMngType
        }, function(t) {
            u = t.default
        }, function(t) {
            d = t.default
        }],
        execute: function() {
            var l;
            a._RF.push({}, "efe0cY/rFZPhqM5Vut2AT8E", "AddXueBaoEffect", void 0);
            var f = i.ccclass;
            i.property, t("AddXueBaoEffect", f("AddXueBaoEffect")(l = function(t) {
                function a() {
                    for (var n, a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = t.call.apply(t, [this].concat(i)) || this, e(o(n), "action", void 0), n
                }
                n(a, t);
                var i = a.prototype;
                return i.initSub = function() {
                    this.initAction()
                }, i.setData = function(t) {
                    var n = t.p.x + .8 * (Math.random() - .5),
                        e = 2 * Math.random() - 1,
                        o = t.p.z + .8 * (Math.random() - .5);
                    this.node.setPosition(n, e, o), r.getMng(s.Level).runAction(this.node, this.action), n = t.p.x + .8 * (Math.random() - .5), e = 2 * Math.random() - 1, o = t.p.z + .8 * (Math.random() - .5), this.playXingXing(n, e, o)
                }, i.playXingXing = function(t, n, e) {
                    var o = d.get("XingXingParticle");
                    o.setPosition(t, n, e), c.getScene().addChild(o);
                    var a = .5 + .05 * Math.random();
                    o.setScale(a, a, a);
                    var i = r.moveBy(1.5, 0, 2.5 + Math.random(), 0),
                        u = r.scaleTo(1.5, 0, 0, 0),
                        l = r.spawn(i, u),
                        f = r.callFun((function() {
                            d.put(o)
                        })),
                        h = r.sequence(l, f);
                    r.getMng(s.Level).runAction(o, h)
                }, i.initAction = function() {
                    var t = .2 + .1 * Math.random(),
                        n = r.scaleTo(0, t, t, t),
                        e = 1.5 + .5 * Math.random(),
                        o = r.moveBy(e, 0, 2.5 + Math.random(), 0);
                    t = 0;
                    var a = r.scaleTo(e, t, t, t),
                        i = r.spawn(o, a),
                        c = r.callFun(this.putSelf.bind(this));
                    this.action = r.sequence(n, i, c)
                }, i.putSelf = function() {
                    d.put(this.node)
                }, a
            }(u)) || l);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Ground.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./GameEventType.ts", "./PlayerData.ts", "./Loader.ts", "./yyComponent.ts", "./LevelMap.ts"], (function(e) {
    "use strict";
    var t, s, n, i, o, u, r, h, a, d, c, l, f, p, m, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, s = e.inheritsLoose, n = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.defineProperty
        }, function(e) {
            u = e.cclegacy, r = e._decorator, h = e.v3, a = e.MeshRenderer, d = e.utils
        }, function(e) {
            c = e.default
        }, function(e) {
            l = e.EventType
        }, function(e) {
            f = e.default
        }, function(e) {
            p = e.default
        }, function(e) {
            m = e.default
        }, function(e) {
            v = e.Tile
        }],
        execute: function() {
            var M, y, R, g, z;
            u._RF.push({}, "fe828uwOPROE7wkrNg0AQTo", "Ground", void 0);
            var D = r.ccclass,
                x = r.property,
                G = h();
            e("Ground", (M = D("Ground"), y = x(a), M((z = t((g = function(e) {
                function t() {
                    for (var t, s = arguments.length, u = new Array(s), r = 0; r < s; r++) u[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(u)) || this, n(i(t), "meshRender", z, i(t)), o(i(t), "meshData", void 0), o(i(t), "scheduledMesh", !1), t
                }
                s(t, e);
                var u = t.prototype;
                return u.initSub = function() {
                    this.initMesh()
                }, u.resetSub = function() {
                    this.resetMesh()
                }, u.onEvents = function() {
                    this.on(l.LevelEvent.addRoomGround, this.addRoom, this)
                }, u.addRoom = function(e) {
                    this.addRoomMesh(e), this.updateMesh()
                }, u.setImg = function() {
                    var e = c.GameRule.sceneLvConfig[f.getPlayerData().curSceneIndex].sceneId,
                        t = c.GameRule.sceneConfig[e].groundImg;
                    t || (t = "groundImg");
                    var s = this.meshRender.getMaterial(0);
                    p.loadBundleRes("LevelScene", "textures/" + t + "/texture", (function(e) {
                        e && s.setProperty("mainTexture", e)
                    }))
                }, u.initMesh = function() {
                    this.meshData = {
                        positions: [],
                        uvs: [],
                        indices: []
                    }, this.scheduledMesh = !1
                }, u.resetMesh = function() {
                    this.meshData = {
                        positions: [],
                        uvs: [],
                        indices: []
                    }, this.meshRender.mesh = null, this.scheduledMesh = !1
                }, u.addRoomsMesh = function(e) {
                    for (var t = e.length - 1; t >= 0; --t) this.addRoomMesh(e[t])
                }, u.addRoomMesh = function(e) {
                    var t = this.meshData.positions.length / 3;
                    this.meshData.indices.push(t, t + 1, t + 2, t, t + 2, t + 3), v.convertToWorld(e.p.x, e.p.y, G);
                    var s = G.x,
                        n = G.z - e.size.y * c.GameRule.tileSize.z,
                        i = s + e.size.x * c.GameRule.tileSize.x,
                        o = G.z;
                    this.meshData.positions.push(s, 0, n, s, 0, o, i, 0, o, i, 0, n), this.meshData.uvs.push(0, 0, 0, e.size.y, e.size.x, e.size.y, e.size.x, 0)
                }, u.updateMesh = function() {
                    this.scheduledMesh || (this.scheduledMesh = !0, this.scheduleOnce(this._updateMesh, 0))
                }, u._updateMesh = function() {
                    this.scheduledMesh = !1, this.meshRender.mesh = d.createMesh(this.meshData)
                }, t
            }(m)).prototype, "meshRender", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = g)) || R));
            u._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelScene", ["./LanGan.ts", "./Wall1Mesh.ts", "./LevelMap.ts", "./EnemyDeathAnim.ts", "./GeBan.ts", "./LevelColler.ts", "./Enemy.ts", "./Bullet.ts", "./BulletChuanTou.ts", "./CustomLabel3D.ts", "./TileUnlockRoom.ts", "./Wall2Mesh.ts", "./UIPlayer.ts", "./ItemMap.ts", "./duYeParticle.ts", "./BeHitParticle.ts", "./BulletBoom.ts", "./ZiDanKe.ts", "./DropedHuDun.ts", "./RoleMeshCreator.ts", "./EnemyMeshMng.ts", "./GuangQuan.ts", "./QiangKouAnim.ts", "./DuYe.ts", "./TileShop.ts", "./TileSoldier.ts", "./SceneGround.ts", "./HpBarMng.ts", "./FrameAnim.ts", "./YanWuEffect.ts", "./DropedHp.ts", "./DeadBlood.ts", "./LevelManager.ts", "./DuYeBaoZha.ts", "./LevelCamera.ts", "./Player.ts", "./GoldMng.ts", "./Ground.ts", "./MyLevelManager.ts", "./SceneItemMng.ts", "./GeBanAnim.ts", "./BulletLockTarget.ts", "./BulletSword.ts", "./Solider.ts", "./UIEnemy.ts", "./BaoZhaParticle.ts", "./TileWeapon.ts", "./AddXueBaoEffect.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/LevelScene', 'chunks:///_virtual/LevelScene');
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