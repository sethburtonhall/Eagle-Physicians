// less than or equal to ie8
// yellow highlight on h3 background when hovered
$(function(){$(".folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl").hover(function(){var e=$(this).index(),t=$("span").get(e);$(t).addClass("h3-hover")},function(){$(".h3-hover").removeClass("h3-hover")})});$(".folder-group a").each(function(e){e!=0&&$("#folder-out").clone().attr("id","folder-out"+e).appendTo($(this).parent());$(this).data("folder-out",e)}).mouseover(function(){$("#folder-out"+$(this).data("folder-out"))[0].play()});$("#folder-out").attr("id","folder-out0");$(".folder-group a").each(function(e){e!=0&&$("#folder-in").clone().attr("id","folder-in"+e).appendTo($(this).parent());$(this).data("folder-in",e)}).mouseout(function(){$("#folder-in"+$(this).data("folder-in"))[0].play()});$("#folder-in").attr("id","folder-in0");