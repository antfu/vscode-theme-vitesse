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
      './themes/vitesse-black.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Vitesse Black',
        black: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/vitesse-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Vitesse Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/vitesse-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Vitesse Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
