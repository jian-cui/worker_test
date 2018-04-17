var pool = [];
// var data;
onconnect = function(e) {
  var port = e.ports[0];
  pool.push(port);
  port.onmessage = function(e) {
    data = 'Result: ' + e.data;
    for(var i=0;i<pool.length;i++) {
      pool[i].postMessage(data);
    }
  }
}


