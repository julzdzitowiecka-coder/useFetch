import React from 'react'
import UseFetch from './UseFetch';
import fruitData from './fruit.json';

const FetchData = () => {
    //const APIurl='https://api.npoint.io/9045c260b1565daa9e15'
    //const [data]=UseFetch(APIurl);
    const data=fruitData;
    return (
        <>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        <ul className='list_data_main'>
            {data && data.map((e, index)=>(
            <li key={index} className='list_data'>
                <h3>{e.name}</h3>
                <p><img src={e.image} alt={e.name} style={{width:"200px"}} /></p>
                <p><strong>Importance: </strong>{e.importance}</p>
                <p><strong>Benefits: </strong>{e.benefits}</p>
                <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>    
            </li>
            ))}
        </ul>
        </>
    )
}

export default FetchData