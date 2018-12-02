window.addEventListener('DOMContentLoaded', function () {
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.innerHTML = 'Hello! World!';
  body.insertBefore(div, body.firstChild);
});
