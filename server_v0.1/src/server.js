const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
const cors = require('cors');

const sequelize = new Sequelize("mydb", "root", "3S6u2HsZr", {
    dialect: "mysql",
    host: "localhost"
});
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données E_GAMEPLAT_DB!');
   
} catch (error) {
    console.error('Impossible de se connecter à E_GAMEPLAT_DB, erreur suivante :', error);
}

app.use(express.json());

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/', (req, res) => {
    res.send('SERVEUR E_GAMEPLAT => SERVER ON')
})

app.post('/login', (request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    let username = request.body.username;
    let password = request.body.password;
    sequelize.query("SELECT * FROM user WHERE name = '" + username + "' AND password = '" + password + "'").then(([results, metadata]) => {
        console.log(results);
        console.log(results.length);
        if (results.length > 0) {
            // Authenticate the user
//            request.session.username = username;
            // Redirect to home page
            return response.send('Connected');
        } else {
            response.send('Incorrect Username and/or Password!');
        }
    })
})

app.post('/register', (request, res) => {
    console.log(request.body.username)
    let username = request.body.username;
    let email = request.body.email;
    let password = request.body.password;
    if (username && email && password) {

        sequelize.query("SELECT * FROM user WHERE name LIKE '" + username + "'").then(([results, metadata]) => {
            console.log(results);
            if (results.length) {
                res.send('Email already use :(');
            } else {
                sequelize.query("INSERT INTO user (name, email, password) VALUES ('" + username + "', '" + email + "', '" + password + "' )").then(([results, metadata]) => {
                    request.session.username = username;
                    // Redirect to home page
                    return res.send('OKay Connected');
                })
                res.send('The user has been registerd with us!');
            }
        })
    } else
        res.send('No info');

})

app.post('/create_room', (req, res) => {
    if (!req.body.nm_game && !req.body.nb_max && !req.body.player)
    sequelize.query("INSERT INTO room (nm_game, nb_player_max, player) VALUES ( '" + req.body.nm_game + "', '" + req.body.nb_max + "', " + JSON.stringify(req.body.player) + "'").then(([results, metadata]) => {
        console.log(results);
        if (!results.length) {
            res.status = 200;
            res.send("No room")
        } else {
            res.json(results);
        }
    })
})

app.post('/del_room', (req, res) => {
    if (!req.body.id_room)
    {
        try {
            sequelize.query("DELETE FROM room WHERE idroom = '" + req.body.id_room +"'")
        } catch (error) {
            console.error(error);
        }
    }
})

app.get('/room', (req, res) => {
    sequelize.query("SELECT * FROM room").then(([results, metadata]) => {
        console.log(results);
        if (!results.length) {
            res.status = 100;
        } else {
            console.log("results send");
            res.status = 200;
            return res.send(results);
        }
    })
})

app.listen(8079, () => {
    console.log("Server up and running")
})