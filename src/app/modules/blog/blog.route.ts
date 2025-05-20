import { Router } from 'express';

import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middleware/bodyParser';
import { blogController } from './blog.controller';

const router = Router();

router.get('/',
  blogController.getAllBlog
);
router.get('/:id',
  blogController.getSingleBlog
);
router.delete(
  '/:id',
  blogController.deleteBlog
);
router.post(
  '/',
  multerUpload.single('file'),
  parseBody,
  blogController.createBlog
);
router.patch(
  '/:id',
  multerUpload.single('file'),
  parseBody,
  blogController.updateBlog
);

export const blogRoutes = router;
