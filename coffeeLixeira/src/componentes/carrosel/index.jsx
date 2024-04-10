
import { useState, useEffect } from "react";
// import bolored from "../../assets/bolored.jpg"
import axios from "axios"

import { Carousel } from "@material-tailwind/react";
export const Carrosel = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await axios.get("http://localhost:8010/coffebrew/produto/lista");
        setProdutos(response.data);
       // console.log(response)
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    fetchData();
  }, []);

  return (
    // <Carousel transition={{ duration: 1 }} className="rounded-xl  h-96" >
    <Carousel transition={{ duration: 1 }}  >
      {produtos.map((produto) => (
        <div key={produto.idProduto}>
          <h1>{produto.nome}</h1>
      <img
        src={`a${produto.idProduto}.jpg`}
        alt="image"
        className="h-full w-full object-cover w-full h-96 bg-cover float-left "
      />
      {/* <img
        src={bolored}
        alt="image 3"
        className="h-full w-full object-cover w-full h-96 bg-cover float-left"
      /> */}
      </div>
      ))}
    </Carousel>
  );
};
