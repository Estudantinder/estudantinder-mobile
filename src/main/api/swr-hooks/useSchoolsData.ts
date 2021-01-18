import useSWR from 'swr'

import fetcher from 'main/api/config/fetcher'
import School from 'main/entities/School'

export default function useSchoolsData() {
  const { data, error } = useSWR<School[]>('/school', fetcher)

  return {
    schools: data?.map((value) => new School(value)),
    loading: !error && !data,
    error,
  }
}
