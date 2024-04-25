import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoffeeBrewMenu from './componentes/coffeeBrewMenu'
import InfoPagamento from './componentes/infoPagamento/infoPagamento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <InfoPagamento/> */}
    <CoffeeBrewMenu/>


    </>
  )
}

export default App
