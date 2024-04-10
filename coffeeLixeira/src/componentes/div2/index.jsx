import "./style.css";
import { CardProduct } from "../Card";
import { cafes } from "../../utils/constants/cafes";
export const Divdois = () => {
  return (
    
    
    <div className="  items-center justify-center gap-4 w-full y-1/2 flex flex-row ">
      {cafes.map((produto) => (
        <div
          clasName="items-center justify-center flex flex-row "
          key={produto.id}
        >
          {/* <div className=" max-h-m bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800  flex flex-col items-center"> */}
          <div className="bg-transparent gap-4 border-brown-800 rounded-lg flex flex-row  items-center justify-center ">
          <CardProduct></CardProduct>
          
            
            <div className=" gap-4">
              <div className="  bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800 py-3 px-7 gap-4 hover:bg-brown-300 duration-200 ">
                capuccino
              </div>
              <div className=" bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800   py-3 px-7 hover:bg-brown-300 duration-200">
                chocolate
              </div>
              <div className="  bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800 py-3 px-7 hover:bg-brown-300 duration-200">
                descafeinado
             
              </div>
              <div className=" bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800  py-3 px-7  hover:bg-brown-300 duration-200">
                chá
              </div>
              <div className=" bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800  py-3 px-7  hover:bg-brown-300 duration-200">
               cafelatte

              </div>
              
              <div className=" bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800  py-3 px-7  hover:bg-brown-300 duration-200">
                americano
              </div>
              
              
            </div>
          </div>
        

        </div>
        
      ))}
    </div>
  );
};
