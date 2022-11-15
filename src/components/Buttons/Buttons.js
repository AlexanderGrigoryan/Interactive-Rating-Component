import Styles from './Buttons.module.css'

function Buttons(props){
    let select = [1, 2, 3, 4, 5]
    return(
        <div className={Styles.btn__container}>
            {select.map((item) => {
                return <button onClick={() => props.setSelectNum(item)} className={Styles.btn}>{item}</button>
            })}
        </div>
    )
}

export default Buttons;