import { PrismaClient, Prisma } from '@prisma/client'
export default async function ordenes (req, res) {
    const prisma = new PrismaClient()
    

    const ordenes =  await prisma.orden.findMany({
      where: {estado:false}
    })
    res.status(200).json(ordenes)


    if (req.method === 'POST') {
      const orden = await prisma.orden.create({
        data: {
          nombre:req.body.nombre,
          fecha:req.body.fecha,
          total:req.body.total,
          pedido:req.body.pedido
        },
      })

      res.status(200).json(orden)
    }
   
    if (req.method==='PUT') {
      
      const ordenActualizada = await prisma.orden.update({
        where: {
          id: req.body.data.id,
        },
        data: {
          estado: true,
        },
      })
      
      res.status(200).json(ordenActualizada)
    
    }


}
