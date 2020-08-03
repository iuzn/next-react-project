import React from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'
import Photo from './photo'
import {
  Behance,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from './icons'

function ProfileBox() {
  return (
    <div className={cn([styles.box])}>
      <Photo />
    </div>
  )
}
export default ProfileBox
