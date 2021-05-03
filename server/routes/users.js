const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const router = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projet_bdd'
})

router.post('/signup/', (req, res) => {
    const nm = req.body.nom
    const prnm = req.body.prenom
    const adrss_email = req.body.e_mail 
    const mp = req.body.mdpss
    const mp2 = req.body.mdpss2
    const srv = req.body.srvc
    const type = req.body.tp 

    //console.log(req.body)
    // VERIFIE LES CHAMPS 
    if (!nm || !prnm || !srv ||! type || !mp2 || !adrss_email || !mp){
        return console.log('un champs est vide ')
    }
    // VERIFIE L'ADRESSE EMAIL
    if (!/\S+@\S+\.\S+/.test(adrss_email)){
        return console.log('EMAIL INVALID')
    }
    // VERIFIER L'ADRESSE EMAIL ET LE MOT DE PASSE 
    db.query('SELECT email FROM users WHERE email = ?', [adrss_email], async (error, results) => {
        if (error) {console.log('la 1: '+error.message)}

        if (results.length > 0) {
            return console.log('EXISTE DEJA ');
            ////
            ////
        }      
        if (mp.length < 8){
            return console.log('MOT DE PASS 8 CARATERER')
        }
        if (mp != mp2){
            return console.log('MOT DE PASSE INCORRECT ')
        }
        const hashedpsswrd = await bcrypt.hash( mp, 8)
        const sqlinsert = "INSERT INTO users SET id_user = DEFAULT ,nom=? , prenom=? , email=? , password=? , service=? , type=? ,create_time=DEFAULT"
        db.query(sqlinsert, [nm, prnm, adrss_email, hashedpsswrd, srv, type], (error, results) => {
            if (error) {
                console.log('la 2: '+error.message)
            } else {
                console.log('user registered')
            }
            })
    })
})

router.post('/login/', async (req, res) => {
    const adrss_email = req.body.e_mail 
    const mp = req.body.mdpss

    console.log(req.body)
    // VERIFIE LES CHAMPS 
    if (!adrss_email || !mp){
        return console.log('un champs est vide ')
    }
    db.query('SELECT * FROM users WHERE email = ?', [adrss_email], async (error, results) => {
        if (error) {
            console.log(error.message)
        }
        if ( (results.length == 0) || !(await bcrypt.compare(mp, results[0].password)) ) {
            return console.log('inexistant !!')
        } else {
            /////////
            ////////
            console.log('WELCOME TO YOUR PROFILE')
        }
    })
})

module.exports = router