import { prisma } from './prisma'

export const createContext = () => {
  return {
    prisma
  }
}