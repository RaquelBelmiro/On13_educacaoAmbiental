import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageAbout from '../../assets/about.svg'
import FotoAbout from '../../assets/foto.jpeg'
import Footer from '../../components/Footer/Footer'

import './sobre.styles.css'
const Sobre = () => {
  return (
    <>
      <Menu />
      <Header image={ImageAbout} ancora="#foto">Prazer, sou a Raquel Belmiro</Header>
      <div className="main">
        <img src={FotoAbout} alt="foto de Raquel" id="foto" />
        <div>
          <h2>Raquel Belmiro</h2>
          <p>Desenvolvedora FrontEnd em formação na reprograma</p>
          <p>Participante do Projeto de Educação ambiental Turminha do Nepas</p>

          <p>Estudante de Sistemas de Informação</p>


        </div>

      </div>
      <Footer />
    </>
  )
}

export default Sobre
