function codeOutput () {
  var $container = document.getElementById('container');
  var html = [
    "<!DOCTYPE html>",
    "<html>",
    " <head>",
    "  <style>",
    "   body {",
    "    font-family:'Source Sans Pro', sans-serif;",
    "   }",
    "   h1 {",
    "    font-weight:600;",
    "   }",
    "  </style>",
    "  <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,600' rel='stylesheet' type='text/css'>",
    " </head>",
    "<body>",
    " <script>"
  ];

  for (var i = 0; i < arguments.length; i++) {
    html.push(document.getElementsByTagName('pre')[arguments[i]].firstChild.textContent);
  };

  var afterEl = document.getElementsByTagName('pre')[arguments[i - 1]].nextSibling;

  html.push(
    "  <\/script>",
    " <\/body>",
    "<\/html>"
  );

  var a = document.createElement('a');
  a.href = 'data:text/html;charset=utf-8;base64,' + b64EncodeUnicode(html.join('\n'));
  a.target = '_blank';
  a.textContent = 'Run result';
  container.insertBefore(a, afterEl.nextSibling);

  function b64EncodeUnicode(str) {
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
          return String.fromCharCode('0x' + p1);
      }));
  }
}
