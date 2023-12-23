import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

async function getData(id){
  const res = await fetch(`https://kdgallery.vercel.app/api/posts/${id}`, { cache: "no-store" })

  if(!res.ok){
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({params}){
  const data  = await getData(params.id)
  return{
    title: data.title,
    description: data.description
  }
}



const BlogPosts = async({params}) => {
  const data = await getData(params.id)
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title} >
            {data.title}
          </h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.poster}>
            <Image
              src="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.profilePic}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.image}
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPosts