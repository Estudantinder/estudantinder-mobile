import React from 'react'

import { AntDesign } from '@expo/vector-icons'

import {
  HomeLikeAndDislikeButton,
  HomeLikeAndDislikeContainer,
} from './home-components.styles'

export interface HomeLikeAndDislikeProps {
  onLike(): void
  onDislike(): void
  isActive: boolean
}

const HomeLikeAndDislike: React.FC<HomeLikeAndDislikeProps> = (props) => {
  return (
    <HomeLikeAndDislikeContainer>
      <HomeLikeAndDislikeButton onPress={props.onLike}>
        <AntDesign
          name="like1"
          color={props.isActive ? 'rgba(15, 173, 88, .3)' : '#0FAD58'}
          size={28}
        />
      </HomeLikeAndDislikeButton>

      <HomeLikeAndDislikeButton onPress={props.onDislike}>
        <AntDesign
          name="dislike1"
          color={props.isActive ? 'rgba(198, 22, 22, .3)' : '#C61616'}
          size={28}
        />
      </HomeLikeAndDislikeButton>
    </HomeLikeAndDislikeContainer>
  )
}

export default HomeLikeAndDislike
