var mysql  = require('mysql');

// Funcão que cria a conexão com banco de dados
function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'ssd_base'
    });
}

module.exports = function() {
    return createDBConnection;
}
