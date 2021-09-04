import React from 'react'
import Socials from '../Socials/Index'
import styles from "./Footer.module.css"


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h5>Usama Kashif</h5>
                <Socials />
            </div>
        </footer>
    )
}

export default Footer
