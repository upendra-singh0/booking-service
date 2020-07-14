import CabsService from '../service/CabsService';

class CabsController {
  static async getNearbyCabs({ latitude, longitude }) {
    try {
      const cabs = await CabsService.getCabs({
        query: {
          latitude,
          longitude,
        },
      });
      return cabs;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}

export default CabsController;
