import React, { useState } from "react";
import Address from "./Address";
import classes from "./Progress.module.css";
import ProgressBar from "./ProgressBar";
import type {
  UserObject,
  Name,
  Data
} from "../types/progress";
import Skills from "./Skills";
import Education from "./Education";
import About from "./About";
import Resume from "./Resume";
import Experience from "./Experience";
import Project from "./Project";


const Progress = ({ setcurrentTmp, currentTmp }: { setcurrentTmp: React.Dispatch<React.SetStateAction<number>>, currentTmp: number}): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<UserObject>({
    address: [],
    skills: [],
    education: [],
    experience: [],
    project: [],
    about: "",
    firstName: "",
    position: "",
    lastName: "",
  });



  const setObject = (name: Name, data: Data) => {
    setUserData((prv) => {
      return { ...prv, [name]: data };
    });
  }


  const individualValue = (value: string, content: string): void => {
    setUserData((prv) => {
      return { ...prv, [value]: content };
    });
  };



  return (
    <div className={classes.progress}>
      {step !== 7 && <> <div className={classes["progress-content"]}>
        {step === 1 && (
          <About individualValue={individualValue} userData={userData} />
        )}
        {step === 2 && (
          <Address address={userData.address} setObject={setObject} />
        )}

        {step === 3 && (
          <Skills setObject={setObject} skills={userData.skills} />
        )}

        {step === 4 && (
          <Education
            setObject={setObject}
            education={userData.education}
          />
        )}
        {
          step === 5 && (
            <Experience setObject={setObject} experience={userData.experience} />
          )
        }
        {
          step === 6 && (
            <Project setObject={setObject} project={userData.project} />
          )
        }
        {/* progress Bar */}
        <ProgressBar userData={userData} currentStep={step} setStep={setStep} totalStep={6} />
      </div>
      </>
      }
      {step === 7 && <Resume setcurrentTmp={setcurrentTmp} currentTmp={currentTmp} setStep={setStep} userData={userData} />}
    </div>
  );
};

export default Progress;
