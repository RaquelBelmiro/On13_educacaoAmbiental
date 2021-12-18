import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Mais from '../pages/Mais/Mais'
import Sobre from '../pages/Sobre/Sobre'

function Rotas(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>  
        <Route path="/mais" component={Mais}/>              
        <Route path="/sobre" component={Sobre}/> 
      </Switch>  
    </BrowserRouter>
  )
}
export default Rotas