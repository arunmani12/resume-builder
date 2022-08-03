import React,{useRef} from 'react'
import classes from "./Progress.module.css";
import data from './Object.json'
import {UserObject} from '../types/progress'
import { useReactToPrint } from 'react-to-print';
import ResumeContent from './ResumeContent';


const Resume = ({userData,setStep}:{userData:UserObject,setStep: React.Dispatch<React.SetStateAction<number>>}) => {

  userData = data

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:userData.firstName + ' ' + userData.lastName
  });
  
  return (
    <div className={classes['progress-content']} style={{width:'95%',flexDirection:'row'}}>
        <div className={classes['resume-holder']}>
          <div style={{width:'80%',margin:'1% auto'}}>
          <ResumeContent userData={userData} componentRef={componentRef}/>
          </div>
           {/* <div className={classes.backBtn} onClick={handlePrint} ClassName="fa-solid fa-backward">Back</div> */}

           <div className={classes.backBtn} onClick={()=>setStep(prv=>prv-1)}><i className="fa-solid fa-backward"></i>Back</div>
           <div className={classes.downloadBtn} onClick={handlePrint} ><i className="fa-solid fa-download"></i></div>
        </div>
    </div>
  )
}

export default Resume