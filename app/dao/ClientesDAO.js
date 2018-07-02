function ClientesDAO(connection) {
    this._connection = connection;
}
// Função que lista os clientes
ClientesDAO.prototype.lista = function(callback) {
    this._connection.query('select * from clientes', callback);
}
// Função que salva os clientes
ClientesDAO.prototype.salva = function(cliente, callback){
    this._connection.query('insert into clientes set ?', cliente, callback);
}

module.exports = function(){
    return ClientesDAO;
};
