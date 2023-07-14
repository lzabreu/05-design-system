import {colors} from '@lzabreu-ui/tokens'
import {getContrast} from 'polished'

export function ColorsGrid(){
  return Object.entries(colors).map(([key, color]) =>{
    return ( 
    <div style={{backgroundColor: color, padding: '1rem'}} key={key}>
      <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', color: getContrast(color, '#fff') < 3.5 ? 'black' : 'white'}}>
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  )
  })
}