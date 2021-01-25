import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { Feather } from '@expo/vector-icons'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { InputLabel } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

const items = ['1', '2', '3', '4', '5']

const PaginationDot: React.FC<{ active: boolean }> = (props) => {
  let color

  if (props.active) color = theme.colors.primary.purple
  else color = theme.colors.input.placeholder

  return (
    <Feather
      name="camera"
      color={color}
      size={16}
      style={{ marginHorizontal: 12 }}
    />
  )
}

const SignUpImages: React.FC = () => {
  const { createUser, getUser } = useSignUpContext()
  const { signIn } = useAuthContext()

  const [activeIndex, setActiveIndex] = useState(0)

  const router = useNavigation()

  async function handlePressSubmit() {
    try {
      await createUser()
    } catch (error) {
      return triggerCorrectAlert(error)
    }

    try {
      const user = getUser()

      await signIn({
        email: user.email,
        password: user.password,
        stay_logged: false,
      })

      return router.navigate('Home')
    } catch (error) {
      triggerCorrectAlert(error)

      return router.navigate('Login')
    }
  }

  return (
    <FormPageTemplate title="Imagens">
      <InputLabel>{String(JSON.stringify(getUser()))}</InputLabel>

      <Carousel
        data={items}
        renderItem={({ item }: { item: string }) => {
          return (
            <RectButton
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.background.light_purple,
                height: 240,
              }}
            >
              <Text>{item}</Text>
            </RectButton>
          )
        }}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={210}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotElement={<PaginationDot active={true} />}
        inactiveDotElement={<PaginationDot active={false} />}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <PrimaryButton onPress={handlePressSubmit}>CADASTRAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpImages
