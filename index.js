export class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hi</h1>
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));