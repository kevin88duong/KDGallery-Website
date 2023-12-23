"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import DarkMode from '../DarkMode/DarkMode'
import { signOut, useSession } from 'next-auth/react'
import Button from '@/components/Button/Button'

//array to hold the data i will map throguh for each part of the navbar
const LinksForNav = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "About",
        url: "/about",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]


const Navbar = () => {

    const session = useSession()

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>KDGallery</Link>
        <div className={styles.links}>
            <DarkMode/> 
            {LinksForNav.map((link)=>(<Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>))}
            {session.status === "authenticated" ?(<button className={styles.button} onClick={signOut}>Logout</button>):
            (<Button url="/dashboard/login" text="Login" className={styles.button} />)
            }
            
        </div>
    </div>
    
    
  )
}

export default Navbar