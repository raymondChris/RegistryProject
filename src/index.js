import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#d50000' },   //red
        secondary:  { main: '#ff9100'}  //orange
    },
    overrides: {
        MuiTableCell: {
            root: { fontSize: '14px' },
            head: { fontSize: '14px' },
            body: { fontSize: '14px' },
            numeric: { fontSize: '14px' },
        }
    }
});

ReactDOM.render(
    <MuiThemeProvider
        theme={theme}
    >
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
