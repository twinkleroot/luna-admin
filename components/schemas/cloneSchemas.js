const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        info: String!
        feed: [Link!]!
    }
    type Mutation {
        post(url: String!, description: String!): Link!
        updateLink(id: ID!, url: String, description: String): Link
        deleteLink(id: ID!): Link
    }
    type Link {
        id: ID!
        description: String!
        url: String!
    }
`

module.exports = typeDefs