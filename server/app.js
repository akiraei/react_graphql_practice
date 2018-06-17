const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema');

const app = express();

app.use(cors());

mongoose.connect('mongodb://akiraA:test1234@ds261450.mlab.com:61450/react_graphql_practice')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
