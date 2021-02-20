import React, { RefObject } from 'react'
import { Dimensions } from 'react-native'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import { Feather } from '@expo/vector-icons'

import { Row } from 'packages/styles'
import theme from 'packages/styles/theme'

import {
  FilterDrawerBackContainer,
  FilterDrawerContainer,
} from './home-components.styles'

interface FiltersViewProps {
  closeDrawer(): void
}

const FiltersView = (props: FiltersViewProps): JSX.Element => {
  return (
    <FilterDrawerContainer>
      <Row>
        <FilterDrawerBackContainer onPress={props.closeDrawer}>
          <Feather name="x" color="#2d2d2d" size={24} />
        </FilterDrawerBackContainer>
      </Row>
    </FilterDrawerContainer>
  )
}

export interface FilterDrawerProps {
  drawerRef: RefObject<DrawerLayout>
}

const FilterDrawer: React.FC<FilterDrawerProps> = (props) => {
  return (
    <DrawerLayout
      ref={props.drawerRef as never}
      renderNavigationView={() => (
        <FiltersView
          closeDrawer={() => props.drawerRef.current?.closeDrawer()}
        />
      )}
      drawerWidth={Math.round((Dimensions.get('screen').width / 10) * 8)}
      drawerPosition="right"
      drawerType="front"
      drawerBackgroundColor={theme.colors.background.light_purple}
    >
      {props.children}
    </DrawerLayout>
  )
}

export default FilterDrawer
