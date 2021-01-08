import { css } from 'uline'

export default css`
  @font-face {
    font-family: 'Source-Sans-Pro';
    src: url('/fonts/sourcesanspro-regular.woff2') format('woff2');
    font-weight: normal;
  }
  html,body{
    --font: 'Source-Sans-Pro';
    --bold-font: 'Source-Sans-Pro'; 
    font-family: "Source-Sans-Pro";
    font-size: 16px;
    color: var(--ink);
    line-height: 1.5;
  }
  .h1,.h2,.h3,.h4,.h5,.h6{
    font-family: "Source-Sans-Pro"
  }
  .h1{
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .h2{
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 1rem;
  }
  .h3{
    font-size: 1.25rem;
    line-height: 1.2;
  }
  .h4{
    font-size: 1.1rem;
    line-height: 1.36;
  }
  .p{
    font-size: 1rem;
    line-height: 1.5;
  }
  .p2{
    font-size: 0.875rem;
    line-height: 1.71;
  }
`