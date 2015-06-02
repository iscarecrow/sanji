function n(t) {
    this.pages = t.pages, this.length = this.pages.length, this.length <= 1 || (this.toggleClass = t.toggleClass || "current", this.swipe = t.swipe ? t.swipe.toUpperCase() : "Y", this.animateFn = t.animateFn || "ease-in-out", this.speed = t.speed ? t.speed / 1e3 : .5, this.control = t.control || !1, this.controlClass = t.controlClass || "page-control", this.bubble = t.bubble || !1, this.preLoad = t.preLoad || !1, this.loading = t.loading, this.onComplete = t.onComplete ||
        function() {}, this.onBefore = t.onBefore ||
        function() {}, this.index = 0, this.curPage = this.pages[this.index], this.wraper = this.curPage.parentNode, this.width = document.documentElement.clientWidth, this.height = document.documentElement.clientHeight, this.flag = null, this._swipe = "up", this.controls = null, this._init())
}
var r = {
    addClass: function(t, e) {
        var n = new RegExp("(^| )" + e + "( |$)");
        n.test(t.className) || (t.className = t.className.split(/\s+/).concat(e).join(" "))
    },
    removeClass: function(t, e) {
        var n = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
        t.className = t.className.replace(n, "")
    }
};
n.prototype = {
    _init: function() {
        var t = this;
        this.wraper.style.webkitTransition = "-webkit-transform " + this.speed + "s " + this.animateFn;
        for (var e = 0; e < this.length; e++) "X" === this.swipe && (this.pages[e].style["float"] = "left");
        this.control && this._control(), this.resizeSet(), window.addEventListener("resize", function() {
            t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight, t.resizeSet()
        }, !1), this.wraper.addEventListener("touchstart", function(e) {
            t._startHandle(e)
        }, !1), this.wraper.addEventListener("touchmove", function(e) {
            t._moveHandle(e)
        }, !1), this.wraper.addEventListener("touchend", function(e) {
            t._endHandle(e)
        }, !1), this.run(this.index)
    },
    _control: function() {
        for (var t = this.wraper.parentNode, e = document.createElement("div"), n = "", r = 0; r < this.length; r++) n += "<span>" + (r + 1) + "</span>";
        e.innerHTML = n, e.className = this.controlClass, e.style.zIndex = 9999, t.appendChild(e), this.controls = t.getElementsByTagName("span")
    },
    _startHandle: function(t) {
        var e = t.touches[0];
        this.bubble && t.stopPropagation(), this.startX = e.clientX, this.startY = e.clientY
    },
    _moveHandle: function(t) {
        t.preventDefault()
    },
    _endHandle: function(t) {
        var e = t.changedTouches[0],
            n = e.clientX - this.startX,
            r = e.clientY - this.startY;
        this.flag = Math.abs(n) > Math.abs(r) ? "X" : "Y", this.flag === this.swipe && ("X" === this.swipe ? n > 20 ? this.prev() : -20 > n && this.next() : "Y" === this.swipe && (r > 20 ? this.prev() : -20 > r && this.next()))
    },
    prev: function() {
        this.run(this.index - 1)
    },
    next: function() {
        this.run(this.index + 1)
    },
    run: function(t) {
        var e;
        if (!(t >= this.length || 0 > t)) {
            this.onBefore && this.onBefore.call(this), "X" === this.swipe ? (e = -this.width * t + "px", this.wraper.style.webkitTransform = "translate(" + e + ", 0)") : "Y" === this.swipe && (e = -this.height * t + "px", this.wraper.style.webkitTransform = "translate(0, " + e + ")"), this._toggleClassFn(this.pages, this.index, t), this.control && this._toggleClassFn(this.controls, this.index, t), this.index = t, this.onComplete && this.onComplete.call(this);
            var n = this.pages[this.index];
            this.preLoad && n && !n.parsed && this._preLoadFn(n)
        }
    },
    _toggleClassFn: function(t, e, n) {
        var i = t[e],
            o = t[n],
            a = this;
        setTimeout(function() {
            i && r.removeClass(i, a.toggleClass), o && r.addClass(o, a.toggleClass)
        }, 500)
    },
    _preLoadFn: function(t) {
        var e = t.getElementsByTagName("textarea")[0];
        e && (t.innerHTML = e.value, t.parsed = !0)
    },
    resizeSet: function() {
        "X" === this.swipe && (this.wraper.style.width = this.width * this.length + "px", this.wraper.style.height = this.height + "px"), "Y" === this.swipe && (this.wraper.style.width = this.width + "px", this.wraper.style.height = this.height * this.length + "px");
        for (var t = 0; t < this.length; t++) this.pages[t].style.width = this.width + "px", this.pages[t].style.height = this.height + "px";
        this.run(this.index)
    }
}

var test = new n;
