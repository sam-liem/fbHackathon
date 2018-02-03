$(document).ready(function() {
  var msgCount = 0
  var codeRegexPattern = /\[([a-z]*)\]((.|\n)*)\[\/([a-z]*)\]/g;

  function replaceCode() {
    var messengerBubbles = document.getElementsByClassName('_aok');
    var j = messengerBubbles.length-1;
    for (var i = j; i >= 0; --i) {
      var messengerBubble = messengerBubbles[i];
      var messengerText = messengerBubble.firstChild.innerHTML
      var match = codeRegexPattern.exec(messengerText);
      if (match != null) {
        messengerBubble.parentNode.style.padding = "0";
        messengerBubble.parentNode.style.borderRadius = "25px";
        messengerBubble.innerHTML = '';
        var language = match[1];
        var codeStr = match[2];

        var pre = document.createElement('pre');
        pre.className = "prettyprint prettyprinted";
        pre.style.padding = "10px";
        pre.style.borderRadius = "25px";
        var formattedCode = PR.prettyPrintOne(codeStr, language, true);
        pre.innerHTML = formattedCode;

        messengerBubble.appendChild(pre);
      }
    }
    msgCount = messengerBubbles.length;
  }

  replaceCode();
  replaceCode();

  $('#js_1').on('DOMSubtreeModified', function(e) {
    if (!(document.getElementsByClassName('_aok').length == msgCount)) {
      replaceCode();
    }
  });
});