import React, { createContext, useCallback, useMemo, useState } from 'react'

import Match from 'packages/entities/Match'
import User from 'packages/entities/User'
import useSafeContext from 'packages/hooks/useSafeContext'

import { MainHomeContextProvider } from './context/home'
import DeleteMatchUseCase from './use-cases/delete-match'
import GetMatchesUseCase from './use-cases/get-matches'
import GetUserProfileUseCase from './use-cases/get-user-profile'
import ReportUserUseCase, {
  ReportUserUseCaseProps,
} from './use-cases/report-user'

interface State {
  matches: Match[]
  profile: User | null
}

interface Actions {
  getMatches(): Promise<void>
  deleteMatch(id: string): Promise<void>

  getProfile(): Promise<void>
  setProfile(user: User): void

  reportUser(props: ReportUserUseCaseProps): Promise<void>
}

export type MainContext = State & Actions

const Context = createContext<MainContext | null>(null)

export function useMainContext(): MainContext {
  return useSafeContext(Context) as MainContext
}

export const MainContextProvider: React.FC = ({ children }) => {
  const [matches, setMatches] = useState<Match[]>([])
  const [profile, setProfile] = useState<User | null>(null)

  const getMatches = useCallback(async () => {
    const newMatches = await GetMatchesUseCase()

    setMatches(newMatches)
  }, [])

  const deleteMatch = useCallback(
    async (id: string) => {
      await DeleteMatchUseCase(id)

      const newMatches = matches.filter((value) => value.match_id !== id)

      setMatches([...newMatches])
    },
    [matches]
  )

  const getProfile = useCallback(async () => {
    const newProfile = await GetUserProfileUseCase()

    setProfile(newProfile)
  }, [])

  const reportUser = useCallback(async (props: ReportUserUseCaseProps) => {
    await ReportUserUseCase(props)
  }, [])

  const value = useMemo<MainContext>(() => {
    return {
      getMatches,
      deleteMatch,
      getProfile,
      matches,
      profile,
      setProfile,
      reportUser,
    }
  }, [getMatches, deleteMatch, getProfile, matches, profile, reportUser])

  return (
    <MainHomeContextProvider>
      <Context.Provider value={value}>{children}</Context.Provider>
    </MainHomeContextProvider>
  )
}
