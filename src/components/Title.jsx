import React from 'react'
import { TitleWrapper } from './Title.style'

const Title = ({title,subTitle}) => {
  return (
    <TitleWrapper>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </TitleWrapper>
  )
}

export default Title