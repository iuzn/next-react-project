import styles from './footer.module.css'
import {
  Behance,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from '../icons'
import React from 'react'

function Footer() {
  return (
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
  )
}
export default Footer
