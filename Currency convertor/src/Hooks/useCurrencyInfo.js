import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))

//     }, [currency])

//     return data
// }

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        async function fetchData(){
        try{const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            const data = await res.json()
            setData(data[currency])
        }catch(e){
            console.log(e)
        }
    }
    fetchData()
    },[currency])
    return data
}

export default useCurrencyInfo;