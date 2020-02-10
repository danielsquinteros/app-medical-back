import routerx from 'express-promise-router';
import proveedorController from '../controllers/ProveedorController';

//Middleware Token
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyUsuario, proveedorController.add);
router.get('/query', auth.verifyUsuario, proveedorController.query);
router.get('/list', auth.verifyUsuario, proveedorController.list);
router.get('/listPersonas', auth.verifyUsuario, proveedorController.listPersonas);
router.get('/listEmpresas', auth.verifyUsuario, proveedorController.listEmpresas);
router.put('/update', auth.verifyUsuario, proveedorController.update);
router.delete('/remove', auth.verifyUsuario, proveedorController.remove);
router.put('/activate', auth.verifyUsuario, proveedorController.activate);
router.put('/desactivate', auth.verifyUsuario, proveedorController.desactivate);

export default router;