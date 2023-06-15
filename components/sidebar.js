import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Categoria from "./categoria";

const Sidebard = () => {
  const { categorias } = useQuiosco();
  
  return (
    <>
      <Image
        className="mx-auto mt-2"
        src="assets/img/logo.svg"
        alt={"logo"}
        width={200}
        height={100}
      />
      <nav className="mt-5">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebard;
