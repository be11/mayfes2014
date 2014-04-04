$(function(){
  $("nav a").each(function(){
    if($(this).hasClass("currentPage")){
      $("img",this).hide();
    }
  }
  )
  $("nav a").hover(function(){
    $("img",this).hide();
  },function(){
    if(!$(this).hasClass("currentPage")){
      $("img",this).show();
    }
  });
})

$(function(){
  $(".menuon:gt(0)").add($(".menuoff:first")).add($(".imagearea img:gt(0)")).hide();
  $(".menuon:first").show();
  var first=-1;
  var second=0;
  setInterval(function(){
    if(++first> 2){first=0;} 
    if(++second > 2){second=0;}
    $("div.menuon").eq(first).add($("div.menuoff").eq(second)).add($(".imagearea img").eq(first)).fadeOut(400,function(){
      $("div.menuoff").eq(first).add($("div.menuon").eq(second)).add($(".imagearea img").eq(second)).fadeIn(400)
    });
  },3000);
});

$(function(){
  $(".wsdetail").css("display","none");
  $("div.workshop").click(function(){
    if($(this).next("div.wsdetail").css("display")=="none"){
      $(this).next("div.wsdetail").slideDown();
    }
    else{
      $(this).next("div.wsdetail").hide();
    }
  });
});

$(function(){
  $("div.demodisc").hide();
  $("div.demo").each(function(){
    var file="img/"+$(this).attr("class").replace("demo ","")+".jpg";
    $(this).css("background-image","url("+file+")");
  });
  $("div.demo").hover(function(){
    $("<img src=\"img/bg-black.png\">").prependTo(this);
    $("div.demodisc",this).show();
  }, function(){
    $(".demo img").remove();
    $("div.demodisc",this).hide();
  });
})
