var fs = require('fs');
var data = '';

for (var k = 0; k < 5e3; k++) {
  // data += '' + k/1e5 + ' ' + 2 * (Math.random()-0.5) / 1e3 + '\n';

  data += '' + k/1e5 + ' ' +
    (0 + 
     7 * Math.sin(k * 2 * Math.PI / 1e2) + 
     3 * Math.sin(k * 2 * Math.PI / 1e3) + 
     // add a tap at 30ms
     (k > 3e3 ? 2e5 / (k-3e3+1e1) / (k-3e3+1e1) : 0) * Math.sin(k * 2 * Math.PI / 3e1) +
     0) / 1e3 + 
    '\n';
}

fs.writeFile('sig.txt', data);
// fs.writeFile('2mvpp_noise.txt', data);
