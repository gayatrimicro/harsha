function FastClick(e, t) {
    "use strict";

    function n(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    var i;
    if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, !FastClick.notNeeded(e)) {
        for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, a = 0, s = o.length; s > a; a++) r[o[a]] = n(r[o[a]], r);
        deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
            var o = Node.prototype.removeEventListener;
            "click" === t ? o.call(e, t, n.hijacked || n, i) : o.call(e, t, n, i)
        }, e.addEventListener = function(t, n, i) {
            var o = Node.prototype.addEventListener;
            "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function(e) {
                e.propagationStopped || n(e)
            }), i) : o.call(e, t, n, i)
        }), "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click", function(e) {
            i(e)
        }, !1), e.onclick = null)
    }
}
window.Modernizr = function(e, t, n) {
    var header = '<ul>'+
                    '<li id="nav1"><a href="/">HOME</a></li>'+
                    '<li id="nav2"><a href="/products/">PRODUCTS</a></li>'+
                    '<li id="nav3"><a href="/about/">ABOUT</a></li>'+
                    '<li id="nav4"><a href="/contact/">CONTACT</a></li>'+
                    '<li id="nav5"><a href="/training_videos/">TRAINING VIDEOS</a></li>'+
                    '<li id="nav6" class="reservation"><a href="/partnerships/">PARTNERSHIPS</a></li>'+
                    '<li class="srch hidden-xs">'+
                        '<div class="top-bar">'+
                            '<div class="search-container">'+
                                '<form id="headSSForm" method="GET" action="/search.php" onsubmit="return searchIgnorePlaceholder('+'headSSForm'+','+'headSSInput'+');">'+
                                    '<input id="search_h" name="s" style="    padding: 9px 11px 9px; margin-top: 6px;font-family: FontAwesome, "Open Sans", Verdana, sans-serif;font-style: normal;font-weight: normal;text-decoration: inherit;" class="search fa fa-camera-retro fa-lg" type="search" placeholder="&#xF002;" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'&#xF002;\'">'+
                                '</form>'+
                            '</div>'+
                        '</div>'+
                    '</li>'+
                '</ul>';
    document.getElementById("nav").innerHTML = header;

    function i(e) {
        b.cssText = e
    }

    function o(e, t) {
        return i(C.join(e + ";") + (t || ""))
    }

    function r(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e, t) {
        for (var i in e) {
            var o = e[i];
            if (!a(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
        }
        return !1
    }

    function l(e, t, i) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return i === !1 ? e[o] : r(a, "function") ? a.bind(i || t) : a
        }
        return !1
    }

    function c(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + E.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? s(o, t) : (o = (e + " " + S.join(i + " ") + i).split(" "), l(o, t, n))
    }

    function u() {
        h.input = function(n) {
            for (var i = 0, o = n.length; o > i; i++) A[n[i]] = !!(n[i] in w);
            return A.list && (A.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), A
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
            for (var i, o, r, a = 0, s = e.length; s > a; a++) w.setAttribute("type", o = e[a]), i = "text" !== w.type, i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), r = t.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)), D[e[a]] = !!i;
            return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, p, f = "2.6.3",
        h = {},
        m = !0,
        g = t.documentElement,
        v = "modernizr",
        y = t.createElement(v),
        b = y.style,
        w = t.createElement("input"),
        x = ":)",
        k = {}.toString,
        C = " -webkit- -moz- -o- -ms- ".split(" "),
        T = "Webkit Moz O ms",
        E = T.split(" "),
        S = T.toLowerCase().split(" "),
        N = {
            svg: "http://www.w3.org/2000/svg"
        },
        _ = {},
        D = {},
        A = {},
        j = [],
        $ = j.slice,
        F = function(e, n, i, o) {
            var r, a, s, l, c = t.createElement("div"),
                u = t.body,
                d = u || t.createElement("body");
            if (parseInt(i, 10))
                for (; i--;) s = t.createElement("div"), s.id = o ? o[i] : v + (i + 1), c.appendChild(s);
            return r = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), a = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l), !!a
        },
        L = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t).matches;
            var i;
            return F("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), i
        },
        I = function() {
            function e(e, o) {
                o = o || t.createElement(i[e] || "div"), e = "on" + e;
                var a = e in o;
                return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = r(o[e], "function"), r(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
            }
            var i = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        M = {}.hasOwnProperty;
    p = r(M, "undefined") || r(M.call, "undefined") ? function(e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return M.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = $.call(arguments, 1),
            i = function() {
                if (this instanceof i) {
                    var o = function() {};
                    o.prototype = t.prototype;
                    var r = new o,
                        a = t.apply(r, n.concat($.call(arguments)));
                    return Object(a) === a ? a : r
                }
                return t.apply(e, n.concat($.call(arguments)))
            };
        return i
    }), _.flexbox = function() {
        return c("flexWrap")
    }, _.flexboxlegacy = function() {
        return c("boxDirection")
    }, _.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, _.canvastext = function() {
        return !(!h.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, _.webgl = function() {
        return !!e.WebGLRenderingContext
    }, _.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }), n
    }, _.geolocation = function() {
        return "geolocation" in navigator
    }, _.postmessage = function() {
        return !!e.postMessage
    }, _.websqldatabase = function() {
        return !!e.openDatabase
    }, _.indexedDB = function() {
        return !!c("indexedDB", e)
    }, _.hashchange = function() {
        return I("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, _.history = function() {
        return !(!e.history || !history.pushState)
    }, _.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, _.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, _.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
    }, _.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }, _.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, _.backgroundsize = function() {
        return c("backgroundSize")
    }, _.borderimage = function() {
        return c("borderImage")
    }, _.borderradius = function() {
        return c("borderRadius")
    }, _.boxshadow = function() {
        return c("boxShadow")
    }, _.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, _.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, _.cssanimations = function() {
        return c("animationName")
    }, _.csscolumns = function() {
        return c("columnCount")
    }, _.cssgradients = function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return i((e + "-webkit- ".split(" ").join(t + e) + C.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
    }, _.cssreflections = function() {
        return c("boxReflect")
    }, _.csstransforms = function() {
        return !!c("transform")
    }, _.csstransforms3d = function() {
        var e = !!c("perspective");
        return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, _.csstransitions = function() {
        return c("transition")
    }, _.fontface = function() {
        var e;
        return F('@font-face {font-family:"font";src:url("https:///")}', function(n, i) {
            var o = t.getElementById("smodernizr"),
                r = o.sheet || o.styleSheet,
                a = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
        }), e
    }, _.generatedcontent = function() {
        var e;
        return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, _.video = function() {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (i) {}
        return n
    }, _.audio = function() {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (i) {}
        return n
    }, _.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, _.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, _.webworkers = function() {
        return !!e.Worker
    }, _.applicationcache = function() {
        return !!e.applicationCache
    }, _.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    }, _.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, _.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(k.call(t.createElementNS(N.svg, "animate")))
    }, _.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(k.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var H in _) p(_, H) && (d = H.toLowerCase(), h[d] = _[H](), j.push((h[d] ? "" : "no-") + d));
    return h.input || u(), h.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var i in e) p(e, i) && h.addTest(i, e[i]);
            else {
                if (e = e.toLowerCase(), h[e] !== n) return h;
                t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), h[e] = t
            }
            return h
        }, i(""), y = w = null,
        function(e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    i = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
            }

            function i() {
                var e = v.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function o(e) {
                var t = g[e[h]];
                return t || (t = {}, m++, e[h] = m, g[m] = t), t
            }

            function r(e, n, i) {
                if (n || (n = t), u) return n.createElement(e);
                i || (i = o(n));
                var r;
                return r = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), r.canHaveChildren && !p.test(e) ? i.frag.appendChild(r) : r
            }

            function a(e, n) {
                if (e || (e = t), u) return e.createDocumentFragment();
                n = n || o(e);
                for (var r = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++) r.createElement(s[a]);
                return r
            }

            function s(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                    return v.shivMethods ? r(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(v, t.frag)
            }

            function l(e) {
                e || (e = t);
                var i = o(e);
                return !v.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || s(e, i), e
            }
            var c, u, d = e.html5 || {},
                p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                h = "_html5shiv",
                m = 0,
                g = {};
            ! function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                } catch (n) {
                    c = !0, u = !0
                }
            }();
            var v = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: u,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: l,
                createElement: r,
                createDocumentFragment: a
            };
            e.html5 = v, l(t)
        }(this, t), h._version = f, h._prefixes = C, h._domPrefixes = S, h._cssomPrefixes = E, h.mq = L, h.hasEvent = I, h.testProp = function(e) {
            return s([e])
        }, h.testAllProps = c, h.testStyles = F, h.prefixed = function(e, t, n) {
            return t ? c(e, t, n) : c(e, "pfx")
        }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + j.join(" ") : ""), h
}(this, this.document), ! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function(e) {
            return ot.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = wt[e] = {};
        return ot.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), ot.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Tt.test(n) ? ot.parseJSON(n) : n
                } catch (o) {}
                ot.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, n, i) {
        if (ot.acceptData(e)) {
            var o, r, a = ot.expando,
                s = e.nodeType,
                l = s ? ot.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = U.pop() || ot.guid++ : a), l[c] || (l[c] = s ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = ot.extend(l[c], t) : l[c].data = ot.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[ot.camelCase(t)])) : o = r, o
        }
    }

    function d(e, t, n) {
        if (ot.acceptData(e)) {
            var i, o, r = e.nodeType,
                a = r ? ot.cache : e,
                s = r ? e[ot.expando] : ot.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in i ? t = [t] : (t = ot.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !c(i) : !ot.isEmptyObject(i)) return
                }(n || (delete a[s].data, c(a[s]))) && (r ? ot.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Mt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || ot.nodeName(i, t) ? r.push(i) : ot.merge(r, g(i, t));
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], r) : r
    }

    function v(e) {
        At.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Yt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) ot._data(n, "globalEval", !t || ot._data(t[i], "globalEval"))
    }

    function k(e, t) {
        if (1 === t.nodeType && ot.hasData(e)) {
            var n, i, o, r = ot._data(e),
                a = ot._data(t, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; o > i; i++) ot.event.add(t, n, s[n][i])
            }
            a.data && (a.data = ot.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[ot.expando]) {
                o = ot._data(t);
                for (i in o.events) ot.removeEvent(t, i, o.handle);
                t.removeAttribute(ot.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && At.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function T(t, n) {
        var i, o = ot(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
        return o.detach(), r
    }

    function E(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = T(e, t), "none" !== n && n || (Kt = (Kt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = T(e, t), Kt.detach()), Zt[e] = n), n
    }

    function S(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = fn.length; o--;)
            if (t = fn[o] + n, t in e) return t;
        return i
    }

    function _(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = ot._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && _t(i) && (r[a] = ot._data(i, "olddisplay", E(i.nodeName)))) : (o = _t(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var i = cn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function A(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += ot.css(e, n + Nt[r], !0, o)), i ? ("content" === n && (a -= ot.css(e, "padding" + Nt[r], !0, o)), "margin" !== n && (a -= ot.css(e, "border" + Nt[r] + "Width", !0, o))) : (a += ot.css(e, "padding" + Nt[r], !0, o), "padding" !== n && (a += ot.css(e, "border" + Nt[r] + "Width", !0, o)));
        return a
    }

    function j(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = en(e),
            a = nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = tn(e, t, r), (0 > o || null == o) && (o = e.style[t]), on.test(o)) return o;
            i = a && (nt.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + A(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function $(e, t, n, i, o) {
        return new $.prototype.init(e, t, n, i, o)
    }

    function F() {
        return setTimeout(function() {
            hn = void 0
        }), hn = ot.now()
    }

    function L(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Nt[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function I(e, t, n) {
        for (var i, o = (wn[t] || []).concat(wn["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function M(e, t, n) {
        var i, o, r, a, s, l, c, u, d = this,
            p = {},
            f = e.style,
            h = e.nodeType && _t(e),
            m = ot._data(e, "fxshow");
        n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ot.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ot.css(e, "display"), u = "none" === c ? ot._data(e, "olddisplay") || E(e.nodeName) : c, "inline" === u && "none" === ot.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], gn.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || ot.style(e, i)
            } else c = void 0;
        if (ot.isEmptyObject(p)) "inline" === ("none" === c ? E(e.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ot._data(e, "fxshow", {}), r && (m.hidden = !h), h ? ot(e).show() : d.done(function() {
                ot(e).hide()
            }), d.done(function() {
                var t;
                ot._removeData(e, "fxshow");
                for (t in p) ot.style(e, t, p[t])
            });
            for (i in p) a = I(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = ot.camelCase(n), o = t[i], r = e[n], ot.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = ot.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function P(e, t, n) {
        var i, o, r = 0,
            a = bn.length,
            s = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = hn || F(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); a > r; r++)
            if (i = bn[r].call(c, e, u, c.opts)) return i;
        return ot.map(u, I, c), ot.isFunction(c.opts.start) && c.opts.start.call(e, c), ot.fx.timer(ot.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function O(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function q(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, ot.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            a = e === Wn;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function R(e, t) {
        var n, i, o = ot.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ot.extend(!0, e, n), e
    }

    function z(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function B(e, t, n, i) {
        var o, r, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = c[l + " " + r] || c["* " + r], !a)
                for (o in c)
                    if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function W(e, t, n, i) {
        var o;
        if (ot.isArray(t)) ot.each(t, function(t, o) {
            n || Un.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== ot.type(t)) i(e, t);
        else
            for (o in t) W(e + "[" + o + "]", t[o], n, i)
    }

    function V() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Y(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U = [],
        J = U.slice,
        G = U.concat,
        Q = U.push,
        K = U.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        it = "1.11.1",
        ot = function(e, t) {
            return new ot.fn.init(e, t)
        },
        rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ot.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: U.sort,
        splice: U.splice
    }, ot.extend = ot.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (i in o) e = a[i], n = o[i], a !== n && (c && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, r = e && ot.isArray(e) ? e : []) : r = e && ot.isPlainObject(e) ? e : {}, a[i] = ot.extend(c, r, n)) : void 0 !== n && (a[i] = n));
        return a
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ot.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ot.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ot.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (s)
                for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(rt, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), ot.isFunction(e) ? (n = J.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }, i.guid = e.guid = e.guid || ot.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, i) {
            var o, r, a, s, l, c, d, f, h, m;
            if ((t ? t.ownerDocument || t : q) !== $ && j(t), t = t || $, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (L && !i) {
                if (o = yt.exec(e))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && P(t, r) && r.id === a) return n.push(r), n
                    } else {
                        if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (x.qsa && (!I || !I.test(e))) {
                    if (f = d = O, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = E(e), (d = t.getAttribute("id")) ? f = d.replace(wt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                        h = bt.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[O] = !0, e
        }

        function o(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && typeof e.getElementsByTagName !== Y && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = z++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, a) {
                var s, l, c = [R, r];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[O] || (t[O] = {}), (s = l[i]) && s[0] === R && s[1] === r) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
            return a
        }

        function v(e, t, n, o, r, a) {
            return o && !o[O] && (o = v(o)), r && !r[O] && (r = v(r, a)), i(function(i, a, s, l) {
                var c, u, d, p = [],
                    f = [],
                    h = a.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, p, e, s, l),
                    b = n ? r || (i ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, l), o)
                    for (c = g(b, f), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            r(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = r ? tt.call(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = k.relative[e[0].type], a = r || k.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), c = f(function(e) {
                    return tt.call(t, e) > -1
                }, a, !0), u = [function(e, n, i) {
                    return !r && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                }]; o > s; s++)
                if (n = k.relative[e[s].type]) u = [f(h(u), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                        for (i = ++s; o > i && !k.relative[e[i].type]; i++);
                        return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = _,
                        b = i || r && k.find.TAG("*", c),
                        w = R += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && (_ = a !== $ && a); h !== x && null != (u = b[h]); h++) {
                        if (r && u) {
                            for (d = 0; p = e[d++];)
                                if (p(u, a, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (R = w)
                        }
                        o && ((u = !p && u) && f--, i && m.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];) p(m, v, a, s);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (R = w, _ = y), m
                };
            return o ? i(a) : a
        }
        var w, x, k, C, T, E, S, N, _, D, A, j, $, F, L, I, M, H, P, O = "sizzle" + -new Date,
            q = e.document,
            R = 0,
            z = 0,
            B = n(),
            W = n(),
            V = n(),
            X = function(e, t) {
                return e === t && (A = !0), 0
            },
            Y = "undefined",
            U = 1 << 31,
            J = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            K = G.push,
            Z = G.push,
            et = G.slice,
            tt = G.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = ot.replace("w", "w#"),
            at = "\\[" + it + "*(" + ot + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
            st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ct = new RegExp("^" + it + "*," + it + "*"),
            ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            pt = new RegExp(st),
            ft = new RegExp("^" + rt + "$"),
            ht = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + at),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            kt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(G = et.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
        } catch (Ct) {
            Z = {
                apply: G.length ? function(e, t) {
                    K.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : q,
                i = n.defaultView;
            return n !== $ && 9 === n.nodeType && n.documentElement ? ($ = n, F = n.documentElement, L = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                j()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                j()
            })), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(n.getElementsByClassName) && o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = o(function(e) {
                return F.appendChild(e).id = O, !n.getElementsByName || !n.getElementsByName(O).length
            }), x.getById ? (k.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== Y && L ? t.getElementsByClassName(e) : void 0
            }, M = [], I = [], (x.qsa = vt.test(n.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && I.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || I.push(":checked")
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (x.matchesSelector = vt.test(H = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), M.push("!=", st)
            }), I = I.length && new RegExp(I.join("|")), M = M.length && new RegExp(M.join("|")), t = vt.test(F.compareDocumentPosition), P = t || vt.test(F.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === q && P(q, e) ? -1 : t === n || t.ownerDocument === q && P(q, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var i, o = 0,
                    r = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !s) return e === n ? -1 : t === n ? 1 : r ? -1 : s ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
                if (r === s) return a(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? a(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
            }, n) : $
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && j(e), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !L || M && M.test(n) || I && I.test(n))) try {
                var i = H.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, $, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && j(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && j(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && J.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : x.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (A = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(X), A) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, kt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g[O] || (g[O] = {}), c = u[e] || [], f = c[0] === R && c[1], p = c[0] === R && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        u[e] = [R, f, p];
                                        break
                                    }
                            } else if (y && (c = (t[O] || (t[O] = {}))[e]) && c[0] === R) p = c[1];
                            else
                                for (;
                                    (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[O] || (d[O] = {}))[e] = [R, p]), d !== t)););
                            return p -= o, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[O] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), a = o.length; a--;) i = tt.call(e, o[a]), e[i] = !(t[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(lt, "$1"));
                    return o[O] ? i(function(e, t, n, i) {
                        for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, kt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === F
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = l(w);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, E = t.tokenize = function(e, n) {
            var i, o, r, a, s, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = k.preFilter; s;) {
                (!i || (o = ct.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ut.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (a in k.filter) !(o = ht[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = V[e + " "];
            if (!r) {
                for (t || (t = E(e)), n = t.length; n--;) r = y(t[n]), r[O] ? i.push(r) : o.push(r);
                r = V(e, b(o, i)), r.selector = e
            }
            return r
        }, N = t.select = function(e, t, n, i) {
            var o, r, a, s, l, c = "function" == typeof e && e,
                d = !i && E(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && L && k.relative[r[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(xt, kt), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = ht.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !k.relative[s = a.type]);)
                    if ((l = k.find[s]) && (i = l(a.matches[0].replace(xt, kt), bt.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return (c || S(e, d))(i, t, !L, n, bt.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = O.split("").sort(X).join("") === O, x.detectDuplicates = !!A, j(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(nt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var ut = ot.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [i] : [] : ot.find.matches(e, ot.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ot.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (ot.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) ot.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ut.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var ft, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = ot.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ft).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && ot.isPlainObject(t))
                        for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = ht.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return ft.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof ft.ready ? ft.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
        };
    gt.prototype = ot.fn, ft = ot(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ot.fn.extend({
        has: function(e) {
            var t, n = ot(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (ot.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], a = ut.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? ot.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ot.sibling(e.firstChild)
        },
        contents: function(e) {
            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
        }
    }, function(e, t) {
        ot.fn[e] = function(n, i) {
            var o = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[e] || (o = ot.unique(o)), vt.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var bt = /\S+/g,
        wt = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? wt[e] || r(e) : ot.extend({}, e);
        var t, n, i, o, a, s, l = [],
            c = !e.once && [],
            u = function(r) {
                for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            ot.each(t, function(t, n) {
                                var i = ot.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (s = i, u(n))
                    }
                    return this
                },
                remove: function() {
                    return l && ot.each(arguments, function(e, n) {
                        for (var i;
                            (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, n) {
                    return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, ot.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(t, function(t, r) {
                                var a = ot.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ot.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ot.each(t, function(e, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = J.call(arguments),
                a = r.length,
                s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ot.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    });
    var xt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ot.readyWait : !ot.isReady) {
                if (!ht.body) return setTimeout(ot.ready);
                ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ht, [ot]), ot.fn.triggerHandler && (ot(ht).triggerHandler("ready"), ot(ht).off("ready")))
            }
        }
    }), ot.ready.promise = function(t) {
        if (!xt)
            if (xt = ot.Deferred(), "complete" === ht.readyState) setTimeout(ot.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!ot.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    a(), ot.ready()
                }
            }()
        }
        return xt.promise(t)
    };
    var kt, Ct = "undefined";
    for (kt in ot(nt)) break;
    nt.ownLast = "0" !== kt, nt.inlineBlockNeedsLayout = !1, ot(function() {
            var e, t, n, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), ot.acceptData = function(e) {
            var t = ot.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !c(e)
        },
        data: function(e, t, n) {
            return u(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), ot.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                    ot._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ot.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, e, t)
            }) : r ? l(r, e, ot.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ot.removeData(this, e)
            })
        }
    }), ot.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ot._data(e, t), n && (!i || ot.isArray(n) ? i = ot._data(e, t, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = ot._queueHooks(e, t),
                a = function() {
                    ot.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ot._data(e, n) || ot._data(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(e, t + "queue"), ot._removeData(e, n)
                })
            })
        }
    }), ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = ot.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ot._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Nt = ["Top", "Right", "Bottom", "Left"],
        _t = function(e, t) {
            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
        },
        Dt = ot.access = function(e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === ot.type(n)) {
                o = !0;
                for (s in n) ot.access(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(ot(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        At = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var jt = /^(?:input|select|textarea)$/i,
        $t = /^key/,
        Ft = /^(?:mouse|pointer|contextmenu)|click/,
        Lt = /^(?:focusinfocus|focusoutblur)$/,
        It = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, p, f, h, m, g = ot._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                        return typeof ot === Ct || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) r = It.exec(t[s]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (c = ot.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ot.event.special[f] || {}, d = ot.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ot.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ot.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, p, f, h, m, g = ot.hasData(e) && ot._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(bt) || [""], c = t.length; c--;)
                    if (s = It.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = ot.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, f, g.handle), delete u[f])
                    } else
                        for (f in u) ot.event.remove(e, f + t[c], n, i, !0);
                ot.isEmptyObject(u) && (delete g.handle, ot._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, a, s, l, c, u, d, p = [i || ht],
                f = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(f + ot.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[ot.expando] ? t : new ot.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ot.makeArray(n, [t]), c = ot.event.special[f] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!o && !c.noBubble && !ot.isWindow(i)) {
                    for (l = c.delegateType || f, Lt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                    u === (i.ownerDocument || ht) && p.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                    (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || f, r = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && ot.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && ot.acceptData(i) && a && i[f] && !ot.isWindow(i)) {
                    u = i[a], u && (i[a] = null), ot.event.triggered = f;
                    try {
                        i[f]()
                    } catch (m) {}
                    ot.event.triggered = void 0, u && (i[a] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, i, o, r, a = [],
                s = J.call(arguments),
                l = (ot._data(this, "events") || {})[e.type] || [],
                c = ot.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ot.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ft.test(o) ? this.mouseHooks : $t.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ot.event.trigger(o, null, t) : ot.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Ct && (e[i] = null), e.detachEvent(i, n))
    }, ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
    }, ot.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !ot.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ot._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
            })), !1) : void ot.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                jt.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                }), ot._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !jt.test(this.nodeName)
        }
    }), nt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0)
        };
        ot.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, t);
                o || i.addEventListener(e, n, !0), ot._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, t) - 1;
                o ? ot._data(i, t, o) : (i.removeEventListener(e, n, !0), ot._removeData(i, t))
            }
        }
    }), ot.fn.extend({
        on: function(e, t, n, i, o) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return ot().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ht = / jQuery\d+="(?:null|\d+)"/g,
        Pt = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"),
        Ot = /^\s+/,
        qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Rt = /<([\w:]+)/,
        zt = /<tbody/i,
        Bt = /<|&#?\w+;/,
        Wt = /<(?:script|style|link)/i,
        Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xt = /^$|\/(?:java|ecma)script/i,
        Yt = /^true\/(.*)/,
        Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = m(ht),
        Qt = Gt.appendChild(ht.createElement("div"));
    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, ot.extend({
        clone: function(e, t, n) {
            var i, o, r, a, s, l = ot.contains(e.ownerDocument, e);
            if (nt.html5Clone || ot.isXMLDoc(e) || !Pt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(r = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                for (i = g(r), s = g(e), a = 0; null != (o = s[a]); ++a) i[a] && C(o, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e), i = i || g(r), a = 0; null != (o = s[a]); a++) k(o, i[a]);
                else k(e, r);
            return i = g(r, "script"), i.length > 0 && x(i, !l && g(e, "script")), i = s = o = null, r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, a, s, l, c, u, d = e.length, p = m(t), f = [], h = 0; d > h; h++)
                if (r = e[h], r || 0 === r)
                    if ("object" === ot.type(r)) ot.merge(f, r.nodeType ? [r] : r);
                    else if (Bt.test(r)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Rt.exec(r) || ["", ""])[1].toLowerCase(), u = Jt[l] || Jt._default, s.innerHTML = u[1] + r.replace(qt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Ot.test(r) && f.push(t.createTextNode(Ot.exec(r)[0])), !nt.tbody)
                    for (r = "table" !== l || zt.test(r) ? "<table>" !== u[1] || zt.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) ot.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (ot.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else f.push(t.createTextNode(r));
            for (s && p.removeChild(s), nt.appendChecked || ot.grep(g(f, "input"), v), h = 0; r = f[h++];)
                if ((!i || -1 === ot.inArray(r, i)) && (a = ot.contains(r.ownerDocument, r), s = g(p.appendChild(r), "script"), a && x(s), n))
                    for (o = 0; r = s[o++];) Xt.test(r.type || "") && n.push(r);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, a = 0, s = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot.event.special; null != (n = e[a]); a++)
                if ((t || ot.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) u[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, U.push(o))
                }
        }
    }), ot.fn.extend({
        text: function(e) {
            return Dt(this, function(e) {
                return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? ot.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ot.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Dt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ht, "") : void 0;
                if (!("string" != typeof e || Wt.test(e) || !nt.htmlSerialize && Pt.test(e) || !nt.leadingWhitespace && Ot.test(e) || Jt[(Rt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(qt, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ot.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, i, o, r, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = e[0],
                f = ot.isFunction(p);
            if (f || c > 1 && "string" == typeof p && !nt.checkClone && Vt.test(p)) return this.each(function(n) {
                var i = u.eq(n);
                f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (r = ot.map(g(s, "script"), b), o = r.length; c > l; l++) i = s, l !== d && (i = ot.clone(i, !0, !0), o && ot.merge(r, g(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, ot.map(r, w), l = 0; o > l; l++) i = r[l], Xt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(a, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ut, "")));
                s = n = null
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = ot(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ot(r[i])[t](n), Q.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Kt, Zt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        on = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        rn = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, tn = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ot.contains(e.ownerDocument, e) || (a = ot.style(e, t)), on.test(a) && nn.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
    }) : ht.documentElement.currentStyle && (en = function(e) {
        return e.currentStyle
    }, tn = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), on.test(a) && !rn.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, i, o;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, o = t.appendChild(ht.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
        }
        var n, i, o, r, a, s, l;
        n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == s && t(), s
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), ot.swap = function(e, t, n, i) {
        var o, r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = a[r];
        return o
    };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = new RegExp("^(" + St + ")(.*)$", "i"),
        un = new RegExp("^([+-])=(" + St + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        fn = ["Webkit", "O", "Moz", "ms"];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = ot.camelCase(t),
                    l = e.style;
                if (t = ot.cssProps[s] || (ot.cssProps[s] = N(l, s)), a = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = un.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = ot.camelCase(t);
            return t = ot.cssProps[s] || (ot.cssProps[s] = N(e.style, s)), a = ot.cssHooks[t] || ot.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tn(e, t, i)), "normal" === r && t in pn && (r = pn[t]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
        }
    }), ot.each(["height", "width"], function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? ln.test(ot.css(e, "display")) && 0 === e.offsetWidth ? ot.swap(e, dn, function() {
                    return j(e, t, i)
                }) : j(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && en(e);
                return D(e, n, i ? A(e, t, i, nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), nt.opacity || (ot.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(r) ? r.replace(an, o) : r + " " + o)
        }
    }), ot.cssHooks.marginRight = S(nt.reliableMarginRight, function(e, t) {
        return t ? ot.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Nt[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nn.test(e) || (ot.cssHooks[e + t].set = D)
    }), ot.fn.extend({
        css: function(e, t) {
            return Dt(this, function(e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (ot.isArray(t)) {
                    for (i = en(e), o = t.length; o > a; a++) r[t[a]] = ot.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return _(this, !0)
        },
        hide: function() {
            return _(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _t(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ot.fx = $.prototype.init, ot.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [M],
        wn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = vn.exec(t),
                    r = o && o[3] || (ot.cssNumber[e] ? "" : "px"),
                    a = (ot.cssNumber[e] || "px" !== r && +i) && vn.exec(ot.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do s = s || ".5", a /= s, ot.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ot.Animation = ot.extend(P, {
            tweener: function(e, t) {
                ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], wn[n] = wn[n] || [], wn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), ot.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ot.extend({}, e) : {
                complete: n || !n && t || ot.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ot.isFunction(t) && t
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(_t).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = ot.isEmptyObject(e),
                    r = ot.speed(t, n, i),
                    a = function() {
                        var t = P(this, ot.extend({}, e), r);
                        (o || ot._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = ot.timers,
                        a = ot._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && yn.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && ot.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ot._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = ot.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(e, t) {
            var n = ot.fn[t];
            ot.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, i, o)
            }
        }), ot.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ot.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var e, t = ot.timers,
                n = 0;
            for (hn = ot.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ot.fx.stop(), hn = void 0
        }, ot.fx.timer = function(e) {
            ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            mn || (mn = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            clearInterval(mn), mn = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ht.createElement("select"), o = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = o.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var xn = /\r/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = ot.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)) : void 0
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t : ot.trim(ot.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = ot.makeArray(t), a = o.length; a--;)
                        if (i = o[a], ot.inArray(ot.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var kn, Cn, Tn = ot.expr.attrHandle,
        En = /^(?:checked|selected)$/i,
        Sn = nt.getSetAttribute,
        Nn = nt.input;
    ot.fn.extend({
        attr: function(e, t) {
            return Dt(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }), ot.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Ct ? ot.prop(e, t, n) : (1 === r && ot.isXMLDoc(e) || (t = t.toLowerCase(), i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Cn : kn)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ot.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(bt);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Nn && Sn || !En.test(n) ? e[i] = !1 : e[ot.camelCase("default-" + n)] = e[i] = !1 : ot.attr(e, n, ""), e.removeAttribute(Sn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : Nn && Sn || !En.test(n) ? e.setAttribute(!Sn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tn[t] || ot.find.attr;
        Tn[t] = Nn && Sn || !En.test(t) ? function(e, t, i) {
            var o, r;
            return i || (r = Tn[t], Tn[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Tn[t] = r), o
        } : function(e, t, n) {
            return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nn && Sn || (ot.attrHooks.value = {
        set: function(e, t, n) {
            return ot.nodeName(e, "input") ? void(e.defaultValue = t) : kn && kn.set(e, t, n)
        }
    }), Sn || (kn = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Tn.id = Tn.name = Tn.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, ot.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: kn.set
    }, ot.attrHooks.contenteditable = {
        set: function(e, t, n) {
            kn.set(e, "" === t ? !1 : t, n)
        }
    }, ot.each(["width", "height"], function(e, t) {
        ot.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (ot.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var _n = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Dt(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ot.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ot.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !ot.isXMLDoc(e), r && (t = ot.propFix[t] || t, o = ot.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _n.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
        ot.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), nt.enctype || (ot.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, a, s = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = ot.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a, s = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        a = e ? ot.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = ot(this), r = e.match(bt) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jn = ot.now(),
        $n = /\?/,
        Fn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = ot.trim(t + "");
        return o && !ot.trim(o.replace(Fn, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : ot.error("Invalid JSON: " + t)
    }, ot.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
    };
    var Ln, In, Mn = /#.*$/,
        Hn = /([?&])_=[^&]*/,
        Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qn = /^(?:GET|HEAD)$/,
        Rn = /^\/\//,
        zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bn = {},
        Wn = {},
        Vn = "*/".concat("*");
    try {
        In = location.href
    } catch (Xn) {
        In = ht.createElement("a"), In.href = "", In = In.href
    }
    Ln = zn.exec(In.toLowerCase()) || [], ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: In,
            type: "GET",
            isLocal: On.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, ot.ajaxSettings), t) : R(ot.ajaxSettings, e)
        },
        ajaxPrefilter: O(Bn),
        ajaxTransport: O(Wn),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, u, v, y, w, k = t;
                2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = z(d, x, n)), y = B(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ot.etag[r] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, u = y.data, v = y.error, o = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", o ? h.resolveWith(p, [u, k, x]) : h.rejectWith(p, [x, k, v]), x.statusCode(g), g = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]), m.fireWith(p, [x, k]), l && (f.trigger("ajaxComplete", [x, d]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, a, s, l, c, u, d = ot.ajaxSetup({}, t),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                h = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!u)
                                for (u = {}; t = Pn.exec(a);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || In) + "").replace(Mn, "").replace(Rn, Ln[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = zn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), q(Bn, d, t, x), 2 === b) return x;
            l = d.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !qn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += ($n.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Hn.test(r) ? r.replace(Hn, "$1_=" + jn++) : r + ($n.test(r) ? "&" : "?") + "_=" + jn++)), d.ifModified && (ot.lastModified[r] && x.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && x.setRequestHeader("If-None-Match", ot.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (c = q(Wn, d, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }), ot.each(["get", "post"], function(e, t) {
        ot[t] = function(e, n, i, o) {
            return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function(e) {
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ot.isFunction(e) ? function(t) {
                ot(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ot(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
    }, ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e)
    };
    var Yn = /%20/g,
        Un = /\[\]$/,
        Jn = /\r?\n/g,
        Gn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, o);
        return i.join("&").replace(Yn, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && Qn.test(this.nodeName) && !Gn.test(e) && (this.checked || !At.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jn, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || X()
    } : V;
    var Kn = 0,
        Zn = {},
        ei = ot.ajaxSettings.xhr();
    e.ActiveXObject && ot(e).on("unload", function() {
        for (var e in Zn) Zn[e](void 0, !0)
    }), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && ot.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, i) {
                    var o, r = e.xhr(),
                        a = ++Kn;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), t = function(n, o) {
                        var s, l, c;
                        if (t && (o || 4 === r.readyState))
                            if (delete Zn[a], t = void 0, r.onreadystatechange = ot.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && i(s, l, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Zn[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e), e
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || ot("head")[0] || ht.documentElement;
            return {
                send: function(i, o) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ti.pop() || ot.expando + "_" + jn++;
            return this[e] = !0, e
        }
    }), ot.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + o) : t.jsonp !== !1 && (t.url += ($n.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || ot.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            a = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, ti.push(o)), a && ot.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var i = dt.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = ot.buildFragment([e], t, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
    };
    var ii = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = ot.trim(e.slice(s, e.length)), e = e.slice(0, s)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && ot.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem
        }).length
    };
    var oi = e.document.documentElement;
    ot.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, c, u = ot.css(e, "position"),
                d = ot(e),
                p = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), r = ot.css(e, "top"), l = ot.css(e, "left"), c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [r, l]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, ot.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ot.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, ot.contains(t, o) ? (typeof o.getBoundingClientRect !== Ct && (i = o.getBoundingClientRect()), n = Y(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ot.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ot.css(i, "marginTop", !0),
                    left: t.left - n.left - ot.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || oi; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || oi
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ot.fn[e] = function(i) {
            return Dt(this, function(e, i, o) {
                var r = Y(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), ot.each(["top", "left"], function(e, t) {
        ot.cssHooks[t] = S(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ot.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin" : "border");
                return Dt(this, function(t, n, i) {
                    var o;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ot.css(t, n, a) : ot.style(t, n, i, a)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var ri = e.jQuery,
        ai = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = ai), t && e.jQuery === ot && (e.jQuery = ri), ot
    }, typeof t === Ct && (e.jQuery = e.$ = ot), ot
});
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (deviceIsIOS && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, FastClick.prototype.needsFocus = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !deviceIsAndroid;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, FastClick.prototype.sendClick = function(e, t) {
        "use strict";
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, FastClick.prototype.determineEventType = function(e) {
        "use strict";
        return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(e) {
        "use strict";
        var t;
        deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, FastClick.prototype.updateScrollParent = function(e) {
        "use strict";
        var t, n;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
        "use strict";
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, FastClick.prototype.onTouchStart = function(e) {
        "use strict";
        var t, n, i;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], deviceIsIOS) {
            if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
            if (!deviceIsIOS4) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(e) {
        "use strict";
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
    }, FastClick.prototype.onTouchMove = function(e) {
        "use strict";
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, FastClick.prototype.findControl = function(e) {
        "use strict";
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(e) {
        "use strict";
        var t, n, i, o, r, a = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = e.changedTouches[0], a = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = a.tagName.toLowerCase(), "label" === i) {
            if (t = this.findControl(a)) {
                if (this.focus(a), deviceIsAndroid) return !1;
                a = t
            }
        } else if (this.needsFocus(a)) return e.timeStamp - n > 100 || deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, e), deviceIsIOS && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
        return deviceIsIOS && !deviceIsIOS4 && (o = a.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(e) {
        "use strict";
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
    }, FastClick.prototype.onClick = function(e) {
        "use strict";
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var e = this.layer;
        deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(e) {
        "use strict";
        var t, n, i;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (deviceIsBlackBerry10 && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function(e, t) {
        "use strict";
        return new FastClick(e, t)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : this.Picker = e(jQuery)
    }(function(e) {
        function t(r, a, s, u) {
            function d() {
                return t._.node("div", t._.node("div", t._.node("div", t._.node("div", k.component.nodes(v.open), b.box), b.wrap), b.frame), b.holder)
            }

            function p() {
                w.data(a, k).addClass(b.input).val(w.data("value") ? k.get("select", y.format) : r.value).on("focus." + v.id + " click." + v.id, m), y.editable || w.on("keydown." + v.id, function(e) {
                    var t = e.keyCode,
                        n = /^(8|46)$/.test(t);
                    return 27 == t ? (k.close(), !1) : void((32 == t || n || !v.open && k.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? k.clear().close() : k.open()))
                }), o(r, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: r.id + "_root" + (k._hidden ? " " + k._hidden.id : "")
                })
            }

            function f() {
                k.$root.on({
                    focusin: function(e) {
                        k.$root.removeClass(b.focused), e.stopPropagation()
                    },
                    "mousedown click": function(t) {
                        var n = t.target;
                        n != k.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is(":input") || "OPTION" == n.nodeName || (t.preventDefault(), r.focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear]", function() {
                    var n = e(this),
                        i = n.data(),
                        o = n.hasClass(b.navDisabled) || n.hasClass(b.disabled),
                        a = document.activeElement;
                    a = a && (a.type || a.href) && a, (o || a && !e.contains(k.$root[0], a)) && r.focus(), i.nav && !o ? k.set("highlight", k.component.item.highlight, {
                        nav: i.nav
                    }) : t._.isInteger(i.pick) && !o ? k.set("select", i.pick).close(!0) : i.clear && k.clear().close(!0)
                }), o(k.$root[0], "hidden", !0)
            }

            function h() {
                var t, n;
                y.hiddenName === !0 ? (t = r.name + "_hidden", n = r.name, r.name = "") : (n = ["string" == typeof y.hiddenPrefix ? y.hiddenPrefix : "", "string" == typeof y.hiddenSuffix ? y.hiddenSuffix : "_submit"], n = t = n[0] + r.name + n[1]), k._hidden = e('<input type=hidden name="' + n + '"id="' + t + '"' + (w.data("value") || r.value ? ' value="' + k.get("select", y.formatSubmit) + '"' : "") + ">")[0], w.on("change." + v.id, function() {
                    k._hidden.value = r.value ? k.get("select", y.formatSubmit) : ""
                }).after(k._hidden)
            }

            function m(e) {
                e.stopPropagation(), "focus" == e.type && k.$root.addClass(b.focused), k.open()
            }
            if (!r) return t;
            var g = !1,
                v = {
                    id: r.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                y = s ? e.extend(!0, {}, s.defaults, u) : u || {},
                b = e.extend({}, t.klasses(), y.klass),
                w = e(r),
                x = function() {
                    return this.start()
                },
                k = x.prototype = {
                    constructor: x,
                    $node: w,
                    start: function() {
                        return v && v.start ? k : (v.methods = {}, v.start = !0, v.open = !1, v.type = r.type, r.autofocus = r == document.activeElement, r.type = "text", r.readOnly = !y.editable, r.id = r.id || v.id, k.component = new s(k, y), k.$root = e(t._.node("div", d(), b.picker, 'id="' + r.id + '_root"')), f(), y.formatSubmit && h(), p(), y.container ? e(y.container).append(k.$root) : w.after(k.$root), k.on({
                            start: k.component.onStart,
                            render: k.component.onRender,
                            stop: k.component.onStop,
                            open: k.component.onOpen,
                            close: k.component.onClose,
                            set: k.component.onSet
                        }).on({
                            start: y.onStart,
                            render: y.onRender,
                            stop: y.onStop,
                            open: y.onOpen,
                            close: y.onClose,
                            set: y.onSet
                        }), g = n(k.$root.children()[0]), r.autofocus && k.open(), k.trigger("start").trigger("render"))
                    },
                    render: function(e) {
                        return e ? k.$root.html(d()) : k.$root.find("." + b.box).html(k.component.nodes(v.open)), k.trigger("render")
                    },
                    stop: function() {
                        return v.start ? (k.close(), k._hidden && k._hidden.parentNode.removeChild(k._hidden), k.$root.remove(), w.removeClass(b.input).removeData(a), setTimeout(function() {
                            w.off("." + v.id)
                        }, 0), r.type = v.type, r.readOnly = !1, k.trigger("stop"), v.methods = {}, v.start = !1, k) : k
                    },
                    open: function(n) {
                        return v.open ? k : (w.addClass(b.active), o(r, "expanded", !0), setTimeout(function() {
                            k.$root.addClass(b.opened), o(k.$root[0], "hidden", !1)
                        }, 0), n !== !1 && (v.open = !0, g && c.css("overflow", "hidden").css("padding-right", "+=" + i()), w.trigger("focus"), l.on("click." + v.id + " focusin." + v.id, function(e) {
                            var t = e.target;
                            t != r && t != document && 3 != e.which && k.close(t === k.$root.children()[0])
                        }).on("keydown." + v.id, function(n) {
                            var i = n.keyCode,
                                o = k.component.key[i],
                                a = n.target;
                            27 == i ? k.close(!0) : a != r || !o && 13 != i ? e.contains(k.$root[0], a) && 13 == i && (n.preventDefault(), a.click()) : (n.preventDefault(), o ? t._.trigger(k.component.key.go, k, [t._.trigger(o)]) : k.$root.find("." + b.highlighted).hasClass(b.disabled) || k.set("select", k.component.item.highlight).close())
                        })), k.trigger("open"))
                    },
                    close: function(e) {
                        return e && (w.off("focus." + v.id).trigger("focus"), setTimeout(function() {
                            w.on("focus." + v.id, m)
                        }, 0)), w.removeClass(b.active), o(r, "expanded", !1), setTimeout(function() {
                            k.$root.removeClass(b.opened + " " + b.focused), o(k.$root[0], "hidden", !0)
                        }, 0), v.open ? (v.open = !1, g && c.css("overflow", "").css("padding-right", "-=" + i()), l.off("." + v.id), k.trigger("close")) : k
                    },
                    clear: function() {
                        return k.set("clear")
                    },
                    set: function(t, n, i) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
                            a || (s[t] = n);
                            for (o in s) r = s[o], o in k.component.item && (void 0 === r && (r = null), k.component.set(o, r, i)), ("select" == o || "clear" == o) && w.val("clear" == o ? "" : k.get(o, y.format)).trigger("change");
                            k.render()
                        }
                        return i.muted ? k : k.trigger("set", s)
                    },
                    get: function(e, n) {
                        if (e = e || "value", null != v[e]) return v[e];
                        if ("value" == e) return r.value;
                        if (e in k.component.item) {
                            if ("string" == typeof n) {
                                var i = k.component.get(e);
                                return i ? t._.trigger(k.component.formats.toString, k.component, [n, i]) : ""
                            }
                            return k.component.get(e)
                        }
                    },
                    on: function(t, n) {
                        var i, o, r = e.isPlainObject(t),
                            a = r ? t : {};
                        if (t) {
                            r || (a[t] = n);
                            for (i in a) o = a[i], v.methods[i] = v.methods[i] || [], v.methods[i].push(o)
                        }
                        return k
                    },
                    off: function() {
                        var e, t, n = arguments;
                        for (e = 0, namesCount = n.length; namesCount > e; e += 1) t = n[e], t in v.methods && delete v.methods[t];
                        return k
                    },
                    trigger: function(e, n) {
                        var i = v.methods[e];
                        return i && i.map(function(e) {
                            t._.trigger(e, k, [n])
                        }), k
                    }
                };
            return new x
        }

        function n(e) {
            var t, n = "position";
            return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]), "fixed" == t
        }

        function i() {
            if (c.height() <= s.height()) return 0;
            var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                n = t[0].offsetWidth;
            t.css("overflow", "scroll");
            var i = e('<div style="width:100%" />').appendTo(t),
                o = i[0].offsetWidth;
            return t.remove(), n - o
        }

        function o(t, n, i) {
            if (e.isPlainObject(n))
                for (var o in n) r(t, o, n[o]);
            else r(t, n, i)
        }

        function r(e, t, n) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, n)
        }

        function a(t, n) {
            e.isPlainObject(t) || (t = {
                attribute: n
            }), n = "";
            for (var i in t) {
                var o = ("role" == i ? "" : "aria-") + i,
                    r = t[i];
                n += null == r ? "" : o + '="' + t[i] + '"'
            }
            return n
        }
        var s = e(window),
            l = e(document),
            c = e(document.documentElement);
        return t.klasses = function(e) {
            return e = e || "picker", {
                picker: e,
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, t._ = {
            group: function(e) {
                for (var n, i = "", o = t._.trigger(e.min, e); o <= t._.trigger(e.max, e, [o]); o += e.i) n = t._.trigger(e.item, e, [o]), i += t._.node(e.node, n[0], n[1], n[2]);
                return i
            },
            node: function(t, n, i, o) {
                return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", o = o ? " " + o : "", "<" + t + i + o + ">" + n + "</" + t + ">") : ""
            },
            lead: function(e) {
                return (10 > e ? "0" : "") + e
            },
            trigger: function(e, t, n) {
                return "function" == typeof e ? e.apply(t, n || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
            },
            ariaAttr: a
        }, t.extend = function(n, i) {
            e.fn[n] = function(o, r) {
                var a = this.data(n);
                return "picker" == o ? a : a && "string" == typeof o ? t._.trigger(a[o], a, [r]) : this.each(function() {
                    var r = e(this);
                    r.data(n) || new t(this, n, i, o)
                })
            }, e.fn[n].defaults = i.defaults
        }, t
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : e(Picker, jQuery)
    }(function(e, t) {
        function n(e, t) {
            var n = this,
                i = e.$node[0].value,
                o = e.$node.data("value"),
                r = o || i,
                a = o ? t.formatSubmit : t.format,
                s = function() {
                    return "rtl" === getComputedStyle(e.$root[0]).direction
                };
            n.settings = t, n.$node = e.$node, n.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = - function(e) {
                return e[0] === !0 ? e.shift() : -1
            }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), r ? n.set("select", r, {
                format: a
            }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                40: 7,
                38: -7,
                39: function() {
                    return s() ? -1 : 1
                },
                37: function() {
                    return s() ? 1 : -1
                },
                go: function(e) {
                    var t = n.item.highlight,
                        i = new Date(t.year, t.month, t.date + e);
                    n.set("highlight", [i.getFullYear(), i.getMonth(), i.getDate()], {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var n = this.value;
                    n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var n = this.value;
                    n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }).on("open", function() {
                e.$root.find("button, select").attr("disabled", !1)
            }).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            })
        }
        var i = 7,
            o = 6,
            r = e._;
        n.prototype.set = function(e, t, n) {
            var i = this,
                o = i.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, i) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function(o) {
                return t = i[o](e, t, n)
            }).pop(), "select" == e ? i.set("highlight", o.select, n) : "highlight" == e ? i.set("view", o.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
        }, n.prototype.get = function(e) {
            return this.item[e]
        }, n.prototype.create = function(e, n, i) {
            var o, a = this;
            return n = void 0 === n ? e : n, n == -1 / 0 || 1 / 0 == n ? o = n : t.isPlainObject(n) && r.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = r.isDate(n) ? n : a.create().obj) : n = r.isInteger(n) || r.isDate(n) ? a.normalize(new Date(n), i) : a.now(e, n, i), {
                year: o || n.getFullYear(),
                month: o || n.getMonth(),
                date: o || n.getDate(),
                day: o || n.getDay(),
                obj: o || n,
                pick: o || n.getTime()
            }
        }, n.prototype.createRange = function(e, n) {
            var i = this,
                o = function(e) {
                    return e === !0 || t.isArray(e) || r.isDate(e) ? i.create(e) : e
                };
            return r.isInteger(e) || (e = o(e)), r.isInteger(n) || (n = o(n)), r.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : r.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
                from: o(e),
                to: o(n)
            }
        }, n.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, n.prototype.overlapRanges = function(e, t) {
            var n = this;
            return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
        }, n.prototype.now = function(e, t, n) {
            return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
        }, n.prototype.navigate = function(e, n, i) {
            var o, r, a, s, l = t.isArray(n),
                c = t.isPlainObject(n),
                u = this.item.view;
            if (l || c) {
                for (c ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (r = u.year, a = u.month), o = new Date(r, a + (i && i.nav ? i.nav : 0), 1), r = o.getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
                n = [r, a, s]
            }
            return n
        }, n.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, n.prototype.measure = function(e, t) {
            var n = this;
            return t ? r.isInteger(t) && (t = n.now(e, t, {
                rel: t
            })) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, n.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, n.prototype.validate = function(e, n, i) {
            var o, a, s, l, c = this,
                u = n,
                d = i && i.interval ? i.interval : 1,
                p = -1 === c.item.enable,
                f = c.item.min,
                h = c.item.max,
                m = p && c.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var i = c.create(e).pick;
                        i < n.pick ? o = !0 : i > n.pick && (a = !0)
                    }
                    return r.isInteger(e)
                }).length;
            if ((!i || !i.nav) && (!p && c.disabled(n) || p && c.disabled(n) && (m || o || a) || !p && (n.pick <= f.pick || n.pick >= h.pick)))
                for (p && !m && (!a && d > 0 || !o && 0 > d) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, d = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0, d = -1, n = c.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + d]);
            return n
        }, n.prototype.disabled = function(e) {
            var n = this,
                i = n.item.disable.filter(function(i) {
                    return r.isInteger(i) ? e.day === (n.settings.firstDay ? i : i - 1) % 7 : t.isArray(i) || r.isDate(i) ? e.pick === n.create(i).pick : t.isPlainObject(i) ? n.withinRange(i, e) : void 0
                });
            return i = i.length && !i.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === n.item.enable ? !i : i || e.pick < n.item.min.pick || e.pick > n.item.max.pick
        }, n.prototype.parse = function(e, t, n) {
            var i = this,
                o = {};
            return t && "string" == typeof t ? (n && n.format || (n = n || {}, n.format = i.settings.format), i.formats.toArray(n.format).map(function(e) {
                var n = i.formats[e],
                    a = n ? r.trigger(n, i, [t, o]) : e.replace(/^!/, "").length;
                n && (o[e] = t.substr(0, a)), t = t.substr(a)
            }), [o.yyyy || o.yy, +(o.mm || o.m) - 1, o.dd || o.d]) : t
        }, n.prototype.formats = function() {
            function e(e, t, n) {
                var i = e.match(/\w+/)[0];
                return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? r.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : r.lead(t.date)
                },
                ddd: function(e, n) {
                    return e ? t(e) : this.settings.weekdaysShort[n.day]
                },
                dddd: function(e, n) {
                    return e ? t(e) : this.settings.weekdaysFull[n.day]
                },
                m: function(e, t) {
                    return e ? r.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : r.lead(t.month + 1)
                },
                mmm: function(t, n) {
                    var i = this.settings.monthsShort;
                    return t ? e(t, i, n) : i[n.month]
                },
                mmmm: function(t, n) {
                    var i = this.settings.monthsFull;
                    return t ? e(t, i, n) : i[n.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var n = this;
                    return n.formats.toArray(e).map(function(e) {
                        return r.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), n.prototype.isDateExact = function(e, n) {
            var i = this;
            return r.isInteger(e) && r.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (r.isDate(e) || t.isArray(e)) && (r.isDate(n) || t.isArray(n)) ? i.create(e).pick === i.create(n).pick : t.isPlainObject(e) && t.isPlainObject(n) ? i.isDateExact(e.from, n.from) && i.isDateExact(e.to, n.to) : !1
        }, n.prototype.isDateOverlap = function(e, n) {
            var i = this,
                o = i.settings.firstDay ? 1 : 0;
            return r.isInteger(e) && (r.isDate(n) || t.isArray(n)) ? (e = e % 7 + o, e === i.create(n).day + 1) : r.isInteger(n) && (r.isDate(e) || t.isArray(e)) ? (n = n % 7 + o, n === i.create(e).day + 1) : t.isPlainObject(e) && t.isPlainObject(n) ? i.overlapRanges(e, n) : !1
        }, n.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, n.prototype.deactivate = function(e, n) {
            var i = this,
                o = i.item.disable.slice(0);
            return "flip" == n ? i.flipEnable() : n === !1 ? (i.flipEnable(1), o = []) : n === !0 ? (i.flipEnable(-1), o = []) : n.map(function(e) {
                for (var n, a = 0; a < o.length; a += 1)
                    if (i.isDateExact(e, o[a])) {
                        n = !0;
                        break
                    }
                n || (r.isInteger(e) || r.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && o.push(e)
            }), o
        }, n.prototype.activate = function(e, n) {
            var i = this,
                o = i.item.disable,
                a = o.length;
            return "flip" == n ? i.flipEnable() : n === !0 ? (i.flipEnable(1), o = []) : n === !1 ? (i.flipEnable(-1), o = []) : n.map(function(e) {
                var n, s, l, c;
                for (l = 0; a > l; l += 1) {
                    if (s = o[l], i.isDateExact(s, e)) {
                        n = o[l] = null, c = !0;
                        break
                    }
                    if (i.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : r.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (n)
                    for (l = 0; a > l; l += 1)
                        if (i.isDateExact(o[l], e)) {
                            o[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; a > l; l += 1)
                        if (i.isDateOverlap(o[l], e)) {
                            o[l] = null;
                            break
                        }
                n && o.push(n)
            }), o.filter(function(e) {
                return null != e
            })
        }, n.prototype.nodes = function(e) {
            var t = this,
                n = t.settings,
                a = t.item,
                s = a.now,
                l = a.select,
                c = a.highlight,
                u = a.view,
                d = a.disable,
                p = a.min,
                f = a.max,
                h = function(e, t) {
                    return n.firstDay && (e.push(e.shift()), t.push(t.shift())), r.node("thead", r.node("tr", r.group({
                        min: 0,
                        max: i - 1,
                        i: 1,
                        node: "th",
                        item: function(i) {
                            return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
                        }
                    })))
                }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)),
                m = function(e) {
                    return r.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && u.year >= f.year && u.month >= f.month || !e && u.year <= p.year && u.month <= p.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + r.ariaAttr({
                        role: "button",
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
                },
                g = function() {
                    var i = n.showMonthsShort ? n.monthsShort : n.monthsFull;
                    return n.selectMonths ? r.node("select", r.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [i[e], 0, "value=" + e + (u.month == e ? " selected" : "") + (u.year == p.year && e < p.month || u.year == f.year && e > f.month ? " disabled" : "")]
                        }
                    }), n.klass.selectMonth, (e ? "" : "disabled") + " " + r.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + n.labelMonthSelect + '"') : r.node("div", i[u.month], n.klass.month)
                },
                v = function() {
                    var i = u.year,
                        o = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
                    if (o) {
                        var a = p.year,
                            s = f.year,
                            l = i - o,
                            c = i + o;
                        if (a > l && (c += a - l, l = a), c > s) {
                            var d = l - a,
                                h = c - s;
                            l -= d > h ? h : d, c = s
                        }
                        return r.node("select", r.group({
                            min: l,
                            max: c,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (i == e ? " selected" : "")]
                            }
                        }), n.klass.selectYear, (e ? "" : "disabled") + " " + r.ariaAttr({
                            controls: t.$node[0].id + "_table"
                        }) + ' title="' + n.labelYearSelect + '"')
                    }
                    return r.node("div", i, n.klass.year)
                };
            return r.node("div", (n.selectYears ? v() + g() : g() + v()) + m() + m(1), n.klass.header) + r.node("table", h + r.node("tbody", r.group({
                min: 0,
                max: o - 1,
                i: 1,
                node: "tr",
                item: function(e) {
                    var o = n.firstDay && 0 === t.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [r.group({
                        min: i * e - u.day + o + 1,
                        max: function() {
                            return this.min + i - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = t.create([u.year, u.month, e + (n.firstDay ? 1 : 0)]);
                            var i = l && l.pick == e.pick,
                                o = c && c.pick == e.pick,
                                a = d && t.disabled(e) || e.pick < p.pick || e.pick > f.pick;
                            return [r.node("div", e.date, function(t) {
                                return t.push(u.month == e.month ? n.klass.infocus : n.klass.outfocus), s.pick == e.pick && t.push(n.klass.now), i && t.push(n.klass.selected), o && t.push(n.klass.highlighted), a && t.push(n.klass.disabled), t.join(" ")
                            }([n.klass.day]), "data-pick=" + e.pick + " " + r.ariaAttr({
                                role: "gridcell",
                                selected: i && t.$node.val() === r.trigger(t.formats.toString, t, [n.format, e]) ? !0 : null,
                                activedescendant: o ? !0 : null,
                                disabled: a ? !0 : null
                            })), "", r.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + r.ariaAttr({
                role: "grid",
                controls: t.$node[0].id,
                readonly: !0
            })) + r.node("div", r.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + s.pick + (e ? "" : " disabled") + " " + r.ariaAttr({
                controls: t.$node[0].id
            })) + r.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + r.ariaAttr({
                controls: t.$node[0].id
            })), n.klass.footer)
        }, n.defaults = function(e) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                today: "Today",
                clear: "Clear",
                format: "d mmmm, yyyy",
                klass: {
                    table: e + "table",
                    header: e + "header",
                    navPrev: e + "nav--prev",
                    navNext: e + "nav--next",
                    navDisabled: e + "nav--disabled",
                    month: e + "month",
                    year: e + "year",
                    selectMonth: e + "select--month",
                    selectYear: e + "select--year",
                    weekdays: e + "weekday",
                    day: e + "day",
                    disabled: e + "day--disabled",
                    selected: e + "day--selected",
                    highlighted: e + "day--highlighted",
                    now: e + "day--today",
                    infocus: e + "day--infocus",
                    outfocus: e + "day--outfocus",
                    footer: e + "footer",
                    buttonClear: e + "button--clear",
                    buttonToday: e + "button--today"
                }
            }
        }(e.klasses().picker + "__"), e.extend("pickadate", n)
    }),
    function(e) {
        "use strict";
        e.fn.fitVids = function(t) {
            var n = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    o = ".fluid-width-video-wrapper{width:100%;height:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:relative;top:0;left:0;width:100%;height:100%;}",
                    r = document.createElement("div");
                r.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", i.appendChild(r.childNodes[1])
            }
            return t && e.extend(n, t), this.each(function() {
                var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                n.customSelector && t.push(n.customSelector);
                var i = e(this).find(t.join(","));
                i = i.not("object object"), i.each(function() {
                    var t = e(this);
                    if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                        var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                            i = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                            o = n / i;
                        if (!t.attr("id")) {
                            var r = "fitvid" + Math.floor(999999 * Math.random());
                            t.attr("id", r)
                        }
                        t.wrap('<div class="fluid-width-video-wrapper"></div>'), t.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto), ! function(e) {
        "use strict";
        e.fn.selectOrDie = function(t) {
            var n, i, o = {
                    customID: null,
                    customClass: "",
                    placeholder: null,
                    prefix: null,
                    cycle: !1,
                    stripEmpty: !1,
                    links: !1,
                    linksExternal: !1,
                    size: 0,
                    tabIndex: 0,
                    onChange: e.noop
                },
                r = {},
                a = !1,
                s = {
                    initSoD: function(t) {
                        return r = e.extend({}, o, t), this.each(function() {
                            if (e(this).parent().hasClass("sod_select")) console.log("Select or Die: It looks like the SoD already exists");
                            else {
                                var t, n, i, o = e(this),
                                    a = r.customID ? r.customID : o.data("custom-id") ? o.data("custom-id") : r.customID,
                                    l = r.customClass ? r.customClass : o.data("custom-class") ? o.data("custom-class") : r.customClass,
                                    c = r.prefix ? r.prefix : o.data("prefix") ? o.data("prefix") : r.prefix,
                                    u = r.placeholder ? r.placeholder : o.data("placeholder") ? o.data("placeholder") : r.placeholder,
                                    d = r.cycle || o.data("cycle") ? !0 : r.cycle,
                                    p = r.links || o.data("links") ? !0 : r.links,
                                    f = r.linksExternal || o.data("links-external") ? !0 : r.linksExternal,
                                    h = r.size ? r.size : o.data("size") ? o.data("size") : r.size,
                                    m = r.tabIndex ? r.tabIndex : o.data("tabindex") ? o.data("tabindex") : o.attr("tabindex") ? o.attr("tabindex") : r.tabIndex,
                                    g = r.stripEmpty || o.data("strip-empty") ? !0 : r.stripEmpty,
                                    v = o.prop("title") ? o.prop("title") : null,
                                    y = o.is(":disabled") ? " disabled" : "",
                                    b = "",
                                    w = "",
                                    x = 0;
                                c && (b = '<span class="sod_prefix">' + c + "</span> "), w += u && !c ? '<span class="sod_label sod_placeholder">' + u + "</span>" : '<span class="sod_label">' + b + "</span>", t = e("<span/>", {
                                    id: a,
                                    "class": "sod_select " + l + y,
                                    title: v,
                                    tabindex: m,
                                    html: w,
                                    "data-cycle": d,
                                    "data-links": p,
                                    "data-links-external": f,
                                    "data-placeholder": u,
                                    "data-prefix": c,
                                    "data-filter": ""
                                }).insertAfter(this), s.isTouch() && t.addClass("touch"), n = e("<span/>", {
                                    "class": "sod_list_wrapper"
                                }).appendTo(t), i = e("<span/>", {
                                    "class": "sod_list"
                                }).appendTo(n), e("option, optgroup", o).each(function() {
                                    var n = e(this);
                                    g && !e.trim(n.text()) ? n.remove() : s.populateSoD(n, i, t)
                                }), h && (n.show(), e(".sod_option:lt(" + h + ")", i).each(function() {
                                    x += e(this).outerHeight()
                                }), n.removeAttr("style"), i.css({
                                    "max-height": x
                                })), o.appendTo(t), t.on("focusin", s.focusSod).on("click", s.triggerSod).on("click", ".sod_option", s.optionClick).on("mousemove", ".sod_option", s.optionHover).on("keydown", s.keyboardUse), o.on("change", s.selectChange), e(document).on("click", "label[for='" + o.attr("id") + "']", function(e) {
                                    e.preventDefault(), t.focus()
                                })
                            }
                        })
                    },
                    populateSoD: function(t, n, i) {
                        var o = i.data("placeholder"),
                            r = i.data("prefix"),
                            a = t.parent(),
                            s = t.text(),
                            l = t.val(),
                            c = t.data("custom-id") ? t.data("custom-id") : null,
                            u = t.data("custom-class") ? t.data("custom-class") : "",
                            d = t.is(":disabled") ? " disabled " : "",
                            p = t.is(":selected") ? " selected active " : "",
                            f = t.data("link") ? " link " : "",
                            h = t.data("link-external") ? " linkexternal" : "";
                        t.is("option") ? (e("<span/>", {
                            "class": "sod_option " + u + d + p + f + h,
                            id: c,
                            title: s,
                            html: s,
                            "data-value": l
                        }).appendTo(n), (p && !o || p && r) && i.find(".sod_label").append(s), p && o && !r ? i.data("label", o) : p && i.data("label", s), a.is("optgroup") && (n.find(".sod_option:last").addClass("groupchild"), a.is(":disabled") && n.find(".sod_option:last").addClass("disabled"))) : e("<span/>", {
                            "class": "sod_option optgroup " + d,
                            title: t.prop("label"),
                            html: t.prop("label"),
                            "data-label": t.prop("label")
                        }).appendTo(n)
                    },
                    focusSod: function(t) {
                        if (!e(t.target).hasClass("sod_label") && !e(t.target).hasClass("sod_option")) {
                            var n = e(this),
                                i = e(".sod_select.focus").not(n);
                            n.hasClass("disabled") ? s.blurSod(n) : (s.blurSod(i), n.addClass("focus"), e("html").one("click", function() {
                                s.blurSod(n)
                            }))
                        }
                    },
                    triggerSod: function(t) {
                        t.stopPropagation();
                        var n = e(this),
                            o = n.find(".sod_list"),
                            r = n.data("placeholder"),
                            a = n.find(".selected");
                        n.hasClass("disabled") || n.hasClass("open") || n.hasClass("touch") ? (clearTimeout(i), n.removeClass("open")) : (n.addClass("open"), e(".sod_select").not(this).removeClass("open focus"), r && !n.data("prefix") && n.find(".sod_label").addClass("sod_placeholder").html(r), s.listScroll(o, a), s.checkViewport(n, o))
                    },
                    keyboardUse: function(t) {
                        var i, o, r, l = e(this),
                            c = l.find(".sod_list"),
                            u = l.find(".sod_option"),
                            d = l.find(".sod_label"),
                            p = l.data("cycle"),
                            f = u.filter(".active");
                        return t.which > 36 && t.which < 41 ? (37 === t.which || 38 === t.which ? (o = f.prevAll(":not('.disabled, .optgroup')").first(), r = u.not(".disabled, .optgroup").last()) : (39 === t.which || 40 === t.which) && (o = f.nextAll(":not('.disabled, .optgroup')").first(), r = u.not(".disabled, .optgroup").first()), !o.hasClass("sod_option") && p && (o = r), (o.hasClass("sod_option") || p) && (f.removeClass("active"), o.addClass("active"), d.get(0).lastChild.nodeValue = o.text(), s.listScroll(c, o), l.hasClass("open") || (a = !0)), !1) : (13 === t.which || 32 === t.which && l.hasClass("open") && (" " === l.data("filter")[0] || "" === l.data("filter")) ? (t.preventDefault(), f.click()) : 32 !== t.which || l.hasClass("open") || " " !== l.data("filter")[0] && "" !== l.data("filter") ? 27 === t.which && s.blurSod(l) : (t.preventDefault(), a = !1, l.click()), void(0 !== t.which && (clearTimeout(n), l.data("filter", l.data("filter") + String.fromCharCode(t.which)), i = u.filter(function() {
                            return 0 === e(this).text().toLowerCase().indexOf(l.data("filter").toLowerCase())
                        }).not(".disabled, .optgroup").first(), i.length && (f.removeClass("active"), i.addClass("active"), s.listScroll(c, i), d.get(0).lastChild.nodeValue = i.text(), l.hasClass("open") || (a = !0)), n = setTimeout(function() {
                            l.data("filter", "")
                        }, 500))))
                    },
                    optionHover: function() {
                        var t = e(this);
                        t.hasClass("disabled") || t.hasClass("optgroup") || t.siblings().removeClass("active").end().addClass("active")
                    },
                    optionClick: function(t) {
                        t.stopPropagation();
                        var n = e(this),
                            o = n.closest(".sod_select"),
                            r = n.hasClass("disabled"),
                            a = n.hasClass("optgroup"),
                            s = o.find(".sod_option:not('.optgroup')").index(this);
                        o.hasClass("touch") || (r || a || (o.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder"), n.addClass("selected"), o.find("select option")[s].selected = !0, o.find("select").change()), clearTimeout(i), o.removeClass("open"))
                    },
                    selectChange: function() {
                        var t = e(this),
                            n = t.find(":selected"),
                            i = n.text(),
                            o = t.closest(".sod_select");
                        o.find(".sod_label").get(0).lastChild.nodeValue = i, o.data("label", i), r.onChange.call(this), !o.data("links") && !n.data("link") || n.data("link-external") ? (o.data("links-external") || n.data("link-external")) && window.open(n.val(), "_blank") : window.location.href = n.val()
                    },
                    blurSod: function(t) {
                        if (e("body").find(t).length) {
                            var n = t.data("label"),
                                o = t.find(".active"),
                                r = t.find(".selected");
                            clearTimeout(i), a && !o.hasClass("selected") ? o.click() : o.hasClass("selected") || (t.find(".sod_label").get(0).lastChild.nodeValue = n, o.removeClass("active"), r.addClass("active")), a = !1, t.removeClass("open focus"), t.blur()
                        }
                    },
                    checkViewport: function(t, n) {
                        var o = t[0].getBoundingClientRect(),
                            r = n.outerHeight();
                        o.bottom + r + 10 > e(window).height() && o.top - r > 10 ? t.addClass("above") : t.removeClass("above"), i = setTimeout(function() {
                            s.checkViewport(t, n)
                        }, 200)
                    },
                    listScroll: function(e, t) {
                        var n = e[0].getBoundingClientRect(),
                            i = t[0].getBoundingClientRect();
                        n.top > i.top ? e.scrollTop(e.scrollTop() - n.top + i.top) : n.bottom < i.bottom && e.scrollTop(e.scrollTop() - n.bottom + i.bottom)
                    },
                    isTouch: function() {
                        return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                    }
                },
                l = {
                    destroy: function() {
                        return this.each(function() {
                            var t = e(this),
                                n = t.parent();
                            n.hasClass("sod_select") ? (t.off("change"), n.find("span").remove(), t.unwrap()) : console.log("Select or Die: There's no SoD to destroy")
                        })
                    },
                    update: function() {
                        return this.each(function() {
                            var t = e(this),
                                n = t.parent(),
                                i = n.find(".sod_list:first");
                            n.hasClass("sod_select") ? (i.empty(), n.find(".sod_label").get(0).lastChild.nodeValue = "", t.is(":disabled") && n.addClass("disabled"), e("option, optgroup", t).each(function() {
                                s.populateSoD(e(this), i, n)
                            })) : console.log("Select or Die: There's no SoD to update")
                        })
                    },
                    disable: function(t) {
                        return this.each(function() {
                            var n = e(this),
                                i = n.parent();
                            i.hasClass("sod_select") ? "undefined" != typeof t ? (i.find(".sod_list:first .sod_option[data-value='" + t + "']").addClass("disabled"), i.find(".sod_list:first .sod_option[data-label='" + t + "']").nextUntil(":not(.groupchild)").addClass("disabled"), e("option[value='" + t + "'], optgroup[label='" + t + "']", this).prop("disabled", !0)) : i.hasClass("sod_select") && (i.addClass("disabled"), n.prop("disabled", !0)) : console.log("Select or Die: There's no SoD to disable")
                        })
                    },
                    enable: function(t) {
                        return this.each(function() {
                            var n = e(this),
                                i = n.parent();
                            i.hasClass("sod_select") ? "undefined" != typeof t ? (i.find(".sod_list:first .sod_option[data-value='" + t + "']").removeClass("disabled"), i.find(".sod_list:first .sod_option[data-label='" + t + "']").nextUntil(":not(.groupchild)").removeClass("disabled"), e("option[value='" + t + "'], optgroup[label='" + t + "']", this).prop("disabled", !1)) : i.hasClass("sod_select") && (i.removeClass("disabled"), n.prop("disabled", !1)) : console.log("Select or Die: There's no SoD to enable")
                        })
                    }
                };
            return l[t] ? l[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error('Select or Die: Oh no! No such method "' + t + '" for the SoD instance') : s.initSoD.apply(this, arguments)
        }
    }(jQuery), window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
        }
    }(), window.requestInterval = function(e, t) {
        var n, i, o;
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ? (i = (new Date).getTime(), n = {}, o = function() {
            var r, a;
            r = (new Date).getTime(), a = r - i, a >= t && (e.call(), i = (new Date).getTime()), n.value = requestAnimFrame(o)
        }, n.value = requestAnimFrame(o), n) : window.setInterval(e, t)
    }, window.clearRequestInterval = function(e) {
        return window.cancelAnimationFrame ? window.cancelAnimationFrame(e.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(e.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(e.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(e.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(e.value) : clearInterval(e)
    };
var __slice = [].slice;
window.page = function() {
        var e, t, n, i, o;
        for (n = 1 <= arguments.length ? __slice.call(arguments, 0) : [], t = !1, i = 0, o = n.length; o > i; i++) e = n[i], "index" === e ? ("/" === location.pathname || "/index" === location.pathname) && (t = !0) : location.href.indexOf(e) > -1 && (t = !0);
        return t
    },
    function(e, t) {
        e.fn.prettyEmbed = function(n) {
            var video_image_count = -1;
            function i(i,id) {
                var o = i.find("img").outerWidth(!0),
                    r = i.find("img").outerHeight(!0),
                    a = "",
                    s = "";
                i.attr("data-pe-videoid") !== t ? s = i.attr("data-pe-videoid") : n.videoID[id] !== t ? s = n.videoID[id] : (s = t, console.error("PrettyEmbed.js Error:  Misformed or missing video ID.")), ("false" === i.attr("data-pe-show-info") || n.showInfo === !1) && (a += "&showinfo=0"), ("true" === i.attr("data-pe-closed-captions") || n.closedCaptions === !0) && (a += "&cc_load_policy=1"), (i.attr("data-pe-localization") !== t || n.localization !== t) && (i.attr("data-pe-localization") !== t ? a += "&hl=" + i.attr("data-pe-localization") : n.localization !== t && (a += "&hl=" + n.localization)), ("light" === i.attr("data-pe-color-scheme") || "light" === n.colorScheme) && (a += "&theme=light"), a += "false" === i.attr("data-pe-show-related") || n.showRelated === !1 ? "&rel=0" : "&rel=1", i.html('<iframe allowfullscreen width="' + o + '" height="' + r + '" style="border:none;" src="//www.youtube.com/embed/' + s + "?autoplay=1" + a + '"></iframe>').addClass("play"), n.useFitVids && e.isFunction(e.fn.fitVids) && i.parent().fitVids()
            }

            function o(e) {   
                var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                    n = e.match(t);
                return n && 11 === n[7].length ? n[7] : void console.error("PrettyEmbed.js Error:  Bad URL.")
            }
            n = e.extend({}, e.fn.prettyEmbed.options, n), n.useFitVids && (e.isFunction(e.fn.fitVids) || console.error("PrettyEmbed.js Error:  options.useFitVids is set to true; FitVids not found!"));
            var r;
            
            r = e(0 === e(this).length ? ".pretty-embed" : this), r.each(function() {
                var src_id  = ++video_image_count;
                e(this).addClass("pretty-embed");
                var i, r, a, s, l, c, u, d, p = "",
                    f = "",
                    h = "";
                if (p = e(this).attr("data-pe-videoid") !== t ? e(this).attr("data-pe-videoid") : e(this).attr("href") !== t ? o(e(this).attr("href")) : n.videoID, f = e(this).attr("data-pe-preview-size") !== t ? e(this).attr("data-pe-preview-size") : n.previewSize !== t ? n.previewSize : t, h = e(this).attr("data-pe-custom-preview-image") !== t ? e(this).attr("data-pe-custom-preview-image") : n.customPreviewImage[src_id] !== t ? n.customPreviewImage[src_id] : t, r = e(this).attr("data-pe-show-info") !== t ? e(this).attr("data-pe-show-info") : n.showInfo !== t ? n.showInfo : t, a = e(this).attr("data-pe-show-controls") !== t ? e(this).attr("data-pe-show-controls") : n.showControls !== t ? n.showControls : t, s = e(this).attr("data-pe-loop") !== t ? e(this).attr("data-pe-loop") : n.loop !== t ? n.loop : t, l = e(this).attr("data-pe-closed-captions") !== t ? e(this).attr("data-pe-closed-captions") : n.closedCaptions !== t ? n.closedCaptions : t, c = e(this).attr("data-pe-localization") !== t ? e(this).attr("data-pe-localization") : n.localization !== t ? n.localization : t, u = e(this).attr("data-pe-color-scheme") !== t ? e(this).attr("data-pe-color-scheme") : n.colorScheme !== t ? n.colorScheme : t, d = e(this).attr("data-pe-show-related") !== t ? e(this).attr("data-pe-show-related") : n.showRelated !== t ? n.showRelated : t, e(this).is("a") && (i = e("<div />").addClass("pretty-embed"), i.attr("data-pe-videoid", p).attr("data-pe-preview-size", f).attr("data-pe-custom-preview-image", h).attr("data-pe-show-info", r).attr("data-pe-show-controls", a).attr("data-pe-loop", s).attr("data-pe-closed-captions", l).attr("data-pe-localization", c).attr("data-pe-color-scheme", u).attr("data-pe-show-related", d), e(this).after(i)), h !== t && "" !== h) 
                    e(this).html('<img src="' + h + '" width="100%" alt="YouTube Video Preview" />');
                else {
                    var m = "";
                    switch (f) {
                        case "thumb-default":
                            m = "default";
                            break;
                        case "thumb-1":
                            m = "1";
                            break;
                        case "thumb-2":
                            m = "2";
                            break;
                        case "thumb-3":
                            m = "3";
                            break;
                        case "default":
                            m = "mqdefault";
                            break;
                        case "medium":
                            m = "0";
                            break;
                        case "high":
                            m = "hqdefault";
                            break;
                        default:
                            m = "maxresdefault"
                    }
                    e(this).html('<img src="//img.youtube.com/vi/' + p + "/"  + m + '.jpg" width="100%" alt="YouTube Video Preview" />')
                }
                e(this).is("a") && (i.html(e(this).html()), e(this).remove())
            }), e("body").on("click",".pretty-embed", function(t) {
                var id = e(this).context.id;
                t.preventDefault(), i(e(this),id)
            }), 
             e.fn.prettyEmbed.options = {
                videoID: null,
                previewSize: "",
                customPreviewImage: null,
                showInfo: !0,
                showControls: !0,
                loop: !1,
                closedCaptions: !1,
                colorScheme: "dark",
                showRelated: !1,
                useFitVids: !1
            }
        }
    }(jQuery);
var __bind = function(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
};
window.Popup = function() {
    function e(e) {
        this.hide = __bind(this.hide, this), this.show = __bind(this.show, this), this.popup = e.popup, this.title = e.title, this.para = e.para, this.popup.click(function(e) {
            return function() {
                return e.hide()
            }
        }(this))
    }
    return e.prototype.show = function(e) {
        return this.title.html(e.title), this.para.html(e.para), this.popup.show(function(e) {
            return function() {
                return e.popup.addClass("active")
            }
        }(this))
    }, e.prototype.hide = function() {
        return this.popup.removeClass("active"), setTimeout(function(e) {
            return function() {
                return e.popup.hide()
            }
        }(this), 500)
    }, e
}();
var __bind = function(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
};
window.Carousel = function() {
    function e(e) {
        this.manual = __bind(this.manual, this), this.i = 0, this.toUpdate = [], this.elms = e.elms, this.ctrls = e.ctrls, this.toUpdate.push(this.elms), e.autoRotate && (this.ticker = this.auto(), window.addEventListener("scroll", function(e) {
            return function() {
                e.pause()
            }
        }(this))), this.ctrls && (this.toUpdate.push(this.ctrls), this.ctrls.on("click", this.manual))
    }
    return e.prototype.auto = function() {
        return requestInterval(function(e) {
            return function() {
                return e.update()
            }
        }(this), 5e3)
    }, e.prototype.manual = function(e) {
        var t;
        this.ticker && clearRequestInterval(this.ticker), t = $(e.target), "SPAN" === t.prop("tagName") && (t = t.parent()), this.update(t.index()), this.ticker && (this.ticker = this.auto())
    }, e.prototype.pause = function() {
        clearRequestInterval(this.ticker), this.ticker = setTimeout(function(e) {
            return function() {
                clearRequestInterval(e.ticker), e.ticker = e.auto()
            }
        }(this), 1e3)
    }, e.prototype.update = function(e) {
        null == e && (e = this.i), this.updateClass(), e === this.i ? (this.i++, this.i >= this.elms.length && (this.i = 0)) : this.i = e, this.updateClass()
    }, e.prototype.updateClass = function() {
        var e, t, n, i, o;
        for (o = this.toUpdate, n = 0, i = o.length; i > n; n++) t = o[n], t.eq(this.i).toggleClass("active");
        e = this.elms.eq(this.i), setTimeout(function() {
            return e.toggleClass("anim")
        }, 100)
    }, e
}(), 
$(function() {
    var e, t, n, i, o, r, a, s, l, c, u;
    for (n = $("#menus a"), t = $(".carte-container"), o = "", e = n.first(), i = function() {
            var n, i;
            e.removeClass("active"), e = $(this), e.addClass("active"), "pdf" !== $(this).data("kind") && (i = $(this).attr("href").replace("/menu#", ".").replace("menu.html#", "."), "" === o ? (t.addClass("active"), $(i).fadeIn(100)) : o === i ? (t.toggleClass("active"), $(o).fadeToggle(t.hasClass("active"))) : (t.addClass("active"), n = $(o), n.fadeOut(500, function() {
                return $(i).fadeIn(300)
            })), o = i)
        }, n.on("click", i), s = -1, u = ["lunch", "dinner", "tasting"], r = l = 0, c = u.length; c > l; r = ++l)
        if (a = u[r], page(a)) {
            s = r;
            break
        }
    return s >= 0 ? n.eq(s).click() : $(window).width() < 769 ? n.first().click() : void 0
}),
 window.Nav = function() {
    function e(e) {
        this.pause = !1, this.toggleHidden = !1, this.win = e.win, this.nav = e.nav, this.top = e.top, this.content = e.content, this.toggler = e.toggler, this.toggler.on("click", function(e) {
            return function() {
                return e.toggleNav()
            }
        }(this)), this.win.on("scroll", function(e) {
            return function() {
                e.updatePosition()
            }
        }(this)).on("resize", function(e) {
            return function() {
                e.initialPosition()
            }
        }(this)), this.initialPosition(), this.updatePosition()
    }
    return e.prototype.initialPosition = function() {
        this.HH = this.top.height(), this.nav.css("top", this.HH)
    }, e.prototype.toggleNav = function() {
        this.content.toggleClass("overflow"), this.nav.toggleClass("active"), this.toggler.toggleClass("close")
    }, e.prototype.hide = function() {
        this.pause = !0, this.nav.fadeOut(300), this.toggler.fadeOut(300), this.toggleHidden = !0, setTimeout(function(e) {
            return function() {
                e.nav.removeClass("show"), e.nav.css("display", "block"), e.pause = !1, e.toggleHidden = !1
            }
        }(this), 2e3)
    }, e.prototype.updatePosition = function() {
        var e, t;
        t = this.win.scrollTop(), this.pause || (e = "", t > this.HH + 80 && (e = "hide", t > this.HH + 200 && (e += " hide-transition", t > this.HH + 300 && (e += " fixed", t > this.HH + 600 && (e += " show")))), this.nav.attr("class", e)), this.toggleHidden || (this.toggler.fadeIn(300), this.toggler.removeClass("close"))
    }, e
}(), window.Collapse = function() {
    function e(e) {
        this.nav = e.nav, this.togglePanel = e.togglePanel, this.togglePanel.on("click", function(e) {
            return function(t) {
                return e.toggle(t), !1
            }
        }(this))
    }
    return e.prototype.toggle = function(e) {
        var t, n;
        t = $(e.target).parents(".collapsible").first(), t.toggleClass("active"), n = t.offset().top, $("html,body").animate({
            scrollTop: n
        }, 500), t.hasClass("active") && this.nav.hide()
    }, e
}(), window.Map = function() {
    function e(e) {
        this.win = e.win, this.top = e.top, this.mapMarker = e.mapMarker, this.isVisible = this.hideShow(), this.HH = this.top.height(), this.win.on("scroll", function(e) {
            return function() {
                e.isVisible = e.hideShow()
            }
        }(this)).on("resize", function(e) {
            return function() {
                e.HH = e.top.height()
            }
        }(this))
    }
    return e.prototype.hideShow = function() {
        var e, t;
        return t = this.win.scrollTop(), e = t > this.HH + 80 && t < this.HH + 2e3, this.isVisible !== e && this.mapMarker.toggleClass("active", e), e
    }, e
}(), $(function() {
    var e, t, n, i, o, r;
var videoID = ["_L4BXCJTAQE","epHifUZzqz4","4f5UX5HlYek","M1wq6Tt2IlU","Em2OfJ5Zzww"];
    var customPreviewImages = [
        "https://harshaenterprises.co/assets/images/1video.jpg",
        "https://harshaenterprises.co/assets/images/2video.jpg",
        "https://harshaenterprises.co/assets/images/3video.jpg",
        "https://harshaenterprises.co/assets/images/4video.jpg",
        "https://harshaenterprises.co/assets/images/5video.jpg"
    ];
    r = 0, n = $(window), t = $(".top"), e = $("#nav"), FastClick.attach(document.body), $("p").each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/, "&nbsp;$1"))
    }), i = function() {
        var e, i, o;
        o = n.width(), e = n.height(), r !== o && (i = "0.6", o > 500 && (i = "0.5", o > 768 ? (i = "0.6", 900 > e && (i = "0.8")) : 380 > e && (i = "0.9")), t.css({
            height: e * i,
            "max-height": e,
            "min-height": "200px"
        }), r = o)
    }, i(), n.resize(function() {
        return i()
    }), o = new Nav({
        win: n,
        nav: e,
        top: t,
        content: $(".container"),
        toggler: $(".nav-toggle, .nav-container")
    }), 
    page("index", "reservation") && (new Carousel({
        elms: $(".top-carousel div"),
        ctrls: $(".top .carousel-controler li"),
        autoRotate: !0
    }), new Collapse({
        nav: o,
        togglePanel: $(".toggle-panel")
    })), page("reservation", "news-events") && (window.confirmationPopup = new Popup({
        popup: $(".popup-bg"),
        title: $("#ptitle"),
        para: $("#ppara")
    })), page("products", "about") && $(".small-carousel-container").each(function() {
        return new Carousel({
            elms: $(this).find(".content-carousel"),
            ctrls: $(this).find(".carousel-controler li"),
            autoRotate: !1
        })
    }), page("contact") && new Map({
        win: n,
        top: t,
        mapMarker: $(".marker")
    }), page("products", "our-team") && new Collapse({
        nav: o,
        togglePanel: $(".toggle-panel")
    }),
     page("products") && $("#wedding-video").prettyEmbed({
        videoID: "jxnx1M9LfRM",
        customPreviewImage: "https://harshaenterprises.co/assets/images/video-weddings.jpg",
        showInfo: !1,
        showControls: !1,
        loop: !1,
        colorScheme: "dark",
        showRelated: !1,
        useFitVids: !0
     }), 
    page("training_videos") && $(".chef-video").prettyEmbed({
        videoID: videoID,//"M1wq6Tt2IlU",
        customPreviewImage: customPreviewImages,//"cdn.harshaenterprises.co/images/chef.jpg",
        showInfo: !1,
        showControls: !1,
        loop: !1,
        colorScheme: "dark",
        showRelated: !1,
        useFitVids: !0
     })
    page("food-philosophy") && $("#video-philosophy").prettyEmbed({
        videoID: "-OxA_W90Spo",
        customPreviewImage: "https://harshaenterprises.co/assets/images/philosophy.jpg",
        showInfo: !1,
        showControls: !1,
        loop: !1,
        colorScheme: "dark",
        showRelated: !1,
        useFitVids: !0
    })
}), $(function() {
    var e, t, n, i, o, r, a, s, l, c, u, d, p, f, h, m, g;
    a = !0, o = !1, i = {
        email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        phone: /^(?:.{8,})$/
    }, d = "input[type=text], input[type=tel], input[type=email], input[type=number]", e = function(e) {
        var t;
        switch (t = e.value, e.name) {
            case "email":
                return i.email.test(t);
            case "cm-irlhjku-irlhjku":
                return i.email.test(t);
            case "personal_phone":
                return i.phone.test(t);
            default:
                return "" !== t
        }
    }, f = function(e, t) {
        $(e.target).parent().toggleClass("focus", t), $("form").toggleClass("focus-form", t)
    }, g = function(t) {
        var n;
        t && (n = t.keyCode || t.which, 9 === n) || $(t.target).parent().toggleClass("valid-field", e(t.target))
    }, p = function(e, t) {
        $(e).parent().toggleClass("error", !t), t || (a = !1)
    }, s = function(e) {
        $(e).addClass("loading"), $.ajax({
            url: "reservation/",
            type: "POST",
            data: {
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
                full_name: $("#id_first_name").val() + " " + $("#id_last_name").val(),
                first_name: $("#id_first_name").val(),
                last_name: $("#id_last_name").val(),
                email_address: $("#id_email_address").val(),
                company: $("#id_company").val(),
                personal_phone: $("#id_personal_phone").val(),
                hotel_phone: $("#id_hotel_phone").val(),
                postcode: $("#id_postcode").val(),
                date: $("#id_date").val(),
                time: $("#id_time").val(),
                lunch_dinner: $("input[name=lunch_dinner]:checked").val(),
                num_people: $("#id_num_people").val(),
                special_requests: $("#id_special_requests").val(),
                optin: $("#id_optin").is(":checked")
            },
            success: function(e) {
                o = !1, n(e), ga("send", "event", "form", "submit", "reservation")
            },
            error: function() {
                o = !1, n({
                    title: "THERE WAS AN ERROR WITH OUR SERVER",
                    para: "Please try again later or call us."
                })
            }
        }), o = !1
    }, u = function(t) {
        var n;
        return t.preventDefault(), o ? void 0 : (o = !0, a = !0, n = document.getElementById("fieldEmail"), p(n, e(n)), a && l(!0, $("#subscribe_form").serialize()), o = a, !1)
    }, l = function(e, t) {
        return $("form").addClass("loading"), $.post("subscribe/index.html", t, function(t) {
            e && (200 === t.Status ? (o = !1, n({
                title: "Thanks for subscribing.",
                para: t.Message
            })) : (o = !1, n({
                title: "THERE WAS AN ERROR WITH OUR SERVER",
                para: t.Message
            })))
        }), !1
    }, n = function(e) {
        $("form").removeClass("loading"), window.confirmationPopup.show(e)
    }, c = function(t) {
        var n, i;
        return t.preventDefault(), o || (o = !0, a = !0, t.preventDefault(), $(d).each(function() {
            var t;
            "company" !== (t = this.name) && "special_requests" !== t && "hotel_phone" !== t && p(this, e(this))
        }), i = $("select").parent(), p(i, i.hasClass("valid-field")), a ? s(t.target) : (ga("send", "event", "form", "click", "reservation"), o = !1, n = $(".error").first().offset().top - 30, $(window).width() > 768 && (n -= 100), $("html,body").animate({
            scrollTop: n
        }, 500))), !1
    }, t = function(e, t, n) {
        var i, o;
        for (null == n && (n = []), i = o = e; t >= e ? t > o : o > t; i = t >= e ? ++o : --o) n.push("<option value='" + i + ":00'>" + i + ":00 PM</option>"), n.push("<option value='" + i + ":30'>" + i + ":30 PM</option>");
        return n
    }, m = function() {
        var e;
        e = $("#id_time"), e.html("lunch" === $(this).val() ? t(12, 14) : t(18, 22)), e.selectOrDie("destroy"), r("id_time")
    }, r = function(e) {
        $("#" + e).selectOrDie({
            placeholder: "Select",
            onChange: function() {
                $(this).parent().addClass("valid-field"), $(this).parent().parent().removeClass("error"), "id_time" === e && h(this.value)
            }
        })
    }, h = function(e) {
        var t;
        t = parseInt(e.substring(0, 2)) > 14 ? "dinner" : "lunch", $("input[name=lunch_dinner]").filter("[value=" + t + "]").attr("checked", !0)
    }, r("id_time"), r("id_num_people"), $("#id_date").pickadate({
        editable: !1,
        today: "",
        clear: "",
        onSet: function() {
            var e, n;
            return window.l = this, n = this.get("select", "ddd"), "Mon" === n || "Tue" === n || "Wed" === n ? ("lunch" === $("input[name=lunch_dinner]:radio").val() && (e = $("#id_time"), e.html(t(18, 22)), e.selectOrDie("destroy"), r("id_time")), $("#lunch").prop("disabled", !0), $("input[name=lunch_dinner]").filter("[value=dinner]").attr("checked", !0)) : $("#lunch").prop("disabled", !1)
        }
    }), $("input[name=lunch_dinner]:radio").click(m), $("#reservation_form").submit(c), $("#subscribe_form").submit(u), $(".floatlabel-wrapper").find(d).focus(!0, f).blur(!1, f).on("keyup blur change", g)
});