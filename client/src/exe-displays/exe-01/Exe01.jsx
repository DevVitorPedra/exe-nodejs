import React, {useState, useEffect} from 'react'
import { StyledExe01 } from './styledExe01'

import Card from '../../components/Card/Card'
import getInfo from '../../utils/exe-01';
export default function Exe01() {
    const exe01Url = 'localhost:5000/sorting'
     
    const [data, setData] = useState();
    console.log(data)
    useEffect(() => {
       setData( getInfo(exe01Url))
    }, []);
    return (
        <StyledExe01>
            {(!data)? <h1>Loading</h1> :data.map((element,idx)=>{
                return (
                    <Card 
                    key={idx}
                    id ={element.id}
                    title = {element.name}
                    age={element.age}
                    job={element.job}
                    state={element.state}
                    />
                )
            })}
        </StyledExe01>
    )
}
