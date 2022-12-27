import { Fragment } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from 'setup/redux/store'
import { theme } from 'setup/theme'
import { Home } from 'scenes/pages/home/home'

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      </Provider>
    </Fragment>
  )
}
