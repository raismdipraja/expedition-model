import {Router} from 'express';
import IndexController from '../controllers/IndexController'

const router = Router()

router.get('/', IndexController.expedition.readExpeditionMethod);
router.get('/:expeId', IndexController.expedition.findExpeditionMethod);
router.post('/', IndexController.expedition.addExpeditionMethod);
router.delete('/:expeId', IndexController.expedition.deleteExpeditionMethod);
router.put('/:expeId', IndexController.expedition.editExpeditionMethod);

export default router;