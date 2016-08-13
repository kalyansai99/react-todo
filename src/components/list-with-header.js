import React, {Component} from 'react';
import ReactDom from 'react-dom';
import List from './list';
import CountContainer from './count-container';

class ListWithHeader extends Component {
    constructor () {
        super(...arguments);
        let itemsList = this.props.itemsList || [];
        this.state = {
            'itemsList': itemsList
        }
    }

    onDrop(event){
        let dragElementData = JSON.parse(event.dataTransfer.getData("data"));
        let itemId = dragElementData.text;
        let draggedItem = this.props.itemsList.find(item => item.id === itemId);
        if(draggedItem && draggedItem.status !== this.props.status){
            draggedItem.status = this.props.status;
            this.props.onListUpdate();
        }
        event.preventDefault();
    }

    onDragOver(event){
        event.preventDefault();
    }

    render () {
        let itemsList = this.props.itemsList || [];
        let headText = this.props.headText;
        let status = this.props.status;
        let filteredItems = (itemsList.filter(item => item.status === status));
        return (
            <div className="list-wrapper" onDrop={this.onDrop.bind(this)} onDragOver={this.onDragOver.bind(this)}>
                <div className="header-wrapper clearfix">
                    <h3 className="head-text">{headText}</h3>
                    <CountContainer itemCount = {filteredItems.length} counterText = {this.props.counterText} />
                </div>
                <div className="list-container">
                    <List itemsList = {filteredItems} allItemsList = {itemsList} onListUpdate={this.props.onListUpdate.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default (ListWithHeader);
