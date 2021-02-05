import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl } from 'react-native'

import Match from 'main/entities/Match'
import getMatches from 'main/use-cases/get-matches'

import Scroll from 'views/components/atoms/Scroll'
import MatchCard from 'views/components/organisms/MatchCard'
import { Container, Title } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'

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
              <MatchCard key={value.id} match={value} />
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
