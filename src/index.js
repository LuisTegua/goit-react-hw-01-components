import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import User from "./data/user.json";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={ User } />
  </React.StrictMode>
);
