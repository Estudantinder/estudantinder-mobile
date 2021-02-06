import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl } from 'react-native'

import Match from 'main/entities/Match'
import deleteMatch from 'main/use-cases/delete-match'
import getMatches from 'main/use-cases/get-matches'

import Scroll from 'views/components/atoms/Scroll'
import MatchCard from 'views/components/organisms/MatchCard'
import { Container, Title } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

const Matches: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false)

  const [matches, setMatches] = useState<Match[]>()

  const loadMatches = async () => {
    const data = await getMatches()

    setMatches(data)
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    loadMatches().then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    loadMatches()
  }, [])

  const handleDeleteMatch = async (id: string) => {
    try {
      await deleteMatch(id)

      const newMatches = matches?.filter((value) => value.match_id !== id)

      if (!newMatches?.length) return setMatches(undefined)

      setMatches([...newMatches])
    } catch (error) {
      triggerCorrectAlert(error)
    }
  }

  return (
    <Container>
      <Title>Matches</Title>

      {matches ? (
        matches.length ? (
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
        ) : (
          <Title>Sem matches!!! </Title>
        )
      ) : (
        <ActivityIndicator color={theme.colors.primary.purple} size={32} />
      )}
    </Container>
  )
}

export default Matches
