import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/todo.css';

import TaskListModel from './models/TaskModel.js';

const store = new TaskListModel();
store.addTask('ajouter items');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

