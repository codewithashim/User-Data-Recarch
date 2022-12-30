import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }, [url])

    return { data, loading, error }
}

export default useFetch