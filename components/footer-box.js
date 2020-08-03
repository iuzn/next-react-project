import React from 'react'
import cn from 'classnames'

import styles from './footer-box.module.css'
import {
  Behance,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from './icons'

function FooterBox() {
  return (
    <div className={cn([styles.box])}>
      <div className={styles.social}>
        <Youtube />
        <Facebook />
        <Twitter />
        <Instagram />
        <br />
        <Behance />
        <Dribbble />
        <Linkedin />
        <Github />
        <br />
        <a href="https://ibrahimuzun.com">Yardım</a>
        <a href="https://ibrahimuzun.com">Yardım</a>
        <a href="https://ibrahimuzun.com">Yardım</a>
        <br />
        <p>ibrahim uzun © 2020</p>
      </div>
    </div>
  )
}
export default FooterBox
