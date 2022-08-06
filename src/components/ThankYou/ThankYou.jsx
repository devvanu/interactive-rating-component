import './ThankYou.css';
import thankYou from '../../assets/illustration-thank-you.svg'

const ThankYou = (props) => {
  return (
    <div className='thankYou'>
        <div className='thankYou__image-div'>
            <img src={thankYou} />
        </div>
        <p className='thankYou__selected'>You selected {props.ratingPoint} out of 5</p>
        <h2 className='thankYou__title'>Thank you!</h2>
        <p className='thankYou__appreciate'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default ThankYou