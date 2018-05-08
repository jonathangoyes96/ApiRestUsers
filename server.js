const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();


const hostname = '127.0.0.1';
const port = 3000;

var users = ['oscar', 'juan', 'marcos'];

var authors = [
	{id: 1, name: 'Oscar'},
	{id: 2, name: 'Juan'},
	{id: 3, name: 'Marcos'}
]

var books = [
	{
		id_autor: 1, titulo: 'El señor de los anillos', autor: 'J.R.R Tolkien',
		titulo: 'Cancion de hielo y juego', autor: 'George R.R martin',
	}
]

app.get('/', (req, res) => {
	res.status(200).send("welcome to API REST");
})

app.get('/users', (req, res) => {
	res.send(users);
})

app.get('/books', (req, res) => {
	res.send(books);
})

app.post('/users', (req, res) => {
	let data = req.query;
	users.push(data.user_name);
	res.send("New user added");
})

app.patch('/users/:id', (req, res) => {
	let params = req.params;
	let data = req.query;
	users[params.id] = data.user_name;
	res.send("User Updated");
})

app.delete('/users/:id', (req, res) => {
	let params = req.params;
	users.splice(params.id, 1);
	res.send("User delete");
})

http.createServer(app).listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})