import classes from "./Progress.module.css";
import { UserEducation,Data,Name } from "../types/progress";
import { useState } from "react";
import BtnBh from "../util/Buttons/BtnWhite/BtnBh";
import { showErrModel } from "../../global";


const Model = ({
  addEducation,
  setModelOpen
}: {
  setModelOpen:React.Dispatch<React.SetStateAction<Boolean>>
  addEducation: ({
    educationInstitue,
    degree,
    startYear,
    endYear,
  }: UserEducation,
 ) => void;
}): JSX.Element => {


  const [edu, setEdu] = useState<UserEducation>({
    educationInstitue: "",
    startYear: "",
    endYear: "",
    degree: "",
  });

  type Parameter = "educationInstitue" | "startYear" | "endYear" | "degree";

  const onChanceHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: Parameter
  ): void => {
    setEdu(prv=>{
        return {
            ...prv,
            [type] : e.target.value
        }
    })
  };

    const onClickHandler = () =>{
    const isEmpty = Object.values(edu).some(d=>d === null || d ==="")
    if(isEmpty){
      showErrModel("Please enter all the fields")
      return
    }
     addEducation(edu)
      setEdu({
        educationInstitue: "",
        startYear: "",
        endYear: "",
        degree: "",
      })
    }


  return (
    <div className={classes["skill-model-holder"]}>
      <div className={classes["skill-model"]} style={{marginTop:'3rem'}}>
      <p className={classes.cross} onClick={()=>setModelOpen(false)}>&#10005;</p>
        <form>
          <label>Education Institue</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={edu.educationInstitue}
            onChange={(e) => onChanceHandler(e, "educationInstitue")}
          />
          <label>Degree</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={edu.degree}
            onChange={(e) => onChanceHandler(e, "degree")}
          />
          <label>Start Year</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={edu.startYear}
            onChange={(e) => onChanceHandler(e, "startYear")}
          />
          <label>End Year</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={edu.endYear}
            onChange={(e) => onChanceHandler(e, "endYear")}
          />
          <BtnBh onClick={onClickHandler} >Submit</BtnBh>
        </form>
      </div>
    </div>
  );
};

const Education = ({
  setObject,
  education,
}: {
  setObject: (name:Name,data:Data) => void;
  education: UserEducation[];
}): JSX.Element => {
  const [isModelOpen, setModelOpen] = useState<Boolean>(false);

  const addEducation = ({
    educationInstitue,
    degree,
    startYear,
    endYear,
  }: UserEducation): void => {
    if(education.length >=3){
      showErrModel("Sorry only 3 is allowed")
      return
    }
    setObject('education',[
      ...education,
      { educationInstitue, degree, startYear, endYear },
    ]);
    setModelOpen(false);
  };


  return (
    <div style={{height:'83%'}}>
      <div className={classes["add-skills"]} onClick={() => setModelOpen(true)}>
        Add Education +
      </div>
      {isModelOpen && <Model setModelOpen={setModelOpen} addEducation={addEducation} />}
      <div className={classes["education-holder"]}>
        {
        education.map((d,i)=>(
          <div key={i} className={classes.education}>
            <p>{d.degree}</p>
            <p>{d.educationInstitue}</p>
            <p>{d.startYear}-{d.endYear}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Education;
