# Portafolio - Michelle Serrano

Portafolio hecho con React + Vite + Bootstrap.

## Comandos
```
npm install
npm run dev        # desarrollo
npm test           # pruebas
npm run coverage   # cobertura
npm run build      # producción
```

## Control de versiones (commits sugeridos)
```
git init
git add .
git commit -m "feat: estructura inicial React con Vite"
git branch -M main
git remote add origin https://github.com/michelle1/portafolio.git
git push -u origin main
```
Haz commits pequeños por componente (`feat:`, `test:`, `docs:`) y, si puedes, trabaja en ramas (`git checkout -b feat/contacto`).

## Publicación en GitHub Pages
1. Repositorio llamado `portafolio` (o cambia `base` en `vite.config.js`).
2. En GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Cada `git push` a `main` ejecuta pruebas, compila y publica.

## Correspondencia con la rúbrica
| Criterio | Dónde |
|---|---|
| HTML semántico | `header`, `nav`, `main`, `section`, `article`, `footer`, `aria-labelledby` |
| CSS externo + Bootstrap | `src/styles.css` + `bootstrap` (grid y componentes responsivos) |
| Validación de formularios | `src/validacion.js` + `ContactForm.jsx` |
| React (componentes, props, estados) | `src/components/*` |
| Repositorio y versiones | sección anterior |
| Pruebas de componentes | `src/test/components.test.jsx` |
| Testeo y cobertura | `npm run coverage` |
| API REST | `Projects.jsx` (API de GitHub) |
| GitHub Pages | `.github/workflows/deploy.yml` |
