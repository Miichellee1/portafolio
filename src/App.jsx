import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Goals from './components/Goals.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

const HABILIDADES = [
  'Programación en Python', 'Lenguaje SQL', 'Bases de datos', 'Visual Studio Code',
  'Desarrollo de proyectos informáticos', 'Trabajo en equipo',
  'Resolución de problemas', 'Aprendizaje de nuevas tecnologías'
]

export default function App() {
  return (
    <>
      <Header nombre="Michelle Serrano" titulo="Estudiante de Ingeniería en Informática" />
      <main>
        <About />
        <Skills habilidades={HABILIDADES} />
        <Projects usuario="michelle1" />
        <Goals />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
