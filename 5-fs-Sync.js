//import built-in module "fs"
const { readFileSync, writeFileSync } = require('fs');

//readFileSync([path], [charset])
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// writeFileSync([path*], [content], [flag**])
// *if path exist, overwrite, if not, create new file
// **flag is optional, if flag: a, node will create new line instead of replacing,
// useful for logging
writeFileSync('./content/result-sync.txt',
  `Here the ${first}, and here the ${second}`,
  { flag: 'a' }
);
