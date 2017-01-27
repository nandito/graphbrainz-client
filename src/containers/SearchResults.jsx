import React, { PropTypes } from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import ResultList from '../components/Results.jsx'

const SearchResults = ({ data, query, lookFor }) => {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const results = lookFor === 'artists' ? data.search.artists : data.search.works
  return (
    <div>
      {results.totalCount === 0
        ? <div>There are no results for the given query.</div>
        : <ResultList results={results} query={query} type={lookFor} />
      }
    </div>
  )
}

SearchResults.propTypes = {
  data: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  lookFor: PropTypes.string.isRequired
}

const Search = gql`
  query Search($query: String!, $artists: Boolean!, $works: Boolean!) {
    search {
      artists(query: $query) @include(if: $artists) {
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
      works(query: $query) @include(if: $works) {
        edges {
          node {
            id,
            title,
            language,
            artists {
              edges {
                node {
                  name
                }
              }
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
      options: ({ query, lookFor }) => ({
        variables: {
          query,
          artists: lookFor === 'artists',
          works: lookFor === 'songs'
        }
      })
    }
  )
)(SearchResults)
