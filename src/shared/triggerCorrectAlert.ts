import { Alert } from 'react-native'

export default function triggerCorrectAlert(error: any) {
  if (error.title) {
    return Alert.alert(error.title, error.message)
  }

  return alert(error)
}
