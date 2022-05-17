import styles from './Header.module.css';
import rocket from '../../assets/img /rocket.png';
import CustomLink from "../common /CustomLink/CustomLink";


const Header = ()=>{
    return (
        <div className={styles.header}>
             <div className={styles.logo}>
                 <img src={rocket} alt="logo"/>
             </div>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.item}>
                        <CustomLink to='profile'>Profile</CustomLink>
                    </li>
                    <li className={styles.item}>
                        <CustomLink to='news'>News</CustomLink>
                    </li>
                    <li className={styles.item}>
                        <CustomLink to='settings'>Settings</CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header