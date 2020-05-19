const mysql = require('mysql');
const restify = require('restify');

function helloapp(req, res, next) {
    res.send('Hello '+ req.params.name);
    next();
}

const server = restify.createServer();

server.get('/hello/:name', helloapp);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(4040, function () {
    console.log('Server listening.. @ 4040');
});
      
