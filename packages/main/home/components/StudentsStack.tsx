/* eslint-disable react/display-name */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Animated, Dimensions, Easing } from 'react-native'

import Student from 'packages/entities/Student'

import { StudentStackContainer } from './home-components.styles'
import StudentCard from './StudentCard'

export interface HomeStudentsStackRef {
  swipeLeft(): void
  swipeRight(): void
}

export interface HomeStudentsStackComponentProps {
  students: Student[]
}

const CARD_INITIAL_POSITION = 12

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

  const [indexes, setIndexes] = useState([0, 1])

  const cardX = useRef(new Animated.Value(12)).current
  const cardBack = useRef(new Animated.Value(20)).current

  const swipeAnimation = useCallback(
    (toValue: number) =>
      Animated.timing(cardX, {
        toValue,
        duration: 800,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }),
    [cardX]
  )

  const onSwipeAnimationEnd = useMemo(() => {
    return () => {
      cardX.setValue(CARD_INITIAL_POSITION)
      cardBack.setValue(20)

      return setIndexes([indexes[0] + 1, indexes[1] + 1])
    }
  }, [cardBack, cardX, indexes])

  const backAnimation = useCallback(
    () =>
      setTimeout(() => {
        Animated.timing(cardBack, {
          toValue: 0,
          duration: 360,
          useNativeDriver: false,
        }).start()
      }, 120),
    [cardBack]
  )

  const SWIPE_LEFT_DIMENSION = -Dimensions.get('screen').width * 1.5
  const SWIPE_RIGHT_DIMENSION = Dimensions.get('screen').width * 1.5

  useImperativeHandle(
    ref,
    () => ({
      swipeLeft() {
        swipeAnimation(SWIPE_LEFT_DIMENSION).start(onSwipeAnimationEnd)

        backAnimation()
      },
      swipeRight() {
        swipeAnimation(SWIPE_RIGHT_DIMENSION).start(onSwipeAnimationEnd)

        backAnimation()
      },
    }),
    [
      SWIPE_LEFT_DIMENSION,
      SWIPE_RIGHT_DIMENSION,
      backAnimation,
      onSwipeAnimationEnd,
      swipeAnimation,
    ]
  )

  return (
    <StudentStackContainer style={{ paddingHorizontal: CARD_INITIAL_POSITION }}>
      {props.students[indexes[0]] && (
        <StudentCard
          style={{
            zIndex: 1,
            transform: [
              {
                rotate: cardX.interpolate({
                  inputRange: [SWIPE_LEFT_DIMENSION, CARD_INITIAL_POSITION],
                  outputRange: ['-32deg', '0deg'],
                }),
              },
            ],
            left: cardX,
          }}
          student={props.students[indexes[0]]}
        />
      )}
      {props.students[indexes[1]] && (
        <StudentCard
          style={{
            zIndex: 0,
            paddingVertical: cardBack,
            left: CARD_INITIAL_POSITION,
          }}
          student={props.students[indexes[1]]}
        />
      )}
    </StudentStackContainer>
  )
}

export default forwardRef(HomeStudentsStackComponent)
