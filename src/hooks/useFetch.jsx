import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      setData(data)
      setIsLoading(false)
    })
    .catch(() => {
      setError('Error fetching data.')
      setIsLoading(false)
    })
  }, [])

  return { data, isLoading, error }
}

export default useFetch