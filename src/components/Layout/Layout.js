import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui'
import { createMuiTheme } from 'material-ui/styles'
import { indigo, purple } from 'material-ui/colors'
import Grid from "material-ui/Grid"

class Layout extends Component {
  render () {
    let { children } = this.props;
    let theme = createMuiTheme({
      primary: indigo,
      secondary: purple
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container style={{ height: '100%' }} spacing={0}>
          {children}
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default Layout
