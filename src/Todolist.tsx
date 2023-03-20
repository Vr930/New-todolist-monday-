import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <Todolist/>
        </div>
    );
}

function Todolist() {
    return (
        <div className="todolist">
            <div className="title">What to learn</div>
            <input type="text"/>
            <button>+</button>
            <ul>
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>CSS&HTML</span>
                </li>
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>Srcond</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/>
                    <span>Third</span>
                </li>
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}

export default App;
