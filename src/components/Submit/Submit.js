import Styles from './Submit.module.css'

function Submit(props){
    return(
        <button onClick={() => props.selectNum > 0 ? props.setCurrentPage(false) : null } className={Styles.button__submit}>Submit</button>
    )
}

export default Submit;