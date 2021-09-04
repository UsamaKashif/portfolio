import React from 'react'
import styles from "./Socials.module.css"
const Socials = () => {
    return (
        <div className={styles.socials}>
            <a href="https://www.instagram.com/usama_codes/" rel="noreferrer" target="_blank">
                <img src="/icons/instagram.svg" alt="" />
            </a>
            <a href="https://github.com/UsamaKashif/" rel="noreferrer" target="_blank">
                <img src="/icons/github.svg" alt="" />
            </a>
            <a href="https://dribbble.com/usamaKashif" rel="noreferrer" target="_blank">
                <img src="/icons/dribbble.svg" alt="" />
            </a>
            <a href="https://www.behance.net/usamakashif" rel="noreferrer" target="_blank">
                <img src="/icons/behance.svg" alt="" />
            </a>
            <a href="https://www.fiverr.com/usama_kashif" rel="noreferrer" target="_blank">
                <img src="/icons/fiverr.svg" alt="" />
            </a>
        </div>
    )
}

export default Socials
