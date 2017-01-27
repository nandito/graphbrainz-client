import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

function RemoteCounter({ data }) {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      <div>
        Current {data.search.artists.edges[0].node.name} count is {data.search.artists.totalCount}. This is being stored server-side in the database and using Apollo to update.
      </div>
      <div>
      </div>
    </div>
  )
}

RemoteCounter.propTypes = {
  data: React.PropTypes.object.isRequired
}

// const CurrentCount = gql`
//   query CurrentCount {
//     count {
//       id
//       amount
//     }
//   }
// `
//
// const AddCount = gql`
//   mutation AddCount($amount: Int!) {
//     addCount(amount: $amount) {
//       id
//       amount
//     }
//   }
// `
//
// const InduceError = gql`
//   mutation InduceError {
//     induceError
//   }
// `

const Roxette = gql`
query {
  search {
    artists(query: "roxette") {
      edges {
        node {
          id,
          name,
          type
        }
      }
      totalCount
    }
  }
}
`

export default compose(
  graphql(Roxette),
  // graphql(AddCount, {
  //   props: ({ mutate }) => ({
  //     addCount: (amount) => mutate({ variables: { amount } })
  //   })
  // }),
  // graphql(InduceError, {
  //   props: ({ mutate }) => ({
  //     induceError: () => mutate()
  //   })
  // })
)(RemoteCounter)
