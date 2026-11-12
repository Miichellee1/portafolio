import { validarContacto } from '../validacion.js'

describe('validarContacto', () => {
  it('acepta datos válidos', () => {
    expect(validarContacto({ nombre: 'Michelle', correo: 'a@b.cl', mensaje: 'Hola, quiero contactarte' })).toEqual({})
  })
  it('rechaza datos inválidos', () => {
    const e = validarContacto({ nombre: 'Mi', correo: 'x', mensaje: 'corto' })
    expect(Object.keys(e)).toEqual(['nombre', 'correo', 'mensaje'])
  })
  it('maneja valores vacíos', () => {
    expect(Object.keys(validarContacto({}))).toHaveLength(3)
  })
})
