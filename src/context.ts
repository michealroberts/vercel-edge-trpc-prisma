import { initPrismaClient} from './prisma'

export const createContext = (DATABASE_URL: string) => {
  return {
    prisma: initPrismaClient(DATABASE_URL)
  }
}