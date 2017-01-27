import React, { PropTypes } from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import ResultList from '../components/Results.jsx'

const SearchResults = ({ data, query }) => {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const results = data.search.artists
  return (
    <div>
      {results.totalCount === 0
        ? <div>There are no results for the given query.</div>
        : <ResultList results={results} query={query} />
      }
    </div>
  )
}

SearchResults.propTypes = {
  data: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired
}

const Search = gql`
  query Search($query: String!) {
    search {
      artists(query: $query) {
        edges {
          node {
            id,
            name,
            type,
            releases {
              totalCount
            }
          }
        }
        totalCount
      }
    }
  }
`

export default compose(
  graphql(Search,
    {
      // options: { variables: { query: 'Roxette' } }
      options: ({ query }) => ({ variables: { query } })
    }
  )
)(SearchResults)
