const express = require('express')
const fs = require('fs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const key = require('../config/keys.js')

const app = express()

const user = require('../models/user.js')

app.post('/signup', (req,res) => {
    const userData = {
        first_name:req.body.fname,
        middle_initial:req.body.mname,
        last_name:req.body.lname,
        mobile_no:req.body.mobilenum,
        address:req.body.address,
        birthdate:req.body.bdate,
        sex:req.body.sex,
        email_address:req.body.email,
        username:req.body.username,
        password:req.body.password,
    }
    user.findOne({
        email: req.body.email
    }).then(user =>{
        if(!user) {
            bcrypt.hash((req.body.password), 10, (err,hash) => {
                userData.password = hash
                user.create(userData)
            }).then( user => {
                res.send('User successfully registered')
            })
        } else {
            return res.status(400).json({
                msg: 'Email already registered.'
            })
        }
    }).catch(err => {
        res.send('Error: ' + err)
    })
})
