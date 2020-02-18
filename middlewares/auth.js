import tokenService from '../services/token';

export default {
    
    verifyUsuario: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol == 'Asistente' || response.rol=='Dentista'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdministrador: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAsistente: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol=='Asistente'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyDentista: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol == 'Dentista'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}