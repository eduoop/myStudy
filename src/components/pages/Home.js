import Navbar from '../../../src/components/layouts/Navbar'
import React, { useState } from 'react'
import styles from './Home.module.css'
import {TiMediaPlayOutline} from 'react-icons/ti'
import Study from '../../images/studys.png'
import Wave from './background.png'


const Home = () => {

  const year = new Date().getFullYear()

  return (
    <div className={styles.bod}>
      <div className={styles.wave_container}>
        <img src={Wave} alt='wave'/>
      </div>
      <div className={styles.image_container}>
        <img src={Study} alt='My.study'/>
      </div>
      <Navbar/>

          <div className={styles.title}>
              <h1>Ola, <span>´</span> caro aluno!</h1>
              <p>Seja bem vindo ao seu site de tarefas mais queridinho do brasil</p>
              <h2 className={styles.mobile_description}>Faça login para obter uma experiência <br/> aprimorada!</h2>
              <div className={styles.links_container}>
                <a href='' className={styles.video_link}><TiMediaPlayOutline/> Video introdutivo</a>
                <a href='' className={styles.donate_link}>  Doar para o site</a>
              </div>

      </div>

      <div className={styles.ro_bg}>
        <img src={Study} alt='study.me'/>
        <p>@{year} HorizonTech Todos os direitos reservados</p>
      </div>

      <div className={styles.wave}></div>
    </div>
  )
}

export default Home