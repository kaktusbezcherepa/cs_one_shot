import styles from './Header.module.css'

const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="" alt="" className={styles.logo} />
            </div>
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li className={styles.navLink}>1</li>
                    <li className={styles.navLink}>2</li>
                    <li className={styles.navLink}>3</li>
                    <li className={styles.navLink}>4</li>
                    <li className={styles.navLink}>5</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
