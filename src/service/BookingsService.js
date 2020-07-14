import moment from 'moment';

class BookingService {
  // pagination required
  static async listBookingsByQuery({ query }) {
    try {
      const bookings = [
        {
          bookingId: 421,
          riderDetails: {
            name: 'Ramu',
            cab: {
              type: 'Mini',
              model: 'Alto',
            },
          },
          from: {
            address: 'Some address',
            lat: 123,
            lon: 12,
          },
          to: {
            address: 'Some address2',
            lat: 3,
            lon: 23,
          },
          date: moment().format('LLLL'),
        },
      ];
      return bookings;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  static async sendNotificationToCabs({ user, locationA, locationB, cabs }) {
    cabs.forEach((cab) => {
      console.log(
        `sending notification to cab ${cab.name} for location ${locationA.address} to ${locationB.address}`
      );
    });
    console.log('sent notification to riders');
  }
}

export default BookingService;
