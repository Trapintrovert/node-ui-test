import { React } from 'react'
import './index.css'
export default function App() {
  return (
    <>
      <div style={{"width":"auto","height":"auto","display":"block","padding":0,"margin":0,"background":"transparent"}}>
        <button variant="primary" disabled={false} style={{"padding":"8px 16px","fontSize":14,"fontWeight":500,"borderRadius":6,"backgroundColor":"#3b82f6","color":"#ffffff","border":"none","cursor":"pointer"}}>Click me</button>
      </div>
    </>
  )
}