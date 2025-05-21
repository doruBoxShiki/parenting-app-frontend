import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/layout.module.scss'

const DefaultLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
