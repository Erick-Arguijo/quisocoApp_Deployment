import Layout from "@/components/layout";
import useQuiosco from "@/hooks/useQuiosco";
import ListaProductos from "@/components/listaProductos";


export default function Home() {
  const { categoriaActual } = useQuiosco();  

  return (
    <Layout pagina={`menú - ${categoriaActual?.nombre}`}>
      {Object.entries(categoriaActual).length === 0 ? (
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
          <p className="text-2xl my-10">
            Elige y personaliza tu pedido continuación
          </p>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {categoriaActual.productos.map((producto) => (
              <ListaProductos
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}
