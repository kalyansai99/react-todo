import React, {Component} from 'react';
import ReactDom from 'react-dom';

class ListItem extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            'itemDesc': this.props.itemDesc
        };
    }

    getNodeIndex() {
        var index = 0;
        var itemsList = this.props.allItemsList;
        while (itemsList[index].id !== this.props.itemDesc.id) {
            index++;
        }
        return index;
    }

    moveElement (array, oldIndex, newIndex) {
        var dragElement = array.splice(oldIndex,1)[0];
        console.log(array);
        array.splice(newIndex,0,dragElement);
        console.log(array);
    }

    onDrop(event){
        var target = event.target;
        var dragElementData = JSON.parse(event.dataTransfer.getData("data"));
        var dragElemNewIndex;
        var dragElementOldIndex = dragElementData.index;

        if (target.classList.contains('list-item')) {
            dragElemNewIndex = this.getNodeIndex();
            let status = this.props.status;
            let itemsList = this.props.allItemsList;
            this.moveElement(itemsList, dragElementOldIndex, dragElemNewIndex);
            this.props.onListUpdate();
        }
        event.preventDefault();
    }

    dragStart(event){
        var dataObject = {
            'text': this.props.itemDesc.id,
            'index': this.getNodeIndex(event.target)
        };
        event.dataTransfer.setData('data', JSON.stringify(dataObject));
    }

    dragOver(event){
        event.preventDefault();
    }

    render () {
        var itemDesc = this.props.itemDesc.itemName;
        return (
            <li draggable="true"
                className="list-item"
                onDragStart={this.dragStart.bind(this)}
                onDragOver={this.dragOver.bind(this)}
                onDrop={this.onDrop.bind(this)} >{itemDesc}</li>
        );
    }
}

export default (ListItem);
