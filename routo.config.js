import { minify as htmlMinifier } from 'html-minifier-terser'
import csso from 'csso'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

let minifyCSS = (opts={}) => {
  return async function(content){
    content = await postcss([autoprefixer]).process(content)
    return csso.minify(content).css
  }
}

let minifyHTML = (opts={}) => {
  opts = {
    collapseWhitespace: true,
    preserveLineBreaks: true,
    preventAttributesEscaping: true,
    removeAttributeQuotes: true,
    removeComments: true,
    html5: true,
    ...opts
  }
  return async function(content){
    return htmlMinifier(content, opts);
  }
}


export default {
  source: ['pages', 'assets'],
  destination: 'public',
  transforms: {
    html: [
      minifyHTML()
    ],
    css: [
      minifyCSS()
    ]
  }
}