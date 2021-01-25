import React from 'react'
import { Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import theme from 'views/styles/theme'

export interface ImagePickerCardProps {
  imageUri: string
  onPress(): void
}

const ImagePickerCard: React.FC<ImagePickerCardProps> = (props) => {
  return (
    <RectButton
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background.light_purple,
        height: 240,

        borderRadius: 6,
      }}
      onPress={props.onPress}
    >
      {props.imageUri ? (
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          source={{ uri: props.imageUri }}
        />
      ) : (
        <Feather name="camera" size={32} color={theme.colors.primary.purple} />
      )}
    </RectButton>
  )
}

export default ImagePickerCard
