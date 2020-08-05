import React from 'react'
import cn from 'classnames'

import useWindowSize from '../Hooks/useWindowSize'
import styles from './layout.module.css'

import Sidebar from './col-sidebar'
import CONST from '../constants'
import Main from './col-main'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>

      <Main>{children}</Main>
    </div>
  )
}
export default Layout
