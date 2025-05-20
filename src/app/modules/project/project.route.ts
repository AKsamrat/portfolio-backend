import { Router } from 'express';
import { projectController } from './project.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middleware/bodyParser';

const router = Router();

router.get('/',
  projectController.getAllProject
);
router.get('/:id',
  projectController.getSingleProject
);
router.delete(
  '/:id',
  projectController.deleteProject
);
router.post(
  '/',
  multerUpload.single('file'),
  parseBody,
  projectController.createProject
);
router.patch(
  '/:id',
  multerUpload.single('file'),
  parseBody,
  projectController.updateProject
);

export const projectRoutes = router;
