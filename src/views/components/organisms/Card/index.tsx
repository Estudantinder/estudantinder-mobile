import React from 'react'
import { Text, View } from 'react-native'

const Card: React.FC = () => {
  return (
    <View style={{ width: '100%', borderRadius: 5 }}>
      <View
        style={{ height: 300, width: '100%', backgroundColor: '#c0c0c0' }}
      />

      <View>
        <Text>Gabriela Santos, 16</Text>
      </View>
    </View>
  )
}

export default Card
