var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    //Configurar o caminho para carregar o CSS
    app.use(express.static('./public'));
    //Configura qual view engine será utilizada
    app.set('view engine', 'ejs');
    //Configura o caminho das views da aplicação
    app.set('views', './app/views');
    

    app.use(bodyParser.urlencoded({extended: true}));

    load('routes', {cwd: 'app'})
        .then('dao')
        .into(app);

    return app;
}
