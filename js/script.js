var vdo=document.getElementById("vdo-about"),playButton=document.getElementById("playButton"),pauseButton=document.getElementById("pauseButton");function show(o,e){o.style.display=Boolean(e)?"block":"none"}function vdoplay(o){0==o?(show(playButton,!1),show(pauseButton,!0),vdo.play()):(show(pauseButton,!1),show(playButton,!0),vdo.pause())}vdo.onended=function(o){show(pauseButton,!1),show(playButton,!0)},show(pauseButton,!1),$(document).ready((function(){$(".client-review-slider").slick({dots:!0,arrows:!1,csssEase:!0,autoplay:!0,slidesToShow:2,slidesToScroll:2,speed:1e3,autoplaySpeed:2e3,customPaging:function(o,e){return'<div class="slick-dot rounded-circle border"></div>'},responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".service-slider").slick({dots:!1,arrows:!1,infinite:!0,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}));