import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

function View() {
  const userwishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  // get product id from url
  const {id}=useParams()
  console.log(id);
  // state for storing product to be view
  const[product,setProduct]=useState({})
  // console.log(product);
  useEffect(()=>{
    if(sessionStorage.getItem("products")){
      const allProducts=JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist =()=>{
    const existingProduct=userwishlist?.find(item=>item.id==id)
    if(existingProduct){
alert("product already in wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }
  
  
  return (
    <>
    <Header/>
     <div className='container py-5'>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img height={'500px'} src={product.thumbnail} alt="product" />
          <div className="d-flex justify-content-evenly my-2">
            <button onClick={handleWishlist} className='btn btn-primary'>Add To Wishlist</button>
             <button className='btn btn-success'>Add To Cart</button>
          </div>
          </div>
          <div className="col-md-6">
            <h1>{product?.title}</h1>
            <h3 className='text-danger'>{product?.price}</h3>
            <h4>Brand:{product?.brand}</h4>
            <h4>Category:{product?.category}</h4>
            <h4>Description:{product?.description}</h4>
            <h5>Client Review </h5>
            {/* duplicate div */}
            {
              product?.reviews?.length>0?
                product?.reviews?.map((item,index)=>(
                  
                     <div key={index} className="border rounded p-3 shadow">
              <p><span className='fw-bold'>{item?.reviewerName}</span>{item?.comment}</p>
              <p className='fw-bold'>Rating:{item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning'/></p>

            </div>
                 
            
                ))
                :
                <div>no client reviews are available</div> 
            }
           

          </div>
          </div>
          </div>
          </>
   
  )
}

export default View