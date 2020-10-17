const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const db =require('./database')
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {  
  console.log('conectado ao atlas')
});
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, "schema.graphql"),
    resolvers
   });
server.start(()=>{console.log('server on')});