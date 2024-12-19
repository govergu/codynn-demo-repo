const express = require('express');
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerDefinition = require('./swagger/swaggerConfig')
const loginRoute = require('./routes/login')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const options = {
    definition: swaggerDefinition,
    apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', loginRoute);

app.listen(PORT, () =>{
    console.log(`Server is running on port${PORT}`);
    console.log(`API docs available at ${PORT}/api-docs`)
})