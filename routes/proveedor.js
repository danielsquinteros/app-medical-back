import routerx from 'express-promise-router';
import proveedorController from '../controllers/ProveedorController';

//Middleware Token
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyAdministrador, proveedorController.add);
router.get('/query', auth.verifyAdministrador, proveedorController.query);
router.get('/list', auth.verifyAdministrador, proveedorController.list);
router.get('/listPersonas', auth.verifyAdministrador, proveedorController.listPersonas);
router.get('/listEmpresas', auth.verifyAdministrador, proveedorController.listEmpresas);
router.put('/update', auth.verifyAdministrador, proveedorController.update);
router.delete('/remove', auth.verifyAdministrador, proveedorController.remove);
router.put('/activate', auth.verifyAdministrador, proveedorController.activate);
router.put('/desactivate', auth.verifyAdministrador, proveedorController.desactivate);

export default router;