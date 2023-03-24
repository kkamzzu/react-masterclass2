import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';
import App02 from './App02';
import App03 from './App03';
import { Theme } from './theme';





ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      {/* <App02 />
    <App03 /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);