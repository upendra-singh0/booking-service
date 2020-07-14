import express from 'express';
import HttpResponse from '../../util/libs/HttpResponse';
import BookingsController from '../../controller/BookingsController';
// import {} from '../../validators/ValidationRules';
// import validate from '../../validators/Validator';

const router = express.Router();

/**
 * @swagger
 *
 * /api/v1/bookings:
 *   get:
 *     description: Get all past bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: latitude
 *         description: Some mock data.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: request succesful, list of bookings
 *       404:
 *         description: Page not found
 */
router.get('/', async (req, res, next) => {
  try {
    console.log('List Past Bookings (Route Layer)');
    const { userId } = req.body;
    const pastBookings = await BookingsController.getPastBookings({
      userId,
    });
    return HttpResponse.success(req, res, pastBookings);
  } catch (error) {
    return next(error);
  }
});

/**
 * @swagger
 *
 * /api/v1/bookings/request:
 *   get:
 *     description: Get all past bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: latitude
 *         description: Some mock data.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: longitude
 *         description: Some mock data.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: request succesful, list of cabs
 *       404:
 *         description: Page not found
 */
router.post('/request', async (req, res, next) => {
  try {
    console.log('Request cabs (Route Layer)');
    // example of locationA = {
    //   address: 'Some add',
    //   latitude: 12,
    //   longitude: 123
    // }
    const { locationA, locationB, user } = req.body;
    await BookingsController.requestBooking({
      user,
      locationA,
      locationB,
    });
    return HttpResponse.success(req, res, 'request sent');
  } catch (error) {
    return next(error);
  }
});

export default router;
