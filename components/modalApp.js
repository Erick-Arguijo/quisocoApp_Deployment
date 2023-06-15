import { formatoMoneda } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");
const ModalApp = () => {
  const { modalIsOpen, closeModal, producto, agregarPedido, pedido } =
    useQuiosco();
  const [cantidad, setcantidad] = useState(1);
  const [editando, seteditando] = useState(false)
  const { categoriaId, id, imagen, precio, nombre } = producto;

  useEffect(() => {
    console.log(producto)
    seteditando(false)
    if (pedido.some(productoState=>productoState.id === producto.id)) {
      const productoActualizar = pedido.filter(productoState =>productoState.id === producto.id);
      seteditando(true)
      setcantidad(productoActualizar[0].cantidad);
    }
  }, [producto]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex gap-4">
          <Image
            src={`/assets/img/${producto?.imagen}.jpg`}
            alt={`${imagen}`}
            width={150}
            height={100}
          />
          <div className="flex flex-col gap-3">
            <button
              className="block ml-auto h-4 font-bold text-xl text-slate-500"
              onClick={() => (closeModal(), setcantidad(1))}
            >
              x
            </button>
            <h2 className="font-bold text-xl">{nombre}</h2>
            <p className="font-bold text-amber-400 text-4xl">
              {formatoMoneda(precio)}
            </p>
            <div className="flex gap-2">
              <button
                className="border-2 w-7 h-7 rounded-2xl font-bold border-slate-400"
                onClick={() => cantidad > 1 && setcantidad(cantidad - 1)}
              >
                -
              </button>
              <p>{cantidad}</p>
              <button
                className="border-2 w-7 h-7 rounded-2xl font-bold border-slate-400"
                onClick={() => setcantidad(cantidad + 1)}
              >
                +
              </button>
            </div>
            {editando ? (
              <button
                className="bg-sky-600 hover:bg-sky-700 py-2 rounded-lg text-white font-bold"
                onClick={() => {
                  agregarPedido({ id, nombre, imagen, precio, cantidad }),
                    closeModal()
                  }}
                  >
                Actualizar pedido
              </button>
            ) : (
              <button
              className="bg-sky-600 hover:bg-sky-700 py-2 rounded-lg text-white font-bold"
                onClick={() => {
                  agregarPedido({ id, nombre, imagen, precio, cantidad }),
                  closeModal()
                }}
                >
                Añadir al pedido
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalApp;
