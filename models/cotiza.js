import mongoose,{Schema} from 'mongoose';
const cotizaSchema = new Schema({
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
    num_cotizacion:{ 
        type:String,
        maxlength:20,
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
        },
        tipo_stock:{
            type:String,
            required:true
        }
    }],
    estado: { 
        type:Number, 
        default:1
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});
const Cotiza = mongoose.model('cotiza',cotizaSchema);
export default Cotiza;