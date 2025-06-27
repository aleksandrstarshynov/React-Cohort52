import React from 'react';

import './App.css';
import { useWindowSize } from './useWindowSize';
import PersonByWindowSize from './PersonByWindowSize';
  
function DisplaySize({ width, height }) {
  return (
      <div>
          <h1>Window size</h1>
          <p>
              The window is currently {width}px &times; {height}px.
          </p>
      </div>
  )
}

function App() {
  const { width, height } = useWindowSize()

  return (
      <div>
          <DisplaySize {...{ width, height }} />
          <PersonByWindowSize />
          <p>
              Resizing your window changes the clothes and accessories of the avatar. A
              specific avatar is shown depending whether your window is big, medium, or
              small.
          </p>
      </div>
  )
}

export default App