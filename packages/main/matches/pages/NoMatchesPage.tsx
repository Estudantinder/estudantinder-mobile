import { useNavigation } from '@react-navigation/native'
import React, { useState, useCallback } from 'react'
import { Image, RefreshControl } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import Scroll from 'packages/components/Scroll'
import { useMainContext } from 'packages/main/context'
import {
  NotFoundContainer,
  NotFoundSubTitle,
  NotFoundTitle,
} from 'packages/main/main.styles'
import { MAIN_ROUTES } from 'packages/router/constants'
import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

import NoStudents from '../../assets/not_found.png'

const MatchesNoMatchesPage: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false)

  const { getMatches } = useMainContext()

  const router = useNavigation()

  const navigateToHome = () => router.navigate(MAIN_ROUTES.HOME)

  const onRefresh = useCallback(() => {
    let isRendered = true

    setRefreshing(true)

    getMatches().then(() => {
      if (isRendered) setRefreshing(false)
    })

    return () => (isRendered = false)
  }, [getMatches])

  return (
    <PageContainer>
      <Scroll
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary.purple, theme.colors.primary.green]}
            size={36}
          />
        }
      >
        <NotFoundContainer>
          <Image source={NoStudents} />

          <NotFoundTitle>Não há matches por enquanto!</NotFoundTitle>

          <NotFoundSubTitle>
            Acesse a Home para dar mais curtidas e fazer cada vez mais conexões.
          </NotFoundSubTitle>

          <PrimaryButton
            containerStyle={{ width: '50%', height: 36, marginTop: 8 }}
            onPress={navigateToHome}
          >
            ACESSAR HOME
          </PrimaryButton>
        </NotFoundContainer>
      </Scroll>
    </PageContainer>
  )
}

export default MatchesNoMatchesPage
