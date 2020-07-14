import BookingsService from '../service/BookingsService';
import CabsService from '../service/CabsService';

class BookingsController {
  static async getPastBookings({ userId }) {
    try {
      const bookings = await BookingsService.listBookingsByQuery({
        query: {
          userId,
        },
      });
      return bookings;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  static async requestBooking({ user, locationA, locationB }) {
    try {
      const { latitude, longitude } = locationA;
      const cabs = await CabsService.getCabs({
        query: {
          latitude,
          longitude,
        },
      });
      await BookingsService.sendNotificationToCabs({
        user,
        locationA,
        locationB,
        cabs,
      });
      return;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}

export default BookingsController;
