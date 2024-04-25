import { useState } from 'react'
import './color.css'
import './forme.css'
import './letter.css'
import CardProduto from './card/cardProduto.jsx'
<<<<<<< HEAD
import MenuLateral from './menuLateral/menuLateral.jsx'

=======
import NaviBarMenu from './naviBarMenu/NaviBarMenu.jsx'
>>>>>>> 3fd4841c6cb577b18275f2f53a9155513d35cbc9

function CoffeeBrewMenu() {
  const [count, setCount] = useState(0)

  return (
    <div className='paginaMenu'>

    <MenuLateral/>

    <div>
<<<<<<< HEAD

    <header className='colorCafe formeHeader'>
      <h1>CAFÉ</h1>
    </header>
    <div className='menuCentral'>
      <section >
      <CardProduto/>
      <CardProduto/>
     
    
=======
    <section>
      <NaviBarMenu/>
      <h1>ola</h1>
>>>>>>> 3fd4841c6cb577b18275f2f53a9155513d35cbc9
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
