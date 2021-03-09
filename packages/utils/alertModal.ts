import { Alert } from 'react-native'

export default function alertModal(error: any): void {
  if (error.title) {
    return Alert.alert(error.title, error.message || new Error().stack)
  }

  return alert(error)
}
