$(function(){$(".folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl").hover(function(){var e=$(this).index(),t=$("h3").get(e);$(t).addClass("h3-hover")},function(){$(".h3-hover").removeClass("h3-hover")})});yepnope({test:Modernizr.csstransitions,yep:"css/global.css",nope:"js/animation-ck.js"});