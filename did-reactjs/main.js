import { Didact } from './did-react'

// /** @jsx Didact.createElement */
// function Counter() {
//   const [state, setState] = TinyReact.useState(1)
//   return (
//     <div>
//       <h1 onClick={() => setState(c => c + 1)}>
//         Count: {state}
//       </h1>
//     </div>
//   )
// }

// const element = (
//   <Counter>
//     <div>children</div>
//   </Counter>
// );

// Didact.render(element, document.body)



/** @jsx Didact.createElement */
function App(props) {
  return (
    <div>
      <h1>Hi {props.name}</h1>
      <div>文本文案</div>
    </div>
  )
}

const element = (
  <div id="foo">
    <App name="foo" />
    <a>bar</a>
    <b />
    <div>你就不能就</div>
    <div> d's 'v'h'd'f'b'vhdjfbvhdbv</div>
  </div>
)

const container = document.getElementById("root")
Didact.render(element, container)

