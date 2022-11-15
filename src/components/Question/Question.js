import Styles from './Question.module.css'

function Question(props){
    return(
        <h1 className={Styles.question__title}>{props.children}</h1>
    )
}

export default Question;