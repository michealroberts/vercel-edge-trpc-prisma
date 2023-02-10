import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { prisma } from './prisma'

import { appRouter } from './router'

export const config = {
  runtime: 'experimental-edge'
}

addEventListener('fetch', (event) => {
  return event.respondWith(
    fetchRequestHandler({
      endpoint: '/api/v1',
      req: event.request,
      router: appRouter,
      createContext: () => ({
        prisma
      })
    })
  )
})
