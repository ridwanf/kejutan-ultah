import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'

function Success() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state?.fromIndex) {
      navigate('/')
    }
  }, [location, navigate])

  return (
    <div className='container'>
      <div className="form-container">
        <div className="form">
          <div className="Title">
            🎉 ENJOY 🎉
          </div>
          <div className="equation" >
            <img src="/src/assets/qr.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
