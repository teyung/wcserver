const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))

const db = require('./config/keys.js').mongoURI
mongoose.connect(db, {useNewUrlParser:true}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect to the database ${err}`)
})

var users = require('./routes/Users')
app.use('/users', users)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}` )
})