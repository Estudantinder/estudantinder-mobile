import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react'
import type { default as PagerView } from 'react-native-pager-view'

import env from 'env'

import GetOnBoardingViewed from './use-cases/get-viewed'
import SetOnboardingAsViewedUseCase from './use-cases/set-as-viewed'

interface State {
  pagerRef: React.RefObject<PagerView>
}

interface Actions {
  navigateToIndex(index: number): void
  endOnBoarding(): void
  getOnBoardingHasViewed(): Promise<boolean>
}

export type OnBoardingContext = State & Actions

const Context = createContext<OnBoardingContext | null>(null)

export function useOnBoardingContext(): OnBoardingContext {
  const value = useContext(Context)

  if (!env().null_context && value === null) {
    throw new Error('CONTEXT NOT PROVIDED')
  }

  return value || ({} as OnBoardingContext)
}

export const OnBoardingContextProvider: React.FC = ({ children }) => {
  const pagerRef = useRef<PagerView>(null)

  const getOnBoardingHasViewed = useCallback(
    async () => await GetOnBoardingViewed(),
    []
  )

  const navigateToIndex = useCallback((index: number) => {
    pagerRef.current?.setPage(index)
  }, [])

  const endOnBoarding = useCallback(async () => {
    await SetOnboardingAsViewedUseCase()
  }, [])

  const value = useMemo<OnBoardingContext>(
    () => ({
      pagerRef,
      navigateToIndex,
      endOnBoarding,
      getOnBoardingHasViewed,
    }),
    [endOnBoarding, getOnBoardingHasViewed, navigateToIndex]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
