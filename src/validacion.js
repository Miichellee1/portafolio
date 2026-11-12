export function validarContacto({ nombre, correo, mensaje }) {
  const errores = {}
  if (!nombre || nombre.trim().length < 3) errores.nombre = 'El nombre debe tener al menos 3 caracteres.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo || '')) errores.correo = 'Ingresa un correo válido.'
  if (!mensaje || mensaje.trim().length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  return errores
}
