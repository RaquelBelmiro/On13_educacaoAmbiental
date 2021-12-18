// import { useState, useEffect } from 'react'
// import { BsArrowReturnRight } from 'react-icons/bs'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageMais from '../../assets/learn.svg'
import VideoNepas1 from '../../assets/nepas-edAmbiental.mp4'
import VideoNepas2 from '../../assets/nepas-biodiversidade.mp4'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import './mais.styles.css'

const Mais = () => {
  return (
    <>
      <Menu />
      <Header image={ImageMais} ancora="#principalMais">
        Conteúdo para aprender e se divertir!
      </Header>
      <div className="principalMais" id="principalMais">
        <h2>Turminha do Nepas</h2>
        <p>
          Turminha do Nepas é um dos projetos de educação ambiental do Núcleo de
          estudos em animais Silvestres da Universidade estadual do norte
          fluminense. O projeto ensina de forma divertida e simples com vídeos e
          ilustrações sobre diversos temas relacionados ao meio ambiente.
          Confira abaixo:
        </p>
        <div className="card-container">
          <div className="card">
            <video src={VideoNepas1} width="500" controls></video>
          </div>

          <div className="cardMais">
            <video src={VideoNepas2} width="500" controls></video>
          </div>
        </div>
          <p>Siga o projeto nas redes:</p>
          <div className="redes">

          <a
            href="https://www.instagram.com/nepasuenf/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={25}/>
          </a>
          <a
            href="https://www.youtube.com/user/nepasrj"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={30}/>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Mais
