// ◿. //

import { html, css, classify, render } from 'augm-it'
import { hueman } from 'hueman'
import Background from './Background'

let OceanScene = classify('OceanScene')

//[  hue  , sat, lum ]
let gradients = {
  dim: {
    sky: [
      [240+0  , 1.0, 0.03],
      [240+15 , 1.0, 0.06],
      [240+30 , 0.8, 0.12],
      [240+85 , 0.9, 0.13],
      [240+160, 0.5, 0.15]
    ],
    water: [
      [180+45 , 0.5 , 0.12],
      [180+45 , 0.5 , 0.15],
      [180+30 , 0.45, 0.18],
      [180+15 , 0.55, 0.20],
      [180+0  , 0.45, 0.18]
    ]
  },
  bright: {
    sky: [
      [240+0  , 1.0, 0.16],
      [240+15 , 1.0, 0.2 ],
      [240+30 , 1.0, 0.22],
      [240+85 , 1.0, 0.23],
      [240+160, 1.0, 0.25]
    ],
    water: [
      [210+0  , 0.7, 0.20],
      [210+10 , 0.7, 0.25],
      [210+30 , 0.6, 0.24],
      [210+40 , 0.7, 0.22],
      [210+70 , 0.7, 0.18]
    ]
  },
  glacier: {
    sky: [
      [20+0  , 1.0, 0.16],
      [20+100 , 1.0, 0.2 ],
      [20+150 , 1.0, 0.22],
      [20+250 , 1.0, 0.23],
      [20+300, 1.0, 0.25]
    ],
    water: [
      [340+0  , 0.3, 0.85],
      [340-40 , 0.4, 0.75],
      [340-80 , 0.5, 0.64],
      [340-120 , 0.7, 0.62],
      [340-160 , 0.7, 0.68]
    ]
  }
}

 function generateGradient(gradient){
  let percent = x => Math.round((x/(gradient.length-1))*10000)/100 + '%'
  return gradient.map((args,i) => hueman(...args) +' '+ percent(i) ).join(',')
 }

export default ()=>html`
  <div class=${OceanScene}>
    <div class=${OceanScene.sky}>
      ${ Background(5,generateGradient(gradients.bright.sky), 'top', 1.5, true, "linear") }
    </div>
    <div class=${OceanScene.sun} />
    <div class=${OceanScene.water}>
    ${ Background(3,generateGradient(gradients.bright.water), 'bottom', 2, false, "cubic-bezier(0.435, 0.150, 0.465, 0.850)") }
    </div>
  </div>
`

let shared = {
  init(){
    this.theme = 'bright'
    this.index = Object.keys(gradients).indexOf(this.theme) || 0
    this.render()
  },
  onClick(){
    let themes = Object.keys(gradients)
    this.index = (this.index + 1) % themes.length
    this.theme = themes[this.index]
    this.render()
  }
}

export let handlers = {
  [OceanScene.sky]: {
    ...shared,
    render(){
      render(
        this.element,
        Background(5,generateGradient(gradients[this.theme].sky), 'top', 1.5, true, "linear")
      )
    }
  },
  [OceanScene.water]: {
    ...shared,
    render(){
      render(
        this.element,
        Background(3,generateGradient(gradients[this.theme].water), 'bottom', 2, false, "cubic-bezier(0.44,0.15,0.47,0.85)")
      )
    }
  }
}

export let style = ()=>css`
  .${OceanScene}{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
  }
  .${OceanScene.sky}{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 60%;
    overflow: hidden;
  }
  .${OceanScene.sun}{
    position: absolute;
    top: 60%;
    left: 50%;
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
    transform: translate(-50%,-40%);
    background-color: ${hueman(30,0.8,0.7)};
    box-shadow: 0 0 6rem ${hueman(30,1,0.6,0.7)};
  }
  .${OceanScene.water}{
    position: absolute;
    left: 0;
    top: 60%;
    width: 100%;
    height: 40%;
    overflow: hidden;
  }
  .${OceanScene.water}:after{
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-40%);
    background-color: ${hueman(30,0.8,0.5,0.2)};
    box-shadow: 0 0 3rem ${hueman(30,1,0.6,0.3)};
    height: 3rem;
    width: 6rem;
    border-radius: 50%;
    overflow: hidden;
  }
` 