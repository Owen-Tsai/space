import Head from 'next/head'
import Layout from '@layouts/default-layout'
import styles from '@css/about.module.scss'
import status from '../../_data/status/index.json'
import StatusItem from '@comps/status-item'
import { Abril_Fatface } from '@next/font/google'

const font = Abril_Fatface({
  weight: '400',
  subsets: ['latin']
})

export default function About () {
  return (
    <>
      <Head>
        <title>About | Space</title>
      </Head>
      <Layout headerCls='sticky top-0 bg-gray-50 dark:bg-gray-900 z-50'>
        <main className={styles.page}>
          <section className={styles['status-wrapper']}>
            <h1 className={styles.title} style={font.style}>STATUS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <StatusItem items={status.creating} type='work' />
              <StatusItem items={status.play} type='games' />
              <StatusItem items={status.reading} type='books' />
            </div>
          </section>
          <section className={styles['about-wrapper']}>
            <h1 className={styles.title} style={font.style}>ABOUT</h1>
            <p>
              Hi there. I&apos;m Owen, a web developer with focusing on front-end techniques.
            </p>
            <p>
              Outside coding, I play video games a lot. My collection covers almost all genres of games from the famous triple A titles to the indie ones. I even helped with Chinese localization work for some indie dev teams.
            </p>
            <p>
              I&apos;m currently employed, but constantly seeking for new challenges. Shoot an email if you want.
            </p>
          </section>
        </main>
      </Layout>
    </>
  )
}