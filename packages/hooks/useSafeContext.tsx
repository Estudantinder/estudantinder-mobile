import { useContext } from 'react'

import env from 'env'

export default function useSafeContext<T>(Context: React.Context<T>): T {
  const value = useContext<T>(Context)

  if (!env().null_context && value === null) {
    throw new Error('CONTEXT NOT PROVIDED')
  }

  return value || ({} as T)
}
