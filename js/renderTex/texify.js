chrome.runtime.sendMessage({method: 'shouldTeXify', host: location.host},
  function(response) {
    var mathjax = document.createElement('script');
      mathjax.type = 'text/javascript';
      mathjax.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured';

      var inline_delimiters = [];
      inline_delimiters.push(['$', '$']);
      inline_delimiters.push(['[;', ';]']);

      var display_delimiters = [];
      display_delimiters.push(['$$', '$$']);
      display_delimiters.push(['\\[', '\\]']);

      var pageScript = document.createElement('script');
      pageScript.id = 'texAllTheThingsPageScript';
      pageScript.type = 'text/javascript';
      pageScript.src = chrome.extension.getURL('js/renderTex/pageScript.js');
      pageScript.setAttribute('inlineMath', JSON.stringify(inline_delimiters));
      pageScript.setAttribute('displayMath', JSON.stringify(display_delimiters));

      document.body.className = "no-mathjax"
      document.body.appendChild(mathjax);
      document.body.appendChild(pageScript);
  });