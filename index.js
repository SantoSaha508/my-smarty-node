const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('look mama ! I can code Node now. so enjoy your self');
});

const users = [
    {id: 1, name: "shanto", phone: "012451"},
    {id: 2, name: "pranto", phone: "012546"},
    {id: 3, name: "pranab", phone: "019845"},
    {id: 4, name: "milton", phone: "221155"},
    {id: 5, name: "abrar", phone: "777777"},
    {id: 6, name: "sohag", phone: "999999"},
    {id: 7, name: "wosik", phone: "888888"}
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1 ;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log("this is from listen port", port);
})