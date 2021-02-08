declare module '*.png'

type Modify<T, R> = Omit<T, keyof R> & R

type ValueRef<Component, Value = string> = Component & {
  value: Value
}
