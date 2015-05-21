/*
@说明：产品级公用js文件，产品级公用js 方法
@作者：hugin
@时间：2015-01-09
*/

define(["jquery"], function($){

  $.G = {
    /*
    @说明： trc打点
    */
    gaq: function(trc) {
      // 新增堆糖内部打点 kibana
      new Image().src = "http://da.dtxn.net/da.gif?url=" + window.location.hostname + window.location.pathname + "&kibana=" + trc;
      typeof _gaq != "undefined" && _gaq && _gaq.push(['_trackPageview', trc]);
      console.log(trc);
    },
    /*
    @说明： 是否在堆糖内打开
    */
    isDuiTang: function() {
      var ua, r;
      ua = navigator.userAgent.toString().toLowerCase();
      r = /(duitang)/ig;
      return r.test(ua) ? true : false;
    },
    /*
    @说明： 是否在微信内打开
    */
    isWeiXin: function() {
      var ua, r;
      ua = navigator.userAgent.toString().toLowerCase();
      r = /(micromessenger)/ig;
      return r.test(ua) ? true : false;
    },
    testUa: function(r) {
      var ua = navigator.userAgent.toString().toLowerCase();
      return r.test(ua) ? true : false;
    },
    /*
    @说明：堆糖缩略图转换
    @参数：
    url      - (Str) 待处理的url地址
    t        - (Num) 转换类型  默认0-返回原图  1-返回缩略图
    w        - (Num) 返回缩略图的宽
    h        - (Num) 返回缩略图的高
    c        - (Bool) 是否截取正方形 a-左边截图  b-右边截图 c-中间截图
    */
    dtImageTrans: function(url, t, w, h, c) {
      var pathn = $.trim(url).replace(/^http(s)?:\/\//ig, ''),
        pathn = pathn.split('/'),
        domain = pathn[0],
        pathn = pathn[1];

      // 只有堆糖域名下 uploads misc 目录下的图片可以缩略
      if (domain.indexOf('duitang.com') == -1 || !pathn || pathn != 'uploads' && pathn != 'misc') {
        return url;
      }
      if (t) {
        w = w || 0;
        h = h || 0;
        c = c ? '_' + c : ''
        return $.G.dtImageTrans(url).replace(/(\.[a-z_]+)$/ig, '.thumb.' + w + '_' + h + c + '$1')
      } else {
        return url.replace(/(?:\.thumb\.\w+|\.[a-z]+!\w+)(\.[a-z_]+)$/ig, '$1')
      }
    },


    /*
    描述：仿iOS弹出屏幕居中的错误提示框
    参数：
    msg        - (Str) 提示文案
    */
    popupMsg: function(msg) {
      var $w = $(window);

      var $popmask = $('#pop-center-mask')
      if (!$popmask.length) {
        $popmask = $('<div id="pop-center-mask"></div>');
        $popmask.css({
          "visibility": "hidden",
          "position": "absolute",
          "top": 0,
          "left": 0,
          "width": "100%",
          "height": "1000%",
          "background-color": "#000"
        })

        $('body').append($popmask);
      }


      var $pop = $('#pop-center-msg');
      if (!$pop.length) {
        $pop = $('<div id="pop-center-msg"></div>');
        $pop.css({
          "visibility": "hidden",
          "position": "absolute",
          "margin": "0 30px",
          "padding": "30px 40px",
          "background-color": "#000",
          "border-radius": "8px",
          "color": "#fff",
          "text-align": "center",
          "font-size": "0.875em"
        })
        $('body').append($pop);
      }


      $pop.css({
          "display": "block",
          "width": "auto",
          "height": "auto",
          "visibility": "hidden"
        })
        .text(msg)

      var pdleft = $.G.getNum($pop.css('padding-left')),
        pdright = $.G.getNum($pop.css('padding-right')),
        contwd = $pop.width(),
        contht = $pop.height(),
        ww = $w.width(),
        wh = $w.height();

      $popmask.css({
        "display": "block",
        "visibility": "visible",
        "opacity": "0"
      })

      $pop.css({
        "visibility": "visible",
        "width": contwd - pdleft - pdright,
        "left": (ww - contwd) / 2,
        "top": (wh - contht) / 2 - 30,
        "margin": 0
      })
      $pop.fadeIn();
    },

    /*
    描述：关闭 仿iOS弹出屏幕居中的错误提示框
    */
    popupClose: function(msg) {
      var $tg = $('#pop-center-msg,#pop-center-mask');
      $tg.fadeOut(function() {
        $tg.css('display', 'none')
      });
    },

    /*
    描述：取出字符串中第一次出现的正数，可含小数点
    参数：
    str        - (Str) 待处理字符串
    */
    getNum: function(str) {
      return str ? +str.replace(/^[^\d]*(\d+\.?\d*).*/, "$1") || 0 : 0;
    },
    /*
    描述：解析url search字符串，删除其中的某一个参数
    */
    removeParam: function(url, pnm) {
      var reg1 = new RegExp('\\?' + pnm + '(=[^&]*)?'),
        reg2 = new RegExp('\\&' + pnm + '(=[^&]*)?');

      return url.replace(reg1, '?').replace(reg2, '').replace(/\?&/, '?').replace(/\?$/, '')
    },
    /*
    描述：解析url search字符串，返回参数的 json 对象
    */
    getParams: function(url) {
      var opts = {},
        name, value, i,
        url = url.split('#')[0],
        idx = url.indexOf('?'),
        search = idx > -1 ? url.substr(idx + 1) : '',
        arrtmp = search.split('&');
      for (i = 0, len = arrtmp.length; i < len; i++) {
        var paramCount = arrtmp[i].indexOf('=');
        if (paramCount > 0) {
          name = arrtmp[i].substring(0, paramCount);
          value = arrtmp[i].substr(paramCount + 1);
          try {
            if (value.indexOf('+') > -1) {
              value = value.replace(/\+/g, ' ')
            }
            opts[name] = decodeURIComponent(value);
          } catch (exp) {}
        }
      }
      return opts;
    }
  }
  
});
