System.register("chunks:///_virtual/resToDbbin2.ts", ["cc"], (function() {
    "use strict";
    var n, r;
    return {
        setters: [function(e) {
            n = e.cclegacy, r = e.assetManager
        }],
        execute: function() {
            n._RF.push({}, "534c7XUIFJGPbJsFUI+DWTn", "resToDbbin", void 0),
                function() {
                    if (void 0 !== window.h5api) {
                        console.log("resToDbbin");
                        r.transformPipeline.append((function(n, r) {
                            for (var e = n.output = n.input, i = 0; i < e.length; i++) {
                                var o = e[i];
                                if (o.url) {
                                    o.url = o.url.replace("@", "_"), o.url = o.url.replace(".bin", ".dbbin");
                                    var t = o.url.split(".");
                                    if (t.length >= 2 && "cconb" == t[t.length - 1]) {
                                        o.url = "";
                                        for (var c = 0; c < t.length - 1; c++) {
                                            var l = t[c];
                                            o.url += l + "."
                                        }
                                        o.url += "_cconb.dbbin"
                                    }
                                }
                            }
                            return null
                        }));
                        var n = r.downloader._downloaders,
                            e = n[".dbbin"];
                        r.downloader.register("dbbin", (function(r, i, o) {
                            r.includes("_cconb") ? n[".cconb"]() : e()
                        }))
                    }
                }(), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/HeyGameSDK", ["./resToDbbin2.ts"], (function() {
    "use strict";
    return {
        setters: [null],
        execute: function() {}
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/HeyGameSDK', 'chunks:///_virtual/HeyGameSDK');
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