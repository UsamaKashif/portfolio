import React from 'react'
import styles from "./Socials.module.css"
const Socials = () => {
    return (
        <div className={styles.socials}>
            <a href="https://www.instagram.com/usama_codes/" target="_blank">
                <img src="/icons/instagram.svg" alt="" />
            </a>
            <a href="https://github.com/UsamaKashif/" target="_blank">
                <img src="/icons/github.svg" alt="" />
            </a>
            <a href="https://dribbble.com/usamaKashif" target="_blank">
                <img src="/icons/dribbble.svg" alt="" />
            </a>
            <a href="https://www.behance.net/usamakashif" target="_blank">
                <img src="/icons/behance.svg" alt="" />
            </a>
            <a href="https://www.fiverr.com/usama_kashif" target="_blank">
                <img src="/icons/fiverr.svg" alt="" />
            </a>
        </div>
    )
}

export default Socials
