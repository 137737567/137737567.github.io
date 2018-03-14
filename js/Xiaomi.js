window.onload=function(){
	//获取Banner滚动对象
	var scrollDiv =document.getElementsByClassName("scroll_bar")[0];
	var scrollUl =scrollDiv.getElementsByClassName("img")[0];
	var aScrollLi =scrollUl.getElementsByTagName("li");
	//获取明星单品滚动对象
	var scrollUl_hot =document.getElementsByClassName("hot")[0];
	var aScrollLi_hot =scrollUl_hot.getElementsByTagName("li");
	
	//Banner滚动
	scrollBar(scrollUl,aScrollLi,5000,1,0);
	//明星单品滚动
	scrollBar(scrollUl_hot,aScrollLi_hot,6000,5,14);
	
	//滚动框架_YJH 参数:(滚动Ul,滚动Li,速度,滚动Li数量,Li的Margin-left/right)
	function scrollBar(scrollUl,aScrollLi,time,nums,margin){
		var timer =null;
		var times =0;
		function scrollTimes(){
			scrollUl.style.left =(aScrollLi[0].offsetWidth+margin) * nums * -times+"px";
			if(times %(aScrollLi.length/nums) ==0){
				times =0;
				scrollUl.style.left =0+"px";
				}
				times++;
			}
			
			timer =setInterval(scrollTimes,time);
			scrollUl.onmouseover=function(){
				clearInterval(timer);
			}
			scrollUl.onmouseout=function(){
				timer =setInterval(scrollTimes,time);
			}
		}
	}
	
/*所有Tab选项卡切换*/
var aTab =document.getElementsByClassName("tabs");
var aContent =document.getElementsByClassName("content");
var oldIndex =-1;//记录上次触发Index,防止连续触发
var zindex =0;//设置记录层级
//闭包1
for(var m =0;m <aTab.length; m++){
	(function(i){
		var aTabLi =aTab[i].getElementsByTagName("li");
	//闭包2
	for(var n =0;n <aTabLi.length; n++){
		(function(j){
			aTabLi[j].onmouseover = function(){
				if(oldIndex !=j){
					//将全部选项卡设置同一级别
					for(var b =0;b <aTabLi.length; b++){
						aContent[i].getElementsByClassName("main_right"+j+"")[0].style.zIndex=zindex;
					}
					oldIndex =j;//记录旧下标
					var main =aContent[i].getElementsByClassName("main_right"+j+"")[0];
						console.log(i,j,oldIndex);
						main.style.zIndex=zindex+=1;
						console.log(main.style.zIndex);
					}
				}
			})(n)
		}
	})(m)
}


$(function(){
	$(".nav li:eq(0)").mouseover(function(){
		$(".top_detail_1").css({"height":"180px","display":"inline-block","z-index": "5"});
	}).mouseout(function(){
		$(".top_detail_1").css({"height":"0px","z-index": "2"});
	})
	$(".nav li:eq(1)").mouseover(function(){
		$(".top_detail_2").css({"height":"180px","display":"inline-block","z-index": "5"});
	}).mouseout(function(){
		$(".top_detail_2").css({"height":"0px","z-index": "2"});
	})
	$(".nav li:eq(2)").mouseover(function(){
		$(".top_detail_3").css({"height":"180px","display":"inline-block","z-index": "5"});
	}).mouseout(function(){
		$(".top_detail_3").css({"height":"0px","z-index": "2"});
	})
	$(".nav li:eq(3)").mouseover(function(){
		$(".top_detail_4").css({"height":"180px","display":"inline-block","z-index": "5"});
	}).mouseout(function(){
		$(".top_detail_4").css({"height":"0px","z-index": "2"});
	})
	$("[class^='top_detail']").mouseover(function(){
		$(this).css({"height":"180px","display":"inline-block"});
	}).mouseout(function(){
		$(this).css({"height":"0px","z-index": "2"});
	})
	/*scroll-List*/
	$(".scroll_list li:eq(0)").mouseover(function(){
		$(".scroll_list_detail").css({"display":"inline-block","z-index": "4"});
	}).mouseout(function(){
		$(".scroll_list_detail").css({"display":"none","z-index": "3"});
	})
	$(".scroll_list li:eq(1)").mouseover(function(){
		$(".scroll_list_detail_large").css({"display":"inline-block","z-index": "4"});
	}).mouseout(function(){
		$(".scroll_list_detail_large").css({"display":"none","z-index": "3"});
	})
	$("[class^='scroll_list_detail']").mouseover(function(){
		$(this).css({"display":"inline-block","z-index": "4"});
	}).mouseout(function(){
		$(this).css({"display":"none","z-index": "3"});
	})
	$(".tabs li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass('active');
	})

})