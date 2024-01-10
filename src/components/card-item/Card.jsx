import React from 'react'
import './styles.css'

const Card = ({item}) => {
const {title, description} = item

  return (
    <div className='card'>
        <h1>
            {title}
        </h1>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Card