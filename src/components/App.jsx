import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  title: {
    textAlign: 'center'
  }
})

export default function App({ children }) {
  return (
    <div className='container'>
      <h1 className={css(styles.title)}>Graphbrainz Search</h1>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object
}
