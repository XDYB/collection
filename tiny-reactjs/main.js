import { TinyReact } from './tiny-react'

/** @jsx TinyReact.createElement */
function Counter() {
  const [state, setState] = TinyReact.useState(1)
  return (
    <div>
      <h1 onClick={() => setState(c => c + 1)}>
        Count: {state}
      </h1>
    </div>
  )
}

const element = (
  <Counter>
    <div>children</div>
  </Counter>
);

TinyReact.render(element, document.body)
