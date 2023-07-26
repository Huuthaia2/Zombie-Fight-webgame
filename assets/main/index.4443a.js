System.register("chunks:///_virtual/GameConfig.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./CommonGameConfig.ts", "./GlobalEnum.ts"], function(e) {
		"use strict";
		var t, i, n, o, a;
		return {
			setters: [function(e) {
				t = e.inheritsLoose, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy
			}, function(e) {
				o = e.default
			}, function(e) {
				a = e.GlobalEnum
			}],
			execute: function() {
				n._RF.push({}, "080b4sm8OJF05ZQAgQM+TZ3", "GameConfig", void 0);
				var s = e("default", function(e) {
					function i() {
						return e.apply(this, arguments) || this
					}
					return t(i, e), i.convertAttributeName = function(e) {
						switch (e) {
							case a.ShopType.atk:
								return "atk";
							case a.ShopType.atkSpeed:
								return "atkSpeed";
							case a.ShopType.geBan:
								return "geBan";
							case a.ShopType.hp:
								return "hp";
							case a.ShopType.moveSpeed:
								return "moveSpeed";
							case a.ShopType.soldier:
								return "soldier"
						}
					}, i.getAttributeCHName = function(e) {
						switch (e) {
							case a.ShopType.atk:
								return "atk";
							case a.ShopType.atkSpeed:
								return "atkSpeed";
							case a.ShopType.geBan:
								return "geBan";
							case a.ShopType.hp:
								return "hp";
							case a.ShopType.moveSpeed:
								return "moveSpeed";
							case a.ShopType.soldier:
								return "soldier";
							default:
								return "其他"
						}
					}, i.getAttributeConfig = function(e) {
						return {
							addValue: this.getAttributeLvAddValue(e),
							priceRate: this.getAttributeLvPriceRate(e)
						}
					}, i.getAttributeLvAddValue = function(e) {
						if (1 == e) return 0;
						for (var t = 0, i = 1; i < e; ++i) t += Math.ceil(.3 * i);
						return t
					}, i.getAttributeLvPriceRate = function(e) {
						return 1 == e ? 1 : e < 17 ? Math.pow(1.25, e - 2) : e < 30 ? Math.pow(1.25, 15) + 7 * (e - 17) : e < 50 ? Math.pow(1.25, 15) + 91 + 10 * (e - 30) : Math.pow(1.25, 15) + 91 + 200 + 13 * (e - 50)
					}, i.getSoldierPrice = function(e) {
						return 50 * e
					}, i.getGrowPrice = function(e, t) {
						if (e == a.ShopType.soldier) return 50 * t;
						if (e == a.ShopType.atk && 1 == t) return 25;
						var i = this.convertAttributeName(e),
							n = this.GameRule.attributeConfig[i],
							o = this.getAttributeConfig(t);
						return Math.round(n.gold * o.priceRate)
					}, i.getAttributeMaxLv = function(e, t) {
						switch (e) {
							case a.ShopType.atk:
							case a.ShopType.hp:
								return 999;
							case a.ShopType.geBan:
							case a.ShopType.soldier:
								return 5;
							case a.ShopType.moveSpeed:
							case a.ShopType.atkSpeed:
								return 20;
							default:
								return t
						}
					}, i
				}(o));
				i(s, "gameName", ""), i(s, "GameRule", {
					wuJinCoolTime: 60,
					heiYeCoolTime: 60,
					lvHeiYe: 15,
					matPerRole: 50,
					moveSpeed: 5,
					gravity: 10,
					enemyMoveSpeed: 1.8,
					mapScope: {
						xMin: 1e3,
						xMax: 1100,
						yMin: 0,
						yMax: 1e3,
						zMin: 900,
						zMax: 1e3
					},
					wallSize: {
						x: 3,
						z: .2
					},
					tileSize: {
						x: 3,
						z: 3
					},
					level2liquid: 1,
					liquid2level: 1,
					roleRadius: .5,
					enemyArrivedCheckDis: .75,
					enemyMapSize: {
						x: 200,
						y: 200
					},
					enemyMapOffset: {
						x: 1e3,
						y: 1e3
					},
					enemyMapScale: {
						x: 2,
						y: 2
					},
					world2Map: 2,
					weaponConfig: {
						1: {
							name: "Rifle",
							atk: 10,
							atkSpeed: 5,
							atkScope: 12,
							bulletName: "Bullet1",
							bulletSpeed: 20,
							spe: "A very ordinary gun",
							zuanShi: 0
						},
						2: {
							name: "Shotgun",
							atk: 12,
							atkSpeed: 2,
							atkScope: 8,
							bulletName: "Bullet2",
							bulletSpeed: 30,
							spe: "Shoot three bullets",
							zuanShi: 10
						},
						3: {
							name: "Submachine gun",
							atk: 20,
							atkSpeed: 10,
							atkScope: 12,
							bulletName: "Bullet3",
							bulletSpeed: 30,
							spe: "Extremely fast rate of fire",
							zuanShi: 20
						},
						4: {
							name: "Desert Eagle",
							atk: 25,
							atkSpeed: 2,
							atkScope: 10,
							bulletName: "Bullet4",
							bulletSpeed: 20,
							spe: "Bullets can penetrate the enemy",
							zuanShi: 30
						},
						5: {
							name: "rocket launcher",
							atk: 30,
							atkSpeed: 1,
							atkScope: 10,
							bulletName: "Bullet5",
							bulletSpeed: 15,
							spe: "Range explosion",
							zuanShi: 45
						},
						6: {
							name: "Samurai sword",
							atk: 50,
							atkSpeed: 2,
							atkScope: 3,
							bulletName: "Bullet5",
							bulletSpeed: 10,
							spe: "Very powerful in melee combat",
							zuanShi: 60
						}
					},
					attributeConfig: {
						hp: {
							value: 100,
							gold: 100
						},
						atk: {
							value: 100,
							gold: 35
						},
						atkSpeed: {
							value: 1,
							gold: 100
						},
						moveSpeed: {
							value: 1,
							gold: 200
						},
						geBan: {
							value: 1,
							gold: 200
						}
					},
					sceneLvConfig: [{
						sceneId: 1,
						mapId: 1,
						maxLv: 10
					}, {
						sceneId: 2,
						mapId: 2,
						maxLv: 30
					}, {
						sceneId: 3,
						mapId: 3,
						maxLv: 50
					}, {
						sceneId: 1,
						mapId: 4,
						maxLv: 70
					}, {
						sceneId: 2,
						mapId: 5,
						maxLv: 90
					}, {
						sceneId: 3,
						mapId: 3,
						maxLv: 120
					}, {
						sceneId: 1,
						mapId: 4,
						maxLv: 150
					}, {
						sceneId: 3,
						mapId: 5,
						maxLv: 999
					}],
					sceneConfig: {
						1: {
							groundColor: "#7196c4",
							groundImg: "groundImg",
							wallImg: "groundImg",
							items: ["thing1", "thing2"]
						},
						2: {
							groundColor: "#EED4A2",
							groundImg: "groundImg",
							wallImg: "wallb",
							items: ["thing3", "thing4", "thing5"]
						},
						3: {
							groundColor: "#8b9f6d",
							groundImg: "groundImg",
							wallImg: "wallf",
							items: ["thing6", "thing7"]
						}
					}
				}), i(s, "EnemyMeshConfig", [{
					mesh: a.BatchSkinMesh.normalEnemy,
					mat: "",
					enemyCount: 50,
					anim: a.FighterAnim.enemyMove,
					animSpeed: 1
				}, {
					mesh: a.BatchSkinMesh.normalEnemy,
					mat: "",
					enemyCount: 30,
					anim: a.FighterAnim.enemyMove,
					animSpeed: 2
				}, {
					mesh: a.BatchSkinMesh.normalEnemy,
					mat: "",
					enemyCount: 30,
					anim: a.FighterAnim.enemyMove,
					animSpeed: .67
				}]), i(s, "renWuData", [{
					type: a.RenWuType.buySolider,
					target: 1,
					awardGold: 60,
					data: null
				}, {
					type: a.RenWuType.growSolider,
					target: 1,
					awardGold: 50,
					data: null
				}, {
					type: a.RenWuType.winLevel,
					target: 1,
					awardGold: 15,
					data: null
				}]), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EnemyDataTemplate.ts", ["cc", "./GlobalEnum.ts"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}, function(e) {
				i = e.GlobalEnum
			}],
			execute: function() {
				t._RF.push({}, "0a0c3Jrsr5DgZyBbra+AsFN", "EnemyDataTemplate", void 0), e("default", function() {
					function e() {}
					return e.getData = function() {
						return {
							1: {
								id: 1,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 12,
									g: 125,
									b: 25,
									a: 255
								},
								scale: 1,
								hpBarY: 1.8,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd1,
								moveSpeed: 1,
								hp: 1,
								atk: 1,
								gold: 1,
								info: "1号敌人"
							},
							2: {
								id: 2,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 203,
									g: 255,
									b: 0,
									a: 255
								},
								scale: 1,
								hpBarY: 1.8,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd2,
								moveSpeed: 2,
								hp: .8,
								atk: 1,
								gold: 1,
								info: "Sensitive in action, but low in HP"
							},
							3: {
								id: 3,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 0,
									g: 56,
									b: 0,
									a: 255
								},
								scale: 1.5,
								hpBarY: 2.7,
								hpBarSize: {
									x: 1.5,
									y: 1.2
								},
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spdHalf,
								moveSpeed: .8,
								hp: 5,
								atk: 1,
								gold: 3,
								info: "Excessive blood volume, but slow movement"
							},
							4: {
								id: 4,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 255,
									g: 50,
									b: 0,
									a: 255
								},
								color2: {
									r: 255,
									g: 200,
									b: 0,
									a: 255
								},
								scale: 1.2,
								hpBarY: 2.1,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd1,
								moveSpeed: 1,
								hp: 1.2,
								atk: 1,
								gold: 1,
								info: "An explosion occurs when you die"
							},
							5: {
								id: 5,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 0,
									g: 255,
									b: 0,
									a: 255
								},
								color2: {
									r: 0,
									g: 255,
									b: 255,
									a: 255
								},
								scale: 1.2,
								hpBarY: 2.1,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd1,
								moveSpeed: 1,
								hp: 1,
								atk: 1,
								gold: 2,
								info: "it becomes a virus that attacks nearby players"
							},
							6: {
								id: 6,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 153,
									g: 0,
									b: 255,
									a: 255
								},
								yinShen: !0,
								scale: 1.2,
								hpBarY: 2.1,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd1,
								moveSpeed: 1.1,
								hp: .5,
								atk: 1,
								gold: 3,
								info: "Appear invisible every other period of time"
							},
							7: {
								id: 7,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 0,
									g: 0,
									b: 255,
									a: 255
								},
								color2: {
									r: 0,
									g: 255,
									b: 255,
									a: 255
								},
								scale: 1.2,
								hpBarY: 2.1,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd1,
								moveSpeed: 1,
								hp: 2,
								atk: 1,
								gold: 1,
								info: "Drop the invincible shield after death"
							},
							8: {
								id: 8,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 50,
									g: 200,
									b: 0,
									a: 255
								},
								scale: 1.2,
								hpBarY: 2.1,
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spd1,
								moveSpeed: 1,
								hp: 2,
								atk: 1,
								gold: 1,
								info: "Drop blood packets after death"
							},
							105: {
								id: 105,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 255,
									g: 22,
									b: 0,
									a: 255
								},
								scale: 2.5,
								hpBarY: 4,
								hpBarSize: {
									x: 2,
									y: 1.5
								},
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spdHalf,
								moveSpeed: 1,
								hp: 40,
								atk: 1,
								gold: 20,
								info: "More HP！"
							},
							106: {
								id: 106,
								meshType: i.BatchSkinMesh.normalEnemy,
								color: {
									r: 203,
									g: 255,
									b: 0,
									a: 255
								},
								scale: 2.5,
								hpBarY: 4,
								hpBarSize: {
									x: 2,
									y: 1.5
								},
								anim: i.FighterAnim.enemyMove,
								animSpeed: i.BatchMeshAnimSpeed.spdHalf,
								moveSpeed: .9,
								hp: 40,
								atk: 1,
								gold: 20,
								info: "After death, it will split"
							}
						}
					}, e
				}()), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/Tool.ts", ["cc"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.cclegacy, i = e.v3
			}],
			execute: function() {
				t._RF.push({}, "0ee14yb6RFPP6OOlz1xOOJS", "Tool", void 0);
				var n = i();
				e("default", function() {
					function e() {}
					return e.vec3RotateY = function(e, t, i) {
						var n = Math.cos(t),
							o = Math.sin(t);
						return this.vec3RotateYSrcr(e, o, n, i)
					}, e.vec3RotateYSrcr = function(e, t, i, o) {
						return o || (o = n), o.x = e.z * t + e.x * i, o.y = e.y, o.z = e.z * i - e.x * t, o
					}, e.vec3RotateYByCenter = function(e, t, i, n) {
						var o = Math.cos(i),
							a = Math.sin(i);
						return this.vec3RotateYByCenterSrcr(e, t, a, o, n)
					}, e.vec3RotateYByCenterSrcr = function(e, t, i, o, a) {
						a || (a = n);
						var s = e.x - t.x,
							r = e.y - t.y,
							u = e.z - t.z,
							c = u * i + s * o,
							l = r,
							d = u * o - s * i;
						return a.x = c + t.x, a.y = l + t.y, a.z = d + t.z, a
					}, e
				}()), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/LevelMapDataTemplate.ts", ["cc", "./GlobalEnum.ts"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}, function(e) {
				i = e.GlobalEnum
			}],
			execute: function() {
				t._RF.push({}, "1c887/zZnBI64HUtRrBWh5/", "LevelMapDataTemplate", void 0), e("default", function() {
					function e() {}
					return e.getData = function() {
						return {
							1: {
								id: 1,
								playerEnterTile: {
									x: 1,
									y: 1
								},
								rooms: [{
									dependTile: {
										x: 1,
										y: 2
									},
									p: {
										x: 1,
										y: 1
									},
									size: {
										x: 1,
										y: 1
									},
									tiles: {
										1: {
											1: {
												type: i.TileContentType.shop,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100,
												shopType: i.ShopType.atk,
												maxLv: 1,
												weaponType: i.WeaponType.weapon1,
												soldierMaxGold: 100,
												soldierRemainGold: 100,
												soldierLv: 1
											}
										}
									}
								}],
								doors: {
									1: [1]
								},
								walls: {
									1: {
										1: i.WallModel.wall
									}
								},
								geBans: {
									1: [1]
								}
							},
							2: {
								id: 2,
								playerEnterTile: {
									x: 27,
									y: 41
								},
								rooms: [{
									dependTile: {
										x: 43,
										y: 23
									},
									p: {
										x: 36,
										y: 20
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										37: {
											23: {
												tilePos: {
													x: 37,
													y: 23
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 37,
										y: 23
									},
									p: {
										x: 30,
										y: 20
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										31: {
											23: {
												tilePos: {
													x: 31,
													y: 23
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 31,
										y: 23
									},
									p: {
										x: 24,
										y: 20
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										25: {
											25: {
												tilePos: {
													x: 25,
													y: 25
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 25,
										y: 25
									},
									p: {
										x: 18,
										y: 20
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										21: {
											25: {
												tilePos: {
													x: 21,
													y: 25
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 45,
										y: 27
									},
									p: {
										x: 42,
										y: 20
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										43: {
											23: {
												tilePos: {
													x: 43,
													y: 23
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 41,
										y: 31
									},
									p: {
										x: 42,
										y: 26
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										45: {
											27: {
												tilePos: {
													x: 45,
													y: 27
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 21,
										y: 25
									},
									p: {
										x: 18,
										y: 26
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										23: {
											31: {
												tilePos: {
													x: 23,
													y: 31
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 27,
										y: 33
									},
									p: {
										x: 24,
										y: 26
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										29: {
											29: {
												tilePos: {
													x: 29,
													y: 29
												},
												type: 3,
												unlockRoomMaxGold: 240,
												unlockRoomRemainGold: 240
											}
										}
									}
								}, {
									dependTile: {
										x: 29,
										y: 29
									},
									p: {
										x: 30,
										y: 26
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										35: {
											29: {
												tilePos: {
													x: 35,
													y: 29
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 35,
										y: 29
									},
									p: {
										x: 36,
										y: 26
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										41: {
											31: {
												tilePos: {
													x: 41,
													y: 31
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 45,
										y: 39
									},
									p: {
										x: 42,
										y: 32
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										43: {
											35: {
												tilePos: {
													x: 43,
													y: 35
												},
												type: 3,
												unlockRoomMaxGold: 240,
												unlockRoomRemainGold: 240
											}
										}
									}
								}, {
									dependTile: {
										x: 43,
										y: 35
									},
									p: {
										x: 36,
										y: 32
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {}
								}, {
									dependTile: {
										x: 33,
										y: 39
									},
									p: {
										x: 30,
										y: 32
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										31: {
											35: {
												tilePos: {
													x: 31,
													y: 35
												},
												type: 3,
												unlockRoomMaxGold: 200,
												unlockRoomRemainGold: 200
											}
										},
										35: {
											37: {
												type: 0,
												shopType: 1,
												maxLv: 1,
												tilePos: {
													x: 35,
													y: 37
												}
											}
										}
									}
								}, {
									dependTile: {
										x: 31,
										y: 35
									},
									p: {
										x: 24,
										y: 32
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										27: {
											33: {
												tilePos: {
													x: 27,
													y: 33
												},
												type: 3,
												unlockRoomMaxGold: 220,
												unlockRoomRemainGold: 220
											}
										}
									}
								}, {
									dependTile: {
										x: 23,
										y: 31
									},
									p: {
										x: 18,
										y: 32
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										21: {
											37: {
												tilePos: {
													x: 21,
													y: 37
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 41,
										y: 41
									},
									p: {
										x: 42,
										y: 38
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										45: {
											39: {
												tilePos: {
													x: 45,
													y: 39
												},
												type: 3,
												unlockRoomMaxGold: 180,
												unlockRoomRemainGold: 180
											}
										}
									}
								}, {
									dependTile: {
										x: 35,
										y: 41
									},
									p: {
										x: 36,
										y: 38
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										41: {
											41: {
												tilePos: {
													x: 41,
													y: 41
												},
												type: 3,
												unlockRoomMaxGold: 160,
												unlockRoomRemainGold: 160
											},
											43: {
												type: 2,
												soldierMaxGold: 100,
												soldierRemainGold: 100,
												soldierLv: 1,
												tilePos: {
													x: 41,
													y: 43
												}
											}
										}
									}
								}, {
									dependTile: {
										x: 29,
										y: 41
									},
									p: {
										x: 30,
										y: 38
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										33: {
											39: {
												tilePos: {
													x: 33,
													y: 39
												},
												type: 3,
												unlockRoomMaxGold: 140,
												unlockRoomRemainGold: 140
											}
										},
										35: {
											41: {
												tilePos: {
													x: 35,
													y: 41
												},
												type: 3,
												unlockRoomMaxGold: 120,
												unlockRoomRemainGold: 120
											},
											43: {
												type: 0,
												shopType: 0,
												maxLv: 1,
												tilePos: {
													x: 35,
													y: 43
												}
											}
										}
									}
								}, {
									dependTile: {
										x: 0,
										y: 0
									},
									p: {
										x: 24,
										y: 38
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {
										29: {
											41: {
												tilePos: {
													x: 29,
													y: 41
												},
												type: 3,
												unlockRoomMaxGold: 100,
												unlockRoomRemainGold: 100
											}
										}
									}
								}, {
									dependTile: {
										x: 21,
										y: 37
									},
									p: {
										x: 18,
										y: 38
									},
									size: {
										x: 3,
										y: 3
									},
									tiles: {}
								}],
								doors: {
									18: [31],
									21: [20, 26, 38, 44],
									23: [32],
									24: [21, 25, 35],
									27: [26, 32],
									29: [44],
									30: [23, 29, 35, 41],
									31: [44],
									33: [20, 32, 38],
									36: [23, 27, 29, 41],
									39: [44],
									42: [23, 29, 31, 35, 41],
									45: [20, 26, 38, 44],
									48: [31, 33]
								},
								walls: {
									18: {
										21: 1,
										23: 1,
										25: 1,
										27: 1,
										29: 1,
										33: 1,
										35: 1,
										37: 1,
										39: 1,
										41: 1,
										43: 1
									},
									19: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									21: {
										32: 1
									},
									23: {
										20: 1,
										26: 1,
										38: 1,
										44: 1
									},
									24: {
										23: 1,
										27: 1,
										29: 1,
										31: 1,
										33: 1,
										37: 1,
										39: 1,
										41: 1,
										43: 1
									},
									25: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									27: {
										20: 1,
										38: 1,
										44: 1
									},
									29: {
										20: 1,
										26: 1,
										32: 1,
										38: 1
									},
									30: {
										21: 1,
										25: 1,
										27: 1,
										31: 1,
										33: 1,
										37: 1,
										39: 1,
										43: 1
									},
									31: {
										20: 1,
										26: 1,
										32: 1,
										38: 1
									},
									33: {
										26: 1,
										44: 1
									},
									35: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									36: {
										21: 1,
										25: 1,
										31: 1,
										33: 1,
										35: 1,
										37: 1,
										39: 1,
										43: 1
									},
									37: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									39: {
										20: 1,
										26: 1,
										32: 1,
										38: 1
									},
									41: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									42: {
										21: 1,
										25: 1,
										27: 1,
										33: 1,
										37: 1,
										39: 1,
										43: 1
									},
									43: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									45: {
										32: 1
									},
									47: {
										20: 1,
										26: 1,
										32: 1,
										38: 1,
										44: 1
									},
									48: {
										21: 1,
										23: 1,
										25: 1,
										27: 1,
										29: 1,
										35: 1,
										37: 1,
										39: 1,
										41: 1,
										43: 1
									}
								},
								geBans: {
									18: [31],
									21: [38, 20, 44],
									24: [21, 35],
									27: [26],
									29: [44],
									31: [44],
									33: [20, 32],
									36: [27],
									39: [44],
									42: [29],
									45: [20, 44],
									48: [33, 31]
								}
							}
						}
					}, e
				}()), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/http_request.ts", ["cc"], function(e) {
		"use strict";
		var t;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}],
			execute: function() {
				t._RF.push({}, "2c29csX5rhKb490tgYRKTP0", "http_request", void 0), e("default", function() {
					function e() {}
					return e.postRequest = function(e, t, i) {
						console.log("postRequest --->", e);
						var n = new XMLHttpRequest;
						n.open("POST", e, !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						var o = "";
						for (var a in t) o += a + "=" + encodeURIComponent(t[a]) + "&";
						o = o.substr(0, o.length - 1), n.send(o), n.onreadystatechange = function() {
							var e = n.readyState,
								t = n.status;
							if (4 == e && 200 == t) {
								var o = n.responseText,
									a = JSON.parse(o);
								i && i(a)
							}
						}
					}, e.get = function(e, t, i) {
						var n = new XMLHttpRequest;
						n.timeout = 1e4, n.open("GET", e, !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
							if (4 === this.readyState && this.status >= 200 && this.status < 300) {
								var e = n.responseText;
								e || console.log("httperror", e);
								var t = JSON.parse(e);
								i(t)
							}
						};
						var o = "";
						for (var a in t) o += a + "=" + t[a] + "&";
						o = o.substr(0, o.length - 1), n.send(o)
					}, e
				}()), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/LiquidManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy
			}],
			execute: function() {
				e({
					LiquidBodyType: void 0,
					LiquidColliderType: void 0,
					LiquidParticleFlag: void 0,
					LiquidParticleGroupFlag: void 0
				}), i._RF.push({}, "2d140sgVvNPw6/+pOrEv+Ud", "LiquidManager", void 0);
				var n = e("default", function() {
					function e() {}
					return e.assign = function(e, t) {
						for (var i in t) void 0 === e[i] && (e[i] = t[i])
					}, e.init = function(e) {
						e || (e = {
							x: 0,
							y: -10
						}), this.world = new b2World(e), window.world = this.world, this.initListener()
					}, e.reset = function() {
						this.resetListener();
						var e = this.world;
						if (null != e) {
							for (var t = e.joints.length - 1; t >= 0; --t) e.DestroyJoint(e.joints[t]);
							for (var i = e.bodies.length - 1; i >= 0; --i) e.DestroyBody(e.bodies[i]);
							for (var n = e.particleSystems.length - 1; n >= 0; --n) e.DestroyParticleSystem(e.particleSystems[n])
						}
					}, e.setGravity = function(e) {
						this.world.SetGravity(e)
					}, e.SetContactListener = function(e) {
						this.world.SetContactListener(e)
					}, e.update = function(e) {
						this.world.Step(e, 1, 1)
					}, e.CreateParticleSystem = function(e) {
						var t = new b2ParticleSystemDef;
						return e && Object.assign(t, e), this.world.CreateParticleSystem(t)
					}, e.DestroyParticleSystem = function(e) {
						this.world.DestroyParticleSystem(e)
					}, e.CreateRigid = function(e, t, i) {
						var n = new b2BodyDef;
						t && Object.assign(n, t);
						var o = this.world.CreateBody(n),
							a = [];
						if (i) {
							var s = new b2FixtureDef;
							Object.assign(s, i);
							for (var r = 0, u = e.length; r < u; ++r) s.shape = e[r], s.density = e[r].density, a.push(o.CreateFixtureFromDef(s))
						} else
							for (var c = 0, l = e.length; c < l; ++c) a.push(o.CreateFixtureFromShape(e[c], e[c].density));
						return {
							body: o,
							fixtures: a
						}
					}, e.RemoveBody = function(e) {
						this.world.DestroyBody(e)
					}, e.RemoveBodies = function(e) {
						for (var t = e.length - 1; t >= 0; --t) this.world.DestroyBody(e[t])
					}, e.CreateCollider = function(e, t) {
						switch (t) {
							case a.box:
								return this.CreateBox(e);
							case a.circle:
								return this.CreateCircle(e);
							case a.chain:
								return this.CreateChain(e);
							case a.ploygon:
								return this.CreatePloygon(e)
						}
					}, e.CreateBox = function(e) {
						var t = new b2PolygonShape;
						return e.offset ? t.SetAsBoxXYCenterAngle(.5 * e.size.width, .5 * e.size.height, new b2Vec2(e.offset.x, e.offset.y), 0) : t.SetAsBoxXY(.5 * e.size.width, .5 * e.size.height), t
					}, e.CreateCircle = function(e) {
						var t = new b2CircleShape;
						return e.offset && t.position.Set(e.offset.x, e.offset.y), t.radius = e.radius, t
					}, e.CreatePloygon = function(e) {
						for (var t = new b2PolygonShape, i = t.vertices, n = 0, o = e.points.length; n < o; ++n) i.push(new b2Vec2(e.points[n].x, e.points[n].y));
						return e.position && (t.position.x = e.position.x, t.position.y = e.position.y), t
					}, e.CreateChain = function(e) {
						for (var t = new b2ChainShape, i = t.vertices, n = 0, o = e.points.length; n < o; ++n) i.push(new b2Vec2(e.points[n].x, e.points[n].y));
						return e.isLoop && t.CreateLoop(), t
					}, e.CreateDistanceJoint = function(e) {
						var t = new b2DistanceJointDef;
						return void 0 !== e.dampingRatio ? t.dampingRatio = e.dampingRatio : t.dampingRatio = 0, void 0 !== e.frequencyHz ? t.frequencyHz = e.frequencyHz : t.frequencyHz = 10, t.collideConnected = !!e.collideConnected, t.InitializeAndCreate(e.bodyA, e.bodyB, e.anchorA, e.anchorB)
					}, e.CreateRevoluteJoint = function(e) {
						var t = new b2RevoluteJointDef;
						return t.collideConnected = !!e.collideConnected, t.enableLimit = !!e.enableLimit, t.enableMotor = !!e.enableMotor, e.lowerAngle && (t.lowerAngle = e.lowerAngle), e.upperAngle && (t.upperAngle = e.upperAngle), e.maxMotorTorque && (t.maxMotorTorque = e.maxMotorTorque), e.motorSpeed && (t.motorSpeed = e.motorSpeed), e.referenceAngle && (t.referenceAngle = e.referenceAngle), t.userData = e.userData, t.InitializeAndCreate(e.bodyA, e.bodyB, e.anchor)
					}, e.CreatePrismaticJoint = function(e) {
						var t = new b2PrismaticJointDef;
						return (t = !!e.collideConnected).enableLimit = !!e.enableLimit, e.lowerTranslation && (t.lowerTranslation = e.lowerTranslation), e.upperTranslation && (t.upperTranslation = e.upperTranslation), t.enableMotor = !!e.enableMotor, e.maxMotorForce && (t.maxMotorForce = e.maxMotorForce), e.motorSpeed && (t.motorSpeed = e.motorSpeed), t.userData = e.userData, t.InitializeAndCreate(e.bodyA, e.bodyB, e.anchor, e.axis)
					}, e.CreatePulleyJoint = function(e) {
						return (new b2PulleyJointDef).InitializeAndCreate(e.bodyA, e.bodyB, e.groundAnchorA, e.groundAnchorB, e.anchorA, e.anchorB, e.ratio)
					}, e.CreateGearJoint = function(e) {
						var t = new b2GearJointDef;
						return t.bodyA = e.bodyA, t.bodyB = e.bodyB, t.jointA = e.jointA, t.jointB = e.jointB, t.ratio = e.ratio, this.world.CreateJoint(t)
					}, e.CreateMouseJoint = function(e) {}, e.CreateWheelJoint = function(e) {
						var t = new b2WheelJointDef;
						return void 0 !== e.dampingRatio && (t.dampingRatio = e.dampingRatio), void 0 !== e.frequencyHz && (t.frequencyHz = e.frequencyHz), t.enableMotor = !!e.enableMotor, void 0 !== e.motorSpeed && (t.motorSpeed = e.motorSpeed), void 0 !== e.maxMotorTorque && (t.maxMotorTorque = e.maxMotorTorque), t.collideConnected = e.collideConnected, t.InitializeAndCreate(e.bodyA, e.bodyB, e.anchor, e.axis)
					}, e.CreateRopeJoint = function(e) {
						var t = new b2RopeJointDef;
						return t.bodyA = e.bodyA, t.bodyB = e.bodyB, t.localAnchorA = e.localAnchorA, t.localAnchorB = e.localAnchorB, t.maxLength = e.maxLength, t.collideConnected = !!e.collideConnected, this.world.CreateJoint(t)
					}, e.removeJoint = function(e) {
						this.world.DestroyJoint(e)
					}, e.removeJoints = function(e) {
						for (var t = e.length - 1; t >= 0; --t) this.world.DestroyJoint(e[t])
					}, e.initListener = function() {
						this.listener = new u, this.listener.init(), this.isListened = !1
					}, e.resetListener = function() {
						this.listener.reset()
					}, e.setListener = function() {
						this.isListened || (this.isListened = !0, this.world.SetContactListener(this.listener))
					}, e.onBeginContact = function(e, t, i) {
						this.setListener(), this.listener.addBeginContact(e, t, i)
					}, e.offBeginContact = function(e) {
						this.listener.removeBeginContact(e)
					}, e.onEndContact = function(e, t, i) {
						this.setListener(), this.listener.addEndContact(e, t, i)
					}, e.offEndContact = function(e) {
						this.listener.removeEndContact(e)
					}, e.onPresolve = function(e, t, i) {
						this.setListener(), this.listener.addPresolve(e, t, i)
					}, e.offPresolve = function(e) {
						this.listener.removePresolve(e)
					}, e.onPostsolve = function(e, t, i) {
						this.setListener(), this.listener.addPostsolve(e, t, i)
					}, e.offPostsolve = function(e) {
						this.listener.remobePostsolve(e)
					}, e.onBeginTrigger = function(e, t, i) {
						this.setListener(), this.listener.addBeginTrigger(e, t, i)
					}, e.offBeginTrigger = function(e) {
						this.listener.removeBeginTrigger(e)
					}, e.onEndTrigger = function(e, t, i) {
						this.setListener(), this.listener.addEndTrigger(e, t, i)
					}, e.offEndTrigger = function(e) {
						this.listener.removeEndTrigger(e)
					}, e
				}());
				t(n, "world", void 0), t(n, "listener", null), t(n, "isListened", !1);
				var o, a, s, r, u = function() {
					function e() {
						t(this, "beginContactCbs", void 0), t(this, "onBeginContact", !1), t(this, "endContactCbs", void 0), t(this, "onEndContact", !1), t(this, "presolveCbs", void 0), t(this, "onPresolve", !1), t(this, "postsolveCbs", void 0), t(this, "onPostsolve", !1), t(this, "beginTriggerCbs", void 0), t(this, "onBeginTrigger", !1), t(this, "endTriggerCbs", void 0), t(this, "onEndTrigger", !1)
					}
					var i = e.prototype;
					return i.runCbOneParameter = function(e, t, i) {
						var n = i[t];
						n && (n.target ? n.cb.call(n.target, e) : n.cb(e))
					}, i.runCbTowParameter = function(e, t, i, n) {
						var o = n[i];
						o && (o.target ? o.cb.call(o.target, e, t) : o.cb(e, t))
					}, i.init = function() {
						this.beginContactCbs = {}, this.onBeginContact = !1, this.endContactCbs = {}, this.onEndContact = !1, this.presolveCbs = {}, this.onPresolve = !1, this.postsolveCbs = {}, this.onPostsolve = !1, this.beginTriggerCbs = {}, this.onBeginTrigger = !1, this.endTriggerCbs = {}, this.onEndTrigger = !1
					}, i.reset = function() {
						this.init()
					}, i.removeAllListener = function() {
						this.init()
					}, i.addBeginContact = function(e, t, i) {
						this.onBeginContact = !0, this.beginContactCbs[e.ptr] = {
							cb: t,
							target: i
						}
					}, i.removeBeginContact = function(e) {
						delete this.beginContactCbs[e.ptr]
					}, i.addEndContact = function(e, t, i) {
						this.onEndContact = !0, this.endContactCbs[e.ptr] = {
							cb: t,
							target: i
						}
					}, i.removeEndContact = function(e) {
						delete this.endContactCbs[e.ptr]
					}, i.addPresolve = function(e, t, i) {
						this.onPresolve = !0, this.presolveCbs[e.ptr] = {
							cb: t,
							target: i
						}
					}, i.removePresolve = function(e) {
						delete this.presolveCbs[e.ptr]
					}, i.addPostsolve = function(e, t, i) {
						this.onPostsolve = !0, this.postsolveCbs[e.ptr] = {
							cb: t,
							target: i
						}
					}, i.remobePostsolve = function(e) {
						delete this.postsolveCbs[e.ptr]
					}, i.addBeginTrigger = function(e, t, i) {
						this.onBeginTrigger = !0, this.beginTriggerCbs[e.ptr] = {
							cb: t,
							target: i
						}
					}, i.removeBeginTrigger = function(e) {
						delete this.beginTriggerCbs[e.ptr]
					}, i.addEndTrigger = function(e, t, i) {
						this.onEndTrigger = !0, this.endTriggerCbs[e.ptr] = {
							cb: t,
							target: i
						}
					}, i.removeEndTrigger = function(e) {
						delete this.endTriggerCbs[e.ptr]
					}, i.BeginContactBody = function(e) {
						if (this.onBeginContact) {
							var t = e.GetFixtureA().body.ptr;
							this.runCbOneParameter(e, t, this.beginContactCbs), t = e.GetFixtureB().body.ptr, this.runCbOneParameter(e, t, this.beginContactCbs)
						}
						if (this.onBeginTrigger) {
							var i = e.GetFixtureA().body.ptr;
							this.runCbOneParameter(e, i, this.beginTriggerCbs), i = e.GetFixtureB().body.ptr, this.runCbOneParameter(e, i, this.beginTriggerCbs)
						}
					}, i.EndContactBody = function(e) {
						if (this.onEndContact) {
							var t = e.GetFixtureA().body.ptr;
							this.runCbOneParameter(e, t, this.endContactCbs), t = e.GetFixtureB().body.ptr, this.runCbOneParameter(e, t, this.endContactCbs)
						}
						if (this.onEndTrigger) {
							var i = e.GetFixtureA().body.ptr;
							this.runCbOneParameter(e, i, this.endTriggerCbs), i = e.GetFixtureB().body.ptr, this.runCbOneParameter(e, i, this.endTriggerCbs)
						}
					}, i.Presolve = function(e, t) {
						if (this.onPresolve) {
							var i = e.GetFixtureA().body.ptr;
							this.runCbTowParameter(e, t, i, this.presolveCbs), i = e.GetFixtureB().body.ptr, this.runCbTowParameter(e, t, i, this.presolveCbs)
						}
					}, i.PostSolve = function(e, t) {
						if (this.onPostsolve) {
							var i = e.GetFixtureA().body.ptr;
							this.runCbTowParameter(e, t, i, this.postsolveCbs), i = e.GetFixtureB().body.ptr, this.runCbTowParameter(e, t, i, this.postsolveCbs)
						}
					}, e
				}();
				! function(e) {
					e[e.b2_staticBody = 0] = "b2_staticBody", e[e.b2_kinematicBody = 1] = "b2_kinematicBody", e[e.b2_dynamicBody = 2] = "b2_dynamicBody"
				}(o || (o = e("LiquidBodyType", {}))),
				function(e) {
					e[e.box = 0] = "box", e[e.circle = 1] = "circle", e[e.ploygon = 2] = "ploygon", e[e.chain = 3] = "chain"
				}(a || (a = e("LiquidColliderType", {}))),
				function(e) {
					e[e.b2_waterParticle = 0] = "b2_waterParticle", e[e.b2_zombieParticle = 2] = "b2_zombieParticle", e[e.b2_wallParticle = 4] = "b2_wallParticle", e[e.b2_springParticle = 8] = "b2_springParticle", e[e.b2_elasticParticle = 16] = "b2_elasticParticle", e[e.b2_viscousParticle = 32] = "b2_viscousParticle", e[e.b2_powderParticle = 64] = "b2_powderParticle", e[e.b2_tensileParticle = 128] = "b2_tensileParticle", e[e.b2_colorMixingParticle = 256] = "b2_colorMixingParticle", e[e.b2_destructionListenerParticle = 512] = "b2_destructionListenerParticle", e[e.b2_barrierParticle = 1024] = "b2_barrierParticle", e[e.b2_staticPressureParticle = 2048] = "b2_staticPressureParticle", e[e.b2_reactiveParticle = 4096] = "b2_reactiveParticle", e[e.b2_repulsiveParticle = 8192] = "b2_repulsiveParticle", e[e.b2_fixtureContactListenerParticle = 16384] = "b2_fixtureContactListenerParticle", e[e.b2_particleContactListenerParticle = 32768] = "b2_particleContactListenerParticle", e[e.b2_fixtureContactFilterParticle = 65536] = "b2_fixtureContactFilterParticle", e[e.b2_particleContactFilterParticle = 131072] = "b2_particleContactFilterParticle"
				}(s || (s = e("LiquidParticleFlag", {}))),
				function(e) {
					e[e.b2_solidParticleGroup = 1] = "b2_solidParticleGroup", e[e.b2_rigidParticleGroup = 2] = "b2_rigidParticleGroup", e[e.b2_particleGroupCanBeEmpty = 4] = "b2_particleGroupCanBeEmpty", e[e.b2_particleGroupWillBeDestroyed = 8] = "b2_particleGroupWillBeDestroyed", e[e.b2_particleGroupNeedsUpdateDepth = 16] = "b2_particleGroupNeedsUpdateDepth", e[e.b2_particleGroupInternalMask = 24] = "b2_particleGroupInternalMask"
				}(r || (r = e("LiquidParticleGroupFlag", {}))), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/CommonEvent.ts", ["cc"], function(e) {
		"use strict";
		var t;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}],
			execute: function() {
				var i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g, y, b, S, C;
				e("CommonEvent", void 0), t._RF.push({}, "2f11fjQKy5OeaGwo994lTDQ", "CommonEvent", void 0), n = i || (i = e("CommonEvent", {})),
					function(e) {
						e[e.startIndex = 1e3] = "startIndex", e[e.enterLobby = 1001] = "enterLobby", e[e.hideGameLobby = 1002] = "hideGameLobby", e[e.chooseLevelItem = 1003] = "chooseLevelItem", e[e.enterLevel = 1004] = "enterLevel", e[e.exitLevel = 1005] = "exitLevel", e[e.playerWin = 1006] = "playerWin", e[e.playerLose = 1007] = "playerLose", e[e.pauseLevel = 1008] = "pauseLevel", e[e.resumeLevel = 1009] = "resumeLevel", e[e.matchPlayerFinish = 1010] = "matchPlayerFinish", e[e.chooseTrySkinFinish = 1011] = "chooseTrySkinFinish", e[e.enterFightScene = 1012] = "enterFightScene", e[e.enterFightLoading = 1013] = "enterFightLoading"
					}(o || (o = {})), n.DirectorEvent = o,
					function(e) {
						e[e.startIndex = 2e3] = "startIndex", e[e.showProgress = 2001] = "showProgress", e[e.hideProgress = 2002] = "hideProgress", e[e.updateProgress = 2003] = "updateProgress", e[e.levelItemLoadStart = 2004] = "levelItemLoadStart", e[e.levelItemLoadFinish = 2005] = "levelItemLoadFinish", e[e.showLoadTip = 2006] = "showLoadTip", e[e.hideLoadTip = 2007] = "hideLoadTip"
					}(a || (a = {})), n.LoadAssetEvent = a,
					function(e) {
						e[e.startIndex = 3e3] = "startIndex", e[e.dataLoaded = 3001] = "dataLoaded", e[e.updatePlayerData = 3002] = "updatePlayerData", e[e.playerDataChanged = 3003] = "playerDataChanged", e[e.trySkinEnd = 3004] = "trySkinEnd"
					}(s || (s = {})), n.PlayerDataEvent = s,
					function(e) {
						e[e.startIndex = 4e3] = "startIndex", e[e.inited = 4001] = "inited", e[e.showMsg = 4002] = "showMsg", e[e.showVideo = 4003] = "showVideo", e[e.showVideoTipContinue = 4004] = "showVideoTipContinue", e[e.showVideoTipCancel = 4005] = "showVideoTipCancel", e[e.showBanner = 4006] = "showBanner", e[e.hideBanner = 4007] = "hideBanner", e[e.showBannerFinish = 4008] = "showBannerFinish", e[e.showBannerSuccess = 4009] = "showBannerSuccess", e[e.showBannerFail = 4010] = "showBannerFail", e[e.bannerResize = 4011] = "bannerResize", e[e.checkVisibleBanner = 4012] = "checkVisibleBanner", e[e.touchBanner = 4013] = "touchBanner", e[e.showInsertAd = 4014] = "showInsertAd", e[e.startRecord = 4015] = "startRecord", e[e.pauseRecord = 4016] = "pauseRecord", e[e.resumeRecord = 4017] = "resumeRecord", e[e.stopRecord = 4018] = "stopRecord", e[e.recordSaved = 4019] = "recordSaved", e[e.recordError = 4020] = "recordError", e[e.shareRecord = 4021] = "shareRecord", e[e.navigateToMiniProgram = 4022] = "navigateToMiniProgram", e[e.navigateSuccess = 4023] = "navigateSuccess", e[e.navigateFail = 4024] = "navigateFail", e[e.vibrateShort = 4025] = "vibrateShort", e[e.vibrateLong = 4026] = "vibrateLong", e[e.hide = 4027] = "hide", e[e.show = 4028] = "show", e[e.showInsertByPauseLevel = 4029] = "showInsertByPauseLevel", e[e.triggerGC = 4030] = "triggerGC", e[e.showNativeAd = 4031] = "showNativeAd", e[e.hideNativeAd = 4032] = "hideNativeAd", e[e.hideAllNativeAd = 4033] = "hideAllNativeAd", e[e.quickShowNativeAd = 4034] = "quickShowNativeAd", e[e.quickHideNativeAd = 4035] = "quickHideNativeAd", e[e.showNativeAdSuccess = 4036] = "showNativeAdSuccess", e[e.hideNativeAdSuccess = 4037] = "hideNativeAdSuccess", e[e.playerClickedNativeAd = 4038] = "playerClickedNativeAd", e[e.playerClosedNativeAd = 4039] = "playerClosedNativeAd", e[e.shareToFriends = 4040] = "shareToFriends", e[e.callJSVideoSuccess = 4041] = "callJSVideoSuccess", e[e.callJSVideoFail = 4042] = "callJSVideoFail", e[e.callJSVideoError = 4043] = "callJSVideoError", e[e.callJSFullVideoSuccess = 4044] = "callJSFullVideoSuccess", e[e.callJSFullVideoFail = 4045] = "callJSFullVideoFail", e[e.callJSFullVideoError = 4046] = "callJSFullVideoError", e[e.showAppBox = 4047] = "showAppBox", e[e.showBlockAd = 4048] = "showBlockAd", e[e.hideBlockAd = 4049] = "hideBlockAd", e[e.subscribeMsg = 4050] = "subscribeMsg", e[e.addColorSign = 4051] = "addColorSign", e[e.getTableIconState = 4052] = "getTableIconState", e[e.addTableIcon = 4053] = "addTableIcon"
					}(r || (r = {})), n.SDKEvent = r,
					function(e) {
						e[e.startIndex = 5e3] = "startIndex", e[e.playGoldAnim = 5001] = "playGoldAnim", e[e.goldAnimPlayFinish = 5002] = "goldAnimPlayFinish", e[e.playZuanShiAnim = 5003] = "playZuanShiAnim", e[e.zuanShiAnimPlayFinish = 5004] = "zuanShiAnimPlayFinish", e[e.showTip = 5005] = "showTip", e[e.hideTip = 5006] = "hideTip", e[e.showTouchMask = 5007] = "showTouchMask", e[e.hideTouchMask = 5008] = "hideTouchMask", e[e.enter = 5009] = "enter", e[e.entered = 5010] = "entered", e[e.exit = 5011] = "exit", e[e.exited = 5012] = "exited", e[e.touchBannerFinish = 5013] = "touchBannerFinish", e[e.enterLoadLvUI = 5014] = "enterLoadLvUI", e[e.exitLoadLvUI = 5015] = "exitLoadLvUI", e[e.exitShareVideoUI = 5016] = "exitShareVideoUI"
					}(u || (u = {})), n.UIEvent = u,
					function(e) {
						e[e.startIndex = 6e3] = "startIndex", e[e.playBGM = 6001] = "playBGM", e[e.playEffect = 6002] = "playEffect", e[e.stopEffect = 6003] = "stopEffect", e[e.playClickBtn = 6004] = "playClickBtn", e[e.stopBGM = 6005] = "stopBGM", e[e.changeConfig = 6006] = "changeConfig", e[e.pause = 6007] = "pause", e[e.resume = 6008] = "resume"
					}(c || (c = {})), n.AudioEvent = c,
					function(e) {
						e[e.startIndex = 7e3] = "startIndex", e[e.levelStart = 7001] = "levelStart", e[e.levelWin = 7002] = "levelWin", e[e.levelLose = 7003] = "levelLose", e[e.levelExit = 7004] = "levelExit", e[e.sendEvent = 7005] = "sendEvent", e[e.enterGameFlow = 7006] = "enterGameFlow", e[e.enterRecommendFlow = 7007] = "enterRecommendFlow", e[e.clickGame = 7008] = "clickGame", e[e.jumpGame = 7009] = "jumpGame", e[e.touchBanner = 7010] = "touchBanner"
					}(l || (l = {})), n.ALDEvent = l,
					function(e) {
						e[e.startIndex = 8e3] = "startIndex", e[e.assetLoadFinish = 8001] = "assetLoadFinish", e[e.clickRecommendItem = 8002] = "clickRecommendItem", e[e.clickBtnRecommend_TT = 8003] = "clickBtnRecommend_TT", e[e.showRecommend = 8004] = "showRecommend", e[e.hideRecommend = 8005] = "hideRecommend", e[e.showInsteadBannerRecommend = 8006] = "showInsteadBannerRecommend", e[e.autoNavigate = 8007] = "autoNavigate", e[e.showLittlePage = 8008] = "showLittlePage", e[e.showMiddlePage = 8009] = "showMiddlePage", e[e.showBigPage = 8010] = "showBigPage", e[e.showRecommendDialog = 8011] = "showRecommendDialog", e[e.closeLittlePage = 8012] = "closeLittlePage", e[e.closeMiddlePage = 8013] = "closeMiddlePage", e[e.closeBigPage = 8014] = "closeBigPage", e[e.closeRecommendDialog = 8015] = "closeRecommendDialog", e[e.showSingleRecommend = 8016] = "showSingleRecommend", e[e.hideSingleRecommend = 8017] = "hideSingleRecommend", e[e.openDrawer = 8018] = "openDrawer", e[e.drawerStartOpen = 8019] = "drawerStartOpen", e[e.drawerOpened = 8020] = "drawerOpened", e[e.closeDrawer = 8021] = "closeDrawer", e[e.drawerStartClose = 8022] = "drawerStartClose", e[e.drawerClosed = 8023] = "drawerClosed"
					}(d || (d = {})), n.RecommendEvent = d,
					function(e) {
						e[e.startIndex = 9e3] = "startIndex", e[e.powerChanged = 9001] = "powerChanged", e[e.powerUnEnough = 9002] = "powerUnEnough", e[e.consumePower = 9003] = "consumePower", e[e.getPower = 9004] = "getPower"
					}(h || (h = {})), n.AssetEvent = h,
					function(e) {
						e[e.startIndex = 1e4] = "startIndex", e[e.loadConfigSuccess = 10001] = "loadConfigSuccess", e[e.changeScene = 10002] = "changeScene", e[e.closeFullRecommend = 10003] = "closeFullRecommend", e[e.onBtnFadeExit = 10004] = "onBtnFadeExit"
					}(p || (p = {})), n.AdvertSwitchEvent = p,
					function(e) {
						e[e.startIndex = 11e3] = "startIndex",
							e[e.ctrlStart = 11001] = "ctrlStart", e[e.ctrlEnd = 11002] = "ctrlEnd", e[e.touchStart = 11003] = "touchStart", e[e.touchMove = 11004] = "touchMove", e[e.touchEnd = 11005] = "touchEnd", e[e.touchStay = 11006] = "touchStay", e[e.btnTouchStart = 11007] = "btnTouchStart", e[e.btnTouchStay = 11008] = "btnTouchStay", e[e.btnTouchEnd = 11009] = "btnTouchEnd", e[e.btnTouchMove = 11010] = "btnTouchMove", e[e.btnTouchCancel = 11011] = "btnTouchCancel"
					}(f || (f = {})), n.CtrlEvent = f,
					function(e) {
						e[e.startIndex = 12e3] = "startIndex", e[e.chooseItem = 12001] = "chooseItem", e[e.changeDisplayItem = 12002] = "changeDisplayItem"
					}(m || (m = {})), n.ShopEvent = m,
					function(e) {
						e[e.startIndex = 13e3] = "startIndex", e[e.showMoreGameByBanner = 13001] = "showMoreGameByBanner", e[e.showMoreGameByIcon = 13002] = "showMoreGameByIcon", e[e.showMoreGame = 13003] = "showMoreGame", e[e.showMoreGameSide = 13004] = "showMoreGameSide", e[e.showMoreGameMiddle = 13005] = "showMoreGameMiddle"
					}(v || (v = {})), n.LeYouRecommend = v,
					function(e) {
						e[e.startIndex = 14e3] = "startIndex", e[e.appOnce = 14001] = "appOnce", e[e.sharedOut = 14002] = "sharedOut", e[e.sharedIn = 14003] = "sharedIn", e[e.video = 14004] = "video", e[e.levelUp = 14005] = "levelUp", e[e.task = 14006] = "task", e[e.action = 14007] = "action", e[e.pay = 14008] = "pay", e[e.money = 14009] = "money", e[e.item = 14010] = "item", e[e.battle = 14011] = "battle", e[e.equip = 14012] = "equip", e[e.equipLevel = 14013] = "equipLevel", e[e.equipDegree = 14014] = "equipDegree", e[e.equipPlayWay = 14015] = "equipPlayWay", e[e.event = 14016] = "event", e[e.clear = 14017] = "clear", e[e.error = 14018] = "error", e[e.unlockSkin = 14019] = "unlockSkin"
					}(g || (g = {})), n.TongJi = g,
					function(e) {
						e[e.startIndex = 15e3] = "startIndex", e[e.showFullScreenIcon = 15001] = "showFullScreenIcon", e[e.showYouziGameCollectionPage = 15002] = "showYouziGameCollectionPage"
					}(y || (y = {})), n.YouZiRecommend = y,
					function(e) {
						e[e.startIndex = 16e3] = "startIndex", e[e.loadConfigFinish = 16001] = "loadConfigFinish", e[e.enterGameFlow = 16002] = "enterGameFlow", e[e.enterLevel = 16003] = "enterLevel", e[e.navigateFail = 16004] = "navigateFail", e[e.endFirstFlow = 16005] = "endFirstFlow", e[e.showInitScene_RecommendDialog = 16006] = "showInitScene_RecommendDialog"
					}(b || (b = {})), n.GameFlow = b,
					function(e) {
						e[e.startIndex = 17e3] = "startIndex", e[e.showMoreGame = 17001] = "showMoreGame", e[e.initAdNode = 17002] = "initAdNode", e[e.showGameNativeAd = 17003] = "showGameNativeAd", e[e.hideGameNativeAd = 17004] = "hideGameNativeAd", e[e.showFinishNativeAd = 17005] = "showFinishNativeAd", e[e.hideFinishNativeAd = 17006] = "hideFinishNativeAd", e[e.showFinishGameBannerAd = 17007] = "showFinishGameBannerAd", e[e.hideFinishGameBannerAd = 17008] = "hideFinishGameBannerAd", e[e.clickNativeAd = 17009] = "clickNativeAd", e[e.NativeLoadFinished = 17010] = "NativeLoadFinished", e[e.CloseGame = 17011] = "CloseGame"
					}(S || (S = {})), n.HeyGameSDK = S,
					function(e) {
						e[e.startIndex = 18e3] = "startIndex", e[e.startTeach = 18001] = "startTeach", e[e.enterNextTeach = 18002] = "enterNextTeach", e[e.enterTeachStepById = 18003] = "enterTeachStepById", e[e.teachFinish = 18004] = "teachFinish"
					}(C || (C = {})), n.TeachEvents = C, t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/HeyGameGlobalData.ts", ["cc"], function(e) {
		"use strict";
		var t;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}],
			execute: function() {
				t._RF.push({}, "34ac1XPM+5PZ4UflNDQwV8s", "HeyGameGlobalData", void 0), e("NATIVE_AD_TYPE", {
					GAME: 0,
					FINISH: 1,
					LIST_ITEM_AD: 2
				}), e("NATIVE_AD_STYLE", {
					BIG_AD: 0,
					BANNER_AD: 1
				}), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/PCSDK.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./GameEventType.ts", "./SDK.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r;
		return {
			setters: [function(e) {
				t = e.inheritsLoose, i = e.defineProperty, n = e.assertThisInitialized
			}, function(e) {
				o = e.cclegacy
			}, function(e) {
				a = e.default
			}, function(e) {
				s = e.EventType
			}, function(e) {
				r = e.default
			}],
			execute: function() {
				o._RF.push({}, "3fdc4pjSqdOkJDbU+zjWyof", "PCSDK", void 0), e("default", function(e) {
					function o() {
						for (var t, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
						return t = e.call.apply(e, [this].concat(a)) || this, i(n(t), "apiName", "h5api"), t
					}
					t(o, e);
					var r = o.prototype;
					return r.init = function() {
						console.log("PCSDK init"), this.api = window[this.apiName], a.emit(s.Common.SDKEvent.inited)
					}, r.canPlayAd = function() {
						return this.api.canPlayAd(function(e) {
							console.log("是否可播放广告", e.canPlayAd, "剩余次数", e.remain)
						})
					}, r.showVideoAd = function() {
						var e = this;
						this.canPlayAd(), this.api.playAd(function(t) {
							console.log("代码:" + t.code + ",消息:" + t.message), 1e4 === t.code ? console.log("开始播放") : 10001 === t.code ? (console.log("播放结束"), e.onVideoSuccess()) : (e.onVideoQuit(), e.onVideoHide(), console.log("广告异常"))
						})
					}, o
				}(r)), o._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/QuadTree.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n;
		return {
			setters: [function(e) {
				t = e.createClass, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy
			}],
			execute: function() {
				n._RF.push({}, "43bf5BZXwRCzqVefPMTNHWw", "QuadTree", void 0), e("default", function() {
					function e(e, t, n, o, a, s) {
						i(this, "root", null), i(this, "maxDepth", 7), i(this, "maxCount", 10), this.init(e, t, n, o, a, s)
					}
					var t = e.prototype;
					return t.init = function(e, t, i, n, o, a) {
						o && o > 0 && (this.maxDepth = o), a && a > 0 && (this.maxCount = a), this.root ? (this.root.reset(), this.root.set(e, t, i, n, this.maxDepth, this.maxCount)) : this.root = r.get(e, t, i, n, this.maxDepth, this.maxCount)
					}, t.createChildren = function(e) {
						(void 0 === e || e < 0 || e > this.maxDepth) && (e = this.maxDepth), this.root.splitTo(e)
					}, t.reset = function() {
						this.root && this.root.reset()
					}, t.removeObj = function(e, t) {
						if (void 0 === t) {
							var i = e[a];
							if (i && i > 0) {
								var n = u[t];
								if (n) return void n.removeObj(e)
							}
						} else {
							var o = u[t];
							if (o) return void o.removeObj(e)
						}
						this.root.removeObj(e)
					}, t.insertObj = function(e) {
						return this.root.insertObj(e)
					}, t.getObjs = function(e) {
						var t = [],
							i = s.getObjRect(e);
						return this.root.getObjs(i, t), t
					}, t.getObjsByAABB = function(e) {
						var t = [];
						return this.root.getObjs(e, t), t
					}, e
				}());
				var o, a = e("treeNodeId", "treeNodeId"),
					s = e("TreeNode", function() {
						function e(t, n, o, a, s, r, c) {
							i(this, "_id", void 0), i(this, "parent", null), i(this, "children", null), i(this, "objs", void 0), i(this, "xMin", void 0), i(this, "xMax", void 0), i(this, "zMin", void 0), i(this, "zMax", void 0), i(this, "centerX", void 0), i(this, "centerY", void 0), i(this, "depth", void 0), i(this, "count", void 0), i(this, "maxDepth", 7), i(this, "maxCount", 10), this._id = e._autoId++, u[this.Id] = this, this.set(t, n, o, a, s, r, c)
						}
						var n = e.prototype;
						return n.set = function(e, t, i, n, o, a, s) {
							this.xMin = e, this.xMax = t, this.zMin = i, this.zMax = n, this.centerX = .5 * (this.xMin + this.xMax), this.centerY = .5 * (this.zMin + this.zMax), this.maxDepth = o, this.maxCount = a, this.objs = [], this.count = 0, this.parent = s, this.depth = s ? s.depth + 1 : 0
						}, n.splitTo = function(e) {
							if (!(this.depth >= e)) {
								this.createChildren();
								for (var t = this.children.length - 1; t >= 0; --t) this.children[t].splitTo(e)
							}
						}, n.split = function() {
							this.createChildren();
							var t = this.objs;
							this.objs = [], this.count = 0;
							for (var i = t.length - 1; i >= 0; --i) {
								var n = t[i],
									a = e.getObjRect(n),
									s = this.getArea(a);
								s != o.self ? this.children[s].insertIntoSelf(n) : this.insertIntoSelf(n)
							}
							this.count = this.objs.length
						}, n.createChildren = function() {
							if (!this.children) {
								var e = this.centerX,
									t = this.centerY;
								this.children = [], this.children[o.area0] = r.get(e, this.xMax, t, this.zMax, this.maxDepth, this.maxCount, this), this.children[o.area1] = r.get(this.xMin, e, t, this.zMax, this.maxDepth, this.maxCount, this), this.children[o.area2] = r.get(this.xMin, e, this.zMin, t, this.maxDepth, this.maxCount, this), this.children[o.area3] = r.get(e, this.xMax, this.zMin, t, this.maxDepth, this.maxCount, this)
							}
						}, n.removeObj = function(t) {
							var i = e.getObjRect(t);
							if (this.children) {
								var n = this.getArea(i);
								n == o.self ? this.removeFromSelf(t) : this.children[n].removeObj(t)
							} else this.removeFromSelf(t)
						}, n.removeFromSelf = function(e) {
							var t = this.objs.indexOf(e);
							t >= 0 && (this.objs.splice(t, 1), this.count--, e[a] = -1)
						}, n.insertObj = function(e) {
							return this.children ? this.insertIntoChildren(e) : this.objs.length < this.maxCount || this.depth >= this.maxDepth ? this.insertIntoSelf(e) : (this.split(), this.insertIntoChildren(e))
						}, n.insertIntoChildren = function(t) {
							var i = e.getObjRect(t),
								n = this.getArea(i);
							return n != o.self ? this.children[n].insertObj(t) : this.insertIntoSelf(t)
						}, n.getArea = function(e) {
							if (!this.children) return o.self;
							if (e.xMin >= this.centerX) {
								if (e.zMin >= this.centerY) return o.area0;
								if (e.zMax <= this.centerY) return o.area3
							} else if (e.xMax <= this.centerX) {
								if (e.zMin >= this.centerY) return o.area1;
								if (e.zMax <= this.centerY) return o.area2
							}
							return o.self
						}, n.insertIntoSelf = function(e) {
							return this.objs.push(e), this.count++, e[a] = this.Id, this.Id
						}, e.contain = function(e, t) {
							return e.xMin <= t.xMin && e.xMax >= t.xMax && e.zMin <= t.zMin && e.zMax >= t.zMax
						}, e.getObjRect = function(e) {
							return e.getAABB()
						}, n.getObjs = function(t, i) {
							if (e.cross(t, this)) {
								for (var n = this.count - 1; n >= 0; --n) i.push(this.objs[n]);
								if (this.children) {
									var a = this.getArea(t);
									if (a == o.self)
										for (var s = this.children.length - 1; s >= 0; --s) this.children[s].getObjs(t, i);
									else this.children[a].getObjs(t, i)
								}
							}
						}, e.cross = function(e, t) {
							return e.xMin <= t.xMax && e.xMax >= t.xMin && e.zMin <= t.zMax && e.zMax >= t.zMin
						}, n.reset = function() {
							this.parent = null;
							for (var e = this.objs.length - 1; e >= 0; --e) this.objs[e][a] = -1;
							if (this.objs = [], this.count = 0, this.depth = 0, this.children) {
								var t = this.children;
								this.children = null;
								for (var i = t.length - 1; i >= 0; --i) r.put(t[i])
							}
						}, t(e, [{
							key: "Id",
							get: function() {
								return this._id
							}
						}]), e
					}());
				i(s, "_autoId", 1),
					function(e) {
						e[e.area0 = 0] = "area0", e[e.area1 = 1] = "area1", e[e.area2 = 2] = "area2", e[e.area3 = 3] = "area3", e[e.self = 4] = "self"
					}(o || (o = {}));
				var r = function() {
					function e() {}
					return e.get = function(e, t, i, n, o, a, r) {
						if (this.nodes.length > 0) {
							var u = this.nodes.pop();
							return u.set(e, t, i, n, o, a, r), u
						}
						return new s(e, t, i, n, o, a, r)
					}, e.put = function(e) {
						e.reset(), this.nodes.push(e)
					}, e
				}();
				i(r, "nodes", []);
				var u = {};
				n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/Init.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./EventManager.ts", "./GameEventType.ts", "./GamePlatformType.ts", "./PlayerData.ts", "./Loader.ts", "./GamePlatform.ts", "./GamePlatformConfig.ts", "./GlobalData.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g, y, b, S, C, w, A, T, x;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty
			}, function(e) {
				s = e.cclegacy, r = e.Enum, u = e.Node, c = e.ProgressBar, l = e._decorator, d = e.macro, h = e.dynamicAtlasManager, p = e.UITransform, f = e.game, m = e.director, v = e.Component
			}, function(e) {
				g = e.GlobalEnum
			}, function(e) {
				y = e.default
			}, function(e) {
				b = e.EventType
			}, function(e) {
				S = e.GamePlatformType
			}, function(e) {
				C = e.default
			}, function(e) {
				w = e.default
			}, function(e) {
				A = e.default
			}, function(e) {
				T = e.default
			}, function(e) {
				x = e.default
			}],
			execute: function() {
				var P, D, B, k, _, E, I, G;
				s._RF.push({}, "4805ccI48pCd6oESz6VFiBg", "Init", void 0);
				var M = l,
					R = M.ccclass,
					L = M.property;
				e("default", (P = L({
					type: r(S)
				}), D = L(u), B = L(c), R((E = t((_ = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "type", E, o(t)), n(o(t), "platformConfig", I, o(t)), n(o(t), "barProgress", G, o(t)), a(o(t), "preRate", 0), a(o(t), "preBundleList", ["UI", "LevelScene", "Audio"]), a(o(t), "necessaryBundleList", ["HeyGameSDK", "MainScene", "Common"]), a(o(t), "bundleLoadState", {}), a(o(t), "animFinished", !1), a(o(t), "playerDataLoaded", !1), t
					}
					i(t, e);
					var s = t.prototype;
					return s.onLoad = function() {
						d.CLEANUP_IMAGE_CACHE = !1, h.enabled = !1;
						var e = Date.now();
						13 == e.toString().length && (e = Math.floor(.001 * e)), x.set(g.Common.GlobalDataType.enterGameTime, e)
					}, s.start = function() {
						var e = this.node;
						x.set(g.Common.GlobalDataType.canvas, e);
						var t = e.getComponent(p);
						x.set(g.Common.GlobalDataType.canvasTransform, t), this.initProgressBar(), this.onEvents(), f.addPersistRootNode(this.platformConfig);
						var i = this.findConfig();
						A.init(i), this.loadBundle(), this.playAnim()
					}, s.onEvents = function() {
						y.on(b.Common.LoadAssetEvent.updateProgress, this.onUpdateProgress, this), y.once(b.Common.SDKEvent.inited, this.onSDKInited, this), y.once(b.Common.PlayerDataEvent.dataLoaded, this.onPlayerDataLoaded, this)
					}, s.offEvents = function() {
						y.off(b.Common.LoadAssetEvent.updateProgress, this.onUpdateProgress, this)
					}, s.findConfig = function() {
						for (var e = this.platformConfig.children, t = e.length - 1; t >= 0; --t) {
							var i = e[t].getComponent(T);
							if (i.type == this.type) return i;
							var n = e[t];
							n.removeFromParent(), n.destroy()
						}
						return console.error("没有设置对应平台的配置！"), null
					}, s.initProgressBar = function() {
						this.barProgress.progress = 0, this.preRate = 0
					}, s.onUpdateProgress = function(e) {
						e > this.preRate && (this.barProgress.progress = e, this.preRate = e)
					}, s.loadBundle = function() {
						for (var e = this, t = function(t) {
								w.loadSubpackage(e.necessaryBundleList[t], function() {
									e.loadOneSubpackage(e.necessaryBundleList[t])
								}, !0)
							}, i = 0; i < this.necessaryBundleList.length; ++i) t(i);
						for (var n = 0, o = this.preBundleList.length; n < o; ++n) w.loadBundle(this.preBundleList[n], null, !1, !1)
					}, s.loadOneSubpackage = function(e) {
						this.bundleLoadState[e] = !0, this.loadMainScene()
					}, s.playAnim = function() {
						this.animFinished = !1, this.onAnimFinish()
					}, s.onAnimFinish = function() {
						console.log("动画播放完成"), this.animFinished = !0, this.loadMainScene()
					}, s.onSDKInited = function() {
						C.init()
					}, s.onPlayerDataLoaded = function() {
						this.playerDataLoaded = !0, this.loadMainScene()
					}, s.loadMainScene = function() {
						var e = this;
						if (this.animFinished && this.necessaryBundleList) {
							for (var t = this.necessaryBundleList.length - 1; t >= 0; --t)
								if (!this.bundleLoadState[this.necessaryBundleList[t]]) return;
							w.loadBundleScene("MainScene", "MainScene", function(t) {
								e.offEvents(), m.runScene(t)
							}, !1)
						}
					}, s.test = function() {}, t
				}(v)).prototype, "type", [P], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return S.PC
					}
				}), I = t(_.prototype, "platformConfig", [D], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), G = t(_.prototype, "barProgress", [B], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), k = _)) || k)), s._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/UIStayAnimations.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.defineProperty, o = e.assertThisInitialized, a = e.initializerDefineProperty
			}, function(e) {
				s = e.cclegacy, r = e._decorator, u = e.Enum, c = e.v3, l = e.Tween, d = e.Widget, h = e.tween, p = e.Component
			}],
			execute: function() {
				var f, m, v, g, y, b, S, C, w, A, T, x, P, D, B, k, _, E, I;
				s._RF.push({}, "487dfzEkPxNI6vf8xTv0Qm1", "UIStayAnimations", void 0);
				var G, M, R = r.ccclass,
					L = r.property;
				! function(e) {
					e[e.None = 0] = "None", e[e.LoopScale = 1] = "LoopScale", e[e.FloatPos = 2] = "FloatPos"
				}(G || (G = {})),
				function(e) {
					e[e.SineIn = 0] = "SineIn", e[e.SineOut = 1] = "SineOut", e[e.SineInOut = 2] = "SineInOut", e[e.BackIn = 3] = "BackIn", e[e.BackOut = 4] = "BackOut", e[e.BackInOut = 5] = "BackInOut"
				}(M || (M = {})), e("UIStayAnimations", (f = R("UIStayAnimations"), m = L({
					type: u(G)
				}), v = L({
					displayName: "单循环时间",
					visible: function() {
						return this.animType == G.LoopScale
					}
				}), g = L({
					displayName: "缩放大小",
					visible: function() {
						return this.animType == G.LoopScale
					}
				}), y = L({
					displayName: "单循环时间",
					visible: function() {
						return this.animType == G.FloatPos
					}
				}), b = L({
					displayName: "向上浮动距离",
					visible: function() {
						return this.animType == G.FloatPos
					}
				}), S = L({
					displayName: "使用缩放缓动动画",
					visible: function() {
						return this.animType == G.LoopScale
					}
				}), C = L({
					type: u(M),
					displayName: "缩小动画类型",
					visible: function() {
						return this.animType == G.LoopScale && this.useScaleAnim || this.animType == G.FloatPos
					}
				}), w = L({
					type: u(M),
					displayName: "放大动画类型",
					visible: function() {
						return this.animType == G.LoopScale && this.useScaleAnim || this.animType == G.FloatPos
					}
				}), f((x = t((T = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "_isAutoShow", !1), a(o(t), "animType", x, o(t)), a(o(t), "scaleTime", P, o(t)), a(o(t), "scaleRate", D, o(t)), a(o(t), "floatTime", B, o(t)), a(o(t), "floatDist", k, o(t)), a(o(t), "useScaleAnim", _, o(t)), a(o(t), "scaleInType", E, o(t)), a(o(t), "scaleOutType", I, o(t)), n(o(t), "_cfg", ["sineIn", "sineOut", "sineInOut", "backIn", "backOut", "backInOut"]), n(o(t), "_initPos", c()), n(o(t), "_initScale", c()), n(o(t), "_initAng", c()), n(o(t), "_pos", c()), n(o(t), "_scale", c()), n(o(t), "_ang", c()), n(o(t), "_isScaleAnim", !1), n(o(t), "_isFloadtAnim", !1), t
					}
					i(t, e);
					var s = t.prototype;
					return s.onLoad = function() {
						var e = this.node.getComponent("UIAnimtions");
						this._isAutoShow = !1, (null == e || e && !e.enabled) && (this._isAutoShow = !0), this._initPos.set(this.node.position), this._initScale.set(this.node.scale), this._initAng.set(this.node.eulerAngles)
					}, s.onEnable = function() {
						this.resetAnim(), this._isAutoShow && this.showAnim()
					}, s.resetAnim = function() {
						l.stopAllByTarget(this._pos), l.stopAllByTarget(this._scale), l.stopAllByTarget(this._ang), this._isScaleAnim = !1, this._isFloadtAnim = !1
					}, s.showAnim = function() {
						if (this.animType != G.None) {
							var e = this.node.getComponent(d);
							switch (e && (e.enabled = !1), this.animType) {
								case G.LoopScale:
									this.loopScaleStepAnim();
									break;
								case G.FloatPos:
									this.floatPosAnim()
							}
						}
					}, s.loopScaleStepAnim = function() {
						var e = this;
						l.stopAllByTarget(this._scale), this._scale.set(this.node.scale);
						var t = Math.abs(this.node.scale.x - 1) * this.scaleTime;
						t >= .03 ? h(this._scale).to(t, {
							x: 1,
							y: 1,
							z: 1
						}).call(function() {
							e.loopScaleAnim()
						}).start() : this.loopScaleAnim()
					}, s.loopScaleAnim = function() {
						l.stopAllByTarget(this._scale), this._isScaleAnim = !0;
						var e = 1 - this.scaleRate;
						if (this.useScaleAnim) {
							var t = this._cfg[this.scaleInType],
								i = this._cfg[this.scaleInType];
							h(this._scale).repeatForever(h(this._scale).to(this.scaleTime / 2, {
								x: e,
								y: e,
								z: e
							}, {
								easing: t
							}).to(this.scaleTime / 2, {
								x: 1,
								y: 1,
								z: 1
							}, {
								easing: i
							}).start()).start()
						} else h(this._scale).repeatForever(h(this._scale).to(this.scaleTime / 2, {
							x: e,
							y: e,
							z: e
						}).to(this.scaleTime / 2, {
							x: 1,
							y: 1,
							z: 1
						}).start()).start()
					}, s.floatPosAnim = function() {
						l.stopAllByTarget(this._pos), this._isFloadtAnim = !0, this._pos.set(this._initPos);
						var e = this._cfg[this.scaleInType],
							t = this._cfg[this.scaleInType];
						h(this._pos).repeatForever(h(this._pos).to(this.floatTime / 2, {
							y: this._initPos.y + this.floatDist
						}, {
							easing: e
						}).to(this.floatTime / 2, {
							y: this._initPos.y
						}, {
							easing: t
						}).start()).start()
					}, s.update = function(e) {
						this._isScaleAnim && this.node && this.node.setScale(this._scale), this._isFloadtAnim && this.node && this.node.setPosition(this._pos)
					}, t
				}(p)).prototype, "animType", [m], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return G.None
					}
				}), P = t(T.prototype, "scaleTime", [v], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 1
					}
				}), D = t(T.prototype, "scaleRate", [g], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return .2
					}
				}), B = t(T.prototype, "floatTime", [y], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 1
					}
				}), k = t(T.prototype, "floatDist", [b], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 20
					}
				}), _ = t(T.prototype, "useScaleAnim", [S], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return !1
					}
				}), E = t(T.prototype, "scaleInType", [C], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return M.SineIn
					}
				}), I = t(T.prototype, "scaleOutType", [w], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return M.SineIn
					}
				}), A = T)) || A)), s._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EditorMap.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./yyComponent.ts", "./EditorGeBan.ts", "./EditorRoom.ts", "./EditorTileContent.ts", "./EditorWall.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g, y, b, S;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty, s = e.createClass
			}, function(e) {
				r = e.cclegacy, u = e._decorator, c = e.CCInteger, l = e.Node, d = e.Graphics, h = e.instantiate, p = e.log
			}, function(e) {
				f = e.GlobalEnum
			}, function(e) {
				m = e.default
			}, function(e) {
				v = e.default
			}, function(e) {
				g = e.EditorGeBan
			}, function(e) {
				y = e.EditorRoom
			}, function(e) {
				b = e.EditorTileContent
			}, function(e) {
				S = e.EditorWall
			}],
			execute: function() {
				var C, w, A, T, x, P, D, B, k, _, E, I, G;
				r._RF.push({}, "5368epnIG5JbJpskRYgJxqF", "EditorMap", void 0);
				var M = u.ccclass,
					R = u.property;
				u.executeInEditMode, e("EditorMap", (C = M("EditorMap"), w = R({
					type: c,
					displayName: "地图编号"
				}), A = R(l), T = R(l), x = R({
					displayName: "绘制网格"
				}), P = R({
					displayName: "生成墙壁"
				}), D = R({
					displayName: "清除墙壁"
				}), B = R({
					displayName: "导出数据"
				}), C((E = t((_ = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "mapId", E, o(t)), n(o(t), "wallLayer", I, o(t)), n(o(t), "prefabWall", G, o(t)), a(o(t), "createdWall", !1), a(o(t), "wallMap", void 0), a(o(t), "doors", void 0), t
					}
					i(t, e);
					var r = t.prototype;
					return r.drawGrid = function() {
						var e = this.node.getComponentInChildren(d);
						if (e) {
							e.clear();
							for (var t = m.GameRule.mapScope, i = 10 * (t.xMax - t.xMin), n = 10 * (t.zMax - t.zMin), o = 10 * m.GameRule.tileSize.x, a = 0; a <= i; a += o) e.moveTo(a, 0), e.lineTo(a, n);
							for (var s = 0; s <= n; s += o) e.moveTo(0, s), e.lineTo(i, s);
							e.stroke()
						}
					}, r.createWalls = function() {
						for (var e = m.GameRule.mapScope, t = m.GameRule.tileSize, i = Math.floor(2 * (e.xMax - e.xMin) / t.x), n = {}, o = 0; o <= i; ++o) {
							n[o] = {};
							for (var a = 0; a <= i; ++a) n[o][a] = null
						}
						this.wallMap = n;
						for (var s = this.node.getComponentsInChildren(y), r = s.length - 1; r >= 0; --r) {
							var u = s[r];
							u.updateData();
							var c = u.dependTileWallPos;
							n[c.x][c.y] = 9
						}
						for (var l = this.node.getComponentsInChildren(g), d = l.length - 1; d >= 0; --d) {
							l[d].updateData();
							var h = l[d].tilePos;
							n[h.x][h.y] = 9
						}
						for (var p = s.length - 1; p >= 0; --p) this.onCreateRoomWall({
							p: s[p].tilePos,
							size: s[p].size
						})
					}, r.onCreateRoomWall = function(e) {
						for (var t = e.p.x, i = e.p.x + 2 * e.size.x, n = e.p.y, o = e.p.y + 2 * e.size.y, a = t + 1; a < i; a += 1)
							for (var s = n + 1; s < o; s += 1)
								if (null !== this.wallMap[a][s] && 2 !== this.wallMap[a][s]) {
									var r = this.wallMap[a][s].node;
									this.wallMap[a][s] = null, r.destroy()
								} this.addWallsH(t, i, o), this.addWallsH(t, i, n), this.addWallsV(t, n, o), this.addWallsV(i, n, o)
					}, r.addWallsH = function(e, t, i) {
						for (var n = m.GameRule.tileSize, o = e + 1; o < t; o += 2)
							if (null === this.wallMap[o][i]) {
								var a = h(this.prefabWall);
								this.wallLayer.addChild(a), a.setPosition(o * n.x * 5, i * n.z * 5, 0);
								var s = a.getComponent(S);
								this.wallMap[o][i] = s, s.chuiZhi = !1
							}
					}, r.addWallsV = function(e, t, i) {
						for (var n = m.GameRule.tileSize, o = t + 1; o < i; o += 2)
							if (null === this.wallMap[e][o]) {
								var a = h(this.prefabWall);
								this.wallLayer.addChild(a), a.setPosition(e * n.x * 5, o * n.z * 5, 0);
								var s = a.getComponent(S);
								this.wallMap[e][o] = s, s.chuiZhi = !0
							}
					}, r.recordWalls = function() {
						for (var e = this.wallLayer.getComponentsInChildren(S), t = {}, i = e.length - 1; i >= 0; --i) {
							var n = e[i],
								o = n.tilePos;
							t[o.x] || (t[o.x] = {}), t[o.x][o.y] = n.wallModel
						}
						return t
					}, r.resetWalls = function() {
						this.wallMap = {}, this.wallLayer.removeAllChildren()
					}, r.computeDoors = function() {
						this.wallMap, this.doors = {};
						for (var e = m.GameRule.mapScope, t = m.GameRule.tileSize, i = Math.floor(2 * (e.xMax - e.xMin) / t.x), n = 0; n <= i; ++n) this.doors[n] = [];
						for (var o = this.node.getComponentsInChildren(y), a = o.length - 1; a >= 0; --a) {
							var s = o[a],
								r = s.tilePos.x,
								u = s.tilePos.x + 2 * s.size.x,
								c = s.tilePos.y,
								l = s.tilePos.y + 2 * s.size.y;
							this.checkDoorsH(r, u, c), this.checkDoorsH(r, u, l), this.checkDoorsV(r, c, l), this.checkDoorsV(u, c, l)
						}
					}, r.checkDoorsH = function(e, t, i) {
						for (var n = e + 1; n <= t; n += 2) this.wallMap[n] && this.wallMap[n][i] && 9 !== this.wallMap[n][i] || !(this.doors[n].indexOf(i) < 0) || this.doors[n].push(i)
					}, r.checkDoorsV = function(e, t, i) {
						for (var n = t + 1; n <= i; n += 2) this.wallMap[e] && this.wallMap[e][n] && 9 !== this.wallMap[e][n] || !(this.doors[e].indexOf(n) < 0) || this.doors[e].push(n)
					}, r.computeData = function() {
						var e = {};
						e.id = this.mapId, e.playerEnterTile = this.computePlayerTilePos();
						for (var t = this.node.getComponentsInChildren(b), i = [], n = t.length - 1; n >= 0; --n) i.push(t[n].getData());
						for (var o = this.node.getComponentsInChildren(y), a = o.length - 1; a >= 0; --a) {
							var s = o[a].dependTile;
							if (0 != s.x || 0 != s.y) {
								var r = {
									tilePos: s,
									type: f.TileContentType.unlockRoom,
									unlockRoomMaxGold: o[a].unlockGold,
									unlockRoomRemainGold: o[a].unlockGold
								};
								i.push(r)
							}
						}
						for (var u in e.rooms = this.computeRoomData(i), e.doors = {}, this.doors) this.doors[u].length > 0 && (e.doors[u] = this.doors[u]);
						e.walls = this.recordWalls();
						var c = this.node.getComponentsInChildren(g);
						e.geBans = {};
						for (var l = c.length - 1; l >= 0; --l) {
							var d = c[l].tilePos;
							e.geBans[d.x] || (e.geBans[d.x] = []), e.geBans[d.x].push(d.y)
						}
						return p(JSON.stringify(e)), p(e), e
					}, r.computeRoomData = function(e) {
						for (var t = this.node.getComponentsInChildren(y), i = [], n = t.length - 1; n >= 0; --n) {
							var o = t[n],
								a = {
									dependTile: {
										x: o.dependTile.x,
										y: o.dependTile.y
									},
									p: {
										x: o.tilePos.x,
										y: o.tilePos.y
									},
									size: {
										x: o.size.x,
										y: o.size.y
									},
									tiles: {}
								};
							this.computeRoomTiles(a.p, a.size, e, a.tiles), i.push(a)
						}
						return i
					}, r.computeRoomTiles = function(e, t, i, n) {
						for (var o = e.x, a = e.x + 2 * t.x, s = e.y, r = e.y + 2 * t.y, u = i.length - 1; u >= 0; --u) {
							var c = i[u].tilePos;
							c.x >= o && c.x <= a && c.y >= s && c.y <= r && (n[c.x] || (n[c.x] = {}), n[c.x][c.y] = i[u], i.splice(u, 1))
						}
					}, r.computePlayerTilePos = function() {
						var e = this.node.getChildByName("Player").getPosition(),
							t = m.GameRule.tileSize,
							i = {};
						return i.x = Math.round(.2 * e.x / t.x), i.y = Math.round(.2 * e.y / t.z), i
					}, r.start = function() {
						for (var e = this.node.getComponentsInChildren(y), t = e.length - 1; t >= 0; --t) e[t].updateData();
						for (var i = this.node.getComponentsInChildren(g), n = i.length - 1; n >= 0; --n) i[n].updateData();
						this.wallMap = this.recordWalls(), this.createData = !0
					}, s(t, [{
						key: "draw",
						get: function() {
							return !1
						},
						set: function(e) {
							this.drawGrid()
						}
					}, {
						key: "createWall",
						get: function() {
							return this.createdWall
						},
						set: function(e) {
							0 == this.wallLayer.children.length && this.createWalls()
						}
					}, {
						key: "clearWall",
						get: function() {
							return !1
						},
						set: function(e) {
							this.resetWalls()
						}
					}, {
						key: "createData",
						get: function() {
							return !1
						},
						set: function(e) {
							p("导出数据"), this.computeDoors(), this.computeData()
						}
					}]), t
				}(v)).prototype, "mapId", [w], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 1
					}
				}), I = t(_.prototype, "wallLayer", [A], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), G = t(_.prototype, "prefabWall", [T], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), t(_.prototype, "draw", [x], Object.getOwnPropertyDescriptor(_.prototype, "draw"), _.prototype), t(_.prototype, "createWall", [P], Object.getOwnPropertyDescriptor(_.prototype, "createWall"), _.prototype), t(_.prototype, "clearWall", [D], Object.getOwnPropertyDescriptor(_.prototype, "clearWall"), _.prototype), t(_.prototype, "createData", [B], Object.getOwnPropertyDescriptor(_.prototype, "createData"), _.prototype), k = _)) || k)), r._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/SDK.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./EventManager.ts", "./GameEventType.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u;
		return {
			setters: [function(e) {
				t = e.createClass, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy, o = e.sys
			}, function(e) {
				a = e.GlobalEnum
			}, function(e) {
				s = e.default
			}, function(e) {
				r = e.default
			}, function(e) {
				u = e.EventType
			}],
			execute: function() {
				e("Platform", void 0), n._RF.push({}, "58947sP21dHI6brMjcbkNmW", "SDK", void 0), e("default", function() {
					function e() {
						i(this, "shareTitleArr", ["", ""]), i(this, "shareImgArr", ["", ""]), i(this, "api", void 0), i(this, "config", void 0), i(this, "enterTime", void 0), i(this, "onshow_time", void 0), i(this, "onhide_time", void 0), i(this, "systemInfo", void 0), i(this, "platform", null), i(this, "systemVersion", void 0), i(this, "sdkVersion", void 0), i(this, "videoAd", void 0), i(this, "videoRecord", null), i(this, "videoEventData", void 0), i(this, "videoSuccess", void 0), i(this, "videoFail", void 0), i(this, "videoQuit", void 0), i(this, "videoTongJi", null), i(this, "bannerRecord", null), i(this, "bannerShowing", !1), i(this, "insertAdRecord", null), i(this, "useBannerInsteadInsert", !1), i(this, "recordVideoData", null)
					}
					var t = e.prototype;
					return window.XFBI && (window.XFBI.onPause(function() {
						t.onVideoStart()
					}), window.XFBI.onResume(function() {
						t.onVideoEnd()
					})), t.setSystemInfo = function(e, t, i) {
						switch (this.systemVersion = t, this.sdkVersion = i, e.toUpperCase()) {
							case c.ios:
								this.platform = c.ios;
								break;
							case c.android:
								this.platform = c.android;
								break;
							default:
								this.platform = c.pc
						}
					}, t.systemLessThan = function(e) {
						return this.lessThan(this.systemVersion, e)
					}, t.sdkLessThan = function(e) {
						return this.lessThan(this.sdkVersion, e)
					}, t.lessThan = function(e, t) {
						for (var i = e.split("."), n = t.split("."), o = Math.max(n.length, n.length); i.length < o;) i.push("0");
						for (; n.length < o;) n.push("0");
						for (var a = 0; a < o; a++) {
							var s = parseInt(i[a]),
								r = parseInt(n[a]);
							if (s < r) return !0;
							if (s > r) return !1
						}
						return !1
					}, t.compareVersion = function(e, t) {
						e = e.split("."), t = t.split(".");
						for (var i = Math.max(e.length, t.length); e.length < i;) e.push("0");
						for (; t.length < i;) t.push("0");
						for (var n = 0; n < i; n++) {
							var o = parseInt(e[n]),
								a = parseInt(t[n]);
							if (o > a) return 1;
							if (o < a) return -1
						}
						return 0
					}, t.init = function(e) {
						r.emit(u.Common.SDKEvent.inited)
					}, t.onEvents = function() {
						r.on(u.Common.SDKEvent.showMsg, this.showMessage, this), r.on(u.Common.SDKEvent.showBanner, this.showBanner, this), r.on(u.Common.SDKEvent.hideBanner, this.removeBanner, this), r.on(u.Common.SDKEvent.checkVisibleBanner, this.checkVisibleBanner, this), r.on(u.Common.SDKEvent.showVideo, this.showVideo, this), r.on(u.Common.SDKEvent.showVideoTipCancel, this.onVideoTipCancel, this), r.on(u.Common.SDKEvent.showVideoTipContinue, this.onVideoTipContinue, this), r.on(u.Common.SDKEvent.startRecord, this.startRecord, this), r.on(u.Common.SDKEvent.pauseRecord, this.pauseRecord, this), r.on(u.Common.SDKEvent.resumeRecord, this.resumeRecord, this), r.on(u.Common.SDKEvent.stopRecord, this.stopRecord, this), r.on(u.Common.SDKEvent.shareRecord, this.shareRecord, this), r.on(u.Common.SDKEvent.showInsertAd, this.showInterstitialAd, this), r.on(u.Common.SDKEvent.navigateToMiniProgram, this.navigateToMiniProgram, this), r.on(u.Common.SDKEvent.vibrateLong, this.onVibrateLong, this), r.on(u.Common.SDKEvent.vibrateShort, this.onVibrateShort, this), r.on(u.Common.SDKEvent.showInsertByPauseLevel, this.showInsertAdByPauseLevel, this), r.on(u.Common.SDKEvent.triggerGC, this.triggerGC, this), r.on(u.Common.SDKEvent.showNativeAd, this.showNativeAd, this), r.on(u.Common.SDKEvent.hideNativeAd, this.hideNativeAd, this), r.on(u.Common.SDKEvent.hideAllNativeAd, this.hideAllNativeAd, this), r.on(u.Common.SDKEvent.quickShowNativeAd, this.quickShowNativeAd, this), r.on(u.Common.SDKEvent.quickHideNativeAd, this.quickHideNativeAd, this), r.on(u.Common.SDKEvent.shareToFriends, this.shareToAnyOne, this), r.on(u.Common.SDKEvent.showAppBox, this.showAppBox, this), r.on(u.Common.SDKEvent.showBlockAd, this.showBlockAd, this), r.on(u.Common.SDKEvent.hideBlockAd, this.hideBlockAd, this), r.on(u.Common.SDKEvent.addColorSign, this.addColorSign, this), r.on(u.Common.SDKEvent.subscribeMsg, this.subscribeMsg, this), r.on(u.Common.SDKEvent.getTableIconState, this.getTableIconState, this), r.on(u.Common.SDKEvent.addTableIcon, this.addTableIcon, this)
					}, t.triggerGC = function() {}, t.showInsertAdByPauseLevel = function() {
						this.showInterstitialAd(!1)
					}, t.loadRecord = function() {
						var e = {
								video: null,
								banner: null,
								insert: null,
								recordVideoData: null,
								time: 0
							},
							t = o.localStorage.getItem("AdRecord");
						if (t) {
							var i = JSON.parse(t),
								n = new Date,
								a = new Date(i.time);
							n.getMonth() == a.getMonth() && n.getDate() == a.getDate() && (e = i)
						}
						this.bannerRecord = new l(e.banner), this.videoRecord = new l(e.video), this.insertAdRecord = new l(e.insert), this.recordVideoData = new d(e.recordVideoData)
					}, t.saveRecord = function() {
						var e = {
							video: this.videoRecord,
							banner: this.bannerRecord,
							insert: this.insertAdRecord,
							recordVideoData: this.recordVideoData,
							time: Date.now()
						};
						o.localStorage.setItem("AdRecord", JSON.stringify(e))
					}, t.showVideo = function(e, t, i) {
						this.videoTongJi = null, this.canApiUseVideo() ? (this.resetVideoCb(), "object" == typeof e ? (this.videoEventData = e, this.videoSuccess = e.success, this.videoQuit = e.quit, this.videoFail = e.fail, void 0 !== e.page && (this.videoTongJi = {
							type: e.page,
							battle: e.battle
						})) : (this.videoEventData = {
							success: e,
							quit: t,
							fail: i,
							quitNeedTip: !0
						}, this.videoSuccess = e,
                        this.onVideoSuccess(),
                         this.videoQuit = t, this.videoFail = i), this.videoFail || (this.videoFail = this.tipVideoFail.bind(this)), this.sendVideoTongJi(a.Common.VideoSubType.clickBtnVideo), 
                        this.onVideoStart(),
                        this.getVideoAdUnitId() ? this.showVideoAd() : setTimeout(this.onVideoSuccess.bind(this), 0)) : "object" == typeof e ? (e.page && r.emit(u.Common.TongJi.video, {
							type: e.page,
							subType: a.Common.VideoSubType.videoFail,
							battle: e.battle
						}), e.fail && e.fail()) : i && i()
					}, t.onVideoStart = function() {
                        this.onVideoSuccess(),
						console.error("onVideoStart"), r.emit(u.Common.AudioEvent.pause), r.emit(u.Common.DirectorEvent.pauseLevel), r.emit(u.Common.UIEvent.showTouchMask)
					}, t.onVideoEnd = function() {
						console.error("onVideoEnd"), r.emit(u.Common.AudioEvent.resume), r.emit(u.Common.DirectorEvent.resumeLevel), r.emit(u.Common.UIEvent.hideTouchMask)
					}, t.canApiUseVideo = function() {
						return !0
					}, t.tipVideoFail = function() {
						this.showMessage("视频加载失败，请稍后再试~")
					}, t.showVideoAd = function() {
						this.onVideoSuccess()
					}, t.getVideoAdUnitId = function(e) {
						return this.config.videoAdUnitId[0] ? this.config.videoAdUnitId[0] : (console.log("广告参数未填写"), null)
					}, t.onVideoShow = function() {
						console.log("视频广告展示成功"),
							this.videoRecord.onShow()
					}, t.onVideoHide = function() {
						console.log("视频广告未播放完即被关闭"), this.videoRecord.onHide()
					}, t.onVideoSuccess = function() {
						console.log("视频广告观看成功！"), this.sendVideoTongJi(a.Common.VideoSubType.videoSuc), this.onVideoEnd();
						var e = this.videoSuccess;
						this.resetVideoCb(), e && e()
					}, t.onVideoFail = function(e) {
						console.log("视频广告加载出错  ", e), this.sendVideoTongJi(a.Common.VideoSubType.videoFail), this.onVideoEnd();
						var t = this.videoFail;
						this.resetVideoCb(), t && t()
					}, t.onVideoQuit = function() {
						if (console.log("视频广告观看未完成", this.videoEventData.quitNeedTip), !1 === this.videoEventData.quitNeedTip) {
							this.sendVideoTongJi(a.Common.VideoSubType.videoQuit), this.onVideoEnd();
							var e = this.videoQuit;
							this.resetVideoCb(), e && e()
						} else r.emit(u.Common.UIEvent.hideTouchMask), r.emit(u.Common.UIEvent.enter, a.UI.videoTip, this.videoEventData)
					}, t.onVideoTipContinue = function() {
						r.emit(u.Common.UIEvent.showTouchMask), this.getVideoAdUnitId() ? this.showVideoAd() : setTimeout(this.onVideoSuccess.bind(this), 0)
					}, t.onVideoTipCancel = function() {
						console.log("收到事件：取消继续视频"), this.sendVideoTongJi(a.Common.VideoSubType.videoQuit), this.onVideoEnd();
						var e = this.videoQuit;
						this.resetVideoCb(), e && e()
					}, t.sendVideoTongJi = function(e) {
						this.videoTongJi && r.emit(u.Common.TongJi.video, {
							type: this.videoTongJi.type,
							subType: e,
							battle: this.videoTongJi.battle
						})
					}, t.resetVideoCb = function() {
						this.videoSuccess = null, this.videoQuit = null, this.videoFail = null, this.videoEventData = null
					}, t.showBanner = function(e) {
						console.log("SDK.showBanner"), e ? r.emit(u.Common.SDKEvent.showBannerFail, e.style) : r.emit(u.Common.SDKEvent.showBannerFail)
					}, t.canApiUseBanner = function() {
						return !0
					}, t.removeBanner = function() {}, t.checkVisibleBanner = function(e, t) {
						e ? "function" == typeof e ? e() : e.target ? e.cb.call(e.target, e.data) : e.cb(e.data) : t && ("function" == typeof t ? t() : t.target ? t.cb.call(t.target, t.data) : t.cb(t.data))
					}, t.getBannerId = function(e) {
						return this.config.BannerAdUnitId[0]
					}, t.getAllBannerIds = function() {
						for (var e = [], t = this.config.BannerAdUnitId, i = t.length - 1; i >= 0; --i) t[i] && e.indexOf(t[i]) < 0 && e.push(t[i]);
						return e
					}, t.onBannerShow = function() {
						console.log("banner 显示成功"), this.bannerRecord.onShow(), this.bannerShowing = !0, r.emit(u.Common.SDKEvent.showBannerFinish)
					}, t.onBannerHide = function() {
						console.log("banner 广告隐藏"), this.bannerRecord.onHide(), this.bannerShowing = !1
					}, t.onBannerErr = function(e) {
						console.log("banner 显示失败:", JSON.stringify(e)), this.bannerRecord.isShowing = !1, r.emit(u.Common.SDKEvent.showBannerFail)
					}, t.preCreateBanner = function(e) {}, t.showInterstitialAd = function(e) {}, t.canApiUseInsert = function() {
						return !0
					}, t.getInsertAdUnitId = function() {
						return this.config.InterstitialAdUnitId[0] ? this.config.InterstitialAdUnitId[0] : (console.log("插屏广告参数未填写"), null)
					}, t.onInsertShow = function() {
						console.log("插屏显示成功"), this.insertAdRecord.onShow()
					}, t.onInsertHide = function() {
						console.log("关闭插屏"), this.insertAdRecord.onHide()
					}, t.onInsertErr = function(e) {
						console.log("插屏广告加载失败：" + JSON.stringify(e)), this.insertAdRecord.isShowing = !1
					}, t.showBannerInsteadInsert = function() {
						this.useBannerInsteadInsert && (console.log("显示banner代替插屏"), this.showBanner()), this.useBannerInsteadInsert = !1
					}, t.onVibrateShort = function() {
						s.driveConfig.vibrate && this.vibrateShort()
					}, t.vibrateShort = function() {}, t.onVibrateLong = function() {
						s.driveConfig.vibrate && this.vibrateLong()
					}, t.vibrateLong = function() {}, t.shareAppMessage = function(e) {}, t.shareToAnyOne = function(e, t, i) {
						e && e()
					}, t.showMessage = function(e, t) {
						r.emit(u.Common.UIEvent.showTip, e)
					}, t.recordVideo = function(e) {}, t.shareRecordVideo = function(e, t) {}, t.navigateToMiniProgram = function(e) {
						console.log("跳转小游戏，子类实现，data:", e)
					}, t.getNativeAdId = function() {
						return this.config.nativeAdUnitId[0] ? this.config.nativeAdUnitId[0] : (console.log("原生广告参数未填写"), null)
					}, t.getAllNativeAdIds = function() {
						return this.config.nativeAdUnitId[0] ? this.config.nativeAdUnitId : (console.log("原生广告参数未填写"), [])
					}, t.showNativeAd = function(e) {}, t.hideNativeAd = function(e) {}, t.hideAllNativeAd = function(e) {}, t.quickShowNativeAd = function(e) {}, t.quickHideNativeAd = function(e) {}, t.getTableIconState = function(e) {
						console.log("请在子类实现！")
					}, t.addTableIcon = function(e, t) {
						console.log("请在子类实现！")
					}, t.startRecord = function() {
						this.recordVideo("start"), this.recordVideoData.onStart()
					}, t.pauseRecord = function() {
						this.recordVideo("pause")
					}, t.resumeRecord = function() {
						this.recordVideo("resume")
					}, t.stopRecord = function() {
						this.recordVideoData.onEnd(), this.recordVideo("stop")
					}, t.shareRecord = function(e, t) {
						void 0 === t && (t = null), this.shareRecordVideo(e, t)
					}, t.showAppBox = function() {}, t.getAppBoxId = function() {
						return this.config.appBoxUnitId[0] ? this.config.appBoxUnitId[0] : (console.log("盒子广告参数未填写"), null)
					}, t.showBlockAd = function(e) {}, t.getBlockAdId = function() {
						return this.config.blockAdUnitId[0] ? this.config.blockAdUnitId[0] : (console.log("积木广告参数未填写"), null)
					}, t.hideBlockAd = function() {}, t.addColorSign = function(e) {}, t.subscribeMsg = function(e) {}, e
				}());
				var c, l = function() {
						function e(e) {
							i(this, "dayShowCount", void 0), i(this, "dayHideCount", void 0), i(this, "gameShowCount", void 0), i(this, "gameHideCount", void 0), i(this, "preShowTime", void 0), i(this, "preHideTime", void 0), i(this, "isShowing", void 0), this.isShowing = !1, this.gameShowCount = 0, this.gameHideCount = 0, e ? (this.dayShowCount = e.dayShowCount, this.dayHideCount = e.dayHideCount, this.preShowTime = e.preShowTime, this.preHideTime = e.preHideTime) : (this.dayShowCount = 0, this.dayHideCount = 0, this.preShowTime = 0, this.preHideTime = 0)
						}
						var t = e.prototype;
						return t.onShow = function() {
							this.isShowing = !0, this.dayShowCount++, this.gameShowCount++, this.preShowTime = Date.now()
						}, t.onHide = function() {
							this.isShowing = !1, this.dayHideCount++, this.gameHideCount++, this.preHideTime = Date.now()
						}, t.getShowSpaceTime = function() {
							return .001 * (Date.now() - this.preShowTime)
						}, t.getHideSpaceTime = function() {
							return .001 * (Date.now() - this.preHideTime)
						}, e
					}(),
					d = function() {
						function e(e) {
							i(this, "startTime", void 0), i(this, "endTime", void 0), i(this, "gameShareCount", void 0), i(this, "dayShareCount", void 0), this.startTime = 0, this.endTime = 0, this.gameShareCount = 0, this.dayShareCount = e ? e.dayShareCount : 0
						}
						var n = e.prototype;
						return n.onStart = function() {
							this.startTime = Date.now(), this.endTime = Date.now()
						}, n.onEnd = function() {
							this.endTime = Date.now()
						}, n.onShare = function() {
							this.gameShareCount++, this.dayShareCount++
						}, t(e, [{
							key: "totalTime",
							get: function() {
								return .001 * (this.endTime - this.startTime)
							}
						}]), e
					}();
				! function(e) {
					e.pc = "PC", e.ios = "IOS", e.android = "ANDROID"
				}(c || (c = e("Platform", {}))), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/ALDManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./GameEventType.ts"], function(e) {
		"use strict";
		var t, i, n, o;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy
			}, function(e) {
				n = e.default
			}, function(e) {
				o = e.EventType
			}],
			execute: function() {
				i._RF.push({}, "5aa10EHgGJFXK2ZloCqjYEv", "ALDManager", void 0), e("default", function() {
					function e() {
						t(this, "apiName", "wx"), t(this, "api", void 0), t(this, "openId", void 0)
					}
					var i = e.prototype;
					return i.init = function(e) {
						this.openId = e, this.api = window[this.apiName], this.api.aldStage && (this.onEvents(), this.api.aldSendOpenid(this.openId))
					}, i.onEvents = function() {
						n.on(o.Common.ALDEvent.levelStart, this.onStart, this), n.on(o.Common.ALDEvent.levelWin, this.onLevelWin, this), n.on(o.Common.ALDEvent.levelLose, this.onLevelLose, this), n.on(o.Common.ALDEvent.sendEvent, this.sendEvent, this)
					}, i.onStart = function(e) {
						var t = {
							stageId: e.toString(),
							stageName: "LV " + e,
							userId: this.openId
						};
						this.api.aldStage.onStart(t)
					}, i.onRunning = function(e) {
						this.api.aldStage.onRunning(e)
					}, i.onLevelWin = function(e) {
						var t = this.convertData(e);
						t.event = "complete", t.params = {
							desc: "关卡胜利"
						}, this.api.aldStage.onEnd(t)
					}, i.onLevelLose = function(e) {
						var t = this.convertData(e);
						t.event = "fail", t.params = {
							desc: "关卡失败"
						}, this.api.aldStage.onEnd(t)
					}, i.convertData = function(e) {
						return {
							stageId: e.toString(),
							stageName: "LV " + e,
							userId: this.openId
						}
					}, i.sendEvent = function(e) {
						this.api.aldSendEvent(e.eventName, e.data)
					}, e
				}()), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/UIManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./GameEventType.ts", "./Loader.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy, n = e.Prefab, o = e.instantiate, a = e.Widget, s = e.Layout
			}, function(e) {
				r = e.default
			}, function(e) {
				u = e.EventType
			}, function(e) {
				c = e.default
			}, function(e) {
				l = e.default
			}],
			execute: function() {
				i._RF.push({}, "5b708/73FlAXbGUAoQ4RyT8", "UIManager", void 0);
				var d = e("default", function() {
					function e() {}
					return e.init = function(e) {
						console.log("UIManager init"), this.node = e, this.UIs = {};
						for (var t = e.children.length - 1; t >= 0; --t) {
							var i = e.children[t].getComponent(l);
							i && i.uiType && (this.UIs[i.uiType] = i)
						}
						this.onEvents()
					}, e.onEvents = function() {
						r.on(u.Common.UIEvent.enter, this.enterUI, this), r.on(u.Common.UIEvent.exit, this.exitUI, this)
					}, e.getUI = function(e) {
						return this.UIs[e] ? this.UIs[e] : (console.warn("UI尚未加载，无法获取：", e), null)
					}, e.existUI = function(e) {
						return !!this.node.getChildByName(e)
					}, e.enterUI = function(e, t) {
						var i = this,
							n = this.UIs[e];
						null !== n && (n ? setTimeout(function() {
							i.showUI(e, t)
						}, 0) : this.loadUI(e, t))
					}, e.showUI = function(e, t) {
						var i = this.UIs[e];
						if (i) {
							i.show(t);
							var n = null;
							i.getNativeBtn && (n = i.getNativeBtn()), r.emit(u.Common.UIEvent.entered, e, n)
						}
					}, e.loadUI = function(e, t) {
						var i = this;
						this.loadUIBound("UI", e, function(n) {
							if (!n) return i.UIs[e] = null, void console.error("要显示的界面预制不存在：", e);
							if (i.UIs[e]) i.showUI(e, t);
							else {
								var r = o(n),
									u = i.node.getChildByName(e);
								u || (u = i.node.parent.getChildByName(e)), u.addChild(r);
								var c = r.getComponent(a);
								c && c.updateAlignment();
								var d = r.getComponent(s);
								d && d.updateLayout();
								var h = r.getComponent(l);
								h.init(), i.UIs[e] = h, i.showUI(e, t)
							}
						})
					}, e.loadUIBound = function(e, t, i) {
						c.loadBundle(e, function() {
							c.loadBundleRes(e, t + "/" + t, function(e) {
								i && i(e)
							}, n, !0)
						}, !0)
					}, e.exitUI = function(e) {
						var t = this.UIs[e];
						t && (t.hide(), r.emit(u.Common.UIEvent.exited, e))
					}, e
				}());
				t(d, "node", void 0), t(d, "UIs", void 0), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/PlayerDataTemplate.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts"], function(e) {
		"use strict";
		var t, i, n, o, a;
		return {
			setters: [function(e) {
				t = e.defineProperty, i = e.createClass
			}, function(e) {
				n = e.cclegacy, o = e.sys
			}, function(e) {
				a = e.GlobalEnum
			}],
			execute: function() {
				n._RF.push({}, "5ea36wwlGhLP6nx4W1NN5MX", "PlayerDataTemplate", void 0), e("default", function() {
					function e() {}
					return e.getData = function() {
						return {
							fristLoginTimer: 0,
							gameData: new s,
							teached: !1,
							teachedTile: [],
							privacyPolicy: !0,
							firstEnterGame: !0
						}
					}, e
				}());
				var s = e("SavedGameData", function() {
						t(this, "asset", {
							gold: 0,
							zuanShi: 0,
							tiLi: 0
						}), t(this, "skinData", {
							curId: 0,
							tryId: -1,
							unlockId: [0]
						}), t(this, "signData", {
							count: -1,
							lastTime: 0
						}), t(this, "spinData", {
							count: 0,
							lastTime: 0,
							remainCount: 1
						}), t(this, "curSceneIndex", 0), t(this, "curLevel", 1), t(this, "attributeLv", {
							hp: 1,
							moveSpeed: 1,
							atk: 1,
							atkSpeed: 1,
							geBan: 1
						}), t(this, "weapons", {
							curId: 0,
							unlocked: [0],
							unlockMaxType: 0,
							owned: [0]
						}), t(this, "unlockTileContents", {}), t(this, "geBans", {}), t(this, "bossTip", []), t(this, "enemyTip", [1]), t(this, "tipedHeiYe", !1), t(this, "tipedWuJin", !1), t(this, "tipedGeBanBreakIcon", !1), t(this, "renWuData", {
							type: a.RenWuType.unlockRoom,
							target: 1,
							awardGold: 25,
							data: null,
							finished: !1
						}), t(this, "fixRenWuPtr", 0), t(this, "renWuWuJinTarget", 100), t(this, "teachedRenWuAward", !1), t(this, "wuJinCoolStartTime", 0), t(this, "heiYeCoolStartTime", 0)
					}),
					r = e("UserInfo", function() {
						function e() {}
						return i(e, null, [{
							key: "openid",
							get: function() {
								return this._openid || (this._openid = o.localStorage.getItem("openid")), this._openid
							},
							set: function(e) {
								this._openid = e, o.localStorage.getItem("openid")
							}
						}]), e
					}());
				t(r, "fristLoginTimer", 0), t(r, "needuserinfo", 0), t(r, "_openid", ""), t(r, "sessid", "aaaa"), t(r, "userid", ""), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EditorGeBan.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.defineProperty, o = e.assertThisInitialized, a = e.createClass
			}, function(e) {
				s = e.cclegacy, r = e._decorator, u = e.v2, c = e.v3
			}, function(e) {
				l = e.default
			}, function(e) {
				d = e.default
			}],
			execute: function() {
				var h, p, f, m;
				s._RF.push({}, "5eafa6B1HlOkrFsxK0OKIme", "EditorGeBan", void 0);
				var v = r.ccclass,
					g = r.property;
				e("EditorGeBan", (h = v("EditorGeBan"), p = g({
					displayName: "校准位置"
				}), h((t((m = function(e) {
					function t() {
						for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
						return t = e.call.apply(e, [this].concat(a)) || this, n(o(t), "_tilePos", u()), t
					}
					return i(t, e), t.prototype.updateData = function() {
						var e = this.node.getPosition(),
							t = l.GameRule.tileSize;
						this._tilePos.x = Math.round(.2 * e.x / t.x), this._tilePos.y = Math.round(.2 * e.y / t.z), e.x = this._tilePos.x * t.x * 5, e.y = this._tilePos.y * t.z * 5, this.node.setPosition(e), this._tilePos.x % 2 == 0 ? this.node.eulerAngles = c(0, 0, 90) : this.node.eulerAngles = c(0, 0, 0)
					}, a(t, [{
						key: "freshPos",
						get: function() {
							return !1
						},
						set: function(e) {
							this.updateData()
						}
					}, {
						key: "tilePos",
						get: function() {
							var e = this.node.getPosition(),
								t = l.GameRule.tileSize;
							return this._tilePos.x = Math.round(.2 * e.x / t.x), this._tilePos.y = Math.round(.2 * e.y / t.z), this._tilePos
						}
					}]), t
				}(d)).prototype, "freshPos", [p], Object.getOwnPropertyDescriptor(m.prototype, "freshPos"), m.prototype), f = m)) || f)), s._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GlobalEnum.ts", ["cc", "./CommonEnum.ts"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}, function(e) {
				i = e.CommonEnum
			}],
			execute: function() {
				var n;
				e("GlobalEnum", void 0), t._RF.push({}, "6826d7wVUNOP6Hip9cXyxIy", "GlobalEnum", void 0),
					function(e) {
						var t, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g, y, b, S, C, w, A, T, x, P, D;
						e.Common = i,
							function(e) {
								e[e.levelUILayer = 0] = "levelUILayer", e[e.levelLayer = 1] = "levelLayer", e[e.levelAssetLoaded = 2] = "levelAssetLoaded", e[e.playerMoveDir = 3] = "playerMoveDir", e[e.particleSys = 4] = "particleSys", e[e.particleGroup = 5] = "particleGroup", e[e.maxEnemyParticle = 6] = "maxEnemyParticle", e[e.particlePosBuffer = 7] = "particlePosBuffer", e[e.particleVecBuffer = 8] = "particleVecBuffer", e[e.levelMapQuadTree = 9] = "levelMapQuadTree", e[e.levelMap = 10] = "levelMap", e[e.terrain = 11] = "terrain", e[e.enemyMap = 12] = "enemyMap", e[e.tileCollers = 13] = "tileCollers", e[e.hpBarMng = 14] = "hpBarMng", e[e.yanWuEffect = 15] = "yanWuEffect", e[e.player = 16] = "player", e[e.enemies = 17] = "enemies", e[e.freinds = 18] = "freinds", e[e.playerAtkCollers = 19] = "playerAtkCollers", e[e.isLevelFighting = 20] = "isLevelFighting", e[e.fightMode = 21] = "fightMode", e[e.wuJinCircleCount = 22] = "wuJinCircleCount", e[e.remainUnlockRoomCount = 23] = "remainUnlockRoomCount", e[e.allRooms = 24] = "allRooms"
							}(t || (t = {})), e.myGlobalDataType = t,
							function(e) {
								e[e.none = 0] = "none", e[e.follow = 1] = "follow", e[e.enterNewScene = 2] = "enterNewScene"
							}(n || (n = {})), e.LevelCameraState = n,
							function(e) {
								e.clickNativeNode = "clickNativeNode", e.clickNativeBtn = "clickNativeBtn", e.showVideo = "showVideo", e.unlockRoom = "unlockRoom", e.unlockWeapon = "unlockWeapon", e.unlockSoldier = "unlockSoldier", e.growSoldier = "growSoldier", e.growAttribute = "growAttribute", e.heiYeWin = "heiYeWin", e.heiYeLose = "heiYeLose", e.wuJin = "wuJin", e.winVideoAward = "winVideoAward", e.loseVideoAward = "loseVideoAward", e.resurgence = "resurgence"
							}(o || (o = {})), e.TongJiEvent = o,
							function(e) {
								e.lobby = "GameLobby", e.configSetting = "ConfigSettingUI", e.playerAssetBar = "PlayerAssetBar", e.levelInfo = "LevelInfoUI", e.levelController = "LevelController", e.pauseLevel = "PauseLevelUI", e.winUI = "WinUI", e.loseUI = "LoseUI", e.resurgence = "ResurgenceUI", e.PrivacyPolicyUI = "PrivacyPolicyUI", e.attributeShop = "AttributeShopUI", e.unlockTile = "UnlockTileUI", e.unlockWeapon = "UnlockWeaponUI", e.weaponShop = "WeaponShopUI", e.addGold = "AddGoldUI", e.addZuanShi = "AddZuanShiUI", e.settingUI = "SettingUI", e.videoTip = "VideoTipUI", e.levelTeachUI = "LevelTeachUI", e.tipUnlockWeapon = "TipUnlockWeaponUI", e.enemyInfoUI = "EnemyInfoUI", e.bossInfoUI = "BossInfoUI", e.leaveSceneTip = "LeaveSceneTipUI"
							}(a || (a = {})), e.UI = a,
							function(e) {
								e.levelData = "LevelData", e.playerSkin = "PlayerSkin", e.signData = "SignData", e.levelMapData = "LevelMapData", e.moveCollerData = "MoveCollerData", e.roleData = "RoleData", e.skillData = "SkillData", e.aiData = "AIData", e.enemyData = "EnemyData"
							}(s || (s = {})), e.GameDataType = s,
							function(e) {
								e.playerSkin = "PlayerSkin"
							}(r || (r = {})), e.GoodsType = r,
							function(e) {
								e.clickBtn = "ClickBtn", e.btnCancel = "UI_no", e.win = "win2", e.lose = "", e.BGMLevel = "BGMLevel", e.BGMLobby = "BGMLobby", e.gold = "coin", e.zuanShi = "gem", e.playerDie = "lose", e.breakWood = "break_wood", e.xiuFu = "repair_wood", e.gun1 = "gun1", e.lvUp = "lv_up", e.boom = "boom", e.feiJi = "fly3", e.unlockWeapon = "unlockWeapon", e.recoverHp = "recoverHp"
							}(u || (u = {})), e.AudioClip = u,
							function(e) {
								e[e.lobby = 0] = "lobby", e[e.level = 1] = "level"
							}(c || (c = {})), e.DirectState = c,
							function(e) {
								e[e.inited = 1] = "inited", e[e.loading = 2] = "loading", e[e.delayLoadFinish = 3] = "delayLoadFinish", e[e.playing = 4] = "playing", e[e.win = 5] = "win", e[e.lose = 6] = "lose", e[e.lobby = 7] = "lobby", e[e.fighting = 8] = "fighting", e[e.playGoldAnim = 9] = "playGoldAnim", e[e.enterNewScene = 10] = "enterNewScene", e[e.playerJump = 11] = "playerJump", e[e.playerDied = 12] = "playerDied", e[e.feiJiMoveDown = 13] = "feiJiMoveDown", e[e.playerJumpToFeiJi = 14] = "playerJumpToFeiJi", e[e.feiJiLeave = 15] = "feiJiLeave", e[e.showBoss = 16] = "showBoss", e[e.teaching = 17] = "teaching"
							}(l || (l = {})), e.LevelState = l,
							function(e) {
								e[e.start = 0] = "start", e[e.left = 1] = "left", e[e.right = 2] = "right", e[e.up = 3] = "up", e[e.down = 4] = "down", e[e.jump = 5] = "jump", e[e.doge = 6] = "doge", e[e.def = 7] = "def", e[e.atk1 = 8] = "atk1", e[e.atk2 = 9] = "atk2", e[e.skill1 = 10] = "skill1", e[e.skill2 = 11] = "skill2", e[e.skill3 = 12] = "skill3", e[e.count = 13] = "count"
							}(d || (d = {})), e.KeyCode = d,
							function(e) {
								e.playerIdle = "Idle", e.playerStandAtk = "IdleAtk", e.playerMoveForward = "Run", e.playerMoveBack = "Running_Backward", e.playerMoveLeft = "move_Left", e.playerMoveRight = "move_Right", e.playerDeath = "Death", e.playerWin = "role_dance", e.playerJump = "jump", e.playerJumpFinish = "jumpFinish", e.enemyMove = "z_run", e.enemyDied = "z_death"
							}(h || (h = {})), e.FighterAnim = h,
							function(e) {
								e[e.spd1 = 0] = "spd1", e[e.spd2 = 1] = "spd2", e[e.spdHalf = 2] = "spdHalf"
							}(p || (p = {})), e.BatchMeshAnimSpeed = p,
							function(e) {
								e[e.stand = 0] = "stand", e[e.move = 1] = "move", e[e.moveLeft = 2] = "moveLeft", e[e.moveRight = 3] = "moveRight", e[e.moveFast = 4] = "moveFast", e[e.jump = 5] = "jump", e[e.jump2 = 6] = "jump2", e[e.jumpHeight = 7] = "jumpHeight", e[e.airFall = 8] = "airFall", e[e.onWall = 9] = "onWall", e[e.doge = 10] = "doge", e[e.dogeAir = 11] = "dogeAir", e[e.climbTree = 12] = "climbTree", e[e.onTree = 13] = "onTree", e[e.beHitBack = 14] = "beHitBack", e[e.beHitFly = 15] = "beHitFly", e[e.beHitFall = 16] = "beHitFall", e[e.beHitDaoDi = 17] = "beHitDaoDi", e[e.beHitDef = 18] = "beHitDef", e[e.def = 19] = "def", e[e.atking = 20] = "atking"
							}(f || (f = {})), e.FighterState = f,
							function(e) {
								e.normalEnemy = "normalEnemy", e[e.count = 1] = "count"
							}(m || (m = {})), e.BatchSkinMesh = m, v || (v = {}), e.BulletType = v, g || (g = {}), e.AtkType = g,
							function(e) {
								e[e.wall = 1] = "wall", e[e.wangGe = 2] = "wangGe", e[e.menBan = 3] = "menBan", e[e.men = 4] = "men"
							}(y || (y = {})), e.WallModel = y,
							function(e) {
								e[e.emporty = 0] = "emporty", e[e.wall = 1] = "wall"
							}(b || (b = {})), e.TileType = b,
							function(e) {
								e[e.shop = 0] = "shop", e[e.weapon = 1] = "weapon", e[e.soldier = 2] = "soldier", e[e.unlockRoom = 3] = "unlockRoom", e[e.geBan = 4] = "geBan"
							}(S || (S = {})), e.TileContentType = S,
							function(e) {
								e[e.hp = 0] = "hp", e[e.moveSpeed = 1] = "moveSpeed", e[e.atk = 2] = "atk", e[e.atkSpeed = 3] = "atkSpeed", e[e.geBan = 4] = "geBan", e[e.random = 5] = "random", e[e.soldier = 6] = "soldier"
							}(C || (C = {})), e.ShopType = C,
							function(e) {
								e[e.weapon1 = 0] = "weapon1", e[e.weapon2 = 1] = "weapon2", e[e.weapon3 = 2] = "weapon3", e[e.weapon4 = 3] = "weapon4", e[e.weapon5 = 4] = "weapon5", e[e.weapon6 = 5] = "weapon6", e[e.count = 6] = "count"
							}(w || (w = {})), e.WeaponType = w,
							function(e) {
								e[e.outRoom = 0] = "outRoom", e[e.room = 1] = "room", e[e.sameRoom = 2] = "sameRoom"
							}(A || (A = {})), e.EnemyAreaType = A,
							function(e) {
								e[e.moveToGeBan = 0] = "moveToGeBan", e[e.atkGeBan = 1] = "atkGeBan", e[e.enterRoomByGeBan = 2] = "enterRoomByGeBan", e[e.moveToRoom = 3] = "moveToRoom", e[e.moveToPlayer = 4] = "moveToPlayer"
							}(T || (T = {})), e.EnemyRunState = T,
							function(e) {
								e[e.wall = 1] = "wall", e[e.enemy = 2] = "enemy", e[e.player = 4] = "player"
							}(x || (x = {})), e.FilterType = x,
							function(e) {
								e[e.normal = 0] = "normal", e[e.heiYe = 1] = "heiYe", e[e.wuJin = 2] = "wuJin"
							}(P || (P = {})), e.FightMode = P,
							function(e) {
								e[e.unlockRoom = 0] = "unlockRoom", e[e.growAttribute = 1] = "growAttribute", e[e.unlockWeapon = 2] = "unlockWeapon", e[e.buySolider = 3] = "buySolider", e[e.growSolider = 4] = "growSolider", e[e.winLevel = 5] = "winLevel", e[e.winHeiYe = 6] = "winHeiYe", e[e.winWuJin = 7] = "winWuJin", e[e.xiuFuGeBan = 8] = "xiuFuGeBan"
							}(D || (D = {})), e.RenWuType = D
					}(n || (n = e("GlobalEnum", {}))), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EditorDoor.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n, o;
		return {
			setters: [function(e) {
				t = e.inheritsLoose
			}, function(e) {
				i = e.cclegacy, n = e._decorator, o = e.Component
			}],
			execute: function() {
				var a;
				i._RF.push({}, "69691L9ypZIjq+0A5IidMBv", "EditorDoor", void 0);
				var s = n.ccclass;
				n.property, e("EditorDoor", s("EditorDoor")(a = function(e) {
					function i() {
						return e.apply(this, arguments) || this
					}
					return t(i, e), i.prototype.start = function() {}, i
				}(o)) || a), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/DrawingBoard.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n;
		return {
			setters: [function(e) {
				t = e.createClass, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy
			}],
			execute: function() {
				n._RF.push({}, "709a4xccAlBILkMAa+jmive", "DrawingBoard", void 0), e("default", function() {
					function e(e, t, n) {
						i(this, "_witdh", void 0), i(this, "_height", void 0), i(this, "pointColor", void 0), i(this, "buffer", void 0), i(this, "pixelColor", void 0), i(this, "colorCount", void 0), i(this, "curColor", void 0), i(this, "tempColor", void 0), i(this, "tempR", void 0), i(this, "tempG", void 0), i(this, "tempB", void 0), i(this, "tempA", void 0), i(this, "previousLineEndPos", void 0), i(this, "previousLineEndPosT", void 0), i(this, "previousLineEndPosB", void 0), i(this, "previousLineCircleEnd", void 0), i(this, "previousLineWidth", void 0), this.init(e, t, n)
					}
					var n = e.prototype;
					return n.init = function(e, t, i) {
						this.tempColor = this.tempR = this.tempG = this.tempB = this.tempA = 0, this.curColor = 0, this._witdh = Math.round(e), this._height = Math.round(t), this.initPointColor(), this.initPixelColor(), this.initLineData(), i && this.setData(i)
					}, n.initPointColor = function() {
						this.pointColor || (this.pointColor = []);
						for (var e = 0; e < this.width; ++e) {
							this.pointColor[e] || (this.pointColor[e] = []);
							for (var t = 0; t < this.height; ++t) this.pointColor[e][t] = 0
						}
						this.colorCount = {}, this.colorCount[0] = this.width * this.height
					}, n.initPixelColor = function() {
						this.buffer = new ArrayBuffer(this.width * this.height * 4), this.pixelColor = new Uint8Array(this.buffer), this.pixelColor.fill(0)
					}, n.reset = function() {
						this.resetPointColor(), this.resetPixelColor()
					}, n.resetPointColor = function() {
						for (var e = this.width - 1; e >= 0; --e)
							for (var t = this.height - 1; t >= 0; --t) this.pointColor[e][t] = 0;
						for (var i in this.colorCount) this.colorCount[i] = 0
					}, n.resetPixelColor = function() {
						this.pixelColor.fill(0)
					}, n.clear = function() {
						this.reset()
					}, n.setData = function(e) {
						var t = new Uint8Array(e);
						t.length == this.width * this.height * 4 ? (this.setPixelColorByRGBA(t), this.setPointColorByRGBA(t)) : console.warn("画板设置数据失败，数据长度与画板大小不一致。")
					}, n.setPixelColorByRGBA = function(e) {
						this.pixelColor.set(e)
					}, n.setPointColorByRGBA = function(e) {
						var t;
						this.colorCount = {};
						for (var i = 0; i < this.height; ++i) {
							t = i * this.height;
							for (var n = 0; n < this.width; ++n) {
								var o = this.convertToNumber(e[t++], e[t++], e[t++], e[t++]);
								this.pointColor[n][i] = o, this.colorCount[o] ? this.colorCount[o] += 1 : this.colorCount[o] = 1
							}
						}
					}, n.setColor = function(e, t, i, n) {
						void 0 === n && (n = 255), e &= 254, this.curColor = this.convertToNumber(e, t, i, n), this.colorCount[this.curColor] || (this.colorCount[this.curColor] = 0), this.tempColor = this.curColor, this.tempR = e, this.tempG = t, this.tempB = i, this.tempA = n
					}, n.copyData = function(e) {
						void 0 === e && (e = []);
						for (var t = 0, i = this.pixelColor.length; t < i; ++t) e[t] = this.pixelColor[t];
						return e
					}, n.getData = function() {
						return this.pixelColor
					}, n.getBuffer = function() {
						return this.buffer
					}, n.getColorCount = function(e, t, i, n) {
						void 0 === n && (n = 255);
						var o = this.convertToNumber(e, t, i, n);
						return this.colorCount[o]
					}, n.initLineData = function() {
						this.previousLineEndPos = new o, this.previousLineEndPosT = new o, this.previousLineEndPosB = new o, this.previousLineCircleEnd = !0, this.previousLineWidth = 1
					}, n.moveTo = function(e, t) {
						e = Math.round(e), t = Math.round(t), this.previousLineEndPos.set(e, t), this.previousLineEndPosT.set(e, t), this.previousLineEndPosB.set(e, t)
					}, n.setLineWidth = function(e) {
						this.previousLineWidth = e
					}, n.setLineCircleEnd = function(e) {
						this.previousLineCircleEnd = e
					}, n.line = function(e, t, i, n) {
						if (e = Math.round(e), i = Math.round(i), t = Math.round(t), n = Math.round(n), e != i || t != n) {
							var a = this.previousLineWidth,
								s = this.previousLineCircleEnd;
							this.previousLineEndPos.set(i, n);
							var r = 0,
								u = 0,
								c = 1;
							if (e == i) r = Math.round(.5 * a);
							else if (t == n) u = Math.round(.5 * a);
							else {
								var l = (n - t) / (i - e);
								u = .5 * a / (c = Math.sqrt(l * l + 1)), r = Math.round(u * l), u = Math.round(u)
							}
							this.previousLineEndPosT.set(i - r, n + u), this.previousLineEndPosB.set(i + r, n - u);
							var d = new o(e, t),
								h = new o(i, n);
							e > i && (d.x = i, d.y = n, h.x = e, h.y = t), this._drawLine(d, h, a, r, u, c), s && (this._drawCircle(e, t, .5 * a), this._drawCircle(i, n, .5 * a))
						}
					}, n.lineTo = function(e, t) {
						if (e = Math.round(e), t = Math.round(t), this.previousLineEndPos.x != e || this.previousLineEndPos.y != t) {
							var i = this.previousLineWidth,
								n = this.previousLineCircleEnd,
								a = this.previousLineEndPos.x,
								s = this.previousLineEndPos.y,
								r = e,
								u = t;
							a > r && (a = r, s = u, r = this.previousLineEndPos.x, u = this.previousLineEndPos.y);
							var c = 0,
								l = 0,
								d = 1;
							if (a == r) c = Math.round(.5 * i);
							else if (s == u) l = Math.round(.5 * i);
							else {
								var h = (u - s) / (r - a);
								l = .5 * i / (d = Math.sqrt(h * h + 1)), c = Math.round(l * h), l = Math.round(l)
							}
							if (n) this._drawCircle(a, s, .5 * i), this._drawCircle(r, u, .5 * i);
							else if (this.previousLineEndPos.x != this.previousLineEndPosT.x || this.previousLineEndPos.y != this.previousLineEndPosT.y) {
								var p = new o(this.previousLineEndPos.x - c, this.previousLineEndPos.y + l),
									f = new o(this.previousLineEndPos.x + c, this.previousLineEndPos.y - l);
								this._drawTriangle([p, f, this.previousLineEndPosT]), this._drawTriangle([p, f, this.previousLineEndPosB])
							}
							this._drawLine(new o(a, s), new o(r, u), i, c, l, d), this.previousLineEndPos.set(e, t), this.previousLineEndPosT.set(e - c, t + l), this.previousLineEndPosB.set(e + c, t - l)
						}
					}, n._drawLine = function(e, t, i, n, a, s) {
						if (e.y == t.y) {
							var r = e.x < t.x ? e.x : t.x;
							this._drawRect(r, Math.round(e.y - .5 * i), Math.abs(e.x - t.x), i)
						} else if (e.x == t.x) {
							var u = e.y < t.y ? e.y : t.y;
							this._drawRect(Math.round(e.x - .5 * i), u, i, Math.abs(e.y - t.y))
						} else {
							var c = (e.x - t.x) / (e.y - t.y),
								l = new o(e.x - n, e.y + a),
								d = new o(e.x + n, e.y - a),
								h = new o(t.x - n, t.y + a),
								p = new o(t.x + n, t.y - a),
								f = new o,
								m = new o,
								v = Math.round(i * s);
							t.y > e.y ? d.x < h.x ? (f.x = d.x, f.y = d.y + v, m.x = h.x, m.y = h.y - v, this._drawVerticalTriangle(f, d, l), this._drawParallelogram(d, m, v), this._drawVerticalTriangle(h, m, p)) : (f.x = d.x, f.y = Math.round(h.y - (f.x - h.x) * c), m.x = h.x, m.y = Math.round(d.y + (d.x - m.x) * c), this._drawVerticalTriangle(h, m, l), this._drawParallelogram(m, d, h.y - m.y), this._drawVerticalTriangle(f, d, p)) : l.x < p.x ? (f.x = l.x, f.y = l.y - v, m.x = p.x, m.y = p.y + v, this._drawVerticalTriangle(l, f, d), this._drawParallelogram(f, p, v), this._drawVerticalTriangle(m, p, h)) : (f.x = l.x, f.y = Math.round(p.y - (f.x - p.x) * c), m.x = p.x, m.y = Math.round(l.y + (l.x - m.x) * c), this._drawVerticalTriangle(m, p, d), this._drawParallelogram(p, f, l.y - f.y), this._drawVerticalTriangle(l, f, h))
						}
					}, n.rect = function(e, t, i, n) {
						this._drawRect(Math.round(e), Math.round(t), Math.round(i), Math.round(n))
					}, n._drawRect = function(e, t, i, n) {
						if (!(e > this._witdh || e + i < 0 || t > this._height || t + n < 0))
							for (var o = this.clampX(e), a = this.clampX(e + i), s = this.clampY(t), r = this.clampY(t + n), u = s; u <= r; ++u) this._drawRowPixel(o, a, u)
					}, n._drawParallelogram = function(e, t, i) {
						if (e.x != t.x)
							for (var n = (t.y - e.y) / (t.x - e.x), o = this._minX(e.x), a = this._maxX(t.x), s = o; s <= a; ++s) {
								var r = e.y + Math.round((s - e.x) * n),
									u = r + i;
								r = this._minY(r), u = this._maxY(u), this._drawColPixel(r, u, s)
							}
					}, n.triangle = function(e, t, i, n, a, s) {
						var r = [];
						r.push(new o(Math.round(e), Math.round(t))), r.push(new o(Math.round(i), Math.round(n))), r.push(new o(Math.round(a), Math.round(s))), this._drawTriangle(r)
					}, n._drawTriangle = function(e) {
						e.sort(function(e, t) {
							return e.x - t.x
						});
						var t = e[0],
							i = e[1],
							n = e[2];
						if (t.x == i.x) {
							if (t.x == n.x) return;
							return t.y < i.y && (t = e[1], i = e[0]), void this._drawVerticalTriangle(t, i, n)
						}
						var a = (n.y - t.y) / (n.x - t.x),
							s = new o(i.x, Math.round(t.y + (i.x - t.x) * a));
						s.y != i.y && (s.y < i.y ? (this._drawVerticalTriangle(i, s, t), this._drawVerticalTriangle(i, s, n)) : (this._drawVerticalTriangle(s, i, t), this._drawVerticalTriangle(s, i, n)))
					}, n._drawVerticalTriangle = function(e, t, i) {
						if (!(e.y > this._height || t.y < 0 || e.x == i.x)) {
							var n = (i.y - e.y) / (i.x - e.x),
								o = (i.y - t.y) / (i.x - t.x),
								a = i.x,
								s = e.x;
							if (a < s && (a = e.x, s = i.x), !(s > this._witdh || a < 0)) {
								s = this._minX(s), a = this._maxX(a);
								for (var r = s; r <= a; ++r) {
									var u = Math.round(e.y + (r - e.x) * n);
									if (!(u < 0)) {
										u = this.clampY(u);
										var c = Math.round(t.y + (r - t.x) * o);
										c > this._height || (c = this.clampY(c), this._drawColPixel(c, u, r))
									}
								}
							}
						}
					}, n.circle = function(e, t, i) {
						e = Math.round(e), t = Math.round(t), this._drawCircle(e, t, i)
					}, n._drawCircle = function(e, t, i) {
						if (!((i = Math.round(i)) <= 0 || e + i < 0 || e - i >= this.width || t + i < 0 || t - i > this._height))
							for (var n = i * i, o = this.clampY(t - i), a = this.clampY(t + i), s = o; s <= a; ++s) {
								var r = s - t;
								if (!(n < r * r || e + (r = Math.round(Math.sqrt(n - r * r))) < 0 || e - r >= this.width)) {
									var u = this.clampX(e - r),
										c = this.clampX(e + r);
									this._drawRowPixel(u, c, s)
								}
							}
					}, n._minX = function(e) {
						return e >= 0 ? e : 0
					}, n._maxX = function(e) {
						return e < this.width ? e : this.width - 1
					}, n._minY = function(e) {
						return e >= 0 ? e : 0
					}, n._maxY = function(e) {
						return e < this.height ? e : this.height - 1
					}, n.clampX = function(e) {
						return e < 0 ? 0 : e >= this.width ? this.width - 1 : e
					}, n.clampY = function(e) {
						return e < 0 ? 0 : e >= this.height ? this.height - 1 : e
					}, n._drawPixel = function(e, t) {
						if (this.pointColor[e][t] != this.tempColor) {
							var i = 4 * (t * this.width + e);
							this.pixelColor[i] = this.tempR, this.pixelColor[i + 1] = this.tempG, this.pixelColor[i + 2] = this.tempB, this.pixelColor[i + 3] = this.tempA;
							var n = this.pointColor[e][t];
							this.colorCount[n]--, this.colorCount[this.tempColor]++, this.pointColor[e][t] = this.tempColor
						}
					}, n._drawRowPixel = function(e, t, i) {
						for (var n = 4 * (i * this.width + e), o = e; o <= t; ++o) {
							if (this.pointColor[o][i] != this.tempColor) {
								this.pixelColor[n] = this.tempR, this.pixelColor[n + 1] = this.tempG, this.pixelColor[n + 2] = this.tempB, this.pixelColor[n + 3] = this.tempA;
								var a = this.pointColor[o][i];
								this.colorCount[a]--, this.colorCount[this.tempColor]++, this.pointColor[o][i] = this.tempColor
							}
							n += 4
						}
					}, n._drawColPixel = function(e, t, i) {
						for (var n = 4 * (e * this.width + i), o = e; o <= t; ++o) {
							if (this.pointColor[i][o] != this.tempColor) {
								this.pixelColor[n] = this.tempR, this.pixelColor[n + 1] = this.tempG, this.pixelColor[n + 2] = this.tempB, this.pixelColor[n + 3] = this.tempA;
								var a = this.pointColor[i][o];
								this.colorCount[a]--, this.colorCount[this.tempColor]++, this.pointColor[i][o] = this.tempColor
							}
							n += 4 * this.width
						}
					}, n.convertToNumber = function(e, t, i, n) {
						return void 0 === n && (n = 255), (254 & e) << 23 | t << 16 | i << 8 | n
					}, n.convertToRGBA = function(e) {
						return {
							r: (2130706432 & e) >> 23,
							g: (16711680 & e) >> 16,
							b: (65280 & e) >> 8,
							a: 255 & e
						}
					}, t(e, [{
						key: "width",
						get: function() {
							return this._witdh
						}
					}, {
						key: "height",
						get: function() {
							return this._height
						}
					}]), e
				}());
				var o = function() {
					function e(e, t) {
						void 0 === e && (e = 0), void 0 === t && (t = 0), i(this, "x", void 0), i(this, "y", void 0), this.x = e, this.y = t
					}
					return e.prototype.set = function(e, t) {
						"number" == typeof e ? (this.x = e, this.y = t) : (this.x = e.x, this.y = e.y)
					}, e
				}();
				n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/Loader.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./GameEventType.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy, n = e.assetManager, o = e.error, a = e.log
			}, function(e) {
				s = e.default
			}, function(e) {
				r = e.EventType
			}],
			execute: function() {
				i._RF.push({}, "76f22jaHdBP6q6d5du5twvn", "Loader", void 0);
				var u = e("default", function() {
					function e() {}
					return e.showProgressBar = function(e) {
						void 0 === e && (e = 0), this.showMask(), s.emit(r.Common.LoadAssetEvent.showProgress, e)
					}, e.updateProgress = function(e, t, i) {
						var n = e / t;
						n > 1 && (n = 1), s.emit(r.Common.LoadAssetEvent.updateProgress, n)
					}, e.hideProgressBar = function(e) {
						void 0 === e && (e = 1), s.emit(r.Common.LoadAssetEvent.hideProgress), this.hideMask(e)
					}, e.showMask = function(e) {
						void 0 === e && (e = 1), s.emit(r.Common.UIEvent.showTouchMask, e)
					}, e.hideMask = function(e) {
						void 0 === e && (e = 1), s.emit(r.Common.UIEvent.hideTouchMask, e)
					}, e.loadBundle = function(e, t, i, n) {
						void 0 === i && (i = !1), void 0 === n && (n = !1), this.loadSubpackage(e, t, i, n)
					}, e.loadSubpackage = function(e, t, i, n) {
						void 0 === i && (i = !1), void 0 === n && (n = !1);
						var o = this.subpackageRecords[e];
						switch (o || (o = new l(e, t, i), this.subpackageRecords[e] = o), o.state) {
							case c.inited:
								i && this.showSubpackageProgress(), n && this.subpackageSequence.length > 0 ? (this.subpackageSequence.splice(1, 0, e), o.enterSequence()) : (this.subpackageSequence.push(e), this.subpackageSequence.length > 1 ? o.enterSequence() : this._loadSubpackage(e));
								break;
							case c.waiting:
								if (i && this.showSubpackageProgress(), o.pushCb(t, i), n && this.subpackageSequence.length > 0) {
									var a = this.subpackageSequence.indexOf(e);
									a > 1 && (this.subpackageSequence.splice(a, 1), this.subpackageSequence.splice(1, 0, e), o.enterSequence())
								}
								break;
							case c.turnTo:
								i && this.showSubpackageProgress(), o.pushCb(t, i), this._loadSubpackage(e);
								break;
							case c.loading:
								i && this.showSubpackageProgress(), o.pushCb(t, i);
								break;
							case c.finished:
								setTimeout(function() {
									t && t()
								}, 0)
						}
					}, e._loadSubpackage = function(e) {
						var t = this;
						console.log("开始加载子包：", e), this.subpackageRecords[e].loadStart(), n.loadBundle(e, function(i, n) {
							if (i) return console.error("子包加载出错：", e), void console.error(i);
							console.log("子包加载完成：", e);
							var o = t.subpackageSequence.indexOf(e);
							if (t.subpackageSequence.splice(o, 1), t.hideSubpackageProgress(), t.subpackageRecords[e].loadFinish(), t.subpackageSequence.length > 0) {
								var a = t.subpackageSequence[0],
									s = t.subpackageRecords[a];
								s && s.turnToLoad(), t.loadSubpackage(a, null, !!t.subpackageRecords[a].maskCount)
							}
						})
					}, e.showSubpackageProgress = function() {
						null === this.subpackageProgressTimer && (this.showProgressBar(), this.subpackageProgress = 0, this.subpackageProgressTimer = setInterval(this.updateSubpackageProgress.bind(this), 100))
					}, e.updateSubpackageProgress = function() {
						this.subpackageProgress += .03, this.subpackageProgress >= 1 && (this.subpackageProgress = 0), s.emit(r.Common.LoadAssetEvent.updateProgress, this.subpackageProgress)
					}, e.hideSubpackageProgress = function() {
						if (null !== this.subpackageProgressTimer) {
							for (var e = 0, t = this.subpackageSequence.length - 1; t >= 0; --t) e += this.subpackageRecords[this.subpackageSequence[t]].maskCount;
							0 == e && (clearInterval(this.subpackageProgressTimer), this.subpackageProgressTimer = null, this.subpackageProgress = 0, this.hideProgressBar())
						}
					}, e.loadBundleRes = function(e, t, i, a, s) {
						var r = this,
							u = n.getBundle(e);
						if (!u) return console.error("资源包 " + e + " 尚未加载，无法获取资源:", t), void i(null);
						var c = null;
						void 0 === a ? s = !0 : "boolean" == typeof a ? s = !!a : (c = a, void 0 === s && (s = !0)), s && this.showMask(), null !== c ? u.load(t, c, function(e, t) {
							if (s && r.hideMask(), e) return o(e.message || e), void i(null);
							i(t)
						}) : u.load(t, function(e, t) {
							if (s && r.hideMask(), e) return o(e.message || e), void i(null);
							i(t)
						})
					}, e.loadBundleArray = function(e, t, i, a, s) {
						var r = this,
							u = n.getBundle(e);
						if (!u) return console.error("资源包 " + e + " 尚未加载，无法获取资源数组:", t), void i(null);
						var c = null;
						void 0 === a ? s = !0 : "boolean" == typeof a ? s = !!a : (c = a, void 0 === s && (s = !0)), s && this.showProgressBar(), c ? u.load(t, c, this.updateProgress.bind(this), function(e, t) {
							if (s && r.hideProgressBar(), e) return o(e.message || e), void i(null);
							i(t)
						}) : u.load(t, this.updateProgress.bind(this), function(e, t) {
							if (s && r.hideProgressBar(), e) return o(e.message || e), void i(null);
							i(t)
						})
					}, e.loadBundleDir = function(e, t, i, o, s) {
						var r = this,
							u = n.getBundle(e);
						if (!u) return console.error("资源包 " + e + " 尚未加载，无法获取资源文件夹:", t), void i(null);
						var c = null;
						void 0 === o ? s = !0 : "boolean" == typeof o ? s = !!o : (c = o, void 0 === s && (s = !0)), s && this.showProgressBar(), c ? u.loadDir(t, c, this.updateProgress.bind(this), function(e, t) {
							if (s && r.hideProgressBar(), e) return a(e), void i(null);
							i(t)
						}) : u.loadDir(t, this.updateProgress.bind(this), function(e, t) {
							if (s && r.hideProgressBar(), e) return a(e), void i(null);
							i(t)
						})
					}, e.loadBundleScene = function(e, t, i, o) {
						var a = this,
							s = n.getBundle(e);
						if (!s) return console.error("资源包 " + e + " 尚未加载，无法加载场景:", t), void i(null);
						void 0 === o && (o = !0), o && this.showProgressBar(), s.loadScene(t, this.updateProgress.bind(this), function(e, t) {
							o && a.hideProgressBar(), e ? console.error(e) : i(t)
						})
					}, e.preLoadBundleRes = function(e, t, i) {
						var o = n.getBundle(e);
						o && (void 0 === i ? o.preload(t) : o.preload(t, i))
					}, e.preLoadBundleArray = function(e, t, i) {
						var o = n.getBundle(e);
						o && (void 0 === i ? o.preload(t) : o.preload(t, i))
					}, e.preLoadBundleDir = function(e, t, i) {
						var o = n.getBundle(e);
						o && (void 0 === i ? o.preloadDir(t) : o.preloadDir(t, i))
					}, e.preLoadBundleScene = function(e, t) {
						var i = n.getBundle(e);
						i && i.preloadScene(t)
					}, e
				}());
				t(u, "dirAsset", {}), t(u, "singleAsset", {}), t(u, "subpackageRecords", {}), t(u, "subpackageSequence", []), t(u, "subpackageProgressTimer", null), t(u, "subpackageProgress", 0);
				var c, l = function() {
					function e(e, i, n) {
						t(this, "name", void 0), t(this, "state", void 0), t(this, "cbs", void 0), t(this, "maskCount", void 0), this.name = e, this.state = c.inited, this.cbs = [], i && this.pushCb(i), this.maskCount = n ? 1 : 0
					}
					var i = e.prototype;
					return i.pushCb = function(e, t) {
						e && this.cbs.push(e), t && this.maskCount++
					}, i.enterSequence = function() {
						this.state = c.waiting
					}, i.loadStart = function() {
						this.state = c.loading
					}, i.loadFinish = function() {
						for (; this.cbs.length > 0;) {
							var e = this.cbs.shift();
							e && e()
						}
						this.state = c.finished, this.maskCount = 0
					}, i.turnToLoad = function() {
						this.state = c.turnTo
					}, e
				}();
				! function(e) {
					e[e.inited = 1] = "inited", e[e.waiting = 2] = "waiting", e[e.loading = 3] = "loading", e[e.finished = 4] = "finished", e[e.turnTo = 5] = "turnTo"
				}(c || (c = {})), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/HeyGamePlatform.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./GameEventType.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s;
		return {
			setters: [function(e) {
				t = e.defineProperty, i = e.createClass
			}, function(e) {
				n = e.cclegacy, o = e._decorator
			}, function(e) {
				a = e.default
			}, function(e) {
				s = e.EventType
			}],
			execute: function() {
				var r, u, c;
				n._RF.push({}, "7c517tANpZHg4eAOOzH8GS1", "HeyGamePlatform", void 0);
				var l = o.ccclass;
				e("default", l((c = u = function() {
					function e() {
						console.log("HeyGamePlatform constructor"), HeyGameConfig.HeyGameSDKConfig.instance.init()
					}
					var t = e.prototype;
					return t.init = function(e) {
						void 0 === e && (e = null), e && localStorage.setItem("hey_game_openId", e), HeyGameAdSDK.GameDataSDK.instance.initGameSDK(), HeyGameAdSDK.GameAdSDK.instance.initGameSDK(function() {
							HeyGameConfig.HeyGameSDKConfig.onVIVOMiniGame
						}), this.initGameSDK()
					}, t.initGameSDK = function() {
						HeyGameConfig.HeyGameSDKConfig.onOPPOMiniGame || HeyGameConfig.HeyGameSDKConfig.onVIVOMiniGame || HeyGameConfig.HeyGameSDKConfig.onMobile || HeyGameConfig.HeyGameSDKConfig.onPC
					}, t.initAdSDK = function(e, t) {
						HeyGameConfig.HeyGameSDKConfig.onOPPOMiniGame || HeyGameConfig.HeyGameSDKConfig.onVIVOMiniGame || HeyGameConfig.HeyGameSDKConfig.onMobile || HeyGameConfig.HeyGameSDKConfig.onPC
					}, t.showGameNativeAd = function(e, t, i, n, o) {}, t.hideGameNativeAd = function() {}, t.showFinishNativeAd = function(e, t, i, n) {}, t.hideFinishNativeAd = function() {}, t.addIconToDesktop = function(e) {
						console.log("addIconToDesktop"), HeyGameAdSDK.GameAdSDK.SDK.hasShortcutInstalled(function(t) {
							t ? e(!1) : HeyGameAdSDK.GameAdSDK.SDK.installShortcutIcon(function(t) {
								t ? HeyGameAdSDK.GameAdSDK.SDK.hasShortcutInstalled(function(t) {
									e(t)
								}) : e(!1)
							})
						})
					}, t.showMoreGame = function() {
						HeyGameAdSDK.GameAdSDK.SDK.showPlatformDrawerGameAd(function(e) {
							e && HeyGameAdSDK.GameAdSDK.SDK.hideBannerAd()
						})
					}, t.showFinishGameBannerAd = function() {
						HeyGameAdSDK.GameAdSDK.SDK.showPlatformBannerGameAd()
					}, t.hideFinishGameBannerAd = function() {
						HeyGameAdSDK.GameAdSDK.SDK.hidePlatformBannerGameAd()
					}, t.startGameEvent = function() {
						console.log("startGameEvent"), HeyGameAdSDK.GameAdSDK.SDK.startGameEvent(this)
					}, t.endGameEvent = function() {
						console.log("endGameEvent"), HeyGameAdSDK.GameAdSDK.SDK.endGameEvent(this)
					}, t.onLevelBegin = function(e) {
						HeyGameAdSDK.GameAdSDK.SDK.onBegin("" + (2e3 + e))
					}, t.onLevelCompleted = function(e) {
						HeyGameAdSDK.GameAdSDK.SDK.onCompleted("" + (2e3 + e))
					}, t.onLevelFailed = function(e, t) {
						var i = {
							missionId: "" + (2e3 + e),
							isStop: t
						};
						HeyGameAdSDK.GameAdSDK.SDK.onFailed(i)
					}, t.showInsertAd = function(e) {
						HeyGameAdSDK.GameAdSDK.SDK.showInsertAd(e)
					}, t.showVideoAd = function(e, t) {
						void 0 === e && (e = 300), HeyGameAdSDK.GameAdSDK.SDK.showVideoAd(e, function(e) {
							switch (e) {
								case 0:
									t && t(!0);
									break;
								case 1:
									t && t(!1);
									break;
								case 2:
								default:
									t && t(!1)
							}
						}, function(e) {
							e ? HeyGameConfig.HeyGameSDKConfig.onVIVOMiniGame && a.emit(s.Common.AudioEvent.pause) : HeyGameConfig.HeyGameSDKConfig.onVIVOMiniGame && a.emit(s.Common.AudioEvent.resume)
						})
					}, i(e, null, [{
						key: "instance",
						get: function() {
							return e._instance || (e._instance = new e), e._instance
						}
					}]), e
				}(), t(u, "_instance", void 0), r = c)) || r), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/ObjectPool.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n;
		return {
			setters: [function(e) {
				t = e.createClass, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy
			}],
			execute: function() {
				n._RF.push({}, "83a89tOkehPm7L82VVpHVHL", "ObjectPool", void 0), e("Pool", function() {
					function e() {
						i(this, "_pool", []), i(this, "map", {}), i(this, "count", 0), this._pool = [], this.count = 0
					}
					var n = e.prototype;
					return n.get = function(e, t) {
						if (this.count > 0) {
							this.count -= 1;
							var i = this._pool[this.count];
							return i.reuse(t), i
						}
						var n = new e;
						return this.map[n.Id] = n, n.poolIndex = this._pool.length, this._pool.push(n), n.init(t), n
					}, n.getItemById = function(e) {
						return this.map[e]
					}, n.put = function(e) {
						e.unuse();
						var t = this._pool[this.count];
						this._pool[e.poolIndex] = t, t.poolIndex = e.poolIndex, this._pool[this.count] = e, e.poolIndex = this.count, this.count++
					}, n.getAllItems = function() {
						return this._pool
					}, n.getAllItemMap = function() {
						return this.map
					}, n.reset = function() {
						for (var e = this.count, t = this._pool.length; e < t; ++e) this._pool[e].unuse();
						this.count = this._pool.length
					}, t(e, [{
						key: "usingCount",
						get: function() {
							return this._pool.length - this.count
						}
					}]), e
				}()), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/resToDbbin.ts", ["cc"], function() {
		"use strict";
		var e, t;
		return {
			setters: [function(i) {
				e = i.cclegacy, t = i.assetManager
			}],
			execute: function() {
				e._RF.push({}, "85966ZwiL1ARJJQ36+Pv9s0", "resToDbbin", void 0),
					function() {
						if (void 0 !== window.h5api) {
							console.log("resToDbbin"), t.transformPipeline.append(function(e, t) {
								for (var i = e.output = e.input, n = 0; n < i.length; n++) {
									var o = i[n];
									if (o.url) {
										o.url = o.url.replace("@", "_"), o.url = o.url.replace(".bin", ".dbbin");
										var a = o.url.split(".");
										if (a.length >= 2 && "cconb" == a[a.length - 1]) {
											o.url = "";
											for (var s = 0; s < a.length - 1; s++) {
												var r = a[s];
												o.url += r + "."
											}
											o.url += "_cconb.dbbin"
										}
									}
								}
								return null
							});
							var e = t.downloader._downloaders,
								i = e[".dbbin"];
							t.downloader.register("dbbin", function(t, n, o) {
								t.includes("_cconb") ? e[".cconb"]() : i()
							})
						}
					}(), e._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EditorTileContent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty, s = e.createClass
			}, function(e) {
				r = e.cclegacy, u = e._decorator, c = e.Enum, l = e.CCInteger, d = e.v2, h = e.Label
			}, function(e) {
				p = e.GlobalEnum
			}, function(e) {
				f = e.default
			}, function(e) {
				m = e.default
			}],
			execute: function() {
				var v, g, y, b, S, C, w, A, T, x, P, D, B, k, _;
				r._RF.push({}, "8b2357nX2tED7tq6gzVFmH1", "EditorTileContent", void 0);
				var E = u.ccclass,
					I = u.property;
				e("EditorTileContent", (v = E("EditorTileContent"), g = I({
					type: c(p.TileContentType)
				}), y = I({
					type: c(p.TileContentType),
					displayName: "功能类型"
				}), b = I({
					type: c(p.ShopType),
					displayName: "升级的属性类型",
					visible: function() {
						return this._contentType == p.TileContentType.shop
					}
				}), S = I({
					type: l,
					displayName: "可升级到最高等级",
					visible: function() {
						return this._contentType == p.TileContentType.shop
					}
				}), C = I({
					type: c(p.WeaponType),
					displayName: "武器类型",
					visible: function() {
						return this._contentType == p.TileContentType.weapon
					}
				}), w = I({
					type: l,
					displayName: "士兵雇佣价格",
					visible: function() {
						return this._contentType == p.TileContentType.soldier
					}
				}), A = I({
					type: l,
					displayName: "房间解锁金币",
					visible: function() {
						return this._contentType == p.TileContentType.unlockRoom
					}
				}), v((P = t((x = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "_contentType", P, o(t)), n(o(t), "_shopType", D, o(t)), a(o(t), "_maxLv", 1), n(o(t), "_weaponType", B, o(t)), n(o(t), "_soldierGold", k, o(t)), n(o(t), "_unlockRoomGold", _, o(t)), a(o(t), "_tilePos", d()), t
					}
					i(t, e);
					var r = t.prototype;
					return r.getShopStr = function() {
						var e = "";
						switch (this._shopType) {
							case p.ShopType.hp:
								e = "血量";
								break;
							case p.ShopType.moveSpeed:
								e = "移速";
								break;
							case p.ShopType.atk:
								e = "攻击";
								break;
							case p.ShopType.atkSpeed:
								e = "攻速";
								break;
							case p.ShopType.geBan:
								e = "隔板";
								break;
							case p.ShopType.random:
								e = "随机"
						}
						return e
					}, r.getShopData = function() {
						return {
							type: this.contentType,
							shopType: this.shopType,
							maxLv: this.maxLv
						}
					}, r.getWeaponStr = function() {
						return "武器"
					}, r.getWeaponData = function() {
						return {
							type: this.contentType,
							weaponType: this.weaponType
						}
					}, r.getSoldierStr = function() {
						return "士兵"
					}, r.getSoldierData = function() {
						return {
							type: this.contentType,
							soldierMaxGold: this.soldierGold,
							soldierRemainGold: this.soldierGold,
							soldierLv: 1
						}
					}, r.getUnlockRoomStr = function() {
						return "房间"
					}, r.getUnlockRoomData = function() {
						return {
							type: this.contentType,
							unlockRoomMaxGold: this.unlockRoomGold,
							unlockRoomRemainGold: this.unlockRoomGold
						}
					}, r.updateStr = function() {
						var e = "";
						switch (this.contentType) {
							case p.TileContentType.shop:
								e = this.getShopStr();
								break;
							case p.TileContentType.soldier:
								e = this.getSoldierStr();
								break;
							case p.TileContentType.weapon:
								e = this.getWeaponStr();
								break;
							case p.TileContentType.unlockRoom:
								e = this.getUnlockRoomStr()
						}
						this.node.getComponent(h).string = e
					}, r.getData = function() {
						var e;
						switch (this.contentType) {
							case p.TileContentType.shop:
								e = this.getShopData();
								break;
							case p.TileContentType.soldier:
								e = this.getSoldierData();
								break;
							case p.TileContentType.weapon:
								e = this.getWeaponData();
								break;
							case p.TileContentType.unlockRoom:
								e = this.getUnlockRoomData()
						}
						return e.tilePos = this.tilePos, e
					}, s(t, [{
						key: "contentType",
						get: function() {
							return this._contentType
						},
						set: function(e) {
							this._contentType = e, this.updateStr()
						}
					}, {
						key: "shopType",
						get: function() {
							return this._shopType
						},
						set: function(e) {
							this._shopType = e, this.updateStr()
						}
					}, {
						key: "maxLv",
						get: function() {
							return this._maxLv
						},
						set: function(e) {
							this._maxLv = e, this.updateStr()
						}
					}, {
						key: "weaponType",
						get: function() {
							return this._weaponType
						},
						set: function(e) {
							this._weaponType = e, this.updateStr()
						}
					}, {
						key: "soldierGold",
						get: function() {
							return this._soldierGold
						},
						set: function(e) {
							this._soldierGold = e, this.updateStr()
						}
					}, {
						key: "unlockRoomGold",
						get: function() {
							return this._unlockRoomGold
						},
						set: function(e) {
							this._unlockRoomGold = Math.round(e), this.updateStr()
						}
					}, {
						key: "tilePos",
						get: function() {
							var e = this.node.getPosition(),
								t = f.GameRule.tileSize;
							return this._tilePos.x = Math.round(.2 * e.x / t.x), this._tilePos.y = Math.round(.2 * e.y / t.z), this._tilePos
						}
					}]), t
				}(m)).prototype, "_contentType", [g], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return p.TileContentType.shop
					}
				}), t(x.prototype, "contentType", [y], Object.getOwnPropertyDescriptor(x.prototype, "contentType"), x.prototype), D = t(x.prototype, "_shopType", [I], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return p.ShopType.hp
					}
				}), t(x.prototype, "shopType", [b], Object.getOwnPropertyDescriptor(x.prototype, "shopType"), x.prototype), t(x.prototype, "maxLv", [S], Object.getOwnPropertyDescriptor(x.prototype, "maxLv"), x.prototype), B = t(x.prototype, "_weaponType", [I], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return p.WeaponType.weapon1
					}
				}), t(x.prototype, "weaponType", [C], Object.getOwnPropertyDescriptor(x.prototype, "weaponType"), x.prototype), k = t(x.prototype, "_soldierGold", [I], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 100
					}
				}), t(x.prototype, "soldierGold", [w], Object.getOwnPropertyDescriptor(x.prototype, "soldierGold"), x.prototype), _ = t(x.prototype, "_unlockRoomGold", [I], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 100
					}
				}), t(x.prototype, "unlockRoomGold", [A], Object.getOwnPropertyDescriptor(x.prototype, "unlockRoomGold"), x.prototype), T = x)) || T)), r._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GameData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./EnemyDataTemplate.ts", "./LevelMapDataTemplate.ts", "./LevelDataTemplate.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy
			}, function(e) {
				n = e.GlobalEnum
			}, function(e) {
				o = e.default
			}, function(e) {
				a = e.default
			}, function(e) {
				s = e.default
			}],
			execute: function() {
				i._RF.push({}, "8b8f7V7UqZE24WpKssNCDL7", "GameData", void 0);
				var r = e("default", function() {
					function e() {}
					return e.init = function() {
						this.data = {}, this.data[n.GameDataType.levelData] = s.getData(), this.levelData = this.data[n.GameDataType.levelData], this.data[n.GameDataType.enemyData] = o.getData(), this.data[n.GameDataType.levelMapData] = a.getData()
					}, e.setData = function(e, t) {
						for (var i in n.GameDataType) {
							var o = this.getUrlsIndex(n.GameDataType[i], t);
							o >= 0 ? this.data[n.GameDataType[i]] = e[o].json : console.warn("数据类型不存在：", n.GameDataType[i])
						}
						for (var a in n.GameDataType) {
							var s = n.GameDataType[a];
							if (s != n.GameDataType.levelData && this.data[s] && Array.isArray(this.data[s]) && void 0 !== this.data[s][0] && void 0 !== this.data[s][0].id) {
								for (var r = this.data[s], u = {}, c = r.length - 1; c >= 0; --c) u[r[c].id] = r[c];
								this.data[s] = u
							}
						}
						this.levelData = this.data[n.GameDataType.levelData]
					}, e.getUrlsIndex = function(e, t) {
						for (var i = t.length - 1; i >= 0; --i)
							if (t[i].indexOf(e) >= 0) return i;
						return -1
					}, e.addData = function(e, t) {
						this.data[e] ? console.warn("对应类型的数据已经存在，请检查类型是否重名:", e) : this.data[e] = t
					}, e.getData = function(e, t) {
						return void 0 === this.data[e] ? (console.warn("不存在对应类型的数据：", e), null) : void 0 === t ? this.data[e] : this.data[e][t]
					}, e.getLevelData = function(e, t) {
						var i = this;
						console.error("测试，关卡数据为第一关"), setTimeout(function() {
							var e = i.levelData[1];
							e.lv = 1, t(e)
						}, 0)
					}, e
				}());
				t(r, "data", {}), t(r, "levelData", []), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EventManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n;
		return {
			setters: [function(e) {
				t = e.defineProperty, i = e.createClass
			}, function(e) {
				n = e.cclegacy
			}],
			execute: function() {
				n._RF.push({}, "923b3ZTA9BPFb6bNUNyeF3N", "EventManager", void 0);
				var o = e("default", function() {
					function e() {}
					return e.on = function(e, t, i) {
						this.events.hasOwnProperty(e) || (this.events[e] = []);
						for (var n = this.events[e].length - 1; n >= 0; --n)
							if (this.events[e][n].equal(t, i)) return null;
						var o = new a(t, i);
						return this.events[e].push(o), o
					}, e.once = function(e, t, i) {
						this.onceEvents.hasOwnProperty(e) || (this.onceEvents[e] = []);
						for (var n = this.onceEvents[e].length - 1; n >= 0; --n)
							if (this.onceEvents[e][n].equal(t, i)) return null;
						var o = new a(t, i);
						return this.onceEvents[e].push(o), o
					}, e.off = function(e, t, i) {
						if (!t) return this.events[e] = [], void(this.onceEvents[e] = []);
						if (t instanceof a) {
							if (this.events.hasOwnProperty(e))
								for (var n = this.events[e].length - 1; n >= 0; --n)
									if (this.events[e][n].id == t.id) {
										this.events[e].splice(n, 1);
										break
									} if (this.onceEvents.hasOwnProperty(e))
								for (var o = this.onceEvents[e].length - 1; o >= 0; --o)
									if (this.onceEvents[e][o].id == t.id) {
										this.onceEvents[e].splice(o, 1);
										break
									}
						} else {
							if (this.events.hasOwnProperty(e))
								for (var s = this.events[e].length - 1; s >= 0; --s)
									if (this.events[e][s].equal(t, i)) {
										this.events[e].splice(s, 1);
										break
									} if (this.onceEvents.hasOwnProperty(e))
								for (var r = this.onceEvents[e].length - 1; r >= 0; --r)
									if (this.onceEvents[e][r].equal(t, i)) {
										this.onceEvents[e].splice(r, 1);
										break
									}
						}
					}, e.offGroup = function(e, t) {
						if (this.events.hasOwnProperty(e))
							for (var i = t.length - 1; i >= 0; --i)
								for (var n = this.events[e].length - 1; n >= 0; --n)
									if (this.events[e][n].id == t[i].id) {
										this.events[e].splice(n, 1);
										break
									} if (this.onceEvents.hasOwnProperty(e))
							for (var o = t.length - 1; o >= 0; --o)
								for (var a = this.onceEvents[e].length - 1; a >= 0; --a)
									if (this.onceEvents[e][a].id == t[o].id) {
										this.onceEvents[e].splice(a, 1);
										break
									}
					}, e.emit = function(e, t, i) {
						if (this.events.hasOwnProperty(e))
							for (var n = this.events[e], o = n.length - 1; o >= 0; --o) void 0 === t ? n[o].cb.call(n[o].target) : void 0 === i ? n[o].cb.call(n[o].target, t) : n[o].cb.call(n[o].target, t, i);
						if (this.onceEvents.hasOwnProperty(e)) {
							for (var a = this.onceEvents[e], s = a.length - 1; s >= 0; --s) void 0 === t ? a[s].cb.call(a[s].target) : void 0 === i ? a[s].cb.call(a[s].target, t) : a[s].cb.call(a[s].target, t, i);
							delete this.onceEvents[e]
						}
					}, e
				}());
				t(o, "events", {}), t(o, "onceEvents", {});
				var a = e("Handler", function() {
					function e(i, n) {
						t(this, "_id", void 0), t(this, "cb", void 0), t(this, "target", void 0), this._id = e.idCount++, this.target = n, this.cb = i
					}
					return e.prototype.equal = function(e, t) {
						return this.target === t && this.cb == e
					}, i(e, [{
						key: "id",
						get: function() {
							return this._id
						}
					}]), e
				}());
				t(a, "idCount", 0), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/HeyGameOPPOSDK.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./HeyGameGlobalData.ts", "./EventManager.ts", "./GameEventType.ts", "./SDK.ts", "./Loader.ts", "./HeyGamePlatform.ts", "./HeyGameNativeAd.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p;
		return {
			setters: [function(e) {
				t = e.inheritsLoose, i = e.defineProperty, n = e.assertThisInitialized
			}, function(e) {
				o = e.cclegacy, a = e.instantiate
			}, function(e) {
				s = e.default
			}, function(e) {
				r = e.NATIVE_AD_STYLE
			}, function(e) {
				u = e.default
			}, function(e) {
				c = e.EventType
			}, function(e) {
				l = e.default
			}, function(e) {
				d = e.default
			}, function(e) {
				h = e.default
			}, function(e) {
				p = e.HeyGameNativeAd
			}],
			execute: function() {
				o._RF.push({}, "952658LRsFCAo4NhpxXEjEG", "HeyGameOPPOSDK", void 0), e("default", function(e) {
					function o() {
						for (var t, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
						return t = e.call.apply(e, [this].concat(a)) || this, i(n(t), "apiName", "qg"), i(n(t), "sceneid", 0), i(n(t), "channel_id", void 0), i(n(t), "curNativeAdType", null), i(n(t), "nativeParent", null), i(n(t), "bigNativeAd", null), i(n(t), "bannerNativeAd", null), t
					}
					t(o, e);
					var l = o.prototype;
					return l.init = function(e) {
						this.api = window[this.apiName], u.emit(c.Common.SDKEvent.inited)
					}, l.onEvents = function() {
						u.on(c.Common.SDKEvent.showMsg, this.showMessage, this), u.on(c.Common.SDKEvent.showVideo, this.showVideo, this), u.on(c.Common.SDKEvent.showVideoTipCancel, this.onVideoTipCancel, this), u.on(c.Common.SDKEvent.showVideoTipContinue, this.onVideoTipContinue, this), u.on(c.Common.SDKEvent.showInsertAd, this.showInterstitialAd, this), u.on(c.Common.SDKEvent.vibrateLong, this.onVibrateLong, this), u.on(c.Common.SDKEvent.vibrateShort, this.onVibrateShort, this), u.on(c.Common.SDKEvent.triggerGC, this.triggerGC, this), u.on(c.Common.SDKEvent.showNativeAd, this.showNativeAd, this), u.on(c.Common.SDKEvent.hideAllNativeAd, this.hideAllNativeAd, this), u.on(c.Common.SDKEvent.shareToFriends, this.shareToAnyOne, this), u.on(c.Common.SDKEvent.getTableIconState, this.getTableIconState, this), u.on(c.Common.SDKEvent.addTableIcon, this.addTableIcon, this), u.on(c.Common.HeyGameSDK.initAdNode, this.initAdSDK, this), u.on(c.Common.HeyGameSDK.clickNativeAd, this.onClickNativeAd, this), u.on(c.Common.ALDEvent.levelStart, this.onLevelStart, this), u.on(c.Common.ALDEvent.levelWin, this.onLevelWin, this), u.on(c.Common.ALDEvent.levelLose, this.onLevelLose, this), u.on(c.Common.ALDEvent.levelExit, this.onLevelExit, this), u.on(c.Common.HeyGameSDK.showMoreGame, this.showMoreGame, this), u.on(c.Common.HeyGameSDK.CloseGame, this.onCloseGame, this)
					}, l.initAdSDK = function(e) {
						h.instance.init(), h.instance.initAdSDK(e, r.BIG_AD), this.nativeParent = e
					}, l.showVideoAd = function(e) {
						var t = this;
						console.log("播放视频,301"), h.instance.showVideoAd(301, function(e) {
							console.error("视频播放结果：", e), e ? t.onVideoSuccess() : (t.onVideoQuit(), t.onVideoHide())
						})
					}, l.showBanner = function(e) {}, l.showInterstitialAd = function(e) {
						console.log("显示插屏,201"), h.instance.showInsertAd(201)
					}, l.showNativeAd = function(e) {
						if (e.visible) switch (e.style) {
							case r.BIG_AD:
							case "BIG_AD":
								return this.showNativeBigAd(e), void this.hideNativeBannerAd();
							case r.BANNER_AD:
							case "BANNER_AD":
								return this.showNativeBannerAd(e), void this.hideNativeBigAd();
							default:
								return void console.warn("未定义的原生广告样式:", e.style)
						} else this.hideAllNativeAd()
					}, l.hideAllNativeAd = function() {
						this.hideNativeBigAd(), this.hideNativeBannerAd()
					}, l.showNativeBigAd = function(e) {
						var t = this;
						if (this.bigNativeAd) this.bigNativeAd.show(e);
						else {
							if (!this.nativeParent) return;
							d.loadBundle("HeyGameSDK", function() {
								d.loadBundleRes("HeyGameSDK", "HeyGameSDK/BigNativeAd", function(i) {
									if (t.bigNativeAd) t.bigNativeAd.show(e);
									else {
										var n = a(i);
										t.nativeParent.addChild(n), t.bigNativeAd = n.getComponent(p), t.bigNativeAd.init(), t.bigNativeAd.show(e)
									}
								})
							})
						}
					}, l.hideNativeBigAd = function() {
						this.bigNativeAd && this.bigNativeAd.hide()
					}, l.showNativeBannerAd = function(e) {
						var t = this;
						if (this.bannerNativeAd) this.bannerNativeAd.show(e);
						else {
							if (!this.nativeParent) return;
							d.loadBundle("HeyGameSDK", function() {
								d.loadBundleRes("HeyGameSDK", "HeyGameSDK/BannerNativeAd", function(i) {
									if (t.bannerNativeAd) t.bannerNativeAd.show(e);
									else {
										var n = a(i);
										t.nativeParent.addChild(n), t.bannerNativeAd = n.getComponent(p), t.bannerNativeAd.init(), t.bannerNativeAd.show(e)
									}
								})
							})
						}
					}, l.hideNativeBannerAd = function() {
						this.bannerNativeAd && this.bannerNativeAd.hide()
					}, l.onClickNativeAd = function() {
						console.log("收到事件:点击按钮查看原生广告"), this.bigNativeAd && this.bigNativeAd.node.active ? this.bigNativeAd.onBtnScan() : this.bannerNativeAd && this.bannerNativeAd.node.active && this.bannerNativeAd.onBtnScan()
					}, l.onVibrateLong = function() {
						s.driveConfig.vibrate && HeyGameAdSDK.GameAdSDK.SDK.vibrateLong()
					}, l.onVibrateShort = function() {
						s.driveConfig.vibrate && HeyGameAdSDK.GameAdSDK.SDK.vibrateShort()
					}, l.getTableIconState = function(e) {
						HeyGameAdSDK.GameAdSDK.SDK.hasShortcutInstalled(function(t) {
							e(t)
						})
					}, l.addTableIcon = function(e, t) {
						h.instance.addIconToDesktop(function(i) {
							i ? e() : t && t()
						})
					}, l.onCloseGame = function() {
						this.api.exitApplication({})
					}, l.showMoreGame = function() {
						console.log("显示九宫格"), h.instance.showMoreGame()
					}, l.onLevelStart = function(e) {
						console.log("HEY_SDK收到关卡【开始】事件"), "number" == typeof e ? h.instance.onLevelBegin(e) : h.instance.onLevelBegin(e.lv), h.instance.startGameEvent()
					}, l.onLevelWin = function(e) {
						console.log("HEY_SDK收到关卡【胜利】事件"), "number" == typeof e ? h.instance.onLevelCompleted(e) : h.instance.onLevelCompleted(e.lv)
					}, l.onLevelLose = function(e) {
						console.log("HEY_SDK收到关卡【失败】事件"), "number" == typeof e ? h.instance.onLevelFailed(e, !1) : h.instance.onLevelFailed(e.lv, !1)
					}, l.onLevelExit = function(e) {
						console.log("HEY_SDK收到关卡【退出】事件"), "number" == typeof e ? h.instance.onLevelFailed(e, !0) : h.instance.onLevelFailed(e.lv, !0)
					}, o
				}(l)), o._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GlobalData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy
			}],
			execute: function() {
				i._RF.push({}, "9b7f5ivRhVLHI3Ksq5fSQwC", "GlobalData", void 0);
				var n = e("default", function() {
					function e() {}
					return e.get = function(e) {
						return this.data[e]
					}, e.set = function(e, t) {
						this.data[e] = t
					}, e
				}());
				t(n, "data", {}), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GamePlatformType.ts", ["cc"], function(e) {
		"use strict";
		var t;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}],
			execute: function() {
				var i;
				e("GamePlatformType", void 0), t._RF.push({}, "a0a33dEZ9RBsqUmmWr+YJ9q", "GamePlatformType", void 0),
					function(e) {
						e[e.PC = 0] = "PC", e[e.WX = 1] = "WX", e[e.TT = 2] = "TT", e[e.QQ = 3] = "QQ", e[e.OPPO = 4] = "OPPO", e[e.VIVO = 5] = "VIVO", e[e.XiaoMi = 6] = "XiaoMi", e[e.LeYou = 7] = "LeYou", e[e.DYB_QQ = 8] = "DYB_QQ", e[e.Blue_Android = 9] = "Blue_Android", e[e.Blue_IOS = 10] = "Blue_IOS", e[e.HeyGameOPPO = 11] = "HeyGameOPPO", e[e.HeyGameVIVO = 12] = "HeyGameVIVO"
					}(i || (i = e("GamePlatformType", {}))), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EditorWall.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./GameEventType.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty, s = e.createClass
			}, function(e) {
				r = e.cclegacy, u = e._decorator, c = e.CCBoolean, l = e.SpriteFrame, d = e.v2, h = e.v3, p = e.Sprite
			}, function(e) {
				f = e.GlobalEnum
			}, function(e) {
				m = e.default
			}, function(e) {
				v = e.EventType
			}, function(e) {
				g = e.default
			}],
			execute: function() {
				var y, b, S, C, w, A, T, x, P, D;
				r._RF.push({}, "a20cav0jPxBHpDI36ySdQfq", "EditorWall", void 0);
				var B = u.ccclass,
					k = u.property,
					_ = u.executeInEditMode;
				e("EditorWall", (y = B("EditorWall"), b = k({
					displayName: "网格",
					type: c
				}), S = k(l), C = k(l), y(w = _((T = t((A = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "_chuiZhi", T, o(t)), n(o(t), "_wangGe", x, o(t)), n(o(t), "imgNormal", P, o(t)), n(o(t), "imgWangGe", D, o(t)), a(o(t), "_tilePos", d()), t
					}
					return i(t, e), t.prototype.onDestroy = function() {
						this.emit(v.EditorEvent.removeWall, this.tilePos)
					}, s(t, [{
						key: "chuiZhi",
						set: function(e) {
							this._chuiZhi = e, this._chuiZhi ? this.node.eulerAngles = h(0, 0, 90) : this.node.eulerAngles = h(0, 0, 0)
						}
					}, {
						key: "wangGe",
						get: function() {
							return this._wangGe
						},
						set: function(e) {
							this._wangGe = e, this._wangGe ? this.node.getComponent(p).spriteFrame = this.imgWangGe : this.node.getComponent(p).spriteFrame = this.imgNormal
						}
					}, {
						key: "wallModel",
						get: function() {
							return this._wangGe ? f.WallModel.wangGe : f.WallModel.wall
						}
					}, {
						key: "tilePos",
						get: function() {
							var e = this.node.getPosition(),
								t = m.GameRule.tileSize;
							return this._tilePos.x = Math.round(.2 * e.x / t.x), this._tilePos.y = Math.round(.2 * e.y / t.z), this._tilePos
						}
					}]), t
				}(g)).prototype, "_chuiZhi", [k], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return !1
					}
				}), x = t(A.prototype, "_wangGe", [k], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return !1
					}
				}), t(A.prototype, "wangGe", [b], Object.getOwnPropertyDescriptor(A.prototype, "wangGe"), A.prototype), P = t(A.prototype, "imgNormal", [S], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), D = t(A.prototype, "imgWangGe", [C], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), w = A)) || w) || w)), r._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/HeyGameNativeAd.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameEventType.ts", "./Loader.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g, y;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.defineProperty, o = e.assertThisInitialized, a = e.initializerDefineProperty
			}, function(e) {
				s = e.cclegacy, r = e._decorator, u = e.Label, c = e.Sprite, l = e.Node, d = e.assetManager, h = e.SpriteFrame, p = e.UITransform, f = e.v3, m = e.Widget
			}, function(e) {
				v = e.GlobalEnum
			}, function(e) {
				g = e.EventType
			}, null, function(e) {
				y = e.default
			}],
			execute: function() {
				var b, S, C, w, A, T, x, P, D;
				s._RF.push({}, "a811cbpusRAUbKDpfyRtDdO", "HeyGameNativeAd", void 0);
				var B = r.ccclass,
					k = r.property;
				e("HeyGameNativeAd", (b = B("HeyGameNativeAd"), S = k(u), C = k(u), w = k(c), b((x = t((T = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "isLoaded", void 0), n(o(t), "needShow", void 0), n(o(t), "isShowed", void 0), n(o(t), "isClicked", void 0), n(o(t), "btnScanNative", null), n(o(t), "nativeScene", void 0), n(o(t), "heyGameNativeAdObj", void 0), a(o(t), "title", x, o(t)), a(o(t), "desc", P, o(t)), a(o(t), "img", D, o(t)), n(o(t), "autoUpdateTimer", null), n(o(t), "widgetData", void 0), n(o(t), "btnScanCount", 0), n(o(t), "nativeNodeCount", 0), t
					}
					i(t, e);
					var s = t.prototype;
					return s.init = function() {
						this.initContent(), this.initNativeScene(), this.initState()
					}, s.reset = function() {
						this.resetContent(), this.resetNativeScene(), this.resetState()
					}, s.setData = function(e) {
						e.widget && this.setWidget(this.node, e.widget), e.checkNativeBtn && this.setBtnScan(e.checkNativeBtn), e.scene && this.setNativeScene(e.scene)
					}, s.show = function(e) {
						console.log("显示原生广告:", this.node.name, "，节点当前状态isShowed:", this.isShowed), this.isShowed ? this.setData(e) : (this.node.active = !0, this.reset(), this.needShow = !0, this.setData(e), this.updateContent())
					}, s.hide = function() {
						console.log("隐藏原生广告节点:", this.node.name), this.reset(), this.node.active = !1, this.isShowed = !1, this.needShow = !1, this.clearAutoUpdateTimer()
					}, s.initState = function() {
						this.isLoaded = !1, this.needShow = !1, this.isShowed = !1, this.isClicked = !1, this.btnScanNative = null
					}, s.resetState = function() {
						this.isLoaded = !1, this.needShow = !1, this.isShowed = !1, this.isClicked = !1, this.btnScanNative && (this.btnScanNative.off(l.EventType.TOUCH_START, this.onBtnScan, this), this.btnScanNative.active = !1, this.btnScanNative = null)
					}, s.setBtnScan = function(e) {
						if (this.btnScanNative) {
							if (this.btnScanNative == e) return this.node.active && this.isShowed && (this.btnScanNative.active = !0), void this.randomBtnScanImg();
							this.btnScanNative.off(l.EventType.TOUCH_START, this.onBtnScan, this), this.btnScanNative.active = !1, this.btnScanNative = null
						}
						this.btnScanNative = e, this.btnScanNative.on(l.EventType.TOUCH_START, this.onBtnScan, this), this.node.active && this.isShowed && (this.btnScanNative.active = !0), this.randomBtnScanImg()
					}, s.randomBtnScanImg = function() {
						this.btnScanNative && (this.btnScanNative.active = !0)
					}, s.initNativeScene = function() {
						this.nativeScene = {
							ui: "ui",
							lv: "0"
						}
					}, s.resetNativeScene = function() {}, s.setNativeScene = function(e) {
						this.nativeScene.ui = e.ui, this.nativeScene.lv = e.lv
					}, s.initContent = function() {
						this.heyGameNativeAdObj = null
					}, s.resetContent = function() {
						this.clearHeyGameNativeAdObj()
					}, s.clearHeyGameNativeAdObj = function() {
						this.heyGameNativeAdObj && (this.heyGameNativeAdObj.onNativeAdLoadFunc = null,
							this.heyGameNativeAdObj = null)
					}, s.updateContent = function() {
						var e = this,
							t = HeyGameAdSDK.GameAdSDK.SDK.getHeyGameNativeAdNew(),
							i = !!t;
						this.emit(g.Common.HeyGameSDK.NativeLoadFinished, i), t ? (HeyGameAdSDK.GameAdSDK.SDK.hideBannerAd(), console.log("加载到新的广告数据:", JSON.stringify(t)), this.clearHeyGameNativeAdObj(), this.heyGameNativeAdObj = t, this.updateImg(), this.heyGameNativeAdObj.onNativeAdLoadFunc = function() {
							console.log("原生广告拉取成功，显示新的图片"), e.updateImg()
						}) : (console.log("加载新的广告数据失败"), this.hideImg(), this.setAutoUpdateTimer())
					}, s.clearAutoUpdateTimer = function() {
						null !== this.autoUpdateTimer && (clearTimeout(this.autoUpdateTimer), this.autoUpdateTimer = null)
					}, s.setAutoUpdateTimer = function() {
						var e = this;
						this.clearAutoUpdateTimer(), this.autoUpdateTimer = setTimeout(function() {
							console.log("自动重新拉取广告，needShow:", e.needShow, "isShowed:", e.isShowed), e.needShow && !e.isShowed && e.updateContent()
						}, 3e4)
					}, s.updateImg = function() {
						var e, t = this,
							i = this.heyGameNativeAdObj.adData;
						this.title && (this.title.string = i.title), this.desc && (this.desc.string = i.desc), e = i.imgUrlList && i.imgUrlList[0] ? i.imgUrlList[0] : i.icon, console.log("设置广告图片，url:"), console.log(e), d.loadRemote(e, function(e, i) {
							if (e) return console.error(e), void t.hideImg();
							t.needShow && (t.showImg(), t.img.spriteFrame = h.createWithImage(i))
						})
					}, s.showImg = function() {
						this.isShowed = !0, this.node.active = !0
					}, s.hideImg = function() {
						this.isShowed = !1, this.node.active = !1, this.btnScanNative && (this.btnScanNative.active = !1)
					}, s.setWidget = function(e, t, i) {
						if (this.widgetData !== t) {
							this.widgetData = t;
							var n = e.getComponent(p);
							void 0 !== t.width && (n.width = t.width), void 0 !== t.height && (n.height = t.height);
							var o = f(),
								a = !1;
							void 0 !== t.x ? (o.x = t.x, a = !0) : o.x = e.position.x, void 0 !== t.y ? (o.y = t.y, a = !0) : o.y = e.position.y, a && (o.z = e.position.z, e.setPosition(o)), o.x = o.y = o.z = 1, void 0 !== t.scale && (o.x = t.scale.x, o.y = t.scale.y), e.setScale(o);
							var s = e.getComponent(m);
							s || (s = e.addComponent(m)), s.isAbsoluteBottom = !0, s.isAbsoluteLeft = !0, s.isAbsoluteRight = !0, s.isAbsoluteTop = !0, s.isAbsoluteHorizontalCenter = !0, s.isAbsoluteVerticalCenter = !0, t && (s.target = i || e.parent, void 0 !== t.top ? (s.isAlignTop = !0, s.isAbsoluteTop = t.top > 1, s.top = parseFloat(t.top)) : s.isAlignTop = !1, void 0 !== t.bottom ? (s.isAlignBottom = !0, s.isAbsoluteBottom = t.bottom > 1, s.bottom = parseFloat(t.bottom)) : s.isAlignBottom = !1, void 0 !== t.left ? (s.isAlignLeft = !0, s.isAbsoluteLeft = t.left > 1, s.left = parseFloat(t.left)) : s.isAlignLeft = !1, void 0 !== t.right ? (s.isAlignRight = !0, s.isAbsoluteRight = t.right > 1, s.right = parseFloat(t.right)) : s.isAlignRight = !1, s.isAlignHorizontalCenter = !!t.horizontalCenter, s.isAlignVerticalCenter = !!t.verticalCenter, this.updateWidget(e))
						}
					}, s.updateWidget = function(e) {
						var t = e.getComponent(m);
						t && t.updateAlignment();
						for (var i = e.children.length - 1; i >= 0; --i) this.updateWidget(e.children[i])
					}, s.onBtnScan = function() {
						console.log("点击了查看广告按钮"), this.btnScanCount += 1, this.emit(g.Common.ALDEvent.sendEvent, {
							eventName: v.TongJiEvent.clickNativeBtn,
							data: {
								ui: this.nativeScene.ui,
								lv: this.nativeScene.lv,
								count: this.btnScanCount.toString()
							}
						}), this.heyGameNativeAdObj && this.heyGameNativeAdObj.onNativeAdClick(), this.updateContent()
					}, s.onClick = function() {
						console.log("点击了广告节点"), this.nativeNodeCount += 1, this.emit(g.Common.ALDEvent.sendEvent, {
							eventName: v.TongJiEvent.clickNativeNode,
							data: {
								ui: this.nativeScene.ui,
								lv: this.nativeScene.lv,
								count: this.nativeNodeCount
							}
						}), this.heyGameNativeAdObj && this.heyGameNativeAdObj.onNativeAdClick(), this.updateContent()
					}, s.onBtnClose = function() {
						console.log("点击了广告关闭按钮"), this.hideImg()
					}, t
				}(y)).prototype, "title", [S], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), P = t(T.prototype, "desc", [C], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), D = t(T.prototype, "img", [w], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), A = T)) || A)), s._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/CommonEnum.ts", ["cc"], function(e) {
		"use strict";
		var t;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}],
			execute: function() {
				var i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g;
				e("CommonEnum", void 0), t._RF.push({}, "a8e95f63ChBYooqnlS/QEyx", "CommonEnum", void 0), n = i || (i = e("CommonEnum", {})),
					function(e) {
						e[e.startIndex = 1e4] = "startIndex", e[e.enterGameTime = 10001] = "enterGameTime", e[e.levelDataVersion = 10002] = "levelDataVersion", e[e.canvas = 10003] = "canvas", e[e.canvasTransform = 10004] = "canvasTransform", e[e.rootUI = 10005] = "rootUI", e[e.rootRecommond = 10006] = "rootRecommond", e[e.levelLayer = 10007] = "levelLayer", e[e.levelCamera = 10008] = "levelCamera", e[e.levelMng = 10009] = "levelMng"
					}(o || (o = {})), n.GlobalDataType = o,
					function(e) {
						e.item = "RecommendItem", e.drawer = "RecommendDrawer", e.banner = "RecommendBanner", e.matrix = "RecommendMatrix", e.primary = "RecommendPrimary", e.primary_tt = "RecommendPrimary_TT", e.btnCenter_tt = "RecommendBtnCenter_TT", e.btnSide_tt = "RecommendBtnSide_TT"
					}(a || (a = {})), n.RecommendPrefab = a,
					function(e) {
						e.iconNameBg = "RecommendItem_iconNameBg", e.icon = "RecommendItem_icon"
					}(s || (s = {})), n.RecommendItemType = s,
					function(e) {
						e[e.left = 1] = "left", e[e.right = 2] = "right"
					}(r || (r = {})), n.RecommendDrawerType = r,
					function(e) {
						e[e.pingpong = 1] = "pingpong", e[e.left = 2] = "left", e[e.right = 3] = "right"
					}(u || (u = {})), n.RecommendBannerType = u,
					function(e) {
						e.initScene = "InitScene", e.recommendDialog = "RecommendDialog", e.lobby = "GameLobby", e.level = "Level", e.award = "AwardUI", e.win = "WinUI", e.lose = "LoseUI"
					}(c || (c = {})), n.GameFlowStep = c,
					function(e) {
						e.dialog = "alert", e.video = "shipin", e.touchBannerUI = "zadan", e.insertAd = "chaping", e.bigPage = "daquandao", e.middlePage = "zhongquandao", e.littlePage = "xiaoquandao"
					}(l || (l = {})), n.RecommendFlowStep = l,
					function(e) {
						e.visible = "kaiguan", e.mode = "daochumode", e.count = "cishu", e.touchBannerRandomMode = "zadanmode", e.touchBannerClickCount = "chuxian", e.touchBannerRepeatCount = "chongfucishu", e.resultBannerShowDelay = "chuxian", e.resultBtnMoveDelay = "yidong", e.recommendBannerShowDelay = "chuxian", e.recommendBannerHideDelay = "xiaoshi", e.recommendBtnShowDelay = "yanchishow", e.preClickCount = "diaochu", e.shanPinShowBannerDelay = "chuxian", e.shanPinShowBannerDelay2 = "chuxian2", e.shanPinHideBannerDelay = "yidong", e.shanPinHideBannerDelay2 = "yidong2"
					}(d || (d = {})), n.RecommendFlowConfig = d,
					function(e) {
						e.hideJumpedGame = "jumpedhidekaiguan", e.randomJumpGame = "jumpedrandomkaiguan", e.clickGameRefreshMode = "clickedbehavior", e.cancelJumpGameRefreshMode = "canceledbehavior"
					}(h || (h = {})), n.RecommendUIConfig = h,
					function(e) {
						e.guoshen = "gdtguoshenkaiguan", e.mustTouchBanner = "zadanbidiankaiguan", e.levelTouchBanner = "playingwuchucishu", e.autoRefreshBanner = "switchbannerkaiguan", e.nowuchukaiguan = "nowuchukaiguan", e.showVideoOnCancelVideoTog = "autovideokaiguan", e.autoShowAppBox = "boxadkaiguan", e.showNativeAdUI = "rawadkaiguan", e.showNativeAdUICount = "rawadcishu", e.nativeAdOPPOHideBtnClose = "adclosekaiguan", e.nativeAdUIShowBtnScan = "jumpadkaiguan", e.autoSelectVideoTog = "videoselectkaiguan", e.levelShowBanner = "playingspkaiguan", e.indexalertkaiguan = "indexalertkaiguan"
					}(p || (p = {})), n.GameFlowGlobalConfig = p,
					function(e) {
						e[e.normal = 1] = "normal", e[e.recommend = 2] = "recommend", e[e.banner = 3] = "banner", e[e.moveButton = 4] = "moveButton", e[e.showBannerTwice = 5] = "showBannerTwice", e[e.showSingleRecommend = 6] = "showSingleRecommend", e[e.moveButtonFast = 7] = "moveButtonFast"
					}(f || (f = {})), n.BannerTouchMode = f,
					function(e) {
						e[e.base = 0] = "base", e[e.bannerToucher_recommendPage = 1] = "bannerToucher_recommendPage", e[e.bannerToucher_resultUI = 2] = "bannerToucher_resultUI", e[e.noneBannerButton = 3] = "noneBannerButton"
					}(m || (m = {})), n.BannerTouchType = m,
					function(e) {
						e[e.none = 1] = "none", e[e.touched = 2] = "touched"
					}(v || (v = {})), n.CtrlState = v,
					function(e) {
						e[e.showVideoBtn = 7] = "showVideoBtn", e[e.openVideoWindow = 0] = "openVideoWindow", e[e.closeVideoWindow = 1] = "closeVideoWindow", e[e.clickBtnVideo = 2] = "clickBtnVideo", e[e.videoQuit = 3] = "videoQuit", e[e.videoSuc = 4] = "videoSuc", e[e.getAward = 5] = "getAward", e[e.videoFail = 6] = "videoFail"
					}(g || (g = {})), n.VideoSubType = g, t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/CommonGameConfig.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n, o;
		return {
			setters: [function(e) {
				t = e.createClass, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy, o = e.sys
			}],
			execute: function() {
				n._RF.push({}, "adf24pKBfVFoZ3UCJW+E7Fs", "CommonGameConfig", void 0);
				var a = e("default", function() {
					function e() {}
					return e.initAudioConfig = function() {
						if (!this._audioConfig) {
							var e = o.localStorage.getItem("audioConfig");
							this._audioConfig = e ? JSON.parse(e) : new s
						}
					}, e.initDriveConfig = function() {
						if (!this._driveConfig) {
							var e = o.localStorage.getItem("driveConfig");
							this._driveConfig = e ? JSON.parse(e) : new r
						}
					}, t(e, null, [{
						key: "audioConfig",
						get: function() {
							return this.initAudioConfig(), this._audioConfig
						},
						set: function(e) {
							this.initAudioConfig(), this._audioConfig.bgm = !!e.bgm, this._audioConfig.effect = !!e.effect, o.localStorage.setItem("audioConfig", JSON.stringify(this._audioConfig))
						}
					}, {
						key: "driveConfig",
						get: function() {
							return this.initDriveConfig(), this._driveConfig
						},
						set: function(e) {
							this.initDriveConfig(), this._driveConfig.vibrate = !!e.vibrate, this._driveConfig.cameraShake = !!e.cameraShake, o.localStorage.setItem("driveConfig", JSON.stringify(this._driveConfig))
						}
					}]), e
				}());
				i(a, "gameName", "jiangShiSheJi002"), i(a, "_audioConfig", null), i(a, "_driveConfig", null);
				var s = function() {
						i(this, "bgm", !0), i(this, "effect", !0)
					},
					r = function() {
						i(this, "vibrate", !1), i(this, "cameraShake", !0)
					};
				n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GlobalPool.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a;
		return {
			setters: [function(e) {
				t = e.defineProperty, i = e.createClass
			}, function(e) {
				n = e.cclegacy, o = e.instantiate
			}, function(e) {
				a = e.default
			}],
			execute: function() {
				n._RF.push({}, "ae615r/ewxBWItVZs4jX0Qa", "GlobalPool", void 0);
				var s = e("default", function() {
					function e() {}
					return e.createPool = function(e, t, i) {
						this.allPools.hasOwnProperty(e) ? console.warn("已存在该名称的对象池，请确认是否名字冲突：", e) : (i = i || "yyComponent", this.allPools[e] = new u(t, i))
					}, e.get = function(e, t) {
						return this.allPools[e] ? this.allPools[e].get(t) : (console.warn("未创建对应名称的对象池，获取实例失败：", e), null)
					}, e.put = function(e, t) {
						if (t || (t = e.name), !this.allPools[t]) {
							console.warn("未创建对应名称的对象池，将销毁节点：", t);
							var i = e.getComponent(t);
							return i && i.unuse && i.unuse(), void e.destroy()
						}
						this.allPools[t].put(e)
					}, e.putAllChildren = function(e, t) {
						if (void 0 === t && (t = !1), e && 0 != e.children.length)
							if (t) {
								var i = e.children[0].name;
								if (this.allPools[i])
									for (var n = this.allPools[i], o = e.children.length - 1; o >= 0; --o) n.put(e.children[o]);
								else
									for (var a = e.children.length - 1; a >= 0; --a) {
										var s = e.children[a].getComponent(i);
										s && s.unuse && s.unuse(), e.children[a].destroy()
									}
							} else
								for (var r = e.children.length - 1; r >= 0; --r) {
									var u = e.children[r];
									this.put(u)
								}
					}, e.clear = function(e) {
						if (e) this.allPools.hasOwnProperty(e) && (this.allPools[e].clear(), delete this.allPools[e]);
						else {
							for (var t in this.allPools) this.allPools[t].clear();
							this.allPools = {}
						}
					}, e.getSize = function(e) {
						return this.allPools[e] ? this.allPools[e].count : 0
					}, e.preCreate = function(e, t) {
						this.allPools[e] ? this.allPools[e].preCreate(t) : console.warn("不存在对应名称的对象池，无法预先创建实例：", e)
					}, e
				}());
				t(s, "allPools", {});
				var r = e("customPoolScript", "customPoolScript"),
					u = e("AutoNodePool", function() {
						function e(e, i) {
							t(this, "prefab", void 0), t(this, "scripteName", void 0), t(this, "pool", void 0), t(this, "_count", void 0), this.prefab = e, this.scripteName = i, i && !e.data.getComponent(i) && (e.data.getComponent(a) ? this.scripteName = a : (console.warn("预制件" + e.name + "中不存在脚本：" + i), this.scripteName = null)), this.pool = [], this._count = 0
						}
						var n = e.prototype;
						return n.get = function(e) {
							if (this._count > 0) {
								var t = this.pool.pop();
								this._count--;
								var i = t[r];
								return i && i.reuse && i.reuse(e), t.active = !0, t
							}
							var n = o(this.prefab);
							if (this.scripteName) {
								var a = n.getComponent("yyComponent");
								n[r] = a, a.init && a.init(e)
							}
							return n.active = !0, n
						}, n.put = function(e) {
							var t = e[r];
							t && t.unuse ? t.unuse() : (t = e.getComponent("yyComponent")) && (e[r] = t), e.removeFromParent(), e.active = !1, this.pool.indexOf(e) < 0 && (this.pool.push(e), this._count++)
						}, n.clear = function() {
							for (var e = this.pool.length - 1; e >= 0; --e) {
								var t = this.pool[e],
									i = t[r];
								i && i.unuse && i.unuse(), t.destroy()
							}
							this.pool = [], this._count = 0
						}, n.preCreate = function(e) {
							var t = e - this._count;
							if (!(t <= 0))
								for (var i = 0; i < t; ++i) {
									var n = o(this.prefab);
									if (this.scripteName) {
										var a = n.getComponent("yyComponent");
										n[r] = a, a.init && a.init()
									}
									this.put(n)
								}
						}, i(e, [{
							key: "count",
							get: function() {
								return this._count
							}
						}]), e
					}());
				n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/AdvertManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./EventManager.ts", "./GameEventType.ts", "./GamePlatformType.ts", "./PlayerData.ts", "./Loader.ts", "./GamePlatform.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy, n = e.JsonAsset
			}, function(e) {
				o = e.GlobalEnum
			}, function(e) {
				a = e.default
			}, function(e) {
				s = e.EventType
			}, function(e) {
				r = e.GamePlatformType
			}, function(e) {
				u = e.default
			}, function(e) {
				c = e.default
			}, function(e) {
				l = e.default
			}],
			execute: function() {
				i._RF.push({}, "af351BqYLlHHK5KW/3Kz+pN", "AdvertManager", void 0);
				var d = e("default", function() {
					function e() {}
					return e.initSceneStack = function() {
						this.sceneStack = []
					}, e.resetSceneStack = function() {
						this.sceneStack = []
					}, e.initAdvertConfig = function() {
						var e = this;
						this.defaultNativeCfg = {
							nativeAd: {
								visible: !0,
								type: "GAME",
								style: "BANNER_AD",
								widget: {
									height: 180,
									bottom: 0
								}
							}
						};
						var t = "AdvertConfig";
						switch (l.Config.type) {
							case r.PC:
								return;
							case r.WX:
								t += "_WX";
								break;
							case r.QQ:
								t += "_QQ";
								break;
							case r.TT:
								t += "_TT";
								break;
							case r.OPPO:
								t += "_OPPO";
								break;
							case r.HeyGameOPPO:
							case r.HeyGameVIVO:
								t += "_HeyGameOPPO"
						}
						c.loadBundleRes("MainScene", "JSONData/" + t, function(t) {
							t ? e.advertConfig = t.json : console.error("广告配置文件加载失败，将无法显示部分场景的广告")
						}, n, !1)
					}, e.getAdvertConfig = function(e) {
						return this.advertConfig ? !this.advertConfig[e] && this.nativeBtn[e] ? this.defaultNativeCfg : this.advertConfig[e] : null
					}, e.initCurAdvertState = function() {
						this.curAdvertState = {}
					}, e.resetCurAdvertState = function() {
						this.curAdvertState = {}
					}, e.init = function() {
						this.scheduledAdvert = !1, this.initAdvertConfig(), this.initCurAdvertState(), this.initSceneStack(), this.onEvents()
					}, e.onEvents = function() {
						a.on(s.Common.UIEvent.entered, this.onEnterScene, this), a.on(s.Common.UIEvent.exited, this.onExitScene, this), a.on(s.Common.RecommendEvent.drawerStartOpen, this.onDrawerStartOpen, this), a.on(s.Common.RecommendEvent.drawerClosed, this.onDrawerClosed, this)
					}, e.reset = function() {
						this.scheduledAdvert = !1, this.resetCurAdvertState(), this.resetSceneStack()
					}, e.onEnterScene = function(e, t) {
						if (null != e && (this.nativeBtn[e] = t, t && (t.active = !1), void 0 !== this.getAdvertConfig(e) && this.getCurScene() != e)) {
							for (var i = this.sceneStack.length - 1; i >= 0; --i)
								if (this.sceneStack[i] == e) {
									this.sceneStack.splice(i, 1);
									break
								} this.sceneStack.push(e), this.updateAdverts()
						}
					}, e.getCurScene = function() {
						var e = this.sceneStack.length;
						return 0 == e ? null : this.sceneStack[e - 1]
					}, e.onExitScene = function(e) {
						if (null != e && void 0 !== this.getAdvertConfig(e)) {
							if (this.getCurScene() == e) this.sceneStack.pop();
							else
								for (var t = this.sceneStack.length - 1; t >= 0; --t)
									if (this.sceneStack[t] == e) {
										this.sceneStack.splice(t, 1);
										break
									} this.updateAdverts()
						}
					}, e.updateAdverts = function() {
						this.scheduledAdvert || (setTimeout(this.showCurSceneAdvert.bind(this), 40), this.scheduledAdvert = !0)
					}, e.getTopScene = function() {
						for (var e, t, i = this.sceneStack.length - 1; i >= 0 && (t = this.sceneStack[i], !(e = this.getAdvertConfig(t))); --i);
						return {
							scene: t,
							config: e
						}
					}, e.showCurSceneAdvert = function() {
						var e = this;
						this.scheduledAdvert = !1;
						var t, i = this.getTopScene();
						(t = i.config) && (this.curAdvertState = t, console.log("UI队列：", this.sceneStack), this.processBannerConfig(t), this.processBlockAd(t), this._curNativeBtn = this.nativeBtn[i.scene], this._curNativeBtn && (this._curNativeBtn.active = !1), i.scene == o.UI.lobby ? setTimeout(function() {
							i.scene == o.UI.lobby && e.processNativeAd(t)
						}, 500) : this.processNativeAd(t))
					}, e.processBannerConfig = function(e) {
						void 0 !== e.banner && e.banner.visble ? this.showBanner({
							style: e.banner.style
						}) : this.hideBanner()
					}, e.showBanner = function(e) {
						console.log("广告管理器：显示banner,", e), a.emit(s.Common.SDKEvent.showBanner, e)
					}, e.hideBanner = function() {
						console.log("广告管理器：隐藏banner"), a.emit(s.Common.SDKEvent.hideBanner)
					}, e.processBlockAd = function(e) {
						e.blockAd && e.blockAd.visble ? this.showBlockAd(e.blockAd) : this.hideBlockAd()
					}, e.showBlockAd = function(e) {
						a.emit(s.Common.SDKEvent.showBlockAd, e)
					}, e.hideBlockAd = function() {
						a.emit(s.Common.SDKEvent.hideBlockAd)
					}, e.processNativeAd = function(e) {
						if (void 0 === e.nativeAd) return a.emit(s.Common.SDKEvent.hideAllNativeAd), void(this.curNativeAdData = null);
						null !== this.curNativeAdData && this.curNativeAdData.type !== e.nativeAd.type && a.emit(s.Common.SDKEvent.hideAllNativeAd), this.curNativeAdData = e.nativeAd, this.curNativeAdData.checkNativeBtn = this._curNativeBtn || null;
						var t = {
							ui: this.getTopScene().scene,
							lv: u.getPlayerData().curLevel
						};
						e.nativeAd.scene = t, a.emit(s.Common.SDKEvent.showNativeAd, e.nativeAd)
					}, e.onDrawerStartOpen = function() {
						null !== this.curNativeAdData && a.emit(s.Common.SDKEvent.quickHideNativeAd, this.curNativeAdData.type)
					}, e.onDrawerClosed = function() {
						null !== this.curNativeAdData && a.emit(s.Common.SDKEvent.quickShowNativeAd, this.curNativeAdData)
					}, e
				}());
				t(d, "sceneStack", void 0), t(d, "nativeBtn", {}), t(d, "scheduledAdvert", void 0), t(d, "advertConfig", null), t(d, "defaultNativeCfg", void 0), t(d, "curAdvertState", null), t(d, "_curNativeBtn", null), t(d, "curNativeAdData", null), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/Action3dManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r;
		return {
			setters: [function(e) {
				t = e.defineProperty, i = e.createClass, n = e.inheritsLoose, o = e.assertThisInitialized
			}, function(e) {
				a = e.cclegacy, s = e.Renderable2D, r = e.v3
			}],
			execute: function() {
				var u;
				e("ActionMngType", void 0), a._RF.push({}, "b26d3htEkFMfJARkhObfcES", "Action3dManager", void 0),
					function(e) {
						e.UI = "UI", e.Level = "Level"
					}(u || (u = e("ActionMngType", {})));
				var c = e("default", function() {
					function e() {
						t(this, "allActions", []), this.allActions = []
					}
					e.getMng = function(t) {
						return this.allMngs[t] || (this.allMngs[t] = new e), this.allMngs[t]
					};
					var i = e.prototype;
					return i.update = function(e) {
						for (var t = this.allActions.length - 1; t >= 0; --t) {
							var i = this.allActions[t];
							if (i && (i.update(e), i.finished)) {
								var n = t;
								for (n >= this.allActions.length && (n = this.allActions.length - 1); n >= 0; --n)
									if (this.allActions[n].Id == i.Id) {
										this.allActions.splice(n, 1);
										break
									}
							}
						}
					}, i.runAction = function(e, t) {
						this.stopAllActions(e), t.resetFinishState(), t.setTarget(e), this.allActions.push(t)
					}, i.stopAllActions = function(e) {
						for (var t = this.allActions.length - 1; t >= 0; --t) this.allActions[t].node == e && this.allActions.splice(t, 1)
					}, i.haveAction = function(e) {
						for (var t = this.allActions.length - 1; t >= 0; --t)
							if (this.allActions[t].node == e) return !0;
						return !1
					}, e.delay = function(e) {
						return new h(e)
					}, e.moveTo = function(e, t, i, n) {
						return new p(e, t, i, n)
					}, e.moveBy = function(e, t, i, n) {
						return new f(e, t, i, n)
					}, e.jumpTo = function(e, t, i, n, o) {
						return new m(e, t, i, n, o)
					}, e.jumpBy = function(e, t, i, n, o) {
						return new v(e, t, i, n, o)
					}, e.scaleTo = function(e, t, i, n) {
						return new g(e, t, i, n)
					}, e.rotateTo = function(e, t, i, n) {
						return new y(e, t, i, n)
					}, e.rotateBy = function(e, t, i, n) {
						return new b(e, t, i, n)
					}, e.rotateTo2d = function(e, t) {
						return new S(e, t)
					}, e.rotateBy2d = function(e, t) {
						return new C(e, t)
					}, e.fadeTo = function(e, t) {
						return new w(e, t)
					}, e.fadeBy = function(e, t) {
						return new A(e, t)
					}, e.tweenTo = function(e, t, i, n) {
						return void 0 === n && (n = !1), new T(e, t, i, n)
					}, e.tweenBy = function(e, t, i, n) {
						return void 0 === n && (n = !1), new x(e, t, i, n)
					}, e.callFun = function(e, t, i) {
						return new P(e, t, i)
					}, e.thread = function(e, t) {
						return new D(e, t)
					}, e.sequence = function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						return new B(t)
					}, e.spawn = function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						return new k(t)
					}, e.repeatForever = function(e, t) {
						return void 0 === t && (t = 0), new _(e, t)
					}, e.easeIn = function(e) {
						return new I(e)
					}, e.easeOut = function(e) {
						return new G(e)
					}, e.easeInOut = function(e) {
						return new M(e)
					}, e.easeOutIn = function(e) {
						return new R(e)
					}, e.easeExponentialIn = function() {
						return new L
					}, e.easeExponentialOut = function() {
						return new N
					}, e.easeExponentialInOut = function() {
						return new F
					}, e.easeSinIn = function() {
						return new z
					}, e.easeSinOut = function() {
						return new O
					}, e.easeSinInOut = function() {
						return new V
					}, e.easeSinOutIn = function() {
						return new U
					}, e.easeElasticIn = function(e) {
						return new H(e)
					}, e.easeElasticOut = function(e) {
						return new K(e)
					}, e.easeElasticInOut = function(e) {
						return new W(e)
					}, e.easeBounceIn = function() {
						return new j
					}, e.easeBounceOut = function() {
						return new J
					}, e
				}());
				t(c, "allMngs", {});
				var l = e("Action3d", function() {
					function e() {
						t(this, "myId", null), t(this, "node", void 0), t(this, "_easeList", void 0)
					}
					var n = e.prototype;
					return n.setTarget = function(e) {
						this.node = e
					}, n.easing = function() {
						this._easeList = [];
						for (var e = 0, t = arguments.length; e < t; ++e) this._easeList.push(e < 0 || arguments.length <= e ? void 0 : arguments[e]);
						return this
					}, n.computeEaseTime = function(e) {
						var t = this._easeList;
						if (!t || 0 === t.length) return e;
						for (var i = 0, n = t.length; i < n; i++) e = t[i].easing(e);
						return e
					}, n.resetFinishState = function() {}, n.update = function(e) {}, i(e, [{
						key: "Id",
						get: function() {
							return null === this.myId && (this.myId = e._id++), this.myId
						}
					}, {
						key: "binded",
						get: function() {
							return !!this.node
						}
					}, {
						key: "finished",
						get: function() {
							return !1
						}
					}]), e
				}());
				t(l, "_id", 0);
				var d = e("FiniteTimeAction3d", function(e) {
						function a(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "duration", void 0), t(o(n), "elapse", void 0), t(o(n), "_paused", !1), n.duration = i, n.elapse = 0, n
						}
						n(a, e);
						var s = a.prototype;
						return s.resetFinishState = function() {
							this.elapse = 0
						}, s.update = function(e) {
							var t = this.addElapseTime(e);
							this.step(t)
						}, s.addElapseTime = function(e) {
							this.elapse += e;
							var t = 1;
							return this.duration > 0 && (t = this.elapse / this.duration) > 1 && (t = 1), this.computeEaseTime(t)
						}, s.step = function(e) {}, s.interpolation = function(e, t, i) {
							return e + (t - e) * i
						}, i(a, [{
							key: "finished",
							get: function() {
								return this.elapse >= this.duration
							}
						}, {
							key: "paused",
							get: function() {
								return this._paused
							}
						}]), a
					}(l)),
					h = e("DelayTime", function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t
					}(d)),
					p = e("MoveTo3d", function(e) {
						function i(i, n, a, s) {
							var r;
							return r = e.call(this, i) || this, t(o(r), "original", void 0), t(o(r), "target", void 0), t(o(r), "curValue", void 0), r.target = "number" == typeof n ? {
								x: n,
								y: a,
								z: s
							} : {
								x: n.x,
								y: n.y,
								z: n.z
							}, r.curValue = {
								x: 0,
								y: 0,
								z: 0
							}, r
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.position.x,
								y: e.position.y,
								z: e.position.z
							}
						}, a.step = function(e) {
							this.curValue.x = this.interpolation(this.original.x, this.target.x, e), this.curValue.y = this.interpolation(this.original.y, this.target.y, e), this.curValue.z = this.interpolation(this.original.z, this.target.z, e), this.node.setPosition(this.curValue.x, this.curValue.y, this.curValue.z)
						}, i
					}(d)),
					f = e("MoveBy3d", function(e) {
						function i(i, n, a, s) {
							var r;
							return r = e.call(this, i) || this, t(o(r), "original", void 0), t(o(r), "target", void 0), t(o(r), "curValue", void 0), r.target = "number" == typeof n ? {
								x: n,
								y: a,
								z: s
							} : {
								x: n.x,
								y: n.y,
								z: n.z
							}, r.curValue = {
								x: 0,
								y: 0,
								z: 0
							}, r
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.position.x,
								y: e.position.y,
								z: e.position.z
							}
						}, a.step = function(e) {
							this.curValue.x = this.original.x + this.target.x * e, this.curValue.y = this.original.y + this.target.y * e, this.curValue.z = this.original.z + this.target.z * e, this.node.setPosition(this.curValue.x, this.curValue.y, this.curValue.z)
						}, i
					}(d)),
					m = e("JumpTo3d", function(e) {
						function i(i, n, a, s, r) {
							var u;
							return u = e.call(this, i) || this, t(o(u), "original", void 0), t(o(u), "target", void 0), t(o(u), "curValue", void 0), t(o(u), "jumpSpeed", void 0), t(o(u), "gravity", void 0), "number" == typeof n ? (u.target = {
								x: n,
								y: a,
								z: s
							}, u.gravity = r) : (u.target = {
								x: n.x,
								y: n.y,
								z: n.z
							}, u.gravity = a), u.curValue = {
								x: 0,
								y: 0,
								z: 0
							}, u.jumpSpeed = {
								x: 0,
								y: 0,
								z: 0
							}, u
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.position.x,
								y: e.position.y,
								z: e.position.z
							};
							var t = 1 / this.duration;
							this.jumpSpeed.x = (this.target.x - this.original.x) * t, this.jumpSpeed.y = (this.target.y - this.original.y + .5 * this.gravity * this.duration * this.duration) * t, this.jumpSpeed.z = (this.target.z - this.original.z) * t
						}, a.step = function(e) {
							var t = this.duration * e;
							this.curValue.x = this.original.x + this.jumpSpeed.x * t, this.curValue.y = this.original.y + this.jumpSpeed.y * t - .5 * this.gravity * t * t, this.curValue.z = this.original.z + this.jumpSpeed.z * t, this.node.setPosition(this.curValue.x, this.curValue.y, this.curValue.z)
						}, i
					}(d)),
					v = e("JumpBy3d", function(e) {
						function i(i, n, a, s, r) {
							var u;
							return u = e.call(this, i) || this, t(o(u), "original", void 0), t(o(u), "target", void 0), t(o(u), "jumpOffset", void 0), t(o(u), "curValue", void 0), t(o(u), "jumpSpeed", void 0), t(o(u), "gravity", void 0), "number" == typeof n ? (u.jumpOffset = {
								x: n,
								y: a,
								z: s
							}, u.gravity = r) : (u.jumpOffset = n, u.gravity = a), u.curValue = {
								x: 0,
								y: 0,
								z: 0
							}, u.jumpSpeed = {
								x: 0,
								y: 0,
								z: 0
							}, u
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.position.x,
								y: e.position.y,
								z: e.position.z
							}, this.target = {
								x: this.original.x + this.jumpOffset.x,
								y: this.original.y + this.jumpOffset.y,
								z: this.original.z + this.jumpOffset.z
							};
							var t = 1 / this.duration;
							this.jumpSpeed.x = (this.target.x - this.original.x) * t, this.jumpSpeed.y = (this.target.y - this.original.y + .5 * this.gravity * this.duration * this.duration) * t, this.jumpSpeed.z = (this.target.z - this.original.z) * t
						}, a.step = function(e) {
							var t = this.duration * e;
							this.curValue.x = this.original.x + this.jumpSpeed.x * t, this.curValue.y = this.original.y + this.jumpSpeed.y * t - .5 * this.gravity * t * t, this.curValue.z = this.original.z + this.jumpSpeed.z * t, this.node.setPosition(this.curValue.x, this.curValue.y, this.curValue.z)
						}, i
					}(d)),
					g = e("ScaleTo3d", function(e) {
						function i(i, n, a, s) {
							var r;
							return r = e.call(this, i) || this, t(o(r), "original", void 0), t(o(r), "target", void 0), r.target = "number" == typeof n ? {
								x: n,
								y: a,
								z: s
							} : {
								x: n.x,
								y: n.y,
								z: n.z
							}, r
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.scale.x,
								y: e.scale.y,
								z: e.scale.z
							}
						}, a.step = function(e) {
							var t = this.interpolation(this.original.x, this.target.x, e),
								i = this.interpolation(this.original.y, this.target.y, e),
								n = this.interpolation(this.original.z, this.target.z, e);
							this.node.setScale(t, i, n)
						}, i
					}(d)),
					y = e("RotateTo3d", function(e) {
						function i(i, n, a, s) {
							var u;
							return u = e.call(this, i) || this, t(o(u), "original", void 0), t(o(u), "target", void 0), t(o(u), "cacheV3", void 0), u.target = "number" == typeof n ? {
								x: n,
								y: a,
								z: s
							} : {
								x: n.x,
								y: n.y,
								z: n.z
							}, u.cacheV3 = r(), u
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.eulerAngles.x,
								y: e.eulerAngles.y,
								z: e.eulerAngles.z
							}
						}, a.step = function(e) {
							this.cacheV3.x = this.interpolation(this.original.x, this.target.x, e), this.cacheV3.y = this.interpolation(this.original.y, this.target.y, e), this.cacheV3.z = this.interpolation(this.original.z, this.target.z, e), this.node.eulerAngles = this.cacheV3
						}, i
					}(d)),
					b = e("RotateBy3d", function(e) {
						function i(i, n, a, s) {
							var u;
							return u = e.call(this, i) || this, t(o(u), "original", void 0), t(o(u), "target", void 0), t(o(u), "cacheV3", void 0), u.target = "number" == typeof n ? {
								x: n,
								y: a,
								z: s
							} : {
								x: n.x,
								y: n.y,
								z: n.z
							}, u.cacheV3 = r(), u
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = {
								x: e.eulerAngles.x,
								y: e.eulerAngles.y,
								z: e.eulerAngles.z
							}
						}, a.step = function(e) {
							this.cacheV3.x = this.original.x + this.target.x * e, this.cacheV3.y = this.original.y + this.target.y * e, this.cacheV3.z = this.original.z + this.target.z * e, this.node.eulerAngles = this.cacheV3
						}, i
					}(d)),
					S = e("RotateTo2d", function(e) {
						function i(i, n) {
							var a;
							return a = e.call(this, i) || this, t(o(a), "original", void 0), t(o(a), "target", void 0), a.target = n, a
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = e.angle
						}, a.step = function(e) {
							var t = this.interpolation(this.original, this.target, e);
							this.node.angle = t
						}, i
					}(d)),
					C = e("RotateBy2d", function(e) {
						function i(i, n) {
							var a;
							return a = e.call(this, i) || this, t(o(a), "original", void 0), t(o(a), "target", void 0), a.target = n, a
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.original = e.angle
						}, a.step = function(e) {
							var t = this.original + this.target * e;
							this.node.angle = t
						}, i
					}(d)),
					w = e("FadeTo", function(e) {
						function i(i, n) {
							var a;
							return a = e.call(this, i) || this, t(o(a), "render", void 0), t(o(a), "original", void 0), t(o(a), "target", void 0), a.target = n, a
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.render = e.getComponent(s), this.original = this.render.color.a
						}, a.step = function(e) {
							var t = this.interpolation(this.original, this.target, e),
								i = this.render.color;
							this.render.color.set(i.r, i.g, i.b, t)
						}, i
					}(d)),
					A = e("FadeBy", function(e) {
						function i(i, n) {
							var a;
							return a = e.call(this, i) || this, t(o(a), "render", void 0), t(o(a), "original", void 0), t(o(a), "target", void 0), a.target = n, a
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.node = e, this.render = e.getComponent(s), this.original = this.render.color.a
						}, a.step = function(e) {
							var t = this.original + this.target * e,
								i = this.render.color;
							this.render.color.set(i.r, i.g, i.b, t)
						}, i
					}(d)),
					T = function(e) {
						function i(i, n, a, s) {
							var r;
							return r = e.call(this, i) || this, t(o(r), "obj", void 0), t(o(r), "attribute", void 0), t(o(r), "original", void 0), t(o(r), "targetValue", void 0), t(o(r), "isNumber", void 0), t(o(r), "newAttribute", void 0), r.attribute = n, r.targetValue = a, r.isNumber = "number" == typeof a, r.newAttribute = s, r
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.obj = e, void 0 !== e[this.attribute] ? this.original = JSON.parse(JSON.stringify(e[this.attribute])) : console.error("对象不存在属性" + this.attribute + "，动作TweenTo将无法生效")
						}, a.step = function(e) {
							if (this.isNumber) this.obj[this.attribute] = this.interpolation(this.original, this.targetValue, e);
							else if (this.newAttribute) {
								var t = {};
								for (var i in this.original) t[i] = this.interpolation(this.original[i], this.targetValue[i], e);
								this.obj[this.attribute] = t
							} else
								for (var n in this.original) this.obj[this.attribute][n] = this.interpolation(this.original[n], this.targetValue[n], e)
						}, i
					}(d),
					x = function(e) {
						function i(i, n, a, s) {
							var r;
							return r = e.call(this, i) || this, t(o(r), "obj", void 0), t(o(r), "attribute", void 0), t(o(r), "original", void 0), t(o(r), "targetValue", void 0), t(o(r), "isNumber", void 0), t(o(r), "newAttribute", void 0), r.attribute = n, r.targetValue = a, r.isNumber = "number" == typeof a, r.newAttribute = s, r
						}
						n(i, e);
						var a = i.prototype;
						return a.setTarget = function(e) {
							this.obj = e, void 0 !== e[this.attribute] ? this.original = JSON.parse(JSON.stringify(e[this.attribute])) : console.error("对象不存在属性" + this.attribute + "，动作TweenTo将无法生效")
						}, a.step = function(e) {
							if (this.isNumber) this.obj[this.attribute] = this.original + this.targetValue * e;
							else if (this.newAttribute) {
								var t = {};
								for (var i in this.original) t[i] = this.original[i] + this.targetValue[i] * e;
								this.obj[this.attribute] = t
							} else
								for (var n in this.original) this.obj[this.attribute][n] = this.original[n] + this.targetValue[n] * e
						}, i
					}(d),
					P = e("CallFun3d", function(e) {
						function a(i, n, a) {
							var s;
							return s = e.call(this) || this, t(o(s), "target", void 0), t(o(s), "cb", void 0), t(o(s), "data", void 0), t(o(s), "_finished", !1), s.cb = i, s.target = n, s.data = a, s
						}
						n(a, e);
						var s = a.prototype;
						return s.resetFinishState = function() {
							this._finished = !1
						}, s.update = function(e) {
							this.finished || (this.target ? this.cb.call(this.target, this.data || null) : this.cb(this.data || null), this._finished = !0)
						}, i(a, [{
							key: "finished",
							get: function() {
								return this._finished
							}
						}]), a
					}(l)),
					D = e("Thread", function(e) {
						function i(i, n) {
							var a;
							return a = e.call(this) || this, t(o(a), "target", void 0), t(o(a), "cb", void 0), a.cb = i, a.target = n, a
						}
						return n(i, e), i.prototype.update = function(e) {
							this.target ? this.cb.call(this.target, e) : this.cb(e)
						}, i
					}(l)),
					B = e("Sequence3d", function(e) {
						function a(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "actions", void 0), t(o(n), "curActionPtr", void 0), n.curActionPtr = 0, n.actions = [].concat(i), n
						}
						n(a, e);
						var s = a.prototype;
						return s.resetFinishState = function() {
							for (var e = this.actions.length - 1; e >= 0; --e) this.actions[e].resetFinishState();
							this.curActionPtr = 0, this.setCurActionTarget()
						}, s.setTarget = function(e) {
							this.node = e, this.setCurActionTarget()
						}, s.update = function(e) {
							if (!this.finished) {
								var t = this.actions[this.curActionPtr];
								t.update(e), t.finished && (this.curActionPtr++, this.setCurActionTarget())
							}
						}, s.setCurActionTarget = function() {
							!this.finished && this.node && this.actions[this.curActionPtr].setTarget(this.node)
						}, s.pushAction = function(e) {
							this.actions.push(e)
						}, i(a, [{
							key: "finished",
							get: function() {
								return this.curActionPtr >= this.actions.length
							}
						}]), a
					}(l)),
					k = e("Spawn3d", function(e) {
						function a(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "actions", void 0), t(o(n), "remainCount", void 0), n.actions = [].concat(i), n.remainCount = n.actions.length, n
						}
						n(a, e);
						var s = a.prototype;
						return s.resetFinishState = function() {
								for (var e = this.actions.length - 1; e >= 0; --e) this.actions[e].resetFinishState();
								this.remainCount = this.actions.length
							},
							s.setTarget = function(e) {
								this.node = e;
								for (var t = this.actions.length - 1; t >= 0; --t) this.actions[t].setTarget(e)
							}, s.update = function(e) {
								if (!this.finished)
									for (var t = 0, i = this.actions.length; t < i; ++t) this.actions[t].finished || (this.actions[t].update(e), this.actions[t].finished && this.remainCount--)
							}, s.pushAction = function(e) {
								this.actions.push(e), this.node && e.setTarget(this.node)
							}, i(a, [{
								key: "finished",
								get: function() {
									return this.remainCount <= 0
								}
							}]), a
					}(l)),
					_ = e("RepeatForever", function(e) {
						function a(i, n) {
							var a;
							return void 0 === n && (n = 0), a = e.call(this) || this, t(o(a), "action", void 0), t(o(a), "count", 0), t(o(a), "finishCount", 0), a.action = i, a.count = n, a.finishCount = 0, a
						}
						n(a, e);
						var s = a.prototype;
						return s.resetFinishState = function() {
							this.finishCount = 0, this.action.resetFinishState()
						}, s.setTarget = function(e) {
							this.node = e, this.action.setTarget(e)
						}, s.update = function(e) {
							this.action.update(e), this.action.finished && (this.finishCount++, (this.count <= 0 || this.finishCount < this.count) && this.action.resetFinishState())
						}, i(a, [{
							key: "finished",
							get: function() {
								return this.count > 0 && this.finishCount >= this.count
							}
						}]), a
					}(l)),
					E = function() {
						function e() {}
						return e.prototype.easing = function(e) {
							return e
						}, e
					}(),
					I = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_rate", void 0), n._rate = i, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							return Math.pow(e, this._rate)
						}, i
					}(E),
					G = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_rate", void 0), n._rate = i, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							return Math.pow(e, 1 / this._rate)
						}, i
					}(E),
					M = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_rate", void 0), n._rate = i, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							return (e *= 2) < 1 ? .5 * Math.pow(e, this._rate) : 1 - .5 * Math.pow(2 - e, this._rate)
						}, i
					}(E),
					R = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_rate", void 0), n._rate = i, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							return (e *= 2) < 1 ? 1 - .5 * Math.pow(2 - e, this._rate) : .5 * Math.pow(e, this._rate)
						}, i
					}(E),
					L = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
						}, t
					}(E),
					N = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
						}, t
					}(E),
					F = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return 1 !== e && 0 !== e ? (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1))) : e
						}, t
					}(E),
					z = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return 1 - Math.sin(1.57 * (1 - e))
						}, t
					}(E),
					O = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return Math.sin(1.57 * e)
						}, t
					}(E),
					V = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return .5 * Math.sin(3.14 * e + 4.71) + .5
						}, t
					}(E),
					U = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return n(t, e), t.prototype.easing = function(e) {
							return e < .5 ? .5 * Math.sin(3.14 * e) : 1 - .5 * Math.sin(3.14 * (1 - e))
						}, t
					}(E),
					H = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_period", void 0), n._period = i || .3, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							return 0 === e || 1 === e ? e : (e -= 1, -Math.pow(2, 10 * e) * Math.sin((e - this._period / 4) * Math.PI * 2 / this._period))
						}, i
					}(E),
					K = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_period", void 0), n._period = i || .3, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							return 0 === e || 1 === e ? e : Math.pow(2, -10 * e) * Math.sin((e - this._period / 4) * Math.PI * 2 / this._period) + 1
						}, i
					}(E),
					W = function(e) {
						function i(i) {
							var n;
							return n = e.call(this) || this, t(o(n), "_period", void 0), n._period = i || .3, n
						}
						return n(i, e), i.prototype.easing = function(e) {
							var t = 0,
								i = this._period;
							if (0 === e || 1 === e) t = e;
							else {
								e *= 2, i || (i = this._period = .3 * 1.5);
								var n = i / 4;
								t = (e -= 1) < 0 ? -.5 * Math.pow(2, 10 * e) * Math.sin((e - n) * Math.PI * 2 / i) : Math.pow(2, -10 * e) * Math.sin((e - n) * Math.PI * 2 / i) * .5 + 1
							}
							return t
						}, i
					}(E),
					j = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						n(t, e);
						var i = t.prototype;
						return i.easing = function(e) {
							return 1 - this._bounceTime(1 - e)
						}, i._bounceTime = function(e) {
							return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						}, t
					}(E),
					J = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						n(t, e);
						var i = t.prototype;
						return i.easing = function(e) {
							return this._bounceTime(e)
						}, i._bounceTime = function(e) {
							return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						}, t
					}(E);
				a._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/PlayerData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./EventManager.ts", "./GameEventType.ts", "./PlayerDataTemplate.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy, n = e.sys, o = e.log
			}, function(e) {
				a = e.GlobalEnum
			}, function(e) {
				s = e.default
			}, function(e) {
				r = e.default
			}, function(e) {
				u = e.EventType
			}, function(e) {
				c = e.default
			}],
			execute: function() {
				i._RF.push({}, "bc9d8TfjwRC0J+4t02oPAHq", "PlayerData", void 0);
				var l = e("default", function() {
					function e() {}
					return e.init = function() {
						this.Data = c.getData();
						var e = n.localStorage.getItem(this.localStorageName + "needResetPlayerData8");
						if (!e || !JSON.parse(e)) {
							var t = n.localStorage.getItem(this.localStorageName + "PlayerData");
							t && (t = JSON.parse(t), this.copyObject(this.Data, t))
						}
						n.localStorage.setItem(this.localStorageName + "needResetPlayerData8", JSON.stringify(!1)), this.resetTrySkin(), this.onEvents(), this.loadData()
					}, e.copyObject = function(e, t) {
						for (var i in t) switch (typeof t[i]) {
							case "number":
							case "boolean":
							case "string":
								e[i] = t[i];
								break;
							case "object":
								Array.isArray(t[i]) ? e[i] = [].concat(t[i]) : (null == e[i] && (e[i] = {}), this.copyObject(e[i], t[i]))
						}
					}, e.loadData = function() {
						r.emit(u.Common.PlayerDataEvent.dataLoaded)
					}, e.getPlayerData = function() {
						return this.Data.gameData
					}, e.onEvents = function() {
						r.on(u.Common.PlayerDataEvent.updatePlayerData, this.onUpdatePlayerData, this), r.on(u.Common.PlayerDataEvent.trySkinEnd, this.onTrySkinEnd, this)
					}, e.onUpdatePlayerData = function(e) {
						if (e.attribute.indexOf(".") < 0) this.updateData(this.Data, e.attribute, e.value, e.mode);
						else {
							for (var t = e.attribute.split("."), i = this.Data, n = 0; n < t.length - 1; ++n) {
								if (null == i[t[n]]) return o("修改玩家数据失败，玩家数据未定义对应属性：" + t[n]), void o(e);
								i = i[t[n]]
							}
							this.updateData(i, t[t.length - 1], e.value, e.mode)
						}
						void 0 !== e.save && !0 !== e.save || this.saveData(), void 0 !== e.emit && !0 !== e.emit || r.emit(u.Common.PlayerDataEvent.playerDataChanged, {
							attribute: e.attribute,
							value: this.getData(e.attribute)
						})
					}, e.updateData = function(e, t, i, n) {
						var a = i;
						switch ("string" == typeof i && (a = parseFloat(i), isNaN(a) && (a = i)), n) {
							case "+":
								e[t] += a;
								break;
							case "-":
								e[t] -= a;
								break;
							case "*":
								e[t] *= a;
								break;
							case "=":
								e[t] = a;
								break;
							case "push":
								e[t].push(a);
								break;
							default:
								o("数据修改失败，未定义的数据修改方式：" + n)
						}
					}, e.getData = function(e) {
						if (!e) return this.Data;
						if (e.indexOf(".") < 0) return this.Data[e];
						for (var t = e.split("."), i = this.Data, n = 0; n < t.length; ++n) {
							if (null == i[t[n]]) return i;
							i = i[t[n]]
						}
						return i
					}, e.saveData = function() {
						n.localStorage.setItem(this.localStorageName + "PlayerData", JSON.stringify(this.Data))
					}, e.addGold = function(e) {
						this.Data.gameData.asset.gold += e, r.emit(u.Common.PlayerDataEvent.playerDataChanged, {
							type: "gameData",
							attribute: "gameData.asset.gold",
							value: this.Data.gameData.asset.gold
						})
					}, e.subGold = function(e) {
						e <= this.Data.gameData.asset.gold ? this.Data.gameData.asset.gold -= e : this.Data.gameData.asset.gold = 0, r.emit(u.Common.PlayerDataEvent.playerDataChanged, {
							type: "gameData",
							attribute: "gameData.asset.gold",
							value: this.Data.gameData.asset.gold
						})
					}, e.getCurSkinId = function(e) {
						var t = this.Data.gameData[e],
							i = t.try;
						return -1 == i && (i = t.cur), i
					}, e.unlockSkin = function(e, t) {
						var i = this.Data.gameData[e];
						i.owned.indexOf(t) >= 0 || (i.owned.push(t), r.emit(u.Common.PlayerDataEvent.playerDataChanged, {
							type: "gameData",
							attribute: "gameData." + e + ".owned",
							value: i.owned
						}))
					}, e.setCurSkin = function(e, t) {
						var i = this.Data.gameData[e];
						i.cur != t && (i.cur = t, r.emit(u.Common.PlayerDataEvent.playerDataChanged, {
							type: "gameData",
							attribute: "gameData." + e + ".cur",
							value: i.cur
						}))
					}, e.onTrySkin = function(e, t) {}, e.onTrySkinEnd = function(e) {}, e.resetTrySkin = function() {}, e.unlockWeapon = function(e, t) {
						var i = this.getPlayerData();
						i.asset.zuanShi -= t, r.emit(u.Common.PlayerDataEvent.playerDataChanged, {
							attribute: "gameData.asset.zuanShi",
							value: i.asset.zuanShi
						}), i.weapons.owned.push(e), i.weapons.curId = e, r.emit(u.LevelEvent.changedWeapon, e), this.saveData(), r.emit(u.Common.ALDEvent.sendEvent, {
							eventName: a.TongJiEvent.unlockWeapon,
							data: {
								lv: i.curLevel,
								id: e
							}
						})
					}, e
				}());
				t(l, "Data", {}), t(l, "localStorageName", s.gameName + "6"), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/AudioManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./GameConfig.ts", "./EventManager.ts", "./GameEventType.ts", "./Loader.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy, n = e.Node, o = e.AudioSource, a = e.warn
			}, function(e) {
				s = e.GlobalEnum
			}, function(e) {
				r = e.default
			}, function(e) {
				u = e.default
			}, function(e) {
				c = e.EventType
			}, function(e) {
				l = e.default
			}],
			execute: function() {
				i._RF.push({}, "c3ffd4uKblBBKHFHlRW8W83", "AudioManager", void 0);
				var d = e("default", function() {
					function e() {}
					return e.init = function() {
						this.bgmAudioSourceNode || (this.bgmAudioSourceNode = new n("bgmAudioSourceNode"), this.bgmAudioSource = this.bgmAudioSourceNode.addComponent(o), this.bgmAudioSource.playOnAwake = !1), this.effectAudioSourceNode || (this.effectAudioSourceNode = new n("effectAudioSourceNode"), this.effectAudioSource = this.effectAudioSourceNode.addComponent(o), this.effectAudioSource.playOnAwake = !1), this.onEvents()
					}, e.onEvents = function() {
						u.on(c.Common.AudioEvent.playBGM, this.playBGM, this), u.on(c.Common.AudioEvent.playClickBtn, this.playClickBtn, this), u.on(c.Common.AudioEvent.playEffect, this.playEffect, this), u.on(c.Common.AudioEvent.stopEffect, this.stopEffect, this), u.on(c.Common.AudioEvent.stopBGM, this.stop, this), u.on(c.Common.AudioEvent.pause, this.pauseBGM, this), u.on(c.Common.AudioEvent.resume, this.resumeBGM, this)
					}, e.onLevelInit = function() {
						this.loopClips = []
					}, e.playClickBtn = function() {
						this.playEffect(s.AudioClip.clickBtn)
					}, e.playEffect = function(e, t) {
						var i = this;
						null == t ? t = {
							isLoop: !1,
							volume: 1
						} : (null == t.isLoop && (t.isLoop = !1), null == t.volume && (t.volume = 1), t.isLoop && this.loopClips.indexOf(e) < 0 && this.loopClips.push(e)), void 0 === this.allClips[e] ? l.loadBundle("Audio", function() {
							l.loadBundleRes("Audio", e, function(n) {
								if (!n) return i.allClips[e] = null, void a("要播放的音效资源未找到：", e);
								i.allClips[e] = n, i._playEffect(e, t.isLoop, t.volume)
							}, !1)
						}, !1) : this._playEffect(e, t.isLoop, t.volume)
					}, e._playEffect = function(e, t, i) {
						if (void 0 === t && (t = !1), void 0 === i && (i = 1), r.audioConfig.effect && null !== this.allClips[e]) {
							var n = this.allClips[e];
							t ? (this.effectAudioSource.clip = n, this.effectAudioSource.loop = !0, this.effectAudioSource.play()) : this.effectAudioSource.playOneShot(n, i)
						}
					}, e.stopEffect = function(e) {
						if (this.allClips[e]) {
							this.effectAudioSource.stop();
							var t = this.loopClips.indexOf(e);
							t >= 0 && this.loopClips.splice(t, 1)
						}
					}, e.playBGM = function(e, t) {
						var i = this;
						if (void 0 === t && (t = !0), r.audioConfig.bgm && this.curBGM && this.curBGM == e && this.allClips[this.curBGM]) {
							var n = this.allClips[this.curBGM];
							return this.bgmAudioSource.clip = n, this.bgmAudioSource.loop = !0, void(this.bgmAudioSource.state != o.AudioState.PLAYING && this.bgmAudioSource.play())
						}
						void 0 === this.allClips[e] ? l.loadBundle("Audio", function() {
							l.loadBundleRes("Audio", e, function(n) {
								if (!n) return i.allClips[e] = null, void a("要播放的音效资源未找到：", e);
								i.allClips[e] = n, i._playBGM(e, t)
							}, !1)
						}, !1) : this._playBGM(e, t)
					}, e._playBGM = function(e, t) {
						if (void 0 === t && (t = !0), r.audioConfig.bgm && null !== this.allClips[e]) {
							this.curBGM && this.bgmAudioSource.stop();
							var i = this.allClips[e];
							this.bgmAudioSource.clip = i, this.bgmAudioSource.loop = t, this.curBGM = e, this.bgmAudioSource.play()
						}
					}, e.stop = function() {
						this.curBGM && (this.bgmAudioSource.stop(), this.curBGM = null)
					}, e.pauseBGM = function() {
						this.curBGM && this.bgmAudioSource.pause()
					}, e.resumeBGM = function() {
						this.curBGM && this.bgmAudioSource.play()
					}, e.onGameOver = function() {
						for (var e = this.loopClips.length - 1; e >= 0; e--) {
							var t = this.loopClips[e];
							this.stopEffect(t)
						}
					}, e
				}());
				t(d, "allClips", {}), t(d, "loopClips", []), t(d, "bgmAudioSource", null), t(d, "bgmAudioSourceNode", null), t(d, "effectAudioSource", null), t(d, "effectAudioSourceNode", null), t(d, "curBGM", null), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/yyComponent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./CommonEvent.ts", "./EventManager.ts", "./GameEventType.ts", "./Action3dManager.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m, v, g, y;
		return {
			setters: [function(e) {
				t = e.defineProperty, i = e.applyDecoratedDescriptor, n = e.inheritsLoose, o = e.assertThisInitialized, a = e.initializerDefineProperty, s = e.createClass
			}, function(e) {
				r = e.cclegacy, u = e.Node, c = e._decorator, l = e.Widget, d = e.Layout, h = e.Component
			}, function(e) {
				p = e.GlobalEnum
			}, function(e) {
				f = e.CommonEvent
			}, function(e) {
				m = e.default
			}, function(e) {
				v = e.EventType
			}, function(e) {
				g = e.default, y = e.ActionMngType
			}],
			execute: function() {
				var b, S, C, w, A, T;
				r._RF.push({}, "d2f58JcttJPP6hHjBNvP5V8", "yyComponent", void 0);
				var x = c,
					P = x.ccclass,
					D = x.property;
				e("default", (b = D(u), P((T = A = function(e) {
					function i() {
						for (var i, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
						return i = e.call.apply(e, [this].concat(s)) || this, t(o(i), "_customId", null), t(o(i), "simpleComps", []), t(o(i), "_customUpdateState", void 0), t(o(i), "customUpdateMap", void 0), t(o(i), "customStep", void 0), t(o(i), "events", {}), t(o(i), "onceEvents", {}), a(o(i), "btnNative", w, o(i)), i
					}
					n(i, e);
					var r = i.prototype;
					return r.getElementIndexInArray = function(e, t) {
						for (var i = e.Id, n = t.length - 1; n >= 0; --n)
							if (t[n].Id == i) return n;
						return -1
					}, r.removeElementInArray = function(e, t) {
						for (var i = e.Id, n = 0, o = t.length; n < o; ++n)
							if (t[n].Id == i) return t.splice(n, 1), !0;
						return !1
					}, r.init = function(e) {
						this.initSub(), this.initUIComponents(), this.registAllCustomUpdate(), this.onEvents(), void 0 !== e && this.setData(e)
					}, r.initSub = function() {}, r.initUIComponents = function() {
						if (this.node && this.node.parent) {
							var e = this.node.getComponent(l);
							e && e.updateAlignment();
							var t = this.node.getComponent(d);
							t && t.updateLayout()
						}
					}, r.onEvents = function() {}, r.registAllCustomUpdate = function() {}, r.setData = function(e) {}, r.reset = function() {
						this.resetSub(), this.resetCustomUpdateState(), this.resetSimpleComps()
					}, r.resetSub = function() {}, r.reuse = function(e) {
						this.reset(), this.onEvents(), void 0 !== e && this.setData(e)
					}, r.unuse = function() {
						this.reset(), this.offEvents(), g.getMng(y.Level).stopAllActions(this.node), g.getMng(y.UI).stopAllActions(this.node)
					}, r.addSimpleComp = function(e, t) {
						e ? this.simpleComps.indexOf(e) < 0 && (this.simpleComps.push(e), e.init(t)) : console.error("addSimpleComp----脚本不存在!")
					}, r.resetSimpleComps = function() {
						for (var e = 0, t = this.simpleComps.length; e < t; ++e) this.simpleComps[e].reset()
					}, r.updateSimpleComps = function(e) {
						for (var t = 0, i = this.simpleComps.length; t < i; ++t) this.simpleComps[t].customUpdate(e)
					}, r.stepEmpty = function(e) {}, r.initCustomUpdateState = function() {
						this._customUpdateState = null, this.customStep = this.stepEmpty, this.customUpdateMap = {}
					}, r.resetCustomUpdateState = function() {
						this._customUpdateState = null, this.customStep = this.stepEmpty
					}, r.registCustomUpdate = function(e, t) {
						this.customUpdateMap || (this.customUpdateMap = {}), this.customUpdateMap[e] = t
					}, r.enterCustomUpdateState = function(e) {
						this._customUpdateState != e && (this._customUpdateState = e, this.customUpdateMap[e] ? this.customStep = this.customUpdateMap[e] : this.customStep = this.stepEmpty)
					}, r.customUpdate = function(e) {
						this.customStep && this.customStep(e)
					}, r.runCustomUpdate = function(e, t) {
						for (var i = e.length - 1; i >= 0; --i) e[i].customUpdate(t)
					}, r.getPosition = function(e) {
						return e ? this.node.getPosition(e) : this.node.position
					}, r.setEulerAngles = function(e) {
						this.node.eulerAngles = e
					}, r.setScale = function(e) {
						this.node.setScale(e)
					}, r.show = function(e) {
						this.node.active = !0, void 0 !== e && this.setData(e), this.onEvents()
					}, r.hide = function() {
						this.node.active = !1, this.reset(), this.offEvents()
					}, r.getData = function(e) {
						return null
					}, r.on = function(e, t, i) {
						var n = m.on(e, t, i);
						n && (this.events.hasOwnProperty(e) || (this.events[e] = []), this.events[e].push(n))
					}, r.once = function(e, t, i) {
						var n = m.once(e, t, i);
						n && (this.onceEvents.hasOwnProperty(e) || (this.onceEvents[e] = []), this.onceEvents[e].push(n))
					}, r.emit = function(e, t, i) {
						void 0 === t ? m.emit(e) : void 0 === i ? m.emit(e, t) : m.emit(e, t, i), this.onceEvents.hasOwnProperty(e) && delete this.onceEvents[e]
					}, r.off = function(e, t, i) {
						var n = this.events[e];
						if (n)
							for (var o = n.length - 1; o >= 0; --o) n[o].cb === t && n[o].target === i && (m.off(e, n[o]), n.splice(o, 1));
						if (n = this.onceEvents[e])
							for (var a = n.length - 1; a >= 0; --a) n[a].cb === t && n[a].target === i && (m.off(e, n[a]), n.splice(a, 1))
					}, r.offEvents = function() {
						for (var e in this.events) m.offGroup(e, this.events[e]);
						for (var t in this.events = {}, this.onceEvents) m.offGroup(t, this.onceEvents[t]);
						this.onceEvents = {}
					}, r.onDestroy = function() {
						this.reset(), this.offEvents()
					}, r.showUI = function(e, t) {
						this.emit(f.UIEvent.enter, e, t)
					}, r.hideUI = function(e) {
						this.emit(f.UIEvent.exit, e)
					}, r.showTouchMask = function(e, t) {
						void 0 === e && (e = 1), void 0 === t && (t = 3), this.emit(f.UIEvent.showTouchMask, e, t)
					}, r.hideTouchMask = function(e) {
						void 0 === e && (e = 1), this.emit(f.UIEvent.hideTouchMask, e)
					}, r.showMsg = function(e) {
						this.emit(f.UIEvent.showTip, e)
					}, r.playClickBtn = function() {
						this.emit(f.AudioEvent.playClickBtn)
					}, r.playClickCancel = function() {
						this.emit(v.Common.AudioEvent.playEffect, p.AudioClip.btnCancel)
					}, r.getNativeBtn = function() {
						return this.btnNative
					}, s(i, [{
						key: "Id",
						get: function() {
							return null === this._customId && (this._customId = i._autoId++), this._customId
						}
					}, {
						key: "customUpdateState",
						get: function() {
							return this._customUpdateState
						}
					}, {
						key: "x",
						get: function() {
							return this.node.position.x
						}
					}, {
						key: "y",
						get: function() {
							return this.node.position.y
						}
					}, {
						key: "z",
						get: function() {
							return this.node.position.z
						}
					}, {
						key: "angleX",
						get: function() {
							return this.node.eulerAngles.x
						}
					}, {
						key: "angleY",
						get: function() {
							return this.node.eulerAngles.y
						}
					}, {
						key: "angleZ",
						get: function() {
							return this.node.eulerAngles.z
						}
					}]), i
				}(h), t(A, "_autoId", 1), w = i((C = T).prototype, "btnNative", [b], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), S = C)) || S)), r._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/UIAnimtions.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Action3dManager.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty
			}, function(e) {
				s = e.cclegacy, r = e._decorator, u = e.Enum, c = e.v3, l = e.Widget, d = e.UITransform, h = e.Renderable2D
			}, function(e) {
				p = e.default, f = e.ActionMngType
			}, function(e) {
				m = e.default
			}],
			execute: function() {
				var v, g, y, b, S, C, w, A, T, x, P, D;
				s._RF.push({}, "d3f72QdyNBKHoknD4B5LQu5", "UIAnimtions", void 0);
				var B, k, _ = r.ccclass,
					E = r.property;
				! function(e) {
					e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e[e.Center_zoomOut = 4] = "Center_zoomOut", e[e.None = 5] = "None", e[e.Center_zoomIn = 6] = "Center_zoomIn"
				}(B || (B = {})),
				function(e) {
					e[e.SineIn = 0] = "SineIn", e[e.SineOut = 1] = "SineOut", e[e.SineInOut = 2] = "SineInOut", e[e.BackIn = 3] = "BackIn", e[e.BackOut = 4] = "BackOut", e[e.BackInOut = 5] = "BackInOut", e[e.EaseIn = 6] = "EaseIn", e[e.EaseOut = 7] = "EaseOut", e[e.EaseElasticIn = 8] = "EaseElasticIn", e[e.EaseElasticOut = 9] = "EaseElasticOut", e[e.EaseElasticInOut = 10] = "EaseElasticInOut", e[e.EaseBounceIn = 11] = "EaseBounceIn", e[e.EaseBounceOut = 12] = "EaseBounceOut"
				}(k || (k = {})), e("UIAnimtions", (v = _("UIAnimtions"), g = E({
					type: u(B)
				}), y = E({
					type: u(k),
					visible: function() {
						return this.enterDirection != B.None
					}
				}), b = E({
					visible: function() {
						return this.enterDirection != B.None && this.enterDirection != B.Center_zoomOut
					}
				}), v((w = t((C = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "enterDirection", w, o(t)), n(o(t), "easingType", A, o(t)), n(o(t), "moveDistRate", T, o(t)), n(o(t), "delayTime", x, o(t)), n(o(t), "animTime", P, o(t)), n(o(t), "isOpacityAnim", D, o(t)), a(o(t), "hadAnim", !1), a(o(t), "originalPos", void 0), a(o(t), "animStartPos", void 0), a(o(t), "animPosition", void 0), a(o(t), "originalScale", void 0), a(o(t), "animStartScale", void 0), a(o(t), "animScale", void 0), a(o(t), "originalOpacity", void 0), a(o(t), "animStartOpacity", void 0), a(o(t), "animOpacity", void 0), t
					}
					i(t, e);
					var s = t.prototype;
					return s.onEnable = function() {
						this.computeAnim(), this.playAnim()
					}, s.onDisable = function() {
						p.getMng(f.UI).stopAllActions(this.node)
					}, s.computeAnim = function() {
						if (!this.hadAnim) switch (this.hadAnim = !0, this.enterDirection) {
							case B.Center_zoomIn:
							case B.Center_zoomOut:
								this.computeAnimScale();
								break;
							case B.Bottom:
							case B.Left:
							case B.Right:
							case B.Top:
								this.computeAnimPosition();
								break;
							case B.None:
								this.isOpacityAnim && this.computeAnimOpacity()
						}
					}, s.playAnim = function() {
						switch (this.enterDirection) {
							case B.Center_zoomIn:
							case B.Center_zoomOut:
								this.playAnimScale();
								break;
							case B.Bottom:
							case B.Left:
							case B.Right:
							case B.Top:
								this.playAnimPosition();
								break;
							case B.None:
								this.isOpacityAnim && this.playAnimOpacity()
						}
					}, s.computeAnimPosition = function() {
						this.originalPos = c(), this.animStartPos = c();
						var e = this.node.getComponent(l);
						e && (e.updateAlignment(), e.enabled = !1), this.node.getPosition(this.originalPos), this.animStartPos.set(this.originalPos);
						var t = this.node.parent.getComponent(d),
							i = this.node.getComponent(d);
						switch (this.enterDirection) {
							case B.Bottom:
								this.animStartPos.y = -t.height * t.anchorPoint.y - i.height * (1 - i.anchorPoint.y);
								break;
							case B.Left:
								this.animStartPos.x = -t.width * t.anchorPoint.x - i.width * (1 - i.anchorPoint.x);
								break;
							case B.Right:
								this.animStartPos.x = t.width * (1 - t.anchorPoint.x) + i.width * i.anchorPoint.x;
								break;
							case B.Top:
								this.animStartPos.y = t.height * (1 - t.anchorPoint.y) + i.height * i.anchorPoint.y
						}
						var n = p.moveTo(0, this.animStartPos),
							o = p.delay(this.delayTime),
							a = this.animTime,
							s = p.moveTo(a, this.originalPos),
							r = this.getEase();
						r && s.easing(r);
						var u = p.sequence(n, o, s);
						this.animPosition = u
					}, s.playAnimPosition = function() {
						p.getMng(f.UI).runAction(this.node, this.animPosition)
					}, s.computeAnimScale = function() {
						var e = this.node.getComponent(l);
						e && (e.updateAlignment(), e.enabled = !1);
						var t = 0;
						switch (this.enterDirection) {
							case B.Center_zoomIn:
								t = 3;
								break;
							case B.Center_zoomOut:
								t = 0
						}
						this.animStartScale = c(t, t, t), this.originalScale = c(), this.node.getScale(this.originalScale);
						var i = p.scaleTo(0, this.animStartScale),
							n = p.delay(this.delayTime),
							o = this.animTime,
							a = p.scaleTo(o, this.originalScale),
							s = this.getEase();
						s && a.easing(s);
						var r = p.sequence(i, n, a);
						this.animScale = r
					}, s.playAnimScale = function() {
						p.getMng(f.UI).runAction(this.node, this.animScale)
					}, s.getEase = function() {
						switch (this.easingType) {
							case k.BackIn:
								return p.easeIn(2);
							case k.BackInOut:
								return p.easeInOut(2);
							case k.BackOut:
								return p.easeElasticOut(.7);
							case k.EaseBounceIn:
								return p.easeBounceIn();
							case k.EaseBounceOut:
								return p.easeBounceOut();
							case k.EaseElasticIn:
								return p.easeElasticIn();
							case k.EaseElasticInOut:
								return p.easeElasticInOut();
							case k.EaseElasticOut:
								return p.easeElasticOut();
							case k.EaseIn:
								return p.easeIn(2);
							case k.EaseOut:
								return p.easeOut(2);
							case k.SineIn:
								return p.easeSinIn();
							case k.SineInOut:
								return p.easeSinInOut();
							case k.SineOut:
								return p.easeSinOut();
							default:
								return null
						}
					}, s.computeAnimOpacity = function() {
						var e = this.node.getComponent(h);
						if (e) {
							this.originalOpacity = e.color.a, this.animStartOpacity = 0;
							var t = p.fadeTo(0, this.animStartOpacity),
								i = p.delay(this.delayTime),
								n = this.animTime,
								o = p.fadeTo(n, this.originalOpacity),
								a = this.getEase();
							a && o.easing(a);
							var s = p.sequence(t, i, o);
							this.animOpacity = s
						}
					}, s.playAnimOpacity = function() {
						this.animOpacity && p.getMng(f.UI).runAction(this.node, this.animOpacity)
					}, t
				}(m)).prototype, "enterDirection", [g], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return B.Top
					}
				}), A = t(C.prototype, "easingType", [y], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return k.BackInOut
					}
				}), T = t(C.prototype, "moveDistRate", [b], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 1.5
					}
				}), x = t(C.prototype, "delayTime", [E], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 0
					}
				}), P = t(C.prototype, "animTime", [E], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 1
					}
				}), D = t(C.prototype, "isOpacityAnim", [E], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return !1
					}
				}), S = C)) || S)), s._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GamePlatform.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./PCSDK.ts", "./GamePlatformType.ts", "./UMAManager.ts", "./PlayerData.ts", "./HeyGameOPPOSDK.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u;
		return {
			setters: [function(e) {
				t = e.createClass, i = e.defineProperty
			}, function(e) {
				n = e.cclegacy
			}, function(e) {
				o = e.default
			}, function(e) {
				a = e.GamePlatformType
			}, function(e) {
				s = e.default
			}, function(e) {
				r = e.default
			}, function(e) {
				u = e.default
			}],
			execute: function() {
				n._RF.push({}, "da1cfQrGnNAE4bDQ9RN6h+7", "GamePlatform", void 0);
				var c = e("default", function() {
					function e() {}
					return e.init = function(e) {
						switch (console.log(e), this._config = e, e.type) {
							case a.HeyGameOPPO:
								this._sdk = new u, (new s).init(this._config.shujutongjikey);
								break;
							default:
								this._sdk = new o
						}
						this._sdk.config = this._config, this._sdk.init(this._config), this._sdk.onEvents(), this._sdk.loadRecord(), this._sdk.api && this._sdk.api.onHide && this._sdk.api.onHide(function() {
							r.saveData()
						})
					}, t(e, null, [{
						key: "Config",
						get: function() {
							return this._config
						}
					}, {
						key: "SDK",
						get: function() {
							return this._sdk
						}
					}]), e
				}());
				i(c, "_config", null), i(c, "_sdk", null), n._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GameEventType.ts", ["cc", "./CommonEvent.ts"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.cclegacy
			}, function(e) {
				i = e.CommonEvent
			}],
			execute: function() {
				var n;
				e("EventType", void 0), t._RF.push({}, "db843HWqcJKUbRQQeZ/Cqq2", "GameEventType", void 0),
					function(e) {
						var t, n, o, a;
						e.Common = i,
							function(e) {
								e[e.startIndex = 1e5] = "startIndex", e[e.levelSceneLoadOneAsset = 100001] = "levelSceneLoadOneAsset", e[e.levelSceneLoadFinish = 100002] = "levelSceneLoadFinish", e[e.resurgence = 100003] = "resurgence", e[e.cancelResurgence = 100004] = "cancelResurgence", e[e.testWin = 100005] = "testWin", e[e.testLose = 100006] = "testLose", e[e.drawRect = 100007] = "drawRect", e[e.changeAudioRecord = 100008] = "changeAudioRecord", e[e.disideLeaveScene = 100009] = "disideLeaveScene", e[e.levelCurScene = 100010] = "levelCurScene", e[e.enterNewScene = 100011] = "enterNewScene", e[e.enterNewSceneFinish = 100012] = "enterNewSceneFinish", e[e.startFight = 100013] = "startFight", e[e.enterLobby = 100014] = "enterLobby", e[e.cameraEnabled = 100015] = "cameraEnabled", e[e.cameraMove = 100016] = "cameraMove", e[e.shakeScreen = 100017] = "shakeScreen", e[e.shockScreen = 100018] = "shockScreen", e[e.rotateCameraStart = 100019] = "rotateCameraStart", e[e.rotateCameraMove = 100020] = "rotateCameraMove", e[e.rotateCameraEnd = 100021] = "rotateCameraEnd", e[e.zoomCamera = 100022] = "zoomCamera", e[e.cameraRotated = 100023] = "cameraRotated", e[e.addEffect = 100024] = "addEffect", e[e.removeEffect = 100025] = "removeEffect", e[e.createSceneGround = 100026] = "createSceneGround", e[e.delayUnlockRoom = 100027] = "delayUnlockRoom", e[e.delayAddTileUnlockRoom = 100028] = "delayAddTileUnlockRoom", e[e.unlockRoom = 100029] = "unlockRoom", e[e.addWallNode = 100030] = "addWallNode", e[e.addTileContentItem = 100031] = "addTileContentItem", e[e.removeTileUnlockRoom = 100032] = "removeTileUnlockRoom", e[e.addRoomGround = 100033] = "addRoomGround", e[e.addTileSoldier = 100034] = "addTileSoldier", e[e.removeTileSoldier = 100035] = "removeTileSoldier", e[e.unlockSoldier = 100036] = "unlockSoldier", e[e.addSoldier = 100037] = "addSoldier", e[e.growSoldier = 100038] = "growSoldier", e[e.addTileWeapon = 100039] = "addTileWeapon", e[e.addFightSoldier = 100040] = "addFightSoldier", e[e.geBanAddEnemy = 100041] = "geBanAddEnemy", e[e.addAtkColler = 100042] = "addAtkColler", e[e.addPlayerBullet = 100043] = "addPlayerBullet", e[e.removePlayerBullet = 100044] = "removePlayerBullet", e[e.playBeHitParticle = 100045] = "playBeHitParticle", e[e.playEnemyDeadBlood = 100046] = "playEnemyDeadBlood", e[e.addGold = 100047] = "addGold", e[e.removeEnemy = 100048] = "removeEnemy", e[e.addDuYe = 100049] = "addDuYe", e[e.removeDuYe = 100050] = "removeDuYe", e[e.addEnemyByBoss = 100051] = "addEnemyByBoss", e[e.playerChangeRoom = 100052] = "playerChangeRoom", e[e.roleBeHit = 100053] = "roleBeHit", e[e.enemyBeHit = 100054] = "enemyBeHit", e[e.roleHitSuccess = 100055] = "roleHitSuccess", e[e.playerDead = 100056] = "playerDead", e[e.addBaoZhaParticle = 100057] = "addBaoZhaParticle", e[e.showBtnChangeWeapon = 100058] = "showBtnChangeWeapon", e[e.hideBtnChangeWeapon = 100059] = "hideBtnChangeWeapon", e[e.changedWeapon = 100060] = "changedWeapon", e[e.unlockWeapon = 100061] = "unlockWeapon", e[e.attributeGrowed = 100062] = "attributeGrowed", e[e.showLevelProgress = 100063] = "showLevelProgress", e[e.updateLevelProgress = 100064] = "updateLevelProgress", e[e.showTotalGoldBar = 100065] = "showTotalGoldBar", e[e.updateTotalGold = 100066] = "updateTotalGold", e[e.showBtnXiuFu = 100067] = "showBtnXiuFu", e[e.hideBtnXiuFu = 100068] = "hideBtnXiuFu", e[e.autoXiuFuGeBan = 100069] = "autoXiuFuGeBan", e[e.subGeBanNeedXiuFuCount = 100070] = "subGeBanNeedXiuFuCount", e[e.finishYinSi = 100071] = "finishYinSi", e[e.showTeach = 100072] = "showTeach", e[e.enterTeach = 100073] = "enterTeach", e[e.exitTeach = 100074] = "exitTeach", e[e.addTileForTeach = 100075] = "addTileForTeach", e[e.showLiquidTime = 100076] = "showLiquidTime", e[e.exitBossInfo = 100077] = "exitBossInfo", e[e.showGeBanDirIcon = 100078] = "showGeBanDirIcon", e[e.hideGeBanDirIcon = 100079] = "hideGeBanDirIcon", e[e.showEnemyDirIcon = 100080] = "showEnemyDirIcon", e[e.hideEnemyDirIcon = 100081] = "hideEnemyDirIcon", e[e.showEnemyEnterDir = 100082] = "showEnemyEnterDir", e[e.hideEnemyEnterDir = 100083] = "hideEnemyEnterDir", e[e.getGeBanXiuFuState = 100084] = "getGeBanXiuFuState", e[e.jumpToFeiJiFinish = 100085] = "jumpToFeiJiFinish", e[e.showMaskLevelScene = 100086] = "showMaskLevelScene", e[e.levelSceneMaskClosed = 100087] = "levelSceneMaskClosed", e[e.showMaskLevelSceneOpen = 100088] = "showMaskLevelSceneOpen", e[e.startHeiYe = 100089] = "startHeiYe", e[e.startWuJin = 100090] = "startWuJin", e[e.unlockedAllRooms = 100091] = "unlockedAllRooms", e[e.teachHeiYe = 100092] = "teachHeiYe", e[e.teachWuJin = 100093] = "teachWuJin", e[e.addDropItem = 100094] = "addDropItem", e[e.removeDropItem = 100095] = "removeDropItem", e[e.teachBreakIcon = 100096] = "teachBreakIcon", e[e.saveData = 100097] = "saveData", e[e.tongJiExitGame = 100098] = "tongJiExitGame", e[e.updateBtnWeapon = 100099] = "updateBtnWeapon", e[e.checkRenWu = 100100] = "checkRenWu", e[e.tipRenWuBtnAward = 100101] = "tipRenWuBtnAward", e[e.teachAwardRenWu = 100102] = "teachAwardRenWu", e[e.showRenWu = 100103] = "showRenWu", e[e.checkBtnWuJin = 100104] = "checkBtnWuJin", e[e.addEnemy = 100105] = "addEnemy", e[e.updateRoleCount = 100106] = "updateRoleCount"
							}(t || (t = {})), e.LevelEvent = t,
							function(e) {
								e[e.startIndex = 101e3] = "startIndex", e[e.roomChange = 101001] = "roomChange", e[e.removeWall = 101002] = "removeWall"
							}(n || (n = {})), e.EditorEvent = n,
							function(e) {
								e[e.startIndex = 102e3] = "startIndex"
							}(o || (o = {})), e.MyTeachEvent = o,
							function(e) {
								e[e.startIndex = 103e3] = "startIndex", e[e.clickWeaponItem = 103001] = "clickWeaponItem"
							}(a || (a = {})), e.WeaponShop = a
					}(n || (n = e("EventType", {}))), t._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/GamePlatformConfig.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GamePlatformType.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized
			}, function(e) {
				a = e.cclegacy, s = e.Enum, r = e.CCString, u = e._decorator, c = e.Component
			}, function(e) {
				l = e.GamePlatformType
			}],
			execute: function() {
				var d, h, p, f, m, v, g, y, b, S, C, w, A, T, x, P, D, B, k, _, E, I, G, M, R, L, N, F, z, O;
				a._RF.push({}, "dcc1fC1BMVGYoDaYaaesjp4", "GamePlatformConfig", void 0);
				var V = u,
					U = V.ccclass,
					H = V.property;
				e("default", (d = H({
					type: s(l)
				}), h = H({
					displayName: "项目appId",
					visible: function() {
						return this.type != l.PC
					}
				}), p = H({
					displayName: "项目secret",
					visible: function() {
						return this.type == l.WX
					}
				}), f = H({
					displayName: "游戏版本号",
					tooltip: "白鹰SDK专属，游戏版本号，与打包OPPO时的版本号一致",
					visible: function() {
						return this.type == l.HeyGameOPPO || this.type == l.HeyGameVIVO
					}
				}), m = H({
					displayName: "九宫格广告id",
					visible: function() {
						return this.type == l.HeyGameOPPO || this.type == l.HeyGameVIVO
					}
				}), v = H({
					displayName: "原生banner广告id",
					visible: function() {
						return this.type == l.HeyGameOPPO || this.type == l.HeyGameVIVO
					}
				}), g = H({
					displayName: "原生广告Id",
					tooltip: "第0个为首页/关卡中id，第1个为结算页id",
					type: [r],
					visible: function() {
						return this.type == l.HeyGameOPPO || this.type == l.HeyGameVIVO
					}
				}), y = H({
					displayName: "友盟数据统计key",
					visible: function() {
						return this.type == l.HeyGameOPPO || this.type == l.HeyGameVIVO
					}
				}), b = H({
					displayName: "视频广告Id",
					type: [r],
					visible: function() {
						return this.type != l.PC
					}
				}), S = H({
					displayName: "BannerId",
					type: [r],
					visible: function() {
						return this.type != l.PC
					}
				}), C = H({
					displayName: "插屏Id",
					type: [r],
					visible: function() {
						return this.type != l.PC
					}
				}), w = H({
					displayName: "原生广告Id",
					type: [r],
					visible: function() {
						return this.type == l.WX
					}
				}), A = H({
					displayName: "盒子广告Id",
					type: [r],
					visible: function() {
						return this.type == l.QQ
					}
				}), T = H({
					displayName: "积木广告Id",
					type: [r],
					visible: function() {
						return this.type == l.QQ
					}
				}), U((D = t((P = function(e) {
					function t() {
						for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
						return t = e.call.apply(e, [this].concat(a)) || this, n(o(t), "type", D, o(t)), n(o(t), "appId", B, o(t)), n(o(t), "secret", k, o(t)), n(o(t), "heyVersionName", _, o(t)), n(o(t), "heyDrawerGameAdUnitId", E, o(t)), n(o(t), "heyBannerGameAdUnitId", I, o(t)), n(o(t), "heyNativeAdUnitId", G, o(t)), n(o(t), "shujutongjikey", M, o(t)), n(o(t), "videoAdUnitId", R, o(t)), n(o(t), "BannerAdUnitId", L, o(t)), n(o(t), "InterstitialAdUnitId", N, o(t)), n(o(t), "nativeAdUnitId", F, o(t)), n(o(t), "appBoxUnitId", z, o(t)), n(o(t), "blockAdUnitId", O, o(t)), t
					}
					return i(t, e), t
				}(c)).prototype, "type", [d], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return l.PC
					}
				}), B = t(P.prototype, "appId", [h], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return ""
					}
				}), k = t(P.prototype, "secret", [p], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return ""
					}
				}), _ = t(P.prototype, "heyVersionName", [f], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return "1.0.0"
					}
				}), E = t(P.prototype, "heyDrawerGameAdUnitId", [m], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return ""
					}
				}), I = t(P.prototype, "heyBannerGameAdUnitId", [v], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return ""
					}
				}), G = t(P.prototype, "heyNativeAdUnitId", [g], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), M = t(P.prototype, "shujutongjikey", [y], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return ""
					}
				}), R = t(P.prototype, "videoAdUnitId", [b], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), L = t(P.prototype, "BannerAdUnitId", [S], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), N = t(P.prototype, "InterstitialAdUnitId", [C], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), F = t(P.prototype, "nativeAdUnitId", [w], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), z = t(P.prototype, "appBoxUnitId", [A], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), O = t(P.prototype, "blockAdUnitId", [T], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return []
					}
				}), x = P)) || x)), a._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/EditorRoom.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./yyComponent.ts"], function(e) {
		"use strict";
		var t, i, n, o, a, s, r, u, c, l, d, h, p, f, m, v;
		return {
			setters: [function(e) {
				t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized, a = e.defineProperty, s = e.createClass
			}, function(e) {
				r = e.cclegacy, u = e._decorator, c = e.CCInteger, l = e.Node, d = e.v2, h = e.UITransform, p = e.Label, f = e.Color
			}, function(e) {
				m = e.default
			}, function(e) {
				v = e.default
			}],
			execute: function() {
				var g, y, b, S, C, w, A, T, x, P;
				r._RF.push({}, "f34179aQ01HH5CA/JnZAln2", "EditorRoom", void 0);
				var D = u.ccclass,
					B = u.property;
				e("EditorRoom", (g = D("EditorRoom"), y = B({
					displayName: "水平尺寸",
					type: c
				}), b = B({
					displayName: "垂直尺寸",
					type: c
				}), S = B(l), C = B({
					type: c,
					displayName: "解锁金币"
				}), g((T = t((A = function(e) {
					function t() {
						for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
						return t = e.call.apply(e, [this].concat(s)) || this, n(o(t), "_size", T, o(t)), a(o(t), "tilePos", d()), n(o(t), "unlockIcon", x, o(t)), a(o(t), "_dependTile", d()), a(o(t), "dependTileWallPos", d()), n(o(t), "_unlockGold", P, o(t)), t
					}
					i(t, e);
					var r = t.prototype;
					return r.onChangeSize = function() {
						var e = m.GameRule.tileSize,
							t = this.node.getComponent(h);
						t.width = this._size.x * e.x * 10, t.height = this._size.y * e.z * 10
					}, r.clampUnlockIcon = function() {
						var e = m.GameRule.tileSize,
							t = this.unlockIcon.getPosition();
						this._dependTile.x = 2 * Math.floor(.1 * t.x / e.x) + 1, this._dependTile.y = 2 * Math.floor(.1 * t.y / e.z) + 1, t.x = this._dependTile.x * e.x * 5, t.y = this._dependTile.y * e.z * 5, this.unlockIcon.setPosition(t), this.dependTileWallPos = d(), this._dependTile.x < 0 ? (this.dependTileWallPos.x = this.tilePos.x, this.dependTileWallPos.y = this.tilePos.y + this._dependTile.y) : this._dependTile.x > 2 * this.size.x ? (this.dependTileWallPos.x = this.tilePos.x + 2 * this.size.x, this.dependTileWallPos.y = this.tilePos.y + this._dependTile.y) : this._dependTile.y < 0 ? (this.dependTileWallPos.x = this.tilePos.x + this._dependTile.x, this.dependTileWallPos.y = this.tilePos.y) : this._dependTile.y > 2 * this.size.y ? (this.dependTileWallPos.x = this.tilePos.x + this._dependTile.x, this.dependTileWallPos.y = this.tilePos.y + 2 * this.size.y) : (this.dependTileWallPos.x = 0, this.dependTileWallPos.y = 0)
					}, r.updateData = function() {
						this.clampPosition(), this.clampUnlockIcon(), this.unlockGold = this._unlockGold
					}, r.clampPosition = function() {
						var e = m.GameRule.tileSize,
							t = this.node.getPosition();
						this.tilePos.x = 2 * Math.round(.1 * t.x / e.x), this.tilePos.y = 2 * Math.round(.1 * t.y / e.z), t.x = this.tilePos.x * e.x * 5, t.y = this.tilePos.y * e.z * 5, this.node.setPosition(t)
					}, s(t, [{
						key: "size",
						get: function() {
							return this._size
						}
					}, {
						key: "sizeX",
						get: function() {
							return this._size.x
						},
						set: function(e) {
							var t = Math.round(e);
							this._size.x != t && (this._size.x = t, this.onChangeSize())
						}
					}, {
						key: "sizeY",
						get: function() {
							return this._size.y
						},
						set: function(e) {
							var t = Math.round(e);
							this._size.y != t && (this._size.y = t, this.onChangeSize())
						}
					}, {
						key: "dependTile",
						get: function() {
							return this._dependTile.x >= 0 && this._dependTile.x <= this.size.x && this._dependTile.y >= 0 && this._dependTile.y <= this.size.y ? d() : d(this._dependTile.x + this.tilePos.x, this._dependTile.y + this.tilePos.y)
						}
					}, {
						key: "unlockGold",
						get: function() {
							return this._unlockGold
						},
						set: function(e) {
							this._unlockGold = Math.round(e);
							var t = this.node.getComponentInChildren(p);
							if (!t) {
								var i = new l;
								(t = i.addComponent(p)).color = f.BLACK, t.fontSize = 15, t.lineHeight = 15, this.node.children[0].addChild(i)
							}
							t.string = this._unlockGold.toString()
						}
					}]), t
				}(v)).prototype, "_size", [B], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return d(3, 3)
					}
				}), t(A.prototype, "sizeX", [y], Object.getOwnPropertyDescriptor(A.prototype, "sizeX"), A.prototype), t(A.prototype, "sizeY", [b], Object.getOwnPropertyDescriptor(A.prototype, "sizeY"), A.prototype), x = t(A.prototype, "unlockIcon", [S], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return null
					}
				}), P = t(A.prototype, "_unlockGold", [B], {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					initializer: function() {
						return 100
					}
				}), t(A.prototype, "unlockGold", [C], Object.getOwnPropertyDescriptor(A.prototype, "unlockGold"), A.prototype), w = A)) || w)), r._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/UMAManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GlobalEnum.ts", "./EventManager.ts", "./GameEventType.ts"], function(e) {
		"use strict";
		var t, i, n, o, a;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy
			}, function(e) {
				n = e.GlobalEnum
			}, function(e) {
				o = e.default
			}, function(e) {
				a = e.EventType
			}],
			execute: function() {
				i._RF.push({}, "fe7eftQEmtMRJrGXLE4pPfa", "UMAManager", void 0), e("default", function() {
					function e() {
						t(this, "tool", void 0), t(this, "videoCount", 0)
					}
					var i = e.prototype;
					return i.init = function(e) {
						if (e) {
							var t, i = "";
							"string" == typeof e ? (t = e, i = "qg") : "object" == typeof e && (t = e.appKey, i = e.platform);
							var n = window[i];
							console.log("友盟runtime:", !!n), n && (this.tool = n.uma), this.tool && (this.tool.init({
								appKey: t,
								useOpenid: !1,
								debug: !0,
								uploadUserInfo: !1,
								autoGetOpenid: !1
							}), this.onEvents())
						}
					}, i.onEvents = function() {
						o.on(a.Common.ALDEvent.levelStart, this.onStart, this), o.on(a.Common.ALDEvent.levelWin, this.onLevelWin, this), o.on(a.Common.ALDEvent.levelLose, this.onLevelLose, this), o.on(a.Common.ALDEvent.sendEvent, this.sendEvent, this), o.on(a.Common.TongJi.video, this.onVideoEvent, this)
					}, i.onStart = function(e) {
						var t = {
							stageId: e.toString(),
							stageName: "第" + e + "关"
						};
						this.tool.stage.onStart(t)
					}, i.onRunning = function(e) {
						this.tool.stage.onRunning(e)
					}, i.onLevelWin = function(e) {
						var t = this.convertData(e);
						t.event = "complete", this.tool.stage.onEnd(t)
					}, i.onLevelLose = function(e) {
						var t = this.convertData(e);
						t.event = "fail", this.tool.stage.onEnd(t)
					}, i.convertData = function(e) {
						return {
							stageId: e.toString(),
							stageName: "第" + e + "关"
						}
					}, i.sendEvent = function(e) {
						this.tool.trackEvent(e.eventName, e.data)
					}, i.onVideoEvent = function(e) {
						switch (e.subType) {
							case n.Common.VideoSubType.videoSuc:
								this.videoCount += 1, this.tool.trackEvent(n.TongJiEvent.showVideo, {
									scene: e.type,
									lv: e.battle,
									count: this.videoCount.toString()
								})
						}
					}, e
				}()), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/LevelDataTemplate.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function(e) {
		"use strict";
		var t, i;
		return {
			setters: [function(e) {
				t = e.defineProperty
			}, function(e) {
				i = e.cclegacy
			}],
			execute: function() {
				i._RF.push({}, "ff8f08lKv1NV45mBkyn71pD", "LevelDataTemplate", void 0);
				var n = e("default", function() {
					function e() {}
					return e.createData = function() {
						this._levelData || (this._levelData = {
							1: [{
								id: 1,
								count: 20
							}],
							2: [{
								id: 2,
								count: 35
							}],
							3: [{
								id: 1,
								count: 35
							}, {
								id: 2,
								count: 20
							}],
							4: [{
								id: 1,
								count: 60
							}, {
								id: 4,
								count: 40
							}],
							5: [{
								rate: 5
							}, {
								id: 1,
								count: 136
							}, {
								id: 2,
								count: 20
							}, {
								id: 4,
								count: 80
							}],
							6: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 20
							}, {
								id: 4,
								count: 10
							}],
							7: [{
								id: 6,
								count: 20
							}],
							8: [{
								id: 6,
								count: 50
							}, {
								id: 4,
								count: 30
							}],
							9: [{
								rate: 99
							}, {
								id: 1,
								count: 100
							}, {
								id: 4,
								count: 60
							}, {
								id: 6,
								count: 20
							}],
							10: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 30
							}, {
								id: 4,
								count: 20
							}, {
								id: 6,
								count: 10
							}, {
								id: 105,
								count: 1
							}],
							11: [{
								id: 3,
								count: 20
							}],
							12: [{
								id: 3,
								count: 30
							}, {
								id: 4,
								count: 40
							}],
							13: [{
								id: 1,
								count: 50
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 20
							}],
							14: [{
								id: 5,
								count: 20
							}],
							15: [{
								id: 2,
								count: 50
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 20
							}],
							16: [{
								rate: 5
							}, {
								id: 3,
								count: 10
							}, {
								id: 5,
								count: 50
							}],
							17: [{
								rate: 99
							}, {
								id: 1,
								count: 150
							}, {
								id: 5,
								count: 30
							}],
							18: [{
								rate: 9
							}, {
								id: 1,
								count: 100
							}, {
								id: 6,
								count: 15
							}, {
								id: 5,
								count: 30
							}],
							19: [{
								id: 3,
								count: 30
							}, {
								id: 4,
								count: 70
							}],
							20: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 20
							}, {
								id: 4,
								count: 30
							}, {
								id: 5,
								count: 30
							}, {
								id: 106,
								count: 1
							}],
							21: [{
								id: 2,
								count: 60
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 30
							}],
							22: [{
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 10
							}],
							23: [{
								rate: 99
							}, {
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 30
							}, {
								id: 6,
								count: 30
							}],
							24: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 30
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 10
							}, {
								id: 7,
								count: 3
							}],
							25: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 30
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 20
							}, {
								id: 7,
								count: 3
							}, {
								id: 105,
								count: 1
							}],
							26: [{
								id: 1,
								count: 300
							}, {
								id: 4,
								count: 60
							}, {
								id: 7,
								count: 1
							}],
							27: [{
								id: 2,
								count: 100
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 50
							}, {
								id: 6,
								count: 40
							}, {
								id: 8,
								count: 3
							}],
							28: [{
								rate: 99
							}, {
								id: 1,
								count: 100
							}, {
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 100
							}, {
								id: 8,
								count: 1
							}],
							29: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 50
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 40
							}, {
								id: 7,
								count: 1
							}, {
								id: 8,
								count: 1
							}],
							30: [{
								id: 1,
								count: 100
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 20
							}, {
								id: 7,
								count: 1
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 2
							}, {
								id: 106,
								count: 1
							}],
							31: [{
								id: 3,
								count: 20
							}],
							32: [{
								id: 1,
								count: 40
							}, {
								id: 2,
								count: 20
							}],
							33: [{
								id: 1,
								count: 20
							}, {
								id: 3,
								count: 30
							}, {
								id: 4,
								count: 20
							}],
							34: [{
								rate: 99
							}, {
								id: 6,
								count: 100
							}],
							35: [{
								id: 1,
								count: 100
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 5
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 1
							}],
							36: [{
								id: 1,
								count: 150
							}, {
								id: 2,
								count: 20
							}, {
								id: 3,
								count: 10
							}, {
								id: 4,
								count: 20
							}],
							37: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 30
							}, {
								id: 3,
								count: 15
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 30
							}, {
								id: 7,
								count: 1
							}],
							38: [{
								rate: 99
							}, {
								id: 1,
								count: 110
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 30
							}, {
								id: 6,
								count: 30
							}, {
								id: 7,
								count: 1
							}],
							39: [{
								id: 1,
								count: 50
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 25
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 35
							}, {
								id: 6,
								count: 100
							}, {
								id: 7,
								count: 2
							}],
							40: [{
								id: 1,
								count: 150
							}, {
								id: 2,
								count: 80
							}, {
								id: 3,
								count: 35
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 40
							}, {
								id: 6,
								count: 50
							}, {
								id: 7,
								count: 1
							}, {
								id: 105,
								count: 1
							}, {
								id: 106,
								count: 1
							}],
							41: [{
								id: 1,
								count: 140
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 25
							}, {
								id: 4,
								count: 25
							}, {
								id: 5,
								count: 15
							}, {
								id: 6,
								count: 10
							}],
							42: [{
								id: 1,
								count: 50
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 30
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 15
							}, {
								id: 6,
								count: 100
							}],
							43: [{
								rate: 99
							}, {
								id: 1,
								count: 160
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 35
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 25
							}, {
								id: 6,
								count: 20
							}],
							44: [{
								id: 1,
								count: 70
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 40
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 100
							}, {
								id: 6,
								count: 20
							}],
							45: [{
								id: 1,
								count: 180
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 45
							}, {
								id: 4,
								count: 15
							}, {
								id: 5,
								count: 25
							}, {
								id: 6,
								count: 30
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 2
							}, {
								id: 106,
								count: 2
							}],
							46: [{
								id: 1,
								count: 190
							}, {
								id: 2,
								count: 5
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 15
							}, {
								id: 5,
								count: 35
							}, {
								id: 6,
								count: 30
							}, {
								id: 7,
								count: 2
							}],
							47: [{
								id: 1,
								count: 10
							}, {
								id: 2,
								count: 150
							}, {
								id: 3,
								count: 15
							}, {
								id: 4,
								count: 5
							}, {
								id: 5,
								count: 5
							}, {
								id: 6,
								count: 10
							}, {
								id: 7,
								count: 1
							}],
							48: [{
								rate: 99
							}, {
								id: 1,
								count: 20
							}, {
								id: 2,
								count: 25
							}, {
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 25
							}, {
								id: 5,
								count: 5
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 0
							}, {
								id: 8,
								count: 1
							}],
							49: [{
								id: 1,
								count: 250
							}, {
								id: 2,
								count: 0
							}, {
								id: 3,
								count: 60
							}, {
								id: 4,
								count: 100
							}, {
								id: 5,
								count: 30
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 2
							}],
							50: [{
								id: 1,
								count: 250
							}, {
								id: 2,
								count: 150
							}, {
								id: 3,
								count: 150
							}, {
								id: 4,
								count: 30
							}, {
								id: 5,
								count: 50
							}, {
								id: 6,
								count: 40
							}, {
								id: 7,
								count: 2
							}, {
								id: 105,
								count: 4
							}, {
								id: 106,
								count: 4
							}],
							51: [{
								id: 1,
								count: 50
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 20
							}],
							52: [{
								id: 1,
								count: 150
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 20
							}],
							53: [{
								rate: 99
							}, {
								id: 2,
								count: 200
							}, {
								id: 3,
								count: 20
							}, {
								id: 5,
								count: 20
							}, {
								id: 8,
								count: 1
							}],
							54: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 0
							}, {
								id: 8,
								count: 1
							}],
							55: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 10
							}, {
								id: 7,
								count: 1
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 4
							}, {
								id: 106,
								count: 4
							}],
							56: [{
								id: 1,
								count: 400
							}, {
								id: 2,
								count: 0
							}, {
								id: 3,
								count: 0
							}, {
								id: 4,
								count: 10
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 0
							}],
							57: [{
								id: 1,
								count: 0
							}, {
								id: 2,
								count: 0
							}, {
								id: 3,
								count: 250
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 0
							}, {
								id: 8,
								count: 1
							}],
							58: [{
								rate: 99
							}, {
								id: 1,
								count: 0
							}, {
								id: 2,
								count: 450
							}, {
								id: 3,
								count: 0
							}, {
								id: 4,
								count: 0
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 5
							}],
							59: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 120
							}, {
								id: 6,
								count: 10
							}, {
								id: 7,
								count: 3
							}],
							60: [{
								id: 1,
								count: 400
							}, {
								id: 2,
								count: 150
							}, {
								id: 3,
								count: 150
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 50
							}, {
								id: 6,
								count: 100
							}, {
								id: 7,
								count: 10
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 4
							}, {
								id: 106,
								count: 4
							}],
							61: [{
								id: 1,
								count: 0
							}, {
								id: 2,
								count: 0
							}, {
								id: 3,
								count: 0
							}, {
								id: 4,
								count: 30
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 200
							}, {
								id: 7,
								count: 1
							}],
							62: [{
								id: 1,
								count: 300
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 20
							}, {
								id: 7,
								count: 0
							}, {
								id: 8,
								count: 1
							}],
							63: [{
								rate: 99
							}, {
								id: 1,
								count: 20
							}, {
								id: 2,
								count: 20
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 200
							}, {
								id: 6,
								count: 100
							}, {
								id: 7,
								count: 2
							}],
							64: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 20
							}, {
								id: 7,
								count: 1
							}],
							65: [{
								id: 1,
								count: 400
							}, {
								id: 2,
								count: 100
							}, {
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 50
							}, {
								id: 7,
								count: 2
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 6
							}, {
								id: 106,
								count: 6
							}],
							66: [{
								id: 5,
								count: 100
							}, {
								id: 6,
								count: 100
							}, {
								id: 8,
								count: 1
							}],
							67: [{
								id: 105,
								count: 20
							}, {
								id: 8,
								count: 1
							}],
							68: [{
								rate: 99
							}, {
								id: 4,
								count: 20
							}, {
								id: 106,
								count: 20
							}, {
								id: 7,
								count: 1
							}],
							69: [{
								id: 2,
								count: 300
							}, {
								id: 4,
								count: 50
							}, {
								id: 106,
								count: 10
							}, {
								id: 8,
								count: 1
							}],
							70: [{
								id: 6,
								count: 100
							}, {
								id: 7,
								count: 3
							}, {
								id: 105,
								count: 20
							}, {
								id: 106,
								count: 20
							}],
							71: [{
								id: 1,
								count: 200
							}, {
								id: 4,
								count: 50
							}],
							72: [{
								id: 1,
								count: 100
							}, {
								id: 2,
								count: 100
							}, {
								id: 4,
								count: 50
							}, {
								id: 8,
								count: 1
							}],
							73: [{
								rate: 99
							}, {
								id: 1,
								count: 200
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 30
							}],
							74: [{
								id: 2,
								count: 100
							}, {
								id: 6,
								count: 100
							}, {
								id: 8,
								count: 1
							}],
							75: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 200
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 50
							}, {
								id: 7,
								count: 1
							}, {
								id: 105,
								count: 5
							}, {
								id: 106,
								count: 10
							}],
							76: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 200
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 120
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 50
							}, {
								id: 8,
								count: 1
							}],
							77: [{
								id: 1,
								count: 300
							}, {
								id: 2,
								count: 100
							}, {
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 50
							}, {
								id: 6,
								count: 0
							}, {
								id: 7,
								count: 1
							}],
							78: [{
								rate: 99
							}, {
								id: 1,
								count: 300
							}, {
								id: 2,
								count: 100
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 200
							}, {
								id: 6,
								count: 100
							}, {
								id: 8,
								count: 1
							}],
							79: [{
								id: 1,
								count: 300
							}, {
								id: 2,
								count: 100
							}, {
								id: 3,
								count: 150
							}, {
								id: 4,
								count: 120
							}, {
								id: 5,
								count: 50
							}, {
								id: 6,
								count: 50
							}, {
								id: 7,
								count: 1
							}],
							80: [{
								id: 1,
								count: 300
							}, {
								id: 2,
								count: 100
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 50
							}, {
								id: 7,
								count: 3
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 5
							}, {
								id: 106,
								count: 10
							}],
							81: [{
								id: 1,
								count: 0
							}, {
								id: 2,
								count: 0
							}, {
								id: 3,
								count: 0
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 200
							}, {
								id: 7,
								count: 1
							}],
							82: [{
								id: 1,
								count: 300
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 0
							}, {
								id: 6,
								count: 20
							}, {
								id: 7,
								count: 0
							}, {
								id: 8,
								count: 1
							}],
							83: [{
								rate: 99
							}, {
								id: 1,
								count: 20
							}, {
								id: 2,
								count: 20
							}, {
								id: 3,
								count: 20
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 200
							}, {
								id: 6,
								count: 100
							}, {
								id: 7,
								count: 2
							}],
							84: [{
								id: 1,
								count: 200
							}, {
								id: 2,
								count: 50
							}, {
								id: 3,
								count: 50
							}, {
								id: 4,
								count: 20
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 20
							}, {
								id: 7,
								count: 1
							}],
							85: [{
								id: 1,
								count: 400
							}, {
								id: 2,
								count: 100
							}, {
								id: 3,
								count: 100
							}, {
								id: 4,
								count: 50
							}, {
								id: 5,
								count: 20
							}, {
								id: 6,
								count: 50
							}, {
								id: 7,
								count: 2
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 6
							}, {
								id: 106,
								count: 6
							}],
							86: [{
								id: 5,
								count: 100
							}, {
								id: 6,
								count: 100
							}],
							87: [{
								id: 105,
								count: 10
							}],
							88: [{
								rate: 99
							}, {
								id: 106,
								count: 10
							}, {
								id: 8,
								count: 1
							}],
							89: [{
								id: 2,
								count: 300
							}, {
								id: 4,
								count: 50
							}, {
								id: 106,
								count: 10
							}],
							90: [{
								id: 6,
								count: 100
							}, {
								id: 7,
								count: 3
							}, {
								id: 8,
								count: 1
							}, {
								id: 105,
								count: 20
							}, {
								id: 106,
								count: 20
							}]
						})
					}, e.getData = function() {
						return this.createData(), this._levelData
					}, e.getWuJinEnemy = function() {
						return [{
							id: 1,
							count: 100
						}, {
							id: 2,
							count: 50
						}, {
							id: 3,
							count: 25
						}, {
							id: 4,
							count: 10
						}, {
							id: 5,
							count: 20
						}, {
							id: 6,
							count: 5
						}, {
							id: 7,
							count: 1
						}, {
							id: 8,
							count: 1
						}, {
							id: 105,
							count: 1
						}, {
							id: 106,
							count: 1
						}]
					}, e.getLevelEnemy = function(e) {
						return this.createData(), e > 90 && (e = (e - 90) % 30 + 51), this._levelData[e]
					}, e
				}());
				t(n, "_levelData", void 0), t(n, "enemies", void 0), i._RF.pop()
			}
		}
	}), System.register("chunks:///_virtual/main", ["./CommonGameConfig.ts", "./CommonEnum.ts", "./GlobalEnum.ts", "./GameConfig.ts", "./EnemyDataTemplate.ts", "./Tool.ts", "./LevelMapDataTemplate.ts", "./http_request.ts", "./LiquidManager.ts", "./CommonEvent.ts", "./HeyGameGlobalData.ts", "./EventManager.ts", "./GameEventType.ts", "./SDK.ts", "./PCSDK.ts", "./QuadTree.ts", "./GamePlatformType.ts", "./UMAManager.ts", "./PlayerDataTemplate.ts", "./PlayerData.ts", "./Loader.ts", "./HeyGamePlatform.ts", "./Action3dManager.ts", "./yyComponent.ts", "./HeyGameNativeAd.ts", "./HeyGameOPPOSDK.ts", "./GamePlatform.ts", "./GamePlatformConfig.ts", "./GlobalData.ts", "./Init.ts", "./UIStayAnimations.ts", "./EditorGeBan.ts", "./EditorRoom.ts", "./EditorTileContent.ts", "./EditorWall.ts", "./EditorMap.ts", "./ALDManager.ts", "./UIManager.ts", "./EditorDoor.ts", "./DrawingBoard.ts", "./ObjectPool.ts", "./resToDbbin.ts", "./LevelDataTemplate.ts", "./GameData.ts", "./GlobalPool.ts", "./AdvertManager.ts", "./AudioManager.ts", "./UIAnimtions.ts"], function() {
		"use strict";
		return {
			setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
			execute: function() {}
		}
	}),
	function(e) {
		e("virtual:///prerequisite-imports/main", "chunks:///_virtual/main")
	}(function(e, t) {
		System.register(e, [t], function(e, t) {
			return {
				setters: [function(t) {
					var i = {};
					for (var n in t) "default" !== n && "__esModule" !== n && (i[n] = t[n]);
					e(i)
				}],
				execute: function() {}
			}
		})
	});