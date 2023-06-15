import { formatoMoneda } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import React from "react";

const Orden = ({ orden }) => {
  const {completarOrden} = useQuiosco()
  return (
    <div className="flex flex-col gap-2 border px-8 py-4 rounded-md shadow">
      <p className="text-xl font-bold">
        Orden: #<label>{orden.id}</label>
      </p>
      <p className="text-xl font-bold">
        Cliente: <label className="text-amber-500">{orden.nombre}</label>
      </p>
      <div className="flex flex-col gap-4">
        {orden.pedido.map((pedidoState) => (
          <div key={pedidoState.id} className="md:flex gap-4">
            <Image
              src={`/assets/img/${pedidoState.imagen}.jpg`}
              width={170}
              height={100}
              alt={pedidoState.imagen}
              className="rounded-lg max-sm:w-full"
            />
            <div className="flex flex-col justify-center max-sm:text-center">
              <p className="text-xl font-bold ">{pedidoState.nombre}</p>
              <p className="text-xl font-bold ">
                Cantidad: {pedidoState.cantidad}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <p className="text-2xl font-bold text-amber-500">
            Total a Pagar:{formatoMoneda(orden.total)}
          </p>
          <button className="text-white py-2 px-4 bg-sky-500 hover:bg-sky-600 rounded-lg font-bold w-1/3
          ring ring-sky-500 ring-offset-2" onClick={()=>completarOrden(orden)}>
            Completar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orden;
