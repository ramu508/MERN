// index.js
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const userApiFromRouter = require('./routes/userRoutes.js');

const url = "mongodb+srv://ramuchalavadi99:MY5FMWuZj55vrZAU@cluster0.jgbqedv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })  .then(() => console.log("Mongoose Connected"))  .catch((err) => console.log(err));

const connection = mongoose.connection;
const app = express();
app.use(express.json());
const port = 3001;

const server = new ApolloServer({ typeDefs, resolvers });

app.use('/users', userApiFromRouter);

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function add(a, b) {
  return a + b;
}

startServer();

module.exports = { add };