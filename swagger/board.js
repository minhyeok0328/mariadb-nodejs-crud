export default {
  '/api/v1/board/list': {
    get: {
      summary: 'get board list',
      tags: ['Boards'],
      description: 'board list',
      produces: ['application/json'],
      parameters: [
        {
          name: 'search',
          in: 'query',
          description: 'search text',
          schema: {
            type: 'string'
          }
        },
        {
          name: 'page',
          in: 'query',
          description: 'page',
          schema: {
            type: 'integer'
          }
        }
      ],
      response: {
        '200': {
          description: 'successful operation',
        }
      }
    }
  },
  '/api/v1/board': {
    post: {
      summary: 'board white',
      tags: ['Boards'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                subject: {
                  type: 'string',
                  description: 'subject',
                  example: 'subject'
                },
                content: {
                  type: 'string',
                  description: 'content',
                  example: 'this is content'
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
    },
    put: {
      summary: 'board white',
      tags: ['Boards'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                subject: {
                  type: 'string',
                  description: 'subject',
                  example: 'subject'
                },
                content: {
                  type: 'string',
                  description: 'content',
                  example: 'this is content'
                },
                idx: {
                  type: 'integer',
                  description: 'board idx',
                  example: '1'
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
    },
  },
  '/api/v1/board/{idx}': {
    get: {
      summary: 'get board view',
      tags: ['Boards'],
      description: 'board detail',
      produces: ['application/json'],
      parameters: [
        {
          name: 'idx',
          in: 'path',
          description: 'board index',
          schema: {
            type: 'integer'
          }
        }
      ],
      response: {
        '200': {
          description: 'successful operation',
        }
      }
    },
    delete: {
      summary: 'delete board',
      tags: ['Boards'],
      description: 'delete board',
      produces: ['application/json'],
      parameters: [
        {
          name: 'idx',
          in: 'path',
          description: 'board index',
          schema: {
            type: 'integer'
          }
        }
      ],
      response: {
        '200': {
          description: 'successful operation',
        }
      }
    }
  }
}