const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./style.css')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/stylesheet' })
    res.write(homeStyle)
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Page Not Found</h1>')
    res.end()
  }
})

server.listen(5000)
