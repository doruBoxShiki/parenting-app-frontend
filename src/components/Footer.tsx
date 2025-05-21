import styles from '../styles/layout.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} 育ちラボ. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
