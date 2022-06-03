export default {
  '/api/v1/member/getMemberInfo': {
    get: {
      summary: 'get member info',
      tags: ['Members'],
      description: 'Logged in member information',
      produces: ['application/json'],
      response: {
        '200': {
          description: 'successful operation',
        }
      }
    }
  },
  '/api/v1/member/logout': {
    get: {
      summary: 'logout',
      tags: ['Members'],
      description: 'Logout',
      produces: ['application/json'],
      response: {
        '200': {
          description: 'successful operation'
        }
      }
    }
  },
  '/api/v1/member/signup': {
    post: {
      summary: 'sign up',
      tags: ['Members'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'user id',
                  example: 'user1234'
                },
                password: {
                  type: 'string',
                  description: 'user password',
                  example: 'password1234'
                },
                name: {
                  type: 'string',
                  description: 'user name',
                  example: 'hello'
                },
                email: {
                  type: 'string',
                  description: 'user email',
                  example: 'user@test.com'
                }
              }
            },
          }
        }
      },
      response: {
        '200': {
          description: 'successful operation'
        }
      }
    }
  },
  '/api/v1/member/signin': {
    post: {
      summary: 'sign in',
      tags: ['Members'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'user id',
                  example: 'user1234'
                },
                password: {
                  type: 'string',
                  description: 'user password',
                  example: 'password1234'
                }
              }
            }
          }
        }
      },
      response: {
        '200': {
          description: 'successful operation'
        }
      }
    }
  }
};
