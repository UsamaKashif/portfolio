import React from 'react'
import styles from "./Tech.module.css"


const Tech = () => {
    return (
        <section className={styles.tech}>
            <div className={styles.container}>
                <p>Python</p>
                <p>JavaScript</p>
                <p>React JS</p>
                <p>Next JS</p>
                <p>Django</p>
                <p>Figma</p>
            </div>
        </section>
    )
}

export default Tech
