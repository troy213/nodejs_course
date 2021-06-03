const { createReadStream, readFileSync } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  // const text = readFileSync('./content/big-file.txt', 'utf8')
  // res.end(text)

  const text = createReadStream('./content/big-file.txt', 'utf8')
  text.on('open', () => {
    text.pipe(res)
  })
  text.on('error', (err) => {
    res.end(err)
  })
})

server.listen(5000)
