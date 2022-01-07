// Require packages and set the port
const express = require('express')
const port = 3100
const app = express()
const bodyParser = require('body-parser')
const routes = require('./serverRoutes/routes')
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(cors())
app.options('*', cors())
routes(app)

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`)
 
    console.log(`Server listening on port ${server.address().port}`)
})