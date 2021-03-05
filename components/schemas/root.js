const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        lunatalkUsers: [LunatalkUser!]!
        lunatalkUser(userId: ID!): LunatalkUser
    }
`

module.exports = typeDefs