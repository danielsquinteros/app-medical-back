import mongoose, {Schema} from 'mongoose';
const proveedorSchema = new Schema({
    nombre: { 
        type:String,
        maxlength:50,
        unique:true, 
        required:true
    },
    tipo_proveedor: { 
        type:String,
        maxlength:20, 
        required:true
    },
    rut: { 
        type:String,
        maxlength:20,
        required:true
    },
    estado: { 
        type:Number, 
        default:1
    },
	createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Proveedor = mongoose.model('proveedor',proveedorSchema);
export default Proveedor;