import { Didact } from './did-react'

/** @jsx Didact.createElement */
function Counter(props) {
  const [state, setState] = Didact.useState(1)
  return (
    <div id='Counter-div'>
      <h1  style="cursor: pointer;" onClick={() => {
        setState(state + 1)
      }}>
        Hi {props.name} Count: {state}
      </h1>
      <div>
        {new Array(state).fill('').map((item, idx) => <span>{idx} </span>)}
      </div>
      <Random />
      <div>文本文案</div>
    </div>
  )
}

function Random() {
  const [state, setState] = Didact.useState(1)
  return (
    <div style="cursor: pointer;font-size: xx-large;" onClick={() => {
      setState(c => c + 1)
    }}>
      {state}
    </div>
  )
}

const element = (
  <div id="foo">
    <Counter name="foo" />
    <a>bar</a>
    <b />
    <div>你就不能就</div>
    <div> d's 'v'h'd'f'b'vhdjfbvhdbv</div>
  </div>
)

const container = document.getElementById("root")
Didact.render(element, container)

