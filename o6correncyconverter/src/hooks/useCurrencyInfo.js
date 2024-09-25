import {useEffect, useState} from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://github.com/hiteshchoudhary/chai-aur-react/blob/main/currency.md`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])

    console.log(data);
    return data

}

export default useCurrencyInfo;