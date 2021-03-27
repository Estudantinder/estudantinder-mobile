import React, { useMemo } from 'react'

import {
  OnBoardingPaginationContainer,
  OnBoardingPaginationDot,
} from '../onboarding.styles'

export interface OnBoardingPaginationProps {
  activeIndex: number
  length: number
}

const OnBoardingPagination: React.FC<OnBoardingPaginationProps> = (props) => {
  const children = useMemo(() => {
    const dots = []
    let dotIndex = 0

    while (dots.length < props.length) {
      dots.push(
        <OnBoardingPaginationDot
          active={dotIndex === props.activeIndex}
          key={dotIndex}
        />
      )
      dotIndex += 1
    }

    return dots
  }, [props.activeIndex, props.length])

  return (
    <OnBoardingPaginationContainer>{children}</OnBoardingPaginationContainer>
  )
}

export default OnBoardingPagination
