import React, { Component } from 'react'
import SearchResults from '../containers/SearchResults'

let input

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: null
    }
    this.submitSearch = this.submitSearch.bind(this)
  }

  submitSearch(e) {
    e.preventDefault()
    this.setState({
      searchQuery: input.value
    })
  }

  render() {
    const { searchQuery } = this.state
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <input type='text' ref={node => (input = node)} />
          <input type='submit' />
        </form>
        {searchQuery && <SearchResults query={searchQuery} />}
      </div>
    )
  }
}

export default Search
