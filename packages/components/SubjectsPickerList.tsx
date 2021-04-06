import React from 'react'
import { FlatList, View, ViewStyle } from 'react-native'

import Subject from 'packages/entities/Subject'

import { SubjectsPickerListContainer } from './components.styles'
import RowOptionsButton from './RowOptions/Button'

export interface SubjectsPickerListProps {
  data?: Subject[]
  favorites: Subject[]
  onSubjectPress(item: Subject): void
  buttonContainerStyle?: ViewStyle
}

const SubjectsPickerList: React.FC<SubjectsPickerListProps> = (props) => {
  return (
    <SubjectsPickerListContainer>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => {
          const isActive = props.favorites
            .map((value) => String(value.id))
            .includes(String(item.id))

          return (
            <View
              style={{
                marginRight: index % 2 === 0 ? 10 : 0,
                marginTop: 12,
                flex: 1,
              }}
            >
              <RowOptionsButton
                isActive={isActive}
                onPress={() => props.onSubjectPress(item)}
                containerStyle={props.buttonContainerStyle}
              >
                {item.name}
              </RowOptionsButton>
            </View>
          )
        }}
        numColumns={2}
        scrollEnabled={false}
      />
    </SubjectsPickerListContainer>
  )
}

export default SubjectsPickerList
