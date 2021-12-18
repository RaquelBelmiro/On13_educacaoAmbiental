import './header.styles.css'
import {FaAngleDoubleDown} from "react-icons/fa";

const Header = (props) => {
 return (
    <div className="header" id="header">
      <div>
        <h1>{props.children}</h1>
       <a href={props.ancora}><FaAngleDoubleDown/></a>
      </div>
      <img src={props.image} alt='ilustracao de mulher com capa de heroína' />
     
    </div>
  )
}

export default Header 