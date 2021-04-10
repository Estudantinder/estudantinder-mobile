import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { useToggleThemeContext } from 'packages/styles/context'

import ImagePickerCard from './ImagePickerCard'

interface RenderItemProps {
  item: string
  index: number
}

export interface PhotosCarrouselProps {
  photos: string[]
  onPress?: (index: number) => void
  onDeletePress?: (index: number) => void
  renderItem?: (props: RenderItemProps) => JSX.Element
}

const PhotosCarrousel: React.FC<PhotosCarrouselProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const { theme } = useToggleThemeContext()

  const renderItem = ({ item, index }: RenderItemProps) => {
    return (
      <ImagePickerCard
        imageUri={item}
        onPress={() => props.onPress?.(index)}
        onDeletePress={() => props.onDeletePress?.(index)}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        testID="photos"
        data={props.photos}
        renderItem={props.renderItem || renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={210}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={props.photos.length}
        activeDotIndex={activeIndex}
        dotStyle={{ width: 30, height: 4, marginHorizontal: -6 }}
        inactiveDotColor={theme.components.photos.pagination.inactive_dot}
        dotColor={theme.components.photos.pagination.active_dot}
        animatedDuration={150}
        animatedFriction={10}
        animatedTension={10}
        inactiveDotScale={0.8}
        containerStyle={{ paddingBottom: 0 }}
      />
    </View>
  )
}

export default PhotosCarrousel
