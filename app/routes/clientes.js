module.exports = function(app) {

    // Função que carrega os clientes do Banco de Dados
    var listaClientes = function(req, res) {
        var connection = app.dao.connectionFactory();
        var clientesDAO = new app.dao.ClientesDAO(connection);

        clientesDAO.lista(function(err, results) {
            res.render('clientes/lista', {lista: results});
        });

        connection.end();
    }

    // Metodo que carrega a lista
    app.get('/clientes', listaClientes);

    // Metodo que carrega o formulario
    app.get('/clientes/add', function(req, res) {
        res.render('clientes/add');
    });

    // Função que salva o cliente no Banco de Dados
    app.post('/clientes', function(req, res) {
        var cliente = req.body;

        var connection = app.dao.connectionFactory();
        var clientesDAO = new app.dao.ClientesDAO(connection);

        clientesDAO.salva(cliente, function(err, results) {
            res.redirect('/clientes');
        });

        connection.end();
    });
}
