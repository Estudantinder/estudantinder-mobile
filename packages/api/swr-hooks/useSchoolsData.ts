import useSWR from 'swr'

import fetcher from 'packages/api/fetcher'
import School from 'packages/entities/School'

export default function useSchoolsData() {
  const { data, error } = useSWR<School[]>('/schools', fetcher)

  return {
    schools: data?.map((value) => new School(value)),
    loading: !error && !data,
    error: error as Error | undefined,
  }
}
