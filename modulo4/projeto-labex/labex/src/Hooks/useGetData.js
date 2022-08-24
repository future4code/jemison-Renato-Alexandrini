import { useEffect, useState } from "react";
import axios from 'axios';


export function useGetData(url){

    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setIsLoading(false)
                setData(res.data)
            }).catch((err) => {
                setIsLoading(false)
                console.log(err)
                setError(error)
            })
    },[url])

    return [data, isLoading, error]

}
