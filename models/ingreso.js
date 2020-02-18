import mongoose, {Schema} from 'mongoose';
const ingresoSchema = new Schema({
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
        maxlength:20,
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
        },
        tipo_stock: {
            type: String,
            required: true
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
const Ingreso = mongoose.model('ingreso',ingresoSchema);
export default Ingreso;