import { promises as fs } from 'fs'
import getTheme from './theme'

const lightTheme = getTheme({
  style: 'light',
  name: 'Vitesse Light',
})

const darkTheme = getTheme({
  style: 'dark',
  name: 'Vitesse Dark',
})

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile('./themes/vitesse-light.json', JSON.stringify(lightTheme, null, 2)),
    fs.writeFile('./themes/vitesse-dark.json', JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
