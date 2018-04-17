onmessage = function(e) {
  var msg = 'Result: ' + e.data;
  postMessage(msg);
}