import React, { useState } from "react";

import classes from "./Progress.module.css";
import type { UserExperience } from "../types/progress";
import BtnBh from "../util/Buttons/BtnWhite/BtnBh";

interface ExperienceProps {
  experience: UserExperience[];
  setUserExperience: (experience: UserExperience[]) => void;
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
          <label>Posisiton</label>
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

          <label>Durination</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={experience.durination}
            onChange={(e) => onChanceHandler(e, "durination")}
          />
          <BtnBh text="submit" onClick={onClickHandler} />
        </form>
      </div>
    </div>
  );
};

const Experience = ({
  setUserExperience,
  experience,
}: ExperienceProps): JSX.Element => {
  const [modelOpen, setModelOpen] = useState<Boolean>(false);

  const addExperience = ({
    posisitonName,
    companyName,
    durination,
  }: UserExperience): void => {
    setUserExperience([
      ...experience,
      { posisitonName, companyName, durination },
    ]);
    setModelOpen(false);
  };

  return (
    <div>
      {modelOpen && <Model addExperience={addExperience} setModelOpen={setModelOpen} />}
      <div className={classes["add-skills"]} onClick={()=>setModelOpen(true)}>Add Experience +</div>

      <div className={classes["education-holder"]}>
        {
        experience.map((d,i)=>(
          <div key={i} className={classes.education}>
            <p>{d.companyName}</p>
            <p>{d.posisitonName}</p>
            <p>{d.durination}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Experience;
