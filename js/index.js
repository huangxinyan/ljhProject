/**
 * Created by Administrator on 2016/10/12.
 */
$(function(){
    // var flag = $(".banner").width()<=868;
    var createBanner = function(){
        $.get("json/banner1.json",function(data){
            var html = "";
            var html1 = "";
            for(var i=0;i<data.banner.length;i++){
                html += "<li><a href=\"###\">"+data.banner[i]+"</a></li>";
            }
            if($(".banner").width()<=868){
                html1 = "<li>" +
                    "<a href=\"###\">"+data.banner2+"</a>"
                    +"<div class=\"more\">"
                    +"<p><a href=\"###\">"+data.banner1[0]+"</a></p>"
                    +"<p><a href=\"###\">"+data.banner1[1]+"</a></p>"
                    +"</div>"
                    +  "</li>"
            }else{
                for(var j=0;j<data.banner1.length;j++) {
                    html1 += "<li><a href=\"###\">" + data.banner1[j] + "</a></li>";
                }
            }
            $(".banner>ul").html(html+html1);
        });
    }

    createBanner();
    $(window).resize(function(e) {
        createBanner();
        $(".lunbo").style.width = e.clientX();
        console.log(e.clientX());
    });

});