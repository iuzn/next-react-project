import React from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'
import Photo from './photo'
import { Icon } from '../stories/2-Icons.stories'
import * as Icons from './icons'
import Blog from './icons/Blog'

function ProfileBox() {
  return (
    <div className={cn([styles.box])}>
      <Photo />
      <div>
        <Blog />
      </div>
    </div>
  )
}
export default ProfileBox
