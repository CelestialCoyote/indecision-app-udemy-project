//import React from 'react';
//import { createRoot } from 'react-dom/client';
//import App from './src/App.js';
//
//
//const container = document.getElementById('root');
//const root = createRoot(container);
//root.render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
