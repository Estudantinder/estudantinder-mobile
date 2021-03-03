import ApiError, { ApiErrorProps } from 'packages/api/ApiError'

export default class EmailExistsError extends ApiError {
  constructor(props: ApiErrorProps) {
    super(props)
  }
}
