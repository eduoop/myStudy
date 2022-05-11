import styles from './DropDown.module.css'
import { useState } from 'react'
import MenuItems from './Menuitems'
import { Link } from 'react-router-dom'

const DropDown = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <>
        <ul onClick={handleClick} className={click ? `${styles.dropdown_menu} ${styles.dropdown_menu.clicked}` : `${styles.dropdown_menu}`}>
            {MenuItems.map((item, index) => (
                <li key={index}>
                    <Link className={styles.dropdown_link} to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default DropDown