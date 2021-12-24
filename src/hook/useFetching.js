import {useState} from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    try{
      setIsLoading(true)
      console.log('fetching')
      await callback(...args)
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