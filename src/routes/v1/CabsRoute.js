import express from 'express';
import HttpResponse from '../../util/libs/HttpResponse';
import CabsController from '../../controller/CabsController';
// import {} from '../../validators/ValidationRules';
// import validate from '../../validators/Validator';

const router = express.Router();

/**
 * @swagger
 *
 * /api/v1/cabs:
 *   get:
 *     summary: Returns a list of nearby cabs
 *     description: Get all nearby cabs for a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: latitude
 *         description: Some mock data.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *      '200':
 *         description: Example cab output.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 4
 *                 name:
 *                   type: string
 *                   example: Jessica Smith
 */
router.get('/:lat/:lon', async (req, res, next) => {
  try {
    console.log('List Cabs nearby (Route Layer)');
    const { lat, lon } = req.params;
    const cabs = await CabsController.getNearbyCabs({ latitude: lat, longitude: lon });
    return HttpResponse.success(req, res, { cabs });
  } catch (error) {
    return next(error);
  }
});

export default router;
