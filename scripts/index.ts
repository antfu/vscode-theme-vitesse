import process from 'node:process'
import fs from 'fs-extra'
import getTheme from './theme'
import { getXtermTheme } from './extra'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/vitesse-light.json',
      getTheme({
        color: 'light',
        name: 'Vitesse Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-dark.json',
      getTheme({
        color: 'dark',
        name: 'Vitesse Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-black.json',
      getTheme({
        color: 'dark',
        name: 'Vitesse Black',
        black: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-light-soft.json',
      getTheme({
        color: 'light',
        name: 'Vitesse Light Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-dark-soft.json',
      getTheme({
        color: 'dark',
        name: 'Vitesse Dark Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-vitesse-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Vitesse Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-black.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Black',
        black: true,
      }),
      { spaces: 2 },
    ),
  ]))
