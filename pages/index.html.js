import { html, svg, raw, css } from 'uline'
import document from './_document'
import OceanScene from '../it/OceanScene'
import Caption from '../it/Caption'
import FullScreen from '../it/FullScreen'

export default document({
  meta: {
    title: "Infinite Sunset",
    description: "Web Art by @MarshallCB // m4r.sh",
    url: "/"
  },
  body:html`
    ${FullScreen(
      OceanScene()
    )}
    ${ Caption({
      title: "Infinite Sunset",
      description: "Experiment with CSS transforms, gradients, and procedurally generated keyframes"
    }) }
  `
})