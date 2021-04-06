import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useMainContext } from 'packages/main/context'
import Main404Page from 'packages/main/pages/404'
import { MAIN_ROUTES } from 'packages/router/constants'

const MatchesNoMatchesPage: React.FC = () => {
  const { getMatches } = useMainContext()

  const router = useNavigation()

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
