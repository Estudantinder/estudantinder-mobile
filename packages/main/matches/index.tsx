import React, { useCallback, useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'

import Scroll from 'packages/components/Scroll'
import { PageContainer, Title } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'

import { useMainContext } from '../context'
import MatchCard from './components/MatchCard'
import MatchesLoadingPage from './pages/LoadingPage'
import MatchesNoMatchesPage from './pages/NoMatchesPage'

const Matches: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { getMatches, deleteMatch, matches } = useMainContext()

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    getMatches().then(() => setRefreshing(false))
  }, [getMatches])

  useEffect(() => {
    getMatches()

    setIsLoading(false)
  }, [getMatches])

  const handleDeleteMatch = async (id: string) => {
    try {
      await deleteMatch(id)
    } catch (error) {
      alertModal(error)
    }
  }

  if (isLoading) return <MatchesLoadingPage />

  if (!matches.length) {
    return <MatchesNoMatchesPage />
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
