import Navbar from '../../../src/components/layouts/Navbar'
import React, { useState } from 'react'
import styles from './Home.module.css'
import {TiMediaPlayOutline} from 'react-icons/ti'
import Robot from '../../images/study.png'

const Home = () => {
  return (
    <div className={styles.bod}>
      <Navbar/>

      <div className={styles.container}>
          <div className={styles.title}>
              <p>Ola <span>´</span> , <br className={styles.break}/> caro aluno</p>
              <h2 className={styles.mobile_description}>Faça login para obter uma experiência aprimorada!</h2>
              <a href=''><TiMediaPlayOutline/> Video introdutivo</a>
          </div>

          <div className={styles.image_container}>
              <img src={Robot} alt='My.study'/>
          </div>
      </div>

      <div className={styles.overlay}></div>
    </div>
  )
}

export default Home