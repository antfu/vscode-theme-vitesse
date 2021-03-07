import { getVariant } from './process'
import { getColors } from './primer'
import { dark, light } from './colors'

export default function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = hex => getVariant(hex, style)

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = options => options[style]

  const vitesse = (key: keyof typeof dark) => pick({ light: light[key], dark: dark[key] })

  const primer = getColors(style)

  const workbenchForeground = vitesse('foreground')
  const editorForeground = vitesse('foreground')

  return {
    name,
    colors: {
      focusBorder: pick({ light: primer.blue[4], dark: primer.blue[3] }),
      foreground: editorForeground,
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      'textLink.foreground': pick({ light: primer.blue[5], dark: primer.blue[6] }),
      'textLink.activeForeground': pick({ light: primer.blue[6], dark: primer.blue[7] }),
      'textBlockQuote.background': vitesse('background'),
      'textBlockQuote.border': primer.gray[2],
      'textCodeBlock.background': vitesse('background'),
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': pick({ light: '#159739', dark: primer.green[2] }),
      'button.foreground': pick({ light: primer.white, dark: primer.green[8] }),
      'button.hoverBackground': pick({ light: '#138934', dark: primer.green[3] }),

      'checkbox.background': vitesse('activeBackground'),
      'checkbox.border': pick({ light: primer.gray[3], dark: primer.white }),

      'dropdown.background': vitesse('background'),
      'dropdown.border': pick({ light: primer.gray[2], dark: primer.white }),
      'dropdown.foreground': workbenchForeground,
      'dropdown.listBackground': pick({ light: primer.white, dark: primer.gray[0] }),

      'input.background': vitesse('activeBackground'),
      'input.border': pick({ light: primer.gray[2], dark: primer.white }),
      'input.foreground': workbenchForeground,
      'input.placeholderForeground': pick({ light: primer.gray[4], dark: primer.gray[5] }),

      'badge.foreground': pick({ light: primer.blue[6], dark: primer.blue[7] }),
      'badge.background': vitesse('background'),

      'progressBar.background': primer.blue[4],

      'titleBar.activeForeground': workbenchForeground,
      'titleBar.activeBackground': vitesse('activeBackground'),
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': vitesse('background'),
      'titleBar.border': pick({ light: primer.gray[2], dark: primer.white }),

      'activityBar.foreground': workbenchForeground,
      'activityBar.inactiveForeground': primer.gray[4],
      'activityBar.background': vitesse('background'),
      'activityBarBadge.foreground': pick({ light: primer.white, dark: primer.black }),
      'activityBarBadge.background': vitesse('activeBackground'),
      'activityBar.activeBorder': '#f9826c',
      'activityBar.border': pick({ light: primer.gray[2], dark: primer.white }),

      'sideBar.foreground': primer.gray[6],
      'sideBar.background': vitesse('background'),
      'sideBar.border': pick({ light: primer.gray[2], dark: primer.white }),
      'sideBarTitle.foreground': workbenchForeground,
      'sideBarSectionHeader.foreground': workbenchForeground,
      'sideBarSectionHeader.background': vitesse('background'),
      'sideBarSectionHeader.border': pick({ light: primer.gray[2], dark: primer.white }),

      'list.hoverForeground': workbenchForeground,
      'list.inactiveSelectionForeground': workbenchForeground,
      'list.activeSelectionForeground': workbenchForeground,
      'list.hoverBackground': vitesse('activeBackground'),
      'list.inactiveSelectionBackground': vitesse('background'),
      'list.activeSelectionBackground': vitesse('activeBackground'),
      'list.inactiveFocusBackground': vitesse('background'),
      'list.focusBackground': vitesse('activeBackground'),

      'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'notificationCenterHeader.foreground': primer.gray[5],
      'notificationCenterHeader.background': vitesse('background'),
      'notifications.foreground': workbenchForeground,
      'notifications.background': vitesse('background'),
      'notifications.border': pick({ light: primer.gray[2], dark: primer.white }),
      'notificationsErrorIcon.foreground': primer.red[5],
      'notificationsWarningIcon.foreground': primer.orange[6],
      'notificationsInfoIcon.foreground': primer.blue[6],

      'pickerGroup.border': primer.gray[2],
      'pickerGroup.foreground': workbenchForeground,
      'quickInput.background': vitesse('background'),
      'quickInput.foreground': workbenchForeground,

      'statusBar.foreground': primer.gray[6],
      'statusBar.background': vitesse('background'),
      'statusBar.border': pick({ light: primer.gray[2], dark: primer.white }),
      'statusBar.noFolderBackground': vitesse('background'),
      'statusBar.debuggingBackground': auto('#f9826c'),
      'statusBar.debuggingForeground': pick({ light: primer.white, dark: primer.black }),
      'statusBarItem.prominentBackground': vitesse('activeBackground'),

      'editorGroupHeader.tabsBackground': vitesse('background'),
      'editorGroupHeader.tabsBorder': pick({ light: primer.gray[2], dark: primer.white }),
      'editorGroup.border': pick({ light: primer.gray[2], dark: primer.white }),

      'tab.activeForeground': workbenchForeground,
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': vitesse('background'),
      'tab.activeBackground': vitesse('activeBackground'),
      'tab.hoverBackground': vitesse('activeBackground'),
      'tab.unfocusedHoverBackground': vitesse('background'),
      'tab.border': pick({ light: primer.gray[2], dark: primer.white }),
      'tab.unfocusedActiveBorderTop': pick({ light: primer.gray[2], dark: primer.white }),
      'tab.activeBorder': pick({ light: primer.white, dark: primer.gray[0] }),
      'tab.unfocusedActiveBorder': pick({ light: primer.white, dark: primer.gray[0] }),
      'tab.activeBorderTop': '#f9826c',

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': workbenchForeground,
      'breadcrumb.activeSelectionForeground': primer.gray[6],
      'breadcrumbPicker.background': vitesse('background'),

      'editor.foreground': editorForeground,
      'editor.background': vitesse('background'),
      'editorWidget.background': vitesse('background'),
      'editor.foldBackground': vitesse('background'),
      'editor.lineHighlightBackground': vitesse('activeBackground'),
      'editorLineNumber.foreground': pick({ light: '#1b1f234d', dark: primer.gray[2] }),
      'editorLineNumber.activeForeground': editorForeground,
      'editorIndentGuide.background': pick({ light: '#eff2f6', dark: primer.gray[1] }),
      'editorIndentGuide.activeBackground': pick({ light: '#d7dbe0', dark: primer.gray[2] }),
      'editorWhitespace.foreground': pick({ light: primer.gray[3], dark: primer.gray[2] }),
      'editorCursor.foreground': primer.blue[7],

      'editor.findMatchBackground': pick({ light: primer.yellow[4], dark: '#ffd33d44' }),
      'editor.findMatchHighlightBackground': pick({ light: '#ffdf5d66', dark: '#ffd33d22' }),
      'editor.inactiveSelectionBackground': pick({ light: '#0366d611', dark: '#3392FF22' }),
      'editor.selectionBackground': pick({ light: '#0366d625', dark: '#3392FF44' }),
      'editor.selectionHighlightBackground': pick({ light: '#34d05840', dark: '#17E5E633' }),
      'editor.selectionHighlightBorder': pick({ light: '#34d05800', dark: '#17E5E600' }),
      'editor.wordHighlightBackground': pick({ light: '#34d05800', dark: '#17E5E600' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#34d05800', dark: '#17E5E600' }),
      'editor.wordHighlightBorder': pick({ light: '#24943e99', dark: '#17E5E699' }),
      'editor.wordHighlightStrongBorder': pick({ light: '#24943e50', dark: '#17E5E666' }),
      'editorBracketMatch.background': pick({ light: '#34d05840', dark: '#17E5E650' }),
      'editorBracketMatch.border': pick({ light: '#34d05800', dark: '#17E5E600' }),

      'editorGutter.modifiedBackground': pick({ light: primer.blue[4], dark: primer.blue[5] }),
      'editorGutter.addedBackground': pick({ light: primer.green[5], dark: primer.green[4] }),
      'editorGutter.deletedBackground': primer.red[5],

      'diffEditor.insertedTextBackground': pick({ light: '#34d05822', dark: '#28a74530' }),
      'diffEditor.removedTextBackground': pick({ light: '#d73a4922', dark: '#d73a4930' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0008' }),
      'scrollbarSlider.background': vitesse('background'),
      'scrollbarSlider.hoverBackground': vitesse('activeBackground'),
      'scrollbarSlider.activeBackground': vitesse('activeBackground'),
      'editorOverviewRuler.border': primer.white,

      'panel.background': vitesse('background'),
      'panel.border': pick({ light: primer.gray[2], dark: primer.white }),
      'panelTitle.activeBorder': '#f9826c',
      'panelTitle.activeForeground': workbenchForeground,
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'terminal.foreground': primer.gray[6],

      'gitDecoration.addedResourceForeground': primer.green[5],
      'gitDecoration.modifiedResourceForeground': primer.blue[6],
      'gitDecoration.deletedResourceForeground': primer.red[5],
      'gitDecoration.untrackedResourceForeground': primer.green[5],
      'gitDecoration.ignoredResourceForeground': primer.gray[4],
      'gitDecoration.conflictingResourceForeground': primer.orange[6],
      'gitDecoration.submoduleResourceForeground': primer.gray[4],

      'debugToolBar.background': vitesse('background'),
      'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewEditor.background': vitesse('background'),
      'peekViewResult.background': vitesse('background'),

      'settings.headerForeground': workbenchForeground,
      'settings.modifiedItemIndicator': primer.blue[4],
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: vitesse('comment'),
        },
      },
      {
        scope: ['punctuation', 'meta.tag.block.any.html', 'meta.brace.round'],
        settings: {
          foreground: vitesse('punctuation'),
        },
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.other.constant',
          'variable.language',
          'meta.definition.variable',
        ],
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: vitesse('keyword'),
        },
      },
      {
        scope: ['storage', 'storage.type'],
        settings: {
          foreground: pick({ light: primer.red[5], dark: primer.red[6] }),
        },
      },
      {
        scope: [
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java',
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          'string',
          'punctuation.definition.string',
          'string punctuation.section.embedded source',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: [
          'meta.property-name',
          'entity.other.attribute-name',
        ],
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: 'variable',
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: 'variable.other',
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: 'string source',
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: vitesse('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          fontStyle: 'bold',
          foreground: primer.green[6],
        },
      },
      {
        scope: 'support.constant',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'support.variable',
        settings: {
          foreground: vitesse('literal'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: editorForeground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: editorForeground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ['constant.other.reference.link', 'string.other.link'],
        settings: {
          foreground: primer.blue[8],
          fontStyle: 'underline',
        },
      },
    ],
  }
}
