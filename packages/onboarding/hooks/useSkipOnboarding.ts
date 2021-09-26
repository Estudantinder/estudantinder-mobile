import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { AuthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/authenticated'

import { useOnBoardingContext } from '../context'

type PageProps = NativeStackScreenProps<
  AuthenticatedNavigationPagesParamsProps,
  typeof AUTHENTICATED_ROUTES.ONBOARDING
>

type Navigation = PageProps['navigation']
type Route = PageProps['route']

export default function useSkipOnboarding(): () => Promise<void> {
  const router = useNavigation<Navigation>()

  const { endOnBoarding, navigateToIndex } = useOnBoardingContext()

  const { params } = useRoute<Route>()

  return async () => {
    await endOnBoarding()

    if (router.canGoBack()) {
      router.goBack()
    } else {
      router.replace(
        params?.endRoute as keyof AuthenticatedNavigationPagesParamsProps
      )
    }

    navigateToIndex(0)
  }
}
