import { Router } from 'express';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middleware/bodyParser';
import { skillController } from './skill.controller';


const router = Router();

router.get('/', skillController.getAllSkill);
router.get('/:id', skillController.getSingleSkill);

router.delete('/:id', skillController.deleteSkill
);
router.post('/', multerUpload.single('file'),
  parseBody,
  skillController.createSkill
);
router.patch(
  '/:id',
  multerUpload.single('file'),
  parseBody,
  skillController.updateSkill
);

export const skillRoutes = router;
