/*global nav*/
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
/*トップの画像スライドショー*/
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
  },4500);
});
/*ワークショップ*/
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
/*展示の写真自動取得*/
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

$(function(){
  var size=$(window).height();
  $("div.shingakusoudan").css("height",size-320);
})

$(window).resize(function(){
  var size=$(window).width();
  if(size<960){
    $(window).on("scroll", function(){
      $("header").css("left", -$(window).scrollLeft());
    });}
})

$(window).resize(function(){
  var size=$(window).width();
  if(size<960){
      $("header").css("position", "relative");
  }
})

// スマートフォン対応

$(function() {
    var userAgent = navigator.userAgent;
    var isAndroid = userAgent.indexOf('Android') > 0;
    var isSp = userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 || (isAndroid && userAgent.indexOf('Mobile') > 0);
    var isMobile = isSp || isAndroid || userAgent.indexOf('iPad') > 0;

    var myUrl = window.location.href;
    var myFile = myUrl.substring(myUrl.lastIndexOf('/')+1, myUrl.length);
    var spLink = 'sp/' + myFile;

    if (isSp) {
        if (myFile == '') {
            // トップの時だけリダイレクト
            window.location.href = spLink;
            return;
        }

        // (スマートフォンでのみ)スマートフォン向けへの誘導
        $("header").after('<div class="redirect-message"><strong><a href="'+spLink+'">スマートフォン向けサイトはこちら</a></strong></div>');
    }

    if (isMobile) {
        // モバイル端末ではヘッダを固定しない
        $('header').css('position', 'static');
        $('#main').css('padding-top', '0px');
        $('#main-top').css('padding-top', '0px');
    }
});

