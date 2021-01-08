import { html, css, raw, svg } from 'uline';

import Signature from '../it/Signature'

export default ({meta, body}) =>html`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <base href="/" >
        <title>${meta.title}</title>
        <meta name="description" content="${meta.description}" />
        <!-- Favicon generated using realfavicongenerator.net -->
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=42">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=42">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=42">
        <link rel="manifest" href="/favicon/site.webmanifest?v=42">
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=42" color="#5a74a7">
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=42">
        <meta name="msapplication-TileColor" content="#5a74a7">
        <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=42">
        <meta name="theme-color" content="#ffffff">
        
        <link rel="stylesheet" type="text/css" href="/styles/global.css" />
        <link rel="stylesheet" type="text/css" href="/it/styles.css" />
        <script type="module" src="/it/saturation.js"></script>
      </head>
      <body>
        ${body}
        ${Signature()}
      </body>
    </html>
  `.toString()