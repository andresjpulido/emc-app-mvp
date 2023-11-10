import React from "react";
import AppContext from "../AppContext";
import "./header.css";

export default function Header() {
  const { user, setUser } = React.useContext(AppContext);

  if (!user || user.issurveypending) return <div></div>;

  return (
    <header className="header">
      <h1 className="header-title">Empowerme Collective</h1>
      <button className="button-menu"> menu</button>
    </header>
  );
}
