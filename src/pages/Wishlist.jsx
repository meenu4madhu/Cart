import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Wishlist() {
  return (
    <>
    <Header/>
    <div className="container py-5">
     <div className="row my-5">
       <div className="col-md-3 mb-2">
        {/* card */}
         <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body className='text-center'>
        <Card.Title>Title</Card.Title>
        <div className="d-flex justify-content-evenly my-1">
        <button className="btn text-danger fs-3">
          <FontAwesomeIcon icon={faHeartCircleXmark}/>
        </button>
        <button className="btn text-success fs-3">
          <FontAwesomeIcon icon={faCartPlus}/>
        </button>
        </div>
      </Card.Body>
    </Card>
      </div>
     </div>
    </div>
  </>
  )
}

export default Wishlist