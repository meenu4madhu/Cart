import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { height } from '@fortawesome/free-solid-svg-icons/faStar'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'



function Wishlist() {
 const userWishlist= useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
 
 const dispatch=useDispatch()
  const handleCart=(product)=>{
     const existingProduct=userCart?.find(item=>item.id==product.id)
     dispatch(addToCart(product))
     dispatch(removeWishlistItem(product.id))
        Swal.fire({
   title: 'Completed!',
   text: existingProduct?`Quantity of ${product.title},is updated successfully`:'Product Added to Your Cart...',
   icon: 'success',
   confirmButtonText: 'Ok'
 })
   }
  return (
    <>
    <Header/>
    <div className="container py-5">
  { userWishlist?.length>0 ?
     <div className="row my-5">
      {
        userWishlist?.map(product=>(
       <div className="col-md-3 mb-2">
        {/* card */}
         <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
      <Card.Body className='text-center'>
        <Card.Title>{product?.title}</Card.Title>
        <div className="d-flex justify-content-evenly my-1">
        <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="btn text-danger fs-3">
          <FontAwesomeIcon icon={faHeartCircleXmark}/>
        </button>
        <button onClick={()=>handleCart(product)} className="btn text-success fs-3">
          <FontAwesomeIcon icon={faCartPlus}/>
        </button>
        </div>
      </Card.Body>
    </Card>
      </div>))
     
       }
     </div>
     :
     <div style={{height:'80vh'}} className="d-flex justify-content-center align-items-center flex-column">
      <img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZNWTPkw9-lWZ5aYYfuuDWFREyBLbH7Pzc_RngCXYdCEC8vmSE0GxZEcZdQU9vgQzYdI&usqp=CAU" alt="" />
      <h3 className='m-3'>Wishlist is Empty</h3>
      <Link className='btn btn-primary' to={'/'}>Add More</Link>
     </div>
}
    </div>
  </>
  )
}

export default Wishlist