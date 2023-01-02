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
      setSkill({
        skill:e.target.value,
        score:skill.score
      })
  }

  const onClickScoreHandler = (score:number) =>{
    setSkill({
      skill:skill.skill,
      score:score.toString()
    })
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
    <div className={classes["skill-model-holder"]} style={{zIndex:11}}>
      <div className={classes["skill-model"]}>
        <p className={classes.cross} onClick={()=>setModelOpen(false)}>&#10005;</p>
        <form>
          <label>Skill</label>
          <input type="text" style={{marginBottom:'1rem'}} value={skill?.skill} onChange={(e)=>onChanceHandler(e,"skill")}/>
          <label>Level</label>
          {/* <input type="range" min={1} max={10} value={skill?.score} style={{marginBottom:'1rem'}} onChange={(e)=>onChanceHandler(e,"score")}/> */}
          <div className={classes.skillBtnHolder}>
          {[1,2,3,4,5,6,7,8,9,10].map(
            d=>
            <div style={{
              border:d.toString() === skill.score ? '1px solid grey' :'none',
              boxSizing:'border-box'
            }} 
            onClick={()=>onClickScoreHandler(d)} className={classes.skillbtn} key={d}>
              {d}
            </div>
            )
          }
          </div>
          <button type="button" className={classes.skillbtnSubmit} onClick={onClickHandler}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const Skills = ({setObject,skills}:{setObject:(name:Name,data:Data)=>void, skills:UserSkills[]}): JSX.Element => {

  const [isModelOpen,setModelOpen] = useState<Boolean>(false)


  const addSkill = (skill:string,Level:string):void =>{
     if(skills.length===5){
      showErrModel("skill more than 5 currently not allowed :)")
      return
     }
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
          <div style={{background:'white',margin:'1.5rem 1rem 0 0'}}>
            <h3 style={{margin:'1rem 0 0 0.5rem',fontWeight:'400',color:'#17b486'}}>{d.skill}</h3>
             <div key={i} style={{position:'relative',zIndex:10,overflowX:'hidden',width:'200px',height:'5px'}} className={classes.skill}>
            <div style={{
              position:'absolute',
              top:0,
              left:0,
              width:`${+d.score * 10}%`,
              background:'#17b486',
              height:'100%',
              zIndex:2
            }}>
            </div>
            {/* <p style={{zIndex:'10'}}>{d.skill}</p> */}
            {/* <p className={classes["skill-score"]}>{d.score}</p> */}
          </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Skills;
