import { html, css, classify, uid } from 'augm-it'
import { hueman } from 'hueman'

let Background = classify('Background')

export default (num=4,gradient,direction='bottom',duration=3,striated=false, timing="")=>{
  let id = uid()
  num++;
  function frame(x){
    return css`
      transform: translate(
        ${(striated ? (x % 2 == 0 ? x : (num + 1 - x)) : x) * -100 / (num + 2)}%,
        ${ -200 + (x*100) }%
      )
    `
  }
  let [left, right] = direction === 'bottom' || direction === 'top' ? ["left","right"] : ["top","bottom"]
  let barStyles = Array.from(Array(num+1)).reduce((agg,val,i) => {
    return agg+css`
      @keyframes ${Background['animation'+i+id]}{
        0% { ${frame(i)} }
        100% { ${frame(striated ? i+2 : i+1)} }
      }
      .${Background['bar'+i+id]}{
        ${frame(i)};
        width: ${(num+2) * 100}%;
        height: ${100 / (num-1)}%;
        animation: ${Background['animation'+i+id]} ${striated ? duration*2 : duration}s infinite ${timing} ${direction === 'top' ? 'reverse' : ''};
        background: linear-gradient(to ${striated ? (i % 2 == 0 ? right : left) : right},${gradient});
      }
    `
  },'')

  return (html`
    <div class=${Background} style=${`
      background: linear-gradient(to bottom,${gradient});`}>
      ${Array.from(Array(num+1)).map((_,i) => html`
        <div class=${Background['bar'+i+id]} />
      `)}
      <style>${barStyles}</style>
    </div>
  `)
}

export let style = ()=>css`
  .${Background}{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
  }
  .${Background}>div{
    position: absolute;
    left: 0;
    top: 0;
  }
` 