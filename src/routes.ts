import { GetAllVideosController } from './controllers/GetAllVideosController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);
routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos', new GetAllVideosController().handle);
export { routes };