import express from 'express';

import BookingsRouter from './BookingsRoute';
import CabsRouter from './CabsRoute';

const router = express.Router();

router.use('/bookings', BookingsRouter);
router.use('/cabs', CabsRouter);

export default router;
