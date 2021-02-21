import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, RefreshControl } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import Scroll from 'packages/components/Scroll'
import {
  NotFoundContainer,
  NotFoundSubTitle,
  NotFoundTitle,
} from 'packages/main/main.styles'
import { MAIN_ROUTES } from 'packages/router/constants'
import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

import NoStudents from '../../assets/not_found.png'

export interface MatchesNoMatchesPageProps {
  onRefresh(): void
  refreshing: boolean
}

const MatchesNoMatchesPage: React.FC<MatchesNoMatchesPageProps> = (props) => {
  const router = useNavigation()

  const navigateToHome = () => router.navigate(MAIN_ROUTES.HOME)

  return (
    <PageContainer>
      <Scroll
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
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
