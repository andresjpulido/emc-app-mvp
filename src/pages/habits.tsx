export default function Habit() {
  const habitList = [].map(() => <li></li>);

  return (
    <section className="section-page">
      <ul>{habitList}</ul>
      <form>
        <label>Habit</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </section>
  );
}
