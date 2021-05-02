//import built-in module "os"
const os = require('os');

//variable and os function usage
const upTime = secondsToHms(os.uptime());

const info = {
  user: os.userInfo().username,
  upTime: upTime,
  name: os.type(),
  release: os.release(),
  totalmem: `${os.totalmem()/1024/1024} MB`,
  freemem: `${os.freemem()/1024/1024} MB`
}

//function section
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

function showInfo(){
  console.log("3-info log:");
  console.log(info);
}

showInfo();
