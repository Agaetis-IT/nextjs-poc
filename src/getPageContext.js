/* eslint-disable no-underscore-dangle */
import { create, SheetsRegistry } from 'jss'
import jssPreset from 'jss-preset-default'
import { createGenerateClassName } from 'material-ui/styles'
import theme from './theme'

const createPageContext = () => ({
  theme,
  jss: create(jssPreset()),
  generateClassName: createGenerateClassName(),
  sheetsManager: new Map(),
  sheetsRegistry: new SheetsRegistry(),
})

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
