import React from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'
import Photo from './photo'
import PhotoFlat from './photo-flat'

function ProfileBox({ flat = false }) {
  return (
    <div className={cn([styles.box])}>
      {flat && <PhotoFlat />}
      {!flat && <Photo />}
    </div>
  )
}
export default ProfileBox
