import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (answer === '37') {
      navigate('/kejutan-ultah/success', { state: { fromIndex: true } })
    } else {
      alert('Try again!')
    }
  }

  useEffect(() => {
    console.log("JAWABANNYA 37 HAHAHAHA")
  }, [])

  return (
    <div className='container'>
      <div className="form-container">
        <div className="form">
          <div className="Title">
            Berapa Nilai X?
          </div>
          <div className="equation">
            <span>
              (5x^2 - 3x + 2 = 3x^2 + 10x - 35)
            </span>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="x"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="button">
            <button type="submit" onClick={handleSubmit}>TEBAK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
