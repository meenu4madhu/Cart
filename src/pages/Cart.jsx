import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <>
    <Header/>
   <div className="container py-5">
  <div className="my-5">
    <h1 className="text-danger fw-bold">Cart Summary</h1>
    <div className="row mt-5">
      <div className="col-md-8 border rounded p-5">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Title</td>
              <td><img width={'50px'} height={'50px'} src="data:image/jpeg;base64,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" alt="product" /></td>
              <td><div className="d-flex">
                <button className='btn fs-3 fw-bold '>-</button>
                <input style={{width:'50px'}} value={10} type="text" className='form-control' readOnly/>
                <button className='btn fs-4 fw-bold'>+</button>
                </div>
                </td>
              <td>$200</td>
              <td><button className='btn text-danger'><FontAwesomeIcon icon={faTrash}/></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
        <div className="border rounded p-5">
          <h3 className="fw-bold">Total Amount : <span className='text-danger'>$19.99</span></h3>
          <hr />
          <div className="d-grid mt-2">
            <button className='btn btn-success'>CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
   </div>
    </>
  )
}

export default Cart