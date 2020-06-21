import React from 'react'
import Link from 'next/link'
import Styles from "../styles/header.module.css"
const Header = () => {
    return (
        <div className={Styles.header}>
            <h1><Link href="/"><a>NexTech</a></Link></h1>
            <ul className={Styles.nav}>
                <Link href="page1"><a>Page1</a></Link>
                <Link href="dynamic"><a>Dynamic</a></Link>
                <Link href="data-fetching"><a>Data</a></Link>
           </ul>
        </div>
    )
}

export default Header
