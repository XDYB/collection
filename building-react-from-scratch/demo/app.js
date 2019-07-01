class ColorSwatch extends Dilithium.Component {
    render() {
        const red = this.props.number % 256;
        let style = {height: '50px', width: '50px', 'background-color': `rgb(${red}, 0, 0)`};
        return (
            Dilithium.createElement('div', { style: style })
        );
    }
}

class CounterButton extends Dilithium.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        // setInterval(() => this.setState({count: this.state.count + 1}));
    }

    render() {
        return (
            Dilithium.createElement('div', {class: "CounterButton"}, [
                Dilithium.createElement('h1', {id:'h1'}, this.props.title),
                Dilithium.createElement(ColorSwatch, {number: this.state.count}),
                Dilithium.createElement('div', {id: 'Count'}, this.state.count),
            ])
        );
    }
}

Dilithium.render(
    Dilithium.createElement(CounterButton, {class: "John"}),
    document.getElementById('main'),
);
