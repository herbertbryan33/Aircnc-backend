const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const db_name = process.env.DB_NAME
const URL = 'mongodb+srv://' + db_username + ':' + db_password + '@aircnc.sgzsg.mongodb.net/' + db_name + '?retryWrites=true&w=majority';

mongoose.connect(URL, {useNewUrlParser: true,useUnifiedTopology: true,})
	.then(console.log("Conectado ao banco de dados."))
	.catch(err => console.log(">> ERROR: ",err));

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (ciração/edição)

app.use(express.json());
app.use(routes);



app.listen(3333);

