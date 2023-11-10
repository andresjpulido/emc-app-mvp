import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import "./footer.css";

export default function Footer() {
  const history = useNavigate();
  const { user, setUser } = React.useContext(AppContext);

  if (!user || user.issurveypending) return <div></div>;
  
  const goTo = (path: string) => {
    history(path);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    goTo("/habit");
  };
  return (
    <nav className="nav">
      <ul className="ul-nav">
        <li>
          <button className="button-nav" onClick={()=>goTo("/profile")}> 
            Profile
          </button>
        </li>
        <li>
          <button className="button-nav" onClick={()=>goTo("/habit")}> 
            Journey
          </button>
        </li>
        <li>
          <button className="button-nav" onClick={()=>goTo("/resources")}> 
            Resources
          </button>
        </li>
      </ul>
    </nav>
  );
}
