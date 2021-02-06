declare module '*.png'

type Modify<T, R> = Omit<T, keyof R> & R
