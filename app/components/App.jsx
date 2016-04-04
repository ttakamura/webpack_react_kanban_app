import uuid  from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {id: uuid.v4(), task: 'Learn Webpack'},
                {id: uuid.v4(), task: 'Learn React'},
                {id: uuid.v4(), task: 'Do laundry'}
            ]
        };
    }

    render() {
        const notes = this.state.notes;
        return (
                <div>
                  <button onClick={this.addNote}>ADD</button>
                  <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
                </div>
        );
    }

    addNote = () => {
        this.state.notes.push({id: uuid.v4(), task: 'New Task'});
        this.setState(this.state)
    };

    editNote = (id, task) => {
        // Don't modify if trying set an empty value
        if(!task.trim()) {
            return;
        }

        const notes = this.state.notes.map(note => {
            if(note.id === id && task) {
                note.task = task;
            }
            return note;
        });
        this.setState({notes});
    };

    deleteNote = (id, e) => {
        // Avoid bubbling to edit
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    };
}
