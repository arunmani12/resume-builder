import classes from "./Progress.module.css";

interface Bar {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ currentStep, totalStep, setStep }: Bar):JSX.Element => {
  let percent: string = 100 * (currentStep / totalStep) + "%";

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
          }} onClick={() => setStep((prv) => prv - 1)} className="fa-solid fa-backward"></i>
          <i style={{
              marginLeft: '20px',
              fontSize: '44px',
              color: '#17b486'
          }} onClick={() => setStep((prv) => prv + 1)} className="fa-solid fa-forward"></i>
      </div>
    </div>
  );
};

export default ProgressBar;
