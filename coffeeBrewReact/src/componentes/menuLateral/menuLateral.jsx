import './menuLateral.css'
import '../color.css'
import '../forme.css'
import '../letter.css'

export default function MenuLateral() {
    return (
      <div className='menuLateral colorCafe'>
      <img src="./imagensProduto\imagensLogo\logoSemFundo.png"  className='logo' />
      <h1 className=''>CAFÉ</h1>
      <h1 className=''>BEBIDAS</h1>
      <h1 className=''>SALGADOS</h1>
      <h1 className=''>DOCES</h1>
      </div>
    );
   }