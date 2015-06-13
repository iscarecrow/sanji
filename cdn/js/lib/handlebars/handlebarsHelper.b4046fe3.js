  // Handlebars.registerHelper('fullName', function(person) {
  //   return person.firstName + "" + person.lastName;
  // })
  
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
  switch (operator) {
    case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '!=':
        return (v1 != v2) ? options.fn(this) : options.inverse(this);
    case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
        return options.inverse(this);
  }
});

// Handlebars.registerHelper('if', function(conditional, options) {
//   if(conditional) {
//     return options.fn(this);
//   }
// });

Handlebars.registerHelper('if', function(conditional, options) {
  if(conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});


//{{duitang 'people/detail/good/'}}
Handlebars.registerHelper('duitang', function(options) {
  return 'http://www.duitang.com/' + options;
});

Handlebars.registerHelper('timePattern', function(fml) {
  var nowTime = new Date().getTime();
  var lastTime = fml *1000 - nowTime;
  if (lastTime > 0) {
    var days = Math.floor(lastTime/1000/(60*60)/24);
    var hours = Math.floor(lastTime/1000/(60*60) - 24*days);
    var minutes = Math.floor((lastTime - (hours*60*60 - days*24*3600)*1000)/1000000/60);
    return days+'天'+hours+'时' + minutes+'分'
  }
});

Handlebars.registerHelper('promotionDone', function(time, is_sold_out) {
  var nowTime = new Date().getTime();
  var lastTime = time *1000 - nowTime;
  if (lastTime < 0 || is_sold_out) {
    return 'done';

  } else {
    return '';
  }
});
Handlebars.registerHelper('promotionUrl', function(id, time, is_sold_out) {
  var nowTime = new Date().getTime();
  var lastTime = time *1000 - nowTime;
  if (lastTime < 0 || is_sold_out) {
    return 'javascript:;';
  } else {
    return '/shopping/temaihui/detail/'+id+'/?__urlopentype=pageweb';
  }
});

Handlebars.registerHelper('truncate', function(title, len) {
   var shortTitle = $.trim(title).substring(0,len);
   return shortTitle;
});

Handlebars.registerHelper('pcjump', function(title, len) {
   var ua = navigator.userAgent.toString().toLowerCase(),
    ipad = !!ua.match(/ipad/ig),
    iphone = !!ua.match(/iphone/ig),
    android = !!ua.match(/android/ig);
    if (!iphone && !android) {
      return 'target=_blank';
    } else {
      return '';
    }
});


//{{dtImageTrans (i.avatar,true,48,48,'c')}}
Handlebars.registerHelper('dtImageTrans', function(url, t, w,h,c) {
    var pathn = $.trim(url).replace(/^http(s)?:\/\//ig,''),
      pathn = pathn.split('/'),
      domain = pathn[0],
      pathn = pathn[1];

    // 只有堆糖域名下 uploads misc 目录下的图片可以缩略
    if( domain.indexOf('duitang.com') == -1 || !pathn || pathn != 'uploads' && pathn != 'misc' ){
      return url;
    }
    if(t){
      w = w || 0;
      h = h || 0;
      c = c ? '_'+c : ''
      return $.G.dtImageTrans(url).replace(/(\.[a-z_]+)$/ig,'.thumb.'+w+'_'+h+c+'$1')
    }else{
      return url.replace(/(?:\.thumb\.\w+|\.[a-z]+!\w+)(\.[a-z_]+)$/ig,'$1')
    }
});


Handlebars.registerHelper('plus', function(n1, n2) {
  return n1 + n2;
});

Handlebars.registerHelper('goto', function(sourcelink, aid) {
  return '/redirect/?to=' + encodeURIComponent(sourcelink) + '&mk=b11_p_' + aid + '&spm=2014.12553688.1.0';
});
