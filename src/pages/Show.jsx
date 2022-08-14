import React from 'react'
import { useParams } from 'react-router-dom'
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';




const Show = () => {

    const { id } = useParams();

    const {data,isLoading,error} = useShow(id);
    
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