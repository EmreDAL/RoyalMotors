(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(s,i,o){"use strict";o.r(i);var n=o(0),t=o.n(n);o(4);const e=t.a;window.$=e;var r={init:()=>{e(".js-menu-toggle").click(()=>{e("body").toggleClass("menu-active")})}};o(5);var l=function(){const s=s=>`<span>${s}</span>`,i=s=>`<svg class="icon icon-${s} icon--arrow"><use xlink:href="#icon-${s}"></use></svg>`;return{init:()=>{e(".js-big-slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,rows:0,arrows:!0,prevArrow:`<button type='button' class='slider-big-nav slider-big-nav--left'>${s("<")}</button>`,nextArrow:`<button type='button' class='slider-big-nav slider-big-nav--right'>${s(">")}</button>`,responsive:[{breakpoint:480,settings:{adaptiveHeight:!0}}]}),e(".js-showroom-slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:4,rows:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0}}]}),e(".js-brand-slider").slick({infinite:!0,slidesToShow:6,slidesToScroll:6,rows:0,variableWidth:!0,centerMode:!1,arrows:!0,prevArrow:`<button type='button' class='slider-nav slider-nav--left'>${i("chevron-left")}</button>`,nextArrow:`<button type='button' class='slider-nav slider-nav--right'>${i("chevron-right")}</button>`})}}}();e(function(){r.init(),l.init()})},3:function(s,i,o){o(20),o(6),s.exports=o(10)},5:function(s,i){}},[[3,1,2]]]);