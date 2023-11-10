import { useNavigate } from "react-router-dom";

export default function Game() {
  const history = useNavigate();

  const goTo = (path: string) => {
    history(path);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    goTo("/habit");
  };

  return (
    <section className="section-page">
      <img src="/map.jpeg" height="200px"></img>
      <ul>
        <li>show people in the group</li>
        <li>show elements in the path</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button onClick={handlesubmit}>habit</button>
    </section>
  );
}
