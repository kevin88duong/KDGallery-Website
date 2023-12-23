import Image from 'next/image'
import styles from './page.module.css'
import HomeLogo from "public/HomeLogo.png"
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
          <h1 className={styles.title}>Welcome to our Illustrations website!</h1>
          <p className={styles.desc}>
            You can see our completed works and our in progress works aswell! 
            <br />
            <br />
            It would be great if you also left a post about our work!
          </p>
          <Button url="/portfolio" text="SEE WORK" />
      </div>
      <div className={styles.item}><Image src={HomeLogo} alt = "logo" className={styles.img} /></div>
      
    </div>
  )
}
