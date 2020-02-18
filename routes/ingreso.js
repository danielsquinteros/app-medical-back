import routerx from 'express-promise-router';
import ingresoController from '../controllers/IngresoController';

import auth from '../middlewares/auth';

const router=routerx();

router.post('/add',auth.verifyUsuario, ingresoController.add);
router.get('/query',auth.verifyUsuario, ingresoController.query);
router.get('/list',auth.verifyUsuario, ingresoController.list);
router.put('/activate',auth.verifyUsuario, ingresoController.activate);
router.put('/desactivate',auth.verifyUsuario, ingresoController.desactivate);

export default router;