import Styles from './Star.module.css'
import StarImage from '../../img/icon-star.svg';

function Star(){
    return(
        <div className={Styles.star__container}>
            <img className={Styles.star__image} src={StarImage} alt="Star"/>
        </div>
    )
}

export default Star;