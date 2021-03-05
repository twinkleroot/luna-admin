let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length
const resolvers = {
    Query: {
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        },
        updateLink: (parent, args) => {
            let link
            links.forEach(element => {
                if(element.id === args.id) {
                    element.description = args.description
                    element.url = args.url
                    link = element
                }
            })
            return link
        },
        deleteLink: (parent, args) => {
            let link
            links.forEach(element => {
                if(element.id === args.id) {
                    link = element
                }
            })
            links = links.filter(element => element.id !== args.id)
            return link
        }
    }

}

module.exports = resolvers