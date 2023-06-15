import Layout from "@/components/layout";
import ProductoResumen from "@/components/productoResumen";
import useQuiosco from "@/hooks/useQuiosco";
import React from "react";

const Resumen = () => {
  const { pedido } = useQuiosco();
 
  return (
    <Layout>
      <div className="mt-2"> 
        <h1 className="text-4xl font-black">Resumen</h1>
        { pedido ? (
          <>
            <p className="text-2xl my-10">
              Elige y personaliza tu pedido continuación
            </p>
            <div className="flex flex-col gap-6">
                {pedido.map( producto => <ProductoResumen key={producto.id} producto={producto} />)}
            </div>
          </>
        ) : (
          <>
            <p className="text-2xl my-10">
              No hay productos en tu pedido
            </p>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Resumen;
