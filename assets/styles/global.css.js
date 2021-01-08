import { css } from 'uline'

import reset from './_reset.css'
import typography from './_typography.css'

export default css`
  ${reset}
  ${typography}
  ::selection{
    background-color: var(--orange);
    color: #fff;
  }
  html,body{
    background-color: var(--surface);
    overflow-x: hidden;
  }
  .invisible{
    display: none;
    visibility: hidden;
  }
  .spacer{
    width: 100%;
    height: 1rem;
  }
  .spacer--large{
    width: 100%;
    height: 4rem;
  }
  section{
    padding: 2rem 0;
    position: relative;
  }
  section:before{
    display: block; 
    content: ""; 
    margin-top: -285px; 
    height: 285px; 
    visibility: hidden; 
  }
  .id-target{
    position: absolute;
    top: calc(1px - var(--navHeight));
    visibility: hidden;
    width: 1px;
    height: 1px;
  }
  .container{
    position: relative;
    display: block;
    margin: auto;
    width: 90%;
    max-width: 60em;
  }
  .container--small{
    position: relative;
    display: block;
    margin: auto;
    width: 84%;
    max-width: 50em;
  }
  .container--large{
    position: relative;
    display: block;
    margin: auto;
    width: 94%;
    max-width: 80em;
  }
  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`.toString()