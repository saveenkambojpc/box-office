import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Img } from '../../styles/ActorStyled';
// import '../../styles/ActorCard.style.css'

const ActorCard = ({ data }) => {

  const img = data.person.image && data.person.image.medium;
  const id = data.person.id;
  const _name = data.person.name;

  const birthday = data.person.birthday && data.person.birthday;
  return (
    <>
      {
        img && id &&
        <Card>
          <Link to={`/people/${id}`} className='actor-card' >
            <Img src={img} alt="" />
            <div>
              <h5>{_name}</h5>
              <p>{birthday}</p>
            </div>

          </Link>
        </Card>
      }
    </>
  )
}

export default ActorCard