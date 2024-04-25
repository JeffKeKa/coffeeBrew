import { useState } from 'react'
import './color.css'
import './forme.css'
import './letter.css'
import CardProduto from './card/cardProduto.jsx'
import NaviBarMenu from './naviBarMenu/NaviBarMenu.jsx'

function CoffeeBrewMenu() {
  const [count, setCount] = useState(0)

  return (
    <div className='paginaMenu'>

    <nav className='colorCafeAmargo formeNav'>
      <h1 className=''>Logo</h1><br/><br/><br/>
      <h1 className=''>CAFÉ</h1><br/><br/>
      <h1 className=''>BEBIDAS</h1><br/><br/>
      <h1 className=''>SALGADOS</h1><br/><br/>
      <h1 className=''>DOCES</h1><br/><br/>
    </nav>

    <div>
    <section>
      <NaviBarMenu/>
      <h1>ola</h1>
    </section>
    <section>
      <CardProduto/>
      <h1>ola</h1>
    </section>

    </div>
    
      
    </div>
  )
}

export default CoffeeBrewMenu
