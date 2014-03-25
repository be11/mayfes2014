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
  /*
  $("nav a").click(function(){
    $("nav a img").show();
    $("img",this).hide();
    $("nav a img").removeClass("clicked");
    $("img",this).addClass("clicked");
  });*/
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

