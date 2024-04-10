import { MelhoresProdutos } from "../../utils/constants/melhoresprodutos";

export const Div = () => {
  return (
    <> 
      <div className=" ">
        <div className="flex flex itens-center justify-center w-full px-5 p-10 sm:flex-col md:flex-row gap-x-4">
          {MelhoresProdutos.map((produto) => (
            <div  key = {produto.id} className="w-full  bg-brown-700 border border-brown-900 rounded-lg shadow dark:bg-gray-800 dark:border-white   ">
              
              <div className="flex flex-col items-center pb-1 pr-3   hover:bg-brown-300 duration-200 ">
                <img
                  className="w-30 h-30 mb-3 rounded-full shadow-lg"
                  src={produto.image}
                />
                <h5 className="mb-1 text-xl text-white font-medium text-gray-900 dark:text-white ">
                  {produto.nome}
                </h5>
                <span className="text-sm text-white dark:text-gray-400">
                  {produto.preco}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
