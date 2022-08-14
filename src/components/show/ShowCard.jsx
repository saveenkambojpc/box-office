import React from 'react'
// import '../../styles/ShowCard.style.css'
import {
  Link
} from "react-router-dom";
import { Card, Img } from '../../styles/Styled';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const ShowCard = ({ data, onStarClick }) => {

  const img = data.show.image && data.show.image.medium;
  const id = data.show.id;
  const summary = data.show.summary && data.show.summary.replace(/<\/?[^>]+(>|$)/g, "");
  

  const {isStarred} = data;
  return (
    <>
      {
        id && img && summary &&
        <>
          <Card>
            <Link to={`/show/${id}`} className='show-card'>
              <Img src={img} alt="" />
              <div className='active'>
                <h5>{data.show.name}</h5>
                <p>{summary.slice(0, 40)}...</p>
                <p>{data.show.type ? `Type: ${data.show.type}` : ''}</p>
                <p>{data.show.rating.average ? `Rating : ${data.show.rating.average}` : ''}</p>
              </div>
            </Link>
            <button className={isStarred && 'activeStar'} type='submit'>{<AiFillStar onClick={onStarClick} />}</button>
          </Card>

        </>
      }
    </>
  )
}

export default ShowCard