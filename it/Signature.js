// ◿. //

import { html, classify } from 'augm-it'

let Signature = classify('Signature')

export default (hue=220)=>html`
  <m4r-sh class=${Signature} data-hue=${hue} />
`

export let handlers = {
  [Signature]: {
    init(){
      let hue = +this.element.dataset.hue || 10
      let f=`font-size:2em;`
      let c = (h) => [0,1,2,3,4].map(i=>`hsla(${h-i*10},99%,45%,${1-Math.abs(1-i/2)}) ${i*25}%`).join(',')
      let style = (h)=>`font-family:monospace;${f}line-height:1;color:#fff;background:linear-gradient(90deg,${c(h)});`;
      ['    //m    ','   //4r    ','  //.sh \*  '].forEach((s,i)=>console.log('%c'+s,style(hue+20*i)));
      console.log("\nWebsite by\n%chttps://m4r.sh/\*", f);
    }
  }
}