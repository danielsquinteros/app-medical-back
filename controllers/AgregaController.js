import models from '../models';

async function aumentarStock(id_articulo,cantidad){
    let { stock } = await models.Articulo.findOne({_id:id_articulo}); //destructacion
    let nuevoStock = parseInt(stock) + parseInt(cantidad);
    const reg = await models.Articulo.findByIdAndUpdate({_id:id_articulo},{stock: nuevoStock})
}

async function disminuirStock(id_articulo,cantidad){
    let { stock } = await models.Articulo.findOne({_id:id_articulo});
    let nuevoStock = parseInt(stock) - parseInt(cantidad);
    const reg = await models.Articulo.findByIdAndUpdate({_id:id_articulo},{stock: nuevoStock})
}


export default{
    add: async (req,res,next) => {
        try {
            const reg = await models.Agrega.create(req.body);
            //Actualizar Stock
            let detalles = req.body.detalles;
            detalles.map(function(x){
                aumentarStock(x._id,x.cantidad);
            });
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) => {
        try {
            const reg = await models.Agrega.findOne({_id:req.query._id})
            .populate('usuario', {nombre:1})
            .populate('proveedor', {nombre:1});
                if (!reg){
                    res.status(404).send({
                        message: 'El registro no existe'
                    })
                } else {
                    res.status(200).json(reg);
                }

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async (req,res,next) => {
        try {
            let valor = req.query.valor
            const reg = await models.Agrega.find({$or:[ {'num_comprobante': new RegExp(valor,'i')}  ]},{createdAt:0})
            .populate('usuario', {nombre:1})
            .populate('proveedor', {nombre:1});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) => {
        try {
            const reg = await models.Agrega.findByIdAndUpdate({_id:req.body._id},{estado:1});
            //Actualizar Stock
            let detalles = reg.detalles;
            detalles.map(function(x){
                aumentarStock(x._id,x.cantidad);
            });
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    desactivate: async (req,res,next) => {
        try {
            const reg = await models.Agrega.findByIdAndUpdate({_id:req.body._id},{estado:0});
            //Actualizar Stock
            let detalles = reg.detalles;
            detalles.map(function(x){
                disminuirStock(x._id,x.cantidad);
            });
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
}