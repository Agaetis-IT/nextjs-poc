import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { JssProvider } from 'react-jss'
import flush from 'styled-jsx/server'
import getPageContext from '../getPageContext'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>POC NextJS</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      jss={pageContext.jss}
      generateClassName={pageContext.generateClassName}
      registry={pageContext.sheetsRegistry}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ))

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString(),
          }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  }
}

export default MyDocument
