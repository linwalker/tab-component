import React, {Component} from 'react';
import TabNav from './TabNav';
import TabContent from './TabContent';
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
    renderTabContent = () => {
        const { children } = this.props;
        return (
            <TabContent 
                panels={children}
            />
        )
    }
    render() {
        return (
            <div>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}

export default Tab;