import styles from './Navbar.module.css'
import { useState } from 'react'
import Button from './Button'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

function Navbar() {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => {
    setClick(false)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.navbar_logo}>
          Study.me
        </Link>
        <div className={styles.menu_icon} onClick={handleClick}>
          <i>{click ? <MdOutlineClose/> : <AiOutlineMenu/>}</i>
        </div>
        <ul className={click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
          <li className={styles.nav_item}>
            <Link to="/products" className={styles.nav_links} onClick={closeMobileMenu}>
              Produtos <IoIosArrowDown />
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
        </ul>
        <Button/>
      </nav>
    </>
  )
}

export default Navbar