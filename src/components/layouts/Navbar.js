import styles from './Navbar.module.css'
import { useState } from 'react'
import Button from './Button'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

function Navbar({value}) {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [path, setPath] = useState('')

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => {
    setClick(false)
  }

  const onMouseClick = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(!dropdown)
    }
  }

  const screenWidth = () => {
    if(window.innerWidth < 960) {
      setPath('input-options')
    } else {
      setPath('')
    }
  }



  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.menu_icon} onClick={handleClick}>
          <i className={styles.c_white}>{click ? <MdOutlineClose className={styles.zi}/> : <AiOutlineMenu className={styles.zi}/>}</i>
        </div>
        <Link to='/' className={styles.navbar_logo}>
          Study<span className={styles.dot_logo}>.</span>me
        </Link>
        <ul className={click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
          <li className={styles.nav_item}
              onClick={onMouseClick}          
          >

            <Link onClickCapture={screenWidth} to={path} className={`${styles.nav_links} ${styles.c_white}`} onClick={closeMobileMenu}>
              Opções De Entrada <IoIosArrowDown className={styles.none_display}/>
            </Link>

            {dropdown && <DropDown/>}
          </li>

          <li className={styles.nav_item}>
            <Link to="/support" className={styles.nav_links} onClick={closeMobileMenu}>
              Suporte
            </Link>
          </li>

          <li className={styles.nav_item}>
            <Link to="/about-us" className={styles.nav_links} onClick={closeMobileMenu}>
              Sobre nós
            </Link>
          </li>

          <li className={styles.nav_item}>
            <Link to="/how-it-works" className={styles.nav_links} onClick={closeMobileMenu}>
              Como funciona
            </Link>
          </li>

          <li className={`${styles.nav_item} ${styles.button_able}`}>
          <Button />
          </li>
        </ul>
        <div className={styles.button_disable}>
        <Button />
        </div>
        { click && <div onClick={closeMobileMenu} className={styles.overlay}></div> }
      </nav>
    </>
  )
}

export default Navbar