import { useNavigation, useRoute } from '@react-navigation/native'

import { useOnBoardingContext } from '../context'

export default function useSkipOnboarding(): () => Promise<void> {
  const router = useNavigation()

  const { endOnBoarding } = useOnBoardingContext()

  const { params } = useRoute() as any

  return async () => {
    await endOnBoarding()

    router.navigate(params?.endRoute)
  }
}
