import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Tezgah } from '../components/icons'
import TextTitle from '../components/title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Buttons',
  decorators: [withKnobs]
}

export const Normal = () => <Button>Save</Button>

export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
)

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
