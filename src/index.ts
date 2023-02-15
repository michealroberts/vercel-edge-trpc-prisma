import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter } from './router'

import { createContext } from './context'

export const config = {
  runtime: 'experimental-edge'
}

addEventListener('fetch', (event) => {
  return event.respondWith(
    fetchRequestHandler({
      endpoint: '/api/v1',
      req: event.request,
      router: appRouter,
      createContext: () => {
        return createContext(process.env.DATABASE_URL || '')
      }
    })
  )
})
