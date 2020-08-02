import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Tezgah } from '../components/icons'
import TextTitle from '../components/title'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>
export const NavButton = () => (
  <NavigationButton>
    <Tezgah />
    <TextTitle>Tezgah</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="blog" />
