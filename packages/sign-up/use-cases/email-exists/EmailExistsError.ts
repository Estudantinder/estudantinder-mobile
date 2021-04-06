import { AxiosResponse } from 'axios'

import ApiError from 'packages/api/ApiError'

export default class EmailExistsError extends ApiError {
  constructor(props: AxiosResponse) {
    super(props)
  }
}
