import React, {useState, useEffect } from "react";

const UseFetch = (url) => {
    const[data,setData]=useState();  
    useEffect(()=>{
        if (!url) return;
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((error) => {
            console.error('Fetch error:', error);
            setData(null);
      });
    },[url])
    return [data]  
}

export default UseFetch
