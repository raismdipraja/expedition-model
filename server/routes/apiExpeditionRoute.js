import {Router} from 'express';
import IndexController from '../controllers/IndexController'


const router = Router()


router.get('/:city_from/:city_to/:expe_id/:package', IndexController.apiExpedition.cekOngkir);

export default router;