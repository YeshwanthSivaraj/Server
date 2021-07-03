const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Word = require('./models/Word');
const { MONGODB } = require('./config.js');

const typeDefs = gql`
    type Word{
        id: ID!
        language: String!
        type: String!
        word: String!
    }
    type Query{
        getWords: [Word]
    }
`;

const resolvers = {
    Query: {
        async getWords(){
            try{
                const words = await Word.find();
                return words;
            }catch(err){
                throw new Error(err);
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5000 })
    })
    .then((res) => {
        console.log(`Server connected at ${res.url}`)
    })