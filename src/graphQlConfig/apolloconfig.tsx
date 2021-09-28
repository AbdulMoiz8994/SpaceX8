import {ApolloClient,InMemoryCache} from '@apollo/client'

export const Client=new ApolloClient({
    uri:'https://spacexdata.herokuapp.com/graphql',
    cache: new InMemoryCache() as any,
})
 