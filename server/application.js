const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { urlencoded } = require('express')

const application = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '22052001',
    database: 'projet_bdd'
})

db.connect((err) => {
    if (err) {console.log(err.message)}
    else {console.log("MYSQL connected...")}
})

application.use(cors())
application.use(express.json())
application.use(express.urlencoded({ extended: false}))

const authRouter = require('./routes/users')

///Define routes
application.use('/', authRouter)


application.listen(3004, () => {
    console.log('running on port 3004')
})