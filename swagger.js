const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Booking Service APIs',
      description: 'Lists all APIs for booking service',
      version: '3.0.0',
    },
    basePath: '/',
  },
  apis: ['./src/routes/**/*.js'],
};
const specs = swaggerJsdoc(options);

module.exports = specs;
