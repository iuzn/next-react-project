import React from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './footer-box.module.css'

import Footer from './footer'
import { INFO } from '../../constants'
import Button from '../button'

function FooterBox({ flat = false }) {
  const router = useRouter()
  return (
    <div className={cn([styles.box])}>
      {INFO.map((info) => {
        const selected = router.pathname === info.path
        return (
          <div key={router.pathname}>
            {!flat && <Footer />}
            {flat && (
              <Button
                href={info.path}
                key={info.key}
                selected={selected}
                className={styles.info}
              >
                {selected ? info.iconSelected : info.icon}
              </Button>
            )}
          </div>
        )
      })}
    </div>
  )
}
export default FooterBox
