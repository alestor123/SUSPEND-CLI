var { exec } = require('child_process');
sleep()
function sleep(cb){
if (process.platform === 'darwin') run('pmset sleepnow')
else if (process.platform === 'linux') run('sudo systemctl suspend')
else if (process.platform === 'win32') run('rundll32.exe powrprof.dll,SetSuspendState 0,1,0')
else throw new Error('Unknown OS!');
}

function run(cmd) {
exec(cmd, (err, stderr, stdout) => {
if(err) throw err
});}
module.exports = sleep