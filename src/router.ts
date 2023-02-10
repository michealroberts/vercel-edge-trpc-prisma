import { initTRPC } from '@trpc/server'

import { prisma } from './prisma'

export const createContext = () => {
  return {
    prisma
  }
}

const t = initTRPC.context<typeof createContext>().create()

const publicProcedure = t.procedure

const router = t.router

export const appRouter = router({
  telescopesAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.telescope.findMany()
  })
})

export type AppRouter = typeof appRouter
