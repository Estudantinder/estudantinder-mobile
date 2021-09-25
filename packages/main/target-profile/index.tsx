import { Route, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useRef, useState } from 'react'

import { Feather } from '@expo/vector-icons'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import Student from 'packages/entities/Student'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { AuthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/authenticated'
import ShowStudent from 'packages/show-student-info'
import { useToggleThemeContext } from 'packages/styles/context'

import { useMainContext } from '../context'
import TargetProfileCustomBackdrop from './components/CustomBackdrop'
import TargetProfileCustomBackground from './components/CustomBackground'
import { TargetProfileSheets } from './types'
import { targetProfileSheets } from './utils'

import {
  TargetProfileMoreButton,
  TargetProfileSettingsContainer,
  TargetProfileSheetContainer,
} from './styles'

type PageProps = NativeStackScreenProps<
  AuthenticatedNavigationPagesParamsProps,
  typeof AUTHENTICATED_ROUTES.TARGET_PROFILE
>

type Navigation = PageProps['navigation']

export interface TargetProfileRouteProps {
  student: Modify<Student, { birth_date: number }>
}

const TargetProfile = () => {
  const router = useNavigation<Navigation>()

  const {
    params: { student },
  } = useRoute<Route<'TargetProfile', TargetProfileRouteProps>>()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const [bottomSheetSize, setBottomSheetSize] = useState(
    targetProfileSheets[TargetProfileSheets.startMenu].size
  )

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const { theme } = useToggleThemeContext()

  const { reportUser: reportUserUseCase } = useMainContext()

  const handleNavigateToAnotherSheet = (
    sheet: TargetProfileSheets,
    data?: never
  ) => {
    setComponent(
      targetProfileSheets[sheet].component({
        navigateTo: handleNavigateToAnotherSheet,
        data: data,
        navigateToCustomPage() {
          router.navigate(AUTHENTICATED_ROUTES.CUSTOM_REPORT, {
            studentId: student.id,
          })
        },
        async reportUser(props) {
          await reportUserUseCase({ id: student.id, ...props })

          router.navigate(AUTHENTICATED_ROUTES.REPORT_SUCCESS)
        },
      })
    )
    setBottomSheetSize(targetProfileSheets[sheet].size)
  }

  const [component, setComponent] = useState(() => {
    return targetProfileSheets[TargetProfileSheets.startMenu].component({
      navigateTo: handleNavigateToAnotherSheet,
      data: undefined,

      navigateToCustomPage() {
        router.navigate(AUTHENTICATED_ROUTES.CUSTOM_REPORT, {
          studentId: student.id,
        })
      },
      async reportUser(props) {
        await reportUserUseCase({ id: student.id, ...props })

        router.navigate(AUTHENTICATED_ROUTES.REPORT_SUCCESS)
      },
    })
  })

  return (
    <BottomSheetModalProvider>
      <StackPageTemplate title="Ver Perfil" withoutPadding>
        <TargetProfileSettingsContainer>
          <TargetProfileMoreButton onPress={handlePresentModalPress}>
            <Feather
              name="more-vertical"
              color={theme.icon.default}
              size={22}
            />
          </TargetProfileMoreButton>
        </TargetProfileSettingsContainer>

        <ShowStudent
          student={{ ...student, birth_date: new Date(student.birth_date) }}
        />
      </StackPageTemplate>

      <BottomSheetModal
        backgroundComponent={TargetProfileCustomBackground}
        backdropComponent={TargetProfileCustomBackdrop}
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={[bottomSheetSize]}
        onDismiss={() => {
          handleNavigateToAnotherSheet(TargetProfileSheets.startMenu)
        }}
      >
        <TargetProfileSheetContainer>{component}</TargetProfileSheetContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default TargetProfile
