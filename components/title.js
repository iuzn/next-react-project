import React from 'react'
import styles from './title.module.css'

function TextTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>
}
export default TextTitle
