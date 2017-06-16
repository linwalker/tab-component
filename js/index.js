import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                hello world yes which one is better?
                <Tabs>
                    <p>item1</p>
                    <p>item1</p>
                    <p>item1</p>
                </Tabs>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)