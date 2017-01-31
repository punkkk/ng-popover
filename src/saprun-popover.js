let saprunPopover = angular.module('saprun-popover', []);

saprunPopover.directive('saprunPopover', function() {
    return {
        restrict: 'A',
        transclude: true,
        scope: true,
        template: `<div class="saprun-popover-container" >
                        <div class="saprun-popover hide-popover-element">
                            <ng-transclude class="popover-transclude" ng-blur="onBlur()" tabindex="1"></ng-transclude>
                        </div>
                        <div class="saprun-popover-triangle hide-popover-element" ng-class="getTriangleClass()"></div>
                    </div>
                    `,
        link: function(scope, element, attrs) {
            //the root div of the popup template
            let popover_container = element[0].querySelector('.saprun-popover-container'),
                popoverTransclude,
                horizontalOffset = parseInt(attrs.horizontaloffset, 10),
                popover, //the popover element
                parent_height, //height of the element to which the directive is attached
                parent_width, //width of the element to which the directive is attached
                popover_height, //height of the popover
                popover_width, //width of the popover
                triangle, //the small triangle attached with the popover
                triangle_height, //vertical height of the triangle
                triangle_diagonal, //base of the triangle
                triangle_div_side = 15, //side of the triangle
                triangle_rect_div_side = 30; //the div which has been rotated to make a triangle using the after pseudo class

            triangle_height = Math.sqrt(triangle_div_side * triangle_div_side / 2);
            triangle_diagonal = Math.sqrt(triangle_div_side * triangle_div_side * 2);
            const mode = attrs.mode || 'click';
            const closeOnClick = attrs.closeonclick === undefined ?
                (mode == 'click') :
                (attrs.closeOnClick === 'true');

            const closeOnMouseleave = attrs.closeOnMouseleave === undefined ?
                (mode == 'mouseover') :
                (attrs.closeOnMouseleave === 'true');

            //depending upon the direction specified, attached the appropriate class to the popover
            scope.getTriangleClass = function() {
                return 'saprun-popover-triangle-' + attrs.direction;
            };

            scope.onBlur = () => {
                if( !( closeOnMouseleave || closeOnClick ) ) {
                    popover.classList.add('hide-popover-element');
                    triangle.classList.add('hide-popover-element');
                }
            };


            if (closeOnMouseleave) {
                element[0].addEventListener('mouseleave', () => {
                    popover.classList.add('hide-popover-element');
                    triangle.classList.add('hide-popover-element');
                });
            }

            if (mode != 'click' && closeOnClick) {
                element[0].addEventListener('click', () => {
                    popover.classList.add('hide-popover-element');
                    triangle.classList.add('hide-popover-element');
                });
            }

            //listen for click on the directive element
            element[0].addEventListener(mode, () => {
                popoverTransclude = element[0].querySelector(".popover-transclude");
                parent_height = element[0].clientHeight;

                //move the popover container to the bottom of the directive element
                popover_container.style.top = (parent_height + 5) + 'px';
                parent_width = element[0].clientWidth;
                popover = element[0].querySelector('.saprun-popover');
                triangle = element[0].querySelector('.saprun-popover-triangle');

                if (mode == 'click' && closeOnClick) {
                    popover.classList.toggle('hide-popover-element');
                    triangle.classList.toggle('hide-popover-element');
                } else if (mode == 'click' && !closeOnClick) {
                    popover.classList.remove('hide-popover-element');
                    triangle.classList.remove('hide-popover-element');
                }

                //'mouseover' mode
                else if (popover.classList.contains('hide-popover-element')) {
                    popover.classList.remove('hide-popover-element');
                    triangle.classList.remove('hide-popover-element');
                }

                popover_height = popover.clientHeight;
                popover_width = popover.clientWidth;

                //check direction and calculate position for appending popover and triangle
                switch (attrs.direction) {
                    case 'top':
                        popover.style.top = (-parent_height - popover_height - triangle_height) + 'px';
                        popover.style.left = ((parent_width - popover_width + horizontalOffset) / 2) + 'px';
                        triangle.style.top = (-parent_height - triangle_height) + 'px';
                        triangle.style.left = ((parent_width - triangle_rect_div_side) / 2) + 'px';
                        break;

                    case 'bottom':
                        popover.style.top = triangle_height + 'px';
                        popover.style.left = ((parent_width - popover_width + horizontalOffset) / 2) + 'px';
                        triangle.style.top = -(triangle_rect_div_side - triangle_height - 1) + 'px';
                        triangle.style.left = ((parent_width - triangle_rect_div_side) / 2) + 'px';
                        break;

                    case 'right':
                        popover.style.top = ((parent_height - popover_height) / 2 - parent_height) + 'px';
                        popover.style.left = parent_width + triangle_height + 'px';
                        triangle.style.top = ((parent_height - triangle_rect_div_side) / 2 - parent_height) + 'px';
                        triangle.style.left = (parent_width - (triangle_rect_div_side - triangle_height)) + 'px';
                        break;

                    case 'left':
                        popover.style.top = ((parent_height - popover_height) / 2 - parent_height) + 'px';
                        popover.style.right = triangle_height + 'px';
                        triangle.style.top = ((parent_height - triangle_rect_div_side) / 2 - parent_height) + 'px';
                        triangle.style.left = -triangle_height + 'px';
                        break;
                }
                popoverTransclude.focus();
            });
        }
    }
});

(function () {
    if (typeof define === 'function' && define.amd) {
        define(function(){ return saprunPopover.name; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = saprunPopover.name;
    } else {
        // console.log(this)
        // this[saprunPopover.name] = saprunPopover.name;
    }
}).call(this);
