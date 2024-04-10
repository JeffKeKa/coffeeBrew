import { Nav } from "../../componentes/nav";
import { Div } from "../../componentes/div";
import { Divdois } from "../../componentes/div2";
import { Carrosel } from "../../componentes/carrosel";

export const Menu = () => {
  return (
    <>
     <div className="flex flex-col ">
       
      

        <Carrosel></Carrosel>

        <Div></Div>
        
        <div className="flex justify-center w-full">
        <Divdois></Divdois>
        </div>
        </div>
    </>
  );
};
