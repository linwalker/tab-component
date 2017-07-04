import React, { Component } from 'react';

class TabNav extends Component {
    constructor(props) {
        super(props);
    }
    getTabNav = () => {
        const { panels } = this.props;
        return panels.map((item, index) => {
            if (!item) { return; }
            return (
                <li key={index}>
                    {item.props.tab}
                </li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.getTabNav()}
            </ul>
        );
    }
}

export default TabNav;