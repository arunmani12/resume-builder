import classes from "./Progress.module.css";
import type { UserObject} from "../types/progress";


interface TypeInputFieldHolder{
    style:React.CSSProperties
    friendlyName:string
    name:string
    setValue:(name:string,value:string)=>void
    value:string
}

const InputFieldHolder = ({style,friendlyName,name,setValue,value}:TypeInputFieldHolder): JSX.Element => {
    return (
      <div style={style}>
        <label>{friendlyName}</label>
        <input
          required
          onChange={(e) => setValue(name,e.target.value)}
          value={value}
        />
      </div>
    );
}

const About = ({individualValue,userData}:{individualValue:(value:string,content:string)=>void,userData:UserObject}) => {

  const setValue = (name:string,value:string):void =>{
    individualValue(name,value)
  }  

  return (
    <div>
      <form>
        <div style={{ marginTop: "1.5rem" }} className={classes["flex-wrapper"]}>
            <InputFieldHolder style={{width:'48%'}} friendlyName='First Name' name="firstName" value={userData.firstName} setValue={setValue}/>
            <InputFieldHolder style={{width:'48%'}} friendlyName='Last Name' name="lastName" value={userData.lastName} setValue={setValue}/>
        </div>
        <InputFieldHolder style={{width:'100%',marginTop:'1.5rem'}} friendlyName='Position' value={userData.position} setValue={setValue} name="position"/>
        <label style={{marginTop:'40px'}}>About</label>
        <textarea style={{width:'100%'}} value={userData.about} onChange={(e) => setValue('about',e.target.value)}/>
      </form>
    </div>
  )
}

export default About