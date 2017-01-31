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
  1. Include angular-popover.js(or min.js) after loading AngularJS.
  2. Include angular-popover.css. 
  3. Add the angular-popover module to your project:
  
    ```javascript
    var app = angular.module('yourModuleName', ['angular-popover'])
    ```
  4. Add the angular-popover directive along with multiple attributes:
  
    ```html
    <div angular-popover direction="top" template="hey there!">
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

