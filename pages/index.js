import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Card from '../components/Card/Index'
import Footer from '../components/Footer/Index'
import Header from '../components/Header/Index'
import Tech from '../components/tech/Index'
import styles from '../styles/Home.module.css'

const WORKTYPES = ["All", "FullStack", "Frontend", "UI Design"]

export default function Home() {
  const [type, setType] = useState(WORKTYPES[0])

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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
      </section>

      <Footer />
    </main>
  )
}