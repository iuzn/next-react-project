import React from 'react'
import cn from 'classnames'
import styles from './header-text.module.css'

function HeaderText({ selected, children, ...props }) {
  return (
    <div>
      <h2
        className={cn(styles.headernone, selected && styles.header)}
        {...props}
      >
        {children}
      </h2>
    </div>
  )
}
export default HeaderText
