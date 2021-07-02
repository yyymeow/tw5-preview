/*\
title: $:/plugins/tobibeer/preview/keyboard.js
type: application/javascript
module-type: utils

Fixes $:/core/modules/utils/dom/keyboard.js by providing an alternative.
Do not use as an API, let's fix the core.

@preserve
\*/
!function(){"use strict";var n={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46};exports.parseKeyDescriptorTB=function(e){for(var t,l,y=e.toUpperCase().split("+"),r={keyCode:null,shiftKey:!1,altKey:!1,ctrlKey:!1},K=0;K<y.length;K++)t=!1,"!"===(l=y[K]).substr(0,1)&&(t=!0,l=l.substr(1)),"CTRL"===l?r.ctrlKey=!t||null:"SHIFT"===l?r.shiftKey=!t||null:"ALT"===l?r.altKey=!t||null:"META"===l?r.metaKey=!t||null:r.keyCode=n[l]||l.charCodeAt(0);return r},exports.checkKeyDescriptorTB=function(e,t){var l=!!t.metaKey;return!(null!==t.keyCode&&e.keyCode!==t.keyCode||(null===t.shiftKey?e.shiftKey:e.shiftKey!==t.shiftKey)||(null===t.altKey?e.altKey:e.altKey!==t.altKey)||(null===t.ctrlKey?e.ctrlKey:e.ctrlKey!==t.ctrlKey)||(null===t.metaKey?e.metaKey:e.metaKey!==l))}}();