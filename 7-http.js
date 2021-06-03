const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`
      <h1>Home Page</h1>
      <p>Welcome to my landing page</p>
      <a href="/about"><button>About</button></a>
    `)
  } else if (req.url === '/about') {
    res.end(`
      <h1>About</h1>
      <p>Welcome to my about page</p>
      <a href="/"><button>Home</button></a>
    `)
  } else {
    res.end(`
    <h1>404 Not Found</h1>
    <p>Content not available</p>
    <a href="/"><button>Home</button></a>
  `)
  }
})

server.listen('5000')
