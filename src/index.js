import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles.css'
import registerServiceWorker from './registerServiceWorker';
import Dexie from 'dexie'

const DB_NAME = 'FancyTodoDatabase';
const MOUNT_NODE = document.getElementById('root');
const db = new Dexie(DB_NAME);
db.version(1).stores({
  todos: `++id,title,date,priority`
});

ReactDOM.render(<App db={db} />, MOUNT_NODE);
registerServiceWorker();
