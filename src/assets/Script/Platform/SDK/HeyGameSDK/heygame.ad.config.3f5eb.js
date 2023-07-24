(function(root) {
    var exports = undefined,
        module = undefined,
        require = undefined;
    var define = undefined;
    (function() {
        let runningEnv = typeof window !== 'undefined' ? window : globalThis;

        runningEnv.HeyGameConfig = function(exports) {
            'use strict';

            class AdConfig {
                constructor() {
                    this.appName = "jiangshi";
                    this.debugMode = true;
                    this.appId = "30849921"; //平台获取的appid

                    this.heyAppId = 3996; //heygame的appid //todo

                    this.heyPlatId = 1011; //heygame平台id

                    this.heySecret = "febd17ef1da8f1d8b21024b58307091f"; // heygame平台LOG上传秘钥 //todo

                    this.versionName = "1.0.0";
                    this.resVersion = "1.0.0";
                    this.bannerAdUnitId = [""];
                    this.interstitialAdUnitId = "";
                    this.videoAdUnitId = "";
                    this.nativeAdUnitId = [""];
                    this.drawerGameAdUnitId = "";
                    this.drawerGameAdTop = 500;
                    this.bannerGameAdUnitId = "";
                    this.appBoxUnitId = [""];
                    this.blockAdUnitId = [""];
                    this.shareConfig = {};
                }

            }

            class WXAdConfig extends AdConfig {
                constructor() {
                    super();
                    this.versionName = "1.0.0";
                    this.bannerAdUnitId = ['261277'];
                    this.videoAdUnitId = '261289';
                }

            }

            class OPPOAdConfig extends AdConfig {
                constructor() {
                    super();
                    this.versionName = "1.0.0";
                    this.heyPlatId = 1011; //heygame平台id

                    this.bannerAdUnitId = ['578809'];
                    this.videoAdUnitId = '578815';
                    this.nativeAdUnitId = ['578811', '578812', '578813', '578814'];
                    this.drawerGameAdUnitId = '578816';
                    this.bannerGameAdUnitId = '578817'; //横幅
                }

            }

            class VIVOAdConfig extends AdConfig {
                constructor() {
                    super();
                    this.versionName = "1.0.0";
                    this.heyPlatId = 1026; //heygame平台id

                    this.bannerAdUnitId = ['b74b82bf5490443a98d18acac77699fb'];
                    this.videoAdUnitId = '0d50ff7c579745148c03dcf21243c2b5';
                    this.nativeAdUnitId = ['fb22a6866ad74375b651a19aa9dbed7b', 'a64abf105fb64923b03e8ef29b6b4915'];
                    this.interstitialAdUnitId = '0b651c0b87bc459492fe23a77362e5a7'; // this.bannerGameAdUnitId = 'ebfa8e120279473392585cbe94dbdc4b'; //横幅
                }

            }

            class TTAdConfig extends AdConfig {
                constructor() {
                    super();
                    this.versionName = "1.0.0";
                    this.heyPlatId = 1020; //heygame平台id

                    this.shareConfig = {
                        TEMPLATE_ID: "34l4k5s8q93f95g4jd",
                        title: "在线寻求司机指导",
                        desc: "司机快来体验最真实的驾驶模拟"
                    };
                    this.bannerAdUnitId = ['7kafebiad93akk744f'];
                    this.videoAdUnitId = '44e94dk8070dqiiiml';
                    this.interstitialAdUnitId = '1b59j19ac01h14pb0o';
                }

            }

            class QQAdConfig extends AdConfig {
                constructor() {
                    super();
                }

            }

            class MEIZUAdConfig extends AdConfig {
                constructor() {
                    super();
                    this.heyPlatId = 1058;
                    this.versionName = '1.0.0';
                    this.bannerAdUnitId = ['c6W2GnpT'];
                    this.videoAdUnitId = 'jAqL64tf';
                    this.nativeAdUnitId = ['wtbvbsOl'];
                    this.interstitialAdUnitId = '1EntritE';
                }

            }

            class PCAdConfig extends AdConfig {
                constructor() {
                    super();
                    this.bannerAdUnitId = [''];
                    this.videoAdUnitId = '';
                    this.nativeAdUnitId = ['', ''];
                    this.drawerGameAdUnitId = '';
                    this.bannerGameAdUnitId = '';
                }

            }

            class HeyGameSDKConfig {
                constructor() {
                    this._instance = null;
                    this._config = null;
                    this.initPlatforms();
                    this.initSDKConfig();
                    console.log('HeyGameSDKConfig constructor');
                }

                static get instance() {
                    if (!HeyGameSDKConfig._instance) {
                        HeyGameSDKConfig._instance = new HeyGameSDKConfig();
                    }

                    return HeyGameSDKConfig._instance;
                }

                static get AdConfig() {
                    if (!HeyGameSDKConfig.instance._config) {
                        HeyGameSDKConfig.instance._config = new AdConfig();
                    }

                    return HeyGameSDKConfig.instance._config;
                }

                init() {}

                initSDKConfig() {
                    if (HeyGameSDKConfig.onWXMiniGame) {
                        this._config = new WXAdConfig();
                    } else if (HeyGameSDKConfig.onOPPOMiniGame) {
                        this._config = new OPPOAdConfig();
                    } else if (HeyGameSDKConfig.onVIVOMiniGame) {
                        this._config = new VIVOAdConfig();
                    } else if (HeyGameSDKConfig.onTTMiniGame) {
                        this._config = new TTAdConfig();
                    } else if (HeyGameSDKConfig.onQQMiniGame) {
                        this._config = new QQAdConfig();
                    } else if (HeyGameSDKConfig.onMEIZUMiniGame) {
                        this._config = new MEIZUAdConfig();
                    } else if (HeyGameSDKConfig.onHWMiniGame) {
                        console.error('HeyGameSDKConfig.onHWMiniGame error');
                    } else {
                        this._config = new PCAdConfig();
                    }
                }

                initPlatforms() {
                    let u = window.navigator.userAgent;
                    console.log('initPlatforms--' + JSON.stringify(u));
                    HeyGameSDKConfig.onPC = true; // OPPO mini game

                    if (typeof window.qg !== "undefined" && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1) {
                        HeyGameSDKConfig.onOPPOMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // VIVO mini game


                    if (typeof window.qg !== "undefined" && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1) {
                        HeyGameSDKConfig.onVIVOMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // QQ mini game


                    if (typeof window.qq !== "undefined") {
                        HeyGameSDKConfig.onQQMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // tt mini game


                    if (typeof window.tt !== "undefined") {
                        HeyGameSDKConfig.onTTMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // meizu mini game


                    if (typeof window.mz !== "undefined" && window.mz.getProvider().toLowerCase().indexOf("meizu") > -1) {
                        HeyGameSDKConfig.onMEIZUMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // WeiXin mini game


                    if (typeof window.wx !== "undefined") {
                        HeyGameSDKConfig.onWXMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // HuaWei mini game


                    if (typeof window.hbs !== "undefined") {
                        HeyGameSDKConfig.onHWMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } // 4399 mini game


                    if (typeof window.gamebox !== "undefined") {
                        HeyGameSDKConfig.onSSJJMiniGame = true;
                        HeyGameSDKConfig.onPC = false;
                        return;
                    } //Android


                    if (typeof window.jsb !== "undefined" || typeof window.conch !== "undefined" || window["DBApp"] != null) {
                        HeyGameSDKConfig.onAndroidAPK = true;
                        HeyGameSDKConfig.onPC = false;
                    }
                }

            }

            exports.HeyGameSDKConfig = HeyGameSDKConfig;
            return exports;
        }({});
    }).call(root);
})( // The environment-specific global.
    function() {
        if (typeof globalThis !== 'undefined') return globalThis;
        if (typeof self !== 'undefined') return self;
        if (typeof window !== 'undefined') return window;
        if (typeof global !== 'undefined') return global;
        if (typeof this !== 'undefined') return this;
        return {};
    }.call(this));