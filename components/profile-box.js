import React from 'react'

import { IMG } from '../constants'
import styles from './profile-box.module.css'

function ProfileBox({ flat = false }) {
  return (
    <div className={styles.box}>
      {IMG.map((img) => {
        const showTitle = !flat && img.name.length > 0
        return (
          <div className={styles.photo}>
            {flat && (
              <div>
                <img className={styles.imageflat} src={img.src} alt={img.alt} />
              </div>
            )}
            {!flat && (
              <img className={styles.image} src={img.src} alt={img.alt} />
            )}
            {showTitle && <h2 className={styles.title}>{img.name}</h2>}
          </div>
        )
      })}
    </div>
  )
}
export default ProfileBox
