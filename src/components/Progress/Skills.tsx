import classes from "./Progress.module.css";
import { UserSkills } from "../types/progress";
import { useState } from "react";
import BtnBh from "../util/Buttons/BtnWhite/BtnBh";


const Model = ({addSkill}:{addSkill:(skill:string,Level:string)=>void}): JSX.Element => {

  const [skill,setSkill] = useState<UserSkills>({
    skill:'',
    score:'1'
  }) 

  const onChanceHandler = (e: React.ChangeEvent<HTMLInputElement>,type:"skill" | "score"):void =>{
     if(type === "skill"){
      setSkill({
        skill:e.target.value,
        score:skill.score
      })
     }
     if(type==="score"){
      setSkill({
        skill:skill.skill,
        score:e.target.value
      })
     }
  }

  const onClickHandler = () =>{
    let userSkill = skill.skill
    let userScore = skill.score
    if(userSkill.length <=0 || userScore.length<=0) return
    addSkill(userSkill,userScore)
    setSkill({score:'',skill:''})
  }

  return (
    <div className={classes["skill-model-holder"]}>
      <div className={classes["skill-model"]}>
        <form>
          <label>Skill</label>
          <input type="text" style={{marginBottom:'1rem'}} value={skill?.skill} onChange={(e)=>onChanceHandler(e,"skill")}/>
          <label>Level</label>
          <input type="range" min={1} max={10} value={skill?.score} style={{marginBottom:'1rem'}} onChange={(e)=>onChanceHandler(e,"score")}/>
          <BtnBh text="submit" onClick={onClickHandler}/>
        </form>
      </div>
    </div>
  );
};

const Skills = ({setSkills,skills}:{setSkills:(skills: UserSkills[])=>void,skills:UserSkills[]}): JSX.Element => {

  const [isModelOpen,setModelOpen] = useState<Boolean>(false)


  const addSkill = (skill:string,Level:string):void =>{
     setSkills([...skills,{skill,score:Level}])
     setModelOpen(false)
  }


  return (
    <div>
      <div className={classes["add-skills"]} onClick={()=>setModelOpen(true)}>Add Skills +</div>
      {isModelOpen && <Model addSkill={addSkill}/>}
      <div className={classes["skill-holder"]}>
      {
        skills.map((d,i)=>(
          <div className={classes.skill}>
            <p>{d.skill}</p>
            <p className={classes["skill-score"]}>{d.score}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Skills;
