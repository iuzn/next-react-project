import React from 'react'
import cn from 'classnames'

import styles from './header.module.css'
import ModSelect from './mod-select'
import HeaderText from './header-text'
import { MENU } from '../constants'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <div className={cn(styles.header)}>
      <div className={styles.headertext}>
        {MENU.map((menu) => {
          const selected = router.pathname === menu.path
          return (
            <HeaderText key={menu.title} selected={false}>
              {selected && menu.title}
            </HeaderText>
          )
        })}
      </div>
      <div className={styles.modselect}>
        <ModSelect />
      </div>
    </div>
  )
}
export default Header
