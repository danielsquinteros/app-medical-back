import routerx from 'express-promise-router';
import agregaController from '../controllers/AgregaController';

import auth from '../middlewares/auth';

const router=routerx();

router.post('/add',auth.verifyUsuario, agregaController.add);
router.get('/query',auth.verifyUsuario, agregaController.query);
router.get('/list',auth.verifyUsuario, agregaController.list);
router.put('/activate',auth.verifyUsuario, agregaController.activate);
router.put('/desactivate',auth.verifyUsuario, agregaController.desactivate);

export default router;