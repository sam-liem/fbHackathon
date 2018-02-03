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

  // To be called when language is selected
  function formatInputBox() {
    // const  inputText();
  }

  function format() {
    var langTag = "js"
    // $("._5rpb").prepend( 
    //   "<pre class='prettyprint linenums lang-" + langTag + "'>" + `
    //     // Voila
    //     static const string VOILA = "Voila";
    //     function testFunction() {
    //       return "Hello World!";
    //     }
    //     // This is just some more test code
    //     testFunction();
    //     var test = "Yo!";
    //     console.log("Printing some cool stuff");

    //     // This should be the last line of code!
    //   </pre>`
    // )
    // PR.prettyPrint();
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

  $("._5rpb").on("DOMSubtreeModified",function(){
    // console.log("Change in input detected");
    inputText();
    format();
  });

});