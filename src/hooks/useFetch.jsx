import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const abortFetch = new AbortController()
    setIsLoading(true)
    fetch(url, { method: 'GET', signal: abortFetch.signal })
    .then(response => response.json())
    .then(data => {
      setData(data)
      setIsLoading(false)
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
      setError('Error fetching data.')
      setIsLoading(false)
      }
    })
    return () => abortFetch.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch