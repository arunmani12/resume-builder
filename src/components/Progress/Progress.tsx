import React, { useState } from "react";
import Address from "./Address";
import classes from "./Progress.module.css";
import ProgressBar from "./ProgressBar";
import type {
  UserAddress,
  UserObject,
  UserSkills,
  UserEducation,
  UserExperience
} from "../types/progress";
import Skills from "./Skills";
import Education from "./Education";
import About from "./About";
import Resume from "./Resume";
import Experience from "./Experience";


const Progress = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<UserObject>({
    address: [],
    skills: [],
    education: [],
    experience:[],
    about: "",
    firstName: "",
    position: "",
    lastName: "",
  });

  
  console.log(userData)

  const setAdress = (Address: UserAddress[]): void => {
    setUserData((prv) => {
      return { ...prv, address: Address };
    });
  };

  const setSkills = (skills: UserSkills[]): void => {
    setUserData((prv) => {
      return { ...prv, skills: skills };
    });
  };

  const setEducation = (education: UserEducation[]): void => {
    console.log(education);
    setUserData((prv) => {
      return { ...prv, education: education };
    });
  };

  const setUserExperience = (experience:UserExperience[]):void =>{
    setUserData((prv) => {
      return { ...prv, experience: experience };
    });
  }

  const individualValue = (value: string, content: string): void => {
    setUserData((prv) => {
      return { ...prv, [value]: content };
    });
  };

  console.log(userData)

  return (
    <div className={classes.progress}>
     {step!==7 &&<> <div className={classes["progress-content"]}>
        {step === 1 && (
          <About individualValue={individualValue} userData={userData} />
        )}
        {step === 2 && (
          <Address address={userData.address} setAddress={setAdress} />
        )}

        {step === 3 && (
          <Skills setSkills={setSkills} skills={userData.skills} />
        )}

        {step === 4 && (
          <Education
            setEducation={setEducation}
            education={userData.education}
          />
        )}
        {
          step===5 && (
            <Experience setUserExperience={setUserExperience} experience={userData.experience}/>
          )
        }
        {/* progress Bar */}
        <ProgressBar currentStep={step} setStep={setStep} totalStep={6} />
      </div>
       </>
      }
      {step===7 && <Resume/>}
    </div>
  );
};

export default Progress;
