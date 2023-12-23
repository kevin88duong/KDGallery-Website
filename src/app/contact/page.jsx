import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "Contact Page",
  description: "This is the contact page"
}


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} >Contact Us</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/Contact2.png"
            fill={true}
            alt="" 
            className={styles.img}
          />
        </div>
          <form className={styles.form}>
            <input type="text" className={styles.input} placeholder='Name' />
            <input type="text" className={styles.input} placeholder='Email' />
            <textarea className={styles.textArea} cols="30"  rows="10" placeholder='Message' ></textarea>
            <Button url="" text="Send" />
          </form>
      </div>
    </div>
  )
}

export default Contact
