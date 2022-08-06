import styles from './Content.module.css';
import star from '../../assets/icon-star.svg';

const Content = () => {
  return (
    <div>
        <div className={styles['div-star']}>
            <img src={star} />
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </div>
  )
}

export default Content;