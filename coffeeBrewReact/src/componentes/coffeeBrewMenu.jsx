import { useState } from 'react'
import './color.css'
import './forme.css'
import './letter.css'
import CardProduto from './card/cardProduto.jsx'
import MenuLateral from './menuLateral/menuLateral.jsx'


function CoffeeBrewMenu() {
  const [count, setCount] = useState(0)

  return (
    <div className='paginaMenu'>

    <MenuLateral/>

    <div>

    <header className='colorCafe formeHeader'>
      <h1>CAFÉ</h1>
    </header>
    <div className='menuCentral'>
      <section >
      <CardProduto/>
      <CardProduto/>
     
    
    </section>
    <section>
      <CardProduto/>
      <CardProduto/>
      
      
    </section>

    </div>

    </div>
    
      
    </div>
  )
}

export default CoffeeBrewMenu
