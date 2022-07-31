import BtnBh from '../util/Buttons/BtnWhite/BtnBh'
import classes from './Main.module.css'

const MainSection = ():JSX.Element => {
  return (
    <div className={classes.main}>
      <h3>Create awesome resumes that seeks everyone's attention &#128525;</h3>
      <p>Still waiting ka , Just give a try</p>
      <BtnBh text='Create'/>
    </div>
  )
}

export default MainSection