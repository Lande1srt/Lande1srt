
function showTime(clock){
    var now = new Date();
    var year = now.getFullYear();
    var month= now.getMonth();
    var day = now.getDate();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var second = now.getSeconds();
    month = month+1;
    var arr_work = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    var week = arr_work[ now.getDay()];
    var time = year+"年"+month+"月"+day+"日 "+ week+" "+hour+":"+minu+":"+second;
    clock.innerHTML=""+time;
}
window.onload = function(){
    var clock = document.getElementById("clock");
    window.setInterval("showTime(clock)",1000);
  
}
