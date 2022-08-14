import React from 'react'
import { SeasonList, SeasonsWrapper } from './Season.styled';


const Seasons = ({ data }) => {
  const { _embedded } = data
  const { seasons } = _embedded; //arr

 

  

  return (
    <SeasonsWrapper>

      <SeasonList>
        {seasons.map(season => {
       
            return (
              <div key={season.id} className='season-item'>
  
                <div className='season-image-wrapper'>
                  <img src={season.image ? season.image.medium : ''} alt="" />
                </div>
                <div className='absolute'>
                  <p>Season {season.number}</p>
                  <p>
                    Episodes: <span>{season.episodeOrder || 'N/A'}</span>
                  </p>
                </div>
              </div>
            )
          
          
         
        }
        )}
      </SeasonList>
    </SeasonsWrapper>
  );
}

export default Seasons