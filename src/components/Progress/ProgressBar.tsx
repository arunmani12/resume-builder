import classes from "./Progress.module.css";
import { showErrModel } from "../../global";
import { UserObject } from "../types/progress";


interface Bar {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalStep: number;
  currentStep: number;
  userData:UserObject
}

const ProgressBar = ({ currentStep, totalStep, userData, setStep }: Bar):JSX.Element => {
  let percent: string = 100 * (currentStep / totalStep) + "%";

  const leftClickHandler = ():void =>{
    if(currentStep>1) {
    setStep((prv) => prv - 1)
  }}

  const rightClickHandler = ():void =>{
    if(currentStep<=7) {
    if(currentStep===3){
      if(userData.skills.length<3){
        showErrModel("Please atleast Enter 3 Skills")
        return
      }
    }
    if(currentStep===4){
      if(userData.education.length<2){
        showErrModel("Please atleast Enter 2 education status")
        return
      }
    }
    if(currentStep===5){
      if(userData.experience.length<1){
        showErrModel("Please atleast Enter 1 experience status")
        return
      }
    }
    if(currentStep===6){
      if(userData.project.length<2){
        showErrModel("Please atleast Enter 2 project status")
        return
      }
    }
    setStep((prv) => prv + 1)
  }}

  return (
    <div className={classes["progress-bar-holder"]}>
      <div className={classes.bar}>
        <div
          style={{
            width: percent,
            height: "100%",
            backgroundColor: "blue",
            transition: "all 500ms",
          }}
        ></div>
      </div>
      <div style={{ display: "flex" }}>
          <i style={{
            marginLeft: '20px',
            fontSize: '44px',
            color: '#17b486'
          }} onClick={leftClickHandler} className="fa-solid fa-backward"></i>
          <i style={{
              marginLeft: '20px',
              fontSize: '44px',
              color: '#17b486'
          }} onClick={rightClickHandler} className="fa-solid fa-forward"></i>
      </div>
    </div>
  );
};

export default ProgressBar;
