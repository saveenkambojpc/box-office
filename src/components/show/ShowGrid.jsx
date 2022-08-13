import React from 'react'
import { FlexGrid } from '../../styles/Styled'
import ShowCard from './ShowCard'
// import "../../styles/ShowGrid.style.css";
const ShowGrid = ({result}) => {
  return (
    <FlexGrid className='show-grid'>
      {result.map(i=> <ShowCard key={i.show.id} data={i} />)}
    </FlexGrid>
  )
}

export default ShowGrid