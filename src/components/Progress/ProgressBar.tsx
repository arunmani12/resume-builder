import classes from "./Progress.module.css";

interface Bar {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ currentStep, totalStep, setStep }: Bar):JSX.Element => {
  let percent: string = 100 * (currentStep / totalStep) + "%";

  const leftClickHandler = ():void =>{
    if(currentStep>1) {
    setStep((prv) => prv - 1)
  }}

  const rightClickHandler = ():void =>{
    if(currentStep<=7) {
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
