import classes from "./BtnBh.module.css"

const BtnBh = ({text,onClick}:{text:string,onClick?:()=>void}):JSX.Element => {
  return (
    <button type="button" onClick={onClick} className={`${classes["custom-btn"]} ${classes["btn-bh"]}`}>{text}</button>
  )
}

export default BtnBh