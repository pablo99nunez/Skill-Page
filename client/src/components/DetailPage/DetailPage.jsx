import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import { motion } from "framer-motion";
import close from "../../assets/icons/close.svg";
import useUser from "../../hooks/useUser";
import runFast from "../../assets/icons/run-fast.svg";
import run from "../../assets/icons/run.svg";
import walk from "../../assets/icons/walk.svg";
import baby from "../../assets/icons/baby.svg";
import axios from "axios";
import Avatar from "../Avatar/Avatar";
import { useParams } from "react-router";
import useProjects from "../../hooks/useProjects";
import Loading from "../Loading/Loading";

export default function DetailPage({ skill, setOpen }) {
  const { username } = useParams();
  const user = useUser(username);
  const [skillData, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [peopleWithSameSkill, setPeopleWithSameSkill] = useState([]);
  const projects = useProjects(user, skill);

  useEffect(() => {
    if (user) {
      setSkill(
        user.strengths.find((e) => {
          console.log(e.name, skill);
          return e.name.includes(skill);
        })
      );
    }
  }, [user]);
  useEffect(() => {
    if (skillData) {
      axios
        .post("https://search.torre.co/people/_search", {
          "skill/role": {
            text: skill,
            proficiency: skillData?.proficiency,
          },
        })
        .then((e) => {
          setPeopleWithSameSkill(e.data.results.slice(0, 2));
          setLoading(false);
        })
        .catch((e) =>
          console.log(
            "hubo un error buscando personas con la misma habilidad",
            e
          )
        );
    }
  }, [skillData]);
  function renderProperInfo() {
    if (skillData) {
      console.log(skillData?.proficiency);
      switch (skillData.proficiency) {
        case "expert":
          return (
            <>
              <img src={runFast} alt="expert" />
              <h2>Master / Influencer</h2>
            </>
          );
        case "proficient":
          return (
            <>
              <img src={run} alt="Proficient" />
              <h2>Proficient</h2>
            </>
          );
        case "novice":
          return (
            <>
              <img src={walk} alt="novice" />
              <h2>Novice</h2>
            </>
          );
        case "no-experience-interested":
          return (
            <>
              <img src={baby} alt="no experience" />
              <h2>No experience but interested</h2>
            </>
          );
      }
    }
  }
  return (
    <motion.div
      className="detail"
      initial={{ y: 1000 }}
      animate={{
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.1,
        },
      }}
      exit={{
        y: 1000,
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
      {!loading ? (
        <>
          <div className="skill-info">
            <div className="skill-info-item">
              <h3>Proficiency: </h3>
              {renderProperInfo()}
            </div>
            <div className="skill-info-item">
              <h3>Recommendations: </h3>
              <h2>{skillData?.recommendations}</h2>
            </div>
          </div>
          {!!projects.length && (
            <div className="skill-info">
              <h3>{user?.person.name.split(" ")[0]}'s related projects:</h3>
              {projects?.map((e, i) => {
                return (
                  <div>
                    <h2 style={{ color: "var(--color-primary)" }}>{e.name}</h2>
                    <h3>{e.organizations[0].name}</h3>
                    <h3>{`${e.fromMonth} ${e.fromYear} - ${
                      e.toYear ? e.toMonth + " " + e.toYear : "Present"
                    }`}</h3>
                  </div>
                );
              })}
            </div>
          )}
          <div className="skill-info">
            <h3>Others with the same skills:</h3>
            {peopleWithSameSkill.map((e, i) => {
              return (
                <div
                  className="skill-person"
                  onClick={() =>
                    (window.location = "https://torre.co/" + e.username)
                  }
                  key={i}
                >
                  <Avatar
                    size={"4rem"}
                    color="var(--color-primary)"
                    src={e.picture}
                  ></Avatar>
                  <div>
                    <h2>{e.name}</h2>
                    <h3>{e.professionalHeadline}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <Loading></Loading>
      )}
    </motion.div>
  );
}
