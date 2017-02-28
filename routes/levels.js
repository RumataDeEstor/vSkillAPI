import express from 'express';

import * as levels from '../controllers/levels';

const router = express.Router();

router.route('/')
  .get(levels.getAllLevels)
  .post(levels.addLevel);

export default router;
