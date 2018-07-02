function IncidentesDAO(connection) {
    this._connection = connection;
}
// Função que lista os Incidentes
IncidentesDAO.prototype.lista = function(callback) {
   // this._connection.query('select * from incidente', callback);
    this._connection.query('select  i.id as id, '+ 
                        'c.nome as cliente, ' + 
                        'a.nome as atendente, ' +
                        'i.descricao as descricao, ' +
                        'i.status as status, ' +
                        'DATE_FORMAT(i.creation_time ,\'%d/%m/%Y\') as creation_time ' +
                        'FROM incidente i ' +
                        'JOIN clientes c ON c.id = i.cliente ' +
                        'JOIN atendentes a ON a.id = i.atendente;', callback);
}
// Função que salva o Incidente
IncidentesDAO.prototype.salva = function(incidente, callback){
    this._connection.query('insert into incidente set ?', incidente, callback);
}
// Função que encerrar o Incidente
IncidentesDAO.prototype.encerrar = function(id, callback){
    this._connection.query("update incidente set status = \'encerrado\' where id = ?",[id],callback);
}
module.exports = function(){
    return IncidentesDAO;
};
