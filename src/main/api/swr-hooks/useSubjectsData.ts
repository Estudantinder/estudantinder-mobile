import useSWR from 'swr'

import fetcher from 'main/api/config/fetcher'
import Subject from 'main/entities/Subject'

export default function useSubjectsData() {
  const { data, error } = useSWR<Subject[]>('/subject', fetcher)

  return {
    subjects: data?.map((value) => new Subject(value)),
    loading: !error && !data,
    error,
  }
}
