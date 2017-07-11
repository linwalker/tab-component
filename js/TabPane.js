import React, { Component } from 'react';
import classnames from 'classnames';

class TabPane extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isActive, children, classPrefix, className } = this.props;

        const classes = classnames({
            [className]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive,
        });

        return (
            <div
                role="tabpanel"
                className={classes}
                aria-hidden={!isActive}>
                {children}
            </div>
        )
    }
}

export default TabPane;