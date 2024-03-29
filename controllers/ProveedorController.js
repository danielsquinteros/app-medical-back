import models from '../models';

export default{
    add: async (req,res,next) => {
        try {
            const reg = await models.Proveedor.create(req.body);
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
            const reg = await models.Proveedor.findOne({_id:req.query._id});
                if (!reg){
                    res.status(404).send({
                        message: 'El proveedor no existe'
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
            const reg = await models.Proveedor.find({$or:[ {'rut': new RegExp(search,'i')} , {'nombre': new RegExp(search,'i')} ]},{createdAt:0});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    listPersonas: async (req,res,next) => {
        try {
            let search = req.query.search
            const reg = await models.Proveedor.find({$or:[ {'rut': new RegExp(search,'i')} , {'nombre': new RegExp(search,'i')} ],'tipo_proveedor':'Persona' },{createdAt:0});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    listEmpresas: async (req,res,next) => {
        try {
            let search = req.query.search
            const reg = await models.Proveedor.find({$or:[ {'rut': new RegExp(search,'i')} , {'nombre': new RegExp(search,'i')} ],'tipo_proveedor':'Empresa' },{createdAt:0});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {
            const reg = await models.Proveedor.findByIdAndUpdate({_id:req.body._id},{
                nombre: req.body.nombre, 
                tipo_proveedor: req.body.tipo_proveedor,
                rut: req.body.rut,
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
            const reg = await models.Proveedor.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.Proveedor.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Proveedor.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}