import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.js';
import TabPane from './TabPane.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            activeIndex: parseInt(e.target.value, 10)
        });
    }
    render() {
        return (
            <div>
                <div className="operator">
                    <span>切换 Tab：</span>
                    <select value={this.state.activeIndex} onChange={this.handleChange}>
                        <option value="0">Tab 1</option>
                        <option value="1">Tab 2</option>
                        <option value="2">Tab 3</option>
                    </select>
                </div>
                <Tabs activeIndex={this.state.activeIndex} className="tab-bar">
                    <TabPane order='0' tab={'Tab-1'}>item1</TabPane>
                    <TabPane order='1' tab={'Tab-2'}>item2</TabPane>
                    <TabPane order='2' tab={'Tab-3'}>item3</TabPane>
                </Tabs>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)