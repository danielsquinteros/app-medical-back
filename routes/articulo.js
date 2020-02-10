import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController'

//Middleware Token
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyUsuario, articuloController.add);
router.get('/query', auth.verifyUsuario, articuloController.query);
router.get('/list', auth.verifyUsuario, articuloController.list);
router.put('/update', auth.verifyUsuario, articuloController.update);
router.delete('/remove', auth.verifyUsuario, articuloController.remove);
router.put('/activate', auth.verifyUsuario, articuloController.activate);
router.put('/desactivate', auth.verifyUsuario, articuloController.desactivate);
router.put('/pending', auth.verifyUsuario, articuloController.pending);

export default router;