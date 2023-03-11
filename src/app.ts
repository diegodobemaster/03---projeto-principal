import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Diego Domiciano',
    email: 'diego@email.com',
  },
})

// import { prisma } from './lib/prisma'
// import fastify from 'fastify'
// import { z } from 'zod'

// export const app = fastify()

// app.post('/users', async (resquest, reply) => {
//   const registerBodySchema = z.object({
//     name: z.string(),
//     email: z.string().email(),
//     password: z.string().min(6),
//   })

//   const { name, email, password } = registerBodySchema.parse(resquest.body)

//   await prisma.user.create({
//     data: {
//       name,
//       email,
//       password_hash: password,
//     },
//   })
//   return reply.status(201).send()
// })
