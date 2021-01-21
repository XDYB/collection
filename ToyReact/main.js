import { ToyReact, Component } from './ToyReact'

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        <div>gggggggg</div>
        {this.props.value}
      </button>
    )
  }
}

ToyReact.render(<Square />, document.body)
