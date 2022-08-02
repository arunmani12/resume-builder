import classes from "./Progress.module.css";
import { UserSkills,Name,Data } from "../types/progress";
import { useState } from "react";
import BtnBh from "../util/Buttons/BtnWhite/BtnBh";
import { showErrModel } from "../../global";


interface ModelProps {
  setModelOpen:React.Dispatch<React.SetStateAction<Boolean>>,
  addSkill:(skill:string,Level:string)=>void,
}

const Model = ({addSkill,setModelOpen}:ModelProps): JSX.Element => {

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
    if(userSkill.length <=0 || userScore.length<=0) {
      showErrModel("please provide skill name")
      return
    }
    addSkill(userSkill,userScore)
    setSkill({score:'',skill:''})
  }

  return (
    <div className={classes["skill-model-holder"]}>
      <div className={classes["skill-model"]}>
        <p className={classes.cross} onClick={()=>setModelOpen(false)}>&#10005;</p>
        <form>
          <label>Skill</label>
          <input type="text" style={{marginBottom:'1rem'}} value={skill?.skill} onChange={(e)=>onChanceHandler(e,"skill")}/>
          <label>Level</label>
          <input type="range" min={1} max={10} value={skill?.score} style={{marginBottom:'1rem'}} onChange={(e)=>onChanceHandler(e,"score")}/>
          <BtnBh onClick={onClickHandler}>Submit</BtnBh>
        </form>
      </div>
    </div>
  );
};

const Skills = ({setObject,skills}:{setObject:(name:Name,data:Data)=>void, skills:UserSkills[]}): JSX.Element => {

  const [isModelOpen,setModelOpen] = useState<Boolean>(false)


  const addSkill = (skill:string,Level:string):void =>{
     setObject('skills',[...skills,{skill,score:Level}])
     setModelOpen(false)
  }


  return (
    <div>
      <div className={classes["add-skills"]} onClick={()=>setModelOpen(true)}>Add Skills +</div>
      {isModelOpen && <Model addSkill={addSkill} setModelOpen={setModelOpen}/>}
      <div className={classes["skill-holder"]}>
      {
        skills.map((d,i)=>(
          <div key={i} className={classes.skill}>
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
