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
    password: '123456789',
    database: 'projet_bdd'
})

db.connect((err) => {
    if (err) {console.log(err.message)}
    else {console.log("MYSQL connected...")}
})

application.use(cors())
application.use(express.json())
application.use(express.urlencoded({ extended: false}))

const all = require('./routes/users')
const authRouter = all.router
const errors = all.errors
const signErrors = all.erreur
const info = all.info
///Define routes
application.use('/', authRouter)

const app = express()
router = express.Router()
usersRoute =  (req, res) => {
    res.json({
        erreur: {
            username: signErrors.username,
            userprenom: signErrors.userprenom,
            role: signErrors.role,
            type: signErrors.type,
            email: signErrors.email, 
            password: signErrors.password,
            password2: signErrors.password2
        },
        err: {
            email: errors.email, 
            pass: errors.password
        },
        information: {
            id : info.id,
            nom : info.nom,
            prenom : info.prenom,
            email : info.email,
            psswrd : info.password,
            service : info.service,
            role : info.role,
            CT : info.CT
        }
    })
}


router.get("/", usersRoute)

app.use("/users/", router)


app.listen(3001, function(){
    console.log("node working")
})
application.listen(3006, () => {
    console.log('running on port 3006')
})