import ApolloClient, { addQueryMerging, createNetworkInterface } from 'apollo-client'
// import ResponseMiddlewareNetworkInterface from './response-middleware-network-interface'
// import log from '../log'

// const responseMiddlewareNetworkInterface = new ResponseMiddlewareNetworkInterface()

// Sample error handling middleware
// responseMiddlewareNetworkInterface.use({
//   applyResponseMiddleware: (response, next) => {
//     if (response.errors) {
//       if (typeof window !== 'undefined') {
//         log.error(JSON.stringify(response.errors))
//         alert(`There was an error in your GraphQL request: ${response.errors[0].message}`)
//       }
//     }
//     next()
//   }
// })

// const networkInterface = addQueryMerging(responseMiddlewareNetworkInterface)

const ApolloClientSingleton = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/graphql' }),
  // shouldBatch: true,
  // dataIdFromObject: obj => obj.id
})
export default ApolloClientSingleton
