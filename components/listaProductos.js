import { formatoMoneda } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import React from "react";

const ListaProductos = ({ producto }) => {
    const { openModal, setproducto } = useQuiosco()
  const { categoriaId, id, imagen, nombre, precio } = producto;
  return (
    <div className="border rounded-md">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`${nombre}`}
        width={250}
        height={50}
        className="rounded-t-md w-full"
      />
      <div className="px-3 mt-2">
        <p className="titulo text-xl font-bold h-14">{nombre}</p>
        <p className="text-4xl font-bold text-amber-400 ">{formatoMoneda(precio)}</p>
        <button className="bg-sky-600 w-full py-2 rounded-md my-5 text-white font-bold hover:bg-sky-700"
            onClick={()=>setproducto(producto)}
        >
            Agregar
        </button>
      </div>
    </div>
  );
};

export default ListaProductos;
