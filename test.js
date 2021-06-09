const { readFileSync } = require('fs')
const http = require('http')

const home = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(home)
    res.end()
  }
})

server.listen(5000)
