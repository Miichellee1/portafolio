export default function Skills({ habilidades = [] }) {
  return (
    <section id="habilidades" className="seccion" aria-labelledby="t-hab">
      <h2 id="t-hab">Mis habilidades</h2>
      <ul className="list-group list-group-flush">
        {habilidades.map((h) => (
          <li className="list-group-item" key={h}>{h}</li>
        ))}
      </ul>
    </section>
  )
}
