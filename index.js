const express = require('express')
const app = express()

var consul = require('consul')({
    host: "consul"
});


app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/register', function (req, res) {
    consul.agent.service.register('example', function(err) {
        if (err) throw err;
        res.send('Registered!')
    });
})

app.get('/deregister', function (req, res) {
    consul.agent.service.deregister('example', function(err) {
        if (err) throw err;
        res.send('Deegistered!')
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

