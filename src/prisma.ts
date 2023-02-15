import { PrismaClient } from '@prisma/client/edge'

export const initPrismaClient = (url: string) => {
  return new PrismaClient({
    datasources: {
      db: {
        url
      }
    }
  })
}
