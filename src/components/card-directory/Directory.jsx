import React from 'react'
import Card from '../card-item/Card'
import './styles.css'

const Directory = ({content}) => {
  return (
   <div className='directory'>
    {content.map((item) =>(
        <Card key={item.id} item={item} />
    ))}
   </div>
  )
}

export default Directory