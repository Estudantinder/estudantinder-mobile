/* eslint-disable react/display-name */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import { View } from 'react-native'

import Student from 'packages/entities/Student'

import StudentCard from './StudentCard'

export interface HomeStudentsStackRef {
  swipeLeft(): void
  swipeRight(): void
}

export interface HomeStudentsStackComponentProps {
  students: Student[]
}

const HomeStudentsStackComponent: ForwardRefRenderFunction<
  HomeStudentsStackRef,
  HomeStudentsStackComponentProps
> = (props, ref) => {
  //  const handleNavigateToTargetProfile = () => {
  //   router.navigate(AUTHENTICATED_ROUTES.TARGET_PROFILE, {
  //     student: {
  //       ...context.students[0],
  //       birth_date: context.students[0].birth_date.getTime(),
  //     },
  //   })
  // }

  useImperativeHandle(
    ref,
    () => ({
      swipeLeft() {
        // DO LEFT
      },
      swipeRight() {
        // DO RIGHT
      },
    }),
    []
  )

  return (
    <View>
      {props.students[0] && <StudentCard student={props.students[0]} />}
    </View>
  )
}

export default forwardRef(HomeStudentsStackComponent)
