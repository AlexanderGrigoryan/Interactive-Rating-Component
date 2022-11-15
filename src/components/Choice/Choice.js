import Styles from './Choice.module.css'

function Choice(props){
    return(
        <div className={Styles.choice__container}>
            <p className={Styles.choice__decision}>
                You selected {props.selectNum} out of 5
            </p>
        </div>
    )
}

export default Choice;