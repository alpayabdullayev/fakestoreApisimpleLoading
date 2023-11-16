import React from 'react'

const Card = ({id,title,author}) => {
  return (
    <>
        <div className="card" >
                <h1>{title}</h1>
                <h5>{author}</h5>
        </div>
    </>
  )
}

export default Card
