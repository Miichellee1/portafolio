import { useState } from 'react'
import { validarContacto } from '../validacion.js'

export default function ContactForm() {
  const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    const errs = validarContacto(datos)
    setErrores(errs)
    setEnviado(Object.keys(errs).length === 0)
  }

  const campo = (name, label, tipo = 'text') => {
    const props = {
      id: name, name, value: datos[name], onChange: cambiar,
      className: `form-control ${errores[name] ? 'is-invalid' : ''}`
    }
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        {tipo === 'textarea' ? <textarea rows="4" {...props} /> : <input type={tipo} {...props} />}
        {errores[name] && <div className="invalid-feedback">{errores[name]}</div>}
      </div>
    )
  }

  return (
    <section id="contacto" className="seccion" aria-labelledby="t-cont">
      <h2 id="t-cont">Contacto</h2>
      <p>Correo: mich.serrano@duocuc.cl · GitHub: michelle1.github.io</p>
      <form onSubmit={enviar} noValidate>
        {campo('nombre', 'Nombre')}
        {campo('correo', 'Correo', 'email')}
        {campo('mensaje', 'Mensaje', 'textarea')}
        <button type="submit" className="btn btn-dark">Enviar</button>
      </form>
      {enviado && <div role="status" className="alert alert-success mt-3">¡Gracias! Tu mensaje fue validado correctamente.</div>}
    </section>
  )
}
