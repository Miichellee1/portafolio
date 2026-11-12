import { useEffect, useState } from 'react'

// Integración con API REST: repositorios públicos de GitHub
export default function Projects({ usuario }) {
  const [repos, setRepos] = useState([])
  const [estado, setEstado] = useState('cargando')

  useEffect(() => {
    let activo = true
    fetch(`https://api.github.com/users/${usuario}/repos?sort=updated&per_page=6`)
      .then((r) => {
        if (!r.ok) throw new Error('Error en la API')
        return r.json()
      })
      .then((datos) => { if (activo) { setRepos(datos); setEstado('listo') } })
      .catch(() => { if (activo) setEstado('error') })
    return () => { activo = false }
  }, [usuario])

  return (
    <section id="portafolio" className="seccion" aria-labelledby="t-port">
      <h2 id="t-port">Mi Portafolio</h2>
      {estado === 'cargando' && <p role="status">Cargando proyectos...</p>}
      {estado === 'error' && <p role="alert" className="text-danger">No se pudieron cargar los proyectos.</p>}
      {estado === 'listo' && repos.length === 0 && <p>Aún no hay repositorios públicos.</p>}
      <div className="row g-3">
        {repos.map((r) => (
          <article className="col-12 col-md-6" key={r.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">{r.name}</h3>
                <p className="card-text">{r.description || 'Sin descripción'}</p>
                <a href={r.html_url} className="btn btn-outline-primary btn-sm" target="_blank" rel="noreferrer">Ver en GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
