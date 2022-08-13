import React from 'react'
import { FlexGrid } from '../../styles/Styled'
import ActorCard from './ActorCard'
// import "../../styles/ActorGrid.style.css";

const ActorGrid = ({result}) => {
  return (
    <FlexGrid className='actor-grid'>
      {result.map(i => <ActorCard key={i.person.id} data={i} />)}
    </FlexGrid>
  )
}

export default ActorGrid