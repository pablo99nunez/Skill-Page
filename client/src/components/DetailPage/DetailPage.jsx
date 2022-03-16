import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import { motion } from "framer-motion";
import close from "../../assets/icons/close.svg";
import useUser from "../../hooks/useUser";
import runFast from "../../assets/icons/run-fast.svg";
import run from "../../assets/icons/run.svg";
import walk from "../../assets/icons/walk.svg";
import baby from "../../assets/icons/baby.svg";

export default function DetailPage({ skill, setOpen }) {
  const user = useUser("pablo99nunez");
  const [skillData, setSkill] = useState(null);
  useEffect(() => {
    if (user) setSkill(user.strengths.find((e) => e.name.includes(skill)));
  }, [user]);
  return (
    <motion.div
      className="detail"
      initial={{ y: 2000 }}
      animate={{
        y: 0,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      }}
      exit={{
        y: 2000,
      }}
    >
      <header>
        <img
          src={close}
          onClick={() => {
            setOpen(false);
          }}
          alt="exit"
        />
        <h1>{skill}</h1>
      </header>
      {skillData ? (
        <div className="skill-info">
          <div className="skill-info-item">
            <h3>Proficiency: </h3>
            {
              {
                expert: (
                  <>
                    <img src={runFast} alt="expert" />
                    <h2>Master / Influencer</h2>
                  </>
                ),
                proficient: (
                  <>
                    <img src={run} alt="Proficient" />
                    <h2>Proficient</h2>
                  </>
                ),
                novice: (
                  <>
                    <img src={walk} alt="novice" />
                    <h2>Novice</h2>
                  </>
                ),
                "no-experience-interested": (
                  <>
                    <img src={baby} alt="no experience" />
                    <h2>No experience but interested</h2>
                  </>
                ),
              }[skillData.proficiency]
            }
          </div>
          <div className="skill-info-item">
            <h3>Recommendations: </h3>
            <h2>{skillData.recommendations}</h2>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </motion.div>
  );
}
