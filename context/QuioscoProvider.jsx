import axios from "axios"
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react"
import { ToastContainer, toast } from 'react-toastify';

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) =>{
    //const LS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('pedido')): null 

    const router = useRouter()
    const [categorias, setcategorias] = useState([])
    const [categoriaActual, setcategoriaActual] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);
    const [producto, setproducto] = useState({})
    const [pedido, setpedido] = useState([])

 

    useEffect(() => {
    const obtenerCategorias = async () =>{
      const categorias = await axios('/api/categorias')
      setcategorias(categorias.data)
    }
    obtenerCategorias()
  }, [])

    useEffect(() => {
      if (categorias.length>0) {
        setTimeout(() => {
          setcategoriaActual(categorias[0])
        }, 2000);
      }
    }, [categorias])
    
    useEffect(() => {
      if (Object.entries(producto).length !== 0) {
        openModal()
      }
    }, [producto])
    
    

    function closeModal() {
      setproducto({})
      setIsOpen(false);
    }
 
    function openModal() {
      setIsOpen(true);
    }

    /*useEffect(() => {
     localStorage.setItem('pedido', JSON.stringify(pedido))
    }, [pedido])
    */

    const agregarPedido = (pedidoCliente) =>{
      if (pedido.length===0) {
        toast.success('Agregado al pedido')
        setpedido([...pedido, pedidoCliente])
        return setproducto({})
      }

      if (pedido.length>0 && pedido.some(producto => producto.id === pedidoCliente.id)) {
        const nuevoPedido = pedido.map(producto => producto.id === pedidoCliente.id ? pedidoCliente : producto) 
        toast.success('Guardado correctamente')
        setpedido(nuevoPedido)
        return setproducto({})
      }else{
        toast.success('Agregado al pedido')
        setpedido([...pedido, pedidoCliente])
        setproducto({})
      }

    }

    const editarPedido = (productoeditar) =>{
      setproducto(productoeditar)
    }

    const eliminarPedido = (id) =>{
      const nuevoPedido = pedido.filter(producto => producto.id !== id)
      toast.error('Producto Eliminado')
      setpedido(nuevoPedido)
    }

    const agregarOrden = async (orden) =>{
      try {
        await axios.post('/api/ordenes',orden)
        setcategoriaActual(categorias[0])
        setproducto({})
        setpedido([])
        toast.success('pedido Agregado Exitosamente')
        setTimeout(() => {
          router.push('/')
        }, 3000);
      } catch (error) {
        console.log(error)    
      }

    }

    const completarOrden = async(orden) =>{
      console.log('completando Orden ...')
      console.log(orden)
      try {
        const {data}= await axios.put('/api/ordenes', {
          data: orden
        })
        toast.success('Orden Lista')
      } catch (error) {
        console.log(error)
        toast.error('Hubo un error')
      }

    }

    return(
        <QuioscoContext.Provider
            value={{
              categorias,
              categoriaActual,
              setcategoriaActual,
              producto,
              setproducto,
              modalIsOpen,
              setIsOpen,
              openModal,
              closeModal,
              pedido,
              agregarPedido,
              editarPedido,
              eliminarPedido,
              agregarOrden,
              completarOrden
            }}
            
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {QuioscoProvider}
export default QuioscoContext