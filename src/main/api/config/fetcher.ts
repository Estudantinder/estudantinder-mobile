import api from '..'

export default (route: string) => api.get(route).then((res) => res.data)
