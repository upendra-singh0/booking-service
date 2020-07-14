class CabsService {
  static async getCabs({ query }) {
    try {
      // get data from grid sqaure to car mapping table
      const cabs = [
        {
          name: 'Ramu',
          cab: {
            type: 'Mini',
            model: 'Alto',
          },
          lat: 12,
          lon: 13,
        },
        {
          name: 'Rahu',
          cab: {
            type: 'Sedan',
            model: 'Cooper',
          },
          lat: 10,
          lon: 11,
        },
      ];
      return cabs;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}

export default CabsService;
