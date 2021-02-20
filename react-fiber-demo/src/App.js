import './App.css';
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [state, setState] = useState(1);

  // debugger
  
  return (
    <div className='example'>
      <button style={{ display: 'block', cursor: 'pointer' }} onClick={() => setCount((count) => count + 1)}>
        Click me {count}
      </button>
      <button style={{ display: 'block', cursor: 'pointer', marginTop: 20 }} onClick={() => setState(state + 1)}>
        {state}
      </button>
    </div>
  );
}

function App() {
  const ret = (
    <div className="">
      <Example />
      <header className="">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>
      </header>
    </div>
  )
  console.log(ret)
  return ret;
}

export default App;
