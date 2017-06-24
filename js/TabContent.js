import React, { Component } from 'react';

class TabContent extends Component {
    constructor(props) {
        super(props);
    }
    getTabContent = () => {
        const { panels } = this.props;
        console.log(panels)
        return panels.map( (item, index) => {
            return <li key={index}>
                {item.props.children}
            </li>
        })
    }
    render () {
        return (
            <ul>
                {this.getTabContent()}
            </ul>
        )
    }
}

export default TabContent;