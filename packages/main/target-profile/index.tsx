import { Route, useRoute } from '@react-navigation/native'
import React, { useCallback, useRef, useState } from 'react'

import { Feather } from '@expo/vector-icons'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import Student from 'packages/entities/Student'
import ShowStudent from 'packages/show-student-info'
import { useToggleThemeContext } from 'packages/styles/context'

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

  const handleNavigateToAnotherSheet = (
    sheet: TargetProfileSheets,
    data?: never
  ) => {
    setComponent(
      targetProfileSheets[sheet].component({
        navigateTo: handleNavigateToAnotherSheet,
        data: data,
      })
    )
    setBottomSheetSize(targetProfileSheets[sheet].size)
  }

  const [component, setComponent] = useState(() => {
    return targetProfileSheets[TargetProfileSheets.startMenu].component({
      navigateTo: handleNavigateToAnotherSheet,
      data: undefined,
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
