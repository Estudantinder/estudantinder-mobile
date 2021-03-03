import React, { RefObject } from 'react'
import { Dimensions } from 'react-native'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import theme from 'packages/styles/theme'

import FiltersView from './FiltersView'

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
      drawerWidth={Math.round((Dimensions.get('screen').width / 10) * 8.5)}
      drawerPosition="right"
      drawerType="front"
      drawerBackgroundColor={theme.colors.background.light_purple}
    >
      {props.children}
    </DrawerLayout>
  )
}

export default FilterDrawer
