"use strict";$(document).ready(function(){function o(){var o=document.body.scrollTop;o>300?n.addClass("back-top-show"):n.removeClass("back-top-show"),n.css("left",a+"px")}var n=$("#back-top"),a=$("#banner").offset().left+1050;$(window).on("scroll",function(){o()}),n.on("click",function(){$("html, body").animate({scrollTop:"0px"},600)}),n.css("left",a+"px");new Swiper(".swiper-container",{autoplay:2e3,speed:500,pagination:".swiper-pagination",paginationClickable:!0})});