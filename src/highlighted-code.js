window.HighlightedCode = window.HighlightedCode || (function(){
  "use strict";

  return document.registerElement("highlighted-code", {
    extends: "pre",
    prototype: Object.create(window.HTMLPreElement.prototype, {
      attachedCallback: {
        value: function(){
          hljs.highlightBlock(this);
        }
      }
    })
  });

})();