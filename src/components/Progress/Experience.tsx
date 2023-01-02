import React, { useState } from "react";
import { showErrModel } from "../../global";
import classes from "./Progress.module.css";
import type { UserExperience ,Name,Data} from "../types/progress";
import BtnBh from "../util/Buttons/BtnWhite/BtnBh";

interface ExperienceProps {
  experience: UserExperience[];
  setObject: (name:Name,data:Data) => void;
}

const Model = ({
  addExperience,
  setModelOpen,
}: {
  setModelOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  addExperience: (parameter: UserExperience) => void;
}): JSX.Element => {
  const [experience, setExperience] = useState<UserExperience>({
    posisitonName: "",
    companyName: "",
    durination: "",
  });

  type Parameter = "posisitonName" | "companyName" | "durination";

  const onChanceHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: Parameter
  ): void => {
    setExperience((prv) => {
      return {
        ...prv,
        [type]: e.target.value,
      };
    });
  };

  const onClickHandler = () => {
    const isEmpty = Object.values(experience).some(d=>d === null || d ==="")
    if(isEmpty){
      showErrModel("Please enter all the fields")
      return
    }
    addExperience(experience);
    setExperience({
      posisitonName: "",
      companyName: "",
      durination: "",
    });
  };

  return (
    <div className={classes["skill-model-holder"]}>
      <div className={classes["skill-model"]} style={{ marginTop: "3rem" }}>
        <p className={classes.cross} onClick={()=>setModelOpen(false)}>&#10005;</p>
        <form>
          <label>Position</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={experience.posisitonName}
            onChange={(e) => onChanceHandler(e, "posisitonName")}
          />

          <label>Company Name</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={experience.companyName}
            onChange={(e) => onChanceHandler(e, "companyName")}
          />

          <label>Duration</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={experience.durination}
            onChange={(e) => onChanceHandler(e, "durination")}
          />
          <BtnBh onClick={onClickHandler} >submit</BtnBh>
        </form>
      </div>
    </div>
  );
};

const Experience = ({
  setObject,
  experience,
}: ExperienceProps): JSX.Element => {
  const [modelOpen, setModelOpen] = useState<Boolean>(false);

  const addExperience = ({
    posisitonName,
    companyName,
    durination,
  }: UserExperience): void => {
    if(experience.length>=3){
      showErrModel("currenty 3 is allowed")
      return
    }
    setObject('experience',[
      ...experience,
      { posisitonName, companyName, durination },
    ]);
    setModelOpen(false);
  };

  return (
    <div style={{height:'83%',lineHeight:'1.5'}}>
      {modelOpen && <Model addExperience={addExperience} setModelOpen={setModelOpen} />}
      <div className={classes["add-skills"]} onClick={()=>setModelOpen(true)}>Add Experience +</div>

      <div className={classes["education-holder"]}>
        {
        experience.map((d,i)=>(
          <div key={i} className={classes.education}>
            <p style={{textTransform:'uppercase',color:'#17b486'}}>{d.companyName}</p>
            <p style={{color:'#777'}}>{d.posisitonName}</p>
            <p style={{fontSize:'14px'}}>{d.durination}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Experience;
