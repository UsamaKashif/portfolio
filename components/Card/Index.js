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

const Card = ({data}) => {
    return (
        <div className={styles.cardContainer}>
            <section className={styles.imgSection}>
                <img src={data.image} alt={data.about} />
            </section>
            <section className={styles.content}>
                <h1>{data.title}</h1>
                <p>{data.about}</p>
                <div className={styles.btns}>
                    {
                        data.btns.map((btn, index) => (
                            <Button color={btn.color} link={btn.link} key={index} type={btn.type} text={btn.text} />
                        ))
                    }
                </div>
                <div className={styles.techUsedContainer}>
                    {
                        data.tech.map((tech, index) => (
                            <TechUsed key={index} text={tech} key={index} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}



export default Card
