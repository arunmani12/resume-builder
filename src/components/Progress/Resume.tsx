import React,{useRef,useState} from 'react'
import classes from "./Progress.module.css";
import data from './Object.json'
import {UserObject} from '../types/progress'
import { useReactToPrint } from 'react-to-print';
import ResumeContent from './ResumeContent';
import BlackAndWhiteResume from './BlackAndWhiteResume';

const Resume = ({userData,setStep}:{userData:UserObject,setStep: React.Dispatch<React.SetStateAction<number>>}) => {

  const [currentTmp,setcurrentTmp] = useState(0)

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:userData.firstName + ' ' + userData.lastName
  });
  
  return (
    <div className={classes['progress-content']} style={{width:'95%',flexDirection:'row'}}>
        <div className={classes['resume-holder']}>
          <div style={{width:'80%',margin:'1% auto'}}>
          {currentTmp===0 && <ResumeContent userData={userData} componentRef={componentRef}/>}
          {currentTmp===1 && <BlackAndWhiteResume userData={userData} componentRef={componentRef}/>}
          </div>
        </div>
        <div className={classes.resumeRight}>
            <div className={classes.templateholder}>
              {
                ['./tmp2.jpg','./tmp1.jpg',''].map((d,i)=><div key={d} className={classes.resumeselector}>
                  <img onClick={()=>setcurrentTmp(i)} style={{width:'95%',border:(d!=='' && currentTmp===i) ? '2px solid #17b486' : ''}} src={d}></img>
                </div>)
              }
            </div>
            <div className={classes.btnholder}>
               <div className={classes.downloadBtn} onClick={handlePrint} ><i className="fa-solid fa-download"></i></div> 
               <div className={classes.backBtn} onClick={()=>setStep(prv=>prv-1)}><i className="fa-solid fa-backward"></i>Back</div>
            </div>
          </div>
    </div>
  )
}

export default Resume