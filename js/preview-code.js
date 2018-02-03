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

  // Must always run on document load for it to work
  function initialize() {
    var pre = document.createElement('pre');
    pre.setAttribute("id", "code-preview");
    pre.className = "prettyprint prettyprinted";
    $('._5rpb').prepend(pre);
  }

  function format(inputText) {
    var code = '';
    for (var i = 0; i < inputText.length; i++) {
      code += inputText[i] + "\n";
    }

    var pre = $("#code-preview");
    var formattedCode = PR.prettyPrintOne(code, 'py', true);
    pre.html(formattedCode);
  }

  function setLanguage(lang) {
    $("#code-preview").addClass('lang-'+lang);
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
    setLanguage('js');
    format(inputText());
  });

});