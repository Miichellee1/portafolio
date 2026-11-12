const ENLACES = [
  ['sobre-mi', 'Sobre mí'], ['habilidades', 'Habilidades'], ['portafolio', 'Portafolio'],
  ['objetivos', 'Objetivos'], ['contacto', 'Contacto']
]

export default function Header({ nombre, titulo }) {
  return (
    <header className="cabecera text-center py-4">
      <h1>{nombre}</h1>
      <p>{titulo}</p>
      <nav aria-label="Navegación principal">
        <ul className="nav justify-content-center">
          {ENLACES.map(([id, texto]) => (
            <li className="nav-item" key={id}>
              <a className="nav-link" href={`#${id}`}>{texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
