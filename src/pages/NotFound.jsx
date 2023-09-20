import React from 'react'
import NavBar from '../components/NavBar'

const NotFound = () => {
  return (
    <>
      <NavBar/>
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-6">
        <div className="alert alert-success text-center" role="alert">
        <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  </div>
    </>
    
  )
}

export default NotFound