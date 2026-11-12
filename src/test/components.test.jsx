import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Header from '../components/Header.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import ContactForm from '../components/ContactForm.jsx'

afterEach(() => vi.restoreAllMocks())

test('Header muestra nombre y navegación', () => {
  render(<Header nombre="Michelle" titulo="Estudiante" />)
  expect(screen.getByRole('heading', { name: 'Michelle' })).toBeInTheDocument()
  expect(screen.getAllByRole('link')).toHaveLength(5)
})

test('Skills renderiza la lista recibida por props', () => {
  render(<Skills habilidades={['Python', 'SQL']} />)
  expect(screen.getAllByRole('listitem')).toHaveLength(2)
})

test('ContactForm muestra errores si está vacío', async () => {
  render(<ContactForm />)
  await userEvent.click(screen.getByRole('button', { name: 'Enviar' }))
  expect(screen.getByText(/al menos 3 caracteres/)).toBeInTheDocument()
})

test('ContactForm acepta datos válidos', async () => {
  render(<ContactForm />)
  await userEvent.type(screen.getByLabelText('Nombre'), 'Michelle')
  await userEvent.type(screen.getByLabelText('Correo'), 'mich@duocuc.cl')
  await userEvent.type(screen.getByLabelText('Mensaje'), 'Hola, me gusta tu portafolio')
  await userEvent.click(screen.getByRole('button', { name: 'Enviar' }))
  expect(screen.getByRole('status')).toHaveTextContent(/validado/)
})

test('Projects carga repos desde la API (mock)', async () => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => [{ id: 1, name: 'repo-uno', description: 'Demo', html_url: 'https://x' }] })
  render(<Projects usuario="michelle1" />)
  await waitFor(() => expect(screen.getByText('repo-uno')).toBeInTheDocument())
})

test('Projects muestra error si la API falla', async () => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false })
  render(<Projects usuario="michelle1" />)
  await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
})
