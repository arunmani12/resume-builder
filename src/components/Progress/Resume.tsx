import React from 'react'
import classes from "./Progress.module.css";
import data from './Object.json'
import {UserObject} from '../types/progress'

const Resume = () => {
  const userData:UserObject = data

    console.log(data)
  return (
    <div className={classes['progress-content']} style={{width:'95%',flexDirection:'row'}}>
        <div className={classes['resume-holder']}>
           <div className={classes.resume}>
            <div className={classes['resume-header']}>
                <div className={classes.resumelogo}>
                    <p>A/M</p>
                </div>
                <div className={classes['resume-header-content']}>
                    <p style={{marginBottom:'-5px'}}>Arun</p>
                    <p style={{marginBottom:'-10px'}}>Mani</p>
                    <hr style={{width:'100%'}}/>
                    <p style={{marginTop:'-10px'}} className={classes.resumelogopos}>F u l l S t a c k D e v e l o p e r ( M E R N )</p>
                </div>
            </div>
            
            <div className={classes['resume-wrapper']}>
            <div className={classes['resume-left']}>
            <div style={{backgroundColor: '#f1f1f1', boxSizing:'border-box', padding: '10px 40px'}}>
            {userData.address.map((d,i)=><p className={classes['font-text']} key={i}><i style={{marginRight:'10px'}} className="fa-solid fa-phone"></i>{d.value}</p>)}
            </div>

             <div  style={{backgroundColor: '#fff', boxSizing:'border-box', padding: '10px 40px'}}>
             <h3 style={{color:'#303e54',fontWeight:'600'}}>S K I L L S</h3>
             {userData.skills.map((d,i)=>(
                <div key={i} className={classes.skillBar}>
                    <div className={classes.barholder}>
                        <div 
                         style={{width:(+d.score*10)+'%',height:'100%',background:'#1d3251'}}
                        ></div>
                    </div>
                    <p>{d.skill}</p>
                </div>
             ))}
             </div>

             <div  style={{backgroundColor: '#fff', boxSizing:'border-box', padding: '10px 40px'}}>
             <h3 style={{color:'#303e54',fontWeight:'600',marginTop:'-15px'}}>E D U C A T I O N</h3>

              {
                userData.education.map((d,i)=>(
                    <div key={i}>
                        <p>{d.degree}</p>
                        <p>{d.educationInstitue}</p>
                        <p>{d.startYear} - {d.endYear}</p>
                    </div>
                ))
              }

              </div>

            </div>
            <div></div>
            </div>
            

           </div>
        </div>
    </div>
  )
}

export default Resume