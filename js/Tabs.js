import React, {Component} from 'react';
import styles from '../css/style.scss';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tab extends Component {
    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {}
    }
    constructor(props) {
        super(props);

        const currProps =  this.props;

        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex,
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }

    handleTabClick = (activeIndex) => {
        const prevIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            })

            this.props.onChange({ activeIndex, prevIndex })
        }
    }
    renderTabNav = () => {
        const { children, classPrefix } = this.props;
        return (
            <TabNav 
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        )   
    }
    renderTabContent = () => {
        const { children, classPrefix } = this.props;
        return (
            <TabContent 
                key="tabcontent"
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        )
    }
    render() {
        const { className } = this.props;
        const cx = classnames(className, 'ul-tabs');
        return (
            <div className={cx}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}

export default Tab;