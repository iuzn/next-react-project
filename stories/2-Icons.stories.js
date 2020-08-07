import React from 'react'
import * as Icons from '../components/icons'
import ProfileBox from '../components/profile-box/'

export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.Blog />
    <Icons.BlogFilled />
    <Icons.Iletisim />
    <Icons.IletisimFilled />
    <Icons.Kimdir />
    <Icons.KimdirFilled />
    <Icons.Lahzalar />
    <Icons.LahzalarFilled />
    <Icons.Maarif />
    <Icons.MaarifFilled />
    <Icons.Mod />
    <Icons.ModFilled />
    <Icons.Info />
    <Icons.InfoFilled />
    <Icons.Projeler />
    <Icons.ProjelerFilled />
    <Icons.Tezgah />
    <Icons.TezgahFilled />
    <Icons.Youtube />
    <Icons.Facebook />
    <Icons.Twitter />
    <Icons.Instagram />
    <Icons.Dribbble />
    <Icons.Behance />
    <Icons.Linkedin />
    <Icons.Github />
  </div>
)
export const Box = () => <ProfileBox />
