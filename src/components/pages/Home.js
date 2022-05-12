import Navbar from '../../../src/components/layouts/Navbar'
import React from 'react'
import styles from './Home.module.css'
import {TiMediaPlayOutline} from 'react-icons/ti'
import Robot from '../../images/study.png'

const Home = () => {
  return (
    <div className={styles.bod}>
      <Navbar />

      <div className={styles.container}>
          <div className={styles.title}>
              <p >Ola <span>´</span> , <br/> caro aluno</p>
              <a href=''><TiMediaPlayOutline/> Video introdutivo</a>
          </div>

          <div className={styles.image_container}>
              <img src={Robot} alt='My.study'/>
          </div>
      </div>
    </div>
  )
}

export default Home