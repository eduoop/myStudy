import React from 'react'
import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to="login">
        <button className={styles.btn}>Entrar</button>
    </Link>
  )
}

export default Button