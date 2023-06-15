import Layout from "@/components/layout";
import { formatoMoneda, total } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import React, { useEffect, useState } from "react";

const Pedido = () => {
  const { pedido, agregarOrden } = useQuiosco();
  const [nombre, setnombre] = useState("");
  const [validacion, setvalidacion] = useState(false)
  

useEffect(() => {
  if (pedido.length>0 && nombre.length>3) {
    setvalidacion(false)
  }else{
    setvalidacion(true)
  }
}, [pedido, nombre])




  const handleSubmit = (e) =>{
    e.preventDefault();
    agregarOrden({nombre, fecha:Date.now().toString() , total:total(pedido), pedido})
  }

  return (
    <Layout pagina={"Pedido"}>
      <div className="flex flex-col gap-4 mt-2">
        <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className="text-xl">Confirma tu Pedido a Continuación</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-xl font-bold" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="w-2/4 bg-slate-300 py-2 px-4 rounded-md outline-0"
            placeholder="Ingrese su nombre para proseguir con el pedido"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
          <p className="text-xl my-2">Total a Pagar: 
            <label className="font-bold ml-1">{formatoMoneda(total(pedido))}</label>
          </p>
          <input
            className={`font-bold bg-sky-500 rounded-lg py-2 text-white pointer w-2/4 ring-1 ring-sky-500 
              ring-offset-4 ring-offset-slate-50 hover:bg-sky-600 mt-2 ${validacion ?'cursor-not-allowed':'cursor-pointer' }`}
            type="submit"
            disabled={validacion}
            value=' Confirmar Pedido'
          />
          
        </form>
      </div>
    </Layout>
  );
};

export default Pedido;
