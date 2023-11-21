import Head from 'next/head'
import Layout from '@/layouts/default-layout'
import styles from '@/styles/about.module.scss'
import status from '../../_data/status/index.json'
import StatusItem from '@/comps/status-item'
import AnimatedText from '@/comps/animated-text'
import Transition from '@/layouts/index'
import { m } from 'framer-motion'
import { GitHub, Mail } from 'react-feather'

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
      <Head>
        <title>About | Space</title>
      </Head>
      <Transition>
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
                Hi there! I am Owen, a web developer with focusing on front-end techniques.
              </m.p>
              <m.p
                initial={transitionStates.hidden}
                animate={transitionStates.visible}
                transition={transitionProps(2)}
              >
                Outside of coding, I spend a lot of time playing video games. My collection spans almost all genres, from famous triple-A titles to indie gems. I have even contributed to Chinese localization efforts for some indie development teams.
              </m.p>
              <m.p
                initial={transitionStates.hidden}
                animate={transitionStates.visible}
                transition={transitionProps(3)}
              >
                I am currently employed but am always seeking new challenges. Feel free to shoot me an email if you are interested.
              </m.p>
              <m.div
                initial={transitionStates.hidden}
                animate={transitionStates.visible}
                transition={transitionProps(4)}
                className='flex items-center justify-between'
              >
                <a className='flex items-center' href='mailto:owentsai.v@gmail.com'>
                  <Mail strokeWidth={1.5} size={20} className='mr-2' />
                  Email
                </a>
                <a className='flex items-center' href='https://github.com/Owen-Tsai' target='_blank' rel='noreferrer'>
                  <GitHub strokeWidth={1.5} size={20} className='mr-2' />
                  Github
                </a>
              </m.div>
            </section>
          </main>
        </Layout>
      </Transition>
    </>
  )
}
