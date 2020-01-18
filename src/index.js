const spawn = require('child_process').spawn;

module.exports = (params) => {
  const stdout = [];
  const stderr = [];

  if (typeof params === 'string') params = params.split(' ');

  return new Promise((resolve, reject) => {
    var proc = spawn('openssl', params);
    proc.stdout.on('data', (data) => {
      stdout.push(data);
    });
    proc.stderr.on('data', (data) => {
      stderr.push(data);
    });
    proc.on('error', (error) => {
      reject(new Error(error | stderr));
    });
    proc.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(stderr.join('\n')));
      } else {
        resolve(stdout.join('\n'));
      }
    });
  });
}