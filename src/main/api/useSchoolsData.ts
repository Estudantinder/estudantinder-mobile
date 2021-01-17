import useSWR from 'swr'

import School from 'main/entities/School'
import fetcher from 'main/services/fetcher'

export default function useSchoolsData() {
  const { data, error } = useSWR<School[]>('/school', fetcher)

  return {
    schools: data?.map((value) => new School(value)),
    loading: !error && !data,
    error,
  }
}
