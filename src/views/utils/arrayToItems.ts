import { Item } from 'react-native-picker-select'

import { formatToCapitalized } from 'brazilian-values'

interface Paths<T> {
  label: keyof T
  value: keyof T
}

export default function arrayToItems<T extends Record<symbol, unknown>>(
  value: T[],
  paths: Paths<T>,
  capitalize = true
): Item[] {
  return value.map((value) => {
    let label = String(value[paths.label])

    if (capitalize) {
      label = formatToCapitalized(label)
    }

    return {
      label,
      value: String(value[paths.value]),
    }
  })
}
