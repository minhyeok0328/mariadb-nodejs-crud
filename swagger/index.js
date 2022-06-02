import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
      openapi: '3.0.0',
          info: {
          title: 'mariadb + express js CRUD API',
          version: '1.0.0',
      },
  },
  apis: ['./src/router/apiV1Router/index.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
