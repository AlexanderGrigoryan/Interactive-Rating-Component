import Styles from './Image.module.css';
import Photo from '../../img/illustration-thank-you.svg'

function Image(){
    return(
        <img className={Styles.image__icon} src={Photo} alt='Thanks'/>
    )
}

export default Image;