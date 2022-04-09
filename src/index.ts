import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/vitesse-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Vitesse Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/vitesse-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Vitesse Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/vitesse-light-low.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Vitesse Light Low',
        low: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/vitesse-dark-low.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Vitesse Dark Low',
        low: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
