import routerx from 'express-promise-router';

import categoriaRouter from './categoria';
import articuloRouter from './articulo';
import usuarioRouter from './usuario';
import proveedorRouter from './proveedor';

const router = routerx();

router.use('/categoria',categoriaRouter);
router.use('/articulo',articuloRouter);
router.use('/usuario',usuarioRouter);
router.use('/proveedor',proveedorRouter);

export default router;
