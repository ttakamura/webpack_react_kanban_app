import uuid  from 'node-uuid';
import React from 'react';

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
        this.addNote = this.addNote.bind(this);
    }

    render() {
        const notes = this.state.notes;
        return (
                <div>
                  <button onClick={this.addNote}>ADD</button>
                  <ul>{notes.map(note =>
                    <li key={note.id}>{note.task}</li>
                  )}</ul>
                </div>
        );
    }

    addNote() {
        this.state.notes.push({id: uuid.v4(), task: 'New Task'});
        this.setState(this.state)
    }
}
