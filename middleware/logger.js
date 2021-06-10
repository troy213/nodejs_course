const { writeFile } = require('fs').promises

const start = async (method, url, time) => {
  try {
    await writeFile('./content/log.txt', `${method} ${url} ${time} \n`, {
      flag: 'a',
    })
  } catch (error) {
    console.log(error)
  }
}

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  start(method, url, time)
  console.log(method, url, time)
  next()
}

module.exports = logger
