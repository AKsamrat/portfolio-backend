import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { projectRoutes } from '../modules/project/project.route';
import { blogRoutes } from '../modules/blog/blog.route';
import { skillRoutes } from '../modules/skill/skill.route';
const router = Router();

const moduleRoutes = [
   {
      path: '/user',
      route: UserRoutes,
   },
   {
      path: '/auth',
      route: AuthRoutes,
   },

   {
      path: '/project',
      route: projectRoutes,
   },

   {
      path: '/blog',
      route: blogRoutes,
   },
   {
      path: '/skill',
      route: skillRoutes,
   }

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
