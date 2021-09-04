import React from 'react'
import Socials from '../Socials/Index'
import styles from "./Header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.pattern} src="/images/pattern.svg" alt="pattern" />
                <h1 className={styles.title}>
                    Hi, <br />
                    I am Usama Kashif, <br />
                    FullStack Developer <br />
                    and UI Designer
                </h1>
                <Socials />
            </div>
        </header>
    )
}

export default Header
