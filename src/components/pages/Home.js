import Navbar from '../../../src/components/layouts/Navbar'
import React from 'react'
import styles from './Home.module.css'
import {TiMediaPlayOutline} from 'react-icons/ti'

const Home = () => {
  return (
    <div className={styles.bod}>
      <Navbar />

      <div>
          <div className={styles.title}>
              <p >Ola , <br/> caro aluno</p>
              <a href=''><TiMediaPlayOutline/> Video introdutivo</a>
          </div>

          <div>
              <img src='' alt=''/>
          </div>
      </div>
    </div>
  )
}

export default Home