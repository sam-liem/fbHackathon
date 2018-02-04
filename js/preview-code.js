console.log("Preview code loaded");

const lineHeight = 17;
const letterWidth = 8.4;
const padding = 42;
const rightPadding = 8;
var cursorLine = 1;
var cursorLetter = 0;
var textLength = 0;
var numberOfLines = 0;

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
    $('._5rpu').css({opacity: 0});
    var pre = document.createElement('pre');
    pre.setAttribute("id", "code-preview");
    pre.className = "prettyprint prettyprinted";
    var cursor = document.createElement('span');
    cursor.className = "blinking-cursor";
    cursor.innerHTML = '|'
    $('._5rpb').prepend(pre);
    $('._5rpb').prepend(cursor);
    format(inputText(), 'js');
    initializeCursor();
  }

  function initializeCursor() {
    var inputLines = $("div._1mf._1mj");
    var line = inputLines.length;
    var letter = inputLines[line-1].firstChild.firstChild.innerHTML.length;
    textLength = inputLines.text().length;
    setCursorPos(line, letter);
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

  // Returns an array on input text one line for each input
  function inputText() {
    var inputs = []
    var inputLines = $("div._1mf._1mj");
    inputLines.each(function() {
      inputs.push($(this).text());
    });
    return inputs;
  }

  $("._5rpu").on("DOMSubtreeModified",function() {
    format(inputText(), 'js');
    // Checks if letter was added or remove
    var inputLines = $('._1mf._1mj');
    var newCursorLine = cursorLine;
    var newCursorLetter = cursorLetter;
    if (inputLines.text().length + 1 == textLength) {
      // letter removed
      newCursorLetter = cursorLetter - 1;
      textLength = inputLines.text().length;
    } else if (inputLines.text().length - 1 == textLength) {
      // letter added
      newCursorLetter = cursorLetter + 1;
      textLength = inputLines.text().length;
    }

    if (inputLines.text().length == textLength) {
      // Checks if line removed
      if (numberOfLines > inputLines.length) {
        console.log("removed line");
        newCursorLine = cursorLine - 1;
        newCursorLetter = inputLines[newCursorLine - 1].firstChild.firstChild.innerHTML.length;
        numberOfLines = inputLines.length;
      }
      // Checks if line added
      else if (numberOfLines < inputLines.length) {
        console.log("added line");
        newCursorLine = cursorLine + 1;
        newCursorLetter = 0;
        numberOfLines = inputLines.length;
      }
    }

    // console.log('newTextLength', textLength);
    // console.log('newNumLines', numberOfLines);

    setCursorPos(cursorLine, cursorLetter);

  });

  var enterField = document.getElementsByClassName('_5irm')[0];
  enterField.style.marginLeft = "0px";
  enterField.firstChild.style.backgroundColor = "#303640";
  enterField.firstChild.style.marginRight = "1%";

  // $('._5rpu').click(function (e) { //Offset mouse Position
  //   var posX = $(this).offset().left,
  //       posY = $(this).offset().top;
  //   var lineClicked = Math.floor(((e.pageY - posY) / lineHeight) + 1);
  //   var letterClicked;
  //   if (Math.floor((e.pageX - posX)) < padding) {
  //     letterClicked = 0;
  //   } else {
  //     letterClicked = Math.floor(((e.pageX - posX) - padding + (letterWidth/2) ) / letterWidth);
  //   }

  //   console.log("Clicked", lineClicked + ", " + letterClicked);
  //   setCursorPos(lineClicked, letterClicked);
  // });

  $('._5rpu').on('click', '._1mf._1mj', function(e) {
    const posX = $(this).offset().left;
    const posY = $(this).offset().top;

    const lineClicked = $('._1mf._1mj').index($(this)) + 1;
    var letterClicked = Math.floor(((e.pageX - posX) + (letterWidth/2) ) / letterWidth);
    if ((e.pageY - posY) > lineHeight) {
      // wrappedLine
      const wrappedLine = Math.floor((e.pageY - posY) / lineHeight);
      const lettersInLine = Math.round($(this).width()/letterWidth);
      letterClicked += lettersInLine * wrappedLine;
    }
    setCursorPos(lineClicked, letterClicked);
  });

  function numberOfWrappedLinesToPos(x) {
    var res = 0;
    const inputLines = $('._1mf._1mj');
    const lettersInLine = Math.round(inputLines.width()/letterWidth);
    inputLines.each(function(index) {
      if (index < x - 1) {
        const textLength = $(this).text().length;
        const wrappedLine = textLength > lettersInLine;
        if (wrappedLine) {
          const totalWraps = Math.floor(textLength/lettersInLine);
          res += totalWraps;
        }
      }
    });
    return res;
  }

  function setCursorPos(line, letter) {
    // console.log(line, letter);
    console.log("Attempting to move cursor to", line + ", " + letter);
    const actualLine = line;
    var actualLetter = letter;
    var inputLines = $('._1mf._1mj');
    var lineText = inputLines[line - 1].firstChild.firstChild.innerHTML;
    if (line > inputLines.length) {
      line = inputLines.length;
    }
    if (line < 1) {
      line = 1;
    }

    // Line here is visual line and not actual line
    line += numberOfWrappedLinesToPos(line);
    var lineLength;
    var totalWraps = 0;
    const lettersInLine = Math.round((inputLines.width()) /letterWidth);
    if (letter == lettersInLine) {
      letter = 0;
      line += 1;
    } else if (wrappedLine = letter > lettersInLine) {
      totalWraps = Math.floor(letter/lettersInLine);
      letter -= totalWraps * lettersInLine;
      line += totalWraps;
      try {
        lineLength = lineText.length - totalWraps * (lettersInLine - 1);
        if (lineLength > lettersInLine) {
          lineLength = lettersInLine;
        }
      } catch(e) {
        console.log('input is null', inputLines);
        console.log('line num', line);
      }
    } else {
      lineLength = lineText.length;
    }

    if (actualLetter > lineText.length + totalWraps) {
      actualLetter = lineText.length + totalWraps
    }

    if (letter < 0) {
      letter = 0;
    }
    if (letter > lineLength) {
      letter = lineLength;
    }

    y = (line - 1) * lineHeight + 2;
    x = padding + letter * letterWidth - 1;
    console.log("Moving cursor to", y + ", " + x);
    $('.blinking-cursor').css({top: y, left: x});
    // Update vars
    // These are to be actual line and letter and NOT visual line and letter
    cursorLine = actualLine;
    cursorLetter = actualLetter;
  }

  $("._5rpu").on('keydown', function(e) {
    var line = cursorLine;
    var letter = cursorLetter
    switch(e.which) {
      case 37: // left
      letter = cursorLetter - 1;
      break;
      case 38: // up
      line = cursorLine - 1;
      break;
      case 39: // right
      letter = cursorLetter + 1;
      break;
      case 40: // down
      line = cursorLine + 1;
      if (letter > cursorLettersInLine(line)) {
        letter = cursorLettersInLine(line);
      }
      break;
      default: return; // exit this handler for other keys
    }
    if (letter < 0) {
      line--;
      letter = cursorLettersInLine(line);
    } else if (letter > cursorLettersInLine(line)) {
      line++;
      letter = 0;
    }
    setCursorPos(line, letter);
    // e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  function cursorLettersInLine(lineNum) {
    const inputLines = $('._1mf._1mj');
    const lineLength = inputLines[lineNum - 1].firstChild.firstChild.innerHTML.length;
    const lettersInLine = Math.round(inputLines.width()/letterWidth);
    const totalWraps = Math.floor(lineLength/lettersInLine);
    return lineLength + totalWraps;
  }

  $(document).on('click', function(e) {
    var elem = document.getElementsByClassName('_4_j4')[0];
    if (e.target == elem || elem.contains(e.target)) {
      $('.blinking-cursor').show();
    } else {
      $('.blinking-cursor').hide();
    }
  });

});