import useSWR from 'swr'

import fetcher from 'packages/api/fetcher'
import Subject from 'packages/entities/Subject'

export default function useSubjectsData() {
  const { data, error } = useSWR<Subject[]>('/subjects', fetcher)

  return {
    subjects: data?.map((value) => new Subject(value)),
    loading: !error && !data,
    error,
  }
}
