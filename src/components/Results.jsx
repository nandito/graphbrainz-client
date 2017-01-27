import React, { PropTypes } from 'react'

const artistsHeader = ['Name', 'Type', 'Release count']
const songsHeader = ['Title', 'Artists', 'Language']

const Results = ({ results, query, type }) => {
  const header = type === 'artists' ? artistsHeader : songsHeader

  return (
    <div>
      {results.totalCount === 1
        ? `There is ${results.totalCount} result for the "${query}" keyword at the ${type} endpoint`
        : `There are ${results.totalCount} results for the "${query}" keyword at the ${type} endpoint`
      }
      <table>
        <thead>
          <tr>
            {header.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type === 'artists'
            ? results.edges.map(result => (
              <tr key={result.node.id}>
                <td>{result.node.name}</td>
                <td>{result.node.type}</td>
                <td>{result.node.releases.totalCount}</td>
              </tr>
              ))
            : results.edges.map(result => (
              <tr key={result.node.id}>
                <td>{result.node.title}</td>
                <td>{result.node.artists.edges.map(item => (`${item.node.name}, `))}</td>
                <td>{result.node.language}</td>
              </tr>
            ))
        }
        </tbody>
      </table>
    </div>
  )
}

Results.propTypes = {
  results: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Results
