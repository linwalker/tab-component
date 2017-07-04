import React, { Component } from 'react';

<<<<<<< HEAD
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
=======
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
>>>>>>> 687b3093dfedef5da84a88a8a24f6e276f71d5c9
        })
    }
    render () {
        return (
<<<<<<< HEAD
            <div>
                {this.getTabPanels()}
            </div>
=======
            <ul>
                {this.getTabContent()}
            </ul>
>>>>>>> 687b3093dfedef5da84a88a8a24f6e276f71d5c9
        )
    }
}

export default TabContent;