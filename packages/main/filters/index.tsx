import React, { RefObject } from 'react'
import { Dimensions } from 'react-native'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

import { useToggleThemeContext } from 'packages/styles/context'

import FiltersView from './FiltersView'

export interface FilterDrawerProps {
  drawerRef: RefObject<DrawerLayout>
}

const FilterDrawer: React.FC<FilterDrawerProps> = (props) => {
  const { theme } = useToggleThemeContext()

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
      drawerBackgroundColor={theme.background.light_purple}
    >
      {props.children}
    </DrawerLayout>
  )
}

export default FilterDrawer
