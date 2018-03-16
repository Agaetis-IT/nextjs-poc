import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import { JssProvider } from 'react-jss'
import CssBaseline from 'material-ui/CssBaseline'
import getPageContext from '../getPageContext'
import Layout from '../components/Layout'

const withRoot = () => Component => {
  class WithRoot extends React.Component {
    constructor(props, context) {
      super(props, context)

      this.pageContext = this.props.pageContext || getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    pageContext = null

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <JssProvider
          jss={this.pageContext.jss}
          generateClassName={this.pageContext.generateClassName}
          registry={this.pageContext.sheetsRegistry}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layout>
              <Component {...this.props} />
            </Layout>
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
  }

  WithRoot.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx)
    }

    return {}
  }

  return WithRoot
}

export default withRoot
