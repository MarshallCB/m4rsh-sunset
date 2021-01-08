import { classify, html, css } from 'augm-it'

let FullScreen = classify('FullScreen')

export default (slot) => html`<div>${slot}</div>`

export let style = () => css`
  .${FullScreen}{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`