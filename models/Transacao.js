const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model Transacao
// Definindo o Model
const TransacaoSchema =  mongoose.Schema({ 
    tipoTransacao: {type: String, required: true},
    dtTransacao  : {type: Date, default: Date.now()},
    nmBeneficiario: {type: Schema.Types.ObjectId, ref: 'beneficiarios'},
    nrBanco: {type: Number, required: true},
    nrConta: {type: Number, required: true},
    nrAgencia: {type: Number, required: true},
    vlTransacao: {type: Number, required: true},
    nrCPF: {type: Number, required: true},
    dsEmail: {type: String, required: true}                            
});

// Collection
mongoose.model('transacao', TransacaoSchema);