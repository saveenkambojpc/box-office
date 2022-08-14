import React from 'react'

const Details = ({data}) => {
  const {status,network,premiered} = data;
  return (
    <div style={{color:"white"}}>
      <p>
        Status : <span>{status}</span>
      </p>
      <p>
        Premierred {premiered} {network ? `on ${network.name}`: null}
      </p>
    </div>
  )
}

export default Details