"use client"
import useSWR from 'swr'
import styles from "./page.module.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error,mutate, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  console.log(data);
 
  if(session.status === "loading"){
    return <p>Loading</p>
  }

  if(session.status === "unauthenticated"){
    router?.push("/dashboard/login")
  }

  console.log(session);

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async(id)=>{
    try {
      await fetch (`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate()
    } catch (err) {
      console.log(err);
    }
  }  
  
  if(session.status === "authenticated"){
    return (
    <div className={styles.container}>
      <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.postDelete} onClick={()=>handleDelete(post._id)}>X</span>
                </div>
              ))}
      </div>
      <form className={styles.newPost} onSubmit={handleSubmit} >
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input}/>
        <input type="text" placeholder="Description" className={styles.input}/>
        <input type="text" placeholder="Image(Please use a URL from Pexels.com)" className={styles.input}/>
        <textarea placeholder="Content" cols="30" rows="10" className={styles.postContent} ></textarea>
        <button className={styles.button} >Send</button>
      </form>
    </div>)
  }
}

export default Dashboard