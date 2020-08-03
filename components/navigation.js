import React from 'react'
import NavigationButton from './navigation-button'
import {
  BlogFilled,
  Tezgah,
  Projeler,
  Maarif,
  Lahzalar,
  Kimdir,
  Iletisim
} from './icons'
import styles from './navigation.module.css'
import TextTitle from './title'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton selected={selectedKey === 'blog'}>
        <BlogFilled />
        <TextTitle>Blog</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'tezgah'}>
        <Tezgah />
        <TextTitle>Tezgah</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'projeler'}>
        <Projeler />
        <TextTitle>Projeler</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'maarif'}>
        <Maarif />
        <TextTitle>Maarif</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'lahzalar'}>
        <Lahzalar />
        <TextTitle>Lahzalar</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'kimdir'}>
        <Kimdir />
        <TextTitle>Kimdir</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'iletisim'}>
        <Iletisim />
        <TextTitle>İletişim</TextTitle>
      </NavigationButton>
    </nav>
  )
}
export default Navigation
