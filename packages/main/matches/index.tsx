import React, { useCallback, useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'

import Scroll from 'packages/components/Scroll'
import Match from 'packages/entities/Match'
import { PageContainer, Title } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'

import DeleteMatchUseCase from '../use-cases/delete-match'
import GetMatchesUseCase from '../use-cases/get-matches'
import MatchCard from './components/MatchCard'
import MatchesLoadingPage from './pages/LoadingPage'
import MatchesNoMatchesPage from './pages/NoMatchesPage'

const Matches: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [matches, setMatches] = useState<Match[]>([])

  const loadMatches = async () => {
    const data = await GetMatchesUseCase()

    setMatches(data)
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    loadMatches().then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    loadMatches()

    setIsLoading(false)
  }, [])

  const handleDeleteMatch = async (id: string) => {
    try {
      await DeleteMatchUseCase(id)

      const newMatches = matches?.filter((value) => value.match_id !== id)

      setMatches([...newMatches])
    } catch (error) {
      alertModal(error)
    }
  }

  if (isLoading) return <MatchesLoadingPage />

  if (!matches || !matches.length) {
    return (
      <MatchesNoMatchesPage refreshing={refreshing} onRefresh={onRefresh} />
    )
  }

  return (
    <PageContainer>
      <Title>Matches</Title>

      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {matches.map((value) => (
          <MatchCard
            key={value.id}
            match={value}
            handleDeleteMatch={() => handleDeleteMatch(value.match_id)}
          />
        ))}
      </Scroll>
    </PageContainer>
  )
}

export default Matches
