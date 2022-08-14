import React from 'react'
import { useShows } from '../../misc/custom-hooks'
import { FlexGrid } from '../../styles/Styled'
import ShowCard from './ShowCard'
// import "../../styles/ShowGrid.style.css";
const ShowGrid = ({ result }) => {

  const [starredShows, dispatchStarred] = useShows();


  return (
    <FlexGrid className='show-grid'>
      {result.map(i => {
        const isStarred = starredShows.includes(i.show.id);


        const onStarClick = () => {
          if (isStarred) {
            console.log("You just clicked on star");
            dispatchStarred({
              type: 'REMOVE',
              showId: i.show.id
            });
          } else {
            dispatchStarred({
              type: 'ADD',
              showId: i.show.id
            });
          }
        }
        i = { ...i, isStarred };
        return <ShowCard key={i.show.id} data={i} onStarClick={onStarClick} />
      })

      }
    </FlexGrid>
  )
}

export default ShowGrid