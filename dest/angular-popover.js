!function(){var e=angular.module("angular-popover",[]);e.directive("angularPopover",[function(){return{restrict:"A",transclude:!0,template:'<div class="angular-popover-container"><div class="angular-popover hide-popover-element" ng-include="getContentPopover()"></div><div class="angular-popover-triangle hide-popover-element" ng-class="getTriangleClass()"></div></div><ng-transclude></ng-transclude>',link:function(e,t,l){var o,n,r,p,a,i,s,c,g=t[0].querySelector(".angular-popover-container"),u=15,v=30;s=Math.sqrt(u*u/2),c=Math.sqrt(u*u*2),e.getContentPopover=function(){return l.template},e.getTriangleClass=function(){return"angular-popover-triangle-"+l.direction},t[0].addEventListener("click",function(){switch(n=t[0].clientHeight,g.style.top=n+"px",r=t[0].clientWidth,o=t[0].querySelector(".angular-popover"),i=t[0].querySelector(".angular-popover-triangle"),o.classList.toggle("hide-popover-element"),i.classList.toggle("hide-popover-element"),g.classList.toggle("popover-animation"),g.classList.toggle("popover-floating-animation-"+l.direction),p=o.clientHeight,a=o.clientWidth,l.direction){case"top":o.style.top=-n-p-s+"px",o.style.left=(r-a)/2+"px",i.style.top=-n-s+"px",i.style.left=(r-v)/2+"px";break;case"bottom":o.style.top=s+"px",o.style.left=(r-a)/2+"px",i.style.top=-(v-s)+"px",i.style.left=(r-v)/2+"px";break;case"right":o.style.top=(n-p)/2-n+"px",o.style.left=r+s+"px",i.style.top=(n-v)/2-n+"px",i.style.left=r-(v-s)+"px";break;case"left":o.style.top=(n-p)/2-n+"px",o.style.right=s+"px",i.style.top=(n-v)/2-n+"px",i.style.left=-s+"px"}})}}}])}();