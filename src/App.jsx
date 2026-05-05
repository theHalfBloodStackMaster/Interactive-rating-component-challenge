import { useState } from 'react'
import thankYouIcon from './assets/images/illustration-thank-you.svg'
import starIcon from './assets/images/icon-star.svg'
import './App.css'

function App() {

  const [rating, setRating] = useState(null);
  const [submited, setSubmitted] = useState(false);

  return (
    <>
    <div className='card'>
      {submited ? (
        <>
          <div className='thank-you'>
            <img src={thankYouIcon} alt="" />
            <p className='selected-rating'>You have selected {rating} out of 5</p>
            <h1>Thank you!</h1>
            <p className='prolog_para'>We appriciate you taking the time to give a rating. If you ever need support, don't hesitate to get in touch!</p>
          </div>
        </>

      ):(
        <>
          <div className='star-icon'>
            <img src={starIcon} alt="star-icon" />
          </div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='rating'>
            <button 
            className={rating===1 ? 'rating_button selected' : 'rating_button'}
            type='button'
            onClick={() => {setRating(1)}}>1</button>
            <button 
            className={rating===2 ? 'rating_button selected' : 'rating_button'}
            type='button'
            onClick={() => setRating(2)}>2</button>
            <button 
            className={rating===3 ? 'rating_button selected' : 'rating_button'}
            type='button'
            onClick={() => setRating(3)}>3</button>
            <button 
            className={rating===4 ? 'rating_button selected' : 'rating_button'}
            type='button'
            onClick={() => setRating(4)}>4</button>
            <button 
            className={rating===5 ? 'rating_button selected' : 'rating_button'}
            type='button'
            onClick={() => setRating(5)}>5</button>
          </div>
          <button 
          className='submit_button'
          type='button'
          disabled={rating===null}
          onClick={() => setSubmitted(true)}>SUBMIT</button>
        </>
      )}
    </div>
    </>
  )
}
export default App
