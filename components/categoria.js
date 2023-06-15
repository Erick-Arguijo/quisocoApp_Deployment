import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Categoria = ({ categoria}) => {
  const {categoriaActual, setcategoriaActual} = useQuiosco()
  const router = useRouter()
  
  return (
    <div>
      <button type="submit"
        className={`flex gap-4 w-full flex-wrap content-center h-20 px-10 border-2 hover:bg-amber-400
            ${categoria.nombre === categoriaActual?.nombre ? 'bg-amber-400':'bg-white'}`}
        onClick={()=>{setcategoriaActual(categoria), router.push('/') }}
      >
        <Image
          src={`/assets/img/icono_${categoria.icono}.svg`}
          alt={"icono_cafe"}
          width={70}
          height={70}
          className="h-full"
        />
        <p className="flex items-center h-full text-xl font-bold">{categoria.nombre}</p>
      </button>
    </div>
  );
};

export default Categoria;
