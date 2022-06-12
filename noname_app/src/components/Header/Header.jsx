import styles from './Header.module.css';
import rocket from '../../assets/img /rocket.png';
import CustomLink from  '../common /CustomLink/CustomLink';
import ReactSwitch from 'react-switch';
import {useTheme} from '../common /Hooks/useTheme';



const Header = ()=>{
    const {theme,setTheme} = useTheme()
    const changeTheme = ()=> {
        setTheme((curr)=> curr === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className={styles.header}>
             <div className={styles.logo}>
                 <img src={rocket} alt="logo"/>
             </div>
            <nav className={styles.navbar}>
                <ul className={styles.nav}>
                    <li className={styles.item}>
                        <CustomLink to='profile'>Profile</CustomLink>
                    </li>
                    <li className={styles.item}>
                        <CustomLink to='news'>News</CustomLink>
                    </li>
                </ul>
            </nav>
              <div className={styles.btn}>
                  <ReactSwitch onChange={changeTheme} checked={theme === 'dark'}/>
              </div>
        </div>
    )
}

export default Header