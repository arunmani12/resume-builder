import BtnBh from '../util/Buttons/BtnWhite/BtnBh'
import classes from './Main.module.css'
import {Link} from "react-router-dom";
import btnstyles from '../util/Buttons/BtnWhite/BtnBh.module.css';

const MainSection = ():JSX.Element => {
  return (
    <div className={classes.main}>
      <h3>Create awesome resumes that seeks everyone's attention &#128525;</h3>
      <p>Still waiting ka , Just give a try</p>
      <Link style={{textAlign:'center',textDecoration:'none',margin:'2rem 0',width:'90px'}} to={"/resume"} className={btnstyles['custom-btn'] + ' ' + btnstyles['btn-bh']}>Create</Link>
    </div>
  )
}

export default MainSection