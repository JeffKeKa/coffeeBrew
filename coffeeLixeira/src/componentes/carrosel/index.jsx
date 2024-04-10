
import prop from "../../assets/prop.jpg"
import bolored from "../../assets/bolored.jpg"


import { Carousel } from "@material-tailwind/react";
export const Carrosel = () => {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl  h-96" >
      
      <img
        src={prop}
        alt="image 1"
        className="h-full w-full object-cover w-full h-96 bg-cover float-left "
      />
    
      <img
        src={bolored}
        alt="image 3"
        className="h-full w-full object-cover w-full h-96 bg-cover float-left"
      />
    </Carousel>
  );
};
