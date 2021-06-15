const express = require('express')
const path = require('path')
const app = express()
const port = 5000

//importing external middleware function
const authorize = require('./middleware/authorize')
const logger = require('./middleware/logger')

// to make express only "use" on specific path, you can add
// use([path], callback [, callback ,]);
// app.use('/api', logger);

app.use([express.static('./public'), authorize, logger])

// example of internal middleware function
// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next()
// }

// or you can use third party middleware like morgan through
// NPM installation npm i morgan

// app.get('/', logger, morgan('tiny'), (req, res) => {
//   res.sendFile(path.resolve(__dirname, './index.html'))
// })

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/about', (req, res) => {
  console.log(req.user)
  res.send('<h1>About</h1>')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
