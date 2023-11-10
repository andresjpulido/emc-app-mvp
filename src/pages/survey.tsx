import React from "react";
import questions from "../survey.json";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import "./survey.css";

export default function Survey() {
  const { user, setuser } = React.useContext(AppContext);

  const history = useNavigate();

  const datasurvey = questions.map((question, index) => (
    <li key={index} className="li-survey">
      <label className="label-survey">{question.question}</label>
      <input type="text" className="input"></input>
    </li>
  ));

  const goTo = (path: string) => {
    history(path);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setuser({ ...user, issurveypending: false });
    goTo("/game");
  };

  return (
    <section className="section-page center">
      <form className="survey-form" onSubmit={handlesubmit}>
        <p className="p-survey">
          Let us know some pieces of information about you.
        </p>
        <ul className="ul-survey"> {datasurvey}</ul>
        <input type="submit" className="button"></input>
      </form>
    </section>
  );
}
