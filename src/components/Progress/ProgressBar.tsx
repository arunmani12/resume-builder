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
        <div
          className={classes.circle}
          onClick={() => setStep((prv) => prv - 1)}
        ></div>
        <div
          className={classes.circle}
          onClick={() => setStep((prv) => prv + 1)}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
