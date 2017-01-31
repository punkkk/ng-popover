"use strict";!function(){var e=angular.module("angular-popover",[]);e.directive("angularPopover",function(){return{restrict:"A",transclude:!0,scope:!0,templateUrl:"./angular-popover.template.html",link:function(e,t,o){var l=t[0].querySelector(".angular-popover-container"),s=void 0,i=parseInt(o.horizontaloffset,10),r=void 0,p=void 0,n=void 0,a=void 0,c=void 0,d=void 0,v=void 0,u=void 0,m=15,h=30;v=Math.sqrt(m*m/2),u=Math.sqrt(m*m*2);var y=o.mode||"click",g=void 0===o.closeonclick?"click"==y:"true"===o.closeOnClick,f=void 0===o.closeOnMouseleave?"mouseover"==y:"true"===o.closeOnMouseleave;e.getTriangleClass=function(){return"angular-popover-triangle-"+o.direction},e.onBlur=function(){f||g||(r.classList.add("hide-popover-element"),d.classList.add("hide-popover-element"))},f&&t[0].addEventListener("mouseleave",function(){r.classList.add("hide-popover-element"),d.classList.add("hide-popover-element")}),"click"!=y&&g&&t[0].addEventListener("click",function(){r.classList.add("hide-popover-element"),d.classList.add("hide-popover-element")}),t[0].addEventListener(y,function(){switch(s=t[0].querySelector(".popover-transclude"),p=t[0].clientHeight,l.style.top=p+5+"px",n=t[0].clientWidth,r=t[0].querySelector(".angular-popover"),d=t[0].querySelector(".angular-popover-triangle"),"click"==y&&g?(r.classList.toggle("hide-popover-element"),d.classList.toggle("hide-popover-element")):"click"!=y||g?r.classList.contains("hide-popover-element")&&(r.classList.remove("hide-popover-element"),d.classList.remove("hide-popover-element")):(r.classList.remove("hide-popover-element"),d.classList.remove("hide-popover-element")),a=r.clientHeight,c=r.clientWidth,o.direction){case"top":r.style.top=-p-a-v+"px",r.style.left=(n-c+i)/2+"px",d.style.top=-p-v+"px",d.style.left=(n-h)/2+"px";break;case"bottom":r.style.top=v+"px",r.style.left=(n-c+i)/2+"px",d.style.top=-(h-v-1)+"px",d.style.left=(n-h)/2+"px";break;case"right":r.style.top=(p-a)/2-p+"px",r.style.left=n+v+"px",d.style.top=(p-h)/2-p+"px",d.style.left=n-(h-v)+"px";break;case"left":r.style.top=(p-a)/2-p+"px",r.style.right=v+"px",d.style.top=(p-h)/2-p+"px",d.style.left=-v+"px"}s.focus()})}}})}();