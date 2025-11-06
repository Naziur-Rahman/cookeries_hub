import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErroerPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page ">
      <h1 className='font-bold pt-24 text-center'> Oops!...</h1>
      <p className='text-center p-4'>Sorry, an unexpected error has occurred.</p>
      <p className='text-center'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErroerPage