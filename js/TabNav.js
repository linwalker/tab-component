import React, { Component } from 'react';

class TabNav extends Component {
    constructor(props) {
        super(props);
    }
    getTabNav = () => {
        const { panels } = this.props;
        return (
            <div>
                {
                    panels.map((item) => {
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </div>
        )
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