import api from './index'

export default (route: string) => api.get(route).then((res) => res.data)
