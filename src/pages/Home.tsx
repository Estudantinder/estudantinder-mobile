import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { useTheme } from 'styled-components'

export default function Home() {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.red }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
