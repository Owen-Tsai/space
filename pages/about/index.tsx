import Head from 'next/head'
import Layout from '@layouts/default-layout'
import styles from '@css/about.module.scss'
import status from '../../_data/status/index.json'
import StatusItem from '@comps/status-item'
import AnimatedText from '@comps/animated-text'
import Transition from '@layouts/index'
import { m } from 'framer-motion'

export default function About () {
  const transitionStates = {
    hidden: {
      x: '20%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  const transitionProps = (i: number) => ({
    duration: 0.4,
    delay: i * 0.1
  })

  return (
    <>
      <Transition>
        <Head>
          <title>About | Space</title>
        </Head>
        <Layout headerCls='sticky top-0 bg-gray-50 dark:bg-gray-900 z-50'>
          <main className={styles.page}>
            <section className={styles['status-wrapper']}>
              <h1 className={styles.title}>
                <AnimatedText text='STATUS' />
              </h1>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <StatusItem items={status.creating} type='work' />
                <StatusItem items={status.play} type='games' />
                <StatusItem items={status.reading} type='books' />
              </div>
            </section>
            <section className={styles['about-wrapper']}>
              <h1 className={styles.title}>
                <AnimatedText text='ABOUT' />
              </h1>
              <m.p
                initial={transitionStates.hidden}
                animate={transitionStates.visible}
                transition={transitionProps(1)}
              >
                Hi there. I&apos;m Owen, a web developer with focusing on front-end techniques.
              </m.p>
              <m.p
                initial={transitionStates.hidden}
                animate={transitionStates.visible}
                transition={transitionProps(2)}
              >
                Outside coding, I play video games a lot. My collection covers almost all genres of games from the famous triple A titles to the indie ones. I even helped with Chinese localization work for some indie dev teams.
              </m.p>
              <m.p
                initial={transitionStates.hidden}
                animate={transitionStates.visible}
                transition={transitionProps(3)}
              >
                I&apos;m currently employed, but constantly seeking for new challenges. Shoot an email if you want.
              </m.p>
            </section>
          </main>
        </Layout>
      </Transition>
    </>
  )
}