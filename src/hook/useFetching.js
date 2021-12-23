import {useState} from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async () => {
    try{
      setIsLoading(true)
      console.log('fetching')
      await callback()
    } catch(e) {
      console.log('fetching2')
      e.massage ? setError(e.massage) :setError(String(e))
    } finally {
      console.log('fetching2')
      setIsLoading(false)
    }

  }
  return [fetching, isLoading, error ]
}