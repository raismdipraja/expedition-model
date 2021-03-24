import {Router} from 'express';
import IndexController from '../controllers/IndexController'




const router = Router()

router.get('/', IndexController.expeditionRoute.readExpeditionRouteMethod);
router.get('/:exroId', IndexController.expeditionRoute.findExpeditionRouteMethod);
router.post('/', IndexController.expeditionRoute.addExpeditionRouteMethod);
router.delete('/:exroId', IndexController.expeditionRoute.deleteExpeditionRouteMethod);
router.put('/:exroId', IndexController.expeditionRoute.editExpeditionRouteMethod);



export default router;