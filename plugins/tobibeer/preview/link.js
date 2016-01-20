/*\
title: $:/plugins/tobibeer/preview/link.js
type: application/javascript
module-type: startup

Enhances the link widget for on-hover previews

@preserve
\*/
(function(){var e,t=require("$:/core/modules/widgets/link.js").link,i=t.prototype.render,o=t.prototype.handleClickEvent;t.prototype.render=function(){i.apply(this,arguments);var t=this,o=this.wiki,p=this.domNodes[0],r=o.getTiddler(t.to),n="$:/plugins/tobibeer/preview/defaults/",u="$:/temp/tobibeer/preview-",l=$tw.utils.parseKeyDescriptorTB(o.getTextReference(n+"keys","").toUpperCase()),s=o.getTextReference(n+"delay").toUpperCase(),a=function(e){var i=$tw.popup.popupInfo(e),p=i.popupLevel;return o.getTextReference(u+p)&&o.getTextReference(u+p+"-tiddler")===t.to?null:i},d=function(){var i,r=a(p);if(r){i=r.popupLevel;clearTimeout(t.previewTimeout);$tw.popup.cancel(i);i++;o.setText(u+i+"-tiddler","text",null,t.to);setTimeout(function(){$tw.popup.triggerPopup({domNode:p,title:u+i,wiki:o});e=0},50)}},f=function(){var e,i,r=1,u=o.getTextReference(n+"not","");if(u){$tw.utils.each(u.split(" "),function(e){var t=p;while(t&&r){if($tw.utils.hasClass(t,e)){r=0;return false}t=t.parentNode}})}if(r){i=o.getTextReference(n+"exclude","");e=i?o.filterTiddlers(i):[];if(e.indexOf(t.to)>=0){r=0}}return r};s=s!==undefined?parseInt(s):null;if(s!==null&&isNaN(s)){s=0}if(r){$tw.utils.addClass(p,"tc-popup-handle");$tw.utils.addClass(p,"tc-popup-absolute");["mouseover","mouseout"].forEach(function(i){p.addEventListener(i,function(o){var p=o||window.event;if(i==="mouseover"){if(f()){if(!p.keyCode){p.keyCode=0}if($tw.utils.checkKeyDescriptorTB(p,l)){if(!e){e=1;d()}}else if(s!==null){e=0;t.previewTimeout=setTimeout(d,s)}}}else{e=0;clearTimeout(t.previewTimeout)}})})}};t.prototype.handleClickEvent=function(){o.apply(this,arguments);clearTimeout(this.previewTimeout);$tw.popup.cancel(Math.max(0,$tw.popup.popupInfo(this.domNodes[0]).popupLevel-1))}})();