import Navbar from '../../../src/components/layouts/Navbar'
import React, { useState } from 'react'
import styles from './Home.module.css'
import {TiMediaPlayOutline} from 'react-icons/ti'
import Robot from '../../images/study.png'
import Study from '../../images/studys.png'


const Home = () => {

  const year = new Date().getFullYear()

  return (
    <div className={styles.bod}>
      <Navbar/>

      <div className={styles.container}>
          <div className={styles.title}>
              <p>Ola <span>´</span> , <br className={styles.break}/> caro aluno!</p>
              <h2 className={styles.mobile_description}>Faça login para obter uma experiência <br/> aprimorada!</h2>
              <a href=''><TiMediaPlayOutline/> Video introdutivo</a>
          </div>

          <div className={styles.image_container}>
              <img src={Robot} alt='My.study'/>
          </div>
      </div>

      <div className={styles.ro_bg}>
        <img src={Study} alt='study.me'/>
        <p>@{year} HorizonTech Todos os direitos reservados</p>
      </div>

    </div>
  )
}

export default Home