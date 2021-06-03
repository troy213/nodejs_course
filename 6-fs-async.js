//import built-in module "fs"
const { readFile, writeFile } = require('fs')

//readFile and writeFile are async
//readFile([path], [charset], [callback])
//writeFile([path*], [content], [flag**], [callback])
// **flag is optional, if flag: a, node will create new line instead of replacing,
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here the ${first} result, and here the ${second} result asyncronously.`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})
