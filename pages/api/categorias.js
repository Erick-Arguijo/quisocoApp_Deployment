// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, Prisma } from '@prisma/client'
export default async function categorias (req, res) {
    const prisma = new PrismaClient()
    const categorias = await prisma.categoria.findMany({
        include:{
            productos: true
        }
    })
    res.status(200).json(categorias)
}
