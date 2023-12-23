import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from "@/components/Button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="" 
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem ipsum dolor</h1>
          <h2 className={styles.imgDesc}>vel cumque, maxime possimus. Sed modi</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>TEST TITLE</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit deleniti, accusamus laboriosam assumenda architecto molestiae vitae id earum, 
            vel cumque, maxime possimus. Sed modi, est vel nulla adipisci incidunt?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio amet, 
            cumque nostrum omnis doloribus esse quis! Deserunt enim provident natus minima amet, quibusdam quae,
            qui iste aliquid consectetur nihil!
          </p>
          <Button url="/contact" text = "Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About