import React from 'react';
import Cat from './components/CatDrop';
import Mouse from './components/MouseDrop';
import WithDraggableProp from './components/WithDraggableProp';

import './App.css';

/* const BlueButton = WithColor(Button, 'blue');
const RedButton = WithColor(Button, 'red');

const BlueButton100 = WithSize(BlueButton, 100);
const BlueButton200 = WithSize(BlueButton, 200);
const BlueButton300 = WithSize(BlueButton, 300);
const RedButton100 = WithSize(RedButton, 100);
const RedButton200 = WithSize(RedButton, 200);
const RedButton300 = WithSize(RedButton, 300);
 */

function App() {
  return (
    <div className="App">
      <WithDraggableProp render={(x, y) => <Cat x={x} y={y} />} />
      <WithDraggableProp render={(x, y) => <Mouse x={x} y={y} />} />
    </div>
  );
}

export default App;
