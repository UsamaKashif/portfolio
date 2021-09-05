import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Card from '../components/Card/Index'
import Footer from '../components/Footer/Index'
import Header from '../components/Header/Index'
import Tech from '../components/tech/Index'
import styles from '../styles/Home.module.css'
import { work } from '../work'

const WORKTYPES = ["All", "FullStack", "Frontend", "UI Design"]

export default function Home({data}) {
  const [type, setType] = useState(WORKTYPES[0])

  const [cards, setCards] = useState([])

  useEffect(() => {
    switch (type) {
      case WORKTYPES[1]:
        setCards(data.filter(data => data.type === type))
        break
      case WORKTYPES[2]:
        setCards(data.filter(data => data.type === type))
        break
      case WORKTYPES[3]:
        setCards(data.filter(data => data.type === type))
        break
      default:
        setCards(data)
    }
  }, [type])

  const changeActive = (t) => {
    setType(t)
  }

  return (
    <main >
      <Head>
        <title>Usama Kashif | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Tech />
      <section className={styles.workContainer}>
          <h1>Work I Have Done</h1>
          <div className={styles.workTypes}>
            {
              WORKTYPES.map((t, i) => <p onClick={() => changeActive(t)} key={i} className={[styles.type, t == type && styles.active].join(" ")}>{t}</p>)
            }
          </div>
          <div className={styles.cards}>
            {
              cards.map((card, index) => (
                <Card data={card} key={index} />
              ))
            }
          </div>
      </section>

      <Footer />
    </main>
  )
}


export const getStaticProps = async () => {
  const data = work
  return {
    props: {
      data: data
    }
  }
}