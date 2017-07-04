import React, { Component } from 'react';

class TabContent extends Component  {
    constructor(props) {
        super(props)
    }
    getTabPanels() {
        const { panels } = this.props;
        return panels.map((item) => {
            return (
                <div>{item}</div>
            )
        })
    }
    render () {
        return (
            <div>
                {this.getTabPanels()}
            </div>
        )
    }
}

export default TabContent;