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
  console.log("Messenger ready");
  initialize();

  // To be called when language is selected
  function formatInputBox() {
    // const  inputText();
  }

  function initialize() {
    var pre = document.createElement('pre');
    pre.setAttribute("id", "code-preview");
    pre.className = "prettyprint prettyprinted";
    $('._5rpb').prepend(pre);
  }

  function format(inputText) {
    var langTag = "js"
    // var code = `
    //     // Line
    //     static const string VOILA = "Voila";
    //     function testFunction() {
    //       return "Hello World!";
    //     }
    //     // This is just some more test code
    //     testFunction();
    //     var test = "Yo!";
    //     console.log("Printing some cool stuff");

    //     // This should be the last line of code!
    //   `

    for (var i = 0; i < inputText.length; i++) {
      console.log(inputText[i]);
    }

    var pre = $("._5rpb #code-preview");
    var formattedCode = PR.prettyPrintOne(code, 'py', true);
    pre.html(formattedCode);
  }

  // Returns an array on input text one line for each input
  function inputText() {
    var inputs = []
    var inputLines = $("div._1mf._1mj");
    inputLines.each(function() {
      inputs.push($(this).text());
    });
    return inputs;
  }

  $("._5rpb div").on("DOMSubtreeModified",function(){
    // console.log("Change in input detected");
    format(inputText());
  });

});