/*
@说明：全站ajax 请求情况监控，用于统计失败请求次数
@作者：hugin
@时间：2015-05-05
*/
$.ajaxSettings = $.extend($.ajaxSettings, {
  type: 'POST',
  timeout : 20000,
  // whatever
});

// ajax 封装,解决回调打点及状态判断问题
$.ajaxCall = function(settings){
  // type, url, data, success, error, complete

  $.ajax({
    type : settings.type,
    url : settings.url,
    data : settings.data,
    success : function(data,status,xhr){
      //转json对象
      var jsn = $.isPlainObject(data) ? data : $.parseJSON(data);
      //如果parse 失败，直接返回
      if(!jsn){
        // $.G.gaq('/_trc/Error/ajax/json_parse_fail_'+this.url);
        return;
      }

      //判断jsn 请求是否成功返回数据
      if( jsn.success || jsn.status === 1 ){
        if( $.isFunction(settings.success)){
          settings.success(jsn);
        }
      }else{
        popMsgThenClose(jsn.message);
      }
    },
    error : function(data,status){
      var msg = $.trim(data.message);
      if (msg) {
        $.G.popupMsg(msg);
          setTimeout(function(){
          $.G.popupClose();
        },1500);
      }
    },
    complete : function(data, status){
      if (settings.complete != undefined && $.isFunction(settings.complete)) settings.complete();
    }
  });
};