import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'
import Navigation from './navigation'
import ProfileBox from './profile-box'
import FooterBox from './footer-box'
import Search from './search'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <ProfileBox />
      <Navigation flat={flat} />
      <Search />
      <FooterBox />
    </div>
  )
}
export default Sidebar
