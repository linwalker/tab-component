import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                hello world yes which one is better?
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)