import { Link } from 'react-router-dom'
import styles from '../styles/layout.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>育ちラボ</h1>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/articles">記事一覧</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
