import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column m-5'>
         <h3 className='m-5 text-danger '>Oops! We can’t seem to find the page you’re looking for</h3>
      <img  src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="" />
   
      <Link to={'/'} className='btn btn-success mb-5'>Go To Home</Link>
    </div>
  )
}

export default Pnf