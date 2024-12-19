const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'This is a sample server Petstore server.',
    },
    servers: [  
        {
            url: 'https://interview-mock-api.onrender.com/api-docs/#/',
        }
    ]
}

const options = {
    definition: swaggerDefinition,
    apis: ['./routes/*.js'],
}

module.exports = swaggerDefinition