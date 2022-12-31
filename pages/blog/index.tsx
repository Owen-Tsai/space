import Layout from '@layouts/default-layout'
import { Abril_Fatface } from '@next/font/google'
import styles from '@css/blog.module.css'

const font = Abril_Fatface({
  weight: '400',
  subsets: ['latin']
})

export default function Blog() {
  return (
    <>
      <Layout>
        <div className={styles.page}>
          <main className={styles.main}>
            <h1 style={font.style}>BLOGS</h1>
          </main>
        </div>
      </Layout>
    </>
  )
}
