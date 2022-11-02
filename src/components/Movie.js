import "./styles.css";

export default function Room({ id, name, like, toggleStatus }) {
  function handleToggle() {
    toggleStatus(id);
  }

  return (
    <section className="card">
      <h2>Movie: {name}</h2>
      <p>Like: {like ? "👍" : "👎"}</p>
      <button onClick={handleToggle}>Toggle Like</button>
    </section>
  );
}
