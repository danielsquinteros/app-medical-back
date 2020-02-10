import mongoose, {Schema} from 'mongoose';
const agregaSchema = new Schema({
    usuario:{
        type: Schema.ObjectId, 
        ref: 'usuario',
        required:true 
    },
    proveedor:{ 
        type: Schema.ObjectId, 
        ref: 'proveedore',
        required:true 
    },
    tipo_comprobante:{ 
        type:String,
        maxlength:20,
        required:true
    },
    num_comprobante:{ 
        type:String,
        maxlength:10,
        required:true
    },
    impuesto:{ 
        type:Number, 
        required:true
    },
    total:{ 
        type:Number, 
        required:true
    },
    detalles: [{
        _id:{
            type:String,
            required:true
        },
        articulo:{
            type:String,
            required:true
        },
        cantidad:{
            type:Number,
            required:true
        },
        precio:{
            type:Number,
            required:true
        }
    }],
    estado: { 
        type:Number, 
        default: 1
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});
const Agrega = mongoose.model('agrega',agregaSchema);
export default Agrega;