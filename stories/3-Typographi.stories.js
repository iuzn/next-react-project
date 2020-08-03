import React from 'react'
import TextTitle from '../components/title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Selamun Aleyküm!</TextTitle>
    <TextTitle bold={false}>Selamun Aleyküm!</TextTitle>
  </div>
)
