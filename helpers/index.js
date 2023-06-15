
export const formatoMoneda = (valor) => {
    const moneda = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
// Expected output: "123.456,79 €"

    return moneda
}



export const total = (pedido) => {
    const PrecioTotal = pedido.reduce((acumulador, pedidoState) =>
	acumulador + (pedidoState.precio* pedidoState.cantidad) 
    , 0)
    return PrecioTotal
}
