import classes from "./BtnBh.module.css"

const BtnBh = ({onClick,children}:{onClick?:()=>void,children:JSX.Element | string}):JSX.Element => {
  return (
    <button type="button" onClick={onClick} className={`${classes["custom-btn"]} ${classes["btn-bh"]}`}>{children}</button>
  )
}

export default BtnBh