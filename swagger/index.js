import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import memberPath from './member.js';
import boardPath from './board.js';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mariadb + express js',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express + Mariadb',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  servers: [
    {
      url: 'http://localhost',
      description: 'Development server',
    },
  ],
  tags: [
    {
      name: 'Members',
      description: 'Sign Up, Sign In and Logout',
    },
    {
      name: 'Boards',
      description: 'Posting, editing, and deletion',
    }
  ],
  paths: {
    ...memberPath,
    ...boardPath,
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/router/apiV1Router/*.js'],
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
