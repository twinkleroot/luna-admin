const { ApolloServer } = require('apollo-server')

// const roots = require('./components/schemas/root.js')
// const lunatalkUsersSchema = require('./components/schemas/lunatalkUsers')
// const lunatalkUsersResolver = require('./components/resolvers/lunatalkUsers')
const cloneSchemas = require('./components/schemas/cloneSchemas.js')
const cloneResolvers = require('./components/resolvers/cloneResolvers')

const typeDefs = [
  cloneSchemas,
    // roots,
    // lunatalkUsersSchema
]

const resolvers = [
    cloneResolvers
    // lunatalkUsersResolver
]

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) =>
    console.log(`Server is running on ${url}`)
  );