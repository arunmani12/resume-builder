import React,{useState} from 'react'
import type { UserProject } from "../types/progress";
import BtnBh from '../util/Buttons/BtnWhite/BtnBh';
import classes from "./Progress.module.css";


const Model = ({
  addProject,
  setModelOpen,
}: {
  setModelOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  addProject: (parameter: UserProject) => void;
}): JSX.Element => {
  const [project, setProject] = useState<UserProject>({
   name:"",
   about:""
  });

  type Parameter = "name" | "about" ;

  const onChanceHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: Parameter
  ): void => {
    setProject((prv) => {
      return {
        ...prv,
        [type]: e.target.value,
      };
    });
  };

  const onClickHandler = () => {
    addProject(project);
    setProject({
      name:"",
      about:""
    });
  };

  return (
    <div className={classes["skill-model-holder"]}>
      <div className={classes["skill-model"]} style={{ marginTop: "3rem" }}>
        <p className={classes.cross} onClick={()=>setModelOpen(false)}>&#10005;</p>
        <form>
          <label>Project Name</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={project.name}
            onChange={(e) => onChanceHandler(e, "name")}
          />

          <label>About</label>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={project.about}
            onChange={(e) => onChanceHandler(e, "about")}
          />
          <BtnBh text="submit" onClick={onClickHandler} />
        </form>
      </div>
    </div>
  );
};

interface ProjectProps {
  project: UserProject[];
  setProject: (project: UserProject[]) => void;
}

const Project = ({project,setProject}:ProjectProps):JSX.Element => {

  const [modelOpen,setModelOpen] = useState<Boolean>(false)

  const addProject = (projectObject: UserProject): void => {
    setProject([
      ...project,
      { ...projectObject },
    ]);
    setModelOpen(false);
  };

  return (
    <div>
      {modelOpen && <Model addProject={addProject} setModelOpen={setModelOpen}/>}
      <div className={classes["add-skills"]} onClick={()=>setModelOpen(true)}>Add Project +</div>

      <div className={classes["education-holder"]}>
        {
        project.map((d,i)=>(
          <div key={i} className={classes.education}>
            <p>{d.name}</p>
            <p>{d.about}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Project