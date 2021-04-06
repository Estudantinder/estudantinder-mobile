import React, { useCallback, useState } from 'react'
import { Image, RefreshControl } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import Scroll from 'packages/components/Scroll'
import { PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'

import {
  NotFoundContainer,
  NotFoundSubTitle,
  NotFoundTitle,
} from '../main.styles'

import NoStudents from '../assets/not_found.png'

export interface Main404PageProps {
  reloadFunction(): Promise<unknown>
  topBar?: JSX.Element
  button: { onPressed(): void; title: string }
  message: { title: string; subtitle: string }
}

const Main404Page: React.FC<Main404PageProps> = (props) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    let isRendered = true

    setRefreshing(true)

    props.reloadFunction().then(() => {
      if (isRendered) setRefreshing(false)
    })

    return () => (isRendered = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.reloadFunction])

  return (
    <PageContainer withoutPadding style={{ paddingTop: 0 }}>
      <Scroll
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary.purple, theme.colors.primary.green]}
            size={36}
          />
        }
      >
        {props.topBar}

        <NotFoundContainer>
          <Image source={NoStudents} />

          <NotFoundTitle>{props.message.title}</NotFoundTitle>
          <NotFoundSubTitle>{props.message.subtitle}</NotFoundSubTitle>

          <PrimaryButton
            containerStyle={{ width: '50%', height: 36, marginTop: 8 }}
            onPress={props.button.onPressed}
          >
            {props.button.title}
          </PrimaryButton>
        </NotFoundContainer>
      </Scroll>
    </PageContainer>
  )
}

export default Main404Page
