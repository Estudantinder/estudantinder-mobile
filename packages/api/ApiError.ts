import { AxiosResponse } from 'axios'

export default class ApiError extends Error {
  title: string

  constructor(props: AxiosResponse) {
    super(props.data.message || String(JSON.stringify(props.data)))

    this.title = props.data.error
  }
}
