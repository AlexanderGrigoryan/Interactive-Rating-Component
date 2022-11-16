import Styles from './Buttons.module.css'

function Buttons(props){
    let select = [1, 2, 3, 4, 5]
    console.log(props.selectNum)
    return(
        <div className={Styles.btn__container}>
            {select.map((item) => {
                return <button key={item} onClick={() => props.setSelectNum(item)} className={props.selectNum === item ? `${Styles.btn} ${Styles.active}` : Styles.btn}>{item}</button>
            })}
        </div>
    )
}

export default Buttons;