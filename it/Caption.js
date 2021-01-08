import { html, css, classify } from 'augm-it'

let Caption = classify('Caption')

export default ({ title, description }) =>html`
  <div class=${Caption}>
    <p>
      <span class=${Caption.title}>
        ${title}
      </span>
      <span class=${Caption.description}>
        ${description}
      </span>
    </p>
  </div>
`

export let style = ()=>css`
  .${Caption}{
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 1rem;
    line-height: 2rem;
    background-color: #112;
  }
  .${Caption.title}{
    font-weight: bold;
    font-size: 1.5rem;
    padding-right: 1rem;
    color: #fff;
  }
  .${Caption.description}{
    color: #aac;
  }
`