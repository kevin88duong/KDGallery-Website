import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div >@Kevin Duong</div>
        <div className={styles.social}>
          <Image alt="Logo" src="/1.png" width={20} height={20} className={styles.icons}/>
          <Image alt="Logo" src="/2.png" width={20} height={20} className={styles.icons}/>
          <Image alt="Logo" src="/3.png" width={20} height={20} className={styles.icons}/>
          <Image alt="Logo" src="/4.png" width={20} height={20} className={styles.icons}/>
        </div>
    </div>
  )
}

export default Footer