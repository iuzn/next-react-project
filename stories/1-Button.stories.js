import React from 'react'
import Button from '../components/button/'
import NavigationButton from '../components/nav/button'
import Navigation from '../components/nav/navigation'
import { Tezgah } from '../components/icons'
import TextTitle from '../components/title'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Buttons',
  decorators: [withKnobs]
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => (
  <NavigationButton>
    <Tezgah />
    <TextTitle>Tezgah</TextTitle>
  </NavigationButton>
)
export const Nav = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} selectedKey="blog" />
}
