console.log("Preview code loaded");

// active should be true iff code inputting formatting selected
// const active = false;
// const language;

// function toggleActive() {
//   active = !active;
// }

// function setLanguage(lang) {
//   language = lang;
// }

$(document).ready(function() {
<<<<<<< HEAD
=======
  console.log("Messenger ready");
  initialize();
>>>>>>> a11409322ddb7bc0a2486f6bba85dd8798a57487

  // // To be called when language is selected
  // function formatInputBox() {
  //   // const  inputText();
  // }

<<<<<<< HEAD
  // function format() {
  //   var langTag = "js"
  //   var code = `
  //       // Voila
  //       static const string VOILA = "Voila";
  //       function testFunction() {
  //         return "Hello World!";
  //       }
  //       // This is just some more test code
  //       testFunction();
  //       var test = "Yo!";
  //       console.log("Printing some cool stuff");

  //       // This should be the last line of code!
  //     `

  //   var pre = document.createElement('pre');
  //   pre.className = "prettyprint prettyprinted";
  //   var formattedCode = PR.prettyPrintOne(code, 'py', true);
  //   pre.innerHTML = formattedCode;
  //   $('._5rpb').prepend(pre);
  // }

  // // Returns an array on input text one line for each input
  // function inputText() {
  //   var inputs = []
  //   var inputLines = $("div._1mf._1mj");
  //   inputLines.each(function() {
  //     inputs.push($(this).text());
  //   });
  //   return inputs;
  // }

  // $("._5rpb").on("DOMSubtreeModified",function(){
  //   // console.log("Change in input detected");
  //   inputText();
  //   //format();
  // });
  
  // Must always run on document load for it to work
  function initialize() {
    var pre = document.createElement('pre');
    pre.setAttribute("id", "code-preview");
    pre.className = "prettyprint prettyprinted";
    $('._5rpb').prepend(pre);
    format(inputText(), 'js');
  }

  function format(inputText, lang) {
    var code = '';
    for (var i = 0; i < inputText.length; i++) {
      code += inputText[i] + "\n";
    }

    var pre = $("#code-preview");
    var formattedCode = PR.prettyPrintOne(code, lang, true);
    pre.html(formattedCode);
  }

  var msgCount = 0
  function replaceCode() {
    var messengerBubbles = document.getElementsByClassName('_aok');
    var j = messengerBubbles.length-1;
    for (var i = j; i >= 0; --i) {
      var messengerBubble = messengerBubbles[i];
      if ((messengerBubble.innerHTML.includes("[js]")) && (messengerBubble.innerHTML.includes("[/js]"))) {
        var span = messengerBubble.firstChild;
        var message = span.innerHTML;

        messengerBubble.innerHTML = '';

        message = message.replace(/\[js\]/g,'');
        message = message.replace(/\[\/js\]/g,'');
        var pre = document.createElement('pre');
        pre.className = "prettyprint prettyprinted";
        var formattedCode = PR.prettyPrintOne(message, 'js', true);
        pre.innerHTML = formattedCode;

        // messengerBubble.appendChild(span);
        messengerBubble.appendChild(pre);
      }
    }
    msgCount = messengerBubbles.length;
  }

  replaceCode();
  $('#js_1').on('DOMSubtreeModified', function(e) {
    if (!(document.getElementsByClassName('_aok').length == msgCount)) {
      console.log("new message");
      replaceCode();
    }
  });

  $("._5rpu").on("DOMSubtreeModified",function(){
    // console.log("Change in input detected");
    format(inputText(), 'js');
  });


});