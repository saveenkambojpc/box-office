import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const Show = () => {

    const [data, setData] = useState({})
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        // getData();
        apiGet(`/shows/${id}`).then(result=>{
            setData(result);
            setIsLoading(false)
        }).catch(err=>{
            setIsLoading(false);
            setError(err.message)

        })
    }, [id])



    

    if(isLoading){
        return "<div>Date is data loaded</div>"
    }

    if(error){
        return error;
    }



    return (
        <div>
            This is Dynamic Route
        </div>
    )
}

export default Show