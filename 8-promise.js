const { readFile, writeFile } = require('fs')

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const writeText = (path, data) => {
  writeFile(
    path,
    `here the ${data} written asyncronously \n`,
    { flag: 'a' },
    (err, result) => {
      if (err) {
        return
      }
    }
  )
}

const start = async () => {
  try {
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')
    await writeText('./content/result-async.txt', first + second)
    const res = await getText('./content/result-async.txt')
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

start()

// getText('../content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
