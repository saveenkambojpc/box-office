import React, { useEffect, useState, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { apiGet } from '../misc/config';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const initialState = {
    data: {},
    isLoading: true,
    error: null
}


const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        }
        case 'FETCH_FAILED': {
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        }

        default: { return prevState; }
    }

}

const Show = () => {


    const [{ data, isLoading, error }, dispatch] = useReducer(reducer, initialState)
    console.log(data,isLoading,error);
    const { id } = useParams();

    useEffect(() => {

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {
            dispatch({
                type: 'FETCH_SUCCESS',
                data: result
            })

        }).catch(err => {
            dispatch({
                type: 'FETCH_FAILED',
                error: err.message
            })


        })
    }, [id])




    console.log("Value of isLoading ", isLoading)
    if (isLoading) {
        return "Date is data loaded"
    }

    if (error) {
        return error;
    }



    return (
        <ShowPageWrapper>
            <ShowMainData data={data} />

            <InfoBlock>
                <h2>Details</h2>
                <Details data={data} />
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons data={data} />
            </InfoBlock>
            <InfoBlock>
                <h2>Cast</h2>
                <Cast data={data} />
            </InfoBlock>


        </ShowPageWrapper>
    )
}

export default Show