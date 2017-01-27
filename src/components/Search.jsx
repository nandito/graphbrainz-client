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
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <form onSubmit={this.submitSearch}>
              <div className='row'>
                <div className='column column-40'>
                  <input type='text' ref={node => (input = node)} />
                </div>
                <div className='column column-20'>
                  <input type='submit' />
                </div>
              </div>
            </form>
          </div>
        </div>
        {searchQuery && <SearchResults query={searchQuery} />}
      </div>
    )
  }
}

export default Search
