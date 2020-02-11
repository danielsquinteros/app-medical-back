import routerx from 'express-promise-router';
import cotizaController from '../controllers/CotizaController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/add', auth.verifyUsuario, cotizaController.add);
router.get('/query', auth.verifyUsuario, cotizaController.query);
router.get('/list', auth.verifyUsuario, cotizaController.list);
/*
router.put('/update',auth.verifyAlmacenero,cotizaController.update);
router.delete('/remove',auth.verifyAlmacenero,cotizaController.remove);
*/
router.put('/activate', auth.verifyUsuario, cotizaController.activate);
router.put('/desactivate', auth.verifyUsuario, cotizaController.desactivate);

export default router;