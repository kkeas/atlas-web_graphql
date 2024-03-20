const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://keaskatrina:password123!@graphql.0nnef95.mongodb.net/?retryWrites=true&w=majority&appName=GraphQL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Error connecting to database', err));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});