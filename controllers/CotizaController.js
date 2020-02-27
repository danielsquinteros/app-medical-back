import models from '../models';

export default{
    add: async (req,res,next) => {
        try {
            const reg = await models.Cotiza.create(req.body);
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
            const reg = await models.Cotiza.findOne({_id:req.query._id})
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
            let search = req.query.search
            const reg = await models.Cotiza.find({$or:[ {'num_cotizacion': new RegExp(search,'i')} ]})
            .populate('usuario', {nombre:1})
            .populate('proveedor', {nombre:1, rut:1});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    /*
    update: async (req,res,next) => {
        try {
            const reg = await models.Cotiza.findByIdAndUpdate({_id:req.body._id},{
                nombre:req.body.nombre, 
                descripcion: req.body.descripcion

            })
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Cotiza.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    */
    activate: async (req,res,next) => {
        try {
            const reg = await models.Cotiza.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Cotiza.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
}