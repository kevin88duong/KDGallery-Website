"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [error, setError] = useState(null);
  const session = useSession()
  const router = useRouter()

  if(session.status === "loading"){
    return <p>Loading</p>
  }
  if(session.status === "authenticated"){
    router?.push("/dashboard")
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})

    
  }

  return (
    <div className={styles.container}>
       <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && "Something went wrong!"}
      </form>
      <button onClick={()=>signIn("google")} >Login with Google</button>
    </div>
  )
}

export default Login