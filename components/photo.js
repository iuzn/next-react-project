import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({
  src = 'https://media-exp1.licdn.com/dms/image/C5603AQG8OSqfcsLwAA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=8sEvoZZoGApADgNn6isNHLVtFHJaenMMyndWioo8ngM',
  alt,
  name = 'ibrahim uzun'
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
      <p className={styles.title}>{name}</p>
    </div>
  )
}
export default Photo
