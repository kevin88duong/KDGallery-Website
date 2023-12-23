"use client"
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'





const Blog = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error,mutate, isLoading } = useSWR("/api/posts", fetcher)
  console.log(data);
  return (
    
    <div className={styles.mContainer}>
      {isLoading ? "Loading" : data?.map(item=>(
      <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div className={styles.imgContainer} >
          <Image
            src={item.image}
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title} >{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog