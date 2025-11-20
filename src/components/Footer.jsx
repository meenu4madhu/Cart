
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast} from '@fortawesome/free-solid-svg-icons/faTruckFast'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'



import { Link } from 'react-router-dom'





function Footer() {
  return (
    <>
    <div style={{height:'250px'}} className="row p-5 bg-primary mt-2">
      <div className="col-md-3 ">
        <h3 ><Link className=' text-decoration-none text-light fw-bold ' to={'/'}><FontAwesomeIcon icon={faTruckFast} className='text-light me-3'/>Daily Cart</Link></h3>
        <p className='text-light fw-semibold'>Designed and built with all the love in the world by the Luminar team with the help of our contributors. <br />
Code licensed Luminar, docs CC BY 3.0.
Currently v5.3.2.</p>
      </div>
      <div className="col-md-3">
        <h3 className='text-light fw-bold ms-5'>Links</h3>
        <div className='d-flex flex-column ms-5'>
         <h5><Link className='text-decoration-none text-light  my-2' to={'/'}>Landing page</Link></h5> 
         <h5><Link className='text-decoration-none text-light  my-2' to={'/wishlist'}>Home page</Link></h5> 
          <h5><Link className='text-decoration-none text-light  my-2' to={'/cart'}>Watch History page</Link></h5>
          
        </div>
      </div>
      <div className="col-md-3">
        <h3 className='text-light fw-bold ms-5'>Guides</h3>
        <h4 className='text-light fw-light ms-5'>React</h4>
        <h4 className='text-light fw-light ms-5'>React Bootstrap</h4>
        <h4 className='text-light fw-light ms-5'>React Router</h4>
      </div>
      <div className="col-md-3">
        <h3 className='text-light fw-bold ms-5'>Contact Us</h3>
        <input className='p-1 ms-5 rounded me-1' type="text" placeholder='Enter your email here'/>
        <FontAwesomeIcon icon={faArrowRight} />
        <div className='my-3 ms-5'>
          <FontAwesomeIcon icon={faTwitter} className='text-light me-3' />
          <FontAwesomeIcon icon={faInstagram} className='text-light me-3'/>
          <FontAwesomeIcon icon={faFacebook} className='text-light me-3'/>
          <FontAwesomeIcon icon={faLinkedin} className='text-light me-3'/>
          <FontAwesomeIcon icon={faGithub} className='text-light me-3'/>
          <FontAwesomeIcon icon={faPhone} className='text-light me-3'/>
        </div>
      </div>
     <div className="row">
      <h6 className='text-center text-light mb-2'>Copyright © July 2024 Batch, Daily Cart. Built with React Redux.</h6>
    </div>
    </div>
   
    </>
  )
}

export default Footer