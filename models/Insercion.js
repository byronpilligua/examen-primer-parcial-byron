//Los esquemas a usar para la insercion
const { model, Schema } = require('mongoose');

const NotaSchema = new Schema({
    Placa: String,
    Descripciòn: String,
    Dueño: String,
    Valorvehiculo: String,
    ImpuestoRodaje: String,
    ImpuestoVerde: String,
    TipoError: String,
});
  
const Insercion = model('Insercion', NotaSchema);
module.exports = Insercion;