const express = require('express');
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRoutes = require('./route/web');
require('dotenv').config();


let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

let port = process.env.PORT || 8000

app.listen(port, () => {
  console.log("app thanh cong:" + port)
})




// app.use(morgan('combined'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`chạy thành công trên port ${port}`)
// })