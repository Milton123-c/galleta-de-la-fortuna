import React, { useState } from 'react'

const Autor = ({autor}) => {

    const {author} = autor;


  return (
    <div className='autor'>
        <span>
            {author}
        </span>
    </div>
  )
}

export default Autor