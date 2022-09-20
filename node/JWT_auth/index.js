const { application } = require('express');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//
app.get('/login', (req, res) => {
    res.send(`<html>
    <head>
        <title>login</title>
    </head>
    <body>
        <form method= "POST" action="/auth">
            Nombre de usuario: <input type = "text" name="text"><br/>
            Contraseña: <input type = "password" name="password"><br/>
            <input type = "submit" name="submit" />
        </form>
    </body>
    </html>`);
});
//
app.get('/api', validateToken,(req, res) => {
    res.json({
        tuits: [
            {id : 0,
            text: 'primer tuit'},
            {id : 1,
            text: 'segundo tuit'},
            {id : 2,
            text: 'tercer tuit'},
        ]
    });
});
app.post('/auth', (req, res) => {
    const {username, password} = req.body;
    const user = {username:username};
    const accessToken = generateAccessToken(user);
    res.header('authorization', accessToken).json({
        message: 'Authentication successful',
        token: accessToken
    })
});
//
function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '5m'});
};
function validateToken(req, res, next) {
    const accessToken = req.header['authorization'];
    if (!accessToken) {
        return res.send('Access denied');
    }
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) =>{
        if (err) {
            return res.send('Access denied');
        } else{
            next();
        }
    })
};
//

app.listen(3000, () => {
    console.log('Example app listening on port port!');
});
