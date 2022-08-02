import React from "react";
import classes from "./Progress.module.css";
import { UserObject } from "../types/progress";

const ResumeContent = ({
  userData,
  componentRef,
}: {
  userData: UserObject;
  componentRef: React.MutableRefObject<null>;
}) => {
  return (
    <div className={classes.resume} ref={componentRef}>
      <div className={classes["resume-header"]}>
        <div className={classes.resumelogo}>
          <p>
            {userData.firstName[0]}/{userData.lastName[0]}
          </p>
        </div>
        <div className={classes["resume-header-content"]}>
          <p style={{ marginBottom: "-5px" }}>{userData.firstName}</p>
          <p style={{ marginBottom: "-10px" }}>{userData.lastName}</p>
          <hr style={{ width: "100%" }} />
          <p
            style={{
              marginTop: "-10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
            className={classes.resumelogopos}
          >
            {userData.position}
          </p>
        </div>
      </div>

      <div className={classes["resume-wrapper"]}>
        <div className={classes["resume-left"]}>
          <div
            style={{
              backgroundColor: "#f1f1f1",
              boxSizing: "border-box",
              padding: "10px 40px",
            }}
          >
            {userData.address.map((d, i) => (
              <p className={classes["font-text"]} key={i}>
                <i
                  style={{ marginRight: "10px" }}
                  className="fa-solid fa-phone"
                ></i>
                {d.value}
              </p>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              boxSizing: "border-box",
              padding: "10px 40px",
            }}
          >
            <h3 style={{ color: "#303e54", fontWeight: "600" }}>S K I L L S</h3>
            {userData.skills.map((d, i) => (
              <div key={i} className={classes.skillBar}>
                <div className={classes.barholder}>
                  <div
                    style={{
                      width: +d.score * 10 + "%",
                      height: "100%",
                      background: "#1d3251",
                    }}
                  ></div>
                </div>
                <p>{d.skill}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              boxSizing: "border-box",
              padding: "10px 40px",
            }}
          >
            <h3
              style={{
                color: "#303e54",
                fontWeight: "600",
                marginTop: "-15px",
              }}
            >
              E D U C A T I O N
            </h3>

            {userData.education.map((d, i) => (
              <div key={i} className={classes.educationwrapper}>
                <p style={{ color: "#1d3b5f", fontWeight: "500" }}>
                  {d.degree}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    fontFamily: "monospace",
                  }}
                >
                  {d.educationInstitue}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "monospace",
                  }}
                >
                  {d.startYear} - {d.endYear}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes["resume-right"]}>
          {/* <div className={classes.backBtn} onClick={()=>setStep((prv)=>prv-1)}><i className="fa-solid fa-backward"></i>Back</div> */}

          <div>
            <h3 style={{ color: "#303e54", fontWeight: "600" }}>
              A B O U T &nbsp; M E
            </h3>
            <p style={{ fontWeight: "400", fontFamily: "cursive" }}>
              {userData.about}
            </p>
            <hr />
            <h3 style={{ color: "#303e54", fontWeight: "600" }}>
              E X P E R I E N C E
            </h3>
            {userData.experience.map((d, i) => (
              <div className={classes.educationwrapper} key={i}>
                <p
                  style={{
                    color: "#1d3b5f",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {d.companyName}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "16px",
                    fontFamily: "monospace",
                  }}
                >
                  {d.posisitonName}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "monospace",
                  }}
                >
                  {d.durination}
                </p>
              </div>
            ))}
            <hr />
            <h3 style={{ color: "#303e54", fontWeight: "600" }}>
              P R O J E C T S
            </h3>
            {userData.project.map((d, i) => (
              <div className={classes.educationwrapper} key={i}>
                <p
                  style={{
                    color: "#1d3b5f",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {d.name}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "16px",
                    fontFamily: "monospace",
                  }}
                >
                  {d.about}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
