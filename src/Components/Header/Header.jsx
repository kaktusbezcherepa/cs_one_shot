import styles from './Header.module.css'
import Icons from '../../icons/test.svg'


const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={Icons} alt="" className={styles.logo} />
            </div>
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li className={styles.navLink}>Сервера</li>
                    <li className={styles.navLink}>Форум</li>
                    <li className={styles.navLink}>Поддержка</li>
                    <li className={styles.navLink}>Информация</li>
                    
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
