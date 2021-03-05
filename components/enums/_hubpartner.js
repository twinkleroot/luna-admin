const { gql } = require('apollo-server')

const typeDefs = gql`
    enum HubPartner {
        JUPITER
        EMMA
    }
`

module.exports = typeDefs