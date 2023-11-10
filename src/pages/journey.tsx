import "./journey.css";

export default function Habit() {
  const habitList = [
    {
      name: "Set a priority list for your today's activities",
    },
  ].map((habit) => <li key="1">{habit.name}</li>);

  return (
    <section className="section-page">
      <header className="header-habit">
        <h2></h2>
        <div> Day #4</div>
      </header>

      <h3>My journey</h3>
      <p>My new habits:</p>
      <ul>{habitList}</ul>

      <p>Diary</p>
      <ul>
        <li className="li-journey">
          <h4>Day #1</h4>
          <p>this is a video about ....</p>
        </li>
        <li className="li-journey">
          <h4>Day #2</h4>
          <div className="center">
            <article>
              <img src="/manu-video.png" alt="" className="habit-video" />
              <p>this is a video about ....</p>
            </article>
          </div>
        </li>
        <li className="li-journey">
          <h4>Day #3</h4>
          <div className="center">
            <article className="habit-message">
              <p>this is a message ....</p>
              <footer>Lisa</footer>
            </article>
          </div>
        </li>
        <li className="li-journey">
          <h4>Day #4</h4>
          <div className="center">
            <article className="habit-quotation">
              <p>That's one small step for a man, a giant leap for mankind.</p>
              <footer>Neil Armstrong</footer>
            </article>
          </div>
        </li>
      </ul>
    </section>
  );
}
