import React, {Component} from 'react';
import ReactDom from 'react-dom';


import InputText from './components/input-text';
import CountContainer from './components/count-container';
import ListWithHeader from './components/list-with-header';

let counter = 100;
const  getUniqueId = function (){
    return ''+(++counter);
}

class ToDoApp extends Component {

    constructor () {
        super(...arguments);
        this.state = {
            'itemsList': []
        };
    }

    addItemKeyDownHandler (event) {
        if (event.keyCode === 13) {
            var target = event.target;
            var value = target.value.replace(/\s/,'');
            target.value = '';
            if (value) {
                this.setState({
                    'itemsList': [...this.state.itemsList, {
                        'id': getUniqueId(),
                        'itemName': value,
                        'status': 'TO_DO'
                    }]
                });
            }
        }
    }

    onListUpdate(){
        this.forceUpdate();
    }

    render () {
        let self = this;
        return (
            <div className="app-page jsApp">
                <div className="header-wrapper clearfix">
                    <label htmlFor="textInput" className="label">Add Project</label>
                    <InputText id = 'textInput' onKeyDown = {self.addItemKeyDownHandler.bind(self)} />
                    <div className="keep-right clearfix">
                        <label htmlFor="textInput">Total</label><br />
                        <CountContainer itemCount = {this.state.itemsList.length} counterText = 'PROJECTS' />
                    </div>
                </div>
                <div className="lists-wrapper">
                    <ListWithHeader
                        itemsList={this.state.itemsList}
                        status="TO_DO"
                        headText = "To do"
                        counterText = "PROJECTS"
                        onListUpdate={this.onListUpdate.bind(this)} />
                    <ListWithHeader
                        itemsList={this.state.itemsList}
                        status="IN_PROGRESS"
                        headText = "In Progress"
                        counterText = "PROJECTS"
                        onListUpdate={this.onListUpdate.bind(this)} />
                    <ListWithHeader
                        itemsList={this.state.itemsList}
                        status="DONE"
                        headText = "Done"
                        counterText = "PROJECTS"
                        onListUpdate={this.onListUpdate.bind(this)} />
                </div>
            </div>
        );
    }
}

ReactDom.render(<ToDoApp />, document.getElementById('appContainer'));

export default (ToDoApp);
