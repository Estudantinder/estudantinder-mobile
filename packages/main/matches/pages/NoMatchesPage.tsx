import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useMainContext } from 'packages/main/context'
import Main404Page from 'packages/main/pages/404'
import { MAIN_ROUTES } from 'packages/router/constants'
import { MainTabsNavigationPageParams } from 'packages/router/tabs/main'

type PageProps = BottomTabScreenProps<
  MainTabsNavigationPageParams,
  typeof MAIN_ROUTES.HOME
>

type Navigation = PageProps['navigation']

const MatchesNoMatchesPage: React.FC = () => {
  const { getMatches } = useMainContext()

  const router = useNavigation<Navigation>()

  const navigateToHome = () => router.navigate(MAIN_ROUTES.HOME)

  return (
    <Main404Page
      reloadFunction={getMatches}
      button={{ onPressed: navigateToHome, title: 'ACESSAR HOME' }}
      message={{
        title: 'Não há matches por enquanto!',
        subtitle:
          'Acesse a Home para dar mais curtidas e fazer cada vez mais conexões.',
      }}
    />
  )
}

export default MatchesNoMatchesPage
