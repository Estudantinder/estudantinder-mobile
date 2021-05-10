/* eslint-disable */
require('react-native-gesture-handler/jestSetup')

const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock')

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('@react-navigation/native')
