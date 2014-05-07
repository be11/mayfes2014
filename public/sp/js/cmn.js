
$(function() {
    var userAgent = navigator.userAgent;
    var isAndroid = userAgent.indexOf('Android') > 0;
    var isSp = userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 || (isAndroid && userAgent.indexOf('Mobile') > 0);
    var isMobile = isSp || isAndroid || userAgent.indexOf('iPad') > 0;
    
    var myUrl = window.location.href;
    var myFile = myUrl.substring(myUrl.lastIndexOf('/')+1, myUrl.length);
    
    // リダイレクトされないように明示的に飛ばす
    if (myFile == '')
        myFile = 'index.html';
    
    var pcLink = '../' + myFile;
    
    if (!isSp) {
        // (PCでのみ)上にPC向けへの誘導
        $("header").after('<div class="redirect-message"><strong><a href="'+pcLink+'">PC向けサイトはこちら</a></strong></div>');
    }
    
    // 下にPC向けへの誘導
    $("#footer").before('<p><a href="'+pcLink+'">PC向けサイトはこちら</a></strong>');

    if (isAndroid) {
        $(".openmap").each(function(){
           url = $(this).attr("href").replace("maps:", "http://maps.google.com?");
           $(this).attr("href", url);
        });
    }
});

