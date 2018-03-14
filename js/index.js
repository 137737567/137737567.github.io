var curIndex = 0;
var container = $("#container");
var sumCount = $(".section").length;
var $window = $(window);
var duration = 500;
//时间控制
var aniTime = 0;

//滚轮翻页
var scrollFunc = function (e) {
    //如果动画还没执行完，则return
    if(new Date().getTime() < aniTime + duration){
        return;
    }
    e = e || window.event;
    var t = 0;
    if (e.wheelDelta) {//IE/Opera/Chrome
        t = e.wheelDelta;
        if (t > 0 && curIndex > 0) {
            //上滚动
            movePrev();
        } else if (t < 0 && curIndex < sumCount - 1) {
            //下滚动
            moveNext();
        }
    } else if (e.detail) {//Firefox
        t = e.detail;
        if (t < 0 && curIndex > 0) {
            //上滚动
            movePrev();
        } else if (t > 0 && curIndex < sumCount - 1) {
            //下滚动
            moveNext();
        }
    }
};

//移动端触屏翻页
var startY;//触屏时Y坐标
var oldY;//上一次Y坐标
var y;//滑动距离
var move=false;//判断是否滑动

function touchStart(e){//开始触摸
	e = window.event || e;
	e.preventDefault();
	var touch =e.touches[0];
	startY =touch.clientY;
	console.log("开始触摸");
}
function touchMove(e){//滑动
	e = window.event || e;
	e.preventDefault();
	var touch =e.touches[0];
	y =touch.clientY-startY;
	move= true;
	console.log("滑动");
}
function touchEnd(e){//结束触摸
	e = window.event || e;
	e.preventDefault();
	//如果动画还没执行完，则return
    if(new Date().getTime() < aniTime + duration){
        return;
    }
	if(y >20 && curIndex>0 &&move){
		console.log("向上移动");
		movePrev();
	}else if(y <-20 && curIndex<3 &&move){
		console.log("向下移动");
		moveNext();
	}
	move =false;//重置
}
document.addEventListener("touchstart",touchStart,false);
document.addEventListener("touchmove",touchMove,false);
document.addEventListener("touchend",touchEnd,false);

//下一页
function moveNext(){ 
    //获取动画开始时的时间
    aniTime = new Date().getTime();
    container.css("transform", "translate3D(0, -" + (++curIndex) * $window.height() + "px, 0)");
    //判断圆点
   	pointer();
   	//判断背景
   	if(curIndex ==1){
   		skills();
   		skills0();
   	}
   	if(curIndex ==2){
   		colorBack();
   	}
   	if(curIndex ==3){
   		rainbowBack();
   	}
}

//上一页
function movePrev(){
    //获取动画开始时的时间
    aniTime = new Date().getTime();
    container.css("transform", "translate3D(0, -" + (--curIndex) * $window.height() + "px, 0)");
    //判断圆点
  	pointer();
  	
}

function init(){
    //注册事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
}
init();

//添加skill动画
function skills0(){
	for(var i=0; i<7; i++){
		$(".sBar"+i+"").css("animation","sBar"+i+" 1.5s ease "+0.2*i+"s forwards");
	}
}
function skills(){
	for(var i=0; i<7; i++){
		$(".skillBar"+i+"").css("animation","skillBar"+i+" 1.5s ease "+0.2*i+"s forwards");
	}
}

//添加作品动画
function colorBack(){
	for(var i=0; i<10; i++){
		$(".barR"+i+"").css("animation","backColorR"+i+" 0.8s ease "+0.2*i+"s forwards");
		$(".barL"+i+"").css("animation","backColorL"+i+" 0.8s ease "+0.2*i+"s forwards");
	}
}

//添加彩虹动画
function rainbowBack(){
	for(var i=0; i<10; i++){
		$(".rainbow"+i+"").css("animation","rainbow"+i+" 1.5s ease "+0.2*i+"s forwards");
	}
}

//获取当前页添加特效方法
function pointer(){
	$("[class^='pointer'] div:last-child").removeClass("pulse");
    $(".pointer"+curIndex+" div:last-child").addClass("pulse");
    if(curIndex==0){ 
    	$("[class^='pointer'] div:first-child").css("background-color","#ff8c78");
    	$("[class^='pointer'] div:last-child").css({"background-color":"#ff8c78","box-shadow":"1px 1px 30px #ff8c78"});
    	$("#mask ul span").css({"background":"rgba(255,140,120,0.7)","top":"0px"});
    }
    if(curIndex==1){
    	$("[class^='pointer'] div:first-child").css("background-color","#80d9b2");
    	$("[class^='pointer'] div:last-child").css({"background-color":"#80d9b2","box-shadow":"1px 1px 30px #80d9b2"});
    	$("#mask ul span").css({"background":"rgba(128,217,178,0.7)","top":"50px"});
    }
    if(curIndex==2){
    	$("[class^='pointer'] div:first-child").css("background-color","#ffd661");
    	$("[class^='pointer'] div:last-child").css({"background-color":"#ffd661","box-shadow":"1px 1px 30px #ffd661"});
    	$("#mask ul span").css({"background":"rgba(255,214,97,0.7)","top":"100px"});
    }
    if(curIndex==3){
    	$("[class^='pointer'] div:first-child").css("background-color","#00CED1");
    	$("[class^='pointer'] div:last-child").css({"background-color":"#00CED1","box-shadow":"1px 1px 30px #00CED1"});
    	$("#mask ul span").css({"background":"rgba(0,206,209,0.7)","top":"150px"});
    }
}


/*音乐*/
var state =2;
$("#control a").click(function(){
	if(state %2==0){
		document.getElementById('audio').pause();
		$("#control a span").text("►");
	}else{
		document.getElementById('audio').play();
		$("#control a span").text("||");
	}
	state++;
	return false;
});
console.log("网页可见区域宽："+ document.body.clientWidth+"<br /> "+"网页可见区域高："+ document.body.clientHeight+"<br />"+" 屏幕分辨率的高："+ window.screen.height+"<br />"+" 屏幕分辨率的宽："+ window.screen.width);