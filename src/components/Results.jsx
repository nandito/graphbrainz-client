import React, { PropTypes } from 'react'

const Results = ({ results, query }) => (
  <div>
    There are {results.totalCount} result(s) for {query}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Release count</th>
        </tr>
      </thead>
      <tbody>
        {results.edges.map(result => (
          <tr key={result.node.id}>
            <td>{result.node.name}</td>
            <td>{result.node.type}</td>
            <td>{result.node.releases.totalCount}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>
)

Results.propTypes = {
  results: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired
}

export default Results
