import React, { useEffect, useState , useReducer} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const initialState = {
    data:{},
    isLoading:true,
    error:null
}


const reducer =(prevState,action)=>{
    switch(action.type){
        case 'FETCH_SUCESS':{
            return {
                data:action.data,
                isLoading:false,
                error:null
            }
        }
        case 'FETCH_FAILED':{
            return {
                ...prevState,
                isLoading: false,
                error:action.error
            }
        }

        default:return prevState;
    }

}

const Show = () => {

    // const [data, setData] = useState({})
    // const [isLoading,setIsLoading] = useState(true);
    // const [error,setError] = useState(null);
    
    const [{data,isLoading,error},dispatch] = useReducer(reducer,initialState)

    const { id } = useParams();

    useEffect(() => {
        
        apiGet(`/shows/${id}`).then(result=>{
            dispatch({
                type:'FETCH_SUCCESS',
                data: result
            })
            // setData(result);
            // setIsLoading(false)
        }).catch(err=>{
            dispatch({
                type:'FETCH_FAILED',
                error:err.message
            })
            // setIsLoading(false);
            // setError(err.message)

        })
    }, [id])



    

    if(isLoading){
        return "Date is data loaded"
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