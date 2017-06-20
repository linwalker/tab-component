import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.js';
import TabPane from './TabPane.js';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Tabs>
                    <TabPane tab={'Tab 1'}>item1</TabPane>
                    <TabPane tab={'Tab 2'}>item2</TabPane>
                    <TabPane tab={'Tab 3'}>item3</TabPane>
                </Tabs>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)