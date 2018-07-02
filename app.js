// Carrega as configurações
var app = require('./config/express')();

app.listen(3000, function() {
    console.log("O Servidor está Rodando");
})
