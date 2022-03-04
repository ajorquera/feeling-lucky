import {Router} from 'express';
import feelingLucky from '../controllers/feelingLucky';

const routes = Router();

routes.get('/', feelingLucky);

export default routes;