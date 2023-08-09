import { PrismaClient } from '@prisma/client'

// Add prima variable to global window object
declare global {
  var prisma: PrismaClient | undefined
}

// Prevent multiple instances of Prisma Client in development
// Next JS has a hot reloading feature that can cause multiple instances of Prisma Client to be loaded
const prismadb = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb

export default prismadb
