import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ListItem from './list-item';

class List extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            'itemsList': this.props.itemsList || []
        };
    }

    render () {
        var self = this;
        var itemsList = this.props.itemsList;
        return (
            <ul>
                { itemsList.map(function(item, index) {
                   return <ListItem key={index} itemDesc={item} allItemsList = {self.props.allItemsList} onListUpdate={self.props.onListUpdate.bind(self)} />;
                })}
            </ul>
        );
    }
}

export default (List);
