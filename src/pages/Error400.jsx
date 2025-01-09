import React from 'react'
import ErrorContent from '../components/error/ErrorContent'
import img1 from "../../public/assets/images/404.webp"

const Error400 = () => {
  return (
    <ErrorContent imgSrc={img1} alt={'400'} subtitle={'Bad Request'}/>
  )
}

export default Error400