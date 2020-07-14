import express from 'express';
import v1Routes from './v1/index';
import HttpResponse from '../util/libs/HttpResponse';

const router = express.Router();

/**
 * @swagger
 * /health-check:
 *    get:
 *      description: hecks health
 */
router.get('/health-check', (req, res) => {
  HttpResponse.success(req, res, {}, 'I am alive! and healthy.');
});

router.use(
  '/v1',
  // auth middleware
  v1Routes
);

export default router;
