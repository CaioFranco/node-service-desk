function AtendentesDAO(connection) {
    this._connection = connection;
}
// Função que lista os atendentes
AtendentesDAO.prototype.lista = function(callback) {
    this._connection.query('select * from atendentes', callback);
}
// Função que salva os atendentes
AtendentesDAO.prototype.salva = function(atendente, callback){
    this._connection.query('insert into atendentes set ?', atendente, callback);
}

module.exports = function(){
    return AtendentesDAO;
};
