import mongoose,{Schema} from 'mongoose';

const articuloSchema = new Schema({
    categoria: {
        type: Schema.ObjectId, 
        ref:'categoria'
    },
    codigo:{
        type: String,
        maxlength: 64,
        unique: true
    },
    nombre: {
        type: String,
        maxlength: 50,
        required: true,
    },
    marca: {
        type: String,
        maxlength: 64
    },
    tipo_articulo: {
        type: String,
        maxlength: 40,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    tipo_stock: {
        type: String,
        maxlength: 50,
        required: true
    },
    precio:{
        type: Number,
        default: 0
    },
    estado:{
        type: Number,
        default: 1 
    },
    fechaVencimiento:{
        type: Date,
        min: Date.now,
        max: '3000-01-01'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Articulo = mongoose.model('articulo', articuloSchema);
export default Articulo;