var input = document.getElementById('input');
var output = document.getElementById('output');
var btn = document.getElementById('btn');

if (window.Worker) {
  var worker = new Worker('worker.js');

  btn.onclick = function(e) {

    var val = input.value;
    console.log('发送信息：', val);
    worker.postMessage(val);
  }

  worker.onmessage = function(e) {
    var data = e.data;
    output.innerText = data;
  }
}