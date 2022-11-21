import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from '@/pages/home'
import '@/styles/index.less'

function Hello() {
  return (
    <div>
      Hello world!
      <Home />
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<Hello />)
