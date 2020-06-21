import React from 'react'
import Header from "./Header"
import Styles from "../styles/layout.module.css"
const Layout = ({children}) => {
    return (
        <div className={Styles.container}>
            <Header />
            {children}
            <footer>
                <h2>
                    <a href="http://github.com/Ranganath-MD" target="_blank">@Ranganath</a>
                </h2>
            </footer>
        </div>
    )
}

export default Layout
