module.exports = function(app) {

    // Função que carrega os incidentes do Banco de Dados
    var listaIncidentes = function(req, res) {
        var connection = app.dao.connectionFactory();
        var incidentesDAO = new app.dao.IncidentesDAO(connection);

        incidentesDAO.lista(function(err, results) {
            res.render('incidentes/lista', {lista: results});
        });

        connection.end();
    }

    // Metodo que carrega a lista
    app.get('/incidentes', listaIncidentes);

    // Metodo que carrega o formulario
    app.get('/incidentes/add', function(req, res) {
        var connection = app.dao.connectionFactory();
        var clientesDAO = new app.dao.ClientesDAO(connection);
        var atendentesDAO = new app.dao.AtendentesDAO(connection);  
        var listaAtendentes;

        atendentesDAO.lista(function(err, results) {
            listaAtendentes = results;
        });

        clientesDAO.lista(function(err, results) {
            res.render('incidentes/add', {clientes: results, atendentes: listaAtendentes});
        });

        connection.end();
    });

    // Função que salva o incidente no Banco de Dados
    app.post('/incidentes', function(req, res) {
        var incidente = req.body;

        var connection = app.dao.connectionFactory();
        var incidentesDAO = new app.dao.IncidentesDAO(connection);

        incidentesDAO.salva(incidente, function(err, results) {
            res.redirect('/incidentes');
        });

        connection.end();
    });

    // Função que encerra o incidente 
    app.get('/incidentes/encerrar/:id', function(req, res) {     
        var connection = app.dao.connectionFactory();
        var incidentesDAO = new app.dao.IncidentesDAO(connection);

        incidentesDAO.encerrar(req.params.id,function(err,results) {
            res.redirect('/incidentes/encerrar');
        });

        connection.end();
    });

    app.get('/incidentes/encerrar',function(req,res){
        
        res.render("incidentes/encerrar");
    });
}
