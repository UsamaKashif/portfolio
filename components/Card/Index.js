import React from 'react'
import Button from '../Button/Index'
import styles from "./Card.module.css"


const TechUsed = ({text}) => {
    return (
        <div className={styles.techUsed}>
            <p>{text}</p>
        </div>
    )
}

const Card = () => {
    return (
        <div className={styles.cardContainer}>
            <section className={styles.imgSection}>
                <img src="/images/clothgator.png" alt="clothgator.com" />
            </section>
            <section className={styles.content}>
                <h1>Clothgator.com</h1>
                <p>Clothgator is a clothing aggregator based in Pakistan.</p>
                <div className={styles.btns}>
                    <Button color="accent" type="fill" text="View Demo" />
                    <Button color="black" type="stroked" text="Github" />
                </div>
                <div className={styles.techUsedContainer}>
                    <TechUsed text="Django" />
                    <TechUsed text="Next JS" />
                </div>
            </section>
        </div>
    )
}



export default Card
