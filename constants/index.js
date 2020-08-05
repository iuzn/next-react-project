import * as Icon from '../components/icons'
import React from 'react'

export default {
  TABLET_SIZE: 960,
  DESKTOP_SIZE: 1280
}
export const MENU = [
  {
    key: 'anasayfa',
    path: '/',
    title: 'Anasayfa'
  },
  {
    key: 'blog',
    path: '/blog',
    icon: <Icon.Blog />,
    iconSelected: <Icon.BlogFilled />,
    title: 'Blog'
  },
  {
    key: 'tezgah',
    path: '/tezgah',
    icon: <Icon.Tezgah />,
    iconSelected: <Icon.TezgahFilled />,
    title: 'Tezgah'
  },
  {
    key: 'projeler',
    path: '/projeler',
    icon: <Icon.Projeler />,
    iconSelected: <Icon.ProjelerFilled />,
    title: 'Projeler'
  },
  {
    key: 'maarif',
    path: '/maarif',
    icon: <Icon.Maarif />,
    iconSelected: <Icon.MaarifFilled />,
    title: 'Maarif'
  },
  {
    key: 'lahzalar',
    path: '/lahzalar',
    icon: <Icon.Lahzalar />,
    iconSelected: <Icon.LahzalarFilled />,
    title: 'Lahzalar'
  },
  {
    key: 'kimdir',
    path: '/kimdir',
    icon: <Icon.Kimdir />,
    iconSelected: <Icon.KimdirFilled />,
    title: 'Kimdir'
  },
  {
    key: 'iletisim',
    path: '/iletisim',
    icon: <Icon.Iletisim />,
    iconSelected: <Icon.IletisimFilled />,
    title: 'İletişim'
  }
]
export const INFO = [
  {
    key: 'info',
    path: '/info',
    icon: <Icon.Info />,
    iconSelected: <Icon.InfoFilled />
  }
]
