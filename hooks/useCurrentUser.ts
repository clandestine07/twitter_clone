import useSwr from 'swr'
import fetcher from '@/libs/fetch'
const useCurrentUser = () => {
    const { data, error, isLoading, mutate} = useSwr('/api/currentUser', fetcher)
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser