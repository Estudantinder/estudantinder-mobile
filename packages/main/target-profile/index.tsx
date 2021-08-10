import { Route, useNavigation, useRoute } from '@react-navigation/native'
import React, { useCallback, useRef, useState } from 'react'

import { Feather } from '@expo/vector-icons'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import Student from 'packages/entities/Student'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import ShowStudent from 'packages/show-student-info'
import { useToggleThemeContext } from 'packages/styles/context'

import { useMainContext } from '../context'
import { TargetProfileSheets } from './types'
import { targetProfileSheets } from './utils'

import {
  TargetProfileMoreButton,
  TargetProfileSettingsContainer,
  TargetProfileSheetContainer,
} from './styles'

export interface TargetProfileRouteProps {
  student: Modify<Student, { birth_date: number }>
}

const TargetProfile = () => {
  const router = useNavigation()

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

          router.goBack()
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

        router.goBack()
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
