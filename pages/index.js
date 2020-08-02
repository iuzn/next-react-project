import React from 'react'
import Button from '../components/button'
import Link from 'next/link'
function HomePage() {
  return (
    <div>
      <h1>Hoşgeldiniz</h1>
      <Link href="../ui/index.html">
        <Button>Merhaba</Button>
      </Link>
    </div>
  )
}

export default HomePage
