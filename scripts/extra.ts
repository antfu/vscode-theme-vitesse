import type { ITheme } from 'xterm'
import type { GetThemeOptions } from './helper'
import { createThemeHelpers } from './helper'

export function getXtermTheme(options: GetThemeOptions): ITheme {
  const {
    pick,
    v,
  } = createThemeHelpers(options)

  return {
    background: v('background'),
    foreground: v('foreground'),
    cursor: v('foreground'),
    selectionBackground: v('selectionBackground'),
    selectionInactiveBackground: v('selectionBackgroundInActive'),
    brightBlack: pick({ light: '#aaaaaa', dark: '#777777' }),
    brightBlue: v('blue'),
    brightCyan: v('cyan'),
    brightGreen: v('green'),
    brightMagenta: v('magenta'),
    brightRed: v('red'),
    brightWhite: pick({ light: '#dddddd', dark: '#ffffff' }),
    brightYellow: v('yellow'),
    black: v('background'),
    blue: v('blue'),
    cyan: v('cyan'),
    green: v('green'),
    magenta: v('magenta'),
    red: v('red'),
    white: v('foreground'),
    yellow: v('yellow'),
  }
}
