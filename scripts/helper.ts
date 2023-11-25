import { getColors } from './primer'
import { VitesseThemes } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createThemeHelpers({ color, soft = false, black = false }: GetThemeOptions) {
  const pick = (options: { light: string, dark: string }) => options[color]

  const v = (key: keyof typeof VitesseThemes, op = '') => {
    let obj = black
      ? VitesseThemes[`black${capitalize(key)}`] || VitesseThemes[key]
      : soft
        ? VitesseThemes[`soft${capitalize(key)}`] || VitesseThemes[key]
        : VitesseThemes[key]

    if (typeof obj === 'string')
      obj = [obj, obj]

    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  const colors = getColors(color)

  return {
    pick,
    v,
    colors,
  }
}
