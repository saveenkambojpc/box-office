import React from 'react'
import Star from '../Star';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({data}) => {
  const {name, image, rating,genres,summary} = data;
  
  return (
    <MainDataWrapper>
      <img src={image.original} alt="" />
      <div className="text-side">

      <Headline>
        <h1>{name}</h1>
        <div>
          <Star howmany={rating.average}/>
          <span>Rating : {rating.average/2 || 'N/A'}</span>
        </div>
      </Headline>
      <div dangerouslySetInnerHTML={{__html : summary}}/>
      <div>
          Tags:{' '}
          <TagList>
            {genres.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
        </div>

    </MainDataWrapper>
  )
}

export default ShowMainData