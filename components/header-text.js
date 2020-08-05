import React from 'react'
import cn from 'classnames'
import styles from './header-text.module.css'

function HeaderText({ selected, children, ...props }) {
  return (
    <h2 className={cn(styles.headernone, selected && styles.header)} {...props}>
      {children}
    </h2>
  )
}
export default HeaderText
