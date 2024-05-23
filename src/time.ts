import { useState, useEffect } from 'react'

function useThis() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(id)
    }, [])

    return time
  }

export default useThis