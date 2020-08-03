import React from 'react'
import NavigationButton from './navigation-button'
import {
  Tezgah,
  Projeler,
  Maarif,
  Lahzalar,
  Kimdir,
  Iletisim,
  Blog
} from './icons'
import styles from './navigation.module.css'
import TextTitle from './title'

const MENU = [
  {
    key: 'blog',
    icon: <Blog />,
    title: 'Blog'
  },
  {
    key: 'tezgah',
    icon: <Tezgah />,
    title: 'Tezgah'
  },
  {
    key: 'projeler',
    icon: <Projeler />,
    title: 'Projeler'
  },
  {
    key: 'maarif',
    icon: <Maarif />,
    title: 'Maarif'
  },
  {
    key: 'lahzalar',
    icon: <Lahzalar />,
    title: 'Lahzalar'
  },
  {
    key: 'kimdir',
    icon: <Kimdir />,
    title: 'Kimdir'
  },
  {
    key: 'iletisim',
    icon: <Iletisim />,
    title: 'İletişim'
  }
]

function Navigation({ flat, selectedKey }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        return (
          <NavigationButton selected={selectedKey === menu.key}>
            {menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}
export default Navigation
