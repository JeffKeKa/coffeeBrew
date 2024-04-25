import { useState } from "react";
import "./color.css";
import "./forme.css";
import "./letter.css";
import CardProduto from "./card/cardProduto.jsx";
import MenuLateral from "./menuLateral/menuLateral.jsx";

import NaviBarMenu from "./naviBarMenu/NaviBarMenu.jsx";

function CoffeeBrewMenu() {
  const [count, setCount] = useState(0);

  return (
    <div className="paginaMenu">
      <MenuLateral />
     
      <div>
      <NaviBarMenu />
        <header className="colorCafe formeHeader"></header>
        <div className="menuCentral">
          <section>
            <CardProduto />
            <CardProduto />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CoffeeBrewMenu;
