module.exports = function(app) {

    // Função que carrega os atendentes do Banco de Dados
    var listaAtendentes = function(req, res) {
        var connection = app.dao.connectionFactory();
        var atendentesDAO = new app.dao.AtendentesDAO(connection);

        atendentesDAO.lista(function(err, results) {
            res.render('atendentes/lista', {lista: results});
        });

        connection.end();
    }

    // Metodo que carrega a lista
    app.get('/atendentes', listaAtendentes);

    // Metodo que carrega o formulario
    app.get('/atendentes/add', function(req, res) {
        res.render('atendentes/add');
    });

    // Função que salva o atendente no Banco de Dados
    app.post('/atendentes', function(req, res) {
        var atendente = req.body;

        var connection = app.dao.connectionFactory();
        var atendentesDAO = new app.dao.AtendentesDAO(connection);

        atendentesDAO.salva(atendente, function(err, results) {
            res.redirect('/atendentes');
        });

        connection.end();
    });
}
