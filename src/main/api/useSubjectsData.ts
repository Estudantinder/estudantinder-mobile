import useSWR from 'swr'

import Subject from 'main/entities/Subject'
import fetcher from 'main/services/fetcher'

export default function useSubjectsData() {
  const { data, error } = useSWR<Subject[]>('/subject', fetcher)

  return {
    subjects: data?.map((value) => new Subject(value)),
    loading: !error && !data,
    error,
  }
}
