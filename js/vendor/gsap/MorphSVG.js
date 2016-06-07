var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e = Math.PI / 180
      , t = 180 / Math.PI
      , n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , r = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , i = /[achlmqstvz]/gi
      , s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
      , o = _gsScope._gsDefine.globals.TweenLite
      , u = function(e) {
        window.console && 0
    }
      , a = function(t, n) {
        var r, i, s, o, u, a, f = Math.ceil(Math.abs(n) / 90), l = 0, c = [];
        for (t *= e,
        n *= e,
        r = n / f,
        i = 4 / 3 * Math.sin(r / 2) / (1 + Math.cos(r / 2)),
        a = 0; f > a; a++)
            s = t + a * r,
            o = Math.cos(s),
            u = Math.sin(s),
            c[l++] = o - i * u,
            c[l++] = u + i * o,
            s += r,
            o = Math.cos(s),
            u = Math.sin(s),
            c[l++] = o + i * u,
            c[l++] = u - i * o,
            c[l++] = o,
            c[l++] = u;
        return c
    }
      , f = function(n, r, i, s, o, u, f, l, c) {
        if (n !== l || r !== c) {
            i = Math.abs(i),
            s = Math.abs(s);
            var h = o % 360 * e
              , p = Math.cos(h)
              , d = Math.sin(h)
              , v = (n - l) / 2
              , m = (r - c) / 2
              , g = p * v + d * m
              , y = -d * v + p * m
              , b = i * i
              , w = s * s
              , E = g * g
              , S = y * y
              , x = E / b + S / w;
            x > 1 && (i = Math.sqrt(x) * i,
            s = Math.sqrt(x) * s,
            b = i * i,
            w = s * s);
            var T = u === f ? -1 : 1
              , N = (b * w - b * S - w * E) / (b * S + w * E);
            0 > N && (N = 0);
            var C = T * Math.sqrt(N)
              , k = C * (i * y / s)
              , L = C * -(s * g / i)
              , A = (n + l) / 2
              , O = (r + c) / 2
              , M = A + (p * k - d * L)
              , _ = O + (d * k + p * L)
              , D = (g - k) / i
              , P = (y - L) / s
              , H = (-g - k) / i
              , B = (-y - L) / s
              , j = Math.sqrt(D * D + P * P)
              , F = D;
            T = 0 > P ? -1 : 1;
            var I = T * Math.acos(F / j) * t;
            j = Math.sqrt((D * D + P * P) * (H * H + B * B)),
            F = D * H + P * B,
            T = 0 > D * B - P * H ? -1 : 1;
            var q = T * Math.acos(F / j) * t;
            !f && q > 0 ? q -= 360 : f && 0 > q && (q += 360),
            q %= 360,
            I %= 360;
            var R, U, z, W = a(I, q), X = p * i, V = d * i, $ = d * -s, J = p * s, K = W.length - 2;
            for (R = 0; K > R; R += 2)
                U = W[R],
                z = W[R + 1],
                W[R] = U * X + z * $ + M,
                W[R + 1] = U * V + z * J + _;
            return W[W.length - 2] = l,
            W[W.length - 1] = c,
            W
        }
    }
      , l = function(e) {
        var t, r, i, o, a, l, c, h, p, d, v, m, g, y = (e + "").replace(s, function(e) {
            var t = +e;
            return 1e-4 > t && t > -0.0001 ? 0 : t
        }).match(n) || [], b = [], w = 0, E = 0, S = y.length, x = 2, T = 0;
        if (!e || !isNaN(y[0]) || isNaN(y[1]))
            return u("ERROR: malformed path data: " + e),
            b;
        for (t = 0; S > t; t++)
            if (g = a,
            isNaN(y[t]) ? (a = y[t].toUpperCase(),
            l = a !== y[t]) : t--,
            i = +y[t + 1],
            o = +y[t + 2],
            l && (i += w,
            o += E),
            0 === t && (h = i,
            p = o),
            "M" === a)
                c && c.length < 8 && (b.length -= 1,
                x = 0),
                w = h = i,
                E = p = o,
                c = [i, o],
                T += x,
                x = 2,
                b.push(c),
                t += 2,
                a = "L";
            else if ("C" === a)
                c || (c = [0, 0]),
                c[x++] = i,
                c[x++] = o,
                l || (w = E = 0),
                c[x++] = w + 1 * y[t + 3],
                c[x++] = E + 1 * y[t + 4],
                c[x++] = w += 1 * y[t + 5],
                c[x++] = E += 1 * y[t + 6],
                t += 6;
            else if ("S" === a)
                "C" === g || "S" === g ? (d = w - c[x - 4],
                v = E - c[x - 3],
                c[x++] = w + d,
                c[x++] = E + v) : (c[x++] = w,
                c[x++] = E),
                c[x++] = i,
                c[x++] = o,
                l || (w = E = 0),
                c[x++] = w += 1 * y[t + 3],
                c[x++] = E += 1 * y[t + 4],
                t += 4;
            else if ("Q" === a)
                d = i - w,
                v = o - E,
                c[x++] = w + 2 * d / 3,
                c[x++] = E + 2 * v / 3,
                l || (w = E = 0),
                w += 1 * y[t + 3],
                E += 1 * y[t + 4],
                d = i - w,
                v = o - E,
                c[x++] = w + 2 * d / 3,
                c[x++] = E + 2 * v / 3,
                c[x++] = w,
                c[x++] = E,
                t += 4;
            else if ("T" === a)
                d = w - c[x - 4],
                v = E - c[x - 3],
                c[x++] = w + d,
                c[x++] = E + v,
                d = w + 1.5 * d - i,
                v = E + 1.5 * v - o,
                c[x++] = i + 2 * d / 3,
                c[x++] = o + 2 * v / 3,
                c[x++] = w = i,
                c[x++] = E = o,
                t += 2;
            else if ("H" === a)
                o = E,
                c[x++] = w + (i - w) / 3,
                c[x++] = E + (o - E) / 3,
                c[x++] = w + 2 * (i - w) / 3,
                c[x++] = E + 2 * (o - E) / 3,
                c[x++] = w = i,
                c[x++] = o,
                t += 1;
            else if ("V" === a)
                o = i,
                i = w,
                l && (o += E - w),
                c[x++] = i,
                c[x++] = E + (o - E) / 3,
                c[x++] = i,
                c[x++] = E + 2 * (o - E) / 3,
                c[x++] = i,
                c[x++] = E = o,
                t += 1;
            else if ("L" === a || "Z" === a)
                "Z" === a && (i = h,
                o = p,
                c.closed = !0),
                ("L" === a || Math.abs(w - i) > .5 || Math.abs(E - o) > .5) && (c[x++] = w + (i - w) / 3,
                c[x++] = E + (o - E) / 3,
                c[x++] = w + 2 * (i - w) / 3,
                c[x++] = E + 2 * (o - E) / 3,
                c[x++] = i,
                c[x++] = o,
                "L" === a && (t += 2)),
                w = i,
                E = o;
            else if ("A" === a) {
                for (m = f(w, E, 1 * y[t + 1], 1 * y[t + 2], 1 * y[t + 3], 1 * y[t + 4], 1 * y[t + 5], (l ? w : 0) + 1 * y[t + 6], (l ? E : 0) + 1 * y[t + 7]),
                r = 0; r < m.length; r++)
                    c[x++] = m[r];
                w = c[x - 2],
                E = c[x - 1],
                t += 7
            } else
                u("Error: malformed path data: " + e);
        return b.totalPoints = T + x,
        b
    }
      , c = function(e, t) {
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m = 0, g = .999999, y = e.length, b = t / ((y - 2) / 6);
        for (d = 2; y > d; d += 6)
            for (m += b; m > g; )
                n = e[d - 2],
                r = e[d - 1],
                i = e[d],
                s = e[d + 1],
                o = e[d + 2],
                u = e[d + 3],
                a = e[d + 4],
                f = e[d + 5],
                v = 1 / (Math.floor(m) + 1),
                l = n + (i - n) * v,
                h = i + (o - i) * v,
                l += (h - l) * v,
                h += (o + (a - o) * v - h) * v,
                c = r + (s - r) * v,
                p = s + (u - s) * v,
                c += (p - c) * v,
                p += (u + (f - u) * v - p) * v,
                e.splice(d, 4, n + (i - n) * v, r + (s - r) * v, l, c, l + (h - l) * v, c + (p - c) * v, h, p, o + (a - o) * v, u + (f - u) * v),
                d += 6,
                y += 6,
                m--;
        return e
    }
      , h = function(e) {
        var t, n, r, i, s = "", o = e.length, u = 100;
        for (n = 0; o > n; n++) {
            for (i = e[n],
            s += "M" + i[0] + "," + i[1] + " C",
            t = i.length,
            r = 2; t > r; r++)
                s += (i[r++] * u | 0) / u + "," + (i[r++] * u | 0) / u + " " + (i[r++] * u | 0) / u + "," + (i[r++] * u | 0) / u + " " + (i[r++] * u | 0) / u + "," + (i[r] * u | 0) / u + " ";
            i.closed && (s += "z")
        }
        return s
    }
      , p = function(e) {
        for (var t = [], n = e.length - 1, r = 0; --n > -1; )
            t[r++] = e[n],
            t[r++] = e[n + 1],
            n--;
        for (n = 0; r > n; n++)
            e[n] = t[n];
        e.reversed = e.reversed ? !1 : !0
    }
      , d = function(e) {
        var t, n = e.length, r = 0, i = 0;
        for (t = 0; n > t; t++)
            r += e[t++],
            i += e[t];
        return [r / (n / 2), i / (n / 2)]
    }
      , v = function(e) {
        var t, n, r, i = e.length, s = e[0], o = s, u = e[1], a = u;
        for (r = 6; i > r; r += 6)
            t = e[r],
            n = e[r + 1],
            t > s ? s = t : o > t && (o = t),
            n > u ? u = n : a > n && (a = n);
        return e.centerX = (s + o) / 2,
        e.centerY = (u + a) / 2,
        e.size = (s - o) * (u - a)
    }
      , m = function(e) {
        for (var t, n, r, i, s, o = e.length, u = e[0][0], a = u, f = e[0][1], l = f; --o > -1; )
            for (s = e[o],
            t = s.length,
            i = 6; t > i; i += 6)
                n = s[i],
                r = s[i + 1],
                n > u ? u = n : a > n && (a = n),
                r > f ? f = r : l > r && (l = r);
        return e.centerX = (u + a) / 2,
        e.centerY = (f + l) / 2,
        e.size = (u - a) * (f - l)
    }
      , g = function(e, t) {
        return t.length - e.length
    }
      , y = function(e, t) {
        var n = e.size || v(e)
          , r = t.size || v(t);
        return Math.abs(r - n) < (n + r) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : r - n
    }
      , b = function(e, t) {
        var n, r, i = e.slice(0), s = e.length, o = s - 2;
        for (t = 0 | t,
        n = 0; s > n; n++)
            r = (n + t) % o,
            e[n++] = i[r],
            e[n] = i[r + 1]
    }
      , w = function(e, t, n, r, i) {
        var s, o, u, a, f = e.length, l = 0, c = f - 2;
        for (n *= 6,
        o = 0; f > o; o += 6)
            s = (o + n) % c,
            a = e[s] - (t[o] - r),
            u = e[s + 1] - (t[o + 1] - i),
            l += Math.sqrt(u * u + a * a);
        return l
    }
      , E = function(e, t, n) {
        var r, i, s, o = e.length, u = d(e), a = d(t), f = a[0] - u[0], l = a[1] - u[1], c = w(e, t, 0, f, l), h = 0;
        for (s = 6; o > s; s += 6)
            i = w(e, t, s / 6, f, l),
            c > i && (c = i,
            h = s);
        if (n)
            for (r = e.slice(0),
            p(r),
            s = 6; o > s; s += 6)
                i = w(r, t, s / 6, f, l),
                c > i && (c = i,
                h = -s);
        return h / 6
    }
      , S = function(e, t, n) {
        for (var r, i, s, o, u, a, f = e.length, l = 99999999999, c = 0, h = 0; --f > -1; )
            for (r = e[f],
            a = r.length,
            u = 0; a > u; u += 6)
                i = r[u] - t,
                s = r[u + 1] - n,
                o = Math.sqrt(i * i + s * s),
                l > o && (l = o,
                c = r[u],
                h = r[u + 1]);
        return [c, h]
    }
      , x = function(e, t, n, r, i, s) {
        var o, u, a, f, l, c = t.length, h = 0, p = Math.min(e.size || v(e), t[n].size || v(t[n])) * r, d = 999999999999, m = e.centerX + i, g = e.centerY + s;
        for (u = n; c > u && (o = t[u].size || v(t[u]),
        !(p > o)); u++)
            a = t[u].centerX - m,
            f = t[u].centerY - g,
            l = Math.sqrt(a * a + f * f),
            d > l && (h = u,
            d = l);
        return l = t[h],
        t.splice(h, 1),
        l
    }
      , T = function(e, t, n, r) {
        var i, s, o, a, f, l, h, d = t.length - e.length, w = d > 0 ? t : e, T = d > 0 ? e : t, N = 0, C = "complexity" === r ? g : y, k = "position" === r ? 0 : "number" == typeof r ? r : .8, L = T.length, A = "object" == typeof n && n.push ? n.slice(0) : [n], O = "reverse" === A[0] || A[0] < 0, M = "log" === n;
        if (T[0]) {
            if (w.length > 1 && (e.sort(C),
            t.sort(C),
            l = w.size || m(w),
            l = T.size || m(T),
            l = w.centerX - T.centerX,
            h = w.centerY - T.centerY,
            C === y))
                for (L = 0; L < T.length; L++)
                    w.splice(L, 0, x(T[L], w, L, k, l, h));
            if (d)
                for (0 > d && (d = -d),
                w[0].length > T[0].length && c(T[0], (w[0].length - T[0].length) / 6 | 0),
                L = T.length; d > N; )
                    a = w[L].size || v(w[L]),
                    o = S(T, w[L].centerX, w[L].centerY),
                    a = o[0],
                    f = o[1],
                    T[L++] = [a, f, a, f, a, f, a, f],
                    T.totalPoints += 8,
                    N++;
            for (L = 0; L < e.length; L++)
                i = t[L],
                s = e[L],
                d = i.length - s.length,
                0 > d ? c(i, -d / 6 | 0) : d > 0 && c(s, d / 6 | 0),
                O && !s.reversed && p(s),
                n = A[L] || 0 === A[L] ? A[L] : "auto",
                n && (s.closed || Math.abs(s[0] - s[s.length - 2]) < .5 && Math.abs(s[1] - s[s.length - 1]) < .5 ? "auto" === n || "log" === n ? (A[L] = n = E(s, i, 0 === L),
                0 > n && (O = !0,
                p(s),
                n = -n),
                b(s, 6 * n)) : "reverse" !== n && (L && 0 > n && p(s),
                b(s, 6 * (0 > n ? -n : n))) : !O && ("auto" === n && Math.abs(i[0] - s[0]) + Math.abs(i[1] - s[1]) + Math.abs(i[i.length - 2] - s[s.length - 2]) + Math.abs(i[i.length - 1] - s[s.length - 1]) > Math.abs(i[0] - s[s.length - 2]) + Math.abs(i[1] - s[s.length - 1]) + Math.abs(i[i.length - 2] - s[0]) + Math.abs(i[i.length - 1] - s[1]) || n % 2) ? (p(s),
                A[L] = -1,
                O = !0) : "auto" === n ? A[L] = 0 : "reverse" === n && (A[L] = -1),
                s.closed !== i.closed && (s.closed = i.closed = !1));
            return M && u("shapeIndex:[" + A.join(",") + "]"),
            A
        }
    }
      , N = function(e, t, n, r) {
        var i = l(e[0])
          , s = l(e[1]);
        T(i, s, t || 0 === t ? t : "auto", n) && (e[0] = h(i),
        e[1] = h(s),
        ("log" === r || r === !0) && u('precompile:["' + e[0] + '","' + e[1] + '"]'))
    }
      , C = function(e, t, n) {
        return t || n || e || 0 === e ? function(r) {
            N(r, e, t, n)
        }
         : N
    }
      , k = function(e, t) {
        if (!t)
            return e;
        var n, i, s, o = e.match(r) || [], u = o.length, a = "";
        for ("reverse" === t ? (i = u - 1,
        n = -2) : (i = (2 * (parseInt(t, 10) || 0) + 1 + 100 * u) % u,
        n = 2),
        s = 0; u > s; s += 2)
            a += o[i - 1] + "," + o[i] + " ",
            i = (i + n) % u;
        return a
    }
      , L = function(e, t) {
        var n, r, i, s, o, u, a, f = 0, l = parseFloat(e[0]), c = parseFloat(e[1]), h = l + "," + c + " ", p = .999999;
        for (i = e.length,
        n = .5 * t / (.5 * i - 1),
        r = 0; i - 2 > r; r += 2) {
            if (f += n,
            u = parseFloat(e[r + 2]),
            a = parseFloat(e[r + 3]),
            f > p)
                for (o = 1 / (Math.floor(f) + 1),
                s = 1; f > p; )
                    h += (l + (u - l) * o * s).toFixed(2) + "," + (c + (a - c) * o * s).toFixed(2) + " ",
                    f--,
                    s++;
            h += u + "," + a + " ",
            l = u,
            c = a
        }
        return h
    }
      , A = function(e) {
        var t = e[0].match(r) || []
          , n = e[1].match(r) || []
          , i = n.length - t.length;
        i > 0 ? e[0] = L(t, i) : e[1] = L(n, -i)
    }
      , O = function(e) {
        return isNaN(e) ? A : function(t) {
            A(t),
            t[1] = k(t[1], parseInt(e, 10))
        }
    }
      , M = function(e, t) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", "path")
          , r = Array.prototype.slice.call(e.attributes)
          , i = r.length;
        for (t = "," + t + ","; --i > -1; )
            -1 === t.indexOf("," + r[i].nodeName + ",") && n.setAttributeNS(null , r[i].nodeName, r[i].nodeValue);
        return n
    }
      , _ = function(e, t) {
        var n, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T = e.tagName.toLowerCase(), N = .552284749831;
        return "path" !== T && e.getBBox ? (a = M(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
        "rect" === T ? (o = +e.getAttribute("rx") || 0,
        u = +e.getAttribute("ry") || 0,
        i = +e.getAttribute("x") || 0,
        s = +e.getAttribute("y") || 0,
        h = (+e.getAttribute("width") || 0) - 2 * o,
        p = (+e.getAttribute("height") || 0) - 2 * u,
        o || u ? (d = i + o * (1 - N),
        v = i + o,
        m = v + h,
        g = m + o * N,
        y = m + o,
        b = s + u * (1 - N),
        w = s + u,
        E = w + p,
        S = E + u * N,
        x = E + u,
        n = "M" + y + "," + w + " V" + E + " C" + [y, S, g, x, m, x, m - (m - v) / 3, x, v + (m - v) / 3, x, v, x, d, x, i, S, i, E, i, E - (E - w) / 3, i, w + (E - w) / 3, i, w, i, b, d, s, v, s, v + (m - v) / 3, s, m - (m - v) / 3, s, m, s, g, s, y, b, y, w].join(",") + "z") : n = "M" + (i + h) + "," + s + " v" + p + " h" + -h + " v" + -p + " h" + h + "z") : "circle" === T || "ellipse" === T ? ("circle" === T ? (o = u = +e.getAttribute("r") || 0,
        l = o * N) : (o = +e.getAttribute("rx") || 0,
        u = +e.getAttribute("ry") || 0,
        l = u * N),
        i = +e.getAttribute("cx") || 0,
        s = +e.getAttribute("cy") || 0,
        f = o * N,
        n = "M" + (i + o) + "," + s + " C" + [i + o, s + l, i + f, s + u, i, s + u, i - f, s + u, i - o, s + l, i - o, s, i - o, s - l, i - f, s - u, i, s - u, i + f, s - u, i + o, s - l, i + o, s].join(",") + "z") : "line" === T ? n = "M" + e.getAttribute("x1") + "," + e.getAttribute("y1") + " L" + e.getAttribute("x2") + "," + e.getAttribute("y2") : ("polyline" === T || "polygon" === T) && (c = (e.getAttribute("points") + "").match(r) || [],
        i = c.shift(),
        s = c.shift(),
        n = "M" + i + "," + s + " L" + c.join(","),
        "polygon" === T && (n += "," + i + "," + s + "z")),
        a.setAttribute("d", n),
        t && e.parentNode && (e.parentNode.insertBefore(a, e),
        e.parentNode.removeChild(e)),
        a) : e
    }
      , D = function(e, t, n) {
        var i, s, a = "string" == typeof e;
        return (!a || (e.match(r) || []).length < 3) && (i = a ? o.selector(e) : e && e[0] ? e : [e],
        i && i[0] ? (i = i[0],
        s = i.nodeName.toUpperCase(),
        t && "PATH" !== s && (i = _(i, !1),
        s = "PATH"),
        e = i.getAttribute("PATH" === s ? "d" : "points") || "",
        i === n && (e = i.getAttributeNS(null , "data-original") || e)) : (u("WARNING: invalid morph to: " + e),
        e = !1)),
        e
    }
      , P = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing."
      , H = _gsScope._gsDefine.plugin({
        propName: "morphSVG",
        API: 2,
        global: !0,
        version: "0.8.4",
        init: function(e, t, n) {
            var r, s, o, a, f;
            return "function" != typeof e.setAttribute ? !1 : (r = e.nodeName.toUpperCase(),
            f = "POLYLINE" === r || "POLYGON" === r,
            "PATH" === r || f ? (s = "PATH" === r ? "d" : "points",
            ("string" == typeof t || t.getBBox || t[0]) && (t = {
                shape: t
            }),
            a = D(t.shape || t.d || t.points || "", "d" === s, e),
            f && i.test(a) ? (u("WARNING: a <" + r + "> cannot accept path data. " + P),
            !1) : (a && (this._target = e,
            e.getAttributeNS(null , "data-original") || e.setAttributeNS(null , "data-original", e.getAttribute(s)),
            o = this._addTween(e, "setAttribute", e.getAttribute(s) + "", a + "", "morphSVG", !1, s, "object" == typeof t.precompile ? function(e) {
                e[0] = t.precompile[0],
                e[1] = t.precompile[1]
            }
             : "d" === s ? C(t.shapeIndex, t.map || H.defaultMap, t.precompile) : O(t.shapeIndex)),
            o && (this._overwriteProps.push("morphSVG"),
            o.end = a,
            o.endProp = s)),
            !0)) : (u("WARNING: cannot morph a <" + r + "> SVG element. " + P),
            !1))
        },
        set: function(e) {
            var t;
            if (this._super.setRatio.call(this, e),
            1 === e)
                for (t = this._firstPT; t; )
                    t.end && this._target.setAttribute(t.endProp, t.end),
                    t = t._next
        }
    });
    H.pathFilter = N,
    H.pointsFilter = A,
    H.subdivideRawBezier = c,
    H.defaultMap = "size",
    H.pathDataToRawBezier = function(e) {
        return l(D(e, !0))
    }
    ,
    H.equalizeSegmentQuantity = T,
    H.convertToPath = function(e, t) {
        "string" == typeof e && (e = o.selector(e));
        for (var n = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], r = n.length; --r > -1; )
            n[r] = _(n[r], t !== !1);
        return n
    }
    ,
    H.pathDataToBezier = function(e, t) {
        var n, r, i, s, u, a, f, c, h = l(D(e, !0))[0] || [], p = 0;
        if (t = t || {},
        c = t.align || t.relative,
        s = t.matrix || [1, 0, 0, 1, 0, 0],
        u = t.offsetX || 0,
        a = t.offsetY || 0,
        "relative" === c || c === !0 ? (u -= h[0] * s[0] + h[1] * s[2],
        a -= h[0] * s[1] + h[1] * s[3],
        p = "+=") : (u += s[4],
        a += s[5],
        c && (c = "string" == typeof c ? o.selector(c) : c && c[0] ? c : [c],
        c && c[0] && (f = c[0].getBBox() || {
            x: 0,
            y: 0
        },
        u -= f.x,
        a -= f.y))),
        n = [],
        i = h.length,
        s)
            for (r = 0; i > r; r += 2)
                n.push({
                    x: p + (h[r] * s[0] + h[r + 1] * s[2] + u),
                    y: p + (h[r] * s[1] + h[r + 1] * s[3] + a)
                });
        else
            for (r = 0; i > r; r += 2)
                n.push({
                    x: p + (h[r] + u),
                    y: p + (h[r + 1] + a)
                });
        return n
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
define("morphsvgplugin", ["tweenmax"], function() {});