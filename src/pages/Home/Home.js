import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageHeader from '../../assets/power.svg'
import {FaAngleDoubleUp} from "react-icons/fa";

import Image2 from '../../assets/edAmbiental.png'
import Image3 from '../../assets/biodiversidade.png'
import Image4 from '../../assets/habitosPlaneta.png'


import Footer from '../../components/Footer/Footer'

import './home.styles.css'

const Home = () => {
  return (
    <>
      <Menu />
      <Header image={ImageHeader} ancora="#img2" >
        Aprender educação ambiental é adquirir poderes que ajudam a salvar o
        mundo!
      </Header>

      
      <main>

      <div className="principal" id="principal">
        
        <div className="card">
          <div className="imagem">
            <img src={Image2} alt="o que é educação ambiental?" id="img2" />
          </div>

          <div className="texto">
            <p>
              Educação ambiental é a transmissão de conhecimento sobre hábitos
              que podem ser incorporados em nosso dia a dia a fim de preservar o
              meio ambiente.
            </p>
            <p>
              É muito importante que todes entendam que meio ambiente é tudo o
              que está ao nosso redor e que pequenas atitudes em nosso cotidiano
              podem ser de extrema relevância para esse fantástico planeta em
              que habitamos a fim de garantir um desenvolvimento sustentável.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imagem">
            <img src={Image3} alt="o que é biodiversidade?" />
          </div>
          <div className="texto">
            <p>
              A biodiversidade, ou diversidade biológica, é o conjunto de todos
              os seres vivos existentes.
            </p>
            <p>
              O ar que respiramos, os alimentos que ingerimos, a energia que
              usamos e os materiais de que precisamos, são todos frutos da
              interação desta biodiversidade. 
            </p>
            <p>Sem as plantas, por exemplo, não
              teríamos oxigênio. Isso significa que a destruição do meio
              ambiente impacta diretamente nossas vidas.
             </p>
            <p>
              O Brasil ocupa quase metade da América do Sul e é o país com a
              maior biodiversidade do mundo. São mais de 116.000 espécies
              animais e mais de 46.000 espécies vegetais e três grandes
              ecossistemas marinhos.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imagem">
            <img src={Image4} alt="Hábitos que ajudam o planeta" />
          </div>
          <div className="texto">
            <ul>
              <li>
                Leve sempre uma garrafinha com você e evite comprar garrafas
                plásticas
              </li>
              <li>Use ecobag ao invés de sacolas plásticas</li>
              <li>
                Deixe os eletrônicos fora da tomada quando não estiver usando
              </li>
              <li>Use pilhas recaregáveis</li>
              <li>Evite desperdício de água e alimentos</li>
              <li>Pare de utilizar canudos ou tenha um reutilizável</li>
              <li>Separe o lixo para reciclagem</li>
              <li>Plante sempre que possível</li>
              <li>
                Compartilhe conhecimento sobre educação ambiental e inspire as
                pessoas com seus bons hábitos.
              </li>
            </ul>
          </div>
        </div>

      </div>
      <a href="#header" id="seta2"><FaAngleDoubleUp/></a>

      </main>
      
      {<Footer /> }
    </>
  )
}

export default Home
