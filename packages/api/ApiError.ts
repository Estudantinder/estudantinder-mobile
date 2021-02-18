export interface ApiErrorProps {
  title: string
  message?: string
}

export default class ApiError extends Error {
  title: string

  constructor(props: ApiErrorProps) {
    super(props.message)

    this.title = props.title
  }
}
