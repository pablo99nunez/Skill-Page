import React, { useState } from "react";
import "./SkillPage.scss";
import Avatar from "../Avatar/Avatar";
import runFast from "../../assets/icons/run-fast.svg";
import run from "../../assets/icons/run.svg";
import walk from "../../assets/icons/walk.svg";
import baby from "../../assets/icons/baby.svg";
import weight from "../../assets/icons/weight.svg";
import verified from "../../assets/icons/verified.svg";
import Options from "../Options/Options";

export default function SkillPage({ user }) {
  return (
    <div className="skillPage">
      <Avatar size="15rem" src={user?.person.picture}></Avatar>
      <h1>
        {user?.person.name}{" "}
        {user?.person.verified && <img src={verified} alt="verified" />}
      </h1>

      <div className="skills">
        <h2>Skills and interests:</h2>
        <div className="category">
          <div className="title">
            <img src={runFast} alt="" />
            <h3>Master / Influencer</h3>
          </div>
          <Options
            data={user?.strengths
              .filter((e) => e.proficiency === "expert")
              .map((e) => e.name)}
          ></Options>
        </div>
        <div className="category">
          <div className="title">
            <img src={run} alt="" />
            <h3>Proficient</h3>
          </div>
          <Options
            data={user?.strengths
              .filter((e) => e.proficiency === "proficient")
              .map((e) => e.name)}
          ></Options>
        </div>
        <div className="category">
          <div className="title">
            <img src={walk} alt="" />
            <h3>Novice</h3>
          </div>
          <Options
            data={user?.strengths
              .filter((e) => e.proficiency === "novice")
              .map((e) => e.name)}
          ></Options>
        </div>
        <div className="category">
          <div className="title">
            <img src={baby} alt="" />
            <h3>No experience but interested</h3>
          </div>
          <Options
            data={user?.strengths
              .filter((e) => e.proficiency === "no-experience-interested")
              .map((e) => e.name)}
          ></Options>
        </div>
      </div>
    </div>
  );
}
