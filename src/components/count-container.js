import React, {Component} from 'react';
import ReactDom from 'react-dom';

class CountContainer extends Component {
    render () {
        var counterText = this.props.counterText;
        return (
            <div className = "counter-container">
                <span className="count">{this.props.itemCount}</span>
                <br />
                <span className="text">{counterText}</span>
            </div>
        );
    }
}

export default (CountContainer);
