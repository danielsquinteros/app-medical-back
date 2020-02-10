import models from '../models';
import bcrypt from 'bcryptjs'
import token from '../services/token';

export default{
    add: async (req,res,next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password,10)
            const reg = await models.Usuario.create(req.body);
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
            const reg = await models.Usuario.findOne({_id:req.query._id});
                if (!reg){
                    res.status(404).send({
                        message: 'El usuario no existe'
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
            const reg = await models.Usuario.find({$or:[ {'email': new RegExp(search,'i')} , {'nombre': new RegExp(search,'i')} ]},{createdAt:0});
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
            let passEncrypted = await bcrypt.hash(req.body.password,10)
            const reg0 = await models.Usuario.findByIdAndUpdate({_id:req.body._id});
            if (passEncrypted!=reg0.password){
                req.body.password = await bcrypt.hash(req.body.password,10)
            }
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{
                nombre:req.body.nombre, 
                rol: req.body.rol,
                email: req.body.email,
                password: req.body.password
            });
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
            const reg = await models.Usuario.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    login: async (req,res,next) => {
        try {
            let user = await models.Usuario.findOne({email:req.body.email, estado:1});
            if(user){
                let match = await bcrypt.compare(req.body.password,user.password);
                if (match){
                    let tokenReturn = await token.encode(user._id);
                    res.status(200).json({user, tokenReturn});
                } else {
                    res.status(404).send({
                        message: 'El password es Incorrecto'
                    });
                }
            } else {
                res.status(404).send({
                    message: 'El usuario no existe'
                });
            }

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}