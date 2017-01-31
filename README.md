# ng-popover
Custom popover with transcluding content. Original demo: http://tarun-dugar.github.io/ng-popover/
![alt tag](https://github.com/punkkk/ng-popover/blob/image/screen.png)

Installation
-----
```code
npm install https://github.com/punkkk/ng-popover.git
```

Features
-----------
All old feauters +:

1. external scope inside
2. focus leave closing
3. horizontal offset, if you want to use it inside something like "card"

Usage
-----
  1. Include saprun-popover.js(or min.js) after loading AngularJS.
  2. Include saprun-popover.css.
  3. Add the saprun-popover module to your project:
  
    ```javascript
    var app = angular.module('yourModuleName', ['saprun-popover'])
    ```
  4. Add the saprun-popover directive along with multiple attributes:
  
    ```html
    <button class="my-custom-class" saprun-popover closeOnClick="false" direction="bottom" horizontalOffset="70" padding="20px" style="position: relative;">
        <!-- content of popover here -->
    </button>
    ```
  5. **IMPORTANT**: Keep in mind, the 'position' property of the element to which the directive is applied will be set to 'relative' if the current value of 'position' is 'static'.  

Options
-------

###mode
Decide on what event you want the popover to open - `click` or `mouseover`. If not specified, the click event will be used.

###close-on-click
Set close-on-click to `true` if you want the popover to close on click irrespective of the mode. If not set, the popover closes on click only if the mode is click.

###close-on-mouseleave
Set close-on-mouseleave to `true` if you want the popover to close on mouseleave irrespective of the mode. If not set, the popover closes on mouseleave only if the mode is mouseover.

###padding
Set the padding for the popover content just like in CSS.

###background-color
Set the background-color of the popover.

###text-color
Set the color of the text in the popover.

