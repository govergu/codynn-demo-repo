const express = require('express')
const router = express.Router();

router.post('/login', (req, res) =>{
    const {email, password} = req.body;
    if(email === 'user@example.com' && password === 'password123'){
        return res.status(200).json({message: 'Login Successful', token: '12345'});

    }
    res.status(401).json({message: 'Invalid credentials'})
})

module.exports = router