
import { PrismaClient, Prisma } from '@prisma/client'
export default async function categorias (req, res) {
    const prisma = new PrismaClient()
    const productos = await prisma.producto.findMany()
    res.status(200).json(productos)
}
