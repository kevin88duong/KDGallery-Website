import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.choiceTitle}>Choose illustration</h1>
      <div className={styles.items} > 
        <Link href="/portfolio/completed_illustrations" className={styles.item}>
          <span className={styles.title}>Completed Illustrations</span>
        </Link>
        <Link href="/portfolio/in_progress_illustrations" className={styles.item}>
          <span className={styles.title}>In Progress Illustrations</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio