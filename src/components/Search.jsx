import React, { Component } from 'react'
import SearchResults from '../containers/SearchResults'

let input

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: null,
      lookFor: 'artists'
    }
    this.submitSearch = this.submitSearch.bind(this)
    this.changeLookFor = this.changeLookFor.bind(this)
  }

  submitSearch(e) {
    e.preventDefault()
    this.setState({
      searchQuery: input.value
    })
  }

  changeLookFor(e) {
    this.setState({
      lookFor: e.target.value
    })
  }

  render() {
    const { searchQuery, lookFor } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <form onSubmit={this.submitSearch}>
              <div className='row'>
                <div className='column column-20'>
                  <select value={this.state.lookFor} onChange={this.changeLookFor}>
                    <option value='artists'>Artists</option>
                    <option value='songs'>Songs</option>
                  </select>
                </div>
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
        {searchQuery && <SearchResults query={searchQuery} lookFor={lookFor} />}
      </div>
    )
  }
}

export default Search
