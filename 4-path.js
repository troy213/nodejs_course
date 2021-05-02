// import built-in module path
const path = require('path');

//variable and path function usage
const filePath = path.join('/content', 'subfolder', 'test.txt');
const base = path.basename(filePath);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

const myPath = {
  separator: path.sep,
  filePath: filePath,
  base: base,
  absolute: absolute
}

//function section
function showPath() {
  console.log("4-path log:");
  console.log(myPath);
}

showPath();
