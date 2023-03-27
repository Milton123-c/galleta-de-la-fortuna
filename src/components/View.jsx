import React from 'react'

export const View = ({galleta}) => {

  const {author, phrase} = galleta;

  return (
    <div className='view'>
      <svg className='svg__top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340"><path fill="#FFF" fillOpacity="1" d="M0,320L80,266.7C160,213,320,107,480,101.3C640,96,800,192,960,213.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
     
    
    <svg className='svg__buttom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,320L80,266.7C160,213,320,107,480,101.3C640,96,800,192,960,213.3C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

    <div className='svg__center'></div>

    <div className='text__container'>
        <p>{phrase}</p>
    </div>

    <div className='comillas'>
    <i class='bx bxs-quote-single-right'></i>
    <i class='bx bxs-quote-single-right'></i>
    </div>
     </div>
  )
}
