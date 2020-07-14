import { Sequelize } from 'sequelize';
import Constants from '../config/Constants';

const db = new Sequelize(Constants.DB_NAME(), Constants.DB_USER(), Constants.DB_PASSWORD(), {
  host: Constants.DB_HOST(),
  port: Constants.DB_PORT(),
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

class Database {
  static async connect() {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

// class Database {
//   static async connect() {
//     try {
//       if (mongoose.connection.readyState === 0) {
//         await mongoose.connect(UmgConstants.getDbConfig().URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         });
//         console.log('Connected to DB');
//       }
//     } catch (err) {
//       console.log(err);
//       // throw new Error()
//     }
//   }
// }

export { Database, db };
