import React, { useState } from "react";
import classes from "./Progress.module.css";
import { UserObject,UserAddress } from "../types/progress";
import styles from './tmpone.module.css'
import { useEffect } from "react";


const BlackAndWhiteResume = ({
  userData,
  componentRef,
}: {
  userData: UserObject;
  componentRef: React.MutableRefObject<null>;
}) => {



  const getAddress = ():UserAddress[]=>{
    let city = userData.address.find(d=>d.name==="City")
    let State = userData.address.find(d=>d.name==='State')
  
    const cityState:UserAddress = {
      value:city?.value + '/' + State?.value,
      name:"city/state",
      icon:State?.icon!
    }
  
    const addedCityStateAddress = [...userData.address]
    addedCityStateAddress.push(cityState)
  
    const addressToRender = addedCityStateAddress.filter(d=>{
      return (d.name !== "City" && d.name !== "State" && d.name !== "Full Address")
    })

    return addressToRender
  }


  


  return (
    <div className={classes.resume} ref={componentRef}>
     
     <div className={styles["resume-header-white"]}>
        <h2>{userData.firstName}</h2>
        <h2>{userData.lastName}</h2>
        <h4>{userData.position}</h4>
        <div className={styles.address}>
          {getAddress().map(d=><p style={{fontSize:'14px'}} key={d.icon}>
                <i
                  style={{ marginRight: "5px" }}
                  className={d.icon}
                ></i>
                {d.value}
              </p>)}
        </div>
     </div>

      <div className={classes["resume-wrapper"]}>
        <div className={classes["resume-left"]}>
        <div className={styles["about-me"]}>
          <h2>ABOUT ME</h2>
          <p>{userData.about}</p>
        </div>

         <div className={styles.skills}>
         <h2>SOFTWARE</h2>
         {
          userData.skills.map((d,i)=>(
            <div key={i} className={styles.skillholder}>
            <p>{d.skill}</p>
            <div className={styles.progress}>
              {[1,2,3,4,5].map(f=><div  style={{background : (+d.score/2) >= f ? "rgb(41, 41, 41)" : "rgb(145, 145, 145)" }} className={styles.circle} key={f}></div>)}
            </div>
          </div>
          ))
         }
         </div>
          <div
            style={{
              backgroundColor: "#fff",
              boxSizing: "border-box",
              padding: "10px 10px 10px 40px"
            }}
          >
            <h2
             className={styles.borderheading}
            >
              E D U C A T I O N
            </h2>

            {userData.education.map((d, i) => (
              <div key={i} className={classes.educationwrapper}>
                <p style={{ fontWeight: "500" }}>
                  {d.degree}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    color:'rgb(78, 78, 78)'
                  }}
                >
                  {d.educationInstitue}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    fontWeight: "500",
                    color:"rgb(145, 145, 145)"
                  }}
                >
                  {d.startYear} - {d.endYear}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{padding: "10px 10px 10px 40px"}} className={classes["resume-right"]}>
          <div>
            <h2 style={{marginTop:0}} className={styles.borderheading}>
              E X P E R I E N C E
            </h2>
            {userData.experience.map((d, i) => (
              <div className={classes.educationwrapper} key={i}>
                <p
                  style={{
                    fontWeight: "500",
                    // fontSize: "18px",
                  }}
                >
                  {d.companyName}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    color:'rgb(78, 78, 78)'
                  }}
                >
                  {d.posisitonName}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "monospace",
                    color:"rgb(145, 145, 145)"
                  }}
                >
                  {d.durination}
                </p>
              </div>
            ))}

            <h2 className={styles.borderheading}>
              P R O J E C T S
            </h2>
            {userData.project.map((d, i) => (
              <div className={classes.educationwrapper} key={i}>
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  {d.name}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    color:'rgb(78, 78, 78)'
                  }}
                >
                  {d.about}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackAndWhiteResume;
