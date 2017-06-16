import React, {Component} from 'react';
import TabNav from './TabNav';

class Tab extends Component {
    constructor(props) {
        super(props);
    }
    renderTabNav = () => {
        const { children } = this.props;
        return (
            <TabNav 
                panels={children}
            />
        )   
    }
    render() {
        return (
            <div>
                {this.renderTabNav()}
            </div>
        )
    }
}

export default Tab;