let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

const resolvers = {
    Query: {
        lunatalkUser: () => 'test',
        feed: () => links,
    },

}

module.exports = resolvers