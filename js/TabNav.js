import React, { Component } from 'react';

class TabNav extends Component {
    constructor(props) {
        super(props);
    }
    getTabNav = () => {
        const { panels } = this.props;
        return panels.map((item) => {
            if (!item) { return; }
            return (
                <li>
                    {item}
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                {this.getTabNav()}
            </div>
        );
    }
}

export default TabNav;