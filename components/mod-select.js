import React from 'react'
import styles from './mod-select.module.css'

function ModSelect() {
  return (
    <div className={styles.container}>
      <input type="radio" value="light" name="theme" />
      <input type="radio" value="dark" name="theme" />
      <input type="radio" value="dim" name="theme" />
      <input type="radio" value="sepia" name="theme" />
    </div>
  )
}
export default ModSelect
