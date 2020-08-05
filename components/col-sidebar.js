import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'
import Navigation from './navigation'
import ProfileBox from './profile-box'
import FooterBox from './footer-box'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
      <div className={styles.navigation}>
        <Navigation flat={flat} />
      </div>
      <div className={styles.footer}>
        <FooterBox flat={flat} />
      </div>
    </div>
  )
}
export default Sidebar
