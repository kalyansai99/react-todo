import React, {Component} from 'react';

class InputText extends Component {
    render () {
        return (
            <input type="text" className="input-text" {...this.props} />
        );
    }
}

export default (InputText);
