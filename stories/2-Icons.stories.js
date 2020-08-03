import React from 'react'
import * as Icons from '../components/icons'
import Photo from '../components/photo'
import ProfileBox from '../components/profile-box'

export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.Behance />
    <Icons.Blog />
    <Icons.BlogFilled />
    <Icons.Dribbble />
    <Icons.Facebook />
    <Icons.Github />
    <Icons.Iletisim />
    <Icons.IletisimFilled />
    <Icons.index />
    <Icons.Instagram />
    <Icons.Kimdir />
    <Icons.KimdirFilled />
    <Icons.Lahzalar />
    <Icons.LahzalarFilled />
    <Icons.Linkedin />
    <Icons.Maarif />
    <Icons.MaarifFilled />
    <Icons.Mod />
    <Icons.ModFilled />
    <Icons.Projeler />
    <Icons.ProjelerFilled />
    <Icons.Tezgah />
    <Icons.TezgahFilled />
    <Icons.Twitter />
    <Icons.Youtube />
  </div>
)
export const ProfilePhoto = () => <Photo />
export const Box = () => <ProfileBox />
