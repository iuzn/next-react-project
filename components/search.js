import styles from './search.module.css'
import React from 'react'

function Search() {
  return (
    <label className={styles.search} htmlFor="inpt_search">
      <input id="inpt_search" placeholder="Ara" type="text" />
    </label>
  )
}

export default Search
