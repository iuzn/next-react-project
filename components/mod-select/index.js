import React, { useContext } from 'react'
import cn from 'classnames'

import styles from './style.module.css'
import StoreContext from '../../store'
import { Check, Kapat } from '../icons'
import Button from '../button'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark',
  sepia: 'Sepia',
  null: ''
}

function ModSelect({ onClick = () => {} }) {
  const store = useContext(StoreContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.mod}>
        <Button className={cn(styles.kapat)} onClick={onClick}>
          <Kapat />
        </Button>
        <h2>Bir Tema Seç</h2>

        <div>
          {store.theme === 'light' && <h3>"Aydınlık"</h3>}
          {store.theme === 'dark' && <h3>"Karanlık"</h3>}
          {store.theme === 'dim' && <h3>"Loş"</h3>}
          {store.theme === 'sepia' && <h3>"Sepya"</h3>}
        </div>

        <div className={styles.container}>
          {['light', 'dark', 'sepia', 'dim'].map((theme) => (
            <label key={theme} id={THEME[theme]} className={styles.button}>
              <Check id={THEME[theme]} />
              <input
                type="radio"
                value={theme}
                name="theme"
                checked={theme === store.theme}
                onChange={(e) => store.changeTheme(e.target.value)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ModSelect
