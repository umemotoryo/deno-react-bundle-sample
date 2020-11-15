import { React, ReactDOM } from './deps.ts'
import { Main } from './main.tsx'
const element = <Main />

declare global {
  namespace JSX {
     interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  ReactDOM.render(element, rootElement)
})
