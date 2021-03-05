const { gql } = require('apollo-server')

const typeDefs = gql `
    type LunatalkUser {
        id: Int
        userId: ID
        userStatus: Boolean
        payPlan: PayType
        hubPartner: HubPartner
        ipInfo : LunatalkUserIpInfo
    }
    type LunatalkUserIpInfo {
        userId: ID
        dbIp: String
        senderIp: String
        crawllerIp: String
        processIp: String
        proxyIp: String
        proxyPort: Int
    }
    enum HubPartner {
        EMMA
        JUPITER
    }
    enum PayType {
        BASIC
        STANDARD
        PREMIUM
    }
`

module.exports = typeDefs