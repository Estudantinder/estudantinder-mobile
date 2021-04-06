import React, { createContext, useCallback, useMemo, useRef } from 'react'
import type { default as PagerView } from 'react-native-pager-view'

import useSafeContext from 'packages/hooks/useSafeContext'

import GetOnBoardingViewedUseCase from './use-cases/get-viewed'
import SetOnboardingAsViewedUseCase from './use-cases/set-as-viewed'

interface State {
  pagerRef: React.RefObject<PagerView>
}

interface Actions {
  navigateToIndex(index: number): void
  endOnBoarding(): Promise<void>
  getOnBoardingHasViewed(): Promise<boolean>
}

export type OnBoardingContext = State & Actions

const Context = createContext<OnBoardingContext | null>(null)

export function useOnBoardingContext(): OnBoardingContext {
  return useSafeContext(Context) as OnBoardingContext
}

export const OnBoardingContextProvider: React.FC = ({ children }) => {
  const pagerRef = useRef<PagerView>(null)

  const getOnBoardingHasViewed = useCallback(
    async () => await GetOnBoardingViewedUseCase(),
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
