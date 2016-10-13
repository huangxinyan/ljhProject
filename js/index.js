/**
 * Created by Administrator on 2016/10/12.
 */
$(function(){
    // var flag = $(".banner").width()<=868;
    var $index = 1;
    var $flag = true;
    var timeId;
    var createBanner = function(){
        $.get("json/banner1.json",function(data){
            var html = "";
            var html1 = "";
            var className = "";
            for(var i=0;i<data.banner.length;i++){
                if(i==0){
                    className = "selected";
                }else{
                    className = "shows";
                }
                html += "<li class=\""+className+"\"><a href=\"###\">"+data.banner[i]+"</a></li>";
            }
            if($(".banner").width()>767&&$(".banner").width()<=868){
                html1 = "<li>" +
                    "<a href=\"###\">"+data.banner2+"</a>"
                    +"<div class=\"more\">"
                    +"<p><a href=\"###\">"+data.banner1[0]+"</a></p>"
                    +"<p><a href=\"###\">"+data.banner1[1]+"</a></p>"
                    +"</div>"
                    +  "</li>"
            }else{
                for(var j=0;j<data.banner1.length;j++) {
                    html1 += "<li class=\""+className+"\"><a href=\"###\">" + data.banner1[j] + "</a></li>";
                }
            }
            $(".banner>ul").html(html+html1);
            var flag1 = true;
            $(".banner>ul>li:first").click(function(){
                if(dom.clientWidth<767) {
                    if (flag1) {
                        $(".banner>ul>li").css("display", "block");
                        flag1 = false;
                    } else {
                        $(".shows").css("display", "none");
                        flag1 = true;
                    }
                }
            });
        });
    }

  /* var createPic = function(){
       $.get("json/lunbo.json",function(data){
            if("")
       });
   }*/
    var dom = document.documentElement||document.body;
    createBanner();
    $(window).resize(function(e) {
        createBanner();
        var flag1 = true;
        //console.log(dom.clientWidth);
        $(".lunbo>ul>li").css("width",dom.clientWidth);
        $(".lunbo>ul").css("width",5*dom.clientWidth);
    });

    $(".dot").click(function(e){
        $index = $(e.target).index();
        $(".dot>span").removeClass("active");
        $(e.target).addClass("active");
        $(".play").animate({left:-($index+1)*dom.clientWidth});
    });

    var rightClick = function(){
        if($flag) {
            $flag = false;
            $index++;
            if ($index > $(".play>li").length - 1) {
                $index = 1;
            }
            $(".dot>span").removeClass("active");
            if ($index == $(".play>li").length - 1) {
                $(".dot>span").eq(0).addClass("active");
            } else {
                $(".dot>span").eq($index - 1).addClass("active");
            }

            if ($index == $(".play>li").length - 1) {
                $(".play").animate({left: -$index * dom.clientWidth}, function () {
                    $(".play").css("left", -dom.clientWidth);
                    $index = 1;
                    $flag = true;
                });
            } else {
                $(".play").animate({left: -$index * dom.clientWidth},function(){
                    $flag = true;
                });
            }
        }
    }
    //lunbo
    $(".rightBtn").click(function(){
        rightClick();
    });

    $(".leftBtn").click(function(){
        if($flag) {
            $flag = false;
            $index--;
            if ($index < 0) {
                $index = $(".play>li").length - 2;
            }
            $(".dot>span").removeClass("active");
            if ($index == 0) {
                $(".dot>span").eq(2).addClass("active");
            } else {
                $(".dot>span").eq($index - 1).addClass("active");
            }
            if ($index == 0) {
                $(".play").animate({left: -$index * dom.clientWidth}, function () {
                    $(".play").css("left", -($(".play>li").length - 2) * dom.clientWidth);
                    $index = ($(".play>li").length - 2);
                    $flag = true;
                });
                // $index = $(".dot>span").length - 1;
            } else {
                $(".play").animate({left: -$index * dom.clientWidth},function(){
                    $flag = true;
                });
            }
        }
    });

    function autoPlay(){
        timeId = setInterval(function(){
            rightClick();
        },3000);
    }
    autoPlay();
    $(".lunbo").mouseenter(function(){
        $(".btn2").fadeIn(400);
        clearInterval(timeId);
    });
    $(".lunbo").mouseleave(function(){
        $(".btn2").fadeOut(400);
        autoPlay();
    });
});

